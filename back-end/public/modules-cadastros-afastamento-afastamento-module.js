(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-cadastros-afastamento-afastamento-module"],{

/***/ "F0lC":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/cadastros/afastamento/afastamento-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AfastamentoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfastamentoRoutingModule", function() { return AfastamentoRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guards/auth.guard */ "UTcu");
/* harmony import */ var src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/resolvies/config.resolver */ "toza");
/* harmony import */ var _afastamento_form_afastamento_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./afastamento-form/afastamento-form.component */ "FP6K");
/* harmony import */ var _afastamento_list_afastamento_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./afastamento-list/afastamento-list.component */ "UVZZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _afastamento_list_afastamento_list_component__WEBPACK_IMPORTED_MODULE_4__["AfastamentoListComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Afastamentos" } },
    { path: 'new', component: _afastamento_form_afastamento_form_component__WEBPACK_IMPORTED_MODULE_3__["AfastamentoFormComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Inclusão de Afastamento", modal: true } },
    { path: ':id/edit', component: _afastamento_form_afastamento_form_component__WEBPACK_IMPORTED_MODULE_3__["AfastamentoFormComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Edição de Afastamento", modal: true } },
    { path: ':id/consult', component: _afastamento_form_afastamento_form_component__WEBPACK_IMPORTED_MODULE_3__["AfastamentoFormComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Consulta a Afastamento", modal: true } }
];
class AfastamentoRoutingModule {
}
AfastamentoRoutingModule.ɵfac = function AfastamentoRoutingModule_Factory(t) { return new (t || AfastamentoRoutingModule)(); };
AfastamentoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AfastamentoRoutingModule });
AfastamentoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AfastamentoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "FP6K":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/cadastros/afastamento/afastamento-form/afastamento-form.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AfastamentoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfastamentoFormComponent", function() { return AfastamentoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/editable-form/editable-form.component */ "RKEd");
/* harmony import */ var src_app_dao_afastamento_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/afastamento-dao.service */ "qHfw");
/* harmony import */ var src_app_models_afastamento_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/afastamento.model */ "cLR3");
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ "793T");
/* harmony import */ var src_app_dao_tipo_motivo_afastamento_dao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dao/tipo-motivo-afastamento-dao.service */ "gFTY");
/* harmony import */ var src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dao/usuario-dao.service */ "w5Sy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ "8OLq");
/* harmony import */ var _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-datetime/input-datetime.component */ "NRF3");
/* harmony import */ var _components_input_input_textarea_input_textarea_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/input/input-textarea/input-textarea.component */ "S/J2");












const _c0 = ["tipoMotivoAfastamento"];
const _c1 = ["usuario"];
class AfastamentoFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_4__["PageFormBase"] {
    constructor(injector) {
        super(injector, src_app_models_afastamento_model__WEBPACK_IMPORTED_MODULE_3__["Afastamento"], src_app_dao_afastamento_dao_service__WEBPACK_IMPORTED_MODULE_2__["AfastamentoDaoService"]);
        this.injector = injector;
        this.validate = (control, controlName) => {
            var _a, _b;
            let result = null;
            if (['usuario_id', 'tipo_motivo_afastamento_id'].indexOf(controlName) >= 0 && !((_a = control.value) === null || _a === void 0 ? void 0 : _a.length)) {
                result = "Obrigatório";
            }
            else if (['inicio_afastamento', 'fim_afastamento'].indexOf(controlName) >= 0 && !((_b = this.dao) === null || _b === void 0 ? void 0 : _b.validDateTime(control.value))) {
                result = "Inválido";
            }
            return result;
        };
        this.titleEdit = (entity) => {
            var _a, _b;
            return "Editando " + this.lex.translate("afastamento") + ': ' + (((_a = entity === null || entity === void 0 ? void 0 : entity.usuario) === null || _a === void 0 ? void 0 : _a.nome) || "") + ' - ' + (((_b = entity === null || entity === void 0 ? void 0 : entity.tipo_motivo_afastamento) === null || _b === void 0 ? void 0 : _b.nome) || "");
        };
        this.tipoMotivoAfastamentoDao = injector.get(src_app_dao_tipo_motivo_afastamento_dao_service__WEBPACK_IMPORTED_MODULE_5__["TipoMotivoAfastamentoDaoService"]);
        this.usuarioDao = injector.get(src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioDaoService"]);
        this.form = this.fh.FormBuilder({
            observacoes: { default: "" },
            inicio_afastamento: { default: new Date() },
            fim_afastamento: { default: new Date() },
            usuario_id: { default: "" },
            tipo_motivo_afastamento_id: { default: "" }
        }, this.cdRef, this.validate);
        this.join = ["usuario", "tipo_motivo_afastamento"];
    }
    isHoras() {
        var _a, _b, _c;
        if (((_a = this.form.controls.tipo_motivo_afastamento_id.value) === null || _a === void 0 ? void 0 : _a.length) && ((_c = (_b = this.tipoMotivoAfastamento) === null || _b === void 0 ? void 0 : _b.searchObj) === null || _c === void 0 ? void 0 : _c.horas)) { //Então é em Horas
            return true;
        }
        else
            return false;
    }
    loadData(entity, form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formValue = Object.assign({}, form.value);
            yield Promise.all([
                this.usuario.loadSearch(entity.usuario || formValue.usuario_id),
                this.tipoMotivoAfastamento.loadSearch(entity.tipo_motivo_afastamento || formValue.tipo_motivo_afastamento_id)
            ]);
            form.patchValue(this.util.fillForm(formValue, entity));
        });
    }
    initializeData(form) {
        form.patchValue(new src_app_models_afastamento_model__WEBPACK_IMPORTED_MODULE_3__["Afastamento"]());
    }
    saveData(form) {
        return new Promise((resolve, reject) => {
            let afastamento = this.util.fill(new src_app_models_afastamento_model__WEBPACK_IMPORTED_MODULE_3__["Afastamento"](), this.entity);
            afastamento = this.util.fillForm(afastamento, this.form.value);
            if (!this.isHoras()) {
                afastamento.inicio_afastamento.setHours(0, 0, 0);
                afastamento.fim_afastamento.setHours(23, 59, 0);
                afastamento.fim_afastamento.setDate(afastamento.fim_afastamento.getDate());
            }
            resolve(afastamento);
        });
    }
}
AfastamentoFormComponent.ɵfac = function AfastamentoFormComponent_Factory(t) { return new (t || AfastamentoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injector"])); };
AfastamentoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AfastamentoFormComponent, selectors: [["app-afastamento-form"]], viewQuery: function AfastamentoFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__["EditableFormComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.tipoMotivoAfastamento = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.usuario = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 13, consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row"], ["controlName", "usuario_id", 3, "size", "dao"], ["usuario", ""], ["controlName", "tipo_motivo_afastamento_id", 3, "size", "dao"], ["tipoMotivoAfastamento", ""], ["label", "In\u00EDcio", "controlName", "inicio_afastamento", 3, "date", "size"], ["label", "Fim", "controlName", "fim_afastamento", 3, "date", "size"], ["label", "Observa\u00E7\u00F5es", "controlName", "observacoes", 3, "size", "rows"]], template: function AfastamentoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "editable-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function AfastamentoFormComponent_Template_editable_form_submit_0_listener() { return ctx.onSaveData(); })("cancel", function AfastamentoFormComponent_Template_editable_form_cancel_0_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "input-search", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input-search", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input-datetime", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "input-datetime", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input-textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 6)("dao", ctx.usuarioDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 6)("dao", ctx.tipoMotivoAfastamentoDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("date", ctx.isHoras() ? undefined : "")("size", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("date", ctx.isHoras() ? undefined : "")("size", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 12)("rows", 3);
    } }, directives: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__["EditableFormComponent"], _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_8__["InputSearchComponent"], _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_9__["InputDatetimeComponent"], _components_input_input_textarea_input_textarea_component__WEBPACK_IMPORTED_MODULE_10__["InputTextareaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZmFzdGFtZW50by1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "UVZZ":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/cadastros/afastamento/afastamento-list/afastamento-list.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AfastamentoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfastamentoListComponent", function() { return AfastamentoListComponent; });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/grid/grid.component */ "m4bG");
/* harmony import */ var src_app_dao_afastamento_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/afastamento-dao.service */ "qHfw");
/* harmony import */ var src_app_models_afastamento_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/afastamento.model */ "cLR3");
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ "+vn/");
/* harmony import */ var src_app_dao_tipo_motivo_afastamento_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/tipo-motivo-afastamento-dao.service */ "gFTY");
/* harmony import */ var src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dao/usuario-dao.service */ "w5Sy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ "kHdc");
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ "8OLq");
/* harmony import */ var _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/input/input-datetime/input-datetime.component */ "NRF3");
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ "d7UH");
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ "pFmK");
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ "f3Td");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ "np0s");
















function AfastamentoListComponent_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "toolbar");
} }
function AfastamentoListComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r11 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r11.usuario.nome, "");
} }
function AfastamentoListComponent_ng_template_15_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "(c\u00F3d. " + row_r12.tipo_motivo_afastamento.codigo + ")", "");
} }
function AfastamentoListComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AfastamentoListComponent_ng_template_15_span_3_Template, 2, 1, "span", 1);
} if (rf & 2) {
    const row_r12 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](row_r12.tipo_motivo_afastamento.icone);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", row_r12.tipo_motivo_afastamento.cor);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r12.tipo_motivo_afastamento.nome, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", row_r12.tipo_motivo_afastamento.codigo);
} }
function AfastamentoListComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.row;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r8.dao.getDateFormatted(row_r15.inicio_afastamento), "");
} }
function AfastamentoListComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.row;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r10.dao.getDateFormatted(row_r16.fim_afastamento), "");
} }
class AfastamentoListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_3__["PageListBase"] {
    constructor(injector) {
        super(injector, src_app_models_afastamento_model__WEBPACK_IMPORTED_MODULE_2__["Afastamento"], src_app_dao_afastamento_dao_service__WEBPACK_IMPORTED_MODULE_1__["AfastamentoDaoService"]);
        this.injector = injector;
        this.listagemInicial = true;
        this.filterWhere = (filter) => {
            var _a, _b, _c, _d, _e, _f, _g;
            let result = [];
            let form = filter.value;
            //let inicio_afast = new Date();
            //let fim_afast = new Date();
            if (((_a = form.usuario_id) === null || _a === void 0 ? void 0 : _a.length) && ((_b = form.tipo_motivo_afastamento_id) === null || _b === void 0 ? void 0 : _b.length)) {
                result.push(["usuario_id", "==", form.usuario_id]);
                result.push(["tipo_motivo_afastamento_id", "==", form.tipo_motivo_afastamento_id]);
            }
            else if ((_c = form.usuario_id) === null || _c === void 0 ? void 0 : _c.length) {
                result.push(["usuario_id", "==", form.usuario_id]);
            }
            else if ((_d = form.tipo_motivo_afastamento_id) === null || _d === void 0 ? void 0 : _d.length) {
                result.push(["tipo_motivo_afastamento_id", "==", form.tipo_motivo_afastamento_id]);
            }
            else if (((_e = this.dao) === null || _e === void 0 ? void 0 : _e.validDateTime(form.inicio_afastamento)) && ((_f = this.dao) === null || _f === void 0 ? void 0 : _f.validDateTime(form.fim_afastamento)) && !this.listagemInicial) {
                result.push((_g = this.dao) === null || _g === void 0 ? void 0 : _g.intersectionWhere("inicio_afastamento", "fim_afastamento", this.util.startOfDay(form.inicio_afastamento), this.util.startOfDay(form.fim_afastamento)));
                //inicio_afast = form.inicio_afastamento.toISOString().slice(0,10);//Método para organizar o date em 'yyyy-mm-dd', formato que o banco consegue comparar.
                //fim_afast = form.fim_afastamento.toISOString().slice(0,10);
                //result.push(["inicio_afastamento", ">=", this.util.startOfDay(form.inicio_afastamento)]);
                //result.push(["fim_afastamento", "<=", this.util.endOfDay(form.fim_afastamento)]);
            }
            return result;
        };
        this.join = ["tipo_motivo_afastamento:id, nome", "usuario: id, nome"];
        this.tipoMotivoAfastamentoDao = injector.get(src_app_dao_tipo_motivo_afastamento_dao_service__WEBPACK_IMPORTED_MODULE_4__["TipoMotivoAfastamentoDaoService"]);
        this.usuarioDao = injector.get(src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioDaoService"]);
        /* Inicializações */
        this.title = this.lex.translate("Afastamentos");
        this.code = "MOD_AFT";
        this.filter = this.fh.FormBuilder({
            observacoes: { default: "" },
            inicio_afastamento: { default: new Date() },
            fim_afastamento: { default: new Date() },
            usuario_id: { default: "" },
            tipo_motivo_afastamento_id: { default: "" }
        });
        // Testa se o usuário possui permissão para exibir dados do afastamento
        if (this.auth.hasPermissionTo("MOD_AFT_CONS")) {
            this.options.push({
                icon: "bi bi-info-circle",
                label: "Informações",
                onClick: this.consult.bind(this)
            });
        }
        // Testa se o usuário possui permissão para excluir o afastamento
        if (this.auth.hasPermissionTo("MOD_AFT_EXCL")) {
            this.options.push({
                icon: "bi bi-trash",
                label: "Excluir",
                onClick: this.delete.bind(this)
            });
        }
    }
    /*public filterClear(filter: FormGroup) {
      filter.controls.inicio_afastamento.setValue("");
      filter.controls.fim_afastamento.setValue("");
      filter.controls.usuario_id.setValue("");
      filter.controls.tipo_motivo_afastamento_id.setValue("");
      super.filterClear(filter);
    }*/
    filtro() {
        this.listagemInicial = false;
    }
}
AfastamentoListComponent.ɵfac = function AfastamentoListComponent_Factory(t) { return new (t || AfastamentoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"])); };
AfastamentoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AfastamentoListComponent, selectors: [["app-afastamento-list"]], viewQuery: function AfastamentoListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__["GridComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 30, consts: [[3, "dao", "add", "title", "orderBy", "groupBy", "join", "hasAdd", "hasEdit"], [4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["controlName", "usuario_id", 3, "size", "dao"], ["usuario", ""], ["controlName", "tipo_motivo_afastamento_id", 3, "size", "dao"], ["tipoMotivoAfastamento", ""], ["date", "", "label", "In\u00EDcio", "controlName", "inicio_afastamento", 3, "size", "click"], ["date", "", "label", "Fim", "controlName", "fim_afastamento", 3, "size", "click"], [3, "title", "template"], ["columnUsuario", ""], ["columnMotivoAfastamento", ""], ["title", "In\u00EDcio", 3, "template"], ["columnInicioAfastamento", ""], ["title", "Fim", 3, "template"], ["columnFimAfastamento", ""], ["title", "Observa\u00E7\u00F5es", "field", "observacoes"], ["type", "options", 3, "onEdit", "options"], [3, "rows"]], template: function AfastamentoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AfastamentoListComponent_toolbar_1_Template, 1, 0, "toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "filter", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input-search", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input-search", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input-datetime", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AfastamentoListComponent_Template_input_datetime_click_8_listener() { return ctx.filtro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "input-datetime", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AfastamentoListComponent_Template_input_datetime_click_9_listener() { return ctx.filtro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AfastamentoListComponent_ng_template_12_Template, 2, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AfastamentoListComponent_ng_template_15_Template, 4, 6, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AfastamentoListComponent_ng_template_18_Template, 2, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, AfastamentoListComponent_ng_template_21_Template, 2, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "pagination", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](13);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](16);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("hasAdd", ctx.auth.hasPermissionTo("MOD_AFT_INCL"))("hasEdit", ctx.auth.hasPermissionTo("MOD_AFT_EDT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.selectable);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", ctx.filterCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 3)("dao", ctx.usuarioDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 3)("dao", ctx.tipoMotivoAfastamentoDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx.lex.translate("Usu\u00E1rio"))("template", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx.lex.translate("Motivo"))("template", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("template", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("template", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("onEdit", ctx.edit)("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", ctx.rowsLimit);
    } }, directives: [src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__["GridComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__["FilterComponent"], _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_9__["InputSearchComponent"], _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_10__["InputDatetimeComponent"], _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_11__["ColumnsComponent"], _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_12__["ColumnComponent"], _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__["PaginationComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["ToolbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZmFzdGFtZW50by1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "jaz9":
/*!*********************************************************************!*\
  !*** ./src/app/modules/cadastros/afastamento/afastamento.module.ts ***!
  \*********************************************************************/
/*! exports provided: AfastamentoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfastamentoModule", function() { return AfastamentoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _afastamento_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./afastamento-routing.module */ "F0lC");
/* harmony import */ var _afastamento_form_afastamento_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./afastamento-form/afastamento-form.component */ "FP6K");
/* harmony import */ var _afastamento_list_afastamento_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./afastamento-list/afastamento-list.component */ "UVZZ");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AfastamentoModule {
}
AfastamentoModule.ɵfac = function AfastamentoModule_Factory(t) { return new (t || AfastamentoModule)(); };
AfastamentoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AfastamentoModule });
AfastamentoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _afastamento_routing_module__WEBPACK_IMPORTED_MODULE_1__["AfastamentoRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AfastamentoModule, { declarations: [_afastamento_form_afastamento_form_component__WEBPACK_IMPORTED_MODULE_2__["AfastamentoFormComponent"],
        _afastamento_list_afastamento_list_component__WEBPACK_IMPORTED_MODULE_3__["AfastamentoListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _afastamento_routing_module__WEBPACK_IMPORTED_MODULE_1__["AfastamentoRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-cadastros-afastamento-afastamento-module.js.map