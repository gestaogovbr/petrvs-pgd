<?php

namespace App\Models;

use App\Models\ModelBase;
use App\Models\ProjetoAlocacao;
use App\Models\ProjetoRegra;

class ProjetoAlocacaoRegra extends ModelBase
{
    protected $table = 'projetos_alocacoes_regras';

    protected $with = [];

    public $fillable = [ /* TYPE; NULL?; DEFAULT?; */// COMMENT
        'projeto_alocacao_id', /* char(36); NOT NULL; */
        'regra_id', /* char(36); NOT NULL; */
        //'deleted_at', /* timestamp; */
        /*'data_inicio',*/// REMOVED
    ];

    /*public $fillable_changes = [
    ];

    public $fillable_relations = [
    ];*/

    public $delete_cascade = [];

    // Has
    //public function () { return $this->hasMany(::class); }    
    // Belongs
    public function projetoAlocacao() { return $this->belongsTo(ProjetoAlocacao::class); }    
    public function regra() { return $this->belongsTo(ProjetoRegra::class); }    
}