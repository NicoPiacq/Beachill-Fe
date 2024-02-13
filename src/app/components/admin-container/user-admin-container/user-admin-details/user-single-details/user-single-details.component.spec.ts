import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSingleDetailsComponent } from './user-single-details.component';

describe('UserSingleDetailsComponent', () => {
  let component: UserSingleDetailsComponent;
  let fixture: ComponentFixture<UserSingleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSingleDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSingleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
