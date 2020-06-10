import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient, private auth$: AuthService) { }

  list() {
    return this.http.get(environment.API_URL.concat('funcionarios/'), this.auth$.httpOptions());
  }
}
