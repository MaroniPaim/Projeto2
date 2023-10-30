import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireAuthModule  } from '@angular/fire/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';







const firebaseConfig = {
  apiKey: 'AIzaSyB1iWoA18XAVvbOPah1ATJpnB1_DdRMLe4',

  authDomain: 'saudesocial23-51156.firebaseapp.com',

  databaseURL: 'https://saudesocial23-51156-default-rtdb.firebaseio.com',

  projectId: 'saudesocial23-51156',

  storageBucket: 'saudesocial23-51156.appspot.com',

  messagingSenderId: '729154506495',

  appId: '1:729154506495:web:d2d82f577f8501baaf86ca',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireAuthModule,
    
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideDatabase(() => getDatabase()),

    ReactiveFormsModule,
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  
  constructor() {}
}
