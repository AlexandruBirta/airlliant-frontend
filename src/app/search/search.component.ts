import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {APP_CONFIG} from "../app-config/app-config.service";
import {Observable} from "rxjs";
import {Flight} from "../model/flight.interface";
import * as moment from "moment";


@Component({
    selector: 'airlliant-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    isPriceCheckEnabled: boolean = false;
    searchForm!: FormGroup;
    chipList: string = '';

    $flights!: Observable<Flight[]>;
    $filteredFlights!: Observable<Flight[]>;

    constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {

    }

    ngOnInit(): void {

        const apiBase64AuthCredentials: string = btoa(`${APP_CONFIG.apiAuthUsername}:${APP_CONFIG.apiAuthPassword}`);

        this.$flights = this.httpClient.get<Flight[]>(`${APP_CONFIG.apiBaseUrl}${APP_CONFIG.flightsPath}/all`,
            {
                headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${apiBase64AuthCredentials}`
                })
            });

        this.searchForm = this.formBuilder.group({
            fromAirport: ['', {
                validators: [Validators.required]
            }],
            toAirport: ['', {
                validators: [Validators.required]
            }],
            departure: [moment(), {
                validators: [Validators.required]
            }],
            arrival: [moment(), {
                validators: [Validators.required]
            }],
            minPrice: new FormControl({value: '', disabled: !this.isPriceCheckEnabled}),
            maxPrice: new FormControl({value: '', disabled: !this.isPriceCheckEnabled}),
            roundTrip: ['One Way', {
                validators: [Validators.required]
            }]
        });

    }

    refreshPriceCheckForm() {
        if (!this.isPriceCheckEnabled) {
            this.searchForm.controls['minPrice'].disable();
            this.searchForm.controls['maxPrice'].disable();
            this.searchForm.controls['minPrice'].setValue('');
            this.searchForm.controls['maxPrice'].setValue('');
        } else {
            this.searchForm.controls['minPrice'].enable();
            this.searchForm.controls['maxPrice'].enable();
            this.searchForm.controls['minPrice'].setValue('');
            this.searchForm.controls['maxPrice'].setValue('');
        }
    }

    search() {

        const departureDate: string = moment(this.searchForm.get('departure')?.value).toISOString();
        const arrivalDate: string = moment(this.searchForm.get('arrival')?.value).toISOString();

        let filter: string = `?fromAirport=${this.searchForm.get('fromAirport')?.value}&toAirport=${this.searchForm.get('toAirport')?.value}&departure=${departureDate}&arrival=${arrivalDate}`;

        if (this.searchForm.get('roundTrip')?.value === 'Round Trip') {
            filter += `&roundTrip=true`
        } else {
            filter += `&roundTrip=false`
        }

        if (this.searchForm.get('minPrice')?.value !== '') {
            filter += `&minPrice=${this.searchForm.get('minPrice')?.value}`;
        }

        if (this.searchForm.get('maxPrice')?.value !== '') {
            filter += `&maxPrice=${this.searchForm.get('maxPrice')?.value}`;
        }

        const apiBase64AuthCredentials: string = btoa(`${APP_CONFIG.apiAuthUsername}:${APP_CONFIG.apiAuthPassword}`);

        this.httpClient.get<Flight[]>(`${APP_CONFIG.apiBaseUrl}${APP_CONFIG.flightsPath}${filter}`,
            {
                headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${apiBase64AuthCredentials}`
                })
            }).subscribe(data => {
            console.log(JSON.stringify(data))
        });

    }


}
