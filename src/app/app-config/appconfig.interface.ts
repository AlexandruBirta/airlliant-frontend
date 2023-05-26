export interface AppConfig {
    apiBaseUrl: string;
    apiAuthUsername: string;
    apiAuthPassword: string;
    usersPath: string;
    flightsPath: string;
    ticketsPath: string;
    keycloakBaseUrl: string;
    keycloakTokenUrl: string;
    keycloakLoginUrl: string;
    keycloakAddUserUrl: string;
    keycloakAirlliantRealm: string;
    keycloakAirlliantClient: string;
    keycloakAdminCliClient: string;
    keycloakMasterRealmUsername: string;
    keycloakMasterRealmPassword: string;
}
