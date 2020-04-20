import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppContent} from './layout/app.content';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import {AuthTokenService} from './services/auth-token.service';

@NgModule({
  declarations: [
    AppContent,
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthTokenService
  ],
  bootstrap: [AppContent]
})
export class AppModule { }
