import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentAdminContainerComponent } from './tournament-admin-container.component';

describe('TournamentAdminContainerComponent', () => {
  let component: TournamentAdminContainerComponent;
  let fixture: ComponentFixture<TournamentAdminContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TournamentAdminContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TournamentAdminContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
