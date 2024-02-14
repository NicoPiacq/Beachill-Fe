import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureAdminContainerComponent } from './structure-admin-container.component';

describe('StructureAdminContainerComponent', () => {
  let component: StructureAdminContainerComponent;
  let fixture: ComponentFixture<StructureAdminContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureAdminContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureAdminContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
