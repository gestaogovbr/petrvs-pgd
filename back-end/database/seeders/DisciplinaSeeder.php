<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Disciplina;

class DisciplinaSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $materias = array(
      array(
        "id" => "054be22a-f04b-4839-ac69-37958848eacd",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "APS - ATENDIMENTO EM PRIMEIROS SOCORROS",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "05c380e8-a4c0-4191-ab06-366289a647ec",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "OAE - OPERAÇÕES AÉREAS",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "14227bb5-70f9-4755-b426-069997c354be",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "MZC - MANEJO DE ZOONOSES CANINAS",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "142696eb-c5de-4142-b0e1-06b0ce731039",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "PRC - PROCEDIMENTOS CINOTÉCNICOS DO DPRF",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "1c9b2065-a2e0-48ec-851d-a97f1554f60f",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "DHI - DIREITOS HUMANOS, INTEGRIDADE E RELAÇÕES HUMANAS",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "1e436040-d107-4bad-9f9a-826c0b771b43",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "LGP - LEGISLAÇÃO DE PESSOAL",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "22773e6a-348b-4063-87f4-d660ea708dde",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "DOC - DOCÊNCIA",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "2be69a32-6c72-458f-8c30-2bd150999e47",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "PRU - PATRULHA RURAL E URBANA",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "2df034f8-996b-416f-a5d6-6f68b6af58ad",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "CIP - CONTROLE INTERNO DA PRF",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "2e6946b3-72fc-4391-8c4e-2755c91749c2",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "PLF - POLICIAMENTO E FISCALIZAÇÃO",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "30e2ca68-baed-46fb-985a-aa16e3c4920e",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "FPP - FISCALIZAÇÃO DE PRODUTOS PERIGOSOS",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "32aa1b3a-6655-44fc-80a1-55e248d6693e",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "UDF - USO DIFERENCIADO DA FORÇA",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "363df921-bd61-4199-b12b-1f163f7052d4",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "SAT - SEGURANÇA DE AUTORIDADES",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "4205d6d1-b58a-4d5e-897f-af267ca3dc3d",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "AAP - ASPECTOS DA ADMINISTRAÇÃO PÚBLICA",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "5031dd32-b526-4a6b-8921-e44aba2866e0",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "NOC - NOÇÕES DE ORGANIZAÇÃO E CONTROLE",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "504b6eda-a19a-4e77-96c1-7df5f9970b4b",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "EIG - ESTRATÉGIA INSTITUCIONAL E GOVERNANÇA",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "51564ada-6077-4f48-be98-edcf85d9aff7",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "MOT - MOTOCICLISMO",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "5f4b92be-0c79-4ad6-904b-23c210ac0774",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "EFV - ENFRENTAMENTO ÀS FRAUDES VEICULARES",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "684c3acd-922a-47da-96fb-f5a14248baa2",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "TIC - TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO POLICIAL",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "6e04dff5-7c2c-4dca-a140-5ca2b88a75e0",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "SEP - SOCIEDADE, ESTADO, POLÍCIA E HISTÓRIA DA PRF",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "6eaec9d3-371e-47f3-a658-20bab02e7fe1",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "FTR - FISCALIZAÇÃO DE TRÂNSITO",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "75e193e4-08f4-43fe-846d-e48f659d64d8",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "GEP - GESTÃO ESTRATÉGICA DA PRF",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "7f270b26-c2db-4f82-8765-480939360e50",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "FD - TÉCNICAS PARA FISCALIZAÇÃO DO USO DO ÁLCOOL E OUTRAS DROGAS",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "86b83c3f-f466-4220-84a6-049fdc5ad344",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "PBS - PRINCÍPIOS BÁSICOS PARA A SAÚDE",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "87e00122-485b-4e18-9bb7-2ead0aab5ddd",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "ALP - ASPECTOS LEGAIS DOS PROCEDIMENTOS POLICIAIS",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "8ce450a7-9b95-4eec-9131-4bb05c666a9c",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "FPD - FISCALIZAÇÃO DE PESOS E DIMENSÕES",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "9c5dc888-3041-4a92-a7d8-db8fce8bdc73",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "GER - NOÇÕES DE GERENCIAMENTO DE CRISE",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "9edb52e5-a01b-4469-83a7-2addced0b5b3",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "EDA - ENFRENTAMENTO AO TRÁFICO DE DROGAS, ARMAS E MUNIÇÕES",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "a51b82c7-fcb6-42e0-ac77-6adc145be486",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "AMT - ARMAMENTO MUNIÇÃO E TIRO",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "bc5f980e-10ec-42d6-80da-eafa56893e9a",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "GPJ - ELABORAÇÃO E GESTÃO DE PROJETOS",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "be00afe6-43f4-4d4d-bddf-a404bd2f33ca",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "POP - PLANEJAMENTO OPERACIONAL",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "bf348323-3770-40b0-b3cf-725a95f9b33b",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "TAB - TÉCNICAS DE ABORDAGEM",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "c0c691bc-a314-472c-95de-4bab10ffcbbb",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "FAM - FISCALIZAÇÃO AMBIENTAL",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "c16244a1-9d71-476c-994c-8233a5192b0d",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "CMA - CUMPRIMENTO DE MANDADO DE ALTO RISCO",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "d6fe753f-84bc-4027-9eb6-211c18e8f6a8",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "NTS - NOÇÕES E TÉCNICAS DE SOBREVIVÊNCIA",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "df19adec-08c2-4b54-b3ac-94ece88e223c",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "CVP - CONDUÇÃO VEICULAR POLICIAL",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "df715873-464d-45eb-a1aa-1695b7c48472",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "OCD - OPERAÇÕES DE CONTROLE DE DISTÚRBIOS",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "e0d8b54d-089b-4129-a8bc-2c10b6837bb1",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "RTP - REDAÇÃO TÉCNICA PARA A ATIVIDADE POLICIAL",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "e83a1f4b-5489-43b7-bfa8-fe96f0c5c765",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "EDT - EDUCAÇÃO E SEGURANÇA PARA O TRANSITO",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "e84ddddd-9ef2-4d13-8d3b-799784847c56",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "TDP - TÉCNICAS DE DEFESA POLICIAL",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "e98a64fe-3862-4b73-8dce-22409a91f320",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "FST - FISCALIZAÇÃO DO SERVIÇO DE TRANSPORTE",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "eb4628a9-004a-40d5-81e8-556011bf6585",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "INT - INTELIGÊNCIA POLICIAL E SEGURANÇA ORGÂNICA",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "f0706db4-6ebc-436c-9c20-8fb29dd92f21",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "ACD - ACIDENTE E LEVANTAMENTO DO LOCAL",
        "sigla" => "",
        "ativo" => 1
      ),
      array(
        "id" => "f0724f25-ebf4-4577-9d01-f696b122e95a",
        "created_at" => "2024-02-23 16:19:10",
        "updated_at" => "2024-02-23 16:19:10",
        "deleted_at" => NULL,
        "nome" => "CDD - CORREGEDORIA E DIREITO DISCIPLINAR",
        "sigla" => "",
        "ativo" => 1
      ),
    );
    Disciplina::upsert($materias, "id");
  }
}