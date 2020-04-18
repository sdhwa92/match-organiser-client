import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchOrganiserRoutingModule } from './match-organiser-routing.module';

// -- Components
import { MatchOrganiserComponent } from './match-organiser.component';
import {TopNavigationComponent} from '../../components/top-navigation/top-navigation.component';
import {LandingComponent} from '../../components/landing/landing.component';

@NgModule({
  declarations: [
    MatchOrganiserComponent,
    TopNavigationComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    MatchOrganiserRoutingModule
  ]
})
export class MatchOrganiserModule { }
