import { Component, OnInit } from '@angular/core';
import { TeamDto } from '../../../model/dtos/team';
import { MatchDto } from '../../../model/dtos/match';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../../../services/teams.service';
import { PlayersService } from '../../../services/players.service';
import { TeamComponentDto } from '../../../model/dtos/team-component';
import { MatchesService } from '../../../services/matches.service';

@Component({
  selector: 'app-team-details-container',
  templateUrl: './team-details-container.component.html',
  styleUrl: './team-details-container.component.css'
})
export class TeamDetailsContainerComponent implements OnInit{
  teamId!: number;
  team!: TeamDto;
  players: TeamComponentDto[] = [];
  matches: MatchDto[] = [];

  constructor(private route: ActivatedRoute, private teamsService: TeamsService, 
              private playersService: PlayersService, private matchService: MatchesService){}

  ngOnInit(): void {
      this.teamId = this.route.snapshot.params['id'];

      this.loadTeamDetails();
      this.loadEnrolledPlayers();
      this.loadMatches();
  }

  loadTeamDetails() {
    this.teamsService.getTeam(this.teamId).subscribe({
      next: team => {
        this.team = team;
      },
      error: err => {
        console.error('Errore nel recupero dei dettagli del team:', err);
      }
    })
  }

  loadEnrolledPlayers() {
    this.playersService.getAllPlayerByTeamId(this.teamId).subscribe({
      next: players => {
        this.players = players;
      },
      error: err => {
        console.error('Errore nel recupero dei player iscritti al team:', err);
      }
    })
  }

  loadMatches() {
    this.matchService.getAllMatchesByTeam(this.teamId).subscribe({
      next: matches => {
        this.matches = matches;
      },
      error: error => console.log(error)
    });
  }
}