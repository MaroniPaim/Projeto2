import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), // se der erro: { "projectId": "saudesocial23-51156", "appId": "1:729154506495:web:d2d82f577f8501baaf86ca", "databaseURL": "https://saudesocial23-51156-default-rtdb.firebaseio.com", "storageBucket": "saudesocial23-51156.appspot.com", "locationId": "us-central", "apiKey": "AIzaSyB1iWoA18XAVvbOPah1ATJpnB1_DdRMLe4", "authDomain": "saudesocial23-51156.firebaseapp.com", "messagingSenderId": "729154506495" })
     provideAuth(() => getAuth()), 
     provideFirestore(() => getFirestore()), 
     provideDatabase(() => getDatabase()), 
     provideStorage(() => getStorage())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
