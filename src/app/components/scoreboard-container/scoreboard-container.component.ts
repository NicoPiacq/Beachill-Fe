import { Component, OnInit } from '@angular/core';
import { ScoreDto } from '../../../model/dtos/score-dto';
import { ScoreService } from '../../../services/score.service';
import { error } from 'console';
import { ScoreTypeDto } from '../../../model/dtos/score-type';

@Component({
  selector: 'app-scoreboard-container',
  templateUrl: './scoreboard-container.component.html',
  styleUrl: './scoreboard-container.component.css'
})
export class ScoreboardContainerComponent implements OnInit {

  scoreList: ScoreDto[] = [];
  scoreTypeData: ScoreTypeDto = {
    name: '',
    description: ''
  }
  scoreType: string = 'BASE';

  constructor(private scoreService: ScoreService) { }
  
  ngOnInit(): void {
    this.scoreType = 'BASE';
    this.getScoreData();
  }

  getScoreData() {
    this.scoreTypeData.name = this.scoreType;
    this.scoreService.getRankingByScoreType(this.scoreType).subscribe({
      next: data => {
        this.scoreList = data;
      },
      error: error => {
        console.error('Errore: ', error.message);
      }
    });
  }

}
