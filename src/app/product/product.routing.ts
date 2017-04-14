import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "./product-list.component";
import { ModuleWithProviders } from "@angular/core";
import { ProductEditComponent } from "./product-edit.component";
import { ProductEditGuard, ProductSaveGuard } from "./product.guards";
import { ProductHomeComponent } from "./product-home.component";
import { ProductSearchComponent } from "./product.search.component";

const routes : Routes = [
    {
        path: "products",
        component: ProductHomeComponent,
        children: [
        {
            path: "list",
            component: ProductListComponent 
        },
        {
            path: "edit/:id",
            component: ProductEditComponent,
            canActivate: [ProductEditGuard],
            canDeactivate: [ProductSaveGuard]
        },
        {
            path: 'search',
            component: ProductSearchComponent
        }
    ]
}
]

export const routingModule:ModuleWithProviders = RouterModule.forChild(routes);

export const components = [
    ProductEditComponent,
    ProductListComponent,
    ProductHomeComponent,
    ProductSearchComponent
]