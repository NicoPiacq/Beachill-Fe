import { Component, OnInit } from '@angular/core';
import { TeamDto } from '../../../model/dtos/team';
import { TeamsService } from '../../../services/teams.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrl: './teams-list.component.css'
})
export class TeamsListComponent implements OnInit{
  
  teams!: TeamDto[];

  constructor(private teamsService: TeamsService){}
  
  ngOnInit(){
    this.fetchAllTeams();
  }

  fetchAllTeams() {
    this.teamsService.getAllTeams().subscribe({
      next: teams => {
          this.teams = teams;
          console.log(this.teams);
      },
      error: (error) => {
          console.error('Errore nel recupero dei corsi:', error);
      }
  });
  }
}
