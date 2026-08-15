import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { COURSES, COURSE_CATEGORIES } from '../data/coursesData';
import { 
  Code, 
  Sparkles, 
  Cpu, 
  Terminal, 
  BarChart3, 
  LineChart, 
  Palette, 
  Image, 
  Megaphone, 
  Target, 
  PenTool, 
  FileText, 
  Share2, 
  Briefcase, 
  Users, 
  Calendar, 
  Search, 
  Microscope, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight,
  Filter
} from 'lucide-react';

const ICON_MAP = {
  Code,
  Sparkles,
  Cpu,
  Terminal,
  BarChart3,
  LineChart,
  Palette,
  Image,
  Megaphone,
  Target,
  PenTool,
  FileText,
  Share2,
  Briefcase,
  Users,
  Calendar,
  Search,
  Microscope,
  HeartHandshake
};

export default function CoursesPage() {
  const { selectCourse, coursesList } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const targetCourses = coursesList || COURSES;

  const filteredCourses = targetCourses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (course.skills && course.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-800">
          Equal Importance Across All Paths
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Explore Your Path</h1>
        <p className="text-base text-slate-600 dark:text-slate-300">
          Choose the area you want to learn and grow in. SkillSphere supports tech, design, marketing, content, operations, and social impact with equal priority.
        </p>

        {/* Search Input */}
        <div className="max-w-md mx-auto relative pt-2">
          <input
            type="text"
            placeholder="Search by course name, skill, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 rounded-xl border border-slate-300 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs shadow-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-5" />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
        {COURSE_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === cat.id
                ? 'bg-slate-900 dark:bg-indigo-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Course Cards Grid - Equal Sized SaaS Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => {
          const IconComponent = ICON_MAP[course.iconName] || Code;
          return (
            <div 
              key={course.id} 
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Icon & Duration Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${course.accentGradient} text-white flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${course.badgeColor}`}>
                    {course.duration}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-3">{course.tagline}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 leading-relaxed">
                  {course.description}
                </p>

                {/* Level & Project Goal */}
                <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-100 dark:border-slate-700 mb-4 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-500 dark:text-slate-400 font-medium">
                    <span>Level:</span>
                    <strong className="text-slate-800 dark:text-slate-200">{course.difficulty}</strong>
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Project: </span>
                    <span>{course.projectGoal}</span>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Skills Covered:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {course.skills.map((skill, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200/60 dark:border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <button
                  onClick={() => selectCourse(course.id)}
                  className="w-full py-3 rounded-xl bg-slate-900 dark:bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Select Course & Preview</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
          <p className="text-base font-bold text-slate-800 dark:text-white">No courses match your search criteria.</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Try clearing your search query or selecting "All Domains".</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
