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
// import {Http, Response} from "@angular/http";
var http_1 = require("@angular/http");
// import "rxjs/Rx";
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.apiEndPoint = "http://localhost:7070";
        console.log("created product service");
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get("http://localhost:7070/api/products");
    };
    ProductService.prototype.ngOnInit = function () {
    };
    //GET /api/products/1
    ProductService.prototype.getProduct = function (id) {
        return this.http.get(this.apiEndPoint + "/api/products/" + id)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    //PUT /api/products/1
    //Content-Type: application/json
    //{{data}}
    ProductService.prototype.saveProduct = function (product) {
        var headers = new http_1.Headers({
            "Content-Type": "application/json"
        });
        var requestOptions = new http_1.RequestOptions({
            'headers': headers
        });
        var jsonDataText = JSON.stringify(product);
        if (product.id) {
            //PUT /api/products/1
            return this.http.put(this.apiEndPoint + "/api/products/" + product.id, jsonDataText, requestOptions)
                .map(function (response) { return response.json(); })
                .toPromise();
        }
        else {
            //POST /api/products
            return this.http.post(this.apiEndPoint + "/api/products", jsonDataText, requestOptions)
                .map(function (response) { return response.json(); })
                .toPromise();
        }
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.apiEndPoint + "/api/products/" + id)
            .toPromise();
    };
    ProductService.prototype.searchProducts = function (q) {
        return this.http
            .get(this.apiEndPoint + "/api/products?q=" + q)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.getBrands = function () {
        return this.http.get(this.apiEndPoint + "/api/brands")
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map