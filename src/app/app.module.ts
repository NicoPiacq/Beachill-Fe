import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TournamentsListComponent } from './components/tournaments-list/tournaments-list.component';

import { TournamentDetailsComponent } from './components/tournament-details-container/tournament-details/tournament-details.component';
import { EnrolledTeamsListComponent } from './components/tournament-details-container/enrolled-teams-list/enrolled-teams-list.component';
import { MatchesTournamentListComponent } from './components/tournament-details-container/matches-tournament-list/matches-tournament-list.component';
import { TournamentDetailsContainerComponent } from './components/tournament-details-container/tournament-details-container.component';
import { HomeComponent } from './components/home/home.component';
import { AdminPanelContainerComponent } from './components/admin-panel-container/admin-panel-container.component';
import { TournamentAdminContainerComponent } from './components/admin-panel-container/tournament-admin-container/tournament-admin-container.component';
import { TournamentsListAdminComponent } from './components/admin-panel-container/tournament-admin-container/tournaments-list-admin/tournaments-list-admin.component';
import { TournamentDetailsAdminComponent } from './components/admin-panel-container/tournament-admin-container/tournament-details-admin/tournament-details-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    TournamentsListComponent,
    TournamentDetailsComponent,
    TournamentDetailsContainerComponent,
    EnrolledTeamsListComponent,
    MatchesTournamentListComponent,
    HomeComponent,
    AdminPanelContainerComponent,
    TournamentAdminContainerComponent,
    TournamentsListAdminComponent,
    TournamentDetailsAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
