import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatchDto } from '../../../../../model/dtos/match';
import { EnrolledTeamsDto } from '../../../../../model/dtos/enrolled-teams';
import { TournamentsService } from '../../../../../services/tournaments.service';
import { EnrolledTeamsService } from '../../../../../services/enrolled-teams.service';
import { MatchesService } from '../../../../../services/matches.service';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../../../services/admin.service';
import { TournamentAdminDto } from '../../../../../model/dtos/tournament-admin';

@Component({
  selector: 'app-tournament-details-admin-container',
  templateUrl: './tournament-details-admin-container.component.html',
  styleUrl: './tournament-details-admin-container.component.css'
})
export class TournamentDetailsAdminContainerComponent {
  tournament!: TournamentAdminDto;
  tournamentId!: number;
  teams: EnrolledTeamsDto[] = [];
  matches!: MatchDto[];
  

  constructor(private tournamentsService: TournamentsService, private enrolledTeamsService: EnrolledTeamsService,
              private matchsService: MatchesService, private route: ActivatedRoute, private adminService: AdminService){}

  ngOnInit(): void {
    this.tournamentId = this.route.snapshot.params['id'];
    
    this.loadTournamentDetails();
    this.loadEnrolledTeams();
    this.loadMatches();
  }

  loadTournamentDetails(){
    this.adminService.getTournament(this.tournamentId).subscribe({
      next: tournament => {
        this.tournament = tournament;
        console.log(this.tournament);
      },
      error: err => {
        console.error('Errore nel recupero dei dettagli del torneo:', err);
      }
    })
  }

  loadEnrolledTeams(){
    this.enrolledTeamsService.getEnrolledTeamsByTournament(this.tournamentId).subscribe({
      next: teams => {
        this.teams = teams;
        console.log(this.tournament);
      },
      error: err => {
        console.error('Errore nel recupero dei team iscritti:', err);
      }
    })
  }

  loadMatches(){
    this.matchsService.getMatchesByTournament(this.tournamentId).subscribe({
      next: matches => {
        this.matches = matches;
        console.log(this.tournament);
      },
      error: err => {
        console.error('Errore nel recupero dei match del torneo:', err);
      }
    })
  }

  generateMatchTournament(id: number){
    console.log("sono nella funzione di tournament admin container")
    this.adminService.generateMatchTournament(id).subscribe({});
  }

}
