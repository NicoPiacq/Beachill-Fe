import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsListAdminComponent } from './teams-list-admin.component';

describe('TeamsListAdminComponent', () => {
  let component: TeamsListAdminComponent;
  let fixture: ComponentFixture<TeamsListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsListAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamsListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
