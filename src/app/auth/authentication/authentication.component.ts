import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(data: NgForm){
    console.log("login clicked");
    console.log(data);
    this.auth.signup( 
      data.value.email,
      data.value.password
    ).subscribe(data =>{console.log(data);});
  }
}
