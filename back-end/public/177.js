"use strict";
(self["webpackChunkpetrvs"] = self["webpackChunkpetrvs"] || []).push([[177],{

/***/ 32398:
/*!*******************************************************!*\
  !*** ./src/app/models/plano-entrega-entrega.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanoEntregaEntrega: () => (/* binding */ PlanoEntregaEntrega)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ 64368);

class PlanoEntregaEntrega extends _base_model__WEBPACK_IMPORTED_MODULE_0__.Base {
  constructor(data) {
    super();
    this.objetivos = [];
    this.processos = [];
    this.inicio = new Date();
    this.fim = null;
    this.descricao = "";
    this.homologado = false;
    this.meta = {};
    this.realizado = {};
    this.progresso_esperado = 100;
    this.progresso_realizado = 0;
    this.destinatario = '';
    this.entrega_id = '';
    this.unidade_id = '';
    this.entrega_pai_id = null;
    this.plano_entrega_id = null;
    this.initialization(data);
  }
}

/***/ }),

/***/ 74795:
/*!***********************************************!*\
  !*** ./src/app/models/plano-entrega.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanoEntrega: () => (/* binding */ PlanoEntrega)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ 64368);

class PlanoEntrega extends _base_model__WEBPACK_IMPORTED_MODULE_0__.Base {
  constructor(data) {
    super();
    this.entregas = []; // Entregas que compõem o plano de entregas
    this.statusHistorico = []; // Mudanças de status sofridas pelo plano de entregas (histórico)
    this.inicio = new Date(); // Data inicio do plano de entrega
    this.fim = null; // Data fim do plano de entrega
    this.nome = ""; // Nome do plano de entrega
    this.metadados = undefined; // Campo virtual contendo informações calculadas pelo servidor
    this.unidade_id = '';
    this.plano_entrega_id = null;
    this.planejamento_id = null;
    this.cadeia_valor_id = null;
    this.programa_id = null;
    this.initialization(data);
  }
}

/***/ }),

/***/ 49546:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-form-adesao/plano-entrega-form-adesao.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanoEntregaFormAdesaoComponent: () => (/* binding */ PlanoEntregaFormAdesaoComponent)
/* harmony export */ });
/* harmony import */ var _usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/grid/grid.component */ 73150);
/* harmony import */ var src_app_components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ 32802);
/* harmony import */ var src_app_dao_cadeia_valor_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/cadeia-valor-dao.service */ 19520);
/* harmony import */ var src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dao/planejamento-dao.service */ 5458);
/* harmony import */ var src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dao/plano-entrega-dao.service */ 39190);
/* harmony import */ var src_app_dao_programa_dao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dao/programa-dao.service */ 92214);
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ 81214);
/* harmony import */ var src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/plano-entrega.model */ 74795);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
/* harmony import */ var _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/input/input-datetime/input-datetime.component */ 84495);
/* harmony import */ var _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/separator/separator.component */ 25560);

var _class;
















const _c0 = function () {
  return ["gestao", "plano-entrega"];
};
const _c1 = function (a0) {
  return {
    unidade_id: a0,
    status: "ATIVO"
  };
};
const _c2 = function (a1) {
  return {
    showFilter: false,
    filter: a1
  };
};
const _c3 = function (a0, a1) {
  return {
    route: a0,
    params: a1
  };
};
const _c4 = function (a2) {
  return ["unidade_id", "=", a2];
};
const _c5 = function () {
  return ["status", "=", "ATIVO"];
};
const _c6 = function (a0, a1) {
  return [a0, a1];
};
class PlanoEntregaFormAdesaoComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_10__.PageFormBase {
  constructor(injector) {
    super(injector, src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_9__.PlanoEntrega, src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_6__.PlanoEntregaDaoService);
    this.injector = injector;
    this.validate = (control, controlName) => {
      let result = null;
      if (['nome', 'plano_entrega_id'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      return result;
      /*  (RN_PENT_2_7)
          Em caso de adesão, os campos 'inicio', 'fim', 'planejamento_id', e 'cadeia_valor_id', deverão ser sempre iguais aos do plano-pai;
          portanto, quando um plano de entregas próprio sofrer alteração em um desses campos, todos os planos a ele vinculados deverão ser atualizados também;
      */
    };

    this.titleEdit = entity => {
      return "Editando " + this.lex.translate("Plano de Entregas") + ': ' + (entity?.nome || "");
    };
    this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_8__.UnidadeDaoService);
    this.programaDao = injector.get(src_app_dao_programa_dao_service__WEBPACK_IMPORTED_MODULE_7__.ProgramaDaoService);
    this.planoEntregaDao = injector.get(src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_6__.PlanoEntregaDaoService);
    this.cadeiaValorDao = injector.get(src_app_dao_cadeia_valor_dao_service__WEBPACK_IMPORTED_MODULE_4__.CadeiaValorDaoService);
    this.planejamentoInstitucionalDao = injector.get(src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_5__.PlanejamentoDaoService);
    this.join = [];
    this.modalWidth = 1000;
    this.form = this.fh.FormBuilder({
      nome: {
        default: ""
      },
      inicio: {
        default: ""
      },
      fim: {
        default: ""
      },
      planejamento_id: {
        default: null
      },
      cadeia_valor_id: {
        default: null
      },
      unidade_id: {
        default: this.auth.unidade?.id
      },
      plano_entrega_id: {
        default: null
      },
      programa_id: {
        default: null
      },
      status: {
        default: "HOMOLOGANDO"
      }
    }, this.cdRef, this.validate);
  }
  ngOnInit() {
    super.ngOnInit();
    let planoEntrega = this.metadata?.planoEntrega ? this.metadata?.planoEntrega : null;
    if (planoEntrega) {
      this.form.controls.plano_entrega_id.setValue(planoEntrega.id);
      this.form.controls.nome.setValue(planoEntrega.nome);
      this.form.controls.inicio.setValue(planoEntrega.inicio);
      this.form.controls.fim.setValue(planoEntrega.fim);
      this.form.controls.planejamento_id.setValue(planoEntrega.planejamento_id);
      this.form.controls.cadeia_valor_id.setValue(planoEntrega.cadeia_valor_id);
    }
  }
  loadData(entity, form) {
    var _this = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let formValue = Object.assign({}, form.value);
      form.patchValue(_this.util.fillForm(formValue, entity));
      _this.cdRef.detectChanges();
    })();
  }
  initializeData(form) {
    var _this2 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loadData(_this2.entity, _this2.form);
    })();
  }
  saveData(form) {
    var _this3 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        let planoEntrega = _this3.util.fill(new src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_9__.PlanoEntrega(), _this3.entity);
        planoEntrega = _this3.util.fillForm(planoEntrega, _this3.form.value);
        resolve(planoEntrega);
      });
    })();
  }
  onPlanoEntregaChange(event) {
    if (this.form.controls.plano_entrega_id.value) {
      this.form.controls.nome.setValue(this.planoEntrega?.selectedItem?.entity.nome);
      this.form.controls.inicio.setValue(this.planoEntrega?.selectedItem?.entity.inicio);
      this.form.controls.fim.setValue(this.planoEntrega?.selectedItem?.entity.fim);
      this.form.controls.planejamento_id.setValue(this.planoEntrega?.selectedItem?.entity.planejamento_id);
      this.form.controls.cadeia_valor_id.setValue(this.planoEntrega?.selectedItem?.entity.cadeia_valor_id);
      this.form.controls.programa_id.setValue(this.planoEntrega?.selectedItem?.entity.programa_id);
    }
  }
}
_class = PlanoEntregaFormAdesaoComponent;
_class.ɵfac = function PlanoEntregaFormAdesaoComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["plano-entrega-adesao"]],
  viewQuery: function PlanoEntregaFormAdesaoComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__.GridComponent, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](src_app_components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_3__.InputSearchComponent, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.planoEntrega = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]],
  decls: 21,
  vars: 37,
  consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row", "mb-4"], ["controlName", "plano_entrega_id", "label", "Plano de Entregas da Unidade-pai", 3, "size", "dao", "selectRoute", "where", "change"], ["planoEntrega", ""], [1, "row"], ["label", "Nome deste Plano de Entregas", "controlName", "nome", 3, "size"], ["disabled", "", "controlName", "unidade_id", 3, "size", "label", "dao"], ["disabled", "", "label", "Status", "controlName", "status", 3, "size"], [1, "row", "mt-4"], ["title", "Dados herdados do Plano de Entregas da Unidade-pai", 3, "collapse"], ["disabled", "", "label", "Programa de Gest\u00E3o", "controlName", "programa_id", 3, "size", "dao"], ["disabled", "", "label", "Planejamento Institucional", "controlName", "planejamento_id", 3, "size", "dao"], ["disabled", "", "controlName", "inicio", "label", "In\u00EDcio", 3, "size", "labelInfo"], ["disabled", "", "label", "Cadeia de Valor", "controlName", "cadeia_valor_id", 3, "size", "dao"], ["disabled", "", "controlName", "fim", "label", "Fim", 3, "size", "labelInfo"]],
  template: function PlanoEntregaFormAdesaoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "editable-form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("submit", function PlanoEntregaFormAdesaoComponent_Template_editable_form_submit_0_listener() {
        return ctx.onSaveData();
      })("cancel", function PlanoEntregaFormAdesaoComponent_Template_editable_form_cancel_0_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div")(2, "div", 1)(3, "input-search", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function PlanoEntregaFormAdesaoComponent_Template_input_search_change_3_listener($event) {
        return ctx.onPlanoEntregaChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "separator");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "input-text", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "input-search", 6)(10, "input-text", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 8)(12, "separator", 9)(13, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "input-search", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "input-search", 11)(17, "input-datetime", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "input-search", 13)(20, "input-datetime", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 12)("dao", ctx.planoEntregaDao)("selectRoute", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](28, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](23, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](26, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](24, _c1, ctx.auth.unidade.unidade_pai_id))))("where", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](34, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](31, _c4, ctx.auth.unidade.unidade_pai_id), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](33, _c5)));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 9)("label", ctx.lex.translate("Unidade"))("dao", ctx.unidadeDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("collapse", "collapse");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 12)("dao", ctx.programaDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 9)("dao", ctx.planejamentoInstitucionalDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 3)("labelInfo", "In\u00EDcio " + ctx.lex.translate("Plano de Entrega"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 9)("dao", ctx.cadeiaValorDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", 3)("labelInfo", "Fim " + ctx.lex.translate("Plano de Entrega"));
    }
  },
  dependencies: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, src_app_components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_3__.InputSearchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_11__.InputTextComponent, _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_12__.InputDatetimeComponent, _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_13__.SeparatorComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 62675:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-form-entrega/plano-entrega-form-entrega.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanoEntregaFormEntregaComponent: () => (/* binding */ PlanoEntregaFormEntregaComponent)
/* harmony export */ });
/* harmony import */ var _usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_dao_cadeia_valor_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/cadeia-valor-dao.service */ 19520);
/* harmony import */ var src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/planejamento-dao.service */ 5458);
/* harmony import */ var src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/plano-entrega-entrega-dao.service */ 31021);
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ 81214);
/* harmony import */ var src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/plano-entrega-entrega.model */ 32398);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var src_app_dao_entrega_dao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dao/entrega-dao.service */ 67465);
/* harmony import */ var src_app_dao_planejamento_objetivo_dao_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dao/planejamento-objetivo-dao.service */ 91058);
/* harmony import */ var src_app_dao_cadeia_valor_processo_dao_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dao/cadeia-valor-processo-dao.service */ 67501);
/* harmony import */ var src_app_services_navigate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/navigate.service */ 92307);
/* harmony import */ var _plano_entrega_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../plano-entrega.service */ 77447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ 32802);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
/* harmony import */ var _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../components/input/input-datetime/input-datetime.component */ 84495);
/* harmony import */ var _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../components/input/input-select/input-select.component */ 64603);
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../components/tabs/tabs.component */ 66384);
/* harmony import */ var _components_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../components/tabs/tab/tab.component */ 74978);
/* harmony import */ var _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../components/separator/separator.component */ 25560);
/* harmony import */ var _components_input_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../components/input/input-number/input-number.component */ 9224);

var _class;


























const _c0 = ["gridProcessos"];
const _c1 = ["gridObjetivos"];
const _c2 = ["entregas"];
const _c3 = ["planejamento"];
const _c4 = ["cadeiaValor"];
const _c5 = ["inputObjetivo"];
const _c6 = ["inputProcesso"];
const _c7 = ["entrega"];
const _c8 = ["unidade"];
const _c9 = ["tabs"];
function PlanoEntregaFormEntregaComponent_div_22_input_number_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "input-number", 27);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 6);
  }
}
function PlanoEntregaFormEntregaComponent_div_22_input_number_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "input-number", 28);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 6);
  }
}
function PlanoEntregaFormEntregaComponent_div_22_input_select_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "input-select", 29);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 6)("items", ctx_r8.itensQualitativo);
  }
}
function PlanoEntregaFormEntregaComponent_div_22_input_number_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "input-number", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("change", function PlanoEntregaFormEntregaComponent_div_22_input_number_4_Template_input_number_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r12.onRealizadoChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 6);
  }
}
function PlanoEntregaFormEntregaComponent_div_22_input_number_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "input-number", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("change", function PlanoEntregaFormEntregaComponent_div_22_input_number_5_Template_input_number_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r14.onRealizadoChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 6);
  }
}
function PlanoEntregaFormEntregaComponent_div_22_input_select_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "input-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("change", function PlanoEntregaFormEntregaComponent_div_22_input_select_6_Template_input_select_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r16.onRealizadoChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 6)("items", ctx_r11.itensQualitativo);
  }
}
const _c10 = function () {
  return ["PORCENTAGEM"];
};
const _c11 = function () {
  return ["QUANTIDADE", "VALOR"];
};
const _c12 = function () {
  return ["QUALITATIVO"];
};
function PlanoEntregaFormEntregaComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](1, PlanoEntregaFormEntregaComponent_div_22_input_number_1_Template, 1, 1, "input-number", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](2, PlanoEntregaFormEntregaComponent_div_22_input_number_2_Template, 1, 1, "input-number", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](3, PlanoEntregaFormEntregaComponent_div_22_input_select_3_Template, 1, 2, "input-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](4, PlanoEntregaFormEntregaComponent_div_22_input_number_4_Template, 1, 1, "input-number", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](5, PlanoEntregaFormEntregaComponent_div_22_input_number_5_Template, 1, 1, "input-number", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](6, PlanoEntregaFormEntregaComponent_div_22_input_select_6_Template, 1, 2, "input-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r3.checkTipoIndicador(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](6, _c10)));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r3.checkTipoIndicador(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](7, _c11)));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r3.checkTipoIndicador(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](8, _c12)));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r3.checkTipoIndicador(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](9, _c10)));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r3.checkTipoIndicador(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](10, _c11)));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r3.checkTipoIndicador(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](11, _c12)));
  }
}
function PlanoEntregaFormEntregaComponent_tab_26_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r24 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](row_r24.objetivo.nome);
  }
}
const _c13 = function (a2) {
  return ["planejamento_id", "==", a2];
};
const _c14 = function (a0) {
  return [a0];
};
const _c15 = function () {
  return ["gestao", "planejamento", "objetivoList"];
};
const _c16 = function (a0) {
  return {
    planejamento_id: a0
  };
};
const _c17 = function (a0) {
  return {
    filter: a0
  };
};
const _c18 = function (a0, a1) {
  return {
    route: a0,
    params: a1
  };
};
function PlanoEntregaFormEntregaComponent_tab_26_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "input-search", 42, 43);
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 12)("where", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction1"](6, _c14, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction1"](4, _c13, ctx_r23.planejamentoId)))("dao", ctx_r23.planejamentoObjetivoDao)("selectRoute", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction2"](13, _c18, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](8, _c15), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction1"](11, _c17, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction1"](9, _c16, ctx_r23.planejamentoId))));
  }
}
function PlanoEntregaFormEntregaComponent_tab_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "tab", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](1, "input-search", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](3, "grid", 36, 37)(5, "columns")(6, "column", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](7, PlanoEntregaFormEntregaComponent_tab_26_ng_template_7_Template, 2, 1, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](9, PlanoEntregaFormEntregaComponent_tab_26_ng_template_9_Template, 2, 16, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](11, "column", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreference"](8);
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreference"](10);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 12)("dao", ctx_r4.planejamentoDao);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("control", ctx_r4.form.controls.objetivos)("form", ctx_r4.formObjetivos)("hasDelete", false)("hasEdit", false)("add", ctx_r4.addObjetivo.bind(ctx_r4))("remove", ctx_r4.removeObjetivo.bind(ctx_r4))("save", ctx_r4.saveObjetivo.bind(ctx_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("template", _r20)("editTemplate", _r22);
  }
}
function PlanoEntregaFormEntregaComponent_tab_27_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r33 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](row_r33.processo.nome);
  }
}
const _c19 = function (a2) {
  return ["cadeia_valor_id", "==", a2];
};
const _c20 = function () {
  return ["gestao", "cadeia-valor", "processoList"];
};
const _c21 = function (a0) {
  return {
    cadeia_valor_id: a0
  };
};
function PlanoEntregaFormEntregaComponent_tab_27_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "input-search", 52, 53);
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 12)("where", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction1"](6, _c14, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction1"](4, _c19, ctx_r32.cadeiaValorId)))("dao", ctx_r32.cadeiaValorProcessoDao)("selectRoute", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction2"](13, _c18, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](8, _c20), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction1"](11, _c17, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction1"](9, _c21, ctx_r32.cadeiaValorId))));
  }
}
function PlanoEntregaFormEntregaComponent_tab_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "tab", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](1, "input-search", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](3, "grid", 36, 47)(5, "columns")(6, "column", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](7, PlanoEntregaFormEntregaComponent_tab_27_ng_template_7_Template, 2, 1, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](9, PlanoEntregaFormEntregaComponent_tab_27_ng_template_9_Template, 2, 16, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](11, "column", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreference"](8);
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreference"](10);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 12)("dao", ctx_r5.cadeiaValorDao);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("control", ctx_r5.form.controls.processos)("form", ctx_r5.formProcessos)("hasDelete", false)("hasEdit", false)("add", ctx_r5.addProcesso.bind(ctx_r5))("remove", ctx_r5.removeProcesso.bind(ctx_r5))("save", ctx_r5.saveProcesso.bind(ctx_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("template", _r29)("editTemplate", _r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("dynamicButtons", ctx_r5.dynamicButtonsProcessos.bind(ctx_r5));
  }
}
class PlanoEntregaFormEntregaComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_7__.PageFormBase {
  constructor(injector) {
    super(injector, src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_6__.PlanoEntregaEntrega, src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_4__.PlanoEntregaEntregaDaoService);
    this.injector = injector;
    this.itensQualitativo = [];
    this.validate = (control, controlName) => {
      let result = null;
      if (['descricao'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      } else if (['progresso_realizado', 'progresso_esperado', 'meta', 'realizado'].indexOf(controlName) >= 0 && !(control.value >= 0 || control.value?.length > 0)) {
        result = "Obrigatório";
      } else if (['unidade_id'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "O demandante é obrigatório";
      } else if (['entrega_id'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "A entrega é obrigatória";
      } else if (['inicio'].indexOf(controlName) >= 0 && !this.dao?.validDateTime(control.value)) {
        result = "Inválido";
      } else if (['fim'].indexOf(controlName) >= 0 && !this.dao?.validDateTime(control.value)) {
        result = "Inválido";
      }
      return result;
    };
    this.formValidation = form => {
      let inicio = this.form?.controls.inicio.value;
      let fim = this.form?.controls.fim.value;
      if (this.gridObjetivos?.editing) {
        this.tabs.active = "OBJETIVOS";
        return "Salve ou cancele o registro atual em edição";
      }
      if (this.gridProcessos?.editing) {
        this.tabs.active = "PROCESSOS";
        return "Salve ou cancele o registro atual em edição";
      }
      if (!this.dao?.validDateTime(inicio)) {
        return "Data de início inválida";
      } else if (!this.dao?.validDateTime(fim)) {
        return "Data de fim inválida";
      } else if (inicio > fim) {
        return "A data do fim não pode ser anterior à data do fim!";
      } else if (this.planoEntrega && inicio < this.planoEntrega.inicio) {
        return "Data de inicio menor que a data de inicio" + this.lex.translate("do Plano de Entrega") + ": " + this.util.getDateFormatted(this.planoEntrega.inicio);
      } else if (this.planoEntrega && this.planoEntrega.fim && fim > this.planoEntrega.fim) {
        return "Data de fim maior que a data de fim" + this.lex.translate("do Plano de Entrega") + ": " + this.util.getDateFormatted(this.planoEntrega.fim);
      }
      return undefined;
    };
    this.planejamentoDao = injector.get(src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_3__.PlanejamentoDaoService);
    this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_5__.UnidadeDaoService);
    this.entregaDao = injector.get(src_app_dao_entrega_dao_service__WEBPACK_IMPORTED_MODULE_8__.EntregaDaoService);
    this.planejamentoInstitucionalDao = injector.get(src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_3__.PlanejamentoDaoService);
    this.planoEntregaEntregaDao = injector.get(src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_4__.PlanoEntregaEntregaDaoService);
    this.cadeiaValorDao = injector.get(src_app_dao_cadeia_valor_dao_service__WEBPACK_IMPORTED_MODULE_2__.CadeiaValorDaoService);
    this.cadeiaValorProcessoDao = injector.get(src_app_dao_cadeia_valor_processo_dao_service__WEBPACK_IMPORTED_MODULE_10__.CadeiaValorProcessoDaoService);
    this.planejamentoObjetivoDao = injector.get(src_app_dao_planejamento_objetivo_dao_service__WEBPACK_IMPORTED_MODULE_9__.PlanejamentoObjetivoDaoService);
    this.planoEntregaService = injector.get(_plano_entrega_service__WEBPACK_IMPORTED_MODULE_12__.PlanoEntregaService);
    this.join = ['objetivos', 'processos', 'unidade'];
    this.modalWidth = 600;
    this.form = this.fh.FormBuilder({
      descricao: {
        default: ""
      },
      inicio: {
        default: new Date()
      },
      fim: {
        default: new Date()
      },
      meta: {
        default: 100
      },
      realizado: {
        default: null
      },
      plano_entrega_id: {
        default: ""
      },
      entrega_pai_id: {
        default: null
      },
      entrega_id: {
        default: null
      },
      progresso_esperado: {
        default: 100
      },
      progresso_realizado: {
        default: null
      },
      unidade_id: {
        default: null
      },
      destinatario: {
        default: null
      },
      objetivos: {
        default: []
      },
      processos: {
        default: []
      },
      listaQualitativo: {
        default: []
      },
      planejamento_id: {
        default: null
      },
      cadeia_valor_id: {
        default: null
      },
      objetivo_id: {
        default: null
      },
      objetivo: {
        default: null
      }
    }, this.cdRef, this.validate);
    this.formObjetivos = this.fh.FormBuilder({
      objetivo_id: {
        default: null
      }
    }, this.cdRef, this.validate);
    this.formProcessos = this.fh.FormBuilder({
      processo_id: {
        default: null
      }
    }, this.cdRef, this.validate);
  }
  ngOnInit() {
    super.ngOnInit();
    this.planoEntrega = this.metadata?.plano_entrega;
    this.planejamentoId = this.metadata?.planejamento_id;
    this.cadeiaValorId = this.metadata?.cadeia_valor_id;
    this.unidadeId = this.metadata?.unidade_id;
    this.entity = this.metadata?.entrega;
  }
  ngAfterViewInit() {
    var _this = this;
    super.ngAfterViewInit();
    (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.unidade?.loadSearch(_this.unidadeId);
      yield _this.planejamento?.loadSearch(_this.planejamentoId);
      yield _this.cadeiaValor?.loadSearch(_this.cadeiaValorId);
    })();
  }
  loadData(entity, form) {
    var _this2 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let formValue = Object.assign({}, form.value);
      _this2.onEntregaChange(form.value);
      let {
        meta,
        realizado,
        ...entityWithout
      } = entity;
      form.patchValue(_this2.util.fillForm(formValue, entityWithout));
      form.controls.meta.setValue(_this2.planoEntregaService.getValor(entity.meta));
      form.controls.realizado.setValue(_this2.planoEntregaService.getValor(entity.realizado));
    })();
  }
  initializeData(form) {
    var _this3 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.loadData(_this3.entity, form);
    })();
  }
  saveData(form) {
    return new Promise((resolve, reject) => {
      let entrega = this.util.fill(new src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_6__.PlanoEntregaEntrega(), this.entity);
      this.gridObjetivos?.confirm();
      this.gridProcessos?.confirm();
      let {
        meta,
        realizado,
        ...valueWithout
      } = this.form.value;
      entrega = this.util.fillForm(entrega, valueWithout);
      entrega.objetivos = entrega.objetivos.filter(x => ["ADD", "DELETE"].includes(x._status || ""));
      entrega.processos = entrega.processos.filter(x => ["ADD", "DELETE"].includes(x._status || ""));
      entrega.unidade = this.unidade?.selectedItem?.entity;
      entrega.entrega = this.entrega?.selectedItem?.entity;
      entrega.meta = this.planoEntregaService.getEntregaValor(entrega.entrega, meta);
      entrega.realizado = this.planoEntregaService.getEntregaValor(entrega.entrega, realizado);
      resolve(new src_app_services_navigate_service__WEBPACK_IMPORTED_MODULE_11__.NavigateResult(entrega));
    });
  }
  onRealizadoChange(event) {
    this.calculaRealizado();
  }
  calculaRealizado() {
    const meta = this.form?.controls.meta.value;
    const realizado = this.form?.controls.realizado.value;
    if (meta && realizado) {
      let totalRealizado = !isNaN(realizado) ? (realizado / meta * 100).toFixed(2) || 0 : 0;
      this.form?.controls.progresso_realizado.setValue(totalRealizado);
    }
  }
  checkTipoIndicador(tipos) {
    return tipos.includes((this.entrega?.selectedItem?.entity).tipo_indicador);
  }
  dynamicOptionsObjetivos(row) {
    let result = [];
    let objetivo = row;
    result.push({
      label: "Excluir",
      icon: "bi bi-trash",
      color: "btn-outline-danger",
      onClick: objetivo => {
        this.removeObjetivo(objetivo);
      }
    });
    return result;
  }
  dynamicButtonsObjetivos(row) {
    let result = [];
    let objetivo = row;
    return result;
  }
  dynamicButtonsProcessos(row) {
    let result = [];
    let processo = row;
    return result;
  }
  addObjetivo() {
    var _this4 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return {
        id: _this4.dao.generateUuid(),
        _status: "ADD"
      };
    })();
  }
  removeObjetivo(row) {
    var _this5 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let confirm = yield _this5.dialog.confirm("Exclui ?", "Deseja realmente excluir?");
      if (confirm) row._status = "DELETE";
      return false;
    })();
  }
  saveObjetivo(form, row) {
    var _this6 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let consolidado = row;
      if (form.controls.objetivo_id.value.length && _this6.inputObjetivo.selectedItem) {
        consolidado.objetivo_id = form.controls.objetivo_id.value;
        consolidado.objetivo = _this6.inputObjetivo.selectedItem.entity;
        return consolidado;
      }
      return undefined;
    })();
  }
  addProcesso() {
    var _this7 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return {
        id: _this7.dao.generateUuid(),
        _status: "ADD"
      };
    })();
  }
  removeProcesso(row) {
    var _this8 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let confirm = yield _this8.dialog.confirm("Exclui ?", "Deseja realmente excluir?");
      if (confirm) row._status = "DELETE";
      return false;
    })();
  }
  saveProcesso(form, row) {
    var _this9 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let consolidado = row;
      if (form.controls.processo_id.value.length && _this9.inputProcesso.selectedItem) {
        consolidado.processo_id = form.controls.processo_id.value;
        consolidado.processo = _this9.inputProcesso.selectedItem.entity;
        return consolidado;
      }
      return undefined;
    })();
  }
  onEntregaChange(row) {
    var _this10 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this10.entrega && _this10.entrega.selectedItem) {
        const entregaItem = _this10.entrega?.selectedItem?.entity;
        const tipoIndicador = entregaItem.tipo_indicador;
        switch (tipoIndicador) {
          case 'QUALITATIVO':
            _this10.itensQualitativo = entregaItem.lista_qualitativos || [];
            _this10.form?.controls.meta.setValue(_this10.itensQualitativo.length ? _this10.itensQualitativo[0].key : null);
            _this10.form?.controls.realizado.setValue(_this10.itensQualitativo.length ? _this10.itensQualitativo[0].key : null);
            break;
          case 'VALOR':
            _this10.form?.controls.meta.setValue(100);
            _this10.form?.controls.realizado.setValue(0);
            break;
          case 'QUANTIDADE':
            _this10.form?.controls.meta.setValue(100);
            _this10.form?.controls.realizado.setValue(0);
            break;
          case 'PORCENTAGEM':
            _this10.form?.controls.meta.setValue(100);
            _this10.form?.controls.realizado.setValue(100);
            break;
          default:
            break;
        }
        _this10.calculaRealizado();
      }
    })();
  }
}
_class = PlanoEntregaFormEntregaComponent;
_class.ɵfac = function PlanoEntregaFormEntregaComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_24__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["plano-entrega-form-entrega"]],
  viewQuery: function PlanoEntregaFormEntregaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c7, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c8, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c9, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.gridProcessos = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.gridObjetivos = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.entregas = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.planejamento = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.cadeiaValor = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.inputObjetivo = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.inputProcesso = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.entrega = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.unidade = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.tabs = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵInheritDefinitionFeature"]],
  decls: 28,
  vars: 25,
  consts: [[3, "form", "disabled", "title", "submit", "cancel"], ["display", "", "right", "", 3, "title"], ["tabs", ""], ["key", "ENTREGAS", "label", "Entregas"], [1, "row"], ["controlName", "entrega_id", 3, "size", "dao", "change"], ["entrega", ""], ["label", "Detalhamento", "controlName", "descricao", 3, "size"], ["controlName", "entrega_pai_id", 3, "size", "label", "dao"], ["title", "Especifica\u00E7\u00E3o das Entregas"], ["date", "", "label", "In\u00EDcio", "controlName", "inicio", 3, "size", "labelInfo"], ["date", "", "label", "Fim", "controlName", "fim", 3, "size", "labelInfo"], ["label", "Demandante", "controlName", "unidade_id", 3, "size", "dao"], ["unidade", ""], ["label", "Destinat\u00E1rio", "controlName", "destinatario", 3, "size"], ["title", "Planejamento"], ["class", "row", 4, "ngIf"], ["label", "Progresso Esperado", "controlName", "progresso_esperado", "sufix", "%", 3, "size", "decimals"], ["label", "Progresso Realizado", "controlName", "progresso_realizado", "sufix", "%", "disabled", "", 3, "size", "decimals", "stepValue"], ["key", "OBJETIVOS", "label", "Objetivos", 4, "ngIf"], ["key", "PROCESSOS", "label", "Processos", 4, "ngIf"], ["label", "Meta", "controlName", "meta", "sufix", "%", 3, "size", 4, "ngIf"], ["label", "Meta", "controlName", "meta", 3, "size", 4, "ngIf"], ["label", "Meta", "controlName", "meta", 3, "size", "items", 4, "ngIf"], ["label", "Realizado", "controlName", "realizado", "sufix", "%", 3, "size", "change", 4, "ngIf"], ["label", "Realizado", "controlName", "realizado", 3, "size", "change", 4, "ngIf"], ["label", "Realizado", "controlName", "realizado", 3, "size", "items", "change", 4, "ngIf"], ["label", "Meta", "controlName", "meta", "sufix", "%", 3, "size"], ["label", "Meta", "controlName", "meta", 3, "size"], ["label", "Meta", "controlName", "meta", 3, "size", "items"], ["label", "Realizado", "controlName", "realizado", "sufix", "%", 3, "size", "change"], ["label", "Realizado", "controlName", "realizado", 3, "size", "change"], ["label", "Realizado", "controlName", "realizado", 3, "size", "items", "change"], ["key", "OBJETIVOS", "label", "Objetivos"], ["controlName", "planejamento_id", "disabled", "", 3, "size", "dao"], ["planejamento", ""], ["editable", "", 3, "control", "form", "hasDelete", "hasEdit", "add", "remove", "save"], ["gridObjetivos", ""], ["title", "Objetivo", 3, "template", "editTemplate"], ["columnObjetivo", ""], ["editObjetivo", ""], ["type", "options"], ["label", "", "icon", "", "controlName", "objetivo_id", "label", "", "icon", "", 3, "size", "where", "dao", "selectRoute"], ["inputObjetivo", ""], ["key", "PROCESSOS", "label", "Processos"], ["controlName", "cadeia_valor_id", "disabled", "", 3, "size", "dao"], ["cadeiaValor", ""], ["gridProcessos", ""], ["title", "Processos", 3, "template", "editTemplate"], ["processo", ""], ["editProcesso", ""], ["type", "options", 3, "dynamicButtons"], ["label", "", "icon", "", "controlName", "processo_id", "label", "", 3, "size", "where", "dao", "selectRoute"], ["inputProcesso", ""]],
  template: function PlanoEntregaFormEntregaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "editable-form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("submit", function PlanoEntregaFormEntregaComponent_Template_editable_form_submit_0_listener() {
        return ctx.onSaveData();
      })("cancel", function PlanoEntregaFormEntregaComponent_Template_editable_form_cancel_0_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "tabs", 1, 2)(3, "tab", 3)(4, "div", 4)(5, "div", 4)(6, "input-search", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("change", function PlanoEntregaFormEntregaComponent_Template_input_search_change_6_listener($event) {
        return ctx.onEntregaChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](9, "input-text", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](10, "separator");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](11, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](12, "input-search", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](13, "separator", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](14, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](15, "input-datetime", 10)(16, "input-datetime", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](17, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](18, "input-search", 12, 13)(20, "input-text", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](21, "separator", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](22, PlanoEntregaFormEntregaComponent_div_22_Template, 7, 12, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](23, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](24, "input-number", 17)(25, "input-number", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](26, PlanoEntregaFormEntregaComponent_tab_26_Template, 12, 11, "tab", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](27, PlanoEntregaFormEntregaComponent_tab_27_Template, 12, 12, "tab", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreference"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("title", !ctx.isModal ? ctx.title : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 12)("dao", ctx.entregaDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 12)("label", "Vinculo com " + ctx.lex.translate("entrega") + " de " + ctx.lex.translate("plano de entrega") + " de " + ctx.lex.translate("unidade") + " superior")("dao", ctx.planoEntregaEntregaDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 6)("labelInfo", "In\u00EDcio " + ctx.lex.translate("Plano de Entregas"));
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 6)("labelInfo", "Fim " + ctx.lex.translate("Plano de Entregas") + "(Estimativa Inicial)");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 6)("dao", ctx.unidadeDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", _r1 == null ? null : _r1.selectedItem == null ? null : _r1.selectedItem.entity);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 6)("decimals", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("size", 6)("decimals", 2)("stepValue", 0.01);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.planejamentoId == null ? null : ctx.planejamentoId.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.cadeiaValorId == null ? null : ctx.cadeiaValorId.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_14__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_15__.ColumnComponent, src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_16__.InputSearchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_17__.InputTextComponent, _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_18__.InputDatetimeComponent, _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_19__.InputSelectComponent, _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_20__.TabsComponent, _components_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_21__.TabComponent, _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_22__.SeparatorComponent, _components_input_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_23__.InputNumberComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 46435:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-form/plano-entrega-form.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanoEntregaFormComponent: () => (/* binding */ PlanoEntregaFormComponent)
/* harmony export */ });
/* harmony import */ var _usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/grid/grid.component */ 73150);
/* harmony import */ var src_app_dao_cadeia_valor_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/cadeia-valor-dao.service */ 19520);
/* harmony import */ var src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/planejamento-dao.service */ 5458);
/* harmony import */ var src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dao/plano-entrega-dao.service */ 39190);
/* harmony import */ var src_app_dao_programa_dao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dao/programa-dao.service */ 92214);
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ 81214);
/* harmony import */ var src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/plano-entrega.model */ 74795);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ 32802);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
/* harmony import */ var _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/input/input-datetime/input-datetime.component */ 84495);
/* harmony import */ var _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/separator/separator.component */ 25560);
/* harmony import */ var _plano_entrega_list_entrega_plano_entrega_list_entrega_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../plano-entrega-list-entrega/plano-entrega-list-entrega.component */ 39285);

var _class;
















const _c0 = ["programa"];
class PlanoEntregaFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_9__.PageFormBase {
  constructor(injector) {
    super(injector, src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_8__.PlanoEntrega, src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_5__.PlanoEntregaDaoService);
    this.injector = injector;
    this.validate = (control, controlName) => {
      let result = null;
      if (['nome', 'unidade_id', 'programa_id'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      if (['inicio'].indexOf(controlName) >= 0 && !this.dao?.validDateTime(control.value)) {
        result = "Inválido";
      }
      if (['fim'].indexOf(controlName) >= 0 && !this.dao?.validDateTime(control.value)) {
        result = "Inválido";
      }
      return result;
    };
    this.formValidation = form => {
      const inicio = this.form?.controls.inicio.value;
      const fim = this.form?.controls.fim.value;
      const programa = this.programa?.selectedItem?.entity;
      if (!programa) {
        return "Obrigatório selecionar o programa";
      } else if (!this.dao?.validDateTime(inicio)) {
        return "Data de início inválida";
      } else if (!this.dao?.validDateTime(fim)) {
        return "Data de fim inválida";
      } else if (inicio > fim) {
        return "A data do fim não pode ser menor que a data do início!";
      } else {
        const diffTime = Math.abs(inicio - fim);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const entregas = this.form.controls.entregas.value || [];
        if (programa.prazo_max_plano_entrega > 0 && diffDays > programa.prazo_max_plano_entrega) return "A data de início e término" + this.lex.translate("do Plano de Entrega") + " deve respeitar o período previsto no " + this.lex.translate("Programa");
        for (let entrega of entregas) {
          if (entrega.inicio < inicio) return "A " + this.lex.translate("entrega") + " '" + entrega.descricao + "' possui data inicial anterior à " + this.lex.translate("do Plano de Entrega") + ": " + this.util.getDateFormatted(inicio);
          if (entrega.fim > fim) return "A " + this.lex.translate("entrega") + " '" + entrega.descricao + "' possui data fim posterior à " + this.lex.translate("do Plano de Entrega") + ": " + this.util.getDateFormatted(fim);
        }
      }
      return undefined;
    };
    this.titleEdit = entity => {
      return "Editando " + this.lex.translate("Plano de Entregas") + ': ' + (entity?.nome || "");
    };
    this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_7__.UnidadeDaoService);
    this.programaDao = injector.get(src_app_dao_programa_dao_service__WEBPACK_IMPORTED_MODULE_6__.ProgramaDaoService);
    this.cadeiaValorDao = injector.get(src_app_dao_cadeia_valor_dao_service__WEBPACK_IMPORTED_MODULE_3__.CadeiaValorDaoService);
    this.planejamentoInstitucionalDao = injector.get(src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_4__.PlanejamentoDaoService);
    this.join = ["entregas.entrega", "unidade", "entregas.unidade", "status_atual:id,nome"];
    this.modalWidth = 1200;
    this.form = this.fh.FormBuilder({
      nome: {
        default: ""
      },
      inicio: {
        default: new Date()
      },
      fim: {
        default: new Date()
      },
      unidade_id: {
        default: ""
      },
      plano_entrega_id: {
        default: null
      },
      planejamento_id: {
        default: null
      },
      cadeia_valor_id: {
        default: null
      },
      programa_id: {
        default: null
      },
      entregas: {
        default: []
      }
    }, this.cdRef, this.validate);
  }
  loadData(entity, form) {
    var _this = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let formValue = Object.assign({}, form.value);
      form.patchValue(_this.util.fillForm(formValue, entity));
      _this.cdRef.detectChanges();
    })();
  }
  initializeData(form) {
    var _this2 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.entity = new src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_8__.PlanoEntrega();
      _this2.entity.unidade_id = _this2.auth.unidade?.id || "";
      _this2.entity.unidade = _this2.auth.unidade;
      _this2.loadData(_this2.entity, _this2.form);
    })();
  }
  saveData(form) {
    var _this3 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        let planoEntrega = _this3.util.fill(new src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_8__.PlanoEntrega(), _this3.entity);
        planoEntrega = _this3.util.fillForm(planoEntrega, _this3.form.value);
        planoEntrega.entregas = planoEntrega.entregas?.filter(x => x._status) || [];
        resolve(planoEntrega);
      });
    })();
  }
  dynamicButtons(row) {
    let result = [];
    return result;
  }
}
_class = PlanoEntregaFormComponent;
_class.ɵfac = function PlanoEntregaFormComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-plano-entrega-form"]],
  viewQuery: function PlanoEntregaFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__.GridComponent, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.programa = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
  decls: 19,
  vars: 24,
  consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row"], ["label", "Nome", "controlName", "nome", 3, "size"], ["nome", ""], ["controlName", "programa_id", 3, "size", "disabled", "dao"], ["programa", ""], ["date", "", "label", "In\u00EDcio", "controlName", "inicio", 3, "size", "labelInfo"], ["date", "", "label", "Fim", "controlName", "fim", 3, "size", "labelInfo"], ["controlName", "unidade_id", 3, "size", "disabled", "dao"], ["unidade", ""], ["controlName", "planejamento_id", "label", "Planejamento Institucional", 3, "size", "emptyValue", "dao"], ["planejamento", ""], ["controlName", "cadeia_valor_id", "label", "Cadeia de Valor", 3, "size", "emptyValue", "dao"], ["cadeiaValor", ""], ["title", "Entregas"], ["noPersist", "", 3, "control", "planejamentoId", "cadeiaValorId", "unidadeId"], ["entregas", ""]],
  template: function PlanoEntregaFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "editable-form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("submit", function PlanoEntregaFormComponent_Template_editable_form_submit_0_listener() {
        return ctx.onSaveData();
      })("cancel", function PlanoEntregaFormComponent_Template_editable_form_cancel_0_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div")(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "input-text", 2, 3)(5, "input-search", 4, 5)(7, "input-datetime", 6)(8, "input-datetime", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "input-search", 8, 9)(12, "input-search", 10, 11)(14, "input-search", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "separator", 14)(17, "plano-entrega-list-entrega", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4)("disabled", (ctx.entity == null ? null : ctx.entity.id) ? "disabled" : undefined)("dao", ctx.programaDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 2)("labelInfo", "In\u00EDcio " + ctx.lex.translate("Planejamento Institucional"));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 2)("labelInfo", "Fim " + ctx.lex.translate("Planejamento Institucional"));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4)("disabled", (ctx.entity == null ? null : ctx.entity.id) ? "disabled" : undefined)("dao", ctx.unidadeDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4)("emptyValue", null)("dao", ctx.planejamentoInstitucionalDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("size", 4)("emptyValue", null)("dao", ctx.cadeiaValorDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.form.controls.entregas)("planejamentoId", ctx.form.controls.planejamento_id.value)("cadeiaValorId", ctx.form.controls.cadeia_valor_id.value)("unidadeId", ctx.form.controls.unidade_id.value);
    }
  },
  dependencies: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_10__.InputSearchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_11__.InputTextComponent, _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_12__.InputDatetimeComponent, _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_13__.SeparatorComponent, _plano_entrega_list_entrega_plano_entrega_list_entrega_component__WEBPACK_IMPORTED_MODULE_14__.PlanoEntregaListEntregaComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 65659:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-list-entrega-list/plano-entrega-list-entrega-list.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanoEntregaListEntregaListComponent: () => (/* binding */ PlanoEntregaListEntregaListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/plano-entrega-entrega-dao.service */ 31021);
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ 81214);
/* harmony import */ var src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/plano-entrega-entrega.model */ 32398);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ 32802);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
/* harmony import */ var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/progress-bar/progress-bar.component */ 69756);
var _class;
















function PlanoEntregaListEntregaListComponent_h3_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}
function PlanoEntregaListEntregaListComponent_toolbar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "toolbar", 20);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("buttons", ctx_r1.buttons);
  }
}
function PlanoEntregaListEntregaListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](row_r12.descricao + " / " + row_r12.demandante + " / " + row_r12.destinatario);
  }
}
function PlanoEntregaListEntregaListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r13 = ctx.row;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r5.dao.getDateFormatted(row_r13.inicio) + " at\u00E9 " + ctx_r5.dao.getDateFormatted(row_r13.fim), "");
  }
}
function PlanoEntregaListEntregaListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r14 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](row_r14.entrega_id);
  }
}
function PlanoEntregaListEntregaListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r15 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](row_r15.meta + " / " + row_r15.realizado);
  }
}
function PlanoEntregaListEntregaListComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "progress-bar", 21);
  }
  if (rf & 2) {
    const row_r16 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", row_r16.progresso_realizado);
  }
}
class PlanoEntregaListEntregaListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_4__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_3__.PlanoEntregaEntrega, src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_1__.PlanoEntregaEntregaDaoService);
    this.injector = injector;
    this.buttons = [];
    this.filterWhere = filter => {
      let form = filter.value;
      let result = [];
      if (form.planejamento_id?.length) {
        result.push(["planejamento_id", "==", form.planejamento_id]);
      }
      if (form.nome?.length) {
        result.push(["or", ["nome", "like", "%" + form.nome.replace(" ", "%") + "%"], ["sigla", "like", "%" + form.nome.replace(" ", "%") + "%"]]);
      }
      return result;
    };
    this.planoEntregaDao = injector.get(src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_1__.PlanoEntregaEntregaDaoService);
    this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_2__.UnidadeDaoService);
    this.title = this.lex.translate("Entregas");
    this.filter = this.fh.FormBuilder({
      nome: {
        default: ""
      },
      descricao: {
        default: ""
      },
      unidade_id: {
        default: ""
      },
      destinatario: {
        default: ""
      }
    });
  }
  dynamicOptions(row) {
    let result = [];
    result.push({
      label: "Informações",
      icon: "bi bi-info-circle",
      onClick: objetivo => this.go.navigate({
        route: ['gestao', 'planejamento', 'objetivo', objetivo.id, 'consult']
      }, {
        modal: true
      })
    });
    return result;
  }
  filterClear(filter) {
    super.filterClear(filter);
  }
}
_class = PlanoEntregaListEntregaListComponent;
_class.ɵfac = function PlanoEntregaListEntregaListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-plano-entrega-list-entrega-list"]],
  viewQuery: function PlanoEntregaListEntregaListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]],
  decls: 28,
  vars: 30,
  consts: [["class", "my-2", 4, "ngIf"], [3, "dao", "orderBy", "groupBy", "join", "selectable", "select"], [3, "buttons", 4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Nome", "controlName", "nome", "placeholder", "Nome", 3, "size", "control"], ["label", "Descri\u00E7\u00E3o", "controlName", "descricao", "placeholder", "Descri\u00E7\u00E3o", 3, "size", "control"], ["label", "Demandante", "controlName", "unidade_id", 3, "size", "dao"], ["label", "Destinat\u00E1rio", "controlName", "destinatario", "placeholder", "Destinat\u00E1rio", 3, "size", "control"], [3, "title", "template"], ["columnEntregaCliente", ""], ["columnDatas", ""], ["title", "Entrega", 3, "template"], ["columnIndicador", ""], ["columnMetaRealizado", ""], ["title", "Progresso", 3, "template"], ["columnProgresso", ""], ["type", "options"], [3, "rows"], [1, "my-2"], [3, "buttons"], ["color", "success", 3, "value"]],
  template: function PlanoEntregaListEntregaListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, PlanoEntregaListEntregaListComponent_h3_0_Template, 2, 1, "h3", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "grid", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("select", function PlanoEntregaListEntregaListComponent_Template_grid_select_1_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, PlanoEntregaListEntregaListComponent_toolbar_2_Template, 1, 1, "toolbar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "filter", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "input-text", 5)(6, "input-text", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "input-search", 7)(9, "input-text", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "columns")(11, "column", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, PlanoEntregaListEntregaListComponent_ng_template_12_Template, 2, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "column", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, PlanoEntregaListEntregaListComponent_ng_template_15_Template, 2, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "column", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, PlanoEntregaListEntregaListComponent_ng_template_18_Template, 2, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "column", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, PlanoEntregaListEntregaListComponent_ng_template_21_Template, 2, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "column", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](24, PlanoEntregaListEntregaListComponent_ng_template_24_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](26, "column", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "pagination", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](13);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](16);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](19);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](22);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.isModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dao", ctx.dao)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 6)("control", ctx.filter.controls.nome);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 6)("control", ctx.filter.controls.descricao);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 6)("dao", ctx.unidadeDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 6)("control", ctx.filter.controls.destinatario);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Entrega\nDemandante\nDestinat\u00E1rio")("template", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Data In\u00EDcio\nData Fim")("template", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("template", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Meta\nRealizado")("template", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("template", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_5__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_6__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__.PaginationComponent, _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_10__.InputSearchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_11__.InputTextComponent, _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_12__.ProgressBarComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 39285:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-list-entrega/plano-entrega-list-entrega.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanoEntregaListEntregaComponent: () => (/* binding */ PlanoEntregaListEntregaComponent)
/* harmony export */ });
/* harmony import */ var _usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/plano-entrega-entrega-dao.service */ 31021);
/* harmony import */ var src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/plano-entrega-entrega.model */ 32398);
/* harmony import */ var src_app_modules_base_page_frame_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/base/page-frame-base */ 76298);
/* harmony import */ var _plano_entrega_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../plano-entrega.service */ 77447);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/badge/badge.component */ 95489);
/* harmony import */ var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/progress-bar/progress-bar.component */ 69756);

var _class;















function PlanoEntregaListEntregaComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Entregas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "badge", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const separator_r12 = ctx.separator;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", separator_r12 == null ? null : separator_r12.text);
  }
}
function PlanoEntregaListEntregaComponent_ng_template_7_badge_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "badge", 20);
  }
  if (rf & 2) {
    const row_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", row_r13.descricao);
  }
}
function PlanoEntregaListEntregaComponent_ng_template_7_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "badge", 21);
  }
  if (rf & 2) {
    const row_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().row;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx_r15.entityService.getIcon("Unidade"))("label", row_r13.unidade.sigla);
  }
}
function PlanoEntregaListEntregaComponent_ng_template_7_badge_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "badge", 22);
  }
  if (rf & 2) {
    const row_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", row_r13.destinatario);
  }
}
function PlanoEntregaListEntregaComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, PlanoEntregaListEntregaComponent_ng_template_7_badge_0_Template, 1, 1, "badge", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, PlanoEntregaListEntregaComponent_ng_template_7_badge_2_Template, 1, 2, "badge", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, PlanoEntregaListEntregaComponent_ng_template_7_badge_3_Template, 1, 1, "badge", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r13 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r13.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r13.unidade);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r13.destinatario == null ? null : row_r13.destinatario.length);
  }
}
function PlanoEntregaListEntregaComponent_ng_template_10_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().row;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r21.dao.getDateFormatted(row_r20.inicio), "");
  }
}
function PlanoEntregaListEntregaComponent_ng_template_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().row;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r22.dao.getDateFormatted(row_r20.fim), "");
  }
}
function PlanoEntregaListEntregaComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, PlanoEntregaListEntregaComponent_ng_template_10_span_0_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, PlanoEntregaListEntregaComponent_ng_template_10_span_1_Template, 2, 1, "span", 23);
  }
  if (rf & 2) {
    const row_r20 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r20.inicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r20.fim);
  }
}
function PlanoEntregaListEntregaComponent_ng_template_13_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r25.entrega == null ? null : row_r25.entrega.nome, " ");
  }
}
function PlanoEntregaListEntregaComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, PlanoEntregaListEntregaComponent_ng_template_13_span_0_Template, 3, 1, "span", 24);
  }
  if (rf & 2) {
    const row_r25 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r25.entrega);
  }
}
function PlanoEntregaListEntregaComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "badge", 27)(1, "badge", 27);
  }
  if (rf & 2) {
    const row_r28 = ctx.row;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", ctx_r9.planoEntregaService.getValorMeta(row_r28));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", ctx_r9.planoEntregaService.getValorRealizado(row_r28));
  }
}
function PlanoEntregaListEntregaComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "progress-bar", 28);
  }
  if (rf & 2) {
    const row_r29 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", row_r29.progresso_realizado);
  }
}
class PlanoEntregaListEntregaComponent extends src_app_modules_base_page_frame_base__WEBPACK_IMPORTED_MODULE_5__.PageFrameBase {
  set noPersist(value) {
    super.noPersist = value;
  }
  get noPersist() {
    return super.noPersist;
  }
  set control(value) {
    super.control = value;
  }
  get control() {
    return super.control;
  }
  set entity(value) {
    super.entity = value;
  }
  get entity() {
    return super.entity;
  }
  set planejamentoId(value) {
    if (this._planejamentoId != value) {
      this._planejamentoId = value;
      // verificar nas entregas quais objetivos não são desse planjemaneot e remove-los
      // será remvido somente da lista de itens (em memória), independente de persistente ou não, MAS NO BACKEND HAVERÀ ESSA VALIDAÇÂO!
    }
  }

  get planejamentoId() {
    return this._planejamentoId;
  }
  set cadeiaValorId(value) {
    if (this._cadeiaValorId != value) {
      this._cadeiaValorId = value;
      // verificar nas entregas quais objetivos não são desse planjemaneot e remove-los
      // será remvido somente da lista de itens (em memória), independente de persistente ou não, MAS NO BACKEND HAVERÀ ESSA VALIDAÇÂO!
    }
  }

  get cadeiaValorId() {
    return this._cadeiaValorId;
  }
  set unidadeId(value) {
    if (this._unidadeId != value) {
      this._unidadeId = value;
      // verificar nas entregas quais objetivos não são desse planjemaneot e remove-los
      // será remvido somente da lista de itens (em memória), independente de persistente ou não, MAS NO BACKEND HAVERÀ ESSA VALIDAÇÂO!
    }
  }

  get unidadeId() {
    return this._unidadeId;
  }
  get items() {
    if (!this.gridControl.value) this.gridControl.setValue([]);
    return this.gridControl.value;
  }
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.entityToControl = value => value.entregas || [];
    this.options = [];
    this.planoEntregaId = "";
    this.validate = (control, controlName) => {
      let result = null;
      if (['nome'].indexOf(controlName) >= 0 && !control.value?.length) {
        result = "Obrigatório";
      }
      return result;
    };
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      result.push(["plano_entrega_id", "==", this.planoEntregaId]);
      return result;
    };
    this.title = this.lex.translate("Entregas");
    this.join = ["unidade", "entidade", "entrega"];
    this.code = "MOD_PENT_CONS";
    this.cdRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef);
    this.dao = injector.get(src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_3__.PlanoEntregaEntregaDaoService);
    this.planoEntregaService = injector.get(_plano_entrega_service__WEBPACK_IMPORTED_MODULE_6__.PlanoEntregaService);
    this.form = this.fh.FormBuilder({
      descricao: {
        default: ""
      },
      inicio: {
        default: new Date()
      },
      fim: {
        default: new Date()
      },
      meta: {
        default: ""
      },
      realizado: {
        default: null
      },
      entrega_id: {
        default: null
      },
      unidade_id: {
        default: null
      },
      progresso_esperado: {
        default: null
      },
      progresso_realizado: {
        default: null
      },
      destinatario: {
        default: null
      }
    }, this.cdRef, this.validate);
    // Testa se o usuário possui permissão para exibir dados do feriado
    if (true) {
      this.options.push({
        icon: "bi bi-info-circle",
        label: "Informações",
        onClick: this.consult.bind(this)
      });
    }
    // Testa se o usuário possui permissão para excluir o feriado
    if (true) {
      this.options.push({
        icon: "bi bi-trash",
        label: "Excluir",
        onClick: this.delete.bind(this)
      });
    }
  }
  ngOnInit() {
    super.ngOnInit();
    this.planoEntregaId = this.urlParams.get("id") || "";
  }
  add() {
    var _this = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let entrega = new src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_4__.PlanoEntregaEntrega({
        _status: "ADD",
        id: _this.dao.generateUuid(),
        plano_entrega_id: _this.entity?.id
      });
      _this.go.navigate({
        route: ['gestao', 'plano-entrega', 'entrega']
      }, {
        metadata: {
          plano_entrega: _this.entity,
          planejamento_id: _this.planejamentoId,
          cadeia_valor_id: _this.cadeiaValorId,
          unidade_id: _this.unidadeId,
          entrega: entrega
        },
        modalClose: function () {
          var _ref = (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (modalResult) {
            if (modalResult) {
              try {
                _this.isNoPersist ? _this.items.push(modalResult) : _this.items.push(yield _this.dao.save(modalResult));
                _this.cdRef.detectChanges();
              } catch (error) {
                _this.error(error?.error || error?.message || error);
              }
            }
            ;
          });
          return function modalClose(_x) {
            return _ref.apply(this, arguments);
          };
        }()
      });
    })();
  }
  edit(entrega) {
    var _this2 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      entrega._status = entrega._status == "ADD" ? "ADD" : "EDIT";
      let index = _this2.items.indexOf(entrega);
      _this2.go.navigate({
        route: ['gestao', 'plano-entrega', 'entrega']
      }, {
        metadata: {
          plano_entrega: _this2.entity,
          planejamento_id: _this2.planejamentoId,
          cadeia_valor_id: _this2.cadeiaValorId,
          unidade_id: _this2.unidadeId,
          entrega: entrega
        },
        modalClose: function () {
          var _ref2 = (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (modalResult) {
            if (modalResult) {
              if (!_this2.isNoPersist) yield _this2.dao?.save(modalResult);
              _this2.items[index] = modalResult;
            }
            ;
          });
          return function modalClose(_x2) {
            return _ref2.apply(this, arguments);
          };
        }()
      });
    })();
  }
  delete(entrega) {
    var _this3 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let confirm = yield _this3.dialog.confirm("Exclui ?", "Deseja realmente excluir?");
      if (confirm) {
        let index = _this3.items.indexOf(entrega);
        if (_this3.isNoPersist) {
          entrega._status = "DELETE";
        } else {
          yield _this3.dao.delete(entrega);
        }
        ;
      }
    })();
  }
  consult(entrega) {
    var _this4 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.go.navigate({
        route: ['', entrega.id, "consult"]
      });
    })();
  }
}
_class = PlanoEntregaListEntregaComponent;
_class.ɵfac = function PlanoEntregaListEntregaComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["plano-entrega-list-entrega"]],
  viewQuery: function PlanoEntregaListEntregaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__.GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    }
  },
  inputs: {
    cdRef: "cdRef",
    noPersist: "noPersist",
    control: "control",
    entity: "entity",
    planejamentoId: "planejamentoId",
    cadeiaValorId: "cadeiaValorId",
    unidadeId: "unidadeId"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
  decls: 22,
  vars: 19,
  consts: [["noButtons", "", 3, "form", "disabled"], [1, "row"], ["editable", "", 3, "items", "form", "hasAdd", "hasEdit", "add", "groupTemplate", "minHeight"], ["groupEntregas", ""], [3, "title", "template"], ["columnEntregaCliente", ""], ["columnDatas", ""], ["title", "Entrega", 3, "template"], ["columnEntrega", ""], ["columnMetaRealizado", ""], ["title", "Progresso", 3, "template"], ["columnProgresso", ""], ["type", "options", 3, "onEdit", "options"], [1, "grid-group-text"], [1, "text-wrap"], ["color", "primary", 3, "label"], ["color", "light", "icon", "bi bi-textarea-t", 3, "label", 4, "ngIf"], [1, "d-block"], ["color", "light", 3, "icon", "label", 4, "ngIf"], ["color", "light", "icon", "bi bi-mailbox", 3, "label", 4, "ngIf"], ["color", "light", "icon", "bi bi-textarea-t", 3, "label"], ["color", "light", 3, "icon", "label"], ["color", "light", "icon", "bi bi-mailbox", 3, "label"], [4, "ngIf"], ["class", "badge bg-light text-dark", 4, "ngIf"], [1, "badge", "bg-light", "text-dark"], [1, "bi", "bi-list-check"], ["color", "light", 3, "label"], ["color", "success", 3, "value"]],
  template: function PlanoEntregaListEntregaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "editable-form", 0)(1, "div", 1)(2, "grid", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, PlanoEntregaListEntregaComponent_ng_template_3_Template, 4, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "columns")(6, "column", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, PlanoEntregaListEntregaComponent_ng_template_7_Template, 4, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "column", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, PlanoEntregaListEntregaComponent_ng_template_10_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "column", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, PlanoEntregaListEntregaComponent_ng_template_13_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "column", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, PlanoEntregaListEntregaComponent_ng_template_16_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "column", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, PlanoEntregaListEntregaComponent_ng_template_19_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "column", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](4);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](8);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](11);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](14);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](17);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.items)("form", ctx.form)("hasAdd",  true || 0)("hasEdit",  true || 0)("add", ctx.add.bind(ctx))("groupTemplate", _r0)("minHeight", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Entrega\nDemandante/Destinat\u00E1rio")("template", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Data In\u00EDcio\nData Fim")("template", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("template", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Meta\nRealizado")("template", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("template", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("onEdit", ctx.edit.bind(ctx))("options", ctx.options);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_7__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_8__.ColumnComponent, src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_9__.BadgeComponent, _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_10__.ProgressBarComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 21373:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-list-logs/plano-entrega-list-logs.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanoEntregaListLogsComponent: () => (/* binding */ PlanoEntregaListLogsComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_dao_change_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/change-dao.service */ 38958);
/* harmony import */ var src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/plano-entrega-dao.service */ 39190);
/* harmony import */ var src_app_models_change_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/change.model */ 60039);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/input/input-datetime/input-datetime.component */ 84495);
/* harmony import */ var _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/input/input-select/input-select.component */ 64603);
/* harmony import */ var _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/separator/separator.component */ 25560);
var _class;

















const _c0 = ["selectResponsaveis"];
function PlanoEntregaListLogsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Respons\u00E1vel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function PlanoEntregaListLogsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r14 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", row_r14.responsavel, " ");
  }
}
function PlanoEntregaListLogsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Criado em");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function PlanoEntregaListLogsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r16 = ctx.row;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r8.util.getDateTimeFormatted(row_r16.date_time));
  }
}
function PlanoEntregaListLogsComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 2)(1, "div", 17)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Atributos");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 18)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Valores");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Atuais");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 18)(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Valores");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Anteriores");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function PlanoEntregaListLogsComponent_ng_template_27_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dif_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](dif_r20[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r19.action == "EDIT" || ctx_r19.action == "ADD" ? dif_r20[1] : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r19.action == "EDIT" ? dif_r20[2] : ctx_r19.action == "ADD" ? "" : dif_r20[1]);
  }
}
function PlanoEntregaListLogsComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "separator", 19)(1, "table")(2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, PlanoEntregaListLogsComponent_ng_template_27_tr_3_Template, 7, 3, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r18 = ctx.row;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("collapse", "collapse")("collapsed", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r12.preparaDelta(row_r18));
  }
}
class PlanoEntregaListLogsComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_4__.PageListBase {
  constructor(injector, dao) {
    super(injector, src_app_models_change_model__WEBPACK_IMPORTED_MODULE_3__.Change, src_app_dao_change_dao_service__WEBPACK_IMPORTED_MODULE_1__.ChangeDaoService);
    this.injector = injector;
    this.responsaveis = [];
    this.planoId = "";
    this.action = "";
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      result.push(["table_name", "==", "planos_entregas"]);
      result.push(["row_id", "==", this.planoId]);
      if (form.responsavel_id?.length) {
        result.push(["user_id", "==", form.responsavel_id == "null" ? null : form.responsavel_id]);
      }
      ;
      if (form.data_inicio) {
        result.push(["date_time", ">=", form.data_inicio]);
      }
      ;
      if (form.data_fim) {
        result.push(["date_time", "<=", form.data_fim]);
      }
      ;
      if (form.tipo?.length) {
        result.push(["type", "==", form.tipo]);
      }
      ;
      return result;
    };
    /* Inicializações */
    this.planoEntregaDao = injector.get(src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_2__.PlanoEntregaDaoService);
    this.title = "Logs de Planos de Entregas";
    this.filter = this.fh.FormBuilder({
      responsavel_id: {
        default: ""
      },
      data_inicio: {
        default: ""
      },
      data_fim: {
        default: ""
      },
      tipo: {
        default: ""
      }
    });
    this.orderBy = [['id', 'desc']];
  }
  ngOnInit() {
    super.ngOnInit();
    this.planoId = this.urlParams?.get("id") || "";
    this.planoEntregaDao.getById(this.planoId).then(plano => this.planoEntrega = plano);
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.selectResponsaveis.loading = true;
    this.dao?.showResponsaveis().then(responsaveis => {
      this.responsaveis = responsaveis || [];
      this.selectResponsaveis.loading = false;
    });
  }
  filterClear(filter) {
    filter.controls.responsavel_id.setValue("");
    filter.controls.data_inicio.setValue("");
    filter.controls.data_fim.setValue("");
    filter.controls.tipo.setValue("");
    super.filterClear(filter);
  }
  preparaDelta(row) {
    this.action = row.type;
    let novoDelta = row.delta instanceof Array ? row.delta : Object.entries(row.delta);
    novoDelta.forEach(element => {
      if (element[1] instanceof Date) element[1] = new Date(element[1]).toUTCString();
      if (element.length > 2 && element[2] instanceof Date) element[2] = new Date(element[2]).toUTCString();
    });
    return novoDelta;
  }
}
_class = PlanoEntregaListLogsComponent;
_class.ɵfac = function PlanoEntregaListLogsComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_dao_change_dao_service__WEBPACK_IMPORTED_MODULE_1__.ChangeDaoService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["plano-entrega-list-logs"]],
  viewQuery: function PlanoEntregaListLogsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.selectResponsaveis = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]],
  decls: 31,
  vars: 29,
  consts: [[3, "dao", "hasEdit", "title", "orderBy", "groupBy", "join"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Respons\u00E1vel pelo registro", "controlName", "responsavel_id", 3, "control", "items"], ["selectResponsaveis", ""], ["datetime", "", "label", "In\u00EDcio", "controlName", "data_inicio", "labelInfo", "In\u00EDcio dos registros", 3, "size", "control"], ["datetime", "", "label", "Fim", "controlName", "data_fim", "labelInfo", "Fim dos registros", 3, "size", "control"], ["label", "Tipo", "icon", "bi bi-arrow-up-right-circle", "controlName", "tipo", "itemTodos", "Todos", "valueTodos", "", 3, "size", "control", "items"], [3, "titleTemplate", "template"], ["titleResponsavel", ""], ["columnResponsavel", ""], ["titleDataCriacao", ""], ["columnDataCriacao", ""], ["titleDiferenca", ""], ["columnDiferenca", ""], ["title", "Tipo de Opera\u00E7\u00E3o", "field", "type"], [3, "rows"], ["width", "150", 1, "col", "align-bottom"], ["width", "250", 1, "col"], ["title", "(ver detalhes)", 3, "collapse", "collapsed"], [4, "ngFor", "ngForOf"], ["width", "150"], ["width", "250"]],
  template: function PlanoEntregaListLogsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "grid", 0)(1, "span")(2, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "toolbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "filter", 1)(6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "input-select", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "input-datetime", 5)(11, "input-datetime", 6)(12, "input-select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "columns")(14, "column", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, PlanoEntregaListLogsComponent_ng_template_15_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, PlanoEntregaListLogsComponent_ng_template_17_Template, 2, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "column", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, PlanoEntregaListLogsComponent_ng_template_20_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, PlanoEntregaListLogsComponent_ng_template_22_Template, 2, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "column", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](25, PlanoEntregaListLogsComponent_ng_template_25_Template, 14, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](27, PlanoEntregaListLogsComponent_ng_template_27_Template, 4, 3, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "column", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](30, "pagination", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](16);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](18);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](21);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](23);
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](26);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dao", ctx.dao)("hasEdit", false)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((ctx.planoEntrega == null ? null : ctx.planoEntrega.numero) + " - " + (ctx.planoEntrega == null ? null : ctx.planoEntrega.nome));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.filter.controls.responsavel_id)("items", ctx.responsaveis);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 4)("control", ctx.filter.controls.data_inicio);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 4)("control", ctx.filter.controls.data_fim);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 4)("control", ctx.filter.controls.tipo)("items", ctx.lookup.TIPO_LOG_CHANGE);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("titleTemplate", _r1)("template", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("titleTemplate", _r5)("template", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("titleTemplate", _r9)("template", _r11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_5__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_6__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__.PaginationComponent, _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_10__.InputDatetimeComponent, _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_11__.InputSelectComponent, _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_12__.SeparatorComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 23183:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-list/plano-entrega-list.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanoEntregaListComponent: () => (/* binding */ PlanoEntregaListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_dao_cadeia_valor_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/cadeia-valor-dao.service */ 19520);
/* harmony import */ var src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/planejamento-dao.service */ 5458);
/* harmony import */ var src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/plano-entrega-dao.service */ 39190);
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ 81214);
/* harmony import */ var src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/plano-entrega.model */ 74795);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var _plano_entrega_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../plano-entrega.service */ 77447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ 32802);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
/* harmony import */ var _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/input/input-datetime/input-datetime.component */ 84495);
/* harmony import */ var _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../components/input/input-select/input-select.component */ 64603);
/* harmony import */ var _components_grid_order_order_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../components/grid/order/order.component */ 61915);
/* harmony import */ var _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../components/badge/badge.component */ 95489);
/* harmony import */ var _plano_entrega_list_entrega_plano_entrega_list_entrega_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../plano-entrega-list-entrega/plano-entrega-list-entrega.component */ 39285);
var _class;
























function PlanoEntregaListComponent_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "toolbar", 30)(1, "input-switch", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function PlanoEntregaListComponent_toolbar_1_Template_input_switch_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r21.onAgruparChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "input-switch", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function PlanoEntregaListComponent_toolbar_1_Template_input_switch_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r23.grid.reloadFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("buttons", ctx_r0.toolbarButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("size", 3)("control", ctx_r0.filter.controls.agrupar);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("size", 2)("control", ctx_r0.filter.controls.principais)("labelInfo", ctx_r0.lex.noun("Unidade", true) + " onde o " + ctx_r0.lex.noun("usuario") + " \u00E9 integrante, incluindo unidades superiores das geridas por ele");
  }
}
function PlanoEntregaListComponent_column_16_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", row_r28.entregas == null ? null : row_r28.entregas.length, "");
  }
}
function PlanoEntregaListComponent_column_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, PlanoEntregaListComponent_column_16_ng_template_1_span_0_Template, 3, 1, "span", 36);
  }
  if (rf & 2) {
    const row_r28 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", row_r28.entregas == null ? null : row_r28.entregas.length);
  }
}
function PlanoEntregaListComponent_column_16_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "plano-entrega-list-entrega", 39);
  }
  if (rf & 2) {
    const row_r31 = ctx.row;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("entity", row_r31)("cdRef", ctx_r27.cdRef);
  }
}
function PlanoEntregaListComponent_column_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "column", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PlanoEntregaListComponent_column_16_ng_template_1_Template, 1, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, PlanoEntregaListComponent_column_16_ng_template_3_Template, 1, 2, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](2);
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](4);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("align", "center")("hint", ctx_r4.lex.translate("Entrega"))("template", _r24)("expandTemplate", _r26);
  }
}
function PlanoEntregaListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "order", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "#ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r32 = ctx.header;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("header", header_r32);
  }
}
function PlanoEntregaListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r33 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("#", row_r33.numero, "");
  }
}
function PlanoEntregaListComponent_ng_template_23_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "badge", 45);
  }
  if (rf & 2) {
    const row_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().row;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("icon", ctx_r35.entityService.getIcon(ctx_r35.lex.translate("unidade")))("label", row_r34.unidade.sigla);
  }
}
function PlanoEntregaListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "br")(3, "badge", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PlanoEntregaListComponent_ng_template_23_badge_4_Template, 1, 2, "badge", 44);
  }
  if (rf & 2) {
    const row_r34 = ctx.row;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵstyleProp"]("max-width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](row_r34.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("icon", ctx_r10.entityService.getIcon("Programa"))("label", row_r34.programa.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r10.filter.controls.agrupar.value);
  }
}
function PlanoEntregaListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r37 = ctx.row;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r12.dao.getDateFormatted(row_r37.inicio), "");
  }
}
function PlanoEntregaListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r38 = ctx.row;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r14.dao.getDateFormatted(row_r38.fim), "");
  }
}
function PlanoEntregaListComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](0, " Planejamento Institucional");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " Cadeia de Valor ");
  }
}
function PlanoEntregaListComponent_ng_template_34_badge_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "badge", 47);
  }
  if (rf & 2) {
    const row_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().row;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("maxWidth", 300)("icon", ctx_r41.entityService.getIcon("Planejamento"))("label", row_r40.planejamento == null ? null : row_r40.planejamento.nome);
  }
}
function PlanoEntregaListComponent_ng_template_34_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "badge", 47);
  }
  if (rf & 2) {
    const row_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().row;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("maxWidth", 300)("icon", ctx_r42.entityService.getIcon("CadeiaValor"))("label", row_r40.cadeiaValor == null ? null : row_r40.cadeiaValor.nome);
  }
}
function PlanoEntregaListComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, PlanoEntregaListComponent_ng_template_34_badge_0_Template, 1, 3, "badge", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PlanoEntregaListComponent_ng_template_34_badge_1_Template, 1, 3, "badge", 46);
  }
  if (rf & 2) {
    const row_r40 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", row_r40.planejamento);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", row_r40.cadeiaValor);
  }
}
function PlanoEntregaListComponent_ng_template_37_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "badge", 50);
  }
}
function PlanoEntregaListComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "badge", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PlanoEntregaListComponent_ng_template_37_badge_1_Template, 1, 0, "badge", 49);
  }
  if (rf & 2) {
    const row_r45 = ctx.row;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("color", ctx_r20.lookup.getColor(ctx_r20.lookup.PLANO_ENTREGA_STATUS, row_r45.statusAtual.codigo))("icon", ctx_r20.lookup.getIcon(ctx_r20.lookup.PLANO_ENTREGA_STATUS, row_r45.statusAtual.codigo))("label", ctx_r20.lookup.getValue(ctx_r20.lookup.PLANO_ENTREGA_STATUS, row_r45.statusAtual.codigo));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", row_r45.data_cancelamento);
  }
}
class PlanoEntregaListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_6__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_5__.PlanoEntrega, src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_3__.PlanoEntregaDaoService);
    this.injector = injector;
    this.showFilter = true;
    this.habilitarAdesaoToolbar = false;
    this.toolbarButtons = [];
    this.botoes = [];
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      /*
          (RI_PENT_4) A consulta do grid retornará inicialmente os principais Planos de Entrega do usuário logado (a opção "principais" já vem marcada), que são:
          - os válidos das unidades onde ele possui lotação (REFACTORING: ou seja, ele é 'lotado' ou 'colaborador'), e
          - se ele for gestor, os ativos das unidades-pai de onde ele é gestor;
      */
      if (this.filter?.controls.principais.value) {
        let w1 = ["unidade_id", "in", this.auth.unidades?.map(u => u.id)];
        let w2 = ["unidade_id", "in", this.auth.unidades?.map(u => u.unidade?.id)];
        if (this.auth.isGestorAlgumaLotacao()) result.push(["or", w1, w2]);else result.push(w1);
        if (form.nome?.length) {
          result.push(["nome", "like", "%" + form.nome + "%"]);
        }
        if (form.inicio) {
          result.push(["inicio", ">=", form.inicio]);
        }
        if (form.fim) {
          result.push(["fim", "<=", form.fim]);
        }
        if (form.unidade_id) {
          result.push(["unidade_id", "==", form.unidade_id]);
        }
        if (form.planejamento_id) {
          result.push(["planejamento_id", "==", form.planejamento_id]);
        }
        if (form.cadeia_valor_id) {
          result.push(["cadeia_valor_id", "==", form.cadeia_valor_id]);
        }
        if (form.status) {
          result.push(["status", "==", form.status]);
        }
      } else {
        if (form.nome?.length) {
          result.push(["nome", "like", "%" + form.nome + "%"]);
        }
        if (form.inicio) {
          result.push(["inicio", ">=", form.inicio]);
        }
        if (form.fim) {
          result.push(["fim", "<=", form.fim]);
        }
        if (form.unidade_id) {
          result.push(["unidade_id", "==", form.unidade_id]);
        }
        if (form.planejamento_id) {
          result.push(["planejamento_id", "==", form.planejamento_id]);
        }
        if (form.cadeia_valor_id) {
          result.push(["cadeia_valor_id", "==", form.cadeia_valor_id]);
        }
        if (form.status) {
          result.push(["status", "==", form.status]);
        }
      }
      //  (RI_PENT_5) Por padrão, os planos de entregas retornados na listagem do grid são os que não foram arquivados nem cancelados.
      //  O não-arquivamento é tratado abaixo. A condição de não-cancelado é tratada no back-end.
      result.push(["data_arquivamento", "==", null]);
      return result;
    };
    this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_4__.UnidadeDaoService);
    this.planejamentoDao = injector.get(src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_2__.PlanejamentoDaoService);
    this.cadeiaValorDao = injector.get(src_app_dao_cadeia_valor_dao_service__WEBPACK_IMPORTED_MODULE_1__.CadeiaValorDaoService);
    this.planoEntregaService = injector.get(_plano_entrega_service__WEBPACK_IMPORTED_MODULE_7__.PlanoEntregaService);
    this.unidadeSelecionada = this.auth.unidade;
    /* Inicializações */
    this.title = this.lex.translate('Planos de Entregas');
    this.filter = this.fh.FormBuilder({
      agrupar: {
        default: true
      },
      principais: {
        default: true
      },
      nome: {
        default: ''
      },
      inicio: {
        default: ''
      },
      fim: {
        default: ''
      },
      status: {
        default: ''
      },
      unidade_id: {
        default: null
      },
      planejamento_id: {
        default: null
      },
      cadeia_valor_id: {
        default: null
      }
    });
    this.join = ['planejamento:id,nome', 'programa:id,nome', 'cadeia_valor:id,nome', 'unidade:id,sigla,path', 'entregas.entrega', 'entregas.unidade', 'unidade.gestor:id', 'unidade.gestor_substituto:id'];
    this.groupBy = [{
      field: "unidade.sigla",
      label: "Unidade"
    }];
    this.BOTAO_ADERIR_OPTION = {
      label: "Aderir",
      icon: this.entityService.getIcon("Adesao"),
      onClick: (() => {
        this.go.navigate({
          route: ['gestao', 'plano-entrega', 'adesao']
        }, {
          metadata: {
            planoEntrega: this.linha
          },
          modalClose: modalResult => {
            this.refresh();
          }
        });
      }).bind(this)
    };
    this.BOTAO_ADERIR_TOOLBAR = {
      label: "Aderir",
      disabled: !this.habilitarAdesaoToolbar,
      icon: this.entityService.getIcon("Adesao"),
      onClick: (() => {
        this.go.navigate({
          route: ['gestao', 'plano-entrega', 'adesao']
        }, {
          modalClose: modalResult => {
            this.refresh();
          }
        });
      }).bind(this)
    };
    this.BOTAO_ALTERAR = {
      label: "Alterar",
      icon: "bi bi-pencil-square",
      color: "btn-outline-info",
      onClick: planoEntrega => this.go.navigate({
        route: ['gestao', 'plano-entrega', planoEntrega.id, 'edit']
      }, this.modalRefreshId(planoEntrega))
    };
    this.BOTAO_ARQUIVAR = {
      label: "Arquivar",
      icon: "bi bi-inboxes",
      onClick: this.arquivar.bind(this)
    };
    this.BOTAO_AVALIAR = {
      label: "Avaliar",
      icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "AVALIADO"),
      color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "AVALIADO"),
      onClick: this.avaliar.bind(this)
    };
    this.BOTAO_CANCELAR_AVALIACAO = {
      label: "Cancelar avaliação",
      icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "CONCLUIDO"),
      color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "CONCLUIDO"),
      onClick: this.cancelarAvaliacao.bind(this)
    };
    this.BOTAO_CANCELAR_CONCLUSAO = {
      label: "Cancelar conclusão",
      icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "ATIVO"),
      color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "ATIVO"),
      onClick: this.cancelarConclusao.bind(this)
    };
    this.BOTAO_CANCELAR_HOMOLOGACAO = {
      label: "Cancelar homologação",
      icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "HOMOLOGANDO"),
      color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "HOMOLOGANDO"),
      onClick: this.cancelarHomologacao.bind(this)
    };
    this.BOTAO_CONCLUIR = {
      label: "Concluir",
      id: "CONCLUIDO",
      icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "CONCLUIDO"),
      color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "CONCLUIDO"),
      onClick: this.concluir.bind(this)
    };
    this.BOTAO_CONSULTAR = {
      label: "Informações",
      icon: "bi bi-info-circle",
      onClick: planoEntrega => this.go.navigate({
        route: ['gestao', 'plano-entrega', planoEntrega.id, 'consult']
      }, {
        modal: true
      })
    };
    this.BOTAO_DESARQUIVAR = {
      label: "Desarquivar",
      icon: "bi bi-reply",
      onClick: this.desarquivar.bind(this)
    };
    this.BOTAO_EXCLUIR = {
      label: "Excluir",
      icon: "bi bi-trash",
      onClick: this.delete.bind(this)
    };
    this.BOTAO_HOMOLOGAR = {
      label: "Homologar",
      icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "ATIVO"),
      color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "ATIVO"),
      onClick: this.homologar.bind(this)
    };
    this.BOTAO_LIBERAR_HOMOLOGACAO = {
      label: "Liberar para homologação",
      icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "HOMOLOGANDO"),
      color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "HOMOLOGANDO"),
      onClick: this.liberarHomologacao.bind(this)
    };
    this.BOTAO_LOGS = {
      label: "Logs",
      icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "INCLUIDO"),
      color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "INCLUIDO"),
      onClick: planoEntrega => this.go.navigate({
        route: ['gestao', 'plano-entrega', planoEntrega.id, 'logs']
      })
    };
    this.BOTAO_REATIVAR = {
      label: "Reativar",
      icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "ATIVO"),
      color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "ATIVO"),
      onClick: this.reativar.bind(this)
    };
    this.BOTAO_RETIRAR_HOMOLOGACAO = {
      label: "Retirar de homologação",
      icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "INCLUIDO"),
      color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "INCLUIDO"),
      onClick: this.retirarHomologacao.bind(this)
    };
    this.BOTAO_SUSPENDER = {
      label: "Suspender",
      id: "PAUSADO",
      icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "SUSPENSO"),
      color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "SUSPENSO"),
      onClick: this.suspender.bind(this)
    };
    this.botoes = [this.BOTAO_ADERIR_OPTION, this.BOTAO_ADERIR_TOOLBAR, this.BOTAO_ALTERAR, this.BOTAO_ARQUIVAR, this.BOTAO_AVALIAR, this.BOTAO_CANCELAR_AVALIACAO, this.BOTAO_CANCELAR_CONCLUSAO, this.BOTAO_CANCELAR_HOMOLOGACAO, this.BOTAO_CONCLUIR, this.BOTAO_CONSULTAR, this.BOTAO_DESARQUIVAR, this.BOTAO_EXCLUIR, this.BOTAO_HOMOLOGAR, this.BOTAO_LIBERAR_HOMOLOGACAO, this.BOTAO_LOGS, this.BOTAO_REATIVAR, this.BOTAO_RETIRAR_HOMOLOGACAO, this.BOTAO_SUSPENDER];
  }
  ngOnInit() {
    super.ngOnInit();
    this.showFilter = typeof this.queryParams?.showFilter != "undefined" ? this.queryParams.showFilter == "true" : true;
    this.selectable = this.metadata?.selectable || this.selectable;
    this.checaBotaoAderirToolbar();
    this.toolbarButtons.push(this.BOTAO_ADERIR_TOOLBAR);
  }
  ngAfterContentChecked() {
    if (this.auth.unidade != this.unidadeSelecionada) {
      this.unidadeSelecionada = this.auth.unidade;
      this.checaBotaoAderirToolbar();
      this.cdRef.detectChanges();
    }
  }
  checaBotaoAderirToolbar() {
    let planos_ativos_unidade_pai = this.planosEntregasAtivosUnidadePai().map(x => x.id);
    let planos_superiores_vinculados_pela_unidade_selecionada = this.planosEntregasAtivosUnidadeSelecionada().map(x => x.plano_entrega_id).filter(x => x != null);
    let condition1 = this.auth.isGestorUnidade() || this.auth.isGestorUnidade(this.auth.unidade?.unidade_pai_id) || this.auth.isLotacaoPrincipal(this.auth.unidade) && this.auth.hasPermissionTo("MOD_PENT_ADERIR");
    let condition2 = !!planos_ativos_unidade_pai.filter(x => !planos_superiores_vinculados_pela_unidade_selecionada.includes(x)).length;
    this.habilitarAdesaoToolbar = condition1 && condition2;
    this.BOTAO_ADERIR_TOOLBAR.disabled = !this.habilitarAdesaoToolbar;
    /*  (RI_PENT_1)
        O botão Aderir, na toolbar, deverá ser exibido sempre, mas para ficar habilitado:
        1. o usuário logado precisa ser gestor da unidade selecionada ou da sua unidade-pai, ou uma destas ser sua unidade de lotação principal e ele
        possuir a capacidade "MOD_PENT_ADERIR" (RN_PENT_2_4); e
        2. a unidade-pai da unidade selecionada precisa possuir plano de entrega com o status ATIVO, que já não tenha sido vinculado pela unidade selecionada;
    */
  }

  planosEntregasAtivosUnidadePai() {
    return this.auth.unidade?.unidade?.planos_entrega?.filter(x => this.planoEntregaService.isAtivo(x)) || [];
  }
  planosEntregasAtivosUnidadeSelecionada() {
    return this.auth?.unidade?.planos_entrega?.filter(x => this.planoEntregaService.isAtivo(x)) || [];
  }
  filterClear(filter) {
    filter.controls.nome.setValue("");
    filter.controls.inicio.setValue(null);
    filter.controls.fim.setValue(null);
    filter.controls.unidade_id.setValue(null);
    filter.controls.planejamento_id.setValue(null);
    filter.controls.cadeia_valor_id.setValue(null);
    filter.controls.status.setValue(null);
    super.filterClear(filter);
  }
  onAgruparChange(event) {
    const agrupar = this.filter.controls.agrupar.value;
    if (agrupar && !this.groupBy?.length || !agrupar && this.groupBy?.length) {
      this.groupBy = agrupar ? [{
        field: "unidade.sigla",
        label: "Unidade"
      }] : [];
      this.grid.reloadFilter();
    }
  }
  dynamicButtons(row) {
    let result = [];
    let planoEntrega = row;
    switch (this.situacaoPlano(planoEntrega)) {
      case 'INCLUIDO':
        if (this.botaoAtendeCondicoes(this.BOTAO_LIBERAR_HOMOLOGACAO, row)) result.push(this.BOTAO_LIBERAR_HOMOLOGACAO);else result.push(this.BOTAO_CONSULTAR);
        break;
      case 'HOMOLOGANDO':
        if (this.botaoAtendeCondicoes(this.BOTAO_HOMOLOGAR, row)) result.push(this.BOTAO_HOMOLOGAR);else result.push(this.BOTAO_CONSULTAR);
        break;
      case 'ATIVO':
        if (this.botaoAtendeCondicoes(this.BOTAO_CONCLUIR, row)) result.push(this.BOTAO_CONCLUIR);else result.push(this.BOTAO_CONSULTAR);
        break;
      case 'CONCLUIDO':
        if (this.botaoAtendeCondicoes(this.BOTAO_AVALIAR, row)) result.push(this.BOTAO_AVALIAR);else result.push(this.BOTAO_CONSULTAR);
        break;
      case 'SUSPENSO':
        if (this.botaoAtendeCondicoes(this.BOTAO_REATIVAR, row)) result.push(this.BOTAO_REATIVAR);else result.push(this.BOTAO_CONSULTAR);
        break;
      case 'AVALIADO':
        if (this.botaoAtendeCondicoes(this.BOTAO_CANCELAR_AVALIACAO, row)) result.push(this.BOTAO_CANCELAR_AVALIACAO);else result.push(this.BOTAO_CONSULTAR);
        break;
    }
    return result;
  }
  dynamicOptions(row) {
    let result = [];
    this.linha = row;
    this.botoes.forEach(botao => {
      if (this.botaoAtendeCondicoes(botao, row)) result.push(botao);
    });
    return result;
  }
  botaoAtendeCondicoes(botao, planoEntrega) {
    switch (botao) {
      case this.BOTAO_ADERIR_OPTION:
        /*
          (RI_PENT_2) O botão Aderir, nas linhas do grid, deverá aparecer num plano somente se:
          - o plano estiver com o status Ativo; e
          - a unidade do plano for a unidade-pai da unidade selecionada pelo usuário; e
          - se o usuário for Gestor da unidade selecionada, ou ela for sua lotação principal e ele possuir a capacidade "MOD_PENT_ADERIR" ; e
          - se a unidade selecionada não possuir plano de entrega Ativo no mesmo período do plano em questão;
        */
        return this.situacaoPlano(planoEntrega) == 'ATIVO' && planoEntrega.unidade_id == this.auth.unidade?.unidade_pai_id && (this.auth.isGestorUnidade() || this.auth.isLotacaoPrincipal(this.auth.unidade) && this.auth.hasPermissionTo("MOD_PENT_ADERIR")) && this.planosEntregasAtivosUnidadeSelecionada().filter(x => this.util.intersection([{
          start: x.inicio,
          end: x.fim
        }, {
          start: planoEntrega.inicio,
          end: planoEntrega.fim
        }])).length == 0;
      case this.BOTAO_ALTERAR:
        /*
          (RN_PENT_4_2) Para ALTERAR um plano de entregas:
          - o plano precisa estar com o status INCLUIDO ou HOMOLOGANDO, e o usuário logado precisa ser gestor da unidade do plano, ou esta ser sua unidade de lotação principal e ele possuir a capacidade "MOD_PENT_EDT"; ou
          - o plano precisa ser válido, o usuário logado precisa possuir a capacidade "MOD_PENT_EDT_FLH", e ser gestor da unidade-pai da unidade do plano ou possuir a atribuição de HOMOLOGADOR DE PLANO DE ENTREGA para a unidade-pai da unidade do plano; (RN_PENT_1_3) ou
          - o plano precisa estar com o status ATIVO, a unidade do plano precisa ser a unidade de lotação principal do usuário logado, e ele possuir a capacidade "MOD_PENT_EDT_ATV_HOMOL" ou "MOD_PENT_EDT_ATV_ATV";
         */
        let b_alt1 = ['INCLUIDO', 'HOMOLOGANDO'].includes(this.situacaoPlano(planoEntrega)) && (this.auth.isGestorUnidade(planoEntrega.unidade) || this.auth.isLotacaoPrincipal(planoEntrega.unidade) && this.auth.hasPermissionTo("MOD_PENT_EDT"));
        let b_alt2 = this.planoEntregaService.isValido(planoEntrega) && this.auth.hasPermissionTo("MOD_PENT_EDT_FLH") && (this.auth.isGestorUnidade(planoEntrega.unidade?.unidade_pai_id) || this.auth.isIntegrante('HOMOLOGADOR_PLANO_ENTREGA', planoEntrega.unidade.unidade_pai_id));
        let b_alt3 = this.situacaoPlano(planoEntrega) == 'ATIVO' && this.auth.isLotacaoPrincipal(planoEntrega.unidade) && this.auth.hasPermissionTo(["MOD_PENT_EDT_ATV_HOMOL", "MOD_PENT_EDT_ATV_ATV"]);
        return b_alt1 || b_alt2 || b_alt3;
      case this.BOTAO_ARQUIVAR:
        /*
          (RN_PENT_4_3) Para ARQUIVAR um plano de entregas:
          - o plano precisa estar com o status AVALIADO e o usuário logado precisa ser gestor da unidade do plano, ou esta ser sua unidade de lotação principal e ele possuir a capacidade "MOD_PENT_ARQ";
        */
        return this.situacaoPlano(planoEntrega) == 'AVALIADO' && (this.auth.isGestorUnidade(planoEntrega.unidade) || this.auth.isLotacaoPrincipal(planoEntrega.unidade) && this.auth.hasPermissionTo("MOD_PENT_ARQ"));
      case this.BOTAO_AVALIAR:
        /*
          (RN_PENT_4_4) Para AVALIAR um plano de entregas:
          - o plano precisa estar com o status CONCLUIDO e o usuário logado precisa ser gestor da unidade-pai da unidade do plano, ou possuir a atribuição de AVALIADOR DE PLANOS DE ENTREGAS para esta unidade; ou
          - o plano precisa estar com o status CONCLUIDO, o usuário logado precisa ser gestor de alguma unidade da linha hierárquica ascendente da unidade do plano, e possuir a capacidade "MOD_PENT_AVAL_SUBORD";
        */
        let b_av1 = this.situacaoPlano(planoEntrega) == 'CONCLUIDO' && (this.auth.isGestorUnidade(planoEntrega.unidade?.unidade_pai_id) || this.auth.isIntegrante('AVALIADOR_PLANO_ENTREGA', planoEntrega.unidade.unidade_pai_id));
        let b_av2 = this.situacaoPlano(planoEntrega) == 'CONCLUIDO' && this.auth.isGestorLinhaAscendente(planoEntrega.unidade) && this.auth.hasPermissionTo("MOD_PENT_AVAL_SUBORD");
        return b_av1 || b_av2;
      case this.BOTAO_CANCELAR_AVALIACAO:
        /*
          (RN_PENT_4_5) Para CANCELAR a AVALIAÇÃO de um plano de entregas:
          - o plano precisa estar com o status AVALIADO e o usuário logado precisa ser gestor da unidade-pai da unidade do plano, ou possuir a atribuição de AVALIADOR DE PLANOS DE ENTREGAS para esta unidade;
        */
        return this.situacaoPlano(planoEntrega) == 'AVALIADO' && (this.auth.isGestorUnidade(planoEntrega.unidade?.unidade_pai_id) || this.auth.isIntegrante('AVALIADOR_PLANO_ENTREGA', planoEntrega.unidade.unidade_pai_id));
      case this.BOTAO_CANCELAR_CONCLUSAO:
        /*
          (RN_PENT_4_6) Para CANCELAR a CONCLUSÃO de um plano de entregas:
          - o plano precisa estar com o status CONCLUIDO e o usuário logado precisa ser gestor da unidade do plano, ou esta ser sua unidade de lotação principal e ele possuir a capacidade "MOD_PENT_CANC_CONCL";
        */
        return this.situacaoPlano(planoEntrega) == 'CONCLUIDO' && (this.auth.isGestorUnidade(planoEntrega.unidade) || this.auth.isLotacaoPrincipal(planoEntrega.unidade) && this.auth.hasPermissionTo("MOD_PENT_CANC_CONCL"));
      case this.BOTAO_CANCELAR_HOMOLOGACAO:
        /*
          (RN_PENT_4_7) Para CANCELAR a HOMOLOGAÇÃO de um plano de entregas:
          - o plano precisa estar com o status ATIVO e o usuário logado precisa ser gestor da unidade-pai da unidade do plano, ou possuir a atribuição de HOMOLOGADOR DE PLANOS DE ENTREGAS para a unidade-pai da unidade do plano;
        */
        return this.situacaoPlano(planoEntrega) == 'ATIVO' && (this.auth.isGestorUnidade(planoEntrega.unidade?.unidade_pai_id) || this.auth.isIntegrante('HOMOLOGADOR_PLANO_ENTREGA', planoEntrega.unidade.unidade_pai_id));
      case this.BOTAO_CONCLUIR:
        /*
          (RN_PENT_4_8) Para CONCLUIR um plano de entregas:
          - o plano precisa estar com o status ATIVO e o usuário logado precisa ser gestor da unidade do plano, ou esta ser sua unidade de lotação principal e ele possuir a capacidade "MOD_PENT_CONCLUIR";
        */
        return this.situacaoPlano(planoEntrega) == 'ATIVO' && (this.auth.isGestorUnidade(planoEntrega.unidade) || this.auth.isLotacaoPrincipal(planoEntrega.unidade) && this.auth.hasPermissionTo("MOD_PENT_CONCLUIR"));
      case this.BOTAO_CONSULTAR:
        /*
          (RN_PENT_4_9) CONSULTAR
          - todos os participantes podem visualizar todos os planos de entrega;
        */
        return true;
      case this.BOTAO_DESARQUIVAR:
        /*
                 */
        break;
      case this.BOTAO_EXCLUIR:
        /*
          (RN_PENT_4_10) Para EXCLUIR um plano de entregas:
          - o plano precisa estar com o status INCLUIDO ou HOMOLOGANDO; e
          - o usuário logado precisa ser gestor da unidade do plano, ou esta ser sua unidade de lotação principal e ele possuir a capacidade "MOD_PENT_EXCL";
          - se o plano não atender às condições acima, o usuário deve ser informado das razões pelas quais o plano não foi excluído;
        */
        return ['INCLUIDO', 'HOMOLOGANDO'].includes(this.situacaoPlano(planoEntrega)) && (this.auth.isGestorUnidade(planoEntrega.unidade) || this.auth.isLotacaoPrincipal(planoEntrega.unidade) && this.auth.hasPermissionTo("MOD_PENT_EXCL"));
        ;
      case this.BOTAO_HOMOLOGAR:
        /*
          (RN_PENT_4_11) Para HOMOLOGAR um plano de entregas:
          - o plano precisa estar com o status HOMOLOGANDO e o usuário logado ser gestor da unidade-pai da unidade do plano, ou possuir a atribuição de HOMOLOGADOR DE PLANOS DE ENTREGAS para a unidade-pai; (RN_PENT_1_3)(RN_PENT_3_2)
        */
        return this.situacaoPlano(planoEntrega) == 'HOMOLOGANDO' && (this.auth.isGestorUnidade(planoEntrega.unidade?.unidade_pai_id) || this.auth.isIntegrante('HOMOLOGADOR_PLANO_ENTREGA', planoEntrega.unidade.unidade_pai_id));
      case this.BOTAO_LIBERAR_HOMOLOGACAO:
        /*
          (RN_PENT_4_13) Para LIBERAR PARA HOMOLOGAÇÃO um plano de entregas:
          - o plano precisa estar com o status INCLUIDO e o usuário logado precisa ser gestor da unidade do plano;
        */
        return this.situacaoPlano(planoEntrega) == 'INCLUIDO' && this.auth.isGestorUnidade(planoEntrega.unidade);
      case this.BOTAO_LOGS:
        /*
        
        */
        return this.auth.isGestorUnidade(planoEntrega.unidade) && this.auth.hasPermissionTo("MOD_PENT_AVAL_SUBORD");
      case this.BOTAO_REATIVAR:
        /*
          (RN_PENT_4_15) Para REATIVAR um plano de entregas:
          - o plano precisa estar com o status SUSPENSO e o usuário logado precisa ser gestor da unidade do plano, ou ser gestor de alguma unidade da linha hierarquica ascendente da unidade do plano;
        */
        return this.situacaoPlano(planoEntrega) == 'SUSPENSO' && (this.auth.isGestorUnidade(planoEntrega.unidade) || this.auth.isGestorLinhaAscendente(planoEntrega.unidade));
      case this.BOTAO_RETIRAR_HOMOLOGACAO:
        /*
          (RN_PENT_4_14) Para RETIRAR DE HOMOLOGAÇÃO um plano de entregas:
          - o plano precisa estar com o status HOMOLOGANDO, e o usuário logado precisa ser gestor da unidade do plano;
        */
        return this.situacaoPlano(planoEntrega) == 'HOMOLOGANDO' && this.auth.isGestorUnidade(planoEntrega.unidade);
      case this.BOTAO_SUSPENDER:
        /*
          (RN_PENT_4_16) Para SUSPENDER um plano de entregas:
          - o plano precisa estar com o status ATIVO e o usuário logado precisa ser gestor da unidade do plano, ou ser gestor de alguma unidade da linha hierarquica ascendente da unidade do plano;
        */
        return this.situacaoPlano(planoEntrega) == 'ATIVO' && (this.auth.isGestorUnidade(planoEntrega.unidade) || this.auth.isGestorLinhaAscendente(planoEntrega.unidade));
    }
    return false;
  }
  arquivar(planoEntrega) {
    this.dialog.confirm("Arquivar?", "Deseja realmente arquivar o Plano de Entregas?").then(confirm => {
      if (confirm) {
        this.dao.arquivar(planoEntrega.id, true).then(() => {
          if (this.filter?.controls.arquivadas?.value) {
            this.grid.query.refreshId(planoEntrega.id);
          } else {
            (this.grid?.query || this.query).removeId(planoEntrega.id);
          }
        }).catch(error => this.dialog.alert("Erro", "Erro ao arquivar o Plano de Entregas: " + error?.message ? error?.message : 0));
      }
    });
  }
  avaliar(planoEntrega) {
    const self = this;
    this.dao.avaliar(planoEntrega.id).then(function () {
      (self.grid?.query || self.query).refreshId(planoEntrega.id);
      self.dialog.alert("Sucesso", "Avaliado com sucesso!");
    }).catch(function (error) {
      self.dialog.alert("Erro", "Erro ao avaliar: " + error?.message ? error?.message : 0);
    });
    this.auth.selecionaUnidade(this.auth.unidade.id);
    this.checaBotaoAderirToolbar();
  }
  cancelarAvaliacao(planoEntrega) {
    const self = this;
    this.dialog.confirm("Cancelar avaliacao ?", "Deseja realmente cancelar a avaliação?").then(confirm => {
      if (confirm) {
        this.dao.cancelarAvaliacao(planoEntrega.id).then(function () {
          (self.grid?.query || self.query).refreshId(planoEntrega.id);
          self.dialog.alert("Sucesso", "Cancelado com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao cancelar avaliacao: " + error?.message ? error?.message : 0);
        });
      }
    });
    this.auth.selecionaUnidade(this.auth.unidade.id);
    this.checaBotaoAderirToolbar();
  }
  cancelarConclusao(planoEntrega) {
    const self = this;
    this.dialog.confirm("Cancelar conclusão ?", "Deseja realmente cancelar a conclusão?").then(confirm => {
      if (confirm) {
        this.dao.cancelarConclusao(planoEntrega.id).then(function () {
          (self.grid?.query || self.query).refreshId(planoEntrega.id);
          self.dialog.alert("Sucesso", "Cancelado com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao cancelar conclusão: " + error?.message ? error?.message : 0);
        });
      }
    });
    this.auth.selecionaUnidade(this.auth.unidade.id);
    this.checaBotaoAderirToolbar();
  }
  cancelarHomologacao(planoEntrega) {
    const self = this;
    this.dialog.confirm("Cancelar homologacao ?", "Deseja realmente cancelar a homologacao?").then(confirm => {
      if (confirm) {
        this.dao.cancelarHomologacao(planoEntrega.id).then(function () {
          (self.grid?.query || self.query).refreshId(planoEntrega.id);
          self.dialog.alert("Sucesso", "Cancelado com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao cancelar a homologação: " + error?.message ? error?.message : 0);
        });
      }
    });
    this.auth.selecionaUnidade(this.auth.unidade.id);
    this.checaBotaoAderirToolbar();
  }
  concluir(planoEntrega) {
    const self = this;
    this.dialog.confirm("Concluir ?", "Deseja realmente concluir este Plano de Entregas?").then(confirm => {
      if (confirm) {
        this.dao.concluir(planoEntrega.id).then(function () {
          (self.grid?.query || self.query).refreshId(planoEntrega.id);
          self.dialog.alert("Sucesso", "Concluído com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao concluir: " + error?.message ? error?.message : 0);
        });
      }
    });
    this.auth.selecionaUnidade(this.auth.unidade.id);
    this.checaBotaoAderirToolbar();
  }
  desarquivar(planoEntrega) {
    this.dialog.confirm("Desarquivar ?", "Deseja realmente desarquivar o Plano de Entregas?").then(confirm => {
      if (confirm) {
        this.dao.arquivar(planoEntrega.id, false).then(() => {
          this.grid.query.refreshId(planoEntrega.id);
        }).catch(error => this.dialog.alert("Erro", "Erro ao desarquivar o Plano de Entregas: " + error?.message ? error?.message : 0));
      }
    });
    this.auth.selecionaUnidade(this.auth.unidade.id);
    this.checaBotaoAderirToolbar();
  }
  homologar(planoEntrega) {
    const self = this;
    this.dialog.confirm("Homologar ?", "Deseja realmente homologar este Plano de Entregas?").then(confirm => {
      if (confirm) {
        this.dao.homologar(planoEntrega.id).then(function () {
          (self.grid?.query || self.query).refreshId(planoEntrega.id);
          self.dialog.alert("Sucesso", "Homologado com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao homologar: " + error?.message ? error?.message : 0);
        });
        this.auth.selecionaUnidade(this.auth.unidade.id);
        this.checaBotaoAderirToolbar();
      }
    });
  }
  liberarHomologacao(planoEntrega) {
    const self = this;
    this.dialog.confirm("Liberar para homologação ?", "Deseja realmente liberar para a homologação?").then(confirm => {
      if (confirm) {
        this.dao.liberarHomologacao(planoEntrega.id).then(function () {
          (self.grid?.query || self.query).refreshId(planoEntrega.id);
          self.dialog.alert("Sucesso", "Liberado com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao liberar para homologação: " + error?.message ? error?.message : 0);
        });
      }
    });
    this.auth.selecionaUnidade(this.auth.unidade.id);
    this.checaBotaoAderirToolbar();
  }
  reativar(planoEntrega) {
    const self = this;
    this.dialog.confirm("Reativar ?", "Deseja realmente reativar este Plano de Entregas?").then(confirm => {
      if (confirm) {
        this.dao.reativar(planoEntrega.id).then(function () {
          (self.grid?.query || self.query).refreshId(planoEntrega.id);
          self.dialog.alert("Sucesso", "Reativado com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao reativar: " + error?.message ? error?.message : 0);
        });
      }
    });
    this.auth.selecionaUnidade(this.auth.unidade.id);
    this.checaBotaoAderirToolbar();
  }
  retirarHomologacao(planoEntrega) {
    const self = this;
    this.dialog.confirm("Retirar da homologação ?", "Deseja realmente retirar da homologação?").then(confirm => {
      if (confirm) {
        this.dao.retirarHomologacao(planoEntrega.id).then(function () {
          (self.grid?.query || self.query).refreshId(planoEntrega.id);
          self.dialog.alert("Sucesso", "Retirado com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao retirar da homologação: " + error?.message ? error?.message : 0);
        });
      }
    });
    this.auth.selecionaUnidade(this.auth.unidade.id);
    this.checaBotaoAderirToolbar();
  }
  suspender(planoEntrega) {
    const self = this;
    this.dialog.confirm("Suspender ?", "Deseja realmente suspender este Plano de Entregas?").then(confirm => {
      if (confirm) {
        this.dao.suspender(planoEntrega.id).then(function () {
          (self.grid?.query || self.query).refreshId(planoEntrega.id);
          self.dialog.alert("Sucesso", "Suspenso com sucesso!");
        }).catch(function (error) {
          self.dialog.alert("Erro", "Erro ao suspender: " + error?.message ? error?.message : 0);
        });
      }
    });
    this.auth.selecionaUnidade(this.auth.unidade.id);
    this.checaBotaoAderirToolbar();
  }
  situacaoPlano(planoEntrega) {
    if (planoEntrega.deleted_at) return "EXCLUIDO";else if (planoEntrega.data_cancelamento) return "CANCELADO";else if (planoEntrega.data_arquivamento) return "ARQUIVADO";else return planoEntrega.statusAtual.codigo;
  }
}
_class = PlanoEntregaListComponent;
_class.ɵfac = function PlanoEntregaListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["plano-entrega-list"]],
  viewQuery: function PlanoEntregaListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵInheritDefinitionFeature"]],
  decls: 41,
  vars: 47,
  consts: [[3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [3, "buttons", 4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed", "visible"], [1, "row"], ["label", "Nome", "controlName", "nome", 3, "size", "control", "placeholder"], ["controlName", "unidade_id", 3, "size", "dao"], ["unidade", ""], ["label", "Status", "controlName", "status", "itemTodos", "- Todos -", 3, "size", "items", "valueTodos"], ["controlName", "planejamento_id", 3, "size", "dao"], ["planejamento", ""], ["controlName", "cadeia_valor_id", 3, "size", "dao"], ["cadeiaValor", ""], ["date", "", "label", "In\u00EDcio", "controlName", "inicio", 3, "size", "control", "labelInfo"], ["date", "", "label", "Fim", "controlName", "fim", 3, "size", "control", "labelInfo"], ["type", "expand", "icon", "bi bi-list-check", 3, "align", "hint", "template", "expandTemplate", 4, "ngIf"], [3, "titleTemplate", "template"], ["titleIdNumeroStatus", ""], ["columnNumero", ""], ["title", "Nome/Unidade", "orderBy", "nome", 3, "template"], ["columnNome", ""], ["title", "In\u00EDcio", "orderBy", "inicio", 3, "template"], ["columnInicio", ""], ["title", "Fim", "orderBy", "fim", 3, "template"], ["columnFim", ""], ["titlePlanoCadeia", ""], ["columnPlanoCadeia", ""], ["title", "Status", 3, "template"], ["columnStatus", ""], ["type", "options", 3, "dynamicOptions", "dynamicButtons"], [3, "rows"], [3, "buttons"], ["labelPosition", "left", "label", "Agrupar por Un.", "controlName", "agrupar", 3, "size", "control", "change"], ["labelPosition", "left", "label", "Principais", "controlName", "principais", 3, "size", "control", "labelInfo", "change"], ["type", "expand", "icon", "bi bi-list-check", 3, "align", "hint", "template", "expandTemplate"], ["columnEntregas", ""], ["columnExpandedEntregas", ""], ["class", "badge rounded-pill bg-light text-dark", 4, "ngIf"], [1, "badge", "rounded-pill", "bg-light", "text-dark"], [1, "bi", "bi-list-check"], [3, "entity", "cdRef"], ["by", "numero", 3, "header"], [1, "micro-text", "fw-ligh"], [1, "text-break", "text-wrap"], ["color", "light", 3, "icon", "label"], ["color", "secondary", 3, "icon", "label", 4, "ngIf"], ["color", "secondary", 3, "icon", "label"], ["color", "light", 3, "maxWidth", "icon", "label", 4, "ngIf"], ["color", "light", 3, "maxWidth", "icon", "label"], [3, "color", "icon", "label"], ["color", "danger", "icon", "bi bi-dash-circle", "label", "Cancelado", 4, "ngIf"], ["color", "danger", "icon", "bi bi-dash-circle", "label", "Cancelado"]],
  template: function PlanoEntregaListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("select", function PlanoEntregaListComponent_Template_grid_select_0_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PlanoEntregaListComponent_toolbar_1_Template, 3, 6, "toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "filter", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "input-text", 4)(5, "input-search", 5, 6)(7, "input-select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "input-search", 8, 9)(11, "input-search", 10, 11)(13, "input-datetime", 12)(14, "input-datetime", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](16, PlanoEntregaListComponent_column_16_Template, 5, 4, "column", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "column", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](18, PlanoEntregaListComponent_ng_template_18_Template, 2, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](20, PlanoEntregaListComponent_ng_template_20_Template, 2, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "column", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](23, PlanoEntregaListComponent_ng_template_23_Template, 5, 6, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "column", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](26, PlanoEntregaListComponent_ng_template_26_Template, 2, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "column", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](29, PlanoEntregaListComponent_ng_template_29_Template, 2, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "column", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](32, PlanoEntregaListComponent_ng_template_32_Template, 3, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](34, PlanoEntregaListComponent_ng_template_34_Template, 2, 2, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "column", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](37, PlanoEntregaListComponent_ng_template_37_Template, 2, 4, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](39, "column", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](40, "pagination", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](19);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](21);
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](24);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](27);
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](30);
      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](33);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](35);
      const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_PENT_INCL"))("hasEdit", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed)("visible", ctx.showFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("size", 5)("control", ctx.filter.controls.nome)("placeholder", "Nome do " + ctx.lex.translate("plano de entrega"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("size", 4)("dao", ctx.unidadeDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("size", 3)("items", ctx.lookup.PLANO_ENTREGA_STATUS)("valueTodos", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("size", 4)("dao", ctx.planejamentoDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("size", 4)("dao", ctx.cadeiaValorDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("size", 2)("control", ctx.filter.controls.inicio)("labelInfo", "Data de in\u00EDcio do " + ctx.lex.translate("plano de entrega"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("size", 2)("control", ctx.filter.controls.fim)("labelInfo", "Data do fim do " + ctx.lex.translate("plano de entrega"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("titleTemplate", _r5)("template", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("template", _r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("template", _r11);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("template", _r13);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("titleTemplate", _r15)("template", _r17);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("template", _r19);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dynamicOptions", ctx.dynamicOptions.bind(ctx))("dynamicButtons", ctx.dynamicButtons.bind(ctx));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_8__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_9__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_10__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__.PaginationComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_13__.InputSwitchComponent, _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_14__.InputSearchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_15__.InputTextComponent, _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_16__.InputDatetimeComponent, _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_17__.InputSelectComponent, _components_grid_order_order_component__WEBPACK_IMPORTED_MODULE_18__.OrderComponent, _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_19__.BadgeComponent, _plano_entrega_list_entrega_plano_entrega_list_entrega_component__WEBPACK_IMPORTED_MODULE_20__.PlanoEntregaListEntregaComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 13984:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-mapa-entregas/plano-entrega-mapa-entregas.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanoEntregaMapaEntregasComponent: () => (/* binding */ PlanoEntregaMapaEntregasComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_dao_entrega_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/entrega-dao.service */ 67465);
/* harmony import */ var src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/plano-entrega-entrega-dao.service */ 31021);
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ 81214);
/* harmony import */ var src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/plano-entrega-entrega.model */ 32398);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var _plano_entrega_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../plano-entrega.service */ 77447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ 32802);
/* harmony import */ var _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/input/input-datetime/input-datetime.component */ 84495);
/* harmony import */ var _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/badge/badge.component */ 95489);
/* harmony import */ var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/progress-bar/progress-bar.component */ 69756);
/* harmony import */ var _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/action-button/action-button.component */ 28032);
var _class;




















const _c0 = ["unidade"];
function PlanoEntregaMapaEntregasComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "p")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "Data:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "p")(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6, "Cliente:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](10, "badge", 16);
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" ", ctx_r3.util.getDateFormatted(row_r8.inicio), " - ", ctx_r3.util.getDateFormatted(row_r8.fim), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", row_r8.cliente, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](row_r8.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("label", row_r8.plano_entrega.unidade.sigla)("hint", ctx_r3.lex.translate("plano de entrega"));
  }
}
function PlanoEntregaMapaEntregasComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "Meta");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r5.entregaService.getValorMeta(row_r9));
  }
}
function PlanoEntregaMapaEntregasComponent_ng_template_18_h2_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "Regular");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function PlanoEntregaMapaEntregasComponent_ng_template_18_progress_bar_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "progress-bar", 28);
  }
  if (rf & 2) {
    const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", row_r10.realizado.porcentagem);
  }
}
function PlanoEntregaMapaEntregasComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 22)(1, "div", 18)(2, "div", 19)(3, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "Realizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](5, PlanoEntregaMapaEntregasComponent_ng_template_18_h2_5_Template, 2, 0, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, PlanoEntregaMapaEntregasComponent_ng_template_18_progress_bar_6_Template, 1, 1, "progress-bar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](8, "action-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r7.entregaService.isPorcentagem(row_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r7.entregaService.isPorcentagem(row_r10));
  }
}
class PlanoEntregaMapaEntregasComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_5__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_4__.PlanoEntregaEntrega, src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_2__.PlanoEntregaEntregaDaoService);
    this.injector = injector;
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      if (this.objetivoId) result.push(["objetivos.objetivo_id", "==", this.objetivoId]);
      if (this.processoId) result.push(["processos.processo_id", "==", this.processoId]);
      if (form.unidade_id) result.push(["plano_entrega.unidade_id", "==", form.unidade_id]);
      if (form.entrega_id) result.push(["entrega_id", "==", form.entrega_id]);
      if (form.inicio) result.push(["data_inicio", ">=", form.inicio]);
      if (form.fim) result.push(["data_fim", "<=", form.fim]);
      return result;
    };
    this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_3__.UnidadeDaoService);
    this.entregaDao = injector.get(src_app_dao_entrega_dao_service__WEBPACK_IMPORTED_MODULE_1__.EntregaDaoService);
    this.entregaService = injector.get(_plano_entrega_service__WEBPACK_IMPORTED_MODULE_6__.PlanoEntregaService);
    /* Inicializações */
    this.title = this.lex.translate("Entregas");
    this.filter = this.fh.FormBuilder({
      unidade_id: {
        default: null
      },
      entrega_id: {
        default: null
      },
      inicio: {
        default: null
      },
      fim: {
        default: null
      }
    });
    this.join = [];
  }
  ngOnInit() {
    super.ngOnInit();
    this.objetivoId = this.urlParams.get("objetivo_id") || undefined;
    this.processoId = this.urlParams.get("processo_id") || undefined;
  }
  filterClear(filter) {
    filter.controls.unidade_id.setValue(null);
    filter.controls.entrega_id.setValue(null);
    filter.controls.inicio.setValue(null);
    filter.controls.fim.setValue(null);
    super.filterClear(filter);
  }
}
_class = PlanoEntregaMapaEntregasComponent;
_class.ɵfac = function PlanoEntregaMapaEntregasComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["plano-entrega-mapa-entregas"]],
  viewQuery: function PlanoEntregaMapaEntregasComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.unidade = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]],
  decls: 21,
  vars: 22,
  consts: [["noHeader", "", 3, "dao", "title", "orderBy", "join"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["controlName", "unidade_id", 3, "size", "dao"], ["unidade", ""], ["controlName", "entrega_id", 3, "size", "dao"], ["entrega", ""], ["date", "", "noIcon", "", "label", "In\u00EDcio", "controlName", "inicio", "labelInfo", "Data de in\u00EDcio do planejamento institucional", 3, "size", "control"], ["date", "", "noIcon", "", "label", "Fim", "controlName", "fim", "labelInfo", "Data do fim do planejamento institucional", 3, "size", "control"], ["title", "Entrega", 3, "template"], ["columnEntrega", ""], ["title", "Meta", 3, "template"], ["columnMeta", ""], ["title", "Realizado", 3, "template"], ["columnRealizado", ""], [3, "rows"], ["icon", "bi bi-list-columns-reverse", "color", "light", 3, "label", "hint"], [1, "meta", "h-100"], [1, "card", "h-100"], [1, "card-body"], [1, "card-title"], [1, "text-primary"], [1, "realizado", "h-100"], ["class", "text-secondary", 4, "ngIf"], ["color", "success", 3, "value", 4, "ngIf"], [1, "card-footer", "p-0"], ["icon", "bi bi-card-checklist"], [1, "text-secondary"], ["color", "success", 3, "value"]],
  template: function PlanoEntregaMapaEntregasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "toolbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "filter", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](4, "input-search", 3, 4)(6, "input-search", 5, 6)(8, "input-datetime", 7)(9, "input-datetime", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "columns")(11, "column", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, PlanoEntregaMapaEntregasComponent_ng_template_12_Template, 11, 6, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "column", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](15, PlanoEntregaMapaEntregasComponent_ng_template_15_Template, 7, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "column", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](18, PlanoEntregaMapaEntregasComponent_ng_template_18_Template, 9, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](20, "pagination", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](13);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](16);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dao", ctx.dao)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("join", ctx.join);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("size", 4)("dao", ctx.unidadeDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("size", 4)("dao", ctx.entregaDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("size", 2)("control", ctx.filter.controls.inicio);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("size", 2)("control", ctx.filter.controls.fim);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("template", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("template", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("template", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_7__.ColumnsComponent, _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_8__.ColumnComponent, _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__.FilterComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__.ToolbarComponent, _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__.PaginationComponent, _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_12__.InputSearchComponent, _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_13__.InputDatetimeComponent, _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_14__.BadgeComponent, _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_15__.ProgressBarComponent, _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_16__.ActionButtonComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 70683:
/*!******************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanoEntregaRoutingModule: () => (/* binding */ PlanoEntregaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 1391);
/* harmony import */ var src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/resolvies/config.resolver */ 2314);
/* harmony import */ var _plano_entrega_list_plano_entrega_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plano-entrega-list/plano-entrega-list.component */ 23183);
/* harmony import */ var _plano_entrega_form_plano_entrega_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plano-entrega-form/plano-entrega-form.component */ 46435);
/* harmony import */ var _plano_entrega_mapa_entregas_plano_entrega_mapa_entregas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plano-entrega-mapa-entregas/plano-entrega-mapa-entregas.component */ 13984);
/* harmony import */ var _plano_entrega_form_adesao_plano_entrega_form_adesao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plano-entrega-form-adesao/plano-entrega-form-adesao.component */ 49546);
/* harmony import */ var _plano_entrega_form_entrega_plano_entrega_form_entrega_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plano-entrega-form-entrega/plano-entrega-form-entrega.component */ 62675);
/* harmony import */ var _plano_entrega_list_entrega_list_plano_entrega_list_entrega_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plano-entrega-list-entrega-list/plano-entrega-list-entrega-list.component */ 65659);
/* harmony import */ var _plano_entrega_list_logs_plano_entrega_list_logs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plano-entrega-list-logs/plano-entrega-list-logs.component */ 21373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;












const routes = [{
  path: '',
  component: _plano_entrega_list_plano_entrega_list_component__WEBPACK_IMPORTED_MODULE_2__.PlanoEntregaListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Plano de Entregas"
  }
}, {
  path: 'new',
  component: _plano_entrega_form_plano_entrega_form_component__WEBPACK_IMPORTED_MODULE_3__.PlanoEntregaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Inclusão de Plano de Entregas",
    modal: true
  }
}, {
  path: ':id/edit',
  component: _plano_entrega_form_plano_entrega_form_component__WEBPACK_IMPORTED_MODULE_3__.PlanoEntregaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Edição de Plano de Entregas",
    modal: true
  }
}, {
  path: ':id/consult',
  component: _plano_entrega_form_plano_entrega_form_component__WEBPACK_IMPORTED_MODULE_3__.PlanoEntregaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Consulta a Plano de Entregas",
    modal: true
  }
}, {
  path: ':id/logs',
  component: _plano_entrega_list_logs_plano_entrega_list_logs_component__WEBPACK_IMPORTED_MODULE_8__.PlanoEntregaListLogsComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Logs de Alterações em Planos de Entregas",
    modal: true
  }
}, {
  path: 'entrega',
  component: _plano_entrega_form_entrega_plano_entrega_form_entrega_component__WEBPACK_IMPORTED_MODULE_6__.PlanoEntregaFormEntregaComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Entregas do Plano de Entregas",
    modal: true
  }
}, {
  path: 'entregaList',
  component: _plano_entrega_list_entrega_list_plano_entrega_list_entrega_list_component__WEBPACK_IMPORTED_MODULE_7__.PlanoEntregaListEntregaListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Entregas do Plano de Entregas",
    modal: true
  }
}, {
  path: 'entrega/objetivos/:objetivo_id',
  component: _plano_entrega_mapa_entregas_plano_entrega_mapa_entregas_component__WEBPACK_IMPORTED_MODULE_4__.PlanoEntregaMapaEntregasComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Entregas do Plano de Entregas",
    modal: true
  }
}, {
  path: 'entrega/processos/:processo_id',
  component: _plano_entrega_mapa_entregas_plano_entrega_mapa_entregas_component__WEBPACK_IMPORTED_MODULE_4__.PlanoEntregaMapaEntregasComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Entregas do Plano de Entregas",
    modal: true
  }
}, {
  path: 'adesao',
  component: _plano_entrega_form_adesao_plano_entrega_form_adesao_component__WEBPACK_IMPORTED_MODULE_5__.PlanoEntregaFormAdesaoComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Adesão a Plano de Entregas",
    modal: true
  }
}];
class PlanoEntregaRoutingModule {}
_class = PlanoEntregaRoutingModule;
_class.ɵfac = function PlanoEntregaRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](PlanoEntregaRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 15177:
/*!**********************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanoEntregaModule: () => (/* binding */ PlanoEntregaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 10822);
/* harmony import */ var _plano_entrega_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plano-entrega-routing.module */ 70683);
/* harmony import */ var _plano_entrega_list_plano_entrega_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plano-entrega-list/plano-entrega-list.component */ 23183);
/* harmony import */ var _plano_entrega_form_plano_entrega_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plano-entrega-form/plano-entrega-form.component */ 46435);
/* harmony import */ var _plano_entrega_list_entrega_plano_entrega_list_entrega_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plano-entrega-list-entrega/plano-entrega-list-entrega.component */ 39285);
/* harmony import */ var _plano_entrega_mapa_entregas_plano_entrega_mapa_entregas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plano-entrega-mapa-entregas/plano-entrega-mapa-entregas.component */ 13984);
/* harmony import */ var _plano_entrega_form_adesao_plano_entrega_form_adesao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plano-entrega-form-adesao/plano-entrega-form-adesao.component */ 49546);
/* harmony import */ var _plano_entrega_form_entrega_plano_entrega_form_entrega_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plano-entrega-form-entrega/plano-entrega-form-entrega.component */ 62675);
/* harmony import */ var _planejamento_institucional_planejamento_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../planejamento-institucional/planejamento.module */ 1685);
/* harmony import */ var _cadeia_valor_cadeia_valor_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cadeia-valor/cadeia-valor.module */ 45288);
/* harmony import */ var _plano_entrega_list_entrega_list_plano_entrega_list_entrega_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plano-entrega-list-entrega-list/plano-entrega-list-entrega-list.component */ 65659);
/* harmony import */ var _plano_entrega_list_logs_plano_entrega_list_logs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plano-entrega-list-logs/plano-entrega-list-logs.component */ 21373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;














class PlanoEntregaModule {}
_class = PlanoEntregaModule;
_class.ɵfac = function PlanoEntregaModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule, _plano_entrega_routing_module__WEBPACK_IMPORTED_MODULE_1__.PlanoEntregaRoutingModule, _planejamento_institucional_planejamento_module__WEBPACK_IMPORTED_MODULE_8__.PlanejamentoModule, _cadeia_valor_cadeia_valor_module__WEBPACK_IMPORTED_MODULE_9__.CadeiaValorModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](PlanoEntregaModule, {
    declarations: [_plano_entrega_list_plano_entrega_list_component__WEBPACK_IMPORTED_MODULE_2__.PlanoEntregaListComponent, _plano_entrega_form_plano_entrega_form_component__WEBPACK_IMPORTED_MODULE_3__.PlanoEntregaFormComponent, _plano_entrega_list_entrega_plano_entrega_list_entrega_component__WEBPACK_IMPORTED_MODULE_4__.PlanoEntregaListEntregaComponent, _plano_entrega_form_adesao_plano_entrega_form_adesao_component__WEBPACK_IMPORTED_MODULE_6__.PlanoEntregaFormAdesaoComponent, _plano_entrega_mapa_entregas_plano_entrega_mapa_entregas_component__WEBPACK_IMPORTED_MODULE_5__.PlanoEntregaMapaEntregasComponent, _plano_entrega_mapa_entregas_plano_entrega_mapa_entregas_component__WEBPACK_IMPORTED_MODULE_5__.PlanoEntregaMapaEntregasComponent, _plano_entrega_form_entrega_plano_entrega_form_entrega_component__WEBPACK_IMPORTED_MODULE_7__.PlanoEntregaFormEntregaComponent, _plano_entrega_list_entrega_list_plano_entrega_list_entrega_list_component__WEBPACK_IMPORTED_MODULE_10__.PlanoEntregaListEntregaListComponent, _plano_entrega_list_logs_plano_entrega_list_logs_component__WEBPACK_IMPORTED_MODULE_11__.PlanoEntregaListLogsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule, _plano_entrega_routing_module__WEBPACK_IMPORTED_MODULE_1__.PlanoEntregaRoutingModule, _planejamento_institucional_planejamento_module__WEBPACK_IMPORTED_MODULE_8__.PlanejamentoModule, _cadeia_valor_cadeia_valor_module__WEBPACK_IMPORTED_MODULE_9__.CadeiaValorModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=177.js.map