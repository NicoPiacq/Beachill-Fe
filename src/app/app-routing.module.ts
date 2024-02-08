import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentsListComponent } from './components/tournaments-list/tournaments-list.component';
import { HomeComponent } from './components/home/home.component';
import { TournamentDetailsContainerComponent } from './components/tournament-details-container/tournament-details-container.component';
import { AdminContainerComponent } from './components/admin-container/admin-container.component';
import { AddTournamentFormComponent } from './components/add-tournament-form/add-tournament-form.component';
import { SuccessAddTournamentFormComponent } from './components/success-add-tournament-form/success-add-tournament-form.component';
import { TournamentDetailsAdminContainerComponent } from './components/admin-container/tournament-admin-container/tournament-details-admin-container/tournament-details-admin-container.component';
import { AuthAdminGuard } from '../guards/auth-admin.guard';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { TeamDetailsContainerComponent } from './components/team-details-container/team-details-container.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AuthGuard } from '../guards/auth.guard';
import { ReservationContainerComponent } from './components/reservation-container/reservation-container.component';

// IL ROUTING VA RISCRITTO CON LE CHILDREN, ALTRIMENTI VA RIEMPITO DI CANACTIVATE!
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tournaments', component: TournamentsListComponent},
  {path: 'tournament/:id', component: TournamentDetailsContainerComponent},
  {path: 'admin', component: AdminContainerComponent, canActivate: [AuthAdminGuard]},
  {path: 'admin/tournament/:id', component: TournamentDetailsAdminContainerComponent, canActivate: [AuthAdminGuard]},
  {path: 'add-tournament-form', component: AddTournamentFormComponent},
  {path: 'success-add-tournament-form', component: SuccessAddTournamentFormComponent},
  {path: 'teams', component: TeamsListComponent},
  {path: 'profile/:id', component: ProfilePageComponent, canActivate: [AuthGuard]},
  {path: 'team/:id', component: TeamDetailsContainerComponent},
  {path: 'reservation-places', component: ReservationContainerComponent},
  //non mettere roba dopo gli asterischi pd
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
