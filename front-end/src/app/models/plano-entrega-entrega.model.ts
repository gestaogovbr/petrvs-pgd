import { LookupItem } from '../services/lookup.service';
import { Base } from './base.model';
import { Entrega, EntregaValor } from './entrega.model';

export class PlanoEntregaEntrega extends Base {
  public entrega?: Entrega;

  public inicio: Date = new Date();               
  public fim: Date | null = null;                 
  public descricao: string = "";                  
  public cliente: string = "";                    
  public homologado: boolean = false;                 
  public meta: EntregaValor = {}; 
  public realizado: EntregaValor = {};
  public plano_entrega_id: string | null = null;
  public entrega_id: string = '';
  public entrega_pai_id: string = '';                        
  
  public constructor(data?: any) { super(); this.initialization(data); }
}