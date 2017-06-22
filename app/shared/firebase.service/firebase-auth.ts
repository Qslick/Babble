import { Injectable } from "@angular/core";
var firebase = require("nativescript-plugin-firebase");
import { Router } from "@angular/router";

@Injectable()
export class FirebaseAuth {

    isAuthenticated(): boolean {
        let isAuthenticated: boolean;
        firebase.getAuthToken({
            forceRefresh: false
        }).then(
            function (token) {
                console.log("Auth token retrived: " + token);
                isAuthenticated = true;
            },
            function (errorMessage) {
                console.log("Auth token not retrived. ErrorMessage: " + errorMessage);
                isAuthenticated = false;
            }
            )
        return isAuthenticated;
    }

    logout(){
        firebase.logout();
        console.log("Logout function called");
    }

}