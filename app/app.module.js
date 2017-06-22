"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var topic_service_1 = require("./shared/topic/topic.service");
var firebase_auth_1 = require("./shared/firebase.service/firebase-auth");
var auth_guard_1 = require("./shared/security/auth.guard");
var auth_service_1 = require("./shared/security/auth.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var app_routing_2 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
            router_1.NativeScriptRouterModule,
            nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                'fa': './assets/font-awesome.css',
            }),
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
        ],
        declarations: [
            app_component_1.AppComponent
        ].concat(app_routing_2.appComponents),
        providers: [
            topic_service_1.TopicService,
            firebase_auth_1.FirebaseAuth,
            auth_guard_1.AuthGuard,
            auth_service_1.AuthService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUV2RSw2Q0FBeUQ7QUFFekQsaURBQStDO0FBRS9DLDhEQUE0RDtBQUM1RCx5RUFBdUU7QUFDdkUsMkRBQXlEO0FBQ3pELCtEQUE2RDtBQUM3RCx1RUFBOEQ7QUFHOUQsNkNBQThDO0FBOEI5QyxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUE3QnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1lBQ2hCLGlDQUF3QjtZQUN4Qiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7Z0JBQ3RCLElBQUksRUFBRSwyQkFBMkI7YUFFcEMsQ0FBQztZQUNGLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO1NBQzNDO1FBQ0QsWUFBWTtZQUNSLDRCQUFZO2lCQUNULDJCQUFhLENBQ25CO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsNEJBQVk7WUFDWiw0QkFBWTtZQUNaLHNCQUFTO1lBQ1QsMEJBQVc7U0FFZDtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUsIHJvdXRlcyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgVG9waWNTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3RvcGljL3RvcGljLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlQXV0aCB9IGZyb20gXCIuL3NoYXJlZC9maXJlYmFzZS5zZXJ2aWNlL2ZpcmViYXNlLWF1dGhcIjtcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gXCIuL3NoYXJlZC9zZWN1cml0eS9hdXRoLmd1YXJkXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9zZWN1cml0eS9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5cblxuaW1wb3J0IHsgYXBwQ29tcG9uZW50cyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsIFxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgICdmYSc6ICcuL2Fzc2V0cy9mb250LWF3ZXNvbWUuY3NzJyxcbiAgICAgICAgICAgIC8vICdpb24nOiAnLi9hc3NldHMvaW9uaWNvbnMuY3NzJ1xuICAgICAgICB9KSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgLi4uYXBwQ29tcG9uZW50c1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFRvcGljU2VydmljZSxcbiAgICAgICAgRmlyZWJhc2VBdXRoLFxuICAgICAgICBBdXRoR3VhcmQsXG4gICAgICAgIEF1dGhTZXJ2aWNlXG5cbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19