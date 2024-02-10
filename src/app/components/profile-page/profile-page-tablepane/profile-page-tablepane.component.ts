import { Component, Input } from '@angular/core';
import { TeamDto } from '../../../../model/dtos/team';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-profile-page-tablepane',
  templateUrl: './profile-page-tablepane.component.html',
  styleUrl: '../profile-page.component.css'
})
export class ProfilePageTablepaneComponent {

  @Input("joinedTeamsProp") joinedTeams!: TeamDto[];

  constructor(private authService: AuthService) {}

  checkCaptain(id: number) {
    if(this.getUserData()?.user.player.id === id) {
      return true;
    }
    return false;
  }

  getUserData() {
    return this.authService.authenticatedUser.value;
  }

}
