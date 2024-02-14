import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { MatchDto } from '../../../../model/dtos/match';
import { TeamsService } from '../../../../services/teams.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatchRequestDto } from '../../../../model/dtos/match-request';
import { TeamDto } from '../../../../model/dtos/team';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-matches-created-list',
  templateUrl: './matches-created-list.component.html',
  styleUrl: '../profile-page.component.css'
})
export class MatchesCreatedListComponent implements OnInit {

  @Input("matchesListProp") matchesList: MatchDto[] = [];
  @Input("filteredTeamsProp") createdTeams: TeamDto[] = [];
  teamsFound: TeamDto[] = [];

  createMatchForm!: FormGroup;

  modalRef!: BsModalRef;

  searchTeamName: string = '';

  constructor(private teamsService: TeamsService, private modalService: BsModalService,
              private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.createMatchForm = this.formBuilder.group({
      homeTeamId: ['', Validators.required]
    });
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

  createNewMatch() {

  }
}
