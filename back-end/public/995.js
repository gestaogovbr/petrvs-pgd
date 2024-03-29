"use strict";
(self["webpackChunkpetrvs"] = self["webpackChunkpetrvs"] || []).push([[995],{

/***/ 51433:
/*!************************************************************************!*\
  !*** ./src/app/modules/suporte/documentacao/documentacao.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentacaoComponent: () => (/* binding */ DocumentacaoComponent)
/* harmony export */ });
/* harmony import */ var _usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/globals.service */ 91547);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ 14721);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 74048);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/panelmenu */ 65617);






class DocumentacaoComponent {
  constructor(globals, markdownService, _httpClient) {
    this.globals = globals;
    this.markdownService = markdownService;
    this._httpClient = _httpClient;
    this.content = '';
  }
  ngOnInit() {
    this.openMd('docs/manual.md');
    document.addEventListener('click', event => {
      if (event.target instanceof HTMLAnchorElement) {
        const link = event.target;
        const linkTarget = link.getAttribute('href');
        if (linkTarget && linkTarget.endsWith('.md')) {
          event.preventDefault();
          this.openMd(linkTarget);
        }
      }
    });
    this.items = [{
      label: 'Início',
      icon: 'bi bi-house',
      target: 'docs/manual.md'
    }, {
      label: 'Gestão',
      items: [{
        label: 'Avaliação (Planos de entrega e trabalho)',
        icon: 'bi bi-star',
        target: 'docs/gestao/avaliacao.md'
      }, {
        label: 'Planejamento Institucional',
        icon: 'bi bi-journals',
        target: 'docs/gestao/planejamento_institucional.md'
      }, {
        label: 'Planos de entrega',
        icon: 'bi bi-list-columns-reverse',
        target: 'docs/gestao/plano_entrega.md',
        items: [{
          label: 'Entregas',
          target: 'docs/gestao/plano_entrega_entrega.md'
        }]
      }, {
        label: 'Planos de Trabalho',
        icon: 'bi bi-list-stars',
        target: 'docs/gestao/plano_trabalho.md',
        items: [{
          label: 'Consolidação',
          target: 'docs/gestao/plano_trabalho_consolidacao.md'
        }]
      }]
    }, {
      label: 'Geral',
      items: [{
        label: 'Informações Complementares',
        target: 'docs/geral/informacoes-complementares.md'
      }]
    }, {
      label: 'Configurações',
      items: [{
        label: 'Entidade',
        icon: 'bi bi-bookmark-heart',
        target: 'docs/configuracoes/entidade.md'
      }, {
        label: 'Perfil',
        icon: 'bi bi-fingerprint',
        target: 'docs/configuracoes/perfil.md'
      }, {
        label: 'Preferência',
        icon: 'bi bi-gear',
        target: 'docs/configuracoes/preferencia.md'
      }, {
        label: 'Unidade',
        icon: 'bi bi-unity',
        target: 'docs/configuracoes/unidade.md'
      }, {
        label: 'Usuário',
        icon: 'bi bi-people',
        target: 'docs/configuracoes/usuario.md'
      }]
    }];
    this.items = this.addCommand(this.items, e => this.openMd(e.item?.target));
  }
  addCommand(items, commandFunction) {
    return items.map(item => {
      const newItem = {
        ...item,
        command: commandFunction
      };
      if (item.items) {
        newItem.items = this.addCommand(item.items, commandFunction);
      }
      return newItem;
    });
  }
  openMd(file) {
    var _this = this;
    return (0,_usr_src_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (file) {
        let markdownRaw = yield _this._httpClient.get(file, {
          responseType: 'text'
        }).toPromise();
        if (markdownRaw) {
          _this.content = _this.markdownService.parse(markdownRaw);
        }
      }
    })();
  }
  static #_ = this.ɵfac = function DocumentacaoComponent_Factory(t) {
    return new (t || DocumentacaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_1__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.MarkdownService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DocumentacaoComponent,
    selectors: [["app-documentacao"]],
    decls: 6,
    vars: 2,
    consts: [[1, "row"], [1, "col-12", "col-md-9", "markdownContent"], [3, "data"], [1, "col-12", "col-md-3"], [1, "position-sticky", 2, "top", "100px"], [1, "w-100", 3, "model"]],
    template: function DocumentacaoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "markdown", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "p-panelMenu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx.items);
      }
    },
    dependencies: [primeng_panelmenu__WEBPACK_IMPORTED_MODULE_5__.PanelMenu, ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.MarkdownComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 24162:
/*!************************************************************************!*\
  !*** ./src/app/modules/suporte/home-suporte/home-suporte.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeSuporteComponent: () => (/* binding */ HomeSuporteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);


class HomeSuporteComponent {
  static #_ = this.ɵfac = function HomeSuporteComponent_Factory(t) {
    return new (t || HomeSuporteComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeSuporteComponent,
    selectors: [["app-home-suporte"]],
    decls: 1,
    vars: 0,
    template: function HomeSuporteComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 77114:
/*!************************************************************************!*\
  !*** ./src/app/modules/suporte/menu-suporte/menu-suporte.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuSuporteComponent: () => (/* binding */ MenuSuporteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/globals.service */ 91547);


const _c0 = function () {
  return ["suporte/documentacao"];
};
const _c1 = function (a0) {
  return {
    route: a0
  };
};
class MenuSuporteComponent {
  constructor(gb) {
    this.gb = gb;
  }
  static #_ = this.ɵfac = function MenuSuporteComponent_Factory(t) {
    return new (t || MenuSuporteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_0__.GlobalsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MenuSuporteComponent,
    selectors: [["app-menu-suporte"]],
    decls: 3,
    vars: 5,
    consts: [[1, "row", "mt-3"], [1, "col-6", "col-sm-3", "mb-3"], ["title", "Documenta\u00E7\u00E3o", "textColor", "#1369f0", "borderColor", "#1369f0", 3, "imgIcon", "route"]],
    template: function MenuSuporteComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-button-dashboard", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imgIcon", ctx.gb.getResourcePath("assets/icons/home/documentacao.svg"))("route", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0)));
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 60995:
/*!***************************************************!*\
  !*** ./src/app/modules/suporte/suporte.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuporteModule: () => (/* binding */ SuporteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _documentacao_documentacao_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentacao/documentacao.component */ 51433);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-markdown */ 14721);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/panelmenu */ 65617);
/* harmony import */ var _home_suporte_home_suporte_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-suporte/home-suporte.component */ 24162);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);
/* harmony import */ var _menu_suporte_menu_suporte_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-suporte/menu-suporte.component */ 77114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _components_button_dashboard_button_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/button-dashboard/button-dashboard.component */ 959);












const routes = [{
  path: '',
  component: _home_suporte_home_suporte_component__WEBPACK_IMPORTED_MODULE_1__.HomeSuporteComponent,
  children: [{
    path: '',
    component: _menu_suporte_menu_suporte_component__WEBPACK_IMPORTED_MODULE_3__.MenuSuporteComponent
  }, {
    path: 'documentacao',
    component: _documentacao_documentacao_component__WEBPACK_IMPORTED_MODULE_0__.DocumentacaoComponent
  }]
}];
class SuporteModule {
  static #_ = this.ɵfac = function SuporteModule_Factory(t) {
    return new (t || SuporteModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: SuporteModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_8__.PanelMenuModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SuporteModule, {
    declarations: [_documentacao_documentacao_component__WEBPACK_IMPORTED_MODULE_0__.DocumentacaoComponent, _home_suporte_home_suporte_component__WEBPACK_IMPORTED_MODULE_1__.HomeSuporteComponent, _menu_suporte_menu_suporte_component__WEBPACK_IMPORTED_MODULE_3__.MenuSuporteComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_8__.PanelMenuModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetComponentScope"](_menu_suporte_menu_suporte_component__WEBPACK_IMPORTED_MODULE_3__.MenuSuporteComponent, function () {
  return [_components_button_dashboard_button_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.ButtonDashboardComponent];
}, []);

/***/ }),

/***/ 23709:
/*!*******************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angledown.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleDownIcon: () => (/* binding */ AngleDownIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 47086);



class AngleDownIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
  static ɵfac = /* @__PURE__ */function () {
    let ɵAngleDownIcon_BaseFactory;
    return function AngleDownIcon_Factory(t) {
      return (ɵAngleDownIcon_BaseFactory || (ɵAngleDownIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleDownIcon)))(t || AngleDownIcon);
    };
  }();
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AngleDownIcon,
    selectors: [["AngleDownIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z", "fill", "currentColor"]],
    template: function AngleDownIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngleDownIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'AngleDownIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 12165:
/*!********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angleright.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleRightIcon: () => (/* binding */ AngleRightIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 47086);



class AngleRightIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
  static ɵfac = /* @__PURE__ */function () {
    let ɵAngleRightIcon_BaseFactory;
    return function AngleRightIcon_Factory(t) {
      return (ɵAngleRightIcon_BaseFactory || (ɵAngleRightIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleRightIcon)))(t || AngleRightIcon);
    };
  }();
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AngleRightIcon,
    selectors: [["AngleRightIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z", "fill", "currentColor"]],
    template: function AngleRightIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngleRightIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'AngleRightIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 65617:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-panelmenu.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelMenu: () => (/* binding */ PanelMenu),
/* harmony export */   PanelMenuList: () => (/* binding */ PanelMenuList),
/* harmony export */   PanelMenuModule: () => (/* binding */ PanelMenuModule),
/* harmony export */   PanelMenuSub: () => (/* binding */ PanelMenuSub)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 66400);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 55397);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dom */ 5163);
/* harmony import */ var primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/angledown */ 23709);
/* harmony import */ var primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/angleright */ 12165);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/chevrondown */ 96167);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/chevronright */ 11811);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tooltip */ 4935);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 13432);
















const _c0 = ["list"];
function PanelMenuSub_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 5);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6).$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon")("ngStyle", ctx_r19.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6).$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon")("ngStyle", ctx_r20.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleDownIcon_1_Template, 1, 2, "AngleDownIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleRightIcon_2_Template, 1, 2, "AngleRightIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.isItemActive(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.isItemActive(processedItem_r2));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_ng_template_0_Template(rf, ctx) {}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_Template, 1, 0, null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.panelMenu.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.panelMenu.submenuIconTemplate);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", processedItem_r2.icon)("ngStyle", ctx_r12.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.getItemProp(processedItem_r2, "label"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 23);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r15.getItemProp(processedItem_r2, "label"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", processedItem_r2.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](processedItem_r2.badge);
  }
}
const _c1 = function (a0) {
  return {
    "p-disabled": a0
  };
};
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_2_Template, 1, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_3_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_template_4_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_6_Template, 2, 2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r9.getItemProp(processedItem_r2, "disabled")))("target", ctx_r9.getItemProp(processedItem_r2, "target"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx_r9.getItemProp(processedItem_r2, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("data-pc-section", "action")("tabindex", !!ctx_r9.parentExpanded ? "0" : "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.isItemGroup(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", processedItem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (processedItem_r2.item == null ? null : processedItem_r2.item.escape) !== false)("ngIfElse", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", processedItem_r2.badge);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6).$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon")("ngStyle", ctx_r38.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6).$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon")("ngStyle", ctx_r39.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleDownIcon_1_Template, 1, 2, "AngleDownIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleRightIcon_2_Template, 1, 2, "AngleRightIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5).$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.isItemActive(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r36.isItemActive(processedItem_r2));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_ng_template_0_Template(rf, ctx) {}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_Template, 1, 0, null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r30.panelMenu.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r30.panelMenu.submenuIconTemplate);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", processedItem_r2.icon)("ngStyle", ctx_r31.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.getItemProp(processedItem_r2, "label"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 23);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r34.getItemProp(processedItem_r2, "label"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r35.getItemProp(processedItem_r2, "badgeStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r35.getItemProp(processedItem_r2, "badge"));
  }
}
const _c2 = function () {
  return {
    exact: false
  };
};
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_2_Template, 1, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_3_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_6_Template, 2, 2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r10.getItemProp(processedItem_r2, "routerLink"))("queryParams", ctx_r10.getItemProp(processedItem_r2, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r10.getItemProp(processedItem_r2, "routerLinkActiveOptions") || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c2))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx_r10.getItemProp(processedItem_r2, "disabled")))("target", ctx_r10.getItemProp(processedItem_r2, "target"))("fragment", ctx_r10.getItemProp(processedItem_r2, "fragment"))("queryParamsHandling", ctx_r10.getItemProp(processedItem_r2, "queryParamsHandling"))("preserveFragment", ctx_r10.getItemProp(processedItem_r2, "preserveFragment"))("skipLocationChange", ctx_r10.getItemProp(processedItem_r2, "skipLocationChange"))("replaceUrl", ctx_r10.getItemProp(processedItem_r2, "replaceUrl"))("state", ctx_r10.getItemProp(processedItem_r2, "state"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx_r10.getItemProp(processedItem_r2, "title"))("data-pc-section", "action")("tabindex", !!ctx_r10.parentExpanded ? "0" : "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.isItemGroup(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", processedItem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.getItemProp(processedItem_r2, "escape") !== false)("ngIfElse", _r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", processedItem_r2.badge);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_Template, 7, 12, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_Template, 7, 23, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.getItemProp(processedItem_r2, "routerLink"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.getItemProp(processedItem_r2, "routerLink"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_3_1_ng_template_0_Template(rf, ctx) {}
function PanelMenuSub_ng_template_2_li_1_ng_container_3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenuSub_ng_template_2_li_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c3 = function (a0) {
  return {
    $implicit: a0
  };
};
function PanelMenuSub_ng_template_2_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_3_1_Template, 1, 0, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, processedItem_r2.item));
  }
}
function PanelMenuSub_ng_template_2_li_1_p_panelMenuSub_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-panelMenuSub", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemToggle", function PanelMenuSub_ng_template_2_li_1_p_panelMenuSub_5_Template_p_panelMenuSub_itemToggle_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r53.onItemToggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r8.getItemId(processedItem_r2) + "_list")("panelId", ctx_r8.panelId)("items", processedItem_r2.items)("itemTemplate", ctx_r8.itemTemplate)("transitionOptions", ctx_r8.transitionOptions)("focusedItemId", ctx_r8.focusedItemId)("activeItemPath", ctx_r8.activeItemPath)("level", ctx_r8.level + 1)("parentExpanded", !!ctx_r8.parentExpanded && ctx_r8.isItemExpanded(processedItem_r2));
  }
}
function PanelMenuSub_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelMenuSub_ng_template_2_li_1_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);
      const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r56.onItemClick($event, processedItem_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenuSub_ng_template_2_li_1_ng_container_2_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PanelMenuSub_ng_template_2_li_1_ng_container_3_Template, 2, 4, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PanelMenuSub_ng_template_2_li_1_p_panelMenuSub_5_Template, 1, 9, "p-panelMenuSub", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const processedItem_r2 = ctx_r59.$implicit;
    const index_r3 = ctx_r59.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r5.getItemProp(processedItem_r2, "styleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-hidden", processedItem_r2.visible === false)("p-focus", ctx_r5.isItemFocused(processedItem_r2) && !ctx_r5.isItemDisabled(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.getItemClass(processedItem_r2))("ngStyle", ctx_r5.getItemProp(processedItem_r2, "style"))("pTooltip", ctx_r5.getItemProp(processedItem_r2, "tooltip"))("tooltipOptions", ctx_r5.getItemProp(processedItem_r2, "tooltipOptions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r5.getItemId(processedItem_r2))("aria-label", ctx_r5.getItemProp(processedItem_r2, "label"))("aria-expanded", ctx_r5.isItemGroup(processedItem_r2) ? ctx_r5.isItemActive(processedItem_r2) : undefined)("aria-level", ctx_r5.level + 1)("aria-setsize", ctx_r5.getAriaSetSize())("aria-posinset", ctx_r5.getAriaPosInset(index_r3))("data-p-disabled", ctx_r5.isItemDisabled(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@submenu", ctx_r5.getAnimation(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isItemVisible(processedItem_r2) && ctx_r5.isItemGroup(processedItem_r2));
  }
}
function PanelMenuSub_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenuSub_ng_template_2_li_0_Template, 1, 0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_Template, 6, 21, "li", 4);
  }
  if (rf & 2) {
    const processedItem_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", processedItem_r2.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !processedItem_r2.separator && ctx_r1.isItemVisible(processedItem_r2));
  }
}
const _c4 = function (a1) {
  return {
    "p-submenu-list": true,
    "p-panelmenu-root-list": a1
  };
};
const _c5 = ["submenu"];
const _c6 = ["container"];
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_ChevronDownIcon_1_Template, 1, 1, "ChevronDownIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.isItemActive(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.isItemActive(item_r2));
  }
}
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_2_ng_template_0_Template(rf, ctx) {}
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_2_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.submenuIconTemplate);
  }
}
function PanelMenu_ng_container_2_div_1_a_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 19);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r2.icon)("ngStyle", ctx_r11.getItemProp(item_r2, "iconStyle"));
  }
}
function PanelMenu_ng_container_2_div_1_a_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getItemProp(item_r2, "label"));
  }
}
function PanelMenu_ng_container_2_div_1_a_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r14.getItemProp(item_r2, "label"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function PanelMenu_ng_container_2_div_1_a_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r15.getItemProp(item_r2, "badgeStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.getItemProp(item_r2, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenu_ng_container_2_div_1_a_3_span_2_Template, 1, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PanelMenu_ng_container_2_div_1_a_3_span_3_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PanelMenu_ng_container_2_div_1_a_3_ng_template_4_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PanelMenu_ng_container_2_div_1_a_3_span_6_Template, 2, 2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r7.getItemProp(item_r2, "target"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx_r7.getItemProp(item_r2, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("tabindex", -1)("title", ctx_r7.getItemProp(item_r2, "title"))("data-pc-section", "headeraction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isItemGroup(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getItemProp(item_r2, "escape") !== false)("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getItemProp(item_r2, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_ChevronDownIcon_1_Template, 1, 1, "ChevronDownIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.isItemActive(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r33.isItemActive(item_r2));
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_2_ng_template_0_Template(rf, ctx) {}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_2_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r27.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r27.submenuIconTemplate);
  }
}
function PanelMenu_ng_container_2_div_1_a_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 19);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r2.icon)("ngStyle", ctx_r28.getItemProp(item_r2, "iconStyle"));
  }
}
function PanelMenu_ng_container_2_div_1_a_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.getItemProp(item_r2, "label"));
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r31.getItemProp(item_r2, "label"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function PanelMenu_ng_container_2_div_1_a_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r32.getItemProp(item_r2, "badgeStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.getItemProp(item_r2, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenu_ng_container_2_div_1_a_4_span_2_Template, 1, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PanelMenu_ng_container_2_div_1_a_4_span_3_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PanelMenu_ng_container_2_div_1_a_4_ng_template_4_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PanelMenu_ng_container_2_div_1_a_4_span_6_Template, 2, 2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r8.getItemProp(item_r2, "routerLink"))("queryParams", ctx_r8.getItemProp(item_r2, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r8.getItemProp(item_r2, "routerLinkActiveOptions") || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2))("target", ctx_r8.getItemProp(item_r2, "target"))("fragment", ctx_r8.getItemProp(item_r2, "fragment"))("queryParamsHandling", ctx_r8.getItemProp(item_r2, "queryParamsHandling"))("preserveFragment", ctx_r8.getItemProp(item_r2, "preserveFragment"))("skipLocationChange", ctx_r8.getItemProp(item_r2, "skipLocationChange"))("replaceUrl", ctx_r8.getItemProp(item_r2, "replaceUrl"))("state", ctx_r8.getItemProp(item_r2, "state"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", -1)("data-pc-section", "headeraction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isItemGroup(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.getItemProp(item_r2, "escape") !== false)("ngIfElse", _r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.getItemProp(item_r2, "badge"));
  }
}
const _c7 = function (a0) {
  return {
    "p-panelmenu-expanded": a0
  };
};
function PanelMenu_ng_container_2_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@rootItem.done", function PanelMenu_ng_container_2_div_1_div_5_Template_div_animation_rootItem_done_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r44.onToggleDone());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26)(2, "p-panelMenuList", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("headerFocus", function PanelMenu_ng_container_2_div_1_div_5_Template_p_panelMenuList_headerFocus_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r46.updateFocusedHeader($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const item_r2 = ctx_r47.$implicit;
    const i_r5 = ctx_r47.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c7, ctx_r9.isItemActive(item_r2)))("@rootItem", ctx_r9.getAnimation(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r9.getContentId(item_r2, i_r5))("aria-labelledby", ctx_r9.getHeaderId(item_r2, i_r5))("data-pc-section", "toggleablecontent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "menucontent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelId", ctx_r9.getPanelId(i_r5, item_r2))("items", ctx_r9.getItemProp(item_r2, "items"))("itemTemplate", ctx_r9.itemTemplate)("transitionOptions", ctx_r9.transitionOptions)("root", true)("activeItem", ctx_r9.activeItem())("tabindex", ctx_r9.tabindex)("parentExpanded", ctx_r9.isItemActive(item_r2));
  }
}
const _c8 = function (a1, a2) {
  return {
    "p-component p-panelmenu-header": true,
    "p-highlight": a1,
    "p-disabled": a2
  };
};
function PanelMenu_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelMenu_ng_container_2_div_1_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r2 = ctx_r49.$implicit;
      const i_r5 = ctx_r49.index;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r48.onHeaderClick($event, item_r2, i_r5));
    })("keydown", function PanelMenu_ng_container_2_div_1_Template_div_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r2 = ctx_r52.$implicit;
      const i_r5 = ctx_r52.index;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r51.onHeaderKeyDown($event, item_r2, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PanelMenu_ng_container_2_div_1_a_3_Template, 7, 10, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PanelMenu_ng_container_2_div_1_a_4_Template, 7, 19, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PanelMenu_ng_container_2_div_1_div_5_Template, 3, 16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r2 = ctx_r53.$implicit;
    const i_r5 = ctx_r53.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r6.getItemProp(item_r2, "headerClass"))("ngStyle", ctx_r6.getItemProp(item_r2, "style"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r6.getItemProp(item_r2, "styleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c8, ctx_r6.isItemActive(item_r2), ctx_r6.isItemDisabled(item_r2)))("ngStyle", ctx_r6.getItemProp(item_r2, "style"))("pTooltip", ctx_r6.getItemProp(item_r2, "tooltip"))("tabindex", 0)("tooltipOptions", ctx_r6.getItemProp(item_r2, "tooltipOptions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r6.getHeaderId(item_r2, i_r5))("aria-expanded", ctx_r6.isItemActive(item_r2))("aria-label", ctx_r6.getItemProp(item_r2, "label"))("aria-controls", ctx_r6.getContentId(item_r2, i_r5))("aria-disabled", ctx_r6.isItemDisabled(item_r2))("data-p-highlight", ctx_r6.isItemActive(item_r2))("data-p-disabled", ctx_r6.isItemDisabled(item_r2))("data-pc-section", "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.getItemProp(item_r2, "routerLink"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.getItemProp(item_r2, "routerLink"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isItemGroup(item_r2));
  }
}
function PanelMenu_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_Template, 6, 24, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isItemVisible(item_r2));
  }
}
const _c9 = "@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n";
class PanelMenuSub {
  panelMenu;
  el;
  panelId;
  focusedItemId;
  items;
  itemTemplate;
  level = 0;
  activeItemPath;
  root;
  tabindex;
  transitionOptions;
  parentExpanded;
  itemToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  menuFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  menuBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  menuKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  listViewChild;
  constructor(panelMenu, el) {
    this.panelMenu = panelMenu;
    this.el = el;
  }
  getItemId(processedItem) {
    return processedItem.item?.id ?? `${this.panelId}_${processedItem.key}`;
  }
  getItemKey(processedItem) {
    return this.getItemId(processedItem);
  }
  getItemClass(processedItem) {
    return {
      'p-menuitem': true,
      'p-disabled': this.isItemDisabled(processedItem)
    };
  }
  getItemProp(processedItem, name, params) {
    return processedItem && processedItem.item ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getItemValue(processedItem.item[name], params) : undefined;
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, 'label');
  }
  isItemExpanded(processedItem) {
    return processedItem.expanded;
  }
  isItemActive(processedItem) {
    return this.isItemExpanded(processedItem) || this.activeItemPath.some(path => path && path.key === processedItem.key);
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, 'visible') !== false;
  }
  isItemDisabled(processedItem) {
    return this.getItemProp(processedItem, 'disabled');
  }
  isItemFocused(processedItem) {
    return this.focusedItemId === this.getItemId(processedItem);
  }
  isItemGroup(processedItem) {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(processedItem.items);
  }
  getAnimation(processedItem) {
    return this.isItemActive(processedItem) ? {
      value: 'visible',
      params: {
        transitionParams: this.transitionOptions,
        height: '*'
      }
    } : {
      value: 'hidden',
      params: {
        transitionParams: this.transitionOptions,
        height: '0'
      }
    };
  }
  getAriaSetSize() {
    return this.items.filter(processedItem => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, 'separator')).length;
  }
  getAriaPosInset(index) {
    return index - this.items.slice(0, index).filter(processedItem => this.isItemVisible(processedItem) && this.getItemProp(processedItem, 'separator')).length + 1;
  }
  onItemClick(event, processedItem) {
    if (!this.isItemDisabled(processedItem)) {
      this.getItemProp(processedItem, 'command', {
        originalEvent: event,
        item: processedItem.item
      });
      this.itemToggle.emit({
        processedItem,
        expanded: !this.isItemActive(processedItem)
      });
    }
  }
  onItemToggle(event) {
    this.itemToggle.emit(event);
  }
  static ɵfac = function PanelMenuSub_Factory(t) {
    return new (t || PanelMenuSub)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => PanelMenu)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PanelMenuSub,
    selectors: [["p-panelMenuSub"]],
    viewQuery: function PanelMenuSub_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      panelId: "panelId",
      focusedItemId: "focusedItemId",
      items: "items",
      itemTemplate: "itemTemplate",
      level: "level",
      activeItemPath: "activeItemPath",
      root: "root",
      tabindex: "tabindex",
      transitionOptions: "transitionOptions",
      parentExpanded: "parentExpanded"
    },
    outputs: {
      itemToggle: "itemToggle",
      menuFocus: "menuFocus",
      menuBlur: "menuBlur",
      menuKeyDown: "menuKeyDown"
    },
    decls: 3,
    vars: 8,
    consts: [["role", "tree", 3, "ngClass", "tabindex", "focusin", "focusout", "keydown"], ["list", ""], ["ngFor", "", 3, "ngForOf"], ["class", "p-menuitem-separator", "role", "separator", 4, "ngIf"], ["role", "treeitem", 3, "ngClass", "class", "p-hidden", "p-focus", "ngStyle", "pTooltip", "tooltipOptions", 4, "ngIf"], ["role", "separator", 1, "p-menuitem-separator"], ["role", "treeitem", 3, "ngClass", "ngStyle", "pTooltip", "tooltipOptions"], [1, "p-menuitem-content", 3, "click"], [4, "ngIf"], [1, "p-toggleable-content"], [3, "id", "panelId", "items", "itemTemplate", "transitionOptions", "focusedItemId", "activeItemPath", "level", "parentExpanded", "itemToggle", 4, "ngIf"], ["class", "p-menuitem-link", 3, "ngClass", "target", 4, "ngIf"], ["class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], [1, "p-menuitem-link", 3, "ngClass", "target"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", "ngStyle", 4, "ngIf"], [3, "styleClass", "ngStyle"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["htmlRouteLabel", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "id", "panelId", "items", "itemTemplate", "transitionOptions", "focusedItemId", "activeItemPath", "level", "parentExpanded", "itemToggle"]],
    template: function PanelMenuSub_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function PanelMenuSub_Template_ul_focusin_0_listener($event) {
          return ctx.menuFocus.emit($event);
        })("focusout", function PanelMenuSub_Template_ul_focusout_0_listener($event) {
          return ctx.menuBlur.emit($event);
        })("keydown", function PanelMenuSub_Template_ul_keydown_0_listener($event) {
          return ctx.menuKeyDown.emit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenuSub_ng_template_2_Template, 2, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c4, ctx.root))("tabindex", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-activedescendant", ctx.focusedItemId)("data-pc-section", "menu")("aria-hidden", !ctx.parentExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
      }
    },
    dependencies: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_5__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_6__.AngleRightIcon, PanelMenuSub];
    },
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('submenu', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        height: '0'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(0))])]
    }
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelMenuSub, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-panelMenuSub',
      template: `
        <ul
            #list
            [ngClass]="{ 'p-submenu-list': true, 'p-panelmenu-root-list': root }"
            role="tree"
            [tabindex]="-1"
            [attr.aria-activedescendant]="focusedItemId"
            [attr.data-pc-section]="'menu'"
            [attr.aria-hidden]="!parentExpanded"
            (focusin)="menuFocus.emit($event)"
            (focusout)="menuBlur.emit($event)"
            (keydown)="menuKeyDown.emit($event)"
        >
            <ng-template ngFor let-processedItem let-index="index" [ngForOf]="items">
                <li *ngIf="processedItem.separator" class="p-menuitem-separator" role="separator"></li>
                <li
                    *ngIf="!processedItem.separator && isItemVisible(processedItem)"
                    [ngClass]="getItemClass(processedItem)"
                    role="treeitem"
                    [attr.id]="getItemId(processedItem)"
                    [attr.aria-label]="getItemProp(processedItem, 'label')"
                    [attr.aria-expanded]="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                    [attr.aria-level]="level + 1"
                    [attr.aria-setsize]="getAriaSetSize()"
                    [attr.aria-posinset]="getAriaPosInset(index)"
                    [class]="getItemProp(processedItem, 'styleClass')"
                    [class.p-hidden]="processedItem.visible === false"
                    [class.p-focus]="isItemFocused(processedItem) && !isItemDisabled(processedItem)"
                    [ngStyle]="getItemProp(processedItem, 'style')"
                    [pTooltip]="getItemProp(processedItem, 'tooltip')"
                    [attr.data-p-disabled]="isItemDisabled(processedItem)"
                    [tooltipOptions]="getItemProp(processedItem, 'tooltipOptions')"
                >
                    <div class="p-menuitem-content" (click)="onItemClick($event, processedItem)">
                        <ng-container *ngIf="!itemTemplate">
                            <a
                                *ngIf="!getItemProp(processedItem, 'routerLink')"
                                [attr.href]="getItemProp(processedItem, 'url')"
                                class="p-menuitem-link"
                                [ngClass]="{ 'p-disabled': getItemProp(processedItem, 'disabled') }"
                                [target]="getItemProp(processedItem, 'target')"
                                [attr.data-pc-section]="'action'"
                                [attr.tabindex]="!!parentExpanded ? '0' : '-1'"
                            >
                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <ng-container *ngIf="!panelMenu.submenuIconTemplate">
                                        <AngleDownIcon [styleClass]="'p-submenu-icon'" *ngIf="isItemActive(processedItem)" [ngStyle]="getItemProp(processedItem, 'iconStyle')" />
                                        <AngleRightIcon [styleClass]="'p-submenu-icon'" *ngIf="!isItemActive(processedItem)" [ngStyle]="getItemProp(processedItem, 'iconStyle')" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="panelMenu.submenuIconTemplate"></ng-template>
                                </ng-container>
                                <span class="p-menuitem-icon" [ngClass]="processedItem.icon" *ngIf="processedItem.icon" [ngStyle]="getItemProp(processedItem, 'iconStyle')"></span>
                                <span class="p-menuitem-text" *ngIf="processedItem.item?.escape !== false; else htmlLabel">{{ getItemProp(processedItem, 'label') }}</span>
                                <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(processedItem, 'label')"></span></ng-template>
                                <span class="p-menuitem-badge" *ngIf="processedItem.badge" [ngClass]="processedItem.badgeStyleClass">{{ processedItem.badge }}</span>
                            </a>
                            <a
                                *ngIf="getItemProp(processedItem, 'routerLink')"
                                [routerLink]="getItemProp(processedItem, 'routerLink')"
                                [queryParams]="getItemProp(processedItem, 'queryParams')"
                                [routerLinkActive]="'p-menuitem-link-active'"
                                [routerLinkActiveOptions]="getItemProp(processedItem, 'routerLinkActiveOptions') || { exact: false }"
                                class="p-menuitem-link"
                                [ngClass]="{ 'p-disabled': getItemProp(processedItem, 'disabled') }"
                                [target]="getItemProp(processedItem, 'target')"
                                [attr.title]="getItemProp(processedItem, 'title')"
                                [fragment]="getItemProp(processedItem, 'fragment')"
                                [queryParamsHandling]="getItemProp(processedItem, 'queryParamsHandling')"
                                [preserveFragment]="getItemProp(processedItem, 'preserveFragment')"
                                [skipLocationChange]="getItemProp(processedItem, 'skipLocationChange')"
                                [replaceUrl]="getItemProp(processedItem, 'replaceUrl')"
                                [state]="getItemProp(processedItem, 'state')"
                                [attr.data-pc-section]="'action'"
                                [attr.tabindex]="!!parentExpanded ? '0' : '-1'"
                            >
                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <ng-container *ngIf="!panelMenu.submenuIconTemplate">
                                        <AngleDownIcon *ngIf="isItemActive(processedItem)" [styleClass]="'p-submenu-icon'" [ngStyle]="getItemProp(processedItem, 'iconStyle')" />
                                        <AngleRightIcon *ngIf="!isItemActive(processedItem)" [styleClass]="'p-submenu-icon'" [ngStyle]="getItemProp(processedItem, 'iconStyle')" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="panelMenu.submenuIconTemplate"></ng-template>
                                </ng-container>
                                <span class="p-menuitem-icon" [ngClass]="processedItem.icon" *ngIf="processedItem.icon" [ngStyle]="getItemProp(processedItem, 'iconStyle')"></span>
                                <span class="p-menuitem-text" *ngIf="getItemProp(processedItem, 'escape') !== false; else htmlRouteLabel">{{ getItemProp(processedItem, 'label') }}</span>
                                <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(processedItem, 'label')"></span></ng-template>
                                <span class="p-menuitem-badge" *ngIf="processedItem.badge" [ngClass]="getItemProp(processedItem, 'badgeStyleClass')">{{ getItemProp(processedItem, 'badge') }}</span>
                            </a>
                        </ng-container>
                        <ng-container *ngIf="itemTemplate">
                            <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: processedItem.item }"></ng-template>
                        </ng-container>
                    </div>
                    <div class="p-toggleable-content" [@submenu]="getAnimation(processedItem)">
                        <p-panelMenuSub
                            *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem)"
                            [id]="getItemId(processedItem) + '_list'"
                            [panelId]="panelId"
                            [items]="processedItem.items"
                            [itemTemplate]="itemTemplate"
                            [transitionOptions]="transitionOptions"
                            [focusedItemId]="focusedItemId"
                            [activeItemPath]="activeItemPath"
                            [level]="level + 1"
                            [parentExpanded]="!!parentExpanded && isItemExpanded(processedItem)"
                            (itemToggle)="onItemToggle($event)"
                        ></p-panelMenuSub>
                    </div>
                </li>
            </ng-template>
        </ul>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('submenu', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        height: '0'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(0))])],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: PanelMenu,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => PanelMenu)]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    panelId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    focusedItemId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    level: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeItemPath: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    root: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    transitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    parentExpanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    menuFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    menuBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    menuKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    listViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['list']
    }]
  });
})();
class PanelMenuList {
  panelId;
  id;
  items;
  itemTemplate;
  parentExpanded;
  expanded;
  transitionOptions;
  root;
  tabindex;
  activeItem;
  itemToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  headerFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  subMenuViewChild;
  searchTimeout;
  searchValue;
  focused;
  focusedItem = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
  activeItemPath = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
  processedItems = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
  visibleItems = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const processedItems = this.processedItems();
    return this.flatItems(processedItems);
  });
  get focusedItemId() {
    const focusedItem = this.focusedItem();
    return focusedItem && focusedItem.item?.id ? focusedItem.item.id : primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem()) ? `${this.panelId}_${this.focusedItem().key}` : undefined;
  }
  ngOnChanges(changes) {
    if (changes && changes.items && changes.items.currentValue) {
      this.processedItems.set(this.createProcessedItems(changes.items.currentValue || []));
    }
  }
  getItemProp(processedItem, name) {
    return processedItem && processedItem.item ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getItemValue(processedItem.item[name]) : undefined;
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, 'label');
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, 'visible') !== false;
  }
  isItemDisabled(processedItem) {
    return this.getItemProp(processedItem, 'disabled');
  }
  isItemActive(processedItem) {
    return this.activeItemPath().some(path => path.key === processedItem.parentKey);
  }
  isItemGroup(processedItem) {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(processedItem.items);
  }
  isElementInPanel(event, element) {
    const panel = event.currentTarget.closest('[data-pc-section="panel"]');
    return panel && panel.contains(element);
  }
  isItemMatched(processedItem) {
    return this.isValidItem(processedItem) && this.getItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
  }
  isVisibleItem(processedItem) {
    return !!processedItem && (processedItem.level === 0 || this.isItemActive(processedItem)) && this.isItemVisible(processedItem);
  }
  isValidItem(processedItem) {
    return !!processedItem && !this.isItemDisabled(processedItem) && !processedItem.separator;
  }
  findFirstItem() {
    return this.visibleItems().find(processedItem => this.isValidItem(processedItem));
  }
  findLastItem() {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findLast(this.visibleItems(), processedItem => this.isValidItem(processedItem));
  }
  createProcessedItems(items, level = 0, parent = {}, parentKey = '') {
    const processedItems = [];
    items && items.forEach((item, index) => {
      const key = (parentKey !== '' ? parentKey + '_' : '') + index;
      const newItem = {
        icon: item.icon,
        expanded: item.expanded,
        separator: item.separator,
        item,
        index,
        level,
        key,
        parent,
        parentKey
      };
      newItem['items'] = this.createProcessedItems(item.items, level + 1, newItem, key);
      processedItems.push(newItem);
    });
    return processedItems;
  }
  findProcessedItemByItemKey(key, processedItems, level = 0) {
    processedItems = processedItems || this.processedItems();
    if (processedItems && processedItems.length) {
      for (let i = 0; i < processedItems.length; i++) {
        const processedItem = processedItems[i];
        if (this.getItemProp(processedItem, 'key') === key) return processedItem;
        const matchedItem = this.findProcessedItemByItemKey(key, processedItem.items, level + 1);
        if (matchedItem) return matchedItem;
      }
    }
  }
  flatItems(processedItems, processedFlattenItems = []) {
    processedItems && processedItems.forEach(processedItem => {
      if (this.isVisibleItem(processedItem)) {
        processedFlattenItems.push(processedItem);
        this.flatItems(processedItem.items, processedFlattenItems);
      }
    });
    return processedFlattenItems;
  }
  changeFocusedItem(event) {
    const {
      originalEvent,
      processedItem,
      focusOnNext,
      selfCheck,
      allowHeaderFocus = true
    } = event;
    if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem()) && this.focusedItem().key !== processedItem.key) {
      this.focusedItem.set(processedItem);
      this.scrollInView();
    } else if (allowHeaderFocus) {
      this.headerFocus.emit({
        originalEvent,
        focusOnNext,
        selfCheck
      });
    }
  }
  scrollInView() {
    const element = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.subMenuViewChild.listViewChild.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }
  onFocus(event) {
    this.focused = true;
    const focusedItem = this.focusedItem() || (this.isElementInPanel(event, event.relatedTarget) ? this.findFirstItem() : this.findLastItem());
    if (event.relatedTarget !== null) this.focusedItem.set(focusedItem);
  }
  onBlur(event) {
    this.focused = false;
    this.focusedItem.set(null);
    this.searchValue = '';
  }
  onItemToggle(event) {
    const {
      processedItem,
      expanded
    } = event;
    processedItem.expanded = !processedItem.expanded;
    const activeItemPath = this.activeItemPath().filter(p => p.parentKey !== processedItem.parentKey);
    expanded && activeItemPath.push(processedItem);
    this.activeItemPath.set(activeItemPath);
    this.processedItems.mutate(value => value.map(i => i === processedItem ? processedItem : i));
    this.focusedItem.set(processedItem);
  }
  onKeyDown(event) {
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case 'ArrowDown':
        this.onArrowDownKey(event);
        break;
      case 'ArrowUp':
        this.onArrowUpKey(event);
        break;
      case 'ArrowLeft':
        this.onArrowLeftKey(event);
        break;
      case 'ArrowRight':
        this.onArrowRightKey(event);
        break;
      case 'Home':
        this.onHomeKey(event);
        break;
      case 'End':
        this.onEndKey(event);
        break;
      case 'Space':
        this.onSpaceKey(event);
        break;
      case 'Enter':
        this.onEnterKey(event);
        break;
      case 'Escape':
      case 'Tab':
      case 'PageDown':
      case 'PageUp':
      case 'Backspace':
      case 'ShiftLeft':
      case 'ShiftRight':
        //NOOP
        break;
      default:
        if (!metaKey && primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isPrintableCharacter(event.key)) {
          this.searchItems(event, event.key);
        }
        break;
    }
  }
  onArrowDownKey(event) {
    const processedItem = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem()) ? this.findNextItem(this.focusedItem()) : this.findFirstItem();
    this.changeFocusedItem({
      originalEvent: event,
      processedItem,
      focusOnNext: true
    });
    event.preventDefault();
  }
  onArrowUpKey(event) {
    const processedItem = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem()) ? this.findPrevItem(this.focusedItem()) : this.findLastItem();
    this.changeFocusedItem({
      originalEvent: event,
      processedItem,
      selfCheck: true
    });
    event.preventDefault();
  }
  onArrowLeftKey(event) {
    if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem())) {
      const matched = this.activeItemPath().some(p => p.key === this.focusedItem().key);
      if (matched) {
        const activeItemPath = this.activeItemPath().filter(p => p.key !== this.focusedItem().key);
        this.activeItemPath.set(activeItemPath);
      } else {
        const focusedItem = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem().parent) ? this.focusedItem().parent : this.focusedItem();
        this.focusedItem.set(focusedItem);
      }
      event.preventDefault();
    }
  }
  onArrowRightKey(event) {
    if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem())) {
      const grouped = this.isItemGroup(this.focusedItem());
      if (grouped) {
        const matched = this.activeItemPath().some(p => p.key === this.focusedItem().key);
        if (matched) {
          this.onArrowDownKey(event);
        } else {
          const activeItemPath = this.activeItemPath().filter(p => p.parentKey !== this.focusedItem().parentKey);
          activeItemPath.push(this.focusedItem());
          this.activeItemPath.set(activeItemPath);
        }
      }
      event.preventDefault();
    }
  }
  onHomeKey(event) {
    this.changeFocusedItem({
      originalEvent: event,
      processedItem: this.findFirstItem(),
      allowHeaderFocus: false
    });
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedItem({
      originalEvent: event,
      processedItem: this.findLastItem(),
      focusOnNext: true,
      allowHeaderFocus: false
    });
    event.preventDefault();
  }
  onEnterKey(event) {
    if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem())) {
      const element = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.subMenuViewChild.listViewChild.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
      const anchorElement = element && (primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(element, '[data-pc-section="action"]') || primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(element, 'a,button'));
      anchorElement ? anchorElement.click() : element && element.click();
    }
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  findNextItem(processedItem) {
    const index = this.visibleItems().findIndex(item => item.key === processedItem.key);
    const matchedItem = index < this.visibleItems().length - 1 ? this.visibleItems().slice(index + 1).find(pItem => this.isValidItem(pItem)) : undefined;
    return matchedItem || processedItem;
  }
  findPrevItem(processedItem) {
    const index = this.visibleItems().findIndex(item => item.key === processedItem.key);
    const matchedItem = index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findLast(this.visibleItems().slice(0, index), pItem => this.isValidItem(pItem)) : undefined;
    return matchedItem || processedItem;
  }
  searchItems(event, char) {
    this.searchValue = (this.searchValue || '') + char;
    let matchedItem = null;
    let matched = false;
    if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem())) {
      const focusedItemIndex = this.visibleItems().findIndex(processedItem => processedItem.key === this.focusedItem().key);
      matchedItem = this.visibleItems().slice(focusedItemIndex).find(processedItem => this.isItemMatched(processedItem));
      matchedItem = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isEmpty(matchedItem) ? this.visibleItems().slice(0, focusedItemIndex).find(processedItem => this.isItemMatched(processedItem)) : matchedItem;
    } else {
      matchedItem = this.visibleItems().find(processedItem => this.isItemMatched(processedItem));
    }
    if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(matchedItem)) {
      matched = true;
    }
    if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isEmpty(matchedItem) && primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isEmpty(this.focusedItem())) {
      matchedItem = this.findFirstItem();
    }
    if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(matchedItem)) {
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: matchedItem,
        allowHeaderFocus: false
      });
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = '';
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  static ɵfac = function PanelMenuList_Factory(t) {
    return new (t || PanelMenuList)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PanelMenuList,
    selectors: [["p-panelMenuList"]],
    viewQuery: function PanelMenuList_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.subMenuViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      panelId: "panelId",
      id: "id",
      items: "items",
      itemTemplate: "itemTemplate",
      parentExpanded: "parentExpanded",
      expanded: "expanded",
      transitionOptions: "transitionOptions",
      root: "root",
      tabindex: "tabindex",
      activeItem: "activeItem"
    },
    outputs: {
      itemToggle: "itemToggle",
      headerFocus: "headerFocus"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 2,
    vars: 10,
    consts: [[3, "root", "id", "panelId", "tabindex", "itemTemplate", "focusedItemId", "activeItemPath", "transitionOptions", "items", "parentExpanded", "itemToggle", "keydown", "menuFocus", "menuBlur"], ["submenu", ""]],
    template: function PanelMenuList_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-panelMenuSub", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemToggle", function PanelMenuList_Template_p_panelMenuSub_itemToggle_0_listener($event) {
          return ctx.onItemToggle($event);
        })("keydown", function PanelMenuList_Template_p_panelMenuSub_keydown_0_listener($event) {
          return ctx.onKeyDown($event);
        })("menuFocus", function PanelMenuList_Template_p_panelMenuSub_menuFocus_0_listener($event) {
          return ctx.onFocus($event);
        })("menuBlur", function PanelMenuList_Template_p_panelMenuSub_menuBlur_0_listener($event) {
          return ctx.onBlur($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("root", true)("id", ctx.panelId + "_list")("panelId", ctx.panelId)("tabindex", ctx.tabindex)("itemTemplate", ctx.itemTemplate)("focusedItemId", ctx.focused ? ctx.focusedItemId : undefined)("activeItemPath", ctx.activeItemPath())("transitionOptions", ctx.transitionOptions)("items", ctx.processedItems())("parentExpanded", ctx.parentExpanded);
      }
    },
    dependencies: [PanelMenuSub],
    styles: ["@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelMenuList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-panelMenuList',
      template: `
        <p-panelMenuSub
            #submenu
            [root]="true"
            [id]="panelId + '_list'"
            [panelId]="panelId"
            [tabindex]="tabindex"
            [itemTemplate]="itemTemplate"
            [focusedItemId]="focused ? focusedItemId : undefined"
            [activeItemPath]="activeItemPath()"
            [transitionOptions]="transitionOptions"
            [items]="processedItems()"
            [parentExpanded]="parentExpanded"
            (itemToggle)="onItemToggle($event)"
            (keydown)="onKeyDown($event)"
            (menuFocus)="onFocus($event)"
            (menuBlur)="onBlur($event)"
        ></p-panelMenuSub>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n"]
    }]
  }], null, {
    panelId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    parentExpanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    transitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    root: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    headerFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    subMenuViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['submenu']
    }]
  });
})();
/**
 * PanelMenu is a hybrid of Accordion and Tree components.
 * @group Components
 */
class PanelMenu {
  cd;
  /**
   * An array of menuitems.
   * @group Props
   */
  model;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Whether multiple tabs can be activated at the same time or not.
   * @group Props
   */
  multiple = false;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  templates;
  containerViewChild;
  submenuIconTemplate;
  itemTemplate;
  animating;
  activeItem = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
  ngOnInit() {
    this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)();
  }
  ngAfterContentInit() {
    this.templates?.forEach(item => {
      switch (item.getType()) {
        case 'submenuicon':
          this.submenuIconTemplate = item.template;
          break;
        case 'item':
          this.itemTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  constructor(cd) {
    this.cd = cd;
  }
  /**
   * Collapses open panels.
   * @group Method
   */
  collapseAll() {
    for (let item of this.model) {
      if (item.expanded) {
        item.expanded = false;
      }
    }
    this.cd.detectChanges();
  }
  onToggleDone() {
    this.animating = false;
  }
  changeActiveItem(event, item, index, selfActive = false) {
    if (!this.isItemDisabled(item)) {
      const activeItem = selfActive ? item : this.activeItem && primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.equals(item, this.activeItem) ? null : item;
      this.activeItem.set(activeItem);
    }
  }
  getAnimation(item) {
    return item.expanded ? {
      value: 'visible',
      params: {
        transitionParams: this.animating ? this.transitionOptions : '0ms',
        height: '*'
      }
    } : {
      value: 'hidden',
      params: {
        transitionParams: this.transitionOptions,
        height: '0'
      }
    };
  }
  getItemProp(item, name) {
    return item ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getItemValue(item[name]) : undefined;
  }
  getItemLabel(item) {
    return this.getItemProp(item, 'label');
  }
  isItemActive(item) {
    return item.expanded;
  }
  isItemVisible(item) {
    return this.getItemProp(item, 'visible') !== false;
  }
  isItemDisabled(item) {
    return this.getItemProp(item, 'disabled');
  }
  isItemGroup(item) {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(item.items);
  }
  getPanelId(index, item) {
    return item && item.id ? item.id : `${this.id}_${index}`;
  }
  getHeaderId(item, index) {
    return item.id ? item.id + '_header' : `${this.getPanelId(index)}_header`;
  }
  getContentId(item, index) {
    return item.id ? item.id + '_content' : `${this.getPanelId(index)}_content`;
  }
  updateFocusedHeader(event) {
    const {
      originalEvent,
      focusOnNext,
      selfCheck
    } = event;
    const panelElement = originalEvent.currentTarget.closest('[data-pc-section="panel"]');
    const header = selfCheck ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(panelElement, '[data-pc-section="header"]') : focusOnNext ? this.findNextHeader(panelElement) : this.findPrevHeader(panelElement);
    header ? this.changeFocusedHeader(originalEvent, header) : focusOnNext ? this.onHeaderHomeKey(originalEvent) : this.onHeaderEndKey(originalEvent);
  }
  changeFocusedHeader(event, element) {
    element && primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(element);
  }
  findNextHeader(panelElement, selfCheck = false) {
    const nextPanelElement = selfCheck ? panelElement : panelElement.nextElementSibling;
    const headerElement = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(nextPanelElement, '[data-pc-section="header"]');
    return headerElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getAttribute(headerElement, 'data-p-disabled') ? this.findNextHeader(headerElement.parentElement) : headerElement : null;
  }
  findPrevHeader(panelElement, selfCheck = false) {
    const prevPanelElement = selfCheck ? panelElement : panelElement.previousElementSibling;
    const headerElement = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(prevPanelElement, '[data-pc-section="header"]');
    return headerElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getAttribute(headerElement, 'data-p-disabled') ? this.findPrevHeader(headerElement.parentElement) : headerElement : null;
  }
  findFirstHeader() {
    return this.findNextHeader(this.containerViewChild.nativeElement.firstElementChild, true);
  }
  findLastHeader() {
    return this.findPrevHeader(this.containerViewChild.nativeElement.lastElementChild, true);
  }
  onHeaderClick(event, item, index) {
    if (this.isItemDisabled(item)) {
      event.preventDefault();
      return;
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    if (!this.multiple) {
      for (let modelItem of this.model) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
    this.changeActiveItem(event, item, index);
    this.animating = true;
    primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(event.currentTarget);
  }
  onHeaderKeyDown(event, item, index) {
    switch (event.code) {
      case 'ArrowDown':
        this.onHeaderArrowDownKey(event);
        break;
      case 'ArrowUp':
        this.onHeaderArrowUpKey(event);
        break;
      case 'Home':
        this.onHeaderHomeKey(event);
        break;
      case 'End':
        this.onHeaderEndKey(event);
        break;
      case 'Enter':
      case 'Space':
        this.onHeaderEnterKey(event, item, index);
        break;
      default:
        break;
    }
  }
  onHeaderArrowDownKey(event) {
    const rootList = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getAttribute(event.currentTarget, 'data-p-highlight') === true ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(event.currentTarget.nextElementSibling, '[data-pc-section="menu"]') : null;
    rootList ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(rootList) : this.updateFocusedHeader({
      originalEvent: event,
      focusOnNext: true
    });
    event.preventDefault();
  }
  onHeaderArrowUpKey(event) {
    const prevHeader = this.findPrevHeader(event.currentTarget.parentElement) || this.findLastHeader();
    const rootList = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getAttribute(prevHeader, 'data-p-highlight') === true ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(prevHeader.nextElementSibling, '[data-pc-section="menu"]') : null;
    rootList ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(rootList) : this.updateFocusedHeader({
      originalEvent: event,
      focusOnNext: false
    });
    event.preventDefault();
  }
  onHeaderHomeKey(event) {
    this.changeFocusedHeader(event, this.findFirstHeader());
    event.preventDefault();
  }
  onHeaderEndKey(event) {
    this.changeFocusedHeader(event, this.findLastHeader());
    event.preventDefault();
  }
  onHeaderEnterKey(event, item, index) {
    const headerAction = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(event.currentTarget, '[data-pc-section="headeraction"]');
    headerAction ? headerAction.click() : this.onHeaderClick(event, item, index);
    event.preventDefault();
  }
  static ɵfac = function PanelMenu_Factory(t) {
    return new (t || PanelMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PanelMenu,
    selectors: [["p-panelMenu"]],
    contentQueries: function PanelMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function PanelMenu_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      model: "model",
      style: "style",
      styleClass: "styleClass",
      multiple: "multiple",
      transitionOptions: "transitionOptions",
      id: "id",
      tabindex: "tabindex"
    },
    decls: 3,
    vars: 5,
    consts: [[3, "ngStyle", "ngClass"], ["container", ""], [4, "ngFor", "ngForOf"], ["class", "p-panelmenu-panel", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "p-panelmenu-panel", 3, "ngClass", "ngStyle"], ["role", "button", 3, "ngClass", "ngStyle", "pTooltip", "tabindex", "tooltipOptions", "click", "keydown"], [1, "p-panelmenu-header-content"], ["class", "p-panelmenu-header-action", 3, "target", 4, "ngIf"], ["class", "p-panelmenu-header-action", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["class", "p-toggleable-content", "role", "region", 3, "ngClass", 4, "ngIf"], [1, "p-panelmenu-header-action", 3, "target"], [4, "ngIf"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [1, "p-panelmenu-header-action", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["htmlRouteLabel", ""], ["role", "region", 1, "p-toggleable-content", 3, "ngClass"], [1, "p-panelmenu-content"], [3, "panelId", "items", "itemTemplate", "transitionOptions", "root", "activeItem", "tabindex", "parentExpanded", "headerFocus"]],
    template: function PanelMenu_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenu_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", "p-panelmenu p-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.model);
      }
    },
    dependencies: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_11__.ChevronRightIcon, PanelMenuList];
    },
    styles: [_c9],
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('rootItem', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        height: '0'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(0))])]
    },
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelMenu, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-panelMenu',
      template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-panelmenu p-component'" #container>
            <ng-container *ngFor="let item of model; let f = first; let l = last; let i = index">
                <div *ngIf="isItemVisible(item)" class="p-panelmenu-panel" [ngClass]="getItemProp(item, 'headerClass')" [ngStyle]="getItemProp(item, 'style')" [attr.data-pc-section]="'panel'">
                    <div
                        [ngClass]="{ 'p-component p-panelmenu-header': true, 'p-highlight': isItemActive(item), 'p-disabled': isItemDisabled(item) }"
                        [class]="getItemProp(item, 'styleClass')"
                        [ngStyle]="getItemProp(item, 'style')"
                        [pTooltip]="getItemProp(item, 'tooltip')"
                        [attr.id]="getHeaderId(item, i)"
                        [tabindex]="0"
                        role="button"
                        [tooltipOptions]="getItemProp(item, 'tooltipOptions')"
                        [attr.aria-expanded]="isItemActive(item)"
                        [attr.aria-label]="getItemProp(item, 'label')"
                        [attr.aria-controls]="getContentId(item, i)"
                        [attr.aria-disabled]="isItemDisabled(item)"
                        [attr.data-p-highlight]="isItemActive(item)"
                        [attr.data-p-disabled]="isItemDisabled(item)"
                        [attr.data-pc-section]="'header'"
                        (click)="onHeaderClick($event, item, i)"
                        (keydown)="onHeaderKeyDown($event, item, i)"
                    >
                        <div class="p-panelmenu-header-content">
                            <a
                                *ngIf="!getItemProp(item, 'routerLink')"
                                [attr.href]="getItemProp(item, 'url')"
                                [attr.tabindex]="-1"
                                [target]="getItemProp(item, 'target')"
                                [attr.title]="getItemProp(item, 'title')"
                                class="p-panelmenu-header-action"
                                [attr.data-pc-section]="'headeraction'"
                            >
                                <ng-container *ngIf="isItemGroup(item)">
                                    <ng-container *ngIf="!submenuIconTemplate">
                                        <ChevronDownIcon [styleClass]="'p-submenu-icon'" *ngIf="isItemActive(item)" />
                                        <ChevronRightIcon [styleClass]="'p-submenu-icon'" *ngIf="!isItemActive(item)" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="submenuIconTemplate"></ng-template>
                                </ng-container>
                                <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon" [ngStyle]="getItemProp(item, 'iconStyle')"></span>
                                <span class="p-menuitem-text" *ngIf="getItemProp(item, 'escape') !== false; else htmlLabel">{{ getItemProp(item, 'label') }}</span>
                                <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(item, 'label')"></span></ng-template>
                                <span class="p-menuitem-badge" *ngIf="getItemProp(item, 'badge')" [ngClass]="getItemProp(item, 'badgeStyleClass')">{{ getItemProp(item, 'badge') }}</span>
                            </a>
                            <a
                                *ngIf="getItemProp(item, 'routerLink')"
                                [routerLink]="getItemProp(item, 'routerLink')"
                                [queryParams]="getItemProp(item, 'queryParams')"
                                [routerLinkActive]="'p-menuitem-link-active'"
                                [routerLinkActiveOptions]="getItemProp(item, 'routerLinkActiveOptions') || { exact: false }"
                                [target]="getItemProp(item, 'target')"
                                class="p-panelmenu-header-action"
                                [attr.tabindex]="-1"
                                [fragment]="getItemProp(item, 'fragment')"
                                [queryParamsHandling]="getItemProp(item, 'queryParamsHandling')"
                                [preserveFragment]="getItemProp(item, 'preserveFragment')"
                                [skipLocationChange]="getItemProp(item, 'skipLocationChange')"
                                [replaceUrl]="getItemProp(item, 'replaceUrl')"
                                [state]="getItemProp(item, 'state')"
                                [attr.data-pc-section]="'headeraction'"
                            >
                                <ng-container *ngIf="isItemGroup(item)">
                                    <ng-container *ngIf="!submenuIconTemplate">
                                        <ChevronDownIcon [styleClass]="'p-submenu-icon'" *ngIf="isItemActive(item)" />
                                        <ChevronRightIcon [styleClass]="'p-submenu-icon'" *ngIf="!isItemActive(item)" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="submenuIconTemplate"></ng-template>
                                </ng-container>
                                <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon" [ngStyle]="getItemProp(item, 'iconStyle')"></span>
                                <span class="p-menuitem-text" *ngIf="getItemProp(item, 'escape') !== false; else htmlRouteLabel">{{ getItemProp(item, 'label') }}</span>
                                <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(item, 'label')"></span></ng-template>
                                <span class="p-menuitem-badge" *ngIf="getItemProp(item, 'badge')" [ngClass]="getItemProp(item, 'badgeStyleClass')">{{ getItemProp(item, 'badge') }}</span>
                            </a>
                        </div>
                    </div>
                    <div
                        *ngIf="isItemGroup(item)"
                        class="p-toggleable-content"
                        [ngClass]="{ 'p-panelmenu-expanded': isItemActive(item) }"
                        [@rootItem]="getAnimation(item)"
                        (@rootItem.done)="onToggleDone()"
                        role="region"
                        [attr.id]="getContentId(item, i)"
                        [attr.aria-labelledby]="getHeaderId(item, i)"
                        [attr.data-pc-section]="'toggleablecontent'"
                    >
                        <div class="p-panelmenu-content" [attr.data-pc-section]="'menucontent'">
                            <p-panelMenuList
                                [panelId]="getPanelId(i, item)"
                                [items]="getItemProp(item, 'items')"
                                [itemTemplate]="itemTemplate"
                                [transitionOptions]="transitionOptions"
                                [root]="true"
                                [activeItem]="activeItem()"
                                [tabindex]="tabindex"
                                [parentExpanded]="isItemActive(item)"
                                (headerFocus)="updateFocusedHeader($event)"
                            ></p-panelMenuList>
                        </div>
                    </div>
                </div>
            </ng-container>
        </div>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('rootItem', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        height: '0'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(0))])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    transitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate]
    }],
    containerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['container']
    }]
  });
})();
class PanelMenuModule {
  static ɵfac = function PanelMenuModule_Factory(t) {
    return new (t || PanelMenuModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: PanelMenuModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_9__.SharedModule, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_5__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_6__.AngleRightIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_11__.ChevronRightIcon, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_9__.SharedModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelMenuModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_9__.SharedModule, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_5__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_6__.AngleRightIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_11__.ChevronRightIcon],
      exports: [PanelMenu, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_9__.SharedModule],
      declarations: [PanelMenu, PanelMenuSub, PanelMenuList]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4935:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-tooltip.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tooltip: () => (/* binding */ Tooltip),
/* harmony export */   TooltipModule: () => (/* binding */ TooltipModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ 5163);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/utils */ 13432);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 55397);







/**
 * Tooltip directive provides advisory information for a component.
 * @group Components
 */
class Tooltip {
  platformId;
  el;
  zone;
  config;
  renderer;
  viewContainer;
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition;
  /**
   * Event to show the tooltip.
   * @group Props
   */
  tooltipEvent = 'hover';
  /**
   *  Target element to attach the overlay, valid values are "body", "target" or a local ng-F variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Type of CSS position.
   * @group Props
   */
  positionStyle;
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Whether the z-index should be managed automatically to always go on top or have a fixed value.
   * @group Props
   */
  tooltipZIndex;
  /**
   * By default the tooltip contents are rendered as text. Set to false to support html tags in the content.
   * @group Props
   */
  escape = true;
  /**
   * Delay to show the tooltip in milliseconds.
   * @group Props
   */
  showDelay;
  /**
   * Delay to hide the tooltip in milliseconds.
   * @group Props
   */
  hideDelay;
  /**
   * Time to wait in milliseconds to hide the tooltip even it is active.
   * @group Props
   */
  life;
  /**
   * Specifies the additional vertical offset of the tooltip from its default position.
   * @group Props
   */
  positionTop;
  /**
   * Specifies the additional horizontal offset of the tooltip from its default position.
   * @group Props
   */
  positionLeft;
  /**
   * Whether to hide tooltip when hovering over tooltip content.
   * @group Props
   */
  autoHide = true;
  /**
   * Automatically adjusts the element position when there is not enough space on the selected position.
   * @group Props
   */
  fitContent = true;
  /**
   * Whether to hide tooltip on escape key press.
   * @group Props
   */
  hideOnEscape = true;
  /**
   * Content of the tooltip.
   * @group Props
   */
  content;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
    this.deactivate();
  }
  /**
   * Specifies the tooltip configuration options for the component.
   * @group Props
   */
  tooltipOptions;
  _tooltipOptions = {
    tooltipLabel: null,
    tooltipPosition: 'right',
    tooltipEvent: 'hover',
    appendTo: 'body',
    positionStyle: null,
    tooltipStyleClass: null,
    tooltipZIndex: 'auto',
    escape: true,
    disabled: null,
    showDelay: null,
    hideDelay: null,
    positionTop: null,
    positionLeft: null,
    life: null,
    autoHide: true,
    hideOnEscape: true,
    id: (0,primeng_utils__WEBPACK_IMPORTED_MODULE_0__.UniqueComponentId)() + '_tooltip'
  };
  _disabled;
  container;
  styleClass;
  tooltipText;
  showTimeout;
  hideTimeout;
  active;
  mouseEnterListener;
  mouseLeaveListener;
  containerMouseleaveListener;
  clickListener;
  focusListener;
  blurListener;
  scrollHandler;
  resizeListener;
  constructor(platformId, el, zone, config, renderer, viewContainer) {
    this.platformId = platformId;
    this.el = el;
    this.zone = zone;
    this.config = config;
    this.renderer = renderer;
    this.viewContainer = viewContainer;
  }
  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        if (this.getOption('tooltipEvent') === 'hover') {
          this.mouseEnterListener = this.onMouseEnter.bind(this);
          this.mouseLeaveListener = this.onMouseLeave.bind(this);
          this.clickListener = this.onInputClick.bind(this);
          this.el.nativeElement.addEventListener('mouseenter', this.mouseEnterListener);
          this.el.nativeElement.addEventListener('click', this.clickListener);
          this.el.nativeElement.addEventListener('mouseleave', this.mouseLeaveListener);
        } else if (this.getOption('tooltipEvent') === 'focus') {
          this.focusListener = this.onFocus.bind(this);
          this.blurListener = this.onBlur.bind(this);
          let target = this.getTarget(this.el.nativeElement);
          target.addEventListener('focus', this.focusListener);
          target.addEventListener('blur', this.blurListener);
        }
      });
    }
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.tooltipPosition) {
      this.setOption({
        tooltipPosition: simpleChange.tooltipPosition.currentValue
      });
    }
    if (simpleChange.tooltipEvent) {
      this.setOption({
        tooltipEvent: simpleChange.tooltipEvent.currentValue
      });
    }
    if (simpleChange.appendTo) {
      this.setOption({
        appendTo: simpleChange.appendTo.currentValue
      });
    }
    if (simpleChange.positionStyle) {
      this.setOption({
        positionStyle: simpleChange.positionStyle.currentValue
      });
    }
    if (simpleChange.tooltipStyleClass) {
      this.setOption({
        tooltipStyleClass: simpleChange.tooltipStyleClass.currentValue
      });
    }
    if (simpleChange.tooltipZIndex) {
      this.setOption({
        tooltipZIndex: simpleChange.tooltipZIndex.currentValue
      });
    }
    if (simpleChange.escape) {
      this.setOption({
        escape: simpleChange.escape.currentValue
      });
    }
    if (simpleChange.showDelay) {
      this.setOption({
        showDelay: simpleChange.showDelay.currentValue
      });
    }
    if (simpleChange.hideDelay) {
      this.setOption({
        hideDelay: simpleChange.hideDelay.currentValue
      });
    }
    if (simpleChange.life) {
      this.setOption({
        life: simpleChange.life.currentValue
      });
    }
    if (simpleChange.positionTop) {
      this.setOption({
        positionTop: simpleChange.positionTop.currentValue
      });
    }
    if (simpleChange.positionLeft) {
      this.setOption({
        positionLeft: simpleChange.positionLeft.currentValue
      });
    }
    if (simpleChange.disabled) {
      this.setOption({
        disabled: simpleChange.disabled.currentValue
      });
    }
    if (simpleChange.content) {
      this.setOption({
        tooltipLabel: simpleChange.content.currentValue
      });
      if (this.active) {
        if (simpleChange.content.currentValue) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
    if (simpleChange.autoHide) {
      this.setOption({
        autoHide: simpleChange.autoHide.currentValue
      });
    }
    if (simpleChange.id) {
      this.setOption({
        id: simpleChange.id.currentValue
      });
    }
    if (simpleChange.tooltipOptions) {
      this._tooltipOptions = {
        ...this._tooltipOptions,
        ...simpleChange.tooltipOptions.currentValue
      };
      this.deactivate();
      if (this.active) {
        if (this.getOption('tooltipLabel')) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
  }
  isAutoHide() {
    return this.getOption('autoHide');
  }
  onMouseEnter(e) {
    if (!this.container && !this.showTimeout) {
      this.activate();
    }
  }
  onMouseLeave(e) {
    if (!this.isAutoHide()) {
      const valid = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(e.relatedTarget, 'p-tooltip') || primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(e.relatedTarget, 'p-tooltip-text') || primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(e.relatedTarget, 'p-tooltip-arrow');
      !valid && this.deactivate();
    } else {
      this.deactivate();
    }
  }
  onFocus(e) {
    this.activate();
  }
  onBlur(e) {
    this.deactivate();
  }
  onInputClick(e) {
    this.deactivate();
  }
  onPressEscape() {
    if (this.hideOnEscape) {
      this.deactivate();
    }
  }
  activate() {
    this.active = true;
    this.clearHideTimeout();
    if (this.getOption('showDelay')) this.showTimeout = setTimeout(() => {
      this.show();
    }, this.getOption('showDelay'));else this.show();
    if (this.getOption('life')) {
      let duration = this.getOption('showDelay') ? this.getOption('life') + this.getOption('showDelay') : this.getOption('life');
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, duration);
    }
  }
  deactivate() {
    this.active = false;
    this.clearShowTimeout();
    if (this.getOption('hideDelay')) {
      this.clearHideTimeout(); //life timeout
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, this.getOption('hideDelay'));
    } else {
      this.hide();
    }
  }
  create() {
    if (this.container) {
      this.clearHideTimeout();
      this.remove();
    }
    this.container = document.createElement('div');
    this.container.setAttribute('id', this.getOption('id'));
    this.container.setAttribute('role', 'tooltip');
    let tooltipArrow = document.createElement('div');
    tooltipArrow.className = 'p-tooltip-arrow';
    this.container.appendChild(tooltipArrow);
    this.tooltipText = document.createElement('div');
    this.tooltipText.className = 'p-tooltip-text';
    this.updateText();
    if (this.getOption('positionStyle')) {
      this.container.style.position = this.getOption('positionStyle');
    }
    this.container.appendChild(this.tooltipText);
    if (this.getOption('appendTo') === 'body') document.body.appendChild(this.container);else if (this.getOption('appendTo') === 'target') primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.appendChild(this.container, this.el.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.appendChild(this.container, this.getOption('appendTo'));
    this.container.style.display = 'inline-block';
    if (this.fitContent) {
      this.container.style.width = 'fit-content';
    }
    if (this.isAutoHide()) {
      this.container.style.pointerEvents = 'none';
    } else {
      this.container.style.pointerEvents = 'unset';
      this.bindContainerMouseleaveListener();
    }
  }
  bindContainerMouseleaveListener() {
    if (!this.containerMouseleaveListener) {
      const targetEl = this.container ?? this.container.nativeElement;
      this.containerMouseleaveListener = this.renderer.listen(targetEl, 'mouseleave', e => {
        this.deactivate();
      });
    }
  }
  unbindContainerMouseleaveListener() {
    if (this.containerMouseleaveListener) {
      this.bindContainerMouseleaveListener();
      this.containerMouseleaveListener = null;
    }
  }
  show() {
    if (!this.getOption('tooltipLabel') || this.getOption('disabled')) {
      return;
    }
    this.create();
    this.align();
    primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.fadeIn(this.container, 250);
    if (this.getOption('tooltipZIndex') === 'auto') primeng_utils__WEBPACK_IMPORTED_MODULE_0__.ZIndexUtils.set('tooltip', this.container, this.config.zIndex.tooltip);else this.container.style.zIndex = this.getOption('tooltipZIndex');
    this.bindDocumentResizeListener();
    this.bindScrollListener();
  }
  hide() {
    if (this.getOption('tooltipZIndex') === 'auto') {
      primeng_utils__WEBPACK_IMPORTED_MODULE_0__.ZIndexUtils.clear(this.container);
    }
    this.remove();
  }
  updateText() {
    const content = this.getOption('tooltipLabel');
    if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef) {
      const embeddedViewRef = this.viewContainer.createEmbeddedView(content);
      embeddedViewRef.detectChanges();
      embeddedViewRef.rootNodes.forEach(node => this.tooltipText.appendChild(node));
    } else if (this.getOption('escape')) {
      this.tooltipText.innerHTML = '';
      this.tooltipText.appendChild(document.createTextNode(content));
    } else {
      this.tooltipText.innerHTML = content;
    }
  }
  align() {
    let position = this.getOption('tooltipPosition');
    switch (position) {
      case 'top':
        this.alignTop();
        if (this.isOutOfBounds()) {
          this.alignBottom();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case 'bottom':
        this.alignBottom();
        if (this.isOutOfBounds()) {
          this.alignTop();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case 'left':
        this.alignLeft();
        if (this.isOutOfBounds()) {
          this.alignRight();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
      case 'right':
        this.alignRight();
        if (this.isOutOfBounds()) {
          this.alignLeft();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
    }
  }
  getHostOffset() {
    if (this.getOption('appendTo') === 'body' || this.getOption('appendTo') === 'target') {
      let offset = this.el.nativeElement.getBoundingClientRect();
      let targetLeft = offset.left + primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWindowScrollLeft();
      let targetTop = offset.top + primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWindowScrollTop();
      return {
        left: targetLeft,
        top: targetTop
      };
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  alignRight() {
    this.preAlign('right');
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(this.el.nativeElement);
    let top = hostOffset.top + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption('positionLeft') + 'px';
    this.container.style.top = top + this.getOption('positionTop') + 'px';
  }
  alignLeft() {
    this.preAlign('left');
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left - primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(this.container);
    let top = hostOffset.top + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption('positionLeft') + 'px';
    this.container.style.top = top + this.getOption('positionTop') + 'px';
  }
  alignTop() {
    this.preAlign('top');
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top - primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.container);
    this.container.style.left = left + this.getOption('positionLeft') + 'px';
    this.container.style.top = top + this.getOption('positionTop') + 'px';
  }
  alignBottom() {
    this.preAlign('bottom');
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top + primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.el.nativeElement);
    this.container.style.left = left + this.getOption('positionLeft') + 'px';
    this.container.style.top = top + this.getOption('positionTop') + 'px';
  }
  setOption(option) {
    this._tooltipOptions = {
      ...this._tooltipOptions,
      ...option
    };
  }
  getOption(option) {
    return this._tooltipOptions[option];
  }
  getTarget(el) {
    return primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(el, 'p-inputwrapper') ? primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(el, 'input') : el;
  }
  preAlign(position) {
    this.container.style.left = -999 + 'px';
    this.container.style.top = -999 + 'px';
    let defaultClassName = 'p-tooltip p-component p-tooltip-' + position;
    this.container.className = this.getOption('tooltipStyleClass') ? defaultClassName + ' ' + this.getOption('tooltipStyleClass') : defaultClassName;
  }
  isOutOfBounds() {
    let offset = this.container.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(this.container);
    let height = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.container);
    let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getViewport();
    return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
  }
  onWindowResize(e) {
    this.hide();
  }
  bindDocumentResizeListener() {
    this.zone.runOutsideAngular(() => {
      this.resizeListener = this.onWindowResize.bind(this);
      window.addEventListener('resize', this.resizeListener);
    });
  }
  unbindDocumentResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
      this.resizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_2__.ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (this.container) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindEvents() {
    if (this.getOption('tooltipEvent') === 'hover') {
      this.el.nativeElement.removeEventListener('mouseenter', this.mouseEnterListener);
      this.el.nativeElement.removeEventListener('mouseleave', this.mouseLeaveListener);
      this.el.nativeElement.removeEventListener('click', this.clickListener);
    } else if (this.getOption('tooltipEvent') === 'focus') {
      let target = this.getTarget(this.el.nativeElement);
      target.removeEventListener('focus', this.focusListener);
      target.removeEventListener('blur', this.blurListener);
    }
    this.unbindDocumentResizeListener();
  }
  remove() {
    if (this.container && this.container.parentElement) {
      if (this.getOption('appendTo') === 'body') document.body.removeChild(this.container);else if (this.getOption('appendTo') === 'target') this.el.nativeElement.removeChild(this.container);else primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeChild(this.container, this.getOption('appendTo'));
    }
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.unbindContainerMouseleaveListener();
    this.clearTimeouts();
    this.container = null;
    this.scrollHandler = null;
  }
  clearShowTimeout() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }
  clearHideTimeout() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  clearTimeouts() {
    this.clearShowTimeout();
    this.clearHideTimeout();
  }
  ngOnDestroy() {
    this.unbindEvents();
    if (this.container) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_0__.ZIndexUtils.clear(this.container);
    }
    this.remove();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
  }
  static ɵfac = function Tooltip_Factory(t) {
    return new (t || Tooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef));
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: Tooltip,
    selectors: [["", "pTooltip", ""]],
    hostAttrs: [1, "p-element"],
    hostBindings: function Tooltip_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.escape", function Tooltip_keydown_escape_HostBindingHandler($event) {
          return ctx.onPressEscape($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
      }
    },
    inputs: {
      tooltipPosition: "tooltipPosition",
      tooltipEvent: "tooltipEvent",
      appendTo: "appendTo",
      positionStyle: "positionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      tooltipZIndex: "tooltipZIndex",
      escape: "escape",
      showDelay: "showDelay",
      hideDelay: "hideDelay",
      life: "life",
      positionTop: "positionTop",
      positionLeft: "positionLeft",
      autoHide: "autoHide",
      fitContent: "fitContent",
      hideOnEscape: "hideOnEscape",
      content: ["pTooltip", "content"],
      disabled: ["tooltipDisabled", "disabled"],
      tooltipOptions: "tooltipOptions"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Tooltip, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[pTooltip]',
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef
    }];
  }, {
    tooltipPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    tooltipEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    positionStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    tooltipStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    tooltipZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    escape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    showDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    hideDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    life: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    positionTop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    positionLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    autoHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    fitContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    hideOnEscape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['pTooltip']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['tooltipDisabled']
    }],
    tooltipOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    onPressEscape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['document:keydown.escape', ['$event']]
    }]
  });
})();
class TooltipModule {
  static ɵfac = function TooltipModule_Factory(t) {
    return new (t || TooltipModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: TooltipModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [Tooltip],
      declarations: [Tooltip]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=995.js.map