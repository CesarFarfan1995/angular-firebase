import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserInterface } from 'src/app/shared/models/user.interface';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private userCollection!: AngularFirestoreCollection<UserInterface>


  constructor(private authFbs:AngularFireAuth, private readonly afs:AngularFirestore) { }




login(email:string, password:string){

 return this.authFbs.signInWithEmailAndPassword(email, password)


}

logout(){
  this.authFbs.signOut()
}


register(userData:UserInterface){
  return  this.authFbs.createUserWithEmailAndPassword(userData.email, userData.password)

}

createDoc(data:any, path:string, id:any){

  const collection = this.afs.collection<UserInterface>(path)
  return collection.doc(id).set(data)
}

stateUser(){
  return this.authFbs.authState
}


getDoc<T>(id:any, path:string){
  return this.afs.collection(path).doc<UserInterface>(id).valueChanges()
}

async getUid(){

 const user = await   this.authFbs.currentUser;
 return user?.uid;

}



}
