import { Component, Injector, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { EditableFormComponent } from 'src/app/components/editable-form/editable-form.component';
import { InputTextComponent } from 'src/app/components/input/input-text/input-text.component';
import { InputTextareaComponent } from 'src/app/components/input/input-textarea/input-textarea.component';
import { EntidadeDaoService } from 'src/app/dao/entidade-dao.service';
import { IntegracaoDaoService } from 'src/app/dao/integracao-dao.service';
import { IIndexable } from 'src/app/models/base.model';
import { Integracao } from 'src/app/models/integracao.model';
import { PageFormBase } from 'src/app/modules/base/page-form-base';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-integracao-form',
  templateUrl: './integracao-form.component.html',
  styleUrls: ['./integracao-form.component.scss']
})
export class IntegracaoFormComponent extends PageFormBase<Integracao, IntegracaoDaoService> {
  @ViewChild(EditableFormComponent, { static: false }) public editableForm?: EditableFormComponent;
  @ViewChild('entidade', { static: false }) public entidade?: InputTextComponent;
  @ViewChild('usuario', { static: false })  public usuario?: InputTextComponent;
  @ViewChild('resultado_unidades', { static: false })  public resultado_unidades?: InputTextareaComponent;
  @ViewChild('resultado_servidores', { static: false })  public resultado_servidores?: InputTextareaComponent;
  @ViewChild('resultado_gestores', { static: false })  public resultado_gestores?: InputTextareaComponent;

  public form: FormGroup;
  public entidadeDao: EntidadeDaoService;
  public confirmLabel: string = "Executar";
  public production: boolean = false;
    
  constructor(public injector: Injector, dao: IntegracaoDaoService) {
    super(injector, Integracao, IntegracaoDaoService);
    this.entidadeDao = injector.get<EntidadeDaoService>(EntidadeDaoService);
    this.form = this.fh.FormBuilder({
      atualizar_unidades: {default: false},
      atualizar_servidores: {default: false},
      atualizar_gestores: {default: true},
      usar_arquivos_locais: {default: false},
      gravar_arquivos_locais: {default: false},
      entidade_id: {default: ""},
      usuario_id: {default: ""},
      data_execucao: {default: ""},
      resultado: {default: ""}
    }, this.cdRef, this.validate);
    this.join = ["entidade", "usuario"];
  }

  public loadData(entity: Integracao, form: FormGroup): void {
    let formValue = Object.assign({}, form.value);
    form.patchValue(this.util.fillForm(formValue, entity));
    this.preparaFormulario(entity);
  }

  public preparaFormulario(entity: Integracao) {
    this.production = environment.production;
    this.form.controls.entidade_id.setValue(entity.id ? entity.entidade!.nome : this.auth.unidade?.entidade_id);
    this.form.controls.usuario_id.setValue(entity.id ? (entity.usuario_id ? entity.usuario!.nome : 'Usuário não logado') : this.auth.usuario!.id);
    if(this.resultado_unidades) this.resultado_unidades!.inputElement!.nativeElement.value = entity.id ? JSON.stringify(entity.resultado?.unidades) : '';
    if(this.resultado_servidores) this.resultado_servidores!.inputElement!.nativeElement.value = entity.id ? JSON.stringify(entity.resultado?.servidores) : '';
    if(this.resultado_gestores) this.resultado_gestores!.inputElement!.nativeElement.value = entity.id ? JSON.stringify(entity.resultado?.gestores) : '';
  }

  public initializeData(form: FormGroup): void {
    this.loadData(new Integracao(), form);
  }

  public saveData(form: IIndexable): Promise<Integracao> {
    return new Promise<Integracao>((resolve, reject) => {
      const integracao = this.util.fill(new Integracao(), this.entity!);
      resolve(this.util.fillForm(integracao, this.form!.value));
    });
  }

  public validate = (control: AbstractControl, controlName: string) => {
    let result = null;
    if(['entidade_id', 'usuario_id'].indexOf(controlName) >= 0 && !control.value?.length) {
      result = "Obrigatório";
    }
    return result;
  }
}
