import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'core',
    slug: 'core-pos',
    title: 'CORE POS RD',
    eyebrow: 'Sistema empresarial · POS',
    description:
      'Plataforma integral de punto de venta que conecta ventas, inventario, compras, caja y control financiero.',
    technologies: ['Vue 3', 'TypeScript', 'Laravel 12', 'MariaDB'],
    category: 'Enterprise',
    featured: true,
    number: '01',
    tone: 'blue',
    problem:
      'Las operaciones comerciales pierden control cuando ventas, existencias, compras y obligaciones financieras viven en procesos separados.',
    solution:
      'Un ecosistema modular que conecta el mostrador con inventario, proveedores, cuentas por cobrar y pagar, auditoría y respaldo operativo.',
    features: [
      'Ventas y devoluciones',
      'Inventario y variantes',
      'Compras',
      'Caja',
      'Cuentas por cobrar/pagar',
      'Roles y auditoría',
    ],
    gallery: ['/images/projects/core-pos.png'],
  },
  {
    id: 'admin',
    slug: 'transport-admin',
    title: 'Transport Operations',
    eyebrow: 'Plataforma empresarial · Operaciones',
    description:
      'Sistema administrativo que unifica conductores, flota, mantenimiento, combustible, finanzas y facturación.',
    technologies: ['Vue 3', 'Laravel 13', 'PHP', 'REST API'],
    category: 'Enterprise',
    featured: true,
    number: '02',
    tone: 'ink',
    problem:
      'La administración del transporte depende de procesos interconectados que suelen operar de manera fragmentada.',
    solution:
      'Una plataforma modular para gestionar el ciclo operativo completo con históricos, controles, permisos, notificaciones y reportes.',
    features: [
      'Gestión de conductores',
      'Flota y mantenimiento',
      'Control de combustible',
      'Finanzas y facturas',
      'Usuarios y permisos',
      'Notificaciones',
    ],
    gallery: ['/images/projects/transport-operations.png'],
  },
  {
    id: 'aetrasis',
    slug: 'aetrasis',
    title: 'AetraSis',
    eyebrow: 'Web + Mobile · Transporte',
    description:
      'Venta de tickets, gestión de rutas y validación de abordaje mediante una experiencia conectada entre web y móvil.',
    technologies: ['Vue 3', 'Laravel', 'Expo', 'React Native'],
    category: 'Software',
    featured: true,
    number: '03',
    tone: 'sage',
    problem:
      'La venta, el control de caja y la validación de pasajeros necesitan compartir información confiable en tiempo real.',
    solution:
      'Una plataforma web de operación y ventas acompañada por una aplicación móvil para escaneo y validación QR.',
    features: [
      'Venta de tickets',
      'Rutas y turnos',
      'Sesiones de caja',
      'Escaneo QR',
      'Abordaje',
      'Auditoría',
    ],
    gallery: ['/images/projects/aetrasis.png'],
  },
  {
    id: 'financia',
    slug: 'financia-pro',
    title: 'Financia Pro Plus',
    eyebrow: 'Producto móvil · Finanzas',
    description:
      'Aplicación local-first para ventas, financiamientos, cobros, documentos y seguimiento comercial.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
    category: 'Mobile',
    featured: true,
    number: '04',
    tone: 'sand',
    problem:
      'Las ventas financiadas requieren seguimiento preciso incluso en contextos donde la conexión no es permanente.',
    solution:
      'Una aplicación móvil offline con repositorios locales, seguridad, reportes, pagos, devoluciones, PDF y respaldos.',
    features: [
      'Ventas financiadas',
      'Pagos y devoluciones',
      'Reportes',
      'Documentos PDF',
      'Notificaciones',
      'PIN y biometría',
    ],
    gallery: ['/images/projects/financia-pro.png'],
  },
  {
    id: 'odoo',
    slug: 'odoo-trips',
    title: 'Bus Freight Invoice',
    eyebrow: 'ERP · Operaciones',
    description:
      'Extensión de Odoo que conecta cotización de viajes, planificación operativa y documentos contables.',
    technologies: ['Odoo', 'Python', 'PostgreSQL', 'Docker'],
    category: 'Enterprise',
    featured: true,
    number: '05',
    tone: 'violet',
    problem:
      'La planificación de viajes debe permanecer conectada con la cotización, los costos y la facturación.',
    solution:
      'Un módulo ERP que extiende ventas y contabilidad con viajes, destinos, configuraciones y controles de acceso.',
    features: [
      'Cotizaciones',
      'Viajes y destinos',
      'Costos internos',
      'Facturación',
      'Configuración',
      'Control de acceso',
    ],
    gallery: [],
  },
  {
    id: 'grey',
    slug: 'grey-system',
    title: 'Grey Sistem',
    eyebrow: 'Aplicación web · Comunidad',
    description:
      'Sistema full-stack para organizar miembros, familias, ministerios, reuniones y accesos.',
    technologies: ['Vue 3', 'FastAPI', 'Python', 'PostgreSQL'],
    category: 'Web',
    featured: true,
    number: '06',
    tone: 'blue',
    problem:
      'Las organizaciones comunitarias necesitan estructura sin introducir procesos administrativos pesados.',
    solution:
      'Una aplicación web protegida que organiza las relaciones fundamentales de la comunidad y sus usuarios.',
    features: ['Miembros', 'Familias', 'Ministerios', 'Reuniones', 'Usuarios', 'Acceso protegido'],
    gallery: [],
  },
]
export const featuredProjects = projects.slice(0, 4)
export const projectCategories = [
  'All',
  'Web',
  'Software',
  'Mobile',
  'Enterprise',
  'WordPress',
  'Experiments',
] as const
