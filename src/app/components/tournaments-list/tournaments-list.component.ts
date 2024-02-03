import { Component, OnInit } from '@angular/core';
import { TournamentsService } from '../../../services/tournaments.service';
import { TournamentDto } from '../../../model/dtos/tournament';

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrl: './tournaments-list.component.css'
})
export class TournamentsListComponent implements OnInit{

  tournaments!: TournamentDto[];

  constructor(private tournamentService: TournamentsService){}

  ngOnInit(){
    this.fetchAllTournaments();
  }

  fetchAllTournaments() {
    this.tournamentService.getAllTournaments().subscribe({
        next: cs => {
            this.tournaments = cs;
            console.log(this.tournaments);
        },
        error: (error) => {
            console.error('Errore nel recupero dei tornei:', error);
        }
    });
  }

}
