import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const CLIENT_PORTAL_ROUTES: Routes = [
  {
    path: '',
    canActivate: [AuthService],
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
      },
      {
        path: 'app',
        loadChildren: () => import('./views/views.module').then(m => m.AuthModule),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
