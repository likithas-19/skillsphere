import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, ShieldCheck, Github, Linkedin, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const { setActiveTab } = useApp();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Col 1: Brand Info */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-xl tracking-tight font-sans">
              <span className="text-indigo-400 font-black">SKILL</span>
              <span className="text-purple-400 font-black">SPHERE</span>
            </span>
          </div>
          <p className="text-sm text-slate-300 font-medium">
            "Every Skill. Every Path. One Platform."
          </p>
          <p className="text-xs text-slate-400">
            Explore. Learn. Build. Grow. An AI-assisted internship ecosystem empowering learners across technology, design, marketing, operations, and social impact.
          </p>
        </div>

        {/* Col 2: Internship Domains */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Internship Paths</h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => setActiveTab('courses')} className="hover:text-indigo-400 transition-colors">💻 Web & AI Web Development</button></li>
            <li><button onClick={() => setActiveTab('courses')} className="hover:text-indigo-400 transition-colors">🤖 AI Tools & Prompt Engineering</button></li>
            <li><button onClick={() => setActiveTab('courses')} className="hover:text-indigo-400 transition-colors">📊 Data Science & AI Analytics</button></li>
            <li><button onClick={() => setActiveTab('courses')} className="hover:text-indigo-400 transition-colors">🎨 UI/UX & Graphic Design</button></li>
            <li><button onClick={() => setActiveTab('courses')} className="hover:text-indigo-400 transition-colors">📱 Digital Marketing & SEO</button></li>
            <li><button onClick={() => setActiveTab('courses')} className="hover:text-indigo-400 transition-colors">💼 HR, Business & Event Management</button></li>
          </ul>
        </div>

        {/* Col 3: Platform Features */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Ecosystem Features</h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => setActiveTab('courses')} className="hover:text-indigo-400 transition-colors">🌱 Beginner Mode & Skill Quizzes</button></li>
            <li><button onClick={() => setActiveTab('learning-path')} className="hover:text-indigo-400 transition-colors">🗺️ Personalized Learning Paths</button></li>
            <li><button onClick={() => setActiveTab('ai-chat')} className="hover:text-indigo-400 transition-colors">🤖 Context-Aware SkillSphere AI</button></li>
            <li><button onClick={() => setActiveTab('workspace')} className="hover:text-indigo-400 transition-colors">⚡ Task & Project Workspace</button></li>
            <li><button onClick={() => setActiveTab('showcase')} className="hover:text-indigo-400 transition-colors">🏆 Public Project Showcase</button></li>
            <li><button onClick={() => setActiveTab('verify')} className="hover:text-indigo-400 transition-colors flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Certificate Verification Portal</button></li>
          </ul>
        </div>

        {/* Col 4: Roles & Trust */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Roles & Institutions</h4>
          <p className="text-xs text-slate-400 mb-4">
            Designed for students, universities, internship providers, and hiring managers seeking verified project-based competencies.
          </p>
          <div className="flex items-center gap-3">
            <button onClick={() => setActiveTab('admin')} className="px-3 py-1.5 rounded-lg bg-indigo-900/60 border border-indigo-700 text-indigo-200 text-xs font-semibold hover:bg-indigo-800 transition-all">
              Admin Portal
            </button>
            <button onClick={() => setActiveTab('verify')} className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-all">
              Verify Credentials
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>© 2026 SkillSphere Platform. All rights reserved. Equal Importance across all learning domains.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}
