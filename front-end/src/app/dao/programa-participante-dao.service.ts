import { Injectable, Injector } from '@angular/core';
import { DaoBaseService } from './dao-base.service';
import { TemplateDataset } from '../components/input/input-editor/input-editor.component';
import { ProgramaParticipante } from '../models/programa-participante.model';
import { UsuarioDaoService } from './usuario-dao.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramaParticipanteDaoService extends DaoBaseService<ProgramaParticipante> {

  public usuarioDao: UsuarioDaoService;

  constructor(protected injector: Injector) { 
    super("ProgramaParticipante", injector);
    this.usuarioDao = injector.get<UsuarioDaoService>(UsuarioDaoService);
  }  

  public dataset(deeps?: string[]): TemplateDataset[] {
    return this.deepsFilter([
      { field: "habilitado", label: "Habilitado" },
      { field: "usuario", label: "Usuário", fields: this.usuarioDao.dataset(), type: "OBJECT" }
    ], deeps);
  }

  public habilitar(participantesIds: string[], programaId: string, habilitado: number) {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/habilitar', { 
        participantes_ids: participantesIds,
        programa_id: programaId,
        habilitado: habilitado 
      }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public notificar(item: ProgramaParticipante) {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/notificar', { 
        participantes_ids: item.id,
        programa_id: item.programa_id,
        habilitado: item.habilitado 
      }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

}

