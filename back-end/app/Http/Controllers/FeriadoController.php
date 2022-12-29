<?php

namespace App\Http\Controllers;

use App\Models\Feriado;
use App\Services\FeriadoService;
use Illuminate\Http\Request;
use App\Http\Controllers\ControllerBase;
use App\Exceptions\ServerException;

class FeriadoController extends ControllerBase {
    public function checkPermissions($action, $request, $service, $unidade, $usuario) {
        switch ($action) {
            case 'STORE':
                if (!$usuario->hasPermissionTo('MOD_FER_INCL')) throw new ServerException("CapacidadeStore", "Inserção não executada");
                break;
            case 'UPDATE':
                if (!$usuario->hasPermissionTo('MOD_FER_EDT')) throw new ServerException("CapacidadeStore", "Edição não executada");
                break;
            case 'DESTROY':
                if (!$usuario->hasPermissionTo('MOD_FER_EXCL')) throw new ServerException("CapacidadeStore", "Exclusão não executada");
                break;
        }
    }
}
