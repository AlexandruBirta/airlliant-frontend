import {Component, OnInit} from '@angular/core';
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
        console.log("search results works!");
        this.searchService.searchFlights().subscribe(flights => {
            console.log(JSON.stringify(flights))
        });
    }


}
