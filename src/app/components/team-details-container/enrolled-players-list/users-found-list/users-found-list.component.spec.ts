import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFoundListComponent } from './users-found-list.component';

describe('UsersFoundListComponent', () => {
  let component: UsersFoundListComponent;
  let fixture: ComponentFixture<UsersFoundListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersFoundListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersFoundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
