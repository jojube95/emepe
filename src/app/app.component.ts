import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {DateUtilities} from './utilities/date-utilities';

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
    // let dateUtilities: DateUtilities = new DateUtilities();
    // let date: Date = new Date(1995, 10, 2);
    // let dateString: string = '02/10/1995';
    // console.log(dateUtilities.dateToString(date));
    // console.log(dateUtilities.stringToDate(dateString));

  }
}
