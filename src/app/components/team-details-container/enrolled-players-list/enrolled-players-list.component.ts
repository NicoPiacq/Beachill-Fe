import { Component, Input, TemplateRef } from '@angular/core';
import { TeamComponentDto } from '../../../../model/dtos/team-component';
import { AuthService } from '../../../../services/auth.service';
import { FormBuilder } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../../../../model/dtos/user';
import { PlayersService } from '../../../../services/players.service';
import { InvitePlayerRequestDto } from '../../../../model/dtos/invite-player-request';

@Component({
  selector: 'app-enrolled-players-list',
  templateUrl: './enrolled-players-list.component.html',
  styleUrl: '../team-details-container.component.css'
})
export class EnrolledPlayersListComponent {

  @Input("enrolledPlayersProp") players!: TeamComponentDto[];
  @Input("teamIdProp") teamId: number | undefined;

  modalRef!: BsModalRef;
  searchPlayer: string = '';
  searchTimeout: any;
  usersFound: User[] = [];
  inviteData: InvitePlayerRequestDto = { 
    teamId: 0,
    playerToAddId: 0,
    requestingPlayerId: this.getUserData()?.user.id!
  }

  constructor(private authService: AuthService, private formBuilder: FormBuilder,
              private modalService: BsModalService, private playerService: PlayersService) {}

  checkCaptain(id: number, playerId: number) {
    if(playerId === id) {
      return true;
    }
    return false;
  }

  getUserData() {
    return this.authService.authenticatedUser.value;
  }

  closeModal() {
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  delayedSearchPlayerList(): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.searchPlayerList();
    }, 2000);
  }

  searchPlayerList() {
    this.playerService.getPlayersByQuery(this.searchPlayer).subscribe({
      next: users => this.usersFound = users,
      error: err => console.error(err)
    });
  }

  inviteUserToTeam(userId: number) {

    if(userId === this.getUserData()?.user.id) {
      alert("Non puoi invitare te stesso");
      return;
    }

    this.inviteData.teamId = this.teamId!;
    this.inviteData.playerToAddId = userId;
    this.playerService.invitePlayerToTeam(this.inviteData).subscribe({
      next: () => {
        alert("Invito inviato"); 
        this.closeModal();
        location.reload();
      },
      error: err => alert(err)
    });
  }

  deletePlayerFromTeam(playerId: number, teamId: number | undefined) {
    if(teamId === undefined) {
      return;
    }
    this.playerService.removePlayerFromTeam(teamId, playerId).subscribe({
      next: () =>{ alert("Player rimosso"); location.reload(); }
    });
  }
}
