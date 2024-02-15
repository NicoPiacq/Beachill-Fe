import { Component } from '@angular/core';
import { User } from '../../../../../model/dtos/user';
import { ActivatedRoute } from '@angular/router';
import { SuperadminService } from '../../../../../services/superadmin.service';
import { MatchesService } from '../../../../../services/matches.service';
import { MatchDto } from '../../../../../model/dtos/match';

@Component({
  selector: 'app-user-admin-details',
  templateUrl: './user-admin-details.component.html',
  styleUrl: './user-admin-details.component.css'
})
export class UserAdminDetailsComponent {

  userData!: User;
  userId: number;
  matches: MatchDto[] = [];

  constructor(private activatedRoute: ActivatedRoute, private superadminService: SuperadminService, private matchService: MatchesService) { 
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.loadUserDetails();
    this.loadUserMatches();
  }
  
  loadUserDetails() {
    this.superadminService.getUserById(this.userId).subscribe({
      next: user => this.userData = user,
      error: err => console.error(err)
    });
  }

  loadUserMatches() {
    this.matchService.getMatchesByUserId(this.userId).subscribe({
      next: matches => this.matches = matches,
      error: err => console.error(err)
    });
  }

  getMatchType(type: string) {
    return type[0].toUpperCase() + type.substring(1).toLowerCase();
  }

}
