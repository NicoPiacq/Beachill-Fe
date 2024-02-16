import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TeamDto } from '../../../model/dtos/team';
import { TeamsService } from '../../../services/teams.service';
import { MatchDto } from '../../../model/dtos/match';
import { MatchesService } from '../../../services/matches.service';
import { ScoreService } from '../../../services/score.service';
import { ScoreDto } from '../../../model/dtos/score-dto';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {

  joinedTeams: TeamDto[] = [];
  createdTeams: TeamDto[] = [];
  matchesList: MatchDto[] = [];
  scoreList: ScoreDto[] = [];


  constructor(private authService: AuthService, private teamsService: TeamsService,
              private matchService: MatchesService, private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.teamsService.getTeamsByPlayer(this.getUserData()?.user.player.id).subscribe({
      next: teams => {
        this.joinedTeams = teams; 
        this.filterCreatedTeams();
      },
      error: error => console.error(error)
    });
    this.loadMatches();
    this.loadScores();
  }

  filterCreatedTeams() {
    this.createdTeams = this.joinedTeams.filter(
      team => {
        return team.idTeamLeader === this.getUserData()?.user.player.id
      }
    );
  }

  getUserData() {
    return this.authService.authenticatedUser.value;
  }

  loadMatches() {
    this.matchService.getMatchesByPlayer().subscribe({
      next: matches => this.matchesList = matches,
      error: error => alert(error)
    });
  }

  loadScores() {
    this.scoreService.getRankingByPlayerId(this.getUserData()?.user.player.id).subscribe({
      next: scores => this.scoreList = scores,
      error: error => alert(error)
    });
  }

}
