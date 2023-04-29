import {Component} from '@angular/core';
import {LoginService} from "../login/login.service";

@Component({
    selector: 'airlliant-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    loggedUserFirstName = sessionStorage.getItem('loggedUserFirstName');
    loggedUserLastName = sessionStorage.getItem('loggedUserLastName');

    constructor(public loginService: LoginService
    ) {
    }

}
