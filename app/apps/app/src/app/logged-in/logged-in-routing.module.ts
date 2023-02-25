import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../auth.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthService],
    canActivateChild: [AuthService],
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInRoutingModule { }
