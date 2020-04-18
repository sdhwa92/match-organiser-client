import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatchOrganiserComponent} from './match-organiser.component';
import {LandingComponent} from '../../components/landing/landing.component';

const matchOrganiserRoutes: Routes = [
  {
    path: '',
    component: MatchOrganiserComponent,
    children: [
      {
        path: '',
        component: LandingComponent
      }
    ]
  },
  {
    path: 'match-management',
    loadChildren: '../match-management/match-management.module#MatchManagementModule',
    component: MatchOrganiserComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( matchOrganiserRoutes )
  ],
  exports: [
    RouterModule
  ]
})
export class MatchOrganiserRoutingModule {}
