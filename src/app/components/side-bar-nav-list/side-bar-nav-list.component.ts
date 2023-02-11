import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar-nav-list',
  templateUrl: './side-bar-nav-list.component.html',
  styleUrls: ['./side-bar-nav-list.component.scss']
})
export class SideBarNavListComponent {

  @Output() selected:EventEmitter<boolean> = new EventEmitter

  world = faGlobe
  languageSelected:string = 'es-AR'


  constructor(public router:Router){}
  navigationRoutes=[
    {text:'Sobre Mi',route:'about'},
    {text:'Proyectos',route:'projects'},
    {text:'Skills',route:'skills'},
    {text:'Contacto',route:'contact'},
  ]

  onPickLink(){
    this.selected.emit(true)
  }
}
