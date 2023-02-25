import { SocialUser } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  @Input() public photoUrl = ''
  @Input() public user: SocialUser = null
  @Input() public version = '0.0.1'
  @Output() public logout = new EventEmitter<MouseEvent>()
}
