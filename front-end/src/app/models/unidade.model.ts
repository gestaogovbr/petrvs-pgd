import { LookupItem } from '../services/lookup.service';
import { Base } from './base.model';
import { Cidade } from './cidade.model';
import { Entidade } from './entidade.model';
import { Expediente } from './expediente.model';
import { HasNotificacao, NotificacoesConfig } from './notificacao.model';
import { PlanoEntrega } from './plano-entrega.model';
import { UnidadeIntegrante } from './unidade-integrante.model';
import { Usuario } from './usuario.model';

export type DistribuicaoFormaContagemPrazos = "HORAS_CORRIDAS" | "DIAS_CORRIDOS" | "HORAS_UTEIS" | "DIAS_UTEIS";
export type EntregaFormaContagemPrazos = "HORAS_CORRIDAS" | "HORAS_UTEIS";

export class Unidade extends Base implements HasNotificacao {
    public entidade?: Entidade; /* Objeto da entidade */
    public cidade?: Cidade; /* Objeto da cidade */
    public gestor?: Usuario; /* Objeto do ususario gestor */
    public gestor_substituto?: Usuario; /* Objeto do ususario gestor substituto */
    public unidade?: Unidade; /* Objeto da unidade pai */
    public planos_entregas?: PlanoEntrega[]; /* Array de objetos de Plano de Entrega */
    public integrantes?: UnidadeIntegrante[]; /* Array de objetos do tipo UnidadeIntegrante */

    public codigo: string = ""; //Código da unidade
    public sigla: string = ""; //Sigla da unidade
    public nome: string = ""; //Nome da unidade
    public path: string = ""; //Path dos nós pais separados por /
    public atividades_arquivamento_automatico: number = 0; //Se arquiva automaticamente após avaliação
    public atividades_avaliacao_automatico: number = 0; //Se avalia automaticamente ao final do prazo para avaliação com nota 10 (pela IN65/2020-ME é 45 dias após a entrega)
    public planos_prazo_comparecimento: number = 1; //Prazo de antecedência para comunicar o usuário de seu comparecimento na unidade
    public planos_tipo_prazo_comparecimento: string = "DIAS"; //["HORAS", "DIAS"] //Unidade de medida para contagem do planos_prazo_comparecimento
    public distribuicao_forma_contagem_prazos: DistribuicaoFormaContagemPrazos = "DIAS_UTEIS";// ["HORAS_CORRIDAS", "DIAS_CORRIDOS", "HORAS_UTEIS", "DIAS_UTEIS"]) //Forma da contagem de prazo na distribuição
    public entrega_forma_contagem_prazos: EntregaFormaContagemPrazos = "HORAS_UTEIS";// ["HORAS_CORRIDAS", "HORAS_UTEIS"]) //Forma da contagem de prazo na entrega
    public notificacoes: NotificacoesConfig = new NotificacoesConfig(); // Mensagens
    public autoedicao_subordinadas: number = 0; //Permitir a autoedição de informações gerais pelas unidades subordinadas (nome, sigla, codigo_pai)
    public etiquetas: LookupItem[] = []; //Configuração das etiquetas que serão utilizadas nas atividades (contém nome, icone e cor)
    public checklist: LookupItem[] = []; //Nome dos checklist
    public inativo: Date | null = null; //Se a unidade está inativa
    public expediente: Expediente | null = null; // Expediente (Não nulo)
    public avaliacao_hierarquica: boolean = false; // Se permite que unidades superiores façam avaliação
    public texto_complementar_plano: string | null = ""; // Mensagem adicional para o plano de trabalho

    public unidade_id: string | null = null; //Unidade superior (nó pai hierárquico)
    public entidade_id: string | null = null; // Entidade referente
    public gestor_id: string | null = null; // Usuário gestor da unidade
    public gestor_substituto_id: string | null = null; // Usuário gestor substituto da unidade
    public cidade_id: string = ""; // Cidade;

    public constructor(data?: any) { super(); this.initialization(data); }
}