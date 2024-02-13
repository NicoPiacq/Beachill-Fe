import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrl: './admin-container.component.css'
})
export class AdminContainerComponent {

  role: string = "";
  constructor(private adminService: AdminService, private authService: AuthService) {
    this.getRole();
   }

  generateDebugData() {
    this.adminService.generateDebugData().subscribe();
  }

  getRole() {
    this.authService.getUserRole().subscribe({
      next: r => this.role = r,
    });
  }

}
