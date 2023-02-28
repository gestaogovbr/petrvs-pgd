import { Injectable, Injector } from '@angular/core';
import { TemplateDataset } from '../components/input/input-editor/input-editor.component';
import { Unidade } from '../models/unidade.model';
import { AreaRelatorio } from '../modules/base/page-report-base';
import { CidadeDaoService } from './cidade-dao.service';
import { DaoBaseService } from './dao-base.service';
import { EntidadeDaoService } from './entidade-dao.service';
import { UsuarioDaoService } from './usuario-dao.service';

export type UnidadeDashboard = {
  sigla: string,                                    // nome da Unidade
  qdePTAtivos: number,                              // quantidade de Planos de Trabalho ativos (vigentes)
  horasUteisTotaisPTAtivos: number,                 // total de horas úteis totais dos Planos de Trabalho ativos
  qdeServidores: number,                            // quantidade de servidores vinculados aos Planos de Trabalho da Unidade
  modalidadesPlanos: string[]
};

@Injectable({
  providedIn: 'root'
})
export class UnidadeDaoService extends DaoBaseService<Unidade> {

  public usuarioDao: UsuarioDaoService;
  public entidadeDao: EntidadeDaoService;
  public cidadeDao: CidadeDaoService;

  constructor(protected injector: Injector) {
    super("Unidade", injector);
    this.usuarioDao = injector.get<UsuarioDaoService>(UsuarioDaoService);
    this.entidadeDao = injector.get<EntidadeDaoService>(EntidadeDaoService);
    this.cidadeDao = injector.get<CidadeDaoService>(CidadeDaoService);
    this.searchFields = ["codigo", "sigla", "nome"];
  }

  public dataset(deeps?: string[]): TemplateDataset[] {
    return this.deepsFilter([
      { field: "codigo", label: "Código" },
      { field: "sigla", label: "Sigla" },
      { field: "nome", label: "Nome" },
      { field: "gestor", label: "Gestor", fields: this.usuarioDao.dataset([]) },
      { field: "gestor_substituto", label: "Gestor substituto", fields: this.usuarioDao.dataset([]) },
      { field: "entidade", label: "Entidade", dao: this.entidadeDao },
      { field: "cidade", label: "Cidade", dao: this.cidadeDao }
    ]);
  }

  public metadadosArea(unidade_id: String, programa_id: String): Promise<AreaRelatorio> {
    return new Promise<AreaRelatorio>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/metadados-area', {unidade_id, programa_id}).subscribe(response => {
        resolve(response?.metadadosArea || []);
      }, error => reject(error));
    });
  }

  public dashboards(idsUnidades: string[], programa_id: String, unidadesSubordinadas: boolean): Promise<UnidadeDashboard[] | null> {
    return new Promise<UnidadeDashboard[] | null>((resolve, reject) => {
      if(idsUnidades?.length && programa_id.length){
        this.server.post('api/' + this.collection + '/dashboards', {idsUnidades, programa_id, unidadesSubordinadas}).subscribe(response => {
          resolve(response?.dashboards as UnidadeDashboard[]);
        }, error => reject(error));
      } else {
        resolve(null);
      }
    });
  }

  /* Retorna todas as unidades que têm a mesma sigla da entidade atual */
  public mesmaSigla() {
    return new Promise<Unidade[]>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/mesma-sigla', {}).subscribe(response => {
        resolve(response?.rows || []);
      }, error => reject(error));
    });
  }

  public unificar(correspondencias: {unidade_origem_id: string, unidade_destino_id: string}[], exclui: boolean) {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/unificar', {correspondencias, exclui}).subscribe(response => {
        resolve(!!response?.success);
      }, error => reject(error));
    });
  }

  public inativo(id: string, inativo: boolean) {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/inativo', {id, inativo}).subscribe(response => {
        resolve(!!response?.success);
      }, error => reject(error));
    });
  }

}
