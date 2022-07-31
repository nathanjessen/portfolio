export interface UserData {
  githubUsername: string;
  name: string;
  designation: string;
  avatarUrl: string;
  email: string;
  phone: string;
  address: string;
  projects: Project[];
  about: About;
  experience: Experience[];
  resumeUrl: string;
  socialLinks: SocialLinks;
}

export interface SocialLinks {
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
  dribbble?: string;
  angellist?: string;
  codepen?: string;
  medium?: string;
}

export interface Experience {
  title: string;
  company: string;
  year: string;
  companyLink: string;
  desc: string;
}

export interface About {
  title: string;
  description: string[];
  currentProject: string;
  currentProjectUrl: string;
}

export interface Project {
  title: string;
  img?: string;
  desc: string;
  source?: string;
  url?: string;
  docs?: string;
  tech: string[];
  company?: string;
  client?: string;
  date: string;
  dateRange?: string[];
  archived?: boolean;
  featured?: boolean;
  published?: boolean;
}
