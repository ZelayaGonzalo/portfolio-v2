import { Component } from '@angular/core';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faCode, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { Skill } from 'src/app/models/models-interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  frameworks:Skill[] =[
    {name:'Angular',
    image:'angular.svg',
    type:'Framework'
    },
    {name:'React',
    image:'react.svg',
    type:'Framework'
    },
    {name:'Spring Boot',
    image:'spring.svg',
    type:'Framework'
    },
    {name:'NextJS',
    image:'next.svg',
    type:'Framework'
    },
    {name:'NodeJS',
    image:'node.svg',
    type:'Framework'
    }
  ]
  languages:Skill[] = [
    {name:'Javascript',
    image:'javascript.svg',
    type:'Language'
    },
    {name:'TypeScript',
    image:'typescript.svg',
    type:'Language'
    },
    {name:'Java',
    image:'java.svg',
    type:'Language'
    },
  ]
  tools:Skill[] = [
    {name:'Figma',
    image:'figma.svg',
    type:'Tool'
    },
    {name:'MySQL',
    image:'mysql.svg',
    type:'Tool'
    },
    {name:'MongoDB',
    image:'mongo.svg',
    type:'Tool'
    },
    {name:'SASS',
    image:'sass.svg',
    type:'Tool'
    },
  ]

  frameworkIcon = faCodepen
  languageIcon = faCode
  toolsIcon = faToolbox
}
