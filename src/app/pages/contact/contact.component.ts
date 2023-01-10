import { Component } from '@angular/core';
import { Contact } from 'src/app/models/models-interfaces';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts:Contact[]=[
    {
      logo:'gmail.svg',
      link:'mailto:zelayagonzalo33@gmail.com',
      direction:'zelayagonzalo33@gmail.com'
    },
    {
      logo:'WhatsApp.svg',
      link:'contact',
      direction:'387222159112'
    }
  ]
}
