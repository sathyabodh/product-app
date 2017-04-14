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
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var product_models_1 = require("./product.models");
var forms_1 = require("@angular/forms");
var ProductEditComponent = (function () {
    function ProductEditComponent(route, productService, router) {
        this.route = route;
        this.productService = productService;
        this.router = router;
        this.product = new product_models_1.Product();
        this.brands = [];
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params["id"];
        console.log("product id:", id);
        if (id) {
            this.productService.getProduct(id)
                .then(function (product) {
                _this.product = product;
            });
            this.productService.getBrands()
                .then(function (brands) {
                _this.brands = brands;
            });
        }
    };
    ProductEditComponent.prototype.saveProduct = function () {
        var _this = this;
        if (this.form.dirty) {
            this.productService.saveProduct(this.product)
                .then(function (savedProduct) {
                _this.form.reset();
                console.log("product is saved");
                _this.router.navigate(["/products/list"]);
            });
        }
        else {
            console.log("form not dirty");
        }
    };
    ProductEditComponent.prototype.canLeavePage = function () {
        return !this.form.dirty;
    };
    __decorate([
        core_1.ViewChild("productForm"), 
        __metadata('design:type', forms_1.NgForm)
    ], ProductEditComponent.prototype, "form", void 0);
    ProductEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'product-edit.component.html',
            styles: [
                "\n            input.ng-invalid{\n                background: red\n            }\n\n            input.ng-dirty {\n                background: yellow\n            }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, product_service_1.ProductService, router_1.Router])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=product-edit.component.js.map