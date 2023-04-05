(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "724m":
/*!********************************************!*\
  !*** ./src/app/dao/entrega-dao.service.ts ***!
  \********************************************/
/*! exports provided: EntregaDaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregaDaoService", function() { return EntregaDaoService; });
/* harmony import */ var _dao_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dao-base.service */ "WScx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EntregaDaoService extends _dao_base_service__WEBPACK_IMPORTED_MODULE_0__["DaoBaseService"] {
    constructor(injector) {
        super("Entrega", injector);
        this.injector = injector;
        this.searchFields = ["nome"];
    }
}
EntregaDaoService.ɵfac = function EntregaDaoService_Factory(t) { return new (t || EntregaDaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
EntregaDaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EntregaDaoService, factory: EntregaDaoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Lsi6":
/*!****************************************************!*\
  !*** ./src/app/models/tipo-justificativa.model.ts ***!
  \****************************************************/
/*! exports provided: TipoJustificativa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoJustificativa", function() { return TipoJustificativa; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ "rBj3");

class TipoJustificativa extends _base_model__WEBPACK_IMPORTED_MODULE_0__["Base"] {
    constructor(data) {
        super();
        this.nome = ""; /* Descrição do tipo da justificativa */
        this.data_inicio = new Date(); /* Data de início */
        this.data_fim = null; /* Data do fim */
        this.initialization(data);
    }
}


/***/ }),

/***/ "M+Kp":
/*!**************************************************!*\
  !*** ./src/app/dao/eixo-tematico-dao.service.ts ***!
  \**************************************************/
/*! exports provided: EixoTematicoDaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EixoTematicoDaoService", function() { return EixoTematicoDaoService; });
/* harmony import */ var _dao_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dao-base.service */ "WScx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EixoTematicoDaoService extends _dao_base_service__WEBPACK_IMPORTED_MODULE_0__["DaoBaseService"] {
    constructor(injector) {
        super("EixoTematico", injector);
        this.injector = injector;
        this.searchFields = ["nome"];
    }
}
EixoTematicoDaoService.ɵfac = function EixoTematicoDaoService_Factory(t) { return new (t || EixoTematicoDaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
EixoTematicoDaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EixoTematicoDaoService, factory: EixoTematicoDaoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QUyP":
/*!*************************************************!*\
  !*** ./src/app/services/notificacao.service.ts ***!
  \*************************************************/
/*! exports provided: NotificacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacaoService", function() { return NotificacaoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotificacaoService {
    constructor() { }
    get hintDemandaDistribuicao() {
        return "Variáveis disponíveis:\n{{demanda_numero}}";
    }
    get hintDemandaConclusao() {
        return "Variáveis disponíveis:\n{{demanda_numero}}\n{{demanda_responsavel}}";
    }
    get hintDemandaAvaliacao() {
        return "Variáveis disponíveis:\n{{demanda_numero}}";
    }
    get hintDemandaModificacao() {
        return "Variáveis disponíveis:\n{{demanda_numero}}\n{{demanda_responsavel}}";
    }
    get hintDemandaComentario() {
        return "Variáveis disponíveis:\n{{demanda_numero}}\n{{demanda_responsavel}}";
    }
}
NotificacaoService.ɵfac = function NotificacaoService_Factory(t) { return new (t || NotificacaoService)(); };
NotificacaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificacaoService, factory: NotificacaoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lKXT":
/*!**************************************************!*\
  !*** ./src/app/dao/plano-entrega-dao.service.ts ***!
  \**************************************************/
/*! exports provided: PlanoEntregaDaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoEntregaDaoService", function() { return PlanoEntregaDaoService; });
/* harmony import */ var _dao_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dao-base.service */ "WScx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PlanoEntregaDaoService extends _dao_base_service__WEBPACK_IMPORTED_MODULE_0__["DaoBaseService"] {
    constructor(injector) {
        super("PlanoEntrega", injector);
        this.injector = injector;
    }
    needHomologate(plano) {
    }
}
PlanoEntregaDaoService.ɵfac = function PlanoEntregaDaoService_Factory(t) { return new (t || PlanoEntregaDaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
PlanoEntregaDaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlanoEntregaDaoService, factory: PlanoEntregaDaoService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map