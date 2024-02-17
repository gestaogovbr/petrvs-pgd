import { Component, Injector, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { now } from 'moment';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { InputSearchComponent } from 'src/app/components/input/input-search/input-search.component';
import { ToolbarButton } from 'src/app/components/toolbar/toolbar.component';
import { ProgramaDaoService } from 'src/app/dao/programa-dao.service';
import { ProgramaParticipanteDaoService } from 'src/app/dao/programa-participante-dao.service';
import { UnidadeDaoService } from 'src/app/dao/unidade-dao.service';
import { UsuarioDaoService } from 'src/app/dao/usuario-dao.service';
import { Programa } from 'src/app/models/programa.model';
import { Usuario } from 'src/app/models/usuario.model';
import { PageListBase } from 'src/app/modules/base/page-list-base';

@Component({
  selector: 'app-programa-participantes',
  templateUrl: './programa-participantes.component.html',
  styleUrls: ['./programa-participantes.component.scss']
})
export class ProgramaParticipantesComponent extends PageListBase<Usuario, UsuarioDaoService> {
  @ViewChild(GridComponent, { static: false }) public grid?: GridComponent;
  @ViewChild("programaSearch", { static: false }) public programaSearch?: InputSearchComponent;
  //@ViewChild("usuario", { static: false }) public usuario?: InputSearchComponent;

  public unidadeDao: UnidadeDaoService;
  public programaParticipanteDao: ProgramaParticipanteDaoService;
  public programaDao: ProgramaDaoService;
  public multiselectMenu: ToolbarButton[] = [];
  public programa: Programa | null = null;
  public BOTAO_HABILITAR: ToolbarButton = { label: "Habilitar", icon: "bi bi-person-check-fill", color: "btn-outline-success", onClick: this.habilitarParticipante.bind(this) };
  public BOTAO_DESABILITAR: ToolbarButton = { label: "Desabilitar", icon: "bi bi-person-x-fill", color: "btn-outline-danger", onClick: this.desabilitarParticipante.bind(this) };

  constructor(public injector: Injector) {
    super(injector, Usuario, UsuarioDaoService);
    this.unidadeDao = injector.get<UnidadeDaoService>(UnidadeDaoService);
    this.programaParticipanteDao = injector.get<ProgramaParticipanteDaoService>(ProgramaParticipanteDaoService);
    this.programaDao = injector.get<ProgramaDaoService>(ProgramaDaoService);
    /* Inicializações */
    this.code = "MOD_PART";
    this.filter = this.fh.FormBuilder({
      programa_id: { default: this.programa?.id },
      unidade_id: { default: this.auth.unidade?.id },
      nome_usuario: { default: "" },
      habilitados: { default: false },
    }, this.cdRef, this.validate);
    if (this.auth.hasPermissionTo('MOD_PART_HAB')) this.multiselectMenu.push({
      icon: "bi bi-person-check-fill",
      label: "Habilitar",
      color: "btn-outline-success",
      onClick: this.habilitarParticipantes.bind(this)
    });
    if (this.auth.hasPermissionTo('MOD_PART_DESAB')) this.multiselectMenu.push({
      icon: "bi bi-person-x-fill",
      label: "Desabilitar",
      color: "btn-outline-danger",
      onClick: this.desabilitarParticipantes.bind(this)
    });
    this.join = ["lotacao.unidade:id,sigla", "planos_trabalho:id,status", "participacoes_programas:id"];
    this.title = this.lex.translate("Habilitações");
    this.orderBy = [['nome', 'asc']];
  }

  public dynamicButtons(row: any): ToolbarButton[] {
    let result: ToolbarButton[] = [];
    if (this.auth.hasPermissionTo('MOD_PART_HAB') && !this.isHabilitado(row)) result.push(this.BOTAO_HABILITAR);
    if (this.auth.hasPermissionTo('MOD_PART_DESAB') && this.isHabilitado(row)) result.push(this.BOTAO_DESABILITAR);
    return result;
  }

  public validate = (control: AbstractControl, controlName: string) => {
    let result = null;
    if (['programa_id'].indexOf(controlName) >= 0 && !control.value?.length) {
      result = "Obrigatório";
    }
    return result;
  }

  public ngAfterViewInit(): void {
    super.ngAfterViewInit();
    (async () => {
      this.loading = true;
      try {
        this.programa = this.metadata?.programa;
        if (!this.programa) await this.programaDao.query({ where: [['vigentesUnidadeExecutora', "==", this.auth.unidade!.id]] }).asPromise().then(programas => {
          this.programa = programas[0];
        });
        await this.programaSearch?.loadSearch(this.programa);
        if (this.programa) this.grid!.reloadFilter();
      } finally {
        this.loading = false;
      }
    })();
  }

  public filterClear(filter: FormGroup<any>): void {
    filter.controls.unidade_id.setValue(undefined);
    filter.controls.nome_usuario.setValue('');
    filter.controls.habilitados.setValue(true);
  }

  public filterWhere = (filter: FormGroup) => {
    let result: any[] = [];
    let form: any = filter.value;
    result.push(["habilitado", '==', this.filter?.controls.habilitados.value]);
    result.push(["programa_id", "==", this.programa?.id]);
    if (form.nome_usuario?.length) result.push(["nome", "like", "%" + form.nome_usuario.trim().replace(" ", "%") + "%"]);
    if (form.unidade_id?.length) result.push(["lotacao", "==", form.unidade_id]);
    return result;
  }

  public async habilitarParticipante(row: any) {
    await this.programaParticipanteDao!.habilitar([row.id], this.programa!.id, 1, false).then(resposta => {
      (this.grid?.query || this.query!).refreshId(row.id);
      this.cdRef.detectChanges();
    });
    return false;
  }

  public async desabilitarParticipante(row: any) {
    let desabilitar = await this.dialog.confirm("Desabilitar ?", "Deseja DESABILITAR " + this.lex.translate("o servidor") + " " + (row.nome as string).toUpperCase() + " " + this.lex.translate("do programa") + " " + (this.programa?.nome as string).toUpperCase() + " ?");
    if (desabilitar) {
      let suspender: boolean = false;
      if (this.hasPlanoTrabalhoAtivo(row)) {
        suspender = await this.dialog.confirm("ATENÇÃO", this.lex.translate("O servidor") + " possui " + this.lex.translate("Plano de Trabalho") + " ativo vinculado a " + this.lex.translate("este Programa") + "!" + " Deseja continuar com a desabilitação, suspendendo o seu " + this.lex.translate("Plano de Trabalho" + " ?"));
      }
      if (!this.hasPlanoTrabalhoAtivo(row) || suspender) {
        await this.programaParticipanteDao!.habilitar([row.id], this.programa!.id, 0, suspender).then(resposta => {
          (this.grid?.query || this.query!).refreshId(row.id);
          this.cdRef.detectChanges();
        });
      }
    }
  }

  public async habilitarParticipantes() {
    if (!this.grid!.multiselectedCount) {
      this.dialog.alert("Selecione", "Nenhum participante selecionado para a habilitação");
    } else {
      const self = this;
      this.dialog.confirm("Habilitar Participantes ?", "Confirma a habilitação de todos esses participantes?").then(habilitar_todos => {
        if (habilitar_todos) {
          const idsUsuarios = Object.values(this.grid!.multiselected).map(x => x.id);
          this.programaParticipanteDao!.habilitar(idsUsuarios, this.programa!.id, 1, false).then(function () {
            self.dialog.topAlert("Participantes habilitados com sucesso!", 5000);
            (self.grid?.query || self.query!).refresh();
          }).catch(function (error) {
            self.dialog.alert("Erro", "Erro ao habilitar os participantes: " + error?.message ? error?.message : error);
          });
          this.grid?.enableMultiselect(false);
          self.cdRef.detectChanges();
        }
      });
    }
  }

  public async desabilitarParticipantes() {
    let idsProgramasParticipantes = Object.keys(this.grid!.multiselected);
    this.dialog.confirm("Desabilitar ?", "Deseja DESABILITAR, " + this.lex.translate("do programa") + " " + (this.programa?.nome as string).toUpperCase() + " todos " + this.lex.translate("os usuários") + " selecionados ?").then(async desabilitar => {
      if (desabilitar) {
        const self = this;
        let qde_usuarios_com_plano_trabalho_ativo: number = 0;
        await this.programaParticipanteDao!.quantidadePlanosTrabalhoAtivos(idsProgramasParticipantes).then(resposta => {
          qde_usuarios_com_plano_trabalho_ativo = resposta;
        });
        let suspender: boolean = false;
        if (!!qde_usuarios_com_plano_trabalho_ativo) {
          await this.dialog.confirm("ATENÇÃO", "Há " + qde_usuarios_com_plano_trabalho_ativo + this.lex.translate(qde_usuarios_com_plano_trabalho_ativo == 1 ? " usuário" : " usuários") + " com " + this.lex.translate("Plano de Trabalho") + " ativo vinculado a " + this.lex.translate("este Programa") + "!" + " Deseja continuar com a desabilitação, suspendendo " + (qde_usuarios_com_plano_trabalho_ativo == 1 ? "o seu " : "todos ") + this.lex.translate(qde_usuarios_com_plano_trabalho_ativo == 1 ? "Plano de Trabalho" : "os Planos de Trabalho") + " ?").then(resposta => {
            suspender = resposta;
          });
        }
        if (!qde_usuarios_com_plano_trabalho_ativo || suspender) {
          const idsUsuarios = Object.values(this.grid!.multiselected).map(x => x.id);
          this.programaParticipanteDao!.habilitar(idsUsuarios, this.programa!.id, 0, suspender).then(resposta => {
            self.dialog.topAlert("Participantes desabilitados com sucesso!", 5000);
            (this.grid?.query || this.query!).refresh();
          }).catch(function (error) {
            if (self.grid) self.grid.error = error;
          });
          this.grid?.enableMultiselect(false);
          this.cdRef.detectChanges();
        }
      }
    });
  }

  public onProgramaChange() {
    this.programa = this.programaSearch?.selectedItem?.entity;
    if (this.programa) this.grid?.reloadFilter();
  }

  public isHabilitado(row: Usuario): boolean {
    return !!row.participacoes_programas.find(x => x.habilitado == 1 && x.programa_id == this.programa?.id);
  }

  public hasPlanoTrabalhoAtivo(row: Usuario): boolean {
    return !!row.planos_trabalho?.find(x => x.status == "ATIVO" && this.util.between(now(), { start: x.data_inicio, end: x.data_fim }));
  }

}

