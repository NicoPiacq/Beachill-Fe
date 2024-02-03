import { Component, OnInit } from '@angular/core';
import { TeamDto } from '../../../model/dtos/team';
import { MatchDto } from '../../../model/dtos/match';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../../../services/teams.service';
import { PlayersService } from '../../../services/players.service';
import { TeamComponentDto } from '../../../model/dtos/team-component';

@Component({
  selector: 'app-team-details-container',
  templateUrl: './team-details-container.component.html',
  styleUrl: './team-details-container.component.css'
})
export class TeamDetailsContainerComponent implements OnInit{
  teamId!: number;
  team!: TeamDto;
  players!: TeamComponentDto[];
  matches!: MatchDto[];

  constructor(private route: ActivatedRoute, private teamsService: TeamsService, private playersService: PlayersService){}

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
        console.log(this.team);
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
        console.log(this.players);
      },
      error: err => {
        console.error('Errore nel recupero dei player iscritti al team:', err);
      }
    })
  }

  loadMatches() {
    // throw new Error('Method not implemented.');
  }
  
  
}
