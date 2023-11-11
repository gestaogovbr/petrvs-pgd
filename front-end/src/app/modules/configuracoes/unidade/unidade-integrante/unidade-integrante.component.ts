import { Component, Injector, Input, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { InputSearchComponent } from 'src/app/components/input/input-search/input-search.component';
import { UnidadeIntegranteDaoService } from 'src/app/dao/unidade-integrante-dao.service';
import { UsuarioDaoService } from 'src/app/dao/usuario-dao.service';
import { IIndexable, IntegranteAtribuicao } from 'src/app/models/base.model';
import { IntegranteConsolidado } from 'src/app/models/unidade-integrante.model';
import { Unidade } from 'src/app/models/unidade.model';
import { PageFrameBase } from 'src/app/modules/base/page-frame-base';
import { LookupItem } from 'src/app/services/lookup.service';
import { UnidadeIntegranteService } from 'src/app/services/unidade-integrante.service';

@Component({
  selector: 'unidade-integrante',
  templateUrl: './unidade-integrante.component.html',
  styleUrls: ['./unidade-integrante.component.scss']
})
export class UnidadeIntegranteComponent extends PageFrameBase {
  @ViewChild(GridComponent, { static: false }) public grid?: GridComponent;
  @ViewChild('usuario', { static: false }) public usuario?: InputSearchComponent;
  @Input() set control(value: AbstractControl | undefined) { super.control = value; } get control(): AbstractControl | undefined { return super.control; }
  @Input() set entity(value: Unidade | undefined) { super.entity = value; } get entity(): Unidade | undefined { return super.entity; }
  @Input() set noPersist(value: string | undefined) { super.noPersist = value; } get noPersist(): string | undefined { return super.noPersist; }

  public items: IntegranteConsolidado[] = [];
  public _items?: any[];
  public unidadeIntegranteService: UnidadeIntegranteService;
  public integranteDao: UnidadeIntegranteDaoService;
  public usuarioDao: UsuarioDaoService;
  public unidade?: Unidade;
  public tiposAtribuicao: LookupItem[] = [];

  constructor(public injector: Injector) {
    super(injector);
    this.unidadeIntegranteService = injector.get<UnidadeIntegranteService>(UnidadeIntegranteService);
    this.integranteDao = injector.get<UnidadeIntegranteDaoService>(UnidadeIntegranteDaoService);
    this.usuarioDao = injector.get<UsuarioDaoService>(UsuarioDaoService);
    this.form = this.fh.FormBuilder({
      usuario_id: { default: "" },
      atribuicoes: { default: undefined },
      atribuicao: { default: "" }
    }, this.cdRef, this.validate);
  }

  ngOnInit() {
    super.ngOnInit();
    this.entity_id = this.metadata?.entity_id || this.entity?.id;
    this.tiposAtribuicao = this.isNoPersist ? this.lookup.UNIDADE_INTEGRANTE_TIPO.filter((atribuicao) => !["GESTOR","GESTOR_SUBSTITUTO"].includes(atribuicao.key)) : this.lookup.UNIDADE_INTEGRANTE_TIPO;
  }

  ngAfterViewInit() {
    (async () => {
      await this.loadData({ id: this.entity_id }, this.form);
    })();
  }

  /**
   * Método chamado na inicialização do componente para carregar todos os integrantes da unidade.
   * @param entity 
   * @param form 
   */
  public async loadData(entity: IIndexable, form?: FormGroup | undefined) {
    if (entity.id) {
      try {
          this.grid!.loading = true;
          this.items = this._items == undefined ? await this.integranteDao!.loadIntegrantes(entity.id, "").then( resposta => {
            this.entity = resposta.unidade;
            if(this.isNoPersist) {
              this._items = [];
              resposta.integrantes.forEach(i => this._items?.push(this.unidadeIntegranteService.converterEmVinculo(i, this.entity!.id, i.id, i.atribuicoes)));
            }
            return this.unidadeIntegranteService.ordenar(resposta.integrantes.filter(x => x.atribuicoes?.length > 0));
          }) : this.unidadeIntegranteService.ordenar(this._items.filter(x => x.atribuicoes?.length > 0));
      } finally {
        this.cdRef.detectChanges();
        this.grid!.loading = false;
      }
    }
  }

  public validate = (control: AbstractControl, controlName: string) => {
    let result = null;
    if (["usuario_id", "atribuicoes"].includes(controlName) && !control.value?.length) result = "Obrigatório";
    if ((controlName == "usuario_id") && this.grid?.adding && this.items.map(i => i.id).includes(control.value)) result = "O usuário já é integrante desta unidade. Edite-o, ao invés de incluí-lo novamente!";
    return result;
  }

  /**
   * Método chamado para inserir um integrante no grid, seja este componente persistente ou não.
   * @returns 
   */
  public async addIntegrante() {
    let novo = {
      id: this.integranteDao!.generateUuid(),
      usuario_id: "",
      atribuicoes: []
    } as IIndexable;
    this._items?.push(novo);
    return novo;
  }

  public addItemHandle(): LookupItem | undefined {
    let result = undefined;
    const value = this.lookup.getValue(this.lookup.UNIDADE_INTEGRANTE_TIPO, this.form!.controls.atribuicao.value);
    const key = this.form!.controls.atribuicao.value;
    if (value?.length && this.util.validateLookupItem(this.form!.controls.atribuicoes.value, key)) {
      const icon = this.lookup.getIcon(this.lookup.UNIDADE_INTEGRANTE_TIPO, this.form!.controls.atribuicao.value);
      const color = this.lookup.getColor(this.lookup.UNIDADE_INTEGRANTE_TIPO, this.form!.controls.atribuicao.value);
      result = {
        key: key,
        value: value,
        icon: icon,
        color: color
      };
      this.form!.controls.atribuicao.setValue("");
    }
    return result;
  };

  /**
   * Método chamado na edição de um integrante da Unidade.
   * @param form 
   * @param row 
   */
  public async loadIntegrante(form: FormGroup, row: any) {
    form.controls.usuario_id.setValue(this.grid?.adding ? row.usuario_id : row.id);
    form.controls.atribuicoes.setValue(this.unidadeIntegranteService.converterAtribuicoes(row.atribuicoes));
    form.controls.atribuicao.setValue("");
  }

  /**
   * Método chamado para a exclusão de um integrante do grid, seja este componente persistente ou não. 
   * @param row 
   * @returns 
   */
  public async removeIntegrante(row: IntegranteConsolidado) {
    let nomeServidor = row.usuario_nome;
    let nomeUnidade = this.entity!.nome;
    let confirm = await this.dialog.confirm("Exclui ?", "Deseja realmente excluir todas as atribuições do servidor '" + nomeServidor + "' na unidade '" + nomeUnidade + "' ?");
    if (confirm) {
      let msg: string | undefined;
      try {
        if (!this.isNoPersist) {    // se persistente
          this.loading = true;
          await this.integranteDao.saveIntegrante([this.unidadeIntegranteService.converterEmVinculo(row, this.entity!.id, row.id, [])]).then(resposta => {
            if (msg = resposta.find(v => v.msg?.length)?.msg) { if (this.grid) this.grid.error = msg; };
          });
          await this.loadData({ id: this.entity!.id }, this.form);
        } else {                    // se não persistente
          let index = this._items!.findIndex(x => x["id"] == row["id"]);
          this._items![index] = this.unidadeIntegranteService.converterEmVinculo(row, this.entity!.id, row.id, []);
        }
      } finally {
        this.loading = false;
      }
      return msg ? false : true;
    } else {
      return false;
    }
  }

  /**
   * Garante que não será possível excluir as atribuições de LOTADO, GESTOR e GESTOR_SUBSTITUTO de um servidor por este caminho
   * @param row Atribuição do servidor na unidade
   * @returns 
   */
  public deleteItemHandle(row: LookupItem): boolean | undefined | void {
    return !["LOTADO","GESTOR","GESTOR_SUBSTITUTO"].includes(row.key);
  };

  /**
   * Método chamado no salvamento de um usuário-integrante (new/edit), seja este componente persistente ou não.
   * @param form 
   * @param row 
   * @returns 
   */
  public async saveIntegrante(form: FormGroup, row: IntegranteConsolidado) {
    let confirm = true;
    let n = this.unidadeIntegranteService.alterandoGestor(form, row.atribuicoes || []);
    if (n.length) confirm = await this.dialog.confirm("Confirma a Alteração de Gestor ?", n.length == 1 ? "O " + n[0] + " será alterado." : "Serão alterados: " + n.join(', ') + ".");
    if (form!.controls.atribuicoes.value.length && confirm) {
      this.loading = true;
      try {
        let novasAtribuicoes: IntegranteAtribuicao[] = form!.controls.atribuicoes.value.map((x: LookupItem) => x.key);
        if (!this.isNoPersist) { // se persistente
          await this.integranteDao.saveIntegrante([this.unidadeIntegranteService.converterEmVinculo(row, this.entity!.id, form!.controls.usuario_id.value, novasAtribuicoes)]).then(resposta => {
            let msg: string | undefined;
            if (msg = resposta?.find(v => v.msg?.length)?.msg) { if (this.grid) this.grid.error = msg; };
          });
          await this.loadData({ id: this.entity!.id }, this.form);
          if (this.grid) this.grid!.error = "";
        } else {                // se não persistente
          let index = this._items!.findIndex(x => x["id"] == row["id"]);
          let novoIntegranteConsolidado = { id: row.id, usuario_apelido: this.usuario?.selectedItem?.entity.apelido, usuario_nome: this.usuario?.selectedItem?.entity.nome };
          this._items![index!] = this.unidadeIntegranteService.converterEmVinculo(novoIntegranteConsolidado, this.entity!.id, form!.controls.usuario_id.value, novasAtribuicoes);
          await this.loadData({ id: this.entity!.id }, this.form);
        }
      } catch (error: any) {
        if (this.grid) this.grid.error = error;
        await this.loadData({ id: this.entity!.id }, this.form);
      } finally {
        this.loading = false;
      }
    }
    return undefined;
  }
}
