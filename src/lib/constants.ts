
import type { NavLink, SocialLink, TimelineEvent, SkillsCategory, Project } from "@/lib/types";
import { Linkedin, Github, Twitter, Send, Instagram, BookOpen, Home, User, Lightbulb, GraduationCap, Briefcase, FolderKanban, Mail } from "lucide-react";
// Removed Code, Database, Brain, Bot, Palette as they are now referenced by string names for skills

export const APP_NAME = "PortfolioVerse";

export const navLinks: NavLink[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/skills", label: "Skills", icon: Lightbulb },
  { href: "/education", label: "Education", icon: GraduationCap },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/contact", label: "Contact", icon: Mail },
];

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/shivranjanjogwar/", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/Shivranjan-Jogwar?tab=repositories", icon: Github },
  { name: "Twitter", href: "https://x.com/Shivranjan_1", icon: Twitter },
  { name: "Telegram", href: "https://t.me/Shivranjan_1", icon: Send },
  { name: "Instagram", href: "https://www.instagram.com/shivranjan_jogwar/", icon: Instagram },
  { name: "Dev.to", href: "https://dev.to/shivranjan_jogwar", icon: BookOpen },
];

export const personalInfo = {
  name: "Shivranjan Jogwar", // Replace with your actual name
  tagline: "Data Analytics | Data Science | Machine Learning | Deep Learning | Artificial Intelligence | Robotic Process Automation",
  avatarUrl: "https://placehold.co/300x300.png",
  avatarAiHint: "cartoon avatar",
  bioShort: "A passionate individual exploring the realms of data, machine learning, and artificial intelligence. Always eager to learn and apply new technologies to solve real-world problems.",
  bioExtended: "Driven by a curiosity for how data can shape insights and decisions, I have immersed myself in the fields of Data Analytics, Machine Learning, and AI. My journey involves continuous learning, hands-on projects, and a commitment to leveraging technology for impactful solutions. I thrive in collaborative environments and am always open to new challenges and opportunities for growth.",
  careerGoals: "To contribute to innovative projects in AI and Data Science, pushing the boundaries of what's possible and creating value through data-driven strategies.",
  email: "shivcorporatejobs@gmail.com", // Replace with your actual email
  resumeUrl: "https://drive.google.com/file/d/1Sn2sq1NcrFY8VLG4H6JwyQLxjxGYvuja/view", // Placeholder, replace with actual resume path or link
};

export const educationData: TimelineEvent[] = [
  {
    id: "edu1",
    date: "2024 - 2026",
    title: "Master of Computer Applications (AIML) - Pursuing",
    subtitle: "Ramdeobaba College of Engineering and Management, Nagpur",
    description: "Data Analytics | Data Science | Machine Learning | Deep Learning | Artificial Intelligence | Robotic Process Automation",
    icon: GraduationCap,
  },
  {
    id: "edu2",
    date: "2021 - 2024",
    title: "Bachelor of Commerce (Computer Applications)",
    subtitle: "City Premiere College, Nagpur",
    description: "Graduated with a focus on computer applications, accounts and management principles.",
    icon: GraduationCap,
  },
];

export const experienceData: TimelineEvent[] = [
  {
    id: "exp1",
    date: "June 2025",
    title: "RPA and SD Intern - Present",
    subtitle: "Great Place IT Services.",
    description: "Learning about Robotic Process Automation with Power Automate. Gaining hands-on experience in software development and automation processes.",
    icon: Briefcase,
  },
  {
    id: "exp2",
    date: "March 2023 - May 2023",
    title: "Wordpress Fullstack Developer Intern",
    subtitle: "Clustor Computing",
    description: "Learned Fullstack Development with WordPress, focusing on both front-end and back-end development. Gained experience in building and managing WordPress sites.",
    icon: Briefcase,
  },
];

export const skillsData: SkillsCategory[] = [
  {
    categoryName: "Programming & Data",
    skills: [
      { name: "Python", level: 90, icon: "Code" },
      { name: "SQL", level: 85, icon: "Database" },
      { name: "Pandas", level: 80, icon: "Code" },
      { name: "NumPy", level: 75, icon: "Code" },
      { name: "Scikit-learn", level: 70, icon: "Brain" },
      { name: "TensorFlow", level: 65, icon: "Brain" },
    ],
  },
  {
    categoryName: "Tools & Platforms",
    skills: [
      { name: "Power BI", level: 80, icon: "Database" },
      { name: "UiPath", level: 60, icon: "Bot" },
      { name: "Power Automate", level: 55, icon: "Bot" },
      { name: "Google Firebase Studio", level: 70, icon: "Database" },
      { name: "GitHub", level: 85, icon: "Github" }, // Github (string name)
    ],
  },
  {
    categoryName: "Web Development",
    skills: [
      { name: "HTML", level: 70, icon: "Code" },
      { name: "CSS", level: 65, icon: "Palette" },
      { name: "JavaScript", level: 60, icon: "Code" },
      { name: "React/Next.js", level: 50, icon: "Code" },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "proj1",
    title: "Data Science - Fraud Detection in Financial Transactions",
    category: "Data Science & ML",
    description: "Developed a robust system to identify fraudulent transactions using machine learning algorithms.",
    thumbnailUrl: "/DataScience.png",
    dataAiHint: "data graph",
    tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Data Preprocessing", "Feature Engineering"],
    githubUrl: "https://github.com/Shivranjan-Jogwar/Data-Science---Financial-Fraud-Detection-Project",
  },
  {
    id: "proj2",
    title: "Data Science - Twitter Sentiment Analysis",
    category: "Data Science and Natural Language Processing",
    description: "This project focuses on binary sentiment classification (positive vs. negative) of tweets.",
    thumbnailUrl: "/Twitter.jpg",
    dataAiHint: "dashboard interface",
    tools: ["Machine Learning","NLP","Sentiment Analysis","XGBoost","Naive Bayes","Logistic Regression"],
    githubUrl: "https://github.com/Shivranjan-Jogwar/Brainwave_Matrix_Intern",
  },
  {
    id: "proj3",
    title: "AI - Resume ATS Score Calculator",
    category: "Artificial Intelligence",
    description: "Developed an AI-powered tool to analyze resumes and calculate ATS (Applicant Tracking System) scores.",
    thumbnailUrl: "/AI.jpg",
    dataAiHint: "Resume ATS",
    tools: ["Flask","Python","HTML","Tailwind - CSS","JavaScript","Jinja2","PyPDF2"],
    githubUrl: "https://github.com/Shivranjan-Jogwar/AI---Resume-ATS-Calculator",
  },
  {
    id: "proj4",
    title: "College Website Full Stack Web Development",
    category: "Full Stack Web Development",
    description: "Developed a comprehensive college website using full-stack web development tools and technologies.",
    thumbnailUrl: "/FullStack.png",
    dataAiHint: "Website code",
    tools: ["HTML","CSS","JavaScript","PHP","MySQL","Wamp Server"],
    githubUrl: "https://github.com/Shivranjan-Jogwar/College-Website-Full-Stack-Web-Development",
  },
  {
    id: "proj5",
    title: "Power Automate - Automated Website Logins, Downloads, and File Handling",
    category: "Robotic Process Automation",
    description: "Automated a full workflow using Power Automate Desktop, transforming a multi-step manual processes.",
    thumbnailUrl: "/PowerAutomate.png",
    dataAiHint: "website code",
    tools: ["Power Automate Desktop", "Web Automation", "File Handling", "MS-Excel"],
    githubUrl: "https://www.linkedin.com/posts/shivranjanjogwar_powerautomate-rpa-automation-activity-7333206911175036946-sVMc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD51_TMB4WiTOdXqZZaTy0FcSuVL262PCVw",
  },
];

export const projectCategories: string[] = [
  "All",
  ...new Set(projectsData.map(p => p.category))
];
