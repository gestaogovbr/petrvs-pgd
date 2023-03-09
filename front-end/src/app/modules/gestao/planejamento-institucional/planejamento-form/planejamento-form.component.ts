import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { EditableFormComponent } from 'src/app/components/editable-form/editable-form.component';
import { PlanejamentoDaoService } from 'src/app/dao/planejamento-dao.service';
import { UnidadeDaoService } from 'src/app/dao/unidade-dao.service';
import { IIndexable } from 'src/app/models/base.model';
import { Planejamento } from 'src/app/models/planejamento.model';
import { PageFormBase } from 'src/app/modules/base/page-form-base';
import { LookupItem } from 'src/app/services/lookup.service';
import { PlanejamentoFormObjetivoComponent } from '../planejamento-form-objetivo/planejamento-form-objetivo.component';

@Component({
  selector: 'app-planejamento-form',
  templateUrl: './planejamento-form.component.html',
  styleUrls: ['./planejamento-form.component.scss']
})
export class PlanejamentoFormComponent extends PageFormBase<Planejamento, PlanejamentoDaoService> {
    @ViewChild(EditableFormComponent, { static: false }) public editableForm?: EditableFormComponent;
    @ViewChild('objetivos', { static: false }) public objetivos?: PlanejamentoFormObjetivoComponent;

    public unidadeDao: UnidadeDaoService;
    public form: FormGroup;
    
    constructor(public injector: Injector) {
      super(injector, Planejamento, PlanejamentoDaoService);
      this.unidadeDao = injector.get<UnidadeDaoService>(UnidadeDaoService);
      this.join = ['objetivos'];
      this.form = this.fh.FormBuilder({
        nome: {default: ""},
        unidade_id: {default: null},
        entidade_id: {default: null},
        inicio: {default: new Date()},
        fim: {default: null},
        missao: {default: ""},
        visao: {default: ""},
        valores: { default: []},
        valor_texto: {default: ""}
      }, this.cdRef, this.validate);
    }
  
    public validate = (control: AbstractControl, controlName: string) => {
      let result = null;
      if(['nome','missao','visao'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      if(['inicio'].indexOf(controlName) >= 0 && !this.dao?.validDateTime(control.value)) {
        result = "Inválido";
      }
      if(controlName == 'fim' && control.value && !this.dao?.validDateTime(control.value)){
        result = "Inválido";
      }
      return result;
    }
  
    public formValidation = (form?: FormGroup) =>{
      let result = null;
      if(this.form!.controls.fim.value && this.form!.controls.inicio.value > this.form!.controls.fim.value) {
        return "A data do início não pode ser maior que a data do fim!";
      }
      return result;
    }
  
    public loadData(entity: Planejamento, form: FormGroup) {
      let formValue = Object.assign({}, form.value);
      form.patchValue(this.util.fillForm(formValue, entity));
    }
  
    public initializeData(form: FormGroup) {
      //form.patchValue(new Planejamento());
      let planejamento = new Planejamento();
      this.entity = planejamento;
      this.cdRef.detectChanges();
      this.loadData(this.entity, form); 
    }
  
    public async saveData(form: IIndexable): Promise<Planejamento> {
      await Promise.all([
        this.objetivos!.saveData(),
      ]);
      return this.entity! as Planejamento;
    }
   
    public titleEdit = (entity: Planejamento): string => {
      return "Editando "+ (entity?.nome || "");
    }

    public addValorHandle(): LookupItem | undefined {
      let result = undefined;
      const value = this.form.controls.valor_texto.value;
      const key = this.util.textHash(value);
      if(value?.length && this.util.validateLookupItem(this.form.controls.valores.value, key)) {
        result = {
          key: key,
          value: this.form.controls.valor_texto.value
        };
        this.form.controls.valor_texto.setValue("");
      }
      return result;
    };

    public onTabsSelect() {
      this.saveData(this.form!);
    }

/*     public get titlePlanejamento(): string {
      return this.entity?.numero ? "#" + this.entity?.numero : "";
    } */
  
}
  
  
