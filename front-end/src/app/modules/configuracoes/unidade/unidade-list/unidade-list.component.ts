import { Component, Injector, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { CidadeDaoService } from 'src/app/dao/cidade-dao.service';
import { EntidadeDaoService } from 'src/app/dao/entidade-dao.service';
import { UnidadeDaoService } from 'src/app/dao/unidade-dao.service';
import { Unidade } from 'src/app/models/unidade.model';
import { PageListBase } from 'src/app/modules/base/page-list-base';

@Component({
  selector: 'app-unidade-list',
  templateUrl: './unidade-list.component.html',
  styleUrls: ['./unidade-list.component.scss']
})
export class UnidadeListComponent extends PageListBase<Unidade, UnidadeDaoService> {
  @ViewChild(GridComponent, { static: false }) public grid?: GridComponent;

  public cidadeDao: CidadeDaoService;
  public entidadeDao: EntidadeDaoService;

  constructor(public injector: Injector) {
    super(injector, Unidade, UnidadeDaoService);
    this.join = ["cidade", "unidade:id,sigla", "entidade:id,sigla"];
    this.cidadeDao = injector.get<CidadeDaoService>(CidadeDaoService);
    this.entidadeDao = injector.get<EntidadeDaoService>(EntidadeDaoService);

    /* Inicializações */
    this.title = this.lex.noun("Unidade",true);
    this.code = "MOD_CFG_UND";
    this.filter = this.fh.FormBuilder({
      entidade_id: {default: null},
      nome: {default: ""}
    });
    this.groupBy = [{field: "entidade.sigla", label: "Entidade"}];
    // Testa se o usuário possui permissão para exibir dados da unidade
    if (this.auth.hasPermissionTo("MOD_UND_CONS")) {
      this.options.push({
        icon: "bi bi-info-circle",
        label: "Informações",
        onClick: this.consult.bind(this)
      });
    }
    // Testa se o usuário possui permissão para excluir unidade
    if (this.auth.hasPermissionTo("MOD_UND_EXCL")) {
      this.options.push({
        icon: "bi bi-trash",
        label: "Excluir",
        onClick: this.delete.bind(this)
      });
    }
  }

  public filterClear(filter: FormGroup) {
    super.filterClear(filter);
  }

  public filterWhere = (filter: FormGroup) => {
    let form: any = filter.value;
    let result: any[] = [];

    if(form.entidade_id?.length) {
      result.push(["entidade_id", "==", form.entidade_id]);
    }
    if(form.nome?.length) {
      result.push(["or", ["nome", "like", "%" + form.nome.replace(" ", "%") + "%"], ["sigla", "like", "%" + form.nome.replace(" ", "%") + "%"]]);
    }

    return result;
  }
}
