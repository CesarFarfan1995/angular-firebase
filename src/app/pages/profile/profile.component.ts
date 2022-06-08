import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/shared/models/user.interface';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id!:string | undefined;
  user!:UserInterface | undefined;

  constructor(private authSvc:AuthService) { 

  }

  async ngOnInit() {

    this.authSvc.stateUser().subscribe(res => {
      console.log(res)
      this.getuId()
      
    })
    
    
  }


  async getuId(){
    const id = await this.authSvc.getUid()
    if(id){
      this.id = id
      this.getInfoUser()
      console.log(this.id)
    } else {
      console.log('no user ID')
    }

  }

  getInfoUser(){
    const path = 'User';
    const id = this.id;
    this.authSvc.getDoc<UserInterface>(id,path).subscribe(res => {
      if(res){
        this.user = res;
      }
      console.log('obteniendo los datos del usuario ->', res)
    })


  }

}
