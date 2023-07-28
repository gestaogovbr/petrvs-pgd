import { Injectable,Injector } from '@angular/core';
import { DaoBaseService } from './dao-base.service';
import { Curriculum } from '../models/currriculum.model';

@Injectable({
  providedIn: 'root'
})
export class CurriculumDaoService extends DaoBaseService<Curriculum>{
 
  constructor(protected injector: Injector) { 
    super("Curriculum", injector);
    this.searchFields = ["apresentacao", "telefone","idiomas","estado_civil","quantidade_filhos"];
  }  
}

