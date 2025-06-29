
export const portfolioData = {
  hero: {
    title1: "NISHANT",
    title2: "KUMAR",
    subtitlePre: "I'm Nishant Kumar — a",
    subtitleHighlight: "FULL STACK DEVELOPER",
    subtitlePost: "skilled in building digital solutions using modern web technologies.",
    profileImage: {
      src: "/images/Nishant-Profile.jpg",
      alt: "Nishant Kumar",
      width: 160,
      height: 220,
    },
  },
  about: {
    pretitle: "Designing simple user experiences.",
    title: "Here's a bit about me",
    image: {
      src: "/images/Nishant-Portfolio.jpg",
      alt: "Nishant Kumar",
    },
    stats: [
      { label: "Experience", value: "1+ Years" },
      { label: "Speciality", value: "Full Stack Development" },
      { label: "Education", value: "B.Tech in CSE" },
      { label: "Projects", value: "5+ Completed" },
      { label: "Location", value: "Gurugram, India" },
      { label: "Availability", value: "Currently open to new projects" },
    ],
  },
  skills: {
    pretitle: "Skills that shaped my journey.",
    title: "Skills",
    categories: [
      {
        title: "Programming Languages",
        skills: ["JavaScript", "Java", "Python"],
      },
      {
        title: "Frontend & Backend Frameworks",
        skills: ["ReactJS", "Node.js", "Express.js", "Spring Boot"],
      },
      {
        title: "Databases, Queues & Tools",
        skills: ["MongoDB", "MySQL", "Redis", "BullMQ", "Git", "GitHub", "RESTful APIs", "Docker", "Postman"],
      },
      {
        title: "Soft Skills",
        skills: ["Problem Solving", "Team Collaboration", "Adaptability", "Result-oriented"],
      },
    ],
  },
  projects: {
    pretitle: "Where passion met execution.",
    title: "My Projects",
    items: [
      {
        title: "Business Analytics Platform (In Progress)",
        description: "A scalable business intelligence platform to track sales, inventory, brand performance, and real-time analytics. Features include user authentication, live charts, and mobile-friendly UI.",
        tools: ["Next.js 14", "TypeScript", "Express.js", "MongoDB", "Mongoose", "JWT", "Tailwind CSS", "Recharts", "React Hook Form", "shadcn/ui"],
        image: "/Project-Image/Business/Business-1.png",
        dataAiHint: "business analytics",
      },
      {
        title: "Job Importer Dashboard",
        description: "A full-stack dashboard that automates the import of job feeds from RSS/XML sources with real-time WebSocket updates. Features include import scheduling, error tracking, analytics, and live monitoring with a responsive UI.",
        tools: ["Next.js 15", "Node.js", "MongoDB", "Express.js", "WebSocket", "Tailwind CSS", "Bull Queue", "Redis"],
        image: "/Project-Image/Job Importer/job-1.png",
        dataAiHint: "dashboard analytics",
      },
      {
        title: "Burger Builder - Enhanced Edition",
        description: "A visually rich, customizable burger building app with glassmorphism UI, dark/light theme toggle, ingredient controls, live price updates, nutrition facts, and rating system. Fully responsive and supports Firebase-based ordering.",
        tools: ["React 18+", "Redux", "CSS Modules", "Firebase", "Animations"],
        image: "/Project-Image/Burger Builder/Burger-1.png",
        dataAiHint: "burger food",
      },
      {
        title: "MERN Stack Multi-Feature Application",
        description: "A comprehensive MERN project bundling multiple features: Student Manager, Todo App, Movie DB with trailers, Quiz System, Packing List, and User Auth. Includes full CRUD and Firebase login with modern UI.",
        tools: ["React 19.1.0", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Bootstrap"],
        image: "/Project-Image/Mern Project/Mern.png",
        dataAiHint: "mobile apps",
      }
    ],
  },
  careerPath: {
    pretitle: "Key moments in my career.",
    title: "The path I've taken",
    items: [
       {
        type: "education",
        title: "Full Stack Software Development",
        subtitle: "Learnbay",
        period: "Present",
        description: "Currently enhancing expertise through the Full Stack Software Development course, focusing on core development concepts.",
      },
      {
        type: "experience",
        title: "Software Engineer",
        subtitle: "Holiday Hackerz",
        period: "Jul 2023 - Sept 2024",
        description: "Developed a responsive website using the MERN stack with user-friendly interfaces. Built microservices using Java and Spring Boot for authentication and payments. Optimized database queries and high-traffic backend performance. Created a hybrid Node.js-Spring Boot architecture for scalability.",
      },
      {
        type: "education",
        title: "Bachelor of Technology, Computer Science and Engineering",
        subtitle: "Sister Nivedita University",
        period: "Aug 2019 - Jul 2023",
        description: "CGPA: 8.55",
      },
      {
        type: "experience",
        title: "Salesforce Developer",
        subtitle: "Salesforce",
        period: "Jul 2022 - Sept 2022",
        description: "Completed training modules and hands-on projects on Salesforce development. Practiced Apex, triggers, and automation through guided developer tasks and collaborated with peers during virtual internship activities.",
      },
    ],
  },
  certifications: {
    title: "Certifications & Achievements",
    items: [
      {
        icon: "Award",
        title: "MERN-Full Stack Developer",
        description: "Certification for MERN stack development.",
      },
      {
        icon: "Trophy",
        title: "Sports Fest Coordinator",
        description: "Coordinated the annual sports festival at Sister Nivedita University.",
      },
      {
        icon: "HeartHandshake",
        title: "Head Volunteer",
        description: "Led the volunteer team for the Bhumi India Run 2020.",
      },
      {
        icon: "Users",
        title: "Pop Culture Event Member",
        description: "Participated as a member in the technical fest at SNU.",
      },
    ],
  },
  footerCta: {
    pretitle: "Reach out anytime",
    title1: "Let's Stay",
    title2: "Connected",
    description: "Got questions or want to collaborate? Feel free to reach out—We are open to new projects or just a casual chat!",
  },
  contactPage: {
    title: "Let's build something great together",
    description: "I'm always excited to hear about new projects and opportunities. Fill out the form, and I'll get back to you as soon as possible.",
    stats: [
      { label: "Projects Done", value: "5+" },
      { label: "Years of Experience", value: "1.5+" },
    ],
  },
  contact: {
    title: "Get In Touch",
    description: "I'm currently open to new opportunities and collaborations. Feel free to reach out!",
    methods: [
      {
        icon: "Mail",
        label: "Email",
        value: "nthakur476@gmail.com",
        href: "mailto:nthakur476@gmail.com",
      },
      {
        icon: "Phone",
        label: "Phone",
        value: "+91 7739322147",
        href: "tel:+917739322147",
      },
      {
        icon: "Linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/nishantkumar0205",
        href: "https://linkedin.com/in/nishantkumar0205/",
      },
    ],
  },
  socials: [
    {
      name: "LinkedIn",
      icon: "Linkedin",
      href: "https://linkedin.com/in/nishantkumar0205/",
    },
    {
      name: "GitHub",
      icon: "Github",
      href: "https://github.com/Nishantkumar0205",
    },
    {
      name: "Download Resume",
      icon: "Download",
      href: "/Nishant-Kumar-Resume.pdf",
      download: true,
    },
    {
      name: "Twitter",
      icon: "Twitter",
      href: "#",
    },
    {
      name: "Instagram",
      icon: "Instagram",
      href: "#",
    },
    {
      name: "Email",
      icon: "Mail",
      href: "mailto:nthakur476@gmail.com",
    },
    {
      name: "Phone",
      icon: "Phone",
      href: "tel:+917739322147",
    }
  ],
  footer: {
    copyrightName: "Nishant Kumar",
  },
};
