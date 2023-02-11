import { Component, EventEmitter, Output } from '@angular/core';
import { faAddressCard, faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Output() toggleSideBar:EventEmitter<boolean> = new EventEmitter<boolean>
  @Output() toggleNav:EventEmitter<boolean> = new EventEmitter<boolean>

  color:String = 'font-black'
  languageSelected:string = 'es-AR'

  addressCard = faAddressCard
  world = faGlobe
  menu = faBars
  toggle(){
    this.toggleSideBar.emit(true)
  }
  toggleNavigation(){
    this.toggleNav.emit(true)
  }

}
