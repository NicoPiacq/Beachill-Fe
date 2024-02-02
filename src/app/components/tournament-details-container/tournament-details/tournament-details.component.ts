import { Component, Input } from '@angular/core';
import { TournamentDto } from '../../../../model/dtos/tournament';

@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrl: './tournament-details.component.css'
})
export class TournamentDetailsComponent {
  @Input('tournamentDetailsProp') tournamentDetails!: TournamentDto;
}
