import { Component, Input } from '@angular/core';
import { MatchDto } from '../../../../model/dtos/match';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrl: './matches-list.component.css'
})
export class MatchesListComponent {
  @Input("matchesListProp") matchesList: MatchDto[] = [];
  teamId: number;

  constructor(private activeRoute: ActivatedRoute) {
    this.teamId = this.activeRoute.snapshot.params['id'];
    console.log(this.teamId);
  }

  getMatchType(type: string) {
    return type[0].toUpperCase() + type.substring(1).toLowerCase();
  }

  print() {
    for(let i = 0; i < this.matchesList.length; i++) {
      console.log(this.matchesList[i]);
    }
  }

}
