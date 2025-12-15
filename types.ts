
export interface Project {
  title: string;
  role?: string;
  duration?: string;
  tech: string[];
  description: string;
  type: 'Work' | 'Personal' | 'Academic';
  link?: string;     // Source Code Link
  demoLink?: string; // Live Demo Link
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  points: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location?: string;
  year: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}
