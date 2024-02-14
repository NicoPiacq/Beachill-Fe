import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentsListComponent } from './components/tournaments-list/tournaments-list.component';
import { HomeComponent } from './components/home/home.component';
import { TournamentDetailsContainerComponent } from './components/tournament-details-container/tournament-details-container.component';
import { AdminContainerComponent } from './components/admin-container/admin-container.component';
import { TournamentDetailsAdminContainerComponent } from './components/admin-container/tournament-admin-container/tournament-details-admin-container/tournament-details-admin-container.component';
import { AuthAdminGuard } from '../guards/auth-admin.guard';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { TeamDetailsContainerComponent } from './components/team-details-container/team-details-container.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AuthGuard } from '../guards/auth.guard';
import { ReservationContainerComponent } from './components/reservation-container/reservation-container.component';
import { ReservationPlaceDetailsContainerComponent } from './components/reservation-container/reservation-place-details-container/reservation-place-details-container.component';
import { InvitesListComponent } from './components/invites-list/invites-list.component';
import { ReservationSubscribedPageComponent } from './components/reservation-subscribed-page/reservation-subscribed-page.component';
import { TeamAdminDetailsComponent } from './components/admin-container/team-admin-container/team-admin-details/team-admin-details.component';
import { UserAdminDetailsComponent } from './components/admin-container/user-admin-container/user-admin-details/user-admin-details.component';
import { MatchInvitesListComponent } from './components/match-invites-list/match-invites-list.component';
import { StructureDetailsAdminComponent } from './components/admin-container/structure-admin-container/structure-details-admin/structure-details-admin.component';

// IL ROUTING VA RISCRITTO CON LE CHILDREN, ALTRIMENTI VA RIEMPITO DI CANACTIVATE!
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tournaments', component: TournamentsListComponent},
  {path: 'tournament/:id', component: TournamentDetailsContainerComponent},
  {path: 'admin', component: AdminContainerComponent, canActivate: [AuthAdminGuard]},
  {path: 'admin/tournament/:id', component: TournamentDetailsAdminContainerComponent, canActivate: [AuthAdminGuard]},
  {path: 'admin/team/:id', component: TeamAdminDetailsComponent, canActivate: [AuthAdminGuard]},
  {path: 'admin/user/:id', component: UserAdminDetailsComponent, canActivate: [AuthAdminGuard]},
  {path: 'admin/place/:id', component: StructureDetailsAdminComponent, canActivate: [AuthAdminGuard]},
  {path: 'teams', component: TeamsListComponent},
  {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
  {path: 'team/:id', component: TeamDetailsContainerComponent, canActivate: [AuthGuard]},
  {path: 'reservation-places', component: ReservationContainerComponent, canActivate: [AuthGuard]},
  {path: 'reservation-places/:id', component: ReservationPlaceDetailsContainerComponent, canActivate: [AuthGuard]},
  {path: 'invites-team', component: InvitesListComponent, canActivate: [AuthGuard]},
  {path: 'invites-match', component: MatchInvitesListComponent, canActivate: [AuthGuard]},
  {path: 'reservations', component: ReservationSubscribedPageComponent, canActivate: [AuthGuard]},
  
  //non mettere roba dopo gli asterischi pd
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
