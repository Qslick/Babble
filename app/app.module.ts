import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppRoutingModule, routes } from "./app.routing";

import { AppComponent } from "./app.component";

import { TopicService } from "./shared/topic/topic.service";
import { FirebaseAuth } from "./shared/firebase.service/firebase-auth";
import { AuthGuard } from "./shared/security/auth.guard";
import { AuthService } from "./shared/security/auth.service";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';


import { appComponents } from "./app.routing";
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptRouterModule, 
        TNSFontIconModule.forRoot({
            'fa': './assets/font-awesome.css',
            // 'ion': './assets/ionicons.css'
        }),
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ...appComponents
    ],
    providers: [
        TopicService,
        FirebaseAuth,
        AuthGuard,
        AuthService

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
