<?php

namespace App\Models;

use App\Models\ModelBase;
use App\Models\Usuario;

class DocumentoAssinatura extends ModelBase
{
    protected $table = 'documentos_assinaturas';

    protected $with = [];

    public $fillable = [ /* TYPE; NULL?; DEFAULT?; */// COMMENT
        'data_hora', /* datetime; NOT NULL; DEFAULT: 'CURRENT_TIMESTAMP'; */// Data hora do início da sessão
        'assinatura', /* text; NOT NULL; */// Hash da assinatura
        'documento_id', /* char(36); NOT NULL; */
        'usuario_id', /* char(36); NOT NULL; */
    ];

    // Has
    // Belongs
    public function documento() { return $this->belongsTo(Documento::class); }
    public function usuario() { return $this->belongsTo(Usuario::class); }    
    // Mutattors e Casts
}
