import josaa from '../assets/img/josaa.png';
import Fridayyai from '../assets/img/Fridayyai.png';
import DonarConceriage from '../assets/img/DonarConceriage.png';
import CleaverEducationSolutions from '../assets/img/CleaverEducationSolutions.png';
import DIMS from '../assets/img/DIMS.png';

export const profile = {
  name: 'Pragalbh',
  fullName: 'Pragalbh Srivastav',
  role: 'Frontend Developer',
  focus: 'React.js, TypeScript & AI interfaces',
  location: 'Gurugram, Haryana',
  email: 'shaineyshrivastava@gmail.com',
  phone: '+91 75638 02474',
  linkedin: 'https://www.linkedin.com/in/pragalbh-srivastav-762a95189',
  github: 'https://github.com/pragalbhsrivastav',
  resume:
    'https://drive.google.com/file/d/1nTcvaIJQRiwgQiVVfotxCSGKWLeubCTr/view?usp=sharing',
  summary:
    'Frontend Developer with 4+ years building responsive, high-performance web applications with React.js, TypeScript, Next.js and Redux. I integrate REST and LLM APIs, ship reusable component libraries, build AI-powered chat and content interfaces, and debug production issues end to end — currently expanding into backend with Node.js, Express and PostgreSQL.',
  pitch:
    'I believe the best products come from engineers who care about the details. When we work together, you get more than a pair of hands — you get someone who owns the bug, the edge case and the launch.',
};

export const stats = [
  { value: '4+', label: 'Years experience' },
  { value: '50+', label: 'Reusable components' },
  { value: '3', label: 'AI products shipped' },
  { value: '5', label: 'Enterprise platforms' },
];

export const skillGroups = [
  {
    title: 'Core',
    items: ['React.js', 'Component Architecture', 'Hooks', 'Performance Optimization', 'Debugging'],
  },
  {
    title: 'AI & LLM',
    items: ['LLM API Integration', 'Conversational / Chat UI', 'Prompt Engineering', 'Agent-driven UI Actions', 'AI-assisted Dev (Claude Code, Copilot)'],
  },
  { title: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript'] },
  {
    title: 'Frontend',
    items: ['Next.js', 'Redux Toolkit', 'Zustand', 'Redux-Saga', 'Material UI', 'Tailwind CSS', 'shadcn/ui', 'SCSS', 'Preact', 'Angular'],
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
  'React.js', 'TypeScript', 'Next.js', 'LLM APIs', 'Redux Toolkit', 'Chat UI', 'Zustand',
  'Material UI', 'Tailwind CSS', 'Preact', 'shadcn/ui', 'Node.js', 'Claude Code',
  'Express.js', 'PostgreSQL', 'REST APIs', 'Vite', 'Git',
];

export const experience = [
  {
    company: 'Bellurbis Technologies',
    short: 'Bellurbis',
    role: 'Software Developer',
    period: 'Jan 2025 – Present',
    year: '2025',
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
    company: 'IIT Delhi',
    short: 'IIT Delhi',
    role: 'Freelance Frontend Developer',
    period: 'Jul 2024 – Dec 2024',
    year: '2024',
    location: 'Remote',
    points: [
      'Independent contract engagement — built and supported a rank-based college recommendation platform, owning debugging and resolution with no escalation path.',
      'Diagnosed real-time data fetching issues, REST API failures and rendering inconsistencies in live production.',
      'Implemented responsive UI, interactive dashboards and PDF generation with React.js, Tailwind CSS and Node.js APIs.',
      'Documented technical solutions and system behavior for client handover.',
    ],
    stack: ['React.js', 'Tailwind CSS', 'Node.js', 'PDF generation'],
  },
  {
    company: 'Datagain',
    short: 'Datagain',
    role: 'Software Developer',
    period: 'Oct 2022 – May 2024',
    year: '2022',
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
    short: 'Qualitest',
    role: 'Software Developer',
    period: 'Nov 2021 – Aug 2022',
    year: '2021',
    location: 'Noida',
    points: [
      'Built healthcare and education UIs in React.js and Material UI with secure login and access control.',
      'Contributed to bug fixing, regression testing and Agile sprint planning.',
      'Analyzed system behavior and user feedback to maintain application reliability.',
    ],
    stack: ['React.js', 'Material UI', 'QA'],
  },
];

export const liveProjects = [
  {
    title: 'JoSAA Help',
    blurb: 'Rank-based college recommendation platform with state-wise filtering, side-by-side comparison and closing-rank trend charts.',
    imgUrl: josaa,
    link: 'https://josaa-psi.vercel.app/',
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
    title: 'SC2 — Signal Command & Control',
    org: 'Bellurbis',
    year: '2025',
    blurb: 'RF planning tool. Resolved layer rendering for offline base maps, Clutter/DTM overlays and coverage analysis; built site placement, Microwave/LOS analysis and Automatic Node Placement modules.',
    stack: ['React.js', 'TypeScript', 'Vinxi', 'Vite'],
  },
  {
    title: 'E-Gate',
    org: 'Bellurbis',
    year: '2025',
    blurb: 'Digital permit and quota management platform — role-based access, payment workflows and API routes.',
    stack: ['React.js', 'Material UI'],
  },
  {
    title: 'Pretrial & Case Management',
    org: 'Datagain',
    year: '2023',
    blurb: 'Enterprise legal workflow platform — timeline scheduling UIs and real-time state flows.',
    stack: ['React.js', 'Redux', 'Redux-Saga'],
  },
  {
    title: 'ZOIE — ESG Platform',
    org: 'Datagain',
    year: '2023',
    blurb: 'ESG reporting platform — dashboards and data filter modules with compliance tracking.',
    stack: ['Angular 16', 'TypeScript'],
  },
];

export const aiWork = [
  {
    title: 'Mishti',
    tag: 'AI shopping assistant',
    org: 'Freelance',
    link: 'https://www.xn--mfoyou-bua.com/',
    blurb:
      'Embeddable AI chat agent for a Shopify storefront, shipped as a single drop-in script. Markdown replies, image grids, file and camera attachments, voice notes with waveform scrubbing — and the agent can act on the shopper’s real cart through Shopify’s native Cart API.',
    highlights: ['Shadow DOM isolation', 'Agent-driven cart actions', 'Voice + file input', 'Session persistence'],
    stack: ['Preact', 'TypeScript', 'Vite', 'Tailwind CSS', 'Shopify'],
  },
  {
    title: 'Fridayy.ai',
    tag: 'Generative AI for e-commerce',
    org: 'Product',
    link: 'https://app.fridayy.ai/',
    blurb:
      'Frontend for generative AI tooling — product background generation, automated catalogs and SEO-friendly descriptions, built around upload → generate → review flows for long-running AI jobs.',
    highlights: ['AI image generation', 'Async job states', 'Bulk catalog UI'],
    stack: ['React.js', 'TypeScript', 'REST APIs'],
  },
  {
    title: 'nxNearBy',
    tag: 'AI-powered marketplace',
    org: 'Bellurbis',
    link: undefined,
    blurb:
      'Hyperlocal marketplace with AI-assisted discovery. Built SSR listing and search pages, tuned SEO performance and fixed hydration and global state inconsistencies.',
    highlights: ['SSR search', 'SEO performance', 'Hydration fixes'],
    stack: ['Next.js', 'Material UI', 'Redux Toolkit'],
  },
];

export const aiPractice = [
  {
    title: 'LLM-backed interfaces',
    text: 'Chat UIs with markdown and media output, and graceful states for slow or failed model calls.',
  },
  {
    title: 'Agent actions in the UI',
    text: 'The model proposes an action; the client re-reads live state and executes it safely — never on a stale picture.',
  },
  {
    title: 'AI-assisted engineering',
    text: 'Daily use of Claude Code and Copilot for refactors, migrations and scaffolding — reviewed like any other code.',
  },
];

export const process = [
  {
    step: '01',
    title: 'Plan ahead',
    text: 'I start by understanding the product, the users and the API contracts — then break the work into components, states and edge cases before writing code.',
  },
  {
    step: '02',
    title: 'Architect',
    text: 'Reusable, typed component architecture with clear state ownership — Redux Toolkit, Zustand or plain hooks, whichever keeps the system simplest.',
  },
  {
    step: '03',
    title: 'Build & integrate',
    text: 'Responsive UI wired to REST and LLM APIs, with loading, empty and error states treated as first-class features.',
  },
  {
    step: '04',
    title: 'Ship & support',
    text: 'Lazy loading, code splitting and profiling before launch; DevTools and log analysis after it. I own bugs through to the fix.',
  },
];

export const faqs = [
  {
    q: 'Are you open to new roles?',
    a: 'Yes — I am open to frontend and full-stack roles, as well as contract work. Email is the fastest way to reach me; I reply within a day.',
  },
  {
    q: 'Can you build AI features into an existing product?',
    a: 'Yes. I have shipped an AI shopping agent, generative content flows and AI-assisted search UIs, integrating LLM APIs into React and Preact frontends.',
  },
  {
    q: 'What is your core stack?',
    a: 'React.js and TypeScript, with Next.js, Redux Toolkit, Material UI and Tailwind CSS. On the backend I work with Node.js, Express and PostgreSQL.',
  },
  {
    q: 'Do you work remotely?',
    a: 'I am based in Gurugram, Haryana and work both on-site and remotely — my IIT Delhi engagement was fully remote.',
  },
];

export const education = {
  degree: 'B.Tech — Computer Science Engineering',
  school: 'Roorkee College of Engineering, Uttarakhand',
  detail: 'CGPA 7.2 / 10',
};

export const navLinks = [
  { id: 'work', label: 'Works' },
  { id: 'ai', label: 'AI' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];
