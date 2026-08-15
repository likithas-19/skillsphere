import React from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import { 
  Trophy, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  ArrowRight, 
  BarChart3, 
  Target 
} from 'lucide-react';

export default function SkillProfileView() {
  const { user, selectedCourseId, quizScoreResult, setActiveTab } = useApp();

  const course = COURSES.find(c => c.id === selectedCourseId) || COURSES[0];

  const overallScore = quizScoreResult?.score || user.overallScore || 78;
  const level = quizScoreResult?.level || user.skillLevel || 'Intermediate';

  const breakdown = user.skillsBreakdown || {
    'HTML5 & CSS3': 90,
    'JavaScript ES6+': 75,
    'React.js': 60,
    'REST APIs': 70,
    'Git & GitHub': 85,
    'PostgreSQL': 50
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* Top Banner Card */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              Assessment Results Verified
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold">Skill Profile Created</h1>
            <p className="text-sm text-slate-300">
              Evaluated for <strong>{course.title}</strong>. Your customized roadmap is ready based on your calculated score and focus areas.
            </p>
          </div>

          <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700 text-center min-w-[200px] shadow-lg">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Overall Skill Score</p>
            <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 my-1">
              {overallScore}%
            </p>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              level === 'Advanced' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' :
              level === 'Intermediate' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40' :
              'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
            }`}>
              Level: {level}
            </span>
          </div>
        </div>
      </div>

      {/* Strengths & Weak Areas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Strengths */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-emerald-700">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold text-slate-900">Verified Strengths</h3>
          </div>
          <div className="space-y-2">
            {user.strengths.map((str, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-900 flex items-center justify-between">
                <span>{str}</span>
                <span className="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded font-semibold">Strong ✓</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weak Areas */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-amber-700">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <h3 className="text-base font-bold text-slate-900">Recommended Focus Areas</h3>
          </div>
          <div className="space-y-2">
            {user.weakAreas.map((weak, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-amber-50 border border-amber-100 text-xs font-bold text-amber-900 flex items-center justify-between">
                <span>{weak}</span>
                <span className="text-[10px] bg-amber-200 text-amber-950 px-2 py-0.5 rounded font-semibold">Focus Topic 🎯</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skill Breakdown Chart */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            <span>Domain Skill Breakdown</span>
          </h3>
          <span className="text-xs text-slate-500">Based on Quiz Assessment</span>
        </div>

        <div className="space-y-4">
          {Object.entries(breakdown).map(([skill, score]) => (
            <div key={skill} className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>{skill}</span>
                <span>{score}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden p-0.5 border border-slate-200/60">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    score >= 80 ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                    score >= 60 ? 'bg-gradient-to-r from-indigo-500 to-blue-500' :
                    'bg-gradient-to-r from-amber-500 to-orange-500'
                  }`} 
                  style={{ width: `${score}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => setActiveTab('learning-path')}
          className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-xl shadow-indigo-600/30 transition-all inline-flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          <span>View Personalized Learning Path</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
