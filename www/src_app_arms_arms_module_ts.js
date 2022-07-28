"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_arms_arms_module_ts"],{

/***/ 1710:
/*!*********************************************!*\
  !*** ./src/app/arms/arms-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArmsPageRoutingModule": () => (/* binding */ ArmsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _arms_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arms.page */ 9872);




const routes = [
    {
        path: '',
        component: _arms_page__WEBPACK_IMPORTED_MODULE_0__.ArmsPage
    }
];
let ArmsPageRoutingModule = class ArmsPageRoutingModule {
};
ArmsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArmsPageRoutingModule);



/***/ }),

/***/ 8041:
/*!*************************************!*\
  !*** ./src/app/arms/arms.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArmsPageModule": () => (/* binding */ ArmsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _arms_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arms-routing.module */ 1710);
/* harmony import */ var _arms_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arms.page */ 9872);








let ArmsPageModule = class ArmsPageModule {
};
ArmsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
            _arms_routing_module__WEBPACK_IMPORTED_MODULE_1__.ArmsPageRoutingModule
        ],
        declarations: [_arms_page__WEBPACK_IMPORTED_MODULE_2__.ArmsPage]
    })
], ArmsPageModule);



/***/ }),

/***/ 9872:
/*!***********************************!*\
  !*** ./src/app/arms/arms.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArmsPage": () => (/* binding */ ArmsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _arms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arms.page.html?ngResource */ 692);
/* harmony import */ var _arms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arms.page.scss?ngResource */ 8754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 2407);






let ArmsPage = class ArmsPage {
    constructor(iab, dataService) {
        this.iab = iab;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.dataService.getArmsData().subscribe(data => {
            this.armsList = data['selection1'];
        });
    }
    openBrowser(url) {
        const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');
    }
};
ArmsPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
ArmsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-arms',
        template: _arms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_arms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ArmsPage);



/***/ }),

/***/ 8754:
/*!************************************************!*\
  !*** ./src/app/arms/arms.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcm1zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 692:
/*!************************************************!*\
  !*** ./src/app/arms/arms.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Arms</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-searchbar [(ngModel)]=\"Filter\" spellcheck=\"true\" autocorrect=\"on\" showClearButton=\"true\" debounce=\"100\"></ion-searchbar>\n<ion-list inset=\"true\">\n  <ion-item button (click)=\"openBrowser(items.url)\" color=\"light\" *ngFor=\"let items of armsList | filter:Filter\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"{{items.image}}\">\n  </ion-thumbnail>\n  <ion-label>\n    {{items.name}}\n  </ion-label>\n</ion-item>\n</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_arms_arms_module_ts.js.map