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

module.exports = ".footer-container {\n  margin: 20vh auto 0 !important;\n  text-align: center;\n}\n\n.footer-links a {\n  display: inline-block;\n  text-decoration: none;\n  color: inherit;\n  font-size: 125%;\n  margin: .2rem;\n}\n\n.footer-links {\n  margin-left: 33%;\n  width: 33%;\n  text-align: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\np {\n  text-align: center;\n}\n\ni {\n  font-size: 2rem;\n  color: #555;\n}\n\ni:hover {\n  color: rgb(078, 042, 132);\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer-container\">\n  <footer class=\"footer\">\n    <hr>\n    <p class=\"footer-links\">\n      <a href=\"http://facebook.com/groups/ieee.nu\">\n        <i class=\"footer-link fab fa-facebook-square\"></i>\n      </a>\n      <a href=\"https://www.ieee.org/index.html\">\n        <i class=\"footer-link fas fa-globe\"></i>\n      </a>\n      <a href=\"mailto:ieee@u.northwestern.edu\">\n        <i class=\"footer-link fas fa-envelope\"></i>\n      </a>\n    </p>\n  </footer>\n</div>"

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

module.exports = "nav ul {\n    padding: 0;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n\nnav ul li {\n    list-style-type: none;\n    width: 100%;\n    /*this is the line that helped me get rid of the white space at the start of my nav */\n}\n\nnav ul li a {\n    text-decoration: none;\n    margin: 0 auto;\n}\n\ni{\n    font-size: 2rem;\n    color: #555;\n}\n\ni:hover{\n    color: rgb(078, 042, 132);\n}\n\n.active>i{\n    color: rgb(078, 042, 132);\n    font-size: 3rem;\n}\n\n.navbar{\n    margin-bottom: -5rem;\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand\">\n  <div class=\"container\">\n    <ul class=\"navbar-nav nav-fill w-100\">\n      <li class=\"nav-item\">\n        <a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"nav-link\">\n          <i class=\"fas fa-home\"></i>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a a routerLink=\"/educate\" routerLinkActive=\"active\" class=\"nav-link\">\n          <i class=\"fas fa-lightbulb\"></i>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a a routerLink=\"/explore\" routerLinkActive=\"active\" class=\"nav-link\">\n          <i class=\"fas fa-compass\"></i>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a a routerLink=\"/engage\" routerLinkActive=\"active\" class=\"nav-link\">\n          <i class=\"fas fa-comments\"></i>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>"

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

module.exports = ".hck-contain, .hck-contain>p {\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/educate/educate.component.html":
/*!************************************************!*\
  !*** ./src/app/educate/educate.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>IEEE Northwestern | Educate</title>\n</head>\n\n<app-navbar></app-navbar>\n<div class=\"container animated fadeIn\">\n  <h1>Educate</h1>\n  <hr>\n  <div id=\"edu-carousel\" class=\"carousel slide d-none d-md-block\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#edu-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#edu-carousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#edu-carousel\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block  img-fluid first-slide\" src=\"assets/ieee_photos/hacknight/promo.jpg\" alt=\"HackNight promotional image\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block  img-fluid second-slide\" src=\"assets/ieee_photos/hacknight/apinight.jpg\" alt=\"Presentation for and by NU students at HackNight\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block  img-fluid third-slide\" src=\"assets/ieee_photos/hacknight/iosnight.jpg\" alt=\"Presentation for and by NU students at HackNight\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#edu-carousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#edu-carousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n\n  <h2 id=\"hckn-title\">HackNights</h2>\n  <p>Hack Nights educate beginner programmers and provide hands-on training that is supplemental to Northwestern's education\n    in areas like web development, career prep, etc. Hack Nights include presentations with hands-on coding activities, as\n    well as catered food for attendees.</p>\n  <div class=\"container hck-contain\">\n    <h2>HackNight Schedule</h2>\n    <p>Check back closer to the beginning of the school year for updates on our event calendar!</p>\n  </div>\n</div>\n\n<app-footer></app-footer>"

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

module.exports = ".eecs-bbq{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/engage/engage.component.html":
/*!**********************************************!*\
  !*** ./src/app/engage/engage.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>IEEE Northwestern | Engage</title>\n</head>\n<app-navbar></app-navbar>\n<div class=\"container animated fadeIn\">\n  <h1>Engage</h1>\n  <hr>\n  <div id=\"eng-carousel\" class=\"carousel slide d-none d-md-block\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#eng-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#eng-carousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#eng-carousel\" data-slide-to=\"2\"></li>\n      <li data-target=\"#eng-carousel\" data-slide-to=\"3\"></li>\n      <li data-target=\"#eng-carousel\" data-slide-to=\"4\"></li>\n      <li data-target=\"#eng-carousel\" data-slide-to=\"5\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block  img-fluid\" src=\"assets/ieee_photos/badhacks/promo.jpg\" alt=\"BadHacks 2018 promotional image\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block  img-fluid\" src=\"assets/ieee_photos/badhacks/pres1.JPG\" alt=\"Participants presenting their projects\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block  img-fluid\" src=\"assets/ieee_photos/badhacks/typeracer.JPG\" alt=\"Participants playing typeracer\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block  img-fluid\" src=\"assets/ieee_photos/eecsbbq/promo.jpg\" alt=\"EECS BBQ promotional image\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block  img-fluid\" src=\"assets/ieee_photos/eecsbbq/grill.jpg\" alt=\"IEEE members preparing food\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block  img-fluid\" src=\"assets/ieee_photos/eecsbbq/line.jpg\" alt=\"Attendants enjoying the food\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#eng-carousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#eng-carousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <div class=\"eecs-bbq\">\n    <h2>EECS BBQ</h2>\n    <p>While Northwestern students are known for their drive and commendable work ethic, we also like to have fun! Once a year,\n      during our spring quarter, the members of IEEE NU fire up a few grills and host a barbecue for all Northwestern students,\n      faculty, and staff. This event, known as the EECS BBQ, is funded by Northwestern's EECS department and gives everyone\n      a chance to relax and connect with others in the Northwestern community and learn about IEEE.</p>\n    <h2>BadHacks</h2>\n    <p>BadHacks is IEEE NU’s annual 8 hour mini-hackathon. Here, Northwestern students are encouraged to bring their worst tech\n      ideas to life. Prizes are awarded to participants who develop the best projects in certain categories and all are able\n      to enjoy free food while hacking. Group activities and video games are also provided to give hackers a break from developing\n      their projects. This event provides students with an opportunity to meet other students interested in computer science\n      and practice their coding skills in a fun, focused environment.</p>\n    <a class=\"btn btn-outline-secondary\" href=\"https://ieee-nu.github.io/badhacks-2018/\" role=\"button\" target=\"_blank\">BadHacks 2018 Website</a>\n  </div>\n</div>\n\n<app-footer></app-footer>"

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

module.exports = "/* CUSTOMIZE THE CARDS\n-------------------------------------------------- */\n\n.card-body, .card-body>p{\n    text-align: center;\n}\n\n.card {\n    margin-left: auto;\n    margin-right: auto;\n    min-width: 15vw;\n    min-height: 35rem;\n}\n\n.card img{\n    height: 50%;\n}"

/***/ }),

/***/ "./src/app/explore/explore.component.html":
/*!************************************************!*\
  !*** ./src/app/explore/explore.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>IEEE Northwestern | Explore</title>\n</head>\n<app-navbar></app-navbar>\n<div class=\"container animated fadeIn\">\n  <h1>Explore</h1>\n  <hr>\n\n  <div id=\"exp-carousel\" class=\"carousel slide d-none d-md-block\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#exp-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#exp-carousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#exp-carousel\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block img-fluid\" src=\"assets/ieee_photos/IE3/present.jpg\" alt=\"Opening presentation of 2018 Project Showcase\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block img-fluid\" src=\"assets/ieee_photos/IE3/floor1.jpg\" alt=\"Participants presenting their projects\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block img-fluid\" src=\"assets/ieee_photos/IE3/floor2.jpg\" alt=\"Participants presenting their projects\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#exp-carousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#exp-carousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n\n  <h2>IE\n    <sup>3</sup> Technical Program</h2>\n  <p>Interested in exploring the world of software development? Want to take a crack at building something fun or\n    useful with\n    your hardware of choice? Eager to start some sort of project, but don't know how to get going? Consider applying\n    for\n    the IE\n    <sup>3</sup> Technical Program! Every fall quarter, the IEEE Executive Board takes motivated students and guides\n    them through\n    a program focused on mentorship and the introductory exploration of an EECS-related technology.</p>\n\n  <p style=\"text-align: center;\">The application for the 2018-19 IE <sup>3</sup> Technical Program is now closed.\n  </p>\n  <br>\n\n  <h2>Project Mentors\n    <br>\n    <small>2018-2019</small>\n  </h2>\n  <section class=\"members\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div *ngFor=\"let headshotItem of projMentorHeadshots\" class=\"col-md-4 mem\">\n          <img src=\"{{headshotItem.img}}\" alt=\"{{headshotItem.alt}}\" />\n          <h5 class=\"mem-name\">{{headshotItem.name}}</h5>\n          <p class=\"mem-position\">{{headshotItem.position}}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n  <h2>Project Showcase</h2>\n  <p>The annual IEEE NU Project Showcase is an opportunity for Northwestern students, both undergraduate and graduate,\n    to present\n    independent software and hardware projects to employers and the Northwestern community. Most IE\n    <sup>3</sup> teams present their projects here as well. Submissions can consist of any unique, portable, and easily\n    demonstrable\n    original creation. A panel of industry representatives evaluates each project on three main criteria:</p>\n  <br>\n  <ol>\n    <li>\n      Real-World Practicality and Potential Application\n    </li>\n    <li>\n      Technical Difficulty\n    </li>\n    <li>\n      Effectiveness of Project's Execution\n    </li>\n  </ol>\n  <br>\n  <p>The 2018 IEEE NU Project Showcase featured over 20 projects and 50 students, as well as 10 judges from top tech\n    companies.\n    Below are the winning submissions and their descriptions.</p>\n  <h2>2018 Showcase Winners</h2>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"assets/ieee_photos/IE3/open.jpg\" alt=\"Description of image below\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Open</h4>\n            <h6 class=\"card-subtitle mb-2 text-muted\">First Place</h6>\n            <p class=\"card-text\">Tool for real-time sentiment analysis of tweets</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"assets/ieee_photos/IE3/alexa_magic_mirror.jpg\" alt=\"Description of image below\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Alexa Magic Mirror</h4>\n            <h6 class=\"card-subtitle mb-2 text-muted\">Second Place</h6>\n            <p class=\"card-text\">A smart mirror controlled by Amazon’s Alexa</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"assets/ieee_photos/IE3/cadenza.jpg\" alt=\"Description of image below\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Cadenza</h4>\n            <h6 class=\"card-subtitle mb-2 text-muted\">Best Underclassmen Project</h6>\n            <p class=\"card-text\">A web app that allows users to associate their thoughts and experiences with songs in\n              their Spotify playlists</p>\n            <a class=\"btn btn-outline-secondary\" role=\"button\" target=\"_blank\" href=\"http://cadenzaapp.me\" target=\"_blank\">\n              Visit\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

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
    // Shankar
    {
        img: 'assets/headshots/Shankar.JPG',
        name: 'Shankar Salwan',
        position: 'President',
        alt: 'Pictured: Shankar Salwan, President',
    },
    // Sanfeng
    {
        img: 'assets/headshots/sanfeng.jpg',
        name: 'Sanfeng Wang',
        position: 'Vice President',
        alt: 'Pictured: Sanfeng Wang, Vice President',
    },
    // Kevin
    {
        img: 'assets/headshots/kevin_lee.jpg',
        name: 'Kevin Lee',
        position: 'IE3 Technical Program Director & Hack Night Coordinator',
        alt: 'Pictured: Kevin Lee, IE3 Technical Program Director & Hack Night Coordinator',
    },
    // Kendall
    {
        img: 'assets/headshots/kendall.jpg',
        name: 'Kendall Kuzminskas',
        position: 'Treasurer',
        alt: 'Pictured: Kendall Kuzminskas, Treasurer',
    },
    // David
    {
        img: 'assets/headshots/david.jpg',
        name: 'David Ding',
        position: 'Secretary',
        alt: 'Pictured: David Ding, Secretary',
    },
    // Tyler
    {
        img: 'assets/headshots/tyler.jpg',
        name: 'Tyler Rodgers',
        position: 'Webmaster',
        alt: 'Pictured: Tyler Rodgers, Webmaster',
    },
    // Aaron
    {
        img: 'assets/headshots/aaron.JPG',
        name: 'Aaron Kaneti',
        position: 'Social Director',
        alt: 'Pictured: Aaron Kaneti, Social Director',
    },
    // Kimberly
    {
        img: 'assets/headshots/kim.jpg',
        name: 'Kimberly Kwon',
        position: 'Co-Publicity Chair',
        alt: 'Pictured: Kimberly Kwon, Co-Publicity Chair',
    },
    // Thomas
    {
        img: 'assets/headshots/tommy.jpg',
        name: 'Thomas Li',
        position: 'Co-Publicity Chair',
        alt: 'Pictured: Thomas Li, Co-Publicity Chair',
    },
    // Conway
    {
        img: 'assets/headshots/Conway.JPG',
        name: 'Conway Zhu',
        position: 'Legacy Adviser',
        alt: 'Pictured: Conway Zhu, Legacy Adviser',
    },
    // Curtis
    {
        img: 'assets/headshots/curtis.jpg',
        name: 'Curtis Wang',
        position: 'Graduate Adviser',
        alt: 'Pictured: Curtis Wang, Graduate Adviser',
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

module.exports = "/*HERO*/\n\n#main {\n    background: rgb(078, 042, 132);\n    background-image: radial-gradient(circle, #5b3b8c, #58378a, #553388, #512e86, #4e2a84);\n}\n\n#hero {\n    display: -ms-flexbox;\n    display: flex;\n    /* establish flex container */\n    -ms-flex-direction: column;\n        flex-direction: column;\n    /* stack flex items vertically */\n    -ms-flex-pack: center;\n        justify-content: center;\n    /* center items vertically, in this case */\n    -ms-flex-align: center;\n        align-items: center;\n    /* center items horizontally, in this case */\n    height: 70vh;\n    text-align: center;\n    color: #eeeeee;\n}\n\n#apply-link:hover {\n    color: rgb(078, 042, 132);\n}\n\n#ieee-logo {\n    height: 10rem;\n    width: 10rem;\n}\n\n#title {\n    margin-top: 1rem;\n}\n\n#tagline {\n    margin-top: 1rem;\n    color: #eeeeee;\n}\n\n/*WHO WE ARE*/\n\n.about-us {\n    text-align: left;\n}\n\n/*WHAT WE DO*/\n\n.fas {\n    margin: 0 auto;\n    margin-bottom: 1rem;\n    font-size: 5rem;\n    color: #555;\n}\n\n.what {\n    text-align: center;\n}\n\n.hidden{\n    visibility: hidden;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>IEEE Northwestern | Home</title>\n<!--HERO-->\n<div class=\"animate fadeIn\">\n  <div id=\"main\">\n    <div class=\"container\">\n      <div id=\"hero\">\n        <embed class=\"hidden\" id=\"ieee-logo\" type=\"image/svg+xml\" src=\"assets/svg/ieee-white.svg\">\n        <h1 class=\"hidden\" id=\"title\">IEEE at Northwestern University</h1>\n        <h2 class=\"hidden\" id=\"tagline\">\n          <small>\n            <strong> Educate. Explore. Engage.</strong>\n          </small>\n        </h2>\n        <div class=\"text-center\" id=\"apply-link\">          \n          <a href=\"https://bit.ly/ie3applications\" class=\"btn btn-outline-light\" target=\"_blank\" rel=\"noreferrer\">Apply Now!</a>\n        </div>   \n      </div>\n    </div>\n  </div>\n\n  <!--Who We Are-->\n  <div class=\"container about-us\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h2 id=\"abt-title\">Who We Are</h2>\n        <p>\n          The Northwestern University Student Chapter of the Institute of Electrical and Electronics Engineers (IEEE\n          NU) is an organization\n          dedicated to providing the resources and outlets through which the University's aspiring engineers,\n          tinkerers,\n          and hackers can learn and create with their craft. Our chapter is directly supported and funded by\n          Northwestern\n          University's\n          <a target=\"_blank\" href=\"http://www.mccormick.northwestern.edu/eecs/\">\n            <strong> Electrical Engineering and Computer Science</strong>\n          </a> (EECS) department.\n        </p>\n      </div>\n      <div class=\"col-md-6\">\n        <img class=\"img-fluid\" src=\"assets/ieee_photos/badhacks/team.JPG\">\n      </div>\n    </div>\n    <hr>\n  </div>\n\n  <!--What We Do-->\n\n  <div class=\"container what\">\n    <h2 id=\"what-title\">What We Do</h2>\n    <div class=\"row\">\n      <div class=\"col-md-4 \">\n        <i class=\"fas fa-lightbulb\"></i>\n        <h3>Educate</h3>\n        <p>IEEE co-hosts educational CS events with other groups on campus and provides hands-on training that is\n          supplemental\n          to Northwestern's education in areas like web development and career prep. HackNights include presentations\n          with\n          hands-on coding activities, as well as catered food for attendees.</p>\n        <a class=\"btn btn-outline-secondary\" href=\"/educate\" role=\"button\">Learn More</a>\n      </div>\n      <div class=\"col-md-4 \">\n        <i id=\"compass\" class=\"fas fa-compass\"></i>\n        <h3>Explore</h3>\n        <p>Every year, IEEE helps motivated students develop a side project under the leadership of a student mentor.\n          This program\n          provides students with the opportunity to gain experience in computer science and become a member of IEEE.\n          These\n          projects are then entered in a showcase open to all Northwestern students.</p>\n        <a class=\"btn btn-outline-secondary\" href=\"/explore\" role=\"button\">Learn More</a>\n      </div>\n      <div class=\"col-md-4 \">\n        <i class=\"fas fa-comments\"></i>\n        <h3>Engage</h3>\n        <p>It is important that IEEE connects with the greater Northwestern community, both to foster relationships\n          between\n          the organization and other students, as well as ensure that students know what opportunities are available to\n          them\n          in computer science. Many of IEEE's events are open to all Northwestern students.</p>\n        <a class=\"btn btn-outline-secondary\" href=\"/engage\" role=\"button\">Learn More</a>\n      </div>\n    </div>\n    <hr>\n  </div>\n\n  <!--Exec headshots-->\n\n  <div class=\"container\">\n    <h2 class=\"exec-title\">Executive Board\n      <br>\n      <small>2018-2019</small>\n    </h2>\n    <div class=\"row\">\n      <div *ngFor=\"let headshotItem of headshotItems\" class=\"col-md-4 mem\">\n        <img src=\"{{headshotItem.img}}\" alt=\"{{headshotItem.alt}}\" />\n        <h5 class=\"mem-name\">{{headshotItem.name}}</h5>\n        <p class=\"mem-position\">{{headshotItem.position}}</p>\n      </div>\n    </div>\n  </div>\n\n  <!--FOOTER-->\n  <app-footer></app-footer>\n</div>"

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

module.exports = __webpack_require__(/*! /Users/alexr/software/ieeewebsite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map