import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductEditGuard implements CanActivate {
    constructor(private router: Router) { console.log('ProductEditGuard is created')}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // this.router.navigate(["/about"]);
        return window.confirm("Do you want to edit");
    }
}

import {CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ProductEditComponent } from './product-edit.component';

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable()
export class ProductSaveGuard implements CanDeactivate<ProductEditComponent> {
    canDeactivate(
        component: ProductEditComponent,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        if(component.canLeavePage()){
            return true;
        }
        return window.confirm("Do you want to leave the page. Changes will be lost")
    }
}