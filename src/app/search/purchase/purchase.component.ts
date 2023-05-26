import {Component, OnInit} from '@angular/core';
import {SearchService} from "../search.service";
import {KeycloakService} from "keycloak-angular";
import {Flight} from "../../model/flight.interface";
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from "@techiediaries/ngx-qrcode";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {APP_CONFIG} from "../../app-config/app-config.service";
import {Seats} from "../../model/seats.interface";

@Component({
    selector: 'airlliant-purchase',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

    selectedFlight: Flight = {
        "id": 1,
        "fromCountry": "UK",
        "fromAirport": "LHR",
        "toCountry": "Spain",
        "toAirport": "MDR",
        "flightCompany": "Tarom",
        "flightNumber": "LHRMDR1",
        "departureDate": "2023-07-03T23:59:59",
        "arrivalDate": "2023-07-04T02:59:59",
        "roundTrip": true,
        "price": 120.59,
        "seats": {
            "seatRowA": {
                "seat1": true,
                "seat2": false,
                "seat3": false,
                "seat4": false,
                "seat5": false,
                "seat6": false,
                "seat7": false,
                "seat8": false,
                "seat9": false,
                "seat10": false,
                "seat11": false,
                "seat12": false,
                "seat13": false,
                "seat14": false,
                "seat15": false,
                "seat16": false,
                "seat17": false,
                "seat18": false,
                "seat19": false,
                "seat20": false,
                "seat21": false,
                "seat22": false,
                "seat23": false
            },
            "seatRowB": {
                "seat1": false,
                "seat2": false,
                "seat3": false,
                "seat4": false,
                "seat5": false,
                "seat6": false,
                "seat7": false,
                "seat8": false,
                "seat9": false,
                "seat10": false,
                "seat11": false,
                "seat12": false,
                "seat13": false,
                "seat14": false,
                "seat15": false,
                "seat16": false,
                "seat17": false,
                "seat18": false,
                "seat19": false,
                "seat20": false,
                "seat21": false,
                "seat22": false,
                "seat23": false
            },
            "seatRowC": {
                "seat1": false,
                "seat2": false,
                "seat3": false,
                "seat4": false,
                "seat5": false,
                "seat6": false,
                "seat7": false,
                "seat8": false,
                "seat9": false,
                "seat10": false,
                "seat11": false,
                "seat12": false,
                "seat13": false,
                "seat14": false,
                "seat15": false,
                "seat16": false,
                "seat17": false,
                "seat18": false,
                "seat19": false,
                "seat20": false,
                "seat21": false,
                "seat22": false,
                "seat23": false
            },
            "seatRowD": {
                "seat1": false,
                "seat2": false,
                "seat3": false,
                "seat4": false,
                "seat5": false,
                "seat6": false,
                "seat7": false,
                "seat8": false,
                "seat9": false,
                "seat10": false,
                "seat11": false,
                "seat12": false,
                "seat13": false,
                "seat14": false,
                "seat15": false,
                "seat16": false,
                "seat17": false,
                "seat18": false,
                "seat19": false,
                "seat20": false,
                "seat21": false,
                "seat22": false,
                "seat23": false
            },
            "seatRowE": {
                "seat1": false,
                "seat2": false,
                "seat3": false,
                "seat4": false,
                "seat5": false,
                "seat6": false,
                "seat7": false,
                "seat8": false,
                "seat9": false,
                "seat10": false,
                "seat11": false,
                "seat12": false,
                "seat13": false,
                "seat14": false,
                "seat15": false,
                "seat16": false,
                "seat17": false,
                "seat18": false,
                "seat19": false,
                "seat20": false,
                "seat21": false,
                "seat22": false,
                "seat23": false
            },
            "seatRowF": {
                "seat1": false,
                "seat2": false,
                "seat3": false,
                "seat4": false,
                "seat5": false,
                "seat6": false,
                "seat7": false,
                "seat8": false,
                "seat9": false,
                "seat10": false,
                "seat11": false,
                "seat12": false,
                "seat13": false,
                "seat14": false,
                "seat15": false,
                "seat16": false,
                "seat17": false,
                "seat18": false,
                "seat19": false,
                "seat20": false,
                "seat21": false,
                "seat22": false,
                "seat23": false
            }
        },
        "insertedDate": "2023-05-21T18:51:40.565",
        "updatedDate": "2023-05-25T15:47:51.765"
    };

    selectedSeats: Seats = {
        "seatRow": '',
        "seatNumber": ''
    };

    selectedRowAndSeat: string = '';
    qrCodeElementType = NgxQrcodeElementTypes.URL;
    qrCodeCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    qrCodeValue = '';
    keycloakUserEmail: string | undefined = '';

    constructor(private searchService: SearchService, private keycloakService: KeycloakService, private httpClient: HttpClient) {
    }

    ngOnInit(): void {

        if (this.searchService.selectedFlight !== null && this.searchService.selectedSeat !== null && this.searchService.selectedSeatRow !== null) {
            this.selectedFlight = this.searchService.selectedFlight;
            this.selectedRowAndSeat = this.searchService.selectedSeatRow.at(this.searchService.selectedSeatRow.length - 1) + this.searchService.selectedSeat.substring(4, this.searchService.selectedSeat.length);
            this.selectedSeats = {
                "seatRow": this.searchService.selectedSeatRow,
                "seatNumber": this.searchService.selectedSeat
            };
            this.qrCodeValue = `${this.selectedFlight.flightNumber}-${this.selectedRowAndSeat}`;
        }

        this.keycloakService.loadUserProfile().then(keycloakUser => {
            this.keycloakUserEmail = keycloakUser.email;
        });

    }

    purchaseTicket() {

        const apiBase64AuthCredentials: string = btoa(`${APP_CONFIG.apiAuthUsername}:${APP_CONFIG.apiAuthPassword}`);

        return this.httpClient.post(`${APP_CONFIG.apiBaseUrl}${APP_CONFIG.usersPath}/${this.keycloakUserEmail}${APP_CONFIG.flightsPath}/${this.selectedFlight.id}${APP_CONFIG.ticketsPath}`,
            this.selectedSeats,
            {
                headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${apiBase64AuthCredentials}`
                })
            }).subscribe(data => data);

    }

}
