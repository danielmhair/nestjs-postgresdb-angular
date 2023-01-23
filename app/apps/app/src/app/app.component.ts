import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'
import { environments } from '../environments/environments'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public result: any = null
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.result = await this.http.get(`${environments.API_URL}/users`).toPromise()
  }
}
