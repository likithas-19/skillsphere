export const INITIAL_USER = {
  id: 'usr-101',
  name: 'Likitha S',
  email: 'likitha@example.com',
  role: 'intern', // 'intern' or 'admin'
  college: 'Institute of Software Engineering',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  selectedCourseId: 'web-dev',
  mode: 'quiz', // 'beginner' or 'quiz'
  skillLevel: 'Intermediate',
  overallScore: 78,
  skillsBreakdown: {
    'HTML5 & CSS3': 90,
    'JavaScript ES6+': 75,
    'React.js': 60,
    'REST APIs': 70,
    'Git & GitHub': 85,
    'PostgreSQL': 50
  },
  strengths: ['HTML5 & CSS3', 'Git & GitHub', 'JavaScript ES6+'],
  weakAreas: ['React.js State Management', 'PostgreSQL Databases'],
  completedModulesCount: 2,
  totalModulesCount: 6,
  achievements: [
    { title: 'Project of the Week', icon: '🏆', date: 'Aug 10' },
    { title: 'Fast Learner', icon: '⚡', date: 'Aug 04' },
    { title: 'Quiz Whiz', icon: '⭐', date: 'Aug 01' }
  ]
};

export const INITIAL_ADMIN = {
  id: 'adm-001',
  name: 'Prof. Sharma',
  email: 'admin@skillsphere.edu',
  role: 'admin',
  title: 'Lead Internship Director & Mentor',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
};

export const INITIAL_TASKS = [
  {
    id: 'tsk-01',
    courseId: 'web-dev',
    title: 'Build Responsive Landing Page with Flexbox & Grid',
    description: 'Implement a semantic HTML5 structure styled with CSS Flexbox/Grid. Must pass Google Lighthouse mobile check.',
    deadline: '2026-08-15',
    priority: 'High',
    status: 'Approved',
    submittedAt: '2026-08-12',
    score: 9,
    feedback: 'Excellent semantic HTML structure and responsive layout! Clean media queries.',
    links: { github: 'https://github.com/likitha/landing-page', demo: 'https://likitha-landing.vercel.app' }
  },
  {
    id: 'tsk-02',
    courseId: 'web-dev',
    title: 'Interactive Dashboard with Async JS & REST API',
    description: 'Fetch real-time data using Fetch API or Axios. Handle loading and error states gracefully.',
    deadline: '2026-08-18',
    priority: 'High',
    status: 'Approved',
    submittedAt: '2026-08-14',
    score: 8,
    feedback: 'Good work on error handling! Minor suggestion: add skeleton loaders for smoother UX.',
    links: { github: 'https://github.com/likitha/api-dashboard', demo: 'https://likitha-dashboard.vercel.app' }
  },
  {
    id: 'tsk-03',
    courseId: 'web-dev',
    title: 'React State Management & Component Modularization',
    description: 'Refactor code into reusable React components. Manage global state with Context API or Redux Toolkit.',
    deadline: 'Today, 11:59 PM',
    priority: 'Urgent',
    status: 'In Progress',
    submittedAt: null,
    score: null,
    feedback: null,
    links: {}
  },
  {
    id: 'tsk-04',
    courseId: 'web-dev',
    title: 'Node.js Express Backend & Database CRUD Integration',
    description: 'Create a RESTful server with Express, connect PostgreSQL/MongoDB, and implement JWT authentication.',
    deadline: '2026-08-22',
    priority: 'Medium',
    status: 'Pending',
    submittedAt: null,
    score: null,
    feedback: null,
    links: {}
  }
];

export const INITIAL_LEADERBOARD = [
  { rank: 1, name: 'Rahul Sharma', points: 940, scorePercent: 94, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80', isCurrentUser: false },
  { rank: 2, name: 'Ananya Verma', points: 910, scorePercent: 91, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', isCurrentUser: false },
  { rank: 3, name: 'Priya Nair', points: 880, scorePercent: 89, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80', isCurrentUser: false },
  { rank: 4, name: 'Arjun Patel', points: 850, scorePercent: 86, avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80', isCurrentUser: false },
  { rank: 5, name: 'Neha Gupta', points: 820, scorePercent: 83, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80', isCurrentUser: false },
  { rank: 6, name: 'Vikram Singh', points: 790, scorePercent: 80, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', isCurrentUser: false },
  { rank: 7, name: 'Likitha S', points: 760, scorePercent: 78, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', isCurrentUser: true },
  { rank: 8, name: 'Siddharth Rao', points: 740, scorePercent: 75, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80', isCurrentUser: false }
];

export const INITIAL_SHOWCASE_PROJECTS = [
  {
    id: 'prj-1',
    title: 'NexusAI — Smart Multi-Modal Workspace',
    internName: 'Rahul Sharma',
    courseId: 'ai-tools',
    category: 'tech',
    featuredBadge: '🏆 Project of the Week',
    description: 'An AI productivity suite connecting GPT-4, Midjourney prompt generation, and automated vector search in a single dashboard.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    tags: ['React', 'OpenAI API', 'VectorDB', 'TailwindCSS'],
    github: 'https://github.com/rahul/nexus-ai',
    demo: 'https://nexus-ai-demo.vercel.app',
    approvedBy: 'Prof. Sharma',
    rating: 9.8
  },
  {
    id: 'prj-2',
    title: 'EcoPulse — Carbon Footprint Tracker App',
    internName: 'Likitha S',
    courseId: 'web-dev',
    category: 'tech',
    featuredBadge: '💻 Best Web Project',
    description: 'Full-stack web application tracking personal carbon footprints with interactive charts, goal setting, and community badges.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&auto=format&fit=crop&q=80',
    tags: ['React', 'Chart.js', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/likitha/ecopulse',
    demo: 'https://ecopulse-app.vercel.app',
    approvedBy: 'Prof. Sharma',
    rating: 9.6
  },
  {
    id: 'prj-3',
    title: 'FinHealth AI — Predictive Financial Dashboard',
    internName: 'Ananya Verma',
    courseId: 'data-science',
    category: 'tech',
    featuredBadge: '📊 Best Data Project',
    description: 'Exploratory data analysis and machine learning forecasting model predicting startup burn rate and revenue runway.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/ananya/finhealth-ai',
    demo: 'https://finhealth-ananya.streamlit.app',
    approvedBy: 'Prof. Sharma',
    rating: 9.5
  },
  {
    id: 'prj-4',
    title: 'Aura Design System & Mobile App',
    internName: 'Priya Nair',
    courseId: 'ui-ux',
    category: 'design',
    featuredBadge: '🎨 Best UI/UX',
    description: 'High-fidelity Figma prototype and WCAG compliant design system for a mental wellness and meditation app.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80',
    tags: ['Figma', 'Prototyping', 'Design System', 'User Testing'],
    github: 'https://figma.com/@priya/aura-design',
    demo: 'https://figma.com/proto/aura-preview',
    approvedBy: 'Prof. Sharma',
    rating: 9.7
  },
  {
    id: 'prj-5',
    title: 'CleanWater Initiative Grant Strategy',
    internName: 'Siddharth Rao',
    courseId: 'social-impact',
    category: 'impact',
    featuredBadge: '🌱 Best Social Impact',
    description: 'Comprehensive UN SDG-aligned proposal and community outreach blueprint for clean drinking water in rural townships.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80',
    tags: ['UN SDGs', 'Grant Proposal', 'Impact Metrics'],
    github: 'https://github.com/siddharth/cleanwater',
    demo: 'https://cleanwater-impact.org',
    approvedBy: 'Prof. Sharma',
    rating: 9.4
  }
];

export const INITIAL_SCHEDULE = [
  { id: 'ev-1', title: '1-on-1 Mentorship Sync with Prof. Sharma', time: 'Tomorrow, 5:00 PM', date: '2026-08-16', category: 'Meeting', typeBadge: '🔵 Meeting', alert: 'Due Tomorrow' },
  { id: 'ev-2', title: 'React API Integration & State Task Due', time: 'Aug 18, 11:59 PM', date: '2026-08-18', category: 'Deadline', typeBadge: '🔴 Deadline', alert: 'Due in 3 Days' },
  { id: 'ev-3', title: 'Live Masterclass: AI in Production Web Apps', time: 'Aug 20, 4:00 PM', date: '2026-08-20', category: 'Workshop', typeBadge: '🟢 Workshop', alert: 'Upcoming' },
  { id: 'ev-4', title: 'Mid-Internship Project Code Review', time: 'Aug 22, 10:00 AM', date: '2026-08-22', category: 'Review', typeBadge: '🟣 Review', alert: 'Upcoming' }
];

export const SAMPLE_CERTIFICATE = {
  id: 'SS-WEB-2026-00127',
  internName: 'Likitha S',
  courseName: 'Web Development Internship Program',
  organization: 'SkillSphere Learning Ecosystem',
  duration: '6 Weeks (Jul 2026 – Aug 2026)',
  completionDate: 'August 14, 2026',
  projectName: 'EcoPulse — Carbon Footprint Tracker Web Application',
  issueDate: '2026-08-14',
  signatureName: 'Prof. Sharma',
  signatureRole: 'Head of Internship Program, SkillSphere',
  verificationUrl: 'https://skillsphere.edu/verify/SS-WEB-2026-00127',
  status: 'VERIFIED'
};
