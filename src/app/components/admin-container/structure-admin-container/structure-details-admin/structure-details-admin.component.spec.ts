import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDetailsAdminComponent } from './structure-details-admin.component';

describe('StructureDetailsAdminComponent', () => {
  let component: StructureDetailsAdminComponent;
  let fixture: ComponentFixture<StructureDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureDetailsAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
