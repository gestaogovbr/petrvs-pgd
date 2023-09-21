import { ChangeDetectorRef, Component, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { ToolbarButton } from 'src/app/components/toolbar/toolbar.component';
import { PlanoTrabalhoConsolidacaoDaoService } from 'src/app/dao/plano-trabalho-consolidacao-dao.service';
import { PlanoTrabalhoConsolidacao, PlanoTrabalhoConsolidacaoStatus } from 'src/app/models/plano-trabalho-consolidacao.model';
import { PlanoTrabalho } from 'src/app/models/plano-trabalho.model';
import { PageFrameBase } from 'src/app/modules/base/page-frame-base';
import { PageListBase } from 'src/app/modules/base/page-list-base';
import { PlanoTrabalhoService } from '../plano-trabalho.service';
import { PlanoTrabalhoConsolidacaoFormComponent } from '../plano-trabalho-consolidacao-form/plano-trabalho-consolidacao-form.component';

@Component({
  selector: 'plano-trabalho-consolidacao-list',
  templateUrl: './plano-trabalho-consolidacao-list.component.html',
  styleUrls: ['./plano-trabalho-consolidacao-list.component.scss']
})
export class PlanoTrabalhoConsolidacaoListComponent extends PageFrameBase {
  @ViewChild(GridComponent, { static: false }) public grid?: GridComponent;
  @Input() set entity(value: PlanoTrabalho | undefined) { super.entity = value; } get entity(): PlanoTrabalho | undefined { return super.entity; }

  public get items(): PlanoTrabalhoConsolidacao[] {
    return this.entity?.consolidacoes || [];
  }

  public dao?: PlanoTrabalhoConsolidacaoDaoService;
  public planoTrabalhoService: PlanoTrabalhoService;

  constructor(public injector: Injector) {
    super(injector);
    /* Inicializações */
    this.dao = injector.get<PlanoTrabalhoConsolidacaoDaoService>(PlanoTrabalhoConsolidacaoDaoService);
    this.planoTrabalhoService = injector.get<PlanoTrabalhoService>(PlanoTrabalhoService);
    this.title = this.lex.translate("Consolidações");
    this.code = "MOD_PTR_CSLD";
    this.form = this.fh.FormBuilder({
      'data_inicio': {default: new Date()},
      'data_fim': {default: new Date()}
    }, this.cdRef, this.validate);
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    let agora = (new Date()).getTime();
    this.items.forEach(v => {
      if(!v.plano_trabalho) v.plano_trabalho = this.entity;
      if(this.util.asTimestamp(v.data_inicio) <= agora && agora <= this.util.asTimestamp(v.data_fim)) this.grid!.expand(v.id);
    });
  }

  public validate = (control: AbstractControl, controlName: string) => {
    let result = null;
    // TODO: Validar data
    return result;
  }

  public async addConsolidacao() {
    return new PlanoTrabalhoConsolidacao({
      id: this.dao!.generateUuid(),
      plano_trabalho_id: this.entity!.id
    });
  }

  public async loadConsolidacao(form: FormGroup, row: any) {
    this.form!.patchValue({
      data_inicio: row.data_inicio,
      data_fim: row.data_fim
    });    
    this.cdRef.detectChanges();
  }

  public async removeConsolidacao(row: any) {
    let confirm = await this.dialog.confirm("Exclui ?", "Deseja realmente excluir o item ?");
    if (confirm) {
      try {
        let consolidacao = row as PlanoTrabalhoConsolidacao;
        await this.dao?.delete(consolidacao);
        this.items.splice(this.items.findIndex(x => x.id == consolidacao.id), 1);
        return true;
      } catch {
        return false;
      }
    } else {
      return false;
    }
  }

  public async saveConsolidacao(form: FormGroup, row: any) {
    let result = undefined;
    this.form!.markAllAsTouched();
    if (this.form!.valid) {
      row.id = row.id == "NEW" ? this.dao!.generateUuid() : row.id;
      row.data_inicio = form.controls.data_inicio.value;
      row.data_fim = form.controls.data_fim.value;
      result = await this.dao?.save(row);
    }
    return result;
  }

  public async concluir(consolidacao: PlanoTrabalhoConsolidacao) {
    this.submitting = true;
    try {
      let response = await this.dao!.concluir(consolidacao.id);
      consolidacao.status = response.status as PlanoTrabalhoConsolidacaoStatus;
      if(consolidacao._metadata?.planoTrabalhoConsolidacaoFormComponent) {
        let consolidacaoForm = consolidacao._metadata?.planoTrabalhoConsolidacaoFormComponent as PlanoTrabalhoConsolidacaoFormComponent;
        consolidacaoForm.loadConsolidacao(response);
      } else {
        this.grid!.refreshExpanded(consolidacao.id);
      }
    } catch (error: any) {
      this.error(error.message || error);
    } finally {
      this.submitting = false;
    }
  }

  public async cancelarConclusao(consolidacao: PlanoTrabalhoConsolidacao) {
    this.submitting = true;
    try {
      let response = await this.dao!.cancelarConclusao(consolidacao.id);
      consolidacao.status = response.status as PlanoTrabalhoConsolidacaoStatus;
      if(consolidacao._metadata?.planoTrabalhoConsolidacaoFormComponent) {
        let consolidacaoForm = consolidacao._metadata?.planoTrabalhoConsolidacaoFormComponent as PlanoTrabalhoConsolidacaoFormComponent;
        consolidacaoForm.loadConsolidacao(response);
      } else {
        this.grid!.refreshExpanded(consolidacao.id);
      }
    } catch (error: any) {
      this.error(error.message || error);
    } finally {
      this.submitting = false;
    }
  }

  public anterior(consolidacao: PlanoTrabalhoConsolidacao): PlanoTrabalhoConsolidacao | undefined {
    return this.entity!.consolidacoes.reduce((a: PlanoTrabalhoConsolidacao | undefined, v: PlanoTrabalhoConsolidacao) => this.util.asTimestamp(v.data_inicio) < this.util.asTimestamp(consolidacao.data_inicio) && (!a || this.util.asTimestamp(a.data_inicio) < this.util.asTimestamp(v.data_inicio)) ? v : a, undefined);
  }

  public proximo(consolidacao: PlanoTrabalhoConsolidacao): PlanoTrabalhoConsolidacao | undefined {
    return this.entity!.consolidacoes.reduce((a: PlanoTrabalhoConsolidacao | undefined, v: PlanoTrabalhoConsolidacao) => this.util.asTimestamp(v.data_fim) > this.util.asTimestamp(consolidacao.data_fim) && (!a || this.util.asTimestamp(a.data_fim) > this.util.asTimestamp(v.data_fim)) ? v : a, undefined);
  }

  public isDisabled(row?: PlanoTrabalhoConsolidacao): boolean {
    return (row && row.status != "INCLUIDO") || this.entity?.status != "ATIVO";
  }

  public avaliar(consolidacao: PlanoTrabalhoConsolidacao) {
    //
  }

  public editarAvaliacao(consolidacao: PlanoTrabalhoConsolidacao) {
    //
  }

  public fazerRecurso(consolidacao: PlanoTrabalhoConsolidacao) {
    //
  }

  public cancelarAvaliacao(consolidacao: PlanoTrabalhoConsolidacao) {
    //
  }

  public dynamicButtons(row: any): ToolbarButton[] {
    let result: ToolbarButton[] = [];
    let consolidacao: PlanoTrabalhoConsolidacao = row as PlanoTrabalhoConsolidacao;
    const anterior = this.anterior(row as PlanoTrabalhoConsolidacao);
    const proximo = this.proximo(row as PlanoTrabalhoConsolidacao);
    const isUsuarioConsolidacao = this.auth.usuario!.id == this.entity!.usuario_id;
    const isGestor = [this.entity!.unidade!.gestor?.usuario_id, this.entity!.unidade!.gestor_substituto?.usuario_id].includes(this.auth.usuario?.id);
    const BOTAO_CONCLUIR = { hint: "Concluir", icon: "bi bi-check-circle", color: "btn-outline-success", onClick: this.concluir.bind(this) };
    const BOTAO_CANCELAR_CONCLUSAO = { hint: "Cancelar conclusão", icon: "bi bi-backspace", color: "btn-outline-danger", onClick: this.cancelarConclusao.bind(this) };
    const BOTAO_AVALIAR = { hint: "Avaliar", icon: "bi bi-star", color: "btn-outline-warning", onClick: this.avaliar.bind(this) };
    const BOTAO_EDITAR_AVALIACAO = { hint: "Editar avaliação", icon: "bi bi-star-half", color: "btn-outline-warning", onClick: this.editarAvaliacao.bind(this) };
    const BOTAO_FAZER_RECURSO = { hint: "Fazer recurso", id: "RECORRIDO", icon: "bi bi-journal-medical", color: "btn-outline-warning", onClick: this.fazerRecurso.bind(this) };
    const BOTAO_CANCELAR_AVALIACAO = { hint: "Cancelar avaliação", id: "INCLUIDO", icon: "bi bi-backspace", color: "btn-outline-warning", onClick: this.cancelarAvaliacao.bind(this) };
    /* (RN_CSLD_11) Não pode concluir a consolidação antes que a anterior não esteja concluida, e não pode retornar status da consolidação se a posterior estiver a frente (em status); */
    const canConcluir = !anterior || ["CONCLUIDO", "AVALIADO"].includes(anterior!.status);
    const canCancelarConclusao = !proximo || ["INCLUIDO"].includes(proximo!.status);
    const canAvaliar = !anterior || ["AVALIADO"].includes(anterior!.status);
    const canCancelarAvaliacao = !proximo || ["INCLUIDO", "CONCLUIDO"].includes(proximo!.status);
    if(!this.isDisabled()) {
      if(consolidacao.status == "INCLUIDO" && canConcluir && (isUsuarioConsolidacao || this.auth.hasPermissionTo("MOD_PTR_CSLD_CONCL"))) {
        result.push(BOTAO_CONCLUIR);
      }
      if(consolidacao.status == "CONCLUIDO" && canCancelarConclusao && this.planoTrabalhoService.diasParaConcluirConsolidacao(row, this.entity!.programa) >= 0 && (isUsuarioConsolidacao || this.auth.hasPermissionTo("MOD_PTR_CSLD_DES_CONCL"))) {
        result.push(BOTAO_CANCELAR_CONCLUSAO);
      }
      if(consolidacao.status == "CONCLUIDO" && canAvaliar && (isGestor || this.auth.hasPermissionTo("MOD_PTR_CSLD_AVALIAR"))) {
        result.push(BOTAO_AVALIAR);
      }
      if(consolidacao.status == "AVALIADO") {
        /* TODO: Fazer as condições para avaliado
          - Se for o usuário do plano, opção de recurso
          - Se for o chefe, opção de cancelar avaliacao ou Reavaliar caso tenha tido recurso
         */
        //if(canCancelarAvaliacao) result.push(BOTAO_CANCELAR_AVALIACAO);
      }
    }
    return result;
  }

}
