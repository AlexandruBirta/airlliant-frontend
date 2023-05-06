import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {APP_CONFIG} from "../app-config/app-config.service";
import {KeycloakService} from "keycloak-angular";
import {KeycloakTokens} from "../model/keycloak-tokens.interface";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private keycloakClient: HttpClient, private keycloakService: KeycloakService) {
    }

    login(username: string, password: string) {

        this.keycloakClient.post<KeycloakTokens>(
            APP_CONFIG.keycloakLoginUrl,
            `client_id=${APP_CONFIG.keycloakAirlliantClient}&username=${username}&password=${password}&grant_type=password`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            }
        ).subscribe((tokens) => {

                this.keycloakService.init({
                    config: {
                        url: APP_CONFIG.keycloakBaseUrl,
                        realm: APP_CONFIG.keycloakAirlliantRealm,
                        clientId: APP_CONFIG.keycloakAirlliantClient
                    },
                    initOptions: {
                        token: tokens.access_token,
                        refreshToken: tokens.refresh_token,
                        checkLoginIframe: false
                    },
                    enableBearerInterceptor: true,
                }).then(r => r);

            }
        );

    }

}
