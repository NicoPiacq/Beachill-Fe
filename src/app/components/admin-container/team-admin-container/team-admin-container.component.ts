import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../../../services/teams.service';
import { TeamDto } from '../../../../model/dtos/team';
import e from 'express';

@Component({
  selector: 'app-team-admin-container',
  templateUrl: './team-admin-container.component.html',
  styleUrl: '../admin-container.component.css'
})
export class TeamAdminContainerComponent implements OnInit {
  
  constructor(private teamsService: TeamsService) {}
  teams: TeamDto[] = [];

  ngOnInit(): void {
    this.teamsService.getAllTeams().subscribe({
      next: teams => {
        this.teams = teams;
      },
      error: err => {
        console.error(err);
      }
    })
  }

}
