import {InjectionToken} from "@angular/core";
import {AppConfig} from "./appconfig.interface";
import {environment} from "../environments/environment";

export const APP_CONFIG_SERVICE = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
    apiBaseUrl: environment.apiBaseUrl,
    keycloakBaseUrl: environment.keycloakBaseUrl,
    keycloakTokenUrl: environment.keycloakTokenUrl,
    keycloakLoginUrl: environment.keycloakLoginUrl,
    keycloakAddUserUrl: environment.keycloakAddUserUrl,
    keycloakAirlliantRealm: environment.keycloakAirlliantRealm,
    keycloakAirlliantClient: environment.keycloakAirlliantClient,
    keycloakAdminCliClient: environment.keycloakAdminCliClient,
    keycloakMasterRealmUsername: environment.keycloakMasterRealmUsername,
    keycloakMasterRealmPassword: environment.keycloakMasterRealmPassword
};
