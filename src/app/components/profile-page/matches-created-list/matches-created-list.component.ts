import { Component, Input } from '@angular/core';
import { MatchDto } from '../../../../model/dtos/match';

@Component({
  selector: 'app-matches-created-list',
  templateUrl: './matches-created-list.component.html',
  styleUrl: '../profile-page.component.css'
})
export class MatchesCreatedListComponent {

  @Input("matchesListProp") matchesList: MatchDto[] = [];

}
