import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAdminContainerComponent } from './team-admin-container.component';

describe('TeamAdminContainerComponent', () => {
  let component: TeamAdminContainerComponent;
  let fixture: ComponentFixture<TeamAdminContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamAdminContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamAdminContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
