import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'backend-porfolio-production.up.railway.app/auth/'
  constructor(private httpClient: HttpClient) { }

  public nuevo(newUser: NuevoUsuario):Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'register', newUser)
  }

  public login(loginUser: LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUser)
  }
}
