import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTournamentsComponent } from './components/list-tournaments/list-tournaments.component';

const routes: Routes = [
  {path: 'tournaments', component: ListTournamentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
