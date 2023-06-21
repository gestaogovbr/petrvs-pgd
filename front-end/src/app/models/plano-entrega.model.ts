import { Base } from './base.model';
import { CadeiaValor } from './cadeia-valor.model';
import { Planejamento } from './planejamento.model';
import { PlanoEntregaEntrega } from './plano-entrega-entrega.model';
import { Programa } from './programa.model';
import { Unidade } from './unidade.model';

export type PlanoEntregaMetadados = {
  incluindo: boolean,
  homologando: boolean,
  ativo: boolean,
  suspenso: boolean,
  concluido: boolean,
  avaliado: boolean,
  arquivado: boolean
}
export class PlanoEntrega extends Base {
  public unidade?: Unidade;
  public planejamento?: Planejamento;
  public cadeia_valor?: CadeiaValor;
  public programa?: Programa;
  public plano_entrega_superior?: PlanoEntrega;

  public data_fim: Date | null = null;                              // Data em que o registro foi deletado (soft-delete)
  public inicio: Date = new Date();                                 // Data inicio do plano de entrega
  public fim: Date | null = null;                                   // Data fim do plano de entrega
  public nome: string = "";                                         // Nome do plano de entrega
  public numero?: number;                                           // Número do plano de entrega (Gerado pelo sistema)
  public status: string = 'INCLUINDO';                              // Status do plano de entrega
  public metadados: PlanoEntregaMetadados | undefined = undefined;  // Campo virtual contendo informações calculadas pelo servidor
  public data_cancelamento?: Date | null;
  public data_arquivamento?: Date | null;
  public unidade_id: string = '';
  public plano_entrega_id: string | null = null;
  public planejamento_id: string | null = null;
  public cadeia_valor_id: string | null = null;
  public programa_id: string | null = null;
  public entregas: PlanoEntregaEntrega[] = [];
  
  public constructor(data?: any) { super(); this.initialization(data); }
}