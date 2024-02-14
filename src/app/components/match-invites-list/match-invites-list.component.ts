import { Component, OnInit } from '@angular/core';
import { MatchDto } from '../../../model/dtos/match';
import { MatchesService } from '../../../services/matches.service';
import { StatusMatchResponseDto } from '../../../model/dtos/status-match-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-invites-list',
  templateUrl: './match-invites-list.component.html',
  styleUrl: './match-invites-list.component.css'
})
export class MatchInvitesListComponent implements OnInit{

  matchInvites: MatchDto[] = [];
  invitationResponse: StatusMatchResponseDto = { 
    matchId: -1,
    status: 2
  }

  constructor(private matchService: MatchesService, private router: Router) {}
  
  ngOnInit(): void {
    this.getMatchInvites();
  }

  getMatchInvites() {
    this.matchService.getMatchInvitesByPlayer().subscribe({
      next: invites => this.matchInvites = invites,
      error: error => console.log(error)
    });
  }

  setInvitationResponse(matchId: number, status: number) {
    this.invitationResponse.matchId = matchId;
    this.invitationResponse.status = status;
    this.matchService.setInvitationResponse(this.invitationResponse).subscribe({
      next: () => {
        this.router.navigate(['/match-list']);
      }
    });
  }
}
