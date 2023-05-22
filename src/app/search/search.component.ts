import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {APP_CONFIG} from "../app-config/app-config.service";
import {Observable} from "rxjs";
import {Flight} from "../model/flight.interface";


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

    constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {

    }

    ngOnInit(): void {

        const apiBase64AuthCredentials: string = btoa(`${APP_CONFIG.apiAuthUsername}:${APP_CONFIG.apiAuthPassword}`);

        this.$flights = this.httpClient.get<Flight[]>(`${APP_CONFIG.apiBaseUrl}${APP_CONFIG.flightsPath}`,
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
            departure: ['', {
                validators: [Validators.required]
            }],
            arrival: ['', {
                validators: [Validators.required]
            }],
            minPrice: new FormControl({value: '', disabled: !this.isPriceCheckEnabled}, Validators.required),
            maxPrice: new FormControl({value: '', disabled: !this.isPriceCheckEnabled}, Validators.required),
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
        console.log(JSON.stringify(this.searchForm.getRawValue()));
    }


}
