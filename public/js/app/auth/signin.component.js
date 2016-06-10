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
var common_1 = require('@angular/common');
var user_1 = require('./user');
var auth_service_1 = require('./auth.service');
var SigninComponent = (function () {
    function SigninComponent(_fb, _authService) {
        this._fb = _fb;
        this._authService = _authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.signinForm = this._fb.group({
            email: [],
            password: []
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        var user = new user_1.User(this.signinForm.value.email, this.signinForm.value.password);
        this._authService.signinUser(user)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'signin.template.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.UserAuthService])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUFvRCxpQkFBaUIsQ0FBQyxDQUFBO0FBRXRFLHFCQUFtQixRQUFRLENBQUMsQ0FBQTtBQUM1Qiw2QkFBOEIsZ0JBQWdCLENBQUMsQ0FBQTtBQU8vQztJQUdJLHlCQUFvQixHQUFnQixFQUFVLFlBQTZCO1FBQXZELFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7SUFFM0UsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQzdCLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFDLEVBQUU7U0FDZCxDQUFDLENBQUE7SUFFTixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDN0IsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBckIsQ0FBcUIsRUFDckIsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUNsRCxDQUFBO0lBQ1QsQ0FBQztJQTFCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFDLHNCQUFzQjtTQUNyQyxDQUFDOzt1QkFBQTtJQTBCRixzQkFBQztBQUFELENBeEJBLEFBd0JDLElBQUE7QUF4QlksdUJBQWUsa0JBd0IzQixDQUFBIiwiZmlsZSI6ImF1dGgvc2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xHcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCB7VXNlckF1dGhTZXJ2aWNlfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDonc2lnbmluLnRlbXBsYXRlLmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHNpZ25pbkZvcm06IENvbnRyb2xHcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBVc2VyQXV0aFNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zaWduaW5Gb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBlbWFpbDogW10sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOltdXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHRoaXMuc2lnbmluRm9ybS52YWx1ZS5lbWFpbCwgdGhpcy5zaWduaW5Gb3JtLnZhbHVlLnBhc3N3b3JkKTtcclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zaWduaW5Vc2VyKHVzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
