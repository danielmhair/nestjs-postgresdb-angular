import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
  @Input() public photoUrl = ''
  @Input() public user = { firstName: 'Dan', lastName: 'Hair', email: 'danielmhair@gmail.com', initials: '' }
  @Input() public version = '0.0.1'
  @Output() public logout = new EventEmitter<MouseEvent>()
  @Output() public goToAccount = new EventEmitter<MouseEvent>()

  public ngOnInit(): void {
    this.user.initials = `${this.user.firstName[0].toUpperCase()}${this.user.lastName[0].toUpperCase()}`
  }
}
