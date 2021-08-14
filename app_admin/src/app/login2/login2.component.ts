import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { AuthenticationService } from 'services/authentication'; 
import { User } from 'models/user';  

@Component({  
  selector: 'app-login',  
  templateUrl: './login2.component.html',  
  styleUrls: ['./login2.component.css'] 
}) 
export class Login2Component implements OnInit {   
  public formError: string = '';   
  public credentials = { 
    name: '',    
    email: '',    
    password: ''  
  };   
  
  constructor(    
    private router: Router,    
    private authenticationService: AuthenticationService  
    ) { }   
    
  ngOnInit() {}

  public onLoginSubmit(): void {    
    this.formError = '';    
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';    
    } else {      
      this.doLogin();    
    }  
  }   
  
  private doLogin(): void {    
    this.authenticationService.login(this.credentials)      
      .then(() => this.router.navigateByUrl('#'))      
      .catch((message) => this.formError = message);  
    } 
  }

/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'services/authentication';
//import { User } from 'models/user';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  public formError: string = '';

  public credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() { }

  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
    }
    else {
      this.doLogin();
    }
  }
  public doLogin(): void {
    this.authenticationService.login(this.credentials)
      .then(() => this.router.navigateByUrl('#'))
      .catch((message) => this.formError = message);
  }

}*/

/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/