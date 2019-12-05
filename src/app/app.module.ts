import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {  environment } from './env/env';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import AngularFireAuthModule from "firebase/auth";
import "firebase/firestore";


@NgModule({
  imports:      [ BrowserModule, FormsModule,  AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
