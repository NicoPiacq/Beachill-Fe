import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentsListComponent } from './components/tournaments-list/tournaments-list.component';
import { HomeComponent } from './components/home/home.component';
import { TournamentDetailsContainerComponent } from './components/tournament-details-container/tournament-details-container.component';
import { AdminContainerComponent } from './components/admin-container/admin-container.component';
import { AddTournamentFormComponent } from './components/add-tournament-form/add-tournament-form.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tournaments', component: TournamentsListComponent},
  {path: 'tournament/:id', component: TournamentDetailsContainerComponent},
  {path: 'admin', component: AdminContainerComponent},
  {path: 'admin/tournament/:id', component: TournamentDetailsContainerComponent},
  {path: 'add-tournament-form', component: AddTournamentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
