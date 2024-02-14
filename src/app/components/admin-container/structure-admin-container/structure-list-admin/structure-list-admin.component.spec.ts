import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureListAdminComponent } from './structure-list-admin.component';

describe('StructureListAdminComponent', () => {
  let component: StructureListAdminComponent;
  let fixture: ComponentFixture<StructureListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureListAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
