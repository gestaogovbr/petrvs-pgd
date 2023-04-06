<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCadeiasValores extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cadeias_valores', function (Blueprint $table) {
            // Configurações:
            $table->uuid('id');
            $table->primary('id');
            $table->timestamps();
            // Campos:
            $table->dateTime('data_inicio')->comment("Data inicio da vigência do registro");
            $table->dateTime('data_fim')->nullable()->comment("Data fim da vigência do registro");
            $table->dateTime('inicio')->comment("Data inicio da cadeia de valor");
            $table->dateTime('fim')->nullable()->comment("Data fim da cadeia de valor");
            $table->string('nome', 256)->comment("Nome da Cadeia de Valores");
            // Chaves estrangeiras:
            $table->foreignUuid('entidade_id')->constrained()->onDelete('restrict')->onUpdate('cascade');
            $table->foreignUuid('unidade_id')->nullable()->constrained()->onDelete('restrict')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cadeias_valores');
    }
}