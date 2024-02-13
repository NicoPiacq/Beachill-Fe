import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrl: './admin-container.component.css'
})
export class AdminContainerComponent {

  constructor(private adminService: AdminService) { }

  generateDebugData() {
    this.adminService.generateDebugData().subscribe();
  }

}
