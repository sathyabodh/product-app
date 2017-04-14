import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "./product.models";

@Component({
    moduleId: module.id,
    selector: 'product-widget',
    templateUrl: 'product-widget.component.html'
})

export class ProductWidgetComponent implements OnInit {
    @Input()
    product: Product ;

    @Output()
    addToCartEvent: EventEmitter<Product> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    toCart() {
        this.addToCartEvent.emit(this.product);
    }
}