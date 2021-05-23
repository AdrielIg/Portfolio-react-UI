//Imgs projects
import headQuality from '../Assets/img/Project1.png'
import animeFinder from '../Assets/img/Project2.png'
import webDevArg from '../Assets/img/Project3.png'
import elenaJoy from '../Assets/img/Project4.png'
import exPortfolio from '../Assets/img/Project5.png'
import adroChat from '../Assets/img/Project6.png'
import portolio from '../Assets/img/Project7.png'
//Icons tecnologies
import reactIcon from '../Assets/Icons/react.svg'
import materialIcon from '../Assets/Icons/material.svg'
import firebaseIcon from '../Assets/Icons/firebase.svg'
import cssIcon from '../Assets/Icons/css.svg'
import sassIcon from '../Assets/Icons/sass.svg'
import htmlIcon from '../Assets/Icons/html.svg'
import javascriptIcon from '../Assets/Icons/javascript.svg'


const projects = [
  {
    title: 'Head Quality',
    github: 'https://github.com/AdrielIg/HeadQuality---E-commerce',
    live: 'https://headquality.netlify.app/',
    imgProject: headQuality,
    description: 'Dummy headphone store where I put into practice making a cart using LocalStorage. In the products section you can try it',
    id: 1,
    tecnologias: {
      icon1: htmlIcon,
      icon2: cssIcon,
      icon3: javascriptIcon,
    }
  },
  {
    title: 'Anime Finder',
    github: 'https://github.com/AdrielIg/Anime-directory-React',
    live: 'https://anime-directory.netlify.app/',
    imgProject: animeFinder,
    description: 'Anime search engine using MyAnimeList API, it is a SPA using wouter a library like react-router. You can find any anime and see things like the description, episodes, rating, etc',
    id: 2,
    tecnologias: {
      icon1: reactIcon,
      icon2: cssIcon,
    }
  },
  {
    title: 'Web Dev Arg',
    github: 'https://github.com/AdrielIg/WebDevArg',
    live: 'https://webdevarg.netlify.app/',
    imgProject: webDevArg,
    description: 'Web Dev Arg is a page where development and design of web pages are sold, I did this to practice my design and css skills ',
    id: 3,
    tecnologias: {
      icon1: htmlIcon,
      icon2: cssIcon,
      icon3: javascriptIcon,
    }
  },
  {
    title: 'Ex-Portfolio',
    github: 'https://github.com/AdrielIg/Portfolio',
    live: 'https://adrielgomezexportfolio.netlify.app/',
    imgProject: exPortfolio,
    description: 'My ex portolio that I decided to improve by making this one. Designed by myself.',
    id: 4,
    tecnologias: {
      icon1: htmlIcon,
      icon2: sassIcon,
      icon3: javascriptIcon,
    }
  },
  {
    title: 'Elena Joy',
    github: 'https://github.com/AdrielIg/ElenaJoy',
    live: 'https://elenajoyport.netlify.app/',
    imgProject: elenaJoy,
    description: 'A demo page about a photographer, where I used some animations , grid to implement the gallery section and a contact form',
    id: 5,
    tecnologias: {
      icon2: htmlIcon,
      icon1: cssIcon,
      icon3: javascriptIcon,
    }
  },
  {
    title: 'Adro Chat',
    github: 'https://github.com/AdrielIg/Adro-chat',
    live: 'https://adro-chat.netlify.app/?',
    imgProject: adroChat,
    description: 'A simple chat using firebase to store the messages, using session storage to get the user and display the messages with react. If you log in without a name, your messages will display like anonymous. To test it alone open it in two tabs and chat with yourself ;)',
    id: 6,
    tecnologias: {
      icon1: reactIcon,
      icon2: cssIcon,
      icon3: firebaseIcon
    }
  },
  {
    title: 'Portfolio',
    github: 'https://github.com/AdrielIg/Portfolio-react-UI',
    live: 'https://adrielgomez.netlify.app/?',
    imgProject: portolio,
    description: 'My current portfolio made with react and material-ui components.',
    id: 7,
    tecnologias: {
      icon1: reactIcon,
      icon2: materialIcon
    }
  },
]


export default projects