import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  myProfileUrl = '';
  logoClass = true;
  logoClicked = function(){
    this.logoClass = !this.logoClass;
    this.logoClassName = 'logo-selected';
  };

  constructor(){
    this.title = 'Acme product management';
  }
}
