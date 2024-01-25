import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesTournamentListComponent } from './matches-tournament-list.component';

describe('MatchesTournamentListComponent', () => {
  let component: MatchesTournamentListComponent;
  let fixture: ComponentFixture<MatchesTournamentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchesTournamentListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchesTournamentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
