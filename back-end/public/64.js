"use strict";
(self["webpackChunkpetrvs"] = self["webpackChunkpetrvs"] || []).push([[64],{

/***/ 35871:
/*!********************************************!*\
  !*** ./src/app/dao/materia-dao.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MateriaDaoService: () => (/* binding */ MateriaDaoService)
/* harmony export */ });
/* harmony import */ var _dao_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dao-base.service */ 29995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;


class MateriaDaoService extends _dao_base_service__WEBPACK_IMPORTED_MODULE_0__.DaoBaseService {
  constructor(injector) {
    super("Materia", injector);
    this.injector = injector;
    this.searchFields = ["nome"];
  }
}
_class = MateriaDaoService;
_class.ɵfac = function MateriaDaoService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 61663:
/*!********************************************************!*\
  !*** ./src/app/models/area-atividade-externa.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaAtividadeExterna: () => (/* binding */ AreaAtividadeExterna)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ 64368);

class AreaAtividadeExterna extends _base_model__WEBPACK_IMPORTED_MODULE_0__.Base {
  constructor(data) {
    super();
    this.nome = ""; //Nome da área de conhecimento
    this.ativo = 1; //Area esta ativo ou não
    this.initialization(data);
  }
}

/***/ }),

/***/ 56790:
/*!***************************************************!*\
  !*** ./src/app/models/area-conhecimento.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaConhecimento: () => (/* binding */ AreaConhecimento)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ 64368);

class AreaConhecimento extends _base_model__WEBPACK_IMPORTED_MODULE_0__.Base {
  constructor(data) {
    super();
    this.nome = ""; //Nome da área de conhecimento
    this.ativo = 1; //Area esta ativo ou não
    this.initialization(data);
  }
}

/***/ }),

/***/ 46048:
/*!***********************************************!*\
  !*** ./src/app/models/area-tematica.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaTematica: () => (/* binding */ AreaTematica)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ 64368);

class AreaTematica extends _base_model__WEBPACK_IMPORTED_MODULE_0__.Base {
  constructor(data) {
    super();
    this.nome = ""; //Nome da área de conhecimento
    this.ativo = 1; //Area esta ativo ou não
    this.initialization(data);
  }
}

/***/ }),

/***/ 37458:
/*!****************************************************!*\
  !*** ./src/app/models/capacidade-tecnica.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CapacidadeTecnica: () => (/* binding */ CapacidadeTecnica)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ 64368);

class CapacidadeTecnica extends _base_model__WEBPACK_IMPORTED_MODULE_0__.Base {
  constructor(data) {
    super();
    this.nome = ""; //Nome da Capacidade Tecnica
    this.ativo = 1; //Capacidade Tecnica esta ativo ou não
    this.area_tematica_id = ""; //Área Tematica
    this.initialization(data);
  }
}

/***/ }),

/***/ 24896:
/*!***************************************!*\
  !*** ./src/app/models/cargo.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cargo: () => (/* binding */ Cargo)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ 64368);

class Cargo extends _base_model__WEBPACK_IMPORTED_MODULE_0__.Base {
  constructor(data) {
    super();
    this.nome = ""; //Nome do Cargo
    this.nivel = ""; //Nivel do Cargo
    this.descricao = ""; //Descricao do Cargo
    this.siape = ""; //Códido SIAPE do Cargo
    this.cbo = ""; //Código CBO do Cargo
    this.efetivo = 1; //Cargo efetivo ou comissionado
    this.ativo = 1; //Cargo esta ativo ou não
    this.initialization(data);
  }
}

/***/ }),

/***/ 55224:
/*!****************************************************!*\
  !*** ./src/app/models/centro-treinamento.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CentroTreinamento: () => (/* binding */ CentroTreinamento)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ 64368);

//import { AreaConhecimento } from './area-conhecimento.model';
class CentroTreinamento extends _base_model__WEBPACK_IMPORTED_MODULE_0__.Base {
  constructor(data) {
    super();
    //public area?: AreaConhecimento;
    this.nome = ""; //Nome do CT
    this.ativo = 1; //Curso esta ativo ou não
    this.initialization(data);
  }
}

/***/ }),

/***/ 49640:
/*!***************************************!*\
  !*** ./src/app/models/curso.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Curso: () => (/* binding */ Curso)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ 64368);

class Curso extends _base_model__WEBPACK_IMPORTED_MODULE_0__.Base {
  constructor(data) {
    super();
    this.nome = ""; //Nome do curso
    this.titulo = ""; //Graduação, pós, mestrado, doc ou posdoc
    this.ativo = 1; //Curso esta ativo ou não
    this.tipo_curso_id = "";
    this.area_id = ""; //Área do conhecimento
    this.initialization(data);
  }
}

/***/ }),

/***/ 37389:
/*!****************************************!*\
  !*** ./src/app/models/funcao.model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Funcao: () => (/* binding */ Funcao)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ 64368);

class Funcao extends _base_model__WEBPACK_IMPORTED_MODULE_0__.Base {
  constructor(data) {
    super();
    this.nome = ""; //Nome da funcao
    this.nivel = ""; //Nível da funcao
    this.descricao = ""; //Descrição da funcao
    this.siape = ""; //Código SIAPE da funcao
    this.cbo = ""; //Código CBO da funcao
    this.ativo = 1; //Funcao esta ativo ou não
    this.initialization(data);
  }
}

/***/ }),

/***/ 39834:
/*!*****************************************************!*\
  !*** ./src/app/models/grupo-especializado.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrupoEspecializado: () => (/* binding */ GrupoEspecializado)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ 64368);

class GrupoEspecializado extends _base_model__WEBPACK_IMPORTED_MODULE_0__.Base {
  constructor(data) {
    super();
    this.nome = ""; //Nome da funcao
    this.ativo = 1; //Funcao esta ativo ou não
    this.initialization(data);
  }
}

/***/ }),

/***/ 67548:
/*!*****************************************!*\
  !*** ./src/app/models/materia.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Materia: () => (/* binding */ Materia)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ 64368);

class Materia extends _base_model__WEBPACK_IMPORTED_MODULE_0__.Base {
  constructor(data) {
    super();
    this.nome = ""; //Nome da materia
    this.horas_aula = 0; //Horas aula da materia
    this.ativo = 1; //Materia esta ativo ou não
    //public area_id: string = ""; //Área do conhecimento
    this.curso_id = ""; // Curso
    this.initialization(data);
  }
}

/***/ }),

/***/ 3494:
/*!********************************************!*\
  !*** ./src/app/models/tipo-curso.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TipoCurso: () => (/* binding */ TipoCurso)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ 64368);

class TipoCurso extends _base_model__WEBPACK_IMPORTED_MODULE_0__.Base {
  constructor(data) {
    super();
    this.nome = ""; //Nome do tipo curso
    this.ativo = 1; //Curso esta ativo ou não
    this.initialization(data);
  }
}

/***/ }),

/***/ 74039:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/area-atividade-externa-form/area-atividade-externa-form.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaAtividadeExternaFormComponent: () => (/* binding */ AreaAtividadeExternaFormComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var src_app_models_area_atividade_externa_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/area-atividade-externa.model */ 61663);
/* harmony import */ var src_app_dao_area_atividade_externa_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/area-atividade-externa-dao.service */ 14710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;








class AreaAtividadeExternaFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_1__.PageFormBase {
  constructor(injector) {
    super(injector, src_app_models_area_atividade_externa_model__WEBPACK_IMPORTED_MODULE_2__.AreaAtividadeExterna, src_app_dao_area_atividade_externa_dao_service__WEBPACK_IMPORTED_MODULE_3__.AreaAtividadeExternaDaoService);
    this.injector = injector;
    this.validate = (control, controlName) => {
      let result = null;
      if (['nome'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      return result;
    };
    this.titleEdit = entity => {
      return "Editando " + (entity?.nome || "");
    };
    this.form = this.fh.FormBuilder({
      nome: {
        default: ""
      },
      ativo: {
        default: true
      }
    }, this.cdRef, this.validate);
  }
  loadData(entity, form) {
    let formValue = Object.assign({}, form.value);
    form.patchValue(this.util.fillForm(formValue, entity));
  }
  initializeData(form) {
    form.patchValue(new src_app_models_area_atividade_externa_model__WEBPACK_IMPORTED_MODULE_2__.AreaAtividadeExterna());
  }
  saveData(form) {
    return new Promise((resolve, reject) => {
      const areaAtividadeExterna = this.util.fill(new src_app_models_area_atividade_externa_model__WEBPACK_IMPORTED_MODULE_2__.AreaAtividadeExterna(), this.entity);
      resolve(this.util.fillForm(areaAtividadeExterna, this.form.value));
    });
  }
}
_class = AreaAtividadeExternaFormComponent;
_class.ɵfac = function AreaAtividadeExternaFormComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["area-atividade-externa-form"]],
  viewQuery: function AreaAtividadeExternaFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 5,
  consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row"], ["label", "Nome da \u00C1rea da Atividade Externa", "controlName", "nome", 3, "size"], ["labelPosition", "left", "label", "Ativo", "controlName", "ativo", 3, "size"]],
  template: function AreaAtividadeExternaFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "editable-form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function AreaAtividadeExternaFormComponent_Template_editable_form_submit_0_listener() {
        return ctx.onSaveData();
      })("cancel", function AreaAtividadeExternaFormComponent_Template_editable_form_cancel_0_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input-text", 2)(3, "input-switch", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 2);
    }
  },
  dependencies: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__.InputSwitchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 47385:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/area-atividade-externa-list/area-atividade-externa-list.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaAtividadeExternaListComponent: () => (/* binding */ AreaAtividadeExternaListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var src_app_models_area_atividade_externa_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/area-atividade-externa.model */ 61663);
/* harmony import */ var src_app_dao_area_atividade_externa_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/area-atividade-externa-dao.service */ 14710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;













function AreaAtividadeExternaListComponent_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "toolbar");
  }
}
class AreaAtividadeExternaListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_1__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_area_atividade_externa_model__WEBPACK_IMPORTED_MODULE_2__.AreaAtividadeExterna, src_app_dao_area_atividade_externa_dao_service__WEBPACK_IMPORTED_MODULE_3__.AreaAtividadeExternaDaoService);
    this.injector = injector;
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      if (form.nome_area?.length) {
        result.push(["nome", "like", "%" + form.nome + "%"]);
      }
      return result;
    };
    /* Inicializações */
    this.title = this.lex.translate("Áreas da Atividade Externa");
    this.code = "MOD_RX";
    this.orderBy = [['nome', 'asc']];
    this.filter = this.fh.FormBuilder({
      nome: {
        default: ""
      }
    });
    // Testa se o usuário possui permissão para exibir dados de cidade
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-info-circle",
        label: "Informações",
        onClick: this.consult.bind(this)
      });
    }
    // Testa se o usuário possui permissão para excluir a cidade
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-trash",
        label: "Excluir",
        onClick: this.delete.bind(this)
      });
    }
  }
  filterClear(filter) {
    filter.controls.nome.setValue("");
    super.filterClear(filter);
  }
}
_class = AreaAtividadeExternaListComponent;
_class.ɵfac = function AreaAtividadeExternaListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["area-atividade-externa-list"]],
  viewQuery: function AreaAtividadeExternaListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 9,
  vars: 21,
  consts: [[3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Nome da \u00C1rea da Atividade Externa", "controlName", "nome", "placeholder", "Nome da \u00C1rea da Atividade Externa", 3, "size", "control"], ["title", "Nome da \u00C1rea da Atividade Externa", "field", "nome", "orderBy", "nome"], ["type", "options", 3, "onEdit", "options"], [3, "rows"]],
  template: function AreaAtividadeExternaListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("select", function AreaAtividadeExternaListComponent_Template_grid_select_0_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AreaAtividadeExternaListComponent_toolbar_1_Template, 1, 0, "toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "filter", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "input-text", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "column", 5)(7, "column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "pagination", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"))("hasEdit", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 12)("control", ctx.filter.controls.nome);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("onEdit", ctx.edit)("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 30883:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/area-conhecimento-form/area-conhecimento-form.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaConhecimentoFormComponent: () => (/* binding */ AreaConhecimentoFormComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_dao_area_conhecimento_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/area-conhecimento-dao.service */ 24997);
/* harmony import */ var src_app_models_area_conhecimento_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/area-conhecimento.model */ 56790);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;








class AreaConhecimentoFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_3__.PageFormBase {
  constructor(injector) {
    super(injector, src_app_models_area_conhecimento_model__WEBPACK_IMPORTED_MODULE_2__.AreaConhecimento, src_app_dao_area_conhecimento_dao_service__WEBPACK_IMPORTED_MODULE_1__.AreaConhecimentoDaoService);
    this.injector = injector;
    this.validate = (control, controlName) => {
      let result = null;
      if (['nome_area'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      return result;
    };
    this.titleEdit = entity => {
      return "Editando " + (entity?.nome || "");
    };
    this.form = this.fh.FormBuilder({
      nome_area: {
        default: ""
      },
      ativo: {
        default: true
      }
    }, this.cdRef, this.validate);
  }
  loadData(entity, form) {
    let formValue = Object.assign({}, form.value);
    form.patchValue(this.util.fillForm(formValue, entity));
  }
  initializeData(form) {
    form.patchValue(new src_app_models_area_conhecimento_model__WEBPACK_IMPORTED_MODULE_2__.AreaConhecimento());
  }
  saveData(form) {
    return new Promise((resolve, reject) => {
      const areaconhecimento = this.util.fill(new src_app_models_area_conhecimento_model__WEBPACK_IMPORTED_MODULE_2__.AreaConhecimento(), this.entity);
      resolve(this.util.fillForm(areaconhecimento, this.form.value));
    });
  }
}
_class = AreaConhecimentoFormComponent;
_class.ɵfac = function AreaConhecimentoFormComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["area-conhecimento-form"]],
  viewQuery: function AreaConhecimentoFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 5,
  consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row"], ["label", "Nome da \u00E1rea de conhecimento", "controlName", "nome_area", 3, "size"], ["labelPosition", "left", "label", "Ativo", "controlName", "ativo", 3, "size"]],
  template: function AreaConhecimentoFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "editable-form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function AreaConhecimentoFormComponent_Template_editable_form_submit_0_listener() {
        return ctx.onSaveData();
      })("cancel", function AreaConhecimentoFormComponent_Template_editable_form_cancel_0_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input-text", 2)(3, "input-switch", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 2);
    }
  },
  dependencies: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__.InputSwitchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 12362:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/area-conhecimento-list/area-conhecimento-list.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaConhecimentoListComponent: () => (/* binding */ AreaConhecimentoListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_models_area_conhecimento_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/area-conhecimento.model */ 56790);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var src_app_dao_area_conhecimento_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/area-conhecimento-dao.service */ 24997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;













function AreaConhecimentoListComponent_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "toolbar");
  }
}
class AreaConhecimentoListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_2__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_area_conhecimento_model__WEBPACK_IMPORTED_MODULE_1__.AreaConhecimento, src_app_dao_area_conhecimento_dao_service__WEBPACK_IMPORTED_MODULE_3__.AreaConhecimentoDaoService);
    this.injector = injector;
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      if (form.nome_area?.length) {
        result.push(["nome", "like", "%" + form.nome_area + "%"]);
      }
      return result;
    };
    /* Inicializações */
    this.title = this.lex.translate("Áreas de Conhecimento");
    this.code = "MOD_RX";
    this.orderBy = [['nome', 'asc']];
    this.filter = this.fh.FormBuilder({
      nome_area: {
        default: ""
      }
    });
    // Testa se o usuário possui permissão para exibir dados de cidade
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-info-circle",
        label: "Informações",
        onClick: this.consult.bind(this)
      });
    }
    // Testa se o usuário possui permissão para excluir a cidade
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-trash",
        label: "Excluir",
        onClick: this.delete.bind(this)
      });
    }
  }
  filterClear(filter) {
    filter.controls.nome_area.setValue("");
    super.filterClear(filter);
  }
}
_class = AreaConhecimentoListComponent;
_class.ɵfac = function AreaConhecimentoListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["area-conhecimento-list"]],
  viewQuery: function AreaConhecimentoListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 9,
  vars: 21,
  consts: [[3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Nome da \u00E1rea de conhecimento", "controlName", "nome_area", "placeholder", "Nome da \u00E1rea de conhecimento", 3, "size", "control"], ["title", "Nome da \u00E1rea", "field", "nome", "orderBy", "nome"], ["type", "options", 3, "onEdit", "options"], [3, "rows"]],
  template: function AreaConhecimentoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("select", function AreaConhecimentoListComponent_Template_grid_select_0_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AreaConhecimentoListComponent_toolbar_1_Template, 1, 0, "toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "filter", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "input-text", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "column", 5)(7, "column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "pagination", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"))("hasEdit", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 12)("control", ctx.filter.controls.nome_area);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("onEdit", ctx.edit)("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 21530:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/area-tematica-form/area-tematica-form.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaTematicaFormComponent: () => (/* binding */ AreaTematicaFormComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var src_app_models_area_tematica_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/area-tematica.model */ 46048);
/* harmony import */ var src_app_dao_area_tematica_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/area-tematica-dao.service */ 88653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;








class AreaTematicaFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_1__.PageFormBase {
  constructor(injector) {
    super(injector, src_app_models_area_tematica_model__WEBPACK_IMPORTED_MODULE_2__.AreaTematica, src_app_dao_area_tematica_dao_service__WEBPACK_IMPORTED_MODULE_3__.AreaTematicaDaoService);
    this.injector = injector;
    this.validate = (control, controlName) => {
      let result = null;
      if (['nome'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      return result;
    };
    this.titleEdit = entity => {
      return "Editando " + (entity?.nome || "");
    };
    this.form = this.fh.FormBuilder({
      nome: {
        default: ""
      },
      ativo: {
        default: true
      }
    }, this.cdRef, this.validate);
  }
  loadData(entity, form) {
    let formValue = Object.assign({}, form.value);
    form.patchValue(this.util.fillForm(formValue, entity));
  }
  initializeData(form) {
    form.patchValue(new src_app_models_area_tematica_model__WEBPACK_IMPORTED_MODULE_2__.AreaTematica());
  }
  saveData(form) {
    return new Promise((resolve, reject) => {
      const areaTematica = this.util.fill(new src_app_models_area_tematica_model__WEBPACK_IMPORTED_MODULE_2__.AreaTematica(), this.entity);
      resolve(this.util.fillForm(areaTematica, this.form.value));
    });
  }
}
_class = AreaTematicaFormComponent;
_class.ɵfac = function AreaTematicaFormComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-area-tematica-form"]],
  viewQuery: function AreaTematicaFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 5,
  consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row"], ["label", "Nome da \u00C1rea Tematica", "controlName", "nome", 3, "size"], ["labelPosition", "left", "label", "Ativo", "controlName", "ativo", 3, "size"]],
  template: function AreaTematicaFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "editable-form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function AreaTematicaFormComponent_Template_editable_form_submit_0_listener() {
        return ctx.onSaveData();
      })("cancel", function AreaTematicaFormComponent_Template_editable_form_cancel_0_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input-text", 2)(3, "input-switch", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 2);
    }
  },
  dependencies: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__.InputSwitchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 85329:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/area-tematica-list/area-tematica-list.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaTematicaListComponent: () => (/* binding */ AreaTematicaListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var src_app_models_area_tematica_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/area-tematica.model */ 46048);
/* harmony import */ var src_app_dao_area_tematica_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/area-tematica-dao.service */ 88653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;













function AreaTematicaListComponent_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "toolbar");
  }
}
class AreaTematicaListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_1__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_area_tematica_model__WEBPACK_IMPORTED_MODULE_2__.AreaTematica, src_app_dao_area_tematica_dao_service__WEBPACK_IMPORTED_MODULE_3__.AreaTematicaDaoService);
    this.injector = injector;
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      if (form.nome?.length) {
        result.push(["nome", "like", "%" + form.nome + "%"]);
      }
      return result;
    };
    /* Inicializações */
    this.title = this.lex.translate("Áreas Temáticas");
    this.code = "MOD_RX";
    this.orderBy = [['nome', 'asc']];
    this.filter = this.fh.FormBuilder({
      nome: {
        default: ""
      }
    });
    // Testa se o usuário possui permissão para exibir dados de cidade
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-info-circle",
        label: "Informações",
        onClick: this.consult.bind(this)
      });
    }
    // Testa se o usuário possui permissão para excluir a cidade
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-trash",
        label: "Excluir",
        onClick: this.delete.bind(this)
      });
    }
  }
  filterClear(filter) {
    filter.controls.nome.setValue("");
    super.filterClear(filter);
  }
}
_class = AreaTematicaListComponent;
_class.ɵfac = function AreaTematicaListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["area-tematica-list"]],
  viewQuery: function AreaTematicaListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 9,
  vars: 21,
  consts: [[3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Nome da \u00C1rea Tem\u00E1tica", "controlName", "nome", "placeholder", "Nome da \u00C1rea Tem\u00E1tica", 3, "size", "control"], ["title", "Nome da \u00C1rea Tem\u00E1tica", "field", "nome", "orderBy", "nome"], ["type", "options", 3, "onEdit", "options"], [3, "rows"]],
  template: function AreaTematicaListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("select", function AreaTematicaListComponent_Template_grid_select_0_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AreaTematicaListComponent_toolbar_1_Template, 1, 0, "toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "filter", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "input-text", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "column", 5)(7, "column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "pagination", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"))("hasEdit", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 12)("control", ctx.filter.controls.nome);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("onEdit", ctx.edit)("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 24202:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/capacidade-tecnica-form/capacidade-tecnica-form.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CapacidadeTecnicaFormComponent: () => (/* binding */ CapacidadeTecnicaFormComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var src_app_models_capacidade_tecnica_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/capacidade-tecnica.model */ 37458);
/* harmony import */ var src_app_dao_capacidade_tecnica_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/capacidade-tecnica-dao.service */ 53399);
/* harmony import */ var src_app_dao_area_tematica_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/area-tematica-dao.service */ 88653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
/* harmony import */ var _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/input/input-select/input-select.component */ 64603);
var _class;










const _c0 = function () {
  return ["raiox", "cadastros", "gerais", "areatematica", "new"];
};
const _c1 = function (a0) {
  return {
    route: a0
  };
};
class CapacidadeTecnicaFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_1__.PageFormBase {
  // public areaTematicaWhere: any[] = [["id", "==", null]];
  constructor(injector) {
    super(injector, src_app_models_capacidade_tecnica_model__WEBPACK_IMPORTED_MODULE_2__.CapacidadeTecnica, src_app_dao_capacidade_tecnica_dao_service__WEBPACK_IMPORTED_MODULE_3__.CapacidadeTecnicaDaoService);
    this.injector = injector;
    this.validate = (control, controlName) => {
      let result = null;
      if (['nome'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      return result;
    };
    this.titleEdit = entity => {
      return "Editando " + (entity?.nome || "");
    };
    this.areaTematicaDao = injector.get(src_app_dao_area_tematica_dao_service__WEBPACK_IMPORTED_MODULE_4__.AreaTematicaDaoService);
    this.form = this.fh.FormBuilder({
      area_tematica_id: {
        default: ""
      },
      nome: {
        default: ""
      },
      ativo: {
        default: true
      }
    }, this.cdRef, this.validate);
  }
  loadData(entity, form) {
    let formValue = Object.assign({}, form.value);
    form.patchValue(this.util.fillForm(formValue, entity));
  }
  initializeData(form) {
    form.patchValue(new src_app_models_capacidade_tecnica_model__WEBPACK_IMPORTED_MODULE_2__.CapacidadeTecnica());
  }
  saveData(form) {
    return new Promise((resolve, reject) => {
      const capacidadeTecnica = this.util.fill(new src_app_models_capacidade_tecnica_model__WEBPACK_IMPORTED_MODULE_2__.CapacidadeTecnica(), this.entity);
      resolve(this.util.fillForm(capacidadeTecnica, this.form.value));
    });
  }
}
_class = CapacidadeTecnicaFormComponent;
_class.ɵfac = function CapacidadeTecnicaFormComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["capacidade-tecnica-form"]],
  viewQuery: function CapacidadeTecnicaFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
  decls: 6,
  vars: 12,
  consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row"], ["label", "\u00C1rea Tem\u00E1tica", "icon", "fas fa-layer-group", "controlName", "areaTematica", "liveSearch", "", 3, "size", "control", "dao", "addRoute"], ["curso", ""], ["label", "Nome da Capacidade T\u00E9cnica", "controlName", "nome", 3, "size"], ["labelPosition", "left", "label", "Ativo", "controlName", "ativo", 3, "size"]],
  template: function CapacidadeTecnicaFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "editable-form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("submit", function CapacidadeTecnicaFormComponent_Template_editable_form_submit_0_listener() {
        return ctx.onSaveData();
      })("cancel", function CapacidadeTecnicaFormComponent_Template_editable_form_cancel_0_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "input-select", 2, 3)(4, "input-text", 4)(5, "input-switch", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("size", 5)("control", ctx.form.controls.areaTematica)("dao", ctx.areaTematicaDao)("addRoute", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](10, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c0)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("size", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("size", 2);
    }
  },
  dependencies: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_5__.InputSwitchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_6__.InputTextComponent, _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_7__.InputSelectComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 82944:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/capacidade-tecnica-list/capacidade-tecnica-list.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CapacidadeTecnicaListComponent: () => (/* binding */ CapacidadeTecnicaListComponent)
/* harmony export */ });
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_models_capacidade_tecnica_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/capacidade-tecnica.model */ 37458);
/* harmony import */ var src_app_dao_capacidade_tecnica_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/capacidade-tecnica-dao.service */ 53399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;













function CapacidadeTecnicaListComponent_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "toolbar");
  }
}
function CapacidadeTecnicaListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](row_r5.area_tematica.nome);
  }
}
function CapacidadeTecnicaListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r4.lookup.getValue(ctx_r4.lookup.SIMNAO, row_r6.ativo), " ");
  }
}
class CapacidadeTecnicaListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_0__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_capacidade_tecnica_model__WEBPACK_IMPORTED_MODULE_2__.CapacidadeTecnica, src_app_dao_capacidade_tecnica_dao_service__WEBPACK_IMPORTED_MODULE_3__.CapacidadeTecnicaDaoService);
    this.injector = injector;
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      if (form.nome?.length) {
        result.push(["nome", "like", "%" + form.nome + "%"]);
      }
      if (form.area_tematica_id?.length) {
        result.push(["id", "like", "%" + form.area_tematica_id + "%"]);
      }
      return result;
    };
    /* Inicializações */
    this.title = this.lex.translate("Capacidades Técnicas");
    this.code = "MOD_RX";
    this.join = ["area_tematica:id,nome"];
    this.orderBy = [['nome', 'asc']];
    //console.log('JOIN-->',this.join)
    this.filter = this.fh.FormBuilder({
      nome: {
        default: ""
      },
      area_tematica_id: {
        default: ""
      },
      ativo: {
        default: ""
      }
    });
    // Testa se o usuário possui permissão para exibir dados de CapacidadeTecnicas
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-info-circle",
        label: "Informações",
        onClick: this.consult.bind(this)
      });
    }
    // Testa se o usuário possui permissão para excluir o CapacidadeTecnica
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-trash",
        label: "Excluir",
        onClick: this.delete.bind(this)
      });
    }
  }
  filterClear(filter) {
    filter.controls.nome.setValue("");
    filter.controls.area_tematica_id.setValue("");
    super.filterClear(filter);
  }
}
_class = CapacidadeTecnicaListComponent;
_class.ɵfac = function CapacidadeTecnicaListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["capacidade-tecnica-list"]],
  viewQuery: function CapacidadeTecnicaListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__.GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 17,
  vars: 27,
  consts: [[3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Nome da Capacidade T\u00E9cnica", "controlName", "nome", "placeholder", "Nome da Capacidade T\u00E9cnica", 3, "size", "control"], ["label", "Nome da \u00C1rea Tem\u00E1tica", "controlName", "area_tematica_id", "placeholder", "Nome da \u00C1rea Tem\u00E1tica", 3, "size", "control"], ["label", "Ativo", "controlName", "ativo", "placeholder", "", 3, "size", "control"], ["title", "Capacidade T\u00E9cnica", "field", "nome", "orderBy", "nome"], ["title", "\u00C1rea Tem\u00E1tica", 3, "template"], ["columnAreaTematica", ""], ["title", "Ativo", 3, "template"], ["columnAtivo", ""], ["type", "options", 3, "onEdit", "options"], [3, "rows"]],
  template: function CapacidadeTecnicaListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("select", function CapacidadeTecnicaListComponent_Template_grid_select_0_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CapacidadeTecnicaListComponent_toolbar_1_Template, 1, 0, "toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "filter", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "input-text", 4)(5, "input-text", 5)(6, "input-text", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "column", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "column", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, CapacidadeTecnicaListComponent_ng_template_10_Template, 2, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "column", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, CapacidadeTecnicaListComponent_ng_template_13_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "column", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "pagination", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"))("hasEdit", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 5)("control", ctx.filter.controls.nome);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 3)("control", ctx.filter.controls.area_tematica_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 2)("control", ctx.filter.controls.ativo);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("template", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("template", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("onEdit", ctx.edit)("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 13360:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/cargo-form/cargo-form.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CargoFormComponent: () => (/* binding */ CargoFormComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var src_app_models_cargo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/cargo.model */ 24896);
/* harmony import */ var src_app_dao_cargo_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/cargo-dao.service */ 99255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;








class CargoFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_1__.PageFormBase {
  //public tipoCursoDao ?: TipoCursoDaoService;
  constructor(injector) {
    super(injector, src_app_models_cargo_model__WEBPACK_IMPORTED_MODULE_2__.Cargo, src_app_dao_cargo_dao_service__WEBPACK_IMPORTED_MODULE_3__.CargoDaoService);
    this.injector = injector;
    this.titulos = [];
    this.validate = (control, controlName) => {
      let result = null;
      if (['nome'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      return result;
    };
    this.titleEdit = entity => {
      return "Editando " + (entity?.nome || "");
    };
    this.form = this.fh.FormBuilder({
      nome: {
        default: ""
      },
      nivel: {
        default: ""
      },
      cbo: {
        default: ""
      },
      siape: {
        default: ""
      },
      descricao: {
        default: ""
      },
      ativo: {
        default: true
      },
      efetivo: {
        default: true
      }
    }, this.cdRef, this.validate);
  }
  loadData(entity, form) {
    let formValue = Object.assign({}, form.value);
    form.patchValue(this.util.fillForm(formValue, entity));
  }
  initializeData(form) {
    form.patchValue(new src_app_models_cargo_model__WEBPACK_IMPORTED_MODULE_2__.Cargo());
  }
  saveData(form) {
    return new Promise((resolve, reject) => {
      const cargo = this.util.fill(new src_app_models_cargo_model__WEBPACK_IMPORTED_MODULE_2__.Cargo(), this.entity);
      resolve(this.util.fillForm(cargo, this.form.value));
    });
  }
}
_class = CargoFormComponent;
_class.ɵfac = function CargoFormComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["cargo-form"]],
  viewQuery: function CargoFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 9,
  vars: 10,
  consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row"], ["label", "Nome do Cargo", "controlName", "nome", 3, "size"], ["label", "N\u00EDvel do Cargo", "controlName", "nivel", 3, "size"], ["label", "C\u00F3digo SIAPE do Cargo", "controlName", "siape", 3, "size"], ["label", "C\u00F3digo CBO do Cargo", "controlName", "cbo", 3, "size"], ["label", "Descri\u00E7\u00E3o do Cargo", "controlName", "descricao", 3, "size"], ["labelPosition", "left", "label", "Efetivo", "controlName", "efetivo", 3, "size"], ["labelPosition", "left", "label", "Ativo", "controlName", "ativo", 3, "size"]],
  template: function CargoFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "editable-form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function CargoFormComponent_Template_editable_form_submit_0_listener() {
        return ctx.onSaveData();
      })("cancel", function CargoFormComponent_Template_editable_form_cancel_0_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input-text", 2)(3, "input-text", 3)(4, "input-text", 4)(5, "input-text", 5)(6, "input-text", 6)(7, "input-switch", 7)(8, "input-switch", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 2);
    }
  },
  dependencies: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__.InputSwitchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 71893:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/cargo-list/cargo-list.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CargoListComponent: () => (/* binding */ CargoListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var src_app_models_cargo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/cargo.model */ 24896);
/* harmony import */ var src_app_dao_cargo_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/cargo-dao.service */ 99255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;














function CargoListComponent_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "toolbar");
  }
}
function CargoListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r2.lookup.getValue(ctx_r2.lookup.SIMNAO, row_r5.efetivo), " ");
  }
}
function CargoListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r4.lookup.getValue(ctx_r4.lookup.SIMNAO, row_r6.ativo), " ");
  }
}
class CargoListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_1__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_cargo_model__WEBPACK_IMPORTED_MODULE_2__.Cargo, src_app_dao_cargo_dao_service__WEBPACK_IMPORTED_MODULE_3__.CargoDaoService);
    this.injector = injector;
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      let valEfetivo = form.efetivo.value ? 1 : 0;
      let valAtivo = form.ativo.value ? 1 : 0;
      if (form.nome?.length) {
        result.push(["nome", "like", "%" + form.nome + "%"]);
      }
      if (form.descricao?.length) {
        result.push(["descricao", "like", "%" + form.descricao + "%"]);
      }
      if (form.nivel?.length) {
        result.push(["nivel", "like", "%" + form.nivel + "%"]);
      }
      if (form.siape?.length) {
        result.push(["siape", "like", "%" + form.siape + "%"]);
      }
      if (form.cbo?.length) {
        result.push(["cbo", "like", "%" + form.cbo + "%"]);
      }
      if (form.ativo) {
        result.push(["ativo", "==", 1]);
        //result.push(["ativo", "like", "%" + form.titulo + "%"]);
      }

      result.push(["efetivo", "==", form.efetivo ? 1 : 0]);
      return result;
    };
    /* Inicializações */
    this.title = this.lex.translate("Cargos");
    this.code = "MOD_RX";
    this.orderBy = [['nome', 'asc']];
    //this.join = ["area:nome","tipo:nome"];
    this.filter = this.fh.FormBuilder({
      nome: {
        default: ""
      },
      descricao: {
        default: ""
      },
      nivel: {
        default: ""
      },
      siape: {
        default: ""
      },
      cbo: {
        default: ""
      },
      efetivo: {
        default: 1
      },
      ativo: {
        default: 1
      }
    });
    // Testa se o usuário possui permissão para exibir dados de cursos
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-info-circle",
        label: "Informações",
        onClick: this.consult.bind(this)
      });
    }
    // Testa se o usuário possui permissão para excluir o curso
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-trash",
        label: "Excluir",
        onClick: this.delete.bind(this)
      });
    }
  }
  filterClear(filter) {
    filter.controls.nome.setValue("");
    filter.controls.descrição.setValue("");
    filter.controls.nivel.setValue("");
    filter.controls.siape.setValue("");
    filter.controls.cbo.setValue("");
    super.filterClear(filter);
  }
}
_class = CargoListComponent;
_class.ɵfac = function CargoListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-cargo-list"]],
  viewQuery: function CargoListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
  decls: 25,
  vars: 35,
  consts: [[3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Nome do Cargo", "controlName", "nome", "placeholder", "Nome da \u00E1rea de conhecimento", 3, "size", "control"], ["label", "N\u00EDvel", "controlName", "nivel", "placeholder", "", 3, "size", "control"], ["label", "Descri\u00E7\u00E3o", "controlName", "descricao", "placeholder", "", 3, "size", "control"], ["label", "C\u00F3digo SIAPE", "controlName", "siape", "placeholder", "", 3, "size", "control"], ["label", "C\u00F3digo CBO", "controlName", "cbo", "placeholder", "", 3, "size", "control"], ["label", "Efetivo", "controlName", "efetivo", "placeholder", "", 3, "size", "control"], ["label", "Ativo", "controlName", "ativo", "placeholder", "", 3, "size", "control"], ["title", "Cargos", "field", "nome", "orderBy", "nome"], ["title", "N\u00EDvel", "field", "nivel"], ["title", "Descri\u00E7\u00E3o", "field", "descricao"], ["title", "SIAPE", "field", "siape"], ["title", "CBO", "field", "cbo"], ["title", "Efetivo", 3, "template"], ["columnEfetivo", ""], ["title", "Ativo", 3, "template"], ["columnAtivo", ""], ["type", "options", 3, "onEdit", "options"], [3, "rows"]],
  template: function CargoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("select", function CargoListComponent_Template_grid_select_0_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CargoListComponent_toolbar_1_Template, 1, 0, "toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "filter", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "input-text", 4)(5, "input-text", 5)(6, "input-text", 6)(7, "input-text", 7)(8, "input-text", 8)(9, "input-switch", 9)(10, "input-switch", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "column", 11)(13, "column", 12)(14, "column", 13)(15, "column", 14)(16, "column", 15)(17, "column", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, CargoListComponent_ng_template_18_Template, 1, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "column", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, CargoListComponent_ng_template_21_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "column", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "pagination", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](19);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"))("hasEdit", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 3)("control", ctx.filter.controls.nome);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 3)("control", ctx.filter.controls.nivel);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 3)("control", ctx.filter.controls.descricao);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 3)("control", ctx.filter.controls.siape);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 3)("control", ctx.filter.controls.cbo);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 3)("control", ctx.filter.controls.efetivo);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 3)("control", ctx.filter.controls.ativo);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("template", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("template", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("onEdit", ctx.edit)("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_9__.InputSwitchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 82545:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/centro-treinamento-form/centro-treinamento-form.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CentroTreinamentoFormComponent: () => (/* binding */ CentroTreinamentoFormComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_dao_centro_treinamento_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/centro-treinamento-dao.service */ 57565);
/* harmony import */ var src_app_models_centro_treinamento_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/centro-treinamento.model */ 55224);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;








class CentroTreinamentoFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_3__.PageFormBase {
  //public tipoCursoDao ?: TipoCursoDaoService;
  constructor(injector) {
    super(injector, src_app_models_centro_treinamento_model__WEBPACK_IMPORTED_MODULE_2__.CentroTreinamento, src_app_dao_centro_treinamento_dao_service__WEBPACK_IMPORTED_MODULE_1__.CentroTreinamentoDaoService);
    this.injector = injector;
    this.titulos = [];
    this.validate = (control, controlName) => {
      let result = null;
      if (['nome'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      return result;
    };
    this.titleEdit = entity => {
      return "Editando " + (entity?.nome || "");
    };
    this.form = this.fh.FormBuilder({
      nome: {
        default: ""
      },
      ativo: {
        default: true
      }
    }, this.cdRef, this.validate);
  }
  loadData(entity, form) {
    let formValue = Object.assign({}, form.value);
    form.patchValue(this.util.fillForm(formValue, entity));
  }
  initializeData(form) {
    form.patchValue(new src_app_models_centro_treinamento_model__WEBPACK_IMPORTED_MODULE_2__.CentroTreinamento());
  }
  saveData(form) {
    return new Promise((resolve, reject) => {
      const centro = this.util.fill(new src_app_models_centro_treinamento_model__WEBPACK_IMPORTED_MODULE_2__.CentroTreinamento(), this.entity);
      resolve(this.util.fillForm(centro, this.form.value));
    });
  }
}
_class = CentroTreinamentoFormComponent;
_class.ɵfac = function CentroTreinamentoFormComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["centro-treinamento-form"]],
  viewQuery: function CentroTreinamentoFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 5,
  consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row"], ["label", "Nome do Centro de Treinamento", "controlName", "nome", 3, "size"], ["labelPosition", "left", "label", "Ativo", "controlName", "ativo", 3, "size"]],
  template: function CentroTreinamentoFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "editable-form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function CentroTreinamentoFormComponent_Template_editable_form_submit_0_listener() {
        return ctx.onSaveData();
      })("cancel", function CentroTreinamentoFormComponent_Template_editable_form_cancel_0_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input-text", 2)(3, "input-switch", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 2);
    }
  },
  dependencies: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__.InputSwitchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 15351:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/centro-treinamento-list/centro-treinamento-list.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CentroTreinamentoListComponent: () => (/* binding */ CentroTreinamentoListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_models_centro_treinamento_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/centro-treinamento.model */ 55224);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var src_app_dao_centro_treinamento_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/centro-treinamento-dao.service */ 57565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;













function CentroTreinamentoListComponent_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "toolbar");
  }
}
class CentroTreinamentoListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_2__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_centro_treinamento_model__WEBPACK_IMPORTED_MODULE_1__.CentroTreinamento, src_app_dao_centro_treinamento_dao_service__WEBPACK_IMPORTED_MODULE_3__.CentroTreinamentoDaoService);
    this.injector = injector;
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      if (form.nome?.length) {
        result.push(["nome", "like", "%" + form.nome + "%"]);
      }
      return result;
    };
    /* Inicializações */
    this.title = this.lex.translate("Centros de Treinamento");
    this.code = "MOD_RX";
    this.orderBy = [['nome', 'asc']];
    this.filter = this.fh.FormBuilder({
      nome: {
        default: ""
      }
    });
    // Testa se o usuário possui permissão para exibir dados de cidade
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-info-circle",
        label: "Informações",
        onClick: this.consult.bind(this)
      });
    }
    // Testa se o usuário possui permissão para excluir a cidade
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-trash",
        label: "Excluir",
        onClick: this.delete.bind(this)
      });
    }
  }
  filterClear(filter) {
    filter.controls.nome.setValue("");
    super.filterClear(filter);
  }
}
_class = CentroTreinamentoListComponent;
_class.ɵfac = function CentroTreinamentoListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["centro-treinamento-list"]],
  viewQuery: function CentroTreinamentoListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 9,
  vars: 21,
  consts: [[3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Nome do Centro de Treinamento", "controlName", "nome", "placeholder", "Nome do CT", 3, "size", "control"], ["title", "Nome do Centro de Treinamento", "field", "nome", "orderBy", "nome"], ["type", "options", 3, "onEdit", "options"], [3, "rows"]],
  template: function CentroTreinamentoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("select", function CentroTreinamentoListComponent_Template_grid_select_0_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CentroTreinamentoListComponent_toolbar_1_Template, 1, 0, "toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "filter", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "input-text", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "column", 5)(7, "column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "pagination", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"))("hasEdit", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 6)("control", ctx.filter.controls.nome);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("onEdit", ctx.edit)("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 37878:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/curriculum-cadastros-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurriculumRoutingModule: () => (/* binding */ CurriculumRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 1391);
/* harmony import */ var src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/resolvies/config.resolver */ 2314);
/* harmony import */ var _area_conhecimento_form_area_conhecimento_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./area-conhecimento-form/area-conhecimento-form.component */ 30883);
/* harmony import */ var _area_conhecimento_list_area_conhecimento_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./area-conhecimento-list/area-conhecimento-list.component */ 12362);
/* harmony import */ var _curso_form_curso_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./curso-form/curso-form.component */ 40984);
/* harmony import */ var _curso_list_curso_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curso-list/curso-list.component */ 56132);
/* harmony import */ var _tipo_curso_form_tipo_curso_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tipo-curso-form/tipo-curso-form.component */ 36175);
/* harmony import */ var _tipo_curso_list_tipo_curso_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tipo-curso-list/tipo-curso-list.component */ 87288);
/* harmony import */ var _centro_treinamento_form_centro_treinamento_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./centro-treinamento-form/centro-treinamento-form.component */ 82545);
/* harmony import */ var _centro_treinamento_list_centro_treinamento_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./centro-treinamento-list/centro-treinamento-list.component */ 15351);
/* harmony import */ var _funcao_form_funcao_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./funcao-form/funcao-form.component */ 23476);
/* harmony import */ var _funcao_list_funcao_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./funcao-list/funcao-list.component */ 25210);
/* harmony import */ var _grupo_especializado_list_grupo_especializado_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./grupo-especializado-list/grupo-especializado-list.component */ 22701);
/* harmony import */ var _grupo_especializado_form_grupo_especializado_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./grupo-especializado-form/grupo-especializado-form.component */ 76621);
/* harmony import */ var _materia_list_materia_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./materia-list/materia-list.component */ 54346);
/* harmony import */ var _materia_form_materia_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./materia-form/materia-form.component */ 28685);
/* harmony import */ var _cargo_list_cargo_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cargo-list/cargo-list.component */ 71893);
/* harmony import */ var _cargo_form_cargo_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cargo-form/cargo-form.component */ 13360);
/* harmony import */ var _area_atividade_externa_form_area_atividade_externa_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./area-atividade-externa-form/area-atividade-externa-form.component */ 74039);
/* harmony import */ var _area_atividade_externa_list_area_atividade_externa_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./area-atividade-externa-list/area-atividade-externa-list.component */ 47385);
/* harmony import */ var _area_tematica_list_area_tematica_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./area-tematica-list/area-tematica-list.component */ 85329);
/* harmony import */ var _area_tematica_form_area_tematica_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./area-tematica-form/area-tematica-form.component */ 21530);
/* harmony import */ var _capacidade_tecnica_form_capacidade_tecnica_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./capacidade-tecnica-form/capacidade-tecnica-form.component */ 24202);
/* harmony import */ var _capacidade_tecnica_list_capacidade_tecnica_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./capacidade-tecnica-list/capacidade-tecnica-list.component */ 82944);
/* harmony import */ var _questionario_pergunta_list_questionario_pergunta_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./questionario-pergunta-list/questionario-pergunta-list.component */ 77339);
/* harmony import */ var _questionario_pergunta_form_questionario_pergunta_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./questionario-pergunta-form/questionario-pergunta-form.component */ 88949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;





























const routes = [{
  path: 'gerais/areaconhecimento',
  component: _area_conhecimento_list_area_conhecimento_list_component__WEBPACK_IMPORTED_MODULE_3__.AreaConhecimentoListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Lista",
    modal: false
  }
}, {
  path: 'gerais/areaconhecimento/new',
  component: _area_conhecimento_form_area_conhecimento_form_component__WEBPACK_IMPORTED_MODULE_2__.AreaConhecimentoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Inclusão",
    modal: true
  }
}, {
  path: 'gerais/areaconhecimento/:id/edit',
  component: _area_conhecimento_form_area_conhecimento_form_component__WEBPACK_IMPORTED_MODULE_2__.AreaConhecimentoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Edição",
    modal: true
  }
}, {
  path: 'gerais/areaconhecimento/:id/consult',
  component: _area_conhecimento_form_area_conhecimento_form_component__WEBPACK_IMPORTED_MODULE_2__.AreaConhecimentoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Consultar",
    modal: true
  }
}, {
  path: 'gerais/curso',
  component: _curso_list_curso_list_component__WEBPACK_IMPORTED_MODULE_5__.CursoListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Lista",
    modal: false
  }
}, {
  path: 'gerais/curso/new',
  component: _curso_form_curso_form_component__WEBPACK_IMPORTED_MODULE_4__.CursoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Inclusão",
    modal: true
  }
}, {
  path: 'gerais/curso/:id/edit',
  component: _curso_form_curso_form_component__WEBPACK_IMPORTED_MODULE_4__.CursoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Edição",
    modal: true
  }
}, {
  path: 'gerais/curso/:id/consult',
  component: _curso_form_curso_form_component__WEBPACK_IMPORTED_MODULE_4__.CursoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Consultar",
    modal: true
  }
}, {
  path: 'gerais/tipocurso',
  component: _tipo_curso_list_tipo_curso_list_component__WEBPACK_IMPORTED_MODULE_7__.TipoCursoListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Lista",
    modal: false
  }
}, {
  path: 'gerais/tipocurso/new',
  component: _tipo_curso_form_tipo_curso_form_component__WEBPACK_IMPORTED_MODULE_6__.TipoCursoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Inclusão",
    modal: true
  }
}, {
  path: 'gerais/tipocurso/:id/edit',
  component: _tipo_curso_form_tipo_curso_form_component__WEBPACK_IMPORTED_MODULE_6__.TipoCursoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Edição",
    modal: true
  }
}, {
  path: 'gerais/tipocurso/:id/consult',
  component: _tipo_curso_form_tipo_curso_form_component__WEBPACK_IMPORTED_MODULE_6__.TipoCursoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Consultar",
    modal: true
  }
}, {
  path: 'gerais/centrotreinamento',
  component: _centro_treinamento_list_centro_treinamento_list_component__WEBPACK_IMPORTED_MODULE_9__.CentroTreinamentoListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Lista",
    modal: false
  }
}, {
  path: 'gerais/centrotreinamento/new',
  component: _centro_treinamento_form_centro_treinamento_form_component__WEBPACK_IMPORTED_MODULE_8__.CentroTreinamentoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Inclusão",
    modal: true
  }
}, {
  path: 'gerais/centrotreinamento/:id/edit',
  component: _centro_treinamento_form_centro_treinamento_form_component__WEBPACK_IMPORTED_MODULE_8__.CentroTreinamentoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Edição",
    modal: true
  }
}, {
  path: 'gerais/centrotreinamento/:id/consult',
  component: _centro_treinamento_form_centro_treinamento_form_component__WEBPACK_IMPORTED_MODULE_8__.CentroTreinamentoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Consultar",
    modal: true
  }
}, {
  path: 'gerais/funcao',
  component: _funcao_list_funcao_list_component__WEBPACK_IMPORTED_MODULE_11__.FuncaoListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Lista",
    modal: false
  }
}, {
  path: 'gerais/funcao/new',
  component: _funcao_form_funcao_form_component__WEBPACK_IMPORTED_MODULE_10__.FuncaoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Inclusão",
    modal: true
  }
}, {
  path: 'gerais/funcao/:id/edit',
  component: _funcao_form_funcao_form_component__WEBPACK_IMPORTED_MODULE_10__.FuncaoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Edição",
    modal: true
  }
}, {
  path: 'gerais/funcao/:id/consult',
  component: _funcao_form_funcao_form_component__WEBPACK_IMPORTED_MODULE_10__.FuncaoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Consultar",
    modal: true
  }
}, {
  path: 'gerais/ge',
  component: _grupo_especializado_list_grupo_especializado_list_component__WEBPACK_IMPORTED_MODULE_12__.GrupoEspecializadoListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Lista",
    modal: false
  }
}, {
  path: 'gerais/ge/new',
  component: _grupo_especializado_form_grupo_especializado_form_component__WEBPACK_IMPORTED_MODULE_13__.GrupoEspecializadoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Inclusão",
    modal: true
  }
}, {
  path: 'gerais/ge/:id/edit',
  component: _grupo_especializado_form_grupo_especializado_form_component__WEBPACK_IMPORTED_MODULE_13__.GrupoEspecializadoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Edição",
    modal: true
  }
}, {
  path: 'gerais/ge/:id/consult',
  component: _grupo_especializado_form_grupo_especializado_form_component__WEBPACK_IMPORTED_MODULE_13__.GrupoEspecializadoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Consultar",
    modal: true
  }
}, {
  path: 'gerais/materia',
  component: _materia_list_materia_list_component__WEBPACK_IMPORTED_MODULE_14__.MateriaListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Lista",
    modal: false
  }
}, {
  path: 'gerais/materia/new',
  component: _materia_form_materia_form_component__WEBPACK_IMPORTED_MODULE_15__.MateriaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Inclusão",
    modal: true
  }
}, {
  path: 'gerais/materia/:id/edit',
  component: _materia_form_materia_form_component__WEBPACK_IMPORTED_MODULE_15__.MateriaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Edição",
    modal: true
  }
}, {
  path: 'gerais/materia/:id/consult',
  component: _materia_form_materia_form_component__WEBPACK_IMPORTED_MODULE_15__.MateriaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Consultar",
    modal: true
  }
}, {
  path: 'gerais/cargo',
  component: _cargo_list_cargo_list_component__WEBPACK_IMPORTED_MODULE_16__.CargoListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Lista",
    modal: false
  }
}, {
  path: 'gerais/cargo/new',
  component: _cargo_form_cargo_form_component__WEBPACK_IMPORTED_MODULE_17__.CargoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Inclusão",
    modal: true
  }
}, {
  path: 'gerais/cargo/:id/edit',
  component: _cargo_form_cargo_form_component__WEBPACK_IMPORTED_MODULE_17__.CargoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Edição",
    modal: true
  }
}, {
  path: 'gerais/cargo/:id/consult',
  component: _cargo_form_cargo_form_component__WEBPACK_IMPORTED_MODULE_17__.CargoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Consultar",
    modal: true
  }
}, {
  path: 'gerais/funcao',
  component: _funcao_list_funcao_list_component__WEBPACK_IMPORTED_MODULE_11__.FuncaoListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Lista",
    modal: false
  }
}, {
  path: 'gerais/funcao/new',
  component: _funcao_form_funcao_form_component__WEBPACK_IMPORTED_MODULE_10__.FuncaoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Inclusão",
    modal: true
  }
}, {
  path: 'gerais/funcao/:id/edit',
  component: _funcao_form_funcao_form_component__WEBPACK_IMPORTED_MODULE_10__.FuncaoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Edição",
    modal: true
  }
}, {
  path: 'gerais/funcao/:id/consult',
  component: _funcao_form_funcao_form_component__WEBPACK_IMPORTED_MODULE_10__.FuncaoFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Consultar",
    modal: true
  }
}, {
  path: 'gerais/areaatividadeexterna',
  component: _area_atividade_externa_list_area_atividade_externa_list_component__WEBPACK_IMPORTED_MODULE_19__.AreaAtividadeExternaListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Lista",
    modal: false
  }
}, {
  path: 'gerais/areaatividadeexterna/new',
  component: _area_atividade_externa_form_area_atividade_externa_form_component__WEBPACK_IMPORTED_MODULE_18__.AreaAtividadeExternaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Inclusão",
    modal: true
  }
}, {
  path: 'gerais/areaatividadeexterna/:id/edit',
  component: _area_atividade_externa_form_area_atividade_externa_form_component__WEBPACK_IMPORTED_MODULE_18__.AreaAtividadeExternaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Edição",
    modal: true
  }
}, {
  path: 'gerais/areaatividadeexterna/:id/consult',
  component: _area_atividade_externa_form_area_atividade_externa_form_component__WEBPACK_IMPORTED_MODULE_18__.AreaAtividadeExternaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Consultar",
    modal: true
  }
}, {
  path: 'gerais/areatematica',
  component: _area_tematica_list_area_tematica_list_component__WEBPACK_IMPORTED_MODULE_20__.AreaTematicaListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Lista",
    modal: false
  }
}, {
  path: 'gerais/areatematica/new',
  component: _area_tematica_form_area_tematica_form_component__WEBPACK_IMPORTED_MODULE_21__.AreaTematicaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Inclusão",
    modal: true
  }
}, {
  path: 'gerais/areatematica/:id/edit',
  component: _area_tematica_form_area_tematica_form_component__WEBPACK_IMPORTED_MODULE_21__.AreaTematicaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Edição",
    modal: true
  }
}, {
  path: 'gerais/areatematica/:id/consult',
  component: _area_tematica_form_area_tematica_form_component__WEBPACK_IMPORTED_MODULE_21__.AreaTematicaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Consultar",
    modal: true
  }
}, {
  path: 'gerais/capacidadetecnica',
  component: _capacidade_tecnica_list_capacidade_tecnica_list_component__WEBPACK_IMPORTED_MODULE_23__.CapacidadeTecnicaListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Lista",
    modal: false
  }
}, {
  path: 'gerais/capacidadetecnica/new',
  component: _capacidade_tecnica_form_capacidade_tecnica_form_component__WEBPACK_IMPORTED_MODULE_22__.CapacidadeTecnicaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Inclusão",
    modal: true
  }
}, {
  path: 'gerais/capacidadetecnica/:id/edit',
  component: _capacidade_tecnica_form_capacidade_tecnica_form_component__WEBPACK_IMPORTED_MODULE_22__.CapacidadeTecnicaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Edição",
    modal: true
  }
}, {
  path: 'gerais/capacidadetecnica/:id/consult',
  component: _capacidade_tecnica_form_capacidade_tecnica_form_component__WEBPACK_IMPORTED_MODULE_22__.CapacidadeTecnicaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Consultar",
    modal: true
  }
}, {
  path: 'gerais/questionariopergunta',
  component: _questionario_pergunta_list_questionario_pergunta_list_component__WEBPACK_IMPORTED_MODULE_24__.QuestionarioPerguntaListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Lista",
    modal: false
  }
}, {
  path: 'gerais/questionariopergunta/new',
  component: _questionario_pergunta_form_questionario_pergunta_form_component__WEBPACK_IMPORTED_MODULE_25__.QuestionarioPerguntaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Inclusão",
    modal: true
  }
}, {
  path: 'gerais/questionariopergunta/:id/edit',
  component: _questionario_pergunta_form_questionario_pergunta_form_component__WEBPACK_IMPORTED_MODULE_25__.QuestionarioPerguntaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Edição",
    modal: true
  }
}, {
  path: 'gerais/questionariopergunta/:id/consult',
  component: _questionario_pergunta_form_questionario_pergunta_form_component__WEBPACK_IMPORTED_MODULE_25__.QuestionarioPerguntaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Consultar",
    modal: true
  }
}];
class CurriculumRoutingModule {}
_class = CurriculumRoutingModule;
_class.ɵfac = function CurriculumRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](CurriculumRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule]
  });
})();

/***/ }),

/***/ 64:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/curriculum-cadastros.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurriculumCadastrosModule: () => (/* binding */ CurriculumCadastrosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 10822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _curriculum_cadastros_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curriculum-cadastros-routing.module */ 37878);
/* harmony import */ var _area_conhecimento_form_area_conhecimento_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./area-conhecimento-form/area-conhecimento-form.component */ 30883);
/* harmony import */ var _area_conhecimento_list_area_conhecimento_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./area-conhecimento-list/area-conhecimento-list.component */ 12362);
/* harmony import */ var _curso_form_curso_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./curso-form/curso-form.component */ 40984);
/* harmony import */ var _curso_list_curso_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curso-list/curso-list.component */ 56132);
/* harmony import */ var _tipo_curso_form_tipo_curso_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tipo-curso-form/tipo-curso-form.component */ 36175);
/* harmony import */ var _tipo_curso_list_tipo_curso_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tipo-curso-list/tipo-curso-list.component */ 87288);
/* harmony import */ var _centro_treinamento_form_centro_treinamento_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./centro-treinamento-form/centro-treinamento-form.component */ 82545);
/* harmony import */ var _centro_treinamento_list_centro_treinamento_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./centro-treinamento-list/centro-treinamento-list.component */ 15351);
/* harmony import */ var _funcao_form_funcao_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./funcao-form/funcao-form.component */ 23476);
/* harmony import */ var _funcao_list_funcao_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./funcao-list/funcao-list.component */ 25210);
/* harmony import */ var _grupo_especializado_list_grupo_especializado_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./grupo-especializado-list/grupo-especializado-list.component */ 22701);
/* harmony import */ var _grupo_especializado_form_grupo_especializado_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./grupo-especializado-form/grupo-especializado-form.component */ 76621);
/* harmony import */ var _materia_form_materia_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./materia-form/materia-form.component */ 28685);
/* harmony import */ var _materia_list_materia_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./materia-list/materia-list.component */ 54346);
/* harmony import */ var _cargo_form_cargo_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cargo-form/cargo-form.component */ 13360);
/* harmony import */ var _cargo_list_cargo_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cargo-list/cargo-list.component */ 71893);
/* harmony import */ var _area_atividade_externa_form_area_atividade_externa_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./area-atividade-externa-form/area-atividade-externa-form.component */ 74039);
/* harmony import */ var _area_atividade_externa_list_area_atividade_externa_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./area-atividade-externa-list/area-atividade-externa-list.component */ 47385);
/* harmony import */ var _area_tematica_form_area_tematica_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./area-tematica-form/area-tematica-form.component */ 21530);
/* harmony import */ var _area_tematica_list_area_tematica_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./area-tematica-list/area-tematica-list.component */ 85329);
/* harmony import */ var _capacidade_tecnica_form_capacidade_tecnica_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./capacidade-tecnica-form/capacidade-tecnica-form.component */ 24202);
/* harmony import */ var _capacidade_tecnica_list_capacidade_tecnica_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./capacidade-tecnica-list/capacidade-tecnica-list.component */ 82944);
/* harmony import */ var _questionario_pergunta_form_questionario_pergunta_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./questionario-pergunta-form/questionario-pergunta-form.component */ 88949);
/* harmony import */ var _questionario_pergunta_list_questionario_pergunta_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./questionario-pergunta-list/questionario-pergunta-list.component */ 77339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;





























class CurriculumCadastrosModule {}
_class = CurriculumCadastrosModule;
_class.ɵfac = function CurriculumCadastrosModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule, _curriculum_cadastros_routing_module__WEBPACK_IMPORTED_MODULE_1__.CurriculumRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](CurriculumCadastrosModule, {
    declarations: [_area_conhecimento_form_area_conhecimento_form_component__WEBPACK_IMPORTED_MODULE_2__.AreaConhecimentoFormComponent, _area_conhecimento_list_area_conhecimento_list_component__WEBPACK_IMPORTED_MODULE_3__.AreaConhecimentoListComponent, _curso_form_curso_form_component__WEBPACK_IMPORTED_MODULE_4__.CursoFormComponent, _curso_list_curso_list_component__WEBPACK_IMPORTED_MODULE_5__.CursoListComponent, _tipo_curso_form_tipo_curso_form_component__WEBPACK_IMPORTED_MODULE_6__.TipoCursoFormComponent, _tipo_curso_list_tipo_curso_list_component__WEBPACK_IMPORTED_MODULE_7__.TipoCursoListComponent, _centro_treinamento_form_centro_treinamento_form_component__WEBPACK_IMPORTED_MODULE_8__.CentroTreinamentoFormComponent, _centro_treinamento_list_centro_treinamento_list_component__WEBPACK_IMPORTED_MODULE_9__.CentroTreinamentoListComponent, _funcao_form_funcao_form_component__WEBPACK_IMPORTED_MODULE_10__.FuncaoFormComponent, _funcao_list_funcao_list_component__WEBPACK_IMPORTED_MODULE_11__.FuncaoListComponent, _grupo_especializado_form_grupo_especializado_form_component__WEBPACK_IMPORTED_MODULE_13__.GrupoEspecializadoFormComponent, _grupo_especializado_list_grupo_especializado_list_component__WEBPACK_IMPORTED_MODULE_12__.GrupoEspecializadoListComponent, _materia_form_materia_form_component__WEBPACK_IMPORTED_MODULE_14__.MateriaFormComponent, _materia_list_materia_list_component__WEBPACK_IMPORTED_MODULE_15__.MateriaListComponent, _cargo_form_cargo_form_component__WEBPACK_IMPORTED_MODULE_16__.CargoFormComponent, _cargo_list_cargo_list_component__WEBPACK_IMPORTED_MODULE_17__.CargoListComponent, _area_atividade_externa_form_area_atividade_externa_form_component__WEBPACK_IMPORTED_MODULE_18__.AreaAtividadeExternaFormComponent, _area_atividade_externa_list_area_atividade_externa_list_component__WEBPACK_IMPORTED_MODULE_19__.AreaAtividadeExternaListComponent, _area_tematica_form_area_tematica_form_component__WEBPACK_IMPORTED_MODULE_20__.AreaTematicaFormComponent, _area_tematica_list_area_tematica_list_component__WEBPACK_IMPORTED_MODULE_21__.AreaTematicaListComponent, _capacidade_tecnica_form_capacidade_tecnica_form_component__WEBPACK_IMPORTED_MODULE_22__.CapacidadeTecnicaFormComponent, _capacidade_tecnica_list_capacidade_tecnica_list_component__WEBPACK_IMPORTED_MODULE_23__.CapacidadeTecnicaListComponent, _questionario_pergunta_form_questionario_pergunta_form_component__WEBPACK_IMPORTED_MODULE_24__.QuestionarioPerguntaFormComponent, _questionario_pergunta_list_questionario_pergunta_list_component__WEBPACK_IMPORTED_MODULE_25__.QuestionarioPerguntaListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule, _curriculum_cadastros_routing_module__WEBPACK_IMPORTED_MODULE_1__.CurriculumRoutingModule]
  });
})();

/***/ }),

/***/ 40984:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/curso-form/curso-form.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CursoFormComponent: () => (/* binding */ CursoFormComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_dao_curso_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/curso-dao.service */ 34406);
/* harmony import */ var src_app_models_curso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/curso.model */ 49640);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var src_app_dao_area_conhecimento_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/area-conhecimento-dao.service */ 24997);
/* harmony import */ var src_app_dao_tipo_curso_dao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dao/tipo-curso-dao.service */ 42277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ 32802);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
/* harmony import */ var _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-select/input-select.component */ 64603);
var _class;












const _c0 = function () {
  return ["raiox", "cadastros", "gerais", "tipocurso", "new"];
};
const _c1 = function (a0) {
  return {
    route: a0
  };
};
class CursoFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_3__.PageFormBase {
  constructor(injector) {
    super(injector, src_app_models_curso_model__WEBPACK_IMPORTED_MODULE_2__.Curso, src_app_dao_curso_dao_service__WEBPACK_IMPORTED_MODULE_1__.CursoDaoService);
    this.injector = injector;
    this.titulos = [];
    this.validate = (control, controlName) => {
      let result = null;
      if (['nome'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      return result;
    };
    this.titleEdit = entity => {
      return "Editando " + (entity?.nome || "");
    };
    this.areaDao = injector.get(src_app_dao_area_conhecimento_dao_service__WEBPACK_IMPORTED_MODULE_4__.AreaConhecimentoDaoService);
    this.tipoCursoDao = injector.get(src_app_dao_tipo_curso_dao_service__WEBPACK_IMPORTED_MODULE_5__.TipoCursoDaoService);
    this.form = this.fh.FormBuilder({
      area_curso_id: {
        default: ""
      },
      tipo_curso_id: {
        default: ""
      },
      nome: {
        default: ""
      },
      titulo: {
        default: ""
      },
      ativo: {
        default: true
      }
    }, this.cdRef, this.validate);
  }
  loadData(entity, form) {
    let formValue = Object.assign({}, form.value);
    form.patchValue(this.util.fillForm(formValue, entity));
  }
  initializeData(form) {
    form.patchValue(new src_app_models_curso_model__WEBPACK_IMPORTED_MODULE_2__.Curso());
  }
  saveData(form) {
    return new Promise((resolve, reject) => {
      const curso = this.util.fill(new src_app_models_curso_model__WEBPACK_IMPORTED_MODULE_2__.Curso(), this.entity);
      resolve(this.util.fillForm(curso, this.form.value));
    });
  }
}
_class = CursoFormComponent;
_class.ɵfac = function CursoFormComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["curso-form"]],
  viewQuery: function CursoFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 8,
  vars: 16,
  consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row"], ["controlName", "area_curso_id", 3, "size", "dao"], ["label", "Nome do Curso", "controlName", "nome", 3, "size"], ["label", "Titulo", "controlName", "titulo", 3, "size", "items"], ["label", "Tipo de Curso", "icon", "fas fa-layer-group", "controlName", "tipo_curso_id", "liveSearch", "", 3, "size", "control", "dao", "addRoute"], ["curso", ""], ["labelPosition", "left", "label", "Ativo", "controlName", "ativo", 3, "size"]],
  template: function CursoFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "editable-form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("submit", function CursoFormComponent_Template_editable_form_submit_0_listener() {
        return ctx.onSaveData();
      })("cancel", function CursoFormComponent_Template_editable_form_cancel_0_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "input-search", 2)(3, "input-text", 3)(4, "input-select", 4)(5, "input-select", 5, 6)(7, "input-switch", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 5)("dao", ctx.areaDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 5)("items", ctx.lookup.TITULOS_CURSOS_INST);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 5)("control", ctx.form.controls.tipo_curso_id)("dao", ctx.tipoCursoDao)("addRoute", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](14, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](13, _c0)));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 2);
    }
  },
  dependencies: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_6__.InputSwitchComponent, _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_7__.InputSearchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__.InputTextComponent, _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_9__.InputSelectComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 56132:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/curso-list/curso-list.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CursoListComponent: () => (/* binding */ CursoListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_models_curso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/curso.model */ 49640);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var src_app_dao_curso_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/curso-dao.service */ 34406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;













function CursoListComponent_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "toolbar");
  }
}
function CursoListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](row_r7.area.nome);
  }
}
function CursoListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.lookup.getValue(ctx_r4.lookup.TITULOS_CURSOS_INST, row_r8.titulo));
  }
}
function CursoListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](row_r9.tipo.nome);
  }
}
class CursoListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_2__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_curso_model__WEBPACK_IMPORTED_MODULE_1__.Curso, src_app_dao_curso_dao_service__WEBPACK_IMPORTED_MODULE_3__.CursoDaoService);
    this.injector = injector;
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      if (form.nome_curso?.length) {
        result.push(["nome", "like", "%" + form.nome_curso + "%"]);
      }
      if (form.nome_area?.length) {
        result.push(["area_curso_id", "like", "%" + form.nome_area + "%"]);
      }
      if (form.titulo?.length) {
        result.push(["titulo", "like", "%" + form.titulo + "%"]);
      }
      if (form.nome_tipo?.length) {
        result.push(["tipo_curso_id", "like", "%" + form.tipo + "%"]);
      }
      return result;
    };
    /* Inicializações */
    this.title = this.lex.translate("Cursos");
    this.code = "MOD_RX";
    this.join = ["area:id,nome", "tipo:id,nome"];
    this.orderBy = [['nome', 'asc']];
    //console.log('CURSO JOIN->>')
    this.filter = this.fh.FormBuilder({
      nome_area: {
        default: ""
      },
      nome_curso: {
        default: ""
      },
      nome_tipo: {
        default: ""
      },
      titulo: {
        default: ""
      }
    });
    // Testa se o usuário possui permissão para exibir dados de cursos
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-info-circle",
        label: "Informações",
        onClick: this.consult.bind(this)
      });
    }
    // Testa se o usuário possui permissão para excluir o curso
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-trash",
        label: "Excluir",
        onClick: this.delete.bind(this)
      });
    }
  }
  filterClear(filter) {
    filter.controls.nome_area.setValue("");
    filter.controls.nome_curso.setValue("");
    filter.controls.nome_tipo.setValue("");
    filter.controls.titulo.setValue("");
    super.filterClear(filter);
  }
}
_class = CursoListComponent;
_class.ɵfac = function CursoListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["curso-list"]],
  viewQuery: function CursoListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 21,
  vars: 30,
  consts: [[3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Nome da \u00E1rea de conhecimento", "controlName", "nome_area", "placeholder", "Nome da \u00E1rea de conhecimento", 3, "size", "control"], ["label", "Nome do curso", "controlName", "nome_curso", "placeholder", "Nome do curso", 3, "size", "control"], ["label", "Titulo", "controlName", "titulo", "placeholder", "", 3, "size", "control"], ["label", "Tipo do Curso", "controlName", "nome_tipo", "placeholder", "", 3, "size", "control"], ["title", "Curso", "field", "nome", "orderBy", "nome"], ["title", "\u00C1rea do Conhecimento", 3, "template"], ["columnNomeArea", ""], ["title", "T\u00EDtulo", 3, "template"], ["columnTitulo", ""], ["title", "Tipo", 3, "template"], ["columnTipo", ""], ["type", "options", 3, "onEdit", "options"], [3, "rows"]],
  template: function CursoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("select", function CursoListComponent_Template_grid_select_0_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CursoListComponent_toolbar_1_Template, 1, 0, "toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "filter", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "input-text", 4)(5, "input-text", 5)(6, "input-text", 6)(7, "input-text", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "column", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "column", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, CursoListComponent_ng_template_11_Template, 2, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "column", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, CursoListComponent_ng_template_14_Template, 2, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "column", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, CursoListComponent_ng_template_17_Template, 2, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "column", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "pagination", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](12);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](15);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"))("hasEdit", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 5)("control", ctx.filter.controls.nome_area);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 3)("control", ctx.filter.controls.nome_curso);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 2)("control", ctx.filter.controls.titulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 2)("control", ctx.filter.controls.nome_tipo);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("template", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("template", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("template", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("onEdit", ctx.edit)("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 23476:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/funcao-form/funcao-form.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuncaoFormComponent: () => (/* binding */ FuncaoFormComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var src_app_models_funcao_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/funcao.model */ 37389);
/* harmony import */ var src_app_dao_funcao_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/funcao-dao.service */ 37598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;








class FuncaoFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_1__.PageFormBase {
  //public tipoCursoDao ?: TipoCursoDaoService;
  constructor(injector) {
    super(injector, src_app_models_funcao_model__WEBPACK_IMPORTED_MODULE_2__.Funcao, src_app_dao_funcao_dao_service__WEBPACK_IMPORTED_MODULE_3__.FuncaoDaoService);
    this.injector = injector;
    this.titulos = [];
    this.validate = (control, controlName) => {
      let result = null;
      if (['nome'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      return result;
    };
    this.titleEdit = entity => {
      return "Editando " + (entity?.nome || "");
    };
    this.form = this.fh.FormBuilder({
      nome: {
        default: ""
      },
      nivel: {
        default: ""
      },
      siape: {
        default: ""
      },
      cbo: {
        default: ""
      },
      descricao: {
        default: ""
      },
      ativo: {
        default: true
      }
    }, this.cdRef, this.validate);
  }
  loadData(entity, form) {
    let formValue = Object.assign({}, form.value);
    form.patchValue(this.util.fillForm(formValue, entity));
  }
  initializeData(form) {
    form.patchValue(new src_app_models_funcao_model__WEBPACK_IMPORTED_MODULE_2__.Funcao());
  }
  saveData(form) {
    return new Promise((resolve, reject) => {
      const funcao = this.util.fill(new src_app_models_funcao_model__WEBPACK_IMPORTED_MODULE_2__.Funcao(), this.entity);
      resolve(this.util.fillForm(funcao, this.form.value));
    });
  }
}
_class = FuncaoFormComponent;
_class.ɵfac = function FuncaoFormComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["funcao-form"]],
  viewQuery: function FuncaoFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 8,
  vars: 9,
  consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row"], ["label", "Nome da Fun\u00E7\u00E3o", "controlName", "nome", 3, "size"], ["label", "N\u00EDvel da Fun\u00E7\u00E3o", "controlName", "nivel", 3, "size"], ["label", "C\u00F3digo SIAPE da Fun\u00E7\u00E3o", "controlName", "siape", 3, "size"], ["label", "C\u00F3digo CBO da Fun\u00E7\u00E3o", "controlName", "cbo", 3, "size"], ["label", "Descri\u00E7\u00E3o da Fun\u00E7\u00E3o", "controlName", "descricao", 3, "size"], ["labelPosition", "left", "label", "Ativo", "controlName", "ativo", 3, "size"]],
  template: function FuncaoFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "editable-form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function FuncaoFormComponent_Template_editable_form_submit_0_listener() {
        return ctx.onSaveData();
      })("cancel", function FuncaoFormComponent_Template_editable_form_cancel_0_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input-text", 2)(3, "input-text", 3)(4, "input-text", 4)(5, "input-text", 5)(6, "input-text", 6)(7, "input-switch", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 2);
    }
  },
  dependencies: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__.InputSwitchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 25210:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/funcao-list/funcao-list.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuncaoListComponent: () => (/* binding */ FuncaoListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var src_app_models_funcao_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/funcao.model */ 37389);
/* harmony import */ var src_app_dao_funcao_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/funcao-dao.service */ 37598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;














function FuncaoListComponent_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "toolbar");
  }
}
function FuncaoListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r2.lookup.getValue(ctx_r2.lookup.SIMNAO, row_r3.ativo), " ");
  }
}
class FuncaoListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_1__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_funcao_model__WEBPACK_IMPORTED_MODULE_2__.Funcao, src_app_dao_funcao_dao_service__WEBPACK_IMPORTED_MODULE_3__.FuncaoDaoService);
    this.injector = injector;
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      if (form.nome?.length) {
        result.push(["nome", "like", "%" + form.nome + "%"]);
      }
      if (form.descricao?.length) {
        result.push(["descricao", "like", "%" + form.descricao + "%"]);
      }
      if (form.nivel?.length) {
        result.push(["nivel", "like", "%" + form.nivel + "%"]);
      }
      if (form.siape?.length) {
        result.push(["siape", "like", "%" + form.siape + "%"]);
      }
      if (form.cbo?.length) {
        result.push(["cbo", "like", "%" + form.cbo + "%"]);
      }
      /* if(form.ativo?.length) {
         result.push(["ativo", "like", "%" + form.titulo + "%"]);
       }*/
      return result;
    };
    /* Inicializações */
    this.title = this.lex.translate("Funções");
    this.code = "MOD_RX";
    //this.join = ["area:nome","tipo:nome"];
    this.filter = this.fh.FormBuilder({
      nome: {
        default: ""
      },
      descricao: {
        default: ""
      },
      nivel: {
        default: ""
      },
      siape: {
        default: ""
      },
      cbo: {
        default: ""
      },
      //efetivo: {default: 1},
      ativo: {
        default: 1
      }
    });
    // Testa se o usuário possui permissão para exibir dados de cursos
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-info-circle",
        label: "Informações",
        onClick: this.consult.bind(this)
      });
    }
    // Testa se o usuário possui permissão para excluir o curso
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-trash",
        label: "Excluir",
        onClick: this.delete.bind(this)
      });
    }
  }
  filterClear(filter) {
    filter.controls.nome.setValue("");
    filter.controls.descrição.setValue("");
    filter.controls.nivel.setValue("");
    filter.controls.siape.setValue("");
    filter.controls.cbo.setValue("");
    super.filterClear(filter);
  }
}
_class = FuncaoListComponent;
_class.ɵfac = function FuncaoListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["funcao-list"]],
  viewQuery: function FuncaoListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
  decls: 21,
  vars: 32,
  consts: [[3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Nome da Fun\u00E7\u00E3o", "controlName", "nome", "placeholder", "Nome da \u00E1rea de conhecimento", 3, "size", "control"], ["label", "N\u00EDvel", "controlName", "nivel", "placeholder", "", 3, "size", "control"], ["label", "Descri\u00E7\u00E3o", "controlName", "descricao", "placeholder", "", 3, "size", "control"], ["label", "C\u00F3digo SIAPE", "controlName", "siape", "placeholder", "", 3, "size", "control"], ["label", "C\u00F3digo CBO", "controlName", "cbo", "placeholder", "", 3, "size", "control"], ["label", "Ativo", "controlName", "ativo", "placeholder", "", 3, "size", "control"], ["title", "Fun\u00E7\u00F5es", "field", "nome", "orderBy", "nome"], ["title", "N\u00EDvel", "field", "nivel"], ["title", "Descri\u00E7\u00E3o", "field", "descricao"], ["title", "SIAPE", "field", "siape"], ["title", "CBO", "field", "cbo"], ["title", "Ativo", 3, "template"], ["columnAtivo", ""], ["type", "options", 3, "onEdit", "options"], [3, "rows"]],
  template: function FuncaoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("select", function FuncaoListComponent_Template_grid_select_0_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, FuncaoListComponent_toolbar_1_Template, 1, 0, "toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "filter", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "input-text", 4)(5, "input-text", 5)(6, "input-text", 6)(7, "input-text", 7)(8, "input-text", 8)(9, "input-switch", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "column", 10)(12, "column", 11)(13, "column", 12)(14, "column", 13)(15, "column", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "column", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, FuncaoListComponent_ng_template_17_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "column", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "pagination", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"))("hasEdit", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 3)("control", ctx.filter.controls.nome);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 3)("control", ctx.filter.controls.nivel);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 3)("control", ctx.filter.controls.descricao);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 3)("control", ctx.filter.controls.siape);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 3)("control", ctx.filter.controls.cbo);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 3)("control", ctx.filter.controls.ativo);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("template", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("onEdit", ctx.edit)("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_9__.InputSwitchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 76621:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/grupo-especializado-form/grupo-especializado-form.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrupoEspecializadoFormComponent: () => (/* binding */ GrupoEspecializadoFormComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var src_app_models_grupo_especializado_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/grupo-especializado.model */ 39834);
/* harmony import */ var src_app_dao_grupo_especializado_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/grupo-especializado-dao.service */ 51353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;








class GrupoEspecializadoFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_1__.PageFormBase {
  //public tipoCursoDao ?: TipoCursoDaoService;
  constructor(injector) {
    super(injector, src_app_models_grupo_especializado_model__WEBPACK_IMPORTED_MODULE_2__.GrupoEspecializado, src_app_dao_grupo_especializado_dao_service__WEBPACK_IMPORTED_MODULE_3__.GrupoEspecializadoDaoService);
    this.injector = injector;
    this.titulos = [];
    this.validate = (control, controlName) => {
      let result = null;
      if (['nome'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      return result;
    };
    this.titleEdit = entity => {
      return "Editando " + (entity?.nome || "");
    };
    this.form = this.fh.FormBuilder({
      nome: {
        default: ""
      },
      ativo: {
        default: true
      }
    }, this.cdRef, this.validate);
  }
  loadData(entity, form) {
    let formValue = Object.assign({}, form.value);
    form.patchValue(this.util.fillForm(formValue, entity));
  }
  initializeData(form) {
    form.patchValue(new src_app_models_grupo_especializado_model__WEBPACK_IMPORTED_MODULE_2__.GrupoEspecializado());
  }
  saveData(form) {
    return new Promise((resolve, reject) => {
      const grupo = this.util.fill(new src_app_models_grupo_especializado_model__WEBPACK_IMPORTED_MODULE_2__.GrupoEspecializado(), this.entity);
      resolve(this.util.fillForm(grupo, this.form.value));
    });
  }
}
_class = GrupoEspecializadoFormComponent;
_class.ɵfac = function GrupoEspecializadoFormComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["grupo-especializado-form"]],
  viewQuery: function GrupoEspecializadoFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 5,
  consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row"], ["label", "Nome do Grupo Especializado", "controlName", "nome", 3, "size"], ["labelPosition", "left", "label", "Ativo", "controlName", "ativo", 3, "size"]],
  template: function GrupoEspecializadoFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "editable-form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function GrupoEspecializadoFormComponent_Template_editable_form_submit_0_listener() {
        return ctx.onSaveData();
      })("cancel", function GrupoEspecializadoFormComponent_Template_editable_form_cancel_0_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input-text", 2)(3, "input-switch", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 2);
    }
  },
  dependencies: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__.InputSwitchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 22701:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/grupo-especializado-list/grupo-especializado-list.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrupoEspecializadoListComponent: () => (/* binding */ GrupoEspecializadoListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var src_app_models_grupo_especializado_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/grupo-especializado.model */ 39834);
/* harmony import */ var src_app_dao_grupo_especializado_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/grupo-especializado-dao.service */ 51353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;













function GrupoEspecializadoListComponent_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "toolbar");
  }
}
class GrupoEspecializadoListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_1__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_grupo_especializado_model__WEBPACK_IMPORTED_MODULE_2__.GrupoEspecializado, src_app_dao_grupo_especializado_dao_service__WEBPACK_IMPORTED_MODULE_3__.GrupoEspecializadoDaoService);
    this.injector = injector;
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      if (form.nome?.length) {
        result.push(["nome", "like", "%" + form.nome + "%"]);
      }
      return result;
    };
    /* Inicializações */
    this.title = this.lex.translate("Grupos Especializados");
    this.code = "MOD_RX";
    this.filter = this.fh.FormBuilder({
      nome: {
        default: ""
      }
    });
    // Testa se o usuário possui permissão para exibir dados de cidade
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-info-circle",
        label: "Informações",
        onClick: this.consult.bind(this)
      });
    }
    // Testa se o usuário possui permissão para excluir a cidade
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-trash",
        label: "Excluir",
        onClick: this.delete.bind(this)
      });
    }
  }
  filterClear(filter) {
    filter.controls.nome.setValue("");
    super.filterClear(filter);
  }
}
_class = GrupoEspecializadoListComponent;
_class.ɵfac = function GrupoEspecializadoListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["grupo-especializado-list"]],
  viewQuery: function GrupoEspecializadoListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 9,
  vars: 21,
  consts: [[3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Nome do Centro de Treinamento", "controlName", "nome", "placeholder", "Nome/Sigla", 3, "size", "control"], ["title", "Nome/Sigla do Grupo Especializado", "field", "nome", "orderBy", "nome"], ["type", "options", 3, "onEdit", "options"], [3, "rows"]],
  template: function GrupoEspecializadoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("select", function GrupoEspecializadoListComponent_Template_grid_select_0_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, GrupoEspecializadoListComponent_toolbar_1_Template, 1, 0, "toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "filter", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "input-text", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "column", 5)(7, "column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "pagination", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"))("hasEdit", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 6)("control", ctx.filter.controls.nome);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("onEdit", ctx.edit)("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 28685:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/materia-form/materia-form.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MateriaFormComponent: () => (/* binding */ MateriaFormComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_dao_curso_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/curso-dao.service */ 34406);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var src_app_dao_area_conhecimento_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/area-conhecimento-dao.service */ 24997);
/* harmony import */ var src_app_models_materia_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/materia.model */ 67548);
/* harmony import */ var src_app_dao_materia_dao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dao/materia-dao.service */ 35871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ 32802);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
/* harmony import */ var _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-select/input-select.component */ 64603);
/* harmony import */ var _components_input_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/input/input-number/input-number.component */ 9224);
var _class;













const _c0 = function () {
  return ["raiox", "cadastros", "gerais", "curso", "new"];
};
const _c1 = function (a0) {
  return {
    route: a0
  };
};
class MateriaFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_2__.PageFormBase {
  constructor(injector) {
    super(injector, src_app_models_materia_model__WEBPACK_IMPORTED_MODULE_4__.Materia, src_app_dao_materia_dao_service__WEBPACK_IMPORTED_MODULE_5__.MateriaDaoService);
    this.injector = injector;
    this.cursos = [];
    this.titulo = [];
    this.cursoWhere = [["id", "==", null]];
    this.validate = (control, controlName) => {
      let result = null;
      if (['nome'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      if (['area_id'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      if (['curso_id'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      if (['horas_aula'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      if (['titulo'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      return result;
    };
    this.titleEdit = entity => {
      return "Editando " + (entity?.nome || "");
    };
    this.areaDao = injector.get(src_app_dao_area_conhecimento_dao_service__WEBPACK_IMPORTED_MODULE_3__.AreaConhecimentoDaoService);
    this.cursoDao = injector.get(src_app_dao_curso_dao_service__WEBPACK_IMPORTED_MODULE_1__.CursoDaoService);
    this.form = this.fh.FormBuilder({
      area_id: {
        default: ""
      },
      curso_id: {
        default: ""
      },
      nome: {
        default: ""
      },
      titulo: {
        default: ""
      },
      horas_aula: {
        default: 0
      },
      ativo: {
        default: true
      }
    }, this.cdRef, this.validate);
  }
  loadData(entity, form) {
    let formValue = Object.assign({}, form.value);
    form.patchValue(this.util.fillForm(formValue, entity));
  }
  initializeData(form) {
    form.patchValue(new src_app_models_materia_model__WEBPACK_IMPORTED_MODULE_4__.Materia());
  }
  saveData(form) {
    return new Promise((resolve, reject) => {
      const materia = this.util.fill(new src_app_models_materia_model__WEBPACK_IMPORTED_MODULE_4__.Materia(), this.entity);
      resolve(this.util.fillForm(materia, this.form.value));
    });
  }
  onAreaGraducaoChange() {
    /* this.cursoDao?.query({ where: [['area_curso_id', '==', this.form!.controls.area_materia_id.value], ['titulo', 'like', 'GRAD%']] }).getAll().then((cursos2) => {
       this.cursos = cursos2.map(x => Object.assign({}, { key: x.id, value: x.nome }) as LookupItem);
       this.cdRef.detectChanges();
     });*/
  }
  onTituloChange() {
    //console.log(this.form!.controls.titulo.value)
    //const titulo = this.lookup.TITULOS_CURSOS_INST.find(x => x.key == this.form!.controls.titulo.value);
    if (this.form.controls.area_id.value && this.form.controls.titulo.value) {
      /*this.cursoDao?.query({ where: [['area_curso_id', '==', this.form!.controls.area_id.value],['titulo', '==', this.form!.controls.titulo.value]] }).getAll().then((cursos2) => {
        this.cursos = cursos2.map(x => Object.assign({}, { key: x.id, value: x.nome }) as LookupItem);*/
      this.cursoWhere = [['area_id', '==', this.form.controls.area_id.value], ['titulo', '==', this.form.controls.titulo.value]];
      this.cdRef.detectChanges();
      // });
    }
  }
}
_class = MateriaFormComponent;
_class.ɵfac = function MateriaFormComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["materia-form"]],
  viewQuery: function MateriaFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
  decls: 9,
  vars: 18,
  consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row"], ["controlName", "area_id", 3, "size", "dao", "change"], ["label", "Titulo", "controlName", "titulo", 3, "size", "items", "change"], ["label", "Curso", "icon", "fas fa-user-graduate", "controlName", "curso_id", "liveSearch", "", 3, "size", "control", "dao", "where", "addRoute"], ["label", "Nome da Mat\u00E9ria", "controlName", "nome", 3, "size"], ["label", "Horas Aula", "controlName", "horas_aula", 3, "size"], ["labelPosition", "left", "label", "Ativo", "controlName", "ativo", 3, "size"]],
  template: function MateriaFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "editable-form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("submit", function MateriaFormComponent_Template_editable_form_submit_0_listener() {
        return ctx.onSaveData();
      })("cancel", function MateriaFormComponent_Template_editable_form_cancel_0_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1)(2, "input-search", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function MateriaFormComponent_Template_input_search_change_2_listener() {
        return ctx.onTituloChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "input-select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function MateriaFormComponent_Template_input_select_change_3_listener() {
        return ctx.onTituloChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "input-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "input-text", 5)(7, "input-number", 6)(8, "input-switch", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 4)("dao", ctx.areaDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 3)("items", ctx.lookup.TITULOS_CURSOS_INST);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 5)("control", ctx.form.controls.curso_id)("dao", ctx.cursoDao)("where", ctx.cursoWhere)("addRoute", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](16, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](15, _c0)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 2);
    }
  },
  dependencies: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_6__.InputSwitchComponent, _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_7__.InputSearchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__.InputTextComponent, _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_9__.InputSelectComponent, _components_input_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_10__.InputNumberComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 54346:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/materia-list/materia-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MateriaListComponent: () => (/* binding */ MateriaListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var src_app_models_materia_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/materia.model */ 67548);
/* harmony import */ var src_app_dao_materia_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/materia-dao.service */ 35871);
/* harmony import */ var src_app_dao_area_conhecimento_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/area-conhecimento-dao.service */ 24997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;














function MateriaListComponent_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "toolbar");
  }
}
function MateriaListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r5.curso.area.nome);
  }
}
function MateriaListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r6.curso.nome);
  }
}
class MateriaListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_1__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_materia_model__WEBPACK_IMPORTED_MODULE_2__.Materia, src_app_dao_materia_dao_service__WEBPACK_IMPORTED_MODULE_3__.MateriaDaoService);
    this.injector = injector;
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      if (form.nome?.length) {
        result.push(["nome", "like", "%" + form.nome + "%"]);
      }
      if (form.horas_aula?.length) {
        result.push(["horas_aula", "like", "%" + form.horas_aula + "%"]);
      }
      return result;
    };
    this.area = injector.get(src_app_dao_area_conhecimento_dao_service__WEBPACK_IMPORTED_MODULE_4__.AreaConhecimentoDaoService);
    /* Inicializações */
    this.title = this.lex.translate("Matérias");
    this.code = "MOD_RX";
    this.join = ["curso:id,nome"];
    this.join = ["curso.area:id,nome"];
    this.filter = this.fh.FormBuilder({
      area_id: {
        default: ""
      },
      nome: {
        default: ""
      },
      horas_aula: {
        default: 0
      },
      ativo: {
        default: true
      }
    });
    // Testa se o usuário possui permissão para exibir dados de cursos
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-info-circle",
        label: "Informações",
        onClick: this.consult.bind(this)
      });
    }
    // Testa se o usuário possui permissão para excluir o curso
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-trash",
        label: "Excluir",
        onClick: this.delete.bind(this)
      });
    }
  }
  filterClear(filter) {
    filter.controls.nome.setValue("");
    filter.controls.horas_aula.setValue("");
    super.filterClear(filter);
  }
}
_class = MateriaListComponent;
_class.ɵfac = function MateriaListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["materia-list"]],
  viewQuery: function MateriaListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
  decls: 17,
  vars: 25,
  consts: [[3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Nome da Mat\u00E9ria", "controlName", "nome", "placeholder", "Nome da Mat\u00E9ria", 3, "size", "control"], ["label", "\u00C1rea", "controlName", "area_id", "placeholder", "Nome da \u00C1rea", 3, "size", "control"], ["title", "Nome da Mat\u00E9ria", "field", "nome"], ["title", "\u00C1rea do Conhecimento", 3, "template"], ["columnNomeArea", ""], ["title", "Curso", 3, "template"], ["columnCurso", ""], ["title", "Horas Aula", "field", "horas_aula"], ["type", "options", 3, "onEdit", "options"], [3, "rows"]],
  template: function MateriaListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("select", function MateriaListComponent_Template_grid_select_0_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, MateriaListComponent_toolbar_1_Template, 1, 0, "toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "filter", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "input-text", 4)(5, "input-text", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "column", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, MateriaListComponent_ng_template_9_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "column", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, MateriaListComponent_ng_template_12_Template, 2, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "column", 11)(15, "column", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "pagination", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](10);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"))("hasEdit", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 5)("control", ctx.filter.controls.nome);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", 5)("control", ctx.filter.controls.area_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("template", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("template", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("onEdit", ctx.edit)("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_5__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_6__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__.PaginationComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 88949:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/questionario-pergunta-form/questionario-pergunta-form.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionarioPerguntaFormComponent: () => (/* binding */ QuestionarioPerguntaFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;

class QuestionarioPerguntaFormComponent {
  constructor() {}
  ngOnInit() {}
}
_class = QuestionarioPerguntaFormComponent;
_class.ɵfac = function QuestionarioPerguntaFormComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-questionario-pergunta-form"]],
  decls: 2,
  vars: 0,
  template: function QuestionarioPerguntaFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "questionario-pergunta-form works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 77339:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/questionario-pergunta-list/questionario-pergunta-list.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionarioPerguntaListComponent: () => (/* binding */ QuestionarioPerguntaListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;

class QuestionarioPerguntaListComponent {
  constructor() {}
  ngOnInit() {}
}
_class = QuestionarioPerguntaListComponent;
_class.ɵfac = function QuestionarioPerguntaListComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-questionario-pergunta-list"]],
  decls: 2,
  vars: 0,
  template: function QuestionarioPerguntaListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "questionario-pergunta-list works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 36175:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/tipo-curso-form/tipo-curso-form.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TipoCursoFormComponent: () => (/* binding */ TipoCursoFormComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_dao_tipo_curso_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/tipo-curso-dao.service */ 42277);
/* harmony import */ var src_app_models_tipo_curso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/tipo-curso.model */ 3494);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;








class TipoCursoFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_3__.PageFormBase {
  constructor(injector) {
    super(injector, src_app_models_tipo_curso_model__WEBPACK_IMPORTED_MODULE_2__.TipoCurso, src_app_dao_tipo_curso_dao_service__WEBPACK_IMPORTED_MODULE_1__.TipoCursoDaoService);
    this.injector = injector;
    this.validate = (control, controlName) => {
      let result = null;
      if (['labelnome, ativo'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      return result;
    };
    this.titleEdit = entity => {
      return "Editando " + (entity?.nome || "");
    };
    this.form = this.fh.FormBuilder({
      nome: {
        default: ""
      },
      labelnome: {
        default: ""
      },
      ativo: {
        default: true
      }
    }, this.cdRef, this.validate);
  }
  loadData(entity, form) {
    let formValue = Object.assign({}, form.value);
    form.patchValue(this.util.fillForm(formValue, entity));
  }
  initializeData(form) {
    form.patchValue(new src_app_models_tipo_curso_model__WEBPACK_IMPORTED_MODULE_2__.TipoCurso());
  }
  saveData(form) {
    return new Promise((resolve, reject) => {
      const curso = this.util.fill(new src_app_models_tipo_curso_model__WEBPACK_IMPORTED_MODULE_2__.TipoCurso(), this.entity);
      resolve(this.util.fillForm(curso, this.form.value));
    });
  }
}
_class = TipoCursoFormComponent;
_class.ɵfac = function TipoCursoFormComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["tipo-curso-form"]],
  viewQuery: function TipoCursoFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 5,
  consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row"], ["label", "Nome do tipo do curso", "controlName", "nome", 3, "size"], ["labelPosition", "left", "label", "Ativo", "controlName", "ativo", 3, "size"]],
  template: function TipoCursoFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "editable-form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function TipoCursoFormComponent_Template_editable_form_submit_0_listener() {
        return ctx.onSaveData();
      })("cancel", function TipoCursoFormComponent_Template_editable_form_cancel_0_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input-text", 2)(3, "input-switch", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 2);
    }
  },
  dependencies: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__.InputSwitchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 87288:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/tipo-curso-list/tipo-curso-list.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TipoCursoListComponent: () => (/* binding */ TipoCursoListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_dao_tipo_curso_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/tipo-curso-dao.service */ 42277);
/* harmony import */ var src_app_models_tipo_curso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/tipo-curso.model */ 3494);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
var _class;













function TipoCursoListComponent_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "toolbar");
  }
}
class TipoCursoListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_3__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_tipo_curso_model__WEBPACK_IMPORTED_MODULE_2__.TipoCurso, src_app_dao_tipo_curso_dao_service__WEBPACK_IMPORTED_MODULE_1__.TipoCursoDaoService);
    this.injector = injector;
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      if (form.nome?.length) {
        result.push(["nome", "like", "%" + form.nome + "%"]);
      }
      return result;
    };
    /* Inicializações */
    this.title = this.lex.translate("Tipos de Curso");
    this.code = "MOD_RX";
    //this.join = ["area:nome","tipo:nome"];
    this.filter = this.fh.FormBuilder({
      nome: {
        default: ""
      }
    });
    // Testa se o usuário possui permissão para exibir dados de cursos
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-info-circle",
        label: "Informações",
        onClick: this.consult.bind(this)
      });
    }
    // Testa se o usuário possui permissão para excluir o curso
    if (this.auth.hasPermissionTo("MOD_RX_VIS_DPE")) {
      this.options.push({
        icon: "bi bi-trash",
        label: "Excluir",
        onClick: this.delete.bind(this)
      });
    }
  }
  filterClear(filter) {
    filter.controls.nome.setValue("");
    super.filterClear(filter);
  }
}
_class = TipoCursoListComponent;
_class.ɵfac = function TipoCursoListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["tipo-curso-list"]],
  viewQuery: function TipoCursoListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 8,
  vars: 19,
  consts: [[3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Nome do tipo de curso", "controlName", "nome", "placeholder", "Nome do tipo de curso", 3, "size", "control"], ["title", "Tipo de Curso", "field", "nome", "orderBy", "nome"], [3, "rows"]],
  template: function TipoCursoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("select", function TipoCursoListComponent_Template_grid_select_0_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, TipoCursoListComponent_toolbar_1_Template, 1, 0, "toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "filter", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "input-text", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "column", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "pagination", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"))("hasEdit", ctx.auth.hasPermissionTo("MOD_RX_VIS_DPE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 9)("control", ctx.filter.controls.nome);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=64.js.map