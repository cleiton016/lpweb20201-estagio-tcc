import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { PerfilService } from './../perfil.service';

@Component({
  selector: 'app-form-perfil',
  templateUrl: './form-perfil.component.html',
  styleUrls: ['./form-perfil.component.css']
})
export class FormPerfilComponent implements OnInit {
  cadPerfil = {
    "usuario": null,
    "nome": null,
    "sexo": null,
    "cpf": null,
    "telefone": null,
    "endereco": null,
    "estado_uf": null,
    "cidade": null,
    "cep": null
  };
  user = null

  constructor(public auth$: AuthService, private perfil$: PerfilService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.auth$.user();
    if (this.user) {
      this.cadPerfil.usuario = this.user.id;
    }else{
      this.router.navigate(['/login']);
    }
  }

  cadastraPerfil(){
    this.perfil$.cadastraPerfil(this.cadPerfil).subscribe(
      user => {
        this.router.navigate(['/perfil']);
      }
    );
  }

}
