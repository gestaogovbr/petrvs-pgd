import { Component, Injector, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { EditableFormComponent } from 'src/app/components/editable-form/editable-form.component';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { InputDatetimeComponent } from 'src/app/components/input/input-datetime/input-datetime.component';
import { InputSearchComponent } from 'src/app/components/input/input-search/input-search.component';
import { InputTextComponent } from 'src/app/components/input/input-text/input-text.component';
import { ToolbarButton } from 'src/app/components/toolbar/toolbar.component';
import { CadeiaValorDaoService } from 'src/app/dao/cadeia-valor-dao.service';
import { PlanejamentoDaoService } from 'src/app/dao/planejamento-dao.service';
import { PlanoEntregaDaoService } from 'src/app/dao/plano-entrega-dao.service';
import { ProgramaDaoService } from 'src/app/dao/programa-dao.service';
import { UnidadeDaoService } from 'src/app/dao/unidade-dao.service';
import { IIndexable } from 'src/app/models/base.model';
import { PlanoEntrega } from 'src/app/models/plano-entrega.model';
import { Programa } from 'src/app/models/programa.model';
import { Unidade } from 'src/app/models/unidade.model';
import { PageFormBase } from 'src/app/modules/base/page-form-base';


@Component({
  selector: 'app-plano-entrega-form',
  templateUrl: './plano-entrega-form.component.html',
  styleUrls: ['./plano-entrega-form.component.scss']
})

export class PlanoEntregaFormComponent extends PageFormBase<PlanoEntrega, PlanoEntregaDaoService> {
  @ViewChild(EditableFormComponent, { static: false }) public editableForm?: EditableFormComponent;
  @ViewChild(GridComponent, { static: true }) public grid?: GridComponent;
  @ViewChild('programa', { static: true }) public programa?: InputSearchComponent;
  @ViewChild('unidade', { static: true }) public unidade?: InputSearchComponent;
  @ViewChild('nome', { static: true }) public nomePE?: InputTextComponent;
  @ViewChild('data_fim', { static: true }) public dataFim?: InputDatetimeComponent;

  public unidadeDao: UnidadeDaoService;
  public programaDao: ProgramaDaoService;
  public cadeiaValorDao: CadeiaValorDaoService;
  public planejamentoInstitucionalDao: PlanejamentoDaoService;
  public form: FormGroup;
  public maxPE: Number | undefined;

  constructor(public injector: Injector) {
    super(injector, PlanoEntrega, PlanoEntregaDaoService);
    this.unidadeDao = injector.get<UnidadeDaoService>(UnidadeDaoService);
    this.programaDao = injector.get<ProgramaDaoService>(ProgramaDaoService);
    this.cadeiaValorDao = injector.get<CadeiaValorDaoService>(CadeiaValorDaoService);
    this.planejamentoInstitucionalDao = injector.get<PlanejamentoDaoService>(PlanejamentoDaoService);
    this.join = ["entregas.entrega", "entregas.objetivos.objetivo", "entregas.processos.processo", "entregas.unidade", "unidade"];
    this.modalWidth = 1200;
    this.form = this.fh.FormBuilder({
      nome: { default: "" },
      data_inicio: { default: new Date() },
      data_fim: { default: new Date() },
      unidade_id: { default: "" },
      plano_entrega_id: { default: null },  // até o momento, um plano de entrega não poderá estar vinculado a outro (adesão de Plano de Entrega)
      planejamento_id: { default: null },
      cadeia_valor_id: { default: null },
      programa_id: { default: null },
      entregas: { default: [] },
    }, this.cdRef, this.validate);
  }

  public validate = (control: AbstractControl, controlName: string) => {
    let result = null;
    if (['nome', 'unidade_id', 'programa_id'].indexOf(controlName) >= 0 && !control.value?.length) {
      result = "Obrigatório";
    }
    if (['data_inicio'].indexOf(controlName) >= 0 && !this.dao?.validDateTime(control.value)) {
      result = "Inválido";
    }
    if (['data_fim'].indexOf(controlName) >= 0 && !this.dao?.validDateTime(control.value)) {
      result = "Inválido";
    }
    return result;
  }

  public formValidation = (form?: FormGroup) => {
    /*
        (RN_PENT_Z) INSERIR/CRIAR
        - o usuário logado precisa possuir a capacidade "MOD_PENT_INCL", e:
            - o usuário logado precisa ser gestor da Unidade do plano (Unidade B), ou gestor da sua Unidade-pai (Unidade A)(RN_PENT_C); ou
            - o usuário precisa possuir a atribuição de HOMOLOGADOR DE PLANO DE ENTREGA para a Unidade-pai (Unidade A) da Unidade do plano (Unidade B) e possuir a capacidade "MOD_PENT_EDT_FLH"; ou
            - o usuário precisa possuir também a capacidade "MOD_PENT_QQR_UND";
    */
    let unidadeSelecionada = this.unidade?.selectedEntity as Unidade;
    let condition1 = this.auth.isGestorUnidade(unidadeSelecionada) || this.auth.isGestorUnidade(unidadeSelecionada.unidade_pai);
    let condition2 = unidadeSelecionada.unidade_pai ? (this.auth.isIntegrante('HOMOLOGADOR_PLANO_ENTREGA', unidadeSelecionada.unidade_pai!.id) && this.auth.hasPermissionTo("MOD_PENT_EDT_FLH")) : false;
    let condition3 = this.auth.hasPermissionTo("MOD_PENT_QQR_UND");
    if (!(condition1 || condition2 || condition3)) return "Você não tem permissão para incluir plano de entregas para a unidade selecionada!";
    const inicio = this.form?.controls.data_inicio.value;
    const fim = this.form?.controls.data_fim.value;
    const programa = this.programa?.selectedEntity as Programa;
    if (!programa) {
      return "Obrigatório selecionar o programa";
    } else if (!this.dao?.validDateTime(inicio)) {
      return "Data de início inválida";
    } else if (!this.dao?.validDateTime(fim)) {
      return "Data de fim inválida";
    } else if (inicio > fim) {
      return "A data do fim não pode ser menor que a data do início!";
    } else {
      const diffTime = Math.abs(inicio - fim);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const entregas = this.form!.controls.entregas.value || [];
      if (programa.prazo_max_plano_entrega > 0 && diffDays > programa.prazo_max_plano_entrega) return "A data de início e término" + this.lex.translate(" do Plano de Entrega") + " deve respeitar o período previsto no " + this.lex.translate("Programa ") + "("+ programa.data_inicio.toLocaleDateString() +" até "+ programa.data_fim.toLocaleDateString() + ")";
      for (let entrega of entregas) {
        if (entrega.data_inicio < inicio) return "A " + this.lex.translate("entrega") + " '" + entrega.descricao + "' possui data inicial anterior à " + this.lex.translate("do Plano de Entrega") + ": " + this.util.getDateFormatted(inicio);
        if (entrega.data_fim > fim) return "A " + this.lex.translate("entrega") + " '" + entrega.descricao + "' possui data fim posterior à " + this.lex.translate("do Plano de Entrega") + ": " + this.util.getDateFormatted(fim);
      }
    }
    return undefined;
  }

  public async loadData(entity: PlanoEntrega, form: FormGroup) {
    let formValue = Object.assign({}, form.value);
    form.patchValue(this.util.fillForm(formValue, entity));
    this.cdRef.detectChanges();
  }

  public async initializeData(form: FormGroup) {
    this.entity = new PlanoEntrega();
    this.entity.unidade_id = this.auth.unidade?.id || "";
    this.entity.unidade = this.auth.unidade;
    const di = new Date(this.entity.data_inicio).toLocaleDateString();
    const df= this.entity.data_fim ? new Date(this.entity.data_fim).toLocaleDateString() : new Date().toLocaleDateString();
    this.entity.nome = this.auth.unidade!.sigla + " - " + di + " - " + df;
    this.loadData(this.entity!, this.form!);
  }

  public async saveData(form: IIndexable): Promise<PlanoEntrega> {
    return new Promise<PlanoEntrega>((resolve, reject) => {
      let planoEntrega: PlanoEntrega = this.util.fill(new PlanoEntrega(), this.entity!);
      planoEntrega = this.util.fillForm(planoEntrega, this.form!.value);
      planoEntrega.entregas = planoEntrega.entregas?.filter(x => x._status) || [];
      resolve(planoEntrega);
    });
  }

  public titleEdit = (entity: PlanoEntrega): string => {
    return "Editando " + this.lex.translate("Plano de Entregas") + ': ' + (entity?.nome || "");
  }

  public dynamicButtons(row: any): ToolbarButton[] {
    let result: ToolbarButton[] = [];
    return result;
  }

  public onDataChange(){ this.sugereNome(); }

  public onUnidadeChange(){ this.sugereNome(); }

  public sugereNome() {
    if(this.action == 'new') {
      const sigla = this.unidade?.selectedItem ? this.unidade?.selectedItem?.entity.sigla : this.auth.unidade?.sigla;
      const di = new Date(this.form!.controls.data_inicio.value).toLocaleDateString();
      const df = new Date(this.form!.controls.data_fim.value).toLocaleDateString();
      this.form!.controls.nome.setValue(sigla + " - " + di + " - " + df)      
    }
  }

  public somaDia(date: Date, days: number){
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  public onProgramaChange(){
    const dias=(this.programa?.selectedEntity as Programa)?.prazo_max_plano_entrega;
    const data=this.somaDia(this.entity!.data_inicio,dias);
    this.form!.controls.data_fim.setValue(new Date(data)); 
    this.dataFim?.change.emit();
  }

}

