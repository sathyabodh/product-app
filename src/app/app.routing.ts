import { RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import { AboutComponent } from "./about.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
]

import {ModuleWithProviders} from "@angular/core";

export const routingModule = RouterModule.forRoot(routes);