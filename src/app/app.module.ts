import { NgModule, RendererFactory2 } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';

import { TournamentsListComponent } from './components/tournaments-list/tournaments-list.component';

import { TeamAdminContainerComponent } from './components/admin-container/team-admin-container/team-admin-container.component';
import { UserAdminContainerComponent } from './components/admin-container/user-admin-container/user-admin-container.component';
import { TournamentsListAdminComponent } from './components/admin-container/tournament-admin-container/tournaments-list-admin/tournaments-list-admin.component';
import { TournamentDetailsAdminContainerComponent } from './components/admin-container/tournament-admin-container/tournament-details-admin-container/tournament-details-admin-container.component';
import { EnrolledTeamsListAdminComponent } from './components/admin-container/tournament-admin-container/tournament-details-admin-container/enrolled-teams-list-admin/enrolled-teams-list-admin.component';
import { MatchesTournamentListAdminComponent } from './components/admin-container/tournament-admin-container/tournament-details-admin-container/matches-tournament-list-admin/matches-tournament-list-admin.component';
import { TournamentDetailsAdminComponent } from './components/admin-container/tournament-admin-container/tournament-details-admin-container/tournament-details-admin/tournament-details-admin.component';
import { TournamentDetailsComponent } from './components/tournament-details-container/tournament-details/tournament-details.component';
import { TournamentDetailsContainerComponent } from './components/tournament-details-container/tournament-details-container.component';
import { EnrolledTeamsListComponent } from './components/tournament-details-container/enrolled-teams-list/enrolled-teams-list.component';
import { MatchesTournamentListComponent } from './components/tournament-details-container/matches-tournament-list/matches-tournament-list.component';
import { HomeComponent } from './components/home/home.component';
import { AdminContainerComponent } from './components/admin-container/admin-container.component';
import { TournamentAdminContainerComponent } from './components/admin-container/tournament-admin-container/tournament-admin-container.component';
import { AddTournamentFormComponent } from './components/admin-container/tournament-admin-container/add-tournament-form/add-tournament-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from '../services/interceptor.service';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { TeamDetailsContainerComponent } from './components/team-details-container/team-details-container.component';
import { TeamDetailsComponent } from './components/team-details-container/team-details/team-details.component';
import { EnrolledPlayersListComponent } from './components/team-details-container/enrolled-players-list/enrolled-players-list.component';
import { MatchesListComponent } from './components/team-details-container/matches-list/matches-list.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ReservationContainerComponent } from './components/reservation-container/reservation-container.component';
import { ReservationPlacesListComponent } from './components/reservation-container/reservation-places-list/reservation-places-list.component';
import { ReservationPlaceDetailsContainerComponent } from './components/reservation-container/reservation-place-details-container/reservation-place-details-container.component';
import { ReservationPlaceDetailsComponent } from './components/reservation-container/reservation-place-details-container/reservation-place-details/reservation-place-details.component';
import { ProfilePageTablepaneComponent } from './components/profile-page/profile-page-tablepane/profile-page-tablepane.component';
import { InvitesListComponent } from './components/invites-list/invites-list.component';
import { ReservationSubscribedPageComponent } from './components/reservation-subscribed-page/reservation-subscribed-page.component';
import { MatchContainerComponent } from './components/match-container/match-container.component';
import { MatchDetailsComponent } from './components/match-container/match-details/match-details.component';
import { MatchSetListComponent } from './components/match-container/match-set-list/match-set-list.component';
import { MatchesCreatedListComponent } from './components/profile-page/matches-created-list/matches-created-list.component';
import { TeamStatsComponent } from './components/team-details-container/team-stats/team-stats.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';
import { UserListAdminComponent } from './components/admin-container/user-admin-container/user-list-admin/user-list-admin.component';
import { TeamsListAdminComponent } from './components/admin-container/team-admin-container/teams-list-admin/teams-list-admin.component';
import { TeamAdminDetailsComponent } from './components/admin-container/team-admin-container/team-admin-details/team-admin-details.component';
import { TeamSingleDetailsComponent } from './components/admin-container/team-admin-container/team-admin-details/team-single-details/team-single-details.component';
import { UserAdminDetailsComponent } from './components/admin-container/user-admin-container/user-admin-details/user-admin-details.component';
import { UserSingleDetailsComponent } from './components/admin-container/user-admin-container/user-admin-details/user-single-details/user-single-details.component';
import { UsersFoundListComponent } from './components/team-details-container/enrolled-players-list/users-found-list/users-found-list.component';
import { MatchInvitesListComponent } from './components/match-invites-list/match-invites-list.component';
import { TeamsFoundListComponent } from './components/profile-page/matches-created-list/teams-found-list/teams-found-list.component';
import { StructureAdminContainerComponent } from './components/admin-container/structure-admin-container/structure-admin-container.component';
import { AddStructureFormComponent } from './components/admin-container/structure-admin-container/add-structure-form/add-structure-form.component';
import { StructureListAdminComponent } from './components/admin-container/structure-admin-container/structure-list-admin/structure-list-admin.component';
import { StructureDetailsAdminComponent } from './components/admin-container/structure-admin-container/structure-details-admin/structure-details-admin.component';
import { StructureSingleDetailsComponent } from './components/admin-container/structure-admin-container/structure-details-admin/structure-single-details/structure-single-details.component';
import { ReservationsAdminContainerComponent } from './components/admin-container/reservations-admin-container/reservations-admin-container.component';
import { ReservationsListAdminComponent } from './components/admin-container/reservations-admin-container/reservations-list-admin/reservations-list-admin.component';
import { EditStructureInfoFormComponent } from './components/admin-container/structure-admin-container/structure-details-admin/structure-single-details/edit-structure-info-form/edit-structure-info-form.component';
import { EditUserInfoFormComponent } from './components/admin-container/user-admin-container/user-admin-details/user-single-details/edit-user-info-form/edit-user-info-form.component';
import { EditTeamInfoFormComponent } from './components/admin-container/team-admin-container/team-admin-details/team-single-details/edit-team-info-form/edit-team-info-form.component';
import { ChangePasswordFormComponent } from './components/profile-page/profile-page-tablepane/change-password-form/change-password-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScoreboardContainerComponent } from './components/scoreboard-container/scoreboard-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    TournamentsListComponent,
    TournamentDetailsComponent,
    TournamentDetailsContainerComponent,
    EnrolledTeamsListComponent,
    MatchesTournamentListComponent,
    AdminContainerComponent,
    TournamentAdminContainerComponent,
    TeamAdminContainerComponent,
    UserAdminContainerComponent,
    TournamentsListAdminComponent,
    TournamentDetailsAdminContainerComponent,
    EnrolledTeamsListAdminComponent,
    MatchesTournamentListAdminComponent,
    TournamentDetailsAdminComponent,
    AddTournamentFormComponent,
    TeamsListComponent,
    TeamDetailsContainerComponent,
    TeamDetailsComponent,
    EnrolledPlayersListComponent,
    MatchesListComponent,
    ProfilePageComponent,
    ReservationContainerComponent,
    ReservationPlacesListComponent,
    ReservationPlaceDetailsContainerComponent,
    ReservationPlaceDetailsComponent,
    ProfilePageTablepaneComponent,
    InvitesListComponent,
    ReservationSubscribedPageComponent,
    MatchContainerComponent,
    MatchDetailsComponent,
    MatchSetListComponent,
    MatchesCreatedListComponent,
    TeamStatsComponent,
    UserListAdminComponent,
    TeamsListAdminComponent,
    TeamAdminDetailsComponent,
    TeamSingleDetailsComponent,
    UserAdminDetailsComponent,
    UserSingleDetailsComponent,
    UsersFoundListComponent,
    MatchInvitesListComponent,
    TeamsFoundListComponent,
    StructureAdminContainerComponent,
    AddStructureFormComponent,
    StructureListAdminComponent,
    StructureDetailsAdminComponent,
    StructureSingleDetailsComponent,
    ReservationsAdminContainerComponent,
    ReservationsListAdminComponent,
    EditStructureInfoFormComponent,
    EditUserInfoFormComponent,
    EditTeamInfoFormComponent,
    ChangePasswordFormComponent,
    ScoreboardContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    PaginationModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
    BsModalService,
    PaginationConfig,
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
