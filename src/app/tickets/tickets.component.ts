import {Component, OnInit} from '@angular/core';
import {APP_CONFIG} from "../app-config/app-config.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Ticket} from "../model/ticket.interface";
import {KeycloakService} from "keycloak-angular";
import {User} from "../model/user.interface";

@Component({
    selector: 'airlliant-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

    tickets: Ticket[] = [];
    ticketTableColumns: string[] = ['fromCountry', 'fromAirport', 'toCountry', 'toAirport', 'departure', 'arrival', 'gate', 'seat', 'price'];
    keycloakUserEmail: string | undefined = '';
    enableUserNotifications: boolean = true;
    isNotifiable: boolean = true;

    constructor(private httpClient: HttpClient, private keycloakService: KeycloakService) {
    }

    ngOnInit(): void {

        this.keycloakService.loadUserProfile().then(keycloakUser => {
            this.keycloakUserEmail = keycloakUser.email;

            const apiBase64AuthCredentials: string = btoa(`${APP_CONFIG.apiAuthUsername}:${APP_CONFIG.apiAuthPassword}`);

            this.httpClient.get<Ticket[]>(`${APP_CONFIG.apiBaseUrl}${APP_CONFIG.usersPath}/${this.keycloakUserEmail}${APP_CONFIG.ticketsPath}`,
                {
                    headers: new HttpHeaders({
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Basic ${apiBase64AuthCredentials}`
                    })
                }).subscribe(tickets => {
                this.tickets = tickets;
            });

            this.httpClient.get<User>(`${APP_CONFIG.apiBaseUrl}${APP_CONFIG.usersPath}/email/${this.keycloakUserEmail}`,
                {
                    headers: new HttpHeaders({
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Basic ${apiBase64AuthCredentials}`
                    })
                }).subscribe(user => {
                this.enableUserNotifications = user.isNotifiable;
            });

        });

    }

    changeUserNotifications() {

        const apiBase64AuthCredentials: string = btoa(`${APP_CONFIG.apiAuthUsername}:${APP_CONFIG.apiAuthPassword}`);

        this.httpClient.put(`${APP_CONFIG.apiBaseUrl}${APP_CONFIG.usersPath}/${this.keycloakUserEmail}/isNotifiable/${this.isNotifiable}`
            , null
            , {
                headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${apiBase64AuthCredentials}`
                })
            }).subscribe(data => data);

        this.httpClient.get<User>(`${APP_CONFIG.apiBaseUrl}${APP_CONFIG.usersPath}/email/${this.keycloakUserEmail}`,
            {
                headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${apiBase64AuthCredentials}`
                })
            }).subscribe(user => {
            this.enableUserNotifications = user.isNotifiable;
        });

    }


}
