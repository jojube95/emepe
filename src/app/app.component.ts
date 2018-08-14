import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyA2RfdXx_h3pDyUAHHUVNnnieuIsaXQgKs",
      authDomain: "emepe-2b333.firebaseapp.com",
      databaseURL: "https://emepe-2b333.firebaseio.com",
      projectId: "emepe-2b333",
      storageBucket: "emepe-2b333.appspot.com",
      messagingSenderId: "954245660505"

    })
  }
}
