export interface UserProps {
  name: string;
  position?: string;
  username?: string;
  avatarUrl?: string;
  githubUsername?: string;
  email?: string;
  phone?: string;
  location?: string;
  resumeUrl?: string;
  resumeName?: string;
}

export interface Project {
  title: string;
  desc: string;
  img?: string;
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
