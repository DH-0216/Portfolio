import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
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
  github,
  fullstack,
  Seatify,
  AutoTradingBot,
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

const experiences = [
  {
    title: "Undergraduate Student",
    company_name: "University",
    icon: reactjs,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Pursuing a Bachelor's degree in Computer Science.",
      "Engaged in coursework covering algorithms, data structures, web development, and software engineering.",
      "Collaborating with peers on academic projects and group assignments.",
      "Participating in coding competitions and tech-related extracurricular activities.",
    ],
  },
  {
    title: "React.js Developer (Personal Projects)",
    company_name: "University",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Developed and maintained web applications using React.js and related technologies.",
      "Built responsive user interfaces and ensured cross-browser compatibility.",
      "Implemented features based on self-driven project requirements.",
      "Practiced version control and code reviews through GitHub.",
    ],
  },
  {
    title: "React Native Developer (Personal Projects)",
    company_name: "University",
    icon: reactjs,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Created cross-platform mobile applications using React Native.",
      "Integrated APIs and optimized app performance.",
      "Designed intuitive interfaces for both iOS and Android devices.",
      "Explored mobile development best practices through hands-on learning.",
    ],
  },
  {
    title: "Full Stack Developer (Personal Projects)",
    company_name: "University",
    icon: fullstack,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Built full stack applications using technologies like Node.js, Express, MongoDB, and React.",
      "Designed and implemented RESTful APIs.",
      "Managed deployment and testing of personal projects.",
      "Continually learning new frameworks and tools to expand development skills.",
    ],
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
    alt: "redux",
  },
  {
    src: threejs,
    alt: "threejs",
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
    alt: "git",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "purple-text-gradient",
      },
      {
        name: "spring",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "purple-text-gradient",
      },
    ],
    image: Pizza,
    source_code_link:
      "https://github.com/DH-0216/pizza-order-delivery-system.git",
    url: "https://",
  },
  {
    name: "Seatify - Movie Ticket Booking System",
    description:
      "A web application that allows users to book movie tickets online, view showtimes, and manage their accounts, providing a seamless and convenient movie ticket booking experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },

      {
        name: "stripe",
        color: "purple-text-gradient",
      },
      {
        name: "clerk",
        color: "blue-text-gradient",
      },
      {
        name: "ingest",
        color: "green-text-gradient",
      },
    ],
    image: Seatify,
    source_code_link: "https://",
    url: "https://",
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
    url: "https://",
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
      {
        name: "PyQt6",
        color: "purple-text-gradient",
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
    image: AutoTradingBot,
    video: "/videos/AutoTradingBot.mp4",
    url: "https://",
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
    url: "https://",
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
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Dulaj was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
];

const social = [
  {
    name: "insta",
    img: "/images/insta.png",
    link: "",
  },
  {
    name: "fb",
    img: "/images/fb.png",
    link: "",
  },
  {
    name: "x",
    img: "/images/x.png",
    link: "",
  },
  {
    name: "linkedin",
    img: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/dulaj-hashmika/",
  },
  {
    name: "github",
    img: github,
    link: "https://github.com/DH-0216",
    className: "w-7 h-7",
  },
  {
    name: "whatsapp",
    img: "/images/whatsapp.png",
    link: "https://wa.me/94784340852",
    className: "w-8 h-8",
  },
];

export {
  navLinks,
  words,
  skills,
  works,
  services,
  testimonials,
  social,
  experiences,
};
