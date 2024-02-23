"use strict";
(self["webpackChunkpetrvs"] = self["webpackChunkpetrvs"] || []).push([[2720],{

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

/***/ 70:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/area-conhecimento/area-conhecimento-form/area-conhecimento-form.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaConhecimentoFormComponent: () => (/* binding */ AreaConhecimentoFormComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_dao_area_conhecimento_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/area-conhecimento-dao.service */ 24997);
/* harmony import */ var src_app_models_area_conhecimento_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/area-conhecimento.model */ 56790);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../components/input/input-text/input-text.component */ 92392);
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
  vars: 6,
  consts: [["initialFocus", "nome_area", 3, "form", "disabled", "title", "submit", "cancel"], [1, "row"], ["label", "Nome da \u00E1rea de conhecimento", "controlName", "nome_area", "required", "", 3, "size"], ["labelPosition", "left", "label", "Ativo", "controlName", "ativo", 3, "size"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("maxlength", 250);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 2);
    }
  },
  dependencies: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_0__.EditableFormComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_4__.InputSwitchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__.InputTextComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 38671:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/area-conhecimento/area-conhecimento-list/area-conhecimento-list.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaConhecimentoListComponent: () => (/* binding */ AreaConhecimentoListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../components/grid/grid.component */ 73150);
/* harmony import */ var src_app_models_area_conhecimento_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/area-conhecimento.model */ 56790);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var src_app_dao_area_conhecimento_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/area-conhecimento-dao.service */ 24997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/grid/columns/columns.component */ 57224);
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../components/grid/column/column.component */ 83351);
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../components/grid/filter/filter.component */ 57765);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../components/grid/pagination/pagination.component */ 42704);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/input/input-text/input-text.component */ 92392);
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
        result.push(["nome", "like", "%" + form.nome_area.trim().replace(" ", "%") + "%"]);
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
  vars: 23,
  consts: [[3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [4, "ngIf"], [3, "deleted", "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Nome da \u00E1rea de conhecimento", "controlName", "nome_area", "placeholder", "Nome da \u00E1rea de conhecimento", 3, "size", "control"], ["title", "Nome da \u00E1rea", "field", "nome", "orderBy", "nome"], ["type", "options", 3, "onEdit", "options"], [3, "rows"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("deleted", ctx.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 12)("control", ctx.filter.controls.nome_area);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("maxlength", 250);
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

/***/ 3574:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/area-conhecimento/area-conhecimento-routing.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaConhecimentoRoutingModule: () => (/* binding */ AreaConhecimentoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 1391);
/* harmony import */ var src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/resolvies/config.resolver */ 2314);
/* harmony import */ var _area_conhecimento_list_area_conhecimento_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./area-conhecimento-list/area-conhecimento-list.component */ 38671);
/* harmony import */ var _area_conhecimento_form_area_conhecimento_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./area-conhecimento-form/area-conhecimento-form.component */ 70);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;







const routes = [{
  path: '',
  component: _area_conhecimento_list_area_conhecimento_list_component__WEBPACK_IMPORTED_MODULE_2__.AreaConhecimentoListComponent,
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
  path: 'new',
  component: _area_conhecimento_form_area_conhecimento_form_component__WEBPACK_IMPORTED_MODULE_3__.AreaConhecimentoFormComponent,
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
  path: ':id/edit',
  component: _area_conhecimento_form_area_conhecimento_form_component__WEBPACK_IMPORTED_MODULE_3__.AreaConhecimentoFormComponent,
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
  path: ':id/consult',
  component: _area_conhecimento_form_area_conhecimento_form_component__WEBPACK_IMPORTED_MODULE_3__.AreaConhecimentoFormComponent,
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
class AreaConhecimentoRoutingModule {}
_class = AreaConhecimentoRoutingModule;
_class.ɵfac = function AreaConhecimentoRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AreaConhecimentoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 62720:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/cadastros/curriculum/area-conhecimento/area-conhecimento.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaConhecimentoModule: () => (/* binding */ AreaConhecimentoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 10822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _area_conhecimento_form_area_conhecimento_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-conhecimento-form/area-conhecimento-form.component */ 70);
/* harmony import */ var _area_conhecimento_list_area_conhecimento_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./area-conhecimento-list/area-conhecimento-list.component */ 38671);
/* harmony import */ var _area_conhecimento_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./area-conhecimento-routing.module */ 3574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;







class AreaConhecimentoModule {}
_class = AreaConhecimentoModule;
_class.ɵfac = function AreaConhecimentoModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _area_conhecimento_routing_module__WEBPACK_IMPORTED_MODULE_3__.AreaConhecimentoRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AreaConhecimentoModule, {
    declarations: [_area_conhecimento_form_area_conhecimento_form_component__WEBPACK_IMPORTED_MODULE_1__.AreaConhecimentoFormComponent, _area_conhecimento_list_area_conhecimento_list_component__WEBPACK_IMPORTED_MODULE_2__.AreaConhecimentoListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _area_conhecimento_routing_module__WEBPACK_IMPORTED_MODULE_3__.AreaConhecimentoRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=2720.js.map