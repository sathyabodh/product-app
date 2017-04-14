import { Component, OnInit } from '@angular/core';
import { ProductService } from "./product.service";
import { Response } from "@angular/http";
import { Product } from "./product.models";
import { CartStorageService } from "app/cart/cart.services";


@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
/*
    providers: [
        ProductService
    ]
*/
})

export class ProductListComponent implements OnInit {
    products: Product[] = [];
    year: number ;

    constructor(private productService : ProductService, 
    private cartService: CartStorageService) { }

    ngOnInit() { 
        this.productService.getProducts().subscribe((response: Response) =>{
            console.log("res", response);
            this.products = response.json();
        });
    }

    addToShoppingCart(product:Product){
        //local storage
        // alert(product.name);
        this.cartService.addProduct(product);
    }
}