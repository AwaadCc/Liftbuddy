"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_info_info_module_ts"],{

/***/ 2215:
/*!*********************************************!*\
  !*** ./src/app/info/info-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPageRoutingModule": () => (/* binding */ InfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.page */ 5726);




const routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_0__.InfoPage,
    }
];
let InfoPageRoutingModule = class InfoPageRoutingModule {
};
InfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], InfoPageRoutingModule);



/***/ }),

/***/ 3056:
/*!*************************************!*\
  !*** ./src/app/info/info.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPageModule": () => (/* binding */ InfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.page */ 5726);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _info_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-routing.module */ 2215);








let InfoPageModule = class InfoPageModule {
};
InfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _info_routing_module__WEBPACK_IMPORTED_MODULE_2__.InfoPageRoutingModule
        ],
        declarations: [_info_page__WEBPACK_IMPORTED_MODULE_0__.InfoPage]
    })
], InfoPageModule);



/***/ }),

/***/ 5726:
/*!***********************************!*\
  !*** ./src/app/info/info.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPage": () => (/* binding */ InfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.page.html?ngResource */ 1091);
/* harmony import */ var _info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.page.scss?ngResource */ 5285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let InfoPage = class InfoPage {
    constructor() { }
};
InfoPage.ctorParameters = () => [];
InfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-info',
        template: _info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InfoPage);



/***/ }),

/***/ 5285:
/*!************************************************!*\
  !*** ./src/app/info/info.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1091:
/*!************************************************!*\
  !*** ./src/app/info/info.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Info\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Info Page</ion-card-subtitle>\n    <ion-card-title>About Liftbuddy</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    As an avid fitness fan, creating an app to help keep track of my lifting journey was a fun idea.  This app was designed mainly for educational purposes and is very buggy so it is not meant for true consumer use as of yet. As I continue to work on it and make new versions, I might eventually release a true build that may even be published on the appstore!\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_info_info_module_ts.js.map