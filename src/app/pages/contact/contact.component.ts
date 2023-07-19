import { Component } from '@angular/core';
import { Contact } from 'src/app/models/models-interfaces';
import { faCaretDown, faEnvelope, faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts:Contact[]=[
    {icon:faLocationDot,link:'Argentina,Salta',direction:'none',color:'red'},
    {icon:faWhatsapp,link:'3873 04-1495',direction:'https://wa.me/3873041495',color:'green'},
    {icon:faLinkedin,link:'/gonzalo-zelaya-724485208/',direction:'https://www.linkedin.com/in/gonzalo-zelaya-724485208/',color:'blue'},
    {icon:faEnvelope,link:'zelayagonzalo33@gmail.com',direction:'mailto:zelayagonzalo33@gmail.com',color:'mail-white'},
    {icon:faGithub,link:'ZelayaGonzalo',direction:'https://github.com/ZelayaGonzalo',color:'black'},

  ]
}
