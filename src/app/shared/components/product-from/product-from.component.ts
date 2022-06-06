import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/pages/products/products.service';
import { ProductInterface } from '../../models/product.interface';

@Component({
  selector: 'app-product-from',
  templateUrl: './product-from.component.html',
  styleUrls: ['./product-from.component.scss']
})
export class ProductFromComponent implements OnInit {
  products: any;
  productForm!:FormGroup;
  constructor(private router:Router, private fb:FormBuilder, private productSvc:ProductsService) { 
    const navigation = this.router.getCurrentNavigation()
    this.products = navigation?.extras.state
    this.initForm()


  }

  ngOnInit(): void {
   


    if(typeof this.products == 'undefined'){
      this.router.navigate(['new'])
    } else {
      this.productForm.patchValue(this.products)
    }

  }

  onSave(){


    if(this.productForm.valid){
      const product:ProductInterface = this.productForm.value;
      const productId = this.products?.id || null
      this.productSvc.onSaveProduct(product,productId)
      this.productForm.reset()


    }
    
  }

  isvalidField(field:string):string{
    const validatedField = this.productForm.get(field)
    return (!validatedField?.valid && validatedField?.touched) 
    ? 'is-invalid' : validatedField?.touched ? 'is-valid' : ''
  }

  private initForm():void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      uploadDate: ['', [Validators.required]],
      stok: ['', [Validators.required]],
    })
  }

  onClickBack(){
    this.router.navigate(['list'])
  }

}
