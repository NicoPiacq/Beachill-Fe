import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserInfoFormComponent } from './edit-user-info-form.component';

describe('EditUserInfoFormComponent', () => {
  let component: EditUserInfoFormComponent;
  let fixture: ComponentFixture<EditUserInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUserInfoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditUserInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
