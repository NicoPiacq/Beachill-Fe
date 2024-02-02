import { Component, Input } from '@angular/core';
import { TeamDto } from '../../../../model/dtos/team';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css'
})
export class TeamDetailsComponent {
  @Input('teamDetailsProp') teamDetails!: TeamDto;
}
