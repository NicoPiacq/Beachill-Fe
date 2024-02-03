import { Component, Input } from '@angular/core';
import { TeamComponentDto } from '../../../../model/dtos/team-component';

@Component({
  selector: 'app-enrolled-players-list',
  templateUrl: './enrolled-players-list.component.html',
  styleUrl: './enrolled-players-list.component.css'
})
export class EnrolledPlayersListComponent {
  @Input("enrolledPlayersProp") players!: TeamComponentDto[];
}
