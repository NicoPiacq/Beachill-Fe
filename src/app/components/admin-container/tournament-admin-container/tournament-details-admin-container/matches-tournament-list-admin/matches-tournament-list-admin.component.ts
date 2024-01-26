import { Component, Input } from '@angular/core';
import { MatchDto } from '../../../../../../model/dtos/match';

@Component({
  selector: 'app-matches-tournament-list-admin',
  templateUrl: './matches-tournament-list-admin.component.html',
  styleUrl: './matches-tournament-list-admin.component.css'
})
export class MatchesTournamentListAdminComponent {
  @Input('matchesProp') matches: MatchDto[] = [];
}
