import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'

export const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthService],
    children: [
      // {
      //   path: 'auth',
      //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
      // },
      {
        path: '',
        loadChildren: () => import('./app.module').then(m => m.AppModule),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
