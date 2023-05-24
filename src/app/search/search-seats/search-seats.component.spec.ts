import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchSeatsComponent} from './search-seats.component';

describe('SearchSeatsComponent', () => {
    let component: SearchSeatsComponent;
    let fixture: ComponentFixture<SearchSeatsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchSeatsComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SearchSeatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
