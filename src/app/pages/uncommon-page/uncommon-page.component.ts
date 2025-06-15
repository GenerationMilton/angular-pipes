import {  Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nSelectPipe } from '@angular/common';

//2 clients
const client1 ={
  name: 'Milton',
  gender: 'male',
  age: 39,
  address: 'Bogota, Colombia'
};

const client2 ={
  name: 'Fabiana',
  gender: 'female',
  age: 35,
  address: 'Cali, Colombia'
};

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent,I18nSelectPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  //i18m Select

  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  //toggle to change client
  changeClient(){
    if(this.client() === client1){
      this.client.set(client2);
      return;
    }
    this.client.set(client1);

  }
 }
