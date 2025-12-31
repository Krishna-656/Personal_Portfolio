export const siteConfig = {
  name: "Krishna Reddy",
  title: "Java Full Stack Developer",
  description: "I design and build production-grade web applications used by real users — with clean architecture, scalable APIs, and performance in mind.",
  accentColor: "#1d4ed8",
  social: {
    email: "kulakrishnareddy56@gmail.com",
    linkedin: "https://linkedin.com/in/kulakrishnareddy",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/Krishna-656",
  },
  aboutMe:
    "I’m a Java Full Stack Developer with hands-on experience building and maintaining enterprise-scale applications at Cognizant for clients like Verizon and CoreLogic. " +
  "I work across the stack using Spring Boot, React, and modern frontend frameworks to deliver reliable, high-performance systems. " +
  "My focus is on clean API design, scalable architectures, performance optimization, and writing code that teams can confidently maintain in production.",
  skills: [
  "Java & Spring Boot (REST APIs, Microservices, JPA)",
  "React.js & Next.js (Hooks, Redux, Performance Optimization)",
  "Frontend Architecture & Reusable Component Design",
  "Databases: MySQL, PostgreSQL, MongoDB",
  "CI/CD: Docker, Jenkins, GitHub Actions",
  "Cloud Platforms: AWS (EC2, S3, RDS), Azure",
  "Testing: JUnit, Mockito, Jest, React Testing Library",
  "System Performance & Debugging",
],


  projects: [
    {
      name: "OrganicHub – Farm-to-Home Organic Marketplace",
      description:
        "A full-stack e-commerce platform that connects farmers directly with consumers. " +
      "Designed scalable Spring Boot APIs, optimized database performance, implemented secure JWT authentication, " +
      "and built a responsive React UI with real-time order tracking.",
      // link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["Spring Boot", "React", "MySQL", "Docker", "Jenkins"],
    },
    {
      name: "SmartTransit – Real-Time Bus Tracking System",
      description:
        "A real-time transit tracking system built using WebSockets and Google Maps API. " +
      "Reduced latency significantly compared to polling and handled hundreds of concurrent users during load testing.",
      // link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["Spring Boot", "WebSocket", "Redis", "Google Maps API"],
    },
    {
      name: "IntelliForm – AI-Powered Form Automation",
      description:
        "An AI-assisted form autofill system that extracts structured data from documents using GPT APIs, " +
      "reducing manual input time and improving consistency across enterprise workflows.",
      // link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["Spring Boot", "OpenAI API", "AWS EC2"],
    },
  ],
  experience: [
  {
    company: "Cognizant Technology Solutions",
    title: "Front-End Developer – Verizon",
    dateRange: "Jul 2024 – Present",
    bullets: [
      "Built and optimized customer-facing Profile & Settings modules used by enterprise-scale users",
      "Improved UI load performance by 30% using code splitting and lazy loading",
      "Achieved 90%+ test coverage using Jest and React Testing Library",
      "Collaborated closely with backend, QA, and design teams in Agile sprints",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    title: "Java Full Stack Developer – CoreLogic (Cotality)",
    dateRange: "Dec 2023 – Jul 2024",
    bullets: [
      "Developed Spring Boot microservices powering real-time property analytics",
      "Optimized MySQL schemas handling millions of records, improving API performance by 35%",
      "Implemented CI/CD pipelines with Jenkins and Docker, reducing integration issues by 40%",
      "Worked on modular microservices architecture during large-scale platform transformation",
    ],
  },
],

 education: [
  {
    school: "Madanapalle Institute of Technology and Science",
    degree: "B.Tech – Electronics & Communication Engineering",
    dateRange: "2019 – 2023",
    achievements: [
      "CGPA: 8.68/10",
      "Strong foundation in problem solving, databases, and system design",
      "Certified AWS Cloud Practitioner",
    ],
  },
],

};
