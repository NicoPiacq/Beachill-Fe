import { Component, Input } from '@angular/core';
import { User } from '../../../../../model/dtos/user';

@Component({
  selector: 'app-user-list-admin',
  templateUrl: './user-list-admin.component.html',
  styleUrl: './user-list-admin.component.css'
})
export class UserListAdminComponent {
  itemsPerPage: number = 10;
  currentPage: number = 1;

  @Input("userListProp") users: User[] = []; 

}
