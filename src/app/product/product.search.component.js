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
var forms_1 = require("@angular/forms");
var product_service_1 = require("./product.service");
require("rxjs/add/operator/debounceTime");
var ProductSearchComponent = (function () {
    function ProductSearchComponent(formBuilder, productService) {
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.products = [];
        this.searchControl = new forms_1.FormControl("");
        this.group = this.formBuilder.group({
            "searchBox": this.searchControl
        });
    }
    ProductSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl.valueChanges
            .map(function (text) { return text.trim(); })
            .filter(function (text) { return !!text; })
            .filter(function (text) { return text.length > 2; })
            .debounceTime(400)
            .subscribe(function (text) {
            console.log("searching for", text);
            _this.productService.searchProducts(text)
                .subscribe(function (products) {
                _this.products = products;
            });
        });
    };
    ProductSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-search',
            templateUrl: 'product-search.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, product_service_1.ProductService])
    ], ProductSearchComponent);
    return ProductSearchComponent;
}());
exports.ProductSearchComponent = ProductSearchComponent;
//# sourceMappingURL=product.search.component.js.map