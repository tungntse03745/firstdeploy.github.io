webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <div class=\"app__header\">\n   <app-header [language]= \"language\" (currentLanguage)=\"currentLanguage($event)\"></app-header>\n  </div>\n  <div class=\"app__content\" flexLayout=\"row wrap\">\n      <div class=\"app__content-main\" fxFlex =\"72\" fxFlex.xs=\"100\" fxFlex.sm=\"100\">\n        <app-main-content (currentSlide)=\"currentSlide($event)\" [language]= \"language\"></app-main-content>\n      </div>\n      <div class=\"app__content-right\" fxFlex =\"25\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" >\n        <app-right-content [currentSlides]=\"current\" [language]= \"language\"></app-right-content>\n      </div>\n  </div>\n    <div class=\"app__footer\">\n        <app-footer></app-footer>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".app {\n  width: 100%; }\n  .app .app__header {\n    width: 100%;\n    background-color: #3e3e3f;\n    color: white;\n    padding: 3px 0px; }\n  .app .app__content {\n    width: 100%;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    background-color: #f2f3f4; }\n  .app .app__content .app__content-main {\n      background-color: #ffff;\n      width: 100%;\n      margin: 20px 20px; }\n  .app .app__content .app__content-right {\n      width: 100%;\n      position: fixed;\n      right: 0px; }\n  @media only screen and (max-width: 768px) {\n      .app .app__content .app__content-right {\n        position: relative; } }\n  .app .app__footer {\n    background-color: #3e3e3f; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_shared_en__ = __webpack_require__("./src/app/component/shared/en.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_shared_language_constants__ = __webpack_require__("./src/app/component/shared/language.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_shared_jp__ = __webpack_require__("./src/app/component/shared/jp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_shared_vi__ = __webpack_require__("./src/app/component/shared/vi.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.language = __WEBPACK_IMPORTED_MODULE_1__component_shared_en__["a" /* ENGLISH */];
    };
    AppComponent.prototype.currentSlide = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.current = event;
        }, 1);
    };
    AppComponent.prototype.currentLanguage = function (event) {
        console.log('ev', event);
        switch (event) {
            case __WEBPACK_IMPORTED_MODULE_2__component_shared_language_constants__["a" /* LANGS */][0].id:
                this.language = __WEBPACK_IMPORTED_MODULE_1__component_shared_en__["a" /* ENGLISH */];
                break;
            case __WEBPACK_IMPORTED_MODULE_2__component_shared_language_constants__["a" /* LANGS */][1].id:
                this.language = __WEBPACK_IMPORTED_MODULE_3__component_shared_jp__["a" /* JAPANESE */];
                break;
            case __WEBPACK_IMPORTED_MODULE_2__component_shared_language_constants__["a" /* LANGS */][2].id:
                this.language = __WEBPACK_IMPORTED_MODULE_4__component_shared_vi__["a" /* VIETNAMEESE */];
                break;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_header_header_component__ = __webpack_require__("./src/app/component/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_right_content_right_content_component__ = __webpack_require__("./src/app/component/right-content/right-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_main_content_main_content_component__ = __webpack_require__("./src/app/component/main-content/main-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_footer_footer_component__ = __webpack_require__("./src/app/component/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_carousel__ = __webpack_require__("./node_modules/ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_right_content_component_download_image_dialog_download_image_dialog_component__ = __webpack_require__("./src/app/component/right-content/component/download-image-dialog/download-image-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_radio__ = __webpack_require__("./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_checkbox__ = __webpack_require__("./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var COMPONENT = [
    __WEBPACK_IMPORTED_MODULE_5__component_header_header_component__["a" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_6__component_right_content_right_content_component__["a" /* RightContentComponent */],
    __WEBPACK_IMPORTED_MODULE_7__component_main_content_main_content_component__["a" /* MainContentComponent */],
    __WEBPACK_IMPORTED_MODULE_8__component_footer_footer_component__["a" /* FooterComponent */]
];
var MODULE = [
    __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_9__angular_material_select__["a" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_10_ngx_carousel__["a" /* NgxCarouselModule */],
    __WEBPACK_IMPORTED_MODULE_11__angular_material_icon__["a" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_12__angular_material_dialog__["c" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material_radio__["a" /* MatRadioModule */],
    __WEBPACK_IMPORTED_MODULE_16__angular_material_checkbox__["a" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_17__angular_material_menu__["a" /* MatMenuModule */]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ].concat(COMPONENT, [
                __WEBPACK_IMPORTED_MODULE_14__component_right_content_component_download_image_dialog_download_image_dialog_component__["a" /* DownloadImageDialogComponent */],
            ]),
            imports: MODULE.slice(),
            providers: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_14__component_right_content_component_download_image_dialog_download_image_dialog_component__["a" /* DownloadImageDialogComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"footer__content\" flexLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n    <div class=\"footer__content-space\" fxFlex fxGrow=\"0.5\"></div>\n    <div class=\"footer__content-image\" fxFlex=\"5\" fxFlex.xs=\"15\">\n      <img src=\"../assets/image/logo_footer.png\" alt=\"\">\n    </div>\n    <div fxFlex fxGrow=\"1\"></div>\n      <div class= \"footer__content-btn\">\n          <div flexLayout=\"row\" fxLayoutAlign=\"center center\">\n              <div fxFlex=\"90px\" class=\"footer__content-icon\" fxLayoutAlign=\"center center\">\n                <img src=\"{{image.FACEBOOK}}\" alt=\"\">\n                <span>Facebook</span>\n              </div>\n              <div fxFlex=\"90px\" class=\"footer__content-icon\" fxLayoutAlign=\"center center\">\n                <img src=\"{{image.GIT}}\" alt=\"\">\n                <span>Github</span>\n              </div>\n              <div fxFlex=\"90px\" class=\"footer__content-icon\" fxLayoutAlign=\"center center\">\n                <img src=\"{{image.YOUTUBE}}\" alt=\"\">\n                <span>Youtube</span>\n              </div>\n            </div>\n            <div flexLayout=\"row\" fxLayoutAlign=\"center center\">\n              <div fxFlex=\"90px\" class=\"footer__content-icon\" fxLayoutAlign=\"center center\">\n                <img src=\"{{image.LINKEDIN}}\" alt=\"\">\n                <span>LinkedIn</span>\n              </div>\n              <div fxFlex=\"90px\" class=\"footer__content-icon\" fxLayoutAlign=\"center center\">\n                <img src=\"{{image.REDDIT}}\" alt=\"\">\n                <span>Reddit</span>\n              </div>\n              <div fxFlex=\"90px\" class=\"footer__content-icon\" fxLayoutAlign=\"center center\">\n                <img src=\"{{image.TWITTER}}\" alt=\"\">\n                <span>Twitter</span>\n              </div>\n            </div>\n      </div>\n    <div fxFlex fxGrow=\"1\"></div>\n\n  </div>\n  <hr>\n  <div class=\"footer__copyright\">\n    <span>&copy;Copyright TungNT 2018</span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".footer {\n  color: white; }\n  .footer .footer__content {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n  .footer .footer__content .footer__content-image {\n      padding: 10px 0px; }\n  .footer .footer__content .footer__content-image img {\n        width: 100%; }\n  .footer .footer__content .footer__content-btn {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n  @media only screen and (max-width: 768px) {\n      .footer .footer__content .footer__content-btn {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; }\n        .footer .footer__content .footer__content-btn .footer__content-icon {\n          margin: 5px; } }\n  .footer .footer__content-icon {\n    cursor: pointer; }\n  .footer .footer__content-icon img {\n      margin-right: 2px; }\n  .footer .footer__content-icon:hover {\n    opacity: 0.5; }\n  .footer .footer__content-icon:active {\n    -webkit-filter: brightness(30%);\n            filter: brightness(30%); }\n  .footer hr {\n    color: white; }\n  .footer .footer__copyright {\n    text-align: center;\n    padding: 10px 0px; }\n"

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_image_constants__ = __webpack_require__("./src/app/component/shared/image.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.image = __WEBPACK_IMPORTED_MODULE_1__shared_image_constants__["a" /* IMAGE */];
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/component/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/component/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" flexLayout=\"row\" fxLayoutAlign=\"center center\" #menu>\n    <div fxFlex fxGrow=\"0.1\"></div>\n  <div class=\"header__logo\" fxFlex=\"40px\">\n    <img src=\"{{logo}}\" alt=\"\" class=\"header__logo-img\">\n  </div>\n  <div fxFlex fxGrow=\"1\"></div>\n  <div class=\"header__menu\" fxFlex=\"45%\" fxLayoutAlign=\"center center\">\n \n    <div class=\"header__menu-content\" flexLayout=\"row\" fxLayoutAlign=\"center center\">\n      <a>{{language.VECTOR}}</a>\n      <a>{{language.PHOTO}}</a>\n      <a>{{language.LOGIN}}</a>\n      <a>{{language.SIGNUP}}</a>\n    </div>\n    <div flexLayout=\"row\" fxLayoutAlign=\"center center\">\n        <img src=\"{{languageImg}}\" alt=\"\">\n        <a class=\"header__menu-content-language\">\n          <select (change)=\"languageChange($event)\">\n            <option *ngFor=\"let lang of langs\" [value]=\"lang.id\">{{lang.value}}</option>\n          </select>\n        </a>\n    </div>\n    <div class=\"header__menu--toggle\" (click)=\"onToggleMenu($event)\">\n        <mat-icon [matMenuTriggerFor]=\"menu\">menu</mat-icon>\n        <mat-menu #menu=\"matMenu\" class=\"menu-dropDown\">\n            <button mat-menu-item>{{language.VECTOR}}</button>\n            <button mat-menu-item>{{language.PHOTO}}</button>\n            <button mat-menu-item>{{language.LOGIN}}</button>\n            <button mat-menu-item>{{language.SIGNUP}}</button>\n          </mat-menu>\n    </div>\n  </div>\n  <div fxFlex fxGrow=\"0.1\"></div>\n</div>"

/***/ }),

/***/ "./src/app/component/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".header .header__logo {\n  margin: 0px 0px 0px 0px; }\n  .header .header__logo .header__logo-img {\n    width: 100%;\n    cursor: pointer; }\n  .header .header__logo .header__logo-img:active {\n    -webkit-filter: brightness(30%);\n            filter: brightness(30%); }\n  .header .header__menu .header__menu--toggle {\n  display: none; }\n  @media only screen and (max-width: 768px) {\n  .header .header__menu .header__menu--toggle {\n    display: initial; }\n  .header .header__menu .header__menu-content a {\n    display: none; } }\n  .header .header__menu .header__menu-content a {\n  padding: 5px 5px;\n  cursor: pointer; }\n  .header .header__menu .header__menu-content a:hover {\n  opacity: 0.5; }\n  .header .header__menu .header__menu-content a:active {\n  -webkit-filter: brightness(30%);\n          filter: brightness(30%); }\n"

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_image_constants__ = __webpack_require__("./src/app/component/shared/image.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_language_constants__ = __webpack_require__("./src/app/component/shared/language.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this._currentLanguage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.languageImg = __WEBPACK_IMPORTED_MODULE_1__shared_image_constants__["a" /* IMAGE */].ENGLISH;
        this.logo = __WEBPACK_IMPORTED_MODULE_1__shared_image_constants__["a" /* IMAGE */].LOGO;
        this.langs = __WEBPACK_IMPORTED_MODULE_2__shared_language_constants__["a" /* LANGS */];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.languageChange = function (event) {
        var currentLang = this.langs.filter(function (el) { return el.id === event.target.value; });
        this.languageImg = currentLang[0].img;
        this._currentLanguage.emit(event.target.value);
    };
    HeaderComponent.prototype.onToggleMenu = function (event) {
        var navs = this.menuRef.nativeElement.querySelectorAll('.header__menu-content');
        navs.forEach(function (nav) { return nav.classList.toggle('Navbar__ToggleShow'); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('menu'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], HeaderComponent.prototype, "menuRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('currentLanguage'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], HeaderComponent.prototype, "_currentLanguage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "language", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/component/header/header.component.html"),
            styles: [__webpack_require__("./src/app/component/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/component/main-content/main-content.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\" flexLayout=\"row\" fxLayoutAlign=\"center center\">\n  <div class=\"main-content__left\" fxFlex=\"13\" fxFlex.xs=\"20\" fxFlex.sm=\"23\" flexLayout=\"column\">\n      <span>{{slides.length}}</span> <span> {{language.FILE_SET}}</span>\n    <div *ngFor = \"let slide of slides\" class=\"main-content__left__image\">\n      <img src=\"{{slide.src}}\" alt=\"\" (click)=\"onPressImage(slide)\">\n    </div>\n  </div>\n \n  <div class=\"main-content__right\" fxFlex=\"75\">\n      <ngx-carousel\n        [inputs]=\"carouselOne\"\n        (onMove)=\"onmoveFn($event)\" \n        [moveToSlide]=\"imageId\">\n            <ngx-item NgxCarouselItem *ngFor = \"let slide of slides\">\n                <img src=\"{{slide.src}}\" alt=\"\">\n            </ngx-item>\n          <span NgxCarouselPrev class='leftRs'><img src=\"{{image_icon.LEFT_ARROW}}\"></span>\n          <span NgxCarouselNext class='rightRs'><img src=\"{{image_icon.RIGHT_ARROW}}\"></span>\n    </ngx-carousel>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/main-content/main-content.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-content .main-content__left {\n  text-align: center;\n  padding: 10px; }\n  .main-content .main-content__left .main-content__left__image img {\n    width: 100%;\n    margin: 3px 0px;\n    cursor: pointer;\n    padding: 4px;\n    line-height: 1.42857143;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    -webkit-transition: border .2s ease-in-out;\n    transition: border .2s ease-in-out; }\n  .main-content .main-content__left .main-content__left__image img:hover {\n    opacity: 0.5; }\n  .main-content .main-content__left .main-content__left__image img:active {\n    -webkit-filter: brightness(30%);\n            filter: brightness(30%); }\n  .main-content .main-content__right {\n  padding: 35px; }\n  .main-content .main-content__right img {\n    width: 100%; }\n  ::ng-deep .leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  left: -40px;\n  cursor: pointer; }\n  .leftRs:hover {\n  opacity: 0.5; }\n  .leftRs:active {\n  -webkit-filter: brightness(30%);\n          filter: brightness(30%); }\n  ::ng-deep .rightRs {\n  cursor: pointer;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  right: -40px; }\n  .rightRs:hover {\n  opacity: 0.5; }\n  .rightRs:active {\n  -webkit-filter: brightness(30%);\n          filter: brightness(30%); }\n  @media only screen and (max-width: 768px) {\n  .main-content {\n    font-size: 9px; } }\n"

/***/ }),

/***/ "./src/app/component/main-content/main-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_image_constants__ = __webpack_require__("./src/app/component/shared/image.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_slides_constants__ = __webpack_require__("./src/app/component/shared/slides.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainContentComponent = /** @class */ (function () {
    function MainContentComponent() {
        this._currentSlide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.slides = __WEBPACK_IMPORTED_MODULE_2__shared_slides_constants__["a" /* SLIDES */];
        this.image_icon = __WEBPACK_IMPORTED_MODULE_1__shared_image_constants__["a" /* IMAGE */];
    }
    MainContentComponent.prototype.ngOnInit = function () {
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 10000,
            point: {
                visible: false
            },
            load: 2,
            touch: false,
            loop: true,
            custom: 'banner'
        };
    };
    MainContentComponent.prototype.onPressImage = function (event) {
        this.imageId = event.id - 1;
    };
    ;
    MainContentComponent.prototype.onmoveFn = function (event) {
        this._currentSlide.emit(event.currentSlide);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('currentSlide'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], MainContentComponent.prototype, "_currentSlide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], MainContentComponent.prototype, "language", void 0);
    MainContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-content',
            template: __webpack_require__("./src/app/component/main-content/main-content.component.html"),
            styles: [__webpack_require__("./src/app/component/main-content/main-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/component/right-content/component/download-image-dialog/download-image-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"download-image-dialog\">\n  <div class=\"download-image-dialog__header\">\n    <span>{{data.language.PREVIEW}}</span>\n  </div>\n  <div class=\"download-image-dialog__content\">\n    <img src=\"{{url}}\" alt=\"\" width=\"100%\">\n  </div>\n  <div class=\"download-image-dialog__footer\">\n    <a (click)=\"onPressClose()\">{{data.language.CLOSE}}</a>\n    <a href=\"{{url}}\" download>{{data.language.FREE_DOWNLOAD}}</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/right-content/component/download-image-dialog/download-image-dialog.component.scss":
/***/ (function(module, exports) {

module.exports = ".download-image-dialog .download-image-dialog__header {\n  margin-bottom: 5px; }\n\n.download-image-dialog .download-image-dialog__footer {\n  margin-top: 10px;\n  float: right; }\n\n.download-image-dialog .download-image-dialog__footer a {\n    background-color: #fda737;\n    padding: 5px;\n    margin: 10px 5px;\n    border-radius: 2px;\n    text-decoration: none;\n    cursor: pointer;\n    color: #fff; }\n\n.download-image-dialog .download-image-dialog__footer a:hover {\n    opacity: 0.5; }\n\n.download-image-dialog .download-image-dialog__footer a:active {\n    -webkit-filter: brightness(30%);\n            filter: brightness(30%); }\n"

/***/ }),

/***/ "./src/app/component/right-content/component/download-image-dialog/download-image-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadImageDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_slides_constants__ = __webpack_require__("./src/app/component/shared/slides.constants.ts");
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



var DownloadImageDialogComponent = /** @class */ (function () {
    function DownloadImageDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DownloadImageDialogComponent.prototype.ngOnInit = function () {
        this.url = __WEBPACK_IMPORTED_MODULE_2__shared_slides_constants__["a" /* SLIDES */][this.data.currentSlide].src;
    };
    DownloadImageDialogComponent.prototype.onPressClose = function () {
        this.dialogRef.close();
    };
    DownloadImageDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-download-image-dialog',
            template: __webpack_require__("./src/app/component/right-content/component/download-image-dialog/download-image-dialog.component.html"),
            styles: [__webpack_require__("./src/app/component/right-content/component/download-image-dialog/download-image-dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], DownloadImageDialogComponent);
    return DownloadImageDialogComponent;
}());



/***/ }),

/***/ "./src/app/component/right-content/right-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"right-content\">\n  <div class=\"right-content__download\" (click)=\"onPressDownload()\" flexLayout=\"row\" fxLayoutAlign=\"center center\">\n    <img src=\"{{image.DOWNLOAD}}\" alt=\"\" fxFlex=\"15px\">\n    <div>{{language.FREE_DOWNLOAD}}</div>\n  </div>\n  <div class=\"right-content__option\" flexLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-radio-button></mat-radio-button>\n    <span class=\"right-content__option-btn\">PSD</span>\n    <span class=\"right-content__option-btn\">PNG</span>\n    <span class=\"right-content__option-btn\">JPEG</span>\n    <span>33MB</span>\n    <span class=\"right-content__option-btn-free\">{{language.FREE}}</span>\n  </div>\n  <div class=\"right-content__action\" flexLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div fxFlex=\"48\" class=\"right-content__action-favourite\">\n      <mat-icon>favorite</mat-icon>\n    </div>\n    <div fxFlex fxGrow=\"1\"></div>\n    <div fxFlex=\"48\" class=\"right-content__action-share\">\n      <mat-icon>share</mat-icon>\n    </div>\n  </div>\n  <div class=\"right-content__description\" flexLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div class=\"right-content__description-title\" fxFlex=\"40\" flexLayout=\"row\" fxLayoutAlign=\"center center\">\n     <img src=\"{{image.PROFILE}}\" alt=\"\"> {{language.LICENSE}}\n    </div>\n    <div class=\"right-content__description-content\" fxFlex=\"60\" flexLayout=\"column\">\n      <div>\n        {{language.DESC1}}\n      </div>\n      <div>\n          {{language.DESC2}}\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/right-content/right-content.component.scss":
/***/ (function(module, exports) {

module.exports = ".right-content .right-content__download {\n  background-color: #fda737;\n  color: white;\n  cursor: pointer;\n  margin: 10px 0px;\n  padding: 10px;\n  text-align: center;\n  border-radius: 2px; }\n\n.right-content .right-content__download:hover {\n  background-color: orange; }\n\n.right-content .right-content__download:active {\n  background-color: gray; }\n\n.right-content .right-content__option {\n  background-color: #e6e7e9; }\n\n.right-content .right-content__option /deep/ .mat-radio-inner-circle {\n    background-color: #fda737; }\n\n.right-content .right-content__option /deep/ .mat-radio-outer-circle {\n    border-color: #fda737; }\n\n.right-content .right-content__option .right-content__option-btn {\n    cursor: pointer;\n    background-color: #fda737;\n    color: white;\n    padding: 3px;\n    border-radius: 2px; }\n\n.right-content .right-content__option .right-content__option-btn:hover {\n    opacity: 0.5; }\n\n.right-content .right-content__option .right-content__option-btn:active {\n    -webkit-filter: brightness(30%);\n            filter: brightness(30%); }\n\n.right-content .right-content__option span {\n    margin-right: 5px; }\n\n.right-content .right-content__option .right-content__option-btn-free {\n    color: green;\n    font-weight: bold; }\n\n.right-content .right-content__action {\n  margin: 10px 0px;\n  text-align: center; }\n\n.right-content .right-content__action .right-content__action-favourite, .right-content .right-content__action .right-content__action-share {\n    background-color: #ffff;\n    border-radius: 2px;\n    border: 1px solid #fda737;\n    padding: 5px 0px;\n    cursor: pointer; }\n\n.right-content .right-content__action .right-content__action-favourite mat-icon, .right-content .right-content__action .right-content__action-share mat-icon {\n      font-size: 21px;\n      color: #fda737; }\n\n.right-content .right-content__action .right-content__action-favourite:active {\n    -webkit-filter: brightness(30%);\n            filter: brightness(30%); }\n\n.right-content .right-content__action .right-content__action-share:active {\n    -webkit-filter: brightness(30%);\n            filter: brightness(30%); }\n\n.right-content .right-content__action .right-content__action-favourite:hover {\n    opacity: 0.5; }\n\n.right-content .right-content__action .right-content__action-share:hover {\n    opacity: 0.5; }\n\n.right-content .right-content__description {\n  background: #ffff; }\n\n.right-content .right-content__description .right-content__description-title {\n    border-right: 1px solid gray; }\n\n.right-content .right-content__description .right-content__description-title img {\n      opacity: 0.5; }\n\n.right-content .right-content__description .right-content__description-content {\n    margin-left: 2px; }\n\n@media only screen and (max-width: 768px) {\n  .right-content {\n    font-size: 9px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .right-content .right-content__action {\n      margin: 10px 0px; }\n    .right-content .right-content__download {\n      padding: 10px 0px; } }\n\n@media only screen and (max-width: 1279px) {\n  .right-content {\n    font-size: 9px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .right-content .right-content__action {\n      margin: 10px 0px; }\n    .right-content .right-content__download {\n      padding: 10px 0px; } }\n"

/***/ }),

/***/ "./src/app/component/right-content/right-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_download_image_dialog_download_image_dialog_component__ = __webpack_require__("./src/app/component/right-content/component/download-image-dialog/download-image-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_image_constants__ = __webpack_require__("./src/app/component/shared/image.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RightContentComponent = /** @class */ (function () {
    function RightContentComponent(dialog) {
        this.dialog = dialog;
        this.image = __WEBPACK_IMPORTED_MODULE_3__shared_image_constants__["a" /* IMAGE */];
    }
    Object.defineProperty(RightContentComponent.prototype, "currentSlides", {
        get: function () {
            return this._currentSlide;
        },
        set: function (value) {
            this.current = value;
            this._currentSlide = value;
        },
        enumerable: true,
        configurable: true
    });
    RightContentComponent.prototype.ngOnInit = function () {
    };
    RightContentComponent.prototype.onPressDownload = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__component_download_image_dialog_download_image_dialog_component__["a" /* DownloadImageDialogComponent */], {
            width: '500px',
            height: 'auto',
            data: { currentSlide: this.current || 0, language: this.language }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], RightContentComponent.prototype, "language", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RightContentComponent.prototype, "currentSlides", null);
    RightContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-right-content',
            template: __webpack_require__("./src/app/component/right-content/right-content.component.html"),
            styles: [__webpack_require__("./src/app/component/right-content/right-content.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["b" /* MatDialog */]])
    ], RightContentComponent);
    return RightContentComponent;
}());



/***/ }),

/***/ "./src/app/component/shared/en.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENGLISH; });
var ENGLISH = {
    VECTOR: 'Vector',
    PHOTO: 'Photos',
    LOGIN: 'Login',
    SIGNUP: 'Sign up',
    HOME: 'Home',
    BANNER: 'Web banner',
    FILE_SET: 'Files set',
    FREE_DOWNLOAD: 'Free Download',
    FREE: 'Free',
    LICENSE: 'License',
    DESC1: 'Free for commercial use',
    DESC2: 'No attribution required',
    PREVIEW: 'Preview',
    CLOSE: 'Close'
};


/***/ }),

/***/ "./src/app/component/shared/image.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IMAGE; });
var IMAGE = {
    LOGO: 'data:image/png;base64,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',
    LEFT_ARROW: 'data:image/png;base64,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',
    RIGHT_ARROW: 'data:image/png;base64,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',
    DOWNLOAD: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAA2NJREFUeNrs3MFtwzAQAEHRYP8tn4sQCEvemQKCmLxbOp+smbmApo8jAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAB4qn33B6y1Xn0AD/h/CPV/yPDTAarPr28A4E8AQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEAATAEYAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAELcdwTWOIH3+yzcAQACiliNw9wJgEHDnAmAgcNcCYDBwxwIACIAXAncrAAYFdyoABgZ3KQAGB3coAIAAeEFwdwJgkHBnAmCgcFcCYLBwRwIACIAXBncjAAYNdyIABg53IQAGD3cgAIAAeIFw9gJgEHHmAmAgcdYCYDBxxgIACIAXytkiAAbVmSIABtZZIgAG1xkiAIAAeMGcHQJgkJ0ZAmCgnRUCYLCdEQIACIAXztkgAAbdmQgABt5ZCAAG3xkIACAAeAF9dgHAIvjMAoCF8FkFAIvhMwoAIAB4IX22t1/IzNz9GWOojhjL755On6tvABbGZ/EnABbHZxAAQADwgvrdBQCLZPkFAAtl+QUAi2X5BQAQALywXn8BwKJZfgGgvnCWXwCILp7lFwBAAKi9wF5/ASAaAcsvAEQjYPkFgGgELL8AAAJA7VuA118AiEbA8gsA0QhYfgEgGgHLLwCAAFD7FuD1FwCiEbD8AkA0ApZfAIhGwPILACAA1L4FeP0FgGgELL8AEI2A5Y/ajkAE8A0AEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAIDH+Yf/BzCuEXwDAAQAEABAAAABAAQAEABAAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAA47AsAAP//AwDtbRV886/a4AAAAABJRU5ErkJggg==',
    PROFILE: 'data:image/png;base64,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',
    VIETNAM: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJUlEQVR4XtWWv4oTURSHvzN/MpMs7B/UwkLxAQRB0QUhj7HNlraCL2EnNiL6DGvhA4i2C5bW2ogLK1hkN5vNOMnMPcccDInjJtiMxX5wuHNn4Hz3d24zYmb8TyLgcgsESIAcSGmXCigF2P6+t3dCHNM21w8OdhJggyii2+/TJj8PD/HeLkhUFZtM0LMzMAMRX3EQAZjv5++jxbvm9znR1hamCpC4AKsqrCi8WIsBMQ4EQFiLpSlW1zi/BSEQxmP0/Jy1TIX8boDUKD8mkNl6QRyjfwp8Y7PmXg3M5ThYCdm9Emf8LkcyHCQC5N8Cn79XQxBtQLRpUAhcgfRWgRNf7WEjkB5YATqmiYiPHWd5BzOBjUbLmMH1xs6jknw3eILFqa89Hfozk08xJ69y9FSQmAXmgr8TVMfH6HDYjPoNfjyB7cclm/sTMBwXMXqTcfIyR89BOjSIzs8JWbYUBI8TAqg2kyagBQyeZXQfTknv1Dj155jB8w5WGpIZKE1C8J6NBA1Bg6mQPahIb08p3nawCWzsT8l3Z/v3KZIaF6hrTKR5BwrYCoGp0OtPGD7vMHjRxQLsfBG692eCDzGmFwUaAgrNBCKyUiA9n3dC9TVGsoB04PR1h/RmIOoGF15AVFGzpcBvnDhePSKF+ghvjoOB5FAfA4myElVMdSnwSEQRUa9HK5hhISwElQsGLmmfSoAt4AawTbucAkcyT5H5SrvUwOTy/1X8Avk+KsSSojPtAAAAAElFTkSuQmCC',
    ENGLISH: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAD/0lEQVR4XtWWW0wUVxzGf7O7sBfAZVFE0IaS2rSJNhZLK7YiBQJVMYEUhJSAra0lvNC0aUvQaKOxxpqURKPGC2JTRUu9RI0KqHUDim0I1ZQKwaq02AbCzWUX2V2WuXUzmWTftA/0we9lvvzP5Pz+3zlnJkdQVZX/Uwbg2QYIgAmwAGFMr0RgUgCix46fHosuKeB2Zz/f7mzE5XID4aH3kDlz7nNGS4oAmHXiJAX5NYAx1BciM2bHUp77Aq/80oQQH09cdaXDBERMdfXw+OxFFudmc6huHY0XfqOvb1APJwMqJqNARHo6gOYzMxcAgg5RSUiMIysBou51YywrwvraIqiujDABplr761SYw3DvqSUyP5c1RSk0N3fx09VuPYEBVQVpZISg0fzQ0HjQKgjhNtKWJLE88BDDrUGsa/Jgbjy1tW0AJgPA1abbHPsrjOGXXsXbcBrfZScrVyxk3fq3EUUjXm9AA6heL6rPp/lgjSmDjeJl88jqbcPo9xNduR53pIPDB1tpaLiORgAQRZkHPb3s6DSRl7aU1PZ2/F13WVhRRlX1KqqrTgAqShAAaH5iYpKNqTHE32zGkJNJVMYyWm70Uv99KxaLAVkWQgBJUnj8WGRszMORU4+wfbqa5bZxvL/eYV76m+ysKUNRQR4fB9B83YYMpFEX4Tkf4zLbuen8g727LgHgcNgQxQAAApD4yD3RZ7aYedpHPVqQB8CsM+d5kgQBApNTzIyOeN4EMLQyG2tMDLLHw3/RUHYGT5LRbsevz6UBZElC7O9HdruZDikTEyhmcwgQ23gFq83G0zTw8nwAEu4+4Gny+3wQ69AALEnZhCQJjI/7AdhzoIL3S1KQhkfxtt4kPGEOYnIyqqKElmnEy4uJDjynzmvjJx8aqaw4AMCMGVbCw0M/O0RRQJYVUMPYsLmYtcHJJy5dZTjvPe5f/53Ydw7p2RXQIckLvqD77hD23EweHTxK2v6t1HySQWTcPCRJRhQNhPZADpCUlBTsfC0pi+Yysmk7irOFO6vLKD/+UIcTSqCi1d5K/Zr6HypYfXQfnrp6cvfV8kZJIVsfJPLztY5QgpycxTQ5q0iJFRhYVYx4/0+OZJRTtLeLwd57KIqKGkqAClrN7/dQmL+bquqzWD4qZfax/cy81sieyC4+LF0aSrBrdzEmp5P+bTvxZq1gy8Acmve3YQQiIqIAGUEAg34Qgj5YN+v9WTh86DK3Ovo4+N0HzL9xgcEvt1Da8SM7dIA48s1ufFda6M0v5auLA/zdc01nC8CUBhhzuXBPBgCwBv3UlE8HyAC0t3eSlrqZbdsLeXfjZ9jONcH1S6IA2IHngGimV27gH0FPYdae0ysJCDz7t4p/AXyqsf3LdQoSAAAAAElFTkSuQmCC',
    JAPANESE: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAUtJREFUSIntlM0qxGEUxn/nzIykhkm2SvK1oCaDJI3NKGvFJShbyU1I3AK3MTbId5opRM0suABjfKxmOMcGm8nMMP+F4tm95+P5nd7FIwDuHnf3HoLVraqeipn1u/ulqoaCdDczF5ExFZHOoM0BVFWALg3auAL0DwgU8HL/SPmuGDyguHvGyfA8O+2T7HYkOR6apZA+DAbwcJAlM73AU+b6s/Z8kSc7s0hh+6hxQH5lHSuVK+puRm5ptTGAlcoUD7Jf9p/Pc5QLDz8HiAiiUtVAtPonVAdEwsSmRr7st44OEo5Ffw4A6F1bJtTSXLnYFKFvY6XWem1AND5AYn+L9tQ4ElJElVgyQWJvk7aJeE2AuHsKSNecBPzlFdyRSLiecdx9rr7Jj2vC30/135VFfxLg6u43ZlYZNg3KzAzIy/ujF+gGqufC93SrqldvjeFsnZIizmEAAAAASUVORK5CYII=',
    GIT: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAcZJREFUSIml1T2LFEEQxvHfDuJxgfh+BnK3romgiGJucB9AMBD0fEnFQEG4wMTUwE8gmJgovqWHosJqYG4mGBwKaqJ3CqcmessaTA871M7ODrsFBdM11f+np7u6pqXeDuIcFnEEe1L8O96ji4f4NIYzZB08RQ/9Md7DY7Sbwi/hTwNw9N+4MA5+YwJw9OW6lRdJ/5I3hf4N+ecjvBO25RZmcRGrKfYF75J/TbEPOIsZ3C7N/4WFssCTsKKl0rtZ7K744r0JXLUDfXl1IS/FWC1XKoDj7Gpg9NDO5HWeheSPEwishnHB9ioor0wAL+xlYL3I5De0bM+nEIhzD2cG17+wH1MIrIfxXIZWCO6cQiDObWVYC8HjUwicCONvDB/yOrZNAN+OnyoOuRsSd+GO4dKtswx3sSPEu3DA4KK9wef0/BonDZ9RBC/ibVh5H5tK7eJRCj7DvgQvEtdwuQJ+TV5xoxrgg3JyW96g+riH/fJGVlz5ToXAoRr4htDsyFts0aqPYguOYa5qb7C1RmBpxBzLBpV0E6eM/kuNErg+Cl7+kmK7Cm8isCE1tya2ID+kzTS5qmRnDKrlPuabwss2j9M178+MA/8H1kTI5x/48YAAAAAASUVORK5CYII=',
    TWITTER: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAvdJREFUSImtlc9rVFcUxz/33DeZRkeMGUY7NYkxLgIZkC5KW8hKodSkFkQQQlvdRf8AixR0LeiiVBf9sZRWYovQLpKJbmbRdUFampS2hpiamAkzIIlj4jjv3dOFYXwzefOM0e/unu/3fO+595zLNcSgO790AMyIGg45TA7n0s8YKYvotELBSjD234fZ2VYeJirYM17sc2Ivo+44IpGaOpxTRG5a/HNzQ9l7L9xg70T5lIp+K9Aea7wRq6qcWRjO/BAOSoN5vvSFEb22BXOAbcbwfVe+9Hk4WD/B3onyKSN6bQvGG6F8Nj+cuV7foGe82Odb++cWK98Ix2Nfba54tHNOAJy1lzZr7hk42f0GF3MpPn4zCUBXuzSKhO3WBpcATHd+6YAq/zZPy9WDO7jwV4WVmjbkXjm4g+NvJevrvysBv5af8uXdVSp+SOucWnF9AmYkahQ/2N3Gz+910J+y9diepDSYA/SnLP0pj6prLAQR46s34qnhUNRV/L7sM5hOcGtwF+PFKuPFapQMgNN3Vqi5KEYPew6Tkwhq+pHP+50JPAPHskmOZZMRKnjkK48DjeTU6IA8f/6NeHdXAhv/hgH4pxLE0Zmo4gE4P13hYS26sjAKpaexvICUo4ipFZ/fHtZik58Eytj8kzhJSUR0OorxFfJL1RbNe4avZlYpVVsLDGZKFAqtBDcXqpy+sxLZxF8Wq3wzuxZXPagpmJ7bi/udLzPht5BuE0Z72xlMJ3h7p9eQsxYoV2dW+Xp2jebRb4RzfpDoMwBdk6WfgBNhOuUZhvYkeafDo6PNsFxT/lj2mShWN9V8dYwtfJT5xADsm1zsDfCmgG0vzNwMHBVnZeDBkfR9AZgbyt5T5cxrMQcwOvrgSPo+hD6c9Z/o3Ct7o2fnh3ffeL5uQle+9CnKdwjbX8rZUcHoaNgcmr5MgPnhzHVfbU7hR1z8nKw7O3WMBW0212weeYIw9k0u9vrqjYAeVqMDQGadKhnMFGoKgbM3ikc751p5/A+gYiK3TwP//wAAAABJRU5ErkJggg==',
    FACEBOOK: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAZFJREFUSIntlc0rBHEYxz8zO+u1sd4ODhsl5eA9HKQ4Kg6KLVxWcnBycFD+AgcncdmDohTlqLycJOToorwmK29hNdbasMuMw2bEtuO3rJvP6Zlnnu/3O/M0zU9q7J5MeQk9jgBukB0kAkMPIDGlauFBJWIu9yfE+B1JVoH+QJYdBXDHo83OTKOiOI/01CTCrzo3tw9s7VzEGncr8ayl11WDu7UKm002e+dX93QMzMZQyA5F1Ly5oZietmrRcRPhgPamkk/XB8c+AsFnbrRgYgIKndlmPb+yy8jEmpBO/n4kgt1uM2vvuSYqEw/4KZYr6mwpR01PjurXVebjUFMAOL30s7x+8LMAV1MpeblqVL+2zEltmROAhdU9y4Bfr+jiOmB53/INvGd3PARDABQV5Jh9nxbk7v4JgMMTn2WAVN/lMUSedGOmz6zHpjeZW9oWkf39V/Qf8B/we5TIAS1H/w++MOxZNeudo2tBe92vIDEFfHvoL67tC5p+YCBNyqoWHgR9HHR/3A4x0f0GxmiGFhp6Ax9XdFwTsGMJAAAAAElFTkSuQmCC',
    LINKEDIN: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAhhJREFUSIm1lstrE1EYxX9zO2kS0pikah80IYsq7crHoi60i4qguBEKriOCuDK6acCd+NiYjTu3jSJK/wOF+ICKKw3U+ACtmBapMVbNo4mT57gxd5KgccjEszrfPXPPme9+F2YULj12IPQoEELgoR9oNAogYni1iIrQowjCfTFuQgg3ECbrQAVCzfUJt5356Z0UK3WW3mQoVetWo0Jq81jGhgZZOTvDdqcNgDP7xzkUS1izF3hEkx8O+qQ5wEG/hwm33VoAIAOSmS0aui6FjUKZTLFiOUBtkldfi5xYSnJ63zj5co3os3WqDb3bXlNQuPrIuksXyA5GXYNcPzIphc1SlYX4KgA3ju7C5zDmsxBfZS7o5cKBALuHnWxV6jxZy3LtaYpUVvtzgNs+wKk9Y1JYy2ky4OT0CP5txsBz5RrnZ/yyHnXBpM/J/NQOZm8leLtZkpoccjd0nmGreSuGnTZuHp9qWzMV0IlCpU74wXuO3V3h3usvbdpc0NvWrdq52QzO3X/H7ZdpAB5+/MFswEugxXTvyBCf8mWgxw6W17OS13WdRLrQpnscxnv3FNA5E63WaKuF0sLNGCr/fuSvMBUgLCSY60DpPaGnGfQ9wMoM5H36VqoSiX+QQr5Sk/zKcgqXbUDW338aGsCdZJrnG8ZVffHZ4AqX4/nf39D+o0FOgIj9F3MAhUUVrxYh64C+/raQQ2ERj3bxF1jinqcjOqYMAAAAAElFTkSuQmCC',
    REDDIT: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAwBJREFUSIm1lUFoVGcQx38zb5N0I9msCo20GpDIWrCNYZEiqZcIPSQlKiLJxZNSC+nB0lt6V0+KVAQrVHrTxh7a2sTQCL0oogkkrWIOSaAVCobQ2Leh0c3u+6aHt9ls3Jd1E3BOj5n5fv+Zj5n3wRs2qRQ0kIWeVHugrgtnew1pQjFBZjE3oSaDiYHpBwK2LgEDed7bckhNz6DsqViisz/Ek/7G61NDVQk8PbY93uDFr4pwvCK4vKprCd/6dHg6u6bA02Pb44lYfBDoWBe8YM4xksxYd6mIrhSANHjxqxuFA6jycSYpl0t9xQ7me1sOq+iPG4WvNteZvDEzDIUODERNz1Rz1NuRwmv5AElsoe7o5+g7O8uTjHNWKF4BFnpS7a+dloLVfnICr/k96r/4mmDmEXXdn5Ynibb5Pal9RYFAXVc1cNnUiP3ns/TbTV5c+pKadAdLd66vkew6AWIAONuLlq9ETfoglssS27OfWLoDbWpGRIm9305+dITc6K9IYmu0gNFWFDCk6VV8zf4u6k9fXHEEAXgeAN67u/Cad1NXCC2e7yM3dmc1X2QbLI+plq+6+XPgAgDyj++TOZnGFjPYwnMyJ9PkJ0eLws7/J+KKQqaG3zL7ajw/OYqb+zusuKWV+GfnkPoE0rCZ+KmzeDvDmQj+miSYGo/gu2crHZibKC8BcvduhcnxTbj5WfKTD8k/eYDz55C36sOcuz9HHQV0vCigSuSP6uUPl8j+9A3klqg90I3Nz2L/zlH70SEs+4KX318ge/u7SLw5NxR2Qrhofs+uCVRao5IlsYVY6wH07R1ghnv2J/nf72KLmUi4cza2eWD6QwGLFVTMV/nK4JfIajLzFa6i3BTpX34jij+7xhtTgxjXqqasYWZcSQ5MFWdWS4MJ3/qcY2TDcOx20tWcLvWtEtDh6WwyY93At+uGG1eSQe0RuflkqdS/5pvs96Y6jeAsom2VwM7ZmCL9pddSlQAsT1dqH+I6MdpMZBuChUuk4+bcUHJgZrzSo//G7X9Roh+kFKnskgAAAABJRU5ErkJggg==',
    YOUTUBE: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA0pJREFUSInFlU9oXFUUxn/nvDdJNI3Nokhog5hgJq1CqE4mVTchoFkoFKGkSHBVXARRhK5dtXRlNqKo4EZxIRhqVcSW4p9mZYzJJJgRUxOpKdgWSUkmbWAmM+8cFzOZTGaSaRTEb/N4757zfec7997z4D+G3CtgKpGIhdw55pBEOIR76C63JfB0kG260jM3t/KvBKYSnfsDYqdNGFF4cOcoy7vrBRU5e3RqPr1ngVRv1zNifIxqW73qtnSIEM4tdF49c3KMqK7ATG/8JUw+RAn2RL4dY6vNbcMD4+OFzQ9aXXk1uRkzYHnwiT0IDLXevfXWjg6mEp37Aw/ma9rinHHoFOWSRfYeiqppU0neUQ2rVdzt+SemF74GKC8GxE6j1PTc3E/E1I9Hkb7jBIOhW2jCi4iH4kEa/O3qHBEddbgkYFqsPhEzYWQnz6ryWD6KKTAYiLVFyr56PSrhSCoZH4DSHoTcObb7UQTCqBXYMCUbRGyU6rxeT0Gd40VuwCF5j+DXUO4T5wUTGty9T0UmEHuozlXqKwsgHNqV3awADBpcVdWnABdBwJ8FDuyeJu1bAu4hUluJICdWWg5+WXmuqzHbF++IIv9ORR/e5hoLi0/AXW7vkJvJGz+0rt/6IpXo/qxM2Nt9avrxRx/ZfD86+ds1Ff22xgEslx1I4Gm8xsHNZGr+5kzi8EVXW5xJHH4V8XXDOzTIvzKdjL+hkQwr9oE5f1ZvhaLpskCQbboSNWbzoLFyhJPbliHWi/sqollcPlfzl4H7I5UBIFdTnnK53KKeubkVd72wndCbt3sWRXQfgIsr6u7qX4nphHh1LGs5jc6XBQBU5CxWMQlN2r/v7w8hmqQQLrrIRTd+BvumWADnBDojsesIHZX8jo8+Obm4BmwNtfdvLP81cvBAgNBfIggb83cbEVnQmGfCbMMvK63rPz6Qafqjodl/2tiQggT+u5j2uMjrAk0AZsyuteROfbSUKRRpKvDpEEHXte5PgKHqlu4NdsOi8OnEzK9L5c5ULp8cI1ptbhvGefcfUxuz1eRQ556nEl3PiegocKQ+M2uOj2Zacm8OjC9lq5fr/vQdNJWMD5QGV5+ZtCsWGiwrmka5nNPo/OaG/i/4G4RTVrp6PIxWAAAAAElFTkSuQmCC',
};


/***/ }),

/***/ "./src/app/component/shared/jp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JAPANESE; });
var JAPANESE = {
    VECTOR: 'ベクター',
    PHOTO: '写真',
    LOGIN: 'ログイン',
    SIGNUP: 'サインアップ',
    HOME: 'ホーム',
    BANNER: 'ウェブバナー',
    FILE_SET: 'ファイルセット',
    FREE_DOWNLOAD: '無料ダウンロード',
    FREE: '無料',
    LICENSE: 'ライセンス',
    DESC1: '商用利用のため無料',
    DESC2: '帰属は必要ありません',
    PREVIEW: 'プレビュー',
    CLOSE: '閉じる'
};


/***/ }),

/***/ "./src/app/component/shared/language.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANGS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_constants__ = __webpack_require__("./src/app/component/shared/image.constants.ts");

var LANGS = [
    { id: 'en', value: 'English', img: __WEBPACK_IMPORTED_MODULE_0__image_constants__["a" /* IMAGE */].ENGLISH },
    { id: 'jp', value: 'Japanese', img: __WEBPACK_IMPORTED_MODULE_0__image_constants__["a" /* IMAGE */].JAPANESE },
    { id: 'vi', value: 'VietNamese', img: __WEBPACK_IMPORTED_MODULE_0__image_constants__["a" /* IMAGE */].VIETNAM },
];


/***/ }),

/***/ "./src/app/component/shared/slides.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SLIDES; });
var SLIDES = [
    {
        id: 1,
        name: 'image 1',
        src: '../assets/image/300x250.jpg'
    },
    {
        id: 2,
        name: 'image 2',
        src: '../assets/image/300x600.jpg'
    },
    {
        id: 3,
        name: 'image 3',
        src: '../assets/image/320x100.jpg'
    },
    {
        id: 4,
        name: 'image 4',
        src: '../assets/image/336x280.jpg'
    },
    {
        id: 5,
        name: 'image 5',
        src: '../assets/image/728x90.jpg'
    }
];


/***/ }),

/***/ "./src/app/component/shared/vi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VIETNAMEESE; });
var VIETNAMEESE = {
    VECTOR: 'Vectơ',
    PHOTO: 'Hình ảnh',
    LOGIN: 'Đăng nhập',
    SIGNUP: 'Đăng ký',
    HOME: 'Trang chủ',
    BANNER: 'Ảnh banner',
    FILE_SET: 'tệp',
    FREE_DOWNLOAD: 'Tải miễn phí',
    FREE: 'Miễn phí',
    LICENSE: 'Giấy phép',
    DESC1: 'Miễn phí cho thương mại',
    DESC2: 'Không yêu cầu attribution',
    PREVIEW: 'Xem thử',
    CLOSE: 'Đóng'
};


/***/ }),

/***/ "./src/environments/environment.ts":
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


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map