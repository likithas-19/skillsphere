import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import { 
  Compass, 
  Github, 
  Globe, 
  Star, 
  Award, 
  CheckCircle2, 
  Search,
  Sparkles 
} from 'lucide-react';

export default function ProjectShowcaseView() {
  const { showcaseProjects } = useApp();
  const [selectedCat, setSelectedCat] = useState('all');

  const filteredProjects = showcaseProjects.filter(p => {
    if (selectedCat === 'all') return true;
    return p.category === selectedCat;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-3 py-1 rounded-full border border-rose-100 dark:border-rose-900">
          Admin-Approved Work
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">SkillSphere Project Showcase</h1>
        <p className="text-base text-slate-600 dark:text-slate-300">
          "Real projects. Real learning. Real impact."
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Explore capstone deliverables completed by interns across technology, design, marketing, research, and social impact. Verified by mentor evaluation.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2">
        {[
          { id: 'all', label: 'All Projects' },
          { id: 'tech', label: 'Web & AI Tech' },
          { id: 'design', label: 'UI/UX & Design' },
          { id: 'content', label: 'Content & Copywriting' },
          { id: 'operations', label: 'Business & Operations' },
          { id: 'impact', label: 'Social Impact & Research' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCat(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCat === tab.id
                ? 'bg-slate-900 dark:bg-indigo-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((prj) => (
          <div 
            key={prj.id}
            className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Image & Featured Badge */}
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img 
                  src={prj.image} 
                  alt={prj.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-extrabold shadow-md border border-slate-700">
                  {prj.featuredBadge}
                </span>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded">
                    Intern: {prj.internName}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors leading-snug mt-1">
                    {prj.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {prj.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {prj.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200/60 dark:border-slate-700">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links & Approval Footer */}
            <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 mt-4 flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs font-bold">
                {prj.github && (
                  <a href={prj.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-indigo-400">
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                )}
                {prj.demo && (
                  <a href={prj.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline">
                    <Globe className="w-3.5 h-3.5" /> Demo
                  </a>
                )}
              </div>

              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-100 dark:border-emerald-800">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Admin Verified
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
