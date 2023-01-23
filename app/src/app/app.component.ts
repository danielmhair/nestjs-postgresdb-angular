import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  async createUser() {
    const result = await this.http.get('https://3000-danielmhair-nestjspostg-q2pu39g3msx.ws-us83.gitpod.io/users').toPromise()
    debugger
  }
}
