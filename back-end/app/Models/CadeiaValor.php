<?php

namespace App\Models;

use App\Models\ModelBase;
use App\Models\PlanoEntrega;
use App\Models\Entidade;
use App\Models\Unidade;
use App\Models\CadeiaValorProcesso;

class CadeiaValor extends ModelBase
{
    protected $table = 'cadeias_valores';

    protected $with = [];

    public $fillable = [ /* TYPE; NULL?; DEFAULT?; */// COMMENT
        'data_inicio', /* datetime; NOT NULL; */// Data de inicio da cadeia de valores
        'data_fim', /* datetime; */// Data do fim da cadeia de valores
        'nome', /* varchar(256); NOT NULL; */// Nome da cadeia de valores
        'unidade_id', /* char(36); */
        'entidade_id', /* char(36); NOT NULL; */
        'data_arquivamento', /* datetime; */// Data de arquivamento da cadeia de valores
        //'deleted_at', /* timestamp; */
    ];

    public $fillable_changes = [];

    public $fillable_relations = ["processos"];

    public $delete_cascade = ["processos"];

    // Has
    public function processos() { return $this->hasMany(CadeiaValorProcesso::class); }    
    public function planosEntrega() { return $this->hasMany(PlanoEntrega::class); }   
    // Belongs
    public function unidade() { return $this->belongsTo(Unidade::class); }    //nullable
    public function entidade() { return $this->belongsTo(Entidade::class); }  
}