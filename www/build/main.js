webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_shake__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_css_animator__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_css_animator__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { StreamingMedia, StreamingAudioOptions, StreamingVideoOptions } from '@ionic-native/streaming-media';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform, shake, nativeAudio, animationService) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.shake = shake;
        this.nativeAudio = nativeAudio;
        this.animationService = animationService;
        this.times = 0;
        this.sum = [0, 0, 0, 0, 0, 0];
        this.random = [];
        this.array = [];
        this.animator = [];
        this.src = ['assets/imgs/s1.jpg', 'assets/imgs/s1.jpg', 'assets/imgs/s1.jpg', 'assets/imgs/s1.jpg', 'assets/imgs/s1.jpg', 'assets/imgs/s1.jpg'];
        for (var i = 0; i < 6; i++) {
            this.animator[i] = animationService.builder();
        }
        this.nativeAudio.preloadSimple('shake', 'assets/audio/shake.mp3').then(function () {
            console.log("success preload");
        }, function () {
            console.log(' preload Audio error!');
        });
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.shake.startWatch(20).subscribe(function () {
                _this.getArray();
            });
        });
    };
    HomePage.prototype.getArray = function () {
        this.times++;
        for (var i = 0; i < 6; i++) {
            this.sum[i] = 0;
        }
        this.array = [
            'assets/imgs/s1.jpg',
            'assets/imgs/s2.jpg',
            'assets/imgs/s3.jpg',
            'assets/imgs/s4.jpg',
            'assets/imgs/s5.jpg',
            'assets/imgs/s6.jpg'
        ];
        this.max = 0;
        for (var i = 0; i < 6; i++) {
            this.random[i] = Math.floor(Math.random() * 6);
            this.src[i] = this.array[this.random[i]];
            switch (this.random[i]) {
                case 0:
                    this.sum[0]++;
                    if (this.sum[0] > this.max) {
                        this.max = this.sum[0];
                    }
                    break;
                case 1:
                    this.sum[1]++;
                    if (this.sum[1] > this.max) {
                        this.max = this.sum[1];
                    }
                    break;
                case 2:
                    this.sum[2]++;
                    if (this.sum[2] > this.max) {
                        this.max = this.sum[2];
                    }
                    break;
                case 3:
                    this.sum[3]++;
                    if (this.sum[3] > this.max) {
                        this.max = this.sum[3];
                    }
                    break;
                case 4:
                    this.sum[4]++;
                    if (this.sum[4] > this.max) {
                        this.max = this.sum[4];
                    }
                    break;
                case 5:
                    this.sum[5]++;
                    if (this.sum[5] > this.max) {
                        this.max = this.sum[5];
                    }
                    break;
                default: break;
            }
            console.log('max is :' + this.max);
        }
        this.playAudio();
        this.animateElem();
    };
    HomePage.prototype.getSum = function () {
    };
    HomePage.prototype.playAudio = function () {
        this.nativeAudio.play('shake').then(function () {
            console.log('succeed!play');
        }, function () {
            console.log('error playAudio!');
        });
    };
    HomePage.prototype.animateElem = function () {
        this.animator[0].setType('wobble').show(this.myElem1.nativeElement);
        this.animator[1].setType('rubberBand').show(this.myElem2.nativeElement);
        this.animator[2].setType('swing').show(this.myElem3.nativeElement);
        this.animator[3].setType('flipInY').show(this.myElem4.nativeElement);
        this.animator[4].setType('flip').show(this.myElem5.nativeElement);
        this.animator[5].setType('rotateIn').show(this.myElem6.nativeElement);
    };
    HomePage.prototype.Clear = function () {
        this.times = 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myElement1'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "myElem1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myElement2'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "myElem2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myElement3'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "myElem3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myElement4'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "myElem4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myElement5'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "myElem5", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myElement6'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "myElem6", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Pace university\Fall2018\CS641-Mobile Web Development\week12\dice\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      iDice\n    </ion-title>\n    <ion-buttons end>\n       <button ion-button  color="light" (click)="Clear()"> Clear  </button>  \n    </ion-buttons>   \n           \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="home">\n    <div>  \n        <ion-grid class="item item-trns">\n          <ion-row>\n            <ion-col>\n                <h1 class="font-family"><strong>TIMES: {{times}}</strong></h1> \n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col #myElement7>\n                <button ion-button round="true" block outline (click)="getArray()" color="charlie" #myElement7>Click or Shake</button>\n              </ion-col>\n            </ion-row>\n          <ion-row>\n            <ion-col>\n                <h1 class="font-family"><ion-icon name="star"  *ngIf ="max == sum[0]"></ion-icon><strong > ONE: {{sum[0]}}</strong></h1>\n            </ion-col>\n            <ion-col>\n                <h1 class="font-family"><ion-icon name="star"  *ngIf ="max == sum[1]"></ion-icon><strong > TWO: {{sum[1]}}</strong></h1>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n                <h1 class="font-family"><ion-icon name="star"  *ngIf ="max == sum[2]"></ion-icon><strong > THREE: {{sum[2]}}</strong></h1>\n            </ion-col>\n            <ion-col>\n                <h1 class="font-family"><ion-icon name="star"  *ngIf ="max == sum[3]"></ion-icon><strong > FOUR: {{sum[3]}}</strong></h1>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n                <h1 class="font-family"><ion-icon name="star"  *ngIf ="max == sum[4]"></ion-icon><strong > FIVE: {{sum[4]}}</strong></h1>             \n            </ion-col>\n            <ion-col>\n                <h1 class="font-family"><ion-icon name="star"  *ngIf ="max == sum[5]"></ion-icon><strong > SIX: {{sum[5]}}</strong></h1>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        \n        <!-- <button ion-button (click)="animation.start({type:\'wobble\', duration:\'1000\'})">click me</button> -->\n        <!-- <button ion-button (click)="animateElem()">Click here</button> -->\n    </div>\n    \n    \n  <div class="myClass" #myElement1>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n          <ion-card  #myElement2>\n            <img src="{{src[0]}}"/>              \n          </ion-card>\n      </ion-col>\n      <ion-col>\n          <ion-card #myElement3>\n            <img src="{{src[1]}}"/>             \n          </ion-card>\n      </ion-col>\n      <ion-col>\n          <ion-card>\n            <img src="{{src[2]}}"/>               \n          </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <ion-card #myElement4>\n              <img src="{{src[3]}}"/>              \n            </ion-card>\n        </ion-col>\n        <ion-col>\n            <ion-card #myElement5>\n              <img src="{{src[4]}}"/>             \n            </ion-card>\n        </ion-col>\n        <ion-col>\n            <ion-card #myElement6>\n              <img src="{{src[5]}}"/>               \n            </ion-card>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n</div>\n\n  \n  \n</ion-content>\n<ion-footer>\n    <ion-navbar>\n      <ion-title>\n          <h6 class="ion-title">©2018 Chuangyu Cheng. All rights reserved.</h6> \n      </ion-title>            \n    </ion-navbar>\n  </ion-footer>'/*ion-inline-end:"E:\Pace university\Fall2018\CS641-Mobile Web Development\week12\dice\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_shake__["a" /* Shake */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_4_css_animator__["AnimationService"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_shake__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_css_animator__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_streaming_media__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(199);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7_css_animator__["AnimatesDirective"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_shake__["a" /* Shake */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_7_css_animator__["AnimationService"],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_streaming_media__["a" /* StreamingMedia */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\Pace university\Fall2018\CS641-Mobile Web Development\week12\dice\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Pace university\Fall2018\CS641-Mobile Web Development\week12\dice\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map