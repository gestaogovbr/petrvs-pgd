<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAtividadesExternasCurriculumProfissionalTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('atividades_externas_curriculum_profissional', function (Blueprint $table) {
            // Configurações:
            $table->uuid('id');
            $table->primary('id');
            $table->timestamps();
            $table->softDeletes();

            // Chaves estrangeiras:
            $table->foreignUuid('curriculum_profissional_id')->constrained("curriculums_profissionais")->onDelete('restrict')->onUpdate('cascade');
            $table->foreignUuid('area_atividade_externa_id')->constrained("areas_atividades_externas")->onDelete('restrict')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('atividades_externas_curriculum_profissional');
    }
}
