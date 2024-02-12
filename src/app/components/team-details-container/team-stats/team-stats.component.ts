import { Component, Input } from '@angular/core';
import { TeamComponentDto } from '../../../../model/dtos/team-component';
import { TeamDto } from '../../../../model/dtos/team';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrl: './team-stats.component.css'
})
export class TeamStatsComponent {
  @Input("teamStatsProp") teamDetails!: TeamDto;
}
