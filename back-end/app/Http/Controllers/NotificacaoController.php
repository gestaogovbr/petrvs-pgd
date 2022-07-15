<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;
use App\Models\Lotacao;
use App\Models\NotificacaoWhatsapp;
use App\Exceptions\LogError;
use App\Services\RawWhere;
use DateTime;

class NotificacaoController extends Controller
{
    /**
     * Encontra usuário pelo número de telefone
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function findByPhone(Request $request)
    {
        $data = $request->validate([
            'telefone' => ['required', 'string', 'min:10', 'max:11'],
        ]);
        $com9 = strlen($data["telefone"]) == 11 ? $data["telefone"] : substr($data["telefone"], 0, 2) . "9" . substr($data["telefone"], 2);
        $sem9 = strlen($data["telefone"]) == 10 ? $data["telefone"] : substr($data["telefone"], 0, 2) . substr($data["telefone"], 3);
        $usuario = Usuario::whereRaw("REGEXP_REPLACE(telefone, '[^0-9]', '') IN (:sem9, :com9)", ["sem9" => $sem9, "com9" => $com9])->first();
        if(isset($usuario)) {
            return response()->json([
                "status" => "OK",
                "usuario" => $usuario
            ]);
        } else {
            return LogError::newError('Usuário não encontrado');
        }
    }


    /**
     * Retorna sessao atual do usuário
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function findSession(Request $request)
    {
        try {
            $data = $request->validate([
                'telefone' => ['required', 'string', 'min:10', 'max:11']
            ]);
            $result = $this->service->findSession($data);
            return response()->json([
                'success' => true,
                'usuario' => $result['usuario'],
                'session' => $result['session']
            ]);
        } catch (Exception $e) {
            return LogError::newError("findSession: " . $e.getMessage(), $e);
        }
    }

}
