import {  Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/hero.data';
import { canFlyPipe } from "../../pipes/canfly.pipe";
import { heroColorPipe } from '../../pipes/hero-color.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, canFlyPipe, heroColorPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

    name = signal('Milton Muñoz');

    upperCase = signal(true);

    //objeto con el arreglo de heroes
    heroes = signal(heroes);

 }
