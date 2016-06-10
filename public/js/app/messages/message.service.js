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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
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
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    MessageService.prototype.deleteMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        return this._http.delete(this.messageUrl + '/' + message.messageId, { headers: this.headers })
            .map(function (response) {
            var data = response.json().obj;
            var message = new message_1.Message(data.content, data._id, 'KDDJ', null);
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    MessageService.prototype.editMessage = function (message) {
        this.messageIsEdited.emit(message);
        // });
    };
    MessageService.prototype.updateMessage = function (message) {
        //this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'KDDJ');
        message = new message_1.Message(message.content, message.messageId, 'KDDJ', null);
        return this._http.patch(this.messageUrl + '/' + message.messageId, JSON.stringify(message), { headers: this.headers })
            .map(function (response) {
            var data = response.json().obj;
            var message = new message_1.Message(data.content, data._id, 'KDDJ', null);
            return message;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUM1QywyQkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUMzQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sMkJBQTJCLENBQUMsQ0FBQTtBQUVuQyx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFHbEM7SUFPWSx3QkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFOL0IsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUMxQixvQkFBZSxHQUFHLElBQUksbUJBQVksRUFBVyxDQUFDO1FBRTlDLGVBQVUsR0FBRywrQkFBK0IsQ0FBQztRQUM3QyxZQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFBO0lBRXhCLENBQUM7SUFHcEMsb0NBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ2pDLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDVyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2pDLElBQUksSUFBSSxHQUFVLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVMsR0FBRztnQkFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7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QixDQUFDLENBQ2hCO2FBQ0EsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBaEVkO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFpRWIscUJBQUM7QUFBRCxDQWhFQSxBQWdFQyxJQUFBO0FBaEVZLHNCQUFjLGlCQWdFMUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBNZXNzYWdlW10gID0gW107XHJcbiAgICAgICAgICAgIG1lc3NhZ2VJc0VkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TWVzc2FnZT4oKTtcclxuXHJcbiAgICAgICAgICAgIG1lc3NhZ2VVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UnO1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KVxyXG5cclxuICAgICAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XHJcblxyXG5cclxuICAgICAgICAgICAgZ2V0TWVzc2FnZXMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5tZXNzYWdlVXJsKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbmV3IE1lc3NhZ2Uob2JqLmNvbnRlbnQsIG9iai5faWQsICdBSkFYRmFrZVVzZXInLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoKG1lc3NhZ2UpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2Jqcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYWRkTWVzc2FnZShtZXNzYWdlIDogTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLm1lc3NhZ2VVcmwsIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCB7aGVhZGVyczogdGhpcy5oZWFkZXJzfSlcclxuICAgICAgICAgICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHsgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKGRhdGEuY29udGVudCwgZGF0YS5faWQsICdBSkFYRmFrZVVzZXIxMicsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZU1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UodGhpcy5tZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpLCAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLm1lc3NhZ2VVcmwgKyAnLycgKyBtZXNzYWdlLm1lc3NhZ2VJZCwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfSlcclxuICAgICAgICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7IGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShkYXRhLmNvbnRlbnQsIGRhdGEuX2lkLCAnS0RESicsIG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWRpdE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSXNFZGl0ZWQuZW1pdChtZXNzYWdlKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLm1lc3NhZ2VzW3RoaXMubWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKV0gPSBuZXcgTWVzc2FnZSgnRWRpdGVkJywgbnVsbCwgJ0tEREonKTtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBuZXcgTWVzc2FnZSAobWVzc2FnZS5jb250ZW50LCBtZXNzYWdlLm1lc3NhZ2VJZCwgJ0tEREonLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBhdGNoKHRoaXMubWVzc2FnZVVybCArICcvJyArIG1lc3NhZ2UubWVzc2FnZUlkLCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwge2hlYWRlcnM6IHRoaXMuaGVhZGVyc30pXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7ICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShkYXRhLmNvbnRlbnQsIGRhdGEuX2lkLCAnS0RESicsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gICAgICAgICAgICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
