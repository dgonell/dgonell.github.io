export default {
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    work: 'Work',
    contact: 'Contact',
    talk: "Let's talk",
    menu: 'Open menu',
    close: 'Close menu',
  },
  hero: {
    hello: "Hello, I'm",
    location: 'Dominican Republic · Remote',
    titleStart: 'I turn real problems into',
    titleAccent: 'useful software.',
    headline: 'Software Developer building digital solutions for real-world problems.',
    description:
      'I build web applications, business systems, and digital products by combining software development, databases, and real-world IT experience.',
    work: 'Explore my work',
    talk: "Let's talk",
    available: 'Available to collaborate',
    proofLabel: 'Professional overview',
    years: 'years building solutions',
    products: 'featured products',
    scope: 'from interface to infrastructure',
    cardLabel: 'How I work',
    cardTitle: 'Understand. Design. Build.',
    cardOne: 'Listen to the operation',
    cardTwo: 'Simplify complexity',
    cardThree: 'Deliver maintainable solutions',
    visual: 'Abstract representation of software, data, and infrastructure',
  },
  about: {
    label: 'About me',
    title: 'Software built with the whole environment in mind.',
    p1: "I'm a software developer from the Dominican Republic with experience building applications and working directly with technology infrastructure and business operations.",
    p2: "For me, development is not just about making something work. It is about understanding people, simplifying their work, and creating tools that genuinely make their day easier.",
    p3: 'I focus on practical, maintainable software designed around real needs.',
    quote: 'My advantage is understanding both the code and the human, operational environment where it is used.',
  },
  services: {
    label: 'What I do',
    title: 'From the problem to a working solution.',
    items: [
      {
        title: 'Software Development',
        copy: 'Business applications, internal systems, and custom software.',
      },
      { title: 'Web Development', copy: 'Modern websites and responsive web applications.' },
      { title: 'Systems & Integrations', copy: 'APIs, databases, and enterprise integrations.' },
      {
        title: 'IT & Automation',
        copy: 'Infrastructure-oriented tools, automation, and technical solutions.',
      },
    ],
  },
  skills: {
    label: 'Skills & technologies',
    title: 'A practical toolkit across the stack.',
    intro: 'I work across product layers, choosing technology around the problem.',
    groups: [
      { title: 'Frontend Development', items: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS'] },
      { title: 'Backend Development', items: ['Python', 'FastAPI', 'Laravel', 'PHP'] },
      { title: 'Database Design', items: ['SQL Server', 'MariaDB', 'PostgreSQL', 'SQLite'] },
      { title: 'Tools & Platforms', items: ['Git', 'Docker', 'WordPress', 'Odoo'] },
    ],
    view: 'View all skills',
    modalTitle: 'Complete toolkit',
    modalIntro:
      'Technologies and platforms I have worked with across software, data, infrastructure, and delivery.',
  },
  experience: {
    label: 'Experience',
    title: 'Technology in a real business environment.',
    company: 'Bojos Tanning, Inc.',
    area: 'IT / Technology / Infrastructure',
    summary:
      'Enterprise support, infrastructure, networks, databases, automation, internal systems, and technical problem solving.',
    view: 'View experience',
    modalTitle: 'Professional experience',
    details:
      'Working close to users and operations has given me a practical view of how technology succeeds—or fails—inside a company.',
    responsibilities: 'Areas of responsibility',
    responsibilityItems: [
      'Windows infrastructure and Active Directory',
      'Microsoft 365 and enterprise support',
      'Networks, troubleshooting, and incident resolution',
      'Databases, Power BI, and internal tools',
      'Automation, monitoring, and technical documentation',
    ],
  },
  career: {
    title: 'Software, design, and technology in real environments.',
    view: 'View experience',
    modalTitle: 'Professional experience',
    responsibilities: 'Areas of responsibility',
    items: [
      {
        id: 'diagonal',
        period: '2025 — Present',
        company: 'Diagonal D',
        area: 'Freelance Web Developer',
        summary: 'Modern, responsive, and performance-focused web interface development.',
        details:
          'I develop and implement modern web interfaces with an emphasis on usability, responsive design, and performance, coordinating with design and backend teams.',
        responsibilities: [
          'Frontend implementation',
          'Responsive interface development',
          'Web performance optimization',
          'Collaboration with design teams',
          'Coordination with backend development',
        ],
      },
      {
        id: 'bojos',
        period: 'Current',
        company: 'Bojos Tanning, Inc.',
        area: 'IT / Technology / Infrastructure',
        summary:
          'Enterprise support, infrastructure, networks, databases, automation, and internal systems.',
        details:
          'Working close to users and operations has given me a practical view of how technology succeeds—or fails—inside a company.',
        responsibilities: [
          'Windows infrastructure and Active Directory',
          'Microsoft 365 and enterprise support',
          'Networks, troubleshooting, and incident resolution',
          'Databases, Power BI, and internal tools',
          'Automation, monitoring, and technical documentation',
        ],
      },
      {
        id: 'mixart',
        period: '2022 — 2024',
        company: 'Mixart',
        area: 'Front-End Developer',
        summary: 'Modern web interfaces focused on user experience and performance.',
        details:
          'I designed and developed modern web interfaces focused on user experience and performance, collaborating directly with design and backend teams.',
        responsibilities: [
          'Frontend development',
          'Modern interface design',
          'User experience implementation',
          'Web performance',
          'Collaboration with design and backend teams',
        ],
      },
    ],
  },
  education: {
    label: 'Education',
    title: 'A foundation in software and systems.',
    items: [
      { school: 'ITLA', degree: 'Higher Technician in Software Development', year: '2024' },
      { school: 'ITLA', degree: 'SQL Server Certification', year: '2025' },
    ],
    more: 'More education',
    modalTitle: 'Additional education',
    additional: [
      'Basic electronics — INFOTEP',
      'Computer maintenance — INFOTEP',
      'Systems analysis and design',
      'Database administration',
      'Web development and related studies',
    ],
  },
  work: {
    label: 'Selected work',
    title: "A few things I've built along the way.",
    intro:
      'Selected projects that demonstrate how I approach business rules, data, interfaces, and operations.',
    preview: 'Interface preview for {project}',
    details: 'View details',
    problem: 'Problem',
    solution: 'Solution',
    features: 'Key features',
    stack: 'Technology',
    close: 'Close project',
    items: {
      core: {
        category: 'Business Software · POS',
        description:
          'A complete point-of-sale platform connecting sales, inventory, purchasing, cash, and financial control.',
        problem:
          'Commercial operations lose control when sales, stock, purchasing, and financial obligations live in separate processes.',
        solution:
          'A modular ecosystem connecting the counter with inventory, suppliers, receivables, payables, auditing, and operational backups.',
        features: [
          'Sales and returns',
          'Inventory and variants',
          'Purchasing and suppliers',
          'Cash control',
          'Receivables and payables',
          'Roles and auditing',
        ],
      },
      admin: {
        category: 'Enterprise · Transportation',
        description:
          'An administrative platform unifying drivers, fleet, maintenance, fuel, finance, and invoicing.',
        problem:
          'Transport administration depends on interconnected processes that often operate in isolation.',
        solution:
          'A modular platform for managing the operational cycle through histories, controls, permissions, notifications, and reporting.',
        features: [
          'Driver lifecycle',
          'Fleet and maintenance',
          'Fuel control',
          'Finance and invoicing',
          'Access control',
          'Notifications',
        ],
      },
      aetrasis: {
        category: 'Web + Mobile · Transportation',
        description:
          'Ticket sales, route management, and boarding validation across connected web and mobile experiences.',
        problem:
          'Sales, cash control, and passenger validation need to share reliable operational information.',
        solution:
          'A web platform for operations and sales paired with a mobile application for QR boarding validation.',
        features: [
          'Ticket sales',
          'Routes and shifts',
          'Cash sessions',
          'QR scanning',
          'Boarding',
          'Auditing',
        ],
      },
      financia: {
        category: 'Mobile · Business Software',
        description:
          'A local-first application for sales, financing, collections, documents, and commercial follow-up.',
        problem:
          'Financed sales require precise tracking even when a permanent connection is unavailable.',
        solution:
          'An offline mobile product with local repositories, security, reporting, payments, returns, PDF documents, and backups.',
        features: [
          'Financed sales',
          'Payments and returns',
          'Reports',
          'PDF documents',
          'Notifications',
          'PIN and biometrics',
        ],
      },
    },
  },
  contact: {
    label: 'Contact',
    title: "Let's build something useful.",
    copy: "Have a project, an idea, or a problem that needs a technical solution? Let's talk.",
    action: 'Contact me',
    pending: 'Add contact details in profile.ts',
  },
  footer: {
    role: 'Software Developer — Dominican Republic',
    built: 'Designed and built by Dariel Gonell.',
  },
  modal: { close: 'Close modal' },
  theme: { label: 'Change color theme' },
  language: { label: 'Cambiar a español' },
  notFound: { title: 'This page does not exist.', home: 'Return home' },
}
