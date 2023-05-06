import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {KeycloakUser} from "../model/keycloak-user.interface";
import {APP_CONFIG} from "../app-config/app-config.service";
import {KeycloakTokens} from "../model/keycloak-tokens.interface";
import {User} from "../model/user.interface";


@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(private httpClient: HttpClient) {
    }

    register(firstName: string,
             lastName: string,
             email: string,
             password: string
    ) {

        const user: User = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            isNotifiable: true,
            balance: 0.0
        }

        const apiBase64AuthCredentials: string = btoa(`${APP_CONFIG.apiAuthUsername}:${APP_CONFIG.apiAuthPassword}`);

        this.httpClient.post<HttpResponse<any>>(
            `${APP_CONFIG.apiBaseUrl}${APP_CONFIG.usersPath}`,
            user,
            {
                headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${apiBase64AuthCredentials}`
                })
            }
        ).subscribe(
            (data: HttpResponse<any>) => {

                if (data.status === 201) {
                    this.postKeycloakUser(firstName, lastName, email, password);
                }

                return data;

            }
        );


    }

    private postKeycloakUser(firstName: string, lastName: string, email: string, password: string) {

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

        this.httpClient.post<KeycloakTokens>(
            APP_CONFIG.keycloakTokenUrl,
            `client_id=${APP_CONFIG.keycloakAdminCliClient}&username=${APP_CONFIG.keycloakMasterRealmUsername}&password=${APP_CONFIG.keycloakMasterRealmPassword}&grant_type=password`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    // 'Access-Control-Allow-Origin' : 'http://localhost:4200'
                })
            }
        ).subscribe((tokens) => {

                this.httpClient.post(
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
