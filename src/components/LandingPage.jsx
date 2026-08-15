import React from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Brain, 
  Target, 
  BarChart3, 
  Bot, 
  Trophy, 
  Award, 
  Code, 
  Palette, 
  Megaphone, 
  Briefcase, 
  Search, 
  HeartHandshake, 
  ShieldCheck, 
  Star, 
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function LandingPage() {
  const { setActiveTab, selectCourse, showcaseProjects, leaderboard, user, activeCourse } = useApp();

  const steps = [
    { num: '01', title: 'Choose', desc: 'Select the domain or course you are interested in.', color: 'from-indigo-500 to-blue-500' },
    { num: '02', title: 'Assess', desc: 'Take a course-specific skill quiz or choose Beginner mode.', color: 'from-purple-500 to-indigo-500' },
    { num: '03', title: 'Learn', desc: 'Get a personalized adaptive learning path.', color: 'from-violet-500 to-purple-500' },
    { num: '04', title: 'Build', desc: 'Complete practical tasks and real-world projects.', color: 'from-sky-500 to-indigo-500' },
    { num: '05', title: 'Track', desc: 'Manage deadlines, meetings, and weekly course progress.', color: 'from-emerald-500 to-teal-500' },
    { num: '06', title: 'Get Help', desc: 'Ask SkillSphere AI for context-aware assistance.', color: 'from-amber-500 to-orange-500' },
    { num: '07', title: 'Showcase', desc: 'Submit completed projects for admin review & showcase.', color: 'from-rose-500 to-pink-500' },
    { num: '08', title: 'Get Certified', desc: 'Receive a QR-verified certificate of completion.', color: 'from-indigo-600 to-violet-600' }
  ];

  return (
    <div className="space-y-24 pb-12">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-16 pb-24 border-b border-slate-800">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-purple-600/15 rounded-full blur-[90px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Next-Gen AI-Assisted Internship Ecosystem</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-sans text-white">
              <span className="text-indigo-400 font-black">SKILL</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-400 font-black">SPHERE</span>
            </h1>

            <p className="text-2xl sm:text-3xl font-bold text-slate-200 tracking-tight">
              "Every Skill. Every Path. One Platform."
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              An AI-assisted internship and learning platform that helps you discover your strengths, build real-world skills, complete meaningful projects, track your progress, and showcase your achievements.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setActiveTab('courses')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setActiveTab('showcase')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-700/80 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Projects</span>
              </button>
            </div>
          </div>

          {/* HERO VISUAL: Dashboard Preview Card */}
          <div className="mt-16 max-w-5xl mx-auto rounded-2xl p-2 sm:p-4 bg-slate-800/60 border border-slate-700/80 shadow-2xl backdrop-blur-md">
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 sm:p-6 space-y-6">
              
              {/* Header inside mockup */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-400 font-bold">
                    SS
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Good Morning, Likitha 👋</h3>
                    <p className="text-xs text-indigo-300 font-medium">Active Path: Web Development Internship</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Course Standing: #7 of 42
                  </span>
                </div>
              </div>

              {/* Grid Widgets inside preview */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Internship Progress</p>
                  <p className="text-2xl font-bold text-white mt-1">75%</p>
                  <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2 overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Learning Modules</p>
                  <p className="text-2xl font-bold text-white mt-1">2 / 6</p>
                  <p className="text-[11px] text-emerald-400 font-medium mt-1">Module 3 in progress</p>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Tasks Completed</p>
                  <p className="text-2xl font-bold text-white mt-1">8 / 10</p>
                  <p className="text-[11px] text-indigo-300 font-medium mt-1">2 pending review</p>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Project Status</p>
                  <p className="text-lg font-bold text-amber-400 mt-1">EcoPulse (In Progress)</p>
                  <p className="text-[11px] text-slate-400 mt-1">Target Due: Aug 20</p>
                </div>
              </div>

              {/* Task & Meeting Snapshot */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/40 p-3.5 rounded-xl border border-slate-700/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping"></span>
                    <div>
                      <p className="font-semibold text-slate-200">Today's Task: API Integration</p>
                      <p className="text-slate-400">Due Today, 11:59 PM</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 font-semibold">Urgent</span>
                </div>

                <div className="bg-slate-800/40 p-3.5 rounded-xl border border-slate-700/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                    <div>
                      <p className="font-semibold text-slate-200">Upcoming Sync: Mentorship Review</p>
                      <p className="text-slate-400">Tomorrow, 5:00 PM</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 font-semibold">Meeting</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* 2. HOW SKILLSPHERE WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-800">
            Step-by-Step Guidance
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">How SkillSphere Works</h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            From initial registration to certified achievement — your journey is structured for steady growth and practical success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-white dark:bg-slate-900 dark:border-slate-800 rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${step.color} text-white font-extrabold text-sm flex items-center justify-center mb-4 shadow-md`}>
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* 3. EXPLORE INTERNSHIP DOMAINS (Equal Visual Importance) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-800">
              Diverse Opportunities
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2">Explore Internship Paths</h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
              Equal visual importance across all domains: Tech, Writing, Design, Operations, and Impact.
            </p>
          </div>
          <button 
            onClick={() => setActiveTab('courses')}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-700 transition-colors flex items-center gap-2 self-start md:self-auto"
          >
            <span>View All Courses ({COURSES.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Display sample 6 equal-sized course cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COURSES.slice(0, 6).map((course) => (
            <div key={course.id} className="bg-white dark:bg-slate-900 dark:border-slate-800 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${course.badgeColor}`}>
                    {course.duration}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{course.difficulty}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider">Key Skills:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {course.skills.slice(0, 4).map((skill, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => selectCourse(course.id)}
                className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-800 dark:text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <span>View Details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>


      {/* 4. PERSONALIZED LEARNING SPOTLIGHT */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/20 border border-indigo-500/40 px-3 py-1 rounded-full">
              Adaptive Education Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Personalized Learning Paths Built for Your Exact Skill Level
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              No generic standard content. Take our course-specific skill assessment or select Beginner mode. SkillSphere maps known topics as optional and automatically highlights weak areas as target focus modules.
            </p>

            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Option to skip quiz as an <strong>Absolute Beginner</strong> and build foundations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Domain-specific quiz evaluating core concepts, tools, and practical logic</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Visual Skill Radar breakdown highlighting strengths and focus areas</span>
              </li>
            </ul>

            <button
              onClick={() => setActiveTab('courses')}
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2"
            >
              <span>Take a Skill Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300">Your Adaptive Roadmap Example</h3>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-emerald-300">
                <span>HTML & CSS Fundamentals</span>
                <span className="font-semibold text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded">Mastered ✓</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-emerald-300">
                <span>JavaScript ES6 & Async Basics</span>
                <span className="font-semibold text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded">Mastered ✓</span>
              </div>
              <div className="p-3 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-between text-indigo-200">
                <span>React State & Hooks Integration</span>
                <span className="font-semibold text-[10px] bg-indigo-500 text-white px-2 py-0.5 rounded">Focus Area</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-700/50 border border-slate-600 flex items-center justify-between text-slate-400">
                <span>Node.js Backend & API CRUD</span>
                <span className="font-semibold text-[10px] bg-slate-700 px-2 py-0.5 rounded">Upcoming</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 5. AI INTERNSHIP ASSISTANT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 dark:border-slate-800 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-bold mb-4">
              <Bot className="w-4 h-4" />
              <span>Context-Aware Mentor</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
              Meet SkillSphere AI — Your Personal 24/7 Internship Assistant
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              SkillSphere AI isn't a general chatbot. It maintains active context of your selected course, skill level, current learning module, active tasks, and weak areas to provide precise guidance.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200">💻 Technical Debugging</div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200">📚 Concept Explanations</div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200">💡 Project Idea Generator</div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200">🎤 Presentation Guidance</div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-5 text-white border border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">SkillSphere AI</p>
                <p className="text-[10px] text-indigo-300">Context: Web Dev | Task: API Integration</p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-800 p-3 rounded-xl text-slate-300 self-end max-w-[85%] ml-auto">
                "I'm stuck on my React API task. How do I handle loading states?"
              </div>
              <div className="bg-indigo-950/80 border border-indigo-700/50 p-3 rounded-xl text-indigo-100 max-w-[90%]">
                "You're working on the API Integration module! Create a boolean state `const [isLoading, setIsLoading] = useState(true)` before `fetch()`, set it to false when data arrives, and render a loading spinner component."
              </div>
            </div>

            <button
              onClick={() => setActiveTab('ai-chat')}
              className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors"
            >
              Try SkillSphere AI Chatbot
            </button>
          </div>
        </div>
      </section>


      {/* 6. PROJECT SHOWCASE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-3 py-1 rounded-full border border-rose-100 dark:border-rose-900">
            Real Impact & Work
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Admin-Approved Project Showcase</h2>
          <p className="text-xs text-slate-600 dark:text-slate-300">Only high-quality projects reviewed and approved by platform administrators appear in our public showcase.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showcaseProjects.slice(0, 3).map((prj) => (
            <div key={prj.id} className="bg-white dark:bg-slate-900 dark:border-slate-800 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group">
              <div className="relative h-44 overflow-hidden">
                <img src={prj.image} alt={prj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold border border-slate-700">
                  {prj.featuredBadge}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1">{prj.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">{prj.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span>By <strong className="text-slate-800 dark:text-slate-200">{prj.internName}</strong></span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Approved ✓</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button 
            onClick={() => setActiveTab('showcase')}
            className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
          >
            Explore Public Showcase Gallery
          </button>
        </div>
      </section>


      {/* 7. VERIFIED CERTIFICATE SECTION */}
      <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 rounded-full">
              Industry Credentials
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Earn QR-Verified Certificates Suitable for Resumes & LinkedIn
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Certificates are automatically generated only after 100% completion of learning modules, tasks, and admin approval of your final capstone project.
            </p>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Unique ID & QR Code</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-400" />
                <span>Authorized Mentor Signature</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('certificate')}
                className="px-6 py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/30"
              >
                View Sample Certificate
              </button>
              <button
                onClick={() => setActiveTab('verify')}
                className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold hover:bg-slate-700 transition-all"
              >
                Verify ID Portal
              </button>
            </div>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 shadow-2xl relative">
            <div className="bg-white text-slate-900 p-6 rounded-xl border-4 border-double border-indigo-900 shadow-inner space-y-4 text-center">
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-b pb-2">
                <span>SKILLSPHERE PLATFORM</span>
                <span>ID: SS-WEB-2026-00127</span>
              </div>
              <h3 className="text-xl font-black text-indigo-950 uppercase tracking-wide">Certificate of Completion</h3>
              <p className="text-xs text-slate-600">This certifies that</p>
              <p className="text-lg font-bold text-slate-900 underline decoration-indigo-500">Likitha S</p>
              <p className="text-xs text-slate-600">has successfully completed the 6-Week Internship in</p>
              <p className="text-sm font-bold text-indigo-700">Web Development</p>
              <div className="pt-4 border-t flex justify-between items-center text-[10px] text-slate-500">
                <span>Issue Date: Aug 14, 2026</span>
                <span className="font-bold text-emerald-600">[VERIFIED QR CODE]</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 8. CALL TO ACTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white rounded-3xl p-10 sm:p-16 shadow-2xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Discover Your Path?</h2>
          <p className="text-sm sm:text-base text-indigo-200 max-w-2xl mx-auto">
            Join thousands of interns, students, and professionals developing real-world skills across Technology, Design, Marketing, Business, and Research.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setActiveTab('courses')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-indigo-900 font-extrabold text-sm shadow-xl hover:bg-slate-100 transition-all"
            >
              Explore All Courses
            </button>
            <button
              onClick={() => setActiveTab('verify')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-950/80 border border-indigo-500/50 text-indigo-200 font-bold text-sm hover:bg-indigo-900 transition-all"
            >
              Verify Certificate
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
