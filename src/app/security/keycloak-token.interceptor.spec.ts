import {TestBed} from '@angular/core/testing';

import {KeycloakTokenInterceptor} from './keycloak-token-interceptor.service';

describe('TokenInterceptor', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            KeycloakTokenInterceptor
        ]
    }));

    it('should be created', () => {
        const interceptor: KeycloakTokenInterceptor = TestBed.inject(KeycloakTokenInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
