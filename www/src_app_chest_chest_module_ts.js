"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_chest_chest_module_ts"],{

/***/ 4908:
/*!***********************************************!*\
  !*** ./src/app/chest/chest-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChestPageRoutingModule": () => (/* binding */ ChestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _chest_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chest.page */ 1033);




const routes = [
    {
        path: '',
        component: _chest_page__WEBPACK_IMPORTED_MODULE_0__.ChestPage
    }
];
let ChestPageRoutingModule = class ChestPageRoutingModule {
};
ChestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChestPageRoutingModule);



/***/ }),

/***/ 1327:
/*!***************************************!*\
  !*** ./src/app/chest/chest.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChestPageModule": () => (/* binding */ ChestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _chest_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chest-routing.module */ 4908);
/* harmony import */ var _chest_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chest.page */ 1033);








let ChestPageModule = class ChestPageModule {
};
ChestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
            _chest_routing_module__WEBPACK_IMPORTED_MODULE_1__.ChestPageRoutingModule
        ],
        declarations: [_chest_page__WEBPACK_IMPORTED_MODULE_2__.ChestPage]
    })
], ChestPageModule);



/***/ }),

/***/ 1033:
/*!*************************************!*\
  !*** ./src/app/chest/chest.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChestPage": () => (/* binding */ ChestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _chest_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chest.page.html?ngResource */ 4668);
/* harmony import */ var _chest_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chest.page.scss?ngResource */ 1576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 2407);






let ChestPage = class ChestPage {
    constructor(iab, dataService) {
        this.iab = iab;
        this.dataService = dataService;
    }
    openBrowser(url) {
        const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');
    }
    ngOnInit() {
        this.dataService.getChestData().subscribe(data => {
            this.chestList = data['selection1'];
        });
    }
};
ChestPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
ChestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-chest',
        template: _chest_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chest_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChestPage);



/***/ }),

/***/ 1576:
/*!**************************************************!*\
  !*** ./src/app/chest/chest.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVzdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4668:
/*!**************************************************!*\
  !*** ./src/app/chest/chest.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Chest</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-searchbar [(ngModel)]=\"Filter\" spellcheck=\"true\" autocorrect=\"on\" showClearButton=\"true\" debounce=\"100\"></ion-searchbar>\n\n<ion-list inset=\"true\">\n  <ion-item button (click)=\"openBrowser(items.url)\" color=\"light\" *ngFor=\"let items of chestList | filter:Filter\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"{{items.image}}\">\n  </ion-thumbnail>\n  <ion-label>\n    {{items.name}}\n  </ion-label>\n</ion-item>\n</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_chest_chest_module_ts.js.map