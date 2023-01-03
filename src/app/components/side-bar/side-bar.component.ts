import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Output() selected:EventEmitter<boolean> = new EventEmitter()

  mobileQuery: MediaQueryList;

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
