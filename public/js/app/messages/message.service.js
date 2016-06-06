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
var MessageService = (function () {
    function MessageService() {
        this.messages = [new message_1.Message('test content', null, 'AK'),
            new message_1.Message('sparta content', null, 'Maks')
        ];
    }
    MessageService.prototype.getMessages = function () {
        console.log(this.messages);
        return this.messages;
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLHdCQUFzQixXQUFXLENBQUMsQ0FBQTtBQUdsQztJQUFBO1FBQ1ksYUFBUSxHQUFJLENBQUUsSUFBSSxpQkFBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQ3ZDLElBQUksaUJBQU8sQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDO1NBQzVDLENBQUE7SUFPekIsQ0FBQztJQUxXLG9DQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBVGI7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQVdiLHFCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSxzQkFBYyxpQkFVMUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcclxuICAgICAgICAgICAgbWVzc2FnZXMgID0gWyBuZXcgTWVzc2FnZSgndGVzdCBjb250ZW50JywgbnVsbCwgJ0FLJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE1lc3NhZ2UoJ3NwYXJ0YSBjb250ZW50JywgbnVsbCwgJ01ha3MnKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgZ2V0TWVzc2FnZXMoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
