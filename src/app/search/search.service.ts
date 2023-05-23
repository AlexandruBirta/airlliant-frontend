import {Injectable} from '@angular/core';
import {Flight} from "../model/flight.interface";
import {APP_CONFIG} from "../app-config/app-config.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    filter!: string;

    constructor(private httpClient: HttpClient) {
    }

    searchFlights() {

        const apiBase64AuthCredentials: string = btoa(`${APP_CONFIG.apiAuthUsername}:${APP_CONFIG.apiAuthPassword}`);

        return this.httpClient.get<Flight[]>(`${APP_CONFIG.apiBaseUrl}${APP_CONFIG.flightsPath}${this.filter}`,
            {
                headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${apiBase64AuthCredentials}`
                })
            });

    }


}
