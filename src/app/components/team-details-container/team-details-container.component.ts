import { Component, OnInit } from '@angular/core';
import { TeamDto } from '../../../model/dtos/team';
import { PlayerDto } from '../../../model/dtos/player';
import { MatchDto } from '../../../model/dtos/match';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../../../services/teams.service';

@Component({
  selector: 'app-team-details-container',
  templateUrl: './team-details-container.component.html',
  styleUrl: './team-details-container.component.css'
})
export class TeamDetailsContainerComponent implements OnInit{
  teamId!: number;
  team!: TeamDto;
  players!: PlayerDto;
  matches!: MatchDto;

  constructor(private route: ActivatedRoute, private teamsService: TeamsService){}

  ngOnInit(): void {
      this.teamId = this.route.snapshot.params['id'];

      this.loadTeamDetails();
      this.loadEnrolledPlayers();
      this.loadMatches();
  }
  loadMatches() {
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
    // throw new Error('Method not implemented.');
  }
  loadTeamDetails() {
    // throw new Error('Method not implemented.');
  }
}
