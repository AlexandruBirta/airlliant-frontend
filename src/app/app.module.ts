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

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        AboutComponent,
        TicketsComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
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
        FormsModule
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
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
