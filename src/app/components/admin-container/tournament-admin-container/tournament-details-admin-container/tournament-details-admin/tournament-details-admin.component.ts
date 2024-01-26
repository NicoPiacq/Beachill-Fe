import { Component, Input } from '@angular/core';
import { TournamentDto } from '../../../../../../model/dtos/tournament';

@Component({
  selector: 'app-tournament-details-admin',
  templateUrl: './tournament-details-admin.component.html',
  styleUrl: './tournament-details-admin.component.css'
})
export class TournamentDetailsAdminComponent {
  @Input('tournamentDetailsProp') tournamentDetails!: TournamentDto
}
