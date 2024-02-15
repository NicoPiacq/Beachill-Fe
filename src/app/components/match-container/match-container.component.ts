import { Component } from '@angular/core';
import { MatchesService } from '../../../services/matches.service';
import { MatchDto } from '../../../model/dtos/match';
import { ActivatedRoute } from '@angular/router';
import { SetMatchDto } from '../../../model/dtos/set-match';

@Component({
  selector: 'app-match-container',
  templateUrl: './match-container.component.html',
  styleUrl: './match-container.component.css'
})
export class MatchContainerComponent {

  match!: MatchDto;
  matchId: number = 0;
  matchSets: SetMatchDto[] = [];

  constructor(private matchService: MatchesService, private route: ActivatedRoute) {
    this.matchId = this.route.snapshot.params['id'];
    this.getMatchData();
    this.getSetsData();
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

  checkButtons(set: SetMatchDto[], i: number) {
  }
  
}
