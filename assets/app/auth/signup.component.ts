import {Component, OnInit} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';

@Component({
    moduleId: module.id,
    templateUrl: 'signup.template.html',
    styles: [`
        .ng-invalid.ng-touched {
         border: 1px solid red;
        }

    `]
})

export class SignupComponent implements OnInit{
    signupForm : ControlGroup;

    constructor(private _fb: FormBuilder) {

    }

    ngOnInit () {
            this.signupForm = this._fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
        
    
        })
        // console.log(this.signupForm.errors);
    }


}