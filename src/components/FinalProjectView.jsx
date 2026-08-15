import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import { 
  FolderGit2, 
  Globe, 
  Github, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Sparkles, 
  Upload, 
  Award,
  ArrowRight
} from 'lucide-react';

export default function FinalProjectView() {
  const { selectedCourseId, user, adminApproveProject, setActiveTab, showToast } = useApp();

  const course = COURSES.find(c => c.id === selectedCourseId) || COURSES[0];

  const [projectTitle, setProjectTitle] = useState('EcoPulse — Carbon Footprint Tracker App');
  const [description, setDescription] = useState('Full-stack web application tracking personal carbon footprints with interactive charts, goal setting, and community badges.');
  const [github, setGithub] = useState('https://github.com/likitha/ecopulse');
  const [demo, setDemo] = useState('https://ecopulse-app.vercel.app');
  const [tags, setTags] = useState('React, TailwindCSS, Node.js, PostgreSQL');
  const [status, setStatus] = useState('Approved'); // 'Draft', 'Submitted', 'Under Review', 'Approved'

  const handleSubmitFinalProject = (e) => {
    e.preventDefault();
    setStatus('Submitted');
    
    // Simulate auto approval or dispatch to admin
    setTimeout(() => {
      setStatus('Approved');
      adminApproveProject({
        title: projectTitle,
        description,
        github,
        demo,
        tags,
        courseId: selectedCourseId,
        internName: user.name,
        badge: '💻 Best Web Project'
      });
      showToast('🎉 Capstone Project Submitted & Approved by Admin! Certificate unlocked.');
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold uppercase tracking-wider">
            Capstone Capstone Milestone
          </span>
          <h1 className="text-3xl font-extrabold">{course.title} Final Project</h1>
          <p className="text-xs text-slate-300">
            Submit your complete capstone project for administrator review. Approved projects are published to the Public Showcase and unlock your Certificate.
          </p>
        </div>

        <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 text-center shrink-0">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Review Status</p>
          <span className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            status === 'Approved' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' :
            status === 'Submitted' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' :
            'bg-amber-500/20 text-amber-300 border border-amber-500/40'
          }`}>
            {status} ✓
          </span>
        </div>
      </div>

      {/* Progress Timeline Tracker */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Submission Lifecycle Tracker</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-900 font-bold border border-emerald-200">
            1. Draft ✓
          </div>
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-900 font-bold border border-emerald-200">
            2. Submitted ✓
          </div>
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-900 font-bold border border-emerald-200">
            3. Under Review ✓
          </div>
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-900 font-bold border border-emerald-200">
            4. Approved ✓
          </div>
          <div className="p-3 rounded-xl bg-purple-50 text-purple-900 font-bold border border-purple-200">
            5. Showcase & Certificate 🏆
          </div>
        </div>
      </div>

      {/* Project Submission Form */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <FolderGit2 className="w-5 h-5 text-indigo-600" />
          <span>Project Details & Artifact Links</span>
        </h3>

        <form onSubmit={handleSubmitFinalProject} className="space-y-4 text-xs">
          
          <div>
            <label className="block font-bold text-slate-700 mb-1">Final Project Title</label>
            <input
              type="text"
              required
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 font-bold text-xs"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Comprehensive Project Description</label>
            <textarea
              rows="4"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 text-xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-700 mb-1">GitHub Repository Link</label>
              <input
                type="url"
                required
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 text-xs"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Live Application Demo URL</label>
              <input
                type="url"
                required
                value={demo}
                onChange={(e) => setDemo(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Technologies & Tools Used (comma separated)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 text-xs"
            />
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setActiveTab('certificate')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4" />
              <span>Generate Certificate Now</span>
            </button>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2"
            >
              <Upload className="w-4 h-4" />
              <span>{status === 'Approved' ? 'Update & Re-Submit Project' : 'Submit Final Capstone'}</span>
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}
