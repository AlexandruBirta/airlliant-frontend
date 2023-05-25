import {Component, OnInit} from '@angular/core';
import {SearchService} from "../search.service";
import {Flight} from "../../model/flight.interface";

@Component({
    selector: 'airlliant-search-seats',
    templateUrl: './search-seats.component.html',
    styleUrls: ['./search-seats.component.scss']
})
export class SearchSeatsComponent implements OnInit {

    selectedFlight: Flight = {
        fromAirport: '',
        fromCountry: '',
        toAirport: '',
        toCountry: '',
        flightCompany: '',
        flightNumber: '',
        departureDate: '',
        arrivalDate: '',
        roundTrip: false,
        price: 0.0,
        seats: {
            seatRowA: {
                seat1: false,
                seat2: false,
                seat3: false,
                seat4: false,
                seat5: false,
                seat6: false,
                seat7: false,
                seat8: false,
                seat9: false,
                seat10: false,
                seat11: false,
                seat12: false,
                seat13: false,
                seat14: false,
                seat15: false,
                seat16: false,
                seat17: false,
                seat18: false,
                seat19: false,
                seat20: false,
                seat21: false,
                seat22: false,
                seat23: false
            },
            seatRowB: {
                seat1: false,
                seat2: false,
                seat3: false,
                seat4: false,
                seat5: false,
                seat6: false,
                seat7: false,
                seat8: false,
                seat9: false,
                seat10: false,
                seat11: false,
                seat12: false,
                seat13: false,
                seat14: false,
                seat15: false,
                seat16: false,
                seat17: false,
                seat18: false,
                seat19: false,
                seat20: false,
                seat21: false,
                seat22: false,
                seat23: false
            },
            seatRowC: {
                seat1: false,
                seat2: false,
                seat3: false,
                seat4: false,
                seat5: false,
                seat6: false,
                seat7: false,
                seat8: false,
                seat9: false,
                seat10: false,
                seat11: false,
                seat12: false,
                seat13: false,
                seat14: false,
                seat15: false,
                seat16: false,
                seat17: false,
                seat18: false,
                seat19: false,
                seat20: false,
                seat21: false,
                seat22: false,
                seat23: false
            },
            seatRowD: {
                seat1: false,
                seat2: false,
                seat3: false,
                seat4: false,
                seat5: false,
                seat6: false,
                seat7: false,
                seat8: false,
                seat9: false,
                seat10: false,
                seat11: false,
                seat12: false,
                seat13: false,
                seat14: false,
                seat15: false,
                seat16: false,
                seat17: false,
                seat18: false,
                seat19: false,
                seat20: false,
                seat21: false,
                seat22: false,
                seat23: false
            },
            seatRowE: {
                seat1: false,
                seat2: false,
                seat3: false,
                seat4: false,
                seat5: false,
                seat6: false,
                seat7: false,
                seat8: false,
                seat9: false,
                seat10: false,
                seat11: false,
                seat12: false,
                seat13: false,
                seat14: false,
                seat15: false,
                seat16: false,
                seat17: false,
                seat18: false,
                seat19: false,
                seat20: false,
                seat21: false,
                seat22: false,
                seat23: false
            },
            seatRowF: {
                seat1: false,
                seat2: false,
                seat3: false,
                seat4: false,
                seat5: false,
                seat6: false,
                seat7: false,
                seat8: false,
                seat9: false,
                seat10: false,
                seat11: false,
                seat12: false,
                seat13: false,
                seat14: false,
                seat15: false,
                seat16: false,
                seat17: false,
                seat18: false,
                seat19: false,
                seat20: false,
                seat21: false,
                seat22: false,
                seat23: false
            }
        }
    };

    constructor(private searchService: SearchService) {

        if (this.searchService.selectedFlight !== null) {
            this.selectedFlight = this.searchService.selectedFlight;
        }

    }

    ngOnInit(): void {
        console.log(JSON.stringify(this.searchService.selectedFlight));
    }

    showSeat(selectedSeatRow: string, selectedSeat: string) {
        console.log(selectedSeatRow + ' ' + selectedSeat);
    }

}
