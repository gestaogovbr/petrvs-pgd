<?php

namespace App\Models;

use App\Models\ModelBase;
use App\Traits\AutoUuid;

class IntegracaoServidor extends ModelBase
{
    use AutoUuid;

    protected $table = 'integracao_servidores';

    protected $with = [];

    public $fillable = [ /* TYPE; NULL?; DEFAULT?; */// COMMENT
        'cpf_ativo', /* varchar(50); */
        'data_modificacao', /* varchar(50); */
        'cpf', /* varchar(50); */
        'nome', /* varchar(100); */
        'emailfuncional', /* varchar(100); */
        'sexo', /* varchar(50); */
        'municipio', /* varchar(100); */
        'uf', /* varchar(50); */
        'data_nascimento', /* varchar(50); */
        'telefone', /* varchar(50); */
        'vinculo_ativo', /* varchar(50); */
        'matriculasiape', /* varchar(50); */
        'codigo_cargo', /* varchar(50); */
        'coduorgexercicio', /* varchar(50); */
        'coduorglotacao', /* varchar(50); */
        'codigo_servo_exercicio', /* varchar(50); */
        'nomeguerra', /* varchar(100); */
        'codigo_situacao_funcional',
        'situacao_funcional', /* varchar(50); */
        'codupag', /* varchar(50); */
        'dataexercicionoorgao', /* varchar(50); */
        'funcoes', /* json; */
        'cpf_chefia_imediata',
        'email_chefia_imediata',
    ];

    protected $keyType = 'string';

    protected $casts = [];

    protected $dates = ['deleted_at'];
}
