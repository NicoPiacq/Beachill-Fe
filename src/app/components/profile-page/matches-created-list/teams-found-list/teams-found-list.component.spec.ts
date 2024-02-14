import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsFoundListComponent } from './teams-found-list.component';

describe('TeamsFoundListComponent', () => {
  let component: TeamsFoundListComponent;
  let fixture: ComponentFixture<TeamsFoundListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsFoundListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamsFoundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
