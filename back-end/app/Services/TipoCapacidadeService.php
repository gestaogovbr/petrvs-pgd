<?php

namespace App\Services;

use App\Models\TipoCapacidade;
use App\Services\ServiceBase;
use Illuminate\Support\Facades\Auth;

class TipoCapacidadeService extends ServiceBase {

    public $tiposCapacidades = [
        /* Capacidades do menu principal*/
        ["e06f49cb-ba9a-11ec-a5bb-0050569c64a0", "MENU_CAD_ACESSO", "Permite acessar o menu cadastro"],
        ["e089d591-ba9a-11ec-a5bb-0050569c64a0", "MENU_CONFIG_ACESSO", "Permite acessar o menu configurações"],
        ["e07877ef-ba9a-11ec-a5bb-0050569c64a0", "MENU_GESTAO_ACESSO", "Permite acessar o menu gestão"],
        ["e0814f12-ba9a-11ec-a5bb-0050569c64a0", "MENU_REL_ACESSO", "Permite acessar o menu relatórios"],
        ["e0914e12-ba9a-11ec-a5bb-0050569c64a0", "DEV_MENU_LOGS_ACESSO", "Permite acessar o menu logs"],
        /* Capacidades do DASHBOARD */
        ["dd6f49cb-ba9a-11ec-a5bb-0050569c64a0", "DASH_PRG", "Permite mostrar informações do Programa de Gestão"],
        /* Capacidades do módulo AFASTAMENTO*/
        ["1364489d-bc1b-11ec-a5bb-0050569c64a0", "MOD_AFT", "Permite acessar item menu afastamentos"],
        ["a937cc49-e112-11ec-a5bb-0050569c64a0", "MOD_AFT_CONS", "Permite consultar afastamento"],
        ["136aec78-bc1b-11ec-a5bb-0050569c64a0", "MOD_AFT_EDT", "Permite editar afastamento"],
        ["583ca946-ba5e-11ec-a5bb-0050569c64a0", "MOD_AFT_EXCL", "Permite excluir afastamento"],
        ["5835bb23-ba5e-11ec-a5bb-0050569c64a0", "MOD_AFT_INCL", "Permite incluir afastamento"],
        /* Capacidades do módulo ATIVIDADES*/
        ["135d8b9d-bc1b-11ec-a5bb-0050569c64a0", "MOD_ATV", "Permite acessar item menu atividade"],
        ["a92eb6f3-e112-11ec-a5bb-0050569c64a0", "MOD_ATV_CONS", "Permite consultar atividade"],
        ["57e92614-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_EDT", "Permite editar atividades"],
        ["581f16a2-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_EDT_OTR_OP_DT_HOM", "Permite editar data homologação"],
        ["5818448e-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_EDT_OTR_OP_HOM", "Permite editar dados homologado UG"],
        ["5826a8eb-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_EDT_OTR_OP_PROD", "Permite editar produtividade desativada"],
        ["57f173df-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_EDT_PCPL", "Permite editar atividades na guia principal"],
        ["58118e5f-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_EDT_PRE_DEF", "Permite editar dados guia pré-definidas"],
        ["57f886a8-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_EDT_TP_MIN", "Permite editar tempo máximo da atividade"],
        ["5801462b-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_EDT_UND", "Permite editar unidade associada à atividade"],
        ["580a787a-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_EDT_VAR_P", "Permite editar guia variação e produtividade"],
        ["582df05e-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_EXCL", "Permite excluir atividades"],
        ["57aadcb5-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_INCL", "Permite incluir atividades"],
        ["57dbc094-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_INCL_OTR_OP_DHOM", "Permite incluir data homologação"],
        ["57d4d31a-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_INCL_OTR_OP_HOM", "Permite incluir dados homologado UG"],
        ["57e2453e-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_INCL_OTR_OP_PROD", "Permite incluir produtividade desativada"],
        ["57cdc4d4-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_INCL_PRE_DEF", "Permite acessar e editar guia pré-definidas"],
        ["57b99633-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_INCL_TP_MIN", "Permite incluir tempo máximo da atividade"],
        ["57c060e3-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_INCL_UND", "Permite incluir unidade associada à atividade"],
        ["57c70921-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_INCL_VAR_P", "Permite incluir dados guia variação e produtividade"],
        ["57b2bae5-ba5e-11ec-a5bb-0050569c64a0", "MOD_ATV_PCPL", "Permite incluir atividades na guia principal"],
        /* Capacidades do módulo CONFIGURAÇÂO*/
        ["72d68e2e-ca46-11ec-a5bb-0050569c64a0", "MOD_CFG_ENTD", "Permite acessar Entidade no menu configurações"],
        ["59d38d3d-ba5e-11ec-a5bb-0050569c64a0", "MOD_CFG_PERFS", "Permite configuração de perfis no petrvs"],
        ["59a42d8c-ba5e-11ec-a5bb-0050569c64a0", "MOD_CFG_PREF", "Permite configurar preferências"],
        ["59b4e264-ba5e-11ec-a5bb-0050569c64a0", "MOD_CFG_UND", "Permite configurar unidade"],
        ["b1bb0ef6-ca42-11ec-a5bb-0050569c64a0", "MOD_CFG_USER", "Permite alterar configurações de usuário"],
        ["c62b5769-cfb1-11ec-a5bb-0050569c64a0", "MOD_CFG_USER_APELIDO", "Permite alterar valor campo apelido do usuário"],
        ["c5fce3a5-cfb1-11ec-a5bb-0050569c64a0", "MOD_CFG_USER_CPF", "Permite alterar valor campo CPF do usuário"],
        ["c6104de4-cfb1-11ec-a5bb-0050569c64a0", "MOD_CFG_USER_MAIL", "Permite alterar valor campo e-Mail do usuário"],
        ["c6070d0d-cfb1-11ec-a5bb-0050569c64a0", "MOD_CFG_USER_MAT", "Permite alterar valor campo matrícula do usuário"],
        ["c622311a-cfb1-11ec-a5bb-0050569c64a0", "MOD_CFG_USER_NOME", "Permite alterar valor campo nome do usuário"],
        ["c6195904-cfb1-11ec-a5bb-0050569c64a0", "MOD_CFG_USER_PERFIL", "Permite alterar valor campo perfil do usuário"],
        ["c63cf23a-cfb1-11ec-a5bb-0050569c64a0", "MOD_CFG_USER_TEL", "Permite alterar valor campo telefone do usuário"],
        ["c6346130-cfb1-11ec-a5bb-0050569c64a0", "MOD_CFG_USER_UF", "Permite alterar valor campo UF do usuário"],
        /* Capacidades do módulo CIDADE*/
        ["137174c1-bc1b-11ec-a5bb-0050569c64a0", "MOD_CID", "Permite acessar item menu cidades"],
        ["a9447b27-e112-11ec-a5bb-0050569c64a0", "MOD_CID_CONS", "Permite consultar cidade"],
        ["584b43d1-ba5e-11ec-a5bb-0050569c64a0", "MOD_CID_EDT", "Permite editar cidades"],
        ["5843e477-ba5e-11ec-a5bb-0050569c64a0", "MOD_CID_EXCL", "Permite excluir cidades"],
        ["13781ad4-bc1b-11ec-a5bb-0050569c64a0", "MOD_CID_INCL", "Permite incluir cidades"],
        /* Capacidades do módulo DEMANDA*/
        ["1394761c-bc1b-11ec-a5bb-0050569c64a0", "MOD_DMD", "Permite acessar item menu demandas"],
        ["5908ba8f-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_ATV", "Permite associar atividade com demanda"],
        ["590f4c02-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_ATV_CMPLX", "Permite associar complexidade da atividade na demanda"],
        ["592516e7-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_ATV_DT_DST", "Permite associar data de distribuição com atividade em demanda"],
        ["591db138-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_ATV_PL_TRB", "Permite associar plano de trabalho com ativ/demanda"],
        ["593ab132-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_ATV_PZ_ENTG", "Permite associar prazo entrega de atividade da demanda"],
        ["591620ab-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_ATV_RESP", "Permite associar responsável pela demanda"],
        ["592c0eb4-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_ATV_TP_PCT", "Permite associar tempo pactuado na atividade"],
        ["5932b3ae-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_ATV_TP_PLJ", "Permite associar tempo planejado na atividade"],
        ["5932b3a8-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_ATV_FORA_PL_TRB", "Permite associar atividade que não consta no plano de trabalho"],
        ["5982006a-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_CONCL", "Permite concluir demandas iniciadas "],
        ["59895afc-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_CONCL_ATV", "Permite concluir atividade"],
        ["598ff674-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_CONCL_CMPLX", "Permite concluir complexidade"],
        ["5996bf8f-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_CONCL_DSC_TEC", "Permite concluir descrição técnica"],
        ["a8a5fca3-e112-11ec-a5bb-0050569c64a0", "MOD_DMD_CONS", "Permite consultar demanda"],
        ["a8947d5d-e112-11ec-a5bb-0050569c64a0", "MOD_DMD_EDT", "Permite editar demanda"],
        ["a89d5597-e112-11ec-a5bb-0050569c64a0", "MOD_DMD_EXCL", "Permite excluir demanda"],
        ["e4694b21-e27e-11ec-a5bb-0050569c64a0", "MOD_DMD_EXT", "Permite atribuir demandas a Unidades externas"],
        ["58fb78a3-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_I_AVAL", "Permite avaliar demanda iniciada"],
        ["58f4846d-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_I_CANC", "Permite cancelar demanda iniciada"],
        ["58d32fe4-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_I_COMT", "Permite comentar demanda iniciada"],
        ["58d9e224-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_I_CONCL", "Permite concluir demandas iniciadas "],
        ["58e7626d-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_I_EDT_INIC", "Permite editar início de demanda iniciada"],
        ["58cca427-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_I_INFO", "Permite obter informação sobre demandas iniciadas"],
        ["58e0b842-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_I_PPRZO", "Permite prorrogar prazo de demanda iniciada"],
        ["58edeae7-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_I_SUSP", "Permite suspender demanda iniciada"],
        ["59021caa-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_INCL", "Permite incluir demanda"],
        ["a88ba92b-e112-11ec-a5bb-0050569c64a0", "MOD_DMD_INCL", "Permite incluir demanda"],
        ["595851f7-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_INCL_COMPL", "Permite incluir complemtários para demandas"],
        ["594fffb9-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_INCL_COMT", "Permite incluir comentários nas demandas"],
        ["59499258-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_INCL_CRTZ", "Permite incluir caracterização para atividade de demanda"],
        ["59425add-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_INCL_VNCL", "Permite incluir vínculos na demanda"],
        ["595f4580-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_INICIAR", "Permite iniciar a demanda"],
        ["59747098-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_INICIO", "Permite definir início demanda"],
        ["596da7c8-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_MDL_INICIAR", "Permite iniciar modalidade"],
        ["58b1f97f-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_NI_COMT", "Permite comentar demanda não iniciada"],
        ["58c5ef0d-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_NI_EXCL", "Permite excluir demanda não iniciada"],
        ["58ab2cd7-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_NI_INFO", "Permite obter informação sobre demandas não iniciadas"],
        ["58b8b4f7-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_NI_INIC", "Permite iniciar demanda não iniciada"],
        ["58bf66ce-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_NI_INIC", "Permite concluir demanda não iniciada"],
        ["59660e0c-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_RESP_INICIAR", "Permite incluir responsável por demanda"],
        ["597b65e4-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_SUSP_DMAIS", "Permite suspender demais demandas"],
        ["597b65e5-ba5e-11ec-a5bb-0050569c64a0", "MOD_DMD_ATV_VAZIO", "Permite deixar campo Atividade em branco na inclusão da Demanda"],
        ["420fc2bf-f185-11ec-a5bb-0050569c64a0", "MOD_DMD_USERS_CANC_CONCL", "Permitir cancelar conclusão de demanda de qualquer usuário, inclusive de outra lotação"],
        ["4220646d-f185-11ec-a5bb-0050569c64a0", "MOD_DMD_USERS_CANC_INICIAR", "Permite cancelar início de demanda de de qualquer usuário, inclusive de outra lotação"],
        ["41f5ffca-f185-11ec-a5bb-0050569c64a0", "MOD_DMD_USERS_ALT", "Permite alterar a demanda de qualquer usuário, inclusive de outra lotação"],
        ["41f5ff01-f185-11ec-a5bb-0050569c64a0", "MOD_DMD_USERS_CONCL", "Permite concluir a demanda de qualquer usuário, inclusive de outra lotação"],
        ["1a6dbabc-f185-11ec-a5bb-0050569c64a0", "MOD_DMD_USERS_INICIAR", "Permite iniciar a demanda de qualquer usuário, inclusive de outra lotação"],
        ["1a87102e-f185-11ec-a5bb-0050569c64a0", "MOD_DMD_USERS_PAUSA", "Permitir pausar/suspender demanda iniciada de qualquer usuário, inclusive de outra lotação"],
        ["c43c21cb-f882-11ec-a5bb-0050569c64a0", "MOD_DMD_USERS_ALT_CONCL", "Permite alterar conclusão de demanda de qualquer usuário, inclusive de outra lotação"],
        ["c42cf15e-f882-11ec-a5bb-0050569c64a0", "MOD_DMD_USERS_COMT", "Permite adicionar comentário de demanda de qualquer usuário, inclusive de outra lotação"],
        ["c41c3d79-f882-11ec-a5bb-0050569c64a0", "MOD_DMD_USERS_PPRZO", "Permite prorrogar prazo de demanda de qualquer usuário, inclusive de outra lotação"],
        ["0a743c8e-fbb6-11ec-a5bb-0050569c64a0", "MOD_DMD_USERS_AVAL", "Permite avaliar demanda de qualquer usuário, inclusive de outra lotação"],
        ["b006a737-f94d-11ec-a5bb-0050569c64a0", "MOD_DMD_USERS_ALT_AVAL", "Permite alterar avaliação de demanda de qualquer usuário, inclusive de outra lotação"],
        ["b0118ccd-f94d-11ec-a5bb-0050569c64a0", "MOD_DMD_USERS_EXCL", "Permite excluir demanda de qualquer usuário, inclusive de outra lotação"],
        ["2da688ee-2221-11ed-a5bb-0050569c64a0", "MOD_DMD_USERS_ATRIB", "Permite qualquer usuário atribuir demanda para qualqer outro"],
        ["b856b5f9-4bca-11ed-a5bb-0050569c64a0", "MOD_DMD_TRF_INCL", "Permite incluir tarefas dentro de demandas"],
        ["d5b0b20b-4bcc-11ed-a5bb-0050569c64a0", "MOD_DMD_TRF_EDT", "Permite editar tarefas dentro de demandas"],
        ["ef26230f-4bcc-11ed-a5bb-0050569c64a0", "MOD_DMD_TRF_EXCL", "Permite exluir tarefas dentro de demandas"],
        ["0c27addd-4bcd-11ed-a5bb-0050569c64a0", "MOD_DMD_TRF_CONS", "Permite consultar tarefas dentro de demandas"],
        ["b0990593-516b-11ed-a5bb-0050569c64a0", "MOD_DMD_CLONAR", "Permite clonar demandas"],
        /* Capacidades do módulo ENTIDADE*/
        ["ea2610e6-e1d7-11ec-a5bb-0050569c64a0", "MOD_ENTD_CFG", "Permite configurar Entidade"],
        ["a8ef649e-e112-11ec-a5bb-0050569c64a0", "MOD_ENTD_CONS", "Permite consultar Entidade"],
        ["a8dd768b-e112-11ec-a5bb-0050569c64a0", "MOD_ENTD_EDT", "Permite editar entidade"],
        ["a8e681cb-e112-11ec-a5bb-0050569c64a0", "MOD_ENTD_EXCL", "Permite excluir Entidade"],
        ["a8d2be35-e112-11ec-a5bb-0050569c64a0", "MOD_ENTD_INCL", "Permite incluir Entidade"],
        /* Capacidades do módulo FERIADO*/
        ["137ead0d-bc1b-11ec-a5bb-0050569c64a0", "MOD_FER", "Permite acessar item menu feriados"],
        ["a94d1649-e112-11ec-a5bb-0050569c64a0", "MOD_FER_CONS", "Permite consultar feriado"],
        ["58597571-ba5e-11ec-a5bb-0050569c64a0", "MOD_FER_EDT", "Permite editar feriados"],
        ["5866c502-ba5e-11ec-a5bb-0050569c64a0", "MOD_FER_ENT_EDT", "Permite editar entidades em feriado"],
        ["58602a42-ba5e-11ec-a5bb-0050569c64a0", "MOD_FER_ENT_INCL", "Permite incluir entidades em feriado"],
        ["a925169b-e112-11ec-a5bb-0050569c64a0", "MOD_FER_EXCL", "Permite excluir feriado"],
        ["58524ff3-ba5e-11ec-a5bb-0050569c64a0", "MOD_FER_INCL", "Permite incluir feriados"],
        /* Capacidades do módulo LOGS*/
        ["5a5254fe-d27c-11ec-a5bb-0050569c64a0", "DEV_MOD_LOGS", "Permite manter registros de logs"],
        /* Capacidades do módulo LOTAÇÃO*/
        ["593ebdb2-e1d0-11ec-a5bb-0050569c64a0", "MOD_LOT_CONS", "Permite consultar lotação"],
        ["592a7d9f-e1d0-11ec-a5bb-0050569c64a0", "MOD_LOT_EDT", "Permite editar lotação"],
        ["59347c2e-e1d0-11ec-a5bb-0050569c64a0", "MOD_LOT_EXCL", "Permite excluir lotação"],
        ["591fbe4f-e1d0-11ec-a5bb-0050569c64a0", "MOD_LOT_INCL", "Permite incluir lotação"],
        ["a91bb1b0-e112-11ec-a5bb-0050569c64a0", "MOD_PERF_CONS", "Permite consultar perfil"],
        /* Capacidades do módulo MATERIAIS E SERVICOS*/
        ["137174c1-bc1b-11ed-a5bb-0050569c64a0", "MOD_MATSRV", "Permite acessar item menu materiais e serviços"],
        ["a9447b27-e112-11ed-a5bb-0050569c64a0", "MOD_MATSRV_CONS", "Permite consultar materiais e serviços"],
        ["584b43d1-ba5e-11ed-a5bb-0050569c64a0", "MOD_MATSRV_EDT", "Permite editar materiais e serviços"],
        ["5843e477-ba5e-11ed-a5bb-0050569c64a0", "MOD_MATSRV_EXCL", "Permite excluir materiais e serviços"],
        ["13781ad4-bc1b-11ed-a5bb-0050569c64a0", "MOD_MATSRV_INCL", "Permite incluir materiais e serviços"],
        /* Capacidades do módulo PROJETO RECURSO*/
        ["584b43d1-cd5e-11ed-a5bb-0050569c64a0", "MOD_PROJ_REC_EDT", "Permite editar projeto recurso"],
        ["5843e477-cd5e-11ed-a5bb-0050569c64a0", "MOD_PROJ_REC_EXCL", "Permite excluir projeto recurso"],
        ["13781ad4-cd1b-11ed-a5bb-0050569c64a0", "MOD_PROJ_REC_INCL", "Permite incluir projeto recurso"],
        /* Capacidades do módulo PROJETO REGRA*/
        ["584b43d1-ef5e-11ed-a5bb-0050569c64a0", "MOD_PROJ_REG_EDT", "Permite editar projeto regra"],
        ["5843e477-ef5e-11ed-a5bb-0050569c64a0", "MOD_PROJ_REG_EXCL", "Permite excluir projeto regra"],
        ["13781ad4-ef1b-11ed-a5bb-0050569c64a0", "MOD_PROJ_REG_INCL", "Permite incluir projeto regra"],
        /* Capacidades do módulo PERFIL*/
        ["a909d7f4-e112-11ec-a5bb-0050569c64a0", "MOD_PERF_EDT", "Permite editar perfil"],
        ["a91299bb-e112-11ec-a5bb-0050569c64a0", "MOD_PERF_EXCL", "Permite excluir perfil"],
        ["a900c63b-e112-11ec-a5bb-0050569c64a0", "MOD_PERF_INCL", "Permite incluir perfil"],
        /* Capacidades do módulo PROG TRABALHO*/
        ["138d5fbd-bc1b-11ec-a5bb-0050569c64a0", "MOD_PRGT", "Permite acessar item menu programa de gestão"],
        ["a95ed0c2-e112-11ec-a5bb-0050569c64a0", "MOD_PRGT_CONS", "Permite consultar programa de gestão"],
        ["5888ce58-ba5e-11ec-a5bb-0050569c64a0", "MOD_PRGT_EDT", "Permite editar programas de gestão"],
        ["588fb2a5-ba5e-11ec-a5bb-0050569c64a0", "MOD_PRGT_EXCL", "Permite excluir programas de gestãoo"],
        ["58821e6b-ba5e-11ec-a5bb-0050569c64a0", "MOD_PRGT_INCL", "Permite incluir programas de gestão"],
        ["589de4b3-ba5e-11ec-a5bb-0050569c64a0", "MOD_PROC_INCL", "Permite incluir tipos de processos"],
        /* Capacidades do módulo PROJETO*/
        ["599d88d5-ba5e-11ec-a5bb-0050569c64a0", "MOD_PROJ", "Permite acessar módulo projetos"],
        ["a8ca0501-e112-11ec-a5bb-0050569c64a0", "MOD_PROJ_CONS", "Permite consultar projeto"],
        ["a8b7a281-e112-11ec-a5bb-0050569c64a0", "MOD_PROJ_EDT", "Permite editar projeto"],
        ["a8c01b79-e112-11ec-a5bb-0050569c64a0", "MOD_PROJ_EXCL", "Permite excluir projeto"],
        ["a8aea03f-e112-11ec-a5bb-0050569c64a0", "MOD_PROJ_INCL", "Permite incluir Projetos"],
        /* Capacidades do módulo PLANO TRABALHO*/
        ["1385cf7e-bc1b-11ec-a5bb-0050569c64a0", "MOD_PTR", "Permite acessar item menu plano de trabalho"],
        ["a955ab4b-e112-11ec-a5bb-0050569c64a0", "MOD_PTR_CONS", "Permite consultar plano de trabalho"],
        ["5874ca35-ba5e-11ec-a5bb-0050569c64a0", "MOD_PTR_EDT", "Permite editar planos de trabalho"],
        ["587b5ee2-ba5e-11ec-a5bb-0050569c64a0", "MOD_PTR_EXCL", "Permite excluir planos de trabalho"],
        ["586e1c05-ba5e-11ec-a5bb-0050569c64a0", "MOD_PTR_INCL", "Permite incluir planos de trabalho"],
        ["4239b275-f185-11ec-a5bb-0050569c64a0", "MOD_PTR_USERS_CONS", "Permite consultar planos de trabalho de usuários fora da lotação"],
        ["4248eae1-f185-11ec-a5bb-0050569c64a0", "MOD_PTR_USERS_EXCL", "Permite excluir planos de trabalho de usuários fora da lotação"],
        ["1aadc1b2-f185-11ec-a5bb-0050569c64a0", "MOD_PTR_USERS_INCL", "Permite incluir planos de trabalho de usuários fora da lotação"],
        ["1aadc1b3-f185-11ec-a5bb-0050569c64a0", "MOD_PTR_INCL_SEM_LOT", "Permite incluir planos de trabalho para usuários não lotado na unidade do plano"],
        ["1aadc1b4-f199-11ec-a5bb-0050569c64a0", "MOD_PTR_INTSC_DATA", "Permite incluir planos de trabalho para usuários que já possuem planos no período de mesma modalidade"],
        ["61347aa4-d628-11ec-a5bb-0050569c64a0", "MOD_TIPO_ATV", "Permite acessar item de menu cadastro->tipo de atividade"],
        ["a7a8bd66-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_ATV_CONS", "Permite consultar atividade"],
        ["a797073d-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_ATV_EDT", "Permite editar atividades"],
        ["a79fc431-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_ATV_EXCL", "Permite excluir atividades"],
        ["a78e5634-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_ATV_INCL", "Permite incluir tipos de atividades"],
        ["61417c67-d628-11ec-a5bb-0050569c64a0", "MOD_TIPO_AVAL", "Permite acessar item de menu cadastro->tipos de avaliações"],
        ["a7cc36a0-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_AVAL_CONS", "Permite consultar tipos de avaliações"],
        ["a7ba391d-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_AVAL_EDT", "Permite editar tipos de avaliações"],
        ["a7c38cc8-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_AVAL_EXCL", "Permite excluir tipos de avaliações"],
        ["a7b18540-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_AVAL_INCL", "Permite incluir tipos de avaliações"],
        ["6ac04dbf-d773-11ec-a5bb-0050569c64a0", "MOD_TIPO_CAP", "Permite acessar configurações de capacidades de usuário"],
        ["6ae4998e-d773-11ec-a5bb-0050569c64a0", "MOD_TIPO_CAP_CONS", "Permite consultar tipo de capacidade"],
        ["6ad2a187-d773-11ec-a5bb-0050569c64a0", "MOD_TIPO_CAP_EDT", "Permite editar tipo de capacidade"],
        ["6adbb1d1-d773-11ec-a5bb-0050569c64a0", "MOD_TIPO_CAP_EXCL", "Permite excluir tipo de capacidade"],
        ["6ac9734f-d773-11ec-a5bb-0050569c64a0", "MOD_TIPO_CAP_INCL", "Permite incluir tipos de capacidades"],
        ["614d6c36-d628-11ec-a5bb-0050569c64a0", "MOD_TIPO_DOC", "Permite acessar item de menu cadastro->tipo de documento"],
        ["a7f181a5-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_DOC_CONS", "Permite consultar tipos de documentos"],
        ["a7df57bb-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_DOC_EDT", "Permite editar tipos de documentos"],
        ["a7e859d9-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_DOC_EXCL", "Permite excluir tipos de documentos"],
        ["a7d64568-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_DOC_INCL", "Permite incluir tipos de documentos"],
        ["615bc1ae-d628-11ec-a5bb-0050569c64a0", "MOD_TIPO_JUST", "Permite acessar item de menu cadastro->tipo de justificativa"],
        ["a81587b8-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_JUST_CONS", "Permite consultar tipos de justificativas"],
        ["a802caac-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_JUST_EDT", "Permite editar tipos de justificativas"],
        ["a80b71cf-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_JUST_EXCL", "Permite excluir tipos de justificativas"],
        ["a7fa1e07-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_JUST_INCL", "Permite incluir tipos de justificativas"],
        ["61689182-d628-11ec-a5bb-0050569c64a0", "MOD_TIPO_MDL", "Permite acessar item de menu cadastro->tipo de modalidade"],
        ["a83a1b91-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_MDL_CONS", "Permite consultar tipos de modalidades"],
        ["a82859f9-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_MDL_EDT", "Permite editar tipos de modalidades"],
        ["a831344a-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_MDL_EXCL", "Permite excluir tipos de modalidades"],
        ["a81ec00e-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_MDL_INCL", "Permite incluir tipos de modalidades"],
        ["6174addb-d628-11ec-a5bb-0050569c64a0", "MOD_TIPO_MTV_AFT", "Permite acessar item de menu cadastro->tipo de motivo de afastamento"],
        ["a85d5ec6-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_MTV_AFT_CONS", "Permite consultar tipos de motivos de afastamentos"],
        ["a84bb4d0-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_MTV_AFT_EDT", "Permite editar tipos de motivos de afastamentos"],
        ["a85487a2-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_MTV_AFT_EXCL", "Pemite excluir tipos de motivos de afastamentos"],
        ["a842e575-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_MTV_AFT_INCL", "Permite incluir tipos de motivos de afastamentos"],
        ["6180bef3-d628-11ec-a5bb-0050569c64a0", "MOD_TIPO_PROC", "Permite acessar item de menu cadastro->tipo de processo"],
        ["a88181ce-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_PROC_CONS", "Permite consultar tipos de processos"],
        ["a86edd64-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_PROC_EDT", "Permite editar tipos de processos"],
        ["a878bbcd-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_PROC_EXCL", "Permite excluir tipos de processos"],
        ["a8663c3e-e112-11ec-a5bb-0050569c64a0", "MOD_TIPO_PROC_INCL", "Permite incluir tipos de processos"],
        ["58965579-ba5e-11ec-a5bb-0050569c64a0", "MOD_TPMAF_INCL", "Permite incluir tipos de motivos de afastamentos"],
        /* Capacidades do módulo TAREFAS*/
        ["f865f94c-d773-11ec-a5bb-0050569c64a0", "MOD_TRF", "Permite acessar módulo/item de menu tarefas"],
        ["a967d9aa-e112-11ec-a5bb-0050569c64a0", "MOD_TRF_CONS", "Permite consultar tarefa"],
        ["f87ac6fb-d773-11ec-a5bb-0050569c64a0", "MOD_TRF_EDT", "Permite editar tarefas"],
        ["f8842199-d773-11ec-a5bb-0050569c64a0", "MOD_TRF_EXCL", "Permite excluir tarefas"],
        ["f870468a-d773-11ec-a5bb-0050569c64a0", "MOD_TRF_INCL", "Permite incluir tarefas"],
        ["a8f812b0-e112-11ec-a5bb-0050569c64a0", "MOD_UND_CONS", "Permite consultar Unidades"],
        ["59c5af34-ba5e-11ec-a5bb-0050569c64a0", "MOD_UND_EDT", "Permite editar Unidade"],
        ["59cc5a3f-ba5e-11ec-a5bb-0050569c64a0", "MOD_UND_EXCL", "Permite excluir Unidade"],
        ["59bcba4f-ba5e-11ec-a5bb-0050569c64a0", "MOD_UND_INCL", "Permite incluir Unidades"],
        ["e45ebff5-e27e-11ec-a5bb-0050569c64a0", "MOD_UND_TUDO", "Permite consultar qualquer unidade independente de subordinação"],
        /* Capacidades do módulo USUÁRIO*/
        ["5a5254fe-d21a-11ec-a5bb-0050569c64a0", "MOD_USER_CONS", "Permite consultar dados de usuário"],
        ["5a5a5e9c-d21a-11ec-a5bb-0050569c64a0", "MOD_USER_EDT", "Permite alterar dados de usuário"],
        ["5a62d79e-d21a-11ec-a5bb-0050569c64a0", "MOD_USER_EXCL", "Permite excluir dados de usuário"],
        ["5a498c43-d21a-11ec-a5bb-0050569c64a0", "MOD_USER_INCL", "Permite incluir usuário"],
        ["e453253c-e27e-11ec-a5bb-0050569c64a0", "MOD_USER_TUDO", "Permite consultar qualquer usuário independente de lotação"]
    ];

    private function differentDev(&$data) {
        if(Auth::user()->perfil_id <> config('petrvs')['ids_fixos']['developer_id']){
            if(isset($data['where']) && count($data['where']) > 0) {
                if(gettype($data['where'][0]) == "string") {
                    $data['where'] = [["codigo", "not like", "DEV_%"], $data['where']];
                } else {
                    $data['where'][] = ["codigo", "not like", "DEV_%"];
                }
            } else {
                $data['where'] = [["codigo", "not like", "DEV_%"]];
            }
        }
    }

    public function searchText($data) {
        $this->differentDev($data);
        return parent::searchText($data);
    }

    public function query($data) {
        $this->differentDev($data);
        return parent::query($data);
    }
}
