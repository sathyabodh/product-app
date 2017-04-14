import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";

import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";

import { ProductModule } from "./product/product.module"
import { routingModule } from "./app.routing";

import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { HighlightDirective } from "./highlight.directive";
import { CartModule } from "app/cart/cart.module";
import { AuthModule } from "app/auth/auth.module";

@NgModule({
    imports : [
        BrowserModule,
        routingModule,
        ProductModule,
        CartModule,
        AuthModule
    ],
    declarations : [
        AppComponent,
        HomeComponent,
        AboutComponent,
        HighlightDirective
    ],
    bootstrap : [
        AppComponent
    ],
    providers:[
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        {
            provide: "apiEndPoint",
            useValue:"http://localhost:7070"
        }
    ]
})
export class AppModule {
    
}