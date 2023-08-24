import { Component, Injector, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { EditableFormComponent } from 'src/app/components/editable-form/editable-form.component';
import { AfastamentoDaoService } from 'src/app/dao/afastamento-dao.service';
import { IIndexable } from 'src/app/models/base.model';
import { Afastamento } from 'src/app/models/afastamento.model';
import { PageFormBase } from 'src/app/modules/base/page-form-base';
import { TipoMotivoAfastamentoDaoService } from 'src/app/dao/tipo-motivo-afastamento-dao.service';
import { UsuarioDaoService } from 'src/app/dao/usuario-dao.service';
import { InputSearchComponent } from 'src/app/components/input/input-search/input-search.component';
import { TipoMotivoAfastamento } from 'src/app/models/tipo-motivo-afastamento.model';

@Component({
  selector: 'app-afastamento-form',
  templateUrl: './afastamento-form.component.html',
  styleUrls: ['./afastamento-form.component.scss']
})
export class AfastamentoFormComponent extends PageFormBase<Afastamento, AfastamentoDaoService> {
  @ViewChild(EditableFormComponent, { static: false }) public editableForm?: EditableFormComponent;
  @ViewChild('tipoMotivoAfastamento', { static: false }) public tipoMotivoAfastamento?: InputSearchComponent;
  @ViewChild('usuario', { static: false }) public usuario?: InputSearchComponent;

  public form: FormGroup;
  public tipoMotivoAfastamentoDao: TipoMotivoAfastamentoDaoService;
  public usuarioDao: UsuarioDaoService;

  constructor(public injector: Injector) {
    super(injector, Afastamento, AfastamentoDaoService);
    this.tipoMotivoAfastamentoDao = injector.get<TipoMotivoAfastamentoDaoService>(TipoMotivoAfastamentoDaoService);
    this.usuarioDao = injector.get<UsuarioDaoService>(UsuarioDaoService);

    this.form = this.fh.FormBuilder({
      observacoes: {default: ""},
      data_inicio: {default: new Date()},
      data_fim: {default: new Date()},
      usuario_id: {default: ""},
      tipo_motivo_afastamento_id: {default: ""}
    }, this.cdRef, this.validate);
    this.join = ["usuario", "tipo_motivo_afastamento"];
  }

  public isHoras(){
    if(this.form.controls.tipo_motivo_afastamento_id.value?.length && (this.tipoMotivoAfastamento?.selectedEntity as TipoMotivoAfastamento)?.horas){//Então é em Horas
      return true;
    }
    else return false;
  }

  public validate = (control: AbstractControl, controlName: string) => {
    let result = null;

    if(['usuario_id', 'tipo_motivo_afastamento_id'].indexOf(controlName) >= 0 && !control.value?.length) {
      result = "Obrigatório";
    } else if(['data_inicio', 'data_fim'].indexOf(controlName) >= 0 && !this.dao?.validDateTime(control.value)) {
      result = "Inválido";
    }

    return result;
  }

  public async loadData(entity: Afastamento, form: FormGroup) {
    let formValue = Object.assign({}, form.value);
    await Promise.all([
      this.usuario!.loadSearch(entity.usuario || formValue.usuario_id),
      this.tipoMotivoAfastamento!.loadSearch(entity.tipo_motivo_afastamento || formValue.tipo_motivo_afastamento_id)
    ]);
    form.patchValue(this.util.fillForm(formValue, entity));
  }

  public initializeData(form: FormGroup): void {
    form.patchValue(new Afastamento());
  }

  public saveData(form: IIndexable): Promise<Afastamento> {
    return new Promise<Afastamento>((resolve, reject) => {
      let afastamento = this.util.fill(new Afastamento(), this.entity!);
      afastamento = this.util.fillForm(afastamento, this.form!.value);
      if (!this.isHoras()){
        afastamento.data_inicio.setHours(0,0,0);
        afastamento.data_fim.setHours(23,59,0);
        afastamento.data_fim.setDate(afastamento.data_fim.getDate());
      }
      resolve(afastamento);
    });
  }

  public titleEdit = (entity: Afastamento): string => {
    return "Editando " + this.lex.translate("afastamento") + ': ' + (entity?.usuario?.nome || "") + ' - ' + (entity?.tipo_motivo_afastamento?.nome || "");
  }
}

