import { Component } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  title = '';
  myProfileUrl = '';
  logoClass = true;
  logoClicked = function(){
    this.logoClass = !this.logoClass;
    this.logoClassName = 'logo-selected';
  };

  constructor(){
    this.title = 'Acme product management';
    this.myProfileUrl = 'http://uditha.test.web.com';
  }
}
