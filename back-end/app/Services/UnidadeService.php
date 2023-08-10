<?php

namespace App\Services;

use App\Exceptions\LogError;
use App\Exceptions\ServerException;
use App\Models\ModelBase;
use DateTime;
use DateTimeZone;
use App\Models\Unidade;
use App\Models\Programa;
use App\Services\ServiceBase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Exception;
use Throwable;

class UnidadeService extends ServiceBase
{
/*     public function avaliadores($id) {
        //$unidade = Unidade::find($id);
        //return array_unique(array_map(fn($usuario) => $usuario->id, [...$unidade->avaliadoresPlanoEntrega, ...$unidade->avaliadoresPlanoTrabalho, $unidade->gestor, $unidade->gestorSubstituto]));
        
        $result = [];   
        $unidade = Unidade::with("integrantes")->where("id", $id)->first();
        if(!empty($unidade->gestor_id)) $result[] = $unidade->gestor_id;
        if(!empty($unidade->gestor_substituto_id)) $result[] = $unidade->gestor_substituto_id;
        foreach($unidade->integrantes as $integrante) {
            if($integrante->atribuicao == "AVALIADOR_DEMANDAS") $result[] = $integrante->usuario_id;  
        }
        if($unidade->avaliacao_hierarquica) {
            $parentId = $unidade->unidade_id;
            $maxLevel = 50;
            while(!empty($parentId) && $maxLevel) {
                $pai = Unidade::find($parentId);
                if(!empty($pai->gestor_id)) $result[] = $pai->gestor_id;
                if(!empty($pai->gestor_substituto_id)) $result[] = $pai->gestor_substituto_id;
                $parentId = $pai->unidade_id;
                $maxLevel--;
            }
            if(!$maxLevel) throw new ServerException("ValidateUnidade", "Referência circular na hierarquia da unidade");
        } 
        return $result;
    } */

    /** 
     * Um array com os IDs de todas as Unidades pesquisadas, que possuem Planos de Trabalho ativos, e seus respectivos dashboards.
     * 
     * @param array     $idsUnidades    Um array com os ids das unidades das quais se deseja o dashboard
     * @param string    $programa_id    O id do programa dentro do qual serão procurados os planos de trabalho
     * @param boolean   $unidadesSubordinadas     Define se devem ser incluídas ou não as unidades subordinadas
     * @return array|LogError   
     */
    public function dashboards($idsUnidades, $programa_id, $unidadesSubordinadas): array | LogError {
        if (count($idsUnidades) > 0) {
            $unidadesFilhas = [];
            if ($unidadesSubordinadas) foreach ($idsUnidades as $unidade_id) {
                $unidadesFilhas = array_merge($unidadesFilhas, $this->unidadesFilhas($unidade_id));
            }

            $idsUnidades = array_unique(array_merge($idsUnidades, $unidadesFilhas));
            $result = [];
            foreach ($idsUnidades as $unidade_id) {
                $metadadosUnidade = $this->metadadosUnidade($unidade_id, $programa_id);
                if ($metadadosUnidade['qdePlanosPrograma'] > 0) {
                    array_push($result, [
                        'sigla' => $metadadosUnidade['sigla'],
                        'qdePTAtivos' => $metadadosUnidade['qdePlanosPrograma'],
                        'horasUteisTotaisPTAtivos' => $metadadosUnidade['horasUteisTotais'],
                        'qdeServidores' => $metadadosUnidade['nrServidoresPrograma'],
                        'modalidadesPlanos' => $metadadosUnidade['modalidadesPlanos']
                    ]);
                }
            }
        } else return LogError::newError('Nenhuma Unidade foi fornecida!');
        return $result;
    }

    public function hora($idOrUnidade) {
        $unidade = gettype($idOrUnidade) == "string" ? Unidade::find($idOrUnidade) : $idOrUnidade;
        $timeZone = $unidade->cidade->timezone;
        $timezone_abbr = timezone_name_from_abbr("", -3600*abs($timeZone), 0);
        $dateTime = new DateTime('now', new DateTimeZone($timezone_abbr));
        $dateTime->setTimestamp($dateTime->getTimestamp());
        return ServiceBase::toIso8601($dateTime);
    }

    public function inativo($id, $inativo) {
        DB::beginTransaction();
        try {
            $unidade = Unidade::find($id);
            if(empty($unidade)) throw new Exception("Unidade não encontrada");
            $unidade->inativo = $inativo ? date("Y-m-d H:i:s") : null;
            $unidade->save();
            DB::commit();
        } catch (Throwable $e) {
            DB::rollback();
            throw $e;
        }
        return true;
    }

    public function mesmaSigla($entidadeId) {
        $repetidos = DB::table('unidades')->select(DB::raw('count(*) as qtd, sigla'))
            ->where('entidade_id', $entidadeId)
            //->whereNull('data_fim')
            ->groupBy('sigla')
            ->having('qtd', '>', 1)
            ->get()->toArray();
        $siglas = array_map(fn($row) => $row->sigla, $repetidos);
        return Unidade::where("entidade_id", $entidadeId)->whereIn("sigla", $siglas)->get();
    }

    /**
     * Retorna um array com os dados totais de uma determinada Área, e os dados individuais de cada uma das suas unidades componentes.
     * 
     * @param string $unidade_id    O ID de uma Unidade.
     * @param string $programa_id   O ID de um Programa.
     * @return array
     */
    public function metadadosArea($unidade_id, $programa_id): array {
        $result = [];        
        $programa = Programa::find($programa_id);
        $dadosArea = [
            'nomePrograma' => $programa['nome'],
            'normativa' => $programa['normativa'],
            'qdePlanosPrograma' => 0,
            'nrServidoresPrograma' => 0,
            'horasUteisTotais' => 0,
            'horasUteisDecorridas' => 0,
            'horasAtividadesNaoIniciadas' => 0,
            'horasAtividadesEmAndamento' => 0,
            'horasAtividadesConcluidas' => 0,
            //'horasAtividadesAvaliadas' => 0,
            'horasTotaisAlocadas' => 0,
            //'mediaAvaliacoes' => null
        ];
        $idsServidoresPrograma = [];
        $dadosUnidades = [];        // array que armazenará os dados das Unidades-filhas da Área (id, nome, sigla) que possuírem ao menos 1 Plano de Trabalho vinculado ao Programa escolhido
        $unidadePrincipal = Unidade::find($unidade_id);
        $unidades_ids = [$unidade_id];
        $unidades_ids = array_merge($unidades_ids, $this->unidadesFilhas($unidade_id));
        foreach ($unidades_ids as $id) {
            $temp = $this->metadadosUnidade($id, $programa_id);
            if ($id == $unidade_id) $aux = $temp;
            if ($temp['qdePlanosPrograma'] != 0) {
                array_push($dadosUnidades, [
                    'id' => $temp['id'],
                    'nome' => $temp['nome'],
                    'sigla' => $temp['sigla'],
                    //'mediaAvaliacoes' => $temp['mediaAvaliacoes'],
                    'nrServidoresPrograma' => $temp['nrServidoresPrograma']
                ]);
                $idsServidoresPrograma = array_merge($idsServidoresPrograma, $temp['idsServidoresPrograma']);
                $dadosArea['qdePlanosPrograma'] += $temp['qdePlanosPrograma'];
                $dadosArea['horasUteisTotais'] += $temp['horasUteisTotais'];
                $dadosArea['horasUteisDecorridas'] += $temp['horasUteisDecorridas'];
                //$dadosArea['qdeDemandasAvaliadas'] += $temp['qdeDemandasAvaliadas'];
                $dadosArea['horasAtividadesNaoIniciadas'] += $temp['horasAtividadesNaoIniciadas'];
                $dadosArea['horasAtividadesEmAndamento'] += $temp['horasAtividadesEmAndamento'];
                $dadosArea['horasAtividadesConcluidas'] += $temp['horasAtividadesConcluidas'];
                //$dadosArea['horasAtividadesAvaliadas'] += $temp['horasAtividadesAvaliadas'];
                $dadosArea['horasTotaisAlocadas'] += $temp['horasTotaisAlocadas'];
            };
            $dadosArea['nrServidoresPrograma'] = count(array_unique($idsServidoresPrograma));
        }
        /** Neste trecho calcula-se a média das avaliações de toda a Área, partindo-se da média das avaliações de cada Unidade que a compõe.
         *  Se um dada Unidade possui mediaAvaliacoes = null, é porque ela não possui nenhuma demanda ainda avaliada. Neste caso, a media das avaliações desta Unidade
         *  (null) não será utilizada no cálculo da média da Área, caso contrário a média seria indevidamente afetada. A função array_map prepara o array com
         *  os valores válidos das médias das avaliações das Unidades, que será enviado à função avg para o cálculo da média aritmética.
         *  Se a Área não possuir nenhuma Unidade-filha, a métrica 'mediaAvaliacoes' será preenchida com null e não será enviada para o cálculo da média.
         */
        /*         if ((count(array_filter($dadosUnidades, fn($p) => $p['mediaAvaliacoes'] != null)) == 0)) {
            $dadosArea['mediaAvaliacoes'] = null;
        } else {
            $dadosArea['mediaAvaliacoes'] = $this->utilService->avg(array_map(fn($u) => $u['mediaAvaliacoes'],array_filter($dadosUnidades, fn($u) => $u['mediaAvaliacoes'] != null)));
        } */
        $dadosArea['percentualHorasNaoIniciadas'] = $dadosArea['horasUteisTotais'] == 0 ? 0 : $dadosArea['horasAtividadesNaoIniciadas'] / $dadosArea['horasUteisTotais'];
        $dadosArea['percentualHorasEmAndamento'] = $dadosArea['horasUteisTotais'] == 0 ? 0 : $dadosArea['horasAtividadesEmAndamento'] / $dadosArea['horasUteisTotais'];
        $dadosArea['percentualHorasConcluidas'] = $dadosArea['horasUteisTotais'] == 0 ? 0 : $dadosArea['horasAtividadesConcluidas'] / $dadosArea['horasUteisTotais'];
        //$dadosArea['percentualHorasAvaliadas'] = $dadosArea['horasUteisTotais'] == 0 ? 0 : $dadosArea['horasAtividadesAvaliadas'] / $dadosArea['horasUteisTotais'];
        $dadosArea['percentualHorasTotaisAlocadas'] = $dadosArea['horasUteisTotais'] == 0 ? 0 : $dadosArea['horasTotaisAlocadas'] / $dadosArea['horasUteisTotais'];
        $dadosArea['percentualPlanoDecorrido'] = $dadosArea['horasUteisTotais'] == 0 ? 0 : $dadosArea['horasUteisDecorridas'] / $dadosArea['horasUteisTotais'];
        $result = [
            'descricaoArea' => $unidadePrincipal->nome . ' - ' . $unidadePrincipal->sigla,
            'dadosArea' => $dadosArea,
            'dadosUnidade' => $aux,
            'dadosUnidades' => $dadosUnidades
        ];
        return $result;
    }

    /** 
     * Retorna os dados acerca dos Planos de Trabalho de uma Unidade, associados a um determinado Programa,
     * que se encontrem dentro da vigência. 
     * 
     * @param string $unidade_id    O ID de uma Unidade.
     * @param string $programa_id   O ID de um Programa.
     * @return array    
    */
    public function metadadosUnidade($unidade_id, $programa_id): array {
        $unidade = Unidade::where('id', $unidade_id)->with(['planosTrabalho', 'planosTrabalho.atividades', 'planosTrabalho.tipoModalidade'])->first();
        $metadadosPlanosTrabalho = [];
        foreach ($unidade['planosTrabalho']->toArray() as $plano) {
            if (($plano['programa_id'] == $programa_id) && ($this->calendarioService->between(new DateTime(), $plano['data_inicio_vigencia'], $plano['data_fim_vigencia']))) {
                array_push($metadadosPlanosTrabalho, $this->planoService->metadadosPlano($plano['id']));
            };
        }
        $result = [
            "id" => $unidade->id,
            "nome" => $unidade->nome,
            "sigla" => $unidade->sigla,
            "qdePlanosTrabalhoPrograma" => count($metadadosPlanosTrabalho),
            "nrServidoresPrograma" => count(array_unique(array_map(fn($x) => $x["usuario_id"], $metadadosPlanosTrabalho))),
            "idsServidoresPrograma" => array_unique(array_map(fn($x) => $x["usuario_id"], $metadadosPlanosTrabalho)),
            "tiposModalidadesPlanosTrabalho" => array_map(fn($x) => $x["tipoModalidade"], $metadadosPlanosTrabalho),
            "horasUteisTotais" => array_reduce(array_map(fn($m) => $m['horasUteisTotais'], $metadadosPlanosTrabalho), function($acum, $item) {return $acum + $item;},0),
            "horasAtividadesNaoIniciadas" => array_reduce(array_map(fn($m) => $m['horasAtividadesNaoIniciadas'], $metadadosPlanosTrabalho), function($acum, $item) {return $acum + $item;},0),
            "horasAtividadesEmAndamento" => array_reduce(array_map(fn($m) => $m['horasAtividadesEmAndamento'], $metadadosPlanosTrabalho), function($acum, $item) {return $acum + $item;},0),
            "horasAtividadesConcluidas" => array_reduce(array_map(fn($m) => $m['horasAtividadesConcluidas'], $metadadosPlanosTrabalho), function($acum, $item) {return $acum + $item;},0),
            "horasTotaisAlocadas" => array_reduce(array_map(fn($m) => $m['horasTotaisAlocadas'], $metadadosPlanosTrabalho), function($acum, $item) {return $acum + $item;},0)
        ];
        $result['percentualHorasNaoIniciadas'] = $result['horasUteisTotais'] == 0 ? 0 : $result['horasAtividadesNaoIniciadas'] / $result['horasUteisTotais'];
        $result['percentualHorasEmAndamento'] = $result['horasUteisTotais'] == 0 ? 0 : $result['horasAtividadesEmAndamento'] / $result['horasUteisTotais'];
        $result['percentualHorasConcluidas'] = $result['horasUteisTotais'] == 0 ? 0 : $result['horasAtividadesConcluidas'] / $result['horasUteisTotais'];
        $result['percentualHorasTotaisAlocadas'] = $result['horasUteisTotais'] == 0 ? 0 : $result['horasTotaisAlocadas'] / $result['horasUteisTotais'];
        $result['percentualPlanoDecorrido'] = $result['horasUteisTotais'] == 0 ? 0 : $result['horasUteisDecorridas'] / $result['horasUteisTotais'];

        /** Neste trecho calcula-se a média das avaliações de toda a Unidade, partindo-se da média das avaliações de cada Plano de Trabalho considerado.
         *  Se um dado Plano de Trabalho possui mediaAvaliacoes = null, é porque ele não possui nenhuma demanda ainda avaliada. Neste caso, a media das avaliações deste Plano
         *  de Trabalho (null) não será utilizada no cálculo da média da Unidade, caso contrário a média seria indevidamente afetada. A função array_map prepara o array com
         * os valores válidos das médias das avaliações dos Planos, que será enviado à função avg para o cálculo da média aritmética.
         */
        /*         $result['mediaAvaliacoes'] = (count(array_filter($metadadosPlanosTrabalho, fn($p) => $p['mediaAvaliacoes'] != null)) == 0) ? null : $this->utilService->avg(array_map(function($p) {
            if ($p['mediaAvaliacoes'] != null) return $p['mediaAvaliacoes'];
        }, $metadadosPlanosTrabalho)); */

        return $result;
    } 

    /**
     * Retorna um array com os planos de entregas EM CURSO relativos à unidade repassada como parâmetro. 
     * Um Plano de Entregas está EM CURSO quando não foi deletado, nem cancelado, nem arquivado e possui status ATIVO;
     * @param string $unidade_id  
     */
    public function planosEntregaEmCurso(string $unidade_id): array {
        $unidade = Unidade::where("id",$unidade_id)->with(["planos_entrega"])->get()->first();
        return array_filter($unidade->planosEntrega, fn($x) => $this->planoEntrega->emCurso($x));
    }

    public function proxyQuery($query, &$data) {
        $usuario = parent::loggedUser();
        $where = [];
        $subordinadas = true;
        $inativos = !empty(array_filter($data["where"], fn($w) => $w[0] == "inativo"));
        //Esta variável '$unidadesPlanejamento' informa se a consulta está vindo do formulário de inclusão de 
        //Planejamento Institucional para uma unidade executora
        $unidadesPlanejamento = !empty(array_filter($data["where"], fn($w) => $w[0] == "unidades_planejamento")); 
        //$unidadesPlanejamento = !empty(array_filter($data["where"], fn($w) => $w[0] == "unidades_planejamento"));
        foreach($data["where"] as $condition) {
            if(is_array($condition) && $condition[0] == "subordinadas") {
                $subordinadas = $condition[2];
            } else if(is_array($condition) && $condition[0] == "inativos" && !$inativos) {
                $inativos = $condition[2];
            } else {
                array_push($where, $condition);
            }
        }
        if(!$inativos) {
            array_push($where, ["inativo", "==", null]);
        }
        if(!$usuario->hasPermissionTo("MOD_UND_TUDO")) { // || ($unidadesPlanejamento && ($usuario->hasPermissionTo("MOD_PLAN_INST_INCL_UNEX_SUBORD") || $usuario->hasPermissionTo("MOD_PLAN_INST_INCL_UNEX_QQLOT")))) {
            //if($unidadesPlanejamento && $usuario->hasPermissionTo("MOD_PLAN_INST_INCL_UNEX_QQLOT")) $subordinadas = false;
            $areasTrabalhoWhere = $this->usuarioService->areasTrabalhoWhere($subordinadas, null, "unidades");
            array_push($where, new RawWhere("($areasTrabalhoWhere)", []));
        }
        $where = array_filter($where, fn($w) => ($w instanceof RawWhere) || ($w[0] != "unidades_planejamento"));
        $data["where"] = $where;
        return $data;
    } 

    public function proxySearch($query, &$data, &$text) {
        $data["where"][] = ["subordinadas", "==", true];
        return $this->proxyQuery($query, $data);
    } 

    public function proxyStore($data, $unidade, $action) {
        $unidade = Unidade::find($data["id"]);
        $pai = Unidade::find($data["unidade_pai_id"]);
        $data["path"] = empty($pai) ? null : $pai->path . "/" . $pai->id;
        if(!empty($unidade)) { // Depois de atualizar o campo 'path' da unidade, atualiza os campos 'path' de todas suas unidades-filhas
            $oldPath = $unidade->path . "/" . $unidade->id . "/";
            $newPath = $data["path"] . "/" . $unidade->id . "/";
            Unidade::where('path', 'like', $oldPath . "%")
                ->update(['path' => DB::raw(sprintf("CONCAT('%s', SUBSTR(path, %d))", $newPath, strlen($newPath)))]);
        }
        return $data;
    }

    /** 
     * Retorna um array com os IDs de todas as suas unidades-filhas, ou seja,
     * de todas as Unidades que estão hierarquicamente organizadas abaixo da Unidade-mãe.
     * 
     * @param string $unidade_id    O ID de uma Unidade-mãe.
     * @return array    
     */
    public function unidadesFilhas($unidade_id): array {
        $path = DB::table('unidades')->select('path')->where('id',$unidade_id)->first()->path . '/' . $unidade_id;
        return array_map(fn($x) => $x->id,DB::table('unidades')->select('id')->where('path', 'like', $path)->orWhere('path', 'like', $path . '/%')->get()->toArray());
    }

    public function unificar($correspondencias, $exclui) {
        DB::beginTransaction();
        try {
            $constraints = $this->foreigns("unidades");
            foreach($correspondencias as $dePara) {
                $de = $dePara["unidade_origem_id"];
                $para = $dePara["unidade_destino_id"];
                foreach($constraints as $contraint) {
                    $changes = DB::select("SELECT id, {$contraint->COLUMN_NAME} FROM {$contraint->TABLE_NAME} WHERE {$contraint->COLUMN_NAME} = :de", [":de" => $de]);
                    DB::update("UPDATE {$contraint->TABLE_NAME} SET {$contraint->COLUMN_NAME} = :para WHERE {$contraint->COLUMN_NAME} = :de", [":de" => $de, ":para" => $para]);
                    /* Registra o log das mudanças */
                    foreach($changes as $change) {
                        $delta = [];
                        $delta[$contraint->COLUMN_NAME] = $de;
                        ModelBase::customLogChange($contraint->TABLE_NAME, $change->id, "EDIT", $delta);
                    }
                }
                if($exclui) $this->destroy($de, false);
            }
            DB::commit();
        } catch (Throwable $e) {
            DB::rollback();
            throw $e;
        }
        return true;
    }

    /**
     * Retorna um array com os ids das unidades que compõem a linha hierárquica ascendente da unidade repassada como parâmetro.
     * @param string $unidade_id
     * @return array
     */
    public function linhaAscendente($unidade_id): array {
        return array_filter(explode('/',Unidade::find($unidade_id)->path),fn($x) => $x != "");
    }
}
