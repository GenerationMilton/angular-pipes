import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [ LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-page.component.html',
 
})
export default class BasicPageComponent { 

  nameLower = signal('milton');
  nameUpper = signal('MILTON');
  fullName= signal('MiLToN MuNOz')
 
}
