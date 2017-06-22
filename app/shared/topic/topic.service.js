"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TopicService = (function () {
    function TopicService() {
        this.topics = new Array({ title: "Rap", category: "Music" }, { title: "Apple", category: "Technology" });
    }
    TopicService.prototype.getTopics = function () {
        return this.topics;
    };
    return TopicService;
}());
TopicService = __decorate([
    core_1.Injectable()
], TopicService);
exports.TopicService = TopicService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvcGljLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFJM0MsSUFBYSxZQUFZO0lBRHpCO1FBRVksV0FBTSxHQUFHLElBQUksS0FBSyxDQUN0QixFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQyxFQUNqQyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQyxDQUMzQyxDQUFDO0lBS04sQ0FBQztJQUhHLGdDQUFTLEdBQVQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVRZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTtHQUNBLFlBQVksQ0FTeEI7QUFUWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUb3BpYyB9IGZyb20gXCIuL3RvcGljXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUb3BpY1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB0b3BpY3MgPSBuZXcgQXJyYXk8VG9waWM+KFxyXG4gICAgICAgIHt0aXRsZTogXCJSYXBcIiwgY2F0ZWdvcnk6IFwiTXVzaWNcIn0sXHJcbiAgICAgICAge3RpdGxlOiBcIkFwcGxlXCIsIGNhdGVnb3J5OiBcIlRlY2hub2xvZ3lcIn1cclxuICAgICk7XHJcblxyXG4gICAgZ2V0VG9waWNzKCk6IFRvcGljW117XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9waWNzO1xyXG4gICAgfVxyXG59Il19