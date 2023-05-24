import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Observable} from "rxjs";
import {Flight} from "../../model/flight.interface";
import {SearchService} from "../search.service";

@Component({
    selector: 'airlliant-search-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

    $filteredFlightResults!: Observable<Flight[]>;

    constructor(private searchService: SearchService) {
    }

    ngOnInit(): void {
        this.$filteredFlightResults = this.searchService.searchFlights();
    }

    getFlightDurationInHours(departureDateString: string, arrivalDateString: string) {

        const departureDate: moment.Moment = moment(departureDateString);
        const arrivalDate: moment.Moment = moment(arrivalDateString);

        return moment.duration(arrivalDate.diff(departureDate)).asHours();
    }

}
