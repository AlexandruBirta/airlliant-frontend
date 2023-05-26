import {KeycloakService} from "keycloak-angular";
import {APP_CONFIG} from "../app-config/app-config.service";

export function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
                config: {
                    url: APP_CONFIG.keycloakBaseUrl,
                    realm: APP_CONFIG.keycloakAirlliantRealm,
                    clientId: APP_CONFIG.keycloakAirlliantClient
                },
                initOptions: {
                    checkLoginIframe: false
                },
                enableBearerInterceptor: false
            }
        );
}