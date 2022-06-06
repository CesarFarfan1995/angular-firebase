import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductInterface } from 'src/app/shared/models/product.interface';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products!:Observable<ProductInterface[]>

  private productsCollection: AngularFirestoreCollection<ProductInterface>

  constructor(private readonly afs:AngularFirestore) { 
    this.productsCollection = afs.collection<ProductInterface>('products')
    this.getProducts()

  }


 onDeleteProduct(pdtId:string): Promise<void>{

  
  return new Promise(async (resolve, reject) =>{
    try {

      const result = this.productsCollection.doc(pdtId).delete()
      resolve(result)  
    } catch (err) {

      reject(err)
      
    }
})


 } 

 onSaveProduct(product:ProductInterface, pdtId:string ): Promise<void>{

  return new Promise(async (resolve, reject) =>{
      try {

        const id = pdtId || this.afs.createId();
        const data = {id, ...product}
        const result =  await this.productsCollection.doc(id).set(data)
        resolve(result)
        
      } catch (err) {

        reject(err)
        
      }
  })

} 

private getProducts(): void{

  this.products = this.productsCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => a.payload.doc.data() as ProductInterface))
  )

} 


}
