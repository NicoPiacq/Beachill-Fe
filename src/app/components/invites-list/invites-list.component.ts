import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TeamsService } from '../../../services/teams.service';
import { TeamComponentDto } from '../../../model/dtos/team-component';
import { InvitationResponseDto } from '../../../model/dtos/invitation-response';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-invites-list',
  templateUrl: './invites-list.component.html',
  styleUrl: './invites-list.component.css'
})
export class InvitesListComponent implements OnInit {
  
  invitesList: TeamComponentDto[] = [];
  statusMessage: string = "";
  statusText: string = "";

  bsModalRef!: BsModalRef;

  invitationResponse: InvitationResponseDto = {
    teamId: -1,
    teamComponentId: -1,
    status: -1
  };

  constructor(private authService: AuthService, private teamsService: TeamsService,
              private modalService: BsModalService) {}
  
  ngOnInit(): void {
    this.getInvitesList();
  }

  getInvitesList() {
    this.teamsService.getInvitationsByPlayer().subscribe({
      next: invites => this.invitesList = invites,
      error: error => console.log(error)
    });
  }

  setInvitationResponse(teamId: number, teamComponentId: number, status: number, template: TemplateRef<any>) {

    console.log(teamId, teamComponentId, status);

    this.invitationResponse.teamId = teamId;
    this.invitationResponse.teamComponentId = teamComponentId;
    if(status) {
      this.invitationResponse.status = 1; // accettato invito
      this.statusMessage = "Hai accettato l'invito! Ora fai parte di questo team.";
      this.statusText = "accettato";
    } else {
      this.invitationResponse.status = 0; //rifiutato invito
      this.statusMessage = "Hai rifiutato l'invito da parte di questo team.";
      this.statusText = "rifiutato";
    }
    this.teamsService.setInvitationStatus(this.invitationResponse).subscribe({
      next: () => {
        this.openModal(template);
        this.getInvitesList();
        setTimeout(() => {
          this.closeModal();
        }, 3000);
      },
      error: error => console.log(error)
    });
  }

  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template, {
      keyboard: false,
      ignoreBackdropClick: true
    });
  }

  closeModal() {
    this.bsModalRef.hide();
    this.statusMessage = "";
    this.statusText = "";
  }

}
