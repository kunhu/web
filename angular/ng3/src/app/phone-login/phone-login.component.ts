import { Component, OnInit } from '@angular/core';

import { WindowService } from '../window.service';
import * as firebase from 'firebase';



export class PhoneNumber {
  country: string;
  area: string;
  prefix: string;
  line: string;

  // format phone numbers as E.164
  get e164() {
    const num = this.country + this.area + this.prefix + this.line
    return `+${num}`
  }

}



@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.scss']
})
export class PhoneLoginComponent implements OnInit {

  
  windowRef: any;

  phoneNumber = new PhoneNumber()

  verificationCode: string;

  user: any;
  
  
  constructor(private win: WindowService) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render();
  }

  sendLoginCode() {

    console.log("sendLoginCode+++");
    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;

            })
            .catch( error => console.log(error) );

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {

                    this.user = result.user;

    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }
}
