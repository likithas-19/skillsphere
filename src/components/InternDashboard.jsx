import React from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import { 
  Sparkles, 
  CheckSquare, 
  BookOpen, 
  Trophy, 
  Calendar, 
  Clock, 
  Bot, 
  ArrowRight, 
  AlertCircle, 
  TrendingUp, 
  CheckCircle2,
  FolderGit2
} from 'lucide-react';

export default function InternDashboard() {
  const { user, selectedCourseId, tasks, scheduleEvents, leaderboard, setActiveTab } = useApp();

  const course = COURSES.find(c => c.id === selectedCourseId) || COURSES[0];
  const completedTasks = tasks.filter(t => t.status === 'Approved' || t.status === 'Completed').length;
  const totalTasks = tasks.length;
  const pendingTask = tasks.find(t => t.status === 'In Progress' || t.status === 'Pending') || tasks[0];

  const currentRank = leaderboard.find(l => l.isCurrentUser)?.rank || 7;
  const totalInterns = 42;
  const percentile = Math.round(((totalInterns - currentRank) / totalInterns) * 100);

  const completedModules = user.completedModulesCount || 2;
  const totalModules = 6;
  const learningPercent = Math.round((completedModules / totalModules) * 100);
  const internshipPercent = 75;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Active Path: {course.title}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Good Morning, {user.name} 👋
          </h1>
          <p className="text-xs text-slate-300">
            Welcome to your SkillSphere workspace. Keep up the momentum on your tasks and capstone project!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('workspace')}
            className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2"
          >
            <CheckSquare className="w-4 h-4" />
            <span>View Workspace Tasks</span>
          </button>
        </div>
      </div>

      {/* Primary KPI Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Metric 1: Internship Progress */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Internship Progress</span>
            <span className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400"><TrendingUp className="w-4 h-4" /></span>
          </div>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white">{internshipPercent}%</p>
          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
            <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${internshipPercent}%` }} />
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">On track for graduation</p>
        </div>

        {/* Metric 2: Tasks Completed */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Tasks Completed</span>
            <span className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-4 h-4" /></span>
          </div>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white">{completedTasks} / {totalTasks}</p>
          <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">{totalTasks - completedTasks} tasks currently pending</p>
        </div>

        {/* Metric 3: Learning Progress */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Learning Progress</span>
            <span className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400"><BookOpen className="w-4 h-4" /></span>
          </div>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white">{learningPercent}%</p>
          <p className="text-[11px] text-purple-600 dark:text-purple-400 font-semibold">{completedModules} of {totalModules} Modules Done</p>
        </div>

        {/* Metric 4: Course Rank */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Course Standing</span>
            <span className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400"><Trophy className="w-4 h-4" /></span>
          </div>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white">#{currentRank} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">/ 42</span></p>
          <p className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold">Ahead of {percentile}% of learners!</p>
        </div>

      </div>

      {/* Task Countdown & Upcoming Meetings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Active Task & Project Status (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Active Task Card */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs font-bold flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                <span>Today's Task</span>
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Due Today, 11:59 PM</span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{pendingTask?.title || 'API Integration Task'}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{pendingTask?.description}</p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">Course: <strong className="text-slate-800 dark:text-slate-200">{course.title}</strong></span>
              <button
                onClick={() => setActiveTab('workspace')}
                className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors flex items-center gap-1.5"
              >
                <span>Submit Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Current Capstone Project Status */}
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-6 rounded-3xl border border-slate-800 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold">
                Capstone Project Status
              </span>
              <span className="text-xs text-slate-400">Target Due: Aug 20</span>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-white">EcoPulse — Carbon Footprint App</h3>
              <p className="text-xs text-slate-300 mt-1">Full-stack web application tracking personal carbon footprints with interactive charts.</p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-semibold">Status: In Progress</span>
              <button
                onClick={() => setActiveTab('final-project')}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all"
              >
                Manage Final Project
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Schedule & SkillSphere AI Quick Prompts (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Upcoming Schedule Card */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Upcoming Schedule</span>
              </h3>
              <button onClick={() => setActiveTab('schedule')} className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
                View Full Calendar
              </button>
            </div>

            <div className="space-y-3">
              {scheduleEvents.slice(0, 3).map((ev) => (
                <div key={ev.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-slate-800 dark:text-white">{ev.title}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{ev.time}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                    {ev.typeBadge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick AI Assistant Card */}
          <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 shadow-lg space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold">SkillSphere AI Assistant</h4>
                <p className="text-[11px] text-indigo-300">Context-Aware Guidance</p>
              </div>
            </div>

            <p className="text-xs text-slate-300">
              Need help with your React API integration or code debugging? Ask SkillSphere AI now!
            </p>

            <button
              onClick={() => setActiveTab('ai-chat')}
              className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2"
            >
              <Bot className="w-4 h-4" />
              <span>Ask SkillSphere AI</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
