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
  threejs,
  AutoTradingBot,
  TrendFusion,
  Pizza,
  Library,
  ChatBot,
  Arduino,
  Ecommerce_App,
  C,
  Cpp,
  Csharp,
  Python,
  Java,
  Dart,
  Flutter,
  Express,
  MySql,
  Spring,
  PHP,
} from "../assets";

const navLinks = [

  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "about",
    title: "About",
    path: "/#about",
  },
  {
    id: "work",
    title: "Work",
    path: "/#work",
  },
  {
    id: "contact",
    title: "Contact",
    path: "/#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const expCards = [
  {
    review:
      "Dulaj brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2025 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Dulaj’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2025 - present",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Dulaj’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2025 - present",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const skills = [
  {
    src: C,
    alt: "c",
  },
  {
    src: Cpp,
    alt: "cplusplus",
  },
  {
    src: Csharp,
    alt: "csharp",
  },
  {
    src: Python,
    alt: "python",
  },
  {
    src: Java,
    alt: "java",
  },
  {
    src: Dart,
    alt: "dart",
  },
  {
    src: Flutter,
    alt: "flutter",
  },
  {
    src: html,
    alt: "html5",
  },
  {
    src: css,
    alt: "css3",
  },
  {
    src: tailwind,
    alt: "tailwind",
  },
  {
    src: javascript,
    alt: "javascript",
  },
  {
    src: reactjs,
    alt: "react",
  },
  {
    src: redux,
    alt: "redux"
  },
  {
    src: threejs,
    alt: "threejs"
  },
  {
    src: nodejs,
    alt: "nodejs",
  },
  {
    src: figma,
    alt: "figma",
  },
  {
    src: git,
    alt: "git"
  },
  {
    src: PHP,
    alt: "php",
  },
  {
    src: Spring,
    alt: "spring",
  },
  {
    src: Express,
    alt: "express",
    className: "bg-white rounded-full p-1",
  },
  {
    src: mongodb,
    alt: "mongodb",
  },
  {
    src: MySql,
    alt: "mysql",
  },
  {
    src: Arduino,
    alt: "arduino",
  },
  
];

const works = [
  {
    name: "Pizza Delivery System",
    description:
      "A web application that allows users to order pizza online, track their orders in real-time, and manage their accounts, providing a seamless and convenient pizza delivery experience.",
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
      {
        name: "spring",
        color: "blue-text-gradient",
      },
    ],
    image: Pizza,
    source_code_link:
      "https://github.com/DH-0216/pizza-order-delivery-system.git",
  },

  {
    name: "TrendFusion Trading Indicator",
    description:
      "A full-stack trading indicator that provides technical analysis, customizable alerts, and more features to enhance trading strategies.",
    tags: [
      {
        name: "pinescript",
        color: "blue-text-gradient",
      },
    ],
    image: TrendFusion,
    source_code_link: "",
  },
  {
    name: "AI Powered Chatbot",
    description:
      "An AI-powered chatbot that provides instant customer support, answers frequently asked questions, and assists users in navigating the website, enhancing user experience and engagement.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },

      {
        name: "flask",
        color: "green-text-gradient",
      },
    ],
    image: ChatBot,
    source_code_link:
      "https://github.com/DH-0216/AI-Powered-Programming-ChatBot.git",
  },
  {
    name: "Auto Trading Bot",
    description:
      "An automated trading bot that reads trade signals sent by an indicator to a Telegram channel and executes trades based on those messages, providing hands-free trading directly from Telegram alerts.",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "telethon",
        color: "blue-text-gradient",
      },
      {
        name: "exchange-api",
        color: "pink-text-gradient",
      },
    ],
    video: AutoTradingBot,
    source_code_link: "",
  },
  {
    name: "Library Management System",
    description:
      "A web application that allows users to search for books, manage their library accounts, and track borrowed books, providing a user-friendly interface for library management.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
    ],
    image: Library,
    source_code_link:
      "https://github.com/DH-0216/Library-Management-System.git",
  },
  {
    name: "Arduino Home Security System",
    description:
      "A home security system built with Arduino that includes motion detection, remote control, and SMS notifications.",
    tags: [
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
      {
        name: "iot",
        color: "green-text-gradient",
      },
      {
        name: "c++",
        color: "pink-text-gradient",
      },
    ],
    image: Arduino,
    source_code_link:
      "https://github.com/DH-0216/Arduino-Home-Security-Systems-Project.git",
  },
  {
    name: "E-commerce Mobile App",
    description:
      "A  e-commerce application that allows users to browse products, add them to their cart, and make purchases, providing a complete online shopping experience.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
    ],

    image: Ecommerce_App,
    source_code_link: "https://github.com/DH-0216/E-Commerce-App.git",
  },
];

const services = [
  {
    title: "Web Developer",
    img: web,
    description:
      "Designing and developing responsive, high-performance websites using modern frameworks and best practices. Ensuring cross-browser compatibility, accessibility, and seamless user experiences.",
  },
  {
    title: "React Native Developer",
    img: mobile,
    description:
      "Building robust, cross-platform mobile applications with React Native. Integrating APIs, optimizing performance, and delivering intuitive interfaces for both iOS and Android devices.",
  },
  {
    title: "Backend Developer",
    img: backend,
    description:
      "Developing scalable server-side applications, RESTful APIs, and database architectures. Implementing authentication, security, and data management solutions for reliable backend systems.",
  },
  {
    title: "Content Creator",
    img: creator,
    description:
      "Producing engaging technical content, tutorials, and documentation for web and mobile platforms. Enhancing brand presence through blogs, videos, and social media.",
  },
  {
    title: "UI/UX Designer",
    img: figma,
    description:
      "Crafting user-centric designs and wireframes using Figma and other design tools. Focusing on usability, visual appeal, and seamless interaction flows.",
  },
  {
    title: "DevOps Engineer",
    img: docker,
    description:
      "Automating deployment pipelines, managing cloud infrastructure, and ensuring continuous integration and delivery using Docker and related DevOps tools.",
  },
  {
    title: "API Integration Specialist",
    img: nodejs,
    description:
      "Integrating third-party APIs and services into web and mobile applications. Ensuring secure, efficient, and reliable data exchange between systems.",
  },
  {
    title: "IoT Solutions Developer",
    img: Arduino,
    description:
      "Designing and implementing IoT solutions using Arduino and microcontrollers. Developing firmware, sensor integrations, and real-time monitoring systems.",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Dulaj. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Dulaj was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Dulaj was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dulaj's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dulaj is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Dulaj was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Dulaj’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Dulaj was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  navLinks,
  words,
  expCards,
  expLogos,
  skills,
  works,
  services,
  testimonials,
  socialImgs,
};
