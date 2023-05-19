import { Injectable, Injector } from '@angular/core';
import { PlanoEntrega } from '../models/plano-entrega.model';
import { DaoBaseService } from './dao-base.service';

@Injectable({
  providedIn: 'root'
})
export class PlanoEntregaDaoService extends DaoBaseService<PlanoEntrega> {

  constructor(protected injector: Injector) {
    super("PlanoEntrega", injector);
  }

  public arquivar(plano_entrega_id: string, arquivar: boolean): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/arquivar', { id: plano_entrega_id, arquivar: arquivar }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public avaliar(plano_entrega_id: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/avaliar', { id: plano_entrega_id }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public cancelar(plano_entrega_id: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/cancelar', { id: plano_entrega_id }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public cancelarAvaliacao(plano_entrega_id: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/cancelar-avaliacao', { id: plano_entrega_id }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public cancelarConclusao(plano_entrega_id: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/cancelar-conclusao', { id: plano_entrega_id }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public cancelarHomologacao(plano_entrega_id: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/cancelar-homologacao', { id: plano_entrega_id }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public concluir(plano_entrega_id: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/concluir', { id: plano_entrega_id }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public homologar(plano_entrega_id: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/homologar', { id: plano_entrega_id }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  /**
   * Informa se o plano de entregas repassado como parâmetro está ativo, ou seja: é um plano válido (não foi deletado, não foi cancelado,
   * não foi arquivado) e possui o status ATIVO.
   * @param planoEntrega 
   * @returns 
   */
  public isAtivo(planoEntrega: PlanoEntrega): boolean {
    return this.isValido(planoEntrega) && planoEntrega.status == 'ATIVO';
  }

  /**
   * Informa se o plano de entregas repassado como parâmetro é válido, ou seja, não foi deletado, não foi cancelado nem foi arquivado.
   * @param planoEntrega 
   * @returns 
   */
  public isValido(planoEntrega: PlanoEntrega): boolean {
    return !planoEntrega.data_fim && !planoEntrega.data_cancelamento && !planoEntrega.data_arquivamento;
  }

  public liberarHomologacao(plano_entrega_id: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/liberar-homologacao', { id: plano_entrega_id }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public planosVinculados(planoEntrega: PlanoEntrega): PlanoEntrega[] {
    let result: PlanoEntrega[] = [];
    return result;
  }

  public reativar(plano_entrega_id: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/reativar', { id: plano_entrega_id }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public retirarHomologacao(plano_entrega_id: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/retirar-homologacao', { id: plano_entrega_id }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public suspender(plano_entrega_id: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/suspender', { id: plano_entrega_id }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }
}

