import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageTablepaneComponent } from './profile-page-tablepane.component';

describe('ProfilePageTablepaneComponent', () => {
  let component: ProfilePageTablepaneComponent;
  let fixture: ComponentFixture<ProfilePageTablepaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilePageTablepaneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilePageTablepaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
