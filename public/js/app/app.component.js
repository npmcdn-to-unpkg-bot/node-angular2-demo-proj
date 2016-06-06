"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var message_component_1 = require('./messages/message.component');
var AppComponent = (function () {
    function AppComponent() {
        // messages = [
        //     {
        //     content: 'test content',
        //     userName: 'AK'
        //     },
        //     {
        //         content:'test2 content',
        //         userName: 'Max'
        //     }
        // ]
        this.message = { content: 'test content', userName: 'Max' };
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.template.html',
            styleUrls: ['app.styles.css'],
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxrQ0FBK0IsOEJBQThCLENBQUMsQ0FBQTtBQVk5RDtJQUFBO1FBQ0ksZUFBZTtRQUNmLFFBQVE7UUFDUiwrQkFBK0I7UUFDL0IscUJBQXFCO1FBQ3JCLFNBQVM7UUFDVCxRQUFRO1FBQ1IsbUNBQW1DO1FBQ25DLDBCQUEwQjtRQUMxQixRQUFRO1FBRVIsSUFBSTtRQUNKLFlBQU8sR0FBRyxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFBO0lBS3hELENBQUM7SUF6QkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7U0FFakMsQ0FBQzs7b0JBQUE7SUFrQkYsbUJBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLG9CQUFZLGVBaUJ4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudCc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC50ZW1wbGF0ZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnYXBwLnN0eWxlcy5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUNvbXBvbmVudF1cbiAgIFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIC8vIG1lc3NhZ2VzID0gW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgIGNvbnRlbnQ6ICd0ZXN0IGNvbnRlbnQnLFxuICAgIC8vICAgICB1c2VyTmFtZTogJ0FLJ1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBjb250ZW50Oid0ZXN0MiBjb250ZW50JyxcbiAgICAvLyAgICAgICAgIHVzZXJOYW1lOiAnTWF4J1xuICAgIC8vICAgICB9XG4gICAgXG4gICAgLy8gXVxuICAgIG1lc3NhZ2UgPSB7Y29udGVudDogJ3Rlc3QgY29udGVudCcsIHVzZXJOYW1lOiAnTWF4J31cbiAgICBcbiAgICAvLyBjaGFuZ2VDb250ZW50IChldmVudCkge1xuICAgIC8vICAgICB0aGlzLm1lc3NhZ2UuY29udGVudCA9IFwiYXBwIGNoYW5lZCBjb250ZW50XCJcbiAgICAvLyB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
