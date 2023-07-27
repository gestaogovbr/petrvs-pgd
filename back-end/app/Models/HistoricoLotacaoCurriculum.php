<?php

namespace App\Models;

use App\Models\ModelBase;
use App\Models\CurriculumProfissional;
use App\Models\Unidade;

class HistoricoLotacaoCurriculum extends ModelBase
{
    protected $table = 'historicos_lotacoes_curriculum';

    public $fillable = [ /* TYPE; NULL?; DEFAULT?; */// COMMENT
        'curriculum_profissional_id',
        'unidade_id',
    ];

     // Belongs
    public function curriculumProfissional() { return $this->belongsTo(CurriculumProfissional::class); }
    public function unidade() { return $this->belongsTo(Unidade::class); }
  
    
}
