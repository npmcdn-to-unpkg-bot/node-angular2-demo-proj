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
var message_component_1 = require('./message.component');
var message_service_1 = require('./message.service');
var message_input_component_1 = require('./message-input.component');
var MessageListComponent = (function () {
    function MessageListComponent(_messageService) {
        this._messageService = _messageService;
        this.messages = [];
    }
    MessageListComponent.prototype.ngOnInit = function () {
        this.messages = this._messageService.getMessages();
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'message-list',
            template: "\n       <div>            \n            <my-message *ngFor=\"let message of messages\" [message]=\"message\" (messageChange)=\"message.content = $event\"></my-message>'\n       </div>\n    ",
            directives: [message_component_1.MessageComponent, message_input_component_1.MessageInputComponent],
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUVoRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCx3Q0FBcUMsMkJBQTJCLENBQUMsQ0FBQTtBQWdCakU7SUFHSSw4QkFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBRm5ELGFBQVEsR0FBYyxFQUFFLENBQUM7SUFJekIsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQXBCTDtRQUFDLGdCQUFTLENBQUU7WUFDUixRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsK0xBSVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsRUFBRSwrQ0FBcUIsQ0FBQztTQUV4RCxDQUFDOzs0QkFBQTtJQWFGLDJCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSw0QkFBb0IsdUJBV2hDLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtNZXNzYWdlQ29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgIHtNZXNzYWdlSW5wdXRDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZS1pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQgKHtcclxuICAgIHNlbGVjdG9yOiAnbWVzc2FnZS1saXN0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICA8ZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8bXktbWVzc2FnZSAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiIFttZXNzYWdlXT1cIm1lc3NhZ2VcIiAobWVzc2FnZUNoYW5nZSk9XCJtZXNzYWdlLmNvbnRlbnQgPSAkZXZlbnRcIj48L215LW1lc3NhZ2U+J1xyXG4gICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnQsIE1lc3NhZ2VJbnB1dENvbXBvbmVudF0sXHJcbiAgICAvLyBwcm92aWRlcnM6IFtNZXNzYWdlU2VydmljZV0gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBtZXNzYWdlczogTWVzc2FnZVtdID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkgeyAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9ICB0aGlzLl9tZXNzYWdlU2VydmljZS5nZXRNZXNzYWdlcygpO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
