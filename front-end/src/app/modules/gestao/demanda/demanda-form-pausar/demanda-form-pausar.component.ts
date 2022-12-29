import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { EditableFormComponent } from 'src/app/components/editable-form/editable-form.component';
import { DemandaDaoService } from 'src/app/dao/demanda-dao.service';
import { IIndexable } from 'src/app/models/base.model';
import { Demanda } from 'src/app/models/demanda.model';
import { PageFormBase } from 'src/app/modules/base/page-form-base';

@Component({
  selector: 'app-demanda-form-pausar',
  templateUrl: './demanda-form-pausar.component.html',
  styleUrls: ['./demanda-form-pausar.component.scss']
})
export class DemandaFormPausarComponent extends PageFormBase<Demanda, DemandaDaoService> implements OnInit {
  @ViewChild(EditableFormComponent, { static: false }) public editableForm?: EditableFormComponent;
  
  public form: FormGroup;
  public reiniciar: boolean = false;
  public modalWidth: number = 400;

  constructor(public injector: Injector) {
    super(injector, Demanda, DemandaDaoService);
    this.form = this.fh.FormBuilder({
      inicio: {default: undefined},
      data: {default: new Date()}
    }, this.cdRef, this.validate);
  }

  public validate = (control: AbstractControl, controlName: string) => {
    let result = null;
    let pausado = this.entity?.pausas?.find(x => !x.data_fim);

    if(controlName == "data") {
      if(this.reiniciar && !pausado) {
        result = "Não á pausa!"; 
      } else if(!this.util.isDataValid(control.value)) {
        result = "Obrigatório";
      } else if(pausado && this.entity && (control.value as Date).getTime() < this.entity!.data_inicio!.getTime()) {
        result = "Menor que inicio!";
      } 
    }

    return result;
  }

  ngAfterViewInit(): void {
    this.reiniciar = !!this.queryParams?.reiniciar;
    this.title = this.reiniciar ? "Reiniciar" : "Suspender";
    super.ngAfterViewInit();
  }

  public async loadData(entity: Demanda, form: FormGroup) {
    //this.reiniciar = !!this.queryParams?.reiniciar;
    let pausado = this.entity?.pausas?.find(x => !x.data_fim);
    if(this.reiniciar && !pausado) {
      this.error("Não há pausa ativa para ser reiniciada.");
    }
    let formValue = {
      inicio: this.reiniciar ? pausado?.data_inicio : undefined, 
      data: this.util.setStrTime(new Date(), this.auth.unidadeHora)
    };
    if(entity.unidade_id != this.auth.unidade!.id) {
      await this.auth.selecionaUnidade(entity.unidade_id);
    }
    form.patchValue(formValue);
  }

  public async initializeData(form: FormGroup) {
    this.entity = (await this.dao!.getDemanda(this.urlParams!.get("id")!))!;
    await this.loadData(this.entity, form);
  }

  public saveData(form: IIndexable): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      let pausa = {
        demanda_id: this.entity!.id,
        data: this.form.controls.data.value 
      };
      if(this.reiniciar) {
        this.dao!.reiniciar(pausa).then(saved => resolve(saved)).catch(reject);
      } else {
        this.dao!.pausar(pausa).then(saved => resolve(saved)).catch(reject);
      }
    });
  }

}