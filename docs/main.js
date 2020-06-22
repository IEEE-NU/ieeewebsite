(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _educate_educate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./educate/educate.component */ "./src/app/educate/educate.component.ts");
/* harmony import */ var _explore_explore_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore/explore.component */ "./src/app/explore/explore.component.ts");
/* harmony import */ var _engage_engage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./engage/engage.component */ "./src/app/engage/engage.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _educate_educate_component__WEBPACK_IMPORTED_MODULE_4__["EducateComponent"],
                _explore_explore_component__WEBPACK_IMPORTED_MODULE_5__["ExploreComponent"],
                _engage_engage_component__WEBPACK_IMPORTED_MODULE_6__["EngageComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _educate_educate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./educate/educate.component */ "./src/app/educate/educate.component.ts");
/* harmony import */ var _explore_explore_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore/explore.component */ "./src/app/explore/explore.component.ts");
/* harmony import */ var _engage_engage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engage/engage.component */ "./src/app/engage/engage.component.ts");





var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'educate', component: _educate_educate_component__WEBPACK_IMPORTED_MODULE_2__["EducateComponent"] },
    { path: 'explore', component: _explore_explore_component__WEBPACK_IMPORTED_MODULE_3__["ExploreComponent"] },
    { path: 'engage', component: _engage_engage_component__WEBPACK_IMPORTED_MODULE_4__["EngageComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-container {\r\n  margin: 20vh auto 0 !important;\r\n  text-align: center;\r\n}\r\n\r\n.footer-links a {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  color: inherit;\r\n  font-size: 125%;\r\n  margin: 0.2rem;\r\n}\r\n\r\n.footer-links {\r\n  margin-left: 33%;\r\n  width: 33%;\r\n  text-align: center;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n}\r\n\r\np {\r\n  text-align: center;\r\n}\r\n\r\ni {\r\n  font-size: 2rem;\r\n  color: #555;\r\n}\r\n\r\ni:hover {\r\n  color: rgb(078, 042, 132);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer-container\">\r\n  <footer class=\"footer\">\r\n    <hr>\r\n    <p class=\"footer-links\">\r\n      <a href=\"http://facebook.com/groups/ieee.nu\">\r\n        <i class=\"footer-link fab fa-facebook-square\"></i>\r\n      </a>\r\n      <a href=\"https://www.ieee.org/index.html\">\r\n        <i class=\"footer-link fas fa-globe\"></i>\r\n      </a>\r\n      <a href=\"mailto:ieee@u.northwestern.edu\">\r\n        <i class=\"footer-link fas fa-envelope\"></i>\r\n      </a>\r\n    </p>\r\n  </footer>\r\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav ul {\r\n    padding: 0;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\nnav ul li {\r\n    list-style-type: none;\r\n    width: 100%;\r\n    /*this is the line that helped me get rid of the white space at the start of my nav */\r\n}\r\n\r\nnav ul li a {\r\n    text-decoration: none;\r\n    margin: 0 auto;\r\n}\r\n\r\ni{\r\n    font-size: 2rem;\r\n    color: #555;\r\n}\r\n\r\ni:hover{\r\n    color: rgb(078, 042, 132);\r\n}\r\n\r\n.active>i{\r\n    color: rgb(078, 042, 132);\r\n    font-size: 3rem;\r\n}\r\n\r\n.navbar{\r\n    margin-bottom: -5rem;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand\">\r\n  <div class=\"container\">\r\n    <ul class=\"navbar-nav nav-fill w-100\">\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"nav-link\">\r\n          <i class=\"fas fa-home\"></i>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a a routerLink=\"/educate\" routerLinkActive=\"active\" class=\"nav-link\">\r\n          <i class=\"fas fa-lightbulb\"></i>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a a routerLink=\"/explore\" routerLinkActive=\"active\" class=\"nav-link\">\r\n          <i class=\"fas fa-compass\"></i>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a a routerLink=\"/engage\" routerLinkActive=\"active\" class=\"nav-link\">\r\n          <i class=\"fas fa-comments\"></i>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/educate/educate.component.css":
/*!***********************************************!*\
  !*** ./src/app/educate/educate.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hck-contain, .hck-contain>p {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/educate/educate.component.html":
/*!************************************************!*\
  !*** ./src/app/educate/educate.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <title>IEEE Northwestern | Educate</title>\r\n</head>\r\n\r\n<app-navbar></app-navbar>\r\n<div class=\"container animated fadeIn\">\r\n  <h1>Educate</h1>\r\n  <hr>\r\n  <div id=\"edu-carousel\" class=\"carousel slide d-none d-md-block\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#edu-carousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#edu-carousel\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#edu-carousel\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        <img class=\"d-block  img-fluid first-slide\" src=\"assets/ieee_photos/hacknight/promo.jpg\" alt=\"HackNight promotional image\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img class=\"d-block  img-fluid second-slide\" src=\"assets/ieee_photos/hacknight/apinight.jpg\" alt=\"Presentation for and by NU students at HackNight\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img class=\"d-block  img-fluid third-slide\" src=\"assets/ieee_photos/hacknight/iosnight.jpg\" alt=\"Presentation for and by NU students at HackNight\">\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#edu-carousel\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#edu-carousel\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n\r\n  <h2 id=\"hckn-title\">HackNights</h2>\r\n  <p>Hack Nights educate beginner programmers and provide hands-on training that is supplemental to Northwestern's education\r\n    in areas like web development, career prep, etc. Hack Nights include presentations with hands-on coding activities, as\r\n    well as catered food for attendees.</p>\r\n  <div class=\"container hck-contain\">\r\n    <h2>HackNight Schedule</h2>\r\n    <p>Check back closer to the beginning of the school year for updates on our event calendar!</p>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/educate/educate.component.ts":
/*!**********************************************!*\
  !*** ./src/app/educate/educate.component.ts ***!
  \**********************************************/
/*! exports provided: EducateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducateComponent", function() { return EducateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducateComponent = /** @class */ (function () {
    function EducateComponent() {
    }
    EducateComponent.prototype.ngOnInit = function () {
    };
    EducateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-educate',
            template: __webpack_require__(/*! ./educate.component.html */ "./src/app/educate/educate.component.html"),
            styles: [__webpack_require__(/*! ./educate.component.css */ "./src/app/educate/educate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducateComponent);
    return EducateComponent;
}());



/***/ }),

/***/ "./src/app/engage/engage.component.css":
/*!*********************************************!*\
  !*** ./src/app/engage/engage.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".eecs-bbq{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/engage/engage.component.html":
/*!**********************************************!*\
  !*** ./src/app/engage/engage.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <title>IEEE Northwestern | Engage</title>\r\n</head>\r\n<app-navbar></app-navbar>\r\n<div class=\"container animated fadeIn\">\r\n  <h1>Engage</h1>\r\n  <hr />\r\n  <div\r\n    id=\"eng-carousel\"\r\n    class=\"carousel slide d-none d-md-block\"\r\n    data-ride=\"carousel\"\r\n  >\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#eng-carousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#eng-carousel\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#eng-carousel\" data-slide-to=\"2\"></li>\r\n      <li data-target=\"#eng-carousel\" data-slide-to=\"3\"></li>\r\n      <li data-target=\"#eng-carousel\" data-slide-to=\"4\"></li>\r\n      <li data-target=\"#eng-carousel\" data-slide-to=\"5\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        <img\r\n          class=\"d-block img-fluid\"\r\n          src=\"assets/ieee_photos/badhacks/promo.jpg\"\r\n          alt=\"BadHacks 2018 promotional image\"\r\n        />\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img\r\n          class=\"d-block img-fluid\"\r\n          src=\"assets/ieee_photos/badhacks/pres1.JPG\"\r\n          alt=\"Participants presenting their projects\"\r\n        />\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img\r\n          class=\"d-block img-fluid\"\r\n          src=\"assets/ieee_photos/badhacks/typeracer.JPG\"\r\n          alt=\"Participants playing typeracer\"\r\n        />\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img\r\n          class=\"d-block img-fluid\"\r\n          src=\"assets/ieee_photos/eecsbbq/promo.jpg\"\r\n          alt=\"EECS BBQ promotional image\"\r\n        />\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img\r\n          class=\"d-block img-fluid\"\r\n          src=\"assets/ieee_photos/eecsbbq/grill.jpg\"\r\n          alt=\"IEEE members preparing food\"\r\n        />\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img\r\n          class=\"d-block img-fluid\"\r\n          src=\"assets/ieee_photos/eecsbbq/line.jpg\"\r\n          alt=\"Attendants enjoying the food\"\r\n        />\r\n      </div>\r\n    </div>\r\n    <a\r\n      class=\"carousel-control-prev\"\r\n      href=\"#eng-carousel\"\r\n      role=\"button\"\r\n      data-slide=\"prev\"\r\n    >\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a\r\n      class=\"carousel-control-next\"\r\n      href=\"#eng-carousel\"\r\n      role=\"button\"\r\n      data-slide=\"next\"\r\n    >\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n  <div class=\"eecs-bbq\">\r\n    <h2>EECS BBQ</h2>\r\n    <p>\r\n      While Northwestern students are known for their drive and commendable work\r\n      ethic, we also like to have fun! Once a year, during our spring quarter,\r\n      the members of IEEE NU fire up a few grills and host a barbecue for all\r\n      Northwestern students, faculty, and staff. This event, known as the EECS\r\n      BBQ, is funded by Northwestern's EECS department and gives everyone a\r\n      chance to relax and connect with others in the Northwestern community and\r\n      learn about IEEE.\r\n    </p>\r\n    <h2>BadHacks</h2>\r\n    <p>\r\n      BadHacks is IEEE NU’s annual 8 hour mini-hackathon. Here, Northwestern\r\n      students are encouraged to bring their worst tech ideas to life. Prizes\r\n      are awarded to participants who develop the best projects in certain\r\n      categories and all are able to enjoy free food while hacking. Group\r\n      activities and video games are also provided to give hackers a break from\r\n      developing their projects. This event provides students with an\r\n      opportunity to meet other students interested in computer science and\r\n      practice their coding skills in a fun, focused environment.\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/engage/engage.component.ts":
/*!********************************************!*\
  !*** ./src/app/engage/engage.component.ts ***!
  \********************************************/
/*! exports provided: EngageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngageComponent", function() { return EngageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EngageComponent = /** @class */ (function () {
    function EngageComponent() {
    }
    EngageComponent.prototype.ngOnInit = function () {
    };
    EngageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-engage',
            template: __webpack_require__(/*! ./engage.component.html */ "./src/app/engage/engage.component.html"),
            styles: [__webpack_require__(/*! ./engage.component.css */ "./src/app/engage/engage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EngageComponent);
    return EngageComponent;
}());



/***/ }),

/***/ "./src/app/explore/explore.component.css":
/*!***********************************************!*\
  !*** ./src/app/explore/explore.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* CUSTOMIZE THE CARDS\r\n-------------------------------------------------- */\r\n\r\n.card-body,\r\n.card-body > p {\r\n  text-align: center;\r\n}\r\n\r\n.card {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  min-width: 15vw;\r\n  min-height: 30rem;\r\n}\r\n\r\n.card img {\r\n  height: 50%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/explore/explore.component.html":
/*!************************************************!*\
  !*** ./src/app/explore/explore.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <title>IEEE Northwestern | Explore</title>\r\n</head>\r\n<app-navbar></app-navbar>\r\n<div class=\"container animated fadeIn\">\r\n  <h1>Explore</h1>\r\n  <hr />\r\n\r\n  <div\r\n    id=\"exp-carousel\"\r\n    class=\"carousel slide d-none d-md-block\"\r\n    data-ride=\"carousel\"\r\n  >\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#exp-carousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#exp-carousel\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#exp-carousel\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        <img\r\n          class=\"d-block img-fluid\"\r\n          src=\"assets/ieee_photos/IE3/present.jpg\"\r\n          alt=\"Opening presentation of 2018 Project Showcase\"\r\n        />\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img\r\n          class=\"d-block img-fluid\"\r\n          src=\"assets/ieee_photos/IE3/floor1.jpg\"\r\n          alt=\"Participants presenting their projects\"\r\n        />\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img\r\n          class=\"d-block img-fluid\"\r\n          src=\"assets/ieee_photos/IE3/floor2.jpg\"\r\n          alt=\"Participants presenting their projects\"\r\n        />\r\n      </div>\r\n    </div>\r\n    <a\r\n      class=\"carousel-control-prev\"\r\n      href=\"#exp-carousel\"\r\n      role=\"button\"\r\n      data-slide=\"prev\"\r\n    >\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a\r\n      class=\"carousel-control-next\"\r\n      href=\"#exp-carousel\"\r\n      role=\"button\"\r\n      data-slide=\"next\"\r\n    >\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n\r\n  <h2>IE <sup>3</sup> Technical Program</h2>\r\n  <p>\r\n    Interested in exploring the world of software development? Want to take a\r\n    crack at building something fun or useful with your hardware of choice?\r\n    Eager to start some sort of project, but don't know how to get going?\r\n    Consider applying for the IE <sup>3</sup> Technical Program! Every fall\r\n    quarter, the IEEE Executive Board takes motivated students and guides them\r\n    through a program focused on mentorship and the introductory exploration of\r\n    an EECS-related technology.\r\n  </p>\r\n\r\n  <p style=\"text-align: center;\">\r\n    The application for the current year's IE <sup>3</sup> Technical Program is\r\n    now closed.\r\n  </p>\r\n  <br />\r\n\r\n  <h2>Project Showcase</h2>\r\n  <p>\r\n    The annual IEEE NU Project Showcase is an opportunity for Northwestern\r\n    students, both undergraduate and graduate, to present independent software\r\n    and hardware projects to employers and the Northwestern community. Most IE\r\n    <sup>3</sup> teams present their projects here as well. Submissions can\r\n    consist of any unique, portable, and easily demonstrable original creation.\r\n    A panel of industry representatives evaluates each project on three main\r\n    criteria:\r\n  </p>\r\n  <br />\r\n  <ol>\r\n    <li>\r\n      Real-World Practicality and Potential Application\r\n    </li>\r\n    <li>\r\n      Technical Difficulty\r\n    </li>\r\n    <li>\r\n      Effectiveness of Project's Execution\r\n    </li>\r\n  </ol>\r\n  <br />\r\n  <p>\r\n    The 2018 IEEE NU Project Showcase featured over 20 projects and 50 students,\r\n    as well as 10 judges from top tech companies. Below are the winning\r\n    submissions and their descriptions.\r\n  </p>\r\n  <br />\r\n\r\n  <h2>2018 Showcase Winners</h2>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"card\">\r\n          <img\r\n            class=\"card-img-top\"\r\n            src=\"assets/ieee_photos/IE3/open.jpg\"\r\n            alt=\"Description of image below\"\r\n          />\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title\">Open</h4>\r\n            <h6 class=\"card-subtitle mb-2 text-muted\">First Place</h6>\r\n            <p class=\"card-text\">\r\n              Tool for real-time sentiment analysis of tweets\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"card\">\r\n          <img\r\n            class=\"card-img-top\"\r\n            src=\"assets/ieee_photos/IE3/alexa_magic_mirror.jpg\"\r\n            alt=\"Description of image below\"\r\n          />\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title\">Alexa Magic Mirror</h4>\r\n            <h6 class=\"card-subtitle mb-2 text-muted\">Second Place</h6>\r\n            <p class=\"card-text\">A smart mirror controlled by Amazon’s Alexa</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"card\">\r\n          <img\r\n            class=\"card-img-top\"\r\n            src=\"assets/ieee_photos/IE3/cadenza.jpg\"\r\n            alt=\"Description of image below\"\r\n          />\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title\">Cadenza</h4>\r\n            <h6 class=\"card-subtitle mb-2 text-muted\">\r\n              Best Underclassmen Project\r\n            </h6>\r\n            <p class=\"card-text\">\r\n              A web app that allows users to associate their thoughts and\r\n              experiences with songs in their Spotify playlists\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/explore/explore.component.ts":
/*!**********************************************!*\
  !*** ./src/app/explore/explore.component.ts ***!
  \**********************************************/
/*! exports provided: ExploreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreComponent", function() { return ExploreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _headshot_control_headshots_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../headshot-control/headshots.service */ "./src/app/headshot-control/headshots.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExploreComponent = /** @class */ (function () {
    function ExploreComponent(headshotService) {
        this.headshotService = headshotService;
    }
    ExploreComponent.prototype.getProjMentorHeadshots = function () {
        var _this = this;
        this.headshotService.getProjMentorHeadshots().then(function (headshotItems) { return _this.projMentorHeadshots = headshotItems; });
    };
    ExploreComponent.prototype.ngOnInit = function () {
        this.getProjMentorHeadshots();
    };
    ExploreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-explore',
            template: __webpack_require__(/*! ./explore.component.html */ "./src/app/explore/explore.component.html"),
            styles: [__webpack_require__(/*! ./explore.component.css */ "./src/app/explore/explore.component.css")],
            providers: [_headshot_control_headshots_service__WEBPACK_IMPORTED_MODULE_1__["HeadshotService"]]
        }),
        __metadata("design:paramtypes", [_headshot_control_headshots_service__WEBPACK_IMPORTED_MODULE_1__["HeadshotService"]])
    ], ExploreComponent);
    return ExploreComponent;
}());



/***/ }),

/***/ "./src/app/headshot-control/headshots.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/headshot-control/headshots.service.ts ***!
  \*******************************************************/
/*! exports provided: HeadshotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadshotService", function() { return HeadshotService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _headshots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headshots */ "./src/app/headshot-control/headshots.ts");
/* harmony import */ var _proj_mentor_headshots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proj-mentor-headshots */ "./src/app/headshot-control/proj-mentor-headshots.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeadshotService = /** @class */ (function () {
    function HeadshotService() {
    }
    HeadshotService.prototype.getHeadshotItems = function () {
        return Promise.resolve(_headshots__WEBPACK_IMPORTED_MODULE_1__["headshotItems"]);
    };
    HeadshotService.prototype.getProjMentorHeadshots = function () {
        return Promise.resolve(_proj_mentor_headshots__WEBPACK_IMPORTED_MODULE_2__["projmentorheadshots"]);
    };
    HeadshotService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HeadshotService);
    return HeadshotService;
}());



/***/ }),

/***/ "./src/app/headshot-control/headshots.ts":
/*!***********************************************!*\
  !*** ./src/app/headshot-control/headshots.ts ***!
  \***********************************************/
/*! exports provided: headshotItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headshotItems", function() { return headshotItems; });
var headshotItems = [
    // Karan
    {
        img: "assets/headshots/karan.jpg",
        name: "Karan Bhasin",
        position: "President",
        alt: "Pictured: Karan Bhasin, President",
    },
    // Utkarsh
    {
        img: "assets/headshots/utkarsh.jpg",
        name: "Utkarsh Mishra",
        position: "Vice-President",
        alt: "Pictured: Utkarsh Mishra, Vice-President",
    },
    // Aimee
    {
        img: "assets/headshots/aimee.jpg",
        name: "Aimee van den Berg",
        position: "Technical Program Director",
        alt: "Pictured: Aimee van den Berg, Technical Program Director",
    },
    // Romir
    {
        img: "assets/headshots/romir.jpg",
        name: "Romir Hysko",
        position: "Treasurer",
        alt: "Pictured: Romir Hysko, Treasurer ",
    },
    // Sisilia
    {
        img: "assets/headshots/sisilia.JPG",
        name: "Sisilia Sinaga",
        position: "Secretary",
        alt: "Pictured: Sisilia Sinaga, Secretary",
    },
    // Andy
    {
        img: "assets/headshots/andy.jpg",
        name: "Andy Xu",
        position: "Webmaster",
        alt: "Pictured: Andy Xu, Webmaster",
    },
    // Evan
    {
        img: "assets/headshots/evan.jpg",
        name: "Evan Costa",
        position: "Membership Chair",
        alt: "Pictured: Evan Costa, Membership Chair",
    },
    // Jonathan
    {
        img: "assets/headshots/jonathan.jpg",
        name: "Jonathan Liu",
        position: "Co-Social Chair",
        alt: "Pictured: Jonathan Liu, Co-Social Chair",
    },
    // Vikram
    {
        img: "assets/headshots/vikram.JPG",
        name: "Vikram Thanigaivelan ",
        position: "Co-Social Chair",
        alt: "Pictured: Vikram Thanigaivelan , Co-Social Chair",
    },
    // Tony
    {
        img: "assets/headshots/tony.jpg",
        name: "Tony Bayvas",
        position: "Co-Publicity Chair",
        alt: "Pictured: Tony Bayvas, Co-Publicity Chair",
    },
    // Evans
    {
        img: "assets/headshots/evans.jpeg",
        name: "Evans Dingwizat",
        position: "Co-Publicity Chair",
        alt: "Pictured: Evans Dingwizat, Co-Publicity Chair",
    },
    // Shourya
    {
        img: "assets/headshots/shourya.jpg",
        name: "Shourya Agarwal",
        position: "Outreach Chair",
        alt: "Pictured: Shourya Agarwal, Outreach Chair",
    },
];


/***/ }),

/***/ "./src/app/headshot-control/proj-mentor-headshots.ts":
/*!***********************************************************!*\
  !*** ./src/app/headshot-control/proj-mentor-headshots.ts ***!
  \***********************************************************/
/*! exports provided: projmentorheadshots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projmentorheadshots", function() { return projmentorheadshots; });
var projmentorheadshots = [
    // Kevin
    {
        img: 'assets/headshots/kevin_lee.jpg',
        name: 'Kevin Lee',
        position: 'App Development',
        alt: 'Pictured: Kevin Lee, App Development',
    },
    // Kim
    {
        img: 'assets/headshots/kim.jpg',
        name: 'Kimberly Kwon',
        position: 'App Development',
        alt: 'Pictured: Kimberly Kwon, App Development',
    },
    // Aaron
    {
        img: 'assets/headshots/aaron.JPG',
        name: 'Aaron Kaneti',
        position: 'App Development',
        alt: 'Pictured: Aaron Kaneti, App Development',
    },
    // Ka
    {
        img: 'assets/headshots/ka.jpg',
        name: 'Ka Wong',
        position: 'App Development',
        alt: 'Pictured: Ka Wong, App Development',
    },
    // Tommy
    {
        img: 'assets/headshots/tommy.jpg',
        name: 'Thomas Li',
        position: 'Web Development',
        alt: 'Pictured: Thomas Li, Web Development',
    },
    // Jason
    {
        img: 'assets/headshots/jason_liu.jpg',
        name: 'Jason Liu',
        position: 'Web Development',
        alt: 'Pictured: Jason Liu, Web Development',
    },
    // Tyler
    {
        img: 'assets/headshots/tyler.jpg',
        name: 'Tyler Rodgers',
        position: 'Web Development',
        alt: 'Pictured: Tyler Rodgers, Web Development',
    },
    // Sanfeng
    {
        img: 'assets/headshots/sanfeng.jpg',
        name: 'Sanfeng Wang',
        position: 'Web Development',
        alt: 'Pictured: Sanfeng Wang, Web Development',
    },
    // David
    {
        img: 'assets/headshots/david.jpg',
        name: 'David Ding',
        position: 'Web Development',
        alt: 'Pictured: David Ding, Web Development',
    },
    // Mitchell
    {
        img: 'assets/headshots/mitchell.jpg',
        name: 'Mitchell Smith',
        position: 'Web Development',
        alt: 'Pictured: Mitchell Smith, Web Development',
    },
    // Kenneth
    {
        img: 'assets/headshots/kenneth.jpg',
        name: 'Kenneth Gomez',
        position: 'Web Development',
        alt: 'Pictured: Kenneth Gomez, Web Development',
    },
    // Harrison
    {
        img: 'assets/headshots/harrison.jpg',
        name: 'Harrison Pearl',
        position: 'Alexa/IoT',
        alt: 'Pictured: Harrison Pearl, Alexa/IoT',
    },
    // Josh
    {
        img: 'assets/headshots/josh.jpg',
        name: 'Josh Chen',
        position: 'Alexa/IoT',
        alt: 'Pictured: Josh Chen, Alexa/IoT',
    },
    // Shankar
    {
        img: 'assets/headshots/Shankar.JPG',
        name: 'Shankar Salwan',
        position: 'Data Visualization',
        alt: 'Pictured: Shankar Salwan, Data Visualization',
    },
    // Itay
    {
        img: 'assets/headshots/itay.jpg',
        name: 'Itay Golan',
        position: 'Machine Learning/Computer Vision',
        alt: 'Pictured: Itay Golan, Machine Learning/Computer Vision',
    },
    // Vishal
    {
        img: 'assets/headshots/vishal.jpg',
        name: 'Vishal Giridhar',
        position: 'Machine Learning/Computer Vision',
        alt: 'Pictured: Vishal Giridhar, Machine Learning/Computer Vision',
    },
    // Curtis
    {
        img: 'assets/headshots/curtis.jpg',
        name: 'Curtis Wang',
        position: 'Hardware',
        alt: 'Pictured: Curtis Wang, Hardware',
    },
    // Kendall
    {
        img: 'assets/headshots/kendall.jpg',
        name: 'Kendall Kuzminskas',
        position: 'Hardware',
        alt: 'Pictured: Kendall Kuzminskas, Hardware',
    },
];


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*HERO*/\r\n\r\n#main {\r\n  background: rgb(078, 042, 132);\r\n  background-image: radial-gradient(\r\n    circle,\r\n    #5b3b8c,\r\n    #58378a,\r\n    #553388,\r\n    #512e86,\r\n    #4e2a84\r\n  );\r\n}\r\n\r\n#hero {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  /* establish flex container */\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  /* stack flex items vertically */\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  /* center items vertically, in this case */\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  /* center items horizontally, in this case */\r\n  height: 100vh;\r\n  text-align: center;\r\n  color: #eeeeee;\r\n}\r\n\r\n#apply-link:hover  {\r\n  color: rgb(078,  042,  132);\r\n}\r\n\r\n#ieee-logo {\r\n  height: 10rem;\r\n  width: 10rem;\r\n}\r\n\r\n#title {\r\n  margin-top: 1rem;\r\n}\r\n\r\n#tagline {\r\n  margin-top: 1rem;\r\n  color: #eeeeee;\r\n}\r\n\r\n/*WHO WE ARE*/\r\n\r\n.about-us {\r\n  text-align: left;\r\n}\r\n\r\n/*WHAT WE DO*/\r\n\r\n.fas {\r\n  margin: 0 auto;\r\n  margin-bottom: 1rem;\r\n  font-size: 5rem;\r\n  color: #555;\r\n}\r\n\r\n.what {\r\n  text-align: center;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>IEEE Northwestern | Home</title>\r\n<!--HERO-->\r\n<div class=\"animate fadeIn\">\r\n  <div id=\"main\">\r\n    <div class=\"container\">\r\n      <div id=\"hero\">\r\n        <embed\r\n          class=\"hidden\"\r\n          id=\"ieee-logo\"\r\n          type=\"image/svg+xml\"\r\n          src=\"assets/svg/ieee-white.svg\"\r\n        />\r\n        <h1 class=\"hidden\" id=\"title\">IEEE at Northwestern University</h1>\r\n        <h2 class=\"hidden\" id=\"tagline\">\r\n          <small>\r\n            <strong> Educate. Explore. Engage.</strong>\r\n          </small>\r\n        </h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Who We Are-->\r\n  <div class=\"container about-us\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <h2 id=\"abt-title\">Who We Are</h2>\r\n        <p>\r\n          The Northwestern University Student Chapter of the Institute of\r\n          Electrical and Electronics Engineers (IEEE NU) is an organization\r\n          dedicated to providing the resources and outlets through which the\r\n          University's aspiring engineers, tinkerers, and hackers can learn and\r\n          create with their craft. Our chapter is directly supported and funded\r\n          by Northwestern University's\r\n          <a target=\"_blank\" href=\"http://www.mccormick.northwestern.edu/eecs/\">\r\n            <strong> Electrical Engineering and Computer Science</strong>\r\n          </a>\r\n          (EECS) department.\r\n        </p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <img class=\"img-fluid\" src=\"assets/ieee_photos/badhacks/team.JPG\" />\r\n      </div>\r\n    </div>\r\n    <hr />\r\n  </div>\r\n\r\n  <!--What We Do-->\r\n\r\n  <div class=\"container what\">\r\n    <h2 id=\"what-title\">What We Do</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <i class=\"fas fa-lightbulb\"></i>\r\n        <h3>Educate</h3>\r\n        <p>\r\n          IEEE co-hosts educational CS events with other groups on campus and\r\n          provides hands-on training that is supplemental to Northwestern's\r\n          education in areas like web development and career prep. HackNights\r\n          include presentations with hands-on coding activities, as well as\r\n          catered food for attendees.\r\n        </p>\r\n        <a class=\"btn btn-outline-secondary\" href=\"/educate\" role=\"button\"\r\n          >Learn More</a\r\n        >\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <i id=\"compass\" class=\"fas fa-compass\"></i>\r\n        <h3>Explore</h3>\r\n        <p>\r\n          Every year, IEEE helps motivated students develop a side project under\r\n          the leadership of a student mentor. This program provides students\r\n          with the opportunity to gain experience in computer science and become\r\n          a member of IEEE. These projects are then entered in a showcase open\r\n          to all Northwestern students.\r\n        </p>\r\n        <a class=\"btn btn-outline-secondary\" href=\"/explore\" role=\"button\"\r\n          >Learn More</a\r\n        >\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <i class=\"fas fa-comments\"></i>\r\n        <h3>Engage</h3>\r\n        <p>\r\n          It is important that IEEE connects with the greater Northwestern\r\n          community, both to foster relationships between the organization and\r\n          other students, as well as ensure that students know what\r\n          opportunities are available to them in computer science. Many of\r\n          IEEE's events are open to all Northwestern students.\r\n        </p>\r\n        <a class=\"btn btn-outline-secondary\" href=\"/engage\" role=\"button\"\r\n          >Learn More</a\r\n        >\r\n      </div>\r\n    </div>\r\n    <hr />\r\n  </div>\r\n\r\n  <!--Exec headshots-->\r\n\r\n  <div class=\"container\">\r\n    <h2 class=\"exec-title\">\r\n      Executive Board\r\n      <br />\r\n      <small>2020-2021</small>\r\n    </h2>\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let headshotItem of headshotItems\" class=\"col-md-4 mem\">\r\n        <img src=\"{{ headshotItem.img }}\" alt=\"{{ headshotItem.alt }}\" />\r\n        <h5 class=\"mem-name\">{{ headshotItem.name }}</h5>\r\n        <p class=\"mem-position\">{{ headshotItem.position }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--FOOTER-->\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _headshot_control_headshots_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../headshot-control/headshots.service */ "./src/app/headshot-control/headshots.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(headshotService) {
        this.headshotService = headshotService;
    }
    HomeComponent.prototype.getHeadshotItems = function () {
        var _this = this;
        this.headshotService.getHeadshotItems().then(function (headshotItems) { return _this.headshotItems = headshotItems; });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getHeadshotItems();
        $(document).ready(function () {
            $('#ieee-logo').removeClass('hidden');
            $('#ieee-logo').addClass('animated fadeIn');
            setTimeout(function () {
                $('#title').removeClass('hidden');
                $('#title').addClass('animated fadeIn');
            }, 500);
            setTimeout(function () {
                $('#tagline').removeClass('hidden');
                $('#tagline').addClass('animated bounceIn');
            }, 1000);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            providers: [_headshot_control_headshots_service__WEBPACK_IMPORTED_MODULE_1__["HeadshotService"]]
        }),
        __metadata("design:paramtypes", [_headshot_control_headshots_service__WEBPACK_IMPORTED_MODULE_1__["HeadshotService"]])
    ], HomeComponent);
    return HomeComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andyx\Desktop\ieeewebsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map