import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  project,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];


const experiences = [
  {
    title: "Community Manager Intern",
    company_name: "Nblik India",
    icon: meta,
    iconBg: "#fff",
    date: "August 2022 - September 2022",
    points: [
      "Increased Users by 15% in the month and on boarded 52 genuine users.",
      "Teamed up with orientation department and conducted 3 orientation meetings"      
    ],
  },
  {
    title: "BTech CSE",
    company_name: "Vellore Institute of Technology",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "September 2020 - May 2024*",
    points: [
      "UG in Computer Science and Engineering",
      "CGPA - 8.57*",
      "Documentation Head at Meraki - Fine Arts Club",
    ],
  },
  {
    title: "Senior Secondary School",
    company_name: "Don Bosco Alaknanda, New Delhi",
    icon: shopify,
    iconBg: "black",
    date: "April 2018 - March 2020",
    points: [
      "Percentage - 95.8%",
      "Assistant Headboy- School Council 2018-2019",
    ],
  },
  {
    title: "Secondary School",
    company_name: "Don Bosco Alaknanda, New Delhi",
    icon: tesla,
    iconBg: "white",
    date: "April 2006 - March 2018",
    points: [
      "Percentage - 93.2%",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Image Community",
    description:
      "Web-based platform that allows users to search for any image by just entering a prompt and Voila! There you have it.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project,
    source_code_link: "https://github.com/Samantak10/AI-Image",
  },
  {
    name: "Architecture Portfolio",
    description:
      "Architect's Portfolio for proffessional work and use case. Make sure to visit! :P",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Swiper JS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Samantak10/Architect---Portfolio",
  },
  {
    name: "SamArt",
    description:
      "A platform to showcase artworks made by me and maybe lure customers into buying them :P.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://samantak10.github.io/Samart.github.io/",
  },
];

export { services, technologies, experiences, testimonials, projects };