const portfolioData = {
  personal: {
    name: "Milan Harsha",
    role: "ICT Undergraduate | Cloud & DevOps Enthusiast",
    email: "milanharsha28@gmail.com",
    github: "https://github.com/MilanAlgama",
    linkedin: "https://www.linkedin.com/in/milan-harsha-748ab6278/",
    resume: "/resume.pdf",
  },

  education: [
    {
      title: "Bachelor of Science in Information & Communication Technology",
      institute: "University of Sri Jayewardenepura",
      period: "Present",
      description:
        "Currently pursuing a BSc in ICT with a focus on software engineering, databases, networking, and cloud technologies.",
    },
    {
      title: "Higher National Diploma in Network Engineering & Cyber Security",
      institute: "ICBT Campus",
      period: "Present",
      description:
        "Studying networking fundamentals, cybersecurity concepts, Linux, and C programming.",
    },
    {
      title: "G.C.E. Advanced Level",
      institute: "Gurukula College, Kelaniya",
      period: "Completed",
      description:
        "Completed Advanced Level in the Physical Science stream.",
    },
  ],

  skills: [
  {
    category: "Programming Languages",
    technologies: [
      "Java",
      "Python",
      "C",
      "JavaScript"
    ]
  },

  {
    category: "Frontend",
    technologies: [
      "React",
      "Tailwind CSS",
      "HTML",
      "CSS"
    ]
  },

  {
    category: "Cloud",
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud"
    ]
  },

  {
    category: "DevOps",
    technologies: [
      "Docker",
      "Git",
      "GitHub Actions",
      "CI/CD"
    ]
  },

  {
    category: "Database",
    technologies: [
      "MySQL"
    ]
  }
],

experience: [
  {
    company: "Innodata Lanka Pvt Ltd",
    position: "Assistant Production",
    duration: "5 Months",
    location: "Sri Lanka",

    description:
      "Worked as an Assistant Production, collaborating with team members in a professional environment while improving communication, teamwork, and problem-solving skills.",

    technologies: [
      "Teamwork",
      "Communication",
      "Problem Solving",
      "Professional Environment",
    ],
  },
],

projects: [
  {
    id: 1,
    title: "Sales Management System",

    subtitle: "Desktop Management Application",

    description:
      "A desktop-based Sales Management System developed using Java, JavaFX and MySQL to manage products, customers, inventory and sales efficiently.",

    technologies: [
      "Java",
      "JavaFX",
      "MySQL",
      "OOP"
    ],

    github:
      "https://github.com/MilanAlgama/SalesManagementSystem",

    image: `${import.meta.env.BASE_URL}Projects/POS-ui.webp`,

    featured: true,
  },

  {
    id: 2,

    title: "Logistics Management System",

    subtitle: "Desktop Logistics Solution",

    description:
      "A Logistics Management System developed to manage deliveries, inventory and logistics operations efficiently using Java and MySQL.",

    technologies: [
      "Java"
    ],

    github:
      "https://github.com/MilanAlgama/LMS",

    image: `${import.meta.env.BASE_URL}Projects/LMS-ui.webp`,

    featured: true,
  },

  {
    id: 3,

    title: "Portfolio Website",

    subtitle: "Personal Portfolio Website",

    description:
      "A responsive personal portfolio website built to showcase my projects, skills, education, certificates and contact information with a modern user interface.",

    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
    ],

    github:
      "https://github.com/MilanAlgama/Milan-Algama",

    image: `${import.meta.env.BASE_URL}Projects/portfolio-ui.webp`,

    featured: true,
  },
],

certificates: [
  {
    id: 1,
    title: "Artificial Intelligence & Machine Learning",
    issuer: "SLIIT",
    year: "Completed",
    status: "Completed",
    image: `${import.meta.env.BASE_URL}certificates/AIML-certificate.webp`,
    credential: "#",
  },
  {
    id: 2,
    title: "AWS Cloud Learning",
    issuer: "Amazon Web Services",
    year: "In Progress",
    status: "In Progress",
    image: `${import.meta.env.BASE_URL}certificates/aws-img.webp`,
    credential: "#",
  },
  {
    id: 3,
    title: "Docker Course",
    issuer: "Udemy",
    year: "In Progress",
    status: "In Progress",
    image: `${import.meta.env.BASE_URL}certificates/docker-img.webp`,
    credential: "#",
  },
],


};

export default portfolioData;
