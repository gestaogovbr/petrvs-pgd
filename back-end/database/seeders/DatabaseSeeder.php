<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     *
     * @return void
     */
    public function run()
    {
       if(config('app.env') == 'production') {
           $this->call([
               CidadeSeeder::class,
               FeriadoSeeder::class,
               PerfilSeeder::class,
               TipoCapacidadeSeeder::class,
               CargoSeeder::class,
               FuncaoSeeder::class,
               IN24_2023CapacidadeSeeder::class,
           ]);
       } else {
           $this->call([
               CidadeSeeder::class,
               FeriadoSeeder::class,
               PerfilSeeder::class,
               TipoCapacidadeSeeder::class,
               EntidadeSeeder::class,
               UnidadeSeeder::class,
               UsuarioSeeder::class,
               AreaConhecimentoSeeder::class,
               TipoCursoSeeder::class,
               CursoSeeder::class,
               MateriaSeeder::class,
               CargoSeeder::class,
               FuncaoSeeder::class,
               CentroTreinamentoSeeder::class,
               GrupoEspecializadoSeeder::class,
               AreaTematicaSeeder::class,
               AreaAtividadeExternaSeeder::class,
               CapacidadeTecnicaSeeder::class,
               IN24_2023Seeder::class,
               IN24_2023CapacidadeSeeder::class,
               TemplateSeeder::class,

               /*
               Após a execução das Seeds acima, executar a rotina de integração com o comando
               http://localhost[:porta]/api/integracao?servidores=true&unidades=true&entidade=[ID da entidade]
               ou sudo curl -G 'http://localhost/api/integracao' -d servidores=true -d unidades=true -d entidade=[ID da entidade]
               */
           ]);
       }
    }
}
