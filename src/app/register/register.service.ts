import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {KeycloakUser} from "../model/keycloak-user.interface";
import {APP_CONFIG} from "../app-config/app-config.service";
import {KeycloakTokens} from "../model/keycloak-tokens.interface";


@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(private keycloakClient: HttpClient) {
    }

    register(firstName: string,
             lastName: string,
             email: string,
             password: string
    ) {

        const keycloakUser: KeycloakUser = {
            enabled: true,
            username: `${firstName}.${lastName}`.toLowerCase(),
            email: email,
            firstName: firstName,
            lastName: lastName,
            credentials: [
                {
                    type: 'password',
                    value: password,
                    temporary: false
                }
            ],
            requiredActions: [],
            groups: [],
            attributes: {
                locale: [
                    "en"
                ]
            }
        };

        console.log(keycloakUser);

        this.keycloakClient.post<KeycloakTokens>(
            APP_CONFIG.keycloakTokenUrl,
            `client_id=${APP_CONFIG.keycloakAdminCliClient}&username=${APP_CONFIG.keycloakMasterRealmUsername}&password=${APP_CONFIG.keycloakMasterRealmPassword}&grant_type=password`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    // 'Access-Control-Allow-Origin' : 'http://localhost:4200'
                })
            }
        ).subscribe((tokens) => {

                this.keycloakClient.post(
                    APP_CONFIG.keycloakAddUserUrl,
                    keycloakUser,
                    {
                        headers: new HttpHeaders({
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${tokens.access_token}`
                        })
                    }
                ).subscribe(data => {
                    return data
                });

            }
        );

    }

}
