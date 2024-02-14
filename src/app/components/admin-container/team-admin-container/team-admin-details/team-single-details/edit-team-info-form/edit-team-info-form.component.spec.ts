import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeamInfoFormComponent } from './edit-team-info-form.component';

describe('EditTeamInfoFormComponent', () => {
  let component: EditTeamInfoFormComponent;
  let fixture: ComponentFixture<EditTeamInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTeamInfoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTeamInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
