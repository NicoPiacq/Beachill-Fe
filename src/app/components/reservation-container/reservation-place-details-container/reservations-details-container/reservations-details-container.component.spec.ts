import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsDetailsContainerComponent } from './reservations-details-container.component';

describe('ReservationsDetailsContainerComponent', () => {
  let component: ReservationsDetailsContainerComponent;
  let fixture: ComponentFixture<ReservationsDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationsDetailsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationsDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
