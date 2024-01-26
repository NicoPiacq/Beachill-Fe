import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TournamentDto } from '../../../../../model/dtos/tournament';


@Component({
  selector: 'app-tournaments-list-admin',
  templateUrl: './tournaments-list-admin.component.html',
  styleUrl: './tournaments-list-admin.component.css'
})
export class TournamentsListAdminComponent {
  @Input('tournamentsProp') tournaments!: TournamentDto[];
  @Output('deleteTournamentProp') deleteTournamentClicked: EventEmitter<number> = new EventEmitter<number>();

  deleteTournament(id: number){
    this.deleteTournamentClicked.emit(id);
  }
}
