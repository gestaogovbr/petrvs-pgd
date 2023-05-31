<?php

namespace App\Models;

use App\Models\ModelBase;
use App\Models\Unidade;
use App\Models\Documento;
use App\Models\ProgramaParticipante;
use App\Traits\AutoDataInicio;
use App\Traits\HasDataFim;

class Programa extends ModelBase
{
    use AutoDataInicio, HasDataFim;

    protected $table = 'programas';

    protected $with = [];

    public $fillable = [ /* TYPE; NULL?; DEFAULT?; */// COMMENT
        'nome', /* varchar(255); NOT NULL; */// Nome do programa de gestão
        'normativa', /* varchar(255); NOT NULL; */// Normativa que regula o programa de gestão
        'config', /* json; */
        'data_inicio_vigencia', /* datetime; NOT NULL; */// Inicio do programa
        'data_fim_vigencia', /* datetime; NOT NULL; */// Fim do programa
        'data_inicio', /* datetime; NOT NULL; */// Data inicio da vigência
        'documento_id', /* char(36); */
        'unidade_id', /* char(36); NOT NULL; */
        'template_tcr_id', /* char(36); */
        'periodo_avaliacao', /* enum('SEMANAL','QUINZENAL','MENSAL','BIMESTRAL','TRIMESTRAL','SEMESTRAL'); NOT NULL; DEFAULT: 'MENSAL'; */// Período para avaliação do plano
        'termo_obrigatorio', /* tinyint; NOT NULL; */// Se o termo é obrigatório
        'tipo_documento_tcr_id', /* char(36); */
        //'data_fim', /* datetime; */// Data fim da vigência
        'prazo_execucao', /* int; NOT NULL; */// Limite máximo de dias corridos para o plano de entregas (Zero para não limitar)
    ];

    public $delete_cascade = ['documento'];

    public $fillable_changes = ['participantes'];
    
    // Has
    public function participantes() { return $this->hasMany(ProgramaParticipante::class); }
    // Belongs
    public function tipoDocumentoTcr() { return $this->belongsTo(TipoDocumento::class, 'tipo_documento_tcr_id'); }
    public function templateTcr() { return $this->belongsTo(Template::class, 'template_tcr_id'); }   
    public function unidade() { return $this->belongsTo(Unidade::class); }    
    public function documento() { return $this->belongsTo(Documento::class, 'documento_id'); }    

}
