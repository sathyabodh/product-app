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
var AboutComponent = (function () {
    function AboutComponent() {
        this.title = "About";
        this.members = ['M1', 'M2', 'M3'];
        this.pincode = 560040;
        this.likes = 0;
        this.showMembers = true;
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent.prototype.toggleMembers = function () {
        this.showMembers = !this.showMembers;
    };
    AboutComponent.prototype.like = function () {
        this.likes++;
    };
    AboutComponent.prototype.addMembers = function (name) {
        this.members.push(name);
    };
    __decorate([
        core_1.Input("title2"), 
        __metadata('design:type', String)
    ], AboutComponent.prototype, "title", void 0);
    AboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'about',
            templateUrl: 'about.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map