import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureSingleDetailsComponent } from './structure-single-details.component';

describe('StructureSingleDetailsComponent', () => {
  let component: StructureSingleDetailsComponent;
  let fixture: ComponentFixture<StructureSingleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureSingleDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureSingleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
