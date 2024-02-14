import { Component, Input } from '@angular/core';
import { TeamDto } from '../../../../../model/dtos/team';
import { TeamsService } from '../../../../../services/teams.service';

@Component({
  selector: 'app-teams-list-admin',
  templateUrl: './teams-list-admin.component.html',
  styleUrl: './teams-list-admin.component.css'
})
export class TeamsListAdminComponent {
  itemsPerPage: number = 10;
  currentPage: number = 1;

  teamNameToFind: string = "";

  constructor(private teamsService: TeamsService) { }

  @Input("teamListProp") teams: TeamDto[] = [];

  delayedSearch() {
    setTimeout(() => {
      this.searchUsers();
    }, 2000);
  }

  private searchUsers() {
    this.teamsService.getTeamsByQuery(this.teamNameToFind).subscribe({
      next: data => {
        this.teams = data;
      }
    });
  }
}
