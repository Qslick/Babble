import { Router, Resolve, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { ObservableArray } from "data/observable-array";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable, fromObject, fromObjectRecursive, PropertyChangeData, EventData, WrappedValue } from "tns-core-modules/data/observable";
var observableModule = require("data/observable");


import { Injectable } from "@angular/core";
var firebase = require("nativescript-plugin-firebase");

@Injectable()
export class AuthService implements Resolve<any> {

    authState$ = new Observable();

    constructor() {
this.authState$ =  new Observable();

    }

    resolve():Observable {
        let isAuthenticated: boolean;
        firebase.getAuthToken({
            forceRefresh: false
        }).then(
            function (token) {
                // console.log("Auth token retrived: " + token);
                isAuthenticated = true;
            },
            function (errorMessage) {
                console.log("Auth token not retrived. ErrorMessage: " + errorMessage);
                isAuthenticated = false;
            }
            )
        this.authState$.set("Auth", isAuthenticated);
        return this.authState$;
    }




}//end of class