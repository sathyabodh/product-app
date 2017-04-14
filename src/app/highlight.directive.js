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
var core_1 = require("@angular/core");
var HighlightDirective = (function () {
    function HighlightDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.color = "greenyellow";
        console.log("Directive");
    }
    HighlightDirective.prototype.ngOnInit = function () {
        this.setColor("green");
    };
    HighlightDirective.prototype.setColor = function (color) {
        this.renderer.setElementStyle(this.elementRef.nativeElement, "background", color);
    };
    HighlightDirective.prototype.mouseEnter = function () {
        this.setColor(this.color);
    };
    HighlightDirective.prototype.mouseLeave = function () {
        this.setColor("");
    };
    __decorate([
        core_1.Input("highlight"), 
        __metadata('design:type', String)
    ], HighlightDirective.prototype, "color", void 0);
    __decorate([
        core_1.HostListener("mouseenter"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HighlightDirective.prototype, "mouseEnter", null);
    __decorate([
        core_1.HostListener("mouseleave"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HighlightDirective.prototype, "mouseLeave", null);
    HighlightDirective = __decorate([
        core_1.Directive({
            selector: "[highlight]"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], HighlightDirective);
    return HighlightDirective;
}());
exports.HighlightDirective = HighlightDirective;
//# sourceMappingURL=highlight.directive.js.map