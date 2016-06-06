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
var message_1 = require('./message');
var message_service_1 = require('./message.service');
var MessageInputComponent = (function () {
    function MessageInputComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageInputComponent.prototype.onCreate = function (content) {
        var message = new message_1.Message(content, null, 'Amax');
        this._messageService.messages.push(message);
        this._messageService.getMessages();
    };
    MessageInputComponent = __decorate([
        core_1.Component({
            selector: 'my-message-input',
            template: "\n   <form>\n        <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" #inputVar>\n        </div>\n        <button class=\"btn btn-primary\" (click)=\"onCreate(inputVar.value)\">send message</button>   \n   </form>\n    ",
            providers: [message_service_1.MessageService]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFFeEMsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBZ0JqRDtJQUdJLCtCQUFxQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFFcEQsQ0FBQztJQUVELHdDQUFRLEdBQVIsVUFBUyxPQUFnQjtRQUNyQixJQUFNLE9BQU8sR0FBWSxJQUFJLGlCQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUV2QyxDQUFDO0lBekJMO1FBQUMsZ0JBQVMsQ0FBRTtZQUNSLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLGdRQU9UO1lBQ0QsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUM5QixDQUFDOzs2QkFBQTtJQWVGLDRCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSw2QkFBcUIsd0JBYWpDLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZSc7XHJcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4vbWVzc2FnZS5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbiAgICBzZWxlY3RvcjogJ215LW1lc3NhZ2UtaW5wdXQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgPGZvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAjaW5wdXRWYXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvbkNyZWF0ZShpbnB1dFZhci52YWx1ZSlcIj5zZW5kIG1lc3NhZ2U8L2J1dHRvbj4gICBcclxuICAgPC9mb3JtPlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW01lc3NhZ2VTZXJ2aWNlXVxyXG59KSBcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnR7XHJcbiAgIFxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uQ3JlYXRlKGNvbnRlbnQgOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoY29udGVudCwgbnVsbCwgJ0FtYXgnKTtcclxuICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2VzKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
