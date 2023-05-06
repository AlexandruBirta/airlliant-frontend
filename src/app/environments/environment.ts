export const environment = {
    production: false,
    apiBaseUrl: 'http://localhost:8080/v1',
    keycloakBaseUrl: 'http://localhost:9090',
    keycloakTokenUrl: 'http://localhost:9090/realms/master/protocol/openid-connect/token',
    keycloakLoginUrl: 'http://localhost:9090/realms/Airlliant/protocol/openid-connect/token',
    keycloakAddUserUrl: 'http://localhost:9090/admin/realms/Airlliant/users',
    keycloakAirlliantRealm: 'Airlliant',
    keycloakAirlliantClient: 'airlliant-client',
    keycloakAdminCliClient: 'admin-cli',
    keycloakMasterRealmUsername: 'admin',
    keycloakMasterRealmPassword: 'admin'
};
