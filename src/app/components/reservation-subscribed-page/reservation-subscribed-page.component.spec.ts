import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationSubscribedPageComponent } from './reservation-subscribed-page.component';

describe('ReservationSubscribedPageComponent', () => {
  let component: ReservationSubscribedPageComponent;
  let fixture: ComponentFixture<ReservationSubscribedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationSubscribedPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationSubscribedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
