import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentsListComponent } from './components/tournaments-list/tournaments-list.component';
import { HomeComponent } from './components/home/home.component';
import { TournamentDetailsContainerComponent } from './components/tournament-details-container/tournament-details-container.component';
import { AdminContainerComponent } from './components/admin-container/admin-container.component';
import { AddTournamentFormComponent } from './components/add-tournament-form/add-tournament-form.component';
import { SuccessAddTournamentFormComponent } from './success-add-tournament-form/success-add-tournament-form.component';
import { TournamentDetailsAdminContainerComponent } from './components/admin-container/tournament-admin-container/tournament-details-admin-container/tournament-details-admin-container.component';
import { RegisterUserFormComponent } from './components/register-user-form/register-user-form.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tournaments', component: TournamentsListComponent},
  {path: 'tournament/:id', component: TournamentDetailsContainerComponent},
  {path: 'admin', component: AdminContainerComponent},
  {path: 'admin/tournament/:id', component: TournamentDetailsAdminContainerComponent},
  {path: 'add-tournament-form', component: AddTournamentFormComponent},
  {path: 'registration', component: RegisterUserFormComponent},
  {path: 'success-add-tournament-form', component: SuccessAddTournamentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
