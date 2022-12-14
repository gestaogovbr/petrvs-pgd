<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlanosEntregasEntregasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('planos_entregas_entregas', function (Blueprint $table) {
            // Configurações:
            $table->uuid('id');
            $table->primary('id');
            $table->timestamps();
            // Campos:
            $table->dateTime('data_inicio')->comment("Data inicio da vigência");
            $table->dateTime('data_fim')->nullable()->comment("Data fim da vigência");
            $table->dateTime('inicio')->comment("Data inicio");
            $table->dateTime('fim')->nullable()->comment("Data fim");
            $table->string("descricao", 256)->comment("Descrição da entrega");
            $table->text("cliente")->comment("Cliente da entrega");
            $table->tinyInteger('homologado')->comment("Se a entrega foi homologada");
            $table->json("meta")->comment("Meta para a entrega");
            $table->json("realizado")->nullable()->comment("Valor realizado");
            // Chaves estrangeiras:
            $table->foreignUuid('plano_entrega_id')->constrained("planos_entregas")->onDelete('restrict')->onUpdate('cascade');
            $table->foreignUuid('entrega_id')->constrained()->onDelete('restrict')->onUpdate('cascade');
            $table->foreignUuid('entrega_pai_id')->nullable()->constrained("planos_entregas_entregas")->onDelete('restrict')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('planos_entregas_entregas');
    }
}
