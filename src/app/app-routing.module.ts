import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentsListComponent } from './components/tournaments-list/tournaments-list.component';
import { HomeComponent } from './components/home/home.component';
import { TournamentDetailsContainerComponent } from './components/tournament-details-container/tournament-details-container.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tournaments', component: TournamentsListComponent},
  {path: 'tournament/:id', component: TournamentDetailsContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
