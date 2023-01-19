import { Component } from '@angular/core';
import { projects } from 'src/app/data/projectList';
import { Project } from 'src/app/models/models-interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectList:Project[] = projects

}
