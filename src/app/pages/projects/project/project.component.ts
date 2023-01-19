import { Component, Input, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { Project } from 'src/app/models/models-interfaces';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{

  @Input() project:Project = <Project>{}
  images:GalleryItem[] = []

  ngOnInit(): void {
    console.log(this.project)
    this.project.images.forEach(img => {
      this.images.push(
        new ImageItem({src: img,thumb:img}),
      )
    });
  }
}
