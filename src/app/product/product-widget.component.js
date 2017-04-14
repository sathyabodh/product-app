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
var product_models_1 = require("./product.models");
var ProductWidgetComponent = (function () {
    function ProductWidgetComponent() {
        this.addToCartEvent = new core_1.EventEmitter();
    }
    ProductWidgetComponent.prototype.ngOnInit = function () { };
    ProductWidgetComponent.prototype.toCart = function () {
        this.addToCartEvent.emit(this.product);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', product_models_1.Product)
    ], ProductWidgetComponent.prototype, "product", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProductWidgetComponent.prototype, "addToCartEvent", void 0);
    ProductWidgetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-widget',
            templateUrl: 'product-widget.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductWidgetComponent);
    return ProductWidgetComponent;
}());
exports.ProductWidgetComponent = ProductWidgetComponent;
//# sourceMappingURL=product-widget.component.js.map