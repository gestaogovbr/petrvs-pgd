import { Base } from './base.model';
import { Curriculum } from './currriculum.model';
import { Curso } from './curso.model'

export class CurriculumGraduacao extends Base {

    public curriculum?: Curriculum;
    public curso?: Curso;
    
    public pretensão: number = 0; //Pretensão de fazer curso caso não tenha
    public curriculum_id: string = ""; //ID do curriculum
    public curso_id: string = ""; //ID do curso 
        
    public constructor(data?: any) { super(); this.initialization(data); }
}
