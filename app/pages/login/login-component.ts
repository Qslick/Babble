import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from 'ui/page';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

var firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./login-component.html",
    styleUrls: ['./login.css']

})
export class LoginComponent implements OnInit {

    email: string;
    pass: string;
    uid: string;

    constructor(private fonticon: TNSFontIconService, private page: Page, private router: Router) {
        page.actionBarHidden = true;
        // this.email = "qslick04@gmail.com";
        // this.pass = "Quinn004";

    }

    ngOnInit(): void {
    }

    loginPassword() {
        let uid: any;
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: this.email,
            password: this.pass
        }).then(
            function (result) {
                uid = JSON.stringify(result.uid);

                // alert({
                //     title: "Sweet!",
                //     message: JSON.stringify(result.uid) + " UID: " + uid,
                //     okButtonText: "Nice!"
                // })
            },
            function (errorMessage) {
                alert("Error Message : " + errorMessage);
            }
            );
        this.routeAuthUser(uid);
    }

    loginGoogle() {
        firebase.login({
            type: firebase.LoginType.GOOGLE
        }).then(
            function (result) {
                JSON.stringify(result);
                alert(JSON.stringify(result))
            },
            function (errorMessage) {
                alert(errorMessage);
            }
            );
    }

    loginPhone() {
        firebase.login({
            type: firebase.LoginType.PHONE,
            phoneOptions: {
                phoneNumber: '+12345678900',
                verificationPrompt: "The received verification code" // default "Verification code"
            }
        }).then(
            function (result) {
                JSON.stringify(result);
            },
            function (errorMessage) {
                console.log(errorMessage);
            }
            );
    }

 


    emailInput(args) {
        this.email = args.object.text;
    }

    passwordInput(args) {
        this.pass = args.object.text;
    }

    login() {
        console.log("Login button tapped");
    }

    signUp() {
        console.log("Signup button tapped");
    }

    routeAuthUser(uid: any) {
        this.router.navigate(["home"]);

        // if (this.uid != null) {
        //     this.router.navigate(["home", this.uid]);
        // } else {
        //     console.log("Can't log in");
        // }
    }


}
//GET SHA1 FINGERPRINT keytool -list -v -keystore C:\Android\.android\debug.keystore -alias androiddebugkey -storepass android -keypass android 