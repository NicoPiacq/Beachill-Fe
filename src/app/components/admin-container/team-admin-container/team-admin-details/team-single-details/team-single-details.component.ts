import { Component, Input, TemplateRef } from '@angular/core';
import { TeamDto } from '../../../../../../model/dtos/team';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { TeamsService } from '../../../../../../services/teams.service';

@Component({
  selector: 'app-team-single-details',
  templateUrl: './team-single-details.component.html',
  styleUrl: './team-single-details.component.css'
})
export class TeamSingleDetailsComponent {


  @Input("teamDetailsProp") teamDetails!: TeamDto;

  constructor(private modalService: BsModalService, private router: Router, private teamsService: TeamsService) { }
  
  messageBox: string = "";
  hideButton: boolean = false;

  modalRef!: BsModalRef;

  openModal(template: any) {
    this.modalRef = this.modalService.show(template);
  }

  openModalDelete(template: any) {
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, keyboard: false });
    this.hideButton = false;
    this.messageBox = "Sei sicuro di voler eliminare questa squadra? L'azione è irreversibile!";
  }

  closeModal() {
    this.modalRef.hide();
    this.hideButton = false;
  }

  deleteTeam() {
    if(this.teamDetails.id === undefined) { 
      return; 
    }

    this.hideButton = true;
    this.messageBox = "Squadra eliminata correttamente";
    this.teamsService.deleteTeamById(this.teamDetails.id).subscribe();
    setTimeout(() => {
      this.modalRef.hide();
      this.router.navigate(['/admin']);
    }, 4000);
  }

}
