import {KeycloakService} from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
            config: {
                url: 'http://localhost:9090',
                realm: 'Airlliant',
                clientId: 'airlliant-client'
            },
            initOptions: {
                checkLoginIframe: false
            }
        });
}