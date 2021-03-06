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
var product_list_component_1 = require('./product-list.component');
// Used for ngFor, ngIf etc
var common_1 = require("@angular/common");
var http_1 = require('@angular/http');
var forms_1 = require("@angular/forms");
var product_routing_1 = require("./product.routing");
var product_service_1 = require("./product.service");
var product_guards_1 = require("./product.guards");
var product_widget_component_1 = require("./product-widget.component");
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                product_routing_1.routingModule
            ],
            exports: [
                product_list_component_1.ProductListComponent
            ],
            declarations: [
                product_routing_1.components,
                product_widget_component_1.ProductWidgetComponent
            ],
            providers: [
                product_service_1.ProductService,
                product_guards_1.ProductEditGuard,
                product_guards_1.ProductSaveGuard
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map