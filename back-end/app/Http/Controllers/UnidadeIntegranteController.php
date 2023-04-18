<?php

namespace App\Http\Controllers;

use App\Models\Unidade;
use App\Services\UnidadeService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\ControllerBase;
use App\Exceptions\ServerException;
use Throwable;

class UnidadeController extends ControllerBase {
    
    public function checkPermissions($action, $request, $service, $unidade, $usuario) {
        /* Revisar as permissoes necessarias
        switch ($action) {
            case 'STORE':
                if (!$usuario->hasPermissionTo('MOD_UND_INCL')) throw new ServerException("CapacidadeStore", "Inserção não executada");
                break;
            case 'UPDATE':
                if (!$usuario->hasPermissionTo('MOD_UND_EDT')) throw new ServerException("CapacidadeStore", "Edição não executada");
                break;
            case 'DESTROY':
                if (!$usuario->hasPermissionTo('MOD_UND_EXCL')) throw new ServerException("CapacidadeStore", "Exclusão não executada");
                break;
        }*/
    }
}
