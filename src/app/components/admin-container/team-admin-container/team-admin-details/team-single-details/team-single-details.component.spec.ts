import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSingleDetailsComponent } from './team-single-details.component';

describe('TeamSingleDetailsComponent', () => {
  let component: TeamSingleDetailsComponent;
  let fixture: ComponentFixture<TeamSingleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamSingleDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamSingleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
