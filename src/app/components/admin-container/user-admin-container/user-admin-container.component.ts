import { Component, OnInit } from '@angular/core';
import { SuperadminService } from '../../../../services/superadmin.service';
import { User } from '../../../../model/dtos/user';

@Component({
  selector: 'app-user-admin-container',
  templateUrl: './user-admin-container.component.html',
  styleUrl: '../admin-container.component.css'
})
export class UserAdminContainerComponent implements OnInit{
  
  constructor(private superadminService: SuperadminService) { }
  users: User[] = [];

  ngOnInit(): void {
    this.superadminService.getAllUsers().subscribe({
      next: users => {
        this.users = users;
      },
      error: err => console.log(err)
    })
  }

}
