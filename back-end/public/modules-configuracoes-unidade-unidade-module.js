(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-configuracoes-unidade-unidade-module"],{

/***/ "0Wht":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/configuracoes/unidade/unidade-form/unidade-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UnidadeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeFormComponent", function() { return UnidadeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/editable-form/editable-form.component */ "RKEd");
/* harmony import */ var src_app_dao_cidade_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/cidade-dao.service */ "lbnZ");
/* harmony import */ var src_app_dao_entidade_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/entidade-dao.service */ "aPFm");
/* harmony import */ var src_app_dao_plano_trabalho_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/plano-trabalho-dao.service */ "RHdA");
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ "Ufbc");
/* harmony import */ var src_app_dao_unidade_integrante_atribuicao_dao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dao/unidade-integrante-atribuicao-dao.service */ "PJoY");
/* harmony import */ var src_app_dao_unidade_integrante_dao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dao/unidade-integrante-dao.service */ "Tlc2");
/* harmony import */ var src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dao/usuario-dao.service */ "w5Sy");
/* harmony import */ var src_app_models_expediente_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/expediente.model */ "e8A4");
/* harmony import */ var src_app_models_unidade_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/unidade.model */ "xiSz");
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ "793T");
/* harmony import */ var src_app_modules_uteis_notificacoes_notificacao_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modules/uteis/notificacoes/notificacao.service */ "edjK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/tabs/tab/tab.component */ "suJ1");
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ "lYxd");
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ "8OLq");
/* harmony import */ var _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../components/input/input-select/input-select.component */ "txHH");
/* harmony import */ var _components_input_input_radio_input_radio_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../components/input/input-radio/input-radio.component */ "q/rX");
/* harmony import */ var _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../components/separator/separator.component */ "FVj5");
/* harmony import */ var _components_input_input_multiselect_input_multiselect_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../components/input/input-multiselect/input-multiselect.component */ "oldG");
/* harmony import */ var _components_input_input_color_input_color_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../components/input/input-color/input-color.component */ "/VYb");
/* harmony import */ var _components_input_input_editor_input_editor_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../components/input/input-editor/input-editor.component */ "7B2Z");
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ "puzm");
/* harmony import */ var _uteis_calendar_expediente_calendar_expediente_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../uteis/calendar-expediente/calendar-expediente.component */ "ODvL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _uteis_notificacoes_notificacoes_config_notificacoes_config_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../uteis/notificacoes/notificacoes-config/notificacoes-config.component */ "MFW/");





























const _c0 = ["unidade_pai"];
const _c1 = ["cidade"];
const _c2 = ["gestor"];
const _c3 = ["gestorSubstituto"];
const _c4 = ["entidade"];
const _c5 = ["notificacoes"];
function UnidadeFormComponent_tab_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tab", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "notificacoes-config", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("unidadeId", (ctx_r7.entity == null ? null : ctx_r7.entity.id == null ? null : ctx_r7.entity.id.length) ? ctx_r7.entity.id : "ADD")("entity", ctx_r7.entity)("disabled", ctx_r7.formDisabled);
} }
const _c6 = function (a2) { return ["entidade_id", "==", a2]; };
const _c7 = function (a0) { return [a0]; };
class UnidadeFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_11__["PageFormBase"] {
    constructor(injector) {
        var _a;
        super(injector, src_app_models_unidade_model__WEBPACK_IMPORTED_MODULE_10__["Unidade"], src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_5__["UnidadeDaoService"]);
        this.injector = injector;
        this.validate = (control, controlName) => {
            var _a;
            let result = null;
            if (['codigo', 'sigla', 'nome', 'cidade_id', 'entidade_id'].indexOf(controlName) >= 0 && !((_a = control.value) === null || _a === void 0 ? void 0 : _a.length)) {
                result = "Obrigatório";
            }
            return result;
        };
        this.titleEdit = (entity) => {
            return "Editando " + this.lex.translate("Unidade") + ': ' + ((entity === null || entity === void 0 ? void 0 : entity.sigla) || "");
        };
        this.entidadeDao = injector.get(src_app_dao_entidade_dao_service__WEBPACK_IMPORTED_MODULE_3__["EntidadeDaoService"]);
        this.cidadeDao = injector.get(src_app_dao_cidade_dao_service__WEBPACK_IMPORTED_MODULE_2__["CidadeDaoService"]);
        this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_5__["UnidadeDaoService"]);
        this.usuarioDao = injector.get(src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioDaoService"]);
        this.planoTrabalhoDao = injector.get(src_app_dao_plano_trabalho_dao_service__WEBPACK_IMPORTED_MODULE_4__["PlanoTrabalhoDaoService"]);
        this.integranteDao = injector.get(src_app_dao_unidade_integrante_dao_service__WEBPACK_IMPORTED_MODULE_7__["UnidadeIntegranteDaoService"]);
        this.integranteAtribuicaoDao = injector.get(src_app_dao_unidade_integrante_atribuicao_dao_service__WEBPACK_IMPORTED_MODULE_6__["UnidadeIntegranteAtribuicaoDaoService"]);
        this.notificacao = injector.get(src_app_modules_uteis_notificacoes_notificacao_service__WEBPACK_IMPORTED_MODULE_12__["NotificacaoService"]);
        this.modalWidth = 1200;
        this.planoDataset = this.planoTrabalhoDao.dataset();
        this.form = this.fh.FormBuilder({
            codigo: { default: "" },
            sigla: { default: "" },
            nome: { default: "" },
            path: { default: "" },
            cidade_id: { default: "" },
            uf: { default: "" },
            atividades_arquivamento_automatico: { default: 1 },
            distribuicao_forma_contagem_prazos: { default: "DIAS_UTEIS" },
            entrega_forma_contagem_prazos: { default: "HORAS_UTEIS" },
            notificacoes: { default: {} },
            etiquetas: { default: [] },
            unidade_pai_id: { default: "" },
            entidade_id: { default: (_a = this.auth.unidade) === null || _a === void 0 ? void 0 : _a.entidade_id },
            etiqueta_texto: { default: "" },
            etiqueta_icone: { default: null },
            etiqueta_cor: { default: null },
            expediente24: { default: true },
            expediente: { default: null },
            usar_expediente_entidade: { default: true },
            texto_complementar_plano: { default: "" }
        }, this.cdRef, this.validate);
        this.formGestor = this.fh.FormBuilder({
            gestor_id: { default: "" },
            gestor_substituto_id: { default: "" }
        }, this.cdRef);
        this.join = ["cidade", "entidade", "gestor.usuario:id,nome", "gestor_substituto.usuario:id,nome", "notificacoes_templates", "gestor.gestor:id", "gestor_substituto.gestor_substituto:id"];
    }
    get is24hrs() {
        var _a;
        return ((_a = this.form) === null || _a === void 0 ? void 0 : _a.controls.expediente24.value) ? "" : undefined;
    }
    onUsarExpedienteEntidadeChange() {
        this.form.controls.expediente.setValue(this.form.controls.usar_expediente_entidade.value ? null : this.form.controls.expediente.value || new src_app_models_expediente_model__WEBPACK_IMPORTED_MODULE_9__["Expediente"]());
    }
    addItemHandle() {
        let result = undefined;
        const value = this.form.controls.etiqueta_texto.value;
        const key = this.util.textHash(value);
        if ((value === null || value === void 0 ? void 0 : value.length) && this.util.validateLookupItem(this.form.controls.etiquetas.value, key)) {
            result = {
                key: key,
                value: this.form.controls.etiqueta_texto.value,
                color: this.form.controls.etiqueta_cor.value,
                icon: this.form.controls.etiqueta_icone.value
            };
            this.form.controls.etiqueta_texto.setValue("");
            this.form.controls.etiqueta_icone.setValue(null);
            this.form.controls.etiqueta_cor.setValue(null);
        }
        return result;
    }
    ;
    loadData(entity, form) {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formValue = Object.assign({}, form.value);
            yield Promise.all([
                this.unidadePai.loadSearch(entity.unidade || entity.unidade_pai_id),
                this.cidade.loadSearch(entity.cidade || entity.cidade_id),
                this.gestor.loadSearch(((_a = entity === null || entity === void 0 ? void 0 : entity.gestor) === null || _a === void 0 ? void 0 : _a.usuario) || ((_b = entity.gestor) === null || _b === void 0 ? void 0 : _b.usuario.id)),
                this.gestorSubstituto.loadSearch(((_c = entity === null || entity === void 0 ? void 0 : entity.gestor_substituto) === null || _c === void 0 ? void 0 : _c.usuario) || ((_d = entity.gestor_substituto) === null || _d === void 0 ? void 0 : _d.usuario.id)),
                this.entidade.loadSearch(entity.entidade || entity.entidade_id)
            ]);
            this.form.patchValue(this.util.fillForm(formValue, Object.assign(Object.assign({}, entity), {})));
        });
    }
    initializeData(form) {
        var _a, _b;
        this.entity = new src_app_models_unidade_model__WEBPACK_IMPORTED_MODULE_10__["Unidade"]({ entidade_id: (_a = this.auth.unidade) === null || _a === void 0 ? void 0 : _a.entidade_id, entidade: (_b = this.auth.unidade) === null || _b === void 0 ? void 0 : _b.entidade });
        this.loadData(this.entity, form);
    }
    saveData(form) {
        return new Promise((resolve, reject) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
            this.notificacoes.saveData();
            let unidade = this.util.fill(new src_app_models_unidade_model__WEBPACK_IMPORTED_MODULE_10__["Unidade"](), this.entity);
            unidade = this.util.fillForm(unidade, this.form.value);
            unidade.notificacoes = this.entity.notificacoes;
            let salvarGestor = !!((_a = this.formGestor.controls.gestor_id) === null || _a === void 0 ? void 0 : _a.value) && (!((_c = (_b = this.entity) === null || _b === void 0 ? void 0 : _b.gestor) === null || _c === void 0 ? void 0 : _c.id.length) || (!!((_e = (_d = this.entity) === null || _d === void 0 ? void 0 : _d.gestor) === null || _e === void 0 ? void 0 : _e.id.length) && ((_h = (_g = (_f = this.entity) === null || _f === void 0 ? void 0 : _f.gestor) === null || _g === void 0 ? void 0 : _g.usuario) === null || _h === void 0 ? void 0 : _h.id) != ((_j = this.formGestor.controls.gestor_id) === null || _j === void 0 ? void 0 : _j.value)));
            let salvarGestorSubstituto = !!((_k = this.formGestor.controls.gestor_substituto_id) === null || _k === void 0 ? void 0 : _k.value) && (!((_m = (_l = this.entity) === null || _l === void 0 ? void 0 : _l.gestor_substituto) === null || _m === void 0 ? void 0 : _m.id.length) || (!!((_p = (_o = this.entity) === null || _o === void 0 ? void 0 : _o.gestor_substituto) === null || _p === void 0 ? void 0 : _p.id.length) && ((_s = (_r = (_q = this.entity) === null || _q === void 0 ? void 0 : _q.gestor_substituto) === null || _r === void 0 ? void 0 : _r.usuario) === null || _s === void 0 ? void 0 : _s.id) != ((_t = this.formGestor.controls.gestor_substituto_id) === null || _t === void 0 ? void 0 : _t.value)));
            let apagarGestor = !((_u = this.formGestor.controls.gestor_id) === null || _u === void 0 ? void 0 : _u.value) && !!((_w = (_v = this.entity) === null || _v === void 0 ? void 0 : _v.gestor) === null || _w === void 0 ? void 0 : _w.id.length);
            let apagarGestorSubstituto = !((_x = this.formGestor.controls.gestor_substituto_id) === null || _x === void 0 ? void 0 : _x.value) && !!((_z = (_y = this.entity) === null || _y === void 0 ? void 0 : _y.gestor_substituto) === null || _z === void 0 ? void 0 : _z.id.length);
            (_0 = this.dao) === null || _0 === void 0 ? void 0 : _0.save(unidade, ["gestor.gestor:id", "gestor_substituto.gestor_substituto:id"]).then((unidade) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var _1, _2;
                this.entity = unidade;
                if (salvarGestor)
                    yield this.integranteDao.saveIntegrante(this.entity.id, this.formGestor.controls.gestor_id.value, ["GESTOR"]);
                if (salvarGestorSubstituto)
                    yield this.integranteDao.saveIntegrante(this.entity.id, this.formGestor.controls.gestor_substituto_id.value, ["GESTOR_SUBSTITUTO"]);
                if (apagarGestor)
                    yield this.integranteAtribuicaoDao.delete((_1 = this.entity) === null || _1 === void 0 ? void 0 : _1.gestor.gestor.id);
                if (apagarGestorSubstituto)
                    yield this.integranteAtribuicaoDao.delete((_2 = this.entity) === null || _2 === void 0 ? void 0 : _2.gestor_substituto.gestor_substituto.id);
                resolve(true);
            }));
        });
    }
}
UnidadeFormComponent.ɵfac = function UnidadeFormComponent_Factory(t) { return new (t || UnidadeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["Injector"])); };
UnidadeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: UnidadeFormComponent, selectors: [["app-unidade-form"]], viewQuery: function UnidadeFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__["EditableFormComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c5, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.unidadePai = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.cidade = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.gestor = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.gestorSubstituto = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.entidade = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.notificacoes = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 40, vars: 49, consts: [[3, "title", "form", "disabled", "submit", "cancel"], ["display", "", "right", ""], ["key", "PRINCIPAL", "label", "Principal"], [1, "row"], ["label", "C\u00F3digo", "controlName", "codigo", 3, "size"], ["label", "Sigla", "controlName", "sigla", 3, "size"], ["label", "Nome", "controlName", "nome", 3, "size"], ["label", "Gestor", "controlName", "gestor_id", "labelInfo", "Respons\u00E1vel pela unidade", 3, "size", "emptyValue", "control", "dao"], ["gestor", ""], ["label", "Gestor Substituto", "controlName", "gestor_substituto_id", "labelInfo", "Respons\u00E1vel substituto pela unidade", 3, "size", "emptyValue", "control", "dao"], ["gestorSubstituto", ""], ["controlName", "cidade_id", 3, "size", "dao"], ["cidade", ""], ["controlName", "unidade_pai_id", 3, "size", "label", "where", "dao"], ["unidade_pai", ""], ["disabled", "", "controlName", "entidade_id", 3, "size", "dao"], ["entidade", ""], ["key", "CONFIGURACOES", "label", "Configura\u00E7\u00F5es"], ["controlName", "distribuicao_forma_contagem_prazos", "labelInfo", "A forma da contagem dos prazos para a distribui\u00E7\u00E3o (lan\u00E7amento da demanda).", 3, "size", "label", "items"], ["controlName", "entrega_forma_contagem_prazos", "labelInfo", "A forma da contagem dos prazos na entrega da demanda (data da entrega e tempo despendido)", 3, "size", "label", "items"], ["label", "Arquivamento autom\u00E1tico", "controlName", "atividades_arquivamento_automatico", "labelInfo", "Se ap\u00F3s a avalia\u00E7\u00E3o, arquivar\u00E1 automaticamente a atividade.", 3, "size", "items"], ["clss", "row"], ["label", "Etiquetas", "multiselectStyle", "inline", "controlName", "etiquetas", 3, "maxItemWidth", "size", "addItemHandle"], ["label", "Texto", "controlName", "etiqueta_texto", 3, "size"], ["label", "\u00CDcone", "controlName", "etiqueta_icone", 3, "size", "items"], ["label", "Cor", "controlName", "etiqueta_cor", 3, "size"], ["controlName", "texto_complementar_plano", 3, "label", "dataset"], ["key", "EXPEDIENTE", "label", "Expediente"], ["labelPosition", "right", "icon", "bi bi-check2", "controlName", "usar_expediente_entidade", "labelInfo", "Se utiliza o expediente configurado na entidade ao inv\u00E9s de especificar na unidade", 3, "label", "size", "change"], ["usarExpedienteEntidade", ""], [3, "disabled", "expedienteDisabled", "control"], ["expediente", ""], ["key", "NOTIFICACOES", "label", "Notifica\u00E7\u00F5es", 4, "ngIf"], ["key", "NOTIFICACOES", "label", "Notifica\u00E7\u00F5es"], [3, "unidadeId", "entity", "disabled"], ["notificacoes", ""]], template: function UnidadeFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "editable-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("submit", function UnidadeFormComponent_Template_editable_form_submit_0_listener() { return ctx.onSaveData(); })("cancel", function UnidadeFormComponent_Template_editable_form_cancel_0_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "tabs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "input-text", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "input-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "input-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "input-search", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "input-search", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "input-search", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "input-search", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "input-search", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "tab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "input-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "input-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "input-radio", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](24, "separator");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "input-multiselect", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "input-text", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](28, "input-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "input-color", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](30, "separator");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](32, "input-editor", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "tab", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "input-switch", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function UnidadeFormComponent_Template_input_switch_change_35_listener() { return ctx.onUsarExpedienteEntidadeChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](37, "calendar-expediente", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](39, UnidadeFormComponent_tab_39_Template, 3, 3, "tab", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", ctx.isModal ? "" : ctx.title)("form", ctx.form)("disabled", ctx.formDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 6)("emptyValue", null)("control", ctx.formGestor.controls.gestor_id)("dao", ctx.usuarioDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 6)("emptyValue", null)("control", ctx.formGestor.controls.gestor_substituto_id)("dao", ctx.usuarioDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 4)("dao", ctx.cidadeDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 4)("label", ctx.lex.translate("Unidade") + " pai")("where", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](47, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](45, _c6, ctx.form.controls.entidade_id.value)))("dao", ctx.dao);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 4)("dao", ctx.entidadeDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 4)("label", "Contagem " + ctx.lex.translate("Prazo de Distribui\u00E7\u00E3o"))("items", ctx.lookup.DIA_HORA_CORRIDOS_OU_UTEIS);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 4)("label", "Contagem " + ctx.lex.translate("Prazo de Entrega"))("items", ctx.lookup.HORAS_CORRIDAS_OU_UTEIS);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 4)("items", ctx.lookup.SIMNAO);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("maxItemWidth", 250)("size", 12)("addItemHandle", ctx.addItemHandle.bind(ctx));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 3)("items", ctx.lookup.ICONES);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Texto complementar " + ctx.lex.translate("Plano de Trabalho"))("dataset", ctx.planoDataset);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Usar o calend\u00E1rio " + ctx.lex.translate("entidade"))("size", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx.form.controls.usar_expediente_entidade.value ? "true" : undefined)("expedienteDisabled", ctx.entity == null ? null : ctx.entity.entidade == null ? null : ctx.entity.entidade.expediente)("control", ctx.form.controls.expediente);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.entity);
    } }, directives: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__["EditableFormComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_14__["TabsComponent"], _components_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_15__["TabComponent"], _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_16__["InputTextComponent"], _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_17__["InputSearchComponent"], _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_18__["InputSelectComponent"], _components_input_input_radio_input_radio_component__WEBPACK_IMPORTED_MODULE_19__["InputRadioComponent"], _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_20__["SeparatorComponent"], _components_input_input_multiselect_input_multiselect_component__WEBPACK_IMPORTED_MODULE_21__["InputMultiselectComponent"], _components_input_input_color_input_color_component__WEBPACK_IMPORTED_MODULE_22__["InputColorComponent"], _components_input_input_editor_input_editor_component__WEBPACK_IMPORTED_MODULE_23__["InputEditorComponent"], _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_24__["InputSwitchComponent"], _uteis_calendar_expediente_calendar_expediente_component__WEBPACK_IMPORTED_MODULE_25__["CalendarExpedienteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], _uteis_notificacoes_notificacoes_config_notificacoes_config_component__WEBPACK_IMPORTED_MODULE_27__["NotificacoesConfigComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bmlkYWRlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "8tza":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/configuracoes/unidade/unidade-list/unidade-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UnidadeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeListComponent", function() { return UnidadeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/grid/grid.component */ "m4bG");
/* harmony import */ var src_app_dao_cidade_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/cidade-dao.service */ "lbnZ");
/* harmony import */ var src_app_dao_entidade_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/entidade-dao.service */ "aPFm");
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ "Ufbc");
/* harmony import */ var src_app_models_unidade_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/unidade.model */ "xiSz");
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ "+vn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ "kHdc");
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ "8OLq");
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ "lYxd");
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ "puzm");
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ "d7UH");
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ "pFmK");
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ "f3Td");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ "np0s");
/* harmony import */ var _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../components/badge/badge.component */ "jKVP");



















function UnidadeListComponent_h3_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function UnidadeListComponent_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "toolbar", 20);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttons", ctx_r1.buttons);
} }
function UnidadeListComponent_ng_template_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r9.unidade.sigla, " ");
} }
function UnidadeListComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, UnidadeListComponent_ng_template_12_span_2_Template, 3, 1, "span", 22);
} if (rf & 2) {
    const row_r9 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r9.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r9.unidade);
} }
function UnidadeListComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](((row_r12.cidade == null ? null : row_r12.cidade.nome) || "") + "/" + ((row_r12.cidade == null ? null : row_r12.cidade.uf) || ""));
} }
function UnidadeListComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "badge", 25);
} if (rf & 2) {
    const row_r13 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("color", !row_r13.inativo ? "success" : "danger")("icon", !row_r13.inativo ? "bi bi-check-circle" : "bi bi-x-circle")("label", !row_r13.inativo ? "Ativo" : "Inativo");
} }
class UnidadeListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_6__["PageListBase"] {
    constructor(injector) {
        var _a;
        super(injector, src_app_models_unidade_model__WEBPACK_IMPORTED_MODULE_5__["Unidade"], src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_4__["UnidadeDaoService"]);
        this.injector = injector;
        this.buttons = [];
        this.filterWhere = (filter) => {
            var _a, _b;
            let form = filter.value;
            let result = [];
            /* Se for selectable trás somente os inativos ou os não inativos, se não for então trás juntamente os inativos se form.inativos */
            result.push(this.selectable ? ["inativo", form.inativos ? "!=" : "==", null] : ["inativos", "==", form.inativos]);
            if ((_a = form.entidade_id) === null || _a === void 0 ? void 0 : _a.length) {
                result.push(["entidade_id", "==", form.entidade_id]);
            }
            if ((_b = form.nome) === null || _b === void 0 ? void 0 : _b.length) {
                result.push(["or", ["nome", "like", "%" + form.nome.replace(" ", "%") + "%"], ["sigla", "like", "%" + form.nome.replace(" ", "%") + "%"]]);
            }
            return result;
        };
        this.join = ["cidade", "unidade_pai:id,sigla", "entidade:id,sigla", "gestor.usuario:id", "gestor_substituto.usuario:id"];
        this.cidadeDao = injector.get(src_app_dao_cidade_dao_service__WEBPACK_IMPORTED_MODULE_2__["CidadeDaoService"]);
        this.entidadeDao = injector.get(src_app_dao_entidade_dao_service__WEBPACK_IMPORTED_MODULE_3__["EntidadeDaoService"]);
        /* Inicializações */
        this.title = this.lex.translate("Unidades");
        this.code = "MOD_CFG_UND";
        this.filter = this.fh.FormBuilder({
            entidade_id: { default: (_a = this.auth.unidade) === null || _a === void 0 ? void 0 : _a.entidade_id },
            inativos: { default: false },
            nome: { default: "" }
        });
        this.groupBy = [{ field: "entidade.sigla", label: "Entidade" }];
        // Testa se o usuário possui permissão unificar unidade
        if (this.auth.hasPermissionTo("MOD_UND_UNIR")) {
            this.buttons.push({
                icon: "bi bi-arrows-collapse",
                color: "btn-outline-danger",
                label: "Unificar",
                onClick: (unidade) => this.go.navigate({ route: ['configuracoes', 'unidade', 'merge'] }, this.modalRefresh())
            });
        }
    }
    dynamicOptions(row) {
        let result = [];
        let unidade = row;
        // Testa se o usuário possui permissão para exibir dados da unidade
        if (this.auth.hasPermissionTo("MOD_UND_CONS"))
            result.push({ icon: "bi bi-info-circle", label: "Informações", onClick: this.consult.bind(this) });
        // Testa se o usuário possui permissão de inativar a unidade
        if (this.auth.hasPermissionTo("MOD_UND_INATV"))
            result.push({ icon: unidade.inativo ? "bi bi-check-circle" : "bi bi-x-circle", label: unidade.inativo ? 'Reativar' : 'Inativar', onClick: (unidade) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.inativo(unidade, !unidade.inativo); }) });
        // Testa se o usuário possui permissão para gerenciar integrantes da unidade
        if (this.auth.hasPermissionTo("MOD_UND_INTG"))
            result.push({ icon: "bi bi-people", label: "Integrantes", onClick: (unidade) => this.go.navigate({ route: ['configuracoes', 'unidade', 'NOPERSIST', unidade.id, 'integrante'] }) });
        // Testa se o usuário possui permissão para excluir unidade
        if (this.auth.hasPermissionTo("MOD_UND_EXCL"))
            result.push({ icon: "bi bi-trash", label: "Excluir", onClick: this.delete.bind(this) });
        return result;
    }
    inativo(unidade, inativo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.dialog.confirm(inativo ? "Inativar" : "Reativar", inativo ? "Deseja realmente inativar a unidade?" : "Deseja reativar a unidade?")) {
                try {
                    this.submitting = true;
                    yield this.dao.inativo(unidade.id, inativo);
                    yield this.modalRefreshId(unidade).modalClose(undefined);
                }
                finally {
                    this.submitting = false;
                }
            }
        });
    }
    filterClear(filter) {
        super.filterClear(filter);
    }
}
UnidadeListComponent.ɵfac = function UnidadeListComponent_Factory(t) { return new (t || UnidadeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injector"])); };
UnidadeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: UnidadeListComponent, selectors: [["app-unidade-list"]], viewQuery: function UnidadeListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 29, consts: [["class", "my-2", 4, "ngIf"], [3, "dao", "add", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [3, "buttons", 4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["controlName", "entidade_id", 3, "size", "dao"], ["entidade", ""], ["label", "Nome", "controlName", "nome", "placeholder", "Nome ou sigla...", 3, "size", "control"], ["label", "Inativos", "controlName", "inativos", "labelInfo", "Se lista tamb\u00E9m as unidade inativas", 3, "size", "control"], ["title", "Sigla", "field", "sigla"], ["title", "Nome", "orderBy", "nome", 3, "template"], ["columnNome", ""], ["title", "C\u00F3digo", "field", "codigo"], [3, "title", "template"], ["columnCidade", ""], ["title", "Situa\u00E7\u00E3o", 3, "template"], ["columnSituacao", ""], ["type", "options", 3, "onEdit", "dynamicOptions"], [3, "rows"], [1, "my-2"], [3, "buttons"], [1, "d-block"], ["class", "badge bg-light text-dark", 4, "ngIf"], [1, "badge", "bg-light", "text-dark"], [1, "bi", "bi-arrow-return-right"], [3, "color", "icon", "label"]], template: function UnidadeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, UnidadeListComponent_h3_0_Template, 2, 1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("select", function UnidadeListComponent_Template_grid_select_1_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, UnidadeListComponent_toolbar_2_Template, 1, 1, "toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input-search", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "input-switch", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, UnidadeListComponent_ng_template_12_Template, 3, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, UnidadeListComponent_ng_template_16_Template, 2, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, UnidadeListComponent_ng_template_19_Template, 1, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "pagination", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_UND_INCL"))("hasEdit", ctx.auth.hasPermissionTo("MOD_UND_EDT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.selectable);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 4)("dao", ctx.entidadeDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 7)("control", ctx.filter.controls.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 1)("control", ctx.filter.controls.inativos);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("template", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx.lex.translate("Cidade"))("template", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("template", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("onEdit", ctx.edit)("dynamicOptions", ctx.dynamicOptions.bind(ctx));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rows", ctx.rowsLimit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"], _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_10__["InputSearchComponent"], _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_11__["InputTextComponent"], _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_12__["InputSwitchComponent"], _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_13__["ColumnsComponent"], _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_14__["ColumnComponent"], _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__["PaginationComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"], _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_17__["BadgeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bmlkYWRlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Elg6":
/*!*****************************************************************!*\
  !*** ./src/app/modules/configuracoes/unidade/unidade.module.ts ***!
  \*****************************************************************/
/*! exports provided: UnidadeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeModule", function() { return UnidadeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _unidade_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unidade-routing.module */ "jtVw");
/* harmony import */ var _unidade_form_unidade_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unidade-form/unidade-form.component */ "0Wht");
/* harmony import */ var _unidade_list_unidade_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unidade-list/unidade-list.component */ "8tza");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _unidade_merge_unidade_merge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unidade-merge/unidade-merge.component */ "epKn");
/* harmony import */ var _uteis_uteis_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../uteis/uteis.module */ "hA/d");
/* harmony import */ var _unidade_integrante_unidade_integrante_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./unidade-integrante/unidade-integrante.component */ "JmwT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class UnidadeModule {
}
UnidadeModule.ɵfac = function UnidadeModule_Factory(t) { return new (t || UnidadeModule)(); };
UnidadeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: UnidadeModule });
UnidadeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            _uteis_uteis_module__WEBPACK_IMPORTED_MODULE_7__["UteisModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _unidade_routing_module__WEBPACK_IMPORTED_MODULE_1__["UnidadeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](UnidadeModule, { declarations: [_unidade_form_unidade_form_component__WEBPACK_IMPORTED_MODULE_2__["UnidadeFormComponent"],
        _unidade_list_unidade_list_component__WEBPACK_IMPORTED_MODULE_3__["UnidadeListComponent"],
        _unidade_merge_unidade_merge_component__WEBPACK_IMPORTED_MODULE_6__["UnidadeMergeComponent"],
        _unidade_integrante_unidade_integrante_component__WEBPACK_IMPORTED_MODULE_8__["UnidadeIntegranteComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
        _uteis_uteis_module__WEBPACK_IMPORTED_MODULE_7__["UteisModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _unidade_routing_module__WEBPACK_IMPORTED_MODULE_1__["UnidadeRoutingModule"]] }); })();


/***/ }),

/***/ "JmwT":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/configuracoes/unidade/unidade-integrante/unidade-integrante.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: UnidadeIntegranteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeIntegranteComponent", function() { return UnidadeIntegranteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/grid/grid.component */ "m4bG");
/* harmony import */ var src_app_dao_unidade_integrante_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/unidade-integrante-dao.service */ "Tlc2");
/* harmony import */ var src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/usuario-dao.service */ "w5Sy");
/* harmony import */ var src_app_modules_base_page_frame_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/base/page-frame-base */ "rvJe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ "d7UH");
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ "pFmK");
/* harmony import */ var _components_profile_picture_profile_picture_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/profile-picture/profile-picture.component */ "xp1S");
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ "8OLq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/badge/badge.component */ "jKVP");
/* harmony import */ var _components_input_input_multiselect_input_multiselect_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/input/input-multiselect/input-multiselect.component */ "oldG");
/* harmony import */ var _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/input/input-select/input-select.component */ "txHH");















function UnidadeIntegranteComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "profile-picture", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r8 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("url", row_r8.usuario_url_foto || "")("size", 40)("hint", row_r8.usuario_nome || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r8.usuario_nome || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r8.usuario_apelido || "");
} }
function UnidadeIntegranteComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input-search", 12, 13);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("size", 12)("dao", ctx_r3.usuarioDao);
} }
function UnidadeIntegranteComponent_ng_template_11_badge_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "badge", 16);
} if (rf & 2) {
    const atribuicao_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", ctx_r12.lookup.getColor(ctx_r12.lookup.UNIDADE_INTEGRANTE_TIPO, atribuicao_r13 || ""))("icon", ctx_r12.lookup.getIcon(ctx_r12.lookup.UNIDADE_INTEGRANTE_TIPO, atribuicao_r13 || ""))("label", ctx_r12.lookup.getValue(ctx_r12.lookup.UNIDADE_INTEGRANTE_TIPO, atribuicao_r13 || ""));
} }
function UnidadeIntegranteComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UnidadeIntegranteComponent_ng_template_11_badge_1_Template, 1, 3, "badge", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r11 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", row_r11.atribuicoes);
} }
function UnidadeIntegranteComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input-multiselect", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("size", 8)("addItemHandle", ctx_r7.addItemHandle.bind(ctx_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("size", 12)("items", ctx_r7.lookup.UNIDADE_INTEGRANTE_TIPO);
} }
class UnidadeIntegranteComponent extends src_app_modules_base_page_frame_base__WEBPACK_IMPORTED_MODULE_4__["PageFrameBase"] {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.unidadeId = "";
        this.items = [];
        this.validate = (control, controlName) => {
            var _a;
            let result = null;
            if (["usuario_id", "atribuicoes"].includes(controlName) && !((_a = control.value) === null || _a === void 0 ? void 0 : _a.length)) {
                result = "Obrigatório";
            }
            return result;
        };
        this.integranteDao = injector.get(src_app_dao_unidade_integrante_dao_service__WEBPACK_IMPORTED_MODULE_2__["UnidadeIntegranteDaoService"]);
        this.usuarioDao = injector.get(src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioDaoService"]);
        this.form = this.fh.FormBuilder({
            usuario_id: { default: "" },
            atribuicoes: { default: undefined },
            atribuicao: { default: "" }
        }, this.cdRef, this.validate);
    }
    ngOnInit() {
        var _a, _b;
        super.ngOnInit();
        this.unidadeId = ((_a = this.urlParams) === null || _a === void 0 ? void 0 : _a.has("idUnidade")) ? this.urlParams.get("idUnidade") : ((_b = this.metadata) === null || _b === void 0 ? void 0 : _b.idUnidade) || this.unidadeId;
    }
    ngAfterViewInit() {
        (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadData({}, this.form);
        }))();
    }
    /**
     * Método chamado na inicialização do componente para carregar todos os integrantes da unidade.
     * @param entity
     * @param form
     */
    loadData(entity, form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.grid.loading = true;
            try {
                let result = yield this.integranteDao.loadIntegrantes(this.unidadeId, "");
                this.items = result.integrantes.filter(x => x.atribuicoes.length > 0);
                this.unidade = result.unidade;
            }
            finally {
                this.grid.loading = false;
            }
            this.cdRef.detectChanges();
        });
    }
    addIntegrante() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return {
                id: this.integranteDao.generateUuid(),
                usuario_id: "",
                atribuicoes: []
            };
        });
    }
    addItemHandle() {
        let result = undefined;
        const value = this.lookup.getValue(this.lookup.UNIDADE_INTEGRANTE_TIPO, this.form.controls.atribuicao.value);
        const key = this.form.controls.atribuicao.value;
        if ((value === null || value === void 0 ? void 0 : value.length) && this.util.validateLookupItem(this.form.controls.atribuicoes.value, key)) {
            const icon = this.lookup.getIcon(this.lookup.UNIDADE_INTEGRANTE_TIPO, this.form.controls.atribuicao.value);
            const color = this.lookup.getColor(this.lookup.UNIDADE_INTEGRANTE_TIPO, this.form.controls.atribuicao.value);
            result = {
                key: key,
                value: value,
                icon: icon,
                color: color
            };
            this.form.controls.atribuicao.setValue("");
        }
        return result;
    }
    ;
    /**
     * Método chamado na edição de um integrante da Unidade.
     * @param form
     * @param row
     */
    loadIntegrante(form, row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            form.controls.usuario_id.setValue(row.id);
            form.controls.atribuicoes.setValue(row.atribuicoes.map((x) => Object.assign({}, {
                key: x,
                value: this.lookup.getValue(this.lookup.UNIDADE_INTEGRANTE_TIPO, x),
                icon: this.lookup.getIcon(this.lookup.UNIDADE_INTEGRANTE_TIPO, x),
                color: this.lookup.getColor(this.lookup.UNIDADE_INTEGRANTE_TIPO, x)
            })));
            form.controls.atribuicao.setValue("");
        });
    }
    removeIntegrante(row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let confirm = yield this.dialog.confirm("Exclui ?", "Deseja realmente excluir?");
            if (confirm) {
                this.loading = true;
                try {
                    yield this.integranteDao.saveIntegrante(this.unidade.id, row.id, []);
                    yield this.loadData({}, this.form);
                }
                finally {
                    this.loading = false;
                }
                return true;
            }
            else {
                return false;
            }
        });
    }
    saveIntegrante(form, row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (form.controls.atribuicoes.value.length) {
                this.loading = true;
                try {
                    yield this.integranteDao.saveIntegrante(this.unidade.id, form.controls.usuario_id.value, form.controls.atribuicoes.value.map((x) => x.key));
                    yield this.loadData({}, this.form);
                }
                finally {
                    this.loading = false;
                }
            }
            return undefined;
        });
    }
}
UnidadeIntegranteComponent.ɵfac = function UnidadeIntegranteComponent_Factory(t) { return new (t || UnidadeIntegranteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injector"])); };
UnidadeIntegranteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UnidadeIntegranteComponent, selectors: [["app-unidade-integrante"]], viewQuery: function UnidadeIntegranteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    } }, inputs: { unidadeId: "unidadeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 17, consts: [["editable", "", 3, "items", "minHeight", "form", "hasDelete", "add", "load", "remove", "save", "hasAdd", "hasEdit"], [3, "title", "template", "editTemplate"], ["columnUsuario", ""], ["editUsuario", ""], ["title", "Atribui\u00E7\u00F5es", "titleHint", "Atribui\u00E7\u00F5es do usu\u00E1rio nesta unidade", 3, "template", "editTemplate"], ["columnUnidadeDestino", ""], ["editUnidadeDestino", ""], ["type", "options"], [1, "row"], [1, "col-2"], [3, "url", "size", "hint"], [1, "col-10"], ["label", "", "icon", "", "controlName", "usuario_id", 3, "size", "dao"], ["usuario", ""], [1, "text-wrap", "width-min-content"], [3, "color", "icon", "label", 4, "ngFor", "ngForOf"], [3, "color", "icon", "label"], ["controlName", "atribuicoes", 3, "size", "addItemHandle"], ["label", "", "icon", "fas fa-sign-out-alt", "controlName", "atribuicao", 3, "size", "items"]], template: function UnidadeIntegranteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "column", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UnidadeIntegranteComponent_ng_template_6_Template, 9, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, UnidadeIntegranteComponent_ng_template_8_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, UnidadeIntegranteComponent_ng_template_11_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, UnidadeIntegranteComponent_ng_template_13_Template, 2, 4, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.items)("minHeight", 500)("form", ctx.form)("hasDelete", true)("add", ctx.addIntegrante.bind(ctx))("load", ctx.loadIntegrante.bind(ctx))("remove", ctx.removeIntegrante.bind(ctx))("save", ctx.saveIntegrante.bind(ctx))("hasAdd", ctx.auth.hasPermissionTo("MOD_PRGT_PART_INCL"))("hasEdit", ctx.auth.hasPermissionTo("MOD_PRGT_PART_EDT"))("hasDelete", ctx.auth.hasPermissionTo("MOD_PRGT_PART_EXCL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.entity == null ? null : ctx.entity.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.lex.translate("Usu\u00E1rio"))("template", _r0)("editTemplate", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("template", _r4)("editTemplate", _r6);
    } }, directives: [src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_6__["ColumnsComponent"], _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_7__["ColumnComponent"], _components_profile_picture_profile_picture_component__WEBPACK_IMPORTED_MODULE_8__["ProfilePictureComponent"], _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_9__["InputSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_11__["BadgeComponent"], _components_input_input_multiselect_input_multiselect_component__WEBPACK_IMPORTED_MODULE_12__["InputMultiselectComponent"], _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_13__["InputSelectComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bmlkYWRlLWludGVncmFudGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "PJoY":
/*!******************************************************************!*\
  !*** ./src/app/dao/unidade-integrante-atribuicao-dao.service.ts ***!
  \******************************************************************/
/*! exports provided: UnidadeIntegranteAtribuicaoDaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeIntegranteAtribuicaoDaoService", function() { return UnidadeIntegranteAtribuicaoDaoService; });
/* harmony import */ var _dao_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dao-base.service */ "WScx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UnidadeIntegranteAtribuicaoDaoService extends _dao_base_service__WEBPACK_IMPORTED_MODULE_0__["DaoBaseService"] {
    constructor(injector) {
        super("UnidadeIntegranteAtribuicao", injector);
        this.injector = injector;
        this.searchFields = [];
    }
}
UnidadeIntegranteAtribuicaoDaoService.ɵfac = function UnidadeIntegranteAtribuicaoDaoService_Factory(t) { return new (t || UnidadeIntegranteAtribuicaoDaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
UnidadeIntegranteAtribuicaoDaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UnidadeIntegranteAtribuicaoDaoService, factory: UnidadeIntegranteAtribuicaoDaoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "epKn":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/configuracoes/unidade/unidade-merge/unidade-merge.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UnidadeMergeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeMergeComponent", function() { return UnidadeMergeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/editable-form/editable-form.component */ "RKEd");
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ "Ufbc");
/* harmony import */ var src_app_modules_base_page_frame_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/base/page-frame-base */ "rvJe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_top_alert_top_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/top-alert/top-alert.component */ "UJzD");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ "np0s");
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ "puzm");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/grid.component */ "m4bG");
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ "d7UH");
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ "pFmK");
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ "8OLq");













const _c0 = ["unidadeOrigem"];
const _c1 = ["unidadeDestino"];
function UnidadeMergeComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r8 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((row_r8.unidade_origem == null ? null : row_r8.unidade_origem.nome) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", (row_r8.unidade_origem == null ? null : row_r8.unidade_origem.codigo) || "", " - ", (row_r8.unidade_origem == null ? null : row_r8.unidade_origem.sigla) || "", "");
} }
const _c2 = function () { return ["inativo", "!=", null]; };
const _c3 = function (a0) { return [a0]; };
const _c4 = function () { return ["configuracoes", "unidade"]; };
const _c5 = function () { return { inativos: true }; };
const _c6 = function (a0) { return { filter: a0 }; };
const _c7 = function (a0, a1) { return { route: a0, params: a1 }; };
function UnidadeMergeComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "input-search", 12, 13);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", 12)("dao", ctx_r3.dao)("where", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c2)))("selectRoute", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](11, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c5))));
} }
function UnidadeMergeComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r11 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((row_r11.unidade_destino == null ? null : row_r11.unidade_destino.nome) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", (row_r11.unidade_destino == null ? null : row_r11.unidade_destino.codigo) || "", " - ", (row_r11.unidade_destino == null ? null : row_r11.unidade_destino.sigla) || "", "");
} }
const _c8 = function () { return ["inativo", "==", null]; };
const _c9 = function () { return { inativos: false }; };
function UnidadeMergeComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "input-search", 14, 15);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", 12)("dao", ctx_r7.dao)("where", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c8)))("selectRoute", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](11, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c9))));
} }
class UnidadeMergeComponent extends src_app_modules_base_page_frame_base__WEBPACK_IMPORTED_MODULE_3__["PageFrameBase"] {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.items = [];
        this.toolbarButtons = [
            {
                icon: "bi bi-yin-yang",
                label: "Mesma sigla",
                hint: "Unificar todos que tenham a mesma sigla. Sendo a inativa considerada como origem.",
                onClick: this.onMesmaSiglaClick.bind(this)
            }
        ];
        this.validate = (control, controlName) => {
            let result = null;
            return result;
        };
        this.dao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_2__["UnidadeDaoService"]);
        this.form = this.fh.FormBuilder({
            exclui_origem: { default: false },
            origem_inativo: { default: true },
            unidade_origem_id: { default: "" },
            unidade_destino_id: { default: "" }
        }, this.cdRef, this.validate);
    }
    onMesmaSiglaClick() {
        this.loading = true;
        this.dao.mesmaSigla().then(unidades => {
            let destinos = [];
            destinos = unidades.reduce((acumulador, valor) => {
                if (!valor.inativo && !acumulador.find(x => x.sigla == valor.sigla))
                    acumulador.push(valor);
                return acumulador;
            }, destinos);
            let destinosIds = destinos.map(x => x.id);
            let origens = unidades.filter(x => !destinosIds.includes(x.id) && !!x.inativo);
            let origensIds = origens.map(x => x.id);
            this.items = [];
            for (let origem of origens) {
                let destino = destinos.find(x => x.sigla == origem.sigla);
                if (destino) {
                    this.items.push({
                        id: this.dao.generateUuid(),
                        unidade_origem_id: origem.id,
                        unidade_destino_id: destino.id,
                        unidade_origem: origem,
                        unidade_destino: destino
                    });
                }
            }
            /* Pegas as unidade que tem a Sigla repetida mas que não estão inativas */
            let error = [];
            for (let unidade of unidades) {
                if (!destinosIds.includes(unidade.id) && !origensIds.includes(unidade.id))
                    error.push(unidade.codigo + " - " + unidade.sigla + " - " + unidade.nome);
            }
            if (error.length)
                this.editableForm.error = (error.length == 1 ? "A unidade abaixo possui duplicidade de SIGLA, mas não está inativa:" : "As unidades abaixo possuem duplicidade de SIGLA, mas não estão inativas:") + "\n" + error.join("\n");
        }).finally(() => {
            this.loading = false;
        });
    }
    addMerge() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return {
                id: this.dao.generateUuid(),
                unidade_origem_id: "",
                unidade_destino_id: "",
                unidade_origem: undefined,
                unidade_destino: undefined
            };
        });
    }
    loadMerge(form, row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            form.controls.unidade_origem_id.setValue(row.unidade_origem_id);
            form.controls.unidade_destino_id.setValue(row.unidade_destino_id);
        });
    }
    removeMerge(row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return true;
        });
    }
    saveMerge(form, row) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result = undefined;
            if (((_a = this.form.controls.unidade_origem_id.value) === null || _a === void 0 ? void 0 : _a.length) || ((_b = this.form.controls.unidade_destino_id.value) === null || _b === void 0 ? void 0 : _b.length)) {
                row.unidade_origem_id = form.controls.unidade_origem_id.value;
                row.unidade_origem = ((_d = (_c = this.unidadeOrigem) === null || _c === void 0 ? void 0 : _c.selectedItem) === null || _d === void 0 ? void 0 : _d.entity) || (yield ((_e = this.dao) === null || _e === void 0 ? void 0 : _e.getById(row.unidade_origem_id)));
                row.unidade_destino_id = form.controls.unidade_destino_id.value;
                row.unidade_destino = ((_g = (_f = this.unidadeDestino) === null || _f === void 0 ? void 0 : _f.selectedItem) === null || _g === void 0 ? void 0 : _g.entity) || (yield ((_h = this.dao) === null || _h === void 0 ? void 0 : _h.getById(row.unidade_destino_id)));
                result = row;
            }
            return result;
        });
    }
    onMerge() {
        var _a, _b;
        let error = undefined;
        for (let row of this.items)
            error = error || (!((_a = row.unidade_origem_id) === null || _a === void 0 ? void 0 : _a.length) || !((_b = row.unidade_destino_id) === null || _b === void 0 ? void 0 : _b.length) ? "A origem e o destino precisam estar preenchidos em todos" : undefined);
        this.editableForm.error = error;
        if (!(error === null || error === void 0 ? void 0 : error.length)) {
            this.loading = true;
            this.dao.unificar(this.items.map(x => Object.assign({}, { unidade_origem_id: x.unidade_origem_id, unidade_destino_id: x.unidade_destino_id })), this.form.controls.exclui_origem.value).then(result => {
                if (result)
                    this.close();
            }).finally(() => {
                this.loading = false;
            });
        }
    }
}
UnidadeMergeComponent.ɵfac = function UnidadeMergeComponent_Factory(t) { return new (t || UnidadeMergeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"])); };
UnidadeMergeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UnidadeMergeComponent, selectors: [["app-unidade-merge"]], viewQuery: function UnidadeMergeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__["EditableFormComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.unidadeOrigem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.unidadeDestino = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 16, consts: [["confirmLabel", "Unificar", 3, "form", "title", "submit", "cancel"], ["type", "warning", "message", "Por motivos de seguran\u00E7a ser\u00E1 permitido somente unificar unidades inativas para unidade ativas. E caso [Exclui origem] n\u00E3o esteja habilitado, a unidade de origem continuar\u00E1 na lista (como inativa)."], [3, "buttons"], ["labelPosition", "left", "label", "Exclui origem", "controlName", "exclui_origem", 3, "size"], ["editable", "", 3, "items", "form", "add", "load", "remove", "save"], ["titleHint", "Unidade que ser\u00E1 substitu\u00EDda pela outra", 3, "title", "template", "editTemplate"], ["columnUnidadeOrigem", ""], ["editUnidadeOrigem", ""], ["titleHint", "Unidade que sobrar\u00E1 ap\u00F3s a unifica\u00E7\u00E3o", 3, "title", "template", "editTemplate"], ["columnUnidadeDestino", ""], ["editUnidadeDestino", ""], ["type", "options"], ["label", "", "icon", "", "controlName", "unidade_origem_id", 3, "size", "dao", "where", "selectRoute"], ["unidade_origem", ""], ["label", "", "icon", "", "controlName", "unidade_destino_id", 3, "size", "dao", "where", "selectRoute"], ["unidade_destino", ""]], template: function UnidadeMergeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "editable-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function UnidadeMergeComponent_Template_editable_form_submit_0_listener() { return ctx.onMerge(); })("cancel", function UnidadeMergeComponent_Template_editable_form_cancel_0_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "top-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input-switch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, UnidadeMergeComponent_ng_template_7_Template, 5, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, UnidadeMergeComponent_ng_template_9_Template, 2, 14, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, UnidadeMergeComponent_ng_template_12_Template, 5, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, UnidadeMergeComponent_ng_template_14_Template, 2, 14, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("form", ctx.form)("title", ctx.isModal ? "" : ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("buttons", ctx.toolbarButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.items)("form", ctx.form)("add", ctx.addMerge.bind(ctx))("load", ctx.loadMerge.bind(ctx))("remove", ctx.removeMerge.bind(ctx))("save", ctx.saveMerge.bind(ctx));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.lex.translate("Unidade") + " origem")("template", _r0)("editTemplate", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.lex.translate("Unidade") + " destino")("template", _r4)("editTemplate", _r6);
    } }, directives: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__["EditableFormComponent"], _components_top_alert_top_alert_component__WEBPACK_IMPORTED_MODULE_5__["TopAlertComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"], _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_7__["InputSwitchComponent"], _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__["GridComponent"], _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_9__["ColumnsComponent"], _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_10__["ColumnComponent"], _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_11__["InputSearchComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bmlkYWRlLW1lcmdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "jtVw":
/*!*************************************************************************!*\
  !*** ./src/app/modules/configuracoes/unidade/unidade-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: UnidadeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeRoutingModule", function() { return UnidadeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guards/auth.guard */ "UTcu");
/* harmony import */ var src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/resolvies/config.resolver */ "toza");
/* harmony import */ var _unidade_form_unidade_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unidade-form/unidade-form.component */ "0Wht");
/* harmony import */ var _unidade_list_unidade_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unidade-list/unidade-list.component */ "8tza");
/* harmony import */ var _unidade_merge_unidade_merge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unidade-merge/unidade-merge.component */ "epKn");
/* harmony import */ var _unidade_integrante_unidade_integrante_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unidade-integrante/unidade-integrante.component */ "JmwT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    { path: '', component: _unidade_list_unidade_list_component__WEBPACK_IMPORTED_MODULE_4__["UnidadeListComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Unidades" } },
    { path: ':id/subordinadas', component: _unidade_list_unidade_list_component__WEBPACK_IMPORTED_MODULE_4__["UnidadeListComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Unidades subordinadas" } },
    { path: 'new', component: _unidade_form_unidade_form_component__WEBPACK_IMPORTED_MODULE_3__["UnidadeFormComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Inclusão de Unidade", modal: true } },
    { path: ':id/edit', component: _unidade_form_unidade_form_component__WEBPACK_IMPORTED_MODULE_3__["UnidadeFormComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Edição de Unidade", modal: true } },
    { path: ':id/consult', component: _unidade_form_unidade_form_component__WEBPACK_IMPORTED_MODULE_3__["UnidadeFormComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Consulta a Unidade", modal: true } },
    { path: ':id/:idUnidade/integrante', component: _unidade_integrante_unidade_integrante_component__WEBPACK_IMPORTED_MODULE_6__["UnidadeIntegranteComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Integrantes da Unidade", modal: true } },
    { path: 'merge', component: _unidade_merge_unidade_merge_component__WEBPACK_IMPORTED_MODULE_5__["UnidadeMergeComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Unificação", modal: true } }
];
class UnidadeRoutingModule {
}
UnidadeRoutingModule.ɵfac = function UnidadeRoutingModule_Factory(t) { return new (t || UnidadeRoutingModule)(); };
UnidadeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: UnidadeRoutingModule });
UnidadeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](UnidadeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-configuracoes-unidade-unidade-module.js.map