"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    },
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 2407);








let Tab1Page = class Tab1Page {
    constructor(iab, router, dataService) {
        this.iab = iab;
        this.router = router;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.dataService.getData().subscribe(data => {
            this.list = data['selection1'];
        });
    }
    openBrowser(url) {
        const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');
    }
    scrollToTop() {
        this.content.scrollToTop(500);
    }
    goInfo() {
        this.router.navigate(['/tabs/tab1/info']);
    }
    goPage2() {
        this.router.navigate(['/tabs/tab1/page2']);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
Tab1Page.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent,] }]
};
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  position: relative;\n}\n\n#container .addBtn {\n  position: absolute;\n  bottom: 5%;\n  right: 5%;\n  font-size: 3em;\n  color: var(--ion-color-primary-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7QUFDRiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNjb250YWluZXIgLmFkZEJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1JTtcbiAgcmlnaHQ6IDUlO1xuICBmb250LXNpemU6IDNlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbn0iXX0= */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>\n      Home\n    </ion-title>\n      <ion-buttons slot=\"primary\">\n      <ion-button (click)= \"goInfo()\">\n      <ion-icon name=\"information-circle-outline\" ></ion-icon>\n    </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"container\" [fullscreen]=\"true\" [scrollEvents]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Home</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Hello there!</ion-card-subtitle>\n    <ion-card-title>Welcome to Liftbuddy!</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    A simple app to help you stay or get in shape and reach all of your fitness goals! Take your time to explore the app and get used to the layout and read the content!\n  </ion-card-content>\n</ion-card>\n<ion-list-header>\n  Lifting Articles\n</ion-list-header>\n\n<!-- Hardcoded articles -->\n<ion-card>\n  <img src=\"https://www.mensjournal.com/wp-content/uploads/mf/1280-power-lift-barbell-chalk-hands_1.jpg?w=1260&h=709&crop=1&quality=86&strip=all\" />\n  <ion-card-header>\n    <ion-card-subtitle>January 12, 2022</ion-card-subtitle>\n    <ion-card-title>Powerlifting: The Beginner’s Guide (2022)</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n  At some point, you’ve probably seen some dude come into the gym—he probably had a beard—load up a barbell with 45-lb. plates that the steel was literally bending, and sent shockwaves of awesomeness across the floor with some of the most impressive squats you’ve ever witnessed in person. And at that moment, you probably wondered: How in the hell do I do that?..\n   <br><br>\n   <ion-button expand=\"block\" (click)=\"openBrowser('https://www.mensjournal.com/health-fitness/powerlifting-beginners-guide-mens-fitness/')\">Continue Reading!</ion-button>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <img src=\"https://img.livestrong.com/1260x/photos.demandstudios.com/getty/article/103/69/178614653.jpg?type=webp\" />\n  <ion-card-header>\n    <ion-card-subtitle>April 7, 2022</ion-card-subtitle>\n    <ion-card-title>Benefits Of Powerlifting</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n   Powerlifting, a strength sport where you compete in the squat, bench press and deadlift, allows you to build muscle and burn fat. Powerlifting, like other forms of heavy resistance training, strengthens your skeleton and reduces your risk of injury in other sports and activities...\n   <br><br>\n   <ion-button expand=\"block\" (click)=\"openBrowser('https://www.livestrong.com/article/473350-benefits-of-powerlifting/')\">Continue Reading!</ion-button>\n  </ion-card-content>\n</ion-card>\n\n<!-- FAB button to go top of page -->\n <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\n    <ion-fab-button (click)=\"scrollToTop()\" color=\"light\">\n      <ion-icon name=\"arrow-up-circle\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n<!-- Articles from database -->\n\n<ion-card *ngFor=\"let items of list\">\n  <ion-img src=\"{{items.image}}\" style=\"height: auto; width:auto;\" no-margin></ion-img>\n  <ion-card-header>\n    <ion-card-subtitle>{{items.date}}</ion-card-subtitle>\n    <ion-card-title>{{items.title}}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n   {{items.summary}}\n   <br><br>\n   <ion-button expand=\"block\" (click)=\"openBrowser(items.url)\">Continue Reading!</ion-button>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map