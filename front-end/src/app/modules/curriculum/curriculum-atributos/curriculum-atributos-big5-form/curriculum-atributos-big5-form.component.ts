import { Component, Injector, ViewChild } from '@angular/core';
import { PageFormBase } from '../../../base/page-form-base';
import { EditableFormComponent } from 'src/app/components/editable-form/editable-form.component';
import { Questionario } from 'src/app/models/questionario.model';
import { QuestionarioDaoService } from 'src/app/dao/questionario-dao.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { IIndexable } from 'src/app/models/base.model';
import { QuestionarioPerguntaDaoService } from 'src/app/dao/questionario-pergunta-dao.service';
import { QuestionarioPreenchimento } from 'src/app/models/questionario-preenchimento.model';
import { QuestionarioPerguntaResposta } from 'src/app/models/questionario-pergunta-resposta.model';
import { QuestionarioPreenchimentoDaoService } from 'src/app/dao/questionario-preenchimento-dao.service';
import { LookupItem } from 'src/app/services/lookup.service';
import { QuestionarioPergunta } from 'src/app/models/questionario-pergunta.model';
import { InputRadioComponent } from 'src/app/components/input/input-radio/input-radio.component';

@Component({
  selector: 'curriculum-atributos-big5-form',
  templateUrl: './curriculum-atributos-big5-form.component.html',
  styleUrls: ['./curriculum-atributos-big5-form.component.scss']
})
export class CurriculumAtributosBig5FormComponent extends PageFormBase<QuestionarioPreenchimento, QuestionarioPreenchimentoDaoService>{
  @ViewChild(EditableFormComponent, { static: false }) public editableForm?: EditableFormComponent;
  @ViewChild('divb5', { static: false }) public divb5?: HTMLDivElement;
  @ViewChild('divextroversao', { static: false }) public divextroversao?: HTMLDivElement;
  @ViewChild('lblextroversao', { static: false }) public lblextroversao?: HTMLLabelElement;
  @ViewChild('btnv', { static: false }) public btnv?: HTMLButtonElement;
  @ViewChild('btne', { static: false }) public btne?: HTMLButtonElement;
  @ViewChild('radio', { static: false }) public radio?: InputRadioComponent;

  bigicoIMG: string;
  bigicoAmareloIMG: string;


  public questionarioDao: QuestionarioDaoService;
  public questionarioPerguntasDao: QuestionarioPerguntaDaoService;
  public questionario?: Questionario;
  public perguntas: QuestionarioPergunta[] = [];
  public respostas: QuestionarioPerguntaResposta[] = [];
  public opcoesEscolha: LookupItem[] = [{ 'key': 1, 'value': 'Muito Inadequado.' }, { 'key': 2, 'value': 'Relativamente Inadequado' }, { 'key': 3, 'value': 'Nem Adequado, Nem Inadequado' }, { 'key': 4, 'value': 'Relativamente Adequado' }, { 'key': 5, 'value': 'Muito Adequado' }];
  public controleP: number = 0;
  public controleV: number = 0;
  public controle: number = 0;
  public showPergunta: string = '';
  public numeroPergunta: number = 1;
  public total: number = 0;
  public valorEscolhido: string = '';
  public respostasB5: number[] = [];
  public arrayLabel: string = '';
  public extroversao: number = 0;
  public agradabilidade: number = 0;
  public conscienciosidade: number = 0;
  public estabilidade: number = 0;
  public abertura: number = 0;
  public chart: any;
  public respondido: boolean = false;
  public min: string = '';
  public max: string = '';
  public valueTrack: string = '';

  constructor(public injector: Injector) {
    super(injector, QuestionarioPreenchimento, QuestionarioPreenchimentoDaoService);
    this.join = ['questionario_resposta_pergunta'];
    this.questionarioDao = injector.get<QuestionarioDaoService>(QuestionarioDaoService);
    this.questionarioPerguntasDao = injector.get<QuestionarioPerguntaDaoService>(QuestionarioPerguntaDaoService);
    this.bigicoAmareloIMG = "/assets/images/icon_big_amarelo.png";
    this.bigicoIMG = "/assets/images/icon_big.png";
    this.form = this.fh.FormBuilder({
      radiob5: { default: false },
      lbl_extroversao: { default: '' },
      divextroversao: { default: '' },
    }, this.cdRef, this.validate);
  }

  public validate = (control: AbstractControl, controlName: string) => {
    let result = null;
    return result;
  }

  public async loadData(entity: QuestionarioPreenchimento, form: FormGroup) { }

  public async initializeData(form: FormGroup) {
    const questionarios = await this.questionarioDao?.query({ where: [['codigo', '==', 'B5']], join: ['perguntas'] }).asPromise();
    if (questionarios.length) {
      questionarios[0].perguntas = questionarios[0].perguntas?.sort((a, b) => a.sequencia! < b.sequencia! ? -1 : 1);
      this.perguntas = questionarios[0].perguntas;
      this.showPergunta = this.perguntas[this.controle].pergunta;
      this.questionario = questionarios[0];
      const questionarioPreenchimento = await this.dao?.query({ where: [['questionario_id', '==', this.questionario.id], ['usuario_id', '==', this.auth.usuario?.id]], join: ['respostas'] }).asPromise();
      this.entity = questionarioPreenchimento?.length ? questionarioPreenchimento[0] : undefined;
      let respostas: number[] = [];
      if (this.entity) {
        this.questionario.perguntas.forEach((pergunta, index) => {
          this.entity!.respostas?.forEach((resposta, index) => {
            if (pergunta.id == resposta.questionario_pergunta_id) respostas.push(resposta.resposta);
          });
        });
        this.respondido = true;
        this.resposta(respostas);
      }
    }
    await this.loadData(this.entity!, form);
  }

  public async saveData(form: IIndexable): Promise<QuestionarioPreenchimento | boolean> {
    if (!this.questionario) return false;
    if (this.respondido) {
      this.dialog.alert("Gravação não efetuada", "Teste já respondido");
      return false;
    }
    if (this.respostasB5.length < 50) {
      this.dialog.alert("Gravação não efetuada", "Para gravação o teste deve ser respondido por completo");
      return false;
    }
    let questionarioPreenchimento = this.util.fill(new QuestionarioPreenchimento(), this.entity || {});
    questionarioPreenchimento.usuario_id = this.auth.usuario?.id;
    questionarioPreenchimento.editavel = 0;
    questionarioPreenchimento.questionario_id = this.questionario!.id;

    let respostas = this.entity?.respostas || this.respostasB5.map((x, i) => new QuestionarioPerguntaResposta({
      questionario_pergunta_id: this.questionario!.perguntas[i].id,
      resposta: x,
      _status: "ADD"
    }));
    respostas.forEach((x, i) => {
      if (x._status != "ADD" && x.resposta != this.respostasB5[i]) {
        x.resposta = this.respostasB5[i];
        x._status = "EDIT";
      }
    });
    questionarioPreenchimento.respostas = respostas;
    return questionarioPreenchimento;
  }


  public onRadioChange(event: any) {
    this.valorEscolhido = event.srcElement.value;
    this.proximo(event);
  }

  public voltar(event: any) {
    const btnEnviar = document.querySelector('.btnenviar');
    const btnVoltar = document.querySelector('.btnvoltar');
    const radio = document.querySelector('.radio');
    radio?.removeAttribute('checked');
    if (this.respostasB5.length == 50) {
      this.controle--;
      this.total = this.total - this.respostasB5[this.controle]
      this.respostasB5.splice(this.controle, 1)
      this.arrayLabel = this.respostasB5.toString();
      btnEnviar?.setAttribute('disabled', '');
      radio?.setAttribute('disabled', '');
      $('input[name="radiob5"]').prop('disabled', false);
    }
    if (this.controle > 0) {
      this.controle--;
      this.controle == 0 ? btnVoltar?.setAttribute('disabled', '') : btnVoltar?.removeAttribute('disabled');
      if (this.controle >= 0) {
        this.showPergunta = this.perguntas[this.controle].pergunta;
        this.numeroPergunta--;
        this.total = this.total - this.respostasB5[this.controle]
        this.respostasB5.splice(this.controle, 1)
        this.arrayLabel = this.respostasB5.toString();
      }
    } else {
      btnVoltar?.setAttribute('disabled', '');
    }
    $('input[name="radiob5"]').prop('checked', false);
  }

  public proximo(event: any) {
    const btnEnviar = document.querySelector('.btnenviar');
    const btnVoltar = document.querySelector('.btnvoltar');
    const radio = document.querySelector('.radio');
    if (this.controle < 50) {
      this.valorEscolhido == '' ? this.valorEscolhido = '1' : '';
      this.respostasB5.push(parseInt(this.valorEscolhido));
      this.total = this.total + parseInt(this.valorEscolhido);
      this.controle >= 0 ? btnVoltar?.removeAttribute('disabled') : btnVoltar?.setAttribute('disabled', '');
      this.controle++;
      if (this.controle <= 49) {
        this.numeroPergunta++;
        this.showPergunta = this.perguntas[this.controle].pergunta;
        (document.querySelector('.cardb5')?.hasAttribute('hidden')) ? document.querySelector('.cardb5')?.removeAttribute('hidden') : '';
      }
    }
    if (this.controle >= 50) {
      btnEnviar?.removeAttribute('disabled');
      radio?.setAttribute('disabled', '');
      $('input[name="radiob5"]').prop('disabled', true);
      this.controle = 50;
    }
    $('input[name="radiob5"]').prop('checked', false);
  }

  public enviar() {
    this.resposta(this.respostasB5)
  }

  public resposta(resp: number[]) {
    //resp=[5,5,5,5,5,4,3,2,4,5,2,1,2,3,4,3,4,4,4,4,3,3,3,3,4,4,4,4,5,5,5,4,3,2,3,3,4,4,4,4,4,5,5,5,5,4,4,4,4,4]
    let eM = 20 + (resp[0]) + (resp[10]) + (resp[20]) + (resp[30]) + (resp[40]);
    let aM = 14 + (resp[6]) + (resp[16]) + (resp[26]) + (resp[36]) + (resp[41]) + (resp[46]);
    let cM = 14 + (resp[2]) + (resp[12]) + (resp[22]) + (resp[32]) + (resp[42]) + (resp[47]);
    let nM = 38 + (resp[8]) + (resp[18]);
    let oM = 8 + (resp[4]) + (resp[14]) + (resp[24]) + (resp[34]) + (resp[39]) + (resp[44]) + (resp[49]);
    let extroversao = (resp[5]) + (resp[15]) + (resp[25]) + (resp[35]) + (resp[45]);
    let agradabilidade = (resp[1]) + (resp[11]) + (resp[21]) + (resp[31]);
    let concienciosidade = (resp[7]) + (resp[17]) + (resp[27]) + (resp[37]);
    let estabilidade = (resp[3]) + (resp[13]) + (resp[23]) + (resp[28]) + (resp[33]) + (resp[38]) + (resp[43]) + (resp[48]);
    let abertura = (resp[9]) + (resp[19]) + (resp[29]);
    this.extroversao = eM - extroversao;
    this.agradabilidade = aM - agradabilidade;
    this.conscienciosidade = cM - concienciosidade;
    this.estabilidade = nM - estabilidade;
    this.abertura = oM - abertura;
    this.chartb5([this.extroversao, this.agradabilidade, this.conscienciosidade, this.estabilidade, this.abertura])
  }

  public chartb5(dados: number[] = []) {
    (document.querySelector('.resultado')?.hasAttribute('hidden')) ? document.querySelector('.resultado')?.removeAttribute('hidden') : '';
    document.querySelector('.cardb5')?.setAttribute('hidden', '');
    document.querySelector('.cardb52')?.setAttribute('hidden', '');
    const sliders = document.querySelectorAll(".slider-ui");
    sliders.forEach((slider, index) => {
      this.min = '0';
      this.max = '40';
      const trackId = slider.querySelector(".value")!.id;
      let track = document.getElementById(trackId);
      track!.style.left = ((dados[index] / 40) * 100) + '%';
      track!.textContent = dados[index].toString();
    });

  }

  public onClickDivB5(div: string, lbl: string, icon: string) {
    (document.querySelector('.' + div)?.hasAttribute('hidden')) ? document.querySelector('.' + div)?.removeAttribute('hidden') : document.querySelector('.' + div)?.setAttribute('hidden', '');
    (document.querySelector('.' + lbl)?.hasAttribute('hidden')) ? document.querySelector('.' + lbl)?.removeAttribute('hidden') : document.querySelector('.' + lbl)?.setAttribute('hidden', '');
    if (document.getElementById(icon)?.classList.contains('fa-arrow-down')) {
      document.getElementById(icon)?.classList.remove('fa-arrow-down');
      document.getElementById(icon)?.classList.add('fa-arrow-up');
    } else {
      document.getElementById(icon)?.classList.remove('fa-arrow-up');
      document.getElementById(icon)?.classList.add('fa-arrow-down');
    }
  }

}
