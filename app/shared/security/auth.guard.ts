import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, fromObject, fromObjectRecursive, PropertyChangeData, EventData, WrappedValue } from "tns-core-modules/data/observable";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
var firebase = require("nativescript-plugin-firebase");

@Injectable()
export class AuthGuard implements CanActivate {

    authState;
    constructor(private authService: AuthService, private router: Router) {
        // this.authState = authService.authState$;
    }

    canActivate() {
        let isAuthenticated: boolean = true;
 this.authService.resolve();
        console.log("Observable: " + this.authService.authState$.get("Auth"));
        // return this.authService.authState$.get("Auth");
        return true;
    }
}