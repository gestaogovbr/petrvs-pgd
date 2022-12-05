<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTarefasTableAddDataInicioDataFim extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tarefas', function (Blueprint $table) {
            $table->dateTime('data_inicio')->useCurrent()->comment("Data inicio da vigência");
            $table->dateTime('data_fim')->nullable()->comment("Data fim da vigência");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tarefas', function (Blueprint $table) {
            $table->dropColumn('data_inicio');
            $table->dropColumn('data_fim');
        });
    }
}
