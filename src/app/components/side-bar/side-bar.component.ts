import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { faCaretDown, faEnvelope, faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Output() selected:EventEmitter<boolean> = new EventEmitter()

  mobileQuery: MediaQueryList;
  color:string = 'bg-white'

  arrowDown = faCaretDown


  listItems = [
    {icon:faLocationDot,text:'Argentina,Salta',to:null,color:'bg-white'},
    {icon:faWhatsapp,text:'387116693',to:'',color:'bg-white'},
    {icon:faLinkedin,text:'/gonzaloZelaya/23123132',to:'linkedin.com',color:'bg-white'},
    {icon:faEnvelope,text:'zelayagonzalo33@gmail.com',to:'zelayagonzalo.com',color:'bg-white'}
    ]

  constructor(
    private router:Router,
    private media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
   }

  ngOnInit(): void {
  }

  hideNav(){
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    if(this.mobileQuery.matches){
      this.selected.emit()
    }
  }

}
