import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStructureInfoFormComponent } from './edit-structure-info-form.component';

describe('EditStructureInfoFormComponent', () => {
  let component: EditStructureInfoFormComponent;
  let fixture: ComponentFixture<EditStructureInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditStructureInfoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditStructureInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
