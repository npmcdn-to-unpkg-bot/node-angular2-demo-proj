import {Component, OnInit} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';

import {User} from './user';
import {UserAuthService} from './auth.service';

@Component({
    moduleId: module.id,
    templateUrl:'signin.template.html'
})

export class SigninComponent implements OnInit {
    signinForm: ControlGroup;

    constructor(private _fb: FormBuilder, private _authService: UserAuthService) {

    }

    ngOnInit() {
        this.signinForm = this._fb.group({
            email: [],
            password:[]
        })

    }

    onSubmit() {
        const user = new User(this.signinForm.value.email, this.signinForm.value.password);
        this._authService.signinUser(user)
            .subscribe(data=>  localStorage.setItem('token', data.token),
                                    error => console.log(error)
            )
    }


}