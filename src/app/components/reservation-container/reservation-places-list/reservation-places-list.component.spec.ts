import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPlacesListComponent } from './reservation-places-list.component';

describe('ReservationPlacesListComponent', () => {
  let component: ReservationPlacesListComponent;
  let fixture: ComponentFixture<ReservationPlacesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationPlacesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationPlacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
