export type ProjectStatus = "COMPLETED" | "IN_PROGRESS" | "ARCHIVED";

export interface Project {
  id: string;
  codename: string;
  title: string;
  excerpt: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  techStack: string[];
  status: ProjectStatus;
  year: number;
  link?: string;
  github?: string;
}

export type SkillCategory = "languages" | "frameworks" | "backend" | "database" | "mobile";

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export type ExperienceStatus = "COMPLETED" | "IN_PROGRESS";

export interface Experience {
  id: string;
  codename: string;
  title: string;
  excerpt: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  techStack: string[];
  status: ExperienceStatus;
  year: number;
  duration: string;
  company: string;
  link?: string;
}

export interface Socials {
  linkedIn: string;
  github: string;
  x: string;
  email: string;
  facebook: string;
  instagram: string;
}
