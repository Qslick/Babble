"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var FirebaseAuth = (function () {
    function FirebaseAuth() {
    }
    FirebaseAuth.prototype.isAuthenticated = function () {
        var isAuthenticated;
        firebase.getAuthToken({
            forceRefresh: false
        }).then(function (token) {
            console.log("Auth token retrived: " + token);
            isAuthenticated = true;
        }, function (errorMessage) {
            console.log("Auth token not retrived. ErrorMessage: " + errorMessage);
            isAuthenticated = false;
        });
        return isAuthenticated;
    };
    FirebaseAuth.prototype.logout = function () {
        firebase.logout();
        console.log("Logout function called");
    };
    return FirebaseAuth;
}());
FirebaseAuth = __decorate([
    core_1.Injectable()
], FirebaseAuth);
exports.FirebaseAuth = FirebaseAuth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2UtYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLWF1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFJdkQsSUFBYSxZQUFZO0lBQXpCO0lBd0JBLENBQUM7SUF0Qkcsc0NBQWUsR0FBZjtRQUNJLElBQUksZUFBd0IsQ0FBQztRQUM3QixRQUFRLENBQUMsWUFBWSxDQUFDO1lBQ2xCLFlBQVksRUFBRSxLQUFLO1NBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBVSxLQUFLO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM3QyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUN0RSxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUMsQ0FDQSxDQUFBO1FBQ0wsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUMzQixDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxZQUFZO0lBRHhCLGlCQUFVLEVBQUU7R0FDQSxZQUFZLENBd0J4QjtBQXhCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG52YXIgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VBdXRoIHtcclxuXHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxuICAgICAgICBmaXJlYmFzZS5nZXRBdXRoVG9rZW4oe1xyXG4gICAgICAgICAgICBmb3JjZVJlZnJlc2g6IGZhbHNlXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cml2ZWQ6IFwiICsgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIG5vdCByZXRyaXZlZC4gRXJyb3JNZXNzYWdlOiBcIiArIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIGlzQXV0aGVudGljYXRlZDtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKXtcclxuICAgICAgICBmaXJlYmFzZS5sb2dvdXQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ291dCBmdW5jdGlvbiBjYWxsZWRcIik7XHJcbiAgICB9XHJcblxyXG59Il19