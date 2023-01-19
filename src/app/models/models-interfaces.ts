export interface AcademicItem{
  title:string,
  place:string,
  link:string,
  from:number,
  to:number
}

export interface Skill{
  name:string,
  image:string,
  type:string
}

export interface Contact{
  logo:string,
  link:string,
  direction:string
}

export interface Project{
  title:string,
  description:string,
  images:string[],
  stack:Skill[],
  demoLink:string,
  repoLink:string
}
