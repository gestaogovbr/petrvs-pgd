<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Feriado;

class FeriadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // carrega o arquivo FERIADOS.CSV para a tabela FERIADOS no banco de dados
        $csvFilePath = base_path('database/seeders/arquivos_csv/feriados.csv');
        $csv = array_map('str_getcsv', file($csvFilePath));
        array_shift($csv); // exclui a primeira linha do arquivo (os cabeçalhos)
        foreach($csv as $linha)
        {
            $registro = str_getcsv($linha[0], ';');
            $feriado = new Feriado();
            $feriado->fill([
                'nome' => mb_convert_encoding($registro[0], "UTF-8", "ISO-8859-1"),
                'dia' => $registro[1],
                'mes' => $registro[2],
                'tipoDia' => $registro[3],
                'recorrente' => $registro[4],
                'abrangencia' => $registro[5]
            ]);
            $feriado->save();
        }
    }
}
