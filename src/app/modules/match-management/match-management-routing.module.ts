import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MatchManagementListComponent} from './match-management-list/match-management-list.component';
import {MatchManagementViewComponent} from './match-management-view/match-management-view.component';

const matchManagementRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: MatchManagementListComponent
  },
  {
    path: 'view/{id}',
    component: MatchManagementViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(matchManagementRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class MatchManagementRoutingModule {}
