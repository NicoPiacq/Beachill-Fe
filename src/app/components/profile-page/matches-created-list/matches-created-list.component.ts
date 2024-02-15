import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatchDto } from '../../../../model/dtos/match';
import { TeamsService } from '../../../../services/teams.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatchRequestDto } from '../../../../model/dtos/match-request';
import { TeamDto } from '../../../../model/dtos/team';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchesService } from '../../../../services/matches.service';

@Component({
  selector: 'app-matches-created-list',
  templateUrl: './matches-created-list.component.html',
  styleUrl: '../profile-page.component.css'
})
export class MatchesCreatedListComponent implements OnInit {

  @Input("matchesListProp") matchesList: MatchDto[] = [];
  @Input("filteredTeamsProp") createdTeams: TeamDto[] = [];
  teamsFound: TeamDto[] = [];
  chosenPersonalTeam!: number;
  chosenAdversaryTeam!: number;
  numberOfSets: number = 0;
  matchDate: Date = new Date();

  matchData: MatchRequestDto = {
    homeTeamId: -1,
    awayTeamId: -1,
    setNumber: 0,
    startDate: new Date()
  }

  @ViewChild('successModal') successModal!: TemplateRef<any>;
  @ViewChild('errorModal') errorModal!: TemplateRef<any>;
  modalRef!: BsModalRef;
  modalMessageRef!: BsModalRef;

  searchTeamName: string = '';

  constructor(private teamsService: TeamsService, private modalService: BsModalService,
              private matchService: MatchesService) { }
  
  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalMessage(template: TemplateRef<any>) {
    this.modalMessageRef = this.modalService.show(template, {
      ignoreBackdropClick: true,
      keyboard: false,
      class: 'modal-dialog-centered',
      backdrop: 'static'
    });
  }

  closeModalMessage() {
    this.modalMessageRef.hide();
  }

  closeModal() {
    this.modalRef.hide();
  }
  
  delayedSearch() {
    setTimeout(() => {
      this.searchTeams();
    }, 2000);
  }

  private searchTeams() {
    this.teamsService.getTeamsByQuery(this.searchTeamName).subscribe({
      next: (data) => this.teamsFound = data,
      error: error => this.openModalMessage(this.errorModal)
    });
  }

  createNewMatch(teamAdversaryId: number) {

    if(this.chosenPersonalTeam == undefined || teamAdversaryId == undefined || this.numberOfSets == 0 || this.matchDate == undefined) {
      this.openModalMessage(this.errorModal);
      return;
    }

    this.matchData.homeTeamId = this.chosenPersonalTeam;
    this.matchData.startDate = this.matchDate;
    this.matchData.awayTeamId = teamAdversaryId;
    this.matchData.setNumber = this.numberOfSets;
    this.matchService.sendInvitation(this.matchData).subscribe({
      next: () =>{ 
        this.openModalMessage(this.successModal);
        setTimeout(() => {
          location.reload();
        }, 3000);
      },
      error: error => this.openModalMessage(this.errorModal)
    });
  }

  getMatchType(type: string) {
    return type[0].toUpperCase() + type.substring(1).toLowerCase();
  }
}
