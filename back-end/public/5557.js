"use strict";
(self["webpackChunkpetrvs"] = self["webpackChunkpetrvs"] || []).push([[5557],{

/***/ 88543:
/*!**************************************************!*\
  !*** ./src/app/models/atividade-tarefa.model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtividadeTarefa: () => (/* binding */ AtividadeTarefa)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ 64368);

class AtividadeTarefa extends _base_model__WEBPACK_IMPORTED_MODULE_0__.Base {
  constructor(data) {
    super();
    this.documento = null; /* Documento de entrga */
    this.comentarios = []; /* Comentarios da tarefa */
    this.descricao = null; /* Descrição da tarefa */
    this.data_lancamento = new Date(); /* Data hora do lançamento da tarefa */
    this.tempo_estimado = 0; /* Tempo estimado para a execução da tarefa (Horas decimais) */
    this.data_conclusao = null; /* Data de conclusao */
    this.documento_id = null; /* Documento de entrga */
    this.atividade_id = ""; /* Atividade */
    this.usuario_id = ""; /* Usuário */
    this.tipo_tarefa_id = null; /* Tarefa */
    this.initialization(data);
  }
}

/***/ }),

/***/ 94180:
/*!*****************************************************************!*\
  !*** ./src/app/modules/gestao/atividade/atividade-list-base.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtividadeListBase: () => (/* binding */ AtividadeListBase)
/* harmony export */ });
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ 78509);
/* harmony import */ var src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/usuario-dao.service */ 35255);
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ 81214);
/* harmony import */ var src_app_models_atividade_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/atividade.model */ 73101);
/* harmony import */ var src_app_listeners_listener_all_pages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/listeners/listener-all-pages.service */ 79084);
/* harmony import */ var src_app_services_calendar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/calendar.service */ 6551);
/* harmony import */ var src_app_dao_atividade_dao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dao/atividade-dao.service */ 84971);
/* harmony import */ var src_app_dao_tipo_processo_dao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dao/tipo-processo-dao.service */ 70361);
/* harmony import */ var src_app_services_comentario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/comentario.service */ 2124);
/* harmony import */ var src_app_dao_tipo_atividade_dao_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dao/tipo-atividade-dao.service */ 22981);
/* harmony import */ var _atividade_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./atividade.service */ 57338);
/* harmony import */ var src_app_dao_plano_trabalho_dao_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dao/plano-trabalho-dao.service */ 87744);












class AtividadeListBase extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_0__.PageListBase {
  constructor(injector) {
    super(injector, src_app_models_atividade_model__WEBPACK_IMPORTED_MODULE_3__.Atividade, src_app_dao_atividade_dao_service__WEBPACK_IMPORTED_MODULE_6__.AtividadeDaoService);
    this.injector = injector;
    this.etiquetas = [];
    this.addComentarioButton = {
      icon: "bi bi-plus-circle",
      hint: "Incluir comentário"
    };
    this.DATAS_FILTRO = [{
      key: "DISTRIBUICAO",
      value: "Distribuição",
      icon: "bi bi-file-earmark-plus",
      color: "badge rounded-pill bg-warning text-dark"
    }, {
      key: "PRAZO",
      value: "Prazo",
      icon: "bi bi-calendar-check",
      color: "badge rounded-pill bg-info text-dark"
    }, {
      key: "CONCLUSAO",
      value: "Conclusão",
      icon: "bi bi-check-circle",
      color: "badge rounded-pill bg-info text-dark"
    }];
    this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_2__.UnidadeDaoService);
    this.usuarioDao = injector.get(src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioDaoService);
    this.planoTrabalhoDao = injector.get(src_app_dao_plano_trabalho_dao_service__WEBPACK_IMPORTED_MODULE_11__.PlanoTrabalhoDaoService);
    this.tipoAtividadeDao = injector.get(src_app_dao_tipo_atividade_dao_service__WEBPACK_IMPORTED_MODULE_9__.TipoAtividadeDaoService);
    this.tipoProcessoDao = injector.get(src_app_dao_tipo_processo_dao_service__WEBPACK_IMPORTED_MODULE_7__.TipoProcessoDaoService);
    this.allPages = injector.get(src_app_listeners_listener_all_pages_service__WEBPACK_IMPORTED_MODULE_4__.ListenerAllPagesService);
    this.atividadeService = injector.get(_atividade_service__WEBPACK_IMPORTED_MODULE_10__.AtividadeService);
    this.calendar = injector.get(src_app_services_calendar_service__WEBPACK_IMPORTED_MODULE_5__.CalendarService);
    this.comentario = injector.get(src_app_services_comentario_service__WEBPACK_IMPORTED_MODULE_8__.ComentarioService);
    this.join = ["tipo_atividade", "plano_trabalho_entrega.plano_entrega_entrega:id,descricao", "demandante", "pausas", "usuario", "unidade", "comentarios.usuario:id,nome,apelido", "tarefas.tipo_tarefa", "tarefas.comentarios.usuario:id,nome,apelido", "reacoes.usuario:id,nome,apelido"];
    /* Inicializações */
    this.extra = {
      planos_trabalho: {},
      afastamentos: {}
    };
    this.optionsMetadata = {
      refreshId: (id => (this.grid?.query || this.query).refreshId(id)).bind(this),
      removeId: (id => (this.grid?.query || this.query).removeId(id)).bind(this),
      refresh: this.refresh.bind(this)
    };
  }
  onGridLoad(rows) {
    /* Ordena os comentários */
    rows?.forEach(atividade => {
      atividade.comentarios = this.comentario.orderComentarios(atividade.comentarios);
    });
    /* Recebe informações extra da query para auxiliar em cálculos e melhorar performace da consulta */
    const extra = (this.grid?.query || this.query).extra;
    if (extra) {
      //this.extra.avaliadores = Object.assign(this.extra.avaliadores, extra.avaliadores || {});
      this.extra.planos_trabalho = Object.assign(this.extra.planos_trabalho, extra.planos || {});
      for (let [key, value] of Object.entries(extra.afastamentos || {})) {
        this.extra.afastamentos[key] = value.reduce((a, v) => {
          if (!a.find(x => x.id == v.id)) a.push(v);
          return a;
        }, this.extra.afastamentos[key] || []);
      }
      Object.entries(extra.feriados || {}).forEach(([key, value]) => {
        if (!this.calendar.feriadosCadastrados[key]) this.calendar.feriadosCadastrados[key] = value;
      });
      rows?.forEach(a => {
        a.planoTrabalho = extra.planos_trabalho[a.plano_trabalho_id];
      });
      this.cdRef.detectChanges();
    }
  }
  onAtribuidasParaMimChange(event) {
    if (this.filter.controls.atribuidas_para_mim.value) {
      this.filter.controls.usuario_id.setValue(this.auth.usuario.id);
    } else {
      this.filter.controls.usuario_id.setValue(undefined);
    }
  }
  onSomenteUnidadeAtualChange(event) {
    if (this.filter.controls.somente_unidade_atual.value) {
      this.filter.controls.unidade_id.setValue(this.auth.unidade.id);
    } else {
      this.filter.controls.unidade_id.setValue(undefined);
    }
  }
  onDespendidoClick(row) {
    if (row.metadados && !row.metadados.concluido) {
      const cargaHoraria = this.extra?.planos_trabalho[row.plano_trabalho_id]?.carga_horaria || 0;
      const afastamentos = this.extra?.afastamentos[row.usuario_id] || [];
      this.efemerides = this.calendar.calculaDataTempoUnidade(row.data_inicio, this.auth.hora, cargaHoraria, row.unidade, "ENTREGA", row.pausas, afastamentos);
      this.dialog.template({
        title: "Cálculos do tempo despendido"
      }, this.calendarEfemerides, []);
    }
  }
  onEtiquetaConfigClick() {
    this.go.navigate({
      route: ["configuracoes", "preferencia", "usuario", this.auth.usuario.id],
      params: {
        etiquetas: true
      }
    }, {
      modal: true,
      modalClose: modalResult => {
        this.etiquetas = this.util.merge(this.etiquetas, this.auth.usuario.config?.etiquetas, (a, b) => a.key == b.key);
        this.cdRef.detectChanges();
      }
    });
  }
  comentarioClick(element) {
    const value = element.getAttribute("data-expanded");
    element.setAttribute("data-expanded", value == "true" ? "false" : "true");
  }
  addComentarioClick(row) {
    this.go.navigate({
      route: ['gestao', 'atividade', row.id, 'comentar']
    }, {
      modal: true,
      modalClose: modalResult => {
        if (modalResult) (this.grid?.query || this.query).refreshId(row.id);
      }
    });
  }
}

/***/ }),

/***/ 48644:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/gestao/atividade/atividade-list-grid/atividade-list-grid.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtividadeListGridComponent: () => (/* binding */ AtividadeListGridComponent)
/* harmony export */ });
/* harmony import */ var _usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/grid/grid.component */ 73150);
/* harmony import */ var _atividade_list_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atividade-list-base */ 94180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51197);

var _class;



const _c0 = ["calendarEfemerides"];
const _c1 = ["unidade"];
const _c2 = ["usuario"];
const _c3 = ["tipoAtividade"];
const _c4 = ["etiqueta"];
const _c5 = ["planoEntrega"];
const _c6 = ["planoEntregaEntrega"];
function AtividadeListGridComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "calendar-efemerides", 53);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("efemerides", ctx_r1.efemerides);
  }
}
function AtividadeListGridComponent_ng_template_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r44.label, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r44.value);
  }
}
function AtividadeListGridComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AtividadeListGridComponent_ng_template_3_ng_container_1_Template, 5, 2, "ng-container", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r42 = ctx.group;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", group_r42);
  }
}
function AtividadeListGridComponent_toolbar_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "toolbar")(1, "input-switch", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AtividadeListGridComponent_toolbar_5_Template_input_switch_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r45.onAgruparChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input-switch", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AtividadeListGridComponent_toolbar_5_Template_input_switch_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r47.onAgruparChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 3)("control", ctx_r4.filter.controls.agrupar_entrega);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 3)("control", ctx_r4.filter.controls.agrupar);
  }
}
function AtividadeListGridComponent_column_35_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r52.tarefas == null ? null : row_r52.tarefas.length, "");
  }
}
function AtividadeListGridComponent_column_35_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AtividadeListGridComponent_column_35_ng_template_1_span_0_Template, 3, 1, "span", 62);
  }
  if (rf & 2) {
    const row_r52 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r52.tarefas == null ? null : row_r52.tarefas.length);
  }
}
function AtividadeListGridComponent_column_35_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "atividade-list-tarefa", 65);
  }
  if (rf & 2) {
    const row_r55 = ctx.row;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selectable", ctx_r51.selectable)("editable", !row_r55.metadados.concluido)("atividade", row_r55);
  }
}
function AtividadeListGridComponent_column_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "column", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AtividadeListGridComponent_column_35_ng_template_1_Template, 1, 1, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AtividadeListGridComponent_column_35_ng_template_3_Template, 1, 3, "ng-template", null, 61, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("align", "center")("hint", "Tarefas da " + ctx_r10.lex.translate("atividade"))("template", _r48)("expandTemplate", _r50);
  }
}
function AtividadeListGridComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "order", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "#ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "order", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Descri\u00E7\u00E3o ");
  }
  if (rf & 2) {
    const header_r56 = ctx.header;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("header", header_r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("/Tipo de ", ctx_r12.lex.translate("Atividade"), "/ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("header", header_r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r12.lex.translate("Entrega"));
  }
}
function AtividadeListGridComponent_ng_template_39_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "badge", 74);
  }
  if (rf & 2) {
    const row_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().row;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r58.entityService.getIcon("TipoAtividade"))("label", row_r57.tipo_atividade.nome);
  }
}
function AtividadeListGridComponent_ng_template_39_badge_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "badge", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AtividadeListGridComponent_ng_template_39_badge_3_Template_badge_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r63);
      const row_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().row;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r61.onEntregaClick(row_r57));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().row;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r59.entityService.getIcon("Entrega"))("label", row_r57.plano_trabalho_entrega.descricao);
  }
}
function AtividadeListGridComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "badge", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AtividadeListGridComponent_ng_template_39_badge_2_Template, 1, 2, "badge", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AtividadeListGridComponent_ng_template_39_badge_3_Template, 1, 2, "badge", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "reaction", 73);
  }
  if (rf & 2) {
    const row_r57 = ctx.row;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", row_r57.numero)("data", row_r57.numero)("click", ctx_r14.atividadeService.onIdClick.bind(ctx_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r57.tipo_atividade);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r57.plano_trabalho_entrega);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r57.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("entity", row_r57);
  }
}
function AtividadeListGridComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input-textarea", 76)(1, "input-search", 77, 78);
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 12)("rows", 2)("control", ctx_r16.formEdit.controls.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Tipo de " + ctx_r16.lex.translate("atividade"))("size", 12)("emptyValue", null)("control", ctx_r16.formEdit.controls.tipo_atividade_id)("dao", ctx_r16.tipoAtividadeDao)("labelInfo", "Tipo de " + ctx_r16.lex.translate("atividade") + " utilizado para classificar a " + ctx_r16.lex.translate("atividade"))("required", !ctx_r16.auth.hasPermissionTo("MOD_ATV_TIPO_ATV_VAZIO") ? "true" : undefined);
  }
}
function AtividadeListGridComponent_ng_template_44_badge_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "badge", 80);
  }
  if (rf & 2) {
    const etiqueta_r69 = ctx.$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lookup", etiqueta_r69)("click", ctx_r68.onEtiquetaClick.bind(ctx_r68));
  }
}
function AtividadeListGridComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AtividadeListGridComponent_ng_template_44_badge_0_Template, 1, 2, "badge", 79);
  }
  if (rf & 2) {
    const row_r67 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r67.etiquetas);
  }
}
function AtividadeListGridComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input-multiselect", 81)(1, "input-select", 82, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("details", function AtividadeListGridComponent_ng_template_46_Template_input_select_details_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r73);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r72.onEtiquetaConfigClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 12)("control", ctx_r20.formEdit.controls.etiquetas)("addItemHandle", ctx_r20.addItemHandleEtiquetas.bind(ctx_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 12)("control", ctx_r20.formEdit.controls.etiqueta)("items", ctx_r20.etiquetas);
  }
}
function AtividadeListGridComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Plano de trabalho ");
  }
}
function AtividadeListGridComponent_ng_template_51_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().row;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r76.dao.getDateFormatted(row_r75.planoTrabalho.data_inicio), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](" at\u00E9 " + ctx_r76.dao.getDateFormatted(row_r75.planoTrabalho.data_fim));
  }
}
function AtividadeListGridComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AtividadeListGridComponent_ng_template_51_span_0_Template, 4, 2, "span", 84);
  }
  if (rf & 2) {
    const row_r75 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r75.planoTrabalho);
  }
}
function AtividadeListGridComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Un./");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "order", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "order", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Demandante");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r78 = ctx.header;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("header", header_r78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r26.lex.translate("Respons\u00E1vel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("header", header_r78);
  }
}
function AtividadeListGridComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "badge", 89)(2, "badge", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "badge", 91);
  }
  if (rf & 2) {
    const row_r79 = ctx.row;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", row_r79.unidade.sigla);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "bi " + ((row_r79.usuario == null ? null : row_r79.usuario.nome == null ? null : row_r79.usuario.nome.length) ? "bi-person-check" : "bi-person-x"))("label", ctx_r28.util.apelidoOuNome(row_r79.usuario, true) || "(N\u00E3o atribu\u00EDdo)")("hint", "Respons\u00E1vel: " + ((row_r79.usuario == null ? null : row_r79.usuario.nome) || "N\u00E3o atribuido a nenhum usu\u00E1rio"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", ctx_r28.util.apelidoOuNome(row_r79.demandante, true) || "Desconhecido")("hint", "Demandante: " + ((row_r79.demandante == null ? null : row_r79.demandante.nome) || "Desconhecido"));
  }
}
function AtividadeListGridComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Tempos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "order", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Distribui\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "order", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Prazo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "order", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Entrega");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r80 = ctx.header;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("header", header_r80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("header", header_r80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("header", header_r80);
  }
}
function AtividadeListGridComponent_ng_template_61_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "badge", 97);
  }
  if (rf & 2) {
    const tempo_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("badge", tempo_r83);
  }
}
function AtividadeListGridComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AtividadeListGridComponent_ng_template_61_badge_1_Template, 1, 1, "badge", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r81 = ctx.row;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r32.atividadeService.temposAtividade(row_r81, ctx_r32.extra, ctx_r32.onDespendidoClick.bind(ctx_r32)));
  }
}
function AtividadeListGridComponent_ng_template_64_separator_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "separator", 100);
  }
}
function AtividadeListGridComponent_ng_template_64_table_2_tr_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 103);
  }
}
function AtividadeListGridComponent_ng_template_64_table_2_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AtividadeListGridComponent_ng_template_64_table_2_tr_1_i_2_Template, 1, 0, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const check_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", check_r88.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](check_r88.texto);
  }
}
function AtividadeListGridComponent_ng_template_64_table_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AtividadeListGridComponent_ng_template_64_table_2_tr_1_Template, 5, 2, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r84.checklist);
  }
}
function AtividadeListGridComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "progress-bar", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AtividadeListGridComponent_ng_template_64_separator_1_Template, 1, 0, "separator", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AtividadeListGridComponent_ng_template_64_table_2_Template, 2, 1, "table", 3);
  }
  if (rf & 2) {
    const row_r84 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", row_r84.progresso);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r84.checklist == null ? null : row_r84.checklist.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r84.checklist == null ? null : row_r84.checklist.length);
  }
}
function AtividadeListGridComponent_ng_template_66_separator_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "separator", 100);
  }
}
function AtividadeListGridComponent_ng_template_66_table_2_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input-switch", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const check_r95 = ctx.$implicit;
    const i_r96 = ctx.index;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 12)("source", ctx_r94.checklist)("path", i_r96 + ".checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](check_r95.texto);
  }
}
function AtividadeListGridComponent_ng_template_66_table_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AtividadeListGridComponent_ng_template_66_table_2_tr_1_Template, 5, 4, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r93.checklist);
  }
}
function AtividadeListGridComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input-number", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AtividadeListGridComponent_ng_template_66_separator_1_Template, 1, 0, "separator", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AtividadeListGridComponent_ng_template_66_table_2_Template, 2, 1, "table", 3);
  }
  if (rf & 2) {
    const row_r91 = ctx.row;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 12)("decimals", 2)("control", ctx_r36.formEdit.controls.progresso);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r91.checklist == null ? null : row_r91.checklist.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r91.checklist == null ? null : row_r91.checklist.length);
  }
}
function AtividadeListGridComponent_ng_template_69_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "badge", 109);
  }
  if (rf & 2) {
    const status_r99 = ctx.$implicit;
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", status_r99)("color", status_r99.color)("icon", status_r99.icon)("label", status_r99.label)("click", (status_r99.data == null ? null : status_r99.data.filter) ? ctx_r98.onStatusClick.bind(ctx_r98) : undefined);
  }
}
function AtividadeListGridComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "documentos-badge", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AtividadeListGridComponent_ng_template_69_badge_2_Template, 1, 5, "badge", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "comentarios-widget", 108);
  }
  if (rf & 2) {
    const row_r97 = ctx.row;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("documento", row_r97.documento_requisicao);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r38.atividadeService.getStatus(row_r97));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("entity", row_r97)("selectable", ctx_r38.selectable)("grid", ctx_r38.grid);
  }
}
function AtividadeListGridComponent_column_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "column", 110);
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("metadata", ctx_r39.optionsMetadata)("dynamicOptions", ctx_r39.atividadeService.dynamicOptions.bind(ctx_r39))("dynamicButtons", ctx_r39.atividadeService.dynamicButtons.bind(ctx_r39))("options", ctx_r39.options);
  }
}
class AtividadeListGridComponent extends _atividade_list_base__WEBPACK_IMPORTED_MODULE_2__.AtividadeListBase {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.minhas = false;
    this.planosEntregas = [];
    this.planosEntregasEntregas = [];
    this.storeFilter = filter => {
      const form = filter?.value;
      return {
        atribuidas_para_mim: form.atribuidas_para_mim,
        usuario_id: form.usuario_id,
        plano_trabalho_id: form.plano_trabalho_id,
        somente_unidade_atual: form.somente_unidade_atual,
        unidades_subordinadas: form.unidades_subordinadas,
        unidade_id: form.somente_unidade_atual ? null : form.unidade_id
      };
    };
    this.filterWhere = filter => {
      let result = this.fixedFilter || [];
      let form = filter.value;
      /* Verifica se estiver marcado Atual e a Unidade for diferente da Lotacao da barra superior */
      if (form.somente_unidade_atual && form.unidade_id != this.auth.unidade?.id) {
        filter.controls.unidade_id.setValue(this.auth.unidade?.id);
        form.unidade_id = this.auth.unidade?.id;
      }
      /* Verifica se Minhas está selecionado e o usuário está diferente do logado (vazio) */
      if (form.atribuidas_para_mim && form.usuario_id != this.auth.usuario?.id) {
        filter.controls.usuario_id.setValue(this.auth.usuario?.id);
        form.usuario_id = this.auth.usuario?.id;
      }
      /* Filtros */
      if (form.usuario_id?.length) {
        result.push(["usuario_id", "==", form.usuario_id]);
      }
      if (form.plano_trabalho_id?.length) {
        result.push(["plano_trabalho_id", "==", form.plano_trabalho_id]);
      }
      if (form.unidade_id?.length) {
        result.push(["unidade_id", "==", form.unidade_id]);
      }
      if (form.unidades_subordinadas) {
        result.push(["unidades_subordinadas", "==", true]);
      }
      if (form.etiquetas?.length) {
        result.push(["etiquetas", "in", form.etiquetas.map(x => x.value)]);
      }
      if (form.numero_processo?.length) {
        result.push(["numero_processo", "==", form.numero_processo]);
      }
      if (form.numero?.length) {
        result.push(["numero", "==", form.numero]);
      }
      if (form.status?.length && !result.find(x => x[0] == "status")) {
        result.push(["status", "==", form.status]);
        if (form.status == "ARQUIVADO") this.filter.controls.arquivadas.setValue(true);
      }
      if (!this.filter.controls.arquivadas.value) {
        result.push(["data_arquivamento", "==", null]);
      }
      if (form.tipo_atividade_id?.length) {
        result.push(["tipo_atividade_id", "==", form.tipo_atividade_id]);
      }
      if (form.tipo_processo_id?.length) {
        result.push(["tipo_processo_id", "==", form.tipo_processo_id]);
      }
      if (form.plano_entrega_id?.length) {
        result.push(["plano_entrega_id", "==", form.plano_entrega_id]);
      }
      if (form.plano_entrega_entrega_id?.length) {
        result.push(["plano_entrega_entrega_id", "==", form.plano_entrega_entrega_id]);
      }
      if (form.data_filtro?.length) {
        const field = form.data_filtro == "DISTRIBUICAO" ? "data_distribuicao" : form.data_filtro == "PRAZO" ? "data_estipulada_entrega" : "data_entrega";
        if (form.data_inicio) {
          result.push([field, ">=", form.data_inicio]);
        }
        if (form.data_fim) {
          result.push([field, "<=", form.data_fim]);
        }
      }
      return result;
    };
    /* Inicializações */
    this.title = this.lex.translate("Atividades");
    this.code = "MOD_DMD";
    this.modalWidth = 1100;
    this.filter = this.fh.FormBuilder({
      agrupar: {
        default: true
      },
      agrupar_entrega: {
        default: true
      },
      atribuidas_para_mim: {
        default: false
      },
      usuario_id: {
        default: null
      },
      numero: {
        default: ""
      },
      somente_unidade_atual: {
        default: false
      },
      unidades_subordinadas: {
        default: false
      },
      plano_trabalho_id: {
        default: null
      },
      unidade_id: {
        default: null
      },
      numero_processo: {
        default: ""
      },
      status: {
        default: null
      },
      etiquetas: {
        default: []
      },
      arquivadas: {
        default: false
      },
      tipo_atividade_id: {
        default: null
      },
      tipo_processo_id: {
        default: null
      },
      data_filtro: {
        default: null
      },
      data_inicio: {
        default: null
      },
      data_fim: {
        default: null
      },
      plano_entrega_id: {
        default: null
      },
      plano_entrega_entrega_id: {
        default: null
      }
    });
    this.formEdit = this.fh.FormBuilder({
      descricao: {
        default: ""
      },
      tipo_atividade_id: {
        default: null
      },
      comentarios: {
        default: []
      },
      progresso: {
        default: 0
      },
      etiquetas: {
        default: []
      },
      etiqueta: {
        default: null
      }
    });
    this.groupBy = [{
      field: "unidade.sigla",
      label: "Unidade"
    }, {
      field: "plano_trabalho_entrega.plano_entrega_entrega.descricao",
      label: "Entrega"
    }, {
      field: "plano_trabalho_entrega.descricao",
      label: "Descrição dos trabalhos"
    }];
    this.addOption(this.OPTION_LOGS, "MOD_AUDIT_LOG");
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.metadata?.atribuidas_para_mim) {
      this.filter?.controls.atribuidas_para_mim.setValue(true);
      this.filter?.controls.usuario_id.setValue(this.auth.usuario?.id);
    }
    if (this.fixedFilter) {
      const status = this.fixedFilter.find(x => x[0] == "status");
      if (status) this.filter?.controls.status.setValue(status[2]);
    }
  }
  onAgruparChange(event) {
    const agrupar = this.filter.controls.agrupar.value;
    const agrupar_entrega = this.filter.controls.agrupar_entrega.value;
    const groupByOptions = [];
    if (agrupar) groupByOptions.push({
      field: "unidade.sigla",
      label: "Unidade"
    });
    if (agrupar_entrega) groupByOptions.push({
      field: "plano_trabalho_entrega.plano_entrega_entrega.descricao",
      label: "Entrega"
    });
    this.groupBy = groupByOptions;
    this.grid.reloadFilter();
  }
  onStatusClick(status) {
    this.filter?.controls.status.setValue(status.data?.status);
    this.grid.showFilter();
    this.grid.reloadFilter();
  }
  onEtiquetaClick(etiqueta) {
    let etiquetas = this.filter.controls.etiquetas.value;
    etiquetas.push(etiqueta);
    this.filter?.controls.etiquetas.setValue(etiquetas);
    this.grid.showFilter();
    this.grid.reloadFilter();
  }
  onEntregaClick(atividade) {
    this.go.navigate({
      route: ['gestao', 'atividade', atividade.id, 'hierarquia']
    }, {
      metadata: {
        atividade: atividade
      }
    });
  }
  onColumnProgressoEtiquetasChecklistEdit(row) {
    var _this = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.formEdit.controls.progresso.setValue(row.progresso);
      //this.formEdit.controls.etiquetas.setValue(row.etiquetas);
      //this.formEdit.controls.etiqueta.setValue(null);
      //this.etiquetas = this.util.merge(row.tipo_atividade?.etiquetas, row.unidade?.etiquetas, (a, b) => a.key == b.key);
      //this.etiquetas = this.util.merge(this.etiquetas, this.auth.usuario!.config?.etiquetas, (a, b) => a.key == b.key);
      _this.checklist = _this.util.clone(row.checklist);
    })();
  }
  onColumnProgressoEtiquetasChecklistSave(row) {
    var _this2 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const saved = yield _this2.dao.update(row.id, {
          progresso: _this2.formEdit.controls.progresso.value,
          //etiquetas: this.formEdit.controls.etiquetas.value,
          checklist: _this2.checklist
        });
        row.progresso = _this2.formEdit.controls.progresso.value;
        row.checklist = _this2.checklist;
        //row.etiquetas = this.formEdit.controls.etiquetas.value;
        return !!saved;
      } catch (error) {
        return false;
      }
    })();
  }
  filterClear(filter) {
    this.filter.controls.atribuidas_para_mim.setValue(false);
    this.filter.controls.usuario_id.setValue(null);
    this.filter.controls.somente_unidade_atual.setValue(false);
    this.filter.controls.unidades_subordinadas.setValue(false);
    this.filter.controls.unidade_id.setValue(null);
    this.filter.controls.plano_trabalho_id.setValue(null);
    this.filter.controls.numero_processo.setValue("");
    this.filter.controls.atividade_id.setValue(null);
    this.filter.controls.tipo_processo_id.setValue(null);
    this.filter.controls.data_filtro.setValue(null);
    this.filter.controls.data_inicio.setValue(null);
    this.filter.controls.data_fim.setValue(null);
    this.filter.controls.plano_entrega_id.setValue(null);
    this.filter.controls.plano_entrega_entrega_id.setValue(null);
    if (!this.fixedFilter?.length || !this.fixedFilter.find(x => x[0] == "status")) this.filter.controls.status.setValue(null);
    this.filter.controls.etiquetas.setValue([]);
    super.filterClear(filter);
  }
  addItemHandleEtiquetas() {
    let result = undefined;
    if (this.etiqueta && this.etiqueta.selectedItem) {
      const item = this.etiqueta.selectedItem;
      const key = item.key?.length ? item.key : this.util.textHash(item.value);
      if (this.util.validateLookupItem(this.formEdit.controls.etiqueta.value, key)) {
        result = {
          key: key,
          value: item.value,
          color: item.color,
          icon: item.icon
        };
        this.formEdit.controls.etiqueta.setValue(null);
      }
    }
    return result;
  }
  onColumnEtiquetasEdit(row) {
    var _this3 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.formEdit.controls.etiquetas.setValue(row.etiquetas);
      _this3.formEdit.controls.etiqueta.setValue(null);
      _this3.etiquetas = _this3.util.merge(row.tipo_atividade?.etiquetas, row.unidade?.etiquetas, (a, b) => a.key == b.key);
      _this3.etiquetas = _this3.util.merge(_this3.etiquetas, _this3.auth.usuario.config?.etiquetas, (a, b) => a.key == b.key);
      _this3.etiquetas = _this3.util.merge(_this3.etiquetas, yield _this3.carregaEtiquetasUnidadesAscendentes(row.unidade), (a, b) => a.key == b.key);
    })();
  }
  carregaEtiquetasUnidadesAscendentes(unidadeAtual) {
    var _this4 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let etiquetasUnidades = [];
      let path = unidadeAtual.path.split("/");
      let unidades = yield _this4.unidadeDao.query({
        where: ["id", "in", path]
      }).asPromise();
      unidades.forEach(un => {
        etiquetasUnidades = _this4.util.merge(etiquetasUnidades, un.etiquetas, (a, b) => a.key == b.key);
      });
      return etiquetasUnidades;
    })();
  }
  onColumnEtiquetasSave(row) {
    var _this5 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const saved = yield _this5.dao.update(row.id, {
          etiquetas: _this5.formEdit.controls.etiquetas.value
        });
        row.etiquetas = _this5.formEdit.controls.etiquetas.value;
        return !!saved;
      } catch (error) {
        return false;
      }
    })();
  }
  onEtiquetaConfigClick() {
    this.go.navigate({
      route: ["configuracoes", "preferencia", "usuario", this.auth.usuario.id],
      params: {
        etiquetas: true
      }
    }, {
      modal: true,
      modalClose: modalResult => {
        this.etiquetas = this.util.merge(this.etiquetas, this.auth.usuario.config?.etiquetas, (a, b) => a.key == b.key);
        this.cdRef.detectChanges();
      }
    });
  }
  onUnidadeChange(event) {
    var _this6 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let unidade_selecionada = yield _this6.unidadeDao.getById(_this6.filter?.controls.unidade_id.value, ['planos_entrega']);
      _this6.planosEntregas = unidade_selecionada?.planos_entrega?.map(x => Object.assign({
        key: x.id,
        value: x.nome
      })) || [];
    })();
  }
  onPlanoEntregaChange(event) {
    var _this7 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let plano_entrega_selecionado = [];
      let unidade_selecionada = yield _this7.unidadeDao.getById(_this7.filter?.controls.unidade_id.value, ['planos_entrega.entregas']);
      unidade_selecionada?.planos_entrega?.forEach(element => {
        if (element.id == _this7.filter.controls.plano_entrega_id.value) plano_entrega_selecionado.push(element.entregas);
      });
      _this7.planosEntregasEntregas = plano_entrega_selecionado[0].map(x => Object.assign({
        key: x.id,
        value: x.descricao
      })) || [];
    })();
  }
  onColumnAtividadeDescricaoEdit(row) {
    var _this8 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.formEdit.controls.descricao.setValue(row.descricao);
      _this8.formEdit.controls.tipo_atividade_id.setValue(row.tipo_atividade_id);
      _this8.formEdit.controls.comentarios.setValue(row.comentarios);
    })();
  }
  onColumnAtividadeDescricaoSave(row) {
    var _this9 = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this9.atividadeService.comentarioAtividade(_this9.tipoAtividade?.selectedEntity, _this9.formEdit.controls.comentarios);
        const saved = yield _this9.dao.update(row.id, {
          descricao: _this9.formEdit.controls.descricao.value,
          tipo_atividade_id: _this9.formEdit.controls.tipo_atividade_id.value,
          comentarios: (_this9.formEdit.controls.comentarios.value || []).filter(x => ["ADD", "EDIT", "DELETE"].includes(x._status || ""))
        });
        row.descricao = _this9.formEdit.controls.descricao.value;
        row.tipo_atividade_id = _this9.formEdit.controls.tipo_atividade_id.value;
        row.tipo_atividade = _this9.tipoAtividade?.selectedEntity || null;
        row.comentarios = _this9.formEdit.controls.comentarios.value;
        return !!saved;
      } catch (error) {
        return false;
      }
    })();
  }
}
_class = AtividadeListGridComponent;
_class.selectRoute = {
  route: ["gestao", "atividade", "grid"]
};
_class.ɵfac = function AtividadeListGridComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["atividade-list-grid"]],
  viewQuery: function AtividadeListGridComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__.GridComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c6, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.calendarEfemerides = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.unidade = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.usuario = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tipoAtividade = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.etiqueta = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.planoEntrega = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.planoEntregaEntrega = _t.first);
    }
  },
  inputs: {
    snapshot: "snapshot",
    fixedFilter: "fixedFilter",
    minhas: "minhas"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
  decls: 73,
  vars: 118,
  consts: [["calendarEfemerides", ""], [3, "dao", "add", "form", "hasEdit", "hasDelete", "orderBy", "groupBy", "join", "loadList", "selectable", "groupTemplate", "select"], ["groupAtividades", ""], [4, "ngIf"], [3, "deleted", "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Minhas", "controlName", "atribuidas_para_mim", 3, "size", "control", "change"], ["label", "Usu\u00E1rio", "controlName", "usuario_id", 3, "size", "control", "disabled", "dao"], ["usuario", ""], ["label", "Plano de trabalho", "controlName", "plano_trabalho_id", 3, "size", "control", "dao"], ["planoTrabalho", ""], ["label", "Atual", "controlName", "somente_unidade_atual", 3, "size", "control", "labelInfo", "change"], ["label", "Unidade", "controlName", "unidade_id", 3, "size", "control", "disabled", "dao", "change"], ["unidade", ""], ["label", "Sub.", "controlName", "unidades_subordinadas", "labelInfo", "Incluir as unidades subordinadas", 3, "size", "control"], ["itemTodos", "- Todos -", "controlName", "plano_entrega_id", 3, "size", "label", "valueTodos", "control", "items", "change"], ["planoEntrega", ""], ["itemTodos", "- Todos -", "controlName", "plano_entrega_entrega_id", 3, "size", "label", "valueTodos", "control", "items"], ["planoEntregaEntrega", ""], ["label", "#ID", "controlName", "numero", "maskFormat", "999999", 3, "size", "control", "labelInfo"], ["maskFormat", "00000.000000/0000-00", "controlName", "numero_processo", "labelInfo", "Pesquisa no documento de requisi\u00E7\u00E3o, conclus\u00E3o e nos documentos das tarefas", 3, "size", "label", "control"], ["label", "Status", "itemTodos", "- Todos -", "controlName", "status", 3, "size", "valueTodos", "disabled", "control", "items"], ["noForm", "", "noBox", "", "label", "Etiquetas", "controlName", "etiquetas", 3, "size", "control"], ["label", "Arq.", "controlName", "arquivadas", 3, "size", "control", "labelInfo"], ["controlName", "tipo_atividade_id", 3, "size", "label", "control", "dao"], ["controlName", "tipo_processo_id", 3, "size", "label", "control", "dao"], ["label", "Data", "itemTodos", "- Todos -", "controlName", "data_filtro", 3, "size", "valueTodos", "control", "items"], ["noIcon", "", "label", "In\u00EDcio", "controlName", "data_inicio", "labelInfo", "Data in\u00EDcio do per\u00EDodo", 3, "size", "disabled", "control"], ["noIcon", "", "label", "Fim", "controlName", "data_fim", "labelInfo", "Data fim do per\u00EDodo", 3, "size", "disabled", "control"], ["type", "expand", "icon", "bi bi-boxes", 3, "align", "hint", "template", "expandTemplate", 4, "ngIf"], [3, "titleTemplate", "maxWidth", "template", "editTemplate", "columnEditTemplate", "edit", "save"], ["titleIdAtividadeDescricao", ""], ["columnAtividadeDescricao", ""], ["columnAtividadeDescricaoEdit", ""], [3, "title", "maxWidth", "width", "template", "editTemplate", "columnEditTemplate", "edit", "save"], ["columnEtiquetas", ""], ["columnEtiquetasEdit", ""], [3, "titleTemplate", "template"], ["titlePlanoTrabalho", ""], ["columnPlanoTrabalho", ""], [3, "titleTemplate", "template", "maxWidth"], ["titleUnResponsavelDemandante", ""], ["columnPessoas", ""], [3, "titleTemplate", "template", "width"], ["titleTempos", ""], ["columnTempos", ""], [3, "title", "maxWidth", "columnEditTemplate", "template", "edit", "save"], ["columnProgressoEtiquetasChecklist", ""], ["columnProgressoEtiquetasChecklistEdit", ""], [3, "title", "width", "template"], ["columnNumero", ""], ["type", "options", 3, "metadata", "dynamicOptions", "dynamicButtons", "options", 4, "ngIf"], [3, "rows"], [3, "efemerides"], [1, "d-flex", "ps-3"], [4, "ngFor", "ngForOf"], [1, "me-3"], ["labelPosition", "left", "label", "Agrupar por Entrega", "controlName", "agrupar_entrega", 3, "size", "control", "change"], ["labelPosition", "left", "label", "Agrupar por Unidade", "controlName", "agrupar", 3, "size", "control", "change"], ["type", "expand", "icon", "bi bi-boxes", 3, "align", "hint", "template", "expandTemplate"], ["columnTarefas", ""], ["columnExpandedTarefas", ""], ["class", "badge rounded-pill bg-light text-dark", 4, "ngIf"], [1, "badge", "rounded-pill", "bg-light", "text-dark"], [1, "bi", "bi-boxes"], ["persist", "", 3, "selectable", "editable", "atividade"], ["by", "numero", 3, "header"], ["by", "plano_trabalho_entrega.descricao", 3, "header"], [1, "text-nowrap", "d-block"], ["icon", "bi bi-hash", "color", "light", 3, "label", "data", "click"], ["color", "light", 3, "icon", "label", 4, "ngIf"], ["color", "info", "role", "button", 3, "icon", "label", "click", 4, "ngIf"], [1, "micro-text", "fw-ligh", "atividade-descricao"], ["origem", "ATIVIDADE", 3, "entity"], ["color", "light", 3, "icon", "label"], ["color", "info", "role", "button", 3, "icon", "label", "click"], ["label", "Descri\u00E7\u00E3o", "controlName", "descricao", "required", "", 3, "size", "rows", "control"], ["relativeId", "columnTipoAtividade", "controlName", "tipo_atividade_id", 3, "label", "size", "emptyValue", "control", "dao", "labelInfo", "required"], ["tipoAtividade", ""], [3, "lookup", "click", 4, "ngFor", "ngForOf"], [3, "lookup", "click"], ["controlName", "etiquetas", 3, "size", "control", "addItemHandle"], ["controlName", "etiqueta", "nullable", "", "itemNull", "- Selecione -", "detailsButton", "", "detailsButtonIcon", "bi bi-tools", 3, "size", "control", "items", "details"], ["etiqueta", ""], ["class", "d-block", 4, "ngIf"], [1, "d-block"], ["by", "usuario.nome", 3, "header"], ["by", "demandante.nome", 3, "header"], [1, "text-nowrap"], ["icon", "bi bi-briefcase", "color", "light", 3, "label"], ["color", "light", 3, "icon", "label", "hint"], ["icon", "bi bi-cursor", "color", "light", 3, "label", "hint"], ["by", "data_distribuicao", 3, "header"], ["by", "data_estipulada_entrega", 3, "header"], ["by", "data_entrega", 3, "header"], [1, "one-per-line"], [3, "badge", 4, "ngFor", "ngForOf"], [3, "badge"], ["color", "success", 3, "value"], ["small", "", "title", "Checklist", 4, "ngIf"], ["small", "", "title", "Checklist"], ["class", "bi bi-check-circle", 4, "ngIf"], [1, "micro-text", "fw-ligh"], [1, "bi", "bi-check-circle"], ["label", "Progresso", "sufix", "%", "icon", "bi bi-clock", "controlName", "progresso", "labelInfo", "Progresso de execu\u00E7\u00E3o (% Conclu\u00EDdo)", 3, "size", "decimals", "control"], ["scale", "small", 3, "size", "source", "path"], [3, "documento"], [3, "data", "color", "icon", "label", "click", 4, "ngFor", "ngForOf"], ["origem", "ATIVIDADE", 3, "entity", "selectable", "grid"], [3, "data", "color", "icon", "label", "click"], ["type", "options", 3, "metadata", "dynamicOptions", "dynamicButtons", "options"]],
  template: function AtividadeListGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AtividadeListGridComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "grid", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("select", function AtividadeListGridComponent_Template_grid_select_2_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AtividadeListGridComponent_ng_template_3_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AtividadeListGridComponent_toolbar_5_Template, 3, 4, "toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "filter", 4)(7, "div", 5)(8, "input-switch", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AtividadeListGridComponent_Template_input_switch_change_8_listener($event) {
        return ctx.onAtribuidasParaMimChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input-search", 7, 8)(11, "input-search", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 5)(14, "input-switch", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AtividadeListGridComponent_Template_input_switch_change_14_listener($event) {
        return ctx.onSomenteUnidadeAtualChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input-search", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AtividadeListGridComponent_Template_input_search_change_15_listener($event) {
        return ctx.onUnidadeChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input-switch", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input-select", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AtividadeListGridComponent_Template_input_select_change_18_listener($event) {
        return ctx.onPlanoEntregaChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input-select", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input-text", 19)(24, "input-text", 20)(25, "input-select", 21)(26, "input-multiselect", 22)(27, "input-switch", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input-search", 24)(30, "input-search", 25)(31, "input-select", 26)(32, "input-datetime", 27)(33, "input-datetime", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, AtividadeListGridComponent_column_35_Template, 5, 4, "column", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "column", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, AtividadeListGridComponent_ng_template_37_Template, 7, 4, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, AtividadeListGridComponent_ng_template_39_Template, 7, 7, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, AtividadeListGridComponent_ng_template_41_Template, 3, 10, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "column", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, AtividadeListGridComponent_ng_template_44_Template, 1, 1, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, AtividadeListGridComponent_ng_template_46_Template, 3, 6, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "column", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, AtividadeListGridComponent_ng_template_49_Template, 1, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, AtividadeListGridComponent_ng_template_51_Template, 1, 1, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "column", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, AtividadeListGridComponent_ng_template_54_Template, 6, 3, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, AtividadeListGridComponent_ng_template_56_Template, 4, 6, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "column", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, AtividadeListGridComponent_ng_template_59_Template, 8, 3, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, AtividadeListGridComponent_ng_template_61_Template, 2, 1, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "column", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, AtividadeListGridComponent_ng_template_64_Template, 3, 3, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, AtividadeListGridComponent_ng_template_66_Template, 3, 5, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "column", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, AtividadeListGridComponent_ng_template_69_Template, 4, 5, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, AtividadeListGridComponent_column_71_Template, 1, 4, "column", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "pagination", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](38);
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](40);
      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](42);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](45);
      const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](47);
      const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](50);
      const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](52);
      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](55);
      const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](57);
      const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](60);
      const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](62);
      const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](65);
      const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](67);
      const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("form", ctx.formEdit)("hasEdit", false)("hasDelete", false)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("loadList", ctx.onGridLoad.bind(ctx))("selectable", ctx.selectable)("groupTemplate", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.fixedFilter && !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("deleted", ctx.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && !(ctx.queryParams == null ? null : ctx.queryParams.filter) && ctx.filterCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 1)("control", ctx.filter.controls.atribuidas_para_mim);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 6)("control", ctx.filter.controls.usuario_id)("disabled", ctx.filter.controls.atribuidas_para_mim.value ? "true" : undefined)("dao", ctx.usuarioDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 5)("control", ctx.filter.controls.plano_trabalho_id)("dao", ctx.planoTrabalhoDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 1)("control", ctx.filter.controls.somente_unidade_atual)("labelInfo", "Somente as " + ctx.lex.translate("atividades") + " da unidade selecionada");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 3)("control", ctx.filter.controls.unidade_id)("disabled", ctx.filter.controls.somente_unidade_atual.value ? "true" : undefined)("dao", ctx.unidadeDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 1)("control", ctx.filter.controls.unidades_subordinadas);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 4)("label", ctx.lex.translate("Plano de Entrega"))("valueTodos", null)("control", ctx.filter.controls.plano_entrega_id)("items", ctx.planosEntregas);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 3)("label", ctx.lex.translate("Entrega do Plano de Entrega"))("valueTodos", null)("control", ctx.filter.controls.plano_entrega_entrega_id)("items", ctx.planosEntregasEntregas);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 1)("control", ctx.filter.controls.numero)("labelInfo", "N\u00FAmero " + ctx.lex.translate("atividade"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("maxlength", 250);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 3)("label", "N\u00BA " + ctx.lex.translate("Processo") + " (Sei)")("control", ctx.filter.controls.numero_processo);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("maxlength", 250);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 3)("valueTodos", null)("disabled", (ctx.fixedFilter == null ? null : ctx.fixedFilter.length) && ctx.fixedFilter[0][0] == "status" ? "true" : undefined)("control", ctx.filter.controls.status)("items", ctx.lookup.ATIVIDADE_STATUS_COM_ARQUIVADAS);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 4)("control", ctx.filter.controls.etiquetas);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 1)("control", ctx.filter.controls.arquivadas)("labelInfo", "Listar tamb\u00E9m " + ctx.lex.translate("atividades") + " arquivadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 3)("label", "Tipo de " + ctx.lex.translate("Atividade"))("control", ctx.filter.controls.tipo_atividade_id)("dao", ctx.tipoAtividadeDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 3)("label", "Tipo de " + ctx.lex.translate("Processo"))("control", ctx.filter.controls.tipo_processo_id)("dao", ctx.tipoProcessoDao);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 2)("valueTodos", null)("control", ctx.filter.controls.data_filtro)("items", ctx.DATAS_FILTRO);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 2)("disabled", ctx.filter.controls.data_filtro.value == null ? "true" : undefined)("control", ctx.filter.controls.data_inicio);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 2)("disabled", ctx.filter.controls.data_filtro.value == null ? "true" : undefined)("control", ctx.filter.controls.data_fim);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("titleTemplate", _r11)("maxWidth", 250)("template", _r13)("editTemplate", _r13)("columnEditTemplate", ctx.selectable ? undefined : _r15)("edit", ctx.selectable ? undefined : ctx.onColumnAtividadeDescricaoEdit.bind(ctx))("save", ctx.selectable ? undefined : ctx.onColumnAtividadeDescricaoSave.bind(ctx));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Etiquetas")("maxWidth", 300)("width", 100)("template", _r17)("editTemplate", _r17)("columnEditTemplate", ctx.selectable ? undefined : _r19)("edit", ctx.selectable ? undefined : ctx.onColumnEtiquetasEdit.bind(ctx))("save", ctx.selectable ? undefined : ctx.onColumnEtiquetasSave.bind(ctx));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("titleTemplate", _r21)("template", _r23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("titleTemplate", _r25)("template", _r27)("maxWidth", 150);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("titleTemplate", _r29)("template", _r31)("width", 250);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Progresso\nChecklist")("maxWidth", 250)("columnEditTemplate", ctx.selectable ? undefined : _r35)("template", _r33)("edit", ctx.selectable ? undefined : ctx.onColumnProgressoEtiquetasChecklistEdit.bind(ctx))("save", ctx.selectable ? undefined : ctx.onColumnProgressoEtiquetasChecklistSave.bind(ctx));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "n\u00BA Processo/Status\nComent\u00E1rios")("width", 250)("template", _r37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectable);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", ctx.rowsLimit);
    }
  },
  styles: [".atividade-atividade[_ngcontent-%COMP%], .atividade-descricao[_ngcontent-%COMP%] {\n  height: auto;\n  display: block;\n  max-width: 200px;\n  white-space: initial;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9nZXN0YW8vYXRpdmlkYWRlL2F0aXZpZGFkZS1saXN0LWdyaWQvYXRpdmlkYWRlLWxpc3QtZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmF0aXZpZGFkZS1hdGl2aWRhZGUsIC5hdGl2aWRhZGUtZGVzY3JpY2FvIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=5557.js.map