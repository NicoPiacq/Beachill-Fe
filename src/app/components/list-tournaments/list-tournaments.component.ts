import { Component, OnInit } from '@angular/core';
import { TournamentsService } from '../../../services/tournaments.service';
import { TournamentDto } from '../../../model/dtos/tournament';

@Component({
  selector: 'app-list-tournaments',
  templateUrl: './list-tournaments.component.html',
  styleUrl: './list-tournaments.component.css'
})
export class ListTournamentsComponent implements OnInit{
  tournaments!: TournamentDto[];

  constructor(private tournamentService: TournamentsService){

  }
  
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
            console.error('Errore nel recupero dei corsi:', error);
        }
    });
  }
}
