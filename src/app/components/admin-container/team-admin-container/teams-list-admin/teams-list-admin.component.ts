import { Component, Input } from '@angular/core';
import { TeamDto } from '../../../../../model/dtos/team';

@Component({
  selector: 'app-teams-list-admin',
  templateUrl: './teams-list-admin.component.html',
  styleUrl: './teams-list-admin.component.css'
})
export class TeamsListAdminComponent {
  itemsPerPage: number = 10;
  currentPage: number = 1;

  @Input("teamListProp") teams: TeamDto[] = [];
}
