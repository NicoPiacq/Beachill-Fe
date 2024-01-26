import { Component, Input } from '@angular/core';
import { EnrolledTeamsDto } from '../../../../../../model/dtos/enrolled-teams';

@Component({
  selector: 'app-enrolled-teams-list-admin',
  templateUrl: './enrolled-teams-list-admin.component.html',
  styleUrl: './enrolled-teams-list-admin.component.css'
})
export class EnrolledTeamsListAdminComponent {
  @Input('enrolledTeamsProp') teams: EnrolledTeamsDto[] = [];
}
