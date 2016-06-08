import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {SignupComponent} from './signup.component';


@Routes([
    {path: '/signup', component: SignupComponent}       //child routes
])

@Component ({
    selector: 'my-auth',
    template: `
        <div class="row">
            <div class="col-md-10 col-md-offset-2">
                    <ul class="nav nav-pills">
                        <li><a [routerLink]="['./signup']">Signup</a></li>
                        <li><a href="#">Sign-in</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
            </div>
        </div>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class AuthenticationComponent {

}