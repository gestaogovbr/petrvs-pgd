<?php

namespace App\Models;

use App\Models\ModelBase;
use App\Models\Anexo;
use App\Models\Usuario;
use App\Models\Projeto;
use App\Models\Atividade;
use App\Models\ProjetoTarefa;
use App\Models\AtividadeTarefa;

class Comentario extends ModelBase
{
    protected $table = 'comentarios';
   
    protected $with = [];

    public $fillable = [ /* TYPE; NULL?; DEFAULT?; */// COMMENT
        'texto', /* text; NOT NULL; */// Texto do comentário
        'path', /* text; */// Path dos ids dos comentários
        'data_hora', /* datetime; NOT NULL; */// Data e horário que foi feito o comentário
        'tipo', /* enum('COMENTARIO','TECNICO','GERENCIAL','AVALIACAO','TAREFA','ATIVIDADE'); NOT NULL; DEFAULT: 'COMENTARIO'; */// Tipo do comentário
        'privacidade', /* enum('PUBLICO','PRIVADO'); NOT NULL; DEFAULT: 'PUBLICO'; */// Nível de acesso ao comentário
        'usuario_id', /* char(36); NOT NULL; */
        'comentario_id', /* char(36); */
        'projeto_id', /* char(36); */
        'projeto_tarefa_id', /* char(36); */
        'atividade_id', /* char(36); */
        'atividade_tarefa_id', /* char(36); */
        //'deleted_at', /* timestamp; */
    ];

    public $delete_cascade = ['comentarios'];

    // Has
    public function anexos() { return $this->hasMany(Anexo::class); }//OK//
    public function comentarios() { return $this->hasMany(Comentario::class, 'comentario_pai_id'); }//OK//
    // Belongs
    public function usuario() { return $this->belongsTo(Usuario::class); }    //OK//
    public function comentarioPai() { return $this->belongsTo(Comentario::class); } //OK//  //nullable
    public function atividade() { return $this->belongsTo(Atividade::class); } //OK//   //nullable
    public function atividadeTarefa() { return $this->belongsTo(AtividadeTarefa::class); } //OK//   //nullable
    public function projeto() { return $this->belongsTo(Projeto::class); } //OK//   //nullable
    public function projetoTarefa() { return $this->belongsTo(ProjetoTarefa::class); } //OK//   //nullable
}
