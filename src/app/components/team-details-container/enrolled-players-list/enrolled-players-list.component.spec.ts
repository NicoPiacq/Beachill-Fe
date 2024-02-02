import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledPlayersListComponent } from './enrolled-players-list.component';

describe('EnrolledPlayersListComponent', () => {
  let component: EnrolledPlayersListComponent;
  let fixture: ComponentFixture<EnrolledPlayersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrolledPlayersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrolledPlayersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
