import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledTeamsListComponent } from './enrolled-teams-list.component';

describe('EnrolledTeamsListComponent', () => {
  let component: EnrolledTeamsListComponent;
  let fixture: ComponentFixture<EnrolledTeamsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrolledTeamsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrolledTeamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
