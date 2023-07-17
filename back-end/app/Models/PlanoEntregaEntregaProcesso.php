<?php

namespace App\Models;

use App\Models\ModelBase;
use App\Models\CadeiaValorProcesso;
use App\Models\PlanoEntregaEntrega;

class PlanoEntregaEntregaProcesso extends ModelBase
{
    protected $table = 'planos_entregas_entregas_processos';

    protected $with = [];

    public $fillable = [ /* TYPE; NULL?; DEFAULT?; */// COMMENT
        'processo_id', /* char(36); NOT NULL; */
        //'deleted_at', /* timestamp; */
        'entrega_id', /* char(36); NOT NULL; */
    ];

    public $fillable_changes = [];

    public $delete_cascade = [];
  
    // Has
    // Belongs
    public function processo() { return $this->belongsTo(CadeiaValorProcesso::class); }//OK//
    public function entrega() { return $this->belongsTo(PlanoEntregaEntrega::class); }
}
