import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MatchOrganiserComponent} from './modules/match-organiser/match-organiser.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './modules/match-organiser/match-organiser.module#MatchOrganiserModule'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Match Organiser Login'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
