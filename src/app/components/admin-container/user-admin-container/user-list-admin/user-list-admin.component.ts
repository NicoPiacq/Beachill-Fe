import { Component, Input } from '@angular/core';
import { User } from '../../../../../model/dtos/user';
import { SuperadminService } from '../../../../../services/superadmin.service';

@Component({
  selector: 'app-user-list-admin',
  templateUrl: './user-list-admin.component.html',
  styleUrl: './user-list-admin.component.css'
})
export class UserListAdminComponent {
  itemsPerPage: number = 10;
  currentPage: number = 1;

  userNameToSearch: string = "";

  constructor(private superAdminService: SuperadminService) { }

  @Input("userListProp") users: User[] = []; 

  delayedSearch() {
    setTimeout(() => {
      this.searchUsers();
    }, 2000);
  }

  private searchUsers() {
    this.superAdminService.getUserByQuery(this.userNameToSearch).subscribe({
      next: data => {
        this.users = data;
      }
    });
  }
}
