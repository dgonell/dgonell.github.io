import type { SkillGroup } from '@/types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      'Vue 3',
      'React',
      'Inertia.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML5 / CSS3',
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Python', 'FastAPI', 'Flask', 'PHP', 'Laravel', 'REST APIs', 'SQLAlchemy'],
  },
  {
    id: 'data',
    label: 'Databases',
    skills: [
      'SQL Server',
      'PostgreSQL',
      'MariaDB',
      'MySQL',
      'SQLite',
      'IndexedDB',
      'Dexie',
      'sql.js',
    ],
  },
  {
    id: 'infra',
    label: 'Infrastructure',
    skills: [
      'Docker',
      'Git / GitHub',
      'Windows Server',
      'Linux / Ubuntu',
      'PowerShell',
      'Active Directory',
      'GPO',
      'VLAN',
    ],
  },
  {
    id: 'platforms',
    label: 'Platforms',
    skills: [
      'WordPress',
      'Elementor',
      'ACF',
      'Odoo',
      'Electron',
      'Expo',
      'React Native',
      'Microsoft 365',
    ],
  },
]
