import React from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import { 
  X, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Search, 
  Target, 
  Wrench, 
  Layers, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

export default function CourseDetailsModal() {
  const { selectedCourseId, setActiveTab, startBeginnerMode, startQuiz } = useApp();

  const course = COURSES.find(c => c.id === selectedCourseId) || COURSES[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
        
        {/* Modal Top Header Banner */}
        <div className={`bg-gradient-to-r ${course.accentGradient} text-white p-8 sm:p-10 relative`}>
          <button
            onClick={() => setActiveTab('courses')}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
              {course.duration} • {course.difficulty}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black">{course.title}</h1>
            <p className="text-sm text-white/90 max-w-2xl leading-relaxed">{course.description}</p>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Key Grid: Skills & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Skills */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Skills You'll Master</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-indigo-600" />
                <span>Technologies & Tools</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {course.tools.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Goal & Outcomes */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-2xl border border-indigo-100 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-2">
              <Target className="w-4 h-4 text-indigo-600" />
              <span>Capstone Project Goal</span>
            </h3>
            <p className="text-sm font-bold text-indigo-950">{course.projectGoal}</p>
            <div className="pt-2 border-t border-indigo-100/80 space-y-1.5 text-xs text-indigo-900">
              <p className="font-semibold">Expected Learning Outcomes:</p>
              {course.expectedOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Learning Structure */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Weekly Learning Structure</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {course.weeklyModules.map((m) => (
                <div key={m.week} className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    W{m.week}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{m.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Est. {m.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Decision CTAs */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            <p className="text-center text-xs font-bold text-slate-600 uppercase tracking-wider">Choose How You Want To Begin:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Beginner Button */}
              <button
                onClick={startBeginnerMode}
                className="p-5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-300 text-emerald-900 text-left transition-all group shadow-sm"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-base font-extrabold flex items-center gap-2">
                    <span>🌱</span> I'm an Absolute Beginner
                  </span>
                  <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-emerald-700">
                  Skip assessment, set level to Beginner, start from fundamentals, and get a guided foundation path.
                </p>
              </button>

              {/* Quiz Button */}
              <button
                onClick={() => startQuiz(course.id)}
                className="p-5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-left transition-all group shadow-lg shadow-indigo-600/30"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-base font-extrabold flex items-center gap-2">
                    <Search className="w-4 h-4 text-indigo-300" /> Take Skill Assessment
                  </span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-indigo-100">
                  Take a 10-question course quiz to test your current knowledge and unlock a tailored roadmap focusing on weak areas.
                </p>
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
