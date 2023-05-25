import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from "./nav/nav.component";
import {LoginComponent} from "./login/login.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {RegisterComponent} from './register/register.component';
import {APP_CONFIG, APP_CONFIG_SERVICE} from "./app-config/app-config.service";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTableModule} from "@angular/material/table";
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {TicketsComponent} from './tickets/tickets.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializeKeycloak} from "./security/keycloak.init";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {SearchComponent} from "./search/search.component";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_FORMATS, MatNativeDateModule} from "@angular/material/core";
import {MatChipsModule} from "@angular/material/chips";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MAT_MOMENT_DATE_FORMATS, MatMomentDateModule} from "@angular/material-moment-adapter";
import {SearchResultsComponent} from './search/search-results/search-results.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {SearchSeatsComponent} from './search/search-seats/search-seats.component';
import {PurchaseComponent} from './search/purchase/purchase.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        AboutComponent,
        TicketsComponent,
        SearchComponent,
        SearchResultsComponent,
        SearchSeatsComponent,
        PurchaseComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        MatSidenavModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonToggleModule,
        MatTableModule,
        KeycloakAngularModule,
        MatIconModule,
        MatSnackBarModule,
        MatSelectModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatNativeDateModule,
        MatChipsModule,
        MatSlideToggleModule,
        MatExpansionModule
    ],
    providers: [
        {
            provide: APP_CONFIG_SERVICE,
            useValue: APP_CONFIG
        },
        {
            provide: APP_INITIALIZER,
            useFactory: initializeKeycloak,
            multi: true,
            deps: [KeycloakService]
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: MAT_MOMENT_DATE_FORMATS
        }

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
