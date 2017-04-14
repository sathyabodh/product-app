import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { ProductService } from "./product.service";
import { Product } from "./product.models";
import "rxjs/add/operator/debounceTime";

@Component({
    moduleId: module.id,
    selector: 'product-search',
    templateUrl: 'product-search.component.html'
})

export class ProductSearchComponent implements OnInit {

    group: FormGroup;
    searchControl: FormControl;
    products: Product[] = [];

    constructor(private formBuilder : FormBuilder, 
    private productService: ProductService) { 
        this.searchControl = new FormControl("");
        this.group = this.formBuilder.group({
            "searchBox": this.searchControl
        });
    }

    ngOnInit() { 
        this.searchControl.valueChanges
        .map((text: string) => text.trim())
        .filter((text: string) => !!text)
        .filter((text: string) => text.length > 2)
        .debounceTime(400)
        .subscribe((text: string) => {
            console.log("searching for", text);
            this.productService.searchProducts(text)
            .subscribe((products: Product[])=>{
                this.products = products;
            });
        });
    }
}