import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  constructor(private router:Router, private authSvc:AuthService,) { 
    
  }

  ngOnInit(): void {
  }

  onClickBack(){
    this.router.navigate(['list'])
  }

  async onLogin(login:any){
  const res = await  this.authSvc.login(login.email, login.password).catch(err => {
    console.log(err)
  })

  if(res){
    this.router.navigate(['list'])
  }

  }



}
