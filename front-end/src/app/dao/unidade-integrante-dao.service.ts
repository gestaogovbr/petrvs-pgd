import { Injectable, Injector } from '@angular/core';
import { DaoBaseService } from './dao-base.service';
import { UnidadeIntegrante, IntegranteConsolidado } from '../models/unidade-integrante.model';
import { Unidade } from '../models/unidade.model';
import { Usuario } from '../models/usuario.model';
import { IntegranteAtribuicao } from '../models/base.model';

export type LoadIntegrantesResult = {
  integrantes: IntegranteConsolidado[],
  unidade?: Unidade,
  usuario?: Usuario
}
export type Vinculo = {
    ['unidade_id']: string,
    ['usuario_id']: string,
    ['atribuicoes']: IntegranteAtribuicao[],
    ['msg']?: string
}

@Injectable({
  providedIn: 'root'
})
export class UnidadeIntegranteDaoService extends DaoBaseService<UnidadeIntegrante> {

  constructor(protected injector: Injector) { 
    super("UnidadeIntegrante", injector);
    this.inputSearchConfig.searchFields = [];
  }  

  public loadIntegrantes(unidade_id: string, usuario_id: string): Promise<LoadIntegrantesResult> {
    return new Promise<LoadIntegrantesResult>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/load-integrantes', {unidade_id, usuario_id}).subscribe(response => {
        resolve({
          integrantes: response?.rows || [],
          unidade: response?.unidade,
          usuario: response?.usuario
        });
      }, error => reject(error));
    });
  }

  public saveIntegrante(vinculos: Vinculo[]): Promise<Vinculo[]> {
    return new Promise<Vinculo[]>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/save-integrante', {vinculos}).subscribe(response => {
        if(response?.error) reject(response.error); else resolve(response?.data || null);
      }, 
      error => reject(error));
    });
  }

}

