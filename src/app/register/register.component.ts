import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerUserData:any = {}
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    const errors = [];
    const user = (<HTMLInputElement>document.getElementById('username')).value
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const password = (<HTMLInputElement>document.getElementById('pass')).value
    const confirmPassword = (<HTMLInputElement>document.getElementById('confPass')).value

    if(password !== confirmPassword){
      errors.push('Passwords do not match')
    }

    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/'])
      },
      error => console.log(error)
    )
  }

}
