import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit{

constructor(private router:Router, private tokenService:TokenService){}

isLogged= false;

ngOnInit(): void {
  this.tokenService.isLoggedIn().subscribe(loggedIn => {
    this.isLogged = loggedIn;
  });
}


onLogOut(): void {
  this.tokenService.logOut();
  this.router.navigate(['/login']);

}

  login(): void {
    this.router.navigate(['/login']);
  }
}