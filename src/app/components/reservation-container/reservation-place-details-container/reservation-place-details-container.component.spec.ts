import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPlaceDetailsContainerComponent } from './reservation-place-details-container.component';

describe('ReservationPlaceDetailsContainerComponent', () => {
  let component: ReservationPlaceDetailsContainerComponent;
  let fixture: ComponentFixture<ReservationPlaceDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationPlaceDetailsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationPlaceDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
