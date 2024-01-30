import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TournamentDto } from '../../../../../../model/dtos/tournament';
import { MatchDto } from '../../../../../../model/dtos/match';

@Component({
  selector: 'app-tournament-details-admin',
  templateUrl: './tournament-details-admin.component.html',
  styleUrl: './tournament-details-admin.component.css'
})
export class TournamentDetailsAdminComponent {
  
  @Input('tournamentDetailsProp') tournamentDetails!: TournamentDto
  @Input('matchesProp') matches: MatchDto[] = [];
  @Output('generateMatchTournamentProp') generateMatchTournamentClicked: EventEmitter<number> = new EventEmitter<number>();

  generateMatchTournament(id: number){
    console.log("sono nella funzione di tournament DETAILS admin container: id = " + id);

  
    this.generateMatchTournamentClicked.emit(id);
  }
}
