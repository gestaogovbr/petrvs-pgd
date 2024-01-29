import { ExpressionStatement } from '@angular/compiler';
import { LookupItem } from '../services/lookup.service';
import { Base } from './base.model';
import { QuestionarioPergunta } from './questionario-pergunta.model';
import { QuestionarioResposta } from './questionario-resposta.model';



export class QuestionarioRespostaPergunta extends Base {

    public questionario_pergunta ?: QuestionarioPergunta;
    public questionario_resposta ?: QuestionarioResposta;
  
    public resposta: any = undefined;

    public questionario_pergunta_id : string = "";
    public questionario_resposta_id : string = "";
  
    public constructor(data?: any) { super(); this.initialization(data); }
}