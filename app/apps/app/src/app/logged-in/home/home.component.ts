import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environments } from 'apps/app/src/environments/environments';
import { Observable } from 'rxjs';
import { CreateUserDto } from '@app/models'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public result: Observable<CreateUserDto[]> | null = null
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.result = this.http.get<CreateUserDto[]>(`${environments.API_URL}/users`)
  }
}
