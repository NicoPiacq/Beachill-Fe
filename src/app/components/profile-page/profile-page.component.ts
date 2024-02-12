import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TeamDto } from '../../../model/dtos/team';
import { TeamsService } from '../../../services/teams.service';
import { get } from 'http';
import { MatchDto } from '../../../model/dtos/match';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {

  joinedTeams: TeamDto[] = [];
  matchesList: MatchDto[] = [];

  constructor(private authService: AuthService, private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamsService.getTeamsByPlayer(this.getUserData()?.user.player.id).subscribe({
      next: teams => {this.joinedTeams = teams; console.log(this.joinedTeams); },
      error: error => console.error(error)
    })
  }

  getUserData() {
    return this.authService.authenticatedUser.value;
  }
}
