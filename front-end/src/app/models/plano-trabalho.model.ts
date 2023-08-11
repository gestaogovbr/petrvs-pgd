import { Base } from './base.model';
import { TipoModalidade } from './tipo-modalidade.model';
import { Unidade } from './unidade.model';
import { Usuario } from './usuario.model';
import { Programa } from './programa.model';
import { TipoCargaHoraria } from './entidade.model';
import { PlanoEntrega } from './plano-entrega.model';
import { PlanoTrabalhoEntrega } from './plano-trabalho-entrega.model';
import { Documento, HasDocumentos } from './documento.model';
import { Atividade } from './atividade.model';
import { Status } from './status.model';
import { PlanoTrabalhoConsolidacao } from './plano-trabalho-consolidacao.model';

export type PlanoMetadados = {
  concluido: boolean
}

export class PlanoTrabalho extends Base implements HasDocumentos {
    public tipo_modalidade?: TipoModalidade;
    public plano_entrega?: PlanoEntrega;
    public unidade?: Unidade;
    public usuario?: Usuario;
    public programa?: Programa;
    public documento?: Documento;
    public statusAtual?: Status;

    public carga_horaria: number = 0; //Carga horária diária do usuário
    public tempo_total: number = 0; //Horas úteis de trabalho no período de data_inicio_vigencia à data_fim_vigencia considerando carga_horaria, feriados, fins de semana
    public tempo_proporcional: number = 0; //tempo_total menos os afastamentos
    public data_inicio_vigencia: Date = new Date(); //Inicio do plano
    public data_fim_vigencia: Date = new Date(); //Fim do plano
    public forma_contagem_carga_horaria: TipoCargaHoraria = "DIA"; // Forma de contagem padrão da carga horária
    public metadados: PlanoMetadados | undefined = undefined; /* Campo virtual contendo informações calculadas pelo servidor */
    public entregas: PlanoTrabalhoEntrega[] = []; /* Entregas vinculadas ao Plano de Trabalho*/
    public documentos: Documento[] = [];
    public atividades: Atividade[] = [];
    public statusHistorico: Status[] = [];  // Mudanças de status sofridas pelo plano de trabalho (histórico)
    public consolidacoes: PlanoTrabalhoConsolidacao[] = [];
    
    public programa_id: string = "";
    public usuario_id: string = "";
    public unidade_id: string = "";
    public tipo_modalidade_id: string = "";
    public plano_entrega_id: string = "";
    public documento_id: string = "";

    public constructor(data?: any) { super(); this.initialization(data); }
}