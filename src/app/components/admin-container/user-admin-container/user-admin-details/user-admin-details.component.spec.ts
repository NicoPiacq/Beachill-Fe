import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminDetailsComponent } from './user-admin-details.component';

describe('UserAdminDetailsComponent', () => {
  let component: UserAdminDetailsComponent;
  let fixture: ComponentFixture<UserAdminDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAdminDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAdminDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
