<?php

namespace Database\Seeders;

use App\Models\Usuario;
use App\Models\Perfil;
use App\Models\Unidade;
use App\Models\UnidadeIntegrante;
use App\Models\UnidadeIntegranteAtribuicao;
use Illuminate\Database\Seeder;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $perfis = Perfil::all();

        $usuarios_desenvolvedores = [
            [
                'email' => 'genisson.albuquerque@prf.gov.br',
                'nome' => 'Genisson',
                'cpf' => '07408707425',
                'apelido' => 'Genisson',
                'perfil_id' => $perfis->where('nome', 'Desenvolvedor')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'diogo.paiva@prf.gov.br',
                'nome' => 'Diogo Paiva',
                'cpf' => '01710713526',
                'apelido' => 'Paiva',
                'perfil_id' => $perfis->where('nome', 'Desenvolvedor')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'henrique.alves@prf.gov.br',
                'nome' => 'Carlos Henrique Alves Lopes',
                'cpf' => '26751043880',
                'apelido' => 'Carlos III',
                'perfil_id' => $perfis->where('nome', 'Desenvolvedor')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'edson.marian@prf.gov.br',
                'nome' => 'Edson dos Santos Marian',
                'cpf' => '67703011053',
                'apelido' => 'Marian',
                'perfil_id' => $perfis->where('nome', 'Desenvolvedor')->first()->id,
                'sexo' => 'MASCULINO',
            ],

            [
                'email' => 'ricardo.farias@prf.gov.br',
                'nome' => 'Ricardo de Sousa',
                'cpf' => '25941933304',
                'apelido' => 'Ricardo',
                'perfil_id' => $perfis->where('nome', 'Desenvolvedor')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'caroline.ribeiro@prf.gov.br',
                'nome' => 'Caroline da Costa Freire Ribeiro',
                'cpf' => '01492368164',
                'apelido' => 'Caroline',
                'perfil_id' => $perfis->where('nome', 'Administrador')->first()->id,
                'sexo' => 'FEMININO',
            ],
            [
                'email' => 'jonatas.ferreira@prf.gov.br',
                'nome' => 'Jonata Cunha',
                'cpf' => '09741166702',
                'apelido' => 'Jonata',
                'perfil_id' => $perfis->where('nome', 'Desenvolvedor')->first()->id,
                'sexo' => 'MASCULINO',
            ],
              [
                'email' => 'pauloflausino@gmail.com',
                'nome' => 'Paulo Flausino',
                'cpf' => '22374479854',
                'apelido' => 'Paulo',
                'perfil_id' => $perfis->where('nome', 'Desenvolvedor')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'geisimar.rech87@gmail.com',
                'nome' => 'Geisimar Rech',
                'cpf' => '01798651106',
                'apelido' => 'Geisimar',
                'perfil_id' => $perfis->where('nome', 'Desenvolvedor')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'henrique.felipe100@gmail.com',
                'nome' => 'Henrique Felipe Alves',
                'cpf' => '40921185898',
                'apelido' => 'Henrique',
                'perfil_id' => $perfis->where('nome', 'Desenvolvedor')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'guibitar@gmail.com',
                'nome' => 'Guilherme Bitar',
                'cpf' => '01914276167',
                'apelido' => 'Guilherme',
                'perfil_id' => $perfis->where('nome', 'Desenvolvedor')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'karinahellen.eng@gmail.com',
                'nome' => 'Karina Silva',
                'cpf' => '05182319177',
                'apelido' => 'Karina',
                'perfil_id' => $perfis->where('nome', 'Desenvolvedor')->first()->id,
                'sexo' => 'FEMININO',
            ],
            [
                'email' => 'cimei.teixeira@gmail.com',
                'nome' => 'Cimei Teixeira',
                'cpf' => '48321770100',
                'apelido' => 'Cimei',
                'perfil_id' => $perfis->where('nome', 'Desenvolvedor')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'marco.coelho@firstbps.com.br',
                'nome' => 'Marco Coelho',
                'cpf' => '03400125954',
                'apelido' => 'Marco',
                'perfil_id' => $perfis->where('nome', 'Desenvolvedor')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'edson.dario@gmail.com',
                'nome' => 'Edson Dario Silva de França',
                'cpf' => '01380127416',
                'apelido' => 'Dario',
                'perfil_id' => $perfis->where('nome', 'Desenvolvedor')->first()->id,
                'sexo' => 'MASCULINO',
            ],
        ];

        // Inserção de usuários pilotos
        // Apresentação
        /*
        $usuarios_pilotos = [
            [
                'email' => 'wlaagile@gmail.com',
                'nome' => 'Willian Lourenço de Almeida',
                'cpf' => '33664860829',
                'apelido' => 'Willian',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'fekleiman@gmail.com',
                'nome' => 'Fernando',
                'cpf' => '28835089840',
                'apelido' => 'Fernando',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'robervaleppgg@gmail.com',
                'nome' => 'Roberval de Jesus Leone dos Santos',
                'cpf' => '54826578504',
                'apelido' => 'Roberval',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'jumloureiro@gmail.com',
                'nome' => 'Juliana Loureiro',
                'cpf' => '02521761036',
                'apelido' => 'Juliana',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'FEMININO',
            ],
            [
                'email' => 'lara.antaq@gmail.com',
                'nome' => 'Livia Resende Lara',
                'cpf' => '85928445172',
                'apelido' => 'Livia',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'FEMININO',
            ],
            [
                'email' => 'smaximino@gmail.com',
                'nome' => 'Sergio Luiz Maximino',
                'cpf' => '05554725821',
                'apelido' => 'Sergio',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'lu.gmvieira@gmail.com',
                'nome' => 'Luciana',
                'cpf' => '69211728134',
                'apelido' => 'Luciana ',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'FEMININO',
            ],
            [
                'email' => 'pedrobaena87@gmail.com',
                'nome' => 'Pedro Henrique Lourenço Baena',
                'cpf' => '81098882083',
                'apelido' => 'Pedro',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'karinahellen.eng@gmail.com',
                'nome' => 'Karina Silva',
                'cpf' => '05182319177',
                'apelido' => 'Karina',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'FEMININO',
            ],
            [
                'email' => 'diego.tdorea@gmail.com',
                'nome' => 'Diego Tannús Dórea',
                'cpf' => '58182797071',
                'apelido' => 'Diego',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'julianalegentil@gmail.com',
                'nome' => 'Juliana Legentil Ferreira Faria',
                'cpf' => '08469158716',
                'apelido' => 'Juliana',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'FEMININO',
            ],
            [
                'email' => 'pojobsb@gmail.com',
                'nome' => 'Roberto Seara Machado Pojo Rego',
                'cpf' => '19741280084',
                'apelido' => 'Roberto',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'kellyco25@gmail.com',
                'nome' => 'Kelly Oliveira',
                'cpf' => '36010148073',
                'apelido' => 'Kelly',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'FEMININO',
            ],
            [
                'email' => 'rofarias@gmail.com',
                'nome' => 'Rogério de Souza Farias',
                'cpf' => '99418312115',
                'apelido' => 'Rogério',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'MASCULINO',
            ],
            [
                'email' => 'junca.nogueira@gmail.com',
                'nome' => 'Nathália Junca Nogueira',
                'cpf' => '10406112738',
                'apelido' => 'Nathália',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'FEMININO',
            ],
            [
                'email' => 'bbrito.thais@gmail.com',
                'nome' => 'Thais Barral de Oliveira Brito',
                'cpf' => '82162492504',
                'apelido' => 'Thais',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'FEMININO',
            ],
            [
                'email' => 'claudiacmw@gmail.com',
                'nome' => 'Claudia',
                'cpf' => '18636621038',
                'apelido' => 'Claudia',
                'perfil_id' => $perfis->where('nome', 'Chefe de Unidade Executora')->first()->id,
                'sexo' => 'FEMININO',
            ],
            [
                'email' => 'juhelriguel@gmail.com',
                'nome' => 'juhelriguel',
                'cpf' => '68880569023',
                'apelido' => 'juhelriguel',
                'perfil_id' => $perfis->where('nome', 'Desenvolvedor')->first()->id,
                'sexo' => 'MASCULINO',
            ]
        ];*/

        // Operação de inserção de usuários desenvolvedores
        $unidade_pai = Unidade::where('SIGLA', 'SENAPPEN')->first();

        foreach($usuarios_desenvolvedores as $usuario)
        {
            $user = Usuario::where('cpf', $usuario['cpf'])->first() ?? new Usuario();
            $user->fill([
                'email' => $usuario['email'],
                'nome' => $usuario['nome'],
                'cpf' => $usuario['cpf'],
                'apelido' => $usuario['apelido'],
                'perfil_id' => $usuario['perfil_id'],
                'matricula' => str_pad(
                    rand(1000000, 9999999),
                    7,
                    0,
                    STR_PAD_LEFT),
                'uf' => 'DF',
                'sexo' => $usuario['sexo'],
            ]);
            $user->save();

            $integrante = new UnidadeIntegrante([
                'unidade_id' => $unidade_pai->id,
                'usuario_id' => $user->id
            ]);
            $integrante->save();

            $lotacao = new UnidadeIntegranteAtribuicao([
                'atribuicao' => "LOTADO",
                'unidade_integrante_id' => $integrante->id
            ]);
            $lotacao->save();
        }

        /*
        foreach($usuarios_pilotos as $usuario)
        {
            $user = Usuario::where('cpf', $usuario['cpf'])->first() ?? new Usuario();
            $user->fill([
                'email' => $usuario['email'],
                'nome' => $usuario['nome'],
                'cpf' => $usuario['cpf'],
                'apelido' => $usuario['apelido'],
                'perfil_id' => $usuario['perfil_id'],
                'matricula' => str_pad(
                    rand(1000000, 9999999),
                    7,
                    0,
                    STR_PAD_LEFT),
                'uf' => 'DF',
                'sexo' => $usuario['sexo'],
            ]);
            $user->save();

            $integrante = new UnidadeIntegrante([
                'unidade_id' => $unidade_pai->id,
                'usuario_id' => $user->id
            ]);
            $integrante->save();

            $lotacao = new UnidadeIntegranteAtribuicao([
                'atribuicao' => "LOTADO",
                'unidade_integrante_id' => $integrante->id
            ]);
            $lotacao->save();
        }
        */
    }
}
