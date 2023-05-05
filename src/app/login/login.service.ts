import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APP_CONFIG} from "../app-config/app-config.service";
import {KeycloakService} from "keycloak-angular";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    response!: Response;
    tokens: { access_token: string; refresh_token: string } = {access_token: '', refresh_token: ''};

    constructor(private keycloakService: KeycloakService) {
    }

    async login(username: string, password: string) {

        this.response = await fetch(APP_CONFIG.keycloakLoginUrl, {
            method: "POST",
            body: `client_id=airlliant-client&username=${username}&password=${password}&grant_type=password`,
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        });

        this.tokens = await this.response.json().then(({access_token, refresh_token}) => {
            return ({access_token, refresh_token});
        });

        await this.keycloakService.init({
            config: {
                url: 'http://localhost:9090',
                realm: 'Airlliant',
                clientId: 'airlliant-client'
            },
            initOptions: {
                token: this.tokens.access_token,
                refreshToken: this.tokens.refresh_token,
                checkLoginIframe: false
            },
            enableBearerInterceptor: true,
        });

    }

}
