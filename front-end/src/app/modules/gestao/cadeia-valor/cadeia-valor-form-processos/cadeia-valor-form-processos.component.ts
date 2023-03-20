import { ChangeDetectorRef, Component, Injector, Input, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { EditableFormComponent } from 'src/app/components/editable-form/editable-form.component';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { ToolbarButton } from 'src/app/components/toolbar/toolbar.component';
import { CadeiaValorDaoService } from 'src/app/dao/cadeia-valor-dao.service';
import { Base, IIndexable } from 'src/app/models/base.model';
import { CadeiaValorProcesso } from 'src/app/models/cadeia-valor-processo.model';
import { CadeiaValor } from 'src/app/models/cadeia-valor.model';
import { PageFrameBase } from 'src/app/modules/base/page-frame-base';

@Component({
  selector: 'cadeia-valor-form-processos',
  templateUrl: './cadeia-valor-form-processos.component.html',
  styleUrls: ['./cadeia-valor-form-processos.component.scss']
})
export class CadeiaValorFormProcessosComponent extends PageFrameBase {
  @ViewChild(EditableFormComponent, { static: false }) public editableForm?: EditableFormComponent;
  @ViewChild(GridComponent, { static: false }) public grid?: GridComponent;
  @Input() cdRef: ChangeDetectorRef;
  @Input() set control(value: AbstractControl | undefined) { super.control = value; } get control(): AbstractControl | undefined { return super.control; }
  @Input() set entity(value: CadeiaValor | undefined) { super.entity = value; } get entity(): CadeiaValor | undefined { return super.entity; }

  public button: any;

  public get items(): CadeiaValorProcesso[] {
    if (!this.gridControl.value) this.gridControl.setValue(new CadeiaValor());
    if (!this.gridControl.value.processos) this.gridControl.value.processos = [];

    return this.gridControl.value.processos;
  }

  constructor(public injector: Injector) {
    super(injector);
    this.cdRef = injector.get<ChangeDetectorRef>(ChangeDetectorRef);
    this.dao = injector.get<CadeiaValorDaoService>(CadeiaValorDaoService);
    this.form = this.fh.FormBuilder({
      nome: { default: "" },
      sequencia: { default: "" }
    }, this.cdRef, this.validate);
  }

  public validate = (control: AbstractControl, controlName: string) => {
    let result = null;
    return result;
  }

  public loadData(entity: IIndexable, form?: FormGroup) {
    //super.loadData(entity, form);
  }

  public initializeData(form?: FormGroup) {
    /*this.entity = new CadeiaValor();
    this.loadData(this.entity, this.form);*/
  }

  public async addProcesso() {
    return new CadeiaValorProcesso({
      id: this.dao!.generateUuid(),
      sequencia: this.items.filter(x => !x.processo_pai_id).length + 1,
      nome: ""
    }) as IIndexable;
  }

  public async addChildProcesso(row: CadeiaValorProcesso, metadata: any, index: number) {
    let processo = new CadeiaValorProcesso({
      id: this.dao!.generateUuid(),
      processo_pai_id: row.id,
      sequencia: this.items.filter(x => x.processo_pai_id == row.id).length + 1,
      nome: ""
    });

    this.items.push(processo);
    this.grid!.setMetadata(processo, { nivel: this.getSequencia({}, processo) });
    this.items.sort((a, b) => {
      const sa = (this.grid!.getMetadata(a)?.nivel || "").split(".").map((x: string) => ("000" + x).substr(-3)).join(".");
      const sb = (this.grid!.getMetadata(b)?.nivel || "").split(".").map((x: string) => ("000" + x).substr(-3)).join(".");
      return sa < sb ? -1 : sa > sb ? 1 : 0;
    });
    this.grid!.adding = true;
    await this.grid!.edit(processo);
    return undefined;
  }

  public getSequencia(metadata: any, row: CadeiaValorProcesso) {
    if (!metadata.nivel) {
      let paiId: string | null = row.processo_pai_id;
      let niveis = "";
      let path = [];
      while (paiId) {
        path.push(paiId);
        let atual = this.items.find(x => x.id == paiId);
        niveis = (atual?.sequencia || "") + "." + niveis;
        paiId = atual?.processo_pai_id || null;
      }
      niveis += row.sequencia;
      if (metadata.nivel != niveis) {
        metadata.nivel = niveis;
        metadata.path = path;
      }
    }
    return metadata.nivel;
  }

  public getNivelSequencia(metadata: any): number {
    return 10 * (metadata.nivel.match(/\./g) || []).length;
  }
 
  public async loadProcesso(form: FormGroup, row: any) {
    form.controls.sequencia.setValue(row.sequencia);
    form.controls.nome.setValue(row.nome);
    this.cdRef.detectChanges();
  }

  public async removeProcesso(row: any) {
    
    return true;
    
    // const encontrarPai: (pai: any) => {
    //   let pai: CadeiaValorProcesso;
    //   while(pai = this.items.find(x => x.processo_pai_id = pai.id)) {
    //     if(pai.id == pai) return true;
    //   };
    //   return false;
    // };
    // return true;

    // let filhos = this.items.find(x => x.path.indexOf(idPai) >= 0);
  }


/*
percorrer arvore em profundidade

m(i, novopath)
    for(i){
      i.path = novoPath 
      novopath = i.path+'/'+i.id;
      m(i, novoPath)
    }
a
    b
        c
            d


b)
  

*/

  public async saveProcesso(form: FormGroup, row: any) {
    let result = undefined;
    this.form!.markAllAsTouched();
    if (this.form!.valid) {
      row.id = row.id == "NEW" ? this.dao!.generateUuid() : row.id;
      row.sequencia = form.controls.sequencia.value;
      row.nome = form.controls.nome.value;
      result = row;
      this.cdRef.detectChanges();
    }
    return result;
  }

  public dynamicButtons(row: any): ToolbarButton[] {
    let result: ToolbarButton[] = [];
    let cadeiaValorProcesso: CadeiaValorProcesso = row as CadeiaValorProcesso;
    result.push({ hint: "Adicionar filho", icon: "bi bi-plus-circle", onClick: this.addChildProcesso.bind(this) });
    return result;
  }
}