import { Component, Input } from '@angular/core';
import { MatchDto } from '../../../../model/dtos/match';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrl: './matches-list.component.css'
})
export class MatchesListComponent {
  @Input("matchesListProp") matchesList: MatchDto[] = [];
  
  getMatchType(type: string) {
    return type[0].toUpperCase() + type.substring(1).toLowerCase();
  }

}
