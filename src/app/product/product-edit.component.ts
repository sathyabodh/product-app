import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "./product.service";
import { Product, Brand } from "./product.models";
import { NgForm } from "@angular/forms";

@Component({
    moduleId: module.id,
    templateUrl: 'product-edit.component.html',
    styles:[
        `
            input.ng-invalid{
                background: red
            }

            input.ng-dirty {
                background: yellow
            }
        `
    ]
})

export class ProductEditComponent implements OnInit {
    
    product: Product = new Product();
    brands : Array<Brand> = [];

    @ViewChild("productForm")
    form: NgForm ;

    constructor(private route: ActivatedRoute, 
    private productService: ProductService,
    private router: Router) 
    { 

    }

    ngOnInit() { 
        let id:any = this.route.snapshot.params["id"];
        console.log("product id:", id);

        if(id){
            this.productService.getProduct(id)
            .then((product: Product) => {
                this.product = product;
            })

            this.productService.getBrands()
            .then((brands: Brand[])=>{
                this.brands = brands;
            })    
        }
    }

    saveProduct(){
        if(this.form.dirty){
        this.productService.saveProduct(this.product)
        .then((savedProduct: Product)=>{
            this.form.reset();
            console.log("product is saved");
            this.router.navigate(["/products/list"]);

        });
    }
    else{
        console.log("form not dirty");
    }
}

    canLeavePage() : Boolean {
        return !this.form.dirty;
    }


}