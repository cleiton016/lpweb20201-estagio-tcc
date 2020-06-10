import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SobreComponent } from './sobre/sobre.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { FormPerfilComponent } from './form-edit-perfil/form-perfil/form-perfil.component';
import { FormEditPerfilComponent } from './form-edit-perfil/form-edit-perfil.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'form-perfil', component: FormPerfilComponent },
  { path: 'form-edit-perfil', component: FormEditPerfilComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
