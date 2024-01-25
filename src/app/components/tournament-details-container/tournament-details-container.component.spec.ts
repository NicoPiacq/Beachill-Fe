import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentDetailsContainerComponent } from './tournament-details-container.component';

describe('TournamentDetailsContainerComponent', () => {
  let component: TournamentDetailsContainerComponent;
  let fixture: ComponentFixture<TournamentDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TournamentDetailsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TournamentDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
