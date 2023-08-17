"use strict";
(self["webpackChunkpetrvs"] = self["webpackChunkpetrvs"] || []).push([[68],{

/***/ 609:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/configuracoes/preferencia/preferencia-form-petrvs/preferencia-form-petrvs.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreferenciaFormPetrvsComponent: () => (/* binding */ PreferenciaFormPetrvsComponent)
/* harmony export */ });
/* harmony import */ var _usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var src_app_models_entidade_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/entidade.model */ 22469);
/* harmony import */ var src_app_dao_entidade_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/entidade-dao.service */ 15316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 89650);

var _class;







function PreferenciaFormPetrvsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class PreferenciaFormPetrvsComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_2__.PageFormBase {
  constructor(injector) {
    super(injector, src_app_models_entidade_model__WEBPACK_IMPORTED_MODULE_3__.Entidade, src_app_dao_entidade_dao_service__WEBPACK_IMPORTED_MODULE_4__.EntidadeDaoService);
    this.injector = injector;
    this.carregando = false;
    this.validate = (control, controlName) => {
      let result = null;
      return result;
    };
    this.titleEdit = entity => {
      return "Editando " + this.lex.translate("Preferência") + ' ' + this.lex.translate("da Entidade") + ': ' + (entity?.nome || "");
    };
    this.form = this.fh.FormBuilder({}, this.cdRef, this.validate);
  }
  get isPanel() {
    return this.panel != undefined;
  }
  loadData(entity, form) {
    var _this = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let formValue = Object.assign({}, form.value);
      form.patchValue(_this.util.fillForm(formValue, entity));
    })();
  }
  initializeData(form) {
    var _this2 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.carregando = true;
      try {
        _this2.entity = new src_app_models_entidade_model__WEBPACK_IMPORTED_MODULE_3__.Entidade();
        yield _this2.loadData(_this2.entity, form);
      } finally {
        _this2.carregando = false;
      }
    })();
  }
  saveData(form) {
    return new Promise((resolve, reject) => {
      resolve(!this.isPanel);
    });
  }
}
_class = PreferenciaFormPetrvsComponent;
_class.ɵfac = function PreferenciaFormPetrvsComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["preferencia-form-petrvs"]],
  viewQuery: function PreferenciaFormPetrvsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
    }
  },
  inputs: {
    panel: "panel"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 5,
  consts: [["class", "d-flex justify-content-center", 4, "ngIf"], [3, "form", "noButtons", "submit", "cancel"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"]],
  template: function PreferenciaFormPetrvsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PreferenciaFormPetrvsComponent_div_0_Template, 3, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div")(2, "editable-form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function PreferenciaFormPetrvsComponent_Template_editable_form_submit_2_listener() {
        return ctx.onSaveData();
      })("cancel", function PreferenciaFormPetrvsComponent_Template_editable_form_cancel_2_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Em desenvolvimento ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.carregando);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("d-none", ctx.carregando);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx.form)("noButtons", ctx.isPanel ? "true" : undefined);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 79259:
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/configuracoes/preferencia/preferencia-form-usuario/preferencia-form-usuario.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreferenciaFormUsuarioComponent: () => (/* binding */ PreferenciaFormUsuarioComponent)
/* harmony export */ });
/* harmony import */ var _usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ 1184);
/* harmony import */ var src_app_models_usuario_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/usuario.model */ 26898);
/* harmony import */ var src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/usuario-dao.service */ 35255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ 45512);
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ 88820);
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ 92392);
/* harmony import */ var _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/input/input-select/input-select.component */ 64603);
/* harmony import */ var _components_input_input_color_input_color_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/input/input-color/input-color.component */ 66848);
/* harmony import */ var _components_input_input_multiselect_input_multiselect_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/input/input-multiselect/input-multiselect.component */ 17819);
/* harmony import */ var _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/separator/separator.component */ 25560);
/* harmony import */ var _uteis_notificacoes_notificacoes_config_notificacoes_config_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../uteis/notificacoes/notificacoes-config/notificacoes-config.component */ 92739);

var _class;















const _c0 = ["notificacoes"];
function PreferenciaFormUsuarioComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function PreferenciaFormUsuarioComponent_separator_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "separator", 13)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "input-switch", 14)(3, "input-switch", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Prefer\u00EAncias de exibi\u00E7\u00E3o " + ctx_r1.lex.translate("usu\u00E1rio"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 12)("label", "Ocultar menu lateral do sei no Controle de " + ctx_r1.lex.translate("Processo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 12);
  }
}
function PreferenciaFormUsuarioComponent_separator_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "separator", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "notificacoes-config", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("entity", ctx_r2.entity)("disabled", ctx_r2.formDisabled);
  }
}
class PreferenciaFormUsuarioComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_2__.PageFormBase {
  constructor(injector) {
    super(injector, src_app_models_usuario_model__WEBPACK_IMPORTED_MODULE_3__.Usuario, src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioDaoService);
    this.injector = injector;
    this.etiquetas = false;
    this.carregando = false;
    this.toolbarButtons = [{
      label: "Resetar",
      icon: "bi bi-backspace",
      onClick: () => {
        this.loading = true;
        this.dao.update(this.usuarioId, {
          config: new src_app_models_usuario_model__WEBPACK_IMPORTED_MODULE_3__.UsuarioConfig()
        }).then(usuario => {
          this.initializeData(this.form);
        }).finally(() => {
          this.loading = false;
        });
      }
    }];
    this.validate = (control, controlName) => {
      let result = null;
      return result;
    };
    this.titleEdit = entity => {
      return "Editando " + this.lex.translate("Preferência") + ' ' + this.lex.translate("do Usuário") + ': ' + (entity?.apelido || "");
    };
    this.form = this.fh.FormBuilder({
      etiquetas: {
        default: []
      },
      etiqueta_texto: {
        default: ""
      },
      etiqueta_icone: {
        default: null
      },
      etiqueta_cor: {
        default: null
      },
      ocultar_menu_sei: {
        default: true
      },
      ocultar_container_petrvs: {
        default: false
      }
      /*notifica_demanda_distribuicao: {default: true},
      notifica_demanda_conclusao: {default: true},
      notifica_demanda_avaliacao: {default: true},
      notifica_demanda_modificacao: {default: true},
      notifica_demanda_comentario: {default: true},
      enviar_petrvs: {default: true},
      enviar_email: {default: true},
      enviar_whatsapp: {default: true}*/
    }, this.cdRef, this.validate);
  }
  get isPanel() {
    return this.panel != undefined;
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.urlParams.get("id")) {
      this.usuarioId = this.urlParams.get("id");
    }
    this.etiquetas = !!this.queryParams.etiquetas;
  }
  loadData(entity, form) {
    var _this = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let formValue = Object.assign({}, form.value);
      formValue = _this.util.fillForm(formValue, entity.config || {});
      formValue = _this.util.fillForm(formValue, entity.notificacoes || {});
      form.patchValue(formValue);
    })();
  }
  initializeData(form) {
    var _this2 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.carregando = true;
      try {
        _this2.entity = yield _this2.dao.getById(_this2.usuarioId);
        yield _this2.loadData(_this2.entity, form);
      } finally {
        _this2.carregando = false;
      }
    })();
  }
  saveData(form) {
    return new Promise((resolve, reject) => {
      this.notificacoes?.saveData();
      let config = this.util.fill(new src_app_models_usuario_model__WEBPACK_IMPORTED_MODULE_3__.UsuarioConfig(), this.form.value);
      Promise.all([this.auth.updateUsuarioConfig(this.usuarioId, config), this.auth.updateUsuarioNotificacoes(this.usuarioId, this.entity.notificacoes)]).then(results => {
        if (this.usuarioId == this.auth.usuario.id) {
          this.auth.authSession().then(result => resolve(!this.isPanel)).catch(reject);
        } else {
          resolve(!this.isPanel);
        }
      }).catch(reject);
    });
  }
  addItemHandleEtiquetas() {
    let result = undefined;
    const value = this.form.controls.etiqueta_texto.value;
    const key = this.util.textHash(value);
    if (value?.length && this.util.validateLookupItem(this.form.controls.etiquetas.value, key)) {
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
}
_class = PreferenciaFormUsuarioComponent;
_class.ɵfac = function PreferenciaFormUsuarioComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["preferencia-form-usuario"]],
  viewQuery: function PreferenciaFormUsuarioComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.notificacoes = _t.first);
    }
  },
  inputs: {
    panel: "panel",
    usuarioId: "usuarioId"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]],
  decls: 11,
  vars: 14,
  consts: [["class", "d-flex justify-content-center", 4, "ngIf"], [3, "buttons"], [3, "form", "noButtons", "submit", "cancel"], [1, "row"], ["label", "Etiquetas", "multiselectStyle", "inline", "controlName", "etiquetas", 3, "size", "addItemHandle"], ["label", "Texto", "controlName", "etiqueta_texto", 3, "size"], ["label", "\u00CDcone", "icon", "fas fa-sign-out-alt", "controlName", "etiqueta_icone", "liveSearch", "", 3, "size", "items"], ["label", "Cor", "controlName", "etiqueta_cor", 3, "size"], ["transparent", "", 3, "title", 4, "ngIf"], ["transparent", "", "title", "Notifica\u00E7\u00F5es", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["transparent", "", 3, "title"], ["scale", "small", "labelPosition", "right", "controlName", "ocultar_menu_sei", 3, "size", "label"], ["scale", "small", "labelPosition", "right", "label", "Ocultar o container Petrvs", "controlName", "ocultar_container_petrvs", 3, "size"], ["transparent", "", "title", "Notifica\u00E7\u00F5es"], [3, "entity", "disabled"], ["notificacoes", ""]],
  template: function PreferenciaFormUsuarioComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, PreferenciaFormUsuarioComponent_div_0_Template, 3, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "editable-form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("submit", function PreferenciaFormUsuarioComponent_Template_editable_form_submit_3_listener() {
        return ctx.onSaveData();
      })("cancel", function PreferenciaFormUsuarioComponent_Template_editable_form_cancel_3_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 3)(5, "input-multiselect", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "input-text", 5)(7, "input-select", 6)(8, "input-color", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, PreferenciaFormUsuarioComponent_separator_9_Template, 4, 4, "separator", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, PreferenciaFormUsuarioComponent_separator_10_Template, 3, 2, "separator", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.carregando);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("d-none", ctx.carregando);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("buttons", ctx.toolbarButtons);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("form", ctx.form)("noButtons", ctx.isPanel ? "true" : undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 12)("addItemHandle", ctx.addItemHandleEtiquetas.bind(ctx));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 3)("items", ctx.lookup.ICONES);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("size", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.etiquetas);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.entity);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__.ToolbarComponent, src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_6__.InputSwitchComponent, _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_7__.InputTextComponent, _components_input_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_8__.InputSelectComponent, _components_input_input_color_input_color_component__WEBPACK_IMPORTED_MODULE_9__.InputColorComponent, _components_input_input_multiselect_input_multiselect_component__WEBPACK_IMPORTED_MODULE_10__.InputMultiselectComponent, _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_11__.SeparatorComponent, _uteis_notificacoes_notificacoes_config_notificacoes_config_component__WEBPACK_IMPORTED_MODULE_12__.NotificacoesConfigComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 22051:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/configuracoes/preferencia/preferencia-form/preferencia-form.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreferenciaFormComponent: () => (/* binding */ PreferenciaFormComponent)
/* harmony export */ });
/* harmony import */ var _usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/editable-form/editable-form.component */ 74040);
/* harmony import */ var src_app_modules_base_page_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/base/page-base */ 17112);
/* harmony import */ var _preferencia_form_petrvs_preferencia_form_petrvs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../preferencia-form-petrvs/preferencia-form-petrvs.component */ 609);
/* harmony import */ var _preferencia_form_usuario_preferencia_form_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../preferencia-form-usuario/preferencia-form-usuario.component */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/tabs/tabs.component */ 66384);
/* harmony import */ var _components_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/tabs/tab/tab.component */ 74978);

var _class;











function PreferenciaFormComponent_tab_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Em desenvolvimento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", ctx_r2.lex.translate("Entidade"));
  }
}
class PreferenciaFormComponent extends src_app_modules_base_page_base__WEBPACK_IMPORTED_MODULE_2__.PageBase {
  /*private _submitting: boolean = false;
  public set submitting(value: boolean) {
    if(!value) {
      this.dialog.closeSppinerOverlay();
    } else if(!this._submitting) {
      this.dialog.showSppinerOverlay("Salvando dados do formulário");
    }
    this._submitting = value;
  }
  public get submitting(): boolean {
    return this._submitting;
  }
  private _loading: boolean = false;
  public set loading(value: boolean) {
    if(!value) {
      this.dialog.closeSppinerOverlay();
    } else if(!this._loading) {
      this.dialog.showSppinerOverlay("Carregando dados do formulário");
    }
    this._loading = value;
  }
  public get loading(): boolean {
    return this._loading;
  }*/
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.mensagemCarregando = "Carregando dados do formulário...";
    this.mensagemSalvando = "Salvando dados do formulário...";
    this.form = this.fh.FormBuilder({});
  }
  get forceInvalid() {
    return !!this.petrvs?.form?.invalid || !!this.usuario?.form?.invalid;
  }
  onSaveData() {
    var _this = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.forceInvalid) {
        _this.submitting = true;
        try {
          yield Promise.all([_this.petrvs?.onSaveData(), _this.usuario?.onSaveData()]);
          _this.dialog.alert("Atenção", "Algumas modificações só surtirão efeito após atualizar a página.\nPor motivos de segurança esse procedimento, de atualizar a pagina, deverá ser executado pelo usuário.");
          _this.go.back();
        } catch (error) {
          _this.editableForm.error = error.message ? error.message : error;
        } finally {
          _this.submitting = false;
        }
      } else {
        if (!_this.petrvs?.form?.invalid) _this.editableForm.error = "Form Petrvs com erro";
        if (!_this.usuario?.form?.invalid) _this.editableForm.error = "Form do usuário com erro";
      }
    })();
  }
  onCancel() {
    this.close();
  }
}
_class = PreferenciaFormComponent;
_class.ɵfac = function PreferenciaFormComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-preferencia-form"]],
  viewQuery: function PreferenciaFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_preferencia_form_petrvs_preferencia_form_petrvs_component__WEBPACK_IMPORTED_MODULE_3__.PreferenciaFormPetrvsComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_preferencia_form_usuario_preferencia_form_usuario_component__WEBPACK_IMPORTED_MODULE_4__.PreferenciaFormUsuarioComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.petrvs = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.usuario = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 9,
  vars: 6,
  consts: [[3, "form", "forceInvalid", "title", "submit", "cancel"], ["display", "", "right", ""], ["key", "USUARIO", 3, "label"], ["panel", "", 3, "usuarioId"], ["usuario", ""], ["key", "PETRVS", "label", "Petrvs"], ["panel", ""], ["petrvs", ""], ["key", "ENTIDADE", 3, "label", 4, "ngIf"], ["key", "ENTIDADE", 3, "label"]],
  template: function PreferenciaFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "editable-form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function PreferenciaFormComponent_Template_editable_form_submit_0_listener() {
        return ctx.onSaveData();
      })("cancel", function PreferenciaFormComponent_Template_editable_form_cancel_0_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "tabs", 1)(2, "tab", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "preferencia-form-usuario", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "tab", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "preferencia-form-petrvs", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, PreferenciaFormComponent_tab_8_Template, 2, 1, "tab", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("form", ctx.form)("forceInvalid", ctx.forceInvalid)("title", ctx.isModal ? "" : ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", ctx.lex.translate("Usu\u00E1rio"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("usuarioId", ctx.auth.usuario.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.auth.entidade);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__.EditableFormComponent, _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__.TabsComponent, _components_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_6__.TabComponent, _preferencia_form_petrvs_preferencia_form_petrvs_component__WEBPACK_IMPORTED_MODULE_3__.PreferenciaFormPetrvsComponent, _preferencia_form_usuario_preferencia_form_usuario_component__WEBPACK_IMPORTED_MODULE_4__.PreferenciaFormUsuarioComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 62092:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/configuracoes/preferencia/preferencia-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreferenciaRoutingModule: () => (/* binding */ PreferenciaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 1391);
/* harmony import */ var src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/resolvies/config.resolver */ 2314);
/* harmony import */ var _preferencia_form_usuario_preferencia_form_usuario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preferencia-form-usuario/preferencia-form-usuario.component */ 79259);
/* harmony import */ var _preferencia_form_preferencia_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preferencia-form/preferencia-form.component */ 22051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;







const routes = [{
  path: '',
  component: _preferencia_form_preferencia_form_component__WEBPACK_IMPORTED_MODULE_3__.PreferenciaFormComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Preferências"
  }
}, {
  path: 'usuario/:id',
  component: _preferencia_form_usuario_preferencia_form_usuario_component__WEBPACK_IMPORTED_MODULE_2__.PreferenciaFormUsuarioComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  resolve: {
    config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_1__.ConfigResolver
  },
  runGuardsAndResolvers: 'always',
  data: {
    title: "Preferências do Usuário"
  }
}];
class PreferenciaRoutingModule {}
_class = PreferenciaRoutingModule;
_class.ɵfac = function PreferenciaRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PreferenciaRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 10068:
/*!*************************************************************************!*\
  !*** ./src/app/modules/configuracoes/preferencia/preferencia.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreferenciaModule: () => (/* binding */ PreferenciaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _preferencia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preferencia-routing.module */ 62092);
/* harmony import */ var _preferencia_form_preferencia_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preferencia-form/preferencia-form.component */ 22051);
/* harmony import */ var _preferencia_form_petrvs_preferencia_form_petrvs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preferencia-form-petrvs/preferencia-form-petrvs.component */ 609);
/* harmony import */ var _preferencia_form_usuario_preferencia_form_usuario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preferencia-form-usuario/preferencia-form-usuario.component */ 79259);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ 10822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _uteis_uteis_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../uteis/uteis.module */ 82509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;









class PreferenciaModule {}
_class = PreferenciaModule;
_class.ɵfac = function PreferenciaModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _preferencia_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreferenciaRoutingModule, _uteis_uteis_module__WEBPACK_IMPORTED_MODULE_5__.UteisModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PreferenciaModule, {
    declarations: [_preferencia_form_preferencia_form_component__WEBPACK_IMPORTED_MODULE_1__.PreferenciaFormComponent, _preferencia_form_petrvs_preferencia_form_petrvs_component__WEBPACK_IMPORTED_MODULE_2__.PreferenciaFormPetrvsComponent, _preferencia_form_usuario_preferencia_form_usuario_component__WEBPACK_IMPORTED_MODULE_3__.PreferenciaFormUsuarioComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _preferencia_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreferenciaRoutingModule, _uteis_uteis_module__WEBPACK_IMPORTED_MODULE_5__.UteisModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=68.js.map