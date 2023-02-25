import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';
import { HomeComponent } from './home/home.component';
import { LoggedInLayoutComponent } from './logged-in-layout/logged-in-layout.component';
import { LoggedInRoutingModule } from './logged-in-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoggedInLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NavbarModule,
    ReactiveFormsModule,
    LoggedInRoutingModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatSelectModule,
    MatMenuModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
  ]
})
export class LoggedInModule { }
