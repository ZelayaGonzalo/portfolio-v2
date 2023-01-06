import { Component, Input } from '@angular/core';
import { AcademicItem } from 'src/app/models/models-interfaces';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-academic-item',
  templateUrl: './academic-item.component.html',
  styleUrls: ['./academic-item.component.scss']
})
export class AcademicItemComponent {
  @Input() data:AcademicItem = <AcademicItem>{}

  linkIcon = faArrowUpRightFromSquare
}
