import {Component, OnInit} from '@angular/core';
import {SearchService} from "../search.service";
import {KeycloakService} from "keycloak-angular";
import {Flight} from "../../model/flight.interface";
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from "@techiediaries/ngx-qrcode";

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

    selectedRowAndSeat: string = '';
    qrCodeElementType = NgxQrcodeElementTypes.URL;
    qrCodeCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    qrCodeValue = '';

    constructor(private searchService: SearchService, private keycloakService: KeycloakService) {
    }

    ngOnInit(): void {

        if (this.searchService.selectedFlight !== null && this.searchService.selectedSeat !== null && this.searchService.selectedSeatRow !== null) {
            this.selectedFlight = this.searchService.selectedFlight;
            this.selectedRowAndSeat = this.searchService.selectedSeatRow.at(this.searchService.selectedSeatRow.length - 1) + this.searchService.selectedSeat.substring(4, this.searchService.selectedSeat.length);
            this.qrCodeValue = `${this.selectedFlight.flightNumber}-${this.selectedRowAndSeat}`;
        }

        console.log(JSON.stringify(this.selectedFlight));

    }

    purchaseTicket() {
        this.keycloakService.loadUserProfile().then(r => {
            console.log(r.email);
        });

    }

}
