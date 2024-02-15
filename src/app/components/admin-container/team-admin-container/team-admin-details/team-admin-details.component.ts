import { Component, Input, OnInit } from '@angular/core';
import { TeamDto } from '../../../../../model/dtos/team';
import { TeamsService } from '../../../../../services/teams.service';
import { ActivatedRoute } from '@angular/router';
import { MatchDto } from '../../../../../model/dtos/match';
import { MatchesService } from '../../../../../services/matches.service';
import { match } from 'assert';
import { PlayersService } from '../../../../../services/players.service';
import { PlayerDto } from '../../../../../model/dtos/player';
import { TeamComponentDto } from '../../../../../model/dtos/team-component';

@Component({
  selector: 'app-team-admin-details',
  templateUrl: './team-admin-details.component.html',
  styleUrl: './team-admin-details.component.css'
})
export class TeamAdminDetailsComponent implements OnInit {

  @Input("teamDetailsProp") teamDetails!: TeamDto;
  matches: MatchDto[] = [];
  players: TeamComponentDto[] = [];

  constructor(private teamsService: TeamsService, private activatedRoute: ActivatedRoute, 
              private matchService: MatchesService, private playersService: PlayersService) {}

  ngOnInit(): void {
    this.getTeamDetails();
    this.loadTeamMatches();
    this.loadEnrolledPlayers();
  }

  getTeamDetails() {
    this.teamsService.getTeam(this.activatedRoute.snapshot.params['id']).subscribe({
      next: team => {
        this.teamDetails = team;
      },
      error: err => console.error(err)
    });
  }

  loadTeamMatches() {
    this.matchService.getAllMatchesByTeam(this.activatedRoute.snapshot.params['id']).subscribe({
      next: matches => this.matches = matches,
      error: err => console.error(err)
    });
  }

  getMatchType(type: string) {
    return type[0].toUpperCase() + type.substring(1).toLowerCase();
  }

  loadEnrolledPlayers() {
    this.playersService.getAllPlayerByTeamId(this.activatedRoute.snapshot.params['id']).subscribe({
      next: players => {
        this.players = players;
      },
      error: err => {
        console.error('Errore nel recupero dei player iscritti al team:', err);
      }
    })
  }

}
