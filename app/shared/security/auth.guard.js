"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth.service");
var firebase = require("nativescript-plugin-firebase");
var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
        // this.authState = authService.authState$;
    }
    AuthGuard.prototype.canActivate = function () {
        var isAuthenticated = true;
        this.authService.resolve();
        console.log("Observable: " + this.authService.authState$.get("Auth"));
        // return this.authService.authState$.get("Auth");
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBbUc7QUFFbkcsc0NBQTJDO0FBQzNDLCtDQUE2QztBQUM3QyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUd2RCxJQUFhLFNBQVM7SUFHbEIsbUJBQW9CLFdBQXdCLEVBQVUsTUFBYztRQUFoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEUsMkNBQTJDO0lBQy9DLENBQUM7SUFFRCwrQkFBVyxHQUFYO1FBQ0ksSUFBSSxlQUFlLEdBQVksSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdEUsa0RBQWtEO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxTQUFTO0lBRHJCLGlCQUFVLEVBQUU7cUNBSXdCLDBCQUFXLEVBQWtCLGVBQU07R0FIM0QsU0FBUyxDQWNyQjtBQWRZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyLCBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbU9iamVjdCwgZnJvbU9iamVjdFJlY3Vyc2l2ZSwgUHJvcGVydHlDaGFuZ2VEYXRhLCBFdmVudERhdGEsIFdyYXBwZWRWYWx1ZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoLnNlcnZpY2VcIjtcclxudmFyIGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcblxyXG4gICAgYXV0aFN0YXRlO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICAvLyB0aGlzLmF1dGhTdGF0ZSA9IGF1dGhTZXJ2aWNlLmF1dGhTdGF0ZSQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuQWN0aXZhdGUoKSB7XHJcbiAgICAgICAgbGV0IGlzQXV0aGVudGljYXRlZDogYm9vbGVhbiA9IHRydWU7XHJcbiB0aGlzLmF1dGhTZXJ2aWNlLnJlc29sdmUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9ic2VydmFibGU6IFwiICsgdGhpcy5hdXRoU2VydmljZS5hdXRoU3RhdGUkLmdldChcIkF1dGhcIikpO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhTdGF0ZSQuZ2V0KFwiQXV0aFwiKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSJdfQ==