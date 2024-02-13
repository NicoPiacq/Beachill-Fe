import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAdminDetailsComponent } from './team-admin-details.component';

describe('TeamAdminDetailsComponent', () => {
  let component: TeamAdminDetailsComponent;
  let fixture: ComponentFixture<TeamAdminDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamAdminDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamAdminDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
