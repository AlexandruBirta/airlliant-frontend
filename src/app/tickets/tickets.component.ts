import {Component, OnInit} from '@angular/core';
import {APP_CONFIG} from "../app-config/app-config.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Ticket} from "../model/ticket.interface";
import {KeycloakService} from "keycloak-angular";

@Component({
    selector: 'airlliant-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

    tickets: Ticket[] = [];
    ticketTableColumns: string[] = ['fromCountry', 'fromAirport', 'toCountry', 'toAirport', 'departure', 'arrival', 'gate', 'seat', 'price'];
    keycloakUserEmail: string | undefined = '';

    constructor(private httpClient: HttpClient, private keycloakService: KeycloakService) {
    }

    ngOnInit(): void {

        // this.keycloakService.loadUserProfile().then(keycloakUser => {
        //     this.keycloakUserEmail = keycloakUser.email;
        // });

        const apiBase64AuthCredentials: string = btoa(`${APP_CONFIG.apiAuthUsername}:${APP_CONFIG.apiAuthPassword}`);

        this.httpClient.get<Ticket[]>(`${APP_CONFIG.apiBaseUrl}${APP_CONFIG.usersPath}/alexbirta2011@gmail.com${APP_CONFIG.ticketsPath}`,
            {
                headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${apiBase64AuthCredentials}`
                })
            }).subscribe(tickets => {
            this.tickets = tickets;
            console.log(JSON.stringify(this.tickets[0]));

        });


    }


}
