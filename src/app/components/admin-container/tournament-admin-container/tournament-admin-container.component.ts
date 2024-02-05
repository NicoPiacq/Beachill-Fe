import { Component, Input } from '@angular/core';
import { TournamentsService } from '../../../../services/tournaments.service';
import { AdminService } from '../../../../services/admin.service';
import { TournamentAdminDto } from '../../../../model/dtos/tournament-admin';

@Component({
  selector: 'app-tournament-admin-container',
  templateUrl: './tournament-admin-container.component.html',
  styleUrl: './tournament-admin-container.component.css'
})
export class TournamentAdminContainerComponent {
  tournaments: TournamentAdminDto[] = [];

  constructor(private tournamentService: TournamentsService, private adminService: AdminService){}

  ngOnInit(){
    this.fetchAllTournaments();
  }

  fetchAllTournaments() {
    this.adminService.getAllTournaments().subscribe({
        next: cs => {
            this.tournaments = cs;
            console.log(this.tournaments);
        },
        error: (error) => {
            console.error('Errore nel recupero dei corsi:', error);
        }
    });
  }

  deleteTournament(id: number){
    this.adminService.deleteTournament(id).subscribe({});
  }

}
