import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsAdminContainerComponent } from './reservations-admin-container.component';

describe('ReservationsAdminContainerComponent', () => {
  let component: ReservationsAdminContainerComponent;
  let fixture: ComponentFixture<ReservationsAdminContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationsAdminContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationsAdminContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
