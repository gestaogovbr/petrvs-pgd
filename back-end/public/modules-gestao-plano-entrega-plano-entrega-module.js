(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-gestao-plano-entrega-plano-entrega-module"],{

/***/ "4ulB":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-form-adesao/plano-entrega-form-adesao.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PlanoEntregaFormAdesaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoEntregaFormAdesaoComponent", function() { return PlanoEntregaFormAdesaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/editable-form/editable-form.component */ "RKEd");
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/grid/grid.component */ "m4bG");
/* harmony import */ var src_app_components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/input/input-search/input-search.component */ "8OLq");
/* harmony import */ var src_app_dao_cadeia_valor_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/cadeia-valor-dao.service */ "nLly");
/* harmony import */ var src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dao/planejamento-dao.service */ "NJJz");
/* harmony import */ var src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dao/plano-entrega-dao.service */ "lKXT");
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ "Ufbc");
/* harmony import */ var src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/plano-entrega.model */ "MoEX");
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ "793T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/separator/separator.component */ "FVj5");
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ "lYxd");
/* harmony import */ var _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/input/input-datetime/input-datetime.component */ "NRF3");
















const _c0 = function () { return ["gestao", "plano-entrega"]; };
const _c1 = function (a0) { return { unidade_id: a0, status: "ATIVO" }; };
const _c2 = function (a1) { return { showFilter: false, filter: a1 }; };
const _c3 = function (a0, a1) { return { route: a0, params: a1 }; };
const _c4 = function (a2) { return ["unidade_id", "=", a2]; };
const _c5 = function () { return ["status", "=", "ATIVO"]; };
const _c6 = function (a0, a1) { return [a0, a1]; };
class PlanoEntregaFormAdesaoComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_9__["PageFormBase"] {
    constructor(injector) {
        var _a;
        super(injector, src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_8__["PlanoEntrega"], src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_6__["PlanoEntregaDaoService"]);
        this.injector = injector;
        this.validate = (control, controlName) => {
            var _a;
            let result = null;
            if (['nome', 'plano_entrega_id'].indexOf(controlName) >= 0 && !((_a = control.value) === null || _a === void 0 ? void 0 : _a.length)) {
                result = "Obrigatório";
            }
            return result;
            /*  (RN_PENT_2_7)
                Em caso de adesão, os campos 'inicio', 'fim', 'planejamento_id', e 'cadeia_valor_id', deverão ser sempre iguais aos do plano-pai;
                portanto, quando um plano de entregas próprio sofrer alteração em um desses campos, todos os planos a ele vinculados deverão ser atualizados também;
            */
        };
        this.titleEdit = (entity) => {
            return "Editando ";
        };
        this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_7__["UnidadeDaoService"]);
        this.planoEntregaDao = injector.get(src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_6__["PlanoEntregaDaoService"]);
        this.cadeiaValorDao = injector.get(src_app_dao_cadeia_valor_dao_service__WEBPACK_IMPORTED_MODULE_4__["CadeiaValorDaoService"]);
        this.planejamentoInstitucionalDao = injector.get(src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_5__["PlanejamentoDaoService"]);
        this.join = [];
        this.modalWidth = 1000;
        this.form = this.fh.FormBuilder({
            nome: { default: "" },
            inicio: { default: "" },
            fim: { default: "" },
            planejamento_id: { default: null },
            cadeia_valor_id: { default: null },
            unidade_id: { default: (_a = this.auth.unidade) === null || _a === void 0 ? void 0 : _a.id },
            plano_entrega_id: { default: null },
            status: { default: "HOMOLOGANDO" }
        }, this.cdRef, this.validate);
    }
    ngOnInit() {
        var _a, _b;
        super.ngOnInit();
        let planoEntrega = ((_a = this.metadata) === null || _a === void 0 ? void 0 : _a.planoEntrega) ? (_b = this.metadata) === null || _b === void 0 ? void 0 : _b.planoEntrega : null;
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formValue = Object.assign({}, form.value);
            form.patchValue(this.util.fillForm(formValue, entity));
            this.cdRef.detectChanges();
        });
    }
    initializeData(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadData(this.entity, this.form);
        });
    }
    saveData(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let planoEntrega = this.util.fill(new src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_8__["PlanoEntrega"](), this.entity);
                planoEntrega = this.util.fillForm(planoEntrega, this.form.value);
                //resolve(new NavigateResult((await this.dao!.aderir()).id));
                resolve(planoEntrega);
            });
        });
    }
    onPlanoEntregaChange(event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (this.form.controls.plano_entrega_id.value) {
            this.form.controls.nome.setValue((_b = (_a = this.planoEntrega) === null || _a === void 0 ? void 0 : _a.selectedItem) === null || _b === void 0 ? void 0 : _b.entity.nome);
            this.form.controls.inicio.setValue((_d = (_c = this.planoEntrega) === null || _c === void 0 ? void 0 : _c.selectedItem) === null || _d === void 0 ? void 0 : _d.entity.inicio);
            this.form.controls.fim.setValue((_f = (_e = this.planoEntrega) === null || _e === void 0 ? void 0 : _e.selectedItem) === null || _f === void 0 ? void 0 : _f.entity.fim);
            this.form.controls.planejamento_id.setValue((_h = (_g = this.planoEntrega) === null || _g === void 0 ? void 0 : _g.selectedItem) === null || _h === void 0 ? void 0 : _h.entity.planejamento_id);
            this.form.controls.cadeia_valor_id.setValue((_k = (_j = this.planoEntrega) === null || _j === void 0 ? void 0 : _j.selectedItem) === null || _k === void 0 ? void 0 : _k.entity.cadeia_valor_id);
        }
    }
}
PlanoEntregaFormAdesaoComponent.ɵfac = function PlanoEntregaFormAdesaoComponent_Factory(t) { return new (t || PlanoEntregaFormAdesaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["Injector"])); };
PlanoEntregaFormAdesaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: PlanoEntregaFormAdesaoComponent, selectors: [["plano-entrega-adesao"]], viewQuery: function PlanoEntregaFormAdesaoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__["EditableFormComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](src_app_components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_3__["InputSearchComponent"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.planoEntrega = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 35, consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row", "mb-4"], ["controlName", "plano_entrega_id", "label", "Plano de Entregas da Unidade-pai", 3, "size", "dao", "selectRoute", "where", "change"], ["planoEntrega", ""], [1, "row"], ["label", "Nome deste Plano de Entregas", "controlName", "nome", 3, "size"], ["disabled", "", "controlName", "unidade_id", 3, "size", "label", "dao"], ["disabled", "", "label", "Status", "controlName", "status", 3, "size"], [1, "row", "mt-4"], ["title", "Dados herdados do Plano de Entregas da Unidade-pai", 3, "collapse"], ["disabled", "", "label", "Planejamento Institucional", "controlName", "planejamento_id", 3, "size", "dao"], ["disabled", "", "controlName", "inicio", "label", "In\u00EDcio", 3, "size", "labelInfo"], ["disabled", "", "label", "Cadeia de Valor", "controlName", "cadeia_valor_id", 3, "size", "dao"], ["disabled", "", "controlName", "fim", "label", "Fim", 3, "size", "labelInfo"]], template: function PlanoEntregaFormAdesaoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "editable-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("submit", function PlanoEntregaFormAdesaoComponent_Template_editable_form_submit_0_listener() { return ctx.onSaveData(); })("cancel", function PlanoEntregaFormAdesaoComponent_Template_editable_form_cancel_0_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input-search", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function PlanoEntregaFormAdesaoComponent_Template_input_search_change_3_listener($event) { return ctx.onPlanoEntregaChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "separator");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "input-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "input-search", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "input-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "separator", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "input-search", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "input-datetime", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "input-search", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "input-datetime", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 12)("dao", ctx.planoEntregaDao)("selectRoute", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](26, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](21, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](24, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](22, _c1, ctx.auth.unidade.unidade_id))))("where", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](32, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](29, _c4, ctx.auth.unidade.unidade_id), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](31, _c5)));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 9)("label", ctx.lex.noun("Unidade"))("dao", ctx.unidadeDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("collapse", "collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 9)("dao", ctx.planejamentoInstitucionalDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 3)("labelInfo", "In\u00EDcio " + ctx.lex.noun("Plano de Entrega", false, true));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 9)("dao", ctx.cadeiaValorDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 3)("labelInfo", "Fim " + ctx.lex.noun("Plano de Entrega", false, true));
    } }, directives: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__["EditableFormComponent"], src_app_components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_3__["InputSearchComponent"], _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_11__["SeparatorComponent"], _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_12__["InputTextComponent"], _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_13__["InputDatetimeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuby1lbnRyZWdhLWZvcm0tYWRlc2FvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "74r+":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-form-entrega/plano-entrega-form-entrega.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PlanoEntregaFormEntregaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoEntregaFormEntregaComponent", function() { return PlanoEntregaFormEntregaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/editable-form/editable-form.component */ "RKEd");
/* harmony import */ var src_app_dao_cadeia_valor_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/cadeia-valor-dao.service */ "nLly");
/* harmony import */ var src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/planejamento-dao.service */ "NJJz");
/* harmony import */ var src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/plano-entrega-entrega-dao.service */ "DqQh");
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ "Ufbc");
/* harmony import */ var src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/plano-entrega-entrega.model */ "YrS0");
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ "793T");
/* harmony import */ var src_app_dao_entrega_dao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dao/entrega-dao.service */ "724m");
/* harmony import */ var src_app_dao_planejamento_objetivo_dao_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dao/planejamento-objetivo-dao.service */ "2u95");
/* harmony import */ var src_app_dao_cadeia_valor_processo_dao_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dao/cadeia-valor-processo-dao.service */ "Yp0k");
/* harmony import */ var src_app_services_navigate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/navigate.service */ "RANn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/tabs/tab/tab.component */ "suJ1");
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ "8OLq");
/* harmony import */ var _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/separator/separator.component */ "FVj5");
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ "lYxd");
/* harmony import */ var _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../components/input/input-datetime/input-datetime.component */ "NRF3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_input_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../components/input/input-number/input-number.component */ "imFN");
/* harmony import */ var _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../components/input/input-select/input-select.component */ "txHH");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ "m4bG");
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ "d7UH");
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ "pFmK");


























const _c0 = ["gridProcessos"];
const _c1 = ["gridObjetivos"];
const _c2 = ["entregas"];
const _c3 = ["planejamento"];
const _c4 = ["cadeiaValor"];
const _c5 = ["inputObjetivo"];
const _c6 = ["inputProcesso"];
const _c7 = ["entrega"];
const _c8 = ["demandante"];
function PlanoEntregaFormEntregaComponent_div_20_input_number_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "input-number", 24);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6);
} }
function PlanoEntregaFormEntregaComponent_div_20_input_number_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "input-number", 25);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6);
} }
function PlanoEntregaFormEntregaComponent_div_20_input_select_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "input-select", 25);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6);
} }
function PlanoEntregaFormEntregaComponent_div_20_input_number_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "input-number", 26);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6);
} }
function PlanoEntregaFormEntregaComponent_div_20_input_number_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "input-number", 27);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6);
} }
function PlanoEntregaFormEntregaComponent_div_20_input_select_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "input-select", 27);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6);
} }
const _c9 = function () { return ["PORCENTAGEM"]; };
const _c10 = function () { return ["QUANTIDADE", "VALOR"]; };
const _c11 = function () { return ["QUALITATIVO"]; };
function PlanoEntregaFormEntregaComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PlanoEntregaFormEntregaComponent_div_20_input_number_1_Template, 1, 1, "input-number", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, PlanoEntregaFormEntregaComponent_div_20_input_number_2_Template, 1, 1, "input-number", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, PlanoEntregaFormEntregaComponent_div_20_input_select_3_Template, 1, 1, "input-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, PlanoEntregaFormEntregaComponent_div_20_input_number_4_Template, 1, 1, "input-number", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, PlanoEntregaFormEntregaComponent_div_20_input_number_5_Template, 1, 1, "input-number", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, PlanoEntregaFormEntregaComponent_div_20_input_select_6_Template, 1, 1, "input-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.checkTipoIndicador(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](6, _c9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.checkTipoIndicador(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](7, _c10)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.checkTipoIndicador(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](8, _c11)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.checkTipoIndicador(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](9, _c9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.checkTipoIndicador(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](10, _c10)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.checkTipoIndicador(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](11, _c11)));
} }
function PlanoEntregaFormEntregaComponent_tab_24_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](row_r18.objetivo.nome);
} }
const _c12 = function (a2) { return ["planejamento_id", "==", a2]; };
const _c13 = function (a0) { return [a0]; };
const _c14 = function () { return ["gestao", "planejamento", "objetivoList"]; };
const _c15 = function (a0) { return { planejamento_id: a0 }; };
const _c16 = function (a0) { return { filter: a0 }; };
const _c17 = function (a0, a1) { return { route: a0, params: a1 }; };
function PlanoEntregaFormEntregaComponent_tab_24_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "input-search", 37, 38);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 12)("where", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](6, _c13, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](4, _c12, ctx_r17.planejamentoId)))("dao", ctx_r17.planejamentoObjetivoDao)("selectRoute", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](13, _c17, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](8, _c14), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](11, _c16, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](9, _c15, ctx_r17.planejamentoId))));
} }
function PlanoEntregaFormEntregaComponent_tab_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tab", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "input-search", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "grid", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "columns");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "column", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, PlanoEntregaFormEntregaComponent_tab_24_ng_template_7_Template, 2, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, PlanoEntregaFormEntregaComponent_tab_24_ng_template_9_Template, 2, 16, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "column", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](8);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](10);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 12)("dao", ctx_r4.planejamentoDao);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx_r4.form.controls.objetivos)("form", ctx_r4.formObjetivos)("hasDelete", false)("hasEdit", false)("add", ctx_r4.addObjetivo.bind(ctx_r4))("remove", ctx_r4.removeObjetivo.bind(ctx_r4))("save", ctx_r4.saveObjetivo.bind(ctx_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r14)("editTemplate", _r16);
} }
function PlanoEntregaFormEntregaComponent_tab_25_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r27 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](row_r27.processo.nome);
} }
const _c18 = function (a2) { return ["cadeia_valor_id", "==", a2]; };
const _c19 = function () { return ["gestao", "cadeia-valor", "processoList"]; };
const _c20 = function (a0) { return { cadeia_valor_id: a0 }; };
function PlanoEntregaFormEntregaComponent_tab_25_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "input-search", 47, 48);
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 12)("where", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](6, _c13, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](4, _c18, ctx_r26.cadeiaValorId)))("dao", ctx_r26.cadeiaValorProcessoDao)("selectRoute", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](13, _c17, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](8, _c19), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](11, _c16, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](9, _c20, ctx_r26.cadeiaValorId))));
} }
function PlanoEntregaFormEntregaComponent_tab_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tab", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "input-search", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "grid", 31, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "columns");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "column", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, PlanoEntregaFormEntregaComponent_tab_25_ng_template_7_Template, 2, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, PlanoEntregaFormEntregaComponent_tab_25_ng_template_9_Template, 2, 16, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "column", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](8);
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](10);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 12)("dao", ctx_r5.cadeiaValorDao);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx_r5.form.controls.processos)("form", ctx_r5.formProcessos)("hasDelete", false)("hasEdit", false)("add", ctx_r5.addProcesso.bind(ctx_r5))("remove", ctx_r5.removeProcesso.bind(ctx_r5))("save", ctx_r5.saveProcesso.bind(ctx_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r23)("editTemplate", _r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dynamicButtons", ctx_r5.dynamicButtonsProcessos.bind(ctx_r5));
} }
class PlanoEntregaFormEntregaComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_7__["PageFormBase"] {
    constructor(injector) {
        super(injector, src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_6__["PlanoEntregaEntrega"], src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_4__["PlanoEntregaEntregaDaoService"]);
        this.injector = injector;
        this.validate = (control, controlName) => {
            var _a, _b, _c, _d, _e;
            let result = null;
            if (['descricao'].indexOf(controlName) >= 0 && !((_a = control.value) === null || _a === void 0 ? void 0 : _a.length)) {
                result = "Obrigatório";
            }
            else if (['progresso_realizado', 'progresso_esperado'].indexOf(controlName) >= 0 && !(control.value >= 0)) {
                result = "Obrigatório";
            }
            else if (['unidade_id'].indexOf(controlName) >= 0 && !((_b = control.value) === null || _b === void 0 ? void 0 : _b.length)) {
                result = "O demandante é obrigatório";
            }
            else if (['entrega_id'].indexOf(controlName) >= 0 && !((_c = control.value) === null || _c === void 0 ? void 0 : _c.length)) {
                result = "A entrega é obrigatória";
            }
            if (['inicio'].indexOf(controlName) >= 0 && !((_d = this.dao) === null || _d === void 0 ? void 0 : _d.validDateTime(control.value))) {
                result = "Inválido";
            }
            if (controlName == 'fim' && control.value && !((_e = this.dao) === null || _e === void 0 ? void 0 : _e.validDateTime(control.value))) {
                result = "Inválido";
            }
            return result;
        };
        this.formValidation = (form) => {
            if (this.form.controls.fim.value && this.form.controls.inicio.value > this.form.controls.fim.value)
                return "A data do início não pode ser maior que a data do fim!";
            return undefined;
        };
        this.planejamentoDao = injector.get(src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_3__["PlanejamentoDaoService"]);
        this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_5__["UnidadeDaoService"]);
        this.entregaDao = injector.get(src_app_dao_entrega_dao_service__WEBPACK_IMPORTED_MODULE_8__["EntregaDaoService"]);
        this.planejamentoInstitucionalDao = injector.get(src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_3__["PlanejamentoDaoService"]);
        this.planoEntregaEntregaDao = injector.get(src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_4__["PlanoEntregaEntregaDaoService"]);
        this.cadeiaValorDao = injector.get(src_app_dao_cadeia_valor_dao_service__WEBPACK_IMPORTED_MODULE_2__["CadeiaValorDaoService"]);
        this.cadeiaValorProcessoDao = injector.get(src_app_dao_cadeia_valor_processo_dao_service__WEBPACK_IMPORTED_MODULE_10__["CadeiaValorProcessoDaoService"]);
        this.planejamentoObjetivoDao = injector.get(src_app_dao_planejamento_objetivo_dao_service__WEBPACK_IMPORTED_MODULE_9__["PlanejamentoObjetivoDaoService"]);
        this.join = ['objetivos', 'processos', 'unidade'];
        this.form = this.fh.FormBuilder({
            descricao: { default: "" },
            inicio: { default: new Date() },
            fim: { default: new Date() },
            meta: { default: 100 },
            realizado: { default: null },
            plano_entrega_id: { default: "" },
            entrega_pai_id: { default: null },
            entrega_id: { default: null },
            progresso_esperado: { default: 100 },
            progresso_realizado: { default: null },
            unidade_id: { default: null },
            destinatario: { default: null },
            objetivos: { default: [] },
            processos: { default: [] },
            planejamento_id: { default: null },
            cadeia_valor_id: { default: null },
            objetivo_id: { default: null },
            objetivo: { default: null },
        }, this.cdRef, this.validate);
        this.formObjetivos = this.fh.FormBuilder({
            objetivo_id: { default: null },
        }, this.cdRef, this.validate);
        this.formProcessos = this.fh.FormBuilder({
            processo_id: { default: null },
        }, this.cdRef, this.validate);
    }
    ngOnInit() {
        var _a, _b, _c;
        super.ngOnInit();
        this.planejamentoId = (_a = this.metadata) === null || _a === void 0 ? void 0 : _a.planejamento_id;
        this.cadeiaValorId = (_b = this.metadata) === null || _b === void 0 ? void 0 : _b.cadeia_valor_id;
        this.entity = (_c = this.metadata) === null || _c === void 0 ? void 0 : _c.entrega;
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _a, _b;
            yield ((_a = this.planejamento) === null || _a === void 0 ? void 0 : _a.loadSearch(this.planejamentoId));
            yield ((_b = this.cadeiaValor) === null || _b === void 0 ? void 0 : _b.loadSearch(this.cadeiaValorId));
        }))();
    }
    loadData(entity, form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formValue = Object.assign({}, form.value);
            form.patchValue(this.util.fillForm(formValue, entity));
            //form.controls.planejamento_id.setValue(this.planejamentoId);
            //form.controls.cadeia_valor_id.setValue(this.cadeiaValorId);
        });
    }
    initializeData(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadData(this.entity, form);
        });
    }
    saveData(form) {
        return new Promise((resolve, reject) => {
            var _a, _b, _c, _d, _e, _f;
            let entrega = this.util.fill(new src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_6__["PlanoEntregaEntrega"](), this.entity);
            (_a = this.gridObjetivos) === null || _a === void 0 ? void 0 : _a.confirm();
            (_b = this.gridProcessos) === null || _b === void 0 ? void 0 : _b.confirm();
            entrega = this.util.fillForm(entrega, this.form.value);
            entrega.objetivos = entrega.objetivos.filter(x => ["ADD", "DELETE"].includes(x._status || ""));
            entrega.processos = entrega.processos.filter(x => ["ADD", "DELETE"].includes(x._status || ""));
            entrega.unidade = (_d = (_c = this.demandante) === null || _c === void 0 ? void 0 : _c.selectedItem) === null || _d === void 0 ? void 0 : _d.entity;
            entrega.entrega = (_f = (_e = this.entrega) === null || _e === void 0 ? void 0 : _e.selectedItem) === null || _f === void 0 ? void 0 : _f.entity;
            resolve(new src_app_services_navigate_service__WEBPACK_IMPORTED_MODULE_11__["NavigateResult"](entrega));
        });
    }
    checkTipoIndicador(tipos) {
        var _a, _b;
        return tipos.includes(((_b = (_a = this.entrega) === null || _a === void 0 ? void 0 : _a.selectedItem) === null || _b === void 0 ? void 0 : _b.entity).tipo_indicador);
    }
    dynamicOptionsObjetivos(row) {
        let result = [];
        let objetivo = row;
        result.push({ label: "Excluir", icon: "bi bi-trash", color: "btn-outline-danger", onClick: (objetivo) => { this.removeObjetivo(objetivo); } });
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return {
                id: this.dao.generateUuid(),
                _status: "ADD"
            };
        });
    }
    removeObjetivo(row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let confirm = yield this.dialog.confirm("Exclui ?", "Deseja realmente excluir?");
            if (confirm)
                row._status = "DELETE";
            return false;
        });
    }
    saveObjetivo(form, row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let consolidado = row;
            if (form.controls.objetivo_id.value.length && this.inputObjetivo.selectedItem) {
                consolidado.objetivo_id = form.controls.objetivo_id.value;
                consolidado.objetivo = this.inputObjetivo.selectedItem.entity;
                return consolidado;
            }
            return undefined;
        });
    }
    addProcesso() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return {
                id: this.dao.generateUuid(),
                _status: "ADD"
            };
        });
    }
    removeProcesso(row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let confirm = yield this.dialog.confirm("Exclui ?", "Deseja realmente excluir?");
            if (confirm)
                row._status = "DELETE";
            return false;
        });
    }
    saveProcesso(form, row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let consolidado = row;
            if (form.controls.processo_id.value.length && this.inputProcesso.selectedItem) {
                consolidado.processo_id = form.controls.processo_id.value;
                consolidado.processo = this.inputProcesso.selectedItem.entity;
                return consolidado;
            }
            return undefined;
        });
    }
}
PlanoEntregaFormEntregaComponent.ɵfac = function PlanoEntregaFormEntregaComponent_Factory(t) { return new (t || PlanoEntregaFormEntregaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["Injector"])); };
PlanoEntregaFormEntregaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: PlanoEntregaFormEntregaComponent, selectors: [["plano-entrega-form-entrega"]], viewQuery: function PlanoEntregaFormEntregaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__["EditableFormComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c8, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.gridProcessos = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.gridObjetivos = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.entregas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.planejamento = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.cadeiaValor = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.inputObjetivo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.inputProcesso = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.entrega = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.demandante = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 22, consts: [[3, "form", "disabled", "title", "submit", "cancel"], ["display", "", "right", "", 3, "title"], ["tabs", ""], ["key", "ENTREGAS", "label", "Entregas"], [1, "row"], ["controlName", "entrega_pai_id", 3, "size", "label", "dao"], ["controlName", "entrega_id", 3, "size", "dao"], ["entrega", ""], ["label", "Descri\u00E7\u00E3o da Entrega", "controlName", "descricao", 3, "size"], ["title", "Especifica\u00E7\u00E3o das Entregas"], ["date", "", "label", "In\u00EDcio", "controlName", "inicio", 3, "size", "labelInfo"], ["date", "", "label", "Fim", "controlName", "fim", 3, "size", "labelInfo"], ["label", "Demandante", "controlName", "unidade_id", 3, "size", "dao"], ["demandante", ""], ["label", "Destinat\u00E1rio", "controlName", "destinatario", 3, "size"], ["class", "row", 4, "ngIf"], ["label", "Progresso Esperado", "controlName", "progresso_esperado", "sufix", "%", 3, "size"], ["label", "Progresso Realizado", "controlName", "progresso_realizado", "sufix", "%", 3, "size"], ["key", "OBJETIVOS", "label", "Objetivos", 4, "ngIf"], ["key", "PROCESSOS", "label", "Processos", 4, "ngIf"], ["label", "Meta", "controlName", "meta", "sufix", "%", 3, "size", 4, "ngIf"], ["label", "Meta", "controlName", "meta", 3, "size", 4, "ngIf"], ["label", "Realizado", "controlName", "realizado", "sufix", "%", 3, "size", 4, "ngIf"], ["label", "Realizado", "controlName", "realizado", 3, "size", 4, "ngIf"], ["label", "Meta", "controlName", "meta", "sufix", "%", 3, "size"], ["label", "Meta", "controlName", "meta", 3, "size"], ["label", "Realizado", "controlName", "realizado", "sufix", "%", 3, "size"], ["label", "Realizado", "controlName", "realizado", 3, "size"], ["key", "OBJETIVOS", "label", "Objetivos"], ["controlName", "planejamento_id", "disabled", "", 3, "size", "dao"], ["planejamento", ""], ["editable", "", 3, "control", "form", "hasDelete", "hasEdit", "add", "remove", "save"], ["gridObjetivos", ""], ["title", "Objetivo", 3, "template", "editTemplate"], ["columnObjetivo", ""], ["editObjetivo", ""], ["type", "options"], ["controlName", "objetivo_id", "label", "", "icon", "", 3, "size", "where", "dao", "selectRoute"], ["inputObjetivo", ""], ["key", "PROCESSOS", "label", "Processos"], ["controlName", "cadeia_valor_id", "disabled", "", 3, "size", "dao"], ["cadeiaValor", ""], ["gridProcessos", ""], ["title", "Processos", 3, "template", "editTemplate"], ["processo", ""], ["editProcesso", ""], ["type", "options", 3, "dynamicButtons"], ["controlName", "processo_id", "label", "", 3, "size", "where", "dao", "selectRoute"], ["inputProcesso", ""]], template: function PlanoEntregaFormEntregaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "editable-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("submit", function PlanoEntregaFormEntregaComponent_Template_editable_form_submit_0_listener() { return ctx.onSaveData(); })("cancel", function PlanoEntregaFormEntregaComponent_Template_editable_form_cancel_0_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "tabs", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "input-search", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "separator");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "input-search", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "input-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "separator", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "input-datetime", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "input-datetime", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "input-search", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "input-text", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, PlanoEntregaFormEntregaComponent_div_20_Template, 7, 12, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "input-number", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "input-number", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, PlanoEntregaFormEntregaComponent_tab_24_Template, 12, 11, "tab", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, PlanoEntregaFormEntregaComponent_tab_25_Template, 12, 12, "tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", !ctx.isModal ? ctx.title : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 12)("label", "Entrega Superior")("dao", ctx.planoEntregaEntregaDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6)("dao", ctx.entregaDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6)("labelInfo", "In\u00EDcio " + ctx.lex.noun("Plano de Entregas", false, true));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6)("labelInfo", "Fim " + ctx.lex.noun("Plano de Entregas", false, true) + "(Estimativa Inicial)");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6)("dao", ctx.unidadeDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r1 == null ? null : _r1.selectedItem == null ? null : _r1.selectedItem.entity);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.planejamentoId == null ? null : ctx.planejamentoId.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.cadeiaValorId == null ? null : ctx.cadeiaValorId.length);
    } }, directives: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__["EditableFormComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"], _components_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_14__["TabComponent"], _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_15__["InputSearchComponent"], _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_16__["SeparatorComponent"], _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_17__["InputTextComponent"], _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_18__["InputDatetimeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _components_input_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_20__["InputNumberComponent"], _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_21__["InputSelectComponent"], _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_22__["GridComponent"], _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_23__["ColumnsComponent"], _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_24__["ColumnComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuby1lbnRyZWdhLWZvcm0tZW50cmVnYS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "GyWW":
/*!******************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: PlanoEntregaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoEntregaRoutingModule", function() { return PlanoEntregaRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guards/auth.guard */ "UTcu");
/* harmony import */ var src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/resolvies/config.resolver */ "toza");
/* harmony import */ var _plano_entrega_list_plano_entrega_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plano-entrega-list/plano-entrega-list.component */ "yeqo");
/* harmony import */ var _plano_entrega_form_plano_entrega_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plano-entrega-form/plano-entrega-form.component */ "T0qe");
/* harmony import */ var _plano_entrega_mapa_entregas_plano_entrega_mapa_entregas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plano-entrega-mapa-entregas/plano-entrega-mapa-entregas.component */ "X9hI");
/* harmony import */ var _plano_entrega_form_adesao_plano_entrega_form_adesao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plano-entrega-form-adesao/plano-entrega-form-adesao.component */ "4ulB");
/* harmony import */ var _plano_entrega_form_entrega_plano_entrega_form_entrega_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plano-entrega-form-entrega/plano-entrega-form-entrega.component */ "74r+");
/* harmony import */ var _plano_entrega_list_entrega_list_plano_entrega_list_entrega_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plano-entrega-list-entrega-list/plano-entrega-list-entrega-list.component */ "R/nY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [
    { path: '', component: _plano_entrega_list_plano_entrega_list_component__WEBPACK_IMPORTED_MODULE_3__["PlanoEntregaListComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Plano de Entrega" } },
    { path: 'new', component: _plano_entrega_form_plano_entrega_form_component__WEBPACK_IMPORTED_MODULE_4__["PlanoEntregaFormComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Inclusão", modal: true } },
    { path: ':id/edit', component: _plano_entrega_form_plano_entrega_form_component__WEBPACK_IMPORTED_MODULE_4__["PlanoEntregaFormComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Edição", modal: true } },
    { path: ':id/consult', component: _plano_entrega_form_plano_entrega_form_component__WEBPACK_IMPORTED_MODULE_4__["PlanoEntregaFormComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Consultar", modal: true } },
    { path: 'entrega', component: _plano_entrega_form_entrega_plano_entrega_form_entrega_component__WEBPACK_IMPORTED_MODULE_7__["PlanoEntregaFormEntregaComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Entregas do Plano de Entrega", modal: true } },
    { path: 'entregaList', component: _plano_entrega_list_entrega_list_plano_entrega_list_entrega_list_component__WEBPACK_IMPORTED_MODULE_8__["PlanoEntregaListEntregaListComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Entregas do Plano de Entrega", modal: true } },
    { path: 'entrega/objetivos/:objetivo_id', component: _plano_entrega_mapa_entregas_plano_entrega_mapa_entregas_component__WEBPACK_IMPORTED_MODULE_5__["PlanoEntregaMapaEntregasComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Entregas", modal: true } },
    { path: 'entrega/processos/:processo_id', component: _plano_entrega_mapa_entregas_plano_entrega_mapa_entregas_component__WEBPACK_IMPORTED_MODULE_5__["PlanoEntregaMapaEntregasComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Entregas", modal: true } },
    { path: 'adesao', component: _plano_entrega_form_adesao_plano_entrega_form_adesao_component__WEBPACK_IMPORTED_MODULE_6__["PlanoEntregaFormAdesaoComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Adesão", modal: true } },
];
class PlanoEntregaRoutingModule {
}
PlanoEntregaRoutingModule.ɵfac = function PlanoEntregaRoutingModule_Factory(t) { return new (t || PlanoEntregaRoutingModule)(); };
PlanoEntregaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: PlanoEntregaRoutingModule });
PlanoEntregaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](PlanoEntregaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "MoEX":
/*!***********************************************!*\
  !*** ./src/app/models/plano-entrega.model.ts ***!
  \***********************************************/
/*! exports provided: PlanoEntrega */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoEntrega", function() { return PlanoEntrega; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ "rBj3");

class PlanoEntrega extends _base_model__WEBPACK_IMPORTED_MODULE_0__["Base"] {
    constructor(data) {
        super();
        this.data_fim = null; // Data em que o registro foi deletado (soft-delete)
        this.inicio = new Date(); // Data inicio do plano de entrega
        this.fim = null; // Data fim do plano de entrega
        this.nome = ""; // Nome do plano de entrega
        this.status = 'INCLUINDO'; // Status do plano de entrega
        this.metadados = undefined; // Campo virtual contendo informações calculadas pelo servidor
        this.unidade_id = '';
        this.plano_entrega_id = null;
        this.planejamento_id = null;
        this.cadeia_valor_id = null;
        this.programa_id = null;
        this.entregas = [];
        this.initialization(data);
    }
}


/***/ }),

/***/ "PtyJ":
/*!**********************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega.module.ts ***!
  \**********************************************************************/
/*! exports provided: PlanoEntregaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoEntregaModule", function() { return PlanoEntregaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _plano_entrega_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plano-entrega-routing.module */ "GyWW");
/* harmony import */ var _plano_entrega_list_plano_entrega_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plano-entrega-list/plano-entrega-list.component */ "yeqo");
/* harmony import */ var _plano_entrega_form_plano_entrega_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plano-entrega-form/plano-entrega-form.component */ "T0qe");
/* harmony import */ var _plano_entrega_list_entrega_plano_entrega_list_entrega_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plano-entrega-list-entrega/plano-entrega-list-entrega.component */ "kPQ9");
/* harmony import */ var _plano_entrega_mapa_entregas_plano_entrega_mapa_entregas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plano-entrega-mapa-entregas/plano-entrega-mapa-entregas.component */ "X9hI");
/* harmony import */ var _plano_entrega_form_adesao_plano_entrega_form_adesao_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plano-entrega-form-adesao/plano-entrega-form-adesao.component */ "4ulB");
/* harmony import */ var _plano_entrega_form_entrega_plano_entrega_form_entrega_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plano-entrega-form-entrega/plano-entrega-form-entrega.component */ "74r+");
/* harmony import */ var _planejamento_institucional_planejamento_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../planejamento-institucional/planejamento.module */ "f1z4");
/* harmony import */ var _cadeia_valor_cadeia_valor_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cadeia-valor/cadeia-valor.module */ "pRTT");
/* harmony import */ var _plano_entrega_list_entrega_list_plano_entrega_list_entrega_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plano-entrega-list-entrega-list/plano-entrega-list-entrega-list.component */ "R/nY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class PlanoEntregaModule {
}
PlanoEntregaModule.ɵfac = function PlanoEntregaModule_Factory(t) { return new (t || PlanoEntregaModule)(); };
PlanoEntregaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: PlanoEntregaModule });
PlanoEntregaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
            _plano_entrega_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlanoEntregaRoutingModule"],
            _planejamento_institucional_planejamento_module__WEBPACK_IMPORTED_MODULE_9__["PlanejamentoModule"],
            _cadeia_valor_cadeia_valor_module__WEBPACK_IMPORTED_MODULE_10__["CadeiaValorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](PlanoEntregaModule, { declarations: [_plano_entrega_list_plano_entrega_list_component__WEBPACK_IMPORTED_MODULE_3__["PlanoEntregaListComponent"],
        _plano_entrega_form_plano_entrega_form_component__WEBPACK_IMPORTED_MODULE_4__["PlanoEntregaFormComponent"],
        _plano_entrega_list_entrega_plano_entrega_list_entrega_component__WEBPACK_IMPORTED_MODULE_5__["PlanoEntregaListEntregaComponent"],
        _plano_entrega_form_adesao_plano_entrega_form_adesao_component__WEBPACK_IMPORTED_MODULE_7__["PlanoEntregaFormAdesaoComponent"],
        _plano_entrega_mapa_entregas_plano_entrega_mapa_entregas_component__WEBPACK_IMPORTED_MODULE_6__["PlanoEntregaMapaEntregasComponent"],
        _plano_entrega_mapa_entregas_plano_entrega_mapa_entregas_component__WEBPACK_IMPORTED_MODULE_6__["PlanoEntregaMapaEntregasComponent"],
        _plano_entrega_form_entrega_plano_entrega_form_entrega_component__WEBPACK_IMPORTED_MODULE_8__["PlanoEntregaFormEntregaComponent"],
        _plano_entrega_list_entrega_list_plano_entrega_list_entrega_list_component__WEBPACK_IMPORTED_MODULE_11__["PlanoEntregaListEntregaListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
        _plano_entrega_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlanoEntregaRoutingModule"],
        _planejamento_institucional_planejamento_module__WEBPACK_IMPORTED_MODULE_9__["PlanejamentoModule"],
        _cadeia_valor_cadeia_valor_module__WEBPACK_IMPORTED_MODULE_10__["CadeiaValorModule"]] }); })();


/***/ }),

/***/ "R/nY":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-list-entrega-list/plano-entrega-list-entrega-list.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: PlanoEntregaListEntregaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoEntregaListEntregaListComponent", function() { return PlanoEntregaListEntregaListComponent; });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/grid/grid.component */ "m4bG");
/* harmony import */ var src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/plano-entrega-entrega-dao.service */ "DqQh");
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ "Ufbc");
/* harmony import */ var src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/plano-entrega-entrega.model */ "YrS0");
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ "+vn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ "kHdc");
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ "lYxd");
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ "8OLq");
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ "d7UH");
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ "pFmK");
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ "f3Td");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ "np0s");
/* harmony import */ var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/progress-bar/progress-bar.component */ "uSqO");
















function PlanoEntregaListEntregaListComponent_h3_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function PlanoEntregaListEntregaListComponent_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "toolbar", 20);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttons", ctx_r1.buttons);
} }
function PlanoEntregaListEntregaListComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r12.descricao + " / " + row_r12.demandante + " / " + row_r12.destinatario);
} }
function PlanoEntregaListEntregaListComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.row;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r5.dao.getDateFormatted(row_r13.inicio) + " at\u00E9 " + ctx_r5.dao.getDateFormatted(row_r13.fim), "");
} }
function PlanoEntregaListEntregaListComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r14.entrega_id);
} }
function PlanoEntregaListEntregaListComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r15.meta + " / " + row_r15.realizado);
} }
function PlanoEntregaListEntregaListComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "progress-bar", 21);
} if (rf & 2) {
    const row_r16 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", row_r16.progresso_realizado);
} }
class PlanoEntregaListEntregaListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_4__["PageListBase"] {
    constructor(injector) {
        super(injector, src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_3__["PlanoEntregaEntrega"], src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_1__["PlanoEntregaEntregaDaoService"]);
        this.injector = injector;
        this.buttons = [];
        this.filterWhere = (filter) => {
            var _a, _b;
            let form = filter.value;
            let result = [];
            if ((_a = form.planejamento_id) === null || _a === void 0 ? void 0 : _a.length) {
                result.push(["planejamento_id", "==", form.planejamento_id]);
            }
            if ((_b = form.nome) === null || _b === void 0 ? void 0 : _b.length) {
                result.push(["or", ["nome", "like", "%" + form.nome.replace(" ", "%") + "%"], ["sigla", "like", "%" + form.nome.replace(" ", "%") + "%"]]);
            }
            return result;
        };
        this.planoEntregaDao = injector.get(src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_1__["PlanoEntregaEntregaDaoService"]);
        this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_2__["UnidadeDaoService"]);
        this.title = this.lex.noun("Entregas", true);
        this.filter = this.fh.FormBuilder({
            nome: { default: "" },
            descricao: { default: "" },
            unidade_id: { default: "" },
            destinatario: { default: "" },
        });
    }
    dynamicOptions(row) {
        let result = [];
        let objetivo = row;
        result.push({ label: "Informações", icon: "bi bi-info-circle", onClick: (objetivo) => this.go.navigate({ route: ['gestao', 'planejamento', 'objetivo', objetivo.id, 'consult'] }, { modal: true }) });
        return result;
    }
    filterClear(filter) {
        super.filterClear(filter);
    }
}
PlanoEntregaListEntregaListComponent.ɵfac = function PlanoEntregaListEntregaListComponent_Factory(t) { return new (t || PlanoEntregaListEntregaListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injector"])); };
PlanoEntregaListEntregaListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PlanoEntregaListEntregaListComponent, selectors: [["app-plano-entrega-list-entrega-list"]], viewQuery: function PlanoEntregaListEntregaListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__["GridComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 28, vars: 30, consts: [["class", "my-2", 4, "ngIf"], [3, "dao", "orderBy", "groupBy", "join", "selectable", "select"], [3, "buttons", 4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Nome", "controlName", "nome", "placeholder", "Nome", 3, "size", "control"], ["label", "Descri\u00E7\u00E3o", "controlName", "descricao", "placeholder", "Descri\u00E7\u00E3o", 3, "size", "control"], ["label", "Demandante", "controlName", "unidade_id", 3, "size", "dao"], ["label", "Destinat\u00E1rio", "controlName", "destinatario", "placeholder", "Destinat\u00E1rio", 3, "size", "control"], [3, "title", "template"], ["columnEntregaCliente", ""], ["columnDatas", ""], ["title", "Entrega", 3, "template"], ["columnIndicador", ""], ["columnMetaRealizado", ""], ["title", "Progresso", 3, "template"], ["columnProgresso", ""], ["type", "options"], [3, "rows"], [1, "my-2"], [3, "buttons"], ["color", "success", 3, "value"]], template: function PlanoEntregaListEntregaListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PlanoEntregaListEntregaListComponent_h3_0_Template, 2, 1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("select", function PlanoEntregaListEntregaListComponent_Template_grid_select_1_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PlanoEntregaListEntregaListComponent_toolbar_2_Template, 1, 1, "toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input-search", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PlanoEntregaListEntregaListComponent_ng_template_12_Template, 2, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, PlanoEntregaListEntregaListComponent_ng_template_15_Template, 2, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, PlanoEntregaListEntregaListComponent_ng_template_18_Template, 2, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, PlanoEntregaListEntregaListComponent_ng_template_21_Template, 2, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, PlanoEntregaListEntregaListComponent_ng_template_24_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "pagination", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](19);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dao", ctx.dao)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.selectable);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("size", 6)("control", ctx.filter.controls.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("size", 6)("control", ctx.filter.controls.descricao);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("size", 6)("dao", ctx.unidadeDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("size", 6)("control", ctx.filter.controls.destinatario);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Entrega\nDemandante\nDestinat\u00E1rio")("template", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Data In\u00EDcio\nData Fim")("template", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("template", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Meta\nRealizado")("template", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("template", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rows", ctx.rowsLimit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__["GridComponent"], _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterComponent"], _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__["InputTextComponent"], _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_9__["InputSearchComponent"], _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_10__["ColumnsComponent"], _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_11__["ColumnComponent"], _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__["PaginationComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"], _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_14__["ProgressBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuby1lbnRyZWdhLWxpc3QtZW50cmVnYS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "T0qe":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-form/plano-entrega-form.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PlanoEntregaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoEntregaFormComponent", function() { return PlanoEntregaFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/editable-form/editable-form.component */ "RKEd");
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/grid/grid.component */ "m4bG");
/* harmony import */ var src_app_dao_cadeia_valor_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/cadeia-valor-dao.service */ "nLly");
/* harmony import */ var src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/planejamento-dao.service */ "NJJz");
/* harmony import */ var src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dao/plano-entrega-dao.service */ "lKXT");
/* harmony import */ var src_app_dao_programa_dao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dao/programa-dao.service */ "bsmI");
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ "Ufbc");
/* harmony import */ var src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/plano-entrega.model */ "MoEX");
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ "793T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ "lYxd");
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ "8OLq");
/* harmony import */ var _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/input/input-datetime/input-datetime.component */ "NRF3");
/* harmony import */ var _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/separator/separator.component */ "FVj5");
/* harmony import */ var _plano_entrega_list_entrega_plano_entrega_list_entrega_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../plano-entrega-list-entrega/plano-entrega-list-entrega.component */ "kPQ9");

















class PlanoEntregaFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_9__["PageFormBase"] {
    constructor(injector) {
        super(injector, src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_8__["PlanoEntrega"], src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_5__["PlanoEntregaDaoService"]);
        this.injector = injector;
        this.validate = (control, controlName) => {
            var _a, _b, _c;
            let result = null;
            if (['nome', 'unidade_id'].indexOf(controlName) >= 0 && !((_a = control.value) === null || _a === void 0 ? void 0 : _a.length)) {
                result = "Obrigatório";
            }
            if (['inicio'].indexOf(controlName) >= 0 && !((_b = this.dao) === null || _b === void 0 ? void 0 : _b.validDateTime(control.value))) {
                result = "Inválido";
            }
            if (controlName == 'fim' && control.value && !((_c = this.dao) === null || _c === void 0 ? void 0 : _c.validDateTime(control.value))) {
                result = "Inválido";
            }
            return result;
        };
        this.formValidation = (form) => {
            if (this.form.controls.fim.value && this.form.controls.inicio.value > this.form.controls.fim.value)
                return "A data do início não pode ser maior que a data do fim!";
            return undefined;
        };
        this.titleEdit = (entity) => {
            return "Editando ";
        };
        this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_7__["UnidadeDaoService"]);
        this.programaDao = injector.get(src_app_dao_programa_dao_service__WEBPACK_IMPORTED_MODULE_6__["ProgramaDaoService"]);
        this.cadeiaValorDao = injector.get(src_app_dao_cadeia_valor_dao_service__WEBPACK_IMPORTED_MODULE_3__["CadeiaValorDaoService"]);
        this.planejamentoInstitucionalDao = injector.get(src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_4__["PlanejamentoDaoService"]);
        this.join = ["entregas.entrega", "unidade", "entregas.unidade"];
        this.modalWidth = 1200;
        this.form = this.fh.FormBuilder({
            nome: { default: "" },
            inicio: { default: new Date() },
            fim: { default: new Date() },
            status: { default: 'INCLUINDO' },
            unidade_id: { default: "" },
            plano_entrega_id: { default: null },
            planejamento_id: { default: null },
            cadeia_valor_id: { default: null },
            programa_id: { default: null },
            entregas: { default: [] },
        }, this.cdRef, this.validate);
    }
    loadData(entity, form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formValue = Object.assign({}, form.value);
            form.patchValue(this.util.fillForm(formValue, entity));
            this.cdRef.detectChanges();
        });
    }
    initializeData(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadData(this.entity, this.form);
        });
    }
    saveData(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var _a;
                let planoEntrega = this.util.fill(new src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_8__["PlanoEntrega"](), this.entity);
                planoEntrega = this.util.fillForm(planoEntrega, this.form.value);
                planoEntrega.entregas = ((_a = planoEntrega.entregas) === null || _a === void 0 ? void 0 : _a.filter(x => x._status)) || [];
                resolve(planoEntrega);
            });
        });
    }
    dynamicButtons(row) {
        let result = [];
        return result;
    }
}
PlanoEntregaFormComponent.ɵfac = function PlanoEntregaFormComponent_Factory(t) { return new (t || PlanoEntregaFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["Injector"])); };
PlanoEntregaFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: PlanoEntregaFormComponent, selectors: [["app-plano-entrega-form"]], viewQuery: function PlanoEntregaFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__["EditableFormComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 19, consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row"], ["label", "Nome", "controlName", "nome", 3, "size"], ["controlName", "programa_id", 3, "size", "dao"], ["date", "", "label", "In\u00EDcio", "controlName", "inicio", 3, "size", "labelInfo"], ["date", "", "label", "Fim", "controlName", "fim", 3, "size", "labelInfo"], ["controlName", "unidade_id", 3, "size", "dao"], ["controlName", "planejamento_id", "label", "Planejamento Institucional", 3, "size", "dao"], ["controlName", "cadeia_valor_id", "label", "Cadeia de Valor", 3, "size", "dao"], ["title", "Entregas"], ["noPersist", "", 3, "control", "planejamentoId", "cadeiaValorId"], ["entregas", ""]], template: function PlanoEntregaFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "editable-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("submit", function PlanoEntregaFormComponent_Template_editable_form_submit_0_listener() { return ctx.onSaveData(); })("cancel", function PlanoEntregaFormComponent_Template_editable_form_cancel_0_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "input-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "input-search", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "input-datetime", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "input-datetime", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "input-search", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "input-search", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "input-search", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "separator", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "plano-entrega-list-entrega", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 4)("dao", ctx.programaDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 2)("labelInfo", "In\u00EDcio " + ctx.lex.noun("Planejamento Institucional", false, true));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 2)("labelInfo", "Fim " + ctx.lex.noun("Planejamento Institucional", false, true));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 4)("dao", ctx.unidadeDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 4)("dao", ctx.planejamentoInstitucionalDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", 4)("dao", ctx.cadeiaValorDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.form.controls.entregas)("planejamentoId", ctx.form.controls.planejamento_id.value)("cadeiaValorId", ctx.form.controls.cadeia_valor_id.value);
    } }, directives: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__["EditableFormComponent"], _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_11__["InputTextComponent"], _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_12__["InputSearchComponent"], _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_13__["InputDatetimeComponent"], _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_14__["SeparatorComponent"], _plano_entrega_list_entrega_plano_entrega_list_entrega_component__WEBPACK_IMPORTED_MODULE_15__["PlanoEntregaListEntregaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuby1lbnRyZWdhLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "X9hI":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-mapa-entregas/plano-entrega-mapa-entregas.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PlanoEntregaMapaEntregasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoEntregaMapaEntregasComponent", function() { return PlanoEntregaMapaEntregasComponent; });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/grid/grid.component */ "m4bG");
/* harmony import */ var src_app_dao_entrega_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/entrega-dao.service */ "724m");
/* harmony import */ var src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/plano-entrega-entrega-dao.service */ "DqQh");
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ "Ufbc");
/* harmony import */ var src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/plano-entrega-entrega.model */ "YrS0");
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ "+vn/");
/* harmony import */ var _plano_entrega_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../plano-entrega.service */ "zX2r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ "np0s");
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ "kHdc");
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ "8OLq");
/* harmony import */ var _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/input/input-datetime/input-datetime.component */ "NRF3");
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ "d7UH");
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ "pFmK");
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ "f3Td");
/* harmony import */ var _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/badge/badge.component */ "jKVP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../components/action-button/action-button.component */ "1JHj");
/* harmony import */ var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../components/progress-bar/progress-bar.component */ "uSqO");




















const _c0 = ["unidade"];
function PlanoEntregaMapaEntregasComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Data:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Cliente:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "badge", 16);
} if (rf & 2) {
    const row_r8 = ctx.row;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r3.util.getDateFormatted(row_r8.inicio), " - ", ctx_r3.util.getDateFormatted(row_r8.fim), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r8.cliente, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r8.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", row_r8.plano_entrega.unidade.sigla)("hint", ctx_r3.lex.noun("plano de entrega"));
} }
function PlanoEntregaMapaEntregasComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Meta");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.row;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.entregaService.getValorMeta(row_r9));
} }
function PlanoEntregaMapaEntregasComponent_ng_template_18_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Regular");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PlanoEntregaMapaEntregasComponent_ng_template_18_progress_bar_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "progress-bar", 28);
} if (rf & 2) {
    const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", row_r10.realizado.porcentagem);
} }
function PlanoEntregaMapaEntregasComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Realizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, PlanoEntregaMapaEntregasComponent_ng_template_18_h2_5_Template, 2, 0, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, PlanoEntregaMapaEntregasComponent_ng_template_18_progress_bar_6_Template, 1, 1, "progress-bar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "action-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r10 = ctx.row;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r7.entregaService.isPorcentagem(row_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.entregaService.isPorcentagem(row_r10));
} }
class PlanoEntregaMapaEntregasComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_5__["PageListBase"] {
    constructor(injector) {
        super(injector, src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_4__["PlanoEntregaEntrega"], src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_2__["PlanoEntregaEntregaDaoService"]);
        this.injector = injector;
        this.filterWhere = (filter) => {
            let result = [];
            let form = filter.value;
            if (this.objetivoId)
                result.push(["objetivos.objetivo_id", "==", this.objetivoId]);
            if (this.processoId)
                result.push(["processos.processo_id", "==", this.processoId]);
            if (form.unidade_id)
                result.push(["plano_entrega.unidade_id", "==", form.unidade_id]);
            if (form.entrega_id)
                result.push(["entrega_id", "==", form.entrega_id]);
            if (form.inicio)
                result.push(["data_inicio", ">=", form.inicio]);
            if (form.fim)
                result.push(["data_fim", "<=", form.fim]);
            return result;
        };
        this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_3__["UnidadeDaoService"]);
        this.entregaDao = injector.get(src_app_dao_entrega_dao_service__WEBPACK_IMPORTED_MODULE_1__["EntregaDaoService"]);
        this.entregaService = injector.get(_plano_entrega_service__WEBPACK_IMPORTED_MODULE_6__["PlanoEntregaService"]);
        /* Inicializações */
        this.title = this.lex.noun("Entrega", true);
        this.filter = this.fh.FormBuilder({
            unidade_id: { default: null },
            entrega_id: { default: null },
            inicio: { default: null },
            fim: { default: null }
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
PlanoEntregaMapaEntregasComponent.ɵfac = function PlanoEntregaMapaEntregasComponent_Factory(t) { return new (t || PlanoEntregaMapaEntregasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injector"])); };
PlanoEntregaMapaEntregasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PlanoEntregaMapaEntregasComponent, selectors: [["plano-entrega-mapa-entregas"]], viewQuery: function PlanoEntregaMapaEntregasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__["GridComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.unidade = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 22, consts: [["noHeader", "", 3, "dao", "title", "orderBy", "join"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["controlName", "unidade_id", 3, "size", "dao"], ["unidade", ""], ["controlName", "entrega_id", 3, "size", "dao"], ["entrega", ""], ["date", "", "noIcon", "", "label", "In\u00EDcio", "controlName", "inicio", "labelInfo", "Data de in\u00EDcio do planejamento institucional", 3, "size", "control"], ["date", "", "noIcon", "", "label", "Fim", "controlName", "fim", "labelInfo", "Data do fim do planejamento institucional", 3, "size", "control"], ["title", "Entrega", 3, "template"], ["columnEntrega", ""], ["title", "Meta", 3, "template"], ["columnMeta", ""], ["title", "Realizado", 3, "template"], ["columnRealizado", ""], [3, "rows"], ["icon", "bi bi-list-columns-reverse", "color", "light", 3, "label", "hint"], [1, "meta", "h-100"], [1, "card", "h-100"], [1, "card-body"], [1, "card-title"], [1, "text-primary"], [1, "realizado", "h-100"], ["class", "text-secondary", 4, "ngIf"], ["color", "success", 3, "value", 4, "ngIf"], [1, "card-footer", "p-0"], ["icon", "bi bi-card-checklist"], [1, "text-secondary"], ["color", "success", 3, "value"]], template: function PlanoEntregaMapaEntregasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "filter", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input-search", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input-search", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "input-datetime", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input-datetime", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, PlanoEntregaMapaEntregasComponent_ng_template_12_Template, 11, 6, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, PlanoEntregaMapaEntregasComponent_ng_template_15_Template, 7, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, PlanoEntregaMapaEntregasComponent_ng_template_18_Template, 9, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "pagination", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dao", ctx.dao)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("join", ctx.join);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 4)("dao", ctx.unidadeDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 4)("dao", ctx.entregaDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 2)("control", ctx.filter.controls.inicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 2)("control", ctx.filter.controls.fim);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("template", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("template", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("template", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rows", ctx.rowsLimit);
    } }, directives: [src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__["GridComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"], _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"], _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_10__["InputSearchComponent"], _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_11__["InputDatetimeComponent"], _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_12__["ColumnsComponent"], _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_13__["ColumnComponent"], _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__["PaginationComponent"], _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_15__["BadgeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_17__["ActionButtonComponent"], _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_18__["ProgressBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuby1lbnRyZWdhLW1hcGEtZW50cmVnYXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "YrS0":
/*!*******************************************************!*\
  !*** ./src/app/models/plano-entrega-entrega.model.ts ***!
  \*******************************************************/
/*! exports provided: PlanoEntregaEntrega */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoEntregaEntrega", function() { return PlanoEntregaEntrega; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ "rBj3");

class PlanoEntregaEntrega extends _base_model__WEBPACK_IMPORTED_MODULE_0__["Base"] {
    constructor(data) {
        super();
        this.inicio = new Date();
        this.fim = null;
        this.descricao = "";
        this.homologado = false;
        this.meta = {};
        this.realizado = {};
        this.plano_entrega_id = null;
        this.entrega_id = '';
        this.progresso_esperado = '';
        this.progresso_realizado = '';
        this.descricao_meta = '';
        this.unidade_id = '';
        this.destinatario = '';
        this.entrega_pai_id = null;
        this.objetivos = [];
        this.processos = [];
        this.initialization(data);
    }
}


/***/ }),

/***/ "kPQ9":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-list-entrega/plano-entrega-list-entrega.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PlanoEntregaListEntregaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoEntregaListEntregaComponent", function() { return PlanoEntregaListEntregaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/editable-form/editable-form.component */ "RKEd");
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/grid/grid.component */ "m4bG");
/* harmony import */ var src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/plano-entrega-entrega-dao.service */ "DqQh");
/* harmony import */ var src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/plano-entrega-entrega.model */ "YrS0");
/* harmony import */ var src_app_modules_base_page_frame_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/base/page-frame-base */ "rvJe");
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ "d7UH");
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ "pFmK");
/* harmony import */ var _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/badge/badge.component */ "jKVP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/progress-bar/progress-bar.component */ "uSqO");















function PlanoEntregaListEntregaComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Entregas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "badge", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const separator_r12 = ctx.separator;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", separator_r12 == null ? null : separator_r12.text);
} }
function PlanoEntregaListEntregaComponent_ng_template_7_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r13.descricao, " ");
} }
function PlanoEntregaListEntregaComponent_ng_template_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r13.unidade.nome, " ");
} }
function PlanoEntregaListEntregaComponent_ng_template_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r13.destinatario, " ");
} }
function PlanoEntregaListEntregaComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PlanoEntregaListEntregaComponent_ng_template_7_span_0_Template, 3, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PlanoEntregaListEntregaComponent_ng_template_7_span_1_Template, 3, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PlanoEntregaListEntregaComponent_ng_template_7_span_2_Template, 2, 1, "span", 16);
} if (rf & 2) {
    const row_r13 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r13.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r13.unidade_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r13.destinatario);
} }
function PlanoEntregaListEntregaComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.row;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.dao.getDateFormatted(row_r20.inicio), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.dao.getDateFormatted(row_r20.fim), "");
} }
function PlanoEntregaListEntregaComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r21.entrega == null ? null : row_r21.entrega.nome, " ");
} }
function PlanoEntregaListEntregaComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r22.meta, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r22.realizado, " ");
} }
function PlanoEntregaListEntregaComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "progress-bar", 21);
} if (rf & 2) {
    const row_r23 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", row_r23.progresso_realizado);
} }
class PlanoEntregaListEntregaComponent extends src_app_modules_base_page_frame_base__WEBPACK_IMPORTED_MODULE_6__["PageFrameBase"] {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.entityToControl = (value) => value.entregas || [];
        this.options = [];
        this.planoEntregaId = "";
        this.validate = (control, controlName) => {
            var _a;
            let result = null;
            if (['nome'].indexOf(controlName) >= 0 && !((_a = control.value) === null || _a === void 0 ? void 0 : _a.length)) {
                result = "Obrigatório";
            }
            return result;
        };
        this.filterWhere = (filter) => {
            let result = [];
            let form = filter.value;
            result.push(["plano_entrega_id", "==", this.planoEntregaId]);
            return result;
        };
        this.title = this.lex.noun("Entrega");
        this.join = ["unidade", "entidade"];
        this.code = "MOD_PENT_CONS";
        this.cdRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]);
        this.dao = injector.get(src_app_dao_plano_entrega_entrega_dao_service__WEBPACK_IMPORTED_MODULE_4__["PlanoEntregaEntregaDaoService"]);
        this.form = this.fh.FormBuilder({
            descricao: { default: "" },
            inicio: { default: new Date() },
            fim: { default: new Date() },
            meta: { default: "" },
            realizado: { default: null },
            entrega_id: { default: null },
            progresso_esperado: { default: null },
            progresso_realizado: { default: null },
            destinatario: { default: null },
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
    set noPersist(value) { super.noPersist = value; }
    get noPersist() { return super.noPersist; }
    set control(value) { super.control = value; }
    get control() { return super.control; }
    set entity(value) { super.entity = value; }
    get entity() { return super.entity; }
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
    get items() {
        if (!this.gridControl.value)
            this.gridControl.setValue([]);
        return this.gridControl.value;
    }
    ngOnInit() {
        super.ngOnInit();
        this.planoEntregaId = this.urlParams.get("id") || "";
    }
    add() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let entrega = new src_app_models_plano_entrega_entrega_model__WEBPACK_IMPORTED_MODULE_5__["PlanoEntregaEntrega"]({
                _status: "ADD",
                id: this.dao.generateUuid(),
                plano_entrega_id: (_a = this.entity) === null || _a === void 0 ? void 0 : _a.id
            });
            this.go.navigate({ route: ['gestao', 'plano-entrega', 'entrega'] }, {
                metadata: {
                    plano_entrega_id: this.entity,
                    planejamento_id: this.planejamentoId,
                    cadeia_valor_id: this.cadeiaValorId,
                    entrega: entrega,
                },
                modalClose: (modalResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (modalResult) {
                        try {
                            this.isNoPersist ? this.items.push(modalResult) : this.items.push(yield this.dao.save(modalResult));
                            this.cdRef.detectChanges();
                        }
                        catch (error) {
                            this.error((error === null || error === void 0 ? void 0 : error.error) || (error === null || error === void 0 ? void 0 : error.message) || error);
                        }
                    }
                    ;
                })
            });
        });
    }
    edit(entrega) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            entrega._status = entrega._status == "ADD" ? "ADD" : "EDIT";
            let index = this.items.indexOf(entrega);
            this.go.navigate({ route: ['gestao', 'plano-entrega', 'entrega'] }, {
                metadata: {
                    plano_entrega_id: this.entity,
                    planejamento_id: this.planejamentoId,
                    cadeia_valor_id: this.cadeiaValorId,
                    entrega: entrega,
                },
                modalClose: (modalResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    var _a;
                    if (modalResult) {
                        if (!this.isNoPersist)
                            yield ((_a = this.dao) === null || _a === void 0 ? void 0 : _a.save(modalResult));
                        this.items[index] = modalResult;
                    }
                    ;
                })
            });
        });
    }
    delete(entrega) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let confirm = yield this.dialog.confirm("Exclui ?", "Deseja realmente excluir?");
            if (confirm) {
                let index = this.items.indexOf(entrega);
                if (this.isNoPersist) {
                    entrega._status = "DELETE";
                }
                else {
                    yield this.dao.delete(entrega);
                }
                ;
            }
        });
    }
    consult(entrega) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.go.navigate({ route: ['', entrega.id, "consult"] });
        });
    }
}
PlanoEntregaListEntregaComponent.ɵfac = function PlanoEntregaListEntregaComponent_Factory(t) { return new (t || PlanoEntregaListEntregaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
PlanoEntregaListEntregaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlanoEntregaListEntregaComponent, selectors: [["plano-entrega-list-entrega"]], viewQuery: function PlanoEntregaListEntregaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_2__["EditableFormComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    } }, inputs: { cdRef: "cdRef", noPersist: "noPersist", control: "control", entity: "entity", planejamentoId: "planejamentoId", cadeiaValorId: "cadeiaValorId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 18, consts: [["noButtons", "", 3, "form", "disabled"], [1, "row"], ["editable", "", 3, "items", "form", "hasAdd", "hasEdit", "add", "groupTemplate"], ["groupEntregas", ""], [3, "title", "template"], ["columnEntregaCliente", ""], ["columnDatas", ""], ["title", "Entrega", 3, "template"], ["columnEntrega", ""], ["columnMetaRealizado", ""], ["title", "Progresso", 3, "template"], ["columnProgresso", ""], ["type", "options", 3, "onEdit", "options"], [1, "grid-group-text"], [1, "text-wrap"], ["color", "primary", 3, "label"], ["class", "badge bg-light text-dark", 4, "ngIf"], [1, "badge", "bg-light", "text-dark"], [1, "bi", "bi-textarea-t"], [1, "fa-unity", "fab"], [1, "bi", "bi-list-check"], ["color", "success", 3, "value"]], template: function PlanoEntregaListEntregaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "editable-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "grid", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PlanoEntregaListEntregaComponent_ng_template_3_Template, 4, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PlanoEntregaListEntregaComponent_ng_template_7_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PlanoEntregaListEntregaComponent_ng_template_10_Template, 4, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PlanoEntregaListEntregaComponent_ng_template_13_Template, 3, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PlanoEntregaListEntregaComponent_ng_template_16_Template, 4, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PlanoEntregaListEntregaComponent_ng_template_19_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.items)("form", ctx.form)("hasAdd",  true || false)("hasEdit",  true || false)("add", ctx.add.bind(ctx))("groupTemplate", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Entrega\nDemandante\nDestinat\u00E1rio")("template", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Data In\u00EDcio\nData Fim")("template", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("template", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Meta\nRealizado")("template", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("template", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("onEdit", ctx.edit.bind(ctx))("options", ctx.options);
    } }, directives: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_2__["EditableFormComponent"], src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_7__["ColumnsComponent"], _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_8__["ColumnComponent"], _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_9__["BadgeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["ProgressBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuby1lbnRyZWdhLWxpc3QtZW50cmVnYS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "yeqo":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega-list/plano-entrega-list.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PlanoEntregaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoEntregaListComponent", function() { return PlanoEntregaListComponent; });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/grid/grid.component */ "m4bG");
/* harmony import */ var src_app_dao_cadeia_valor_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/cadeia-valor-dao.service */ "nLly");
/* harmony import */ var src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/planejamento-dao.service */ "NJJz");
/* harmony import */ var src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/plano-entrega-dao.service */ "lKXT");
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ "Ufbc");
/* harmony import */ var src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/plano-entrega.model */ "MoEX");
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ "+vn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ "kHdc");
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ "lYxd");
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ "8OLq");
/* harmony import */ var _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/input/input-select/input-select.component */ "txHH");
/* harmony import */ var _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/input/input-datetime/input-datetime.component */ "NRF3");
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ "d7UH");
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ "pFmK");
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ "f3Td");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ "np0s");
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ "puzm");
/* harmony import */ var _plano_entrega_list_entrega_plano_entrega_list_entrega_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../plano-entrega-list-entrega/plano-entrega-list-entrega.component */ "kPQ9");
/* harmony import */ var _components_grid_order_order_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../components/grid/order/order.component */ "zUlN");
/* harmony import */ var _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../components/badge/badge.component */ "jKVP");























function PlanoEntregaListComponent_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "toolbar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "input-switch", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function PlanoEntregaListComponent_toolbar_1_Template_input_switch_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r21.onAgruparChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "input-switch", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function PlanoEntregaListComponent_toolbar_1_Template_input_switch_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r23.grid.reloadFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttons", ctx_r0.toolbarButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 3)("control", ctx_r0.filter.controls.agrupar);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 2)("control", ctx_r0.filter.controls.principais);
} }
function PlanoEntregaListComponent_column_16_ng_template_1_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r28 == null ? null : row_r28.length, "");
} }
function PlanoEntregaListComponent_column_16_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, PlanoEntregaListComponent_column_16_ng_template_1_span_0_Template, 3, 1, "span", 36);
} if (rf & 2) {
    const row_r28 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r28 == null ? null : row_r28.length);
} }
function PlanoEntregaListComponent_column_16_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "plano-entrega-list-entrega", 39);
} if (rf & 2) {
    const row_r31 = ctx.row;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("entity", row_r31)("cdRef", ctx_r27.cdRef);
} }
function PlanoEntregaListComponent_column_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "column", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PlanoEntregaListComponent_column_16_ng_template_1_Template, 1, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, PlanoEntregaListComponent_column_16_ng_template_3_Template, 1, 2, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("align", "center")("hint", ctx_r4.lex.noun("Entregas", true))("template", _r24)("expandTemplate", _r26);
} }
function PlanoEntregaListComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "order", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "#ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r32 = ctx.header;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("header", header_r32);
} }
function PlanoEntregaListComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r33 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("#", row_r33.numero, "");
} }
function PlanoEntregaListComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r34 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("max-width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r34.nome);
} }
function PlanoEntregaListComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r35 = ctx.row;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r12.dao.getDateFormatted(row_r35.inicio), "");
} }
function PlanoEntregaListComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r36 = ctx.row;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r14.dao.getDateFormatted(row_r36.fim), "");
} }
function PlanoEntregaListComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, " Planejamento Institucional");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Cadeia de Valor ");
} }
function PlanoEntregaListComponent_ng_template_34_badge_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "badge", 44);
} if (rf & 2) {
    const row_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("maxWidth", 300)("icon", ctx_r39.entityService.getIcon("Planejamento"))("label", row_r38.planejamento == null ? null : row_r38.planejamento.nome);
} }
function PlanoEntregaListComponent_ng_template_34_badge_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "badge", 44);
} if (rf & 2) {
    const row_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("maxWidth", 300)("icon", ctx_r40.entityService.getIcon("CadeiaValor"))("label", row_r38.cadeiaValor == null ? null : row_r38.cadeiaValor.nome);
} }
function PlanoEntregaListComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, PlanoEntregaListComponent_ng_template_34_badge_0_Template, 1, 3, "badge", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PlanoEntregaListComponent_ng_template_34_badge_1_Template, 1, 3, "badge", 43);
} if (rf & 2) {
    const row_r38 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r38.planejamento);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r38.cadeiaValor);
} }
function PlanoEntregaListComponent_ng_template_37_badge_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "badge", 47);
} }
function PlanoEntregaListComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "badge", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PlanoEntregaListComponent_ng_template_37_badge_1_Template, 1, 0, "badge", 46);
} if (rf & 2) {
    const row_r43 = ctx.row;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("color", ctx_r20.lookup.getColor(ctx_r20.lookup.PLANO_ENTREGA_STATUS, row_r43.status))("icon", ctx_r20.lookup.getIcon(ctx_r20.lookup.PLANO_ENTREGA_STATUS, row_r43.status))("label", ctx_r20.lookup.getValue(ctx_r20.lookup.PLANO_ENTREGA_STATUS, row_r43.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r43.data_cancelamento);
} }
class PlanoEntregaListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_6__["PageListBase"] {
    constructor(injector) {
        super(injector, src_app_models_plano_entrega_model__WEBPACK_IMPORTED_MODULE_5__["PlanoEntrega"], src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_3__["PlanoEntregaDaoService"]);
        this.injector = injector;
        this.showFilter = true;
        this.habilitarAdesaoToolbar = false;
        this.toolbarButtons = [];
        this.botoes = [];
        this.filterWhere = (filter) => {
            var _a, _b, _c, _d;
            let result = [];
            let form = filter.value;
            /*
                (RI_PENT_4) A consulta do grid retornará inicialmente os principais Planos de Entrega do usuário logado (a opção "principais" já vem marcada), que são:
                - os válidos das unidades onde ele possui lotação, e
                - se ele for gestor, os ativos das unidades-pai de onde ele é gestor;
            */
            if ((_a = this.filter) === null || _a === void 0 ? void 0 : _a.controls.principais.value) {
                let w1 = ["unidade_id", "in", (_b = this.auth.unidades) === null || _b === void 0 ? void 0 : _b.map(u => u.id)];
                let w2 = ["unidade_id", "in", (_c = this.auth.unidades) === null || _c === void 0 ? void 0 : _c.map(u => { var _a; return (_a = u.unidade) === null || _a === void 0 ? void 0 : _a.id; })];
                if (this.auth.isGestorAlgumaLotacao())
                    result.push(["or", w1, w2]);
                else
                    result.push(w1);
            }
            else {
                if ((_d = form.nome) === null || _d === void 0 ? void 0 : _d.length) {
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
            //  (RI_PENT_5) Por padrão, os planos de entregas retornados na listagem do grid são os que possuem data_arquivamento e data_cancelamento nulas.
            result.push(["data_cancelamento", "==", null]);
            result.push(["data_arquivamento", "==", null]);
            return result;
        };
        this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_4__["UnidadeDaoService"]);
        this.planoEntregaDao = injector.get(src_app_dao_plano_entrega_dao_service__WEBPACK_IMPORTED_MODULE_3__["PlanoEntregaDaoService"]);
        this.planejamentoDao = injector.get(src_app_dao_planejamento_dao_service__WEBPACK_IMPORTED_MODULE_2__["PlanejamentoDaoService"]);
        this.cadeiaValorDao = injector.get(src_app_dao_cadeia_valor_dao_service__WEBPACK_IMPORTED_MODULE_1__["CadeiaValorDaoService"]);
        this.unidadeSelecionada = this.auth.unidade;
        /* Inicializações */
        this.title = this.lex.noun('Plano de Entrega', true);
        this.filter = this.fh.FormBuilder({
            agrupar: { default: true },
            principais: { default: true },
            nome: { default: '' },
            inicio: { default: '' },
            fim: { default: '' },
            status: { default: '' },
            unidade_id: { default: null },
            planejamento_id: { default: null },
            cadeia_valor_id: { default: null },
        });
        this.join = ['planejamento:id,nome', 'cadeiaValor:id,nome', 'unidade:id,sigla,path', 'entregas.entrega', 'entregas.unidade'];
        this.groupBy = [{ field: "unidade.sigla", label: "Unidade" }];
        this.BOTAO_ADERIR_OPTION = { label: "Aderir", icon: this.entityService.getIcon("Adesao"), onClick: (() => { this.go.navigate({ route: ['gestao', 'plano-entrega', 'adesao'] }, { metadata: { planoEntrega: this.linha }, modalClose: (modalResult) => { this.refresh(); } }); }).bind(this) };
        this.BOTAO_ADERIR_TOOLBAR = { label: "Aderir", disabled: !this.habilitarAdesaoToolbar, icon: this.entityService.getIcon("Adesao"), onClick: (() => { this.go.navigate({ route: ['gestao', 'plano-entrega', 'adesao'] }, { modalClose: (modalResult) => { this.refresh(); } }); }).bind(this) };
        this.BOTAO_ALTERAR = { label: "Alterar", icon: "bi bi-pencil-square", onClick: (planoEntrega) => this.go.navigate({ route: ['gestao', 'plano-entrega', planoEntrega.id, 'edit'] }, this.modalRefreshId(planoEntrega)) };
        this.BOTAO_ARQUIVAR = { label: "Arquivar", icon: "bi bi-inboxes", onClick: this.arquivar.bind(this) };
        this.BOTAO_AVALIAR = { label: "Avaliar", icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "AVALIADO"), color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "AVALIADO"), onClick: this.avaliar.bind(this) };
        this.BOTAO_CANCELAR_AVALIACAO = { label: "Cancelar avaliação", icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "CONCLUIDO"), color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "CONCLUIDO"), onClick: this.cancelarAvaliacao.bind(this) };
        this.BOTAO_CANCELAR_CONCLUSAO = { label: "Cancelar conclusão", icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "ATIVO"), color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "ATIVO"), onClick: this.cancelarConclusao.bind(this) };
        this.BOTAO_CANCELAR_HOMOLOGACAO = { label: "Cancelar homologação", icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "HOMOLOGANDO"), color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "HOMOLOGANDO"), onClick: this.cancelarHomologacao.bind(this) };
        this.BOTAO_CONCLUIR = { label: "Concluir", id: "CONCLUIDO", icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "CONCLUIDO"), color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "CONCLUIDO"), onClick: this.concluir.bind(this) };
        this.BOTAO_CONSULTAR = { label: "Informações", icon: "bi bi-info-circle", onClick: (planoEntrega) => this.go.navigate({ route: ['gestao', 'plano-entrega', planoEntrega.id, 'consult'] }, { modal: true }) };
        this.BOTAO_DESARQUIVAR = { label: "Desarquivar", icon: "bi bi-reply", onClick: this.desarquivar.bind(this) };
        this.BOTAO_EXCLUIR = { label: "Excluir", icon: "bi bi-trash", onClick: this.delete.bind(this) };
        this.BOTAO_HOMOLOGAR = { label: "Homologar", icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "ATIVO"), color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "ATIVO"), onClick: this.homologar.bind(this) };
        this.BOTAO_LIBERAR_HOMOLOGACAO = { label: "Liberar para homologação", icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "HOMOLOGANDO"), color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "HOMOLOGANDO"), onClick: this.liberarHomologacao.bind(this) };
        this.BOTAO_REATIVAR = { label: "Reativar", icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "ATIVO"), color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "ATIVO"), onClick: this.reativar.bind(this) };
        this.BOTAO_RETIRAR_HOMOLOGACAO = { label: "Retirar de homologação", icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "INCLUINDO"), color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "INCLUINDO"), onClick: this.retirarHomologacao.bind(this) };
        this.BOTAO_SUSPENDER = { label: "Suspender", id: "PAUSADO", icon: this.lookup.getIcon(this.lookup.PLANO_ENTREGA_STATUS, "SUSPENSO"), color: this.lookup.getColor(this.lookup.PLANO_ENTREGA_STATUS, "SUSPENSO"), onClick: this.suspender.bind(this) };
        this.botoes = [this.BOTAO_ADERIR_OPTION, this.BOTAO_ADERIR_TOOLBAR, this.BOTAO_ALTERAR, this.BOTAO_ARQUIVAR, this.BOTAO_AVALIAR, this.BOTAO_CANCELAR_AVALIACAO, this.BOTAO_CANCELAR_CONCLUSAO,
            this.BOTAO_CANCELAR_HOMOLOGACAO, this.BOTAO_CONCLUIR, this.BOTAO_CONSULTAR, this.BOTAO_DESARQUIVAR, this.BOTAO_EXCLUIR, this.BOTAO_HOMOLOGAR, this.BOTAO_LIBERAR_HOMOLOGACAO,
            this.BOTAO_REATIVAR, this.BOTAO_RETIRAR_HOMOLOGACAO, this.BOTAO_SUSPENDER];
    }
    ngOnInit() {
        var _a;
        super.ngOnInit();
        this.showFilter = typeof ((_a = this.queryParams) === null || _a === void 0 ? void 0 : _a.showFilter) != "undefined" ? (this.queryParams.showFilter == "true") : true;
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
        var _a;
        let planos_ativos_unidade_pai = this.planosEntregasAtivosUnidadePai().map(x => x.id);
        let planos_superiores_vinculados_pela_unidade_selecionada = this.planosEntregasAtivosUnidadeSelecionada().map(x => x.plano_entrega_id).filter(x => x != null);
        let condition1 = this.auth.isGestorUnidade() || this.auth.isGestorUnidade((_a = this.auth.unidade) === null || _a === void 0 ? void 0 : _a.unidade_id) || (this.auth.isLotacaoPrincipal(this.auth.unidade) && this.auth.hasPermissionTo("MOD_PENT_ADERIR"));
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
        var _a, _b, _c;
        return ((_c = (_b = (_a = this.auth.unidade) === null || _a === void 0 ? void 0 : _a.unidade) === null || _b === void 0 ? void 0 : _b.planos_entregas) === null || _c === void 0 ? void 0 : _c.filter(x => this.planoEntregaDao.isAtivo(x))) || [];
    }
    planosEntregasAtivosUnidadeSelecionada() {
        var _a, _b, _c;
        return ((_c = (_b = (_a = this.auth) === null || _a === void 0 ? void 0 : _a.unidade) === null || _b === void 0 ? void 0 : _b.planos_entregas) === null || _c === void 0 ? void 0 : _c.filter(x => this.planoEntregaDao.isAtivo(x))) || [];
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
        var _a, _b;
        const agrupar = this.filter.controls.agrupar.value;
        if ((agrupar && !((_a = this.groupBy) === null || _a === void 0 ? void 0 : _a.length)) || (!agrupar && ((_b = this.groupBy) === null || _b === void 0 ? void 0 : _b.length))) {
            this.groupBy = agrupar ? [{ field: "unidade.sigla", label: "Unidade" }] : [];
            this.grid.reloadFilter();
        }
    }
    dynamicButtons(row) {
        let result = [];
        let planoEntrega = row;
        switch (this.situacaoPlano(planoEntrega)) {
            case 'INCLUINDO':
                if (this.botaoAtendeCondicoes(this.BOTAO_LIBERAR_HOMOLOGACAO, row))
                    result.push(this.BOTAO_LIBERAR_HOMOLOGACAO);
                else
                    result.push(this.BOTAO_CONSULTAR);
                break;
            case 'HOMOLOGANDO':
                if (this.botaoAtendeCondicoes(this.BOTAO_HOMOLOGAR, row))
                    result.push(this.BOTAO_HOMOLOGAR);
                else
                    result.push(this.BOTAO_CONSULTAR);
                break;
            case 'ATIVO':
                if (this.botaoAtendeCondicoes(this.BOTAO_CONCLUIR, row))
                    result.push(this.BOTAO_CONCLUIR);
                else
                    result.push(this.BOTAO_CONSULTAR);
                break;
            case 'CONCLUIDO':
                if (this.botaoAtendeCondicoes(this.BOTAO_AVALIAR, row))
                    result.push(this.BOTAO_AVALIAR);
                else
                    result.push(this.BOTAO_CONSULTAR);
                break;
            case 'SUSPENSO':
                if (this.botaoAtendeCondicoes(this.BOTAO_REATIVAR, row))
                    result.push(this.BOTAO_REATIVAR);
                else
                    result.push(this.BOTAO_CONSULTAR);
                break;
            case 'AVALIADO':
                if (this.botaoAtendeCondicoes(this.BOTAO_CANCELAR_AVALIACAO, row))
                    result.push(this.BOTAO_CANCELAR_AVALIACAO);
                else
                    result.push(this.BOTAO_CONSULTAR);
                break;
        }
        return result;
    }
    dynamicOptions(row) {
        let result = [];
        this.linha = row;
        this.botoes.forEach(botao => {
            if (this.botaoAtendeCondicoes(botao, row))
                result.push(botao);
        });
        return result;
    }
    botaoAtendeCondicoes(botao, planoEntrega) {
        var _a, _b, _c, _d, _e, _f;
        switch (botao) {
            case this.BOTAO_ADERIR_OPTION:
                /*
                  (RI_PENT_2) O botão Aderir, nas linhas do grid, deverá aparecer num plano somente se:
                  - o plano estiver com o status Ativo; e
                  - a unidade do plano for a unidade-pai da unidade selecionada pelo usuário; e
                  - se o usuário for Gestor da unidade selecionada, ou ela for sua lotação principal e ele possuir a capacidade "MOD_PENT_ADERIR" ; e
                  - se a unidade selecionada não possuir plano de entrega Ativo no mesmo período do plano em questão;
                */
                return (this.situacaoPlano(planoEntrega) == 'ATIVO' && (planoEntrega.unidade_id == ((_a = this.auth.unidade) === null || _a === void 0 ? void 0 : _a.unidade_id)) && (this.auth.isGestorUnidade() || (this.auth.isLotacaoPrincipal(this.auth.unidade) && this.auth.hasPermissionTo("MOD_PENT_ADERIR"))) &&
                    (this.planosEntregasAtivosUnidadeSelecionada().filter(x => this.util.intersection([{ start: x.inicio, end: x.fim }, { start: planoEntrega.inicio, end: planoEntrega.fim }])).length == 0));
            case this.BOTAO_ALTERAR:
                /*
                  (RN_PENT_4_2) Para ALTERAR um plano de entregas:
                  - o plano precisa estar com o status INCLUINDO ou HOMOLOGANDO, e o usuário logado precisa ser gestor da unidade do plano, ou esta ser sua unidade de lotação principal e ele possuir a capacidade "MOD_PENT_EDT"; ou
                  - o plano precisa ser válido, o usuário logado precisa possuir a capacidade "MOD_PENT_EDT_FLH", e ser gestor da unidade-pai do plano ou possuir a atribuição de HOMOLOGADOR DE PLANO DE ENTREGA para a unidade-pai do plano; (RN_PENT_1_3) ou
                  - o plano precisa estar com o status ATIVO, a unidade do plano precisa ser a unidade de lotação principal do usuário logado, e ele possuir a capacidade "MOD_PENT_EDT_ATV_HOMOL" ou "MOD_PENT_EDT_ATV_ATV";
                 */
                let b_alt1 = ['INCLUINDO', 'HOMOLOGANDO'].includes(this.situacaoPlano(planoEntrega)) && (this.auth.isGestorUnidade(planoEntrega.unidade) || (this.auth.isLotacaoPrincipal(planoEntrega.unidade) && this.auth.hasPermissionTo("MOD_PENT_EDT")));
                let b_alt2 = this.planoEntregaDao.isValido(planoEntrega) && this.auth.hasPermissionTo("MOD_PENT_EDT_FLH") && (this.auth.isGestorUnidade((_b = planoEntrega.unidade) === null || _b === void 0 ? void 0 : _b.unidade_id) || this.auth.isIntegrante('HOMOLOGADOR_PLANO_ENTREGA', planoEntrega.unidade.unidade_id));
                let b_alt3 = this.situacaoPlano(planoEntrega) == 'ATIVO' && this.auth.isLotacaoPrincipal(planoEntrega.unidade) && this.auth.hasPermissionTo(["MOD_PENT_EDT_ATV_HOMOL", "MOD_PENT_EDT_ATV_ATV"]);
                return b_alt1 || b_alt2 || b_alt3;
            case this.BOTAO_ARQUIVAR:
                /*
                  (RN_PENT_4_3) Para ARQUIVAR um plano de entregas:
                  - o plano precisa estar com o status AVALIADO e o usuário logado precisa ser gestor da unidade do plano, ou esta ser sua unidade de lotação principal e ele possuir a capacidade "MOD_PENT_ARQ";
                */
                return this.situacaoPlano(planoEntrega) == 'AVALIADO' && (this.auth.isGestorUnidade(planoEntrega.unidade) || (this.auth.isLotacaoPrincipal(planoEntrega.unidade) && this.auth.hasPermissionTo("MOD_PENT_ARQ")));
            case this.BOTAO_AVALIAR:
                /*
                  (RN_PENT_4_4) Para AVALIAR um plano de entregas:
                  - o plano precisa estar com o status CONCLUIDO e o usuário logado precisa ser gestor da unidade-pai do plano, ou possuir a atribuição de AVALIADOR DE PLANOS DE ENTREGAS para esta unidade; ou
                  - o plano precisa estar com o status CONCLUIDO, o usuário logado precisa ser gestor de alguma unidade da linha hierárquica ascendente da unidade do plano, e possuir a capacidade "MOD_PENT_AVAL_SUBORD";
                */
                let b_av1 = this.situacaoPlano(planoEntrega) == 'CONCLUIDO' && (this.auth.isGestorUnidade((_c = planoEntrega.unidade) === null || _c === void 0 ? void 0 : _c.unidade_id) || this.auth.isIntegrante('AVALIADOR_PLANOS_ENTREGAS', planoEntrega.unidade.unidade_id));
                let b_av2 = this.situacaoPlano(planoEntrega) == 'CONCLUIDO' && this.auth.isGestorLinhaAscendente(planoEntrega.unidade) && this.auth.hasPermissionTo("MOD_PENT_AVAL_SUBORD");
                return b_av1 || b_av2;
            case this.BOTAO_CANCELAR_AVALIACAO:
                /*
                  (RN_PENT_4_5) Para CANCELAR a AVALIAÇÃO de um plano de entregas:
                  - o plano precisa estar com o status AVALIADO e o usuário logado precisa ser gestor da unidade-pai do plano, ou possuir a atribuição de AVALIADOR DE PLANOS DE ENTREGAS para esta unidade;
                */
                return this.situacaoPlano(planoEntrega) == 'AVALIADO' && (this.auth.isGestorUnidade((_d = planoEntrega.unidade) === null || _d === void 0 ? void 0 : _d.unidade_id) || this.auth.isIntegrante('AVALIADOR_PLANOS_ENTREGAS', planoEntrega.unidade.unidade_id));
            case this.BOTAO_CANCELAR_CONCLUSAO:
                /*
                  (RN_PENT_4_6) Para CANCELAR a CONCLUSÃO de um plano de entregas:
                  - o plano precisa estar com o status CONCLUIDO e o usuário logado precisa ser gestor da unidade do plano, ou esta ser sua unidade de lotação principal e ele possuir a capacidade "MOD_PENT_CANC_CONCL";
                */
                return this.situacaoPlano(planoEntrega) == 'CONCLUIDO' && (this.auth.isGestorUnidade(planoEntrega.unidade) || (this.auth.isLotacaoPrincipal(planoEntrega.unidade) && this.auth.hasPermissionTo("MOD_PENT_CANC_CONCL")));
            case this.BOTAO_CANCELAR_HOMOLOGACAO:
                /*
                  (RN_PENT_4_7) Para CANCELAR a HOMOLOGAÇÃO de um plano de entregas:
                  - o plano precisa estar com o status ATIVO e o usuário logado precisa ser gestor da unidade-pai do plano, ou possuir a atribuição de HOMOLOGADOR DE PLANOS DE ENTREGAS para a unidade-pai do plano;
                */
                return this.situacaoPlano(planoEntrega) == 'ATIVO' && (this.auth.isGestorUnidade((_e = planoEntrega.unidade) === null || _e === void 0 ? void 0 : _e.unidade_id) || this.auth.isIntegrante('HOMOLOGADOR_PLANOS_ENTREGAS', planoEntrega.unidade.unidade_id));
            case this.BOTAO_CONCLUIR:
                /*
                  (RN_PENT_4_8) Para CONCLUIR um plano de entregas:
                  - o plano precisa estar com o status ATIVO e o usuário logado precisa ser gestor da unidade do plano, ou esta ser sua unidade de lotação principal e ele possuir a capacidade "MOD_PENT_CONCLUIR";
                */
                return this.situacaoPlano(planoEntrega) == 'ATIVO' && (this.auth.isGestorUnidade(planoEntrega.unidade) || (this.auth.isLotacaoPrincipal(planoEntrega.unidade) && this.auth.hasPermissionTo("MOD_PENT_CONCLUIR")));
            case this.BOTAO_CONSULTAR:
                /*
                  (RN_PENT_4_9) CONSULTAR
                  - todos os participantes podem visualizar todos os planos de entrega;
                */
                break;
            case this.BOTAO_DESARQUIVAR:
                /*
        
                */
                break;
            case this.BOTAO_EXCLUIR:
                /*
                  (RN_PENT_4_10) Para EXCLUIR um plano de entregas:
                  - o plano precisa estar com o status INCLUINDO ou HOMOLOGANDO; e
                  - o usuário logado precisa ser gestor da unidade do plano, ou esta ser sua unidade de lotação principal e ele possuir a capacidade "MOD_PENT_EXCL";
                  - se o plano não atender às condições acima, o usuário deve ser informado das razões pelas quais o plano não foi excluído;
                */
                return ['INCLUINDO', 'HOMOLOGANDO'].includes(this.situacaoPlano(planoEntrega)) && (this.auth.isGestorUnidade(planoEntrega.unidade) || (this.auth.isLotacaoPrincipal(planoEntrega.unidade) && this.auth.hasPermissionTo("MOD_PENT_EXCL")));
                ;
            case this.BOTAO_HOMOLOGAR:
                /*
                  (RN_PENT_4_11) Para HOMOLOGAR um plano de entregas:
                  - o plano precisa estar com o status HOMOLOGANDO e o usuário logado ser gestor da unidade-pai do plano, ou possuir a atribuição de HOMOLOGADOR DE PLANOS DE ENTREGAS para a unidade-pai; (RN_PENT_1_3)(RN_PENT_3_2)
                */
                return this.situacaoPlano(planoEntrega) == 'HOMOLOGANDO' && (this.auth.isGestorUnidade((_f = planoEntrega.unidade) === null || _f === void 0 ? void 0 : _f.unidade_id) || this.auth.isIntegrante('HOMOLOGADOR_PLANOS_ENTREGAS', planoEntrega.unidade.unidade_id));
            case this.BOTAO_LIBERAR_HOMOLOGACAO:
                /*
                  (RN_PENT_4_13) Para LIBERAR PARA HOMOLOGAÇÃO um plano de entregas:
                  - o plano precisa estar com o status INCLUINDO e o usuário logado precisa ser gestor da unidade do plano;
                */
                return this.situacaoPlano(planoEntrega) == 'INCLUINDO' && this.auth.isGestorUnidade(planoEntrega.unidade);
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
    homologar(planoEntrega) {
        const self = this;
        this.dialog.confirm("Homologar ?", "Deseja realmente homologar este Plano de Entregas?").then(confirm => {
            if (confirm) {
                this.dao.homologar(planoEntrega.id).then(function () {
                    var _a;
                    (((_a = self.grid) === null || _a === void 0 ? void 0 : _a.query) || self.query).refreshId(planoEntrega.id);
                    self.dialog.alert("Sucesso", "Homologado com sucesso!");
                }).catch(function (error) {
                    self.dialog.alert("Erro",  true ? error === null || error === void 0 ? void 0 : error.message : undefined);
                });
                this.auth.selecionaUnidade(this.auth.unidade.id);
                this.checaBotaoAderirToolbar();
            }
        });
    }
    concluir(planoEntrega) {
        const self = this;
        this.dialog.confirm("Concluir ?", "Deseja realmente concluir este Plano de Entregas?").then(confirm => {
            if (confirm) {
                this.dao.concluir(planoEntrega.id).then(function () {
                    var _a;
                    (((_a = self.grid) === null || _a === void 0 ? void 0 : _a.query) || self.query).refreshId(planoEntrega.id);
                    self.dialog.alert("Sucesso", "Concluído com sucesso!");
                }).catch(function (error) {
                    self.dialog.alert("Erro",  true ? error === null || error === void 0 ? void 0 : error.message : undefined);
                });
            }
        });
    }
    avaliar(planoEntrega) {
        const self = this;
        this.dao.avaliar(planoEntrega.id).then(function () {
            var _a;
            (((_a = self.grid) === null || _a === void 0 ? void 0 : _a.query) || self.query).refreshId(planoEntrega.id);
            self.dialog.alert("Sucesso", "Avaliado com sucesso!");
        }).catch(function (error) {
            self.dialog.alert("Erro",  true ? error === null || error === void 0 ? void 0 : error.message : undefined);
        });
    }
    reativar(planoEntrega) {
        const self = this;
        this.dialog.confirm("Reativar ?", "Deseja realmente reativar este Plano de Entregas?").then(confirm => {
            if (confirm) {
                this.dao.reativar(planoEntrega.id).then(function () {
                    var _a;
                    (((_a = self.grid) === null || _a === void 0 ? void 0 : _a.query) || self.query).refreshId(planoEntrega.id);
                    self.dialog.alert("Sucesso", "Reativado com sucesso!");
                }).catch(function (error) {
                    self.dialog.alert("Erro",  true ? error === null || error === void 0 ? void 0 : error.message : undefined);
                });
            }
        });
    }
    suspender(planoEntrega) {
        const self = this;
        this.dialog.confirm("Suspender ?", "Deseja realmente suspender este Plano de Entregas?").then(confirm => {
            if (confirm) {
                this.dao.suspender(planoEntrega.id).then(function () {
                    var _a;
                    (((_a = self.grid) === null || _a === void 0 ? void 0 : _a.query) || self.query).refreshId(planoEntrega.id);
                    self.dialog.alert("Sucesso", "Suspenso com sucesso!");
                }).catch(function (error) {
                    self.dialog.alert("Erro",  true ? error === null || error === void 0 ? void 0 : error.message : undefined);
                });
            }
        });
    }
    cancelar(planoEntrega) {
        const self = this;
        this.dialog.confirm("Cancelar ?", "Deseja realmente cancelar este Plano de Entregas?").then(confirm => {
            if (confirm) {
                this.dao.cancelar(planoEntrega.id).then(function () {
                    var _a;
                    (((_a = self.grid) === null || _a === void 0 ? void 0 : _a.query) || self.query).refreshId(planoEntrega.id);
                    self.dialog.alert("Sucesso", "Cancelado com sucesso!");
                }).catch(function (error) {
                    self.dialog.alert("Erro",  true ? error === null || error === void 0 ? void 0 : error.message : undefined);
                });
            }
        });
    }
    liberarHomologacao(planoEntrega) {
        const self = this;
        this.dialog.confirm("Liberar para homologação ?", "Deseja realmente liberar para a homologação?").then(confirm => {
            if (confirm) {
                this.dao.liberarHomologacao(planoEntrega.id).then(function () {
                    var _a;
                    (((_a = self.grid) === null || _a === void 0 ? void 0 : _a.query) || self.query).refreshId(planoEntrega.id);
                    self.dialog.alert("Sucesso", "Liberado com sucesso!");
                }).catch(function (error) {
                    self.dialog.alert("Erro",  true ? error === null || error === void 0 ? void 0 : error.message : undefined);
                });
            }
        });
    }
    retirarHomologacao(planoEntrega) {
        const self = this;
        this.dialog.confirm("Retirar da homologação ?", "Deseja realmente retirar da homologação?").then(confirm => {
            if (confirm) {
                this.dao.retirarHomologacao(planoEntrega.id).then(function () {
                    var _a;
                    (((_a = self.grid) === null || _a === void 0 ? void 0 : _a.query) || self.query).refreshId(planoEntrega.id);
                    self.dialog.alert("Sucesso", "Retirado com sucesso!");
                }).catch(function (error) {
                    self.dialog.alert("Erro",  true ? error === null || error === void 0 ? void 0 : error.message : undefined);
                });
            }
        });
    }
    cancelarHomologacao(planoEntrega) {
        const self = this;
        this.dialog.confirm("Cancelar homologacao ?", "Deseja realmente cancelar a homologacao?").then(confirm => {
            if (confirm) {
                this.dao.cancelarHomologacao(planoEntrega.id).then(function () {
                    var _a;
                    (((_a = self.grid) === null || _a === void 0 ? void 0 : _a.query) || self.query).refreshId(planoEntrega.id);
                    self.dialog.alert("Sucesso", "Cancelado com sucesso!");
                }).catch(function (error) {
                    self.dialog.alert("Erro",  true ? error === null || error === void 0 ? void 0 : error.message : undefined);
                });
            }
        });
    }
    arquivar(planoEntrega) {
        this.dialog.confirm("Arquivar?", "Deseja realmente arquivar o Plano de Entregas?").then(confirm => {
            if (confirm) {
                this.dao.arquivar(planoEntrega.id, true).then(() => {
                    var _a, _b, _c;
                    if ((_b = (_a = this.filter) === null || _a === void 0 ? void 0 : _a.controls.arquivadas) === null || _b === void 0 ? void 0 : _b.value) {
                        this.grid.query.refreshId(planoEntrega.id);
                    }
                    else {
                        (((_c = this.grid) === null || _c === void 0 ? void 0 : _c.query) || this.query).removeId(planoEntrega.id);
                    }
                }).catch(error => this.dialog.alert("Erro",  true ? error === null || error === void 0 ? void 0 : error.message : undefined));
            }
        });
    }
    desarquivar(planoEntrega) {
        this.dialog.confirm("Desarquivar ?", "Deseja realmente desarquivar o Plano de Entregas?").then(confirm => {
            if (confirm) {
                this.dao.arquivar(planoEntrega.id, false).then(() => {
                    this.grid.query.refreshId(planoEntrega.id);
                }).catch(error => this.dialog.alert("Erro",  true ? error === null || error === void 0 ? void 0 : error.message : undefined));
            }
        });
    }
    cancelarConclusao(planoEntrega) {
        const self = this;
        this.dialog.confirm("Cancelar conclusão ?", "Deseja realmente cancelar a conclusão?").then(confirm => {
            if (confirm) {
                this.dao.cancelarConclusao(planoEntrega.id).then(function () {
                    var _a;
                    (((_a = self.grid) === null || _a === void 0 ? void 0 : _a.query) || self.query).refreshId(planoEntrega.id);
                    self.dialog.alert("Sucesso", "Cancelado com sucesso!");
                }).catch(function (error) {
                    self.dialog.alert("Erro",  true ? error === null || error === void 0 ? void 0 : error.message : undefined);
                });
            }
        });
    }
    cancelarAvaliacao(planoEntrega) {
        const self = this;
        this.dialog.confirm("Cancelar avaliacao ?", "Deseja realmente cancelar a avaliação?").then(confirm => {
            if (confirm) {
                this.dao.cancelarAvaliacao(planoEntrega.id).then(function () {
                    var _a;
                    (((_a = self.grid) === null || _a === void 0 ? void 0 : _a.query) || self.query).refreshId(planoEntrega.id);
                    self.dialog.alert("Sucesso", "Cancelado com sucesso!");
                }).catch(function (error) {
                    self.dialog.alert("Erro",  true ? error === null || error === void 0 ? void 0 : error.message : undefined);
                });
            }
        });
    }
    situacaoPlano(planoEntrega) {
        if (planoEntrega.data_fim)
            return "EXCLUIDO";
        else if (planoEntrega.data_cancelamento)
            return "CANCELADO";
        else if (planoEntrega.data_arquivamento)
            return "ARQUIVADO";
        else
            return planoEntrega.status;
    }
}
PlanoEntregaListComponent.ɵfac = function PlanoEntregaListComponent_Factory(t) { return new (t || PlanoEntregaListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injector"])); };
PlanoEntregaListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PlanoEntregaListComponent, selectors: [["plano-entrega-list"]], viewQuery: function PlanoEntregaListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__["GridComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 41, vars: 47, consts: [[3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [3, "buttons", 4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed", "visible"], [1, "row"], ["label", "Nome", "controlName", "nome", 3, "size", "control", "placeholder"], ["controlName", "unidade_id", 3, "size", "dao"], ["unidade", ""], ["label", "Status", "controlName", "status", "itemTodos", "- Todos -", 3, "size", "items", "valueTodos"], ["controlName", "planejamento_id", 3, "size", "dao"], ["planejamento", ""], ["controlName", "cadeia_valor_id", 3, "size", "dao"], ["cadeiaValor", ""], ["date", "", "label", "In\u00EDcio", "controlName", "inicio", 3, "size", "control", "labelInfo"], ["date", "", "label", "Fim", "controlName", "fim", 3, "size", "control", "labelInfo"], ["type", "expand", "icon", "bi bi-boxes", 3, "align", "hint", "template", "expandTemplate", 4, "ngIf"], [3, "titleTemplate", "template"], ["titleIdNumeroStatus", ""], ["columnNumero", ""], ["title", "Nome", "orderBy", "nome", 3, "template"], ["columnNome", ""], ["title", "In\u00EDcio", "orderBy", "inicio", 3, "template"], ["columnInicio", ""], ["title", "Fim", "orderBy", "fim", 3, "template"], ["columnFim", ""], ["titlePlanoCadeia", ""], ["columnPlanoCadeia", ""], ["title", "Status", 3, "template"], ["columnStatus", ""], ["type", "options", 3, "dynamicOptions", "dynamicButtons"], [3, "rows"], [3, "buttons"], ["labelPosition", "left", "label", "Agrupar por Un.", "controlName", "agrupar", 3, "size", "control", "change"], ["labelPosition", "left", "label", "Principais", "controlName", "principais", 3, "size", "control", "change"], ["type", "expand", "icon", "bi bi-boxes", 3, "align", "hint", "template", "expandTemplate"], ["columnEntregas", ""], ["columnExpandedEntregas", ""], ["class", "badge rounded-pill bg-light text-dark", 4, "ngIf"], [1, "badge", "rounded-pill", "bg-light", "text-dark"], [1, "bi", "bi-boxes"], [3, "entity", "cdRef"], ["by", "numero", 3, "header"], [1, "micro-text", "fw-ligh"], [1, "text-break", "text-wrap"], ["color", "light", 3, "maxWidth", "icon", "label", 4, "ngIf"], ["color", "light", 3, "maxWidth", "icon", "label"], [3, "color", "icon", "label"], ["color", "danger", "icon", "bi bi-dash-circle", "label", "Cancelado", 4, "ngIf"], ["color", "danger", "icon", "bi bi-dash-circle", "label", "Cancelado"]], template: function PlanoEntregaListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("select", function PlanoEntregaListComponent_Template_grid_select_0_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PlanoEntregaListComponent_toolbar_1_Template, 3, 5, "toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "filter", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input-text", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input-search", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input-search", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input-search", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input-datetime", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "input-datetime", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, PlanoEntregaListComponent_column_16_Template, 5, 4, "column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, PlanoEntregaListComponent_ng_template_18_Template, 2, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, PlanoEntregaListComponent_ng_template_20_Template, 2, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, PlanoEntregaListComponent_ng_template_23_Template, 2, 3, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, PlanoEntregaListComponent_ng_template_26_Template, 2, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, PlanoEntregaListComponent_ng_template_29_Template, 2, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, PlanoEntregaListComponent_ng_template_32_Template, 3, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, PlanoEntregaListComponent_ng_template_34_Template, 2, 2, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, PlanoEntregaListComponent_ng_template_37_Template, 2, 4, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "pagination", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](21);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](24);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](27);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](30);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](33);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](35);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_PENT_INCL"))("hasEdit", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.selectable);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed)("visible", ctx.showFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 5)("control", ctx.filter.controls.nome)("placeholder", "Nome do " + ctx.lex.noun("plano de entrega"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 4)("dao", ctx.unidadeDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 3)("items", ctx.lookup.PLANO_ENTREGA_STATUS)("valueTodos", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 4)("dao", ctx.planejamentoDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 4)("dao", ctx.cadeiaValorDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 2)("control", ctx.filter.controls.inicio)("labelInfo", "Data de in\u00EDcio do " + ctx.lex.noun("plano de entrega"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 2)("control", ctx.filter.controls.fim)("labelInfo", "Data do fim do " + ctx.lex.noun("plano de entrega"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.selectable);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("titleTemplate", _r5)("template", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("template", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("template", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("template", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("titleTemplate", _r15)("template", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("template", _r19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dynamicOptions", ctx.dynamicOptions.bind(ctx))("dynamicButtons", ctx.dynamicButtons.bind(ctx));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rows", ctx.rowsLimit);
    } }, directives: [src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__["GridComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"], _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"], _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_11__["InputSearchComponent"], _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_12__["InputSelectComponent"], _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_13__["InputDatetimeComponent"], _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_14__["ColumnsComponent"], _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_15__["ColumnComponent"], _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__["PaginationComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["ToolbarComponent"], _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_18__["InputSwitchComponent"], _plano_entrega_list_entrega_plano_entrega_list_entrega_component__WEBPACK_IMPORTED_MODULE_19__["PlanoEntregaListEntregaComponent"], _components_grid_order_order_component__WEBPACK_IMPORTED_MODULE_20__["OrderComponent"], _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_21__["BadgeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuby1lbnRyZWdhLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "zX2r":
/*!***********************************************************************!*\
  !*** ./src/app/modules/gestao/plano-entrega/plano-entrega.service.ts ***!
  \***********************************************************************/
/*! exports provided: PlanoEntregaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoEntregaService", function() { return PlanoEntregaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_lookup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/lookup.service */ "/MTl");


class PlanoEntregaService {
    constructor(lookup) {
        this.lookup = lookup;
    }
    getValorMeta(entrega) {
        var _a;
        let result = "";
        switch ((_a = entrega.entrega) === null || _a === void 0 ? void 0 : _a.tipo_indicador) {
            case "PORCENTAGEM":
                entrega.meta.porcentagem + " %";
                break;
            case "QUANTIDADE":
                entrega.meta.quantitativo;
                break;
            case "VALOR":
                entrega.meta.valor;
                break;
            case "QUALITATIVO":
                this.lookup.getValue(entrega.entrega.lista_qualitativos, entrega.meta.qualitativo);
                break;
            default: result = "Indicador desconhecido";
        }
        return result;
    }
    getValorRealizado(entrega) {
        var _a;
        let result = "";
        switch ((_a = entrega.entrega) === null || _a === void 0 ? void 0 : _a.tipo_indicador) {
            case "PORCENTAGEM":
                entrega.realizado.porcentagem + " %";
                break;
            case "QUANTIDADE":
                entrega.realizado.quantitativo;
                break;
            case "VALOR":
                entrega.realizado.valor;
                break;
            case "QUALITATIVO":
                this.lookup.getValue(entrega.entrega.lista_qualitativos, entrega.realizado.qualitativo);
                break;
            default: result = "Indicador desconhecido";
        }
        return result;
    }
    isPorcentagem(entrega) {
        var _a;
        return ((_a = entrega.entrega) === null || _a === void 0 ? void 0 : _a.tipo_indicador) == "PORCENTAGEM";
    }
}
PlanoEntregaService.ɵfac = function PlanoEntregaService_Factory(t) { return new (t || PlanoEntregaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_lookup_service__WEBPACK_IMPORTED_MODULE_1__["LookupService"])); };
PlanoEntregaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlanoEntregaService, factory: PlanoEntregaService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=modules-gestao-plano-entrega-plano-entrega-module.js.map