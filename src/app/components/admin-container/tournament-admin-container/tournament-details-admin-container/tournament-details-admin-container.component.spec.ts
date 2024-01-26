import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentDetailsAdminContainerComponent } from './tournament-details-admin-container.component';

describe('TournamentDetailsAdminContainerComponent', () => {
  let component: TournamentDetailsAdminContainerComponent;
  let fixture: ComponentFixture<TournamentDetailsAdminContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TournamentDetailsAdminContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TournamentDetailsAdminContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
