<?php

namespace App\Services;

use App\Models\PlanoEntregaEntrega;
use App\Models\PlanoEntregaEntregaProgresso;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Carbon;

class PlanoEntregaEntregaService extends ServiceBase
{
    public function proxyQuery($query, &$data) {
        $where = [];
        foreach($data["where"] as $condition) {
            if(is_array($condition) && $condition[0] == "objetivos.planejamento_objetivo_id") { 
                $query->whereHas('objetivos', function (Builder $query) use ($condition) {
                    $query->where('planejamento_objetivo_id', $condition[2]);
                });
            } else if(is_array($condition) && $condition[0] == "processos.cadeia_processo_id") { 
                $query->whereHas('processos', function (Builder $query) use ($condition) {
                    $query->where('cadeia_processo_id', $condition[2]);
                });
            } else if(is_array($condition) && $condition[0] == "plano_entrega.unidade_id") { 
                $query->whereHas('planoEntrega', function (Builder $query) use ($condition) {
                    $query->whereIn('unidade_id', $condition[2]);
                });
            } else if (is_array($condition) && $condition[0] == "objetivos.objetivo_id") {
                $query->whereHas('objetivos', function (Builder $query) use ($condition) {
                    $query->where('planejamento_objetivo_id', $condition[2]);
                });
            } else if (is_array($condition) && $condition[0] == "processos.processo_id") {
                $query->whereHas('processos', function (Builder $query) use ($condition) {
                    $query->where('cadeia_processo_id', $condition[2]);
                });
            } else {
                array_push($where, $condition);
            }
        }
        $data["where"] = $where;
        return $data;
    }

    public function afterUpdate($data) {
        $entrega = PlanoEntregaEntrega::find($data['id']);
        $usuario = parent::loggedUser();

        $atributosParaCopiar = [
            'homologado',
            'progresso_esperado',
            'progresso_realizado',
            'data_inicio',
            'data_fim',
            'meta',
            'realizado',
        ];
    
        $dadosProgresso = collect($entrega->getAttributes())
        ->only($atributosParaCopiar)
        ->merge([
            'usuario_id' => $usuario->id,
            'plano_entrega_entrega_id' => $entrega->id,
            'data_progresso' => Carbon::now(),
        ])->toArray();
    
        $progresso = new PlanoEntregaEntregaProgresso($dadosProgresso);
        $progresso->save();    
        return $entrega;
    }

    public function hierarquia($data){
        $entregaRaiz = PlanoEntregaEntrega::find($data['entrega_id']);
        $hierarquia = $this->construirHierarquia($entregaRaiz, true);    
        return $hierarquia;

    }

    protected function construirHierarquia($entrega, $incluirPai = false) {
        $result = [
            'id' => $entrega->id,
            'descricao' => $entrega->descricao,
            'descricao_entrega' => $entrega->descricao_entrega,
            'destinatario' => $entrega->destinatario,
            'descricao_meta' => $entrega->descricao_meta,
            'etiquetas' => $entrega->etiquetas,
            'meta' => $entrega->meta,
            'objetivos' => $entrega->objetivos,
            'processos' => $entrega->processos,
            'data_inicio' => $entrega->data_inicio,
            'data_fim' => $entrega->data_fim,
            'unidade' => $entrega->unidade,
            'filhos' => [],
        ];
    
        if ($incluirPai) {
            $result['pai'] = PlanoEntregaEntrega::with('unidade')->find($entrega->entrega_pai_id);

        }
    
        $filhos = PlanoEntregaEntrega::where('entrega_pai_id', $entrega->id)->get();
    
        if ($filhos->isNotEmpty()) {
            $result['filhos'] = $filhos->map(function ($filho) {
                return $this->construirHierarquia($filho, false);
            })->all();
        }
    
        return $result;
    }

}
