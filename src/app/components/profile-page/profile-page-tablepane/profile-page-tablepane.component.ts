import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TeamDto } from '../../../../model/dtos/team';
import { AuthService } from '../../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamsService } from '../../../../services/teams.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatchRequestDto } from '../../../../model/dtos/match-request';

@Component({
  selector: 'app-profile-page-tablepane',
  templateUrl: './profile-page-tablepane.component.html',
  styleUrl: '../profile-page.component.css'
})
export class ProfilePageTablepaneComponent implements OnInit {

  @Input("joinedTeamsProp") joinedTeams!: TeamDto[];
  createdTeams: TeamDto[] = [];
  teamsFound: TeamDto[] = [];

  createTeamForm!: FormGroup;
  createMatchForm!: FormGroup;

  modalRef!: BsModalRef;

  searchTeamName: string = '';

  teamData: TeamDto = {
    teamName: '',
    teamLeaderName: '',
    teamLeaderSurname: '',
    idTeamLeader: -1,
    score: 0
  };

  matchData: MatchRequestDto = {
    homeTeamId: -1,
    awayTeamId: -1,
    setNumber: 0,
    startDate: new Date()
  }

  constructor(private authService: AuthService, private teamsService: TeamsService, 
              private formBuilder: FormBuilder, private router: Router,
              private modalService: BsModalService) {}

  ngOnInit(): void {
      this.createTeamForm = this.formBuilder.group({
      teamName: ['', Validators.required]
    });
    this.getCreatedTeams();
  }

  checkCaptain(id: number) {
    if(this.getUserData()?.user.player.id === id) {
      return true;
    }
    return false;
  }

  getCreatedTeams() {
    this.createdTeams = this.joinedTeams.filter(team => {
      return team.idTeamLeader === this.getUserData()?.user.player.id;
    });
  }

  createNewTeam() {
    if(!this.createTeamForm.valid) {
      alert("Inserisci un nome al team");
      return;
    }
    this.teamData.teamName = this.createTeamForm.get("teamName")?.value;
    this.teamData.teamLeaderName = this.getUserData()?.user.player.userName!;
    this.teamData.teamLeaderSurname = this.getUserData()?.user.player.userSurname!;
    this.teamData.idTeamLeader = this.getUserData()?.user.player.id!;
    this.teamData.score = 0;
    this.teamsService.createTeam(this.teamData).subscribe({
      next: () => location.reload(),
      error: error => alert("ERRORE GRAVE: "+error)
    })
  }


  getUserData() {
    return this.authService.authenticatedUser.value;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

}
