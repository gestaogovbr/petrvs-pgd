import { Component, Injector, ViewChild, OnChanges, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditableFormComponent } from 'src/app/components/editable-form/editable-form.component';
import { InputSearchComponent } from 'src/app/components/input/input-search/input-search.component';
import { InputSwitchComponent } from 'src/app/components/input/input-switch/input-switch.component';
import { CidadeDaoService } from 'src/app/dao/cidade-dao.service';
import { EntidadeDaoService } from 'src/app/dao/entidade-dao.service';
import { PlanoTrabalhoDaoService } from 'src/app/dao/plano-trabalho-dao.service';
import { UnidadeDaoService } from 'src/app/dao/unidade-dao.service';
import { UnidadeIntegranteAtribuicaoDaoService } from 'src/app/dao/unidade-integrante-atribuicao-dao.service';
import { UnidadeIntegranteDaoService } from 'src/app/dao/unidade-integrante-dao.service';
import { UsuarioDaoService } from 'src/app/dao/usuario-dao.service';
import { IIndexable } from 'src/app/models/base.model';
import { Expediente } from 'src/app/models/expediente.model';
import { Unidade } from 'src/app/models/unidade.model';
import { PageFormBase } from 'src/app/modules/base/page-form-base';
import { NotificacaoService } from 'src/app/modules/uteis/notificacoes/notificacao.service';
import { NotificacoesConfigComponent } from 'src/app/modules/uteis/notificacoes/notificacoes-config/notificacoes-config.component';
import { TemplateDataset } from 'src/app/modules/uteis/templates/template.service';
import { LookupItem } from 'src/app/services/lookup.service';
import { UnidadeIntegranteComponent } from '../unidade-integrante/unidade-integrante.component';
import { IntegranteConsolidado } from 'src/app/models/unidade-integrante.model';

@Component({
  selector: 'app-unidade-form',
  templateUrl: './unidade-form.component.html',
  styleUrls: ['./unidade-form.component.scss']
})

export class UnidadeFormComponent extends PageFormBase<Unidade, UnidadeDaoService> {
  @ViewChild(EditableFormComponent, { static: false }) public editableForm?: EditableFormComponent;
  @ViewChild(UnidadeIntegranteComponent, { static: false }) public usuariosIntegrantes?: UnidadeIntegranteComponent;
  @ViewChild('unidade_pai', { static: false }) public unidadePai?: InputSearchComponent;
  @ViewChild('cidade', { static: false }) public cidade?: InputSearchComponent;
  @ViewChild('gestor', { static: false }) public gestor?: InputSearchComponent;
  @ViewChild('gestorSubstituto', { static: false }) public gestorSubstituto?: InputSearchComponent;
  @ViewChild('entidade', { static: false }) public entidade?: InputSearchComponent;
  @ViewChild('notificacoes', { static: false }) public notificacoes?: NotificacoesConfigComponent;

  public formGestor: FormGroup;
  public entidadeDao: EntidadeDaoService;
  public cidadeDao: CidadeDaoService;
  public usuarioDao: UsuarioDaoService;
  public planoTrabalhoDao: PlanoTrabalhoDaoService;
  public integranteDao: UnidadeIntegranteDaoService;
  public integranteAtribuicaoDao: UnidadeIntegranteAtribuicaoDaoService;
  public notificacao: NotificacaoService;
  public planoDataset: TemplateDataset[];
  public unidade_raiz: boolean = false;
  public informal: boolean = true;

  constructor(public injector: Injector) {
    super(injector, Unidade, UnidadeDaoService);
    this.entidadeDao = injector.get<EntidadeDaoService>(EntidadeDaoService);
    this.cidadeDao = injector.get<CidadeDaoService>(CidadeDaoService);
    this.usuarioDao = injector.get<UsuarioDaoService>(UsuarioDaoService);
    this.planoTrabalhoDao = injector.get<PlanoTrabalhoDaoService>(PlanoTrabalhoDaoService);
    this.integranteDao = injector.get<UnidadeIntegranteDaoService>(UnidadeIntegranteDaoService);
    this.integranteAtribuicaoDao = injector.get<UnidadeIntegranteAtribuicaoDaoService>(UnidadeIntegranteAtribuicaoDaoService);
    this.notificacao = injector.get<NotificacaoService>(NotificacaoService);
    this.modalWidth = 1200;
    this.planoDataset = this.planoTrabalhoDao.dataset();
    this.form = this.fh.FormBuilder({
      codigo: { default: "" },
      sigla: { default: "" },
      nome: { default: "" },
      path: { default: "" },
      cidade_id: { default: "" },
      uf: { default: "" },
      instituidora: { default: false },
      informal: { default: true },
      atividades_arquivamento_automatico: { default: 1 },
      distribuicao_forma_contagem_prazos: { default: "DIAS_UTEIS" },
      entrega_forma_contagem_prazos: { default: "HORAS_UTEIS" },
      notificacoes: { default: {} },
      etiquetas: { default: [] },
      unidade_pai_id: { default: "" },
      entidade_id: { default: this.auth.unidade?.entidade_id },
      etiqueta_texto: { default: "" },
      etiqueta_icone: { default: null },
      etiqueta_cor: { default: null },
      expediente24: { default: true },
      expediente: { default: null },
      usar_expediente_entidade: { default: false },
      texto_complementar_plano: { default: "" }
    }, this.cdRef, this.validate);
    this.formGestor = this.fh.FormBuilder({
      gestor_id: { default: "" },
      gestor_substituto_id: { default: "" }
    }, this.cdRef);
    this.join = ["cidade", "entidade", "unidade_pai", "gestor.usuario:id,nome", "gestor_substituto.usuario:id,nome", "notificacoes_templates", "gestor.gestor:id", "gestor_substituto.gestor_substituto:id"];
  }

  public async loadData(entity: Unidade, form: FormGroup) {
    this.informal = !!entity.informal;
    this.cdRef.detectChanges();
    let formValue = Object.assign({}, form.value);
    this.form!.patchValue(this.util.fillForm(formValue, entity));
    await Promise.all([
      this.unidadePai!.loadSearch(entity.unidade_pai || entity.unidade_pai_id),
      this.cidade!.loadSearch(entity.cidade || entity.cidade_id),
      this.gestor!.loadSearch(entity?.gestor?.usuario || entity.gestor?.usuario!.id),
      this.gestorSubstituto!.loadSearch(entity?.gestor_substituto?.usuario || entity.gestor_substituto?.usuario!.id),
      this.entidade!.loadSearch(entity.entidade || entity.entidade_id)
    ]);
    entity.etiquetas = entity.etiquetas || [];
    this.form!.controls.informal.setValue(entity.informal);
    this.unidade_raiz = this.action == 'edit' && !entity.unidade_pai_id;
    this.fh.revalidate(this.form!);
    await this.usuariosIntegrantes?.loadData(entity);
  }

  public initializeData(form: FormGroup): void {
    this.entity = new Unidade({
      entidade_id: this.auth.unidade?.entidade_id,
      entidade: this.auth.unidade?.entidade,
      informal: 1
    });
    this.loadData(this.entity, form);
  }

  public validate = (control: AbstractControl, controlName: string) => {
    let result = null;
    if (controlName == 'unidade_pai_id' && !control.value?.length && !this.unidade_raiz) {
      result = "Obrigatório";
    }
    if (controlName == 'codigo' && !this.form?.controls.informal.value && !parseInt(control.value)) {
      result = "Obrigatório";
    }
    return result;
  }

  public formValidation = (form?: FormGroup) => {
    const erros_integrantes = [];
    this.usuariosIntegrantes?.grid?.items.forEach((usuarioIntegrante) => {
      if (usuarioIntegrante.usuario_id == '') erros_integrantes.push({ integrante: usuarioIntegrante, erro: 'Falta o usuario' })
    });
    if (erros_integrantes.length) return "Na aba 'Integrantes' há usuário não salvo. Salve-o antes de salvar a unidade!"
    return undefined;
  }

  public addItemHandle(): LookupItem | undefined {
    let result = undefined;
    const value = this.form!.controls.etiqueta_texto.value;
    const key = this.util.textHash(value);
    if (value?.length && this.util.validateLookupItem(this.form!.controls.etiquetas.value, key)) {
      result = {
        key: key,
        value: this.form!.controls.etiqueta_texto.value,
        color: this.form!.controls.etiqueta_cor.value,
        icon: this.form!.controls.etiqueta_icone.value
      };
      this.form!.controls.etiqueta_texto.setValue("");
      this.form!.controls.etiqueta_icone.setValue(null);
      this.form!.controls.etiqueta_cor.setValue(null);
    }
    return result;
  };

  public saveData(form: IIndexable): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      this.notificacoes!.saveData();
      this.usuariosIntegrantes!.grid!.confirm();
      let unidade: Unidade = this.util.fill(new Unidade(), this.entity!);
      unidade = this.util.fillForm(unidade, this.form!.value);
      unidade.notificacoes = this.entity!.notificacoes;
      let salvarGestor = !!this.formGestor!.controls.gestor_id?.value && (!this.entity?.gestor?.id.length || (!!this.entity?.gestor?.id.length && this.entity?.gestor?.usuario?.id != this.formGestor!.controls.gestor_id?.value));
      let salvarGestorSubstituto = !!this.formGestor!.controls.gestor_substituto_id?.value && (!this.entity?.gestor_substituto?.id.length || (!!this.entity?.gestor_substituto?.id.length && this.entity?.gestor_substituto?.usuario?.id != this.formGestor!.controls.gestor_substituto_id?.value));
      let apagarGestor = !this.formGestor!.controls.gestor_id?.value && !!this.entity?.gestor?.id.length;
      let apagarGestorSubstituto = !this.formGestor!.controls.gestor_substituto_id?.value && !!this.entity?.gestor_substituto?.id.length;
      let integrantesConsolidados: IntegranteConsolidado[] = this.usuariosIntegrantes?.items || [];
      try {
        await this.dao?.save(unidade, ["gestor.gestor:id", "gestor_substituto.gestor_substituto:id", "gestor_delegado.gestor_delegado:id"]).then(async unidadeBanco => {
          //this.entity = unidadeBanco;
          if (salvarGestor) await this.integranteDao.saveIntegrante([Object.assign(new IntegranteConsolidado, { 'unidade_id': unidadeBanco.id, 'usuario_id': this.formGestor!.controls.gestor_id!.value, 'atribuicoes': ["GESTOR"] })]);
          if (salvarGestorSubstituto) await this.integranteDao.saveIntegrante([Object.assign(new IntegranteConsolidado, { 'unidade_id': unidadeBanco.id, 'usuario_id': this.formGestor!.controls.gestor_substituto_id!.value, 'atribuicoes': ["GESTOR_SUBSTITUTO"] })]);
          if (apagarGestor) await this.integranteAtribuicaoDao.delete(this.entity?.gestor!.gestor!.id!);
          if (apagarGestorSubstituto) await this.integranteAtribuicaoDao.delete(this.entity?.gestor_substituto!.gestor_substituto!.id!);
          integrantesConsolidados.forEach(v => v.unidade_id = unidadeBanco.id);
          if (integrantesConsolidados.length) await this.integranteDao.saveIntegrante(integrantesConsolidados as IntegranteConsolidado[]);
        });
        resolve(true);
      } catch (error: any) {
        if (this.editableForm) this.editableForm.error = error;
      }
    });
  }

  public titleEdit = (entity: Unidade): string => {
    return "Editando " + this.lex.translate("Unidade") + ': ' + (entity?.sigla || "");
  }

  public onInformalChange(event: Event) {
    this.informal = this.form!.controls.informal.value;
    this.form!.controls.codigo.setValue("");
    this.form!.controls.instituidora.setValue(false);
    this.form!.controls.codigo.updateValueAndValidity();
  }

  public onUsarExpedienteEntidadeChange() {
    this.form!.controls.expediente.setValue(this.form!.controls.usar_expediente_entidade.value ? null : this.form!.controls.expediente.value || new Expediente());
  }

  public get informalIsDisabled() {
    //return this.action != 'new' ? 'true' : undefined;
    return 'true';
  }

  public get instituidoraIsDisabled() {
    return this.informal ? 'true' : undefined;
  }

  public get codigoIsDisabled() {
    return !this.informal && this.action == 'new' ? undefined : 'true';
  }

  public get unidadePaiIsDisabled() {
    return this.unidade_raiz || (!this.informal && this.action == 'edit') ? 'true' : undefined
  }

  public get isDisabled() {
    return !this.informal && this.action == 'edit' ? 'true' : undefined;
  }

}
