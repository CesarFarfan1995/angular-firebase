import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProductInterface } from 'src/app/shared/models/product.interface';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  product:any

  navigation: NavigationExtras = {
    state: {}
  }

  
  constructor(private router:Router, private productsSvc:ProductsService) { 
    const navigation = this.router.getCurrentNavigation()
    this.product = navigation?.extras?.state
  }

  ngOnInit(): void {
    if(typeof this.product == 'undefined'){
      this.router.navigate(['list'])
    }
  }

  onClickEdit(){
    this.navigation.state = this.product
    this.router.navigate(['edit'], this.navigation)
  }

  onClickBack(){
    this.router.navigate(['list'])
  }

  async onClickDelete(productid:string){

    try {

  
     await this.productsSvc.onDeleteProduct(productid)
     alert('Deleted')
     this.onClickBack()
      
    } catch (error) {
  
      console.log(error)
      
      
    }
  
    
    
  }


}
