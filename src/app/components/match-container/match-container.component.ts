import { Component, TemplateRef } from '@angular/core';
import { MatchesService } from '../../../services/matches.service';
import { MatchDto } from '../../../model/dtos/match';
import { ActivatedRoute } from '@angular/router';
import { SetMatchDto } from '../../../model/dtos/set-match';
import { AuthService } from '../../../services/auth.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-match-container',
  templateUrl: './match-container.component.html',
  styleUrl: './match-container.component.css'
})
export class MatchContainerComponent {

  match!: MatchDto;
  matchId: number = 0;
  matchSets: SetMatchDto[] = [];

  modalRef!: BsModalRef;
  setNumberSelected: number = 0;
  currentSet!: SetMatchDto;
  pointsToAddForm: FormGroup;

  constructor(private matchService: MatchesService, private route: ActivatedRoute, private authService: AuthService,
              private modalService: BsModalService, private formBuilder: FormBuilder) { 
    this.matchId = this.route.snapshot.params['id'];
    this.getMatchData();
    this.getSetsData();
    this.pointsToAddForm = this.formBuilder.group({
      homeTeamScore: ['', Validators.required],
      awayTeamScore: ['', Validators.required]
    });
  }

  getMatchData() {
    this.matchService.getMatchDetails(this.matchId).subscribe({
      next: data => {
        this.match = data;
      }
    });
  }

  getSetsData() {
    this.matchService.getSetsData(this.matchId).subscribe({
      next: data => {
        this.matchSets = data;
      }
    });
  }

  getUserData() {
    return this.authService.authenticatedUser.value?.user;
  }

  openModal(template: TemplateRef<any>, setSelected: number, set: SetMatchDto) {
    this.modalRef = this.modalService.show(template);
    this.setNumberSelected = setSelected;
    this.currentSet = set;
  }

  closeModal() {
    this.modalRef.hide();
  }

  updateSetPoints() {
    this.currentSet.homeTeamScore = this.pointsToAddForm.get('homeTeamScore')?.value;
    this.currentSet.awayTeamScore = this.pointsToAddForm.get('awayTeamScore')?.value;
    this.matchService.saveSetPoints(this.currentSet).subscribe({
      next: () => {
        alert('Punti assegnati correttamente');
        this.closeModal();
      },
      error: (err) => console.error(err)
    });
  }

  finishMatch() {
    for(let i = 0; i < this.matchSets.length; i++) {
      if(this.matchSets[i].homeTeamScore === null || this.matchSets[i].awayTeamScore === null) {
          alert('Non è possibile terminare il match, ci sono ancora set da completare');
        return;
      }
    }
    this.matchService.finishMatch(this.matchId).subscribe({
      next: () => {
        alert('Match terminato correttamente');
        this.getMatchData();
      },
      error: (err) => alert(err.message)
    });
  }
}
