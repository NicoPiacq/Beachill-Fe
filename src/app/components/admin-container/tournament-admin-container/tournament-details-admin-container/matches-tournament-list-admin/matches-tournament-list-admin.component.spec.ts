import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesTournamentListAdminComponent } from './matches-tournament-list-admin.component';

describe('MatchesTournamentListAdminComponent', () => {
  let component: MatchesTournamentListAdminComponent;
  let fixture: ComponentFixture<MatchesTournamentListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchesTournamentListAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchesTournamentListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
