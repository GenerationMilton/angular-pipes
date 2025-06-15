import {  Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/hero.data';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

    name = signal('Milton Muñoz');

    upperCase = signal(true);

    //objeto con el arreglo de heroes
    heroes = signal(heroes);
 }
