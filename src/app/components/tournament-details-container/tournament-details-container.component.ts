import { Component, OnInit } from '@angular/core';
import { TournamentDto } from '../../../model/dtos/tournament';
import { MatchDto } from '../../../model/dtos/match';
import { ActivatedRoute } from '@angular/router';
import { TournamentsService } from '../../../services/tournaments.service';
import { MatchesService } from '../../../services/matches.service';
import { EnrolledTeamsDto } from '../../../model/dtos/enrolled-teams';
import { EnrolledTeamsService } from '../../../services/enrolled-teams.service';


@Component({
  selector: 'app-tournament-details-container',
  templateUrl: './tournament-details-container.component.html',
  styleUrl: './tournament-details-container.component.css'
})
export class TournamentDetailsContainerComponent implements OnInit {
  tournamentId!: number;
  tournament!: TournamentDto;
  teams: EnrolledTeamsDto[] = [];
  matches!: MatchDto[];

  constructor(private tournamentsService: TournamentsService, private enrolledTeamsService: EnrolledTeamsService,
              private matchsService: MatchesService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.tournamentId = this.route.snapshot.params['id'];
    
    this.loadTournamentDetails();
    this.loadEnrolledTeams();
    this.loadMatches();
  }

  loadTournamentDetails(){
    this.tournamentsService.getTournament(this.tournamentId).subscribe({
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
}
