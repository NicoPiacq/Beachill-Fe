import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../model/dtos/user';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrl: './admin-container.component.css'
})
export class AdminContainerComponent {

  role: string = "";
  managerData: User | undefined;
  constructor(private adminService: AdminService, private authService: AuthService) {
    this.getRole();
    this.getManagerData();
  }

  generateDebugData() {
    this.adminService.generateDebugData().subscribe();
  }

  getRole() {
    this.authService.getUserRole().subscribe({
      next: r => this.role = r,
    });
  }

  getManagerData() {
    this.managerData = this.authService.authenticatedUser.value?.user;
  }
}
