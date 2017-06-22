import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);

var firebase = require("nativescript-plugin-firebase");

import { Topic } from "../../shared/topic/topic";
import { TopicService } from "../../shared/topic/topic.service";
import { FirebaseAuth } from "../../shared/firebase.service/firebase-auth";
import { Observable, fromObject, fromObjectRecursive, PropertyChangeData, EventData, WrappedValue } from "tns-core-modules/data/observable";
import { Injectable } from "@angular/core";
import { AuthService } from "../../shared/security/auth.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./home-component.html",
    styleUrls: ['./home.css']

})
export class HomeComponent implements OnInit {

    private uid;
    topics: Topic[]

    constructor(private topicService: TopicService, private route: ActivatedRoute,
        private firebaseAuth: FirebaseAuth, private router: Router,
        private authService: AuthService) {

        this.route.params.subscribe((params) => {
            this.uid = params["uid"];
        })
        alert("Your user id is: " + this.uid);
    }

    ngOnInit(): void {
        //If the user is no longer signed in, send to the login screen.
        if(this.firebaseAuth.isAuthenticated() == false){
            console.log("User is not authenticated, routing to Login Component");
            this.router.navigate["login"];
        }
        // this.topics = this.topicService.getTopics();
    }


logout(){
    // this.authService.person.set("Name", "Quinn");
    // this.firebaseAuth.logout();
    // console.log("Updated: " + this.authService.person.get("Name"));
}


}
