import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';

// Used for ngFor, ngIf etc
import { CommonModule } from "@angular/common";

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routingModule, components } from "./product.routing";
import { ProductService } from "./product.service";
import { ProductEditGuard, ProductSaveGuard } from "./product.guards";
import { ProductWidgetComponent } from "./product-widget.component";

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        routingModule
    ],
    exports: [
        ProductListComponent
    ],
    declarations: [
        components,
        ProductWidgetComponent
    ],
    providers: [
        ProductService,
        ProductEditGuard,
        ProductSaveGuard
    ]
})
export class ProductModule { 

}

