<?php

namespace App\Http\Controllers;

use App\Models\Plano;
use App\Services\PlanoService;
use Illuminate\Http\Request;
use App\Http\Controllers\ControllerBase;
use App\Exceptions\ServerException;
use Throwable;

class AdesaoController extends ControllerBase {

    public function checkPermissions($action, $request, $service, $unidade, $usuario) {
        switch ($action) {
            case 'STORE':
                if (!$usuario->hasPermissionTo('MOD_ADES_INCL')) throw new ServerException("CapacidadeStore", "Inserção não executada");
                break;
            case 'UPDATE':
                if (!$usuario->hasPermissionTo('MOD_ADES_EDT')) throw new ServerException("CapacidadeStore", "Edição não executada");
                break;
            case 'DESTROY':
                if (!$usuario->hasPermissionTo('MOD_ADES_EXCL')) throw new ServerException("CapacidadeStore", "Exclusão não executada");
                break;
        }
    }

//    public function metadados(Request $request) {
//        try {
//            $this->checkPermissions('QUERY', $request, $this->service, $this->getUnidade($request), $this->getUsuario($request));
//            $data = $request->validate([
//                'plano' => ['required'],
//                'inicioPeriodo' => [],
//                'fimPeriodo' => []
//            ]);
//            return response()->json([
//                'success' => true,
//                'metadados' => $this->service->metadados($data["plano"], $data['inicioPeriodo'], $data['fimPeriodo'])
//            ]);
//        } catch (Throwable $e) {
//            return response()->json(['error' => $e->getMessage()]);
//        }
//    }
//
//    public function metadadosPlano(Request $request) {
//        try {
//            $this->checkPermissions('QUERY', $request, $this->service, $this->getUnidade($request), $this->getUsuario($request));
//            $data = $request->validate([
//                'plano_id' => ['required']
//            ]);
//            return response()->json([
//                'success' => true,
//                'metadadosPlano' => $this->service->metadadosPlano($data["plano_id"])
//            ]);
//        } catch (Throwable $e) {
//            return response()->json(['error' => $e->getMessage()]);
//        }
//    }
//
    public function avaliar(Request $request) {
        try {
            $data = $request->validate([
                'plano_id' => ['required'],
                'tipo_avaliacao_id' => ['required'],
                'nota_atribuida' => ['required'],
                'arquivar' => ['required'],                 // Oferecer a possibilidade de arquivar o plano, quando for a sua ultima avaliação
                'comentario_avaliacao' => ['min:0'],
                'justificativas' => ['array']
            ]);
            $unidade = $this->getUnidade($request);
            return response()->json([
                'success' => $this->service->avaliar($data, $unidade)
            ]);
        } catch (Throwable $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }

    public function cancelarAvaliacao(Request $request) {
        try {
            $data = $request->validate([
                'id' => ['required']
            ]);
            $unidade = $this->getUnidade($request);
            return response()->json([
                'success' => $this->service->cancelarAvaliacao($data, $unidade)
            ]);
        } catch (Throwable $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }
//
//    public function arquivar(Request $request) {
//        try {
//            $data = $request->validate([
//                'id' => ['required'],
//                'arquivar' => ['required']
//            ]);
//            $unidade = $this->getUnidade($request);
//            return response()->json([
//                'success' => $this->service->arquivar($data, $unidade)
//            ]);
//        } catch (Throwable $e) {
//            return response()->json(['error' => $e->getMessage()]);
//        }
//    }
}