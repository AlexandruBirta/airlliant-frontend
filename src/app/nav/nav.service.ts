import {Injectable} from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Injectable({
    providedIn: 'root'
})
export class NavService {

    userLoggedIn: boolean = false;

    constructor(private keycloakService: KeycloakService) {
    }

    async checkLoginState() {

        await new Promise(f => setTimeout(f, 200));

        this.keycloakService.loadUserProfile().then(() => {
            this.userLoggedIn = true;
        }).catch(() => {
            this.userLoggedIn = false
        });

        console.log(this.userLoggedIn);
    }

}
