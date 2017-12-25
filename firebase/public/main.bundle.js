webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ab-page mat-app-background\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n/* Main section */\n/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n:host {\n  width: 100%;\n  height: 100%;\n  display: block; }\n\n.ab-page {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n/**\r\n * Usage example:\r\n *\r\n * @include bem(block) {\r\n *   background: #faf;\r\n *   @include bem($element: element) {\r\n *     color: #8496F3;\r\n *     @include bem($modifier: modifier_key_value) {\r\n *       border: 1px solid #f5f;\r\n *       &:hover {\r\n *         background: #000;\r\n *       }\r\n *     }\r\n *   }\r\n * }\r\n */\n/**\r\n * Extended mixin taken from angular-material (@see )\r\n * @param {string} $color - color for input placeholder\r\n * @param {:hover|:active|:focus|null} $target-pseudo - parent pseudo-class\r\n * E.g.: @include input-placeholder-color(#faf);\r\n * E.g.: @include input-placeholder-color(#faf, (hover: #ff0));\r\n * E.g.: @include input-placeholder-color(#faf, (hover: #ff0, active: #0ff), false) {\r\n *    transition: all .2s ease;\r\n * }\r\n */\n/**\r\n * Four points:\r\n * ----------------\r\n * xs: 600px\r\n * sm: 1024px\r\n * md: 1280px\r\n * lg or xl: 1920px\r\n * ----------------\r\n *\r\n * xs\r\n * lt-xs\r\n * gt-xs\r\n * sm\r\n * lt-sm\r\n * gt-sm\r\n * md\r\n * lt-md\r\n * gt-md\r\n * lg\r\n * lt-lg\r\n * gt-lg\r\n * xl\r\n * gt-xl\r\n */\n:host {\n  width: 100%;\n  height: 100%;\n  display: block; }\n\n.ab-page {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host {\n  position: absolute; }\n\n.ab-page {\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n  -webkit-overflow-scrolling: touch; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_firebase_config__ = __webpack_require__("../../../../../src/environments/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_meta_meta_module__ = __webpack_require__("../../../../../src/app/shared/services/meta/meta.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_no_sanitization_no_sanitization__ = __webpack_require__("../../../../../src/app/shared/services/no-sanitization/no-sanitization.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__not_found_not_found_module__ = __webpack_require__("../../../../../src/app/not-found/not-found.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routing_app_routing_module__ = __webpack_require__("../../../../../src/app/routing/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__routing_app_meta_config__ = __webpack_require__("../../../../../src/app/routing/app.meta-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({
                    appId: 'AbRemoteDrawing'
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageModule"].withConfig({
                    prefix: 'ab',
                    storageType: 'localStorage'
                }),
                __WEBPACK_IMPORTED_MODULE_10__shared_services_meta_meta_module__["a" /* MetaModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__routing_app_meta_config__["a" /* metaConfig */]),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_firebase_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_14__routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12__main_main_module__["a" /* MainModule */],
                __WEBPACK_IMPORTED_MODULE_13__not_found_not_found_module__["a" /* NotFoundModule */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */], useClass: __WEBPACK_IMPORTED_MODULE_11__shared_services_no_sanitization_no_sanitization__["a" /* NoSanitizationService */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14__routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ab-create\" [ngClass]=\"{'ab-create__content_saved': isProjectSaved}\">\n  <div class=\"ab-create__inner\">\n\n    <div class=\"ab-create__qr-layer\">\n      <div class=\"ab-create__qr-layer-content\">\n        <div class=\"ab-create__qr-title\">\n          <span>Откройте приложение и отсканируйте этот код</span>\n        </div>\n        <div class=\"ab-create__qr-code\" *ngIf=\"qrDataUrl\">\n          <ab-image [abImageSrc]=\"qrDataUrl\"></ab-image>\n        </div>\n        <div class=\"ab-create__result\">\n          <i class=\"material-icons md-28\">cloud_done</i>\n          <span>Сохранено!</span>\n        </div>\n        <div class=\"ab-create__sync-waiting\">\n          <i class=\"material-icons md-18\">autorenew</i>\n          <span>Ожидание сканирования QR-кода...</span>\n        </div>\n        <div class=\"ab-create__presentation-link\">\n          <mat-form-field hintLabel=\"Поделитесь ссылкой с другими\">\n            <input #shareLink matInput value=\"{{ buildShareLink() }}\" required maxlength=\"255\">\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ab-create__content\">\n\n      <div class=\"ab-create__content-inner\">\n        <div class=\"ab-create__title\">\n          <h1>Создать презентацию</h1>\n        </div>\n\n        <div class=\"ab-create__form-group ab-create__name\">\n          <mat-form-field hintLabel=\"Максимум 255 символов\">\n            <input matInput [(ngModel)]=\"presentationForm.name\" placeholder=\"Название презентации\" required maxlength=\"255\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"ab-create__form-group ab-create__files\">\n          <div class=\"ab-create__files-selection\" *ngIf=\"!isFilesSelected\">\n            <button mat-raised-button color=\"primary\" (click)=\"selectFiles($event)\">+ Выбрать файлы</button>\n            <input #fileSelector multiple (change)=\"handleFileSelection($event)\" type=\"file\" id=\"file\" name=\"files[]\" accept=\"image/*\"/>\n          </div>\n          <div class=\"ab-create__files-loading\" *ngIf=\"isFilesSelected && isFilesUploading\">\n            <mat-progress-spinner\n                    color=\"accent\"\n                    mode=\"indeterminate\">\n            </mat-progress-spinner>\n          </div>\n          <div class=\"ab-create__uploaded-layer\" *ngIf=\"presentationForm.files.length > 0\">\n            <div class=\"ab-create__uploaded-image\" *ngFor=\"let photo of presentationForm.files\">\n              <ab-image class=\"ab-create__image\" [abImageSrc]=\"photo.fileUrl\" [abImageThumbnailSrc]=\"photo.fileUrl\"></ab-image>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"ab-create__form-group ab-create__save\">\n          <button mat-raised-button color=\"primary\" disabled=\"{{ isProjectSaving }}\" (click)=\"saveProject($event)\">Сохранить</button>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/create/create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n/* Main section */\n/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n.ab-create__qr-layer, :host, .ab-create {\n  width: 100%;\n  height: 100%;\n  display: block; }\n\n.ab-create__inner, .ab-create__files-loading, .ab-create__uploaded-layer, .ab-create__qr-layer-content {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.ab-create__qr-layer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n/**\r\n * Usage example:\r\n *\r\n * @include bem(block) {\r\n *   background: #faf;\r\n *   @include bem($element: element) {\r\n *     color: #8496F3;\r\n *     @include bem($modifier: modifier_key_value) {\r\n *       border: 1px solid #f5f;\r\n *       &:hover {\r\n *         background: #000;\r\n *       }\r\n *     }\r\n *   }\r\n * }\r\n */\n/**\r\n * Extended mixin taken from angular-material (@see )\r\n * @param {string} $color - color for input placeholder\r\n * @param {:hover|:active|:focus|null} $target-pseudo - parent pseudo-class\r\n * E.g.: @include input-placeholder-color(#faf);\r\n * E.g.: @include input-placeholder-color(#faf, (hover: #ff0));\r\n * E.g.: @include input-placeholder-color(#faf, (hover: #ff0, active: #0ff), false) {\r\n *    transition: all .2s ease;\r\n * }\r\n */\n/**\r\n * Four points:\r\n * ----------------\r\n * xs: 600px\r\n * sm: 1024px\r\n * md: 1280px\r\n * lg or xl: 1920px\r\n * ----------------\r\n *\r\n * xs\r\n * lt-xs\r\n * gt-xs\r\n * sm\r\n * lt-sm\r\n * gt-sm\r\n * md\r\n * lt-md\r\n * gt-md\r\n * lg\r\n * lt-lg\r\n * gt-lg\r\n * xl\r\n * gt-xl\r\n */\n.ab-create__qr-layer, :host, .ab-create {\n  width: 100%;\n  height: 100%;\n  display: block; }\n\n.ab-create__inner, .ab-create__files-loading, .ab-create__uploaded-layer, .ab-create__qr-layer-content {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.ab-create__qr-layer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n:host {\n  background: white;\n  position: relative; }\n\n.ab-create {\n  background-color: #9050ff;\n  *zoom: 1;\n  filter: progid:DXImageTransform.Microsoft.gradient(gradientType=1, startColorstr='#FF9050FF', endColorstr='#FF673AB7');\n  background-image: -owg-radial-gradient(ellipse, #9050ff, #673ab7);\n  background-image: radial-gradient(ellipse, #9050ff, #673ab7); }\n  .ab-create__inner {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .ab-create__content {\n    position: relative;\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n    padding: 18px;\n    min-width: 500px;\n    max-width: 800px;\n    width: 80vw;\n    font-family: \"Roboto\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    max-height: 600px;\n    overflow-y: auto;\n    overflow-x: hidden; }\n  .ab-create__title h1 {\n    font-size: 1.6em;\n    margin-top: 0;\n    padding: 0; }\n  .ab-create__form-group {\n    margin-top: 18px; }\n  .ab-create__files-selection input {\n    display: none; }\n  .ab-create__files-loading {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 10px 0; }\n  .ab-create__uploaded-layer {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch; }\n  .ab-create__uploaded-image {\n    width: 150px;\n    margin-top: 18px;\n    display: inline-block;\n    border: 1px solid rgba(0, 0, 0, 0.1); }\n  .ab-create__image {\n    width: 100%; }\n  .ab-create__save {\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n    padding-top: 16px;\n    text-align: right; }\n  .ab-create__qr-layer {\n    background: #fff;\n    z-index: 5000;\n    pointer-events: none;\n    opacity: 0;\n    transition: opacity 0.2s cubic-bezier(0.35, 0, 0.25, 1) 0s; }\n    .ab-create__content_saved .ab-create__qr-layer {\n      pointer-events: auto;\n      opacity: 1; }\n  .ab-create__result {\n    text-align: center; }\n    .ab-create__result > i {\n      color: #7c45dc;\n      position: relative;\n      top: 6px; }\n  .ab-create__sync-waiting {\n    font-size: .6em;\n    text-align: center;\n    margin-top: 5px; }\n    .ab-create__sync-waiting > i {\n      color: #7c45dc;\n      position: relative;\n      top: 5px; }\n  .ab-create__qr-code {\n    width: 300px;\n    height: 300px;\n    margin: 20px auto 20px; }\n  .ab-create__qr-code-image {\n    width: 100%; }\n  .ab-create__qr-layer-content {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .ab-create__qr-title {\n    font-size: 1.4em;\n    width: 80%;\n    text-align: center; }\n  .ab-create__presentation-link {\n    min-width: 300px; }\n    .ab-create__presentation-link .mat-form-field {\n      width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routing_app_routing_animations__ = __webpack_require__("../../../../../src/app/routing/app.routing.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_api_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bluebird__ = __webpack_require__("../../../../bluebird/js/browser/bluebird.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_config__ = __webpack_require__("../../../../../src/environments/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_socket_io_socket_api_service__ = __webpack_require__("../../../../../src/app/shared/services/socket.io/socket-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreateComponent = /** @class */ (function () {
    function CreateComponent(route, api, socketApi, router, af) {
        var _this = this;
        this.route = route;
        this.api = api;
        this.socketApi = socketApi;
        this.router = router;
        this.af = af;
        this.isFilesSelected = false;
        this.isFilesUploading = false;
        this.isProjectSaving = false;
        this.isProjectSaved = false;
        this.imagesPath = 'images';
        this.presentationForm = {
            name: '',
            files: []
        };
        this.presentation = this.route.params.flatMap(function (params) {
            return api.getPresentation(params.shortKey);
        });
        this.presentation.subscribe(function (result) {
            console.log(result);
            _this.id = result.id;
            _this.shortKey = result.shortKey;
            _this.presentationForm.name = result.name;
            _this.presentationForm.files = result.Files;
        });
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.selectFiles = function (event) {
        this.fileSelector.nativeElement.click();
    };
    CreateComponent.prototype.handleFileSelection = function (evt) {
        var _this = this;
        this.storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref();
        evt.stopPropagation();
        evt.preventDefault();
        evt.target.disabled = true;
        var files = evt.target.files;
        this.isFilesSelected = true;
        this.isFilesUploading = true;
        __WEBPACK_IMPORTED_MODULE_6_bluebird___default.a.resolve(files).map(function (file) {
            var metadata = {
                'contentType': file.type
            };
            var photo = {};
            return __WEBPACK_IMPORTED_MODULE_6_bluebird___default.a.all([
                _this.storageRef.child(_this._buildChildImagePath("_" + Math.random().toString(16).replace('.', '') + file.name.slice(0, 10))).put(file, metadata),
                photo,
                file
            ]);
        }, { concurrency: 3 }).map(function (_a) {
            var snapshot = _a[0], photo = _a[1], file = _a[2];
            photo.fileUrl = snapshot.downloadURL;
            photo.fileName = snapshot.metadata.name;
            return photo;
        }, { concurrency: 3 }).map(function (photo) {
            console.log('Photo:', photo);
            _this.presentationForm.files.push(photo);
        }, { concurrency: 3 }).catch(function (error) {
            console.error('Upload failed:', error);
        }).finally(function () {
            _this.isFilesSelected = false;
            _this.isFilesUploading = false;
        });
    };
    CreateComponent.prototype.saveProject = function () {
        var _this = this;
        this.isProjectSaving = true;
        this.api.updatePresentation(this.id, this.presentationForm).then(function (_) {
            return _this.api.getQrCode(_this.id);
        }).then(function (result) {
            _this.qrDataUrl = result.qr || '';
            _this.isProjectSaved = true;
            _this.isProjectSaving = false;
            _this.shareLink.nativeElement.focus();
            _this.shareLink.nativeElement.select();
            return _this.socketApi.joinServer();
        }).then(function (_) {
            return _this.socketApi.joinRoom({ id: _this.id });
        }).then(function (_) {
            _this.socketApi.onCloseQrLayer().subscribe(function (_) {
                _this.router.navigate(['s', _this.shortKey]);
            });
        });
    };
    CreateComponent.prototype.buildShareLink = function () {
        return "http://" + __WEBPACK_IMPORTED_MODULE_7__environments_config__["a" /* config */].frontendServer + "/s/" + this.shortKey;
    };
    CreateComponent.prototype._buildChildImagePath = function (imageName) {
        return this.imagesPath + "/" + imageName;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileSelector'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], CreateComponent.prototype, "fileSelector", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('shareLink'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], CreateComponent.prototype, "shareLink", void 0);
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create',
            template: __webpack_require__("../../../../../src/app/main/create/create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/create/create.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__routing_app_routing_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_api_api_service__["a" /* ApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_socket_io_socket_api_service__["a" /* SocketApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_services_socket_io_socket_api_service__["a" /* SocketApiService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _g || Object])
    ], CreateComponent);
    return CreateComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ab-main\">\n  <div class=\"ab-main__inner\">\n\n    <div class=\"ab-main__create\">\n      <div class=\"ab-main__create-text\">\n        Создайте удаленную презентацию с возможностью рисования на слайдах.\n      </div>\n      <button (click)=\"createSession($event)\" class=\"ab-main__create-button icon\" mat-raised-button color=\"primary\">\n        <i class=\"material-icons md-18\">create</i>\n        Создать презентацию\n      </button>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n/* Main section */\n/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n:host, .ab-main {\n  width: 100%;\n  height: 100%;\n  display: block; }\n\n.ab-main__inner, .ab-main__create {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n/**\r\n * Usage example:\r\n *\r\n * @include bem(block) {\r\n *   background: #faf;\r\n *   @include bem($element: element) {\r\n *     color: #8496F3;\r\n *     @include bem($modifier: modifier_key_value) {\r\n *       border: 1px solid #f5f;\r\n *       &:hover {\r\n *         background: #000;\r\n *       }\r\n *     }\r\n *   }\r\n * }\r\n */\n/**\r\n * Extended mixin taken from angular-material (@see )\r\n * @param {string} $color - color for input placeholder\r\n * @param {:hover|:active|:focus|null} $target-pseudo - parent pseudo-class\r\n * E.g.: @include input-placeholder-color(#faf);\r\n * E.g.: @include input-placeholder-color(#faf, (hover: #ff0));\r\n * E.g.: @include input-placeholder-color(#faf, (hover: #ff0, active: #0ff), false) {\r\n *    transition: all .2s ease;\r\n * }\r\n */\n/**\r\n * Four points:\r\n * ----------------\r\n * xs: 600px\r\n * sm: 1024px\r\n * md: 1280px\r\n * lg or xl: 1920px\r\n * ----------------\r\n *\r\n * xs\r\n * lt-xs\r\n * gt-xs\r\n * sm\r\n * lt-sm\r\n * gt-sm\r\n * md\r\n * lt-md\r\n * gt-md\r\n * lg\r\n * lt-lg\r\n * gt-lg\r\n * xl\r\n * gt-xl\r\n */\n:host, .ab-main {\n  width: 100%;\n  height: 100%;\n  display: block; }\n\n.ab-main__inner, .ab-main__create {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host {\n  background: white;\n  position: relative; }\n\n.ab-main {\n  background-color: #9050ff;\n  *zoom: 1;\n  filter: progid:DXImageTransform.Microsoft.gradient(gradientType=1, startColorstr='#FF9050FF', endColorstr='#FF673AB7');\n  background-image: -owg-radial-gradient(ellipse, #9050ff, #673ab7);\n  background-image: radial-gradient(ellipse, #9050ff, #673ab7); }\n  .ab-main__inner {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .ab-main__create {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 300px;\n    width: 300px;\n    background: white;\n    border-radius: 500px;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  .ab-main__create-text {\n    padding-left: 10%;\n    padding-right: 10%;\n    font-family: \"Comfortaa\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    text-align: center; }\n    @media screen and (max-width: 1023px) {\n      .ab-main__create-text {\n        font-size: .9em; } }\n    @media screen and (max-width: 599px) {\n      .ab-main__create-text {\n        font-size: .7em; } }\n  .ab-main__create-button {\n    margin-top: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_app_routing_animations__ = __webpack_require__("../../../../../src/app/routing/app.routing.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_api_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = /** @class */ (function () {
    function MainComponent(af, api, router) {
        this.af = af;
        this.api = api;
        this.router = router;
        this.itemsNs = '/';
        this.items = af.list("" + this.itemsNs);
    }
    MainComponent.prototype.createSession = function (event) {
        var _this = this;
        this.api.createPresentation().then(function (presentation) {
            _this.router.navigate(['create', presentation.shortKey]);
        });
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ab-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__routing_app_routing_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_api_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], MainComponent);
    return MainComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_create_component__ = __webpack_require__("../../../../../src/app/main/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__presentation_presentation_component__ = __webpack_require__("../../../../../src/app/main/presentation/presentation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_6__create_create_component__["a" /* CreateComponent */],
                __WEBPACK_IMPORTED_MODULE_7__presentation_presentation_component__["a" /* PresentationComponent */]
            ]
        })
    ], MainModule);
    return MainModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/presentation/presentation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ab-presentation\">\n  <div class=\"ab-presentation__inner\">\n\n    <div class=\"ab-presentation__content\">\n\n      <div class=\"ab-presentation__loading\" *ngIf=\"!(canvas.onImagesLoaded | async)\">\n        <mat-progress-spinner\n                color=\"primary\"\n                mode=\"indeterminate\">\n        </mat-progress-spinner>\n      </div>\n\n      <div class=\"ab-presentation__content-inner\">\n\n        <div class=\"ab-presentation__header\">\n          <div class=\"ab-presentation__title\">{{ (presentation | async)?.name }}</div>\n          <div class=\"ab-presentation__share-link\">{{ buildShareLink() }}</div>\n        </div>\n\n        <div class=\"ab-presentation__canvas\" id=\"presentation-canvas\"></div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/presentation/presentation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n/* Main section */\n/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n.ab-presentation__loading, :host, .ab-presentation {\n  width: 100%;\n  height: 100%;\n  display: block; }\n\n.ab-presentation__inner, .ab-presentation__header, .ab-presentation__loading {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.ab-presentation__loading {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n/**\r\n * Usage example:\r\n *\r\n * @include bem(block) {\r\n *   background: #faf;\r\n *   @include bem($element: element) {\r\n *     color: #8496F3;\r\n *     @include bem($modifier: modifier_key_value) {\r\n *       border: 1px solid #f5f;\r\n *       &:hover {\r\n *         background: #000;\r\n *       }\r\n *     }\r\n *   }\r\n * }\r\n */\n/**\r\n * Extended mixin taken from angular-material (@see )\r\n * @param {string} $color - color for input placeholder\r\n * @param {:hover|:active|:focus|null} $target-pseudo - parent pseudo-class\r\n * E.g.: @include input-placeholder-color(#faf);\r\n * E.g.: @include input-placeholder-color(#faf, (hover: #ff0));\r\n * E.g.: @include input-placeholder-color(#faf, (hover: #ff0, active: #0ff), false) {\r\n *    transition: all .2s ease;\r\n * }\r\n */\n/**\r\n * Four points:\r\n * ----------------\r\n * xs: 600px\r\n * sm: 1024px\r\n * md: 1280px\r\n * lg or xl: 1920px\r\n * ----------------\r\n *\r\n * xs\r\n * lt-xs\r\n * gt-xs\r\n * sm\r\n * lt-sm\r\n * gt-sm\r\n * md\r\n * lt-md\r\n * gt-md\r\n * lg\r\n * lt-lg\r\n * gt-lg\r\n * xl\r\n * gt-xl\r\n */\n.ab-presentation__loading, :host, .ab-presentation {\n  width: 100%;\n  height: 100%;\n  display: block; }\n\n.ab-presentation__inner, .ab-presentation__header, .ab-presentation__loading {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.ab-presentation__loading {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n:host {\n  background: white;\n  position: relative; }\n\n.ab-presentation {\n  background-color: #9050ff;\n  *zoom: 1;\n  filter: progid:DXImageTransform.Microsoft.gradient(gradientType=1, startColorstr='#FF9050FF', endColorstr='#FF673AB7');\n  background-image: -owg-radial-gradient(ellipse, #9050ff, #673ab7);\n  background-image: radial-gradient(ellipse, #9050ff, #673ab7); }\n  .ab-presentation__inner {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .ab-presentation__content {\n    position: relative;\n    height: 80%;\n    width: 80%;\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n    padding: 18px; }\n  .ab-presentation__content-inner {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch; }\n  .ab-presentation__title {\n    font-size: 1.6em;\n    margin-top: 0;\n    padding: 0;\n    font-weight: 500;\n    white-space: nowrap; }\n  .ab-presentation__share-link {\n    background-color: rgba(0, 0, 0, 0.1);\n    border-radius: 100px;\n    padding: 7px 20px; }\n  .ab-presentation__header {\n    height: auto;\n    min-height: 50px;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .ab-presentation__canvas {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    position: relative;\n    max-height: calc(100% - 50px);\n    margin-top: 12px;\n    overflow: hidden; }\n    .ab-presentation__canvas > canvas {\n      margin: 0 !important; }\n  .ab-presentation__loading {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    background-color: #fff;\n    z-index: 50; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/presentation/presentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_socket_io_socket_api_service__ = __webpack_require__("../../../../../src/app/shared/services/socket.io/socket-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_api_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_config__ = __webpack_require__("../../../../../src/environments/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_canvas_canvas_service__ = __webpack_require__("../../../../../src/app/shared/services/canvas/canvas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PresentationComponent = /** @class */ (function () {
    function PresentationComponent(route, api, socketApi, canvas) {
        var _this = this;
        this.route = route;
        this.api = api;
        this.socketApi = socketApi;
        this.canvas = canvas;
        this.files = [];
        this.presentation = this.route.params.flatMap(function (params) {
            _this.shortKey = params.shortKey;
            return api.getPresentation(params.shortKey);
        });
        this.presentation.subscribe(function (result) {
            _this.id = result.id;
            _this.files = result.Files;
            _this.socketApi.joinServer().then(function (_) {
                return _this.socketApi.joinRoom({ id: _this.id });
            }).then(function (_) {
                _this._attachEvents();
                _this.canvas.init(result);
            });
        });
        this.onImagesLoadedSubscription = this.canvas.onImagesLoaded.filter(function (value) { return !!value; }).take(1).subscribe(function (_) {
            _this.canvas.showSlide(1);
        });
    }
    PresentationComponent.prototype._attachEvents = function () {
        var _this = this;
        this.onSlideChangedSubscription = this.socketApi.onSlideChanged.distinctUntilChanged().subscribe(function (slideNumber) {
            _this.canvas.showSlide(slideNumber);
        });
        this.onDrawSubscription = this.socketApi.onDraw.subscribe(function (params) {
            _this.canvas.draw(params);
        });
        this.onClearSubscription = this.socketApi.onClear.subscribe(function (params) {
            _this.canvas.clear(params);
        });
    };
    PresentationComponent.prototype.buildShareLink = function () {
        return "http://" + __WEBPACK_IMPORTED_MODULE_4__environments_config__["a" /* config */].frontendServer + "/s/" + this.shortKey;
    };
    PresentationComponent.prototype.ngOnInit = function () {
    };
    PresentationComponent.prototype.ngOnDestroy = function () {
        this.canvas.destroy();
        this.onImagesLoadedSubscription.unsubscribe();
        this.onSlideChangedSubscription.unsubscribe();
        this.onDrawSubscription.unsubscribe();
    };
    PresentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-presentation',
            template: __webpack_require__("../../../../../src/app/main/presentation/presentation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/presentation/presentation.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_api_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_socket_io_socket_api_service__["a" /* SocketApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_socket_io_socket_api_service__["a" /* SocketApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_canvas_canvas_service__["a" /* CanvasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_canvas_canvas_service__["a" /* CanvasService */]) === "function" && _d || Object])
    ], PresentationComponent);
    return PresentationComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=presentation.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Not found</h1>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'not-found',
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotFoundModule = /** @class */ (function () {
    function NotFoundModule() {
    }
    NotFoundModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__not_found_component__["a" /* NotFoundComponent */]]
        })
    ], NotFoundModule);
    return NotFoundModule;
}());

//# sourceMappingURL=not-found.module.js.map

/***/ }),

/***/ "../../../../../src/app/routing/app.meta-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metaConfig; });
var metaConfig = {
    useTitleSuffix: true,
    defaults: {
        title: 'Alex Belov',
        titleSuffix: ' | Alex Belov',
        'description': 'Alex Belov - Frontend Developer',
        'twitter:description': 'Alex Belov - Frontend Developer',
        'og:image': './assets/ui/images/logo-pink.png'
    }
};
//# sourceMappingURL=app.meta-config.js.map

/***/ }),

/***/ "../../../../../src/app/routing/app.routing.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;
/* unused harmony export opacity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

function routerTransition() {
    return opacity();
}
function opacity() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'absolute', width: '100vw' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'absolute', width: '100vw' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s .1s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1 }))
        ]),
    ]);
}
//# sourceMappingURL=app.routing.animations.js.map

/***/ }),

/***/ "../../../../../src/app/routing/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("../../../../../src/app/routing/app.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* routes */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/routing/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_create_create_component__ = __webpack_require__("../../../../../src/app/main/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_presentation_presentation_component__ = __webpack_require__("../../../../../src/app/main/presentation/presentation.component.ts");




var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__main_main_component__["a" /* MainComponent */],
        data: {
            meta: {
                useTitleSuffix: false,
                titleSuffix: '',
                'theme-color': '#01579b'
            }
        }
    }, {
        path: 'create/:shortKey',
        component: __WEBPACK_IMPORTED_MODULE_2__main_create_create_component__["a" /* CreateComponent */],
        data: {
            meta: {
                useTitleSuffix: false,
                titleSuffix: '',
                'theme-color': '#01579b'
            }
        }
    }, {
        path: 's/:shortKey',
        component: __WEBPACK_IMPORTED_MODULE_3__main_presentation_presentation_component__["a" /* PresentationComponent */],
        data: {
            meta: {
                useTitleSuffix: false,
                titleSuffix: '',
                'theme-color': '#01579b'
            }
        }
    }, {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_1__not_found_not_found_component__["a" /* NotFoundComponent */]
    }];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/ab-background/ab-background.component.html":
/***/ (function(module, exports) {

module.exports = "<div #templateRoot class=\"ab-background\">\n  <div #originalWrapper class=\"background ab-background__original\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/ab-background/ab-background.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  position: relative;\n  overflow: hidden; }\n  :host * {\n    box-sizing: border-box; }\n\n.ab-background {\n  background-color: #f1f1f1;\n  background-size: inherit;\n  background-position: inherit;\n  height: 100%;\n  width: 100%; }\n  .ab-background .background {\n    width: 100%;\n    height: 100%;\n    background-position: center center;\n    background-size: cover;\n    background-clip: border-box;\n    background-repeat: no-repeat;\n    background-size: inherit;\n    background-position: inherit; }\n  .ab-background__original {\n    transition: all .2s ease-in-out; }\n  .ab-background_loaded {\n    background-color: transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/ab-background/ab-background.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbBackgroundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ab_image_ab_image_model__ = __webpack_require__("../../../../../src/app/shared/components/ab-image/ab-image.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ab_image_ab_image_service__ = __webpack_require__("../../../../../src/app/shared/components/ab-image/ab-image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var IMAGE_LOADING_TIMEOUT_MS = 500;
var AbBackgroundComponent = /** @class */ (function () {
    function AbBackgroundComponent(elementRef, renderer, platformId, abImageService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.platformId = platformId;
        this.abImageService = abImageService;
        this.loadedImage = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.imageLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AbBackgroundComponent.prototype.ngOnInit = function () {
        if (!this.abImageModel) {
            this.abImageModel = new __WEBPACK_IMPORTED_MODULE_2__ab_image_ab_image_model__["a" /* AbImageModel */](this.abImageSrc, this.abImageThumbnailSrc || this.abImageSrc);
        }
        this.setThumbnail();
        if (this.getPlatformType().isBrowser) {
            this.loadImage();
            this.subscribeEvents();
        }
    };
    AbBackgroundComponent.prototype.setThumbnail = function () {
        this.renderer.setStyle(this.originalWrapper.nativeElement, 'background-image', "url(" + this.abImageModel.thumbnailSrc + ")");
    };
    AbBackgroundComponent.prototype.loadImage = function () {
        var _this = this;
        this.abImageService.load(this.renderer, this.abImageModel)
            .subscribe(function (image) {
            _this.loadedImage.next(image);
            _this.imageLoaded.emit(_this.abImageModel);
        });
    };
    AbBackgroundComponent.prototype.subscribeEvents = function () {
        var _this = this;
        this.loadEvent = this.loadedImage.subscribe(function (_) {
            setTimeout(function () {
                requestAnimationFrame(function () {
                    _this.renderer.setStyle(_this.originalWrapper.nativeElement, 'background-image', "url(" + _this.abImageModel.originalSrc + ")");
                    _this.renderer.addClass(_this.templateRoot.nativeElement, 'ab-background_loaded');
                });
            }, IMAGE_LOADING_TIMEOUT_MS);
        });
    };
    AbBackgroundComponent.prototype.getPlatformType = function () {
        return {
            isBrowser: Object(__WEBPACK_IMPORTED_MODULE_3__angular_common__["j" /* isPlatformBrowser */])(this.platformId),
            isServer: Object(__WEBPACK_IMPORTED_MODULE_3__angular_common__["k" /* isPlatformServer */])(this.platformId)
        };
    };
    AbBackgroundComponent.prototype.ngOnDestroy = function () {
        if (this.loadEvent) {
            this.loadEvent.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('templateRoot'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], AbBackgroundComponent.prototype, "templateRoot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('originalWrapper'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], AbBackgroundComponent.prototype, "originalWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ab_image_ab_image_model__["a" /* AbImageModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ab_image_ab_image_model__["a" /* AbImageModel */]) === "function" && _c || Object)
    ], AbBackgroundComponent.prototype, "abImageModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AbBackgroundComponent.prototype, "abImageSrc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AbBackgroundComponent.prototype, "abImageThumbnailSrc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AbBackgroundComponent.prototype, "imageLoaded", void 0);
    AbBackgroundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ab-background,[ab-background]',
            template: __webpack_require__("../../../../../src/app/shared/components/ab-background/ab-background.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/ab-background/ab-background.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _e || Object, String, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ab_image_ab_image_service__["a" /* AbImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ab_image_ab_image_service__["a" /* AbImageService */]) === "function" && _f || Object])
    ], AbBackgroundComponent);
    return AbBackgroundComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=ab-background.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/ab-image/ab-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ab-image\">\n  <div #sourceWrapper class=\"ab-image__source-image ab-image__source-image_hidden\">\n    <img #image class=\"image ab-image__original-image\" [attr.alt]=\"abImageModel && abImageModel.title\">\n  </div>\n  <div #prerenderWrapper class=\"ab-image__pre-render\">\n    <img #thumbnail class=\"image ab-image__thumbnail\" [attr.alt]=\"abImageModel && abImageModel.title\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/ab-image/ab-image.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  position: relative;\n  overflow: hidden; }\n  :host * {\n    box-sizing: border-box; }\n\n:host-context(.max-height) div, :host-context(.max-height) img {\n  height: 100%; }\n\n:host-context(.max-height) img {\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.ab-image {\n  width: 100%;\n  height: 100%;\n  background-color: white; }\n  .ab-image__source-image {\n    opacity: 1;\n    transition: opacity 0.3s ease-in-out; }\n    .ab-image__source-image_hidden {\n      opacity: 0; }\n  .ab-image__pre-render {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n    transition: opacity 0.3s ease-in-out; }\n    .ab-image__pre-render_hidden {\n      opacity: 0;\n      pointer-events: none; }\n  .ab-image__thumbnail, .ab-image__original-image {\n    min-width: 100%;\n    width: 100%;\n    display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/ab-image/ab-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ab_image_model__ = __webpack_require__("../../../../../src/app/shared/components/ab-image/ab-image.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ab_image_service__ = __webpack_require__("../../../../../src/app/shared/components/ab-image/ab-image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var IMAGE_LOADING_TIMEOUT_MS = 100;
var AbImageComponent = /** @class */ (function () {
    function AbImageComponent(elementRef, renderer, platformId, abImageService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.platformId = platformId;
        this.abImageService = abImageService;
        this.loadedImage = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.imageLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AbImageComponent.prototype.ngOnInit = function () {
        if (!this.abImageModel) {
            this.abImageModel = new __WEBPACK_IMPORTED_MODULE_2__ab_image_model__["a" /* AbImageModel */](this.abImageSrc, this.abImageThumbnailSrc || this.abImageSrc);
        }
        this.setThumbnail();
        if (this.getPlatformType().isBrowser) {
            this.loadImage();
            this.subscribeEvents();
        }
    };
    AbImageComponent.prototype.setThumbnail = function () {
        this.renderer.setAttribute(this.thumbnail.nativeElement, 'src', this.abImageModel.thumbnailSrc);
        this.renderer.setAttribute(this.image.nativeElement, 'src', this.abImageModel.thumbnailSrc);
    };
    AbImageComponent.prototype.loadImage = function () {
        var _this = this;
        this.abImageService.load(this.renderer, this.abImageModel)
            .subscribe(function (image) {
            _this.loadedImage.next(image);
            _this.imageLoaded.emit(_this.abImageModel);
        });
    };
    AbImageComponent.prototype.subscribeEvents = function () {
        var _this = this;
        this.loadEvent = this.loadedImage.subscribe(function (_) {
            _this.renderer.setAttribute(_this.image.nativeElement, 'src', _this.abImageModel.originalSrc);
            setTimeout(function () {
                requestAnimationFrame(function () {
                    _this.renderer.removeClass(_this.sourceWrapper.nativeElement, 'ab-image__source-image_hidden');
                    _this.renderer.addClass(_this.prerenderWrapper.nativeElement, 'ab-image__pre-render_hidden');
                });
            }, IMAGE_LOADING_TIMEOUT_MS);
        });
    };
    AbImageComponent.prototype.getPlatformType = function () {
        return {
            isBrowser: Object(__WEBPACK_IMPORTED_MODULE_3__angular_common__["j" /* isPlatformBrowser */])(this.platformId),
            isServer: Object(__WEBPACK_IMPORTED_MODULE_3__angular_common__["k" /* isPlatformServer */])(this.platformId)
        };
    };
    AbImageComponent.prototype.ngOnDestroy = function () {
        if (this.loadEvent) {
            this.loadEvent.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sourceWrapper'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], AbImageComponent.prototype, "sourceWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('prerenderWrapper'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], AbImageComponent.prototype, "prerenderWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('image'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
    ], AbImageComponent.prototype, "image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('thumbnail'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
    ], AbImageComponent.prototype, "thumbnail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ab_image_model__["a" /* AbImageModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ab_image_model__["a" /* AbImageModel */]) === "function" && _e || Object)
    ], AbImageComponent.prototype, "abImageModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AbImageComponent.prototype, "abImageSrc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AbImageComponent.prototype, "abImageThumbnailSrc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AbImageComponent.prototype, "imageLoaded", void 0);
    AbImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ab-image,[ab-image]',
            template: __webpack_require__("../../../../../src/app/shared/components/ab-image/ab-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/ab-image/ab-image.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _g || Object, String, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__ab_image_service__["a" /* AbImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ab_image_service__["a" /* AbImageService */]) === "function" && _h || Object])
    ], AbImageComponent);
    return AbImageComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=ab-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/ab-image/ab-image.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbImageModel; });
var AbImageModel = /** @class */ (function () {
    function AbImageModel(originalSrc, thumbnailSrc, title) {
        if (thumbnailSrc === void 0) { thumbnailSrc = ''; }
        if (title === void 0) { title = ''; }
        this.originalSrc = originalSrc;
        this.thumbnailSrc = thumbnailSrc;
        this.title = title;
    }
    return AbImageModel;
}());

//# sourceMappingURL=ab-image.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/ab-image/ab-image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AbImageService = /** @class */ (function () {
    function AbImageService() {
        this.autoIncrementId = 1;
        this.loadingQueue = [];
        this.inProcessElements = [];
        this.maxQueuedElementsNumber = 3;
        this.defaultPriority = 1;
    }
    AbImageService.prototype.load = function (renderer, imageModel, priority) {
        var loadingObserver = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        var loadingElement = {
            priority: priority || this.defaultPriority,
            element: {
                id: this.autoIncrementId++,
                renderer: renderer, imageModel: imageModel,
                observer: loadingObserver
            }
        };
        this._enqueue(loadingElement);
        return loadingObserver.asObservable();
    };
    AbImageService.prototype._enqueue = function (loadingElement) {
        this.loadingQueue.push(loadingElement);
        if (this.inProcessElements.length < this.maxQueuedElementsNumber) {
            return this._loadNext();
        }
    };
    AbImageService.prototype._loadNext = function () {
        var _this = this;
        this._sortByPriority(this.loadingQueue);
        var _a = this.loadingQueue.shift(), priority = _a.priority, element = _a.element;
        this.inProcessElements.push(element);
        var renderer = element.renderer, imageModel = element.imageModel, observer = element.observer;
        var image = renderer.createElement('img');
        renderer.listen(image, 'load', function () {
            observer.next(image);
            _this._removeInProcessElement(element);
            _this._tryLoadNext();
        });
        renderer.setAttribute(image, 'src', imageModel.originalSrc);
    };
    AbImageService.prototype._tryLoadNext = function () {
        if (this.inProcessElements.length < this.maxQueuedElementsNumber
            && this.loadingQueue.length > 0) {
            this._loadNext();
        }
    };
    AbImageService.prototype._sortByPriority = function (elements) {
        return elements.sort(function (a, b) { return b.priority - a.priority; });
    };
    AbImageService.prototype._removeInProcessElement = function (targetElement) {
        this.inProcessElements.splice(this.inProcessElements.findIndex(function (element) {
            return element.id === targetElement.id;
        }), 1);
    };
    AbImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AbImageService);
    return AbImageService;
}());

//# sourceMappingURL=ab-image.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/photo-viewer/photo-viewer-max-photo-height.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoViewerMaxPhotoHeightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WINDOW_RESIZE_DEBOUNCE_MS = 200;
var PhotoViewerMaxPhotoHeightDirective = /** @class */ (function () {
    function PhotoViewerMaxPhotoHeightDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PhotoViewerMaxPhotoHeightDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var element = this.elementRef.nativeElement;
        // We can't take window resize event from the method `Observable.fromEvent`
        // because we use `renderer` for listening events
        var windowResize = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this.renderer.listen('window', 'resize', function (event) { return observer.next(event); });
        });
        windowResize
            .throttleTime(WINDOW_RESIZE_DEBOUNCE_MS)
            .debounceTime(0)
            .subscribe(function (event) { return _this.recomputePhotoMaxHeight(element); });
        this.recomputePhotoMaxHeight(element);
    };
    PhotoViewerMaxPhotoHeightDirective.prototype.recomputePhotoMaxHeight = function (element) {
        var _this = this;
        var parent = element.parentNode;
        var parentStyles = this.getStyle(parent);
        var parentHeight = parentStyles.height || parentStyles.getPropertyValue('height');
        var paddingTop = parentStyles.paddingTop || parentStyles.getPropertyValue('paddingTop');
        var parentHeightNumber = Number(parentHeight.replace('px', ''));
        var parentPaddingTopNumber = Number(paddingTop.replace('px', ''));
        var targetImgs = Array.from(element.querySelectorAll('img'));
        targetImgs.forEach(function (image) {
            _this.renderer.setStyle(image, 'max-height', parentHeightNumber - 2 * parentPaddingTopNumber + "px");
        });
    };
    PhotoViewerMaxPhotoHeightDirective.prototype.getStyle = function (element) {
        return window.getComputedStyle ? getComputedStyle(element, '') : element.currentStyle;
    };
    PhotoViewerMaxPhotoHeightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[ab-max-photo-height]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
    ], PhotoViewerMaxPhotoHeightDirective);
    return PhotoViewerMaxPhotoHeightDirective;
    var _a, _b;
}());

//# sourceMappingURL=photo-viewer-max-photo-height.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/photo-viewer/photo-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ab-photo-viewer\">\n  <div class=\"ab-photo-viewer__inner\">\n\n    <div class=\"ab-photo-viewer__header\">\n      <div class=\"ab-photo-viewer__exit\">\n        <div class=\"ab-photo-viewer__button\" (click)=\"close($event)\">\n          <i class=\"material-icons md-24\">arrow_back</i>\n        </div>\n      </div>\n      <div class=\"ab-photo-viewer__title\">\n        <span>\n          <span>{{photoViewerService?.photoNumber$ | async}}</span>\n          <span i18n>из</span>\n          <span>{{(photoViewerService?.photos$ | async)?.length}}</span>\n        </span>\n      </div>\n    </div>\n\n    <div class=\"ab-photo-viewer__control ab-photo-viewer__control-left\"\n         *ngIf=\"(photoViewerService?.photoNumber$ | async) > 1\">\n      <div class=\"ab-photo-viewer__button\" (click)=\"prevPhoto($event)\">\n        <i class=\"material-icons md-36\">keyboard_arrow_left</i>\n      </div>\n    </div>\n    <div class=\"ab-photo-viewer__control ab-photo-viewer__control-right\"\n         *ngIf=\"(photoViewerService?.photos$ | async)?.length > (photoViewerService?.photoNumber$ | async)\">\n      <div class=\"ab-photo-viewer__button\" (click)=\"nextPhoto($event)\">\n        <i class=\"material-icons md-36\">keyboard_arrow_right</i>\n      </div>\n    </div>\n\n    <div #swipeContainer class=\"swipe ab-photo-viewer__swipe\" [class.comment]=\"commentShowing$ | async\">\n      <div class=\"swipe-wrap ab-photo-viewer__swipe-wrap\">\n        <div class=\"ab-photo-viewer__photo-wrap\" *ngFor=\"let photo of photoViewerService?.photos$ | async\">\n          <ab-image (dblclick)=\"photoClicked($event)\" ab-max-photo-height class=\"image ab-photo-viewer__photo\" [abImageModel]=\"photo\"></ab-image>\n          <div class=\"ab-photo-viewer__photo-comment\">\n            <div class=\"ab-photo-viewer__photo-comment-text\">{{photo.title}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/photo-viewer/photo-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n/* Main section */\n/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n/* Main section */\n/* Prefixes */\n/* Material MediaQuery Breakpoints */\n/* Common */\n/* Themes */\n/* Photo Viewer */\n:host, .ab-photo-viewer, .ab-photo-viewer__inner, .ab-photo-viewer__swipe, .ab-photo-viewer__swipe-wrap, .ab-photo-viewer__slide {\n  width: 100%;\n  height: 100%;\n  display: block; }\n\n.ab-photo-viewer__photo-wrap, .ab-photo-viewer__control {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n/**\r\n * Usage example:\r\n *\r\n * @include bem(block) {\r\n *   background: #faf;\r\n *   @include bem($element: element) {\r\n *     color: #8496F3;\r\n *     @include bem($modifier: modifier_key_value) {\r\n *       border: 1px solid #f5f;\r\n *       &:hover {\r\n *         background: #000;\r\n *       }\r\n *     }\r\n *   }\r\n * }\r\n */\n/**\r\n * Extended mixin taken from angular-material (@see )\r\n * @param {string} $color - color for input placeholder\r\n * @param {:hover|:active|:focus|null} $target-pseudo - parent pseudo-class\r\n * E.g.: @include input-placeholder-color(#faf);\r\n * E.g.: @include input-placeholder-color(#faf, (hover: #ff0));\r\n * E.g.: @include input-placeholder-color(#faf, (hover: #ff0, active: #0ff), false) {\r\n *    transition: all .2s ease;\r\n * }\r\n */\n/**\r\n * Four points:\r\n * ----------------\r\n * xs: 600px\r\n * sm: 1024px\r\n * md: 1280px\r\n * lg or xl: 1920px\r\n * ----------------\r\n *\r\n * xs\r\n * lt-xs\r\n * gt-xs\r\n * sm\r\n * lt-sm\r\n * gt-sm\r\n * md\r\n * lt-md\r\n * gt-md\r\n * lg\r\n * lt-lg\r\n * gt-lg\r\n * xl\r\n * gt-xl\r\n */\n:host, .ab-photo-viewer, .ab-photo-viewer__inner, .ab-photo-viewer__swipe, .ab-photo-viewer__swipe-wrap, .ab-photo-viewer__slide {\n  width: 100%;\n  height: 100%;\n  display: block; }\n\n.ab-photo-viewer__photo-wrap, .ab-photo-viewer__control {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n:host(.closed) {\n  opacity: 0;\n  pointer-events: none; }\n\n:host {\n  position: fixed;\n  z-index: 200;\n  opacity: 1;\n  pointer-events: auto;\n  background-color: black;\n  transition: all 0.4s cubic-bezier(0.35, 0, 0.25, 1) 0s; }\n\n.ab-photo-viewer__swipe {\n  overflow: hidden;\n  visibility: hidden;\n  position: relative; }\n\n.ab-photo-viewer__swipe-wrap {\n  overflow: hidden;\n  position: relative; }\n  .ab-photo-viewer__swipe-wrap > div {\n    float: left;\n    width: 100%;\n    position: relative;\n    overflow: hidden; }\n\n.ab-photo-viewer__photo-wrap {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  padding: 20px 100px;\n  box-sizing: border-box;\n  transition: all 0.4s cubic-bezier(0.35, 0, 0.25, 1) 0s; }\n  @media screen and (max-width: 599px) {\n    .ab-photo-viewer__photo-wrap {\n      padding: 0; } }\n  .comment .ab-photo-viewer__photo-wrap .ab-photo-viewer__photo-comment {\n    opacity: .9; }\n\n.ab-photo-viewer__photo-comment {\n  position: absolute;\n  opacity: 0;\n  bottom: 25px;\n  max-width: 80%;\n  background: rgba(0, 0, 0, 0.38);\n  color: white;\n  font-family: \"Ubuntu\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  padding: 8px 12px;\n  border-radius: 5px;\n  transition: all 0.4s cubic-bezier(0.35, 0, 0.25, 1) 0s; }\n  @media screen and (max-width: 599px) {\n    .ab-photo-viewer__photo-comment {\n      max-height: 100px;\n      overflow-y: auto;\n      overflow-x: hidden; } }\n\n.ab-photo-viewer__photo {\n  max-width: 100%;\n  width: 100%;\n  max-height: 100%;\n  box-sizing: border-box;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .ab-photo-viewer__photo /deep/ img {\n    -o-object-fit: contain;\n       object-fit: contain;\n    min-width: initial; }\n  .ab-photo-viewer__photo /deep/ .ab-image {\n    background-color: transparent; }\n\n.ab-photo-viewer__control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  z-index: 201; }\n  .ab-photo-viewer__control .ab-photo-viewer__button {\n    background-color: rgba(255, 255, 255, 0.2); }\n  @media screen and (max-width: 599px) {\n    .ab-photo-viewer__control {\n      display: none; } }\n\n.ab-photo-viewer__control-left {\n  left: 0; }\n  .ab-photo-viewer__control-left .ab-photo-viewer__button {\n    position: relative;\n    right: -49px; }\n  .ab-photo-viewer__control-left i {\n    right: 1px; }\n\n.ab-photo-viewer__control-right {\n  right: 0; }\n  .ab-photo-viewer__control-right .ab-photo-viewer__button {\n    position: relative;\n    left: -49px; }\n  .ab-photo-viewer__control-right i {\n    left: 1px; }\n\n.ab-photo-viewer__button {\n  cursor: pointer;\n  border-radius: 60px;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: all 0.2s cubic-bezier(0.35, 0, 0.25, 1) 0s; }\n  .ab-photo-viewer__button > i {\n    color: rgba(255, 255, 255, 0.9);\n    position: relative;\n    top: 13px; }\n  .ab-photo-viewer__button:active {\n    background-color: rgba(255, 255, 255, 0.3) !important; }\n\n.ab-photo-viewer__header {\n  position: absolute;\n  z-index: 202;\n  padding: 15px;\n  width: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n  .ab-photo-viewer__header .ab-photo-viewer__button i {\n    top: 18px; }\n  .ab-photo-viewer__header:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    box-shadow: none;\n    *zoom: 1;\n    filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#00000000', endColorstr='#66000000');\n    background-image: -owg-linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.4));\n    background-image: linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.4)); }\n\n.ab-photo-viewer__exit {\n  z-index: 1;\n  -ms-flex-preferred-size: 60px;\n      flex-basis: 60px; }\n\n.ab-photo-viewer__title {\n  z-index: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  font-size: 1.1em;\n  font-family: \"Ubuntu\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif; }\n  .ab-photo-viewer__title > span {\n    position: relative;\n    left: -30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/photo-viewer/photo-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_swipejs__ = __webpack_require__("../../../../swipejs/swipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_swipejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_swipejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photo_viewer_service__ = __webpack_require__("../../../../../src/app/shared/components/photo-viewer/photo-viewer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotoViewerComponent = /** @class */ (function () {
    function PhotoViewerComponent(photoViewerService, renderer) {
        this.photoViewerService = photoViewerService;
        this.renderer = renderer;
        this.startSlide = 0;
        this.speed = 300;
        this.auto = 3000;
        this.draggable = true;
        this.continuous = false;
        this.disableScroll = true;
        this.stopPropagation = false;
        this.callback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.transitionEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.commentShowing$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](true);
    }
    PhotoViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.photoViewerService.photoNumber$.subscribe(function (photoNumber) {
            _this._getOrCreateSwipe().slide(photoNumber - 1, 1);
        });
        this.photoViewerService.isOpen$
            .filter(function (state) { return state; })
            .combineLatest(this.photoViewerService.photos$, function (state, photos) { return photos; })
            .delay(100)
            .subscribe(function (photos) {
            _this._createNewSwipeIfExists();
        });
        this.transitionEnd.subscribe(function (_a) {
            var index = _a[0], element = _a[1];
            _this.photoViewerService.setPhotoNumber(index + 1);
        });
        this.renderer.listen(document, 'keydown', function (evt) {
            evt = evt || (window && window.event);
            var isEscape = false;
            if ('key' in evt) {
                isEscape = evt.key === 'Escape' || evt.key === 'Esc';
            }
            else {
                isEscape = evt.keyCode === 27;
            }
            if (isEscape) {
                _this.photoViewerService.closePhotoViewer();
            }
        });
    };
    PhotoViewerComponent.prototype._createNewSwipeIfExists = function () {
        if (this.swipe) {
            this.swipe.kill();
            this.swipe = null;
        }
        return this._getOrCreateSwipe();
    };
    PhotoViewerComponent.prototype._getOrCreateSwipe = function () {
        var _this = this;
        if (this.swipe) {
            return this.swipe;
        }
        this.swipe = new __WEBPACK_IMPORTED_MODULE_1_swipejs__(this.swipeContainer.nativeElement, {
            startSlide: this.startSlide,
            speed: this.speed,
            draggable: this.draggable,
            continuous: this.continuous,
            disableScroll: this.disableScroll,
            stopPropagation: this.stopPropagation,
            callback: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.callback.emit(args);
            },
            transitionEnd: function (index, element) { return _this.transitionEnd.emit([index, element]); }
        });
        return this.swipe;
    };
    PhotoViewerComponent.prototype.prevPhoto = function (evt) {
        this._getOrCreateSwipe().prev();
    };
    PhotoViewerComponent.prototype.nextPhoto = function (evt) {
        this._getOrCreateSwipe().next();
    };
    PhotoViewerComponent.prototype.close = function (evt) {
        this.photoViewerService.closePhotoViewer();
        this.commentShowing$.next(true);
    };
    PhotoViewerComponent.prototype.photoClicked = function (evt) {
        this.commentShowing$.next(!this.commentShowing$.getValue());
    };
    PhotoViewerComponent.prototype.onPopState = function (event) {
        var _this = this;
        var subscription = this.photoViewerService.isOpen$
            .filter(function (state) { return state; })
            .delay(0)
            .subscribe(function () {
            subscription.unsubscribe();
            _this.close();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('swipeContainer'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], PhotoViewerComponent.prototype, "swipeContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PhotoViewerComponent.prototype, "startSlide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PhotoViewerComponent.prototype, "speed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PhotoViewerComponent.prototype, "auto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PhotoViewerComponent.prototype, "draggable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PhotoViewerComponent.prototype, "continuous", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PhotoViewerComponent.prototype, "disableScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PhotoViewerComponent.prototype, "stopPropagation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PhotoViewerComponent.prototype, "callback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PhotoViewerComponent.prototype, "transitionEnd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:popstate', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PhotoViewerComponent.prototype, "onPopState", null);
    PhotoViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ab-photo-viewer',
            template: __webpack_require__("../../../../../src/app/shared/components/photo-viewer/photo-viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/photo-viewer/photo-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__photo_viewer_service__["a" /* PhotoViewerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__photo_viewer_service__["a" /* PhotoViewerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _c || Object])
    ], PhotoViewerComponent);
    return PhotoViewerComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=photo-viewer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/photo-viewer/photo-viewer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoViewerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoViewerService = /** @class */ (function () {
    function PhotoViewerService() {
        this.photos$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        this.photoNumber$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.isOpen$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
        this.photo$ = this.photoNumber$.combineLatest(this.photos$, function (photoNumber, photos) { return photos[photoNumber - 1]; });
    }
    PhotoViewerService.prototype.setPhotoNumber = function (photoNumber) {
        this.photoNumber$.next(photoNumber);
    };
    PhotoViewerService.prototype.setPhotos = function (photos) {
        this.photos$.next(photos);
    };
    PhotoViewerService.prototype.closePhotoViewer = function () {
        this.isOpen$.next(false);
    };
    PhotoViewerService.prototype.openPhotoViewer = function () {
        this.isOpen$.next(true);
    };
    PhotoViewerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PhotoViewerService);
    return PhotoViewerService;
}());

//# sourceMappingURL=photo-viewer.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/api/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export API_PROTOCOL */
/* unused harmony export API_HOST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_config__ = __webpack_require__("../../../../../src/environments/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var API_PROTOCOL = 'http';
var API_HOST = __WEBPACK_IMPORTED_MODULE_2__environments_config__["a" /* config */].apiServer;
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.createPresentation = function () {
        return this._post('/presentations')
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    ApiService.prototype.getPresentation = function (id) {
        return this._get("/presentations/" + id)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.updatePresentation = function (id, data) {
        return this._post("/presentations/" + id, data)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    ApiService.prototype.getQrCode = function (id) {
        return this._get("/presentations/" + id + "/qr")
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    ApiService.prototype._buildApiEndpoint = function (path) {
        if (!path.startsWith('/')) {
            path = '/' + path;
        }
        return API_PROTOCOL + "://" + API_HOST + "/api" + path;
    };
    ApiService.prototype._get = function (path, qs) {
        if (qs === void 0) { qs = {}; }
        var endpoint = this._buildApiEndpoint(path);
        var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        for (var qsKey in qs) {
            search.set(qsKey, qs[qsKey]);
        }
        return this.http.get(endpoint, { search: search });
    };
    ApiService.prototype._post = function (path, data) {
        if (data === void 0) { data = {}; }
        var endpoint = this._buildApiEndpoint(path);
        return this.http.post(endpoint, data);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ApiService);
    return ApiService;
    var _a;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/canvas/canvas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanvasService = /** @class */ (function () {
    function CanvasService() {
        this.files = [];
        this.onImagesLoaded = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this._frames = 0;
    }
    CanvasService.prototype.init = function (params) {
        this.files = params && params.Files || [];
        this._createGameInstance();
        this._attachEvents();
    };
    CanvasService.prototype.showSlide = function (number) {
        if (!this.parent) {
            return;
        }
        console.log("Showing " + number + " slide");
        var game = this.game;
        var currentImage = this._image;
        if (currentImage) {
            currentImage.destroy();
        }
        var image = this._image = game.add.image(0, 0, "slide" + number);
        image.anchor.setTo(.5, .5);
        image.position.set(this.screenWidth / 2, this.screenHeight / 2);
        var imageWidth = image.width;
        var imageHeight = image.height;
        var screenWidth = this.screenWidth;
        var screenHeight = this.screenHeight;
        var heightRatio = screenHeight / imageHeight;
        var widthRatio = screenWidth / imageWidth;
        if (widthRatio < heightRatio) {
            image.scale.set(widthRatio, widthRatio);
        }
        else {
            image.scale.set(heightRatio, heightRatio);
        }
    };
    CanvasService.prototype.draw = function (params) {
        if (!this.game) {
            return false;
        }
        console.log(params);
        if (!this._lastParams || this._lastParams.lineCode !== params.lineCode) {
            this._startPath(params);
        }
        else {
            this._continuePath(params);
        }
        this._lastParams = params;
    };
    CanvasService.prototype.clear = function (params) {
        if (params === void 0) { params = {}; }
        var game = this.game;
        console.log(game);
        game.stage.children[0].children.filter(function (val) {
            return val.type === 3;
        }).forEach(function (x) { return x.destroy(); });
    };
    CanvasService.prototype._startPath = function (params) {
        console.log('Starting new path');
        var game = this.game;
        var currentGraphics = game.add.graphics(0, 0);
        var offsetX = this._image.x - this._image.width / 2;
        var offsetY = this._image.y - this._image.height / 2;
        currentGraphics.lineStyle(0);
        currentGraphics.beginFill(params.color, params.alpha);
        currentGraphics.drawCircle(this._image.width * params.x + offsetX, this._image.height * params.y + offsetY, params.lineWidth);
        currentGraphics.endFill();
    };
    CanvasService.prototype._continuePath = function (params) {
        console.log('Continuing new path');
        var game = this.game;
        var offsetX = this._image.x - this._image.width / 2;
        var offsetY = this._image.y - this._image.height / 2;
        var currentGraphics = game.add.graphics(0, 0);
        currentGraphics.lineStyle(params.lineWidth, params.color, params.alpha);
        currentGraphics.moveTo(this._lastParams.x * this._image.width + offsetX, this._lastParams.y * this._image.height + offsetY);
        currentGraphics.lineTo(params.x * this._image.width + offsetX, params.y * this._image.height + offsetY);
        currentGraphics.lineStyle(0);
        currentGraphics.beginFill(params.color, params.alpha);
        currentGraphics.drawCircle(params.x * this._image.width + offsetX, params.y * this._image.height + offsetY, params.lineWidth);
        currentGraphics.endFill();
    };
    CanvasService.prototype._createGameInstance = function () {
        var optimalSize = this.optimalGameSize;
        this.game = new Phaser.Game(optimalSize.width, optimalSize.height, Phaser.AUTO, 'presentation-canvas', {
            preload: this._preload.bind(this),
            create: this._create.bind(this),
            update: this._update.bind(this),
            render: this._render.bind(this)
        });
        this.game.classInstance = this;
    };
    CanvasService.prototype._preload = function () {
        var game = this.game;
        game.load.crossOrigin = 'anonymous';
        var files = this.files;
        for (var fileIndex = 0; fileIndex < files.length; ++fileIndex) {
            game.load.image("slide" + (fileIndex + 1), files[fileIndex].fileUrl);
        }
    };
    CanvasService.prototype._create = function () {
        var _this = this;
        this.onImagesLoaded.next(true);
        var game = this.game;
        game.stage.backgroundColor = '#FFFFFF';
        game.time.advancedTiming = true;
        this._cursors = game.input.keyboard.createCursorKeys();
        game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        game.scale.setResizeCallback(function () { return _this._resize(); }, game);
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.refresh();
    };
    CanvasService.prototype._update = function () {
        this._frames++;
    };
    CanvasService.prototype._render = function () {
        //this.game.debug.cameraInfo(this.game.camera, 32, 32);
    };
    CanvasService.prototype._attachEvents = function () {
        window.addEventListener('resize', this._resize.bind(this));
        this._resize();
    };
    CanvasService.prototype._detachEvents = function () {
        window.removeEventListener('resize', this._resize.bind(this));
    };
    CanvasService.prototype._resize = function () {
        var game = this.game;
        game.paused = false;
        if (this._image && this.parent) {
            this._image.position.set(this.screenWidth / 2, this.screenHeight / 2);
        }
    };
    Object.defineProperty(CanvasService.prototype, "optimalGameSize", {
        get: function () {
            var maxSideSize = 1200;
            var width = this.screenWidth;
            var height = this.screenHeight;
            var ratio = width / height;
            if (width > height) {
                width = maxSideSize;
                height = width / ratio;
            }
            else {
                ratio = height / width;
                height = maxSideSize;
                width = height / ratio;
            }
            return { width: width, height: height };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasService.prototype, "parent", {
        get: function () {
            return document.querySelector('#presentation-canvas');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasService.prototype, "screenWidth", {
        get: function () {
            return this.parent.clientWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasService.prototype, "screenHeight", {
        get: function () {
            return this.parent.clientHeight;
        },
        enumerable: true,
        configurable: true
    });
    CanvasService.prototype.destroy = function () {
        this._detachEvents();
        this.onImagesLoaded.next(false);
        if (this.game) {
            if (this._image) {
                this._image.destroy();
            }
            this.game.destroy();
        }
        this._image = null;
        this.game = null;
    };
    CanvasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CanvasService);
    return CanvasService;
}());

//# sourceMappingURL=canvas.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/meta/meta.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return META_CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var META_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('meta config');
/*

interface MetaConfig {
  /!**
   * Flag to append an optional title suffix to the title.
   * Default value: false
   *!/
  useTitleSuffix?: boolean;
  /!**
   * A dictionary of default meta tags and their values
   *!/
  defaults?: {
    /!**
     * The default title, used when a route does not have its own titleSuffix.
     *!/
    title?: string;
    /!**
     * The default titleSuffix, used when useTitleSuffix is set to true
     * and a route does not have its own titleSuffix.
     *!/
    titleSuffix?: string;
    [key: string]: string;
  };
}
*/

//# sourceMappingURL=meta.config.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/meta/meta.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meta_service__ = __webpack_require__("../../../../../src/app/shared/services/meta/meta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meta_config__ = __webpack_require__("../../../../../src/app/shared/services/meta/meta.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MetaModule = /** @class */ (function () {
    function MetaModule() {
    }
    MetaModule_1 = MetaModule;
    MetaModule.forRoot = function (metaConfig) {
        if (metaConfig === void 0) { metaConfig = { useTitleSuffix: false, defaults: {} }; }
        return {
            ngModule: MetaModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__meta_config__["a" /* META_CONFIG */], useValue: metaConfig },
                __WEBPACK_IMPORTED_MODULE_3__meta_service__["a" /* MetaService */]
            ]
        };
    };
    MetaModule = MetaModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
            ]
        })
    ], MetaModule);
    return MetaModule;
    var MetaModule_1;
}());

//# sourceMappingURL=meta.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/meta/meta.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__meta_config__ = __webpack_require__("../../../../../src/app/shared/services/meta/meta.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var isDefined = function (val) { return typeof val !== 'undefined'; };
var MetaService = /** @class */ (function () {
    function MetaService(router, document, titleService, activatedRoute, metaConfig) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this.metaConfig = metaConfig;
        this.router.events
            .filter(function (event) { return (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]); })
            .map(function () { return _this._findLastChild(_this.activatedRoute); })
            .subscribe(function (routeData) {
            _this._updateMetaTags(routeData.meta);
        });
    }
    MetaService.prototype._findLastChild = function (activatedRoute) {
        var snapshot = activatedRoute.snapshot;
        var child = snapshot.firstChild;
        while (child.firstChild !== null) {
            child = child.firstChild;
        }
        return child.data;
    };
    MetaService.prototype._getOrCreateMetaTag = function (name) {
        var el = this.document.querySelector("meta[name='" + name + "']");
        if (!el) {
            el = this.document.createElement('meta');
            el.setAttribute('name', name);
            this.document.head.appendChild(el);
        }
        return el;
    };
    MetaService.prototype._updateMetaTags = function (meta) {
        var _this = this;
        if (meta === void 0) { meta = {}; }
        if (meta.disableUpdate) {
            return false;
        }
        this.setTitle(meta.title, meta.titleSuffix);
        Object.keys(meta).forEach(function (key) {
            if (key === 'title' || key === 'titleSuffix') {
                return;
            }
            _this.setTag(key, meta[key]);
        });
        Object.keys(this.metaConfig.defaults).forEach(function (key) {
            if (key in meta || key === 'title' || key === 'titleSuffix') {
                return;
            }
            _this.setTag(key, _this.metaConfig.defaults[key]);
        });
    };
    MetaService.prototype.setTitle = function (title, titleSuffix) {
        var titleElement = this._getOrCreateMetaTag('title');
        var ogTitleElement = this._getOrCreateMetaTag('og:title');
        var titleStr = isDefined(title) ? title : (this.metaConfig.defaults['title'] || '');
        if (this.metaConfig.useTitleSuffix) {
            titleStr += isDefined(titleSuffix) ? titleSuffix : (this.metaConfig.defaults['titleSuffix'] || '');
        }
        titleElement.setAttribute('content', titleStr);
        ogTitleElement.setAttribute('content', titleStr);
        this.titleService.setTitle(titleStr);
        return this;
    };
    MetaService.prototype.setTag = function (tag, value) {
        if (tag === 'title' || tag === 'titleSuffix') {
            throw new Error("Attempt to set " + tag + " through 'setTag': 'title' and 'titleSuffix' are reserved tag names.\n        Please use 'MetaService.setTitle' instead");
        }
        var tagElement = this._getOrCreateMetaTag(tag);
        var tagStr = isDefined(value) ? value : (this.metaConfig.defaults[tag] || '');
        tagElement.setAttribute('content', tagStr);
        if (tag === 'description') {
            var ogDescElement = this._getOrCreateMetaTag('og:description');
            ogDescElement.setAttribute('content', tagStr);
        }
        return this;
    };
    MetaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__meta_config__["a" /* META_CONFIG */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, Object])
    ], MetaService);
    return MetaService;
    var _a, _b, _c;
}());

//# sourceMappingURL=meta.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/no-sanitization/no-sanitization.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoSanitizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NoSanitizationService = /** @class */ (function () {
    function NoSanitizationService() {
    }
    NoSanitizationService.prototype.sanitize = function (ctx, value) {
        return value;
    };
    NoSanitizationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], NoSanitizationService);
    return NoSanitizationService;
}());

//# sourceMappingURL=no-sanitization.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/socket.io/socket-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PROTOCOL */
/* unused harmony export SOCKET_SERVER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_config__ = __webpack_require__("../../../../../src/environments/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bluebird__ = __webpack_require__("../../../../bluebird/js/browser/bluebird.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PROTOCOL = 'http';
var SOCKET_SERVER = __WEBPACK_IMPORTED_MODULE_1__environments_config__["a" /* config */].socketIoServer;
var SocketApiService = /** @class */ (function () {
    function SocketApiService() {
        this._transports = ['websocket'];
        this._isJoined = false;
        this.onSlideChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.onDraw = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.onClear = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
    }
    SocketApiService.prototype.joinServer = function () {
        var _this = this;
        if (this._isJoined && this._socket) {
            return __WEBPACK_IMPORTED_MODULE_2_bluebird___default.a.resolve(this._socket);
        }
        var publicIp = SOCKET_SERVER;
        var socket = this._socket = io(publicIp, {
            transports: this._transports
        });
        socket.on('disconnect', function () {
            console.log('Disconnected from the server:', publicIp, socket.id);
        });
        socket.on('app.error', function (data) {
            console.log('app.error', data);
        });
        return new __WEBPACK_IMPORTED_MODULE_2_bluebird___default.a(function (resolve, reject) {
            socket.on('connect', function () {
                console.log('Connected to the server:', publicIp, socket.id);
                _this._isJoined = true;
                _this._subscribeSlideChanges();
                _this._subscribeDrawing();
                _this._subscribeClear();
                resolve(socket);
            });
        });
    };
    SocketApiService.prototype.joinRoom = function (params) {
        var _this = this;
        var id = params.id;
        this._socket.emit('room.join', { id: id });
        return new __WEBPACK_IMPORTED_MODULE_2_bluebird___default.a(function (resolve, reject) {
            _this._socket.once('room.joined', function (data) { return resolve(data); });
        });
    };
    SocketApiService.prototype.onCloseQrLayer = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this._socket.once('room.closeQrLayer', function (data) {
            subject.next(true);
        });
        return subject;
    };
    SocketApiService.prototype._subscribeSlideChanges = function () {
        var _this = this;
        this._socket.on('room.setSlideNumber', function (data) {
            _this.onSlideChanged.next(data.slideNumber);
        });
    };
    SocketApiService.prototype._subscribeDrawing = function () {
        var _this = this;
        this._socket.on('room.draw', function (data) {
            _this.onDraw.next(data);
        });
    };
    SocketApiService.prototype._subscribeClear = function () {
        var _this = this;
        this._socket.on('room.clear', function (data) {
            _this.onClear.next(data);
        });
    };
    SocketApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SocketApiService);
    return SocketApiService;
}());

//# sourceMappingURL=socket-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ab_image_ab_image_component__ = __webpack_require__("../../../../../src/app/shared/components/ab-image/ab-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ab_background_ab_background_component__ = __webpack_require__("../../../../../src/app/shared/components/ab-background/ab-background.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_photo_viewer_photo_viewer_component__ = __webpack_require__("../../../../../src/app/shared/components/photo-viewer/photo-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_photo_viewer_photo_viewer_service__ = __webpack_require__("../../../../../src/app/shared/components/photo-viewer/photo-viewer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ab_image_ab_image_service__ = __webpack_require__("../../../../../src/app/shared/components/ab-image/ab-image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_photo_viewer_photo_viewer_max_photo_height_directive__ = __webpack_require__("../../../../../src/app/shared/components/photo-viewer/photo-viewer-max-photo-height.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_api_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_socket_io_socket_api_service__ = __webpack_require__("../../../../../src/app/shared/services/socket.io/socket-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_canvas_canvas_service__ = __webpack_require__("../../../../../src/app/shared/services/canvas/canvas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatProgressSpinnerModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__components_ab_image_ab_image_component__["a" /* AbImageComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_ab_background_ab_background_component__["a" /* AbBackgroundComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_photo_viewer_photo_viewer_component__["a" /* PhotoViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_photo_viewer_photo_viewer_max_photo_height_directive__["a" /* PhotoViewerMaxPhotoHeightDirective */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__components_photo_viewer_photo_viewer_service__["a" /* PhotoViewerService */],
                __WEBPACK_IMPORTED_MODULE_7__components_ab_image_ab_image_service__["a" /* AbImageService */],
                __WEBPACK_IMPORTED_MODULE_10__services_api_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_11__services_socket_io_socket_api_service__["a" /* SocketApiService */],
                __WEBPACK_IMPORTED_MODULE_12__services_canvas_canvas_service__["a" /* CanvasService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__components_ab_image_ab_image_component__["a" /* AbImageComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_ab_background_ab_background_component__["a" /* AbBackgroundComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_photo_viewer_photo_viewer_component__["a" /* PhotoViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatProgressSpinnerModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    frontendServer: 'remote-drawing-client.alexbelov.xyz',
    socketIoServer: 'remote-drawing.alexbelov.xyz',
    apiServer: 'remote-drawing.alexbelov.xyz'
    // frontendServer: 'localhost:9001',
    // socketIoServer: 'localhost:9000',
    // apiServer: 'localhost:9000'
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/environments/firebase.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyAIX_ZpqvBe2eSB9K39lRhOouVdAxtbQSw",
    authDomain: "remote-drawing.firebaseapp.com",
    databaseURL: "https://remote-drawing.firebaseio.com",
    projectId: "remote-drawing",
    storageBucket: "remote-drawing.appspot.com",
    messagingSenderId: "1083116028094"
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");






if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map