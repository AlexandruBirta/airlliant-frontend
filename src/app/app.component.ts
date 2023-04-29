import {Component, OnDestroy} from '@angular/core';

@Component({
    selector: 'airlliant-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

    title = 'airlliant-frontend';

    ngOnDestroy(): void {
        sessionStorage.clear();
    }

}