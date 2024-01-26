import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledTeamsListAdminComponent } from './enrolled-teams-list-admin.component';

describe('EnrolledTeamsListAdminComponent', () => {
  let component: EnrolledTeamsListAdminComponent;
  let fixture: ComponentFixture<EnrolledTeamsListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrolledTeamsListAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrolledTeamsListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
