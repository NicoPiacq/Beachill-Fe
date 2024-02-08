import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPlaceDetailsComponent } from './reservation-place-details.component';

describe('ReservationPlaceDetailsComponent', () => {
  let component: ReservationPlaceDetailsComponent;
  let fixture: ComponentFixture<ReservationPlaceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationPlaceDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationPlaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
