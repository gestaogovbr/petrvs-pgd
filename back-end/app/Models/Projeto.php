<?php

namespace App\Models;

use App\Models\ModelBase;
use App\Models\ProjetoTarefa;
use App\Models\ProjetoAlocacao;
use App\Models\ProjetoRegra;
use App\Models\TipoProjeto;
use App\Models\ProjetoRecurso;
use App\Models\ProjetoFase;
use App\Traits\AutoDataInicio;
use App\Traits\HasDataFim;
use Illuminate\Support\Facades\DB;

class Projeto extends ModelBase
{
    use AutoDataInicio, HasDataFim;

    protected $table = 'projetos';

    protected $with = [];

    public $fillable = [ /* TYPE; NULL?; DEFAULT?; */// COMMENT
        'nome', /* varchar(256); NOT NULL; */// Nome do projeto
        'descricao', /* varchar(256); NOT NULL; */// Descrição do projeto
        'finalidade', /* varchar(256); NOT NULL; */// Descrição do projeto
        'status', /* enum('PLANEJADO','INICIADO','CONCLUIDO','SUSPENSO','CANCELADO'); NOT NULL; */// Status do projeto
        'inicio', /* datetime; NOT NULL; */// Inicio do projeto
        'termino', /* datetime; NOT NULL; */// Fim do projeto
        'calcula_custos', /* tinyint; NOT NULL; DEFAULT: '1'; */// Se o projeto calcula custos
        'tempo_corrido', /* tinyint; NOT NULL; */// Se o tempo é corrido ou usa a configuração de fins de semana, feriados e horário do expediente (quando usar horas)
        'usar_horas', /* tinyint; NOT NULL; DEFAULT: '1'; */// Se usa horas nas datas
        'calcula_intervalo', /* tinyint; NOT NULL; DEFAULT: '1'; */// Se calcula o inicio e termino automaticamente pelos filhos
        'agrupador', /* tinyint; NOT NULL; */// Se é apenas um registro para agrupar tarefas filhas (somente se tem_filhos e não possui progresso)
        'soma_progresso_filhos', /* tinyint; NOT NULL; DEFAULT: '1'; */// Se o progresso é calculado pela média do progresso dos filhos ou lançado manual (somente se tem_filhos)
        'aloca_proprios_recursos', /* tinyint; NOT NULL; DEFAULT: '1'; */// Se possui recursos próprios
        'soma_recusos_alocados_filhos', /* tinyint; NOT NULL; DEFAULT: '1'; */// Mostra o somatório dos recursos filhos
        'custos_proprios', /* tinyint; NOT NULL; DEFAULT: '1'; */// Se possui custos próprios
        'soma_custos_filhos', /* tinyint; NOT NULL; DEFAULT: '1'; */// Se possui custos filhos
        'duracao', /* double(8,2); NOT NULL; */// Duração do projeto
        'progresso', /* decimal(5,2); NOT NULL; DEFAULT: '0.00'; */// Percentual de progresso do projeto
        'usuario_id', /* char(36); */
        'tipo_projeto_id', /* char(36); */
        'fase_id', /* char(36); */
        //'numero', /* int; NOT NULL; */// Número do projeto (Gerado pelo sistema)
        //'data_inicio', /* datetime; NOT NULL; */// Data de criação
        //'data_fim', /* datetime; */// Data final do registro
        //'expediente', /* json; */// Configuração de expediente
    ];

    public $fillable_changes = ["fases", "regras", "recursos", "alocacoes", "tarefas"];

    public $fillable_relations = [];

    public $delete_cascade = ["tarefas", "fases", "regras", "alocacoes", "recursos", "historicos"];

    protected $casts = ["progresso" => "decimal:2"];

    protected static function booted()
    {
        static::creating(function ($projeto) {
            $projeto->numero = DB::select("CALL sequence_projeto_numero()")[0]->number;
        });
    }

    // Has
    public function fases() { return $this->hasMany(ProjetoFase::class); }    
    public function tarefas() { return $this->hasMany(ProjetoTarefa::class); }    
    public function regras() { return $this->hasMany(ProjetoRegra::class); }    
    public function alocacoes() { return $this->hasMany(ProjetoAlocacao::class); }    
    public function recursos() { return $this->hasMany(ProjetoRecurso::class); }    
    public function historicos() { return $this->hasMany(ProjetoHistorico::class); }
    // Belongs
    public function fase() { return $this->belongsTo(ProjetoFase::class); }    
    public function tipoProjeto() { return $this->belongsTo(TipoProjeto::class); }    
    public function usuario() { return $this->belongsTo(Usuario::class); }    
    // Mutattors e Casts
    public function getKanbanDockersAttribute($value)
    {
        return json_decode($value);
    }   
    public function setKanbanDockersAttribute($value)
    {
        $this->attributes['kanban_dockers'] = json_encode($value);
    }
    public function getExpedienteAttribute($value)
    {
        return json_decode($value);
    }   
    public function setExpedienteAttribute($value)
    {
        $this->attributes['expediente'] = json_encode($value);
    }
}