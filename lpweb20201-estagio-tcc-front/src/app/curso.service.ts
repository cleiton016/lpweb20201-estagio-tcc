import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient, private auth$: AuthService) { }
}

listarcurso