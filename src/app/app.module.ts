import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyAyryr_m898xlUD8QxmE01hfdlq4Y9pXk0',
  authDomain: 'peerjs-intro.firebaseapp.com',
  databaseURL: 'https://peerjs-intro.firebaseio.com',
  storageBucket: 'peerjs-intro.appspot.com',
  messagingSenderId: '761577637171'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
