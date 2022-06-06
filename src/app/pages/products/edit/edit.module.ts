import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFromModule } from 'src/app/shared/components/product-from/product-from.module';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule,
    ReactiveFormsModule,
    ProductFromModule
  ]
})
export class EditModule { }
