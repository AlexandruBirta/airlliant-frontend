import {Component, OnInit} from '@angular/core';
import {SearchService} from "../search.service";

@Component({
    selector: 'airlliant-search-seats',
    templateUrl: './search-seats.component.html',
    styleUrls: ['./search-seats.component.scss']
})
export class SearchSeatsComponent implements OnInit {

    constructor(private searchService: SearchService) {
    }

    ngOnInit(): void {
        console.log(JSON.stringify(this.searchService.selectedFlight));
    }

}
