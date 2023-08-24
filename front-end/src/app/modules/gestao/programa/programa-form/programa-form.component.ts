import { Component, Injector, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { EditableFormComponent } from 'src/app/components/editable-form/editable-form.component';
import { InputSearchComponent } from 'src/app/components/input/input-search/input-search.component';
import { ProgramaDaoService } from 'src/app/dao/programa-dao.service';
import { TemplateDaoService } from 'src/app/dao/template-dao.service';
import { TipoAvaliacaoDaoService } from 'src/app/dao/tipo-avaliacao-dao.service';
import { TipoDocumentoDaoService } from 'src/app/dao/tipo-documento-dao.service';
import { TipoJustificativaDaoService } from 'src/app/dao/tipo-justificativa-dao.service';
import { UnidadeDaoService } from 'src/app/dao/unidade-dao.service';
import { IIndexable } from 'src/app/models/base.model';
import { Programa } from 'src/app/models/programa.model';
import { TipoAvaliacao } from 'src/app/models/tipo-avaliacao.model';
import { PageFormBase } from 'src/app/modules/base/page-form-base';
import { TemplateService } from 'src/app/modules/uteis/templates/template.service';
import { LookupItem } from 'src/app/services/lookup.service';

@Component({
  selector: 'app-programa-form',
  templateUrl: './programa-form.component.html',
  styleUrls: ['./programa-form.component.scss']
})

export class ProgramaFormComponent extends PageFormBase<Programa, ProgramaDaoService> {
  @ViewChild(EditableFormComponent, { static: false }) public editableForm?: EditableFormComponent;
  @ViewChild('unidade', { static: false }) public unidade?: InputSearchComponent;
  @ViewChild('tipoAvaliacao', { static: false }) public tipoAvaliacao?: InputSearchComponent;

  public templateDao: TemplateDaoService;
  public tipoDocumentoDao: TipoDocumentoDaoService;
  public tipoAvaliacaoDao: TipoAvaliacaoDaoService;
  public tipoJustificativaDao: TipoJustificativaDaoService;
  public unidadeDao: UnidadeDaoService;
  public templateService: TemplateService;

  private _tipoAvaliacaoQualitativo: LookupItem[] = [];

  constructor(public injector: Injector) {
    super(injector, Programa, ProgramaDaoService);
    this.unidadeDao = injector.get<UnidadeDaoService>(UnidadeDaoService);
    this.templateDao = injector.get<TemplateDaoService>(TemplateDaoService);
    this.tipoDocumentoDao = injector.get<TipoDocumentoDaoService>(TipoDocumentoDaoService);
    this.tipoAvaliacaoDao = injector.get<TipoAvaliacaoDaoService>(TipoAvaliacaoDaoService);
    this.tipoJustificativaDao = injector.get<TipoJustificativaDaoService>(TipoJustificativaDaoService);
    this.templateService = injector.get<TemplateService>(TemplateService);
    this.modalWidth = 700;
    this.form = this.fh.FormBuilder({
      unidade_id: {default: ""},
      nome: {default: ""},
      normativa: {default: ""},
      config: {default: null},
      data_inicio: {default: new Date()},
      data_fim: {default: new Date()},
      termo_obrigatorio: {default: false},
      template_tcr_id: {default: null},
      tipo_avaliacao_plano_entrega_id: {default: ""},
      tipo_avaliacao_plano_trabalho_id: {default: ""},
      tipo_documento_tcr_id: {default: null},
      prazo_max_plano_entrega: {default: 365},
      periodicidade_consolidacao: {default: 'MENSAL'},
      periodicidade_valor: {default: 1},
      dias_tolerancia_consolidacao: {default: 10},
      plano_trabalho_assinatura_participante: { default: true },
      plano_trabalho_assinatura_gestor_lotacao: { default: false },
      plano_trabalho_assinatura_gestor_unidade: { default: false },
      plano_trabalho_assinatura_gestor_entidade: { default: false },
      dias_tolerancia_avaliacao: {default: 10},
      nota_padrao_avaliacao: {default: 0},
      tipo_justificativa_id: {default: null}
    }, this.cdRef, this.validate);
    this.join = ["unidade"];
  }

  public validate = (control: AbstractControl, controlName: string) => {
    let result = null;

    if(['nome', 'unidade_id', 'tipo_avaliacao_plano_trabalho_id', 'tipo_avaliacao_plano_entrega_id'].indexOf(controlName) >= 0 && !control.value?.length) {
      result = "Obrigatório";
    } else if(controlName == "prazo_max_plano_entrega" && parseInt(control.value || 0) > 99999) {
      result = "Inválido";
    } else if(['data_inicio', 'data_fim'].indexOf(controlName) >= 0 && !this.dao?.validDateTime(control.value)) {
      result = "Inválido";
    } else if(controlName == "periodicidade_valor") {
      if(['SEMANAL', 'QUINZENAL'].includes(this.form?.controls.periodicidade_consolidacao.value) && control.value > 6) result = "Inválido";
      if(['MENSAL', 'BIMESTRAL', 'TRIMESTRAL', 'SEMESTRAL'].includes(this.form?.controls.periodicidade_consolidacao.value) && control.value > 31) result = "Máximo 31";
      if(['DIAS'].includes(this.form?.controls.periodicidade_consolidacao.value) && control.value < 0) result = "Inválido";
    }
    return result;
  }
  public formValidation = (form?: FormGroup) => {
    let result = null;
    if(this.form?.controls.data_fim.value && this.form?.controls.data_inicio.value > this.form?.controls.data_fim.value) {
      result = "A data do fim não pode ser anterior à data do inicio!";
    }
    return result;
  }

  public async loadData(entity: Programa, form: FormGroup) {
    let formValue = Object.assign({}, form.value);
    await Promise.all ([
      this.unidade!.loadSearch(entity.unidade || entity.unidade_id)
    ]);
    form.patchValue(this.util.fillForm(formValue, entity));
  }

  public initializeData(form: FormGroup): void {
    form.patchValue(new Programa());
  }

  public saveData(form: IIndexable): Promise<Programa> {
    return new Promise<Programa>((resolve, reject) => {
      const programa = this.util.fill(new Programa(), this.entity!);
      resolve(this.util.fillForm(programa, this.form!.value));
    });
  }

  public isTipoAvaliacao(tipo: string) {
    let selected = this.tipoAvaliacao?.selectedEntity as TipoAvaliacao;
    return selected?.tipo == tipo || (!selected && tipo == "QUANTITATIVO");
  }

  public get tipoAvaliacaoQualitativo(): LookupItem[] {
    let selected = this.tipoAvaliacao?.selectedEntity as TipoAvaliacao;
    let items = selected?.notas?.map(x => Object.assign({} as LookupItem, { key: x.nota, value: x.nota })) || [];
    if(JSON.stringify(items) != JSON.stringify(this._tipoAvaliacaoQualitativo)) this._tipoAvaliacaoQualitativo = items;
    return this._tipoAvaliacaoQualitativo;
  }

  public titleEdit = (entity: Programa): string => {
    return "Editando " + this.lex.translate("Programa") + ': ' + (entity?.nome || "");
  }

}

