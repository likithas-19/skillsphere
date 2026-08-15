import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import { 
  CheckCircle2, 
  Circle, 
  BookOpen, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Target, 
  FileCode,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function LearningPathView() {
  const { user, selectedCourseId, completeModule, setActiveTab } = useApp();

  const course = COURSES.find(c => c.id === selectedCourseId) || COURSES[0];
  const [activeModuleIndex, setActiveModuleIndex] = useState(2); // Default week 3

  const completedCount = user.completedModulesCount || 2;
  const progressPercent = Math.round((completedCount / course.weeklyModules.length) * 100);

  const selectedModule = course.weeklyModules[activeModuleIndex] || course.weeklyModules[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 text-center md:text-left">
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            Adaptive Learning Path
          </span>
          <h1 className="text-3xl font-extrabold">{course.title} Roadmap</h1>
          <p className="text-xs text-slate-300">
            Tailored for <strong>{user.name}</strong> ({user.mode === 'beginner' ? 'Beginner Mode' : 'Skill Assessed: ' + user.skillLevel}). Focus topics highlighted in purple.
          </p>
        </div>

        <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 text-center min-w-[200px] shadow-md">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Learning Progress</p>
          <p className="text-4xl font-extrabold text-indigo-400 my-1">{progressPercent}%</p>
          <p className="text-[11px] text-slate-400">{completedCount} of {course.weeklyModules.length} Modules Completed</p>
        </div>
      </div>

      {/* Main Roadmap Split: Timeline List vs Module Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Timeline Roadmap Navigation (Left 4 cols) */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Learning Modules</span>
          </h3>

          <div className="space-y-3 relative before:absolute before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            {course.weeklyModules.map((m, idx) => {
              const isCompleted = idx < completedCount;
              const isActive = idx === activeModuleIndex;
              const isFocus = idx === 2 || idx === 4; // Simulated focus areas

              return (
                <div
                  key={m.week}
                  onClick={() => setActiveModuleIndex(idx)}
                  className={`relative flex items-start gap-3 p-3.5 rounded-2xl cursor-pointer transition-all ${
                    isActive 
                      ? 'bg-indigo-50 dark:bg-indigo-950/80 border-2 border-indigo-600 shadow-sm' 
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="relative z-10 shrink-0 mt-0.5">
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 bg-white dark:bg-slate-900 rounded-full" />
                    ) : isActive ? (
                      <div className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-[10px] flex items-center justify-center">
                        {m.week}
                      </div>
                    ) : (
                      <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600 bg-white dark:bg-slate-900 rounded-full" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="text-xs font-bold text-slate-900 dark:text-white truncate">Week {m.week}: {m.title}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-1">
                      {isCompleted && (
                        <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                          Mastered ✓
                        </span>
                      )}
                      {isFocus && !isCompleted && (
                        <span className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 text-[10px] font-bold">
                          Focus Topic 🎯
                        </span>
                      )}
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{m.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Module Detail Reader (Right 8 cols) */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded border border-indigo-100 dark:border-indigo-800">
                Module {selectedModule.week} of {course.weeklyModules.length}
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-2">{selectedModule.title}</h2>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Est. {selectedModule.time}</span>
            </div>
          </div>

          {/* Module Content & Guidance */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Core Concepts & Learning Materials</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              In this module, you will dive into the core architecture of <strong>{selectedModule.title}</strong>. Complete the reading resources below, perform the practical task in your workspace, and verify your knowledge with the mini check.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-200">
                <span className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  Official Documentation Guide
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-200">
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  SkillSphere Practice Cheatsheet
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Practice Task Box */}
          <div className="bg-indigo-50/70 dark:bg-indigo-950/60 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-800 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
              <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Module Hands-On Task</span>
            </h4>
            <p className="text-xs text-indigo-950 dark:text-indigo-200 font-medium">
              Build a functional component demonstrating {selectedModule.title}. Ensure clean code formatting and commit your progress to your GitHub repository.
            </p>
          </div>

          {/* Completion Controls */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => setActiveTab('workspace')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
            >
              Go To Workspace Tasks
            </button>

            <button
              onClick={() => completeModule(activeModuleIndex)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Mark Module as Completed ✓</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
