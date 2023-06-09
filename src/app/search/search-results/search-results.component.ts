import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Observable} from "rxjs";
import {Flight} from "../../model/flight.interface";
import {SearchService} from "../search.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
    selector: 'airlliant-search-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

    $filteredFlightResults!: Observable<Flight[]>;

    constructor(private searchService: SearchService,
                private _snackBar: MatSnackBar,
                private router: Router) {
    }

    ngOnInit(): void {
        this.$filteredFlightResults = this.searchService.searchFlights();
        this.searchService.selectedFlight = null;

        if (this.searchService.filter === undefined) {
            this.router.navigate([`/search`]).then(r => r);
        }

    }

    getFlightDurationInHours(departureDateString: string, arrivalDateString: string) {

        const departureDate: moment.Moment = moment(departureDateString);
        const arrivalDate: moment.Moment = moment(arrivalDateString);

        return moment.duration(arrivalDate.diff(departureDate)).asHours();

    }

    selectFlight(flight: Flight) {
        this.searchService.selectedFlight = flight;
    }

    deselectFlight() {
        this.searchService.selectedFlight = null;
    }

    chooseSeats() {
        if (this.searchService.selectedFlight === null) {
            this._snackBar.open(`Pick a flight!`, '', {
                duration: 3000
            });
        } else {
            this.router.navigate([`/search/searchResults/${this.searchService.selectedFlight.flightNumber}`]).then(r => r);
        }
    }

}
