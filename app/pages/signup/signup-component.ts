import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from 'ui/page';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

var firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./signup-component.html",
    styleUrls: ['./signup.css']

})
export class SignupComponent implements OnInit {

    email: string;
    pass: string;
    uid: string;

    constructor(private fonticon: TNSFontIconService, private page: Page, private router: Router) {
        page.actionBarHidden = true;

    }


    ngOnInit(): void {
    }
       createAccount() {
        firebase.createUser({
            email: this.email,
            password: this.pass
        }).then(
            function (uid) {
                alert({
                    title: "User created",
                    message: "uid: " + uid,
                    okButtonText: "Nice!"
                })
            },
            function (errorMessage) {
                alert({
                    title: "No user created",
                    message: errorMessage,
                    okButtonText: "OK, got it"
                })
            }
            )
    }


}
//GET SHA1 FINGERPRINT keytool -list -v -keystore C:\Android\.android\debug.keystore -alias androiddebugkey -storepass android -keypass android 