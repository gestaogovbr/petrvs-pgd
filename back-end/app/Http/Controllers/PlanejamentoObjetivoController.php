<?php

namespace App\Http\Controllers;

use App\Models\Planejamento;
use App\Services\PlanejamentoService;
use Illuminate\Http\Request;
use App\Http\Controllers\ControllerBase;
use App\Exceptions\ServerException;
use Throwable;

class PlanejamentoObjetivoController extends ControllerBase {

    public $updatable = ["sequencia", "eixo_tematico_id", "objetivo_pai_id"];

    public function checkPermissions($action, $request, $service, $unidade, $usuario) {
        switch ($action) {
            case 'STORE':
                if (!$usuario->hasPermissionTo('MOD_PLAN_INST_INCL')) throw new ServerException("CapacidadeStore", "Inserção não executada");
                break;
            case 'UPDATE':
                if (!$usuario->hasPermissionTo('MOD_PLAN_INST_EDT')) throw new ServerException("CapacidadeStore", "Edição não executada");
                break;
            case 'DESTROY':
                if (!$usuario->hasPermissionTo('MOD_PLAN_INST_EXCL')) throw new ServerException("CapacidadeStore", "Exclusão não executada");
                break;
            case 'QUERY':
                if (!$usuario->hasPermissionTo('MOD_PLAN_INST_CONS')) throw new ServerException("CapacidadeStore", "Consulta não executada");
                break;
        }
    }

}
