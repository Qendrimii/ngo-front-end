import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username = '';
  password = '';
  errorMessage = 'Invalid credencials';
  invalidLogin = false;

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(private router: Router,
    private basicAuthenticationService: BasicAuthenticationService

  ) { }

  ngOnInit(): void {
  }

  handleJWTAuthLogin() {

    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['dashboard']);
          this.invalidLogin = false;
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      )
  }

}
