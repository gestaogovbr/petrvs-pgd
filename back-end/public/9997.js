"use strict";
(self["webpackChunkpetrvs"] = self["webpackChunkpetrvs"] || []).push([[9997],{

/***/ 89997:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/gestao/plano-trabalho/plano-trabalho-list/plano-trabalho-list.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanoTrabalhoListComponent: () => (/* binding */ PlanoTrabalhoListComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/grid/grid.component */ 73150);
/* harmony import */ var src_app_dao_documento_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/documento-dao-service */ 25026);
/* harmony import */ var src_app_dao_plano_trabalho_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/plano-trabalho-dao.service */ 87744);
/* harmony import */ var src_app_dao_programa_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/programa-dao.service */ 92214);
/* harmony import */ var src_app_dao_tipo_modalidade_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/tipo-modalidade-dao.service */ 66075);
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ 81214);
/* harmony import */ var src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dao/usuario-dao.service */ 35255);
/* harmony import */ var src_app_models_plano_trabalho_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/plano-trabalho.model */ 20762);
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var _plano_trabalho_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../plano-trabalho.service */ 80684);
/* harmony import */ var src_app_modules_uteis_documentos_documento_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/uteis/documentos/documento.service */ 22702);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/util.service */ 49193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 51197);













function PlanoTrabalhoListComponent_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "toolbar")(1, "input-switch", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function PlanoTrabalhoListComponent_toolbar_1_Template_input_switch_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r38.onAgruparChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 4)("control", ctx_r0.filter.controls.agrupar);
  }
}
function PlanoTrabalhoListComponent_column_14_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r44.entregas == null ? null : row_r44.entregas.length, "");
  }
}
function PlanoTrabalhoListComponent_column_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, PlanoTrabalhoListComponent_column_14_ng_template_1_span_0_Template, 3, 1, "span", 49);
  }
  if (rf & 2) {
    const row_r44 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r44.entregas == null ? null : row_r44.entregas.length);
  }
}
function PlanoTrabalhoListComponent_column_14_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "plano-trabalho-list-entrega", 52);
  }
  if (rf & 2) {
    const row_r47 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("entity", row_r47);
  }
}
function PlanoTrabalhoListComponent_column_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "column", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PlanoTrabalhoListComponent_column_14_ng_template_1_Template, 1, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, PlanoTrabalhoListComponent_column_14_ng_template_3_Template, 1, 1, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](2);
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("align", "center")("hint", ctx_r1.lex.translate("Entrega"))("template", _r40)("expandTemplate", _r42);
  }
}
function PlanoTrabalhoListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "order", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "#ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r48 = ctx.header;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("header", header_r48);
  }
}
function PlanoTrabalhoListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r49 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", "#" + row_r49.numero, "");
  }
}
function PlanoTrabalhoListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "order", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Usu\u00E1rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Programa ");
  }
  if (rf & 2) {
    const header_r50 = ctx.header;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("header", header_r50);
  }
}
function PlanoTrabalhoListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "br")(3, "badge", 55);
  }
  if (rf & 2) {
    const row_r51 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (row_r51.usuario == null ? null : row_r51.usuario.nome) || "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", (row_r51.programa == null ? null : row_r51.programa.nome) || "");
  }
}
function PlanoTrabalhoListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r52 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (row_r52.unidade == null ? null : row_r52.unidade.sigla) || "", "");
  }
}
function PlanoTrabalhoListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r53 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (row_r53.tipo_modalidade == null ? null : row_r53.tipo_modalidade.nome) || "", "");
  }
}
function PlanoTrabalhoListComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0, " Vig\u00EAncia de");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "order", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "In\u00EDcio");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "order", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Fim");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r54 = ctx.header;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("header", header_r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("header", header_r54);
  }
}
function PlanoTrabalhoListComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r55 = ctx.row;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r17.dao.getDateFormatted(row_r55.data_inicio), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", " at\u00E9 " + ctx_r17.dao.getDateFormatted(row_r55.data_fim), "");
  }
}
function PlanoTrabalhoListComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "documentos-badge", 58);
  }
  if (rf & 2) {
    const row_r56 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("documento", row_r56.documento)("maxWidth", 200);
  }
}
function PlanoTrabalhoListComponent_ng_template_40_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "badge", 62);
  }
}
function PlanoTrabalhoListComponent_ng_template_40_badge_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "badge", 63);
  }
}
function PlanoTrabalhoListComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "badge", 59)(1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, PlanoTrabalhoListComponent_ng_template_40_badge_2_Template, 1, 0, "badge", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, PlanoTrabalhoListComponent_ng_template_40_badge_3_Template, 1, 0, "badge", 61);
  }
  if (rf & 2) {
    const row_r57 = ctx.row;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("color", ctx_r21.lookup.getColor(ctx_r21.lookup.PLANO_TRABALHO_STATUS, row_r57.status))("icon", ctx_r21.lookup.getIcon(ctx_r21.lookup.PLANO_TRABALHO_STATUS, row_r57.status))("label", ctx_r21.lookup.getValue(ctx_r21.lookup.PLANO_TRABALHO_STATUS, row_r57.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r57.data_arquivamento);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r57.deleted_at);
  }
}
function PlanoTrabalhoListComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r60 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](row_r60.numero);
  }
}
function PlanoTrabalhoListComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r61 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((row_r61.usuario == null ? null : row_r61.usuario.matricula) || "");
  }
}
function PlanoTrabalhoListComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r62 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((row_r62.programa == null ? null : row_r62.programa.nome) || "");
  }
}
function PlanoTrabalhoListComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r63 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((row_r63.unidade == null ? null : row_r63.unidade.nome) || "");
  }
}
function PlanoTrabalhoListComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r64 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((row_r64.tipo_modalidade == null ? null : row_r64.tipo_modalidade.nome) || "");
  }
}
function PlanoTrabalhoListComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r65 = ctx.row;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r33.util.getDateTimeFormatted(row_r65.data_inicio));
  }
}
function PlanoTrabalhoListComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r66 = ctx.row;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r35.util.getDateTimeFormatted(row_r66.data_fim));
  }
}
function PlanoTrabalhoListComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r67 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((row_r67.documento == null ? null : row_r67.documento.numero_processo == null ? null : row_r67.documento.numero_processo.length) ? row_r67.documento == null ? null : row_r67.documento.numero_processo : "N\u00E3o atribu\u00EDdo");
  }
}
class PlanoTrabalhoListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_8__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_plano_trabalho_model__WEBPACK_IMPORTED_MODULE_7__.PlanoTrabalho, src_app_dao_plano_trabalho_dao_service__WEBPACK_IMPORTED_MODULE_2__.PlanoTrabalhoDaoService);
    this.injector = injector;
    this.routeStatus = {
      route: ["uteis", "status"]
    };
    this.multiselectAllFields = ["tipo_modalidade_id", "usuario_id", "unidade_id", "documento_id"];
    this.relatorios = [{
      key: "PTR_LISTA",
      value: "Lista Planos de Trabalhos"
    }];
    this.botoes = [];
    this.DATAS_FILTRO = [{
      key: "VIGENTE",
      value: "Vigente"
    }, {
      key: "NAOVIGENTE",
      value: "Não vigente"
    }, {
      key: "INICIAM",
      value: "Iniciam"
    }, {
      key: "FINALIZAM",
      value: "Finalizam"
    }];
    this.filterValidate = (control, controlName) => {
      let result = null;
      if (controlName == "data_filtro_inicio" && control.value > this.filter?.controls.data_filtro_fim.value) {
        result = "Maior que fim";
      } else if (controlName == "data_filtro_fim" && control.value < this.filter?.controls.data_filtro_inicio.value) {
        result = "Menor que início";
      }
      return result;
    };
    this.filterWhere = filter => {
      let result = [];
      let form = filter.value;
      if (form.tipo_modalidade_id?.length) {
        result.push(["tipo_modalidade_id", "==", form.tipo_modalidade_id]);
      }
      if (form.data_filtro) {
        result.push(["data_filtro", "==", form.data_filtro]);
        result.push(["data_filtro_inicio", "==", form.data_filtro_inicio]);
        result.push(["data_filtro_fim", "==", form.data_filtro_fim]);
      }
      if (form.usuario?.length) result.push(["usuario.nome", "like", "%" + form.usuario.trim().replace(" ", "%") + "%"]);
      if (form.unidade_id?.length) result.push(["unidade_id", "==", form.unidade_id]);
      if (form.status) result.push(["status", "==", form.status]);
      //  (RI_PTR_C) Por padrão, os planos de trabalho retornados na listagem do grid são os que não foram arquivados.
      result.push(["incluir_arquivados", "==", this.filter.controls.arquivados.value]);
      return result;
    };
    this.dynamicMultiselectMenu = multiselected => {
      let assinar = !!Object.keys(multiselected).length;
      let menu = [];
      Object.entries(multiselected).forEach(([key, value]) => {
        if (!this.planoTrabalhoService.needSign(value)) assinar = false;
      });
      if (assinar) menu.push({
        label: "Assinar",
        icon: "bi bi-pen",
        onClick: this.assinar.bind(this)
      });
      return menu;
    };
    this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_5__.UnidadeDaoService);
    this.programaDao = injector.get(src_app_dao_programa_dao_service__WEBPACK_IMPORTED_MODULE_3__.ProgramaDaoService);
    this.documentoDao = injector.get(src_app_dao_documento_dao_service__WEBPACK_IMPORTED_MODULE_1__.DocumentoDaoService);
    this.documentoService = injector.get(src_app_modules_uteis_documentos_documento_service__WEBPACK_IMPORTED_MODULE_10__.DocumentoService);
    this.utilService = injector.get(src_app_services_util_service__WEBPACK_IMPORTED_MODULE_11__.UtilService);
    this.usuarioDao = injector.get(src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_6__.UsuarioDaoService);
    this.planoTrabalhoService = injector.get(_plano_trabalho_service__WEBPACK_IMPORTED_MODULE_9__.PlanoTrabalhoService);
    this.tipoModalidadeDao = injector.get(src_app_dao_tipo_modalidade_dao_service__WEBPACK_IMPORTED_MODULE_4__.TipoModalidadeDaoService);
    /* Inicializações */
    this.title = this.lex.translate("Planos de Trabalho");
    this.code = "MOD_PTR";
    this.filter = this.fh.FormBuilder({
      agrupar: {
        default: true
      },
      usuario: {
        default: ""
      },
      status: {
        default: ""
      },
      unidade_id: {
        default: null
      },
      arquivados: {
        default: false
      },
      tipo_modalidade_id: {
        default: null
      },
      data_filtro: {
        default: null
      },
      data_filtro_inicio: {
        default: new Date()
      },
      data_filtro_fim: {
        default: new Date()
      }
    }, this.cdRef, this.filterValidate);
    this.join = ["unidade.entidade", "unidade.gestor.usuario:id", "usuario", "programa.template_tcr", "documento.assinaturas.usuario:id,nome,url_foto", "tipo_modalidade", "entregas.plano_entrega_entrega.entrega", "entregas.plano_entrega_entrega.plano_entrega:id,unidade_id", "entregas.plano_entrega_entrega.plano_entrega.unidade", "entregas.entrega", "entregas.reacoes.usuario:id,nome,apelido"];
    this.groupBy = [{
      field: "unidade.sigla",
      label: "Unidade"
    }];
    this.BOTAO_ALTERAR = {
      label: "Alterar",
      icon: "bi bi-pencil-square",
      color: "btn-outline-info",
      onClick: this.edit.bind(this)
    };
    this.BOTAO_ARQUIVAR = {
      label: "Arquivar",
      icon: "bi bi-inboxes",
      onClick: this.arquivar.bind(this)
    };
    this.BOTAO_ASSINAR = {
      label: "Assinar",
      icon: "bi bi-pen",
      onClick: this.assinar.bind(this)
    };
    this.BOTAO_ATIVAR = {
      label: "Ativar",
      icon: this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS, "ATIVO"),
      color: this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS, "ATIVO"),
      onClick: this.ativar.bind(this)
    };
    this.BOTAO_CANCELAR_ASSINATURA = {
      label: "Cancelar assinatura",
      icon: this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS, "AGUARDANDO_ASSINATURA ou INCLUIDO"),
      color: this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS, "AGUARDANDO_ASSINATURA ou INCLUIDO"),
      onClick: this.cancelarAssinatura.bind(this)
    };
    this.BOTAO_CANCELAR_PLANO = {
      label: "Cancelar plano",
      icon: this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS, "CANCELADO"),
      color: this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS, "CANCELADO"),
      onClick: this.cancelarPlano.bind(this)
    };
    this.BOTAO_DESARQUIVAR = {
      label: "Desarquivar",
      icon: "bi bi-reply",
      onClick: this.desarquivar.bind(this)
    };
    this.BOTAO_ENVIAR_ASSINATURA = {
      label: "Enviar para assinatura",
      icon: this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS, "AGUARDANDO_ASSINATURA"),
      color: this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS, "AGUARDANDO_ASSINATURA"),
      onClick: this.enviarParaAssinatura.bind(this)
    };
    this.BOTAO_INFORMACOES = {
      label: "Informações",
      icon: "bi bi-info-circle",
      onClick: this.consult.bind(this)
    };
    this.BOTAO_RELATORIO = {
      label: "Relatório",
      icon: "bi bi-file-pdf",
      onClick: row => this.report(row, 'PTR_LISTA_ENTREGAS')
    };
    this.BOTAO_TERMOS = {
      label: "Termos",
      icon: "bi bi-file-earmark-check",
      onClick: (row => this.go.navigate({
        route: ['uteis', 'documentos', 'TCR', row.id]
      }, {
        modalClose: modalResult => (this.grid?.query || this.query).refreshId(row.id),
        metadata: this.planoTrabalhoService.metadados(row)
      })).bind(this)
    };
    this.BOTAO_CONSOLIDACOES = {
      label: "Consolidações",
      icon: this.entityService.getIcon('PlanoTrabalhoConsolidacao'),
      onClick: (row => this.go.navigate({
        route: ['gestao', 'plano-trabalho', 'consolidacao', row.usuario_id, row.id]
      }, {
        modalClose: modalResult => (this.grid?.query || this.query).refreshId(row.id),
        modal: true
      })).bind(this)
    };
    this.BOTAO_REATIVAR = {
      label: "Reativar",
      icon: this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS, "ATIVO"),
      color: this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS, "ATIVO"),
      onClick: this.reativar.bind(this)
    };
    this.BOTAO_SUSPENDER = {
      label: "Suspender",
      icon: this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS, "SUSPENSO"),
      color: this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS, "SUSPENSO"),
      onClick: this.suspender.bind(this)
    };
    this.botoes = [this.BOTAO_ALTERAR, this.BOTAO_ARQUIVAR, this.BOTAO_ASSINAR, this.BOTAO_ATIVAR, this.BOTAO_CANCELAR_ASSINATURA, this.BOTAO_CANCELAR_PLANO, this.BOTAO_DESARQUIVAR, this.BOTAO_ENVIAR_ASSINATURA, this.BOTAO_INFORMACOES, this.BOTAO_RELATORIO, this.BOTAO_TERMOS, this.BOTAO_CONSOLIDACOES, this.BOTAO_REATIVAR, this.BOTAO_SUSPENDER];
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.metadata?.minha_unidade) {
      this.filter?.controls.unidade_id.setValue(this.auth.unidade?.id);
    }
  }
  dynamicOptions(row) {
    let result = [];
    this.botoes.forEach(botao => {
      if (this.botaoAtendeCondicoes(botao, row)) result.push(botao);
    });
    return result;
  }
  dynamicButtons(row) {
    let result = [];
    let planoTrabalho = row;
    switch (this.planoTrabalhoService.situacaoPlano(planoTrabalho)) {
      case 'INCLUIDO':
        if (this.botaoAtendeCondicoes(this.BOTAO_ASSINAR, row)) result.push(this.BOTAO_ASSINAR);else if (this.botaoAtendeCondicoes(this.BOTAO_ATIVAR, row)) result.push(this.BOTAO_ATIVAR);else if (this.botaoAtendeCondicoes(this.BOTAO_ENVIAR_ASSINATURA, row)) result.push(this.BOTAO_ENVIAR_ASSINATURA);
        /*
          - botões-padrão:
            - 'Assinar'. Condições para ser exibido: vide RN_PTR_O;                  (quando for exigida apenas a assinatura do usuário logado no TCR)
            - 'Ativar'. Condições para ser exibido: vide RN_PTR_P;                   (quando não for exigida nenhuma assinatura no TCR)
            - 'Enviar para Assinatura'. Condições para ser exibido: vide RN_PTR_U;
            - 'Consultar'. Condições para ser exibido: vide RN_PTR_S;
        */
        break;
      case 'AGUARDANDO_ASSINATURA':
        if (this.botaoAtendeCondicoes(this.BOTAO_ASSINAR, row)) result.push(this.BOTAO_ASSINAR);
        /**
          - botões-padrão:
            - 'Assinar'. Condições para ser exibido: vide RN_PTR_O;
            - 'Consultar'. Condições para ser exibido: vide RN_PTR_S;
        */
        break;
      case 'ATIVO':
        /**
          - botões-padrão:
            - 'Consultar'. Condições para ser exibido: vide RN_PTR_S;
        */
        break;
      case 'CONCLUIDO':
        if (this.botaoAtendeCondicoes(this.BOTAO_ARQUIVAR, row)) result.push(this.BOTAO_ARQUIVAR);
        /**
          - botões-padrão:
            - 'Arquivar'. Condições para ser exibido: vide RN_PTR_N;
            - 'Consultar'. Condições para ser exibido: vide RN_PTR_S;
        */
        break;
      case 'SUSPENSO':
        /**
          - botões-padrão:
            - 'Consultar'. Condições para ser exibido: vide RN_PTR_S;
        */
        break;
      case 'ARQUIVADO':
        /**
          - botões-padrão:
            - 'Consultar'. Condições para ser exibido: vide RN_PTR_S;
        */
        break;
      case 'CANCELADO':
        if (this.botaoAtendeCondicoes(this.BOTAO_ARQUIVAR, row)) result.push(this.BOTAO_ARQUIVAR);
        /**
          - botões-padrão:
            - 'Arquivar'. Condições para ser exibido: vide RN_PTR_N;
            - 'Consultar'. Condições para ser exibido: vide RN_PTR_S;
        */
        break;
    }
    if (!result.length) result.push(this.BOTAO_INFORMACOES, this.BOTAO_RELATORIO);
    return result;
  }
  filterClear(filter) {
    filter.controls.usuario.setValue("");
    filter.controls.unidade_id.setValue(null);
    filter.controls.status.setValue(null);
    filter.controls.arquivados.setValue(false);
    filter.controls.tipo_modalidade_id.setValue(null);
    filter.controls.data_filtro.setValue(null);
    filter.controls.data_filtro_inicio.setValue(new Date());
    filter.controls.data_filtro_fim.setValue(new Date());
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
  botaoAtendeCondicoes(botao, planoTrabalho) {
    let assinaturasExigidas = planoTrabalho.assinaturasExigidas;
    let todasAssinaturasExigidas = [...assinaturasExigidas.gestores_entidade, ...assinaturasExigidas.gestores_unidade_executora, ...assinaturasExigidas.gestores_unidade_lotacao, ...assinaturasExigidas.participante];
    let assinaturasFaltantes = this.planoTrabalhoService.assinaturasFaltantes(planoTrabalho.assinaturasExigidas, planoTrabalho.jaAssinaramTCR);
    let haAssinaturasFaltantes = !!assinaturasFaltantes.participante.length || !!assinaturasFaltantes.gestores_unidade_executora.length || !!assinaturasFaltantes.gestores_unidade_lotacao.length || !!assinaturasFaltantes.gestores_entidade.length;
    let usuarioEhGestorUnidadeExecutora = this.auth.isGestorUnidade(planoTrabalho.unidade_id);
    let usuarioJaAssinouTCR = !!planoTrabalho.jaAssinaramTCR?.todas?.includes(this.auth.usuario?.id);
    let assinaturaUsuarioEhExigida = !!todasAssinaturasExigidas?.includes(this.auth.usuario?.id);
    let planoIncluido = this.planoTrabalhoService.situacaoPlano(planoTrabalho) == 'INCLUIDO';
    let usuarioEhParticipante = this.auth.usuario?.id == planoTrabalho.usuario_id;
    let planoAguardandoAssinatura = this.planoTrabalhoService.situacaoPlano(planoTrabalho) == 'AGUARDANDO_ASSINATURA';
    let planoAtivo = this.planoTrabalhoService.situacaoPlano(planoTrabalho) == 'ATIVO';
    let planoConcluido = this.planoTrabalhoService.situacaoPlano(planoTrabalho) == 'CONCLUIDO';
    let planoCancelado = this.planoTrabalhoService.situacaoPlano(planoTrabalho) == 'CANCELADO';
    let planoDeletado = this.planoTrabalhoService.situacaoPlano(planoTrabalho) == 'EXCLUIDO';
    let planoArquivado = this.planoTrabalhoService.situacaoPlano(planoTrabalho) == 'ARQUIVADO';
    let planoSuspenso = this.planoTrabalhoService.situacaoPlano(planoTrabalho) == 'SUSPENSO';
    let planoPossuiEntrega = planoTrabalho.entregas.length > 0;
    if (botao == this.BOTAO_INFORMACOES && this.auth.hasPermissionTo("MOD_PTR")) {
      /*
          (RN_PTR_S) CONSULTAR
          Todos os participantes podem visualizar todos os planos de trabalho, desde que possuam a capacidade "MOD_PTR";
      */
      return true;
    } else {
      if (planoDeletado) return false;else {
        switch (botao) {
          case this.BOTAO_ALTERAR:
            /*
              (RN_PTR_M) Condições para que um Plano de Trabalho possa ser alterado:
              O usuário logado precisa possuir a capacidade "MOD_PTR_EDT", o Plano de Trabalho precisa ser válido (ou seja, nem deletado, nem arquivado, nem estar no status CANCELADO), e:
                  - estando com o status 'INCLUIDO', o usuário logado precisa ser o participante do plano ou o gestor da Unidade Executora;
                  - estando com o status 'AGUARDANDO_ASSINATURA', o usuário logado precisa ser um dos que já assinaram o TCR e todas as assinaturas tornam-se sem efeito;
                  - estando com o status 'ATIVO', o usuário precisa ser gestor da Unidade Executora e possuir a capacidade MOD_PTR_EDT_ATV. Após alterado, o Plano de Trabalho precisa ser repactuado (novo TCR), e o plano retorna ao status 'AGUARDANDO_ASSINATURA';
            */
            let condition1 = this.auth.hasPermissionTo("MOD_PTR_EDT");
            let condition2 = this.planoTrabalhoService.isValido(planoTrabalho);
            let condition3 = planoIncluido && (usuarioEhParticipante || usuarioEhGestorUnidadeExecutora);
            let condition4 = planoAguardandoAssinatura && usuarioJaAssinouTCR;
            let condition5 = planoAtivo && usuarioEhGestorUnidadeExecutora && this.auth.hasPermissionTo("MOD_PTR_EDT_ATV");
            return condition1 && condition2 && (condition3 || condition4 || condition5);
          case this.BOTAO_ARQUIVAR:
            /*
              (RN_PTR_N) ARQUIVAR
              O plano precisa estar com o status CONCLUIDO ou CANCELADO, não ter sido arquivado, e:
                - o usuário logado precisa ser o participante ou o gestor da Unidade Executora;
            */
            return (planoConcluido || planoCancelado) && !planoArquivado && (usuarioEhParticipante || usuarioEhGestorUnidadeExecutora);
          case this.BOTAO_ASSINAR:
            /*
              (RN_PTR_O) ASSINAR
                - o plano precisa possuir ao menos uma entrega, e:
                - o plano precisa estar com o status INCLUIDO, e:
                  - o usuário logado precisa ser o participante do plano ou o gestor da sua Unidade Executora, e
                  - a assinatura do usuário logado precisa ser uma das exigidas pelo Programa de Gestão, e ele não ter ainda assinado;
                - ou o plano precisa estar com o status AGUARDANDO_ASSINATURA, e:
                  - a assinatura do usuário logado precisa ser uma das exigidas pelo Programa de Gestão, e ele não ter ainda assinado;
            */
            let condicao1 = usuarioEhParticipante || usuarioEhGestorUnidadeExecutora;
            let condicao2 = assinaturaUsuarioEhExigida && !usuarioJaAssinouTCR;
            return planoPossuiEntrega && (planoIncluido && condicao1 && condicao2 || planoAguardandoAssinatura && condicao2);
          case this.BOTAO_ATIVAR:
            /*
              (RN_PTR_P) ATIVAR
              O plano precisa estar no status 'INCLUIDO', e
                  - o usuário logado precisa ser o participante do plano ou gestor da Unidade Executora, e
                  - nenhuma assinatura no TCR deve ser exigida pelo programa, e
                  - o plano de trabalho precisa ter ao menos uma entrega;
            */
            return planoIncluido && (usuarioEhParticipante || usuarioEhGestorUnidadeExecutora) && !assinaturasExigidas?.todas?.length && planoPossuiEntrega;
          case this.BOTAO_CANCELAR_ASSINATURA:
            /*
              (RN_PTR_Q) CANCELAR ASSINATURA
              O plano precisa estar no status 'AGUARDANDO_ASSINATURA'; e
                - o usuário logado precisa já ter assinado o TCR;
            */
            return planoAguardandoAssinatura && usuarioJaAssinouTCR;
          case this.BOTAO_CANCELAR_PLANO:
            /*
              (RN_PTR_R) CANCELAR
              O usuário logado precisa possuir a capacidade "MOD_PTR_CNC", e
                - o plano não pode ter sido deletado e precisa estar em um dos seguintes status: INCLUIDO, AGUARDANDO_ASSINATURA, ATIVO ou CONCLUIDO; e
                - o usuário logado precisa ser gestor da Unidade Executora;
            */
            return this.auth.hasPermissionTo("MOD_PTR_CNC") && ['INCLUIDO', 'AGUARDANDO_ASSINATURA', 'ATIVO', 'CONCLUIDO'].includes(planoTrabalho.status);
          case this.BOTAO_DESARQUIVAR:
            /*
              (RN_PTR_T) DESARQUIVAR
              O plano precisa estar arquivado, e:
                  - o usuário logado precisa ser o participante ou gestor da Unidade Executora;
            */
            return planoArquivado && (usuarioEhParticipante || usuarioEhGestorUnidadeExecutora);
          case this.BOTAO_ENVIAR_ASSINATURA:
            /*
              (RN_PTR_U) ENVIAR PARA ASSINATURA
              O plano precisa estar com o status INCLUIDO; e
                - o usuário logado precisa ser o participante do plano ou gestor da sua Unidade Executora; e
                - se a assinatura do usuário logado for exigida, ele já deve ter assinado o TCR; e
                - devem existir assinaturas exigíveis ainda pendentes; e
                - o plano precisa possuir ao menos uma entrega;
            */
            return planoIncluido && (usuarioEhParticipante || usuarioEhGestorUnidadeExecutora) && (!assinaturaUsuarioEhExigida || usuarioJaAssinouTCR) && haAssinaturasFaltantes && planoPossuiEntrega;
          case this.BOTAO_REATIVAR:
            /*
              (RN_PTR_W) REATIVAR
              O plano precisa estar com o status SUSPENSO, e
                - o usuário logado precisa ser gestor da Unidade Executora;
            */
            return planoSuspenso && usuarioEhGestorUnidadeExecutora;
          case this.BOTAO_SUSPENDER:
            /*
              (RN_PTR_X) SUSPENDER
              O plano precisa estar com o status ATIVO, e
                - o usuário logado precisa ser gestor da Unidade Executora;
            */
            return planoAtivo && usuarioEhGestorUnidadeExecutora;
          case this.BOTAO_TERMOS:
            return this.auth.hasPermissionTo("MOD_PTR");
          case this.BOTAO_CONSOLIDACOES:
            return true;
        }
      }
    }
    return false;
  }
  arquivar(planoTrabalho) {
    this.go.navigate(this.routeStatus, {
      metadata: {
        tipo: "PlanoTrabalho",
        entity: Object.assign({}, planoTrabalho, {
          arquivar: true
        }),
        novoStatus: planoTrabalho.status,
        onClick: this.dao.arquivar.bind(this.dao)
      },
      title: "Arquivar Plano de Trabalho",
      modalClose: modalResult => {
        if (modalResult) {
          (this.grid?.query || this.query).refreshId(planoTrabalho.id);
        }
        ;
      }
    });
  }
  assinar(planoTrabalho) {
    const planosIds = planoTrabalho ? [planoTrabalho.id] : Object.keys(this.grid.multiselected || {});
    const documentos = this.grid.items.filter(x => planosIds.includes(x.id) && x.documento_id?.length).map(x => x.documento);
    if (!documentos.length) {
      this.dialog.alert("Selecione", "Nenhum plano selecionado!");
    } else {
      this.documentoService.sign(documentos).then(() => (this.grid?.query || this.query).refreshId(planoTrabalho.id));
    }
  }
  ativar(planoTrabalho) {
    this.go.navigate(this.routeStatus, {
      metadata: {
        tipo: "PlanoTrabalho",
        entity: planoTrabalho,
        novoStatus: "ATIVO",
        onClick: this.dao.ativar.bind(this.dao)
      },
      title: "Ativar Plano de Trabalho",
      modalClose: modalResult => {
        if (modalResult) {
          (this.grid?.query || this.query).refreshId(planoTrabalho.id);
        }
        ;
      }
    });
  }
  // COMPLEMENTAR A IMPLEMENTAÇÃO DO MÉTODO
  cancelarAssinatura(planoTrabalho) {
    this.go.navigate(this.routeStatus, {
      metadata: {
        tipo: "PlanoTrabalho",
        entity: planoTrabalho,
        novoStatus: "AGUARDANDO_ASSINATURA",
        onClick: this.dao.cancelarAssinatura.bind(this.dao)
      },
      title: "Cancelar Assinatura do TCR",
      modalClose: modalResult => {
        if (modalResult) {
          (this.grid?.query || this.query).refreshId(planoTrabalho.id);
        }
        ;
      }
    });
  }
  cancelarPlano(planoTrabalho) {
    this.go.navigate(this.routeStatus, {
      metadata: {
        tipo: "PlanoTrabalho",
        entity: Object.assign({}, planoTrabalho, {
          arquivar: true
        }),
        exigeJustificativa: true,
        novoStatus: "CANCELADO",
        onClick: this.dao.cancelarPlano.bind(this.dao)
      },
      title: "Cancelar Plano de Trabalho",
      modalClose: modalResult => {
        if (modalResult) {
          (this.grid?.query || this.query).refreshId(planoTrabalho.id);
        }
        ;
      }
    });
  }
  desarquivar(planoTrabalho) {
    this.go.navigate(this.routeStatus, {
      metadata: {
        tipo: "PlanoTrabalho",
        entity: Object.assign({}, planoTrabalho, {
          arquivar: false
        }),
        novoStatus: planoTrabalho.status,
        onClick: this.dao.arquivar.bind(this.dao)
      },
      title: "Desarquivar Plano de Trabalho",
      modalClose: modalResult => {
        if (modalResult) {
          (this.grid?.query || this.query).refreshId(planoTrabalho.id);
        }
        ;
      }
    });
  }
  report(planoTrabalho, codigo) {
    const consulta = {
      id: planoTrabalho.id,
      join: ["unidade.entidade", "unidade.gestor.usuario:id", "usuario", "programa.template_tcr", "tipo_modalidade", "entregas.plano_entrega_entrega.entrega", "entregas.plano_entrega_entrega.plano_entrega:id,unidade_id", "entregas.plano_entrega_entrega.plano_entrega.unidade", "entregas.entrega"]
    };
    this.grid?.buildRowReport(codigo, consulta);
  }
  enviarParaAssinatura(planoTrabalho) {
    this.go.navigate(this.routeStatus, {
      metadata: {
        tipo: "PlanoTrabalho",
        entity: planoTrabalho,
        novoStatus: "AGUARDANDO_ASSINATURA",
        onClick: this.dao.enviarParaAssinatura.bind(this.dao)
      },
      title: "Disponibilizar Plano de Trabalho para assinatura",
      modalClose: modalResult => {
        if (modalResult) {
          (this.grid?.query || this.query).refreshId(planoTrabalho.id);
        }
        ;
      }
    });
  }
  reativar(planoTrabalho) {
    this.go.navigate(this.routeStatus, {
      metadata: {
        tipo: "PlanoTrabalho",
        entity: planoTrabalho,
        novoStatus: "ATIVO",
        onClick: this.dao.reativar.bind(this.dao)
      },
      title: "Reativar Plano de Trabalho",
      modalClose: modalResult => {
        if (modalResult) {
          (this.grid?.query || this.query).refreshId(planoTrabalho.id);
        }
        ;
      }
    });
  }
  suspender(planoTrabalho) {
    this.go.navigate(this.routeStatus, {
      metadata: {
        tipo: "PlanoTrabalho",
        entity: planoTrabalho,
        novoStatus: "SUSPENSO",
        onClick: this.dao.suspender.bind(this.dao)
      },
      title: "Suspender Plano de Trabalho",
      modalClose: modalResult => {
        if (modalResult) {
          (this.grid?.query || this.query).refreshId(planoTrabalho.id);
        }
        ;
      }
    });
  }
  canAdd() {
    return this.auth.hasPermissionTo('MOD_PTR_INCL');
    //IMPLEMENTAR AS DEMAIS CONDIÇÕES NA VALIDAÇÃO DO FORM *******************
    /*
    (RN_PTR_V) INCLUIR/INSERIR
    O usuário logado precisa possuir a capacidade "MOD_PTR_INCL", e:
        - o usuário logado precisa ser um participante do PGD, habilitado, ou ser gestor da Unidade Executora do plano; (RN_PTR_B); e
        - o participante do plano precisa estar lotado em uma das áreas de trabalho do usuário logado, ou este deve possuir a capacidade MOD_PTR_USERS_INCL; e
        - o participante do plano precisa estar lotado na Unidade Executora, ou o usuário logado possuir a capacidade MOD_PTR_INCL_SEM_LOT; e
        - o novo Plano de Trabalho não pode apresentar período conflitante com outro plano já existente para a mesma Unidade Executora e mesmo participante, ou o usuário logado possuir a capacidade MOD_PTR_INTSC_DATA
    */
  }
  static #_ = this.ɵfac = function PlanoTrabalhoListComponent_Factory(t) {
    return new (t || PlanoTrabalhoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injector));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: PlanoTrabalhoListComponent,
    selectors: [["plano-trabalho-list"]],
    viewQuery: function PlanoTrabalhoListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
    decls: 69,
    vars: 70,
    consts: [["multiselect", "", 3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "relatorios", "hasAdd", "hasEdit", "dynamicMultiselectMenu", "multiselectAllFields", "select"], [4, "ngIf"], [3, "deleted", "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["controlName", "usuario", "placeholder", "Usu\u00E1rio", 3, "size", "label", "control"], ["controlName", "unidade_id", 3, "size", "control", "dao"], ["label", "Status", "controlName", "status", "itemTodos", "- Todos -", 3, "size", "items", "control", "valueTodos"], ["label", "Arq.", "controlName", "arquivados", "labelInfo", "Listar tamb\u00E9m os planos de trabalho arquivados", 3, "size", "control"], ["controlName", "tipo_modalidade_id", 3, "size", "control", "dao"], ["label", "Data", "itemTodos", "- Nenhum -", "controlName", "data_filtro", 3, "size", "valueTodos", "control", "items"], ["date", "", "label", "In\u00EDcio", "controlName", "data_filtro_inicio", "labelInfo", "Data in\u00EDcio do per\u00EDodo", 3, "size", "disabled", "control"], ["date", "", "label", "Fim", "controlName", "data_filtro_fim", "labelInfo", "Data fim do per\u00EDodo", 3, "size", "disabled", "control"], ["type", "expand", "icon", "bi bi-list-check", 3, "align", "hint", "template", "expandTemplate", 4, "ngIf"], [3, "titleTemplate", "template", "minWidth"], ["titleNumero", ""], ["columnNumero", ""], [3, "titleTemplate", "template"], ["titleUsuario", ""], ["columnUsuario", ""], ["title", "Unidade", 3, "template"], ["columnUnidade", ""], ["title", "Modalidade", 3, "template"], ["columnModalidade", ""], ["titleVigencia", ""], ["columnInicioVigencia", ""], [3, "title", "template"], ["documento", ""], ["title", "Status", 3, "template"], ["columnStatus", ""], ["type", "options", 3, "dynamicOptions", "dynamicButtons"], ["title", "Numero", 3, "template"], ["reportNumero", ""], ["title", "Matricula usu\u00E1rio", 3, "template"], ["reportMatricula", ""], ["title", "Programa", 3, "template"], ["reportPrograma", ""], ["reportUnidade", ""], ["reportModalidade", ""], ["title", "In\u00EDcio vig\u00EAncia", 3, "template"], ["reportInicioVigencia", ""], ["title", "Fim vig\u00EAncia", 3, "template"], ["reportFimVigencia", ""], ["title", "Termo de Ades\u00E3o", 3, "template"], ["reportTermoAdesao", ""], [3, "rows"], ["labelPosition", "left", "label", "Agrupar por Un.", "controlName", "agrupar", 3, "size", "control", "change"], ["type", "expand", "icon", "bi bi-list-check", 3, "align", "hint", "template", "expandTemplate"], ["columnEntregas", ""], ["columnExpandedEntregas", ""], ["class", "badge rounded-pill bg-light text-dark", 4, "ngIf"], [1, "badge", "rounded-pill", "bg-light", "text-dark"], [1, "bi", "bi-list-check"], [3, "entity"], ["by", "numero", 3, "header"], ["by", "usuario.nome", 3, "header"], ["color", "light", "icon", "bi bi-file-bar-graph", 3, "label"], ["by", "data_inicio", 3, "header"], ["by", "data_fim", 3, "header"], ["signatures", "", "noRounded", "", "withLink", "", 3, "documento", "maxWidth"], [3, "color", "icon", "label"], ["color", "warning", "icon", "bi bi-inboxes", "label", "Arquivado", 4, "ngIf"], ["color", "danger", "icon", "bi bi-trash3", "label", "Exclu\u00EDdo", 4, "ngIf"], ["color", "warning", "icon", "bi bi-inboxes", "label", "Arquivado"], ["color", "danger", "icon", "bi bi-trash3", "label", "Exclu\u00EDdo"]],
    template: function PlanoTrabalhoListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("select", function PlanoTrabalhoListComponent_Template_grid_select_0_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PlanoTrabalhoListComponent_toolbar_1_Template, 2, 2, "toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "filter", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "input-text", 4)(5, "input-search", 5)(6, "input-select", 6)(7, "input-switch", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "input-search", 8)(10, "input-select", 9)(11, "input-datetime", 10)(12, "input-datetime", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, PlanoTrabalhoListComponent_column_14_Template, 5, 4, "column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, PlanoTrabalhoListComponent_ng_template_16_Template, 2, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, PlanoTrabalhoListComponent_ng_template_18_Template, 2, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, PlanoTrabalhoListComponent_ng_template_21_Template, 4, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, PlanoTrabalhoListComponent_ng_template_23_Template, 4, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, PlanoTrabalhoListComponent_ng_template_26_Template, 2, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, PlanoTrabalhoListComponent_ng_template_29_Template, 2, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](32, PlanoTrabalhoListComponent_ng_template_32_Template, 7, 2, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](34, PlanoTrabalhoListComponent_ng_template_34_Template, 4, 2, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, PlanoTrabalhoListComponent_ng_template_37_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, PlanoTrabalhoListComponent_ng_template_40_Template, 4, 5, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](42, "column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "report")(44, "column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](45, PlanoTrabalhoListComponent_ng_template_45_Template, 1, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](48, PlanoTrabalhoListComponent_ng_template_48_Template, 1, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "column", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](51, PlanoTrabalhoListComponent_ng_template_51_Template, 1, 1, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](54, PlanoTrabalhoListComponent_ng_template_54_Template, 1, 1, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](57, PlanoTrabalhoListComponent_ng_template_57_Template, 1, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "column", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](60, PlanoTrabalhoListComponent_ng_template_60_Template, 1, 1, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "column", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](63, PlanoTrabalhoListComponent_ng_template_63_Template, 1, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "column", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](66, PlanoTrabalhoListComponent_ng_template_66_Template, 1, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](68, "pagination", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](17);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](19);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](22);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](24);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](27);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](30);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](33);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](35);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](38);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](41);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](46);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](49);
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](52);
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](55);
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](58);
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](61);
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](64);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("relatorios", ctx.relatorios)("hasAdd", ctx.canAdd())("hasEdit", false)("dynamicMultiselectMenu", ctx.dynamicMultiselectMenu.bind(ctx))("multiselectAllFields", ctx.multiselectAllFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.selectable);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("deleted", ctx.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 4)("label", ctx.lex.translate("Usu\u00E1rio"))("control", ctx.filter.controls.usuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("maxlength", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 4)("control", ctx.filter.controls.unidade_id)("dao", ctx.unidadeDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 3)("items", ctx.lookup.PLANO_TRABALHO_STATUS)("control", ctx.filter.controls.status)("valueTodos", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 1)("control", ctx.filter.controls.arquivados);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 6)("control", ctx.filter.controls.tipo_modalidade_id)("dao", ctx.tipoModalidadeDao);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 2)("valueTodos", null)("control", ctx.filter.controls.data_filtro)("items", ctx.DATAS_FILTRO);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 2)("disabled", ctx.filter.controls.data_filtro.value == null ? "true" : undefined)("control", ctx.filter.controls.data_filtro_inicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("size", 2)("disabled", ctx.filter.controls.data_filtro.value == null ? "true" : undefined)("control", ctx.filter.controls.data_filtro_fim);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.selectable);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("titleTemplate", _r2)("template", _r4)("minWidth", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("titleTemplate", _r6)("template", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("titleTemplate", _r14)("template", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", "Termo\nAssinaturas")("template", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dynamicOptions", ctx.dynamicOptions.bind(ctx))("dynamicButtons", ctx.dynamicButtons.bind(ctx));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("template", _r36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rows", ctx.rowsLimit);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=9997.js.map