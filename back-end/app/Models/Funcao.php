<?php

namespace App\Models;

use App\Models\ModelBase;

class Funcao extends ModelBase
{
    protected $table = 'funcoes';

    public $fillable = [ /* TYPE; NULL?; DEFAULT?; */// COMMENT
        'nome', /* varchar(256); NOT NULL; */// Nome da Função
        'nivel', /* varchar(256); */// Nível da Função
        'descricao', /* varchar(256); */// Descrição da Função
        'ativo', /* tinyint; NOT NULL; DEFAULT: '1'; */// Função ativo ou inativo
        //'deleted_at', /* timestamp; */
        //'siape', /* varchar(256); */// código SIAPE da Função
        //'cbo', /* varchar(256); */// código CBO da Função
    ];

    // Belongs
    //public function centro() { return $this->belongsTo(AreaConhecimento::class,'area_curso_id'); }
    
}