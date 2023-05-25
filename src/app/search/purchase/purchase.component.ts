import {Component, OnInit} from '@angular/core';
import {SearchService} from "../search.service";

@Component({
    selector: 'airlliant-purchase',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

    constructor(private searchService: SearchService) {
    }

    ngOnInit(): void {
        console.log(this.searchService.selectedSeatRow + ' ' + this.searchService.selectedSeat + ' ' + this.searchService.selectedFlight?.flightNumber);
    }

}
