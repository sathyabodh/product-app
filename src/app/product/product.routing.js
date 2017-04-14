"use strict";
var router_1 = require('@angular/router');
var product_list_component_1 = require("./product-list.component");
var product_edit_component_1 = require("./product-edit.component");
var product_guards_1 = require("./product.guards");
var product_home_component_1 = require("./product-home.component");
var product_search_component_1 = require("./product.search.component");
var routes = [
    {
        path: "products",
        component: product_home_component_1.ProductHomeComponent,
        children: [
            {
                path: "list",
                component: product_list_component_1.ProductListComponent
            },
            {
                path: "edit/:id",
                component: product_edit_component_1.ProductEditComponent,
                canActivate: [product_guards_1.ProductEditGuard],
                canDeactivate: [product_guards_1.ProductSaveGuard]
            },
            {
                path: 'search',
                component: product_search_component_1.ProductSearchComponent
            }
        ]
    }
];
exports.routingModule = router_1.RouterModule.forChild(routes);
exports.components = [
    product_edit_component_1.ProductEditComponent,
    product_list_component_1.ProductListComponent,
    product_home_component_1.ProductHomeComponent,
    product_search_component_1.ProductSearchComponent
];
//# sourceMappingURL=product.routing.js.map