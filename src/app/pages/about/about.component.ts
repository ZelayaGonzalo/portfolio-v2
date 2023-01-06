import { Component } from '@angular/core';
import {faDiagramProject,faCubesStacked,faDownload } from '@fortawesome/free-solid-svg-icons';
import { AcademicItem } from 'src/app/models/models-interfaces';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  diagramIcon = faDiagramProject
  cubesIcon = faCubesStacked
  downloadIcon = faDownload

  academicItems:AcademicItem[]=[
    {
      title:'Full Stack Developer Jr',
      place:'Argentina Programa',
      link:'https://drive.google.com/file/d/1tt2gKXYQVJXct2bgRIo58DfWNehZBqzm/view?usp=sharing',
      from:2021,
      to:2022
    },
    {
      title:'Full Stack Developer Jr',
      place:'The Odin Project',
      link:'none',
      from:2020,
      to:2020
    },
    {
      title:'EF SET English Certificate 82/100',
      place:'EF Standard English Test',
      link:'https://www.efset.org/cert/s96k64',
      from:2022,
      to:2022
    },
    {
      title:'Tecnico Universitario en Programación',
      place:'Universidad Nacional de Salta',
      link:'none',
      from:2021,
      to:0
    },
  ]
}
