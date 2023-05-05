import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {KeycloakUser} from "../model/keycloak-user.interface";
import {Credential} from "../model/keycloak-credential.interface";
import {APP_CONFIG} from "../app-config/app-config.service";
import {map} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class RegisterService {


    constructor(private keycloakClient: HttpClient) {
    }

    async register(firstName: string,
                   lastName: string,
                   email: string,
                   password: string
    ) {

        const keycloakUser: KeycloakUser = {
            enabled: true,
            username: '',
            email: '',
            firstName: '',
            lastName: '',
            credentials: [],
            requiredActions: [],
            groups: [],
            attributes: {
                locale: [
                    "en"
                ]
            }
        };

        keycloakUser.username = `${firstName}.${lastName}`.toLowerCase();
        keycloakUser.email = email;
        keycloakUser.firstName = firstName;
        keycloakUser.lastName = lastName;

        const credential: Credential = {
            type: 'password',
            value: password,
            temporary: false
        }

        keycloakUser.credentials.push(credential);

        console.log(keycloakUser);

        // const keycloakTokenHttpOptions = {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     })
        // };
        //
        // this.keycloakClient.post(
        //     APP_CONFIG.keycloakTokenUrl,
        //     `client_id=admin-cli-client&username=admin&password=admin&grant_type=password`,
        //     keycloakTokenHttpOptions
        // ).subscribe(data => {
        //     data = JSON.parse(data['']);
        //
        // });
        //
        // const keycloakRegisterHttpOptions = {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         Authorization: 'my-auth-token'
        //     })
        // };
        //
        // const addUser = this.keycloakClient.post(
        //     APP_CONFIG.keycloakAddUserUrl,
        //     `client_id=admin-cli-client&username=admin&password=admin&grant_type=password`,
        //     keycloakRegisterHttpOptions
        // ).subscribe(data => {
        //     return data
        // });



    }

}
