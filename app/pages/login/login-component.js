"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var firebase = require("nativescript-plugin-firebase");
var LoginComponent = (function () {
    function LoginComponent(fonticon, page, router) {
        this.fonticon = fonticon;
        this.page = page;
        this.router = router;
        page.actionBarHidden = true;
        // this.email = "qslick04@gmail.com";
        // this.pass = "Quinn004";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginPassword = function () {
        var uid;
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: this.email,
            password: this.pass
        }).then(function (result) {
            uid = JSON.stringify(result.uid);
            // alert({
            //     title: "Sweet!",
            //     message: JSON.stringify(result.uid) + " UID: " + uid,
            //     okButtonText: "Nice!"
            // })
        }, function (errorMessage) {
            alert("Error Message : " + errorMessage);
        });
        this.routeAuthUser(uid);
    };
    LoginComponent.prototype.loginGoogle = function () {
        firebase.login({
            type: firebase.LoginType.GOOGLE
        }).then(function (result) {
            JSON.stringify(result);
            alert(JSON.stringify(result));
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    LoginComponent.prototype.loginPhone = function () {
        firebase.login({
            type: firebase.LoginType.PHONE,
            phoneOptions: {
                phoneNumber: '+12345678900',
                verificationPrompt: "The received verification code" // default "Verification code"
            }
        }).then(function (result) {
            JSON.stringify(result);
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    LoginComponent.prototype.emailInput = function (args) {
        this.email = args.object.text;
    };
    LoginComponent.prototype.passwordInput = function (args) {
        this.pass = args.object.text;
    };
    LoginComponent.prototype.login = function () {
        console.log("Login button tapped");
    };
    LoginComponent.prototype.signUp = function () {
        console.log("Signup button tapped");
    };
    LoginComponent.prototype.routeAuthUser = function (uid) {
        this.router.navigate(["home"]);
        // if (this.uid != null) {
        //     this.router.navigate(["home", this.uid]);
        // } else {
        //     console.log("Can't log in");
        // }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./login-component.html",
        styleUrls: ['./login.css']
    }),
    __metadata("design:paramtypes", [nativescript_ngx_fonticon_1.TNSFontIconService, page_1.Page, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//GET SHA1 FINGERPRINT keytool -list -v -keystore C:\Android\.android\debug.keystore -alias androiddebugkey -storepass android -keypass android  
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4tY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFDL0IsdUVBQStEO0FBRS9ELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBU3ZELElBQWEsY0FBYztJQU12Qix3QkFBb0IsUUFBNEIsRUFBVSxJQUFVLEVBQVUsTUFBYztRQUF4RSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLHFDQUFxQztRQUNyQywwQkFBMEI7SUFFOUIsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLElBQUksR0FBUSxDQUFDO1FBQ2IsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSTtTQUN0QixDQUFDLENBQUMsSUFBSSxDQUNILFVBQVUsTUFBTTtZQUNaLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVqQyxVQUFVO1lBQ1YsdUJBQXVCO1lBQ3ZCLDREQUE0RDtZQUM1RCw0QkFBNEI7WUFDNUIsS0FBSztRQUNULENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDbEIsS0FBSyxDQUFDLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FDQSxDQUFDO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDWCxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNO1NBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBVSxNQUFNO1lBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDbEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FDQSxDQUFDO0lBQ1YsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDSSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ1gsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSztZQUM5QixZQUFZLEVBQUU7Z0JBQ1YsV0FBVyxFQUFFLGNBQWM7Z0JBQzNCLGtCQUFrQixFQUFFLGdDQUFnQyxDQUFDLDhCQUE4QjthQUN0RjtTQUNKLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBVSxNQUFNO1lBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQ0QsVUFBVSxZQUFZO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUNBLENBQUM7SUFDVixDQUFDO0lBS0QsbUNBQVUsR0FBVixVQUFXLElBQUk7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxHQUFRO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUUvQiwwQkFBMEI7UUFDMUIsZ0RBQWdEO1FBQ2hELFdBQVc7UUFDWCxtQ0FBbUM7UUFDbkMsSUFBSTtJQUNSLENBQUM7SUFHTCxxQkFBQztBQUFELENBQUMsQUFwR0QsSUFvR0M7QUFwR1ksY0FBYztJQVAxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO0tBRTdCLENBQUM7cUNBT2dDLDhDQUFrQixFQUFnQixXQUFJLEVBQWtCLGVBQU07R0FObkYsY0FBYyxDQW9HMUI7QUFwR1ksd0NBQWM7QUFxRzNCLGdKQUFnSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5cclxudmFyIGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi1jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY3NzJ11cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3M6IHN0cmluZztcclxuICAgIHVpZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMuZW1haWwgPSBcInFzbGljazA0QGdtYWlsLmNvbVwiO1xyXG4gICAgICAgIC8vIHRoaXMucGFzcyA9IFwiUXVpbm4wMDRcIjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5QYXNzd29yZCgpIHtcclxuICAgICAgICBsZXQgdWlkOiBhbnk7XHJcbiAgICAgICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXHJcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdWlkID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0LnVpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRpdGxlOiBcIlN3ZWV0IVwiLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6IEpTT04uc3RyaW5naWZ5KHJlc3VsdC51aWQpICsgXCIgVUlEOiBcIiArIHVpZCxcclxuICAgICAgICAgICAgICAgIC8vICAgICBva0J1dHRvblRleHQ6IFwiTmljZSFcIlxyXG4gICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBNZXNzYWdlIDogXCIgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZUF1dGhVc2VyKHVpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5Hb29nbGUoKSB7XHJcbiAgICAgICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuR09PR0xFXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpblBob25lKCkge1xyXG4gICAgICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBIT05FLFxyXG4gICAgICAgICAgICBwaG9uZU9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiAnKzEyMzQ1Njc4OTAwJyxcclxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvblByb21wdDogXCJUaGUgcmVjZWl2ZWQgdmVyaWZpY2F0aW9uIGNvZGVcIiAvLyBkZWZhdWx0IFwiVmVyaWZpY2F0aW9uIGNvZGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuIFxyXG5cclxuXHJcbiAgICBlbWFpbElucHV0KGFyZ3MpIHtcclxuICAgICAgICB0aGlzLmVtYWlsID0gYXJncy5vYmplY3QudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwYXNzd29yZElucHV0KGFyZ3MpIHtcclxuICAgICAgICB0aGlzLnBhc3MgPSBhcmdzLm9iamVjdC50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gYnV0dG9uIHRhcHBlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduVXAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTaWdudXAgYnV0dG9uIHRhcHBlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZUF1dGhVc2VyKHVpZDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZVwiXSk7XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnVpZCAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImhvbWVcIiwgdGhpcy51aWRdKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkNhbid0IGxvZyBpblwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4vL0dFVCBTSEExIEZJTkdFUlBSSU5UIGtleXRvb2wgLWxpc3QgLXYgLWtleXN0b3JlIEM6XFxBbmRyb2lkXFwuYW5kcm9pZFxcZGVidWcua2V5c3RvcmUgLWFsaWFzIGFuZHJvaWRkZWJ1Z2tleSAtc3RvcmVwYXNzIGFuZHJvaWQgLWtleXBhc3MgYW5kcm9pZCAiXX0=