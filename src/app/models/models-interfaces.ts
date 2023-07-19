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
  icon:any,
  link:string,
  direction:string,
  color:string
}

export interface Project{
  title:string,
  description:string,
  images:string[],
  stack:Skill[],
  demoLink:string,
  repoLink:string
}
