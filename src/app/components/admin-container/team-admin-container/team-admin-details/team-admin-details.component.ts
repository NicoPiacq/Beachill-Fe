import { Component, Input, OnInit } from '@angular/core';
import { TeamDto } from '../../../../../model/dtos/team';
import { TeamsService } from '../../../../../services/teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-admin-details',
  templateUrl: './team-admin-details.component.html',
  styleUrl: './team-admin-details.component.css'
})
export class TeamAdminDetailsComponent implements OnInit {

  @Input("teamDetailsProp") teamDetails!: TeamDto;

  constructor(private teamsService: TeamsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getTeamDetails();
  }

  getTeamDetails() {
    this.teamsService.getTeam(this.activatedRoute.snapshot.params['id']).subscribe(team => this.teamDetails = team);
  }

}
