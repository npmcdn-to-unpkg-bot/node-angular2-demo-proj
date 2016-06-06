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
        this.messages = this._messageService.messages;
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'message-list',
            template: "\n       <div>\n            <my-message-input></my-message-input>\n            <my-message *ngFor=\"let message of messages\" [message]=\"message\" (messageChange)=\"message.content = $event\"></my-message>'\n       </div>\n    ",
            directives: [message_component_1.MessageComponent, message_input_component_1.MessageInputComponent],
            providers: [message_service_1.MessageService]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUVoRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCx3Q0FBcUMsMkJBQTJCLENBQUMsQ0FBQTtBQWdCakU7SUFHSSw4QkFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBRm5ELGFBQVEsR0FBRyxFQUFFLENBQUM7SUFJZCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7SUFDbkQsQ0FBQztJQXJCTDtRQUFDLGdCQUFTLENBQUU7WUFDUixRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsc09BS1Q7WUFDRCxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsRUFBRSwrQ0FBcUIsQ0FBQztZQUNyRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQzlCLENBQUM7OzRCQUFBO0lBcUJGLDJCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSw0QkFBb0IsdUJBbUJoQyxDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4vbWVzc2FnZS5zZXJ2aWNlJztcclxuaW1wb3J0ICB7TWVzc2FnZUlucHV0Q29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCAoe1xyXG4gICAgc2VsZWN0b3I6ICdtZXNzYWdlLWxpc3QnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxteS1tZXNzYWdlLWlucHV0PjwvbXktbWVzc2FnZS1pbnB1dD5cclxuICAgICAgICAgICAgPG15LW1lc3NhZ2UgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBbbWVzc2FnZV09XCJtZXNzYWdlXCIgKG1lc3NhZ2VDaGFuZ2UpPVwibWVzc2FnZS5jb250ZW50ID0gJGV2ZW50XCI+PC9teS1tZXNzYWdlPidcclxuICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtNZXNzYWdlQ29tcG9uZW50LCBNZXNzYWdlSW5wdXRDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbTWVzc2FnZVNlcnZpY2VdIFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgbWVzc2FnZXMgPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7ICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBtZXNzYWdlID0ge2NvbnRlbnQ6ICd0ZXN0IGNvbnRlbnQnLCB1c2VyTmFtZTogJ01heCd9XHJcbiAgICBcclxuICAgIC8vIGNoYW5nZUNvbnRlbnQgKGV2ZW50KSB7XHJcbiAgICAvLyAgICAgdGhpcy5tZXNzYWdlLmNvbnRlbnQgPSBcImFwcCBjaGFuZWQgY29udGVudFwiXHJcbiAgICAvLyB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
