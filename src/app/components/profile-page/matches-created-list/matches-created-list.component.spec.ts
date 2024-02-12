import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesCreatedListComponent } from './matches-created-list.component';

describe('MatchesCreatedListComponent', () => {
  let component: MatchesCreatedListComponent;
  let fixture: ComponentFixture<MatchesCreatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchesCreatedListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchesCreatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
