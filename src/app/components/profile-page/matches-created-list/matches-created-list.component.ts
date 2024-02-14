import { Component, Input, OnInit, TemplateRef } from '@angular/core';
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
  matchDate: Date = new Date();

  matchData: MatchRequestDto = {
    homeTeamId: -1,
    awayTeamId: -1,
    setNumber: 0,
    startDate: new Date()
  }

  modalRef!: BsModalRef;

  searchTeamName: string = '';

  constructor(private teamsService: TeamsService, private modalService: BsModalService,
              private matchService: MatchesService) { }
  
  ngOnInit(): void {
    console.log(this.createdTeams);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
      error: error => alert("ERRORE GRAVE: "+error)
    });
  }

  createNewMatch(teamAdversaryId: number) {
    this.matchData.homeTeamId = this.chosenPersonalTeam;
    this.matchData.startDate = this.matchDate;
    this.matchData.awayTeamId = teamAdversaryId;
    this.matchService.sendInvitation(this.matchData).subscribe({
      next: () =>{ 
        alert("Invito inviato!");
        location.reload();
      },
      error: error => alert("ERRORE GRAVE: "+error)
    });
  }
}
