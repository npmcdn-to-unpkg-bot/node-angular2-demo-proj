"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var message_component_1 = require('./messages/message.component');
var AppComponent = (function () {
    function AppComponent() {
        this.message = {
            content: 'test content',
            author: 'AK'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.template.html',
            styleUrls: ['app.styles.css'],
            directives: [message_component_1.MessageComponent]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxrQ0FBK0IsOEJBQThCLENBQUMsQ0FBQTtBQVk5RDtJQUFBO1FBQ0ksWUFBTyxHQUFHO1lBQ04sT0FBTyxFQUFFLGNBQWM7WUFDdkIsTUFBTSxFQUFFLElBQUk7U0FDZixDQUFBO0lBRUwsQ0FBQztJQWREO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO1NBRWpDLENBQUM7b0JBQUE7SUFPRixtQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksb0JBQVksZUFNeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2VDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAudGVtcGxhdGUuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2FwcC5zdHlsZXMuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG4gICBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBtZXNzYWdlID0ge1xuICAgICAgICBjb250ZW50OiAndGVzdCBjb250ZW50JyxcbiAgICAgICAgYXV0aG9yOiAnQUsnXG4gICAgfVxuICAgIFxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
