<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFuncoes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('funcoes', function (Blueprint $table) {
            // Configurações:
            $table->uuid('id');
            $table->primary('id');
            $table->timestamps();
            // Campos:
            $table->string('nome', 256)->comment("Nome da funcao exercendo/exercida");
            $table->tinyInteger('ativo')->default(1)->comment("Função ativo ou inativo");
            // Chaves estrangeiras:
           
            //$table->foreignUuid('entrega_id')->constrained("planos_entregas_entregas")->onDelete('restrict')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('funcoes');
    }
}
