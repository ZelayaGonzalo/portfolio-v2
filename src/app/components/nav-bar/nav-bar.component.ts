import { Component, EventEmitter, Output } from '@angular/core';
import { faAddressCard, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Output() toggleSideBar:EventEmitter<boolean> = new EventEmitter<boolean>

  color:String = 'font-black'
  languageSelected:string = 'es-AR'

  addressCard = faAddressCard
  world = faGlobe

  toggle(){
    this.toggleSideBar.emit(true)
  }

}
