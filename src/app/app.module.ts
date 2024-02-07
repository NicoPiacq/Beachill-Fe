import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
import { AddTournamentFormComponent } from './components/add-tournament-form/add-tournament-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessAddTournamentFormComponent } from './components/success-add-tournament-form/success-add-tournament-form.component';
import { AuthInterceptorService } from '../services/interceptor.service';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { TeamDetailsContainerComponent } from './components/team-details-container/team-details-container.component';
import { TeamDetailsComponent } from './components/team-details-container/team-details/team-details.component';
import { EnrolledPlayersListComponent } from './components/team-details-container/enrolled-players-list/enrolled-players-list.component';
import { MatchesListComponent } from './components/team-details-container/matches-list/matches-list.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

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
    SuccessAddTournamentFormComponent,
    TeamsListComponent,
    TeamDetailsContainerComponent,
    TeamDetailsComponent,
    EnrolledPlayersListComponent,
    MatchesListComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
