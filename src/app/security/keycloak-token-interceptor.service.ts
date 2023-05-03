import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KeycloakService} from "keycloak-angular";

@Injectable()
export class KeycloakTokenInterceptor implements HttpInterceptor {

    constructor(private keycloakService: KeycloakService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.keycloakService.getKeycloakInstance().token}`
            }
        });

        return next.handle(request);
    }
}
