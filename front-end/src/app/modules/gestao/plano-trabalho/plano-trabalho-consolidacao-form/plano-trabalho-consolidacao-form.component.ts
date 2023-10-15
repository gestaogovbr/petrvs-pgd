import { ChangeDetectorRef, Component, Injector, Input, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { EditableFormComponent } from 'src/app/components/editable-form/editable-form.component';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { ToolbarButton } from 'src/app/components/toolbar/toolbar.component';
import { ConsolidacaoDados, PlanoTrabalhoConsolidacaoDaoService } from 'src/app/dao/plano-trabalho-consolidacao-dao.service';
import { PlanoTrabalhoConsolidacaoOcorrenciaDaoService } from 'src/app/dao/plano-trabalho-consolidacao-ocorrencia-dao.service';
import { IIndexable } from 'src/app/models/base.model';
import { PlanoTrabalhoConsolidacao } from 'src/app/models/plano-trabalho-consolidacao.model';
import { PageFrameBase } from 'src/app/modules/base/page-frame-base';
import { Atividade, Checklist } from 'src/app/models/atividade.model';
import { PlanoTrabalhoConsolidacaoOcorrencia } from 'src/app/models/plano-trabalho-consolidacao-ocorrencia.model';
import { Afastamento } from 'src/app/models/afastamento.model';
import { PlanoTrabalhoEntrega } from 'src/app/models/plano-trabalho-entrega.model';
import { BadgeTrabalho, PlanoTrabalhoService } from '../plano-trabalho.service';
import { PlanoTrabalho } from 'src/app/models/plano-trabalho.model';
import { TipoAtividadeDaoService } from 'src/app/dao/tipo-atividade-dao.service';
import { PlanoEntregaService } from '../../plano-entrega/plano-entrega.service';
import { AtividadeDaoService } from 'src/app/dao/atividade-dao.service';
import { AtividadeOptionsMetadata, AtividadeService } from '../../atividade/atividade.service';
import { LookupItem } from 'src/app/services/lookup.service';
import { InputSelectComponent } from 'src/app/components/input/input-select/input-select.component';
import { CalendarService } from 'src/app/services/calendar.service';
import { SelectItem } from 'src/app/components/input/input-base';
import { TipoAtividade } from 'src/app/models/tipo-atividade.model';
import { Unidade } from 'src/app/models/unidade.model';
import { Programa } from 'src/app/models/programa.model';
import { Comparecimento } from 'src/app/models/comparecimento.model';
import { ComparecimentoDaoService } from 'src/app/dao/comparecimento-dao.service';
import { UnidadeDaoService } from 'src/app/dao/unidade-dao.service';

export type ConsolidacaoEntrega = {
  id: string,
  entrega: PlanoTrabalhoEntrega,
  badge: BadgeTrabalho,
  atividades: Atividade[]
};

@Component({
  selector: 'plano-trabalho-consolidacao-form',
  templateUrl: './plano-trabalho-consolidacao-form.component.html',
  styleUrls: ['./plano-trabalho-consolidacao-form.component.scss']
})
export class PlanoTrabalhoConsolidacaoFormComponent extends PageFrameBase {
  @ViewChild(EditableFormComponent, { static: false }) public editableForm?: EditableFormComponent;
  @ViewChild('gridEntregas', { static: false }) public gridEntregas?: GridComponent;
  @ViewChild('gridAtividades', { static: false }) public gridAtividades?: GridComponent;
  @ViewChild('etiqueta', { static: false }) public etiqueta?: InputSelectComponent;
  @Input() cdRef: ChangeDetectorRef;
  @Input() planoTrabalho?: PlanoTrabalho;
  @Input() set noPersist(value: string | undefined) { super.noPersist = value; } get noPersist(): string | undefined { return super.noPersist; }
  @Input() set control(value: AbstractControl | undefined) { super.control = value; } get control(): AbstractControl | undefined { return super.control; }
  @Input() set entity(value: PlanoTrabalhoConsolidacao | undefined) { super.entity = value; this.bindEntity(); } get entity(): PlanoTrabalhoConsolidacao | undefined { return super.entity; }
  @Input() set disabled(value: boolean) {
    if(this._disabled != value || this.atividadeOptionsMetadata.disabled !== value) {
      this._disabled = value;
      this.atividadeOptionsMetadata.disabled = value;
      this.cdRef.detectChanges();
    }
  }
  get disabled(): boolean {
    return this._disabled;
  }

  public consolidacaoOcorrenciaDao: PlanoTrabalhoConsolidacaoOcorrenciaDaoService;
  public ocorrenciaDao: PlanoTrabalhoConsolidacaoOcorrenciaDaoService;
  public comparecimentoDao: ComparecimentoDaoService;
  public unidadeDao: UnidadeDaoService;
  public formAtividade: FormGroup;
  public formOcorrencia: FormGroup;
  public formComparecimento: FormGroup;
  public formEdit: FormGroup;
  public unidade?: Unidade;
  public dao: PlanoTrabalhoConsolidacaoDaoService;
  public atividadeDao: AtividadeDaoService;
  public atividadeService: AtividadeService;
  public calendar: CalendarService;
  public joinAtividade: string[] = ['demandante', 'usuario', 'tipo_atividade', 'comentarios.usuario:id,nome,apelido'];
  public tipoAtividadeDao: TipoAtividadeDaoService;
  public planoTrabalhoService: PlanoTrabalhoService;
  public planoEntregaService: PlanoEntregaService;
  public itemsEntregas: ConsolidacaoEntrega[] = [];
  public etiquetas: LookupItem[] = [];
  public checklist?: Checklist[];
  public itemsOcorrencias: PlanoTrabalhoConsolidacaoOcorrencia[] = [];
  public itemsComparecimentos: Comparecimento[] = [];
  public itemsAfastamentos: Afastamento[] = [];
  public atividadeOptionsMetadata: AtividadeOptionsMetadata;
  public programa?: Programa;
  
  private _disabled: boolean = true;

  constructor(public injector: Injector) {
    super(injector);
    this.cdRef = injector.get<ChangeDetectorRef>(ChangeDetectorRef);
    this.dao = injector.get<PlanoTrabalhoConsolidacaoDaoService>(PlanoTrabalhoConsolidacaoDaoService);
    this.consolidacaoOcorrenciaDao = injector.get<PlanoTrabalhoConsolidacaoOcorrenciaDaoService>(PlanoTrabalhoConsolidacaoOcorrenciaDaoService);
    this.unidadeDao = injector.get<UnidadeDaoService>(UnidadeDaoService);
    this.comparecimentoDao = injector.get<ComparecimentoDaoService>(ComparecimentoDaoService);
    this.atividadeDao = injector.get<AtividadeDaoService>(AtividadeDaoService);
    this.atividadeService = injector.get<AtividadeService>(AtividadeService);
    this.calendar = injector.get<CalendarService>(CalendarService);
    this.ocorrenciaDao = injector.get<PlanoTrabalhoConsolidacaoOcorrenciaDaoService>(PlanoTrabalhoConsolidacaoOcorrenciaDaoService);
    this.tipoAtividadeDao = injector.get<TipoAtividadeDaoService>(TipoAtividadeDaoService);
    this.planoTrabalhoService = injector.get<PlanoTrabalhoService>(PlanoTrabalhoService);
    this.planoEntregaService = injector.get<PlanoEntregaService>(PlanoEntregaService);
    this.formAtividade = this.fh.FormBuilder({
      descricao: { default: "" },
      etiquetas: { default: [] },
      checklist: { default: [] },
      comentarios: { default: [] },
      esforco: { default: 0 },
      tempo_planejado: { default: 0 },
      data_distribuicao: {default: new Date()},
      data_estipulada_entrega: {default: new Date()},
      data_entrega: {default: new Date()},
      tipo_atividade_id: {default: null}
    }, this.cdRef, this.validateAtividade);
    this.formOcorrencia = this.fh.FormBuilder({
      data_inicio: { default: new Date() },
      data_fim: { default: new Date() },
      descricao: { default: "" }
    }, this.cdRef, this.validateOcorrencia);
    this.formComparecimento = this.fh.FormBuilder({
      data_comparecimento: { default: new Date() },
      unidade_id: { default: "" },
      detalhamento: { default: "" }
    }, this.cdRef, this.validateComparecimento);
    this.formEdit = this.fh.FormBuilder({
      progresso: { default: 0 },
      etiquetas: { default: [] },
      etiqueta: { default: null }
    });
    this.atividadeOptionsMetadata = {
      refreshId: this.atividadeRefreshId.bind(this),
      removeId: this.atividadeRemoveId.bind(this),
      refresh: this.refresh.bind(this)
    }
  }

  public refresh() {
    this.loadData(this.entity!, this.form);
  }

  public bindEntity() {
    if(this.entity) {
      this.entity._metadata = this.entity._metadata || {};
      this.entity._metadata.planoTrabalhoConsolidacaoFormComponent = this;
    }
  }

  public atividadeRefreshId(id: string, atividade?: Atividade) {
    this.itemsEntregas.forEach(entrega => {
      let foundIndex = entrega.atividades.findIndex(x => x.id == id);
      if(foundIndex >= 0) {
        if(atividade) {
          entrega.atividades[foundIndex] = atividade;
        } else {
          this.atividadeDao.getById(id, this.joinAtividade).then(atividade => { if(atividade) entrega.atividades[foundIndex] = atividade; });
        }
      }
    });
    this.cdRef.detectChanges();
  }

  public atividadeRemoveId(id: string) {
    this.itemsEntregas.forEach(entrega => {
      let foundIndex = entrega.atividades.findIndex(x => x.id == id);
      if(foundIndex >= 0) entrega.atividades.splice(foundIndex, 1);
    });
    this.cdRef.detectChanges();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    (async () => {
      await this.loadData(this.entity!, this.form);
    })();
  }

  public validateAtividade = (control: AbstractControl, controlName: string) => {
    let result = null;
    if (['descricao'].indexOf(controlName) >= 0 && !control.value?.length) {
      result = "Obrigatório";
    } else if(['data_distribuicao', 'data_estipulada_entrega', 'data_entrega'].includes(controlName) && !this.util.isDataValid(control.value)) {
      result = "Inválido";
    } else if(controlName == 'data_estipulada_entrega' && control.value.getTime() < this.formAtividade?.controls.data_distribuicao.value.getTime()) {
      result = "Menor que distribuição";
    } else if(controlName == 'data_entrega' && control.value.getTime() < this.formAtividade?.controls.data_distribuicao.value.getTime()) {
      result = "Menor que distribuição";
    }
    return result;
  }

  public validateOcorrencia = (control: AbstractControl, controlName: string) => {
    let result = null;
    if (['descricao'].indexOf(controlName) >= 0 && !control.value?.length) {
      result = "Obrigatório";
    } else if(['data_inicio', 'data_fim'].includes(controlName) && !this.util.isDataValid(control.value)) {
      result = "Inválido";
    } else if(controlName == 'data_fim' && control.value.getTime() < this.formOcorrencia?.controls.data_inicio.value.getTime()) {
      result = "Menor que início";
    } 
    return result;
  }

  public validateComparecimento = (control: AbstractControl, controlName: string) => {
    let result = null;
    if (['detalhamento', 'unidade_id'].indexOf(controlName) >= 0 && !control.value?.length) {
      result = "Obrigatório";
    } else if(controlName == 'data_comparecimento' && this.entity && !this.util.between(control.value, {start: this.entity!.data_inicio, end: this.entity!.data_fim})) {
      result = "Inválido";
    } 
    return result;
  }

  public loadConsolidacao(dados: ConsolidacaoDados) {
    this.itemsEntregas = dados.entregas.map(x => {
      if(x.plano_entrega_entrega) x.plano_entrega_entrega.plano_entrega = dados.planosEntregas.find(pe => pe.id == x.plano_entrega_entrega?.plano_entrega_id);
      let result = {
        id: x.id,
        entrega: x,
        atividades: dados.atividades.filter(y => y.plano_trabalho_entrega_id == x.id),
        badge: this.planoTrabalhoService.tipoEntrega(x, dados.planoTrabalho),
        meta: x.plano_entrega_entrega ? this.planoEntregaService.getValorMeta(x.plano_entrega_entrega) : '',
        metaRealizado: x.plano_entrega_entrega ? this.planoEntregaService.getValorRealizado(x.plano_entrega_entrega) : '',
        progresso_realizado: x.plano_entrega_entrega ? x.plano_entrega_entrega.progresso_realizado : 0,
        objetivos: x.plano_entrega_entrega ? x.plano_entrega_entrega.objetivos : [],
        processos: x.plano_entrega_entrega ? x.plano_entrega_entrega.processos : [],
      };
      return result;
    });
    this.programa = dados.programa;
    this.planoTrabalho = dados.planoTrabalho;
    this.itemsOcorrencias = dados.ocorrencias;
    this.itemsComparecimentos = dados.comparecimentos;
    this.itemsAfastamentos = dados.afastamentos;
    this.unidade = dados.planoTrabalho.unidade || this.entity!.plano_trabalho?.unidade;
    this.cdRef.detectChanges();
  }

  public async loadData(entity: IIndexable, form?: FormGroup) {
    this.gridEntregas!.loading = true;
    this.cdRef.detectChanges();
    try {
      let dados = await this.dao!.dadosConsolidacao(entity.id);
      this.loadConsolidacao(dados);
    } finally {
      this.gridEntregas!.loading = false;
      this.cdRef.detectChanges();
    }
  }  
  
  /***************************************************************************************
  * Atividades 
  ****************************************************************************************/
  public async addAtividade(entrega: PlanoTrabalhoEntrega) {
    let planoTrabalho: PlanoTrabalho | undefined = entrega.plano_trabalho || this.entity!.plano_trabalho;
    let efemerides = this.calendar.calculaDataTempoUnidade(this.entity!.data_inicio, this.entity!.data_fim, planoTrabalho!.carga_horaria, this.unidade!, "ENTREGA");
    const tempoPlanejado = this.calendar.horasUteis(this.entity!.data_inicio, this.entity!.data_fim, planoTrabalho!.carga_horaria, this.unidade!, "DISTRIBUICAO");
    const dataInicio = this.util.setTime(this.entity!.data_inicio, 0, 0, 0);
    const dataFim = this.util.setTime(this.entity!.data_fim, 23, 59, 59);
    return new Atividade({
      id: this.dao!.generateUuid(),
      plano_trabalho: planoTrabalho,
      plano_trabalho_entrega: entrega,
      plano_trabalho_consolidacao: this.entity,
      demandante: this.auth.usuario,
      usuario: this.auth.usuario,
      unidade: this.unidade,
      data_distribuicao: dataInicio,
      carga_horaria: planoTrabalho!.carga_horaria,
      data_estipulada_entrega: dataFim,
      data_inicio: dataInicio,
      data_entrega: dataFim,
      tempo_planejado: tempoPlanejado,
      tempo_despendido: efemerides?.tempoUtil || 0,
      status: 'CONCLUIDO',
      progresso: 100,
      plano_trabalho_id: this.entity!.plano_trabalho_id,
      plano_trabalho_entrega_id: entrega.id,
      plano_trabalho_consolidacao_id: this.entity!.id,
      demandante_id: this.auth.usuario!.id,
      usuario_id: this.auth.usuario!.id,
      unidade_id: this.unidade!.id,
      metadados: { // Simula os metadados enviados pelo servidor
        atrasado: false,
        tempo_despendido: 0,
        tempo_atraso: 0,
        pausado: false,
        iniciado: true,
        concluido: true,
        avaliado: false,
        arquivado: false,
        produtividade: 0,
        extra: undefined,
        _status: []
      }
    });
  }

  public async loadAtividade(form: FormGroup, row: any) {
    this.formAtividade.patchValue(row);
    this.cdRef.detectChanges();
  }

  public async removeAtividade(atividades: Atividade[], row: any) {
    let confirm = await this.dialog.confirm("Exclui ?", "Deseja realmente excluir o item ?");
    if (confirm) {
      try {
        let atividade = row as Atividade;
        await this.atividadeDao?.delete(atividade);
        atividades.splice(atividades.findIndex(x => x.id == atividade.id), 1);
        return true;
      } catch {
        return false;
      }
    } else {
      return false;
    }
  }

  public async saveAtividade(form: FormGroup, row: any) {
    let result = undefined;
    this.formAtividade.markAllAsTouched();
    if (this.formAtividade!.valid) {
      row.id = row.id == "NEW" ? this.dao!.generateUuid() : row.id;
      this.util.fillForm(row, this.formAtividade!.value);
      this.submitting = true;
      try {
        result = await this.atividadeDao?.save(row, this.joinAtividade, ['etiquetas', 'checklist', 'comentarios', 'pausas', 'tarefas']);
      } finally {
        this.submitting = false;
      }
      this.atividadeRefreshId(row.id, result);
    }
    return result;
  }

  public atividadeDynamicButtons(row: any): ToolbarButton[] {
    let result: ToolbarButton[] = [];
    result.push(Object.assign({}, this.gridEntregas!.BUTTON_EDIT, {}));
    result.push(Object.assign({}, this.gridEntregas!.BUTTON_DELETE, {}));
    return result;
  }  

  public async onColumnProgressoEtiquetasChecklistEdit(row: any) {
    this.formEdit.controls.progresso.setValue(row.progresso);
    this.formEdit.controls.etiquetas.setValue(row.etiquetas);
    this.formEdit.controls.etiqueta.setValue(null);
    this.etiquetas = this.util.merge(row.tipo_atividade?.etiquetas, row.unidade?.etiquetas, (a, b) => a.key == b.key);
    this.etiquetas = this.util.merge(this.etiquetas, this.auth.usuario!.config?.etiquetas, (a, b) => a.key == b.key);
    this.checklist = this.util.clone(row.checklist);
  }

  public async onColumnProgressoEtiquetasChecklistSave(row: any) {
    try {
      const saved = await this.atividadeDao!.update(row.id, {
        progresso: this.formEdit.controls.progresso.value,
        etiquetas: this.formEdit.controls.etiquetas.value,
        checklist: this.checklist
      });
      row.progresso = this.formEdit.controls.progresso.value;
      row.checklist = this.checklist;
      return !!saved;
    } catch (error) {
      return false;
    }
  }

  public onEtiquetaConfigClick() {
    this.go.navigate({ route: ["configuracoes", "preferencia", "usuario", this.auth.usuario!.id], params: { etiquetas: true } }, {
      modal: true, modalClose: (modalResult) => {
        this.etiquetas = this.util.merge(this.etiquetas, this.auth.usuario!.config?.etiquetas, (a, b) => a.key == b.key);
        this.cdRef.detectChanges();
      }
    });
  }

  public addItemHandleEtiquetas(): LookupItem | undefined {
    let result = undefined;
    if (this.etiqueta && this.etiqueta.selectedItem) {
      const item = this.etiqueta.selectedItem;
      const key = item.key?.length ? item.key : this.util.textHash(item.value);
      if (this.util.validateLookupItem(this.formEdit.controls.etiquetas.value, key)) {
        result = {
          key: key,
          value: item.value,
          color: item.color,
          icon: item.icon
        };
        this.formEdit.controls.etiqueta.setValue(null);
      }
    }
    return result;
  };

  public loadTipoAtividade(tipoAtividade: TipoAtividade | undefined) {
    if(tipoAtividade) {
      this.etiquetas = this.atividadeService.buildEtiquetas(this.unidade, tipoAtividade);
      this.atividadeService.buildChecklist(tipoAtividade, this.formAtividade.controls.checklist);
      this.formAtividade.controls.esforco.setValue(tipoAtividade?.esforco || 0);
    } else {
      this.etiquetas = [];
      this.formAtividade.controls.esforco.setValue(0);
    }
    this.cdRef.detectChanges();
  }

  public onTipoAtividadeSelect(item: SelectItem) {
    const tipoAtividade: TipoAtividade | undefined = item.entity as TipoAtividade;
    this.loadTipoAtividade(tipoAtividade);
    this.atividadeService.comentarioAtividade(tipoAtividade, this.formAtividade!.controls.comentarios);
    this.cdRef.detectChanges();
  }

  /***************************************************************************************
  * Ocorrências 
  ****************************************************************************************/
  public async addOcorrencia() {
    return new PlanoTrabalhoConsolidacaoOcorrencia({
      plano_trabalho_consolidacao_id: this.entity!.id
    });
  }

  public async loadOcorrencia(form: FormGroup, row: any) {
    this.formAtividade.patchValue({
      data_inicio: row.data_inicio,
      data_fim: row.data_fim,
      descricao: row.descricao
    });
    this.cdRef.detectChanges();
  }

  public async removeOcorrencia(row: any) {
    let confirm = await this.dialog.confirm("Exclui ?", "Deseja realmente excluir o item ?");
    if (confirm) {
      try {
        let ocorrencia = row as PlanoTrabalhoConsolidacaoOcorrencia;
        await this.consolidacaoOcorrenciaDao?.delete(ocorrencia);
        this.itemsOcorrencias.splice(this.itemsOcorrencias.findIndex(x => x.id == ocorrencia.id), 1);
        return true;
      } catch {
        return false;
      }
    } else {
      return false;
    }
  }

  public async saveOcorrencia(form: FormGroup, row: any) {
    let result = undefined;
    this.formOcorrencia.markAllAsTouched();
    if (this.formOcorrencia!.valid) {
      row.id = row.id == "NEW" ? this.dao!.generateUuid() : row.id;
      row.data_inicio = form.controls.data_inicio.value;
      row.data_fim = form.controls.data_fim.value;
      row.descricao = form.controls.descricao.value;
      this.submitting = true;
      try {
        result = await this.consolidacaoOcorrenciaDao?.save(row);
      } finally {
        this.submitting = false;
      }
    }
    return result;
  }

  public ocorrenciaDynamicButtons(row: any): ToolbarButton[] {
    let result: ToolbarButton[] = [];
    //result.push({ hint: "Adicionar filho", icon: "bi bi-plus-circle", onClick: this.addChildProcesso.bind(this) });
    return result;
  }  

  /***************************************************************************************
  * Comparecimento 
  ****************************************************************************************/
  public async addComparecimento() {
    return new Comparecimento({
      unidade_id: this.unidade?.id,
      unidade: this.unidade,
      plano_trabalho_consolidacao_id: this.entity!.id
    });
  }

  public async loadComparecimento(form: FormGroup, row: any) {
    this.formComparecimento.patchValue({
      data_comparecimento: row.data_comparecimento,
      unidade_id: row.unidade_id,
      detalhamento: row.detalhamento
    });
    this.cdRef.detectChanges();
  }

  public async removeComparecimento(row: any) {
    let confirm = await this.dialog.confirm("Exclui ?", "Deseja realmente excluir o item ?");
    if (confirm) {
      try {
        let comparecimento = row as Comparecimento;
        await this.comparecimentoDao?.delete(comparecimento);
        this.itemsComparecimentos.splice(this.itemsComparecimentos.findIndex(x => x.id == comparecimento.id), 1);
        return true;
      } catch {
        return false;
      }
    } else {
      return false;
    }
  }

  public async saveComparecimento(form: FormGroup, row: any) {
    let result = undefined;
    this.formComparecimento.markAllAsTouched();
    if (this.formComparecimento!.valid) {
      row.id = row.id == "NEW" ? this.dao!.generateUuid() : row.id;
      row.data_comparecimento = form.controls.data_comparecimento.value;
      row.detalhamento = form.controls.detalhamento.value;
      row.plano_trabalho_consolidacao_id = this.entity!.id;
      row.unidade_id = form.controls.unidade_id.value;
      this.submitting = true;
      try {
        result = await this.comparecimentoDao?.save(row);
      } finally {
        this.submitting = false;
      }
    }
    return result;
  }

  public comparecimentoDynamicButtons(row: any): ToolbarButton[] {
    let result: ToolbarButton[] = [];
    //result.push({ hint: "Adicionar filho", icon: "bi bi-plus-circle", onClick: this.addChildProcesso.bind(this) });
    return result;
  }  

  /***************************************************************************************
  * Afastamentos
  ****************************************************************************************/
  public async addAfastamento() {
    this.go.navigate({route: ['cadastros', 'afastamento', 'new']}, {
      metadata: { consolidacao: this.entity },
      filterSnapshot: undefined,
      querySnapshot: undefined,
      modalClose: (modalResult) => {
        if(modalResult) this.refresh();
      }
    });
  }

  public afastamentoDynamicButtons(row: any): ToolbarButton[] {
    let result: ToolbarButton[] = [];
    result.push(Object.assign({}, this.OPTION_INFORMACOES, { onClick: (doc: Afastamento) => this.go.navigate({route: ["cadastros", "afastamento", doc.id, "consult"]}) }));
    //result.push({ hint: "Adicionar filho", icon: "bi bi-plus-circle", onClick: this.addChildProcesso.bind(this) });
    return result;
  }  

  public async showPlanejamento(planejamento_id: string){
    this.go.navigate({ route: ['gestao', 'planejamento', planejamento_id, 'consult'] }, {modal: true})
  }

  public async showCadeiaValor(cadeia_valor_id_id: string){
    this.go.navigate({ route: ['gestao', 'cadeia-valor', cadeia_valor_id_id, 'consult'] }, {modal: true})
  }
 
}
