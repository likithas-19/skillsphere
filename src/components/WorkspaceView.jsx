import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import { 
  CheckSquare, 
  Clock, 
  ExternalLink, 
  Github, 
  Globe, 
  Linkedin, 
  Folder, 
  AlertCircle, 
  CheckCircle2, 
  MessageSquare, 
  X,
  Upload,
  Sparkles,
  Plus
} from 'lucide-react';

export default function WorkspaceView() {
  const { tasks, submitTask, selectedCourseId, setActiveTab } = useApp();
  
  const [filterStatus, setFilterStatus] = useState('all'); // all, Pending, In Progress, Submitted, Approved, Changes Requested
  const [submitModalTask, setSubmitModalTask] = useState(null);

  const [githubUrl, setGithubUrl] = useState('');
  const [demoUrl, setDemoUrl] = useState('');
  const [driveUrl, setDriveUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [comments, setComments] = useState('');

  const filteredTasks = tasks.filter(task => {
    if (filterStatus === 'all') return true;
    return task.status === filterStatus;
  });

  const handleOpenSubmitModal = (task) => {
    setSubmitModalTask(task);
    setGithubUrl(task.links?.github || '');
    setDemoUrl(task.links?.demo || '');
    setDriveUrl(task.links?.drive || '');
    setLinkedinUrl(task.links?.linkedin || '');
    setComments(task.studentComment || '');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!submitModalTask) return;

    submitTask(submitModalTask.id, {
      github: githubUrl,
      demo: demoUrl,
      drive: driveUrl,
      linkedin: linkedinUrl,
      comment: comments
    });

    setSubmitModalTask(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Workspace Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-800">
            Task Execution Center
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2">My Workspace</h1>
          <p className="text-xs text-slate-600 dark:text-slate-300">Track tasks, submit project deliverables, view admin scores and feedback.</p>
        </div>

        <button
          onClick={() => setActiveTab('final-project')}
          className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors flex items-center gap-2 self-start md:self-auto shadow-sm"
        >
          <span>Final Project Workspace</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 flex-wrap text-xs font-semibold">
        {['all', 'Pending', 'In Progress', 'Submitted', 'Approved', 'Changes Requested'].map((st) => (
          <button
            key={st}
            onClick={() => setFilterStatus(st)}
            className={`px-3.5 py-2 rounded-xl transition-all ${
              filterStatus === st
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            {st === 'all' ? 'All Tasks' : st}
          </button>
        ))}
      </div>

      {/* Task Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTasks.map((task) => {
          const isApproved = task.status === 'Approved';
          const isSubmitted = task.status === 'Submitted';
          const isChangesReq = task.status === 'Changes Requested';

          return (
            <div 
              key={task.id} 
              className={`bg-white dark:bg-slate-900 rounded-3xl p-6 border shadow-sm space-y-4 transition-all ${
                isApproved ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/20 dark:bg-emerald-950/20' :
                isChangesReq ? 'border-rose-200 dark:border-rose-800 bg-rose-50/20 dark:bg-rose-950/20' :
                'border-slate-200 dark:border-slate-800'
              }`}
            >
              {/* Card Header: Priority & Status Pill */}
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                  task.priority === 'Urgent' ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300' :
                  task.priority === 'High' ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300' :
                  'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}>
                  Priority: {task.priority}
                </span>

                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  isApproved ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' :
                  isSubmitted ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800' :
                  isChangesReq ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800' :
                  'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                }`}>
                  {task.status}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{task.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{task.description}</p>
              </div>

              {/* Deadline & Course */}
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  Deadline: <strong className="text-slate-800 dark:text-slate-200">{task.deadline}</strong>
                </span>
              </div>

              {/* Admin Score & Feedback Box (If reviewed) */}
              {task.feedback && (
                <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-indigo-400">Admin Review & Score</span>
                    {task.score && <span className="px-2.5 py-0.5 rounded bg-emerald-500 text-white font-black text-xs">{task.score} / 10</span>}
                  </div>
                  <p className="text-slate-300 text-[11px] italic">"{task.feedback}"</p>
                </div>
              )}

              {/* Submission Links (If submitted) */}
              {task.links && (task.links.github || task.links.demo) && (
                <div className="flex items-center gap-3 pt-2 text-xs">
                  {task.links.github && (
                    <a href={task.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-700 hover:text-indigo-600 font-semibold">
                      <Github className="w-3.5 h-3.5" /> GitHub Code
                    </a>
                  )}
                  {task.links.demo && (
                    <a href={task.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-indigo-600 hover:underline font-semibold">
                      <Globe className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  )}
                </div>
              )}

              {/* Submission Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => handleOpenSubmitModal(task)}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    isApproved 
                      ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' 
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/30'
                  }`}
                >
                  <Upload className="w-4 h-4" />
                  <span>{isSubmitted ? 'Update Submission' : isApproved ? 'View Submission' : 'Submit Task Deliverables'}</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Task Submission Modal */}
      {submitModalTask && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-fadeIn">
            
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/20 px-2.5 py-0.5 rounded">
                  Deliverable Submission
                </span>
                <h3 className="text-lg font-bold mt-1">{submitModalTask.title}</h3>
              </div>
              <button onClick={() => setSubmitModalTask(null)} className="p-2 rounded-xl text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Submission Form */}
            <form onSubmit={handleFormSubmit} className="p-6 space-y-4 text-xs">
              
              <div>
                <label className="block font-bold text-slate-700 mb-1">GitHub Repository Link</label>
                <div className="relative">
                  <input
                    type="url"
                    placeholder="https://github.com/username/repository"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    className="w-full px-3.5 py-2.5 pl-9 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 text-xs"
                  />
                  <Github className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Live Demo Link</label>
                <div className="relative">
                  <input
                    type="url"
                    placeholder="https://my-app.vercel.app"
                    value={demoUrl}
                    onChange={(e) => setDemoUrl(e.target.value)}
                    className="w-full px-3.5 py-2.5 pl-9 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 text-xs"
                  />
                  <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Google Drive Link</label>
                  <input
                    type="url"
                    placeholder="https://drive.google.com/..."
                    value={driveUrl}
                    onChange={(e) => setDriveUrl(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">LinkedIn Proof Link</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/..."
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Student Comments & Notes</label>
                <textarea
                  rows="3"
                  placeholder="Describe your implementation, features completed, or special notes for mentor review..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 text-xs"
                />
              </div>

              <div className="pt-4 border-t flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSubmitModalTask(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-md shadow-indigo-600/30"
                >
                  Submit Deliverable
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
