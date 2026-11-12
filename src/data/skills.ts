export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: 'proficient' | 'learning' | 'familiar';
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Python Data',
    icon: 'python',
    skills: [
      { name: 'Python', level: 'proficient' },
      { name: 'Pandas', level: 'proficient' },
      { name: 'NumPy', level: 'proficient' },
      { name: 'SQL', level: 'proficient' },
      { name: 'Matplotlib/Seaborn', level: 'learning' },
    ],
  },
  {
    name: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Node.js', level: 'proficient' },
      { name: 'Express/Fastify', level: 'learning' },
      { name: 'REST APIs', level: 'proficient' },
      { name: 'PostgreSQL', level: 'learning' },
    ],
  },
  {
    name: 'Ferramentas',
    icon: 'tools',
    skills: [
      { name: 'Git', level: 'proficient' },
      { name: 'Docker', level: 'learning' },
      { name: 'Linux/CLI', level: 'proficient' },
      { name: 'VS Code', level: 'proficient' },
    ],
  },
  {
    name: 'Infra & Cloud',
    icon: 'cloud',
    skills: [
      { name: 'GitHub Actions', level: 'learning' },
      { name: 'AWS (básico)', level: 'familiar' },
      { name: 'CI/CD', level: 'learning' },
    ],
  },
];

export const iconSVGs: Record<string, string> = {
  python: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  server: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  tools: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
};