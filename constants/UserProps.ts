export interface UserProps {
  githubUsername: string;
  name: string;
  designation: string;
  avatarUrl: string;
  email: string;
  phone: string;
  address: string;
  resumeUrl: string;
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
