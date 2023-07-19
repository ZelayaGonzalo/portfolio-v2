import { Project, Skill } from "src/app/models/models-interfaces";

export const projects:Project[] = [
  {
    title:'Priconne Tierlist',
    description:'Tierlist hecha para la comunidad de un juego. Tiene sorting, filtros y busqueda en tiempo real',
    images:['https://drive.google.com/uc?id=1hkWgSeKOMhgr1gJ9QEM5Nw00vyGX9vBx','https://drive.google.com/uc?id=1-_gN_H0CcQerzexaPR8CGMwj3SuKVWb1','https://drive.google.com/uc?id=1Ttfv3ddcvk2q_GDEgTSbjCx-0RPXiCjt','https://drive.google.com/uc?id=1OpF7glKV79qB29ncwhSLgfaeipeS9bwO'],
    stack:[
      {name:'React', image:'react.svg',type:'Framework'}
    ],
    demoLink:'https://zelayagonzalo.github.io/priconne-tierlist/',
    repoLink:'https://github.com/ZelayaGonzalo/priconne-tierlist'
  },
  {
    title:'Subreddit Gallery',
    description:'Una pagina que usa la api de reddit para mostrar las imagenes publicadas en forma de galería. Tiene llamadas limitadas debido a los límites de mi cuenta.',
    images:['https://drive.google.com/uc?id=1fGurgRr6LKPQ9802_skBrRlI-JxFrhIj','https://drive.google.com/uc?id=1Pml8MPY2TkmO8F_3ZeSl6w0UBOMYBr-W','https://drive.google.com/uc?id=1MNusapCUbMCMscaEeQ_Vh8FWm6tGxg48',],
    stack:[
      {name:'React', image:'react.svg',type:'Framework'},
      {name:'Next', image:'next.svg',type:'Framework'}
    ],
    demoLink:'https://subreddits-image-gallery.vercel.app/r/earthporn',
    repoLink:'https://github.com/ZelayaGonzalo/subreddits-image-gallery'
  },
  {
    title:'OtomeIsekai Masterlist',
    description:'Sitio hecho para el facilitar el acceso a una lista de comics de una demografia especifica. Agregue filtros a través de tags, género, tipo, etc. y algunos tipos de sorting para facilitar la navegación.',
    images:['https://drive.google.com/uc?id=18N7mRQ4CsCXclcjaqogWMIlG0X651Izb','https://drive.google.com/uc?id=1E1JiSzrt_S69wXGWxzzgyerMjSRSN2m1','https://drive.google.com/uc?id=14QedqsZyIj4M1-aauqr4998OzOvqQNbR','https://drive.google.com/uc?id=1WIofztSCN_iVB4GmpyZ7Y2pMU5xcB7Kx'],
    stack:[
      {name:'React', image:'react.svg',type:'Framework'},
      {name:'Next', image:'next.svg',type:'Framework'},
      {name:'Figma', image:'figma.svg',type:'Tool'}
    ],
    demoLink:'https://otomeisekai-masterlist.vercel.app',
    repoLink:'https://github.com/ZelayaGonzalo/otomeIsekai-masterlist'
  },
  {
    title:'Project Sekai Characters',
    description:'Visor de perfil de los personajes y grupos del juego Hatsune Miku:Colorful Stage. Hecho principalmente como practica de Angular con SpringBoot. No tiene demo debido a falta de hosting.',
    images:['https://drive.google.com/uc?id=19nRkjxzciQ2XFO-Qa5S88m0IC61isEk0','https://drive.google.com/uc?id=1Og981Mzrdx2zPWV0Ok9NKiIpTtc-NMR0','https://drive.google.com/uc?id=1di4KNK_pX-IaFq3vtHk9cHIGsrXPqV9j','https://drive.google.com/uc?id=1f87-U8MvN5ztcYUZNudhovnylIrQAVYL','https://drive.google.com/uc?id=1QfdlS9hBga7VI3vF9Az7_uRyQTLvRDmF'],
    stack:[
      {name:'Angular', image:'angular.svg',type:'Framework'},
      {name:'Spring Boot', image:'spring.svg',type:'Framework'},
      {name:'Figma', image:'figma.svg',type:'Tool'}
    ],
    demoLink:'none',
    repoLink:'https://github.com/ZelayaGonzalo/project-sekai-characters',
  },
  {
    title:'Alkybank',
    description:'Alkemy Skill-Up donde trabajamos con un grupo de desarroladores para realizar una E-Wallet app con la API proveida.',
    images:['https://i.ibb.co/mBVPJVT/Screenshot-2023-02-13-at-09-29-07-e-wallet.png',
    'https://i.ibb.co/g9BPnjF/Screenshot-2023-02-13-at-09-28-38-e-wallet.png',
    'https://i.ibb.co/jvKLXjj/Screenshot-2023-02-13-at-09-27-59-e-wallet.png',
    'https://i.ibb.co/P1Pn1wK/Screenshot-2023-02-13-at-09-27-39-e-wallet.png',
    'https://i.ibb.co/xYB30RN/Screenshot-2023-02-13-at-09-27-12-e-wallet.png'],
    stack:[
      {name:'Angular', image:'angular.svg',type:'Framework'},
      {name:'Figma', image:'figma.svg',type:'Tool'}
    ],
    demoLink:'none',
    repoLink:'https://github.com/andimolina4/Skill-Up-Angular',
  },
]

/*

*/
