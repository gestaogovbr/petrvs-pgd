<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ControllerBase;
use App\Exceptions\ServerException;
use Illuminate\Http\Request;


class PlanoEntregaEntregaController extends ControllerBase {

    public $updatable = ["realizado", "progresso_realizado", "comentarios", "etiquetas", "checklist"];

    public function checkPermissions($action, $request, $service, $unidade, $usuario) {
        switch ($action) {
            case 'STORE':
                if (!$usuario->hasPermissionTo('MOD_PENT_ENTR_INCL')) throw new ServerException("CapacidadeStore", "Inserção não realizada");
                break;
            case 'EDIT':
                if (!$usuario->hasPermissionTo('MOD_PENT_ENTR_EDT')) throw new ServerException("CapacidadeStore", "Edição não realizada");
                break;
            case 'DESTROY':
                if (!$usuario->hasPermissionTo('MOD_PENT_ENTR_EXCL')) throw new ServerException("CapacidadeStore", "Exclusão não realizada");
                break;
            case 'QUERY':
                if (!$usuario->hasPermissionTo('MOD_PENT')) throw new ServerException("CapacidadeStore", "Consulta não realizada");
                break;
        }
    }

    public function hierarquia(Request $request)
    {
        try {
            $data = $request->validate([
                'entrega_id' => ['required'],
            ]);
            return response()->json([
                'success' => true,
                'hierarquia' => $this->service->hierarquia($data)
            ]);
        } catch (Throwable $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }

}
