import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { EditableFormComponent } from 'src/app/components/editable-form/editable-form.component';
import { InputSearchComponent } from 'src/app/components/input/input-search/input-search.component';
import { CidadeDaoService } from 'src/app/dao/cidade-dao.service';
import { LotacaoDaoService } from 'src/app/dao/lotacao-dao.service';
import { IIndexable } from 'src/app/models/base.model';
import { Lotacao } from 'src/app/models/lotacao.model';
import { PageFormBase } from 'src/app/modules/base/page-form-base';
import { UnidadeDaoService } from 'src/app/dao/unidade-dao.service';
import { UsuarioDaoService } from 'src/app/dao/usuario-dao.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-lotacao-form',
  templateUrl: './lotacao-form.component.html',
  styleUrls: ['./lotacao-form.component.scss']
})


export class LotacaoFormComponent extends PageFormBase<Lotacao, LotacaoDaoService> {
  @ViewChild(EditableFormComponent, { static: false }) public editableForm?: EditableFormComponent;
  @ViewChild('usuario', { static: false }) public usuario?: InputSearchComponent;
  @ViewChild('unidade', { static: false }) public unidade?: InputSearchComponent;

  public unidadeDao: UnidadeDaoService;
  public usuarioDao: UsuarioDaoService;

  constructor(public injector: Injector) {
    super(injector, Lotacao, LotacaoDaoService);
    this.unidadeDao = injector.get<UnidadeDaoService>(UnidadeDaoService);
    this.usuarioDao = injector.get<UsuarioDaoService>(UsuarioDaoService);
    this.modalWidth = 700;
    this.form = this.fh.FormBuilder({
      principal: {default: ""},
      unidade_id: {default: ""},
      usuario_id: {default: ""}
     // usuario_id: {default: this.urlParams!.get("usuario_id")!}
    }, this.cdRef, this.validate);
    this.join = ["usuario", "unidade"];
  }

  public validate = (control: AbstractControl, controlName: string) => {
    let result = null;

    if(['usuario_id', 'unidade_id'].indexOf(controlName) >= 0 && !control.value?.length) {
      result = "Obrigatório";
    }
    return result;
  }

  public async loadData(entity: Lotacao, form: FormGroup) {
    let formValue = Object.assign({}, form.value);
    await Promise.all ([
      this.usuario?.loadSearch(entity.usuario || entity.usuario_id),
      this.unidade?.loadSearch(entity.unidade || entity.unidade_id)
    ]);
    form.patchValue(this.util.fillForm(formValue, entity));
  }

  public initializeData(form: FormGroup): void {
    this.entity = new Lotacao();
    this.entity.usuario_id = this.urlParams!.get("usuario_id")!;
    this.loadData(this.entity, form);
  }

  public saveData(form: IIndexable): Promise<Lotacao> {
    return new Promise<Lotacao>((resolve, reject) => {
      const lotacao = this.util.fill(new Lotacao(), this.entity!);
      resolve(this.util.fillForm(lotacao, this.form!.value));
    });
  }

  public titleEdit = (entity: Lotacao): string => {
    return "Editando ";// + (entity?.usuario_id || "");
  }
}

