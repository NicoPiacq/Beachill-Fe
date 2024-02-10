import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TeamsService } from '../../../services/teams.service';
import { TeamComponentDto } from '../../../model/dtos/team-component';
import { InvitationResponseDto } from '../../../model/dtos/invitation-response';

@Component({
  selector: 'app-invites-list',
  templateUrl: './invites-list.component.html',
  styleUrl: './invites-list.component.css'
})
export class InvitesListComponent implements OnInit {
  
  invitesList: TeamComponentDto[] = [];
  statusMessage: string = "";

  invitationResponse: InvitationResponseDto = {
    teamId: -1,
    teamComponentId: -1,
    status: -1
  };

  constructor(private authService: AuthService, private teamsService: TeamsService) {}
  
  ngOnInit(): void {
    this.teamsService.getInvitationsByPlayer().subscribe({
      next: invites => this.invitesList = invites,
      error: error => console.log(error)
    })
  }

  setInvitationResponse(teamId: number, teamComponentId: number, status: number) {

    console.log(teamId, teamComponentId, status);

    let message: string;
    this.invitationResponse.teamId = teamId;
    this.invitationResponse.teamComponentId = teamComponentId;
    if(status) {
      this.invitationResponse.status = 1; // accettato invito
      message = "Hai accettato l'invito! Ora fai parte di questo team.";
    } else {
      this.invitationResponse.status = 0; //rifiutato invito
      message = "Hai rifiutato l'invito!";
    }
    this.teamsService.setInvitationStatus(this.invitationResponse).subscribe();
    alert(message);
  }

}
