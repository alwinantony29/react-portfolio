/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  mongodbIcon,
  bootstrapIcon,
  webDsignIcon,
  pawsitivePrototype,
  calculator,
  memoryGame,
  netflix,
  olx,
  keeper,
  avatar,

  
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  mongodbIcon,
  bootstrapIcon,
  webDsignIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
  faInstagram,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! :)",

    "My name is Alwin, I'm 21 and a BCA graduate from India. I have a strong passion for the technologies related to Web Development .",

    "Outside of my regular activities, I'm into gaming whenever I have some free time. I'm also a huge dog lover ",

    "I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences.",
    "I write code so clean it shines in your eyes ",
    "Your visit to my portfolio is deeply appreciated !",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  // {
  //   id: 'contact',
  //   title: 'Contact',
  // },
];

const projects = [
  {
    name: "A Netflix Clone",
    description: 'A clone of NETFLIX website made with react .Used firebase for authentication . Used TMDB API to fetch movie data ',
    image: netflix,
    source_code_link: 'https://github.com/alwinantony29/Netflix-Clone',
    demo_link: 'https://netflix-clone-amber-iota.vercel.app/',
  },
  {
    name: 'Olx-clone',
    description: 'A clone of olx website made with react and firebase.Used firebase for authentication and to store product data. single page UI  .',
    image: olx,
    source_code_link: 'https://github.com/alwinantony29/olx-clone',
    demo_link: 'https://olx-clone-7cqg3qurf-alwinantony29.vercel.app/',
  },
  {
    name: 'Google Keep Clone',
    description: 'A completely functional basic clone of Google Keep created with React. It allows you to save notes effortlessly. ',
    image: keeper,
    source_code_link:'https://github.com/alwinantony29/keeper-App', 
    demo_link: 'https://keeper-app-sigma-pied.vercel.app',
  },
  // {
  //   name: 'Pawsitive',
  //   description: 'Explore a user-friendly Figma prototype for an adoption and sterilization awareness website. Experience the sleek design and contribute to a noble cause.',
  //   image: pawsitivePrototype,
  //   source_code_link: 'https://github.com/bl33h/pawsitive',
  //   demo_link: 'https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2',
  // },
 
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'mongodb',
    title: 'MongoDB',
    icon: mongodbIcon,
    description:
      'I have used MongoDB for managing data and creating robust database solutions that cater to the needs of various applications and users. With MongoDB, I can efficiently store, retrieve, and manipulate data, ensuring optimal performance and scalability. ',
  },
  {
    id: 'webdesign',
    title: 'Web Designing',
    icon: webDsignIcon,
    description:
      'I have a strong command of web designing, encompassing a wide range of skills and techniques to create visually appealing, user-friendly, and highly functional websites.. ',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  // {
  //   id: 'aws',
  //   title: 'Amazon Web Services',
  //   icon: awsIcon,
  //   description:
  //     'I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.',
  // },
  // {
  //   id: 'figma',
  //   title: 'Figma',
  //   icon: figmaIcon,
  //   description:
  //   'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  // },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'vite',
    title: 'Vite',
    icon: viteIcon,
    description:
      'I have gained considerable experience working with Vite, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Vercel,Netlify,etc.',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  {
    id: 'eslint',
    title: 'Eslint',
    icon: eslintIcon,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
