import {TestBed} from '@angular/core/testing';

import {TripGuard} from './trip.guard';

describe('TripGuard', () => {
    let guard: TripGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(TripGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
