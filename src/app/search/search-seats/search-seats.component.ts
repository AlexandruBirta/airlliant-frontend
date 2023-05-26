import {Component, OnInit} from '@angular/core';
import {SearchService} from "../search.service";
import {Flight} from "../../model/flight.interface";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
    selector: 'airlliant-search-seats',
    templateUrl: './search-seats.component.html',
    styleUrls: ['./search-seats.component.scss']
})
export class SearchSeatsComponent implements OnInit {

    selectedFlight: Flight = {"id":1,"fromCountry":"UK","fromAirport":"LHR","toCountry":"Spain","toAirport":"MDR","flightCompany":"Tarom","flightNumber":"LHRMDR1","departureDate":"2023-07-03T23:59:59","arrivalDate":"2023-07-04T02:59:59","roundTrip":true,"price":120.59,"seats":{"seatRowA":{"seat1":true,"seat2":false,"seat3":false,"seat4":false,"seat5":false,"seat6":false,"seat7":false,"seat8":false,"seat9":false,"seat10":false,"seat11":false,"seat12":false,"seat13":false,"seat14":false,"seat15":false,"seat16":false,"seat17":false,"seat18":false,"seat19":false,"seat20":false,"seat21":false,"seat22":false,"seat23":false},"seatRowB":{"seat1":false,"seat2":false,"seat3":false,"seat4":false,"seat5":false,"seat6":false,"seat7":false,"seat8":false,"seat9":false,"seat10":false,"seat11":false,"seat12":false,"seat13":false,"seat14":false,"seat15":false,"seat16":false,"seat17":false,"seat18":false,"seat19":false,"seat20":false,"seat21":false,"seat22":false,"seat23":false},"seatRowC":{"seat1":false,"seat2":false,"seat3":false,"seat4":false,"seat5":false,"seat6":false,"seat7":false,"seat8":false,"seat9":false,"seat10":false,"seat11":false,"seat12":false,"seat13":false,"seat14":false,"seat15":false,"seat16":false,"seat17":false,"seat18":false,"seat19":false,"seat20":false,"seat21":false,"seat22":false,"seat23":false},"seatRowD":{"seat1":false,"seat2":false,"seat3":false,"seat4":false,"seat5":false,"seat6":false,"seat7":false,"seat8":false,"seat9":false,"seat10":false,"seat11":false,"seat12":false,"seat13":false,"seat14":false,"seat15":false,"seat16":false,"seat17":false,"seat18":false,"seat19":false,"seat20":false,"seat21":false,"seat22":false,"seat23":false},"seatRowE":{"seat1":false,"seat2":false,"seat3":false,"seat4":false,"seat5":false,"seat6":false,"seat7":false,"seat8":false,"seat9":false,"seat10":false,"seat11":false,"seat12":false,"seat13":false,"seat14":false,"seat15":false,"seat16":false,"seat17":false,"seat18":false,"seat19":false,"seat20":false,"seat21":false,"seat22":false,"seat23":false},"seatRowF":{"seat1":false,"seat2":false,"seat3":false,"seat4":false,"seat5":false,"seat6":false,"seat7":false,"seat8":false,"seat9":false,"seat10":false,"seat11":false,"seat12":false,"seat13":false,"seat14":false,"seat15":false,"seat16":false,"seat17":false,"seat18":false,"seat19":false,"seat20":false,"seat21":false,"seat22":false,"seat23":false}},"insertedDate":"2023-05-21T18:51:40.565","updatedDate":"2023-05-25T15:47:51.765"};

    constructor(private searchService: SearchService,
                private _snackBar: MatSnackBar,
                private router: Router) {

        if (this.searchService.selectedFlight !== null) {
            this.selectedFlight = this.searchService.selectedFlight;
        }

    }

    ngOnInit(): void {
        this.searchService.selectedSeatRow = null;
        this.searchService.selectedSeat = null;
    }

    selectSeat(selectedSeatRow: string, selectedSeat: string) {
        this.searchService.selectedSeatRow = selectedSeatRow;
        this.searchService.selectedSeat = selectedSeat;
    }

    finalizeSearch() {
        if (this.searchService.selectedSeatRow !== null && this.searchService.selectedSeat !== null) {
            this.router.navigate([this.router.url, 'purchase']).then(r => r);
        } else {
            this._snackBar.open(`Pick a seat!`, '', {
                duration: 3000
            });
        }

    }

}
