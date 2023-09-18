import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    bootstrap,
    html,
    css,
    reactjs,
    
    tailwind,
    sanity,
    git,
    figma,
    typenspeek,
    shareme,
    noko,
    meta,
    starbucks,
    tesla,
    shopify,
    
    
    
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
      title: "React  Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
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
      name: "Sanity",
      icon: sanity,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
  ];
  
  
  
  const projects = [
    {
      name: "Shareme",
      description:
      "A comprehensive social website allowing users to post, upload, and comment on photos, fostering connectivity and visual creativity.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: shareme,
      source_code_link: "https://github.com/ALPHA-WAKA/shareme",
    },
    {
      name: "SpeechApp",
      description:
        "SpeechApp offers a convenient solution for converting text into audio with exceptional customization options for language, voice, and playback speed.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: typenspeek,
      source_code_link: "https://github.com/ALPHA-WAKA/SpeechApp",
    },
    {
      name: "Noko-social",
      description:
        "An interactive user interface simulating the appearance and user-friendliness of an online social network, with the option for each user to customize the theme .",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: noko,
      source_code_link: "https://github.com/ALPHA-WAKA/noko-social",
    },
  ];
  
  export { services, technologies,  projects };