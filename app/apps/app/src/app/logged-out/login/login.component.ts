import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ["login.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private socialAuth: SocialAuthService, private router: Router) {}
  private destroy$ = new Subject()

  public ngOnDestroy() {
    this.destroy$.next(false)
    this.destroy$.complete()
  }

  public async ngOnInit() {
    this.socialAuth.authState.pipe(takeUntil(this.destroy$)).subscribe(user => {
      if (user) {
        this.router.navigate(['/'])
      }
    })
  }
}
