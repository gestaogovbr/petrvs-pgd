<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Traits\AutoUuid;
use App\Models\Afastamento;
use App\Models\Anexo;
use App\Models\Atividade;
use App\Models\AtividadeTarefa;
use App\Models\Avaliacao;
use App\Models\Change;
use App\Models\Comentario;
use App\Models\DocumentoAssinatura;
use App\Models\Entidade;
use App\Models\Favorito;
use App\Models\Integracao;
use App\Models\Lotacao;
use App\Models\Notificacao;
use App\Models\NotificacaoDestinatario;
use App\Models\NotificacaoWhatsapp;
use App\Models\PlanoEntrega;
use App\Models\PlanoTrabalho;
use App\Models\PlanoTrabalhoConsolidacao;
use App\Models\Perfil;
use App\Models\ProgramaParticipante;
use App\Models\Projeto;
use App\Models\ProjetoHistorico;
use App\Models\ProjetoRecurso;
use App\Models\ProjetoTarefa;
use App\Models\NotificacaoConfig;
use App\Traits\MergeRelations;
use App\Traits\LogChanges;
use App\Traits\HasPermissions;
use App\Models\Unidade;
use App\Models\UnidadeIntegrante;
use App\Services\UsuarioService;
use Throwable;

class UsuarioConfig {}

class Usuario extends Authenticatable
{
    use HasPermissions, HasApiTokens, HasFactory, Notifiable, AutoUuid, MergeRelations, LogChanges;

    protected $table = "usuarios";

    protected $with = ['perfil'];

    public $fillable = [ /* TYPE; NULL?; DEFAULT?; */// COMMENT
        'nome', /* varchar(256); NOT NULL; */// Nome do usuário
        'email', /* varchar(100); NOT NULL; */// E-mail do usuário
        'email_verified_at', /* timestamp; */// Data de verificação do e-mail do usuário
        'cpf', /* varchar(14); NOT NULL; */// CPF do usuário
        'matricula', /* varchar(10); */// Matrícula funcional do usuário
        'apelido', /* varchar(100); NOT NULL; */// Apelido/Nome de guerra/Nome social
        'telefone', /* varchar(50); */// Telefone do usuário
        'sexo', /* enum('MASCULINO','FEMININO'); */// Sexo do usuário
        'config', /* json; */// Configurações do usuário
        'notificacoes', /* json; */// Configurações das notificações (Se envia e-mail, whatsapp, tipos, templates)
        'id_google', /* varchar(50); */// Id associado com o usuário do login do google
        'vinculacao', /* enum('SERVIDOR_EFETIVO','SERVIDOR_COMISSIONADO','EMPREGADO','CONTRATADO_TEMPORARIO'); NOT NULL; DEFAULT: 'SERVIDOR_EFETIVO'; */// Vínculo do usuário com a administração
        'perfil_id', /* char(36); */
        'uf', /* char(2); */// UF do usuário
        'texto_complementar_plano', /* longtext; */// Campo de mensagem adicional do plano de trabalho
        //'deleted_at', /* timestamp; */
        //'remember_token', /* varchar(100); */
        //'password', /* varchar(255); */// Senha do usuário
        //'url_foto', /* varchar(255); */// URL da foto do usuário (temporário)
        //'foto_perfil', /* text; */// Foto padrão do perfil
        //'foto_google', /* text; */// Foto do G-Suit (Google)
        //'foto_microsoft', /* text; */// Foto do Azure (Microsoft)
        //'foto_firebase', /* text; */// Foto do Firebase (Google, Facebook, Instagram, Twiter, etc...)
        //'id_super', /* text; */// Id do usuário no SUPER
        //'metadados', /* json; */// Metadados do usuário
    ];

    public $fillable_changes = [
        'lotacoes'
    ];

    protected $keyType = 'string';

    public $incrementing = false;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime'
    ];

    public $delete_cascade = ['favoritos', 'lotacoes'];

    // Has
    public function afastamentos() { return $this->hasMany(Afastamento::class); }//OK//
    public function anexos() { return $this->hasMany(Anexo::class); }//OK//
    public function consolidacoes() { return $this->hasMany(PlanoTrabalhoConsolidacao::class, 'avaliador_id'); }//OK//
    public function assinaturas() { return $this->hasMany(DocumentoAssinatura::class); }//OK//
    public function avaliacoes() { return $this->hasMany(Avaliacao::class); }//OK//
    public function atividades() { return $this->hasMany(Atividade::class); } //OK//
    public function atividadesDemandadas() { return $this->hasMany(Atividade::class, 'demandante_id'); } //OK//
    public function tarefasAtividade() { return $this->hasMany(AtividadeTarefa::class); } //OK//
    public function tarefasProjeto() { return $this->hasMany(ProjetoTarefa::class); } //OK//
    public function favoritos() { return $this->hasMany(Favorito::class); }//OK//
    public function comentarios() { return $this->hasMany(Comentario::class); }//OK//
    public function lotacoes() { return $this->hasMany(Lotacao::class); }//OK//
    public function lotacao() { return $this->hasOne(Lotacao::class)->where('principal', 1); }//OK//
    public function projetos() { return $this->hasMany(Projeto::class); }//OK//
    public function recursosProjeto() { return $this->hasMany(ProjetoRecurso::class); }//OK//
    public function historicosProjeto() { return $this->hasMany(ProjetoHistorico::class); }//OK//
    public function notificacoes() { return $this->hasMany(Notificacao::class, 'remetente_id'); }//OK//
    public function notificacoesWhatsapp() { return $this->hasMany(NotificacaoWhatsapp::class); }//OK//
    public function notificacoesDestinatario() { return $this->hasMany(NotificacaoDestinatario::class); }//OK//
    public function planosTrabalho() { return $this->hasMany(PlanoTrabalho::class); }//OK//
    public function participantesPrograma() { return $this->hasMany(ProgramaParticipante::class); }//OK//
    public function integracoes() { return $this->hasMany(Integracao::class); }//OK//
    public function vinculos() { return $this->hasMany(UnidadeIntegrante::class); }//OK//
    public function chefiasTitular() { return $this->hasMany(Unidade::class, 'gestor_id'); }//OK//
    public function chefiasSubstituto() { return $this->hasMany(Unidade::class, 'gestor_substituto_id'); }//OK//
    public function chefiaEntidade() { return $this->hasOne(Entidade::class, 'gestor_id'); } //OK//
    public function chefiaSubstitutoEntidade() { return $this->hasOne(Entidade::class, 'gestor_substituto_id'); } //OK//
    public function planosEntregaCriados() { return $this->hasMany(PlanoEntrega::class, 'criacao_usuario_id'); }//OK//  
    public function planosEntregaCancelados() { return $this->hasMany(PlanoEntrega::class, 'cancelamento_usuario_id'); }//OK//  
    // Belongs
    public function perfil() { return $this->belongsTo(Perfil::class, 'perfil_id'); }//OK//     //nullable
    // Mutattors e Casts
    public function getUrlFotoAttribute($value) 
    {
        $usuarioService = new UsuarioService();
        $url = "/assets/images/profile.png";
        try {
            $url = empty($this->foto_perfil) ? "/assets/images/profile.png" : $usuarioService->downloadUrl($this->foto_perfil);
        } catch (Throwable $e) {
            $url = "/assets/images/profile.png";
        }
        return $url;
    }
    public function getConfigAttribute($value)
    {
        $config = new UsuarioConfig();
        return array_merge_recursive((array) $config, (array) json_decode(empty($value) ? "[]" : $value));
    }
    public function setConfigAttribute($value)
    {
        $this->attributes['config'] = json_encode($value);
    }
    public function getNotificacoesAttribute($value)
    {
        $notificacoes = new NotificacaoConfig();
        return array_replace_recursive((array) $notificacoes, (array) json_decode(empty($value) ? "[]" : $value));
    }
    public function setNotificacoesAttribute($value)
    {
        $this->attributes['notificacoes'] = json_encode($value);
    }

    // Outros métodos
    public function changes(): array {
        return Change::where('user_id', $this->id)->get()->toArray() ?? []; //Não pode ser usado um relacionamento do Laravel porque as tabelas estão em bancos distintos
    }
}