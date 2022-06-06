import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // products = [
  //   {
  //     name:"playSation 5",
  //     description:"This is a new playStation 5",
  //     uploadDate: "25/06/1966",
  //     stok: 500
  //   },
  //   {
  //     name:"playSation 4",
  //     description:"This is a new playStation 4",
  //     uploadDate: "25/06/1966",
  //     stok: 400
  //   },
  //   {
  //     name:"playSation 3",
  //     description:"This is a new playStation 3",
  //     uploadDate: "25/06/1966",
  //     stok: 300
  //   },  
  //   {
  //     name:"playSation 2",
  //     description:"This is a new playStation 2",
  //     uploadDate: "25/06/1966",
  //     stok: 200
  //   },
  //   {
  //     name:"playSation ",
  //     description:"This is a new playStation",
  //     uploadDate: "25/06/1966",
  //     stok: 500
  //   },
  // ]

  products$ = this.productsSvc.products

  navigation: NavigationExtras = {
    state: {}
  }

  constructor(private router:Router, private productsSvc:ProductsService) { }

  ngOnInit(): void {
  }

  
  onClickEdit(item:any){
    this.navigation.state = item
    this.router.navigate(['edit'], this.navigation)
  }



onClickSee(item:any){
  this.navigation.state = item
  this.router.navigate(['details'], this.navigation)

}


async onClickDelete(productId:any){

  try {
    

   await this.productsSvc.onDeleteProduct(productId)
   alert('Deleted')
    
  } catch (error) {

    console.log(error)
    
    
  }

  
  
}


}
