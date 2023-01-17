import { Component, Injector, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { ToolbarButton } from 'src/app/components/toolbar/toolbar.component';
import { PerfilDaoService } from 'src/app/dao/perfil-dao.service';
import { UnidadeDaoService } from 'src/app/dao/unidade-dao.service';
import { UsuarioDaoService } from 'src/app/dao/usuario-dao.service';
import { Usuario } from 'src/app/models/usuario.model';
import { PageListBase } from 'src/app/modules/base/page-list-base';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent extends PageListBase<Usuario, UsuarioDaoService> {
  @ViewChild(GridComponent, { static: false }) public grid?: GridComponent;

  public unidadeDao: UnidadeDaoService;
  public perfilDao: PerfilDaoService;

  constructor(public injector: Injector) {
    super(injector, Usuario, UsuarioDaoService);
    this.unidadeDao = injector.get<UnidadeDaoService>(UnidadeDaoService);
    this.perfilDao = injector.get<PerfilDaoService>(PerfilDaoService);
    /* Inicializações */
    this.title = this.lex.noun("Usuário",true);
    this.code = "MOD_CFG_USER";
    this.join = ["perfil:id,nome"];
    this.filter = this.fh.FormBuilder({
      usuario: {default: ""},
      unidade_id: {default: ""},
      perfil_id: {default: null}
    });
    // Testa se o usuário possui permissão para exibir dados do usuário
    if (this.auth.hasPermissionTo("MOD_USER_CONS")) {
      this.options.push({
        icon: "bi bi-info-circle",
        label: "Informações",
        onClick: this.consult.bind(this)
      });
    }
    // Testa se o usuário possui permissão para excluir dados do usuario
    if (this.auth.hasPermissionTo("MOD_USER_EXCL")) {
      this.options.push({
        icon: "bi bi-trash",
        label: "Excluir",
        onClick: this.delete.bind(this)
      });
    }
    // Testa se o usuário possui permissão para consultar as lotações do usuario
    if (this.auth.hasPermissionTo("MOD_LOT_CONS")) {
      this.options.push({
      icon: "bi bi-pin-map",
      label: "Lotações",
      onClick: (usuario: Usuario) => {
        this.go.navigate({route: ['configuracoes', 'usuario', usuario.id, 'lotacao']}, {modal: true});
        }
      });
    }
  }

  public filterClear(filter: FormGroup) {
    this.filter?.controls.usuario.setValue("");
    this.filter?.controls.unidade_id.setValue("");
    this.filter?.controls.perfil_id.setValue(null);
    super.filterClear(filter);
  }

  public filterWhere = (filter: FormGroup) => {
    let result: any[] = [];
    if(filter?.controls.usuario?.value?.length) {
      result.push(["nome", "like", "%" + filter?.controls.usuario?.value + "%"]);
    }
    if(filter?.controls.unidade_id?.value?.length) {
      result.push(["lotacao", "==", filter?.controls.unidade_id.value]);
    }
    if(filter?.controls.perfil_id?.value?.length) {
      result.push(["perfil_id", "==", filter?.controls.perfil_id?.value]);
    }
    return result;
  }
}
