import { Base } from './base.model';
import { CurriculumProfissional } from './curriculum-profissional.model';
import { Curso } from './curso.model';

export class HistoricoDocenciaInterna extends Base {

  public curriculum_profissional?: CurriculumProfissional;
  public curso?: Curso;

  public curriculum_profissional_id: string = "";
  public curso_id: string = "";

  public constructor(data?: any) { super(); this.initialization(data); }
}
