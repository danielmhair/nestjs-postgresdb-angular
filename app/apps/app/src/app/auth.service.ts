import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate, CanActivateChild, OnDestroy {
  public static LOCAL_STORAGE_USER = 'U_AWAKE_USER'
  public loading = false
  public user: SocialUser | null = null
  public get loggedIn() {
    return this.user != null
  }

  private destroy$ = new Subject()

  constructor(
    private router: Router,
    public socialAuth: SocialAuthService
  ) {
    this.socialAuth.authState.subscribe(u => {
      this.user = u
      this.setUser(this.user)
    })
  }

  public ngOnDestroy() {
    this.destroy$.next(false)
    this.destroy$.complete()
  }

  public async canActivate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _route: ActivatedRouteSnapshot, _state: RouterStateSnapshot,
  ): Promise<boolean> {
    try {
      if (!this.loggedIn) {
        this.router.navigate(['/auth/login'])
        return false
      }

      return true
    } catch (err) {
      this.router.navigate(['/auth/login'])
      return false
    }
  }

  public async canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean> {
    return this.canActivate(childRoute, state)
  }

  public async logout() {
    await this.socialAuth.signOut()
    this.user = null
    this.router.navigate(['/auth/login'])
  }

  public async loginWith(providerId: string): Promise<void> {
    if (providerId === GoogleLoginProvider.PROVIDER_ID) { throw new Error('Do not use loginWith for google. Its used for other logins.')}
    this.loading = true
    this.setUser(await this.socialAuth.signIn(providerId))
    this.loading = true
  }

  public setUser(user: SocialUser) {
    localStorage.setItem(AuthService.LOCAL_STORAGE_USER, JSON.stringify(user))
    this.initUser()
  }
  // https://commons.wikimedia.org/wiki/File:Microsoft_To-Do_icon.png

  public initUser() {
    const userStr = localStorage.getItem(AuthService.LOCAL_STORAGE_USER)
    if (userStr) {
      this.user = JSON.parse(userStr) as SocialUser
    } else {
      this.user = null
    }
  }
}
