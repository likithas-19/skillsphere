export const COURSE_CATEGORIES = [
  { id: 'all', name: 'All Domains' },
  { id: 'tech', name: 'AI & Tech' },
  { id: 'content', name: 'Writing & Content' },
  { id: 'design', name: 'Design & Marketing' },
  { id: 'operations', name: 'Operations & Management' },
  { id: 'impact', name: 'Impact & Research' }
];

export const COURSES = [
  {
    id: 'web-dev',
    category: 'tech',
    title: 'Web Development',
    iconName: 'Code',
    tagline: 'Build responsive, scalable modern web applications from scratch.',
    description: 'Master frontend and backend architecture, modern JavaScript frameworks, state management, REST APIs, and database integration.',
    difficulty: 'Beginner → Intermediate',
    duration: '6 Weeks',
    skills: ['HTML5 & CSS3', 'JavaScript ES6+', 'React.js', 'Node.js', 'REST APIs', 'Git & GitHub', 'PostgreSQL'],
    projectGoal: 'Build and deploy a full-stack responsive web application with user authentication and database management.',
    expectedOutcomes: [
      'Architect full-stack web applications',
      'Integrate responsive UI components with backend APIs',
      'Deploy applications with production best practices'
    ],
    tools: ['VS Code', 'React', 'TailwindCSS', 'Node.js', 'Postman', 'Git'],
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    accentGradient: 'from-indigo-500 to-blue-600',
    weeklyModules: [
      { week: 1, title: 'HTML5, CSS3 & Responsive Web Layouts', time: '10 hrs', status: 'completed' },
      { week: 2, title: 'Modern JavaScript (ES6+), DOM & Async JS', time: '12 hrs', status: 'completed' },
      { week: 3, title: 'React Fundamentals, Components & Hooks', time: '15 hrs', status: 'in-progress' },
      { week: 4, title: 'State Management & API Integration', time: '14 hrs', status: 'pending' },
      { week: 5, title: 'Backend Node.js, Express & Databases', time: '16 hrs', status: 'pending' },
      { week: 6, title: 'Capstone Project Building, Testing & Deployment', time: '18 hrs', status: 'pending' }
    ]
  },
  {
    id: 'ai-web-dev',
    category: 'tech',
    title: 'AI Web Development',
    iconName: 'Sparkles',
    tagline: 'Combine full-stack web tech with AI APIs, LLM agents, and smart UIs.',
    description: 'Learn how to integrate LLM APIs (OpenAI, Gemini), build RAG systems, implement streaming responses, and create AI-powered web tools.',
    difficulty: 'Intermediate',
    duration: '6 Weeks',
    skills: ['React', 'Next.js', 'LLM API Integration', 'Prompt Engineering', 'Vector Databases', 'Node.js'],
    projectGoal: 'Develop an interactive AI-powered web app with real-time streaming, prompt templates, and database storage.',
    expectedOutcomes: [
      'Connect LLM APIs to frontend interfaces smoothly',
      'Implement streaming text and interactive AI micro-agents',
      'Handle API security and rate limits'
    ],
    tools: ['OpenAI API', 'LangChain', 'Pinecone', 'Next.js', 'Vercel'],
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    accentGradient: 'from-purple-500 to-indigo-600',
    weeklyModules: [
      { week: 1, title: 'LLM Foundations & API Orchestration', time: '10 hrs', status: 'pending' },
      { week: 2, title: 'Frontend UI for Conversational AI & Streaming', time: '12 hrs', status: 'pending' },
      { week: 3, title: 'Embeddings & Vector Database Search (RAG)', time: '14 hrs', status: 'pending' },
      { week: 4, title: 'Custom AI Agents & Function Calling', time: '14 hrs', status: 'pending' },
      { week: 5, title: 'Security, Tokens & Performance Optimization', time: '12 hrs', status: 'pending' },
      { week: 6, title: 'Final AI Web App Launch & Review', time: '16 hrs', status: 'pending' }
    ]
  },
  {
    id: 'ai-tools',
    category: 'tech',
    title: 'AI & AI Tools',
    iconName: 'Cpu',
    tagline: 'Harness cutting-edge AI software to supercharge productivity.',
    description: 'Explore automated workflows, multimodal generative AI tools, prompt optimization, AI automation scripts, and ethics in AI.',
    difficulty: 'Beginner → Intermediate',
    duration: '4 Weeks',
    skills: ['Prompt Engineering', 'Generative AI', 'Workflow Automation', 'ChatGPT / Claude', 'Midjourney', 'Zapier'],
    projectGoal: 'Create an automated cross-platform AI workflow that generates content, processes data, and syncs to team tools.',
    expectedOutcomes: [
      'Automate repetitive operational tasks with AI workflows',
      'Master prompt structures for text, code, and image generation',
      'Evaluate AI tool safety and hallucinations'
    ],
    tools: ['ChatGPT', 'Claude', 'Midjourney', 'Make.com', 'Zapier'],
    badgeColor: 'bg-violet-100 text-violet-800 border-violet-200',
    accentGradient: 'from-violet-500 to-purple-600',
    weeklyModules: [
      { week: 1, title: 'Generative AI Ecosystem Overview', time: '8 hrs', status: 'pending' },
      { week: 2, title: 'Advanced Prompting Techniques & Frameworks', time: '10 hrs', status: 'pending' },
      { week: 3, title: 'No-Code AI Automation & Workflow Pipelines', time: '12 hrs', status: 'pending' },
      { week: 4, title: 'Capstone AI Workflow Optimization', time: '12 hrs', status: 'pending' }
    ]
  },
  {
    id: 'prompt-eng',
    category: 'tech',
    title: 'AI Prompt Engineering',
    iconName: 'Terminal',
    tagline: 'Master the art and science of communicating effectively with AI models.',
    description: 'Deep dive into Few-Shot, Chain-of-Thought, Tree of Thoughts, system prompting, guardrails, and automated prompt evaluation.',
    difficulty: 'Beginner → Intermediate',
    duration: '4 Weeks',
    skills: ['Few-Shot Prompting', 'Chain-of-Thought', 'System Design', 'Hallucination Mitigation', 'Prompt Benchmarking'],
    projectGoal: 'Design a comprehensive Prompt Library and Evaluation suite for domain-specific AI applications.',
    expectedOutcomes: [
      'Craft structured prompts with predictable JSON outputs',
      'Reduce model hallucinations by up to 90%',
      'Create robust system prompts for specialized user roles'
    ],
    tools: ['OpenAI Playground', 'Anthropic Console', 'LangSmith', 'Python'],
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
    accentGradient: 'from-sky-500 to-blue-600',
    weeklyModules: [
      { week: 1, title: 'Prompt Engineering Fundamentals & Anatomy', time: '8 hrs', status: 'pending' },
      { week: 2, title: 'Advanced Prompt Architectures & Logic Chains', time: '10 hrs', status: 'pending' },
      { week: 3, title: 'Structured Output, JSON & Function Call Prompts', time: '12 hrs', status: 'pending' },
      { week: 4, title: 'Prompt Evaluation, Testing & Optimization', time: '12 hrs', status: 'pending' }
    ]
  },
  {
    id: 'data-science',
    category: 'tech',
    title: 'Data Science',
    iconName: 'BarChart3',
    tagline: 'Transform raw data into actionable insights and predictive models.',
    description: 'Learn Python programming, exploratory data analysis, statistical modeling, machine learning algorithms, and data storytelling.',
    difficulty: 'Beginner → Advanced',
    duration: '8 Weeks',
    skills: ['Python', 'Pandas & NumPy', 'Matplotlib & Seaborn', 'SQL', 'Scikit-Learn', 'Statistical Inference'],
    projectGoal: 'Analyze a complex real-world dataset, build predictive machine learning models, and present interactive dashboards.',
    expectedOutcomes: [
      'Clean, transform, and analyze large-scale datasets',
      'Train, validate, and tune predictive regression and classification models',
      'Communicate data-driven business recommendations'
    ],
    tools: ['Jupyter Notebook', 'Python', 'Pandas', 'Scikit-learn', 'Tableau', 'SQL'],
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    accentGradient: 'from-emerald-500 to-teal-600',
    weeklyModules: [
      { week: 1, title: 'Python Programming & Data Structures', time: '10 hrs', status: 'pending' },
      { week: 2, title: 'Data Wrangling with Pandas & NumPy', time: '12 hrs', status: 'pending' },
      { week: 3, title: 'Exploratory Data Analysis & Visualization', time: '12 hrs', status: 'pending' },
      { week: 4, title: 'Relational Databases & SQL Querying', time: '10 hrs', status: 'pending' },
      { week: 5, title: 'Statistical Methods & Hypothesis Testing', time: '12 hrs', status: 'pending' },
      { week: 6, title: 'Supervised Machine Learning Algorithms', time: '15 hrs', status: 'pending' },
      { week: 7, title: 'Unsupervised Machine Learning & Clustering', time: '12 hrs', status: 'pending' },
      { week: 8, title: 'Capstone Data Science Project & Presentation', time: '18 hrs', status: 'pending' }
    ]
  },
  {
    id: 'ai-data-analytics',
    category: 'tech',
    title: 'AI Data Analytics',
    iconName: 'LineChart',
    tagline: 'Leverage AI algorithms for automated insights and smart business intelligence.',
    description: 'Combine business analytics with automated machine learning (AutoML), natural language querying, and predictive analytics tools.',
    difficulty: 'Intermediate',
    duration: '6 Weeks',
    skills: ['AutoML', 'SQL', 'Python Analytics', 'PowerBI / Tableau', 'Predictive Modeling', 'Prompt-based BI'],
    projectGoal: 'Build an AI-enhanced executive dashboard with automated anomaly detection and trend forecasting.',
    expectedOutcomes: [
      'Use natural language queries to extract database insights',
      'Implement AutoML tools for fast predictive prototyping',
      'Automate executive report generation with AI'
    ],
    tools: ['Power BI AI', 'Julius AI', 'Python', 'SQL', 'BigQuery'],
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
    accentGradient: 'from-teal-500 to-emerald-600',
    weeklyModules: [
      { week: 1, title: 'Foundations of AI-Driven Analytics', time: '8 hrs', status: 'pending' },
      { week: 2, title: 'Automated Data Preprocessing & Cleaning', time: '10 hrs', status: 'pending' },
      { week: 3, title: 'Natural Language SQL & Data Exploration', time: '12 hrs', status: 'pending' },
      { week: 4, title: 'Predictive Modeling & Anomaly Detection', time: '14 hrs', status: 'pending' },
      { week: 5, title: 'Interactive Dashboarding & Storytelling', time: '12 hrs', status: 'pending' },
      { week: 6, title: 'Capstone Analytics Presentation', time: '15 hrs', status: 'pending' }
    ]
  },
  {
    id: 'ui-ux',
    category: 'design',
    title: 'UI/UX Design',
    iconName: 'Palette',
    tagline: 'Design user-centric interfaces and intuitive digital experiences.',
    description: 'Learn wireframing, user research, interaction design, prototyping, design systems, visual hierarchy, and usability testing.',
    difficulty: 'Beginner → Intermediate',
    duration: '6 Weeks',
    skills: ['Figma', 'Wireframing', 'User Research', 'Design Systems', 'Prototyping', 'Usability Testing'],
    projectGoal: 'Design a high-fidelity interactive prototype for a mobile or web app based on thorough user research.',
    expectedOutcomes: [
      'Conduct user interviews and map user journeys',
      'Build responsive UI wireframes and design systems in Figma',
      'Test prototypes with target users and iterate'
    ],
    tools: ['Figma', 'Miro', 'FigJam', 'Maze', 'Protopie'],
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    accentGradient: 'from-rose-500 to-pink-600',
    weeklyModules: [
      { week: 1, title: 'UX Principles, User Research & Personas', time: '10 hrs', status: 'pending' },
      { week: 2, title: 'Information Architecture & Wireframing', time: '12 hrs', status: 'pending' },
      { week: 3, title: 'Visual Design, Color Theory & Typography', time: '12 hrs', status: 'pending' },
      { week: 4, title: 'Figma Components, Variants & Design Systems', time: '14 hrs', status: 'pending' },
      { week: 5, title: 'Interactive High-Fidelity Prototyping', time: '14 hrs', status: 'pending' },
      { week: 6, title: 'Usability Testing & Final Design Showcase', time: '16 hrs', status: 'pending' }
    ]
  },
  {
    id: 'graphic-design',
    category: 'design',
    title: 'Graphic Design',
    iconName: 'Image',
    tagline: 'Craft compelling visual identities, brand graphics, and creative assets.',
    description: 'Master visual layout, branding systems, typography, vector illustration, digital asset creation, and print/web collateral design.',
    difficulty: 'Beginner → Intermediate',
    duration: '5 Weeks',
    skills: ['Adobe Illustrator', 'Photoshop', 'Canva', 'Branding & Logo Design', 'Typography', 'Visual Identity'],
    projectGoal: 'Create a complete brand identity suite including logos, brand guidelines, social assets, and marketing collateral.',
    expectedOutcomes: [
      'Build memorable brand identities and vector logotypes',
      'Master color harmony, typography pairing, and layout grid systems',
      'Export production-ready graphics for web, social, and print'
    ],
    tools: ['Illustrator', 'Photoshop', 'Canva', 'Figma'],
    badgeColor: 'bg-pink-100 text-pink-800 border-pink-200',
    accentGradient: 'from-pink-500 to-rose-600',
    weeklyModules: [
      { week: 1, title: 'Visual Design Foundations & Composition', time: '8 hrs', status: 'pending' },
      { week: 2, title: 'Color Theory, Typography & Grid Systems', time: '10 hrs', status: 'pending' },
      { week: 3, title: 'Brand Identity Design & Logo Creation', time: '12 hrs', status: 'pending' },
      { week: 4, title: 'Social Media & Digital Asset Production', time: '12 hrs', status: 'pending' },
      { week: 5, title: 'Final Brand Book Portfolio Presentation', time: '14 hrs', status: 'pending' }
    ]
  },
  {
    id: 'digital-marketing',
    category: 'design',
    title: 'Digital Marketing',
    iconName: 'Megaphone',
    tagline: 'Drive brand growth through SEO, social media, and data-backed campaigns.',
    description: 'Learn search engine optimization (SEO), performance marketing, email campaigns, Google Analytics, ad copy, and growth funnels.',
    difficulty: 'Beginner → Intermediate',
    duration: '5 Weeks',
    skills: ['SEO', 'Content Marketing', 'Google Analytics 4', 'Paid Ads (Meta & Google)', 'Email Marketing', 'Conversion Optimization'],
    projectGoal: 'Execute an end-to-end digital marketing campaign with landing pages, ad strategies, and analytical reporting.',
    expectedOutcomes: [
      'Conduct keyword research and optimize website SEO',
      'Design targeted ad campaigns on Meta and Google Ads',
      'Analyze funnel performance with Google Analytics 4'
    ],
    tools: ['Google Analytics', 'Semrush', 'Meta Ads Manager', 'Mailchimp', 'Canva'],
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    accentGradient: 'from-amber-500 to-orange-600',
    weeklyModules: [
      { week: 1, title: 'Digital Marketing Landscape & Strategy', time: '8 hrs', status: 'pending' },
      { week: 2, title: 'SEO & Content Optimization Fundamentals', time: '10 hrs', status: 'pending' },
      { week: 3, title: 'Performance Marketing & Paid Social Ads', time: '12 hrs', status: 'pending' },
      { week: 4, title: 'Email Marketing & Conversion Funnels', time: '10 hrs', status: 'pending' },
      { week: 5, title: 'Analytics, Reporting & Campaign Presentation', time: '14 hrs', status: 'pending' }
    ]
  },
  {
    id: 'ai-digital-marketing',
    category: 'design',
    title: 'AI Digital Marketing',
    iconName: 'Target',
    tagline: 'Supercharge marketing campaigns with AI-driven copy, targeting, and predictive insights.',
    description: 'Master AI ad copy generation, automated A/B testing, personalized email sequences, AI social media creation, and predictive customer modeling.',
    difficulty: 'Intermediate',
    duration: '5 Weeks',
    skills: ['AI Copywriting', 'Automated Campaign Testing', 'AI Audience Segmentation', 'Predictive LTV', 'ChatGPT Marketing Hacks'],
    projectGoal: 'Create an automated AI marketing campaign system that generates ad variations, landing page copy, and email sequences.',
    expectedOutcomes: [
      'Generate high-converting ad copy and creative variations in minutes',
      'Personalize customer journeys using AI segmentation',
      'Optimize ad spend with predictive campaign analytics'
    ],
    tools: ['Jasper AI', 'Copy.ai', 'ChatGPT', 'Midjourney', 'Meta Ads AI'],
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
    accentGradient: 'from-orange-500 to-amber-600',
    weeklyModules: [
      { week: 1, title: 'AI in Modern Marketing & Copy Generation', time: '8 hrs', status: 'pending' },
      { week: 2, title: 'AI-Powered Visual & Video Asset Creation', time: '10 hrs', status: 'pending' },
      { week: 3, title: 'Automated Funnels & Personalization Workflows', time: '12 hrs', status: 'pending' },
      { week: 4, title: 'Predictive Analytics & Audience Targeting', time: '10 hrs', status: 'pending' },
      { week: 5, title: 'Final AI Marketing Campaign Portfolio', time: '14 hrs', status: 'pending' }
    ]
  },
  {
    id: 'ai-content-writing',
    category: 'content',
    title: 'AI Content & Blog Writing',
    iconName: 'PenTool',
    tagline: 'Blend human creativity with AI efficiency to produce high-impact written content.',
    description: 'Learn prompt techniques for long-form blog articles, SEO keyword optimization, tone matching, factual editing, and brand messaging.',
    difficulty: 'Beginner → Intermediate',
    duration: '4 Weeks',
    skills: ['AI Content Generation', 'SEO Blogging', 'Copy Editing', 'Brand Voice Guidelines', 'Fact-Checking AI'],
    projectGoal: 'Produce a comprehensive 5-article SEO content hub leveraging AI tools for outline, draft, and editorial polishing.',
    expectedOutcomes: [
      'Draft multi-thousand word articles 5x faster with AI assistance',
      'Refine AI drafts into polished, authentic human-sounding copy',
      'Rank content on search engines using SEO prompt strategies'
    ],
    tools: ['ChatGPT', 'Grammarly', 'SurferSEO', 'Notion AI', 'WordPress'],
    badgeColor: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
    accentGradient: 'from-fuchsia-500 to-pink-600',
    weeklyModules: [
      { week: 1, title: 'Content Strategy & AI Writing Tools Overview', time: '8 hrs', status: 'pending' },
      { week: 2, title: 'SEO Keyword Research & AI Article Outlining', time: '10 hrs', status: 'pending' },
      { week: 3, title: 'Editing, Tone Tuning & Humanizing AI Drafts', time: '10 hrs', status: 'pending' },
      { week: 4, title: 'Content Distribution & Portfolio Building', time: '12 hrs', status: 'pending' }
    ]
  },
  {
    id: 'copywriting',
    category: 'content',
    title: 'Copywriting & Social Media',
    iconName: 'FileText',
    tagline: 'Write words that persuade, engage audiences, and spark action.',
    description: 'Master headline psychology, sales copy frameworks (AIDA, PAS), social media captions, email sequences, and brand storytelling.',
    difficulty: 'Beginner → Intermediate',
    duration: '4 Weeks',
    skills: ['Copywriting Frameworks', 'Headline Psychology', 'Social Media Copy', 'Email Campaigns', 'Brand Storytelling'],
    projectGoal: 'Create a full launch copywriting kit including landing page sales copy, email drip series, and social media ad posts.',
    expectedOutcomes: [
      'Write high-converting headlines and call-to-action statements',
      'Apply classic persuasion frameworks to modern digital formats',
      'Develop distinct brand voice guidelines for social channels'
    ],
    tools: ['Google Docs', 'Notion', 'Grammarly', 'Canva'],
    badgeColor: 'bg-violet-100 text-violet-800 border-violet-200',
    accentGradient: 'from-purple-500 to-fuchsia-600',
    weeklyModules: [
      { week: 1, title: 'Copywriting Psychology & Persuasion Principles', time: '8 hrs', status: 'pending' },
      { week: 2, title: 'Landing Page & Sales Copy Mastery', time: '10 hrs', status: 'pending' },
      { week: 3, title: 'Social Media Copywriting & Viral Captions', time: '10 hrs', status: 'pending' },
      { week: 4, title: 'Email Copy Drip Sequences & Portfolio', time: '12 hrs', status: 'pending' }
    ]
  },
  {
    id: 'social-media-mkt',
    category: 'operations',
    title: 'Social Media Marketing',
    iconName: 'Share2',
    tagline: 'Grow online communities and build viral brand presence.',
    description: 'Learn content strategy, video scripting (Reels/TikTok), community engagement, influencer collaboration, and social analytics.',
    difficulty: 'Beginner → Intermediate',
    duration: '4 Weeks',
    skills: ['Social Content Strategy', 'Short-form Video', 'Community Building', 'Influencer Outreach', 'Social Analytics'],
    projectGoal: 'Develop a 30-day social media growth campaign with content calendar, video scripts, and analytics benchmarks.',
    expectedOutcomes: [
      'Structure a multi-channel monthly content calendar',
      'Script engaging short-form video hooks for Instagram and TikTok',
      'Track engagement metrics and adjust strategy based on data'
    ],
    tools: ['Buffer', 'Later', 'CapCut', 'Canva', 'Meta Business Suite'],
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    accentGradient: 'from-cyan-500 to-blue-600',
    weeklyModules: [
      { week: 1, title: 'Platform Dynamics & Audience Analysis', time: '8 hrs', status: 'pending' },
      { week: 2, title: 'Content Calendar & Short-Form Video Production', time: '10 hrs', status: 'pending' },
      { week: 3, title: 'Community Management & Viral Growth Tactics', time: '10 hrs', status: 'pending' },
      { week: 4, title: 'Social Media Reporting & Portfolio Presentation', time: '12 hrs', status: 'pending' }
    ]
  },
  {
    id: 'business-mgmt',
    category: 'operations',
    title: 'Business & Management',
    iconName: 'Briefcase',
    tagline: 'Lead teams, manage projects, and make strategic business decisions.',
    description: 'Learn project management frameworks (Agile/Scrum), financial fundamentals, market analysis, team leadership, and strategy execution.',
    difficulty: 'Beginner → Intermediate',
    duration: '6 Weeks',
    skills: ['Agile & Scrum', 'Project Management', 'Business Strategy', 'Financial Planning', 'Stakeholder Communication'],
    projectGoal: 'Develop a comprehensive Business Plan and Agile Project Roadmap for a modern product or service initiative.',
    expectedOutcomes: [
      'Manage team workflows using Agile sprint methodologies',
      'Perform SWOT and competitive market analysis',
      'Formulate strategic project budgets and timelines'
    ],
    tools: ['Jira', 'Trello', 'Asana', 'Notion', 'Excel / Google Sheets'],
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    accentGradient: 'from-blue-500 to-indigo-600',
    weeklyModules: [
      { week: 1, title: 'Business Operations & Leadership Fundamentals', time: '8 hrs', status: 'pending' },
      { week: 2, title: 'Agile & Scrum Project Management Frameworks', time: '12 hrs', status: 'pending' },
      { week: 3, title: 'Financial Literacy & Strategic Budgeting', time: '10 hrs', status: 'pending' },
      { week: 4, title: 'Market Analysis & Competitive Strategy', time: '10 hrs', status: 'pending' },
      { week: 5, title: 'Cross-Functional Team Management', time: '10 hrs', status: 'pending' },
      { week: 6, title: 'Capstone Business Plan Presentation', time: '14 hrs', status: 'pending' }
    ]
  },
  {
    id: 'hr-mgmt',
    category: 'operations',
    title: 'Human Resources (HR)',
    iconName: 'Users',
    tagline: 'Build strong company culture, talent pipelines, and employee engagement.',
    description: 'Learn modern talent acquisition, HR analytics, onboarding design, performance management, workplace compliance, and remote work culture.',
    difficulty: 'Beginner → Intermediate',
    duration: '5 Weeks',
    skills: ['Talent Acquisition', 'HR Analytics', 'Onboarding Design', 'Performance Management', 'Employee Engagement'],
    projectGoal: 'Design a complete HR Talent & Onboarding Handbook with interview rubrics, performance templates, and culture guidelines.',
    expectedOutcomes: [
      'Draft job descriptions and structured interview rubrics',
      'Create interactive employee onboarding workflows',
      'Measure employee satisfaction and retention metrics'
    ],
    tools: ['LinkedIn Recruiter', 'BambooHR', 'Notion', 'Google Workspace'],
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    accentGradient: 'from-amber-500 to-yellow-600',
    weeklyModules: [
      { week: 1, title: 'Modern HR Management & Talent Strategy', time: '8 hrs', status: 'pending' },
      { week: 2, title: 'Recruitment, Hiring & Structured Interviews', time: '10 hrs', status: 'pending' },
      { week: 3, title: 'Onboarding & Employee Experience Design', time: '10 hrs', status: 'pending' },
      { week: 4, title: 'Performance Reviews & HR People Analytics', time: '10 hrs', status: 'pending' },
      { week: 5, title: 'Final HR Strategy Portfolio Presentation', time: '12 hrs', status: 'pending' }
    ]
  },
  {
    id: 'community-event-mgmt',
    category: 'operations',
    title: 'Community & Event Management',
    iconName: 'Calendar',
    tagline: 'Plan, execute, and host engaging digital and in-person events and communities.',
    description: 'Learn event planning pipelines, community moderation, event marketing, speaker management, sponsorship pitch decks, and virtual hosting.',
    difficulty: 'Beginner → Intermediate',
    duration: '5 Weeks',
    skills: ['Event Planning', 'Community Moderation', 'Sponsorship Pitching', 'Virtual Event Tech', 'Attendee Engagement'],
    projectGoal: 'Plan and execute a virtual summit or community launch event complete with run-of-show, sponsorship deck, and marketing plan.',
    expectedOutcomes: [
      'Construct event budgets, vendor lists, and run-of-show schedules',
      'Build engaging community Discord/Slack moderation guidelines',
      'Secure event partnerships and manage speaker logistics'
    ],
    tools: ['Luma', 'Eventbrite', 'Discord', 'Slack', 'Zoom'],
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    accentGradient: 'from-emerald-500 to-teal-600',
    weeklyModules: [
      { week: 1, title: 'Community Building & Event Design Basics', time: '8 hrs', status: 'pending' },
      { week: 2, title: 'Event Logistics, Budgets & Run-of-Show', time: '10 hrs', status: 'pending' },
      { week: 3, title: 'Sponsorship Outreach & Partner Pitching', time: '10 hrs', status: 'pending' },
      { week: 4, title: 'Virtual Event Tech Setup & Moderation', time: '10 hrs', status: 'pending' },
      { week: 5, title: 'Post-Event Reporting & Portfolio Review', time: '12 hrs', status: 'pending' }
    ]
  },
  {
    id: 'research',
    category: 'impact',
    title: 'Research & Methodology',
    iconName: 'Search',
    tagline: 'Conduct rigorous academic and industry research with qualitative & quantitative tools.',
    description: 'Master lit reviews, research paper writing, quantitative data collection, survey design, ethical research standards, and citations.',
    difficulty: 'Beginner → Advanced',
    duration: '6 Weeks',
    skills: ['Research Methodology', 'Literature Review', 'Data Collection', 'Zotero / Citation', 'Qualitative Analysis', 'Paper Writing'],
    projectGoal: 'Write and format a publication-ready research paper on a chosen domain topic with citations and empirical findings.',
    expectedOutcomes: [
      'Formulate clear research questions and hypotheses',
      'Conduct systematic literature reviews using academic databases',
      'Write structured research papers in IEEE / APA format'
    ],
    tools: ['Google Scholar', 'Zotero', 'LaTeX / Overleaf', 'Qualtrics', 'SPSS'],
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
    accentGradient: 'from-slate-600 to-indigo-700',
    weeklyModules: [
      { week: 1, title: 'Research Philosophy & Question Formulation', time: '8 hrs', status: 'pending' },
      { week: 2, title: 'Systematic Literature Search & Synthesis', time: '10 hrs', status: 'pending' },
      { week: 3, title: 'Quantitative & Qualitative Data Methodologies', time: '12 hrs', status: 'pending' },
      { week: 4, title: 'Data Analysis & Citation Management', time: '10 hrs', status: 'pending' },
      { week: 5, title: 'Academic Writing & Paper Drafting', time: '12 hrs', status: 'pending' },
      { week: 6, title: 'Peer Review & Paper Presentation', time: '14 hrs', status: 'pending' }
    ]
  },
  {
    id: 'ai-research',
    category: 'impact',
    title: 'AI Research & Ethics',
    iconName: 'Microscope',
    tagline: 'Investigate state-of-the-art AI literature, benchmarking, and ethical implications.',
    description: 'Analyze AI research preprints (arXiv), benchmark model capabilities, evaluate bias/hallucination metrics, and write AI technical reports.',
    difficulty: 'Intermediate → Advanced',
    duration: '6 Weeks',
    skills: ['Paper Analysis', 'Model Benchmarking', 'AI Safety & Ethics', 'Bias Evaluation', 'ArXiv Synthesis'],
    projectGoal: 'Author an empirical AI benchmark report or literature survey paper on an emerging LLM or multimodal AI topic.',
    expectedOutcomes: [
      'Deconstruct complex AI research papers and architecture diagrams',
      'Benchmark open-source model outputs against standardized metrics',
      'Formulate ethical guidelines for responsible AI deployment'
    ],
    tools: ['ArXiv', 'Hugging Face', 'Weights & Biases', 'Overleaf'],
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    accentGradient: 'from-indigo-600 to-purple-700',
    weeklyModules: [
      { week: 1, title: 'Reading & Analyzing AI Research Papers', time: '8 hrs', status: 'pending' },
      { week: 2, title: 'LLM Architectures & Benchmarking Datasets', time: '12 hrs', status: 'pending' },
      { week: 3, title: 'Evaluating AI Bias, Safety & Hallucinations', time: '10 hrs', status: 'pending' },
      { week: 4, title: 'Empirical Experimentation & Model Testing', time: '12 hrs', status: 'pending' },
      { week: 5, title: 'Writing Technical AI Reports', time: '12 hrs', status: 'pending' },
      { week: 6, title: 'Final AI Research Presentation', time: '14 hrs', status: 'pending' }
    ]
  },
  {
    id: 'social-impact',
    category: 'impact',
    title: 'Social Impact & Sustainability',
    iconName: 'HeartHandshake',
    tagline: 'Drive positive societal change through sustainable project initiatives.',
    description: 'Learn UN Sustainable Development Goals (SDGs), social venture models, community impact measurement, grant writing, and advocacy.',
    difficulty: 'Beginner → Intermediate',
    duration: '5 Weeks',
    skills: ['UN SDGs', 'Impact Measurement', 'Grant Proposal Writing', 'Community Outreach', 'Social Entrepreneurship'],
    projectGoal: 'Design a social impact initiative plan and grant proposal addressing a real SDG challenge in local or global communities.',
    expectedOutcomes: [
      'Align project goals with UN Sustainable Development Goals',
      'Write compelling grant proposals for NGO and community funding',
      'Create Social Return on Investment (SROI) measurement frameworks'
    ],
    tools: ['Miro', 'Google Workspace', 'SDG Indicators', 'Canva'],
    badgeColor: 'bg-green-100 text-green-800 border-green-200',
    accentGradient: 'from-green-500 to-emerald-600',
    weeklyModules: [
      { week: 1, title: 'Social Impact Foundations & UN SDGs', time: '8 hrs', status: 'pending' },
      { week: 2, title: 'Community Needs Assessment & Problem Solving', time: '10 hrs', status: 'pending' },
      { week: 3, title: 'Social Business Models & Sustainable Solutions', time: '10 hrs', status: 'pending' },
      { week: 4, title: 'Grant Writing & Resource Mobilization', time: '10 hrs', status: 'pending' },
      { week: 5, title: 'Impact Metrics & Final Showcase', time: '12 hrs', status: 'pending' }
    ]
  }
];
