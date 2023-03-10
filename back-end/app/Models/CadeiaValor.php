<?php

namespace App\Models;

use App\Models\ModelBase;
use App\Models\Unidade;
use App\Models\CadeiaValorProcesso;
use App\Traits\AutoDataInicio;
use App\Traits\HasDataFim;

class CadeiaValor extends ModelBase
{
    use AutoDataInicio, HasDataFim;

    protected $table = 'cadeias_valores';

    protected $with = [];

    public $fillable = [ /* TYPE; NULL?; DEFAULT?; */// COMMENT
        'inicio', /* datetime; NOT NULL; */// Data inicio da cadeia de valor
        'fim', /* datetime; */// Data fim da cadeia de valor
        'nome', /* varchar(256); NOT NULL; */// Nome da Cadeia de Valores
        'unidade_id', /* char(36); */
        'entidade_id', /* char(36); NOT NULL; */
        //'data_inicio', /* datetime; NOT NULL; */// Data inicio da vigência do registro
        //'data_fim', /* datetime; */// Data fim da vigência do registro
    ];

    public $fillable_changes = [];

    public $fillable_relations = ["processos"];

    public $delete_cascade = ["processos"];

    // Has
    public function processos() { return $this->hasMany(CadeiaValorProcesso::class); }    
    // Belongs
    public function unidade() { return $this->belongsTo(Unidade::class, 'unidade_id'); }
    public function entidade() { return $this->belongsTo(Entidade::class, 'entidade_id'); }
}
