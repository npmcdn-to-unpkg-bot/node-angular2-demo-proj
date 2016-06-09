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
var MessageComponent = (function () {
    function MessageComponent(_messageService) {
        this._messageService = _messageService;
        this.messageChange = new core_1.EventEmitter();
    }
    MessageComponent.prototype.onEdit = function () {
        // var messageBeforeEdit = this.message;
        this._messageService.editMessage(this.message);
        // .subscribe(response => {
        //                         this.message = response;
        //                         this._messageService.messages[this._messageService.messages.indexOf(messageBeforeEdit)] = response;
        // })
        //    this.messageChange.emit(this._messageService);
    };
    MessageComponent.prototype.onDelete = function () {
        this._messageService.deleteMessage(this.message);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MessageComponent.prototype, "messageChange", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'my-message',
            template: "\n<div class=\"row\">\n    <section class=\"col-md-8 col-md-offset-2\">\n        <article class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                {{ message.content }}\n            </div>\n            <footer class=\"panel-footer\">\n                <div class=\"author\">\n                    {{ message.userName }}\n                </div>\n                <div class=\"config pull-right\" >\n                    <a href=\"#\" (click)=\"onEdit()\">Edit</a>\n                    <a href=\"#\" (click)=\"onDelete()\">Delete</a>\n                </div>\n            </footer>\n        </article>\n    </section>\n</div>\n    ",
            styles: ["\n  .author {\n    display: inline-block;\n    font-style: italic;\n}"]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFBZSxDQUFDLENBQUE7QUFFckUsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBa0NqRDtJQUlJLDBCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFGekMsa0JBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQUlyRCxDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNJLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDMUMsMkJBQTJCO1FBQzNCLG1EQUFtRDtRQUNuRCw4SEFBOEg7UUFDOUgsS0FBSztRQUNiLG9EQUFvRDtJQUNwRCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBbkJEO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzsyREFBQTtJQWxDYjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsaXBCQW1CVDtZQUVILE1BQU0sRUFBRSxDQUFDLHVFQUlULENBQUM7U0FHRixDQUFDOzt3QkFBQTtJQXdCRix1QkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0Qlksd0JBQWdCLG1CQXNCNUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG48ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAge3sgbWVzc2FnZS5jb250ZW50IH19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZS51c2VyTmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlnIHB1bGwtcmlnaHRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwib25FZGl0KClcIj5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj5EZWxldGU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L2Rpdj5cclxuICAgIGAsXHJcbiBcclxuICBzdHlsZXM6IFtgXHJcbiAgLmF1dGhvciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1gXVxyXG5cclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBtZXNzYWdlOiBNZXNzYWdlO1xyXG4gICAgQE91dHB1dCgpIG1lc3NhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHsgXHJcblxyXG4gICAgfVxyXG4gIFxyXG4gICAgb25FZGl0KCkge1xyXG4gICAgICAgIC8vIHZhciBtZXNzYWdlQmVmb3JlRWRpdCA9IHRoaXMubWVzc2FnZTtcclxuICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5lZGl0TWVzc2FnZSh0aGlzLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIC8vIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UubWVzc2FnZXNbdGhpcy5fbWVzc2FnZVNlcnZpY2UubWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlQmVmb3JlRWRpdCldID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAvLyAgICB0aGlzLm1lc3NhZ2VDaGFuZ2UuZW1pdCh0aGlzLl9tZXNzYWdlU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuZGVsZXRlTWVzc2FnZSh0aGlzLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
