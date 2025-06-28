export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number; // 1-10
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}