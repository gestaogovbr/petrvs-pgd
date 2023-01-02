import { Base } from './base.model';

export class TipoCapacidade extends Base {
    public descricao: string = ""; /* Descrição da capacidade (acesso) */
    public codigo: string = ""; /* Código da rotina no sistema (acesso) */

    public constructor(data?: any) { super(); this.initialization(data); }
}
