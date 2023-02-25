import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavbarModule } from '../navbar/navbar.module';
import { LoggedOutLayoutComponent } from './logged-out-layout/logged-out-layout.component';
import { LoggedOutRoutingModule } from './logged-out-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoggedOutLayoutComponent,
  ],
  imports: [
    CommonModule,
    LoggedOutRoutingModule,
    MatTooltipModule,
    NavbarModule,
    MatProgressBarModule,
    SocialLoginModule,
    MatToolbarModule,
    MatProgressBarModule,
  ],
})
export class LoggedOutModule { }
