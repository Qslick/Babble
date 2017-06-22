"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var observableModule = require("data/observable");
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var AuthService = (function () {
    function AuthService() {
        this.authState$ = new observable_1.Observable();
        this.authState$ = new observable_1.Observable();
    }
    AuthService.prototype.resolve = function () {
        var isAuthenticated;
        firebase.getAuthToken({
            forceRefresh: false
        }).then(function (token) {
            // console.log("Auth token retrived: " + token);
            isAuthenticated = true;
        }, function (errorMessage) {
            console.log("Auth token not retrived. ErrorMessage: " + errorMessage);
            isAuthenticated = false;
        });
        this.authState$.set("Auth", isAuthenticated);
        return this.authState$;
    };
    return AuthService;
}()); //end of class
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsK0RBQTRJO0FBQzVJLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFHbEQsc0NBQTJDO0FBQzNDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBR3ZELElBQWEsV0FBVztJQUlwQjtRQUZBLGVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUdsQyxJQUFJLENBQUMsVUFBVSxHQUFJLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBRWhDLENBQUM7SUFFRCw2QkFBTyxHQUFQO1FBQ0ksSUFBSSxlQUF3QixDQUFDO1FBQzdCLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDbEIsWUFBWSxFQUFFLEtBQUs7U0FDdEIsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFVLEtBQUs7WUFDWCxnREFBZ0Q7WUFDaEQsZUFBZSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDLEVBQ0QsVUFBVSxZQUFZO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFDdEUsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDLENBQ0EsQ0FBQTtRQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBS0wsa0JBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDLENBQUEsY0FBYztBQTlCRixXQUFXO0lBRHZCLGlCQUFVLEVBQUU7O0dBQ0EsV0FBVyxDQThCdkI7QUE5Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIsIFJlc29sdmUsIENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbU9iamVjdCwgZnJvbU9iamVjdFJlY3Vyc2l2ZSwgUHJvcGVydHlDaGFuZ2VEYXRhLCBFdmVudERhdGEsIFdyYXBwZWRWYWx1ZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG52YXIgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGVcIik7XHJcblxyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbnZhciBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2UgaW1wbGVtZW50cyBSZXNvbHZlPGFueT4ge1xyXG5cclxuICAgIGF1dGhTdGF0ZSQgPSBuZXcgT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG50aGlzLmF1dGhTdGF0ZSQgPSAgbmV3IE9ic2VydmFibGUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVzb2x2ZSgpOk9ic2VydmFibGUge1xyXG4gICAgICAgIGxldCBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbiAgICAgICAgZmlyZWJhc2UuZ2V0QXV0aFRva2VuKHtcclxuICAgICAgICAgICAgZm9yY2VSZWZyZXNoOiBmYWxzZVxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpdmVkOiBcIiArIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCB0b2tlbiBub3QgcmV0cml2ZWQuIEVycm9yTWVzc2FnZTogXCIgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuYXV0aFN0YXRlJC5zZXQoXCJBdXRoXCIsIGlzQXV0aGVudGljYXRlZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFN0YXRlJDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn0vL2VuZCBvZiBjbGFzcyJdfQ==