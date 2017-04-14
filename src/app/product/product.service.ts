import { Injectable, OnInit, Inject } from '@angular/core';
// import {Http, Response} from "@angular/http";
import {Http, Response, Headers, RequestOptions} from "@angular/http";


import {Observable} from "rxjs/Observable";

// import "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ProductService implements OnInit {


    constructor(@Inject("apiEndPoint") private apiEndPoint: string, private http:Http) {
        console.log("created product service");
     }

     getProducts(){
        return this.http.get("http://localhost:7070/api/products");
     }

      ngOnInit(): void {
     }
  
    //GET /api/products/1
    getProduct(id :any) : Promise<any> {
        return this.http.get(this.apiEndPoint + "/api/products/" + id)
        .map( (response: Response) => response.json())
        .toPromise();
    }
    //PUT /api/products/1
    //Content-Type: application/json

    //{{data}}
    saveProduct(product: any) {
        let headers: Headers = new Headers({
            "Content-Type": "application/json"
        })

        let requestOptions = new RequestOptions({
            'headers': headers
        })

        let jsonDataText = JSON.stringify(product);

        if (product.id) {
            //PUT /api/products/1
            return this.http.put(this.apiEndPoint + "/api/products/" + product.id,
                jsonDataText,
                requestOptions
            )
            .map( (response : Response ) => response.json())
            .toPromise();
        } else {
            //POST /api/products
            return this.http.post(this.apiEndPoint + "/api/products",
                jsonDataText,
                requestOptions
            )
            .map( (response : Response ) => response.json())
            .toPromise();
        }
    }

    deleteProduct(id: any) {
        return this.http.delete(this.apiEndPoint + "/api/products/" + id)
        .toPromise();
    }

    searchProducts(q: string)   {
         return this.http
                .get(this.apiEndPoint + "/api/products?q=" + q)
                .map( (response: Response) => response.json())
    }

     getBrands() {
         let storage: Storage = window.localStorage;
         if(storage["brands"]){
             console.log("serving from cache");
             return Promise.resolve(JSON.parse(storage["brands"]));
         }
        return this.http.get(this.apiEndPoint + "/api/brands")
            .map( (response: Response) => {
                
                let data = response.json();
                storage.setItem("brands", JSON.stringify(data));
                return data;
                }
            )
        .toPromise()
    }
}