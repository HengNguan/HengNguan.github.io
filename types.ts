export interface Education {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  details?: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  techStack?: string[];
}

export interface Project {
  title: string;
  subtitle?: string;
  period: string;
  description: string;
  techStack: string[];
  link?: string;
  repo?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}