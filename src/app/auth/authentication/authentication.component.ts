import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication.service';
import { AuthResponse } from '../authresponse';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  buttontype: string = "login";
  private loginAware!: Observable<AuthResponse>;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(data: NgForm){
    console.log("login clicked");
    console.log(data);
    if(this.buttontype=="signup"){
      this.loginAware = this.auth.signup( 
        data.value.email,
        data.value.password
      );
    }else{
      this.loginAware = this.auth.login( 
        data.value.email,
        data.value.password
      );

    }
    this.loginAware.subscribe(
      (data:AuthResponse) =>{
        console.log(data);
      },
      error =>{
        console.error(error.error)
      }
    )
    console.log("you are logged in");
  }
}
