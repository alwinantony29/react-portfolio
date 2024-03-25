import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  netflix,
  olx,
  keeper,
  blog,
  cake,
  excel,
  shorts,
  avatar,
  vidyalai,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
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
    "Highly skilled full-stack developer proficient in both front and back-end programming. Experienced in developing and designing responsive web architectures. Proficient in HTML, and CSS, JavaScript with strong knowledge of MongoDB, Express.js, React.js, and Node.js. Skilled in software architecture design and testing. Familiar with Redux, RESTful APIs, TypeScript, docker and version control software.",
  ],
};

export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work-experience",
    title: "Work Experience",
  },
];

const projects = [
  {
    name: "Blogified",
    description:
      "A completely functional blog app made in MERN. Allows user to create, edit, delete blogs. Users can read blogs posted by other bloggers. Used Firebase & JWT tokens for authentication ",
    image: blog,
    source_code_link: "https://github.com/alwinantony29/Blogified",
    demo_link: "https://blogified.vercel.app/",
  },
  {
    name: "Youtube Shorts clone",
    description:
      "Recreated Youtube shorts with a responsive UI. Added full screen immersive view for mobile screens. Implemented basic functionalities ",
    image: shorts,
    source_code_link: "https://github.com/alwinantony29/shorts",
    demo_link: "https://shorts-mu.vercel.app/",
  },
  {
    name: "Sree's Cake Art",
    description:
      "A completely functional online cake ordering website made for a client. Allows user to browse through different cakes, add to cart, checkout with RazorPay. Admin can add, edit products, view orders etc.",
    image: cake,
    source_code_link: "https://github.com/alwinantony29/E-commerce-website-",
    demo_link: "",
  },
  {
    name: "Excel data management",
    description:
      "A react project made for 1 day Beyond Us hackathon 2023 conducted by Mulearn on 8/7/23 .The task was to develop an excel file upload and form population system ",
    image: excel,
    source_code_link:
      "https://github.com/alwinantony29/beyond-us-hackathon-ST06-",
    demo_link:
      "https://beyond-us-hackathon-st-06-nj13wj6nh-alwinantony29.vercel.app/",
  },
  {
    name: "A Netflix Clone",
    description:
      "A clone of NETFLIX website made with react .Used firebase for authentication . Used TMDB API to fetch movie data ",
    image: netflix,
    source_code_link: "https://github.com/alwinantony29/Netflix-Clone",
    demo_link: "https://netflix-clone-amber-iota.vercel.app/",
  },
  {
    name: "Olx-clone",
    description:
      "A clone of olx website made with react and firebase.Used firebase for authentication and to store product data. single page UI  .",
    image: olx,
    source_code_link: "https://github.com/alwinantony29/olx-clone",
    demo_link: "https://olx-clone-7cqg3qurf-alwinantony29.vercel.app/",
  },
  {
    name: "Google Keep Clone",
    description:
      "A completely functional basic clone of Google Keep created with React. It allows you to save notes effortlessly. ",
    image: keeper,
    source_code_link: "https://github.com/alwinantony29/keeper-App",
    demo_link: "https://keeper-app-sigma-pied.vercel.app",
  },
];

export const workExperiences = [
  {
    role: "Full Stack web developer Intern",
    company: "Vidyalai",
    description:
      "Worked with both frontend and backend of Vidyalai website. Implemented numerous impactful features and pages. Automated and configured E2E testing. Improved performance of various pages. Identified and resolved long-standing backend bug resulting from a systemic design flaw. Demonstrated problem-solving skills and attention to detail in rectifying the issue. Wrote and maintained detailed documentations to ensure code is easily understood and maintained by other developers. Contributed proactively to a dynamic team of developers, leveraging strong communication skills and a collaborative approach to collectively tackle complex challenges and deliver exceptional results.",
    image: vidyalai,
    duration: "Aug 2023 - Feb 2024",
  },
];

const memoji = {
  image: [avatar],
};

export { media, introduction, projects, memoji, icons };
