import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
/*
  None: no spl enhancements to the CSS
  ShadowDOM: native shadowDOM impl of the browser
  Emulated: modular enhancements to CSS, without shadowDOM impl on the browser
  this is the default
*/
export class AppComponent {}
