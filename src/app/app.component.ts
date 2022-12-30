import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pwa-demo';
  textareaValue:string = "";

  constructor() {
    this.textareaValue = <any>localStorage.getItem('textareaValue');
  }

  save() {
    console.log(this.textareaValue);
    localStorage.setItem('textareaValue', this.textareaValue);
  }

  clear() {
    localStorage.removeItem('textareaValue')
    this.textareaValue = "";
  }
}

