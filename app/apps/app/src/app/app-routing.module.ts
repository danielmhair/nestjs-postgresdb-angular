import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { LoggedInLayoutComponent } from './logged-in/logged-in-layout/logged-in-layout.component';
import { LoginComponent } from './logged-out/login/login.component';

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent,
    loadChildren: () => import('./logged-out/logged-out.module').then(m => m.LoggedOutModule),
  },
  {
    path: '',
    canActivate: [AuthService],
    canActivateChild: [AuthService],
    component: LoggedInLayoutComponent,
    loadChildren: () => import('./logged-in/logged-in.module').then(m => m.LoggedInModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
