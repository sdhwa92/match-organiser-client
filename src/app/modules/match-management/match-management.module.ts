import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatchManagementRoutingModule} from './match-management-routing.module';
import {MatchManagementListComponent} from './match-management-list/match-management-list.component';
import {MatchManagementViewComponent} from './match-management-view/match-management-view.component';

@NgModule({
  declarations: [
    MatchManagementListComponent,
    MatchManagementViewComponent
  ],
  imports: [
    CommonModule,
    MatchManagementRoutingModule
  ]
})
export class MatchManagementModule { }
