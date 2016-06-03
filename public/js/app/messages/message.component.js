"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MessageComponent = (function () {
    function MessageComponent() {
    }
    __decorate([
        core_1.Input()
    ], MessageComponent.prototype, "message");
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'my-message',
            template: "\n        <div class=\"row\">\n    <section class=\"col-md-8 col-md-offset-2\">\n        <input type=\"text\" [(ngModel)]=\"message.content\">\n    </section>\n</div>\n<div class=\"row\">\n    <section class=\"col-md-8 col-md-offset-2\">\n        <article class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                {{ message.content }}\n            </div>\n            <footer class=\"panel-footer\">\n                <div class=\"author\">\n                    {{ message.userName }}\n                </div>\n                <div class=\"config\">\n                    <a href=\"#\">Edit</a>\n                    <a href=\"#\">Delete</a>\n                </div>\n            </footer>\n        </article>\n    </section>\n</div>\n    ",
            styles: ["\n  .author {\n    display: inline-block;\n    font-style: italic;\n}"]
        })
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUF5Qy9DO0lBQUE7SUFHQSxDQUFDO0lBRkc7UUFBQyxZQUFLLEVBQUU7NkNBQUE7SUF0Q1o7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLCt2QkF3QlQ7WUFFSCxNQUFNLEVBQUUsQ0FBQyx1RUFJVCxDQUFDO1NBR0YsQ0FBQzt3QkFBQTtJQUtGLHVCQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSx3QkFBZ0IsbUJBRzVCLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LW1lc3NhZ2UnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibWVzc2FnZS5jb250ZW50XCI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAge3sgbWVzc2FnZS5jb250ZW50IH19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZS51c2VyTmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RGVsZXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgIDwvc2VjdGlvbj5cclxuPC9kaXY+XHJcbiAgICBgLFxyXG4gIFxyXG4gIHN0eWxlczogW2BcclxuICAuYXV0aG9yIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufWBdXHJcblxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
