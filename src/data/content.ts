import josaa from '../assets/img/josaa.png';
import Fridayyai from '../assets/img/Fridayyai.png';
import DonarConceriage from '../assets/img/DonarConceriage.png';
import CleaverEducationSolutions from '../assets/img/CleaverEducationSolutions.png';
import DIMS from '../assets/img/DIMS.png';

export const profile = {
  name: 'Pragalbh',
  role: 'Frontend Developer',
  focus: 'React.js & TypeScript',
  location: 'Gurugram, Haryana',
  email: 'shaineysrivastav@gmail.com',
  phone: '+91 75638 02474',
  linkedin: 'https://www.linkedin.com/in/pragalbh-srivastav-762a95189',
  github: 'https://github.com/pragalbhad',
  resume:
    'https://drive.google.com/file/d/1e56N47Uh-kvwZnB3t3Hyec45tkk4SOFF/view?usp=sharing',
  summary:
    'Frontend Developer with 3.6+ years building responsive, high-performance web applications with React.js, TypeScript, Next.js and Redux. I integrate REST APIs, ship reusable component libraries, and debug production issues end to end — currently expanding into backend with Node.js, Express and PostgreSQL.',
};

export const stats = [
  { value: '3.6+', label: 'Years experience' },
  { value: '50+', label: 'Reusable components' },
  { value: '5', label: 'Enterprise platforms' },
  { value: '0', label: 'Escalations on IIT Delhi build' },
];

export const skillGroups = [
  {
    title: 'Core',
    items: ['React.js', 'Component Architecture', 'Hooks', 'Performance Optimization', 'Debugging'],
  },
  { title: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript'] },
  {
    title: 'Frontend',
    items: ['Next.js', 'Redux Toolkit', 'Zustand', 'Redux-Saga', 'Material UI', 'Tailwind CSS', 'shadcn/ui', 'SCSS', 'Angular'],
  },
  { title: 'APIs & Async', items: ['REST APIs', 'Promises', 'async/await', 'Postman'] },
  { title: 'Backend & Data', items: ['Node.js', 'Express.js', 'PostgreSQL', 'SQL', 'NoSQL concepts'] },
  {
    title: 'Troubleshooting',
    items: ['Browser DevTools', 'Performance Profiling', 'Error Boundaries', 'Log Analysis'],
  },
  { title: 'Tooling', items: ['Git', 'GitHub', 'Jira', 'VS Code', 'Agile/Scrum', 'Vite'] },
];

export const marqueeSkills = [
  'React.js', 'TypeScript', 'Next.js', 'Redux Toolkit', 'Redux-Saga', 'Zustand',
  'Material UI', 'Tailwind CSS', 'shadcn/ui', 'SCSS', 'Angular', 'Node.js',
  'Express.js', 'PostgreSQL', 'REST APIs', 'Vite', 'Git',
];

export const experience = [
  {
    company: 'Bellurbis Technologies',
    role: 'Software Developer',
    period: 'Jan 2025 – Present',
    location: 'Gurugram',
    current: true,
    points: [
      'Built and maintained a library of 50+ reusable React.js components with TypeScript, Material UI and Redux Toolkit, cutting feature development time and recurring bugs.',
      'Acted as first-line investigator for UI bugs and system issues using DevTools and log analysis, shipping fixes with minimal downtime.',
      'Developed modules for role-based access control, payment integration and notes management — integrating REST APIs end to end.',
      'Optimized performance via lazy loading, code splitting and modular architecture.',
      'Mentored junior developers on component best practices, debugging and code review.',
    ],
    stack: ['React.js', 'TypeScript', 'Next.js', 'Material UI', 'Redux Toolkit', 'Tailwind CSS'],
  },
  {
    company: 'Datagain',
    role: 'Software Developer',
    period: 'Oct 2022 – May 2024',
    location: 'Gurugram',
    points: [
      'Developed enterprise legal management systems with React.js, Redux and Redux-Saga, monitoring real-time case-tracking UIs.',
      'Resolved complex state management bugs across Redux + Saga flows, reducing production incidents.',
      'Integrated REST APIs and diagnosed failures at the API–UI boundary with backend teams.',
      'Contributed to Agile sprints — issue triage, code reviews and solution planning.',
    ],
    stack: ['React.js', 'Redux', 'Redux-Saga', 'REST APIs'],
  },
  {
    company: 'Qualitest',
    role: 'Software Developer',
    period: 'Nov 2021 – Aug 2022',
    location: 'Noida',
    points: [
      'Built healthcare and education UIs in React.js and Material UI with secure login and access control.',
      'Contributed to bug fixing, regression testing and Agile sprint planning.',
      'Analyzed system behavior and user feedback to maintain application reliability.',
    ],
    stack: ['React.js', 'Material UI', 'QA'],
  },
];

export const freelance = {
  company: 'IIT Delhi',
  role: 'Freelance Frontend Developer (Contract)',
  period: 'Jul 2024 – Dec 2024',
  location: 'Remote',
  points: [
    'Independent contract engagement — built and supported a rank-based college recommendation platform, owning debugging and resolution with no escalation path.',
    'Diagnosed real-time data fetching issues, REST API failures and rendering inconsistencies in live production.',
    'Implemented responsive UI, interactive dashboards and PDF generation with React.js, Tailwind CSS and Node.js APIs.',
    'Documented technical solutions and system behavior for client handover.',
  ],
  stack: ['React.js', 'Tailwind CSS', 'Node.js', 'PDF generation'],
};

export const liveProjects = [
  {
    title: 'JoSAA Help',
    blurb: 'Rank-based college recommendation platform with state-wise filtering, side-by-side comparison and closing-rank trend charts.',
    imgUrl: josaa,
    link: 'https://josaa-aegeg3u10-pragalbhs-projects-0805328a.vercel.app/',
    stack: ['React.js', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'Fridayy.ai',
    blurb: 'AI tooling for e-commerce content — background generation, automated catalogs and SEO-friendly product descriptions.',
    imgUrl: Fridayyai,
    link: 'https://app.fridayy.ai/',
    stack: ['React.js', 'TypeScript', 'REST APIs'],
  },
  {
    title: 'Donor Concierge',
    blurb: 'Donor matching and consulting platform with search, filtering and content-driven pages.',
    imgUrl: DonarConceriage,
    link: 'https://www.donorconcierge.com/',
    stack: ['React.js', 'REST APIs'],
  },
  {
    title: 'Clever Education Solutions',
    blurb: 'Education services site with responsive layouts and content management across multiple programs.',
    imgUrl: CleaverEducationSolutions,
    link: 'https://clevereducationsolutions.com/',
    stack: ['React.js', 'Bootstrap'],
  },
  {
    title: 'DIMS',
    blurb: 'Services platform with dashboard views and API-driven data flows.',
    imgUrl: DIMS,
    link: 'https://dimsservices.com/',
    stack: ['React.js', 'Material UI'],
  },
];

export const enterpriseProjects = [
  {
    title: 'SC2 — Signal Command & Control Center',
    org: 'Bellurbis',
    blurb: 'RF planning tool. Resolved layer rendering for offline base maps, Clutter/DTM overlays and coverage analysis; built site placement, Microwave/LOS analysis and Automatic Node Placement modules.',
    stack: ['React.js', 'TypeScript', 'Vinxi', 'Vite'],
  },
  {
    title: 'nxNearBy',
    org: 'Bellurbis',
    blurb: 'AI-powered hyperlocal marketplace. Built SSR listing and search pages, monitored SEO performance and fixed hydration plus global state inconsistencies.',
    stack: ['React.js', 'Next.js', 'Material UI', 'Redux Toolkit'],
  },
  {
    title: 'E-Gate',
    org: 'Bellurbis',
    blurb: 'Digital permit and quota management platform — role-based access, payment workflows and API routes.',
    stack: ['React.js', 'Material UI'],
  },
  {
    title: 'Pretrial & Case Management',
    org: 'Datagain',
    blurb: 'Enterprise legal workflow platform — timeline scheduling UIs and real-time state flows.',
    stack: ['React.js', 'Redux', 'Redux-Saga'],
  },
  {
    title: 'ZOIE — ESG Platform',
    org: 'Datagain',
    blurb: 'ESG reporting platform — dashboards and data filter modules with compliance tracking.',
    stack: ['Angular 16', 'TypeScript'],
  },
];

export const education = {
  degree: 'B.Tech — Computer Science Engineering',
  school: 'Roorkee College of Engineering, Uttarakhand',
  detail: 'CGPA 7.2 / 10',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];
