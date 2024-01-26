import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminContainerComponent } from './user-admin-container.component';

describe('UserAdminContainerComponent', () => {
  let component: UserAdminContainerComponent;
  let fixture: ComponentFixture<UserAdminContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAdminContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAdminContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
