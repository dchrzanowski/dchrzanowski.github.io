(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-news-module"],{

/***/ "./src/app/pages/news/news.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/news/news.component.ts ***!
  \**********************************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_animations_animate_in_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/animations/animate-in.animations */ "./src/app/shared/animations/animate-in.animations.ts");
/* harmony import */ var src_app_services_strapi_strapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/strapi/strapi.service */ "./src/app/services/strapi/strapi.service.ts");




class NewsPage {
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
NewsPage.ɵfac = function NewsPage_Factory(t) { return new (t || NewsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_strapi_strapi_service__WEBPACK_IMPORTED_MODULE_2__["StrapiService"])); };
NewsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsPage, selectors: [["app-news"]], decls: 13, vars: 0, consts: [[1, "banner", "banner-news"], [1, "banner-box"], [1, "container"], [1, "row"], [1, "col", "banner-text"], [1, "banner-main-text"], [1, "banner-sub-text", "pl-1"], ["id", "welcome"]], template: function NewsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Recent news and Blog posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".banner-news[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/banners/news.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0RBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXItbmV3cyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmFubmVycy9uZXdzLmpwZ1wiKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.scss']
            }]
    }], function () { return [{ type: src_app_services_strapi_strapi_service__WEBPACK_IMPORTED_MODULE_2__["StrapiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/news/news.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.module.ts ***!
  \*******************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.component */ "./src/app/pages/news/news.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_animate_in__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-animate-in */ "./node_modules/ngx-animate-in/__ivy_ngcc__/ngx-animate-in.js");
/* harmony import */ var src_app_components_components_common_components_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components-common/components-common.module */ "./src/app/components/components-common/components-common.module.ts");
/* harmony import */ var src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/directives/directives.module */ "./src/app/directives/directives.module.ts");









class NewsModule {
}
NewsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NewsModule });
NewsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NewsModule_Factory(t) { return new (t || NewsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _news_component__WEBPACK_IMPORTED_MODULE_2__["NewsPage"]
                }
            ]),
            ngx_animate_in__WEBPACK_IMPORTED_MODULE_4__["AnimateInModule"],
            src_app_components_components_common_components_common_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsCommonModule"],
            src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["DirectivesModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewsModule, { declarations: [_news_component__WEBPACK_IMPORTED_MODULE_2__["NewsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ngx_animate_in__WEBPACK_IMPORTED_MODULE_4__["AnimateInModule"],
        src_app_components_components_common_components_common_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsCommonModule"],
        src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["DirectivesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_news_component__WEBPACK_IMPORTED_MODULE_2__["NewsPage"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _news_component__WEBPACK_IMPORTED_MODULE_2__["NewsPage"]
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
//# sourceMappingURL=pages-news-news-module.js.map