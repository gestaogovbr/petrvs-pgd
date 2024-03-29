import { Base } from './base.model';

export class Funcao extends Base {
  
    public nome: string = ""; //Nome da funcao
    public nivel: string = ""; //Nível da funcao
    public descricao: string = ""; //Descrição da funcao
    public siape: string = ""; //Código SIAPE da funcao
    public cbo: string = ""; //Código CBO da funcao
    public ativo: number = 1; //Funcao esta ativo ou não
       
    public constructor(data?: any) { super(); this.initialization(data); }
}

