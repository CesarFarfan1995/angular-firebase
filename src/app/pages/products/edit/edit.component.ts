import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit',
  template: `<app-product-from></app-product-from>`,
  styleUrls: ['./edit.component.scss']
})
export class EditComponent  {
  // products: any;
  // productForm!:FormGroup;
  // constructor(private router:Router, private fb:FormBuilder) { 
  //   const navigation = this.router.getCurrentNavigation()
  //   this.products = navigation?.extras.state
  //   this.initForm()


  // }

  // ngOnInit(): void {
   


  //   if(typeof this.products == 'undefined'){
  //     this.router.navigate(['new'])
  //   } else {
  //     this.productForm.patchValue(this.products)
  //   }

  // }

  // onSave(){
  //   console.log('save', this.productForm.value)
  // }

  // private initForm():void {
  //   this.productForm = this.fb.group({
  //     name: ['', [Validators.required]],
  //     description: ['', [Validators.required]],
  //     uploadDate: ['', [Validators.required]],
  //     stok: ['', [Validators.required]],
  //   })
  // }

  // onClickBack(){
  //   this.router.navigate(['list'])
  // }
}
