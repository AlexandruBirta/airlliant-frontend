import {Credential} from "./keycloak-credential.interface";

export interface KeycloakUser {
    "enabled": boolean;
    "username": string;
    "email": string;
    "firstName": string;
    "lastName": string;
    "credentials": Credential[],
    "requiredActions": string[];
    "groups": string[];
    "attributes": {
        locale: string[];
    };
}