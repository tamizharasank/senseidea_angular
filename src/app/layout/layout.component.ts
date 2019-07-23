import { Component, OnInit } from '@angular/core';


declare var google: any; 
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
  }
//  googleTranslateElementInit() {
//   new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
// }
}
