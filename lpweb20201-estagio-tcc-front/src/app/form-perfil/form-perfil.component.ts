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
  perfil: any;
  temPerfil = null

  constructor(public auth$: AuthService, private perfil$: PerfilService, private router: Router) { }

  ngOnInit(): void {
    const user = this.auth$.user();
    if (user) {
      this.cadPerfil.usuario = user.id;
      this.perfil$.perfilLogado()
        .subscribe(
          dados => this.perfil = dados,
          erro => this.temPerfil = false
        );
      console.log("Perfil: ", this.perfil)
      console.log("TemPerfil: ",this.temPerfil)
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
