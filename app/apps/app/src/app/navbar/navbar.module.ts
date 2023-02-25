import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
  ],
  imports: [
    SocialLoginModule,
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
  ],
})
export class NavbarModule { }
