import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PerfilService } from '../perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-edit-perfil',
  templateUrl: './form-edit-perfil.component.html',
  styleUrls: ['./form-edit-perfil.component.css']
})
export class FormEditPerfilComponent implements OnInit {
  perfil : any;
  user = null

  constructor(public auth$: AuthService, private perfil$: PerfilService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.auth$.user();
    if (this.user) {
      this.perfil$.perfilLogado()
        .subscribe(
          dados => this.perfil = dados
        );
    }else{
      this.router.navigate(['/login']);
    }
    
  }

  editarPerfil(){
      console.log(this.perfil)
    this.perfil$.editarPerfil(this.perfil).subscribe(
      user => {
        this.router.navigate(['/perfil']);
      }
    );
  }

}
