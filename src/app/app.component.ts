import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
 firebaseConfig = {
    apiKey: "AIzaSyDnbwQPgX_pU-D765GdcEfKMAxCid0JUXw",
    authDomain: "timesheetapp-10c5f.firebaseapp.com",
    databaseURL: "https://timesheetapp-10c5f.firebaseio.com",
    projectId: "timesheetapp-10c5f",
    storageBucket: "timesheetapp-10c5f.appspot.com",
    messagingSenderId: "864308461099",
    appId: "1:864308461099:web:fd7cf3f32676cca076b46e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);