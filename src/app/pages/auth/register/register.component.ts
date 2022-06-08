import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/shared/models/user.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup

  constructor(private router:Router, private authSvc:AuthService) { }

  ngOnInit(): void {
  }

  onClickBack(){
    this.router.navigate(['list'])
  }

  async onRegister(userData:UserInterface){
    if(!userData.role){
    userData = {...userData, role:'user'}
    console.log(userData)}

   const res = await this.authSvc.register(userData).catch(err => console.log(err))

      if(res){
          const path = 'User'

          const userId = res.user?.uid;

          userData = {...userData, uId:userId, password:''}

         await this.authSvc.createDoc(userData, path, userId)

         alert('user created')

          this.router.navigate(['login'])
      }


  }
  

 



}
