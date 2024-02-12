import { Component, Input } from '@angular/core';
import { TeamComponentDto } from '../../../../model/dtos/team-component';
import { AuthService } from '../../../../services/auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-enrolled-players-list',
  templateUrl: './enrolled-players-list.component.html',
  styleUrl: '../team-details-container.component.css'
})
export class EnrolledPlayersListComponent {
  @Input("enrolledPlayersProp") players!: TeamComponentDto[];

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {}

  checkCaptain(id: number, playerId: number) {
    if(playerId === id) {
      return true;
    }
    return false;
  }

  getUserData() {
    return this.authService.authenticatedUser.value;
  }
}
