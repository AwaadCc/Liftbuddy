"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_add-note_add-note_module_ts"],{

/***/ 6902:
/*!*****************************************************!*\
  !*** ./src/app/add-note/add-note-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNotePageRoutingModule": () => (/* binding */ AddNotePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _add_note_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-note.page */ 4296);




const routes = [
    {
        path: '',
        component: _add_note_page__WEBPACK_IMPORTED_MODULE_0__.AddNotePage
    }
];
let AddNotePageRoutingModule = class AddNotePageRoutingModule {
};
AddNotePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddNotePageRoutingModule);



/***/ }),

/***/ 6520:
/*!*********************************************!*\
  !*** ./src/app/add-note/add-note.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNotePageModule": () => (/* binding */ AddNotePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 3506);
/* harmony import */ var _add_note_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-note-routing.module */ 6902);
/* harmony import */ var _add_note_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-note.page */ 4296);








let AddNotePageModule = class AddNotePageModule {
};
AddNotePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _add_note_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddNotePageRoutingModule,
            _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.IonicStorageModule.forRoot()
        ],
        declarations: [_add_note_page__WEBPACK_IMPORTED_MODULE_2__.AddNotePage]
    })
], AddNotePageModule);



/***/ }),

/***/ 4296:
/*!*******************************************!*\
  !*** ./src/app/add-note/add-note.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNotePage": () => (/* binding */ AddNotePage)
/* harmony export */ });
/* harmony import */ var _Users_awaadchaudhry_Desktop_Coding_Projects_Liftbuddy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_note_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-note.page.html?ngResource */ 3556);
/* harmony import */ var _add_note_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-note.page.scss?ngResource */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 3506);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);









let AddNotePage = class AddNotePage {
  constructor(storage, router, alertController, activatedRoute) {
    this.storage = storage;
    this.router = router;
    this.alertController = alertController;
    this.activatedRoute = activatedRoute;
    this.arr = [];
    this.headerLabel = 'Add Note';
  }

  ngAfterViewInit() {
    var _this = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_Liftbuddy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.textArea.setFocus();

      if (_this.state.obj) {
        _this.textInput.nativeElement.value = _this.state.obj.value;
        _this.textInput2.nativeElement.value = _this.state.obj.title;
        _this.textInput.nativeElement.style.backgroundColor = _this.state.obj.color;
      }
    })();
  }

  ngOnInit() {
    var _this2 = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_Liftbuddy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.activatedRoute.paramMap.subscribe(e => {
        _this2.state = window.history.state;

        if (_this2.state.obj) {
          _this2.headerLabel = 'Edit Note';
          _this2.enableDelete = true;
        }
      });
    })();
  }

  showKeyboard() {
    var _this3 = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_Liftbuddy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.textArea.setFocus();
    })();
  }

  showKeyboard2() {
    var _this4 = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_Liftbuddy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.textArea2.setFocus();
    })();
  }

  clearInput() {
    this.textInput.nativeElement.value = '';
    this.textInput2.nativeElement.value = '';
  }

  saveNote() {
    var _this5 = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_Liftbuddy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const text = _this5.textInput.nativeElement.value;
      const text2 = _this5.textInput2.nativeElement.value;

      if (text.trim().length > 0) {
        let id;
        _this5.arr = yield _this5.storage.get('notes');

        if (_this5.state.obj) {
          id = _this5.state.obj.key;
          yield _this5.updateNote(id, text, text2, _this5.arr);
        } else {
          id = (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])();
          const time = Date.now();
          const color = _this5.textInput.nativeElement.style.backgroundColor;
          const item = {
            key: id,
            value: text,
            title: text2,
            lastUpdated: time,
            color: color
          };

          if (!_this5.arr) {
            _this5.arr = [];
          }

          _this5.arr.push(item);

          yield _this5.storage.set('notes', _this5.arr);

          _this5.router.navigate(['/tabs/home']);
        }
      } else {
        const alert = yield _this5.alertController.create({
          header: 'Error',
          message: 'Please enter some text.',
          buttons: [{
            role: 'cancel',
            text: 'Ok'
          }]
        });
        alert.present();
        _this5.textInput.nativeElement.value = '';
        _this5.textInput2.nativeElement.value = '';
      }
    })();
  }

  updateNote(id, text, text2, arr) {
    var _this6 = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_Liftbuddy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const itemToUpdate = arr.find(e => e.key === id);
      itemToUpdate.value = text;
      itemToUpdate.title = text2;
      itemToUpdate.lastUpdated = Date.now();
      itemToUpdate.color = _this6.textInput.nativeElement.style.backgroundColor;
      yield _this6.storage.set('notes', _this6.arr);

      _this6.router.navigate(['/tabs/home']);
    })();
  }

  deleteNote() {
    var _this7 = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_Liftbuddy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.arr = yield _this7.storage.get('notes');
      const alert = yield _this7.alertController.create({
        header: 'Confirm',
        message: 'Are you sure, you want to delete the note?',
        buttons: [{
          text: 'Ok',
          handler: function () {
            var _ref = (0,_Users_awaadchaudhry_Desktop_Coding_Projects_Liftbuddy_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              const itemToDeleteIndex = _this7.arr.findIndex(e => e.value === _this7.textInput.nativeElement.value);

              console.log(_this7.arr);

              _this7.arr.splice(itemToDeleteIndex, 1);

              console.log(_this7.arr);
              yield _this7.storage.set('notes', _this7.arr);

              _this7.router.navigate(['/tabs/home']);
            });

            return function handler() {
              return _ref.apply(this, arguments);
            };
          }()
        }, {
          text: 'Cancel',
          role: 'cancel'
        }]
      });
      alert.present();
    })();
  }

  setColor(color) {
    this.textInput.nativeElement.style.backgroundColor = color;
  }

};

AddNotePage.ctorParameters = () => [{
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}];

AddNotePage.propDecorators = {
  textInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['textInput', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
    }]
  }],
  textArea: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['textInput', {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTextarea
    }]
  }],
  textInput2: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['textInput2', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
    }]
  }],
  textArea2: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['textInput2', {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTextarea
    }]
  }]
};
AddNotePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-add-note',
  template: _add_note_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_note_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddNotePage);


/***/ }),

/***/ 8970:
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ 6421:
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ 3054:
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ 231);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ 2535:
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ 6421);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ 3054);



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ 231:
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ 8970);


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ 3679:
/*!********************************************************!*\
  !*** ./src/app/add-note/add-note.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".iconSize {\n  font-size: 3em;\n  color: var(--ion-color-primary-shade);\n}\n\n.buttons {\n  justify-content: center;\n}\n\n.undoBtn {\n  justify-content: flex-end;\n}\n\nion-textarea {\n  border-radius: 10px;\n  border-width: 10px;\n  background: var(--ion-color-light);\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --padding-start: 20px;\n  --padding-end: 15px;\n}\n\n.content {\n  min-height: 10em;\n}\n\n.aquamarine {\n  font-size: 2em;\n  color: aquamarine;\n}\n\n.pink {\n  font-size: 2em;\n  color: pink;\n}\n\n.yellow {\n  font-size: 2em;\n  color: yellow;\n}\n\n.coral {\n  font-size: 2em;\n  color: coral;\n}\n\n.lavender {\n  font-size: 2em;\n  color: lavender;\n}\n\n.lightblue {\n  font-size: 2em;\n  color: lightblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1ub3RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxxQ0FBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0FBR0o7O0FBREE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7QUFLSjs7QUFGQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUhBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQVVKIiwiZmlsZSI6ImFkZC1ub3RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uU2l6ZSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbn1cbi5idXR0b25zIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi51bmRvQnRuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuaW9uLXRleHRhcmVhIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci13aWR0aDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTVweDtcbn1cbi5jb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiAxMGVtO1xufVxuXG4uYXF1YW1hcmluZSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgY29sb3I6IGFxdWFtYXJpbmU7XG59XG4ucGluayB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgY29sb3I6IHBpbms7XG59XG4ueWVsbG93IHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBjb2xvcjogeWVsbG93O1xufVxuLmNvcmFsIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBjb2xvcjogY29yYWw7XG59XG4ubGF2ZW5kZXIge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGNvbG9yOiBsYXZlbmRlclxufVxuLmxpZ2h0Ymx1ZSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgY29sb3I6IGxpZ2h0Ymx1ZTtcbn0iXX0= */";

/***/ }),

/***/ 3556:
/*!********************************************************!*\
  !*** ./src/app/add-note/add-note.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{headerLabel}}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)= \"clearInput()\">\n      <ion-icon name=\"refresh-circle\" ></ion-icon>\n    </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n     <ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>New Session</ion-card-subtitle>\n    <ion-card-title>Track your lifts!</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    Example of how to post:<br><br>\n    Bench: 135x8; 185x5; 205x5; 225x4; 135x12<br>\n    Incline Bench: 40x8; 70x8; 85x8; 100x6; 50x12<br>\n    Weighted Dips: BWx12; 45x10; 90x8; 135x3; 90x5<br>\n  </ion-card-content>\n</ion-card> \n  <ion-grid>\n    <ion-row>\n      <ion-col>\n\n      <ion-list-header>\n      <ion-label>Title:</ion-label>\n      </ion-list-header>\n        <ion-textarea auto-grow=\"true\" #textInput2 (click) = \"showKeyboard2()\"></ion-textarea>  \n      <ion-list-header>\n      <ion-label>Content:</ion-label>\n      </ion-list-header>\n        <ion-textarea class=\"content\" auto-grow=\"true\" #textInput (click) = \"showKeyboard()\"></ion-textarea>   \n      </ion-col>\n</ion-row>\n\n<br>\n<ion-row class=\"buttons\">\n  <ion-button (click) = \"saveNote()\" fill=\"clear\">\n    <ion-icon slot=\"start\" name=\"checkmark-outline\" ></ion-icon>\n  </ion-button>\n    <ion-button [routerLink] = \"['/tabs/home']\" fill=\"clear\">\n    <ion-icon name=\"close-outline\" ></ion-icon>\n  </ion-button>\n    <ion-button (click) = \"deleteNote()\" *ngIf=\"enableDelete\" fill=\"clear\">\n    <ion-icon name=\"remove-outline\" ></ion-icon>\n  </ion-button>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_add-note_add-note_module_ts.js.map