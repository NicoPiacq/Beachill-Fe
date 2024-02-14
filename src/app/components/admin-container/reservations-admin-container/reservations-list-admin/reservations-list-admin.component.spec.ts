import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsListAdminComponent } from './reservations-list-admin.component';

describe('ReservationsListAdminComponent', () => {
  let component: ReservationsListAdminComponent;
  let fixture: ComponentFixture<ReservationsListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationsListAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationsListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
