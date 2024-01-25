import { Component, Input } from '@angular/core';
import { TeamDto } from '../../../../model/dtos/team';
import { EnrolledTeamsDto } from '../../../../model/dtos/enrolled-teams';

@Component({
  selector: 'app-enrolled-teams-list',
  templateUrl: './enrolled-teams-list.component.html',
  styleUrl: './enrolled-teams-list.component.css'
})
export class EnrolledTeamsListComponent {
  @Input('enrolledTeamsProp') teams: EnrolledTeamsDto[] = [];
}
