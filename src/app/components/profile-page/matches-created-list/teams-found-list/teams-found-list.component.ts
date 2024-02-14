import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TeamDto } from '../../../../../model/dtos/team';

@Component({
  selector: 'app-teams-found-list',
  templateUrl: './teams-found-list.component.html',
  styleUrl: './teams-found-list.component.css'
})
export class TeamsFoundListComponent {

  @Input("teamsFoundProp") teamsFound: TeamDto[] = [];
  @Output("selectTeamEmitter") selectTeamEmitter = new EventEmitter<number>();

  selectTeam(id: number | undefined) {
    this.selectTeamEmitter.emit(id);
  }
}
