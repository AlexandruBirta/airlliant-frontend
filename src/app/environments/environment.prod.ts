export const environment = {
    production: true,
    apiBaseUrl: 'http://localhost:8080/airlliant/v1',
    apiAuthUsername: 'rest',
    apiAuthPassword: 'rest123',
    usersPath: '/users',
    flightsPath: '/flights',
    ticketsPath: '/tickets',
    keycloakBaseUrl: 'http://localhost:9090',
    keycloakTokenUrl: 'http://localhost:9090/realms/master/protocol/openid-connect/token',
    keycloakLoginUrl: 'http://localhost:9090/realms/Airlliant/protocol/openid-connect/token',
    keycloakAddUserUrl: 'http://localhost:9090/admin/realms/Airlliant/users',
    keycloakAirlliantRealm: 'Airlliant',
    keycloakAirlliantClient: 'airlliant-client',
    keycloakAdminCliClient: 'admin-cli-client',
    keycloakMasterRealmUsername: 'admin',
    keycloakMasterRealmPassword: 'admin'
};
