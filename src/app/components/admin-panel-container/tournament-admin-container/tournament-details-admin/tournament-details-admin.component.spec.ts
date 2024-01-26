import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentDetailsAdminComponent } from './tournament-details-admin.component';

describe('TournamentDetailsAdminComponent', () => {
  let component: TournamentDetailsAdminComponent;
  let fixture: ComponentFixture<TournamentDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TournamentDetailsAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TournamentDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
