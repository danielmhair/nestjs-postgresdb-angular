import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { CreateUserDto } from '@app/models'
import { Observable } from 'rxjs'
import { environments } from '../environments/environments'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public result: Observable<CreateUserDto[]> | null = null
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.result = this.http.get<CreateUserDto[]>(`${environments.API_URL}/users`)
  }
}
