import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatchDto } from '../../../../../../model/dtos/match';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matches-tournament-list-admin',
  templateUrl: './matches-tournament-list-admin.component.html',
  styleUrl: './matches-tournament-list-admin.component.css'
})
export class MatchesTournamentListAdminComponent {
  @Input('matchesProp') matches: MatchDto[] = [];

}
