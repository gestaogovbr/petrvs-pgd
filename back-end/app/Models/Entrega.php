<?php

namespace App\Models;

use App\Models\ModelBase;
use App\Casts\AsJson;

class Entrega extends ModelBase
{
    protected $table = 'entregas';

    protected $with = [];

    public $fillable = [ // TYPE; NULL?; DEFAULT?; // COMMENT
        'nome', // varchar(256); NOT NULL; // Nome
        'descricao', // varchar(255); NOT NULL; // Descrição da entrega.
        'tipo_indicador', // enum('QUANTIDADE','VALOR','PORCENTAGEM','QUALITATIVO'); NOT NULL; // Tipo do indicador
        'lista_qualitativos', // json; // valores do qualitativo
        //'data_inicio', // datetime; NOT NULL; // Data inicio da vigência
        //'data_fim', // datetime; // Data fim da vigência
    ];

    protected $casts = [
        'lista_qualitativos' => AsJson::class,
    ];
}