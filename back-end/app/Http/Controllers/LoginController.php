<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Exceptions\LogError;
use App\Services\FirebaseAuthService;
use App\Services\GoogleService;
use App\Services\DprfSegurancaAuthService;
use App\Services\IntegracaoService;
use App\Services\ApiService;
use App\Models\Usuario;
use App\Models\UnidadeIntegrante;
use App\Models\Entidade;
use App\Models\Tenant;
use App\Services\UnidadeService;
use App\Services\CalendarioService;
use App\Services\UsuarioService;
use Laravel\Socialite\Facades\Socialite;
use \SocialiteProviders\Manager\Config;
use DateTime;

class LoginController extends Controller
{
    private function registrarEntidade($request, $session = false)
    {
        $with = ["feriados", "gestor", "gestorSubstituto"];
        $entidade = $session ? Entidade::with($with)->find($request->session()->put("entidade_id")) : null;
        $sigla = $request->has('entidade') ? $request->input('entidade') : config("petrvs")["entidade"];
        if (empty($entidade) && !empty($sigla)) {
            $entidade = Entidade::with($with)->where("sigla", $sigla)->first();
            $request->session()->put("entidade_id", $entidade->id);
        }
        return $entidade;
    }

    private function registrarUsuario($request, $usuario, $update = null)
    {
        if (isset($usuario)) {
            if (isset($update) && count($update) > 0) {
                $usuario->update($update);
                $usuario->fresh();
            }
            $entidadeId = $request->session()->has("entidade_id") ? $request->session()->get("entidade_id") : null;
            $usuario = Usuario::where("id", $usuario->id)->with([
                "areasTrabalho" => function ($query) use ($entidadeId) {
                    $query->with(["unidade.gestor.usuario", "unidade.gestorSubstituto.usuario", "unidade.gestorDelegado.usuario", "unidade.cidade", "unidade.planosEntrega", "unidade.unidadePai.planosEntrega", "atribuicoes"])->whereHas('unidade', function ($query) use ($entidadeId) {
                        return  $query->where('entidade_id', '=', $entidadeId);
                    });
                },
                "participacoesProgramas" => function ($query) {
                    $query->where("habilitado", 1);
                },
                "perfil.capacidades.tipoCapacidade",
                "gerenciaTitular.atribuicoes",
                "gerenciaTitular.unidade",
                "gerenciasSubstitutas.atribuicoes",
                "gerenciasSubstitutas.unidade",
                "gerenciasDelegadas.atribuicoes",
                "gerenciasDelegadas.unidade"
            ])->first();
            $request->session()->put("unidade_id", $usuario->lotacao?->id);
        }
        return $usuario;
    }

    /**
     * Retorna o usuário logado
     *
     * @return App\Models\Usuario | null
     */
    public static function loggedUser(): ?Usuario
    {
        return Auth::user();
    }

    /**
     * Seleciona Unidade Atual
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function selecionaUnidade(Request $request, FirebaseAuthService $auth)
    {
        $data = $request->validate([
            'unidade_id' => ['required'],
        ]);
        if (Auth::check()) {
            $usuario = Auth::user();
            $usuario = Usuario::where("id", $usuario->id)->with(["areasTrabalho" => function ($query) use ($data) {
                $query->where('unidade_id', $data["unidade_id"]);
            }])->first();
            if (isset($usuario->areasTrabalho[0]) && !empty($usuario->areasTrabalho[0]->id)) {
                $request->session()->put("unidade_id", $usuario->areasTrabalho[0]->id);
                return response()->json([
                    "status" => "OK",
                    "unidade" => $usuario->areasTrabalho[0]
                ]);
            } else {
                return LogError::newError('Unidade não encontrada no usuário');
            }
        } else {
            return LogError::newError('Usuário não logado');
        }
    }

    /**
     * Obtem horário da unidade atual do usuário logado (considerando UTC pelo código IBGE)
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function horarioUnidade(Request $request)
    {
        if (Auth::check()) {
            $unidade_id = $request->session()->get("unidade_id");
            if (!empty($unidade_id)) {
                $unidadeService = new UnidadeService();
                return response()->json([
                    "status" => "OK",
                    "hora" => $unidadeService->hora($unidade_id)
                ]);
            } else {
                return LogError::newError('Usuário sem unidade selecionada');
            }
        } else {
            return LogError::newError('Usuário não logado');
        }
    }

    /**
     * Logout
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request, FirebaseAuthService $auth)
    {
        $usuario = self::loggedUser();
        if (!empty($usuario) && !empty($usuario->currentAccessToken())) $usuario->currentAccessToken()->delete();
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(["status" => "OK"]);
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticateSession(Request $request)
    {
        if (Auth::check()) {
            $entidade = $this->registrarEntidade($request, true);
            $usuario = $this->registrarUsuario($request, self::loggedUser());
            return response()->json([
                "success" => true,
                "kind" => $request->session()->get("kind"),
                "usuario" => $usuario,
                "entidade" => $entidade,
                "horario_servidor" => CalendarioService::horarioServidor()
            ]);
        } else if (!empty(config("petrvs.auto-login"))) {
            $usuario = Usuario::where('email', config("petrvs.auto-login"))->first();
            if (isset($usuario) && Auth::loginUsingId($usuario->id)) {
                $request->session()->regenerate();
                $request->session()->put("kind", "SESSION");
                $entidade = $this->registrarEntidade($request);
                $usuario = $this->registrarUsuario($request, $usuario);
                return response()->json([
                    "success" => true,
                    "kind" => $request->session()->get("kind"),
                    "usuario" => $usuario,
                    "entidade" => $entidade,
                    "horario_servidor" => CalendarioService::horarioServidor()
                ]);
            } else {
                return LogError::newError('Usuário não encontrado');
            }
        } else {
            return LogError::newError('Sessão não encontrada');
        }
    }


    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticateUserPassword(Request $request, FirebaseAuthService $auth)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            $request->session()->put("kind", "USERPASSWORD");
            $entidade = $this->registrarEntidade($request);
            $usuario = $this->registrarUsuario($request, self::loggedUser());
            return response()->json([
                'success' => true,
                "entidade" => $entidade,
                "usuario" => $usuario,
                "horario_servidor" => CalendarioService::horarioServidor()
            ]);
        }
        return LogError::newError('As credenciais fornecidas são inválidas.');
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticateFirebaseToken(Request $request, FirebaseAuthService $auth)
    {
        $credentials = $request->validate([
            'entidade' => ['required'],
            'token' => ['required']
        ]);
        $tokenData = $auth->verifyFirebaseToken($credentials['token']);
        if (!isset($tokenData['error'])) {
            $entidade = $this->registrarEntidade($request);
            $usuario = $this->registrarUsuario($request, Usuario::where('email', $tokenData['email'])->first());
            if (isset($usuario) && Auth::loginUsingId($usuario->id)) {
                $usuarioService = new UsuarioService();
                $usuarioService->atualizarFotoPerfil(UsuarioService::LOGIN_FIREBASE, $usuario, $tokenData["picture"]);
                $request->session()->regenerate();
                $request->session()->put("kind", "FIREBASE");
                return response()->json([
                    'success' => true,
                    "entidade" => $entidade,
                    "usuario" => $usuario,
                    "horario_servidor" => CalendarioService::horarioServidor()
                ]);
            }
        }
        return LogError::newError('As credenciais fornecidas são inválidas.');
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticateGoogleToken(Request $request, GoogleService $auth)
    {
        $credentials = $request->validate([
            'entidade' => ['required'],
            'token' => ['required']
        ]);
        $tokenData = $auth->verifyToken($credentials['token']);
        if (!isset($tokenData['error'])) {
            $entidade = $this->registrarEntidade($request);
            $usuario = $this->registrarUsuario($request, Usuario::where('email', $tokenData['email'])->first());
            if (isset($usuario) && Auth::loginUsingId($usuario->id)) {
                $usuarioService = new UsuarioService();
                $usuarioService->atualizarFotoPerfil(UsuarioService::LOGIN_GOOGLE, $usuario, $tokenData["picture"]);
                $request->session()->regenerate();
                $request->session()->put("kind", "GOOGLE");
                return response()->json([
                    'success' => true,
                    "entidade" => $entidade,
                    "usuario" => $usuario,
                    "horario_servidor" => CalendarioService::horarioServidor()
                ]);
            }
        }
        return LogError::newError('As credenciais fornecidas são inválidas.');
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticatePrfGoogleToken(Request $request, GoogleService $auth, IntegracaoService $integracao)
    {
        $credentials = $request->validate([
            'entidade' => ['required'],
            'token' => ['required']
        ]);
        $tokenData = $auth->verifyToken($credentials['token']);
        if (!isset($tokenData['error'])) {
            $usuario = Usuario::where('email', $tokenData['email'])->first();
            if (!isset($usuario) && $integracao->autoIncluir) {
                $usuario = new Usuario();
                $lotacao = new UnidadeIntegrante();
                $service = new IntegracaoService();
                $service->salvaUsuarioLotacaoGoogle($usuario, $lotacao, $tokenData, $auth);
            }
            if (isset($usuario) && Auth::loginUsingId($usuario->id)) {
                $usuarioService = new UsuarioService();
                $usuarioService->atualizarFotoPerfil(UsuarioService::LOGIN_GOOGLE, $usuario, $tokenData["picture"]);
                $request->session()->regenerate();
                $request->session()->put("kind", "GOOGLE");
                $entidade = $this->registrarEntidade($request);
                $usuario = $this->registrarUsuario($request, $usuario, ['id_google' => $tokenData["sub"]]);
                return response()->json([
                    'success' => true,
                    "entidade" => $entidade,
                    "usuario" => $usuario,
                    "horario_servidor" => CalendarioService::horarioServidor()
                ]);
            }
        }
        return LogError::newError('As credenciais fornecidas são inválidas.');
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticateDprfSeguranca(Request $request, DprfSegurancaAuthService $auth)
    {
        $credentials = $request->validate([
            'entidade' => ['required'],
            'cpf' => ['regex:/^\d{11}$/'],
            'senha' => ['required'],
            'token' => ['required']
        ]);
        /* Usando temporariamente o loginCpf(), mas o correto é login()  */
        $profile = $auth->loginToken($credentials['cpf'], $credentials['senha'], $credentials['token']);
        if (!isset($profile['error'])) {
            $email = str_contains($profile['email'], "@") ? $profile['email'] : $profile["email"] . "@prf.gov.br";
            $usuario = Usuario::where('email', $email)->first();
            if (!isset($usuario) && $auth->autoIncluir) {
                $usuario = new Usuario();
                $lotacao = new UnidadeIntegrante();
                $service = new IntegracaoService();
                $service->salvaUsuarioLotacaoDprf($usuario, $lotacao, $profile, $auth);
            }
            if (isset($usuario) && Auth::loginUsingId($usuario->id)) {
                $request->session()->regenerate();
                $request->session()->put("kind", "DPRFSEGURANCA");
                $entidade = $this->registrarEntidade($request);
                $usuario = $this->registrarUsuario($request, $usuario);
                return response()->json([
                    'success' => true,
                    "entidade" => $entidade,
                    "usuario" => $usuario,
                    "horario_servidor" => CalendarioService::horarioServidor()
                ]);
            }
        }
        return LogError::newError('As credenciais fornecidas são inválidas.');
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticateApiSession(Request $request)
    {
        if (Auth::check()) {
            $user = self::loggedUser();
            $entidade = $this->registrarEntidade($request, true);
            $usuario = $this->registrarUsuario($request, $user);
            return response()->json([
                "token" => $user->currentAccessToken()->plainTextToken ?? $request->bearerToken(),
                "kind" => $request->session()->get("kind"),
                "entidade" => $entidade,
                "usuario" => $usuario,
                "horario_servidor" => CalendarioService::horarioServidor()
            ]);
        }
        return LogError::newError('Sessão não encontrada');
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticateApiUserPassword(Request $request, FirebaseAuthService $auth)
    {
        $credentials = $request->validate([
            'entidade' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required'],
            'device_name' => ['required'],
        ]);
        $usuario = Usuario::where('email', $credentials['email'])->first();
        if (isset($usuario)) {
            $request->session()->put("kind", "USERPASSWORD");
            $user = self::loggedUser();
            $entidade = $this->registrarEntidade($request);
            $usuario = $this->registrarUsuario($request, $usuario);
            return response()->json([
                'token' => $user->createToken($credentials['device_name'])->plainTextToken,
                'entidade' => $entidade,
                'usuario' => $usuario,
                "horario_servidor" => CalendarioService::horarioServidor()
            ]);
        }
        return LogError::newError('As credenciais fornecidas são inválidas.');
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticateApiFirebaseToken(Request $request, FirebaseAuthService $auth)
    {
        $credentials = $request->validate([
            'entidade' => ['required'],
            'token' => ['required'],
            'device_name' => ['required'],
        ]);
        $tokenData = $auth->verifyFirebaseToken($credentials['token']);
        if (!isset($tokenData['error'])) {
            $usuario = Usuario::where('email', $tokenData['email'])->first();
            if (isset($usuario)) { // && Hash::check($request->password, $user->password)
                $usuarioService = new UsuarioService();
                $usuarioService->atualizarFotoPerfil(UsuarioService::LOGIN_FIREBASE, $usuario, $tokenData["picture"]);
                $request->session()->put("kind", "FIREBASE");
                $entidade = $this->registrarEntidade($request);
                $usuario = $this->registrarUsuario($request, $usuario);
                return response()->json([
                    'token' => $usuario->createToken($credentials['device_name'])->plainTextToken,
                    'entidade' => $entidade,
                    'usuario' => $usuario,
                    "horario_servidor" => CalendarioService::horarioServidor()
                ]);
            }
        }
        return LogError::newError('As credenciais fornecidas são inválidas.');
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticateApiGoogleToken(Request $request, GoogleService $auth)
    {
        $credentials = $request->validate([
            'entidade' => ['required'],
            'token' => ['required'],
            'device_name' => ['required'],
        ]);
        $tokenData = $auth->verifyToken($credentials['token']);
        if (!isset($tokenData['error'])) {
            $usuario = Usuario::where('email', $tokenData['email'])->first();
            if (isset($usuario)) { // && Hash::check($request->password, $user->password)
                $usuarioService = new UsuarioService();
                $usuarioService->atualizarFotoPerfil(UsuarioService::LOGIN_GOOGLE, $usuario, $tokenData["picture"]);
                $request->session()->regenerate();
                $request->session()->put("kind", "GOOGLE");
                $entidade = $this->registrarEntidade($request);
                $usuario = $this->registrarUsuario($request, $usuario);
                return response()->json([
                    'token' => $usuario->createToken($credentials['device_name'])->plainTextToken,
                    'entidade' => $entidade,
                    'usuario' => $usuario,
                    "horario_servidor" => CalendarioService::horarioServidor()
                ]);
            }
        }
        return LogError::newError('As credenciais fornecidas são inválidas.');
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticateApiPrfGoogleToken(Request $request, GoogleService $auth, IntegracaoService $integracao)
    {
        $credentials = $request->validate([
            'entidade' => ['required'],
            'token' => ['required'],
            'device_name' => ['required'],
        ]);
        $tokenData = $auth->verifyToken($credentials['token']);
        if (!isset($tokenData['error'])) {
            $usuario = Usuario::where('email', $tokenData['email'])->first();
            if (!isset($usuario) && $integracao->autoIncluir) {
                $usuario = new Usuario();
                $lotacao = new UnidadeIntegrante();
                $service = new IntegracaoService();
                $service->salvaUsuarioLotacaoGoogle($usuario, $lotacao, $tokenData, $auth);
            }
            if (isset($usuario)) { // && Hash::check($request->password, $user->password)
                $usuarioService = new UsuarioService();
                $usuarioService->atualizarFotoPerfil(UsuarioService::LOGIN_GOOGLE, $usuario, $tokenData["picture"]);
                $request->session()->regenerate();
                $request->session()->put("kind", "GOOGLE");
                $usuario->save();
                $entidade = $this->registrarEntidade($request);
                $usuario = $this->registrarUsuario($request, $usuario, ['id_google' => $tokenData["sub"]]);
                return response()->json([
                    'token' => $usuario->createToken($credentials['device_name'])->plainTextToken,
                    'entidade' => $entidade,
                    'usuario' => $usuario,
                    "horario_servidor" => CalendarioService::horarioServidor()
                ]);
            }
        }
        return LogError::newError('As credenciais fornecidas são inválidas.');
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function generateApiPrfSessionToken(Request $request, ApiService $api, IntegracaoService $integracao)
    {
        $credentials = $request->validate([
            'entidade' => ['required'],
            'token' => ['required']
        ]);
        $tenant = Tenant::find($credentials["entidade"]);
        if (empty($tenant) || empty($tenant->modulo_sei_private_key)) return LogError::newError('ENTITY_NOT_FOUND');
        tenancy()->initialize($tenant);
        $privateKey = "-----BEGIN PRIVATE KEY-----\n" . $tenant->modulo_sei_private_key . "\n-----END PRIVATE KEY-----";
        //$entidade = Entidade::where("sigla", $credentials["entidade"])->first();
        //if (empty($entidade)) return LogError::newError('ENTITY_NOT_FOUND');
        $tokenData = $api->verifyToken($credentials['token'], $privateKey, $credentials["entidade"]);
        if (!isset($tokenData['error'])) {
            $usuario = !empty($tokenData['email']) ? Usuario::where('email', $tokenData['email'])->first() :
                Usuario::where('cpf', $tokenData['cpf'])->first();
            if (!isset($usuario) && $integracao->autoIncluir) {
                $usuario = new Usuario();
                $lotacao = new UnidadeIntegrante();
                $service = new IntegracaoService();
                $service->salvaUsuarioLotacaoApi($usuario, $lotacao, $tokenData, $api);
            }
            if (isset($usuario)) { // && Hash::check($request->password, $user->password)
                $request->session()->regenerate();
                $request->session()->put("kind", "SEI");
                $usuario->save();
                $entidade = $this->registrarEntidade($request);
                $usuario = $this->registrarUsuario($request, $usuario, !empty($tokenData["id_sei"]) ? ['id_sei' => $tokenData["id_sei"]] : []);
                return response()->json([
                    'token' => $usuario->createToken("SEI_" . $tokenData["id_sei"])->plainTextToken,
                    'entidade' => $entidade,
                    'usuario' => $usuario,
                    "horario_servidor" => CalendarioService::horarioServidor()
                ]);
            } else {
                return LogError::newError('USER_NOT_FOUND');
            }
        }
        return LogError::newError('As credenciais fornecidas são inválidas.' . $tokenData['error']);
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticateApiDprfSeguranca(Request $request, DprfSegurancaAuthService $auth)
    {
        $credentials = $request->validate([
            'entidade' => ['required'],
            'cpf' => ['regex:/^\d{11}$/'],
            'senha' => ['required'],
            'token' => ['required'],
            'device_name' => ['required']
        ]);
        /* Usando temporariamente o loginCpf(), mas o correto é login()  */
        $profile = $auth->loginToken($credentials['cpf'], $credentials['senha'], $credentials['token']);
        if (!isset($profile['error'])) {
            $email = str_contains($profile["email"], "@") ? $profile["email"] : $profile["email"] . "@prf.gov.br";
            $usuario = Usuario::where('email', $email)->first();
            if (!isset($usuario) && $auth->autoIncluir) {
                $usuario = new Usuario();
                $lotacao = new UnidadeIntegrante();
                $service = new IntegracaoService();
                $service->salvaUsuarioLotacaoDprf($usuario, $lotacao, $profile, $auth);
            }
            if (isset($usuario)) {
                $request->session()->put("kind", "DPRFSEGURANCA");
                $usuario->save();
                $entidade = $this->registrarEntidade($request);
                $usuario = $this->registrarUsuario($request, $usuario);
                return response()->json([
                    'token' => $usuario->createToken($credentials['device_name'])->plainTextToken,
                    'entidade' => $entidade,
                    'usuario' => $usuario,
                    "horario_servidor" => CalendarioService::horarioServidor()
                ]);
            }
        }
        return LogError::newError('As credenciais fornecidas são inválidas.');
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    /*
    public function authenticateApiLoginUnico(Request $request, LoginUnicoService $auth)
    {
        $credentials = $request->validate([
            'code' => ['required'],
            'state' => ['required']
        ]);
        $tokenData = $auth->getAccessToken($credentials['code']);
        if(!isset($tokenData['error'])) {
            $response = $auth->getUserToken($tokenData['access_token']);
            $state=json_decode(base64_decode($credentials['state']),0);
            $with = ["feriados", "gestor", "gestorSubstituto"];
            $entidade = Entidade::with($with)->where("sigla", $state->entidade)->first();
            $request->session()->put("entidade_id", $entidade->id);
            $usuario = $this->registrarUsuario($request, Usuario::where('cpf',strtolower( $response['sub']))->first());
            if (($usuario)) {
                Auth::loginUsingId($usuario->id);
                $request->session()->regenerate();
                $request->session()->put("kind", "LOGINUNICO");
                return response()->json([
                    'success' => true,
                    "entidade" => $entidade,
                    "usuario" => $usuario,
                    "horario_servidor" => CalendarioService::horarioServidor()
                ]);
            } else {
                return LogError::newError('As credenciais fornecidas são inválidas.');
            }
        }
        return LogError::newError('As credenciais fornecidas são inválidas.');
    }
    */

    /**
     * Verify an firebase token
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function validateApiFirebaseToken(Request $request, FirebaseAuthService $auth, $token)
    {
        return $auth->verifyFirebaseToken($token);
    }

    /**
     * Verify an Sactum token
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function validateApiToken(Request $request)
    {
        return response()->json([
            "valid" => Auth::check()
        ]);
    }

    public function loginAzurePopup()
    {
        return redirect('<azure></azure>')->with('popup', 'open');
    }

    public function azureProvider($config = null)
    {
        if ($config) {
            // O método setConfig existe mesmo VSCode dizendo que não.
            return Socialite::driver('azure')->setConfig($config);
        }
        return Socialite::driver('azure');
    }

    function getConfigAzure($url_dinamica_callback = null): \SocialiteProviders\Manager\Config
    {
        return new \SocialiteProviders\Manager\Config(
            config("services.azure.client_id"),
            config("services.azure.client_secret"),
            $url_dinamica_callback,
            ['tenant' => config("services.azure.tenant")]
        );
    }

    public function signInAzureRedirect(Request $request)
    {
        $entidade = $this->registrarEntidade($request);
        $url_dinamica_callback = config("app.url") .
            "/api/login-azure-callback/" . $entidade->sigla;

        $azure_select_tenancy = $this->getConfigAzure($url_dinamica_callback);

        return $this->azureProvider($config = $azure_select_tenancy)
            ->scopes(['openid', 'email', 'profile'])
            ->redirect();
    }

    public function signInAzureCallback(Request $request)
    {
        $entidade = $this->registrarEntidade($request);

        $url_dinamica_callback = config("app.url") .
            "/api/login-azure-callback/" .
            $entidade->sigla;

        $azure_select_tenancy = $this->getConfigAzure($url_dinamica_callback);

        // $user = $this->azureProvider($config = $azure_select_tenancy)->stateless()->user();
        $user = $this->azureProvider($config = $azure_select_tenancy)->user();

        if (!empty($user)) {
            $token = $user->token;
            $email = $user->email;
            $email = explode("#", $email);
            $email = $email[0];
            $email = str_replace("_", "@", $email);
            $usuario = $this->registrarUsuario($request, Usuario::where('email', $email)->first());
            if (($usuario)) {
                Auth::loginUsingId($usuario->id);
                $request->session()->regenerate();
                $request->session()->put("kind", "AZURE");
                return view("azure");
            } else {
                return LogError::newError('As credenciais fornecidas são inválidas. Email: ' . $email);
            }
        } else {
            return $this->azureProvider($config = $azure_select_tenancy)
                ->scopes(['openid', 'email', 'profile'])
                ->redirect();
        }
    }

    /* LoginUnico BackEnd */

    public function loginGovBrPopup()
    {
        return redirect('<govbr></govbr>')->with('popup', 'open');
    }

    public function govBrProvider($config = null)
    {
        if ($config) {
            // O método setConfig existe mesmo VSCode dizendo que não.
            return Socialite::driver('govbr')->setConfig($config);
        }
        return Socialite::driver('govbr');
    }

    function getConfigGovBr($url_dinamica_callback = null, $dados): \SocialiteProviders\Manager\Config
    {
        return new \SocialiteProviders\Manager\Config(
            config("services.govbr.client_id"),
            config("services.govbr.client_secret"),
            $url_dinamica_callback,
            [
                'environment' => config("services.govbr.environment"),
                'code' => $dados['code'] ?? null,
                'state' => $dados['state'] ?? null,
                'code_verifier' => $dados['code_verifier'] ?? null,
                'code_challenge' => $dados['code_challenge'] ?? null,
                'code_challenge_method' => $dados['code_challenge_method'] ?? null
            ]
        );
    }

    public function signInGovBrRedirect(Request $request)
    {
        $entidade = $this->registrarEntidade($request);
        $url_dinamica_callback = config("services.govbr.redirect") . $entidade->sigla;

        $dados = [
            "code_challenge" => config("services.govbr.code_challenge"),
            "code_challenge_method" => config("services.govbr.code_challenge_method"),
        ];
        $login_govbr_select_tenancy = $this->getConfigGovBr($url_dinamica_callback, $dados);

        return $this->govBrProvider($config = $login_govbr_select_tenancy)
            ->scopes(['openid', 'email', 'profile'])
            ->redirect();
    }

    public function signInGovBrCallback(Request $request)
    {
        $entidade = $this->registrarEntidade($request);

        $url_dinamica_callback = config("services.govbr.redirect") .
            $entidade->sigla;

        $dados = [
            "code" => $request->code,
            "state" => $request->state,
            "code_verifier" => config("services.govbr.code_verifier")
        ];
        $login_govbr_select_tenancy = $this->getConfigGovBr($url_dinamica_callback, $dados);

        // $user = $this->azureProvider($config = $azure_select_tenancy)->stateless()->user();
        $user = $this->govBrProvider($config = $login_govbr_select_tenancy)->stateless()
            ->user();

        if (!empty($user)) {
            $token = $user->token;
            $cpf = $user->cpf;
            $email = $user->email;
            $email = explode("#", $email);
            $email = $email[0];
            $email = str_replace("_", "@", $email);
            $usuario = $this->registrarUsuario($request, Usuario::where('cpf', $cpf)->first());
            if (($usuario)) {
                Auth::loginUsingId($usuario->id);
                $request->session()->regenerate();
                $request->session()->put("kind", "GOVBR");
                return view("govbr");
            } else {
                return LogError::newError('As credenciais fornecidas são inválidas. CPF: ' . $cpf);
            }
        } else {
            return $this->govBrProvider($config = $login_govbr_select_tenancy)
                ->scopes(['openid', 'email', 'profile'])
                ->redirect();
        }
    }
}
