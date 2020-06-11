import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient, private auth$: AuthService) { }

  list() {
    return this.http.get(environment.API_URL.concat('funcionarios/'), this.auth$.httpOptions());
  }

  cadastra(curso, funcionario, funcao){
    const form = {
    "curso": { curso },
    "funcionario": { funcionario },
    "funcao": funcao
    }
    return this.http.post(environment.API_URL.concat('professores/'),JSON.stringify(form),
    this.auth$.httpOptions())
  }

  excluir(){
    return this.http.delete(environment.API_URL.concat('professores/2'),
    this.auth$.httpOptions())
  }
}
