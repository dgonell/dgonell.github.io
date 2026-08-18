export type ProjectCategory =
  'Software' | 'Mobile' | 'Enterprise' | 'Web' | 'WordPress' | 'Experiments'

export interface Project {
  id: string
  slug: string
  title: string
  eyebrow: string
  description: string
  technologies: string[]
  category: ProjectCategory
  featured: boolean
  number: string
  tone: 'blue' | 'sand' | 'ink' | 'sage' | 'violet'
  problem: string
  solution: string
  features: string[]
  gallery: string[]
}

export interface SkillGroup {
  id: string
  label: string
  skills: string[]
}
