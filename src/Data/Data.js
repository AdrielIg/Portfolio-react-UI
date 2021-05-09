import headQuality from '../Assets/img/Project1.png'
import animeFinder from '../Assets/img/Project2.png'
import webDevArg from '../Assets/img/Project3.png'
import elenaJoy from '../Assets/img/Project4.png'
import portfolio from '../Assets/img/Project5.png'
import adroChat from '../Assets/img/Project6.png'

import reactIcon from '../Assets/Icons/react.svg'
import materialIcon from '../Assets/Icons/material.svg'
import firebaseIcon from '../Assets/Icons/firebase.svg'
import cssIcon from '../Assets/Icons/css.svg'
import sassIcon from '../Assets/Icons/sass.svg'


const projects = [
  {
    title: 'Head Quality',
    github: 'https://github.com/AdrielIg/HeadQuality---E-commerce',
    live: 'https://headquality.netlify.app/',
    imgProject: headQuality,
    description: 'Dummy headphone store where I put into practice making a cart using LocalStorage. In the products section you can try it',
    tecnologias: {
      css: cssIcon,
    }
  },
  {
    title: 'Anime Finder',
    github: 'https://github.com/AdrielIg/Anime-directory-React',
    live: 'https://anime-directory.netlify.app/',
    imgProject: animeFinder,
    description: 'Anime search engine using MyAnimeList API, it is a SPA using wouter a library like react-router',
    tecnologias: {
      react: reactIcon,
    }
  },
  {
    title: 'Web Dev Arg',
    github: 'https://github.com/AdrielIg/WebDevArg',
    live: 'https://webdevarg.netlify.app/',
    imgProject: webDevArg,
    description: 'Web Dev Arg is a page where development and design of web pages are sold',
    tecnologias: {
      css: cssIcon,
    }
  },
  {
    title: 'Ex-Portfolio',
    github: 'https://github.com/AdrielIg/Portfolio',
    live: 'https://adrielgomez.netlify.app/',
    imgProject: portfolio,
    description: 'My ex portolio that I decided to improbe making this one.',
    tecnologias: {
      sass: sassIcon,
    }
  },
  {
    title: 'Elena Joy',
    github: 'https://github.com/AdrielIg/ElenaJoy',
    live: 'https://elenajoyport.netlify.app/',
    imgProject: elenaJoy,
    description: 'A demo page about a photographer',
    tecnologias: {
      css: cssIcon,
    }
  },
  {
    title: 'Adro Chat',
    github: 'https://github.com/AdrielIg/Adro-chat',
    live: 'https://adro-chat.netlify.app/?',
    imgProject: adroChat,
    description: 'A simple chat using firebase to store the messages and display them with react',
    tecnologias: {
      css: cssIcon,
      react: reactIcon
    }
  },
  {
    title: 'Portfolio',
    github: 'https://github.com/AdrielIg/Portfolio-react-UI',
    live: 'https://adro-chat.netlify.app/?',
    imgProject: adroChat,
    description: 'My current portfolio made with react and material-ui',
    tecnologias: {
      firebase: firebaseIcon,
      react: reactIcon
    }
  },
]
]