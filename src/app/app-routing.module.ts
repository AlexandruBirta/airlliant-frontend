import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {TicketsComponent} from "./tickets/tickets.component";
import {AuthGuard} from "./security/keycloak.guard";
import {SearchComponent} from "./search/search.component";
import {SearchResultsComponent} from "./search/search-results/search-results.component";
import {SearchSeatsComponent} from "./search/search-seats/search-seats.component";
import {PurchaseComponent} from "./search/purchase/purchase.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'tickets',
        component: TicketsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'search',
        component: SearchComponent,
    },
    {
        path: 'search/searchResults',
        component: SearchResultsComponent
    },
    {
        path: 'search/searchResults/:flightNumber',
        component: SearchSeatsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'search/searchResults/:flightNumber/purchase',
        component: PurchaseComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
