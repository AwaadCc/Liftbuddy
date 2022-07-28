"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_legs_legs_module_ts"],{

/***/ 2780:
/*!*********************************************!*\
  !*** ./src/app/legs/legs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegsPageRoutingModule": () => (/* binding */ LegsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _legs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legs.page */ 9727);




const routes = [
    {
        path: '',
        component: _legs_page__WEBPACK_IMPORTED_MODULE_0__.LegsPage
    }
];
let LegsPageRoutingModule = class LegsPageRoutingModule {
};
LegsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LegsPageRoutingModule);



/***/ }),

/***/ 9237:
/*!*************************************!*\
  !*** ./src/app/legs/legs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegsPageModule": () => (/* binding */ LegsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _legs_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legs-routing.module */ 2780);
/* harmony import */ var _legs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legs.page */ 9727);








let LegsPageModule = class LegsPageModule {
};
LegsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
            _legs_routing_module__WEBPACK_IMPORTED_MODULE_1__.LegsPageRoutingModule
        ],
        declarations: [_legs_page__WEBPACK_IMPORTED_MODULE_2__.LegsPage]
    })
], LegsPageModule);



/***/ }),

/***/ 9727:
/*!***********************************!*\
  !*** ./src/app/legs/legs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegsPage": () => (/* binding */ LegsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _legs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legs.page.html?ngResource */ 943);
/* harmony import */ var _legs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legs.page.scss?ngResource */ 1370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 2407);






let LegsPage = class LegsPage {
    constructor(iab, dataService) {
        this.iab = iab;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.dataService.getLegsData().subscribe(data => {
            this.legsList = data['selection1'];
        });
    }
    openBrowser(url) {
        const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');
    }
};
LegsPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
LegsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-legs',
        template: _legs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_legs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LegsPage);



/***/ }),

/***/ 1370:
/*!************************************************!*\
  !*** ./src/app/legs/legs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWdzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 943:
/*!************************************************!*\
  !*** ./src/app/legs/legs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Legs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-searchbar [(ngModel)]=\"Filter\" spellcheck=\"true\" autocorrect=\"on\" showClearButton=\"true\" debounce=\"100\"></ion-searchbar>\n<ion-list inset=\"true\">\n  <ion-item button (click)=\"openBrowser(items.url)\" color=\"light\" *ngFor=\"let items of legsList | filter:Filter\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"{{items.image}}\">\n  </ion-thumbnail>\n  <ion-label>\n    {{items.name}}\n  </ion-label>\n</ion-item>\n</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_legs_legs_module_ts.js.map