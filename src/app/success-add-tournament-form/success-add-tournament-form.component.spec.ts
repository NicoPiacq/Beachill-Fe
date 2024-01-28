import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAddTournamentFormComponent } from './success-add-tournament-form.component';

describe('SuccessAddTournamentFormComponent', () => {
  let component: SuccessAddTournamentFormComponent;
  let fixture: ComponentFixture<SuccessAddTournamentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessAddTournamentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessAddTournamentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
