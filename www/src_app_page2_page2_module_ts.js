"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page2_page2_module_ts"],{

/***/ 5669:
/*!***********************************************!*\
  !*** ./src/app/page2/page2-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page2PageRoutingModule": () => (/* binding */ Page2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _page2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page2.page */ 3640);




const routes = [
    {
        path: '',
        component: _page2_page__WEBPACK_IMPORTED_MODULE_0__.Page2Page
    }
];
let Page2PageRoutingModule = class Page2PageRoutingModule {
};
Page2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Page2PageRoutingModule);



/***/ }),

/***/ 3320:
/*!***************************************!*\
  !*** ./src/app/page2/page2.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page2PageModule": () => (/* binding */ Page2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _page2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page2-routing.module */ 5669);
/* harmony import */ var _page2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2.page */ 3640);







let Page2PageModule = class Page2PageModule {
};
Page2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _page2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Page2PageRoutingModule
        ],
        declarations: [_page2_page__WEBPACK_IMPORTED_MODULE_1__.Page2Page]
    })
], Page2PageModule);



/***/ }),

/***/ 3640:
/*!*************************************!*\
  !*** ./src/app/page2/page2.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page2Page": () => (/* binding */ Page2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _page2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page2.page.html?ngResource */ 9792);
/* harmony import */ var _page2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2.page.scss?ngResource */ 770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let Page2Page = class Page2Page {
    constructor() { }
    ngOnInit() {
    }
};
Page2Page.ctorParameters = () => [];
Page2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-page2',
        template: _page2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_page2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Page2Page);



/***/ }),

/***/ 770:
/*!**************************************************!*\
  !*** ./src/app/page2/page2.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlMi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9792:
/*!**************************************************!*\
  !*** ./src/app/page2/page2.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n  </ion-buttons>\n    <ion-title>Page 2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page2_page2_module_ts.js.map