import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    progmatic
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
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ];
  
  const experiences = [
    {
      title: "Portfolio Project",
      company_name: "",
      icon: web,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - Febr 2024",
      points: [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas officia aliquid quas",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas officia aliquid quas",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas officia aliquid quas",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas officia aliquid quas"
      ],
    },
    {
      title: "Education Mentor",
      company_name: "Progmatic Academy",
      icon: progmatic,
      iconBg: "#ffffff",
      date: "Oct 2022 - Aug 2023",
      points: [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas officia aliquid quas",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas officia aliquid quas",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas officia aliquid quas",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas officia aliquid quas",
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
      name: "Coriandella",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
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
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };