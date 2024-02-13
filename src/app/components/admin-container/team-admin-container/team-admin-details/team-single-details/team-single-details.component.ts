import { Component, Input } from '@angular/core';
import { TeamDto } from '../../../../../../model/dtos/team';

@Component({
  selector: 'app-team-single-details',
  templateUrl: './team-single-details.component.html',
  styleUrl: './team-single-details.component.css'
})
export class TeamSingleDetailsComponent {

  @Input("teamDetailsProp") teamDetails!: TeamDto;

  
}
