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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var message_1 = require('./message');
var MessageService = (function () {
    function MessageService(_http) {
        this._http = _http;
        this.messages = [];
        this.messageIsEdited = new core_1.EventEmitter();
        this.messageUrl = 'http://localhost:3000/message';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    MessageService.prototype.getMessages = function () {
        return this._http.get(this.messageUrl)
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            data.forEach(function (obj) {
                var message = new message_1.Message(obj.content, obj._id, 'AJAXFakeUser', null);
                objs.push(message);
            });
            console.log(objs);
            return objs;
        });
    };
    MessageService.prototype.addMessage = function (message) {
        return this._http.post(this.messageUrl, JSON.stringify(message), { headers: this.headers })
            .map(function (response) {
            var data = response.json().obj;
            var message = new message_1.Message(data.content, data._id, 'AJAXFakeUser12', null);
            return message;
        });
    };
    MessageService.prototype.deleteMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    MessageService.prototype.editMessage = function (message) {
        // this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'KDDJ');
        // message = new Message ('Edited', message.messageId, 'KDDJ', null);
        // return this._http.put(this.messageUrl + '/' + message.messageId, JSON.stringify(message), {headers: this.headers})
        //     .map(response => {  const data = response.json().obj; 
        //                          let message = new Message(data.content, data._id, 'AJAXFakeUser12', null);
        //                         return message;
        this.messageIsEdited.emit(message);
        // });
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUM1QyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFFL0Isd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBR2xDO0lBT1ksd0JBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBTi9CLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDMUIsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztRQUU5QyxlQUFVLEdBQUcsK0JBQStCLENBQUM7UUFDN0MsWUFBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQTtJQUV4QixDQUFDO0lBR3BDLG9DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNqQyxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1csSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLElBQUksR0FBVSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFTLEdBQUc7Z0JBQ3JCLElBQUksT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsT0FBaUI7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUM7YUFDcEYsR0FBRyxDQUFDLFVBQUEsUUFBUTtZQUFPLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzRSxNQUFNLENBQUMsT0FBTyxDQUFDO1FBR3JDLENBQUMsQ0FBQyxDQUFDO0lBRVQsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxPQUFnQjtRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQWdCO1FBQ3hCLHVGQUF1RjtRQUN2RixxRUFBcUU7UUFDckUscUhBQXFIO1FBQ3JILDZEQUE2RDtRQUM3RCxzR0FBc0c7UUFDdEcsMENBQTBDO1FBRTFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5DLE1BQU07SUFDVCxDQUFDO0lBbkRkO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFvRGIscUJBQUM7QUFBRCxDQW5EQSxBQW1EQyxJQUFBO0FBbkRZLHNCQUFjLGlCQW1EMUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBNZXNzYWdlW10gID0gW107XHJcbiAgICAgICAgICAgIG1lc3NhZ2VJc0VkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TWVzc2FnZT4oKTtcclxuXHJcbiAgICAgICAgICAgIG1lc3NhZ2VVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UnO1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KVxyXG5cclxuICAgICAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XHJcblxyXG5cclxuICAgICAgICAgICAgZ2V0TWVzc2FnZXMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5tZXNzYWdlVXJsKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbmV3IE1lc3NhZ2Uob2JqLmNvbnRlbnQsIG9iai5faWQsICdBSkFYRmFrZVVzZXInLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoKG1lc3NhZ2UpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2Jqcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYWRkTWVzc2FnZShtZXNzYWdlIDogTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLm1lc3NhZ2VVcmwsIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCB7aGVhZGVyczogdGhpcy5oZWFkZXJzfSlcclxuICAgICAgICAgICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHsgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKGRhdGEuY29udGVudCwgZGF0YS5faWQsICdBSkFYRmFrZVVzZXIxMicsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZU1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UodGhpcy5tZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWRpdE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tZXNzYWdlc1t0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSldID0gbmV3IE1lc3NhZ2UoJ0VkaXRlZCcsIG51bGwsICdLRERKJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBtZXNzYWdlID0gbmV3IE1lc3NhZ2UgKCdFZGl0ZWQnLCBtZXNzYWdlLm1lc3NhZ2VJZCwgJ0tEREonLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLm1lc3NhZ2VVcmwgKyAnLycgKyBtZXNzYWdlLm1lc3NhZ2VJZCwgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHtoZWFkZXJzOiB0aGlzLmhlYWRlcnN9KVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC5tYXAocmVzcG9uc2UgPT4geyAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7IFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoZGF0YS5jb250ZW50LCBkYXRhLl9pZCwgJ0FKQVhGYWtlVXNlcjEyJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VJc0VkaXRlZC5lbWl0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
