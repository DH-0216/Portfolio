import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  react,
  nextjs,
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
  reactnative,
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
    icon: react,
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
    icon: react,
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
    icon: react,
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

// Enhanced skills data with categories and proficiency levels
const skills = [
  {
    category: "Programming Languages",
    skills: [
      {
        src: C,
        alt: "C",
        proficiency: 50,
        description: "System programming, embedded development",
      },
      {
        src: Cpp,
        alt: "C++",
        proficiency: 30,
        description: "Object-oriented programming, algorithms",
      },
      {
        src: Csharp,
        alt: "C#",
        proficiency: 25,
        description: "Windows applications, .NET development",
      },
      {
        src: Python,
        alt: "Python",
        proficiency: 40,
        description: "Data analysis, automation, AI/ML",
      },
      {
        src: Java,
        alt: "Java",
        proficiency: 70,
        description: "Enterprise applications, Android development",
      },
    ],
  },
  {
    category: "Web Development",
    skills: [
      {
        src: html,
        alt: "HTML5",
        proficiency: 95,
        description: "Semantic HTML, accessibility",
      },
      {
        src: css,
        alt: "CSS3",
        proficiency: 90,
        description: "Responsive design, animations",
      },
      {
        src: javascript,
        alt: "JavaScript",
        proficiency: 75,
        description: "ES6+, DOM manipulation, APIs",
      },
      {
        src: react,
        alt: "React",
        proficiency: 80,
        description: "Hooks, state management, performance",
      },
      {
        src: nextjs,
        alt: "Next.js",
        proficiency: 80,
        description: "Server-side rendering, API routing",
      },
      {
        src: redux,
        alt: "Redux",
        proficiency: 60,
        description: "State management, Redux Toolkit",
      },
      {
        src: threejs,
        alt: "Three.js",
        proficiency: 30,
        description: "3D graphics, WebGL",
      },
    ],
  },
  {
    category: "Mobile & Cross-Platform",
    skills: [
      {
        src: Flutter,
        alt: "Flutter",
        proficiency: 30,
        description: "Cross-platform mobile apps",
      },
      {
        src: reactnative,
        alt: "React Native",
        proficiency: 50,
        description: "Cross-platform mobile apps",
      },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      {
        src: nodejs,
        alt: "Node.js",
        proficiency: 70,
        description: "Server-side JavaScript, APIs",
      },
      {
        src: Express,
        alt: "Express",
        proficiency: 60,
        description: "RESTful APIs, middleware",
        className: "bg-white rounded-full p-1",
      },
      {
        src: mongodb,
        alt: "MongoDB",
        proficiency: 80,
        description: "NoSQL database, aggregation",
      },
      {
        src: MySql,
        alt: "MySQL",
        proficiency: 70,
        description: "Relational databases, SQL",
      },
      {
        src: PHP,
        alt: "PHP",
        proficiency: 75,
        description: "Server-side scripting, CMS",
      },
      {
        src: Spring,
        alt: "Spring",
        proficiency: 70,
        description: "Java Spring framework",
      },
    ],
  },
  {
    category: "Tools & Design",
    skills: [
      {
        src: git,
        alt: "Git",
        proficiency: 90,
        description: "Version control, collaboration",
      },
      {
        src: figma,
        alt: "Figma",
        proficiency: 75,
        description: "UI/UX design, prototyping",
      },
      {
        src: tailwind,
        alt: "Tailwind",
        proficiency: 92,
        description: "Utility-first CSS framework",
      },
      {
        src: Arduino,
        alt: "Arduino",
        proficiency: 70,
        description: "IoT projects, hardware integration",
      },
    ],
  },
];

const works = [
  {
    name: "Seatify - Movie Ticket Booking System",
    category: "web",
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
        name: "inngest",
        color: "green-text-gradient",
      },
    ],
    image: Seatify,
    source_code_link:
      "https://github.com/DH-0216/Seatify-Movie-Ticket-Booking-System.git",
    url: "https://seatify-client.vercel.app/",
    status: "completed",
  },
  {
    name: "Pizza Delivery System",
    category: "web",
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
    url: "https://redoven-client.vercel.app/",
    status: "completed",
  },

  {
    name: "TrendFusion Trading Indicator",
    category: "trading",
    description:
      "A full-stack trading indicator that provides technical analysis, customizable alerts, and more features to enhance trading strategies.",
    tags: [
      {
        name: "pinescript",
        color: "blue-text-gradient",
      },
    ],
    image: TrendFusion,

    status: "maintenance",
    complexity: "medium",
    developmentTime: "2-3 months",
    teamSize: "Solo",
  },
  {
    name: "AI Powered Chatbot",
    category: "ai",
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
    status: "completed",
  },
  {
    name: "Auto Trading Bot",
    category: "trading",
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

    status: "maintenance",
  },
  {
    name: "Library Management System",
    category: "web",
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

    status: "completed",
  },
  {
    name: "Arduino Home Security System",
    category: "iot",
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
    status: "completed",
  },
  {
    name: "E-commerce Mobile App",
    category: "mobile",
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
    status: "inProgress",
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

// Project categories for filtering
const projectCategories = [
  { id: "all", name: "All Projects", color: "from-cyan-500 to-blue-500" },
  { id: "web", name: "Web Apps", color: "from-purple-500 to-pink-500" },
  { id: "mobile", name: "Mobile Apps", color: "from-green-500 to-teal-500" },
  { id: "ai", name: "AI/ML", color: "from-orange-500 to-red-500" },
  { id: "iot", name: "IoT", color: "from-indigo-500 to-purple-500" },
  { id: "trading", name: "Trading", color: "from-yellow-500 to-orange-500" },
];

// Project status options
const projectStatus = {
  live: {
    label: "Live",
    color: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  inProgress: {
    label: "In Progress",
    color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  },
  completed: {
    label: "Completed",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  maintenance: {
    label: "Maintenance",
    color: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  },
};

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
  projectCategories,
  projectStatus,
};
