import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TournamentDto } from '../../../../../model/dtos/tournament';
import { User } from '../../../../../model/dtos/user';


@Component({
  selector: 'app-tournaments-list-admin',
  templateUrl: './tournaments-list-admin.component.html',
  styleUrl: './tournaments-list-admin.component.css'
})
export class TournamentsListAdminComponent {

  @Input('tournamentsProp') tournaments!: TournamentDto[];
  @Input('userDataProp') userData: User | undefined;
  @Output('deleteTournamentProp') deleteTournamentClicked: EventEmitter<number> = new EventEmitter<number>();


  itemsPerPage: number = 5;
  currentPage: number = 1;


  deleteTournament(id: number){
    this.deleteTournamentClicked.emit(id);
  }

}
