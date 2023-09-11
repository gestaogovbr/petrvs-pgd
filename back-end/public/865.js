"use strict";
(self["webpackChunkpetrvs"] = self["webpackChunkpetrvs"] || []).push([[865],{

/***/ 66852:
/*!*******************************************!*\
  !*** ./src/app/dao/tenant-dao.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TenantDaoService: () => (/* binding */ TenantDaoService)
/* harmony export */ });
/* harmony import */ var _dao_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dao-base.service */ 29995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;


class TenantDaoService extends _dao_base_service__WEBPACK_IMPORTED_MODULE_0__.DaoBaseService {
  constructor(injector) {
    super("Tenant", injector);
    this.injector = injector;
    this.PREFIX_URL = "config";
  }
  cidadesSeeder(item) {
    return new Promise((resolve, reject) => {
      this.server.post('config/' + this.collection + '/cidades', {
        tenant_id: item.id
      }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }
  tiposCapacidadesSeeder(item) {
    return new Promise((resolve, reject) => {
      this.server.post('config/' + this.collection + '/tipo-capacidade', {
        tenant_id: item.id
      }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }
  seeders(item) {
    return new Promise((resolve, reject) => {
      this.server.post('config/' + this.collection + '/seeders', {
        tenant_id: item.id
      }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }
  migrations(item) {
    return new Promise((resolve, reject) => {
      this.server.post('config/' + this.collection + '/migrations', {
        tenant_id: item.id
      }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }
  usuarioSeeder(item) {
    return new Promise((resolve, reject) => {
      this.server.post('config/' + this.collection + '/cidades', {
        tenant_id: item.id
      }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }
  entidadeSeeder(item) {
    return new Promise((resolve, reject) => {
      this.server.post('config/' + this.collection + '/cidades', {
        tenant_id: item.id
      }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }
  databaseSeeder(item) {
    return new Promise((resolve, reject) => {
      this.server.post('config/' + this.collection + '/database', {
        tenant_id: item.id
      }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }
}
_class = TenantDaoService;
_class.ɵfac = function TenantDaoService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 12239:
/*!****************************************!*\
  !*** ./src/app/models/tenant.model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tenant: () => (/* binding */ Tenant)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ 64368);

class Tenant extends _base_model__WEBPACK_IMPORTED_MODULE_0__.Base {
  // public petrvs_version //pega a versao do app.json
  // public petrvs_last_migration // nome da ultima migration executada
  // public petrvs_url // nome da ultima migration executada
  constructor(data) {
    super();
    this.tenancy_db_name = ""; /* Nome do banco de dados */
    this.tenancy_db_host = null; /* Endereço do banco de dados */
    this.tenancy_db_port = null; /* Porta do banco de dados */
    this.tenancy_db_username = null; /* Nome do usuário */
    this.tenancy_db_password = null; /* Senha do usuário */
    this.log_traffic = false;
    this.log_changes = false;
    this.log_errors = false;
    this.log_host = null;
    this.log_database = null;
    this.log_port = null;
    this.log_username = null;
    this.log_password = null;
    this.notification_petrvs = true;
    this.notification_mail = false;
    this.notification_mail_signature = "";
    this.notification_mail_host = "";
    this.notification_mail_port = 465;
    this.notification_mail_username = "";
    this.notification_mail_password = "";
    this.notification_mail_encryption = "SSL";
    this.notification_whatsapp = false;
    this.notification_whatsapp_url = "";
    this.notification_whatsapp_token = "";
    this.email = "";
    this.nome_usuario = "";
    this.cpf = "";
    this.apelido = "";
    this.sigla = "";
    this.nome_entidade = "";
    this.abrangencia = "";
    this.codigo_cidade = null;
    // LOGIN
    this.login_select_entidade = false;
    this.login_google_client_id = "";
    this.login_firebase_client_id = "";
    this.login_azure_client_id = "";
    this.login_azure_secret = "";
    this.login_azure_redirect_uri = "";
    this.login_login_unico_client_id = "";
    this.login_login_unico_secret = "";
    // INTEGRACAO
    this.tipo_integracao = "";
    this.integracao_auto_incluir = true;
    this.integracao_cod_unidade_raiz = "";
    this.integracao_siape_url = "";
    this.integracao_siape_upag = "";
    this.integracao_siape_sigla = "";
    this.integracao_siape_nome = "";
    this.integracao_siape_cpf = "";
    this.integracao_siape_senha = "";
    this.integracao_siape_codorgao = "";
    this.integracao_siape_uorg = "";
    this.integracao_siape_existepag = "";
    this.integracao_siape_tipovinculo = "";
    this.integracao_wso2_url = "";
    this.integracao_wso2_unidades = "";
    this.integracao_wso2_pessoas = "";
    this.integracao_wso2_token_url = "";
    this.integracao_wso2_token_authorization = "";
    this.integracao_wso2_token_acesso = "";
    this.integracao_wso2_token_user = "";
    this.integracao_wso2_token_password = "";
    this.initialization(data);
  }
}

/***/ }),

/***/ 86516:
/*!******************************************************************!*\
  !*** ./src/app/modules/panel/panel-form/panel-form.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelFormComponent: () => (/* binding */ PanelFormComponent)
/* harmony export */ });
/* harmony import */ var _usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/tabs/tabs.component */ 66384);
/* harmony import */ var src_app_dao_tenant_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/tenant-dao.service */ 66852);
/* harmony import */ var src_app_models_tenant_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/tenant.model */ 12239);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/input/input-text/input-text.component */ 92392);
/* harmony import */ var _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/input/input-select/input-select.component */ 64603);
/* harmony import */ var _components_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/tabs/tab/tab.component */ 74978);
/* harmony import */ var _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/separator/separator.component */ 25560);
/* harmony import */ var _components_input_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/input/input-number/input-number.component */ 9224);

var _class;



















function PanelFormComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "separator", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "input-text", 71)(4, "input-text", 72)(5, "input-text", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "input-text", 74)(8, "input-text", 75)(9, "input-text", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "input-text", 77)(12, "input-text", 78)(13, "input-select", 79)(14, "input-select", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 3)("items", ctx_r1.lookup.EXISTE_PAGADOR);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 3)("items", ctx_r1.lookup.TIPO_VINCULO);
  }
}
function PanelFormComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "separator", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "input-text", 82)(4, "input-text", 83)(5, "input-text", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "input-text", 85)(8, "input-text", 86)(9, "input-text", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "input-text", 88)(12, "input-text", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
  }
}
class PanelFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_6__.PageFormBase {
  // public minHeight: number = 350;
  constructor(injector) {
    super(injector, src_app_models_tenant_model__WEBPACK_IMPORTED_MODULE_5__.Tenant, src_app_dao_tenant_dao_service__WEBPACK_IMPORTED_MODULE_4__.TenantDaoService);
    this.injector = injector;
    this.encryption = [{
      key: "SSL",
      value: "SSL"
    }, {
      key: "TLS",
      value: "TLS"
    }];
    this.tiposLogin = [{
      Tipo: 'Usuário/Senha',
      Web: '',
      API: '',
      Habilitado: true
    }, {
      Tipo: 'Firebase',
      Web: '',
      API: '',
      Habilitado: true
    }, {
      Tipo: 'Google (GIS)',
      Web: '',
      API: '',
      Habilitado: true
    }, {
      Tipo: 'Microsoft (Azure)',
      Web: '',
      API: '',
      Habilitado: true
    }, {
      Tipo: 'Login único',
      Web: '',
      API: '',
      Habilitado: true
    }, {
      Tipo: 'Institucional',
      Web: '',
      API: '',
      Habilitado: true
    }];
    this.validate = (control, controlName) => {
      let result = null;
      if (['id', 'tenancy_db_name', 'nome_entidade', 'codigo_cidade', 'abrangencia', 'email', 'cpf', 'nome_usuario', 'apelido'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      } else if (controlName == "cpf" && !this.util.validarCPF(control.value)) {
        result = "Inválido";
      }
      if ((this.form?.controls.log_traffic.value || this.form?.controls.log_changes.value || this.form?.controls.log_errors.value) && ['log_host', 'log_database'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      return result;
    };
    this.form = this.fh.FormBuilder({
      id: {
        default: ""
      },
      tenancy_db_name: {
        default: ""
      },
      tenancy_db_host: {
        default: null
      },
      tenancy_db_port: {
        default: null
      },
      tenancy_db_username: {
        default: null
      },
      tenancy_db_password: {
        default: null
      },
      log_traffic: {
        default: false
      },
      log_changes: {
        default: false
      },
      log_errors: {
        default: false
      },
      log_host: {
        default: null
      },
      log_database: {
        default: null
      },
      log_port: {
        default: null
      },
      log_username: {
        default: null
      },
      log_password: {
        default: null
      },
      notification_petrvs: {
        default: true
      },
      notification_mail: {
        default: false
      },
      notification_mail_signature: {
        default: "assets/images/signature.png"
      },
      notification_mail_host: {
        default: ""
      },
      notification_mail_port: {
        default: 465
      },
      notification_mail_username: {
        default: ""
      },
      notification_mail_password: {
        default: ""
      },
      notification_mail_encryption: {
        default: "SSL"
      },
      notification_whatsapp: {
        default: false
      },
      notification_whatsapp_url: {
        default: ""
      },
      notification_whatsapp_token: {
        default: ""
      },
      email: {
        default: ""
      },
      nome_usuario: {
        default: ""
      },
      cpf: {
        default: ""
      },
      apelido: {
        default: ""
      },
      nome_entidade: {
        default: ""
      },
      abrangencia: {
        default: ""
      },
      codigo_cidade: {
        default: null
      },
      login: {
        default: []
      },
      dominio_url: {
        default: ""
      },
      // LOGIN
      login_select_entidade: {
        default: false
      },
      login_google_client_id: {
        default: ""
      },
      login_firebase_client_id: {
        default: ""
      },
      login_azure_client_id: {
        default: ""
      },
      login_azure_secret: {
        default: ""
      },
      login_azure_redirect_uri: {
        default: ""
      },
      login_login_unico_client_id: {
        default: ""
      },
      login_login_unico_secret: {
        default: ""
      },
      // INTEGRACAO
      tipo_integracao: {
        default: null
      },
      integracao_auto_incluir: {
        default: true
      },
      integracao_cod_unidade_raiz: {
        default: ""
      },
      integracao_siape_url: {
        default: ""
      },
      integracao_siape_upag: {
        default: ""
      },
      integracao_siape_sigla: {
        default: ""
      },
      integracao_siape_nome: {
        default: ""
      },
      integracao_siape_cpf: {
        default: ""
      },
      integracao_siape_senha: {
        default: ""
      },
      integracao_siape_codorgao: {
        default: ""
      },
      integracao_siape_uorg: {
        default: ""
      },
      integracao_siape_existepag: {
        default: ""
      },
      integracao_siape_tipovinculo: {
        default: ""
      },
      integracao_wso2_url: {
        default: ""
      },
      integracao_wso2_unidades: {
        default: ""
      },
      integracao_wso2_pessoas: {
        default: ""
      },
      integracao_wso2_token_url: {
        default: ""
      },
      integracao_wso2_token_authorization: {
        default: ""
      },
      integracao_wso2_token_acesso: {
        default: ""
      },
      integracao_wso2_token_user: {
        default: ""
      },
      integracao_wso2_token_password: {
        default: ""
      }
    }, this.cdRef, this.validate);
    this.formLogin = this.fh.FormBuilder({
      Tipo: {
        default: ""
      },
      Web: {
        default: ""
      },
      API: {
        default: ""
      },
      Habilitado: {
        default: false
      }
    });
  }
  onSelectTab(tab) {
    var _this = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.saveUsuarioConfig({
        active_tab: tab
      });
    })();
  }
  loadData(entity, form) {
    var _this2 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let formValue = Object.assign({}, form.value);
      let login = _this2.tiposLogin || [];
      formValue.login = login;
      form.patchValue(_this2.util.fillForm(formValue, entity));
    })();
  }
  initializeData(form) {
    var _this3 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.entity = yield _this3.dao.getById(_this3.urlParams.get("id"), _this3.join);
      yield _this3.loadData(_this3.entity, form);
    })();
  }
  saveData(form) {
    var _this4 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        const entrega = _this4.util.fill(new src_app_models_tenant_model__WEBPACK_IMPORTED_MODULE_5__.Tenant(), _this4.entity);
        resolve(_this4.util.fillForm(entrega, _this4.form.value));
      });
    })();
  }
}
_class = PanelFormComponent;
_class.ɵfac = function PanelFormComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-panel-form"]],
  viewQuery: function PanelFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__.GridComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](src_app_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__.TabsComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.tabs = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
  decls: 100,
  vars: 69,
  consts: [["right", "", 3, "title", "select"], ["key", "PRINCIPAL", "label", "Principal"], [3, "form", "disabled", "title", "submit", "cancel"], ["title", "Entidade"], [1, "row"], ["label", "SIGLA", "controlName", "id", 3, "size", "disabled"], ["label", "Nome", "controlName", "nome_entidade", 3, "size"], ["label", "Abrang\u00EAncia", "controlName", "abrangencia", 3, "size", "items"], ["label", "Cod. IBGE", "controlName", "codigo_cidade", 3, "size"], ["label", "Dom\u00EDnio", "controlName", "dominio_url", 3, "size", "disabled"], ["title", "Super Usu\u00E1rio"], ["label", "Email", "controlName", "email", 3, "size"], ["label", "Nome", "controlName", "nome_usuario", 3, "size"], ["label", "CPF", "controlName", "cpf", 3, "size"], ["label", "Apelido", "controlName", "apelido", 3, "size"], ["title", "Notifica\u00E7\u00F5es"], [1, "col-md-6"], ["scale", "small", "labelPosition", "right", "label", "Petrvs (Dentro do sistema)", "controlName", "notification_petrvs", 3, "size"], ["scale", "small", "labelPosition", "right", "label", "E-mail", "controlName", "notification_mail", 3, "size"], ["scale", "small", "labelPosition", "right", "label", "WhatsApp", "controlName", "notification_whatsapp", 3, "size"], ["title", "WhatsApp"], ["label", "URL", "controlName", "notification_whatsapp_url", 3, "size"], ["label", "Token", "controlName", "notification_whatsapp_token", 3, "size"], ["title", "E-mail"], ["label", "Imagem assinatura", "controlName", "notification_mail_signature", 3, "size"], ["label", "Host", "controlName", "notification_mail_host", 3, "size"], ["label", "Porta", "controlName", "notification_mail_port", 3, "size"], ["label", "Protocolo", "controlName", "notification_mail_encryption", 3, "size", "items"], ["label", "Usu\u00E1rio", "controlName", "notification_mail_username", 3, "size"], ["password", "", "label", "Senha", "controlName", "notification_mail_password", 3, "size"], ["key", "BANCO", "label", "Banco de dados"], ["title", "Banco de dados da aplica\u00E7\u00E3o"], ["label", "Host", "controlName", "tenancy_db_host", 3, "size"], ["label", "Banco de dados", "controlName", "tenancy_db_name", 3, "size"], ["label", "Porta", "controlName", "tenancy_db_port", 3, "size"], ["label", "Usu\u00E1rio", "controlName", "tenancy_db_username", 3, "size"], ["password", "", "label", "Senha", "controlName", "tenancy_db_password", 3, "size"], ["title", "Logs"], ["label", "Host", "controlName", "log_host", 3, "size"], ["label", "Banco de dados", "controlName", "log_database", 3, "size"], ["label", "Porta", "controlName", "log_port", 3, "size"], ["label", "Usu\u00E1rio", "controlName", "log_username", 3, "size"], ["password", "", "label", "Senha", "controlName", "log_password", 3, "size"], ["title", "Op\u00E7\u00F5es de log"], ["scale", "small", "labelPosition", "right", "label", "Tr\u00E1fego (traffic)", "controlName", "log_traffic", 3, "size"], ["scale", "small", "labelPosition", "right", "label", "Auditoria (changes)", "controlName", "log_changes", 3, "size"], ["scale", "small", "labelPosition", "right", "label", "Erros (errors)", "controlName", "log_errors", 3, "size"], ["key", "LOGIN", "label", "Login"], ["labelPosition", "left", "label", "Seleciona Entidade:", "controlName", "select_entidade", 3, "size"], ["editable", "", 3, "control", "form", "selectable"], ["gridLogin", ""], ["type", "text", "title", "Tipo", "field", "Tipo", 3, "editable"], ["type", "text", "title", "Web", "field", "Web"], ["type", "text", "title", "API", "field", "API"], ["type", "switch", "title", "Habilitado", "field", "Habilitado"], ["title", "Google"], ["label", "Google Client ID", "controlName", "login_google_client_id", 3, "size"], ["label", "Firebase Project ID", "controlName", "login_firebase_client_id", 3, "size"], ["title", "Microsoft"], ["label", "Azure Client ID", "controlName", "login_azure_client_id", 3, "size"], ["label", "Azure Client Secret", "controlName", "login_azure_secret", 3, "size"], ["label", "Azure Redirect URI", "controlName", "login_azure_redirect_uri", 3, "size"], ["title", "Login Unico"], ["label", "Client ID", "controlName", "login_login_unico_client_id", 3, "size"], ["label", "Secret", "controlName", "login_login_unico_secret", 3, "size"], ["key", "INTEGRACAO", "label", "Integra\u00E7\u00E3o"], ["label", "Tipo da Integra\u00E7\u00E3o", "controlName", "tipo_integracao", 3, "size", "items"], ["labelPosition", "top", "label", "Auto-incluir", "controlName", "integracao_auto_incluir", 3, "size"], ["label", "Codigo unidade raiz", "controlName", "integracao_cod_unidade_raiz", 3, "size"], ["class", "row", 4, "ngIf"], ["title", "Siape-WS", "labeInfo", "As informa\u00E7\u00F5es dessa tela s\u00E3o referentes \u00E0s inseridas no cadastro do SIAPE"], ["label", "URL", "controlName", "integracao_siape_url", 3, "size"], ["label", "Upag", "controlName", "integracao_siape_upag", 3, "size"], ["label", "Sigla do Sistema", "controlName", "integracao_siape_sigla", 3, "size"], ["label", "Nome do Sistema", "controlName", "integracao_siape_nome", 3, "size"], ["label", "CPF", "controlName", "integracao_siape_cpf", 3, "size"], ["label", "Senha", "controlName", "integracao_siape_senha", 3, "size"], ["label", "Codigo do \u00D3rg\u00E3o", "controlName", "integracao_siape_codorgao", 3, "size"], ["label", "Codigo UORG", "controlName", "integracao_siape_uorg", 3, "size"], ["label", "Existe Pagador", "controlName", "integracao_siape_existepag", 3, "size", "items"], ["label", "Tipo de V\u00EDnculo", "controlName", "integracao_siape_tipovinculo", 3, "size", "items"], ["title", "Siape-PRF"], ["label", "URL", "controlName", "integracao_wso2_url", 3, "size"], ["label", "URL Unidades", "controlName", "integracao_wso2_unidades", 3, "size"], ["label", "URL Pessoas", "controlName", "integracao_wso2_pessoas", 3, "size"], ["label", "Token URL", "controlName", "integracao_wso2_token_url", 3, "size"], ["label", "Token AUTHORIZATION", "controlName", "integracao_wso2_token_authorization", 3, "size"], ["label", "Token Acesso", "controlName", "integracao_wso2_token_acesso", 3, "size"], ["label", "Token USER", "controlName", "integracao_wso2_token_user", 3, "size"], ["label", "Token Password", "controlName", "integracao_wso2_token_password", 3, "size"]],
  template: function PanelFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tabs", 0)(1, "tab", 1)(2, "editable-form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("submit", function PanelFormComponent_Template_editable_form_submit_2_listener() {
        return ctx.onSaveData();
      })("cancel", function PanelFormComponent_Template_editable_form_cancel_2_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "separator", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "input-text", 5)(6, "input-text", 6)(7, "input-select", 7)(8, "input-number", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "input-text", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "separator", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "input-text", 11)(14, "input-text", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "input-text", 13)(17, "input-text", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "separator", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 4)(20, "div", 16)(21, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](22, "input-switch", 17)(23, "input-switch", 18)(24, "input-switch", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](25, "separator", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](27, "input-text", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](29, "input-text", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](31, "separator", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](33, "input-text", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](35, "input-text", 25)(36, "input-number", 26)(37, "input-select", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](39, "input-text", 28)(40, "input-text", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "tab", 30)(42, "editable-form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("submit", function PanelFormComponent_Template_editable_form_submit_42_listener() {
        return ctx.onSaveData();
      })("cancel", function PanelFormComponent_Template_editable_form_cancel_42_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](43, "separator", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](45, "input-text", 32)(46, "input-text", 33)(47, "input-number", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](49, "input-text", 35)(50, "input-text", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](51, "separator", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "div", 4)(53, "div", 16)(54, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](55, "input-text", 38)(56, "input-text", 39)(57, "input-number", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](59, "input-text", 41)(60, "input-text", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](61, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](62, "separator", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](63, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](64, "input-switch", 44)(65, "input-switch", 45)(66, "input-switch", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](67, "tab", 47)(68, "editable-form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("submit", function PanelFormComponent_Template_editable_form_submit_68_listener() {
        return ctx.onSaveData();
      })("cancel", function PanelFormComponent_Template_editable_form_cancel_68_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](69, "separator", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](70, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](71, "input-switch", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](72, "grid", 49, 50)(74, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](75, "column", 51)(76, "column", 52)(77, "column", 53)(78, "column", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](79, "separator", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](80, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](81, "input-text", 56)(82, "input-text", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](83, "separator", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](84, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](85, "input-text", 59)(86, "input-text", 60)(87, "input-text", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](88, "separator", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](89, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](90, "input-text", 63)(91, "input-text", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](92, "tab", 65)(93, "editable-form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("submit", function PanelFormComponent_Template_editable_form_submit_93_listener() {
        return ctx.onSaveData();
      })("cancel", function PanelFormComponent_Template_editable_form_cancel_93_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](94, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](95, "input-select", 66)(96, "input-switch", 67)(97, "input-text", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](98, PanelFormComponent_div_98_Template, 15, 12, "div", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](99, PanelFormComponent_div_99_Template, 13, 8, "div", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("title", ctx.isModal ? "" : ctx.title)("select", ctx.onSelectTab.bind(ctx));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 2)("disabled", ctx.action == "new" ? undefined : "true");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 3)("items", ctx.lookup.ABRANGENCIA);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 12)("disabled", ctx.action == "new" ? undefined : "true");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4)("items", ctx.encryption);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.form.controls.login)("form", ctx.formLogin)("selectable", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("editable", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4)("items", ctx.lookup.TIPO_INTEGRACAO);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx.form == null ? null : ctx.form.controls.tipo_integracao.value) == "SIAPE");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls.tipo_integracao == null ? null : ctx.form.controls.tipo_integracao.value) == "WSO2");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_7__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_8__.ColumnComponent, src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_9__.InputSwitchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__.InputTextComponent, _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_11__.InputSelectComponent, src_app_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__.TabsComponent, _components_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_12__.TabComponent, _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_13__.SeparatorComponent, _components_input_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_14__.InputNumberComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4083:
/*!****************************************************************************!*\
  !*** ./src/app/modules/panel/panel-list-logs/panel-list-logs.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelListLogsComponent: () => (/* binding */ PanelListLogsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;

class PanelListLogsComponent {}
_class = PanelListLogsComponent;
_class.ɵfac = function PanelListLogsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["panel-list-logs"]],
  decls: 2,
  vars: 0,
  template: function PanelListLogsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "panel-list-logs works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 93997:
/*!******************************************************************!*\
  !*** ./src/app/modules/panel/panel-list/panel-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelListComponent: () => (/* binding */ PanelListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_dao_tenant_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/tenant-dao.service */ 66852);
/* harmony import */ var src_app_models_tenant_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/tenant.model */ 12239);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/badge/badge.component */ 95489);
/* harmony import */ var _panel_list_logs_panel_list_logs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../panel-list-logs/panel-list-logs.component */ 4083);
var _class;















function PanelListComponent_column_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function PanelListComponent_column_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "panel-list-logs");
  }
}
function PanelListComponent_column_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "column", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, PanelListComponent_column_4_ng_template_1_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, PanelListComponent_column_4_ng_template_3_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("align", "center")("template", _r7)("expandTemplate", _r9);
  }
}
function PanelListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r13 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r13.id);
  }
}
function PanelListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Dados:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Logs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
  }
  if (rf & 2) {
    const row_r14 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate3"](" ", row_r14.tenancy_db_host || "[ENV_HOST]", ":", row_r14.tenancy_db_port || "[ENV_PORT]", "/", row_r14.tenancy_db_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate3"](" ", row_r14.log_host || "[LOG_HOST]", ":", row_r14.log_port || "[LOG_PORT]", "/", (row_r14.log_database == null ? null : row_r14.log_database.length) ? row_r14.log_database : "log_" + row_r14.tenancy_db_name, " ");
  }
}
function PanelListComponent_ng_template_12_badge_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "badge", 19);
  }
}
function PanelListComponent_ng_template_12_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "badge", 20);
  }
}
function PanelListComponent_ng_template_12_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "badge", 21);
  }
}
function PanelListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, PanelListComponent_ng_template_12_badge_0_Template, 1, 0, "badge", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, PanelListComponent_ng_template_12_badge_1_Template, 1, 0, "badge", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, PanelListComponent_ng_template_12_badge_2_Template, 1, 0, "badge", 18);
  }
  if (rf & 2) {
    const row_r15 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r15.log_changes);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r15.log_traffic);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r15.log_errors);
  }
}
class PanelListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_3__.PageListBase {
  constructor(injector, dao) {
    super(injector, src_app_models_tenant_model__WEBPACK_IMPORTED_MODULE_2__.Tenant, src_app_dao_tenant_dao_service__WEBPACK_IMPORTED_MODULE_1__.TenantDaoService);
    this.injector = injector;
    this.toolbarButtons = [{
      icon: "bi bi-building",
      label: "Executar Migrations",
      onClick: this.executaMigrations.bind(this)
    }, {
      icon: "bi bi-building",
      label: "Executar Seeders",
      onClick: this.executaSeeders.bind(this)
    }];
    this.filterWhere = filter => {
      let result = [];
      return result;
    };
    /* Inicializações */
    this.title = "Painel Petrvs";
    this.code = "PANEL";
    this.filter = this.fh.FormBuilder({});
    this.options.push({
      icon: "bi bi-info-circle",
      label: "Informações",
      onClick: this.consult.bind(this)
    });
    this.options.push({
      icon: "bi bi-info-circle",
      label: "Executar Database",
      onClick: this.databaseSeeder.bind(this)
    });
    this.options.push({
      icon: "bi bi-building",
      label: "Executar Cidades",
      onClick: this.cidadeSeeder.bind(this)
    });
    this.options.push({
      icon: "bi bi-list-check",
      label: "Executar Tipos Capacidades",
      onClick: this.tipoCapacidadeSeeder.bind(this)
    });
    this.options.push({
      icon: "bi bi-list-check",
      label: "Executar Entidades",
      onClick: this.entidadesSeeder.bind(this)
    });
    this.options.push({
      icon: "bi bi-list-check",
      label: "Executar Usuarios",
      onClick: this.usuariosSeeder.bind(this)
    });
    this.options.push({
      icon: "bi bi-trash",
      label: "Excluir",
      onClick: this.delete.bind(this)
    });
  }
  executaMigrations(row) {
    const self = this;
    this.dialog.confirm("Executar Migration?", "Deseja realmente executar as migrations?").then(confirm => {
      if (confirm) {
        this.dao.migrations(row).then(function () {
          self.dialog.alert("Sucesso", "Migration executada com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao executar a migration: " + error?.message ? error?.message : 0);
        });
      }
    });
  }
  executaSeeders(row) {
    const self = this;
    this.dialog.confirm("Executar Seeder?", "Deseja realmente executar as seeders?").then(confirm => {
      if (confirm) {
        this.dao.seeders(row).then(function () {
          self.dialog.alert("Sucesso", "Migration executada com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao executar a migration: " + error?.message ? error?.message : 0);
        });
      }
    });
  }
  executaMigrationTenant(row) {
    const self = this;
    this.dialog.confirm("Executar Seeder?", "Deseja realmente executar as migrations?").then(confirm => {
      if (confirm) {
        this.dao.tiposCapacidadesSeeder(row).then(function () {
          self.dialog.alert("Sucesso", "Migration executada com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao executar a migration: " + error?.message ? error?.message : 0);
        });
      }
    });
  }
  tipoCapacidadeSeeder(row) {
    const self = this;
    this.dialog.confirm("Executar Seeder?", "Deseja realmente atualizar as capacidades?").then(confirm => {
      if (confirm) {
        this.dao.tiposCapacidadesSeeder(row).then(function () {
          self.dialog.alert("Sucesso", "Seeder executada com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao executar a seeder: " + error?.message ? error?.message : 0);
        });
      }
    });
  }
  cidadeSeeder(row) {
    const self = this;
    this.dialog.confirm("Executar Seeder?", "Deseja realmente executar a seeder de cidades?").then(confirm => {
      if (confirm) {
        this.dao.cidadesSeeder(row).then(function () {
          self.dialog.alert("Sucesso", "Seeder executada com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao executar a seeder: " + error?.message ? error?.message : 0);
        });
      }
    });
  }
  usuariosSeeder(row) {
    const self = this;
    this.dialog.confirm("Executar Seeder?", "Deseja realmente atualizar as capacidades?").then(confirm => {
      if (confirm) {
        this.dao.usuarioSeeder(row).then(function () {
          self.dialog.alert("Sucesso", "Seeder executada com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao executar a seeder: " + error?.message ? error?.message : 0);
        });
      }
    });
  }
  entidadesSeeder(row) {
    const self = this;
    this.dialog.confirm("Executar Seeder?", "Deseja realmente atualizar as capacidades?").then(confirm => {
      if (confirm) {
        this.dao.entidadeSeeder(row).then(function () {
          self.dialog.alert("Sucesso", "Seeder executada com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao executar a seeder: " + error?.message ? error?.message : 0);
        });
      }
    });
  }
  databaseSeeder(row) {
    const self = this;
    this.dialog.confirm("Executar Seeder?", "Deseja realmente atualizar as capacidades?").then(confirm => {
      if (confirm) {
        this.dao.entidadeSeeder(row).then(function () {
          self.dialog.alert("Sucesso", "Seeder executada com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao executar a seeder: " + error?.message ? error?.message : 0);
        });
      }
    });
  }
}
_class = PanelListComponent;
_class.ɵfac = function PanelListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_dao_tenant_dao_service__WEBPACK_IMPORTED_MODULE_1__.TenantDaoService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-panel-list"]],
  viewQuery: function PanelListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
  decls: 16,
  vars: 20,
  consts: [["title", "Painel de entidades (SaaS)", 3, "dao", "add", "orderBy", "groupBy", "join", "hasAdd", "hasEdit"], [3, "buttons"], ["hidden", "", 3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], ["type", "expand", "icon", "bi bi-list-check", 3, "align", "template", "expandTemplate", 4, "ngIf"], ["title", "ID", 3, "template"], ["columnId", ""], ["title", "Banco de dados", 3, "template"], ["columnDb", ""], ["title", "Logs", "field", "columnLogs"], ["columnLogs", ""], ["type", "options", 3, "onEdit", "options"], [3, "rows"], ["type", "expand", "icon", "bi bi-list-check", 3, "align", "template", "expandTemplate"], ["columnExpandedLogs", ""], [1, "badge", "rounded-pill", "bg-light", "text-dark"], [1, "bi", "bi-list-check"], ["color", "light", "label", "Auditoria (Changes)", 4, "ngIf"], ["color", "light", "label", "Tr\u00E1fego (Traffic)", 4, "ngIf"], ["color", "light", "label", "Erros (Errors)", 4, "ngIf"], ["color", "light", "label", "Auditoria (Changes)"], ["color", "light", "label", "Tr\u00E1fego (Traffic)"], ["color", "light", "label", "Erros (Errors)"]],
  template: function PanelListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "toolbar", 1)(2, "filter", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, PanelListComponent_column_4_Template, 5, 3, "column", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "column", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, PanelListComponent_ng_template_6_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, PanelListComponent_ng_template_9_Template, 7, 6, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "column", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, PanelListComponent_ng_template_12_Template, 3, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "column", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "pagination", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("hasAdd", true)("hasEdit", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("buttons", ctx.toolbarButtons);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere.bind(ctx))("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("template", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("template", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("onEdit", ctx.edit)("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_9__.BadgeComponent, _panel_list_logs_panel_list_logs_component__WEBPACK_IMPORTED_MODULE_10__.PanelListLogsComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 10840:
/*!*******************************************************!*\
  !*** ./src/app/modules/panel/panel-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelRoutingModule: () => (/* binding */ PanelRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/resolvies/config.resolver */ 2314);
/* harmony import */ var _panel_list_panel_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-list/panel-list.component */ 93997);
/* harmony import */ var _panel_form_panel_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel-form/panel-form.component */ 86516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;






const routes = [{
  path: '',
  component: _panel_list_panel_list_component__WEBPACK_IMPORTED_MODULE_1__.PanelListComponent,
  runGuardsAndResolvers: 'always',
  data: {
    title: "Painéis"
  }
}, {
  path: 'new',
  component: _panel_form_panel_form_component__WEBPACK_IMPORTED_MODULE_2__.PanelFormComponent,
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_0__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Inclusão de Painel",
    modal: true
  }
}, {
  path: ':id/edit',
  component: _panel_form_panel_form_component__WEBPACK_IMPORTED_MODULE_2__.PanelFormComponent,
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_0__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Edição de Painel",
    modal: true
  }
}, {
  path: ':id/consult',
  component: _panel_form_panel_form_component__WEBPACK_IMPORTED_MODULE_2__.PanelFormComponent,
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_0__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Consulta a Painel",
    modal: true
  }
}];
class PanelRoutingModule {}
_class = PanelRoutingModule;
_class.ɵfac = function PanelRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PanelRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 13865:
/*!***********************************************!*\
  !*** ./src/app/modules/panel/panel.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelModule: () => (/* binding */ PanelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _panel_list_panel_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-list/panel-list.component */ 93997);
/* harmony import */ var _panel_form_panel_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-form/panel-form.component */ 86516);
/* harmony import */ var _panel_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel-routing.module */ 10840);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 10822);
/* harmony import */ var _uteis_uteis_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uteis/uteis.module */ 82509);
/* harmony import */ var _panel_list_logs_panel_list_logs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel-list-logs/panel-list-logs.component */ 4083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;








class PanelModule {}
_class = PanelModule;
_class.ɵfac = function PanelModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _panel_routing_module__WEBPACK_IMPORTED_MODULE_2__.PanelRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, _uteis_uteis_module__WEBPACK_IMPORTED_MODULE_4__.UteisModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PanelModule, {
    declarations: [_panel_list_panel_list_component__WEBPACK_IMPORTED_MODULE_0__.PanelListComponent, _panel_form_panel_form_component__WEBPACK_IMPORTED_MODULE_1__.PanelFormComponent, _panel_list_logs_panel_list_logs_component__WEBPACK_IMPORTED_MODULE_5__.PanelListLogsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _panel_routing_module__WEBPACK_IMPORTED_MODULE_2__.PanelRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, _uteis_uteis_module__WEBPACK_IMPORTED_MODULE_4__.UteisModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=865.js.map