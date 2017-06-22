import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes, CanActivate, CanActivateChild, CanDeactivate } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./pages/login/login-component";
import { HomeComponent } from "./pages/home/home-component";
import { SignupComponent } from "./pages/signup/signup-component";


import { AuthGuard } from './shared/security/auth.guard';

export const routes: Routes = [
    { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
    { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    { path: "sighup", component: SignupComponent},
    // { path: "home/:uid", component: HomeComponent }
];

export const appComponents: any = [
    LoginComponent,
    HomeComponent,
    SignupComponent
]

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }