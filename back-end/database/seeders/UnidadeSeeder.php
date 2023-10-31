<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Unidade;
use App\Models\Cidade;

class UnidadeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public $timenow;
    public $brasilia;

    public function __construct(){
        $this->timenow = now();
        $this->brasilia = Cidade::where('codigo_ibge', '5300108')->sole();
    }

    public function run()
    {
        $unidade_raiz = array(
          array(
            "id" => "4f705d83-5808-4240-8b92-39ca88139076",
            "created_at" => $this->timenow,
            "updated_at" => $this->timenow,
            "deleted_at" => NULL,
            "codigo" => "1",
            "sigla" => "MGI",
            "nome" => "Ministério da Gestão e Inovação em Serviços Públicos",
            "instituidora" => 1,
            "path" => NULL,
            "texto_complementar_plano" => NULL,
            "atividades_arquivamento_automatico" => 0,
            "atividades_avaliacao_automatico" => 0,
            "planos_prazo_comparecimento" => 10,
            "planos_tipo_prazo_comparecimento" => "DIAS",
            "data_inativacao" => NULL,
            "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
            "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
            "autoedicao_subordinadas" => 1,
            "etiquetas" => NULL,
            "checklist" => NULL,
            "notificacoes" => NULL,
            "expediente" => NULL,
            "cidade_id" => $this->brasilia->id,
            "unidade_pai_id" => NULL,
            "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
          ),
        );

        foreach($unidade_raiz as $u){
            Unidade::insertOrIgnore($u);
        }

        // Inclusão de unidades para facilitar apresentações
        $unidades = array(
            array(
                "id" => "1e6f4d0f-e286-4c6d-ba69-da837a92cfbb",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "2434",
                "sigla" => "SEGES",
                "nome" => "Secretaria de Gestão e Inovação",
                "instituidora" => 1,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "4f705d83-5808-4240-8b92-39ca88139076",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "62e3cd28-9192-40f5-b84a-51a8ba9b6ed2",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "2538",
                "sigla" => "SGP",
                "nome" => "Secretaria de Gestão de Pessoas",
                "instituidora" => 1,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "4f705d83-5808-4240-8b92-39ca88139076",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "08573053-a18c-4eef-b68e-2157a88d3eab",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "2435",
                "sigla" => "GABIN-SEGES",
                "nome" => "Gabinete",
                "instituidora" => 0,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076/1e6f4d0f-e286-4c6d-ba69-da837a92cfbb",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "1e6f4d0f-e286-4c6d-ba69-da837a92cfbb",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "f4259e50-43e4-43d2-a8ff-cc409e8614e7",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "2458",
                "sigla" => "DELOG",
                "nome" => "Diretoria de Normas e Sistemas de Logística",
                "instituidora" => 0,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076/1e6f4d0f-e286-4c6d-ba69-da837a92cfbb",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "1e6f4d0f-e286-4c6d-ba69-da837a92cfbb",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "52b1b9cb-09d5-4787-a50b-84831183c3ce",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "2455",
                "sigla" => "DEMOR",
                "nome" => "Diretoria de Modelos Organizacionais",
                "instituidora" => 0,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076/1e6f4d0f-e286-4c6d-ba69-da837a92cfbb",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "1e6f4d0f-e286-4c6d-ba69-da837a92cfbb",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "81aca3f0-8245-4768-b7ea-4825c8a7ade7",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "2485",
                "sigla" => "DGTES",
                "nome" => "Diretoria de Informações, Serviços e Sistemas de Gestão",
                "instituidora" => 0,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076/1e6f4d0f-e286-4c6d-ba69-da837a92cfbb",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "1e6f4d0f-e286-4c6d-ba69-da837a92cfbb",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "a094aa20-91d4-413e-875c-76459438f82b",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "2468",
                "sigla" => "CENTRAL",
                "nome" => "Central de Compras",
                "instituidora" => 0,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076/1e6f4d0f-e286-4c6d-ba69-da837a92cfbb",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "1e6f4d0f-e286-4c6d-ba69-da837a92cfbb",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "ac7aba8d-6430-4e47-b4b6-d1946c6cc4ad",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "2478",
                "sigla" => "DINOV",
                "nome" => "Diretoria de Inovação Governamental",
                "instituidora" => 0,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076/1e6f4d0f-e286-4c6d-ba69-da837a92cfbb",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "1e6f4d0f-e286-4c6d-ba69-da837a92cfbb",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "c02ab499-a667-4045-9a36-087746080c6d",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "2463",
                "sigla" => "DTPAR",
                "nome" => "Diretoria de Transferências e Parcerias da União",
                "instituidora" => 0,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076/1e6f4d0f-e286-4c6d-ba69-da837a92cfbb",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "1e6f4d0f-e286-4c6d-ba69-da837a92cfbb",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "523f0be2-5b42-4f4c-b050-08bf7ac7bcfd",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "3387",
                "sigla" => "CGINF",
                "nome" => "Coordenação-Geral de Gestão da Informação",
                "instituidora" => 0,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076/1e6f4d0f-e286-4c6d-ba69-da837a92cfbb/81aca3f0-8245-4768-b7ea-4825c8a7ade7",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "81aca3f0-8245-4768-b7ea-4825c8a7ade7",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "e43865ea-494c-4978-ad07-36a6f492c204",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "3432",
                "sigla" => "COGES",
                "nome" => "Coordenação de Soluções em Gestão",
                "instituidora" => 0,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076/1e6f4d0f-e286-4c6d-ba69-da837a92cfbb/81aca3f0-8245-4768-b7ea-4825c8a7ade7/523f0be2-5b42-4f4c-b050-08bf7ac7bcfd",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "523f0be2-5b42-4f4c-b050-08bf7ac7bcfd",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "fdb1887e-262d-4638-96be-6bfc2683489e",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "2582",
                "sigla" => "DESIN",
                "nome" => "Diretoria de Soluções Digitais e Informações Gerenciais",
                "instituidora" => 0,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076/62e3cd28-9192-40f5-b84a-51a8ba9b6ed2",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "62e3cd28-9192-40f5-b84a-51a8ba9b6ed2",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "b31cf3fd-e72b-46e7-9d35-2fd64aeb7d7a",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "2589",
                "sigla" => "CGSER",
                "nome" => "Coordenação-Geral de Serviços e Sustentação de Sistemas",
                "instituidora" => 0,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076/62e3cd28-9192-40f5-b84a-51a8ba9b6ed2/fdb1887e-262d-4638-96be-6bfc2683489e",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "fdb1887e-262d-4638-96be-6bfc2683489e",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "cb3482bd-f9ac-4894-ba95-40ddbbef35f0",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "2586",
                "sigla" => "CGCAP",
                "nome" => "Coordenação-Geral de Cadastro de Pessoal",
                "instituidora" => 0,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076/62e3cd28-9192-40f5-b84a-51a8ba9b6ed2/fdb1887e-262d-4638-96be-6bfc2683489e",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "fdb1887e-262d-4638-96be-6bfc2683489e",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "cc48b247-8633-4287-a8d6-33f0ba8e8441",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "2596",
                "sigla" => "CGSIT",
                "nome" => "Coordenação-Geral de Segurança, Dados e Inovação Tecnológica",
                "instituidora" => 0,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076/62e3cd28-9192-40f5-b84a-51a8ba9b6ed2/fdb1887e-262d-4638-96be-6bfc2683489e",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "fdb1887e-262d-4638-96be-6bfc2683489e",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "590ae23b-3d03-4e0f-b22f-8512d58e47b6",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "2599",
                "sigla" => "COGOP",
                "nome" => "Coordenação de Governança e Planejamento",
                "instituidora" => 0,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076/62e3cd28-9192-40f5-b84a-51a8ba9b6ed2/fdb1887e-262d-4638-96be-6bfc2683489e",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "fdb1887e-262d-4638-96be-6bfc2683489e",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "3ce2b4a0-0fcc-4bbf-b10b-5b3dd91fc654",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "2594",
                "sigla" => "CGDEV",
                "nome" => "Coordenação-Geral de Arquitetura e Desenvolvimento de Sistemas",
                "instituidora" => 0,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076/62e3cd28-9192-40f5-b84a-51a8ba9b6ed2/fdb1887e-262d-4638-96be-6bfc2683489e",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "fdb1887e-262d-4638-96be-6bfc2683489e",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "0a6fa84c-ef2f-4a3a-aae7-dbe73d4354cf",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "2583",
                "sigla" => "CGINF",
                "nome" => "Coordenação-Geral de Informações Gerenciais",
                "instituidora" => 0,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076/62e3cd28-9192-40f5-b84a-51a8ba9b6ed2/fdb1887e-262d-4638-96be-6bfc2683489e",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "fdb1887e-262d-4638-96be-6bfc2683489e",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
            array(
                "id" => "714f304f-391a-4925-b6c4-0a5a7ffeb3f1",
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "30802",
                "sigla" => "PRF",
                "nome" => "Polícia Rodoviária Federal",
                "instituidora" => 1,
                "path" => "/4f705d83-5808-4240-8b92-39ca88139076",
                "texto_complementar_plano" => "",
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => "{\"enviar_email\": true, \"enviar_petrvs\": true, \"nao_notificar\": [], \"enviar_whatsapp\": true}",
                "expediente" => NULL,
                "cidade_id" => $this->brasilia->id,
                "unidade_pai_id" => "4f705d83-5808-4240-8b92-39ca88139076",
                "entidade_id" => "52d78c7d-e0c1-422b-b094-2ca5958d5ac1",
            ),
        );

        foreach($unidades as $u){
            Unidade::insertOrIgnore($u);
        }
    }
}
