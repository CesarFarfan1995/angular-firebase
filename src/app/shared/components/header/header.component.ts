import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/auth/auth.service';
import { UserInterface } from '../../models/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  login:boolean = false;
  role!:string

  constructor(private authSvc:AuthService, private router:Router) {
    this.authSvc.stateUser().subscribe(res => {
      if(res){

        console.log('is login')
        this.login = true;
        this.getRoleUser(res.uid)
        
      } else {
        console.log('not login')
        this.login = false
      }




    })
   }

  ngOnInit(): void {
  }

  Logout(){
    this.authSvc.logout()
     this.router.navigate(['login']) 
  }


  getRoleUser(uid:string){
    const path = 'User';
    this.authSvc.getDoc<UserInterface>(uid,path).subscribe(res => {

      
      if(res){
        this.role = res.role
      }

    })

  }

}
