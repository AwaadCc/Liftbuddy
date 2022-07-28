"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_shoulders_shoulders_module_ts"],{

/***/ 8858:
/*!*******************************************************!*\
  !*** ./src/app/shoulders/shoulders-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShouldersPageRoutingModule": () => (/* binding */ ShouldersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shoulders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shoulders.page */ 4082);




const routes = [
    {
        path: '',
        component: _shoulders_page__WEBPACK_IMPORTED_MODULE_0__.ShouldersPage
    }
];
let ShouldersPageRoutingModule = class ShouldersPageRoutingModule {
};
ShouldersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShouldersPageRoutingModule);



/***/ }),

/***/ 9616:
/*!***********************************************!*\
  !*** ./src/app/shoulders/shoulders.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShouldersPageModule": () => (/* binding */ ShouldersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _shoulders_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shoulders-routing.module */ 8858);
/* harmony import */ var _shoulders_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shoulders.page */ 4082);








let ShouldersPageModule = class ShouldersPageModule {
};
ShouldersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
            _shoulders_routing_module__WEBPACK_IMPORTED_MODULE_1__.ShouldersPageRoutingModule
        ],
        declarations: [_shoulders_page__WEBPACK_IMPORTED_MODULE_2__.ShouldersPage]
    })
], ShouldersPageModule);



/***/ }),

/***/ 4082:
/*!*********************************************!*\
  !*** ./src/app/shoulders/shoulders.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShouldersPage": () => (/* binding */ ShouldersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _shoulders_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shoulders.page.html?ngResource */ 3784);
/* harmony import */ var _shoulders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shoulders.page.scss?ngResource */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 2407);






let ShouldersPage = class ShouldersPage {
    constructor(iab, dataService) {
        this.iab = iab;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.dataService.getShouldersData().subscribe(data => {
            this.shouldersList = data['selection1'];
        });
    }
    openBrowser(url) {
        const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');
    }
};
ShouldersPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
ShouldersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-shoulders',
        template: _shoulders_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_shoulders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShouldersPage);



/***/ }),

/***/ 8111:
/*!**********************************************************!*\
  !*** ./src/app/shoulders/shoulders.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG91bGRlcnMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 3784:
/*!**********************************************************!*\
  !*** ./src/app/shoulders/shoulders.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Shoulders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-searchbar [(ngModel)]=\"Filter\" spellcheck=\"true\" autocorrect=\"on\" showClearButton=\"true\" debounce=\"100\"></ion-searchbar>\n<ion-list inset=\"true\">\n  <ion-item button (click)=\"openBrowser(items.url)\" color=\"light\" *ngFor=\"let items of shouldersList | filter:Filter\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"{{items.image}}\">\n  </ion-thumbnail>\n  <ion-label>\n    {{items.name}}\n  </ion-label>\n</ion-item>\n</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_shoulders_shoulders_module_ts.js.map