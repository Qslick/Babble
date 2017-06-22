"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var firebase = require("nativescript-plugin-firebase");
var SignupComponent = (function () {
    function SignupComponent(fonticon, page, router) {
        this.fonticon = fonticon;
        this.page = page;
        this.router = router;
        page.actionBarHidden = true;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.createAccount = function () {
        firebase.createUser({
            email: this.email,
            password: this.pass
        }).then(function (uid) {
            alert({
                title: "User created",
                message: "uid: " + uid,
                okButtonText: "Nice!"
            });
        }, function (errorMessage) {
            alert({
                title: "No user created",
                message: errorMessage,
                okButtonText: "OK, got it"
            });
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./signup-component.html",
        styleUrls: ['./signup.css']
    }),
    __metadata("design:paramtypes", [nativescript_ngx_fonticon_1.TNSFontIconService, page_1.Page, router_1.Router])
], SignupComponent);
exports.SignupComponent = SignupComponent;
//GET SHA1 FINGERPRINT keytool -list -v -keystore C:\Android\.android\debug.keystore -alias androiddebugkey -storepass android -keypass android  
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBQ3pDLGdDQUErQjtBQUMvQix1RUFBK0Q7QUFFL0QsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFTdkQsSUFBYSxlQUFlO0lBTXhCLHlCQUFvQixRQUE0QixFQUFVLElBQVUsRUFBVSxNQUFjO1FBQXhFLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFFaEMsQ0FBQztJQUdELGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBQ0UsdUNBQWEsR0FBYjtRQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSTtTQUN0QixDQUFDLENBQUMsSUFBSSxDQUNILFVBQVUsR0FBRztZQUNULEtBQUssQ0FBQztnQkFDRixLQUFLLEVBQUUsY0FBYztnQkFDckIsT0FBTyxFQUFFLE9BQU8sR0FBRyxHQUFHO2dCQUN0QixZQUFZLEVBQUUsT0FBTzthQUN4QixDQUFDLENBQUE7UUFDTixDQUFDLEVBQ0QsVUFBVSxZQUFZO1lBQ2xCLEtBQUssQ0FBQztnQkFDRixLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixPQUFPLEVBQUUsWUFBWTtnQkFDckIsWUFBWSxFQUFFLFlBQVk7YUFDN0IsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUNBLENBQUE7SUFDVCxDQUFDO0lBR0wsc0JBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDO0FBckNZLGVBQWU7SUFQM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztLQUU5QixDQUFDO3FDQU9nQyw4Q0FBa0IsRUFBZ0IsV0FBSSxFQUFrQixlQUFNO0dBTm5GLGVBQWUsQ0FxQzNCO0FBckNZLDBDQUFlO0FBc0M1QixnSkFBZ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuXHJcbnZhciBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2lnbnVwLWNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zaWdudXAuY3NzJ11cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwYXNzOiBzdHJpbmc7XHJcbiAgICB1aWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG4gICAgICAgY3JlYXRlQWNjb3VudCgpIHtcclxuICAgICAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3NcclxuICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAodWlkKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBjcmVhdGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJ1aWQ6IFwiICsgdWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJOaWNlIVwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTm8gdXNlciBjcmVhdGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPSywgZ290IGl0XCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuLy9HRVQgU0hBMSBGSU5HRVJQUklOVCBrZXl0b29sIC1saXN0IC12IC1rZXlzdG9yZSBDOlxcQW5kcm9pZFxcLmFuZHJvaWRcXGRlYnVnLmtleXN0b3JlIC1hbGlhcyBhbmRyb2lkZGVidWdrZXkgLXN0b3JlcGFzcyBhbmRyb2lkIC1rZXlwYXNzIGFuZHJvaWQgIl19