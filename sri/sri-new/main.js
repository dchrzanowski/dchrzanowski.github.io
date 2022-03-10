(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => Promise.all(/*! import() | pages-home-home-module */[__webpack_require__.e("default~pages-home-home-module~pages-news-news-module"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomeModule),
        data: { state: 'home' }
    },
    {
        path: 'news',
        loadChildren: () => Promise.all(/*! import() | pages-news-news-module */[__webpack_require__.e("default~pages-home-home-module~pages-news-news-module"), __webpack_require__.e("pages-news-news-module")]).then(__webpack_require__.bind(null, /*! ./pages/news/news.module */ "./src/app/pages/news/news.module.ts")).then(m => m.NewsModule),
        data: { state: 'news' }
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_animations_router_transitions_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/animations/router-transitions.animations */ "./src/app/shared/animations/router-transitions.animations.ts");
/* harmony import */ var src_app_shared_functions_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/functions/helpers.functions */ "./src/app/shared/functions/helpers.functions.ts");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/__ivy_ngcc__/fesm2015/ngx-progressbar.js");
/* harmony import */ var _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/navbar/navbar.component */ "./src/app/pages/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/footer/footer.component */ "./src/app/pages/footer/footer.component.ts");









function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInAnimation", undefined);
} }
class AppComponent {
    constructor() {
        this.footerVisible = false;
    }
    /**
     * Check if there's a need to trigger route animation
     * @param outlet Router state
     */
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['state'];
    }
    /**
     * On animation start
     */
    animationStart() {
        this.footerVisible = false;
        Object(src_app_shared_functions_helpers_functions__WEBPACK_IMPORTED_MODULE_2__["scrollToTop"])();
    }
    /**
     * On animation finished
     */
    animationDone() {
        this.footerVisible = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 5, consts: [[3, "min", "spinner", "color"], ["outlet", "outlet"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ng-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@routeAnimations.start", function AppComponent_Template_div_animation_routeAnimations_start_2_listener() { return ctx.animationStart(); })("@routeAnimations.done", function AppComponent_Template_div_animation_routeAnimations_done_2_listener() { return ctx.animationDone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 2, 1, "div", 2);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 1)("spinner", false)("color", "#1B95E0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerVisible);
    } }, directives: [ngx_progressbar__WEBPACK_IMPORTED_MODULE_3__["NgProgressComponent"], _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            src_app_shared_animations_router_transitions_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"],
            src_app_shared_animations_router_transitions_animations__WEBPACK_IMPORTED_MODULE_1__["footerFadeIn"],
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [
                    src_app_shared_animations_router_transitions_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"],
                    src_app_shared_animations_router_transitions_animations__WEBPACK_IMPORTED_MODULE_1__["footerFadeIn"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/__ivy_ngcc__/fesm2015/ngx-progressbar.js");
/* harmony import */ var ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-progressbar/router */ "./node_modules/ngx-progressbar/__ivy_ngcc__/fesm2015/ngx-progressbar-router.js");
/* harmony import */ var ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-progressbar/http */ "./node_modules/ngx-progressbar/__ivy_ngcc__/fesm2015/ngx-progressbar-http.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/navbar/navbar.component */ "./src/app/pages/navbar/navbar.component.ts");
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/footer/footer.component */ "./src/app/pages/footer/footer.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ngx_progressbar__WEBPACK_IMPORTED_MODULE_5__["NgProgressModule"],
            ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_6__["NgProgressRouterModule"],
            ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_7__["NgProgressHttpModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
        _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        ngx_progressbar__WEBPACK_IMPORTED_MODULE_5__["NgProgressModule"],
        ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_6__["NgProgressRouterModule"],
        ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_7__["NgProgressHttpModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                    _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    ngx_progressbar__WEBPACK_IMPORTED_MODULE_5__["NgProgressModule"],
                    ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_6__["NgProgressRouterModule"],
                    ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_7__["NgProgressHttpModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot(),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class FooterComponent {
    constructor() {
        this.year = "";
    }
    ngOnInit() {
        var currentDate = new Date();
        this.year = '' + currentDate.getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 74, vars: 1, consts: [["id", "footer", 1, "container-fluid", "footer-main"], [1, "row", "text-center", "row-extra-margin-bottom", "mt-5"], [1, "col-md-4", "col-12", "py-3"], [1, "text-half-big"], [1, "fa", "fa-phone"], ["href", "tel:+353906483096", 1, ""], [1, "fa", "fa-envelope"], ["href", "mailto:acunningham@ait.ie", 1, ""], ["href", "tel:+353906483035", 1, ""], ["href", "mailto:blee@ait.ie", 1, ""], ["href", "tel:+353906468000", 1, ""], ["href", "mailto:reception@ait.ie", 1, ""], [1, "row", "my-5", "text-center", "footer-ext-links"], [1, "footer-link", "m-auto", "col-xl-2", "col-lg-3", "col-md-4", "col-sm-6", "col-12"], ["href", "https://enterprise-ireland.com/", "target", "_blank"], ["href", "https://www.technologygateway.ie/", "target", "_blank"], ["href", "https://sri.ait.ie/", "target", "_blank"], ["href", "https://hea.ie/", "target", "_blank"], ["href", "https://comand.ie/"], ["href", "http://www.esf.ie/en/", "target", "_blank"], [1, "row", "text-center", "footer-bottom"], [1, "col-6"], ["routerLink", "/privacypolicy", 1, "text-white"], ["routerLink", "/terms", 1, "text-white"], [1, "col-12"], ["href", "https://comand.ie", 1, "text-info"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "COMAND Technology Gateway Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Anthony Cunningham ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " +353 (0) 90 6483096");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " acunningham@ait.ie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Director of the Software Research Institute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Dr. Brian Lee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " +353 (0) 90 6483035");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " blee@ait.ie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Athlone Institute of Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Dublin Road, Athlone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " +353 (0) 90 6483035");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " reception@ait.ie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Designed By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "COMAND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Copyright \u00A9 COMAND ", ctx.year, " All rights reserved");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".footer-main[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-top: 1px solid #DDD;\n}\n.footer-link[_ngcontent-%COMP%] {\n  padding: 8px 0px;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  background: black;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBQTtBQUNBO0VBQ0ksc0JBQUE7RUFDQSwwQkFBQTtBQUNKO0FBRUE7RUFDSSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBS0EscUJBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRk9PVEVSIHN0YXJ0cyBoZXJlICovXG4uZm9vdGVyLW1haW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEREQ7XG59XG5cbi5mb290ZXItbGluayB7XG4gICAgcGFkZGluZzogOHB4IDBweDtcbn1cblxuLmZvb3Rlci1ib3R0b20ge1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZm9vdGVyLWV4dC1saW5rcyB7XG4gICAgLy8gYmFja2dyb3VuZDogI0ZGRjtcbn1cbi8qIEZPT1RFUiBlbmRzIGhlcmUgKi9cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/navbar/navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_functions_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/functions/helpers.functions */ "./src/app/shared/functions/helpers.functions.ts");
/* harmony import */ var src_app_shared_animations_animate_in_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/animations/animate-in.animations */ "./src/app/shared/animations/animate-in.animations.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function NavbarComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_8_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const link_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.navigateParent(link_r2.href); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", link_r2.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r2.name, " ");
} }
function NavbarComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_12_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const link_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.navigateTo(link_r5.href); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", link_r5.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r5.name, " ");
} }
class NavbarComponent {
    constructor(router) {
        this.router = router;
        this.showNavBackground = false;
        this.showMobileNav = false;
        this.hideNav = false;
        this.prevScrollPos = window.pageYOffset;
        this.curScrollPos = window.pageYOffset;
        this.currentAnimationState = "out"; // secondary nav is out upon entry
        // Links
        this.links = [];
        this.sublinks = [];
    }
    ngOnInit() {
        // Initialize navbar
        // Set links
        this.resetLinks();
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.highlightLinkByHref([event.url]);
            }
        });
    }
    /**
     * Reset top level links. Primarily used to reset active links.
     */
    resetLinks() {
        this.links = [
            { href: ['/news'], name: 'News', active: false, highlight: false, sub: null },
            { href: ['/about'], name: 'About Us', active: false, highlight: false, sub: null },
            {
                href: ['/expertise'], name: 'Expertise', active: false, highlight: false, sub: [
                    { href: ['/expertise', '/cyber-security'], name: 'Cyber Security', active: false, highlight: false },
                    { href: ['/expertise', '/blockchain'], name: 'Blockchain', active: false, highlight: false },
                ]
            },
            {
                href: ['/people'], name: 'People', active: false, highlight: false, sub: [
                    { href: ['/people', '/staff'], name: 'Staff', active: false, highlight: false },
                    { href: ['/people', '/students'], name: 'Students', active: false, highlight: false },
                ]
            },
        ];
    }
    /**
     * Reset all initial states
     */
    resetAll() {
        this.resetLinks();
        this.currentAnimationState = 'out';
        // wait for the sublinks to slide out before resetting.
        setTimeout(() => {
            this.sublinks = [];
        }, 200);
    }
    /**
     * Find link object by its HREF
     * @param href URL path as an array of strings
     */
    findLink(href) {
        for (var i = 0; i < this.links.length; i++) {
            if (Object(src_app_shared_functions_helpers_functions__WEBPACK_IMPORTED_MODULE_2__["arraysEqual"])(this.links[i].href, href)) {
                return this.links[i];
            }
        }
        return null;
    }
    /**
     * Highlight an active link on the parent level
     * @param href URL path as an array of strings
     */
    highlightLinkByHref(href) {
        this.resetLinks();
        const link = this.findLink(href);
        if (link) {
            link.active = true;
        }
    }
    /**
     * Navigate to a parent link
     * @param href URL path as an array of strings
     */
    navigateParent(href) {
        const link = this.findLink(href);
        // Link has sublinks
        if (link.sub) {
            // no previous sub links, create and animate in
            if (this.sublinks.length == 0) {
                // extract sublinks from the parent link
                this.sublinks = link.sub;
                this.currentAnimationState = 'in';
            }
            else {
                // swap out sublinks, they were already displayed
                this.swapSublinks(link.sub);
            }
        }
        //  No sublinks present
        else {
            // slide out sublinks if they're there
            this.currentAnimationState = 'out';
            setTimeout(() => {
                this.sublinks = [];
                this.navigateTo(href);
            }, 200);
        }
    }
    /**
     * Navigate to a link
     * @param href URL path as an array of strings
     */
    navigateTo(href) {
        this.router.navigate(href);
    }
    /**
     * Swap out sublinks
     * @param subLinks Sublink object
     */
    swapSublinks(subLinks) {
        this.currentAnimationState = 'out';
        setTimeout(() => {
            this.sublinks = subLinks;
            this.currentAnimationState = 'in';
        }, 200);
    }
    // ///////////////////////////////////////////////////
    // Bar hiding logic
    // ///////////////////////////////////////////////////
    /**
     * Listener for scroll event
     */
    onWindowScroll() {
        let offset = window.pageYOffset;
        if (offset > 250) {
            this.showNavBackground = true;
            this.hideNavHandler(offset);
        }
        else {
            this.showNavBackground = false;
            this.hideNav = false;
        }
    }
    /**
     * Hide navbar when scrolling down.
     * Show navbar when scrolling up.
     * @param pageYOffset Current page Y offset
     */
    hideNavHandler(pageYOffset) {
        this.curScrollPos = pageYOffset;
        this.hideNav = this.prevScrollPos < this.curScrollPos;
        this.prevScrollPos = this.curScrollPos;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 13, vars: 9, consts: [[1, "nav"], [1, "container"], [1, "row"], [1, "logo"], ["routerLink", "/", "routerLinkActive", "active", 3, "click"], ["src", "/assets/images/sri-logo.png", 1, "img-logo"], [1, "linklist", "ml-4"], [4, "ngFor", "ngForOf"], [1, "row", 2, "margin-top", "-20px"], [1, "linklist", "mx-auto"], [3, "click"], [1, "normal", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_4_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavbarComponent_li_8_Template, 3, 3, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_li_12_Template, 3, 3, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide-nav", ctx.hideNav)("affix", ctx.showNavBackground);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("brighten-logo", ctx.showNavBackground);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@navbarAnimations", ctx.currentAnimationState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sublinks);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".nav[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  text-align: center;\n  z-index: 100;\n  top: 0;\n  transition: top 0.3s;\n}\n\n.nav[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%] {\n  float: left;\n  width: auto;\n  height: auto;\n}\n\n.nav[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  font-size: 1.5rem;\n}\n\n.nav[_ngcontent-%COMP%]   div.linklist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  line-height: 65px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.nav[_ngcontent-%COMP%]   div.linklist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 0;\n  padding-right: 1.5rem;\n}\n\nspan[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  color: #fff;\n  font-size: 1.4rem;\n  transition: color 0.3s ease-out;\n}\n\nspan.normal[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\nspan[_ngcontent-%COMP%]:hover {\n  color: #0096c8;\n}\n\nspan.active[_ngcontent-%COMP%] {\n  color: #00bfff;\n  border-bottom: 1px solid #00bfff;\n}\n\n.nav[_ngcontent-%COMP%] {\n  transition: all 0.4s ease-out;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.navTrigger[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  display: none;\n  width: 30px;\n  height: 25px;\n  right: 0;\n  top: 12px;\n  padding-top: 10px;\n  padding-bottom: 30px;\n  transition: all 0.4s ease-out;\n}\n\n.social-space[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n\n@media screen and (max-width: 1024px) {\n  .social-space[_ngcontent-%COMP%] {\n    margin-left: 0rem;\n  }\n\n  .navTrigger[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .nav[_ngcontent-%COMP%]   div.mainList[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    height: 0;\n    width: 100%;\n    overflow-y: scroll;\n    opacity: 0;\n    transform: scale(1, 0);\n    background-color: rgba(0, 0, 0, 0.9);\n    padding-top: 10vh;\n  }\n\n  .nav[_ngcontent-%COMP%]   div.showList[_ngcontent-%COMP%] {\n    transition: all 0.3s ease-in;\n    opacity: 1;\n    height: 100%;\n    transform: scale(1, 1);\n  }\n\n  .nav[_ngcontent-%COMP%]   div.mainList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    padding: 10px;\n  }\n\n  .nav[_ngcontent-%COMP%]   div.mainList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n\n  .nav[_ngcontent-%COMP%]   div.mainList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 100%;\n    font-size: 2rem;\n    padding: 20px;\n  }\n\n  .nav[_ngcontent-%COMP%]   div.media_button[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.navTrigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 2px;\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 4px;\n}\n\n.navTrigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1) {\n  animation: outT 0.8s backwards;\n  animation-direction: reverse;\n}\n\n.navTrigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  margin: 5px 0;\n  animation: outM 0.8s backwards;\n  animation-direction: reverse;\n}\n\n.navTrigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  animation: outBtm 0.8s backwards;\n  animation-direction: reverse;\n}\n\n.navTrigger.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1) {\n  animation: inT 0.8s forwards;\n}\n\n.navTrigger.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  animation: inM 0.8s forwards;\n}\n\n.navTrigger.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  animation: inBtm 0.8s forwards;\n}\n\n@keyframes inM {\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(45deg);\n  }\n}\n\n@keyframes outM {\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(45deg);\n  }\n}\n\n@keyframes inT {\n  0% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(9px) rotate(0deg);\n  }\n  100% {\n    transform: translateY(9px) rotate(135deg);\n  }\n}\n\n@keyframes outT {\n  0% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(9px) rotate(0deg);\n  }\n  100% {\n    transform: translateY(9px) rotate(135deg);\n  }\n}\n\n@keyframes inBtm {\n  0% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-9px) rotate(0deg);\n  }\n  100% {\n    transform: translateY(-9px) rotate(135deg);\n  }\n}\n\n@keyframes outBtm {\n  0% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-9px) rotate(0deg);\n  }\n  100% {\n    transform: translateY(-9px) rotate(135deg);\n  }\n}\n\n.affix[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  background-image: linear-gradient(#171621, #1c1b25);\n}\n\n.img-logo[_ngcontent-%COMP%] {\n  transition: all 0.5s ease;\n  filter: brightness(1.2);\n  top: -5px;\n  width: 130px;\n}\n\n.brighten-logo[_ngcontent-%COMP%] {\n  filter: brightness(1.5);\n}\n\n.hide-nav[_ngcontent-%COMP%] {\n  top: -70px;\n}\n\n.burger-menu[_ngcontent-%COMP%] {\n  float: right;\n  width: auto;\n  height: 100%;\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBTUE7RUFFSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBSko7O0FBT0E7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUpKOztBQU1BO0VBQ0ksZUFBQTtBQUhKOztBQUtBO0VBQ0ksY0FBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0FBRko7O0FBS0E7RUFFSSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FBRko7O0FBS0E7RUFDSSxpQkFBQTtBQUZKOztBQUtBO0VBQ0k7SUFDSSxpQkFBQTtFQUZOOztFQUlFO0lBQ0ksY0FBQTtFQUROOztFQUdFO0lBQ0ksZUFBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFFQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxzQkFBQTtJQUNBLG9DQUFBO0lBQ0EsaUJBQUE7RUFETjs7RUFJRTtJQUNJLDRCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtFQUROOztFQUdFO0lBQ0ksc0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFFBQUE7SUFDQSxPQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7RUFBTjs7RUFFRTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFQUNOOztFQUNFO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7RUFFTjs7RUFBRTtJQUNJLGNBQUE7RUFHTjtBQUNGOztBQUFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUVJLDhCQUFBO0VBRUEsNEJBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFFQSw4QkFBQTtFQUVBLDRCQUFBO0FBRUo7O0FBQ0E7RUFFSSxnQ0FBQTtFQUVBLDRCQUFBO0FBRUo7O0FBQ0E7RUFFSSw0QkFBQTtBQUVKOztBQUNBO0VBRUksNEJBQUE7QUFFSjs7QUFDQTtFQUVJLDhCQUFBO0FBRUo7O0FBVUE7RUFDSTtJQUNJLHVCQUFBO0VBQ047RUFDRTtJQUNJLHdCQUFBO0VBQ047QUFDRjs7QUFXQTtFQUNJO0lBQ0ksdUJBQUE7RUFETjtFQUdFO0lBQ0ksd0JBQUE7RUFETjtBQUNGOztBQWdCQTtFQUNJO0lBQ0ksdUNBQUE7RUFITjtFQUtFO0lBQ0ksdUNBQUE7RUFITjtFQUtFO0lBQ0kseUNBQUE7RUFITjtBQUNGOztBQWtCQTtFQUNJO0lBQ0ksdUNBQUE7RUFMTjtFQU9FO0lBQ0ksdUNBQUE7RUFMTjtFQU9FO0lBQ0kseUNBQUE7RUFMTjtBQUNGOztBQW9CQTtFQUNJO0lBQ0ksdUNBQUE7RUFQTjtFQVNFO0lBQ0ksd0NBQUE7RUFQTjtFQVNFO0lBQ0ksMENBQUE7RUFQTjtBQUNGOztBQXNCQTtFQUNJO0lBQ0ksdUNBQUE7RUFUTjtFQVdFO0lBQ0ksd0NBQUE7RUFUTjtFQVdFO0lBQ0ksMENBQUE7RUFUTjtBQUNGOztBQVlBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1EQUFBO0FBVko7O0FBaUJBO0VBQ0kseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBZEo7O0FBaUJBO0VBQ0ksdUJBQUE7QUFkSjs7QUFpQkE7RUFDSSxVQUFBO0FBZEo7O0FBaUJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFkSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuM3M7XG59XG5cbi5uYXYgZGl2LmxvZ28ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLm5hdiBkaXYubG9nbyBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5uYXYgZGl2LmxpbmtsaXN0IHtcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5hdiBkaXYubGlua2xpc3QgdWwge1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGluZS1oZWlnaHQ6IDY1cHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLm5hdiBkaXYubGlua2xpc3QgdWwgbGkge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xufVxuXG5zcGFuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1vdXQ7XG59XG5zcGFuLm5vcm1hbCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuc3Bhbjpob3ZlciB7XG4gICAgY29sb3I6ICMwMDk2Yzg7XG59XG5cbnNwYW4uYWN0aXZlIHtcbiAgICBjb2xvcjogIzAwYmZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwYmZmZjtcbn1cblxuLm5hdiB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLm5hdlRyaWdnZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxMnB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xufVxuXG4uc29jaWFsLXNwYWNlIHtcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpIHtcbiAgICAuc29jaWFsLXNwYWNlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgfVxuICAgIC5uYXZUcmlnZ2VyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5uYXYgZGl2Lm1haW5MaXN0IHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTB2aDtcbiAgICB9XG5cbiAgICAubmF2IGRpdi5zaG93TGlzdCB7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICB9XG4gICAgLm5hdiBkaXYubWFpbkxpc3QgdWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICAubmF2IGRpdi5tYWluTGlzdCB1bCBsaSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5uYXYgZGl2Lm1haW5MaXN0IHVsIGxpIGEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIC5uYXYgZGl2Lm1lZGlhX2J1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLm5hdlRyaWdnZXIgaSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0cHg7XG59XG5cbi5uYXZUcmlnZ2VyIGk6bnRoLWNoaWxkKDEpIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogb3V0VCAwLjhzIGJhY2t3YXJkcztcbiAgICBhbmltYXRpb246IG91dFQgMC44cyBiYWNrd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XG59XG5cbi5uYXZUcmlnZ2VyIGk6bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBvdXRNIDAuOHMgYmFja3dhcmRzO1xuICAgIGFuaW1hdGlvbjogb3V0TSAwLjhzIGJhY2t3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcbn1cblxuLm5hdlRyaWdnZXIgaTpudGgtY2hpbGQoMykge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBvdXRCdG0gMC44cyBiYWNrd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBvdXRCdG0gMC44cyBiYWNrd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XG59XG5cbi5uYXZUcmlnZ2VyLmFjdGl2ZSBpOm50aC1jaGlsZCgxKSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGluVCAwLjhzIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogaW5UIDAuOHMgZm9yd2FyZHM7XG59XG5cbi5uYXZUcmlnZ2VyLmFjdGl2ZSBpOm50aC1jaGlsZCgyKSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGluTSAwLjhzIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogaW5NIDAuOHMgZm9yd2FyZHM7XG59XG5cbi5uYXZUcmlnZ2VyLmFjdGl2ZSBpOm50aC1jaGlsZCgzKSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGluQnRtIDAuOHMgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBpbkJ0bSAwLjhzIGZvcndhcmRzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW5NIHtcbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGluTSB7XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3V0TSB7XG4gICAgNTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBvdXRNIHtcbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBpblQge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOXB4KSByb3RhdGUoMTM1ZGVnKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgaW5UIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDEzNWRlZyk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3V0VCB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOXB4KSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg5cHgpIHJvdGF0ZSgxMzVkZWcpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBvdXRUIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDEzNWRlZyk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW5CdG0ge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05cHgpIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05cHgpIHJvdGF0ZSgxMzVkZWcpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBpbkJ0bSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTlweCkgcm90YXRlKDEzNWRlZyk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3V0QnRtIHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSByb3RhdGUoMTM1ZGVnKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgb3V0QnRtIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05cHgpIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSByb3RhdGUoMTM1ZGVnKTtcbiAgICB9XG59XG5cbi5hZmZpeCB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMTcxNjIxLCAjMWMxYjI1KTtcbn1cblxuLmFmZml4TmF2VHJpZ2dlciB7XG4gICAgLy8gcGFkZGluZy10b3A6IDA7XG59XG5cbi5pbWctbG9nbyB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbiAgICB0b3A6IC01cHg7XG4gICAgd2lkdGg6IDEzMHB4O1xufVxuXG4uYnJpZ2h0ZW4tbG9nbyB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuNSk7XG59XG5cbi5oaWRlLW5hdiB7XG4gICAgdG9wOiAtNzBweDtcbn1cblxuLmJ1cmdlci1tZW51IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbiJdfQ== */"], data: { animation: [src_app_shared_animations_animate_in_animations__WEBPACK_IMPORTED_MODULE_3__["navbarTransition"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss'],
                animations: [src_app_shared_animations_animate_in_animations__WEBPACK_IMPORTED_MODULE_3__["navbarTransition"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/animations/animate-in.animations.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/animations/animate-in.animations.ts ***!
  \************************************************************/
/*! exports provided: slideUp, slideDown, fadeIn, navbarTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideUp", function() { return slideUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideDown", function() { return slideDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navbarTransition", function() { return navbarTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const slideUp = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(50px)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0px)' }))
];
const slideDown = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-50px)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0px)' }))
];
const fadeIn = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
];
const navbarTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('navbarAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translateX(0px)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'translateX(-700px)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200)]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('out => in', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200)]),
]);


/***/ }),

/***/ "./src/app/shared/animations/router-transitions.animations.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/animations/router-transitions.animations.ts ***!
  \********************************************************************/
/*! exports provided: routerTransition, footerFadeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerFadeIn", function() { return footerFadeIn; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            // style({ left: '-100%', opacity: 0 })
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.6 }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('750ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
            ], { optional: true })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
    ])
]);
const footerFadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
    ]),
]);


/***/ }),

/***/ "./src/app/shared/functions/helpers.functions.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/functions/helpers.functions.ts ***!
  \*******************************************************/
/*! exports provided: scrollToTop, arraysEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToTop", function() { return scrollToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arraysEqual", function() { return arraysEqual; });
/**
 * Scroll to the top of the page
 */
function scrollToTop() {
    // help firefox deal with the scroll by putting a timeout
    setTimeout(() => {
        try {
            window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        }
        catch (e) {
            window.scrollTo(0, 0);
        }
    }, 50);
}
/**
 * Compare two arrays and return true if they are equal
 * @param a Array A
 * @param b Array B
 */
function arraysEqual(a, b) {
    if (!(Array.isArray(a) && Array.isArray(b)))
        return false;
    return a.length == b.length && a.every((ele, idx) => { return ele == b[idx]; });
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/grimscythe/github/sri-comand-websites/sri-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map