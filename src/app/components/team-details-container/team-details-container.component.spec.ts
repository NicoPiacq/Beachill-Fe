import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailsContainerComponent } from './team-details-container.component';

describe('TeamDetailsContainerComponent', () => {
  let component: TeamDetailsContainerComponent;
  let fixture: ComponentFixture<TeamDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamDetailsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
