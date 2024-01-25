import { Component, Input } from '@angular/core';
import { MatchDto } from '../../../../model/dtos/match';

@Component({
  selector: 'app-matches-tournament-list',
  templateUrl: './matches-tournament-list.component.html',
  styleUrl: './matches-tournament-list.component.css'
})
export class MatchesTournamentListComponent {
  @Input('matchesProp') matches: MatchDto[] = [];
}
