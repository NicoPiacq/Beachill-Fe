import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchSetListComponent } from './match-set-list.component';

describe('MatchSetListComponent', () => {
  let component: MatchSetListComponent;
  let fixture: ComponentFixture<MatchSetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchSetListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchSetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
