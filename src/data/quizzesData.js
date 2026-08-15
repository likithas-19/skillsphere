export const COURSE_QUIZZES = {
  'web-dev': [
    {
      id: 1,
      question: "Which HTML5 semantic element should be used for the main content area of a document?",
      options: ["<section>", "<main>", "<div>", "<article>"],
      answer: 1,
      skill: "HTML5 & CSS3"
    },
    {
      id: 2,
      question: "In CSS Flexbox, which property aligns items along the cross axis?",
      options: ["justify-content", "align-items", "flex-direction", "grid-align"],
      answer: 1,
      skill: "HTML5 & CSS3"
    },
    {
      id: 3,
      question: "What will `console.log(typeof null)` evaluate to in JavaScript?",
      options: ["'null'", "'undefined'", "'object'", "'boolean'"],
      answer: 2,
      skill: "JavaScript ES6+"
    },
    {
      id: 4,
      question: "Which JavaScript array method creates a new array with all elements that pass a test?",
      options: ["map()", "forEach()", "filter()", "reduce()"],
      answer: 2,
      skill: "JavaScript ES6+"
    },
    {
      id: 5,
      question: "In React, what hook is primarily used for handling side effects like fetching data?",
      options: ["useState", "useContext", "useEffect", "useReducer"],
      answer: 2,
      skill: "React.js"
    },
    {
      id: 6,
      question: "What is the key purpose of JSX in React applications?",
      options: ["To style elements using CSS-in-JS", "To write HTML-like markup inside JavaScript code", "To replace SQL databases", "To compile Python into JS"],
      answer: 1,
      skill: "React.js"
    },
    {
      id: 7,
      question: "In Node.js Express, what does `next()` do inside a middleware function?",
      options: ["Passes control to the next middleware in the stack", "Terminates the HTTP connection", "Restarts the Node server", "Returns a 404 response"],
      answer: 0,
      skill: "Node.js"
    },
    {
      id: 8,
      question: "Which HTTP status code represents '200 OK'?",
      options: ["201", "200", "404", "500"],
      answer: 1,
      skill: "REST APIs"
    },
    {
      id: 9,
      question: "Which Git command is used to record changes to the local repository with a descriptive message?",
      options: ["git push -m", "git add .", "git commit -m", "git save"],
      answer: 2,
      skill: "Git & GitHub"
    },
    {
      id: 10,
      question: "In relational databases like PostgreSQL, what guarantees unique identification of each record in a table?",
      options: ["Foreign Key", "Index Key", "Primary Key", "Composite View"],
      answer: 2,
      skill: "PostgreSQL"
    }
  ],
  'ai-tools': [
    {
      id: 1,
      question: "What is the primary function of 'system prompts' in Large Language Models?",
      options: ["To format HTML code", "To set the behavior, persona, and rules for the AI assistant", "To increase GPU memory", "To train the base model parameters"],
      answer: 1,
      skill: "Prompt Engineering"
    },
    {
      id: 2,
      question: "Which prompting technique involves giving the model a few examples of input and output before asking the question?",
      options: ["Zero-Shot Prompting", "Few-Shot Prompting", "Fine-Tuning", "Negative Prompting"],
      answer: 1,
      skill: "Prompt Engineering"
    },
    {
      id: 3,
      question: "What term describes when an AI model confidently generates incorrect or fabricated facts?",
      options: ["Overfitting", "Hallucination", "Quantization", "Gradient Descent"],
      answer: 1,
      skill: "Generative AI"
    },
    {
      id: 4,
      question: "Which tool is commonly used for linking web applications into automated workflows without writing code?",
      options: ["VS Code", "Zapier / Make.com", "Postman", "TensorFlow"],
      answer: 1,
      skill: "Workflow Automation"
    },
    {
      id: 5,
      question: "In text-to-image AI tools like Midjourney, what does a 'negative prompt' do?",
      options: ["Reduces render speed", "Specifies elements that should be excluded from the generated image", "Makes the image darker", "Generates black-and-white photos"],
      answer: 1,
      skill: "Generative AI"
    },
    {
      id: 6,
      question: "What is temperature setting in LLMs responsible for?",
      options: ["Physical GPU temperature", "Randomness and creativity of generated text responses", "Network latency", "Maximum character limit"],
      answer: 1,
      skill: "Generative AI"
    },
    {
      id: 7,
      question: "Which of the following is considered an ethical risk of unverified AI content deployment?",
      options: ["Faster turnaround times", "Spread of misinformation and copyright infringement", "Increased cloud storage usage", "Too many file downloads"],
      answer: 1,
      skill: "AI Ethics"
    },
    {
      id: 8,
      question: "What does RAG stand for in AI application development?",
      options: ["Random Access Generation", "Retrieval-Augmented Generation", "Recursive Agent Graph", "Rapid Automated Guidance"],
      answer: 1,
      skill: "AI Architecture"
    },
    {
      id: 9,
      question: "Which framework is popular for creating complex multi-step AI agent workflows in code?",
      options: ["LangChain / LlamaIndex", "Bootstrap", "jQuery", "Redux"],
      answer: 0,
      skill: "Workflow Automation"
    },
    {
      id: 10,
      question: "How can you best protect sensitive personal data when using commercial AI tools?",
      options: ["Post it on social media", "Use enterprise privacy settings or anonymize data before inputting", "Increase prompt length", "Use all caps"],
      answer: 1,
      skill: "AI Ethics"
    }
  ],
  'data-science': [
    {
      id: 1,
      question: "In Python Pandas, which method is used to view the first 5 rows of a DataFrame?",
      options: ["df.show()", "df.head()", "df.first(5)", "df.preview()"],
      answer: 1,
      skill: "Pandas & NumPy"
    },
    {
      id: 2,
      question: "Which statistical metric measures the middle value of a dataset when ordered?",
      options: ["Mean", "Median", "Mode", "Variance"],
      answer: 1,
      skill: "Statistical Inference"
    },
    {
      id: 3,
      question: "What type of machine learning algorithm is used when predicting a continuous numerical target (e.g., house price)?",
      options: ["Classification", "Regression", "Clustering", "Reinforcement Learning"],
      answer: 1,
      skill: "Scikit-Learn"
    },
    {
      id: 4,
      question: "Which Python visualization library is built on top of Matplotlib and offers high-level statistical plots?",
      options: ["NumPy", "Seaborn", "Flask", "SciPy"],
      answer: 1,
      skill: "Matplotlib & Seaborn"
    },
    {
      id: 5,
      question: "In SQL, which clause is used to filter aggregated data generated by `GROUP BY`?",
      options: ["WHERE", "ORDER BY", "HAVING", "LIMIT"],
      answer: 2,
      skill: "SQL"
    },
    {
      id: 6,
      question: "What problem occurs when a model performs exceptionally on training data but poorly on unseen test data?",
      options: ["Underfitting", "Overfitting", "Normalization", "Imputation"],
      answer: 1,
      skill: "Scikit-Learn"
    },
    {
      id: 7,
      question: "Which metric is best suited for evaluating a classification model on an imbalanced dataset?",
      options: ["Accuracy", "F1-Score / Precision-Recall", "Mean Squared Error", "R-squared"],
      answer: 1,
      skill: "Statistical Inference"
    },
    {
      id: 8,
      question: "What is K-Means commonly used for in machine learning?",
      options: ["Linear Regression", "Unsupervised Clustering", "Feature Selection", "Time-series forecasting"],
      answer: 1,
      skill: "Scikit-Learn"
    },
    {
      id: 9,
      question: "What does the p-value in hypothesis testing indicate?",
      options: ["Probability that the null hypothesis is true given observed data", "Percentage of missing values", "Model accuracy score", "Difference between means"],
      answer: 0,
      skill: "Statistical Inference"
    },
    {
      id: 10,
      question: "Which technique scales numerical features so they have a mean of 0 and standard deviation of 1?",
      options: ["One-Hot Encoding", "StandardScaler (Standardization)", "Label Encoding", "Log Transformation"],
      answer: 1,
      skill: "Pandas & NumPy"
    }
  ],
  'ui-ux': [
    {
      id: 1,
      question: "What does UX stand for in design terminology?",
      options: ["User Extension", "User Experience", "Universal Utility", "User Expectation"],
      answer: 1,
      skill: "User Research"
    },
    {
      id: 2,
      question: "What is the primary purpose of a low-fidelity wireframe?",
      options: ["To define final color schemes and fonts", "To quickly sketch and iterate on layout and structural hierarchy", "To write production code", "To calculate marketing conversion"],
      answer: 1,
      skill: "Wireframing"
    },
    {
      id: 3,
      question: "In UI design, what is 'whitespace' (or negative space)?",
      options: ["Blank area left intentionally around visual elements to improve clarity", "An unpainted canvas bug", "Areas reserved for white text only", "The border width of buttons"],
      answer: 0,
      skill: "Visual Hierarchy"
    },
    {
      id: 4,
      question: "Which Figma feature allows designers to create reusable UI components with consistent master overrides?",
      options: ["Auto Layout", "Components & Variants", "Plugins", "Smart Animate"],
      answer: 1,
      skill: "Figma"
    },
    {
      id: 5,
      question: "What WCAG contrast ratio is standard for normal body text to meet AA accessibility?",
      options: ["2:1", "3:1", "4.5:1", "7:1"],
      answer: 2,
      skill: "Design Systems"
    },
    {
      id: 6,
      question: "What is a 'User Persona'?",
      options: ["A real legal contract", "A fictional representation of a target user segment based on qualitative research", "A social media account", "A bug ticket in Jira"],
      answer: 1,
      skill: "User Research"
    },
    {
      id: 7,
      question: "What does 'Auto Layout' in Figma help designers achieve?",
      options: ["Automated code compilation", "Dynamic responsive containers that resize according to content", "Automatic color palette generation", "3D model rendering"],
      answer: 1,
      skill: "Figma"
    },
    {
      id: 8,
      question: "What usability research method involves observing users speak their thoughts aloud while attempting tasks?",
      options: ["A/B Testing", "Think-Aloud Protocol Testing", "Card Sorting", "Analytics tracking"],
      answer: 1,
      skill: "Usability Testing"
    },
    {
      id: 9,
      question: "Fitts's Law states that the time to acquire a target is a function of:",
      options: ["Target color and brightness", "Distance to and size of the target", "Font size and line height", "Internet connection speed"],
      answer: 1,
      skill: "Visual Hierarchy"
    },
    {
      id: 10,
      question: "What is the main goal of a Design System?",
      options: ["To store database passwords", "To maintain visual and functional consistency across product teams", "To replace design software", "To write user terms of service"],
      answer: 1,
      skill: "Design Systems"
    }
  ],
  'digital-marketing': [
    {
      id: 1,
      question: "What does SEO stand for in digital marketing?",
      options: ["Social Engagement Strategy", "Search Engine Optimization", "System Executive Officer", "Sales Evaluation Option"],
      answer: 1,
      skill: "SEO"
    },
    {
      id: 2,
      question: "Which metric measures the percentage of visitors who leave a webpage after viewing only one page?",
      options: ["Click-Through Rate (CTR)", "Conversion Rate", "Bounce Rate", "Return on Ad Spend (ROAS)"],
      answer: 2,
      skill: "Google Analytics 4"
    },
    {
      id: 3,
      question: "In paid search ads, what is CTR?",
      options: ["Cost to Rate", "Click-Through Rate (Clicks divided by Impressions)", "Customer Total Revenue", "Channel Traffic Ratio"],
      answer: 1,
      skill: "Paid Ads (Meta & Google)"
    },
    {
      id: 4,
      question: "What is the primary goal of A/B testing in marketing?",
      options: ["To test two different colors on the office wall", "To compare two versions of a webpage or ad to see which performs better", "To hire two employees at once", "To send emails at 2 AM"],
      answer: 1,
      skill: "Conversion Optimization"
    },
    {
      id: 5,
      question: "In the marketing funnel, what does AIDA stand for?",
      options: ["Action, Interest, Demand, Analytics", "Attention, Interest, Desire, Action", "Awareness, Impression, Direct, Acquisition", "Ad, Impression, Data, Asset"],
      answer: 1,
      skill: "Content Marketing"
    },
    {
      id: 6,
      question: "Which Google Analytics 4 model tracks user engagement based on events rather than sessions?",
      options: ["Universal Model", "Event-Based Data Model", "Cookie Tracking Model", "Static Pageview Model"],
      answer: 1,
      skill: "Google Analytics 4"
    },
    {
      id: 7,
      question: "What is a 'call to action' (CTA)?",
      options: ["A phone call to customer support", "A prompt encouraging the audience to take a specific step (e.g., 'Sign Up Now')", "A warning email", "A team meeting invite"],
      answer: 1,
      skill: "Content Marketing"
    },
    {
      id: 8,
      question: "What is ROAS?",
      options: ["Return on Ad Spend", "Rate of Account Sales", "Real Online Analytics System", "Risk of Advertising Strategy"],
      answer: 0,
      skill: "Paid Ads (Meta & Google)"
    },
    {
      id: 9,
      question: "Which type of email campaign welcomes new subscribers and introduces the brand?",
      options: ["Re-engagement Campaign", "Onboarding / Welcome Drip Series", "Cart Abandonment", "Transactional Receipt"],
      answer: 1,
      skill: "Email Marketing"
    },
    {
      id: 10,
      question: "In SEO, what are 'backlinks'?",
      options: ["Links on your site going back to home", "Links from external websites pointing to your website", "Saved browser bookmarks", "Broken URLs"],
      answer: 1,
      skill: "SEO"
    }
  ]
};

// Generic fallback generator for remaining courses to guarantee 10 questions each
export function getQuizForCourse(courseId) {
  if (COURSE_QUIZZES[courseId]) {
    return COURSE_QUIZZES[courseId];
  }
  // Generate structured domain questions for any other course
  return [
    { id: 1, question: `What is the core objective of professional ${courseId.replace('-', ' ')}?`, options: ["Systematic execution of strategy and impact", "Random guess work", "Ignoring user needs", "Manual file copying"], answer: 0, skill: "Fundamentals" },
    { id: 2, question: "Which strategy ensures project success and quality output?", options: ["Unplanned execution", "Clear milestone planning and iterative feedback", "Skipping testing", "Hiding progress"], answer: 1, skill: "Strategy" },
    { id: 3, question: "What is essential when communicating project outcomes to stakeholders?", options: ["Technical jargon only", "Structured data-backed storytelling and clear visual summaries", "No documentation", "Delayed emails"], answer: 1, skill: "Communication" },
    { id: 4, question: "How do modern tools enhance productivity in this domain?", options: ["By replacing human judgment entirely", "By automating routine tasks and enabling faster iteration", "By breaking workflows", "By increasing costs"], answer: 1, skill: "Tools & Methods" },
    { id: 5, question: "Which metric best reflects high quality in project deliverables?", options: ["File size", "Alignment with project objectives and user satisfaction", "Speed of typing", "Number of meetings"], answer: 1, skill: "Quality Assurance" },
    { id: 6, question: "What is the recommended first step when starting a new initiative?", options: ["Jump into final design", "Define problem scope and conduct baseline research", "Submit work immediately", "Ignore guidelines"], answer: 1, skill: "Research & Discovery" },
    { id: 7, question: "Why is ethical responsibility critical in this field?", options: ["It is not important", "To protect user trust, privacy, and ensure fair outcomes", "To slow down work", "To avoid writing reports"], answer: 1, skill: "Ethics & Compliance" },
    { id: 8, question: "How does continuous feedback improve team workflows?", options: ["Identifies bottlenecks early for agile adjustments", "Creates confusion", "Stops all work", "Decreases morale"], answer: 0, skill: "Agile Workflow" },
    { id: 9, question: "What role does documentation play in project maintenance?", options: ["Waste of time", "Provides clear knowledge transfer and future scalability", "Only needed for admin", "Slowing down code"], answer: 1, skill: "Documentation" },
    { id: 10, question: "What distinguishes an Advanced practitioner from a Beginner?", options: ["Using more tools", "Ability to solve complex ambiguous problems and mentor others", "Working longer hours", "Avoiding new technology"], answer: 1, skill: "Professional Mastery" }
  ];
}
