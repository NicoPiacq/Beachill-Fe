import { Component } from '@angular/core';
import { User } from '../../../../../model/dtos/user';
import { ActivatedRoute } from '@angular/router';
import { SuperadminService } from '../../../../../services/superadmin.service';

@Component({
  selector: 'app-user-admin-details',
  templateUrl: './user-admin-details.component.html',
  styleUrl: './user-admin-details.component.css'
})
export class UserAdminDetailsComponent {

  userData!: User;
  userId: number;

  constructor(private activatedRoute: ActivatedRoute, private superadminService: SuperadminService) {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.loadUserDetails();
  }
  
  loadUserDetails() {
    this.superadminService.getUserById(this.userId).subscribe({
      next: user => this.userData = user,
      error: err => console.error(err)
    });
  }


}
