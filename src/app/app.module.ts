import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { ProductFromModule } from './shared/components/product-from/product-from.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule} from '@angular/fire/compat'
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { RegisterModule } from './pages/auth/register/register.module';
import { LoginModule } from './pages/auth/login/login.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileModule } from './pages/profile/profile.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    RegisterModule,
    LoginModule,
    ProfileModule,
    ProductFromModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())

  ],
  providers: [AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
