<?php

namespace App\Services;

use App\Models\Unidade;
use App\Models\PlanoEntrega;
use App\Models\Usuario;
use App\Models\StatusJustificativa;
use App\Exceptions\ServerException;
use App\Models\Programa;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use DateTime;
use Throwable;

class PlanoEntregaService extends ServiceBase
{
    public $unidades = []; /* Buffer de unidades para funções que fazem consulta frequentes em unidades */

    public function afterStore($planoEntrega, $action)
    {
        $usuario = parent::loggedUser();
        switch ($action) {
            case ServiceBase::ACTION_INSERT:
                // (RN_PENT_A) Quando um Plano de Entregas é criado adquire automaticamente o status INCLUIDO;
                $this->status->atualizaStatus($planoEntrega, 'INCLUIDO', 'O Plano de Entrega foi criado nesta data.');
                break;
            case ServiceBase::ACTION_EDIT:
                //(RN_PENT_AE) Se a alteração for feita com o plano de entregas no status ATIVO e o usuário logado possuir a capacidade "MOD_PENT_EDT_ATV_HOMOL", o plano de entregas voltará ao status "HOMOLOGANDO";
                //(RN_PENT_AF) Se a alteração for feita com o plano de entregas no status ATIVO e o usuário logado possuir a capacidade "MOD_PENT_EDT_ATV_ATV", o plano de entregas permanecerá no status "ATIVO";
                if ($planoEntrega->status == 'ATIVO') {
                    if ($usuario->hasPermissionTo('MOD_PENT_EDT_ATV_ATV')) {
                        $this->status->atualizaStatus($planoEntrega, 'ATIVO', 'O plano foi alterado nesta data e permaneceu no status ATIVO porque o usuário logado possui a capacidade MOD_PENT_EDT_ATV_ATV.');
                    } else if ($usuario->hasPermissionTo('MOD_PENT_EDT_ATV_HOMOL')) {
                        $this->status->atualizaStatus($planoEntrega, 'HOMOLOGANDO', 'O plano foi alterado nesta data e retornou ao status AGUARDANDO HOMOLOGAÇÃO porque o usuário logado possui a capacidade MOD_PENT_EDT_ATV_HOMOL.');
                    }
                    // (RN_PENT_M) Qualquer alteração, depois de o Plano de Entregas ser homologado, precisa ser notificada 
                    // ao gestor da Unidade-pai (Unidade A) ou à pessoa que homologou. Essa comunicação sobre eventuais ajustes, 
                    // não se aplica à Unidade Instituidora, ou seja, alterações realizadas em planos de entregas de unidades instituidoras não precisam ser notificadas à sua Unidade-pai;
                    $unidadePai = $planoEntrega->unidade->unidadePai;
                    if (!empty($unidadePai->id) && !$planoEntrega->unidade->instituidora) {
                        $destinatarios = array_filter([$unidadePai->gestor ? $unidadePai->gestor->usuario : null, $unidadePai->gestorSubstituto ? $unidadePai->gestorSubstituto->usuario : null, $unidadePai->gestorDelegado ? $unidadePai->gestorDelegado->usuario : null]);
                        $usuarioHomologou = StatusJustificativa::where('codigo', 'ATIVO')
                            ->where('plano_entrega_id', $planoEntrega->id)
                            ->where('justificativa', 'like', '%homologado nesta data%')
                            ->orderByDesc('created_at')->first()->usuario;
                        if (!empty($usuarioHomologou->id) && !in_array($usuarioHomologou, $destinatarios)) array_push($destinatarios, $usuarioHomologou);
                        $this->notificacoesService->send("PENT_ALTERACAO", [
                            "destinatarios" => $destinatarios,
                            "plano_entrega" => $planoEntrega,
                            "servidor" => $usuario
                        ]);
                    }
                }
                break;
        }
    }

    public function arquivar($data, $unidade)
    { // ou 'desarquivar'
        try {
            DB::beginTransaction();
            $planoEntrega = PlanoEntrega::find($data["id"]);
            if (!empty($planoEntrega)) {
                $this->update([
                    "id" => $planoEntrega->id,
                    "data_arquivamento" => $data["arquivar"] ? $this->unidadeService->nota() : null
                ], $unidade, false);
            } else {
                throw new ServerException("ValidatePlanoTrabalho", "Plano de Entrega não encontrado!");
            }
            DB::commit();
        } catch (Throwable $e) {
            DB::rollback();
            throw $e;
        }
        return true;
    }

    public function avaliar($data, $unidade)
    {
        try {
            DB::beginTransaction();
            $planoEntrega = PlanoEntrega::find($data["id"]);
            // IMPLEMENTAR CODIGO DE AVALIAÇÃO DO PLANO DE ENTREGAS
            $this->status->atualizaStatus($planoEntrega, 'AVALIADO', 'A avaliação do plano de entregas foi realizada nesta data.');
            // (RN_PENT_O) ... sugerir arquivamento automático (vide RI_PENT_A);
            if ($data["arquivar"]) $this->update(["id" => $planoEntrega->id, "data_arquivamento" => Carbon::now()], $unidade, false);
            DB::commit();
        } catch (Throwable $e) {
            DB::rollback();
            throw $e;
        }
        return true;
    }

    /**
     * Retorna um array com várias informações sobre o plano repassado como parâmetro que serão auxiliares na definição das permissões para as diversas operações possíveis com um Plano de Entregas.
     * Se o plano recebido como parâmetro possuir ID, as informações devolvidas serão baseadas nos dados armazenados no banco. Caso contrário, as informações devolvidas serão baseadas nos dados
     * recebidos na chamada do método. 
     * @param array $entity     Um array com os dados de um plano já existente ou que esteja sendo criado.
     * @return array
     */
    public function buscaCondicoes(array $entity): array
    {
        $planoEntrega = !empty($entity['id']) ? PlanoEntrega::with('entregas')->find($entity['id'])->toArray() : $entity;
        $planoEntregaPai = !empty($planoEntrega['plano_entrega_id']) ? PlanoEntrega::find($planoEntrega['plano_entrega_id']) : null;
        $planoEntrega['unidade'] = !empty($planoEntrega['unidade_id']) ? Unidade::find($planoEntrega['unidade_id'])->toArray() : null;
        $planoEntrega['unidade']['planosEntrega'] = !empty($planoEntrega['unidade']) ? PlanoEntrega::where('unidade_id', $planoEntrega['unidade_id'])->get()->toArray() : null;
        $result = [];
        $result["planoValido"] = $this->isPlanoEntregaValido($planoEntrega);
        $result["planoAtivo"] = $this->isPlano("ATIVO", $planoEntrega);
        $result["planoConcluido"] = $this->isPlano("CONCLUIDO", $planoEntrega);
        $result["planoPaiAtivo"] = $planoEntrega['plano_entrega_id'] ? $this->isPlano("ATIVO", $planoEntregaPai->toArray()) : false;
        $result["planoHomologando"] = $this->isPlano("HOMOLOGANDO", $planoEntrega);
        $result["planoIncluido"] = $this->isPlano("INCLUIDO", $planoEntrega);
        $result["planoProprio"] = $planoEntrega['plano_entrega_id'] == null;
        $result["planoVinculado"] = $planoEntrega['plano_entrega_id'] != null;
        $result["nrEntregas"] = empty($planoEntrega['entregas']) ? 0 : count($planoEntrega['entregas']);
        $result["planoArquivado"] = empty($planoEntrega['id']) ? false : PlanoEntrega::find($planoEntrega['id'])->data_arquivamento != null;
        $result["planoSuspenso"] = $this->isPlano("SUSPENSO", $planoEntrega);
        $result["planoStatus"] = empty($planoEntrega['id']) ? null : PlanoEntrega::find($planoEntrega['id'])->status;
        $result["gestorUnidadePlano"] = $this->usuario->isGestorUnidade($planoEntrega['unidade_id']);
        $result["gestorUnidadePaiUnidadePlano"] = !empty($planoEntrega['unidade']['unidade_pai_id']) && $this->usuario->isGestorUnidade($planoEntrega['unidade']['unidade_pai_id']);
        $result["gestorLinhaAscendenteUnidadePlano"] = !!array_filter($this->unidade->linhaAscendente($planoEntrega['unidade_id']), fn ($u) => $this->usuario->isGestorUnidade($u));
        $result["unidadePlanoPaiEhUnidadePaiUnidadePlano"] = $planoEntrega['plano_entrega_id'] ? $planoEntregaPai->unidade_id == $planoEntrega['unidade']['unidade_pai_id'] : false;
        $result["unidadePlanoEhLotacao"] = $this->usuario->isLotacao(null, $planoEntrega['unidade_id']);
        $result["unidadePaiUnidadePlanoEhLotacao"] = !empty($planoEntrega['unidade']['unidade_pai_id']) && $this->usuario->isLotacao(null, $planoEntrega['unidade']['unidade_pai_id']);
        $result["unidadePlanoEhAlgumaLotacaoUsuario"] = in_array($planoEntrega['unidade_id'], array_map(fn ($u) => $u['id'], $this->usuario->loggedUser()->unidades->toArray()));
        $result["unidadePlanoEhPaiAlgumaLotacaoUsuario"] = $this->usuario->loggedUser()->unidades->map(fn ($u) => $u->id)->map(fn ($ul) => Unidade::find($ul)->unidade_id)->contains($planoEntrega['unidade_id']);
        $result["unidadePlanoPossuiPlanoAtivoMesmoPeriodoPlanoPai"] = !!array_filter($planoEntrega['unidade']['planosEntrega'], fn ($p) => $this->isPlano('ATIVO', $p) && !empty($planoEntrega) && !empty($planoEntregaPai) && UtilService::intersect($planoEntrega['data_inicio'], $planoEntrega['data_fim'], $planoEntregaPai->data_inicio, $planoEntregaPai->data_fim));
        $result["lotadoLinhaAscendenteUnidadePlano"] = $this->usuario->isLotadoNaLinhaAscendente($planoEntrega['unidade_id']);
        $result["unidadePlanoEstahLinhaAscendenteAlgumaLotacaoUsuario"] = in_array($planoEntrega['unidade_id'], array_values(array_unique(array_reduce(array_map(fn ($ul) => $this->unidade->linhaAscendente($ul), array_map(fn ($u) => $u['id'], $this->usuario->loggedUser()->unidades->toArray())), 'array_merge', array()))));
        return $result;
    }

    public function cancelarAvaliacao($data, $unidade)
    {

        try {
            DB::beginTransaction();
            $planoEntrega = PlanoEntrega::find($data["id"]);
            $this->status->atualizaStatus($planoEntrega, 'CONCLUIDO', 'A avaliação do plano de entregas foi cancelada nesta data.');
            DB::commit();
        } catch (Throwable $e) {
            DB::rollback();
            throw $e;
        }
        return true;
    }

    public function cancelarConclusao($data, $unidade)
    {
        // (RN_PENT_J) Uma Unidade de execução poderá ter mais de um Plano de Entregas com status 'HOMOLOGANDO' e 'ATIVO', desde que sejam para períodos diferentes;
        $this->verificaUnicidadeMesmaUnidade('ATIVO', $data);
        try {
            DB::beginTransaction();
            $planoEntrega = PlanoEntrega::find($data["id"]);
            $this->status->atualizaStatus($planoEntrega, 'ATIVO', 'A conclusão do plano de entregas foi cancelada nesta data.');
            DB::commit();
        } catch (Throwable $e) {
            DB::rollback();
            throw $e;
        }
        return true;
    }

    public function cancelarHomologacao($data, $unidade)
    {
        // (RN_PENT_J) Uma Unidade de execução poderá ter mais de um Plano de Entregas com status 'HOMOLOGANDO' e 'ATIVO', desde que sejam para períodos diferentes;
        $this->verificaUnicidadeMesmaUnidade('HOMOLOGANDO', $data);
        try {
            DB::beginTransaction();
            $planoEntrega = PlanoEntrega::find($data["id"]);
            $this->status->atualizaStatus($planoEntrega, 'HOMOLOGANDO', 'A homologação do plano de entregas foi cancelada nesta data.');
            DB::commit();
        } catch (Throwable $e) {
            DB::rollback();
            throw $e;
        }
        return true;
    }

    public function cancelarPlano($data, $unidade)
    {

        try {
            DB::beginTransaction();
            $planoEntrega = PlanoEntrega::find($data["id"]);
            $this->status->atualizaStatus($planoEntrega, 'CANCELADO', 'O Plano de entregas foi cancelado nesta data.');
            DB::commit();
        } catch (Throwable $e) {
            DB::rollback();
            throw $e;
        }
        return true;
    }

    public function concluir($data, $unidade)
    {
        try {
            DB::beginTransaction();
            $planoEntrega = PlanoEntrega::find($data["id"]);
            $this->status->atualizaStatus($planoEntrega, 'CONCLUIDO', 'O plano de entregas foi concluído nesta data.');
            DB::commit();
        } catch (Throwable $e) {
            DB::rollback();
            throw $e;
        }
        return true;
    }

    /**
     * Informa se o plano de entregas repassado como parâmetro está em curso.
     * Um Plano de Entregas está EM CURSO quando é um plano VÁLIDO e possui status ATIVO;
     * @param PlanoEntrega $planoEntrega  
     */
    public function emCurso(PlanoEntrega $plano): bool
    {
        $planoEntrega = !empty($plano['id']) ? PlanoEntrega::find($plano['id']) : $plano;
        return empty($plano['id']) ? false : ($this->isPlanoEntregaValido($plano) && $planoEntrega->status == 'ATIVO');
    }

    public function homologar($data, $unidade)
    {
        // (RN_PENT_J) Uma Unidade de execução poderá ter mais de um Plano de Entregas com status 'HOMOLOGANDO' e 'ATIVO', desde que sejam para períodos diferentes;
        $this->verificaUnicidadeMesmaUnidade('ATIVO', $data);
        try {
            DB::beginTransaction();
            $planoEntrega = PlanoEntrega::find($data["id"]);
            $this->status->atualizaStatus($planoEntrega, 'ATIVO', 'O plano de entregas foi homologado nesta data.');
            DB::commit();
        } catch (Throwable $e) {
            DB::rollback();
            throw $e;
        }
        return true;
    }

    /**
     * Informa o status do plano de entregas repassado como parâmetro.
     * O Plano de Entregas precisa ser VÁLIDO.
     * @param string $status
     * @param array $planoEntrega  
     */
    public function isPlano($status, $plano): bool
    {
        $planoEntrega = !empty($plano['id']) ? PlanoEntrega::find($plano['id']) : $plano;
        return empty($plano['id']) ? false : ($this->isPlanoEntregaValido($plano) && $planoEntrega->status == $status);
    }

    /**
     * Informa se o plano de entregas repassado como parâmetro é um plano válido.
     * Um Plano de Entregas é válido se não foi deletado, nem arquivado e não está no status de cancelado.
     * @param array $planoEntrega  
     */
    public function isPlanoEntregaValido($plano): bool
    {
        $planoEntrega = !empty($plano['id']) ? PlanoEntrega::where('id', $plano['id'])->first() : $plano;
        return empty($plano['id']) ? false : (!$planoEntrega->trashed() && !$plano['data_arquivamento'] && $planoEntrega->status != 'CANCELADO');
    }

    public function liberarHomologacao($data, $unidade)
    {
        // (RN_PENT_J) Uma Unidade de execução poderá ter mais de um Plano de Entregas com status 'HOMOLOGANDO' e 'ATIVO', desde que sejam para períodos diferentes;
        $this->verificaUnicidadeMesmaUnidade('HOMOLOGANDO', $data);
        try {
            DB::beginTransaction();
            $planoEntrega = PlanoEntrega::find($data["id"]);
            $this->status->atualizaStatus($planoEntrega, 'HOMOLOGANDO', 'O plano de entregas foi liberado para homologação nesta data.');
            DB::commit();
        } catch (Throwable $e) {
            DB::rollback();
            throw $e;
        }
        return true;
    }

    public function metadados($planoEntrega)
    {
        if (empty($this->unidades[$planoEntrega->unidade_id])) {
            $this->unidades[$planoEntrega->unidade_id] = Unidade::find($planoEntrega->unidade_id);
        }
        $result = [
            "incluido" => $planoEntrega->status == 'INCLUIDO',
            "homologando" => $planoEntrega->status == 'HOMOLOGANDO',
            "ativo" => $planoEntrega->status == 'ATIVO',
            "suspenso" => $planoEntrega->status == 'SUSPENSO',
            "concluido" => $planoEntrega->status == 'CONCLUIDO',
            "avaliado" => $planoEntrega->status == 'AVALIADO',
            "arquivado" => !empty($planoEntrega->data_arquivamento),
            "cancelado" => $planoEntrega->status == 'CANCELADO'
        ];
        return $result;
    }

    public function proxyQuery($query, &$data)
    {
        $where = [];
        //  (RI_PENT_5) Garante que, se não houver um interesse específico na data de arquivamento, só retornarão os planos de entrega não arquivados. Se não houver interesse em um status
        //  específico, incluir todos os status exceto os cancelados.
        $result = $this->extractWhere($data, "incluir_arquivados");
        if (empty($result) || !$result[2]) array_push($where, ["data_arquivamento", "==", null]);
        $result = $this->extractWhere($data, "status");
        array_push($where, empty($result) ? ["status", "!=", 'CANCELADO'] : $result);
        $data["where"] = $where;
        return $data;
    }

    public function proxyRows($rows)
    {
        foreach ($rows as $row) {
            $row->metadados = $this->metadados($row);
        }
        return $rows;
    }

    public function proxyStore(&$planoEntrega, $unidade, $action)
    {
        if ($action == ServiceBase::ACTION_INSERT) {
            $planoEntrega["criacao_usuario_id"] = parent::loggedUser()->id;
        }
        return $planoEntrega;
    }

    public function reativar($data, $unidade)
    {
        // (RN_PENT_J) Uma Unidade de execução poderá ter mais de um Plano de Entregas com status 'HOMOLOGANDO' e 'ATIVO', desde que sejam para períodos diferentes;
        $this->verificaUnicidadeMesmaUnidade('ATIVO', $data);
        try {
            DB::beginTransaction();
            $planoEntrega = PlanoEntrega::find($data["id"]);
            $this->status->atualizaStatus($planoEntrega, 'ATIVO', 'O plano de entregas foi reativado nesta data.');
            DB::commit();
        } catch (Throwable $e) {
            DB::rollback();
            throw $e;
        }
        return true;
    }

    public function retirarHomologacao($data, $unidade)
    {

        try {
            DB::beginTransaction();
            $planoEntrega = PlanoEntrega::find($data["id"]);
            $this->status->atualizaStatus($planoEntrega, 'INCLUIDO', 'O plano de entregas foi retirado de homologação nesta data.');
            DB::commit();
        } catch (Throwable $e) {
            DB::rollback();
            throw $e;
        }
        return true;
    }

    public function suspender($data, $unidade)
    {

        try {
            DB::beginTransaction();
            $planoEntrega = PlanoEntrega::find($data["id"]);
            $this->status->atualizaStatus($planoEntrega, 'SUSPENSO', 'O plano de entregas foi suspenso nesta data.');
            DB::commit();
        } catch (Throwable $e) {
            DB::rollback();
            throw $e;
        }
        return true;
    }

    /**
     *  Verifica se algumas condições estão atendidas, antes de realizar a inserção/alteração do Plano de Entregas: 
     *  - as datas do Plano de Entregas devem se encaixar na duração do Programa de Gestão;
     *  - as datas das entregas do Plano de Entregas devem se encaixar na duração do Programa de Gestão;
     *  - após criado um Plano de Entregas, os seguintes campos não poderão mais ser alterados: unidade_id, programa_id; (RN_PENT_K)
     */
    public function validateStore($dataOrEntity, $unidade, $action)
    {
        /*  (RN_PENT_Z) INCLUIR/INSERIR
            - o usuário logado precisa possuir a capacidade "MOD_PENT_INCL", e:
                - o usuário logado precisa ser gestor da Unidade do plano (Unidade B), ou gestor da sua Unidade-pai (Unidade A)(RN_PENT_B); ou
                - o usuário precisa possuir a atribuição de HOMOLOGADOR DE PLANO DE ENTREGA para a Unidade-pai (Unidade A) da Unidade do plano (Unidade B) e possuir a capacidade "MOD_PENT_EDT_FLH"; ou
                - o usuário precisa possuir também a capacidade "MOD_PENT_QQR_UND" (independente de qualquer outra condição);
        */
        $usuario = Usuario::find(parent::loggedUser()->id);
        $dataOrEntity['unidade'] = Unidade::find($dataOrEntity['unidade_id'])->toArray();
        $condicoes = $this->buscaCondicoes($dataOrEntity);
        $condition1 = $condicoes['gestorUnidadePlano'] || $condicoes['gestorUnidadePaiUnidadePlano'];
        $condition2 = !empty($dataOrEntity['unidade']['unidade_pai_id']) && UsuarioService::isIntegrante('HOMOLOGADOR_PLANO_ENTREGA', $dataOrEntity['unidade']['unidade_pai_id']) && $usuario->hasPermissionTo('MOD_PENT_EDT_FLH');
        $condition3 = $usuario->hasPermissionTo('MOD_PENT_QQR_UND');
        if (!$condition3 && !($condition1 || $condition2)) throw new ServerException("ValidateUsuario", "\nO usuário logado precisa atender a pelo menos uma das seguintes condições:\n" .
            "1. ser um dos gestores da unidade do plano ou da sua unidade-pai;\n" .
            "2. ser homologador de plano de entrega da unidade-pai do plano e possuir a capacidade MOD_PENT_EDT_FLH;\n" .
            "3. possuir a capacidade MOD_PENT_QQR_UND.\n[RN_PENT_Z]");
        if (!$this->verificaDuracaoPlano($dataOrEntity) || !$this->verificaDatasEntregas($dataOrEntity)) throw new ServerException("ValidatePlanoEntrega", "O prazo das datas não satisfaz a duração estipulada no programa.");
        if ($action == ServiceBase::ACTION_EDIT) {
            /*  
                (RN_PENT_L) Para ALTERAR um plano de entregas:
                    - O usuário logado precisa possuir a capacidade "MOD_PENT_EDT", o plano de entregas precisa ser válido (ou seja, nem deletado, nem arquivado e com status diferente de 'CANCELADO'), e:
                        - estar com o status INCLUIDO ou HOMOLOGANDO, e o usuário logado precisa ser gestor da Unidade do plano, ou esta ser sua Unidade de lotação; ou
                        - o usuário logado precisa possuir a capacidade "MOD_PENT_EDT_FLH" e ser gestor da Unidade-pai (Unidade A) da Unidade do plano (Unidade B) (RN_PENT_C); ou
                        - o usuário logado precisa possuir a atribuição de HOMOLOGADOR DE PLANO DE ENTREGA para a Unidade-pai (Unidade A) da Unidade do plano (Unidade B); ou
                        - o Plano de Entregas precisa estar com o status ATIVO, a Unidade do plano precisa ser a Unidade de lotação do usuário logado, e ele possuir a capacidade "MOD_PENT_EDT_ATV_HOMOL" (RN_PENT_AE) ou "MOD_PENT_EDT_ATV_ATV" (RN_PENT_AF); ou
                        - o usuário precisa possuir também a capacidade "MOD_PENT_QQR_UND" (independente de qualquer outra condição);
            */
            if (!$condicoes['planoValido']) throw new ServerException("ValidatePlanoEntrega", "O plano de entregas não é válido, ou seja, foi apagado, cancelado ou arquivado. [RN_PENT_L]");
            $condition1 = ($condicoes['planoIncluido'] || $condicoes['planoHomologando']) && ($condicoes['gestorUnidadePlano'] || $condicoes['unidadePlanoEhLotacao']);
            $condition2 = $usuario->hasPermissionTo("MOD_PENT_EDT_FLH") && $condicoes['gestorUnidadePaiUnidadePlano'];
            $condition3 = !empty($data['entity']['unidade']['unidade_pai_id']) && UsuarioService::isIntegrante('HOMOLOGADOR_PLANO_ENTREGA', $data['entity']['unidade']['unidade_pai_id']);
            $condition4 = $condicoes['planoAtivo'] && $condicoes['unidadePlanoEhLotacao'] && $usuario->hasPermissionTo(['MOD_PENT_EDT_ATV_HOMOL', 'MOD_PENT_EDT_ATV_ATV']);
            $condition5 = $usuario->hasPermissionTo('MOD_PENT_QQR_UND');
            if (!$condition5 && !($condition1 || $condition2 || $condition3 || $condition4)) throw new ServerException("ValidatePlanoEntrega", "\nAo menos uma das seguintes condições precisa ser atendida:\n" .
                "1. o plano de entregas estar com o status INCLUIDO ou HOMOLOGANDO, e o usuário logado ser um dos gestores da unidade executora ou nela ser lotado;\n" .
                "2. o usuário logado possuir a capacidade MOD_PENT_EDT_FLH e ser um dos gestores da unidade-pai do plano de entregas;\n" .
                "3. o usuário logado ser homologador de plano de entregas da unidade-pai do plano de entregas;\n" .
                "4. o plano de entregas estar com o status ATIVO, o usuário logado ser lotado na sua unidade executora e possuir a capacidade MOD_PENT_EDT_ATV_HOMOL ou MOD_PENT_EDT_ATV_ATV;\n" .
                "5. o usuário logado possuir a capacidade MOD_PENT_QQR_UND.\n[RN_PENT_L]");
            /* (RN_PENT_K)
                Após criado um plano de entregas, os seguintes campos não poderão mais ser alterados: unidade_id, programa_id;
            */
            $planoEntrega = PlanoEntrega::find($dataOrEntity["id"]);
            if ($dataOrEntity["unidade_id"] != $planoEntrega->unidade_id) throw new ServerException("ValidatePlanoEntrega", "Depois de criado um Plano de Entregas, não é possível alterar a sua Unidade. [RN_PENT_K]");
            if ($dataOrEntity["programa_id"] != $planoEntrega->programa_id) throw new ServerException("ValidatePlanoEntrega", "Depois de criado um Plano de Entregas, não é possível alterar o seu Programa. [RN_PENT_K]");
            // (RN_PENT_J) Uma Unidade de execução poderá ter mais de um Plano de Entregas com status 'HOMOLOGANDO' e 'ATIVO', desde que sejam para períodos diferentes;
            if ($condicoes['planoAtivo'] && $condicoes['unidadePlanoEhLotacao'] && $usuario->hasPermissionTo('MOD_PENT_EDT_ATV_HOMOL') && !$usuario->hasPermissionTo('MOD_PENT_EDT_ATV_ATV')) $this->verificaUnicidadeMesmaUnidade('HOMOLOGANDO', $dataOrEntity);
        }
    }

    /**
     * Verifica se as datas do plano de entrega se encaixam na duração do Programa de gestão
     */
    public function verificaDuracaoPlano($planoEntrega)
    {
        $result = true;
        $programa = Programa::find($planoEntrega["programa_id"]);
        if ($programa->prazo_max_plano_entrega > 0) {
            $dataInicio = new DateTime($planoEntrega["data_inicio"]);
            $dataFim = new DateTime($planoEntrega["data_fim"]);
            $diff = $dataInicio->diff($dataFim);
            if ($diff->days > $programa->prazo_max_plano_entrega) {
                $result = false;
            }
        }
        return $result;
    }

    /**
     * Verifica se as datas de início e final das entregas do plano de entrega se encaixam na duração do Programa de gestão (true para caso esteja tudo ok)
     */
    public function verificaDatasEntregas($planoEntrega)
    {
        $result = true;
        $dataInicio = new DateTime($planoEntrega["data_inicio"]);
        $dataFim = new DateTime($planoEntrega["data_fim"]);
        if ($planoEntrega["entregas"]) {
            foreach ($planoEntrega["entregas"] as $entrega) {
                $entregaInicio = new DateTime($entrega["data_inicio"]);
                $entregaFim = new DateTime($entrega["data_fim"]);
                $result = $result && ($dataInicio <= $entregaInicio) && ($dataFim >= $entregaFim);
            }
        }
        return $result;
    }

    /**
     * Verifica se há apenas um plano de entregas com o status HOMOLOGANDO ou ATIVO em uma mesma unidade executora, para um mesmo período de vigência [RN_PENT_J]
     */
    public function verificaUnicidadeMesmaUnidade($status, $data)
    {
        $planoEntrega = PlanoEntrega::find($data["id"]);
        $planos = PlanoEntrega::where("unidade_id", $planoEntrega->unidade_id)->where("status", $status)->get();
        foreach ($planos as $plano) {
            if (
                UtilService::intersect($plano->data_inicio, $plano->data_fim, $planoEntrega->data_inicio, $planoEntrega->data_fim) &&
                $planoEntrega->id != $plano->id
            ) {
                throw new ServerException("ValidatePlanoEntrega", "Com base na capacidade do usuário logado (" . ($status == 'HOMOLOGANDO' ? "MOD_PENT_EDT_ATV_HOMOL" : "MOD_PENT_EDT_ATV_ATV)") .
                    ", a alteração do plano retornaria o seu status para " . ($status == 'HOMOLOGANDO' ? "AGUARDANDO HOMOLOGAÇÃO" : "ATIVO") .
                    ", mas seu período de vigência (" . UtilService::getDateTimeFormatted($planoEntrega->data_inicio) . " a " . UtilService::getDateTimeFormatted($planoEntrega->data_fim) .
                    ") entraria em conflito com o do plano de entregas #" . $plano->numero . " (" . UtilService::getDateTimeFormatted($plano->data_inicio) . " a " . UtilService::getDateTimeFormatted($plano->data_fim) . "). [RN_PENT_J]");
            }
        }
    }

    /**
     *                  MAPA DE COBERTURA DAS REGRAS DE NEGÓCIO - PLANO DE ENTREGAS
     *                  
     *   REGRAS NÃO     REGRAS TOTALMENTE        OUTRAS REGRAS       OUTRAS REGRAS
     *   IMPLEMENTADAS  IMPLEMENTADAS            100% COBERTAS       PARCIALMENTE COBERTAS
     *                  ----------------------------------------------------------------------
     *                  RN_PENT_A
     *                  RN_PENT_B
     *                  RN_PENT_C
     *                  RN_PENT_D
     *                  RN_PENT_E
     *                  RN_PENT_F
     *                  RN_PENT_G
     *   RN_PENT_H
     *                  RN_PENT_I
     *                  RN_PENT_J
     *                  RN_PENT_K
     *                  RN_PENT_L
     *                  RN_PENT_M
     *                  RN_PENT_N
     *                                                                  RN_PENT_O
     *                  RN_PENT_P
     *   RN_PENT_Q
     *                  RN_PENT_R
     *                  RN_PENT_S
     *                  RN_PENT_T
     *                  RN_PENT_U
     *                  RN_PENT_V
     *                  RN_PENT_W
     *                  RN_PENT_X
     *                  RN_PENT_Y
     *                  RN_PENT_Z
     *                  RN_PENT_AA
     *                  RN_PENT_AB
     *                  RN_PENT_AC
     *                  RN_PENT_AD
     *                  RN_PENT_AE
     *                  RN_PENT_AF
     *                  RN_PENT_AG
     *   RI_PENT_A
     *                  RI_PENT_B
     *                  RI_PENT_C
     * 
     * Regras relativas a adesão de planos de entregas, assunto
     * adiado para discussão futura
     *   RN_PENT_2_1
     *   RN_PENT_2_2
     *                  RN_PENT_2_3
     *                  RN_PENT_2_4
     *   RN_PENT_2_5
     *   RN_PENT_2_6
     *   RN_PENT_2_7
     *   RN_PENT_3_1
     *                  RN_PENT_3_3
     *                  RN_PENT_4_1
     *  
     */
}
