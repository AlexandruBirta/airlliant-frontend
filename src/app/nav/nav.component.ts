import {Component} from '@angular/core';
import {LoginService} from "../login/login.service";
import {KeycloakService} from "keycloak-angular";
import {NavService} from "./nav.service";

@Component({
    selector: 'airlliant-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    loggedUserFirstName = sessionStorage.getItem('loggedUserFirstName');
    loggedUserLastName = sessionStorage.getItem('loggedUserLastName');

    constructor(private loginService: LoginService,
                private keycloakService: KeycloakService,
                public navService: NavService
    ) {
    }

    logout() {
        this.keycloakService.logout();
    }

}
