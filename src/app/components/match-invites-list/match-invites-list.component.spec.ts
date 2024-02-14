import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchInvitesListComponent } from './match-invites-list.component';

describe('MatchInvitesListComponent', () => {
  let component: MatchInvitesListComponent;
  let fixture: ComponentFixture<MatchInvitesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchInvitesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchInvitesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
