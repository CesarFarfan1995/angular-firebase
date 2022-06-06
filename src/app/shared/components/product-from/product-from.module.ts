import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFromComponent } from './product-from.component';



@NgModule({
  declarations: [ProductFromComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[ProductFromComponent]
})
export class ProductFromModule { }
