(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_animations_animate_in_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/animations/animate-in.animations */ "./src/app/shared/animations/animate-in.animations.ts");
/* harmony import */ var src_app_services_strapi_strapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/strapi/strapi.service */ "./src/app/services/strapi/strapi.service.ts");




class HomePage {
    constructor(strapi) {
        this.strapi = strapi;
        this.animation = src_app_shared_animations_animate_in_animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"];
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        // grab testimonials from the CMS
        // this.strapi.getTestimonials()
        //     .subscribe((data: CarouselData[]) => {
        //         if (Array.isArray(data) && data.length != 0) {
        //             this.isLoading = false;
        //             this.carouselItems = data;
        //         }
        //     }, (error) => {
        //         console.error(error);
        //     });
    }
}
HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_strapi_strapi_service__WEBPACK_IMPORTED_MODULE_2__["StrapiService"])); };
HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-home"]], decls: 11, vars: 0, consts: [[1, "banner", "banner-home"], [1, "banner-box"], [1, "container"], [1, "row"], [1, "col", "text-center"], ["src", "/assets/images/sri-logo.png", "alt", "SRI LOGO", 1, "banner-logo"], ["id", "welcome"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".banner-home[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/banners/home.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0RBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXItaG9tZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmFubmVycy9ob21lLmpwZ1wiKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_services_strapi_strapi_service__WEBPACK_IMPORTED_MODULE_2__["StrapiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_animate_in__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-animate-in */ "./node_modules/ngx-animate-in/__ivy_ngcc__/ngx-animate-in.js");
/* harmony import */ var src_app_components_components_common_components_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components-common/components-common.module */ "./src/app/components/components-common/components-common.module.ts");
/* harmony import */ var src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/directives/directives.module */ "./src/app/directives/directives.module.ts");









class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomePage"]
                }
            ]),
            ngx_animate_in__WEBPACK_IMPORTED_MODULE_4__["AnimateInModule"],
            src_app_components_components_common_components_common_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsCommonModule"],
            src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["DirectivesModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ngx_animate_in__WEBPACK_IMPORTED_MODULE_4__["AnimateInModule"],
        src_app_components_components_common_components_common_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsCommonModule"],
        src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["DirectivesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomePage"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomePage"]
                        }
                    ]),
                    ngx_animate_in__WEBPACK_IMPORTED_MODULE_4__["AnimateInModule"],
                    src_app_components_components_common_components_common_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsCommonModule"],
                    src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["DirectivesModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map