import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStructureFormComponent } from './add-structure-form.component';

describe('AddStructureFormComponent', () => {
  let component: AddStructureFormComponent;
  let fixture: ComponentFixture<AddStructureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddStructureFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddStructureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
