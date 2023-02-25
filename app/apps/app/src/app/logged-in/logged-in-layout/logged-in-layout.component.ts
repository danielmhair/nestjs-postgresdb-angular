import { SocialUser } from '@abacritt/angularx-social-login';
import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../app/auth.service';

@Component({
  selector: 'app-logged-in-layout',
  templateUrl: './logged-in-layout.component.html',
  styleUrls: ['./logged-in-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoggedInLayoutComponent {
  public opened = true
  public user: SocialUser | null = null

  constructor(public authService: AuthService) { }

  public async logout(): Promise<void> {
    await this.authService.logout()
  }

  public goToAccount() {
    // this.router.navigate('account')
  }
}
