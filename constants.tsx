
import { Project, Experience, Education, SkillCategory, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Utsav Charkhawala",
  role: "Data Science & Full-Stack Enthusiast",
  phone: "+91-9714407181",
  email: "utsavjc@gmail.com",
  location: "Pune, Maharashtra, India",
  linkedin: "https://www.linkedin.com/in/utsav-charkhawala-769127324/",
  github: "https://github.com/Utsav045",
  gmailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=utsavjc@gmail.com",
  resume: "/resume.pdf", 
  bio: "Data Science and Full-Stack enthusiast pursuing an MCA in Data Science with expertise in Python, SQL, and Django. Skilled in building scalable web applications, performing data analysis, and visualizing insights with Power BI and Tableau. Experienced in internships delivering actionable insights and developing full-stack solutions. Passionate about solving problems using clean code, analytical thinking, and modern development practices. Also learning AI/ML and working on Agentic AI."
};

export const ADDITIONAL_DETAILS = {
  languages: ["Gujarati", "Hindi", "English"],
  availability: "Flexible for relocation and hybrid opportunities"
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Mainflow Technologies",
    role: "Data Science Intern",
    duration: "Dec 2024 – Feb 2025",
    points: [
      "Cleaned and processed large datasets, improving data accuracy by 25% through Python (Pandas, NumPy).",
      "Conducted EDA with Matplotlib & Seaborn, identifying patterns that reduced reporting time by 15%.",
      "Prepared visual dashboards that improved team decision-making efficiency."
    ]
  },
  {
    company: "Prodigy Infotech",
    role: "Data Analyst Intern",
    duration: "Nov 2024 - Dec 2024",
    points: [
      "Automated data cleaning pipelines, reducing manual effort by 30%.",
      "Built Tableau & Power BI dashboards that improved data accessibility for business teams by 40%.",
      "Collaborated with senior analysts to deliver insights that enhanced dataset quality and reliability."
    ]
  },
  {
    company: "Alapo Technologies",
    role: "Full Stack Developer Intern",
    duration: "Jun 2025 – Aug 2025",
    points: [
      "Built GiftNest, an online gifting platform using Python (Django), HTML, CSS, and JavaScript.",
      "Developed dynamic pages, authentication, and payment integration to enhance user experience.",
      "Improved frontend responsiveness and optimized database performance by 25%."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "PRISM: AI-Powered Data Analysis Platform",
    type: "Work",
    duration: "06/25 – Present",
    tech: ["Django", "Pandas", "Scikit-learn", "Plotly", "REST Framework"],
    description: "Building PRISM, a full-stack Django-based AI data analysis platform that automates data cleaning, visualization, and predictive modeling. Integrating Pandas, Scikit-learn, Plotly, and REST Framework for real-time insights. Implementing secure user authentication, dynamic dashboards, and data export features, with deployment on Render for production scalability.",
    link: "", 
    demoLink: ""
  },
  {
    title: "GiftNest – Online E-Commerce Gifting Shop",
    type: "Work",
    duration: "Jul 2025 – Aug 2025",
    tech: ["Python", "Django", "HTML5", "CSS", "JavaScript", "SQLite"],
    description: "Designed and deployed a full-stack e-commerce platform with catalog, cart, and secure checkout. Optimized database queries, reducing page load time by 20%.",
    link: "",
    demoLink: ""
  },
  {
    title: "Expense Tracker Web App",
    type: "Personal",
    duration: "Mar 2025",
    tech: ["Python", "Django", "SQLite", "Power BI"],
    description: "Built a web application with login, expense categorization, and budget management features. Integrated Power BI dashboards, improving visualization of expense breakdown by 35%.",
    link: "",
    demoLink: ""
  },
  {
    title: "Car4You – Carpooling System",
    type: "Academic",
    duration: "Nov 2023 – Jan 2024",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    description: "Developed a carpooling platform enabling ride posting, searching, and booking. Implemented secure authentication and optimized backend queries, enhancing booking speed by 18%.",
    link: "",
    demoLink: ""
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Veer Narmad South Gujarat University",
    degree: "Bachelor Of Computer Application",
    location: "Surat, Gujarat",
    year: "2021 – 2024",
    details: ["CGPA: 7.91/10", "Built multiple academic projects including carpooling and e-commerce systems."]
  },
  {
    institution: "MIT College of Management",
    degree: "MCA (Data Science)",
    location: "Pune",
    year: "2024 – 2026",
    details: ["Current CGPA: 7.98/10", "Engaged in data science projects and analytics-focused coursework"]
  },
  {
    institution: "D.R. Rana Vidhyasankul",
    degree: "Higher Secondary & Secondary",
    location: "Surat",
    year: "2019 - 2021",
    details: ["Class 12th (GSEB) – 62% (2021)", "Class 10th (GSEB) – 73% (2019)"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "AI & Automation",
    skills: ["AI Agents", "Agentic Automation", "Machine Learning", "Workflow Automation"]
  },
  {
    category: "Creative & Design",
    skills: ["Logo Design", "Graphic Design", "Photography", "Video Editing", "Photo Editing"]
  },
  {
    category: "Programming Languages",
    skills: ["Python", "PHP", "JavaScript", "HTML5", "CSS3", "SQL"]
  },
  {
    category: "Frameworks & Tools",
    skills: ["Django", "Flask", "React.js", "REST APIs", "Git", "GitHub"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "SQLite", "PostgreSQL"]
  },
  {
    category: "Visualization & BI Tools",
    skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn"]
  },
  {
    category: "Core Competencies",
    skills: ["Data Analysis", "Data Cleaning", "Data Visualization", "DSA", "OOP"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "AWS Cloud Technical Essentials", issuer: "AWS (Coursera)" },
  { name: "Databases and SQL for Data Science with Python", issuer: "IBM (Coursera)" },
  { name: "Data Analytics Job Simulation", issuer: "Deloitte (Virtual Internship)" },
  { name: "Database Structures and Management with MySQL", issuer: "META (Coursera)" }
];

export const SKILL_STATS = [
  { name: 'Data & AI', value: 90, fullMark: 100 },
  { name: 'Python Dev', value: 85, fullMark: 100 },
  { name: 'Creative/Design', value: 80, fullMark: 100 },
  { name: 'Backend Dev', value: 75, fullMark: 100 },
  { name: 'Communication', value: 85, fullMark: 100 },
];

export const NAV_LINKS = [
  { name: "Home", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
