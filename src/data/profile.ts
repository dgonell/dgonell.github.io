export const profile = {
  name: 'Dariel Gonell',
  role: 'Software Developer',
  country: 'Dominican Republic',
  location: 'Dominican Republic',
  photo: '',
  email: 'darieagonell@gmail.com',
  github: 'https://github.com/dgonell',
  linkedin: 'https://www.linkedin.com/in/dariel-gonell-028849240/',
  whatsapp: 'https://wa.me/18293547264',
  headline: 'I build software around real business problems.',
  intro:
    'Software developer building web applications, business systems, and digital products — from interface to infrastructure.',
}

export const socialLinks = [
  { label: 'GitHub', value: profile.github },
  { label: 'LinkedIn', value: profile.linkedin },
  { label: 'Email', value: profile.email ? `mailto:${profile.email}` : '' },
  { label: 'WhatsApp', value: profile.whatsapp },
]
