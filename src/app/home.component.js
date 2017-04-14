"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/filter");
var HomeComponent = (function () {
    function HomeComponent() {
        this.title = "Home";
        this.branches = [];
        this.source = new Subject_1.Subject();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.source
            .filter(function (n) { return n > 0.5; })
            .subscribe(function (n) {
            console.log("Subs", n);
        }, function (error) {
            console.log("got error", error);
        });
    };
    HomeComponent.prototype.generate = function () {
        this.source.next(Math.random());
    };
    HomeComponent.prototype.complete = function () {
        this.source.complete();
        console.log("subject is completed");
    };
    HomeComponent.prototype.error = function () {
        this.source.error("crashed error");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HomeComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], HomeComponent.prototype, "branches", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: 'home.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map