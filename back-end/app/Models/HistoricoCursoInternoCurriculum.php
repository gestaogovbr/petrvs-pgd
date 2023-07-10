<?php

namespace App\Models;

use App\Models\ModelBase;
use App\Models\CurriculumProfissional;
use App\Models\Curso;
use App\Traits\AutoDataInicio;


class HistoricoCursoInternoCurriculum extends ModelBase
{
    protected $table = 'historicos_cursos_internos_curriculum';

    public $fillable = [ /* TYPE; NULL?; DEFAULT?; */// COMMENT
        'pretensao', /* tinyint; NOT NULL; */// Pretende ou não fazer o curso
        'curriculum_profissional_id', /* char(36); NOT NULL; */
        'curso_id', /* char(36); NOT NULL; */
        //'deleted_at', /* timestamp; */
    ];

     // Belongs
    public function curriculumProfissional() { return $this->belongsTo(CurriculumProfissional::class); }
    public function curso() { return $this->belongsTo(Curso::class); }
  
    
}
