import { Component, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRouteSnapshot } from '@angular/router';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { InputSearchComponent } from 'src/app/components/input/input-search/input-search.component';
import { CadeiaValorDaoService } from 'src/app/dao/cadeia-valor-dao.service';
import { EntidadeDaoService } from 'src/app/dao/entidade-dao.service';
import { CadeiaValor } from 'src/app/models/cadeia-valor.model';
import { PageListBase } from 'src/app/modules/base/page-list-base';

@Component({
  selector: 'cadeia-valor-list-grid',
  templateUrl: './cadeia-valor-list-grid.component.html',
  styleUrls: ['./cadeia-valor-list-grid.component.scss']
})
export class CadeiaValorListGridComponent  extends PageListBase<CadeiaValor, CadeiaValorDaoService>{
  // @Input() snapshot?: ActivatedRouteSnapshot;
  @ViewChild(GridComponent, { static: false }) public grid?: GridComponent;
  @Input() snapshot?: ActivatedRouteSnapshot;
  @Input() fixedFilter?: any[];
  @Input() selectable: boolean = false;
  
  public entidadeDao: EntidadeDaoService;

  constructor(public injector: Injector) {
    super(injector, CadeiaValor, CadeiaValorDaoService);
    this.entidadeDao = injector.get<EntidadeDaoService>(EntidadeDaoService);
    this.join = ['processos'];
    this.code = "MOD_CADV"
    /* Inicializações */
    this.filter = this.fh.FormBuilder({
      data_inicio: {default: null},
      data_fim: {default: null},
      nome: {default: ""},
      entidade_id: {default: null}
     });
     this.addOption(this.OPTION_INFORMACOES);
     this.addOption(this.OPTION_EXCLUIR, "MOD_CADV_EXCL");
  }

  public filterWhere = (filter: FormGroup) => {
    let result: any[] = [];
    let form: any = filter.value;

    if(form.nome?.length) {
      result.push(["nome", "like", "%" + form.nome.replace(" ", "%") + "%"]);
    }
    if(form.data_inicio) {
      result.push(["data_fim", ">=", form.data_inicio]);
    }
    if(form.data_fim) {
      result.push(["data_inicio", "<=", form.data_fim]);
    }

    return result;
  }

}