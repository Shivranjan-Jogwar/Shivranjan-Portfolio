
import type { LucideIcon } from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
  icon?: LucideIcon;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
  level: number; // Percentage 0-100
  icon?: string; // Changed from LucideIcon | string to just string for icon names
}

export interface SkillsCategory {
  categoryName: string;
  skills: Skill[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  icon?: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnailUrl: string;
  tools: string[];
  githubUrl?: string;
  liveUrl?: string;
  dataAiHint?: string;
}
