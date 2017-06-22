"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var elementRegistryModule = require("nativescript-angular/element-registry");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var firebase = require("nativescript-plugin-firebase");
var topic_service_1 = require("../../shared/topic/topic.service");
var firebase_auth_1 = require("../../shared/firebase.service/firebase-auth");
var auth_service_1 = require("../../shared/security/auth.service");
var HomeComponent = (function () {
    function HomeComponent(topicService, route, firebaseAuth, router, authService) {
        var _this = this;
        this.topicService = topicService;
        this.route = route;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.authService = authService;
        this.route.params.subscribe(function (params) {
            _this.uid = params["uid"];
        });
        alert("Your user id is: " + this.uid);
    }
    HomeComponent.prototype.ngOnInit = function () {
        //If the user is no longer signed in, send to the login screen.
        if (this.firebaseAuth.isAuthenticated() == false) {
            console.log("User is not authenticated, routing to Login Component");
            this.router.navigate["login"];
        }
        // this.topics = this.topicService.getTopics();
    };
    HomeComponent.prototype.logout = function () {
        // this.authService.person.set("Name", "Quinn");
        // this.firebaseAuth.logout();
        // console.log("Updated: " + this.authService.person.get("Name"));
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./home-component.html",
        styleUrls: ['./home.css']
    }),
    __metadata("design:paramtypes", [topic_service_1.TopicService, router_1.ActivatedRoute,
        firebase_auth_1.FirebaseAuth, router_2.Router,
        auth_service_1.AuthService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFDakQsMENBQXlDO0FBQ3pDLDZFQUErRTtBQUMvRSxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUVuRyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUd2RCxrRUFBZ0U7QUFDaEUsNkVBQTJFO0FBRzNFLG1FQUFpRTtBQVNqRSxJQUFhLGFBQWE7SUFLdEIsdUJBQW9CLFlBQTBCLEVBQVUsS0FBcUIsRUFDakUsWUFBMEIsRUFBVSxNQUFjLEVBQ2xELFdBQXdCO1FBRnBDLGlCQVFDO1FBUm1CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDakUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2xELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRWhDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDL0IsS0FBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUE7UUFDRixLQUFLLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksK0RBQStEO1FBQy9ELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUEsQ0FBQztZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUNELCtDQUErQztJQUNuRCxDQUFDO0lBR0wsOEJBQU0sR0FBTjtRQUNJLGdEQUFnRDtRQUNoRCw4QkFBOEI7UUFDOUIsa0VBQWtFO0lBQ3RFLENBQUM7SUFHRCxvQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO0tBRTVCLENBQUM7cUNBTW9DLDRCQUFZLEVBQWlCLHVCQUFjO1FBQ25ELDRCQUFZLEVBQWtCLGVBQU07UUFDckMsMEJBQVc7R0FQM0IsYUFBYSxDQWdDekI7QUFoQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIGVsZW1lbnRSZWdpc3RyeU1vZHVsZSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcclxuZWxlbWVudFJlZ2lzdHJ5TW9kdWxlLnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcpO1xyXG5cclxudmFyIGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5pbXBvcnQgeyBUb3BpYyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdG9waWMvdG9waWNcIjtcclxuaW1wb3J0IHsgVG9waWNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90b3BpYy90b3BpYy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZpcmViYXNlQXV0aCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZmlyZWJhc2Uuc2VydmljZS9maXJlYmFzZS1hdXRoXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21PYmplY3QsIGZyb21PYmplY3RSZWN1cnNpdmUsIFByb3BlcnR5Q2hhbmdlRGF0YSwgRXZlbnREYXRhLCBXcmFwcGVkVmFsdWUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZWN1cml0eS9hdXRoLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUtY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY3NzJ11cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwcml2YXRlIHVpZDtcclxuICAgIHRvcGljczogVG9waWNbXVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9waWNTZXJ2aWNlOiBUb3BpY1NlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VBdXRoOiBGaXJlYmFzZUF1dGgsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51aWQgPSBwYXJhbXNbXCJ1aWRcIl07XHJcbiAgICAgICAgfSlcclxuICAgICAgICBhbGVydChcIllvdXIgdXNlciBpZCBpczogXCIgKyB0aGlzLnVpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy9JZiB0aGUgdXNlciBpcyBubyBsb25nZXIgc2lnbmVkIGluLCBzZW5kIHRvIHRoZSBsb2dpbiBzY3JlZW4uXHJcbiAgICAgICAgaWYodGhpcy5maXJlYmFzZUF1dGguaXNBdXRoZW50aWNhdGVkKCkgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWQsIHJvdXRpbmcgdG8gTG9naW4gQ29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVtcImxvZ2luXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnRvcGljcyA9IHRoaXMudG9waWNTZXJ2aWNlLmdldFRvcGljcygpO1xyXG4gICAgfVxyXG5cclxuXHJcbmxvZ291dCgpe1xyXG4gICAgLy8gdGhpcy5hdXRoU2VydmljZS5wZXJzb24uc2V0KFwiTmFtZVwiLCBcIlF1aW5uXCIpO1xyXG4gICAgLy8gdGhpcy5maXJlYmFzZUF1dGgubG9nb3V0KCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlVwZGF0ZWQ6IFwiICsgdGhpcy5hdXRoU2VydmljZS5wZXJzb24uZ2V0KFwiTmFtZVwiKSk7XHJcbn1cclxuXHJcblxyXG59XHJcbiJdfQ==