import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = "AuthToken";
const USERNAME_KEY = "AuthUsername"
const AUTHORITIES_KEY = "AuthAuthorities";
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  private isLoggedSubject = new BehaviorSubject<boolean>(this.hasToken());
  roles:Array<string>= [];
  
  constructor() { }

  hasToken(): boolean {
    const token = sessionStorage.getItem(TOKEN_KEY);
    return token != null;
  }
  
  //TOKEN
  public getToken():string{
    return sessionStorage.getItem(TOKEN_KEY)!;
  }

  public setToken (token:string):void{
    sessionStorage.setItem(TOKEN_KEY, token);
    this.isLoggedSubject.next(true);
  }

  //USERNAME
  public getUsername():string{
    return sessionStorage.getItem(USERNAME_KEY)!;
  }

  public setUsername (username:string):void{
    sessionStorage.setItem(USERNAME_KEY, username);
  }

  //AUTHORITiES
  public getAuthorities(): string[] {
    const authorities = sessionStorage.getItem(AUTHORITIES_KEY);
    if (authorities) {
      return JSON.parse(authorities);
    }
    return [];
  }
  
  public setAuthorities(authorities: string[]): void {
    sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  //Close session
  public logOut(): void {
    sessionStorage.clear();
    this.isLoggedSubject.next(false);
  }

  public isLoggedIn() {
    return this.isLoggedSubject.asObservable();
  }
}

