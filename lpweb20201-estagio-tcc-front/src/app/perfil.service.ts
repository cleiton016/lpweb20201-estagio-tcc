import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient, private auth$: AuthService) { }

  perfilLogado() {
    return this.http.get(environment.API_URL.concat('perfil-logado/'), this.auth$.httpOptions());
  }

  cadastraPerfil(form: any){
    console.log(this.auth$.httpOptions())
     return this.http.post(environment.API_URL.concat('perfis/'),
        JSON.stringify(form),
        this.auth$.httpOptions());
  }
}
