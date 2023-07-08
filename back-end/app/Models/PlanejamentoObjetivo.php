<?php

namespace App\Models;

use App\Models\ModelBase;
use App\Models\Planejamento;
use App\Models\EixoTematico;
use App\Models\PlanoEntregaEntregaObjetivo;

class PlanejamentoObjetivo extends ModelBase
{
    protected $table = 'planejamentos_objetivos';

    protected $with = [];

    public $fillable = [ // TYPE; NULL?; DEFAULT?; // COMMENT
        'nome', // varchar(256); NOT NULL; // Nome do objetivo
        'fundamentacao', // varchar(256); NOT NULL; // Fundamentação
        'planejamento_id', // char(36); NOT NULL; 
        'sequencia', // int; NOT NULL; // Sequencia utilizada para ordenar
        'eixo_tematico_id', // char(36); NOT NULL; 
        'objetivo_superior_id', // char(36); 
        'path', // text; // Path dos nós pais separados por /, ou null caso sejam nós raiz
        'objetivo_pai_id', // char(36); 
        //'data_inicio', // datetime; NOT NULL; // Data inicio da vigência
        //'data_fim', // datetime; // Data fim da vigência
    ];

    public $delete_cascade = ["objetivos"];

    // Has
    public function objetivos() { return $this->hasMany(PlanejamentoObjetivo::class, 'objetivo_pai_id'); }
    public function entregasObjetivos() { return $this->hasMany(PlanoEntregaEntregaObjetivo::class, 'objetivo_id'); }
    // Belongs
    public function planejamento() { return $this->belongsTo(Planejamento::class); }
    public function eixoTematico() { return $this->belongsTo(EixoTematico::class); }
    public function objetivoPai() { return $this->belongsTo(PlanejamentoObjetivo::class); }
}