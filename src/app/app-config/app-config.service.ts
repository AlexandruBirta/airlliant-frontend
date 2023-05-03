import {InjectionToken} from "@angular/core";
import {AppConfig} from "./appconfig.interface";
import {environment} from "../environments/environment";

export const APP_CONFIG_SERVICE = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
    apiBaseUrl: environment.apiBaseUrl,
    usersPath: environment.usersPath,
    tripsPath: environment.tripsPath,
    expensesPath: environment.expensesPath,
    keycloakLoginUrl: environment.keycloakLoginUrl
};
