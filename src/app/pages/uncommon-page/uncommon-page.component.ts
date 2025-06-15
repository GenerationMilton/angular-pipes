import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';

//2 clients
const client1 = {
  name: 'Milton',
  gender: 'male',
  age: 39,
  address: 'Bogota, Colombia',
};

const client2 = {
  name: 'Fabiana',
  gender: 'female',
  age: 35,
  address: 'Cali, Colombia',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe
  ],
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
  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  // i18n Plural
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  });

  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Melissa',
    'Natalia',
    'Andrea',
    'Juan',
    'Carlos',
  ]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  //keyValue Pipe
  profile = {
    name: 'Milton',
    age: 36,
    addres: 'Ottawa, Canada',
  }

  // Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject)=> {

    setTimeout(()=>{
      //reject('Tenemos un error en la data');
      resolve('Tenemos data en la promesa.')
      console.log('Promesa finalizada');

    }, 3500);

  })
}
