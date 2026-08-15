import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { COURSE_CATEGORIES } from '../data/coursesData';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  CheckSquare, 
  FolderGit2, 
  Award, 
  Star, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  Github, 
  Globe, 
  Trash2,
  Edit3,
  ShieldCheck,
  Trophy,
  Eye,
  UserCheck,
  X
} from 'lucide-react';

export default function AdminDashboard() {
  const { 
    tasks, 
    adminReviewTask, 
    adminCreateTask, 
    adminEditTask,
    adminDeleteTask,
    adminApproveProject, 
    admin, 
    showcaseProjects, 
    adminEditShowcase,
    adminDeleteShowcase,
    leaderboard, 
    coursesList,
    adminAddCourse,
    adminEditCourse,
    adminDeleteCourse,
    user,
    adminEditProfile,
    adminAddAchievement,
    adminDeleteAchievement,
    certificate,
    adminEditCertificate,
    adminDeleteCertificate,
    updateAdminProfile,
    changeAdminPassword,
    activeAdminTab,
    setActiveAdminTab,
    showToast
  } = useApp();

  // Task Reviewer State
  const [selectedTask, setSelectedTask] = useState(tasks[0]);
  const [scoreInput, setScoreInput] = useState(8);
  const [feedbackInput, setFeedbackInput] = useState('Good work. Improve responsiveness and documentation.');

  // Create Task Form State
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [newTaskCourse, setNewTaskCourse] = useState('web-dev');
  const [newTaskDeadline, setNewTaskDeadline] = useState('2026-08-25');
  const [newTaskPriority, setNewTaskPriority] = useState('Medium');

  // Course Management State
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [courseFormTitle, setCourseFormTitle] = useState('');
  const [courseFormCategory, setCourseFormCategory] = useState('tech');
  const [courseFormTagline, setCourseFormTagline] = useState('');
  const [courseFormDesc, setCourseFormDesc] = useState('');
  const [courseFormSkills, setCourseFormSkills] = useState('');
  const [courseFormTools, setCourseFormTools] = useState('');

  // Intern Profile Form State
  const [profileName, setProfileName] = useState(user.name);
  const [profileCollege, setProfileCollege] = useState(user.college);
  const [profileLevel, setProfileLevel] = useState(user.skillLevel);
  const [profileScore, setProfileScore] = useState(user.overallScore);
  const [newBadgeTitle, setNewBadgeTitle] = useState('');
  const [newBadgeIcon, setNewBadgeIcon] = useState('🏆');

  // Certificate Form State
  const [certHolderName, setCertHolderName] = useState(certificate.internName);
  const [certCourseTitle, setCertCourseTitle] = useState(certificate.courseName);
  const [certId, setCertId] = useState(certificate.id);
  const [certProjectName, setCertProjectName] = useState(certificate.projectName);
  const [certSignature, setCertSignature] = useState(certificate.signatureName);

  // Admin Account Settings State
  const [adminNameInput, setAdminNameInput] = useState(admin.name);
  const [adminEmailInput, setAdminEmailInput] = useState(admin.email || 'admin@skillsphere.edu');
  const [adminTitleInput, setAdminTitleInput] = useState(admin.title || 'Lead Internship Director & Mentor');
  const [adminDeptInput, setAdminDeptInput] = useState(admin.department || 'Academic Affairs & Mentorship');
  
  // Admin Change Password State
  const [adminCurrPass, setAdminCurrPass] = useState('');
  const [adminNewPass, setAdminNewPass] = useState('');
  const [adminConfPass, setAdminConfPass] = useState('');
  const [adminPassError, setAdminPassError] = useState('');

  // Selected Intern Inspector State
  const sampleInterns = [
    {
      id: 'int-1',
      name: user.name,
      email: user.email || 'intern@skillsphere.edu',
      college: user.college,
      domain: 'AI Web Development',
      skillLevel: user.skillLevel,
      score: user.overallScore,
      avatar: user.avatar,
      achievements: user.achievements || [],
      certificateId: certificate.id,
      tasksCompleted: 4,
      totalTasks: 5
    },
    {
      id: 'int-2',
      name: 'Rahul Verma',
      email: 'rahul.v@skillsphere.edu',
      college: 'National Institute of Technology',
      domain: 'AI Prompt Engineering',
      skillLevel: 'Advanced',
      score: 94,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      achievements: [{ title: 'Prompt Master', icon: '🤖', date: '2026-08-10' }],
      certificateId: 'SS-AI-2026-00890',
      tasksCompleted: 5,
      totalTasks: 5
    },
    {
      id: 'int-3',
      name: 'Ananya Sharma',
      email: 'ananya.s@skillsphere.edu',
      college: 'Delhi Technological University',
      domain: 'Graphic Design & Marketing',
      skillLevel: 'Intermediate',
      score: 88,
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80',
      achievements: [{ title: 'Design Pioneer', icon: '🎨', date: '2026-08-05' }],
      certificateId: 'SS-UIUX-2026-00755',
      tasksCompleted: 3,
      totalTasks: 5
    },
    {
      id: 'int-4',
      name: 'Vikram Malhotra',
      email: 'vikram.m@skillsphere.edu',
      college: 'BITS Pilani',
      domain: 'AI Data Analytics',
      skillLevel: 'Advanced',
      score: 96,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
      achievements: [{ title: 'Data Scientist', icon: '📊', date: '2026-08-12' }],
      certificateId: 'SS-DATA-2026-00412',
      tasksCompleted: 5,
      totalTasks: 5
    }
  ];

  const [selectedInspectorIntern, setSelectedInspectorIntern] = useState(sampleInterns[0]);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleSaveAdminProfile = (e) => {
    e.preventDefault();
    updateAdminProfile({
      name: adminNameInput,
      email: adminEmailInput,
      title: adminTitleInput,
      department: adminDeptInput
    });
  };

  const handleChangeAdminPasswordSubmit = (e) => {
    e.preventDefault();
    setAdminPassError('');
    if (adminNewPass.length < 6) {
      setAdminPassError('New password must be at least 6 characters.');
      return;
    }
    if (adminNewPass !== adminConfPass) {
      setAdminPassError('Passwords do not match. Please re-type.');
      return;
    }
    const success = changeAdminPassword(adminCurrPass, adminNewPass);
    if (success) {
      setAdminCurrPass('');
      setAdminNewPass('');
      setAdminConfPass('');
    }
  };

  const pendingSubmissions = tasks.filter(t => t.status === 'Submitted' || t.status === 'In Progress');

  // Handlers
  const handleReviewSubmit = (actionStatus) => {
    if (!selectedTask) return;
    adminReviewTask(selectedTask.id, actionStatus, scoreInput, feedbackInput);
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle) return;
    adminCreateTask({
      title: newTaskTitle,
      description: newTaskDesc,
      courseId: newTaskCourse,
      deadline: newTaskDeadline,
      priority: newTaskPriority
    });
    setNewTaskTitle('');
    setNewTaskDesc('');
  };

  const handleSaveCourse = (e) => {
    e.preventDefault();
    if (editingCourseId) {
      adminEditCourse(editingCourseId, {
        title: courseFormTitle,
        category: courseFormCategory,
        tagline: courseFormTagline,
        description: courseFormDesc,
        skills: courseFormSkills,
        tools: courseFormTools
      });
      setEditingCourseId(null);
    } else {
      adminAddCourse({
        title: courseFormTitle,
        category: courseFormCategory,
        tagline: courseFormTagline,
        description: courseFormDesc,
        skills: courseFormSkills,
        tools: courseFormTools
      });
    }
    setCourseFormTitle('');
    setCourseFormTagline('');
    setCourseFormDesc('');
    setCourseFormSkills('');
    setCourseFormTools('');
  };

  const handleStartEditCourse = (c) => {
    setEditingCourseId(c.id);
    setCourseFormTitle(c.title);
    setCourseFormCategory(c.category);
    setCourseFormTagline(c.tagline);
    setCourseFormDesc(c.description);
    setCourseFormSkills(Array.isArray(c.skills) ? c.skills.join(', ') : c.skills);
    setCourseFormTools(Array.isArray(c.tools) ? c.tools.join(', ') : c.tools);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    adminEditProfile({
      name: profileName,
      college: profileCollege,
      skillLevel: profileLevel,
      overallScore: Number(profileScore)
    });
  };

  const handleAddAchievement = (e) => {
    e.preventDefault();
    if (!newBadgeTitle) return;
    adminAddAchievement({
      title: newBadgeTitle,
      icon: newBadgeIcon,
      date: 'Today'
    });
    setNewBadgeTitle('');
  };

  const handleSaveCertificate = (e) => {
    e.preventDefault();
    adminEditCertificate({
      id: certId,
      internName: certHolderName,
      courseName: certCourseTitle,
      projectName: certProjectName,
      signatureName: certSignature,
      status: 'VERIFIED'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Admin Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-bold uppercase tracking-wider">
            FULL PLATFORM ADMIN SUITE
          </span>
          <h1 className="text-3xl font-extrabold">SkillSphere Administrator Hub</h1>
          <p className="text-xs text-slate-300">
            Full management access: Add, edit, or delete any course, task, intern profile, achievement badge, certificate, or showcase project.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-4 py-2 rounded-xl bg-purple-950 border border-purple-700/60 text-purple-200 text-xs font-bold">
            Super Administrator Mode
          </span>
        </div>
      </div>

      {/* Admin Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Active Interns</p>
          <p className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">42</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Active Courses</p>
          <p className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 mt-1">{coursesList.length}</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Pending Tasks</p>
          <p className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 mt-1">{pendingSubmissions.length}</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Showcase Projects</p>
          <p className="text-2xl font-extrabold text-rose-600 dark:text-rose-400 mt-1">{showcaseProjects.length}</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Total Badges</p>
          <p className="text-2xl font-extrabold text-purple-600 dark:text-purple-400 mt-1">{user.achievements?.length || 3}</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Certificate Status</p>
          <p className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400 mt-2 truncate">{certificate.status}</p>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 text-xs font-bold overflow-x-auto">
        {[
          { id: 'reviews', label: `Task Reviews (${pendingSubmissions.length})` },
          { id: 'courses', label: `Manage Courses (${coursesList.length})` },
          { id: 'profile-mgmt', label: `Edit Intern Profiles & Badges` },
          { id: 'certificates', label: `Certificates Manager` },
          { id: 'showcase', label: `Showcase Projects (${showcaseProjects.length})` },
          { id: 'create-task', label: `Create Task` },
          { id: 'admin-settings', label: `⚙️ Admin Account & Password` }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveAdminTab(tab.id)}
            className={`px-4 py-2.5 rounded-xl whitespace-nowrap transition-all ${
              activeAdminTab === tab.id 
                ? 'bg-purple-900 text-white shadow-md' 
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* SUB-VIEW 1: TASK REVIEWS */}
      {activeAdminTab === 'reviews' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Submissions Queue</h3>
            <div className="space-y-3">
              {tasks.map((t) => {
                const isSelected = selectedTask?.id === t.id;
                return (
                  <div
                    key={t.id}
                    onClick={() => {
                      setSelectedTask(t);
                      if (t.score) setScoreInput(t.score);
                      if (t.feedback) setFeedbackInput(t.feedback);
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected 
                        ? 'bg-indigo-900 text-white border-2 border-indigo-400 shadow-md' 
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <span className={`font-bold text-xs block ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                        {t.title}
                      </span>
                      <span className={`text-[11px] ${isSelected ? 'text-indigo-200 font-medium' : 'text-slate-500 dark:text-slate-400'}`}>
                        Course: {t.courseId}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold ${
                        t.status === 'Approved' ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800' :
                        t.status === 'Submitted' ? 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800' :
                        'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700'
                      }`}>
                        {t.status}
                      </span>
                      <button
                        onClick={(e) => { e.stopPropagation(); adminDeleteTask(t.id); }}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isSelected 
                            ? 'text-rose-300 hover:bg-rose-900/60' 
                            : 'text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-950/60'
                        }`}
                        title="Delete Task"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {selectedTask && (
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-800 dark:text-purple-300 bg-purple-100 dark:bg-purple-950 px-2.5 py-0.5 rounded border border-purple-200 dark:border-purple-800">
                    Reviewing Task #{selectedTask.id}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-2">{selectedTask.title}</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{selectedTask.description}</p>
                </div>
                <button
                  onClick={() => adminDeleteTask(selectedTask.id)}
                  className="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-bold flex items-center gap-1 hover:bg-rose-100 dark:hover:bg-rose-900/60"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Delete
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">Assign Score (0 to 10)</label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    value={scoreInput}
                    onChange={(e) => setScoreInput(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-extrabold text-sm focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">Constructive Mentor Feedback</label>
                  <textarea
                    rows="4"
                    value={feedbackInput}
                    onChange={(e) => setFeedbackInput(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    onClick={() => handleReviewSubmit('Changes Requested')}
                    className="flex-1 py-3 rounded-xl bg-amber-50 dark:bg-amber-950/90 hover:bg-amber-100 dark:hover:bg-amber-900/80 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700 font-bold text-xs transition-colors"
                  >
                    Request Changes
                  </button>
                  <button
                    onClick={() => handleReviewSubmit('Approved')}
                    className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md shadow-emerald-600/30 transition-all flex items-center justify-center gap-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Approve & Update Points</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* SUB-VIEW 2: MANAGE COURSES (ADD, EDIT, DELETE) */}
      {activeAdminTab === 'courses' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Add/Edit Course Form (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
              <span>{editingCourseId ? '✏️ Edit Course' : '➕ Add New Course'}</span>
              {editingCourseId && (
                <button 
                  onClick={() => setEditingCourseId(null)} 
                  className="text-xs text-rose-600 font-bold hover:underline"
                >
                  Cancel Edit
                </button>
              )}
            </h3>

            <form onSubmit={handleSaveCourse} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Course Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI Prompt Engineering"
                  value={courseFormTitle}
                  onChange={(e) => setCourseFormTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Category</label>
                <select
                  value={courseFormCategory}
                  onChange={(e) => setCourseFormCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold"
                >
                  {COURSE_CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Tagline</label>
                <input
                  type="text"
                  placeholder="Short engaging summary..."
                  value={courseFormTagline}
                  onChange={(e) => setCourseFormTagline(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Description</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Detailed course description..."
                  value={courseFormDesc}
                  onChange={(e) => setCourseFormDesc(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Skills Covered (comma separated)</label>
                <input
                  type="text"
                  placeholder="e.g. Python, Pandas, Scikit-learn"
                  value={courseFormSkills}
                  onChange={(e) => setCourseFormSkills(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Tools Used (comma separated)</label>
                <input
                  type="text"
                  placeholder="e.g. VS Code, Figma, Jupyter"
                  value={courseFormTools}
                  onChange={(e) => setCourseFormTools(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-extrabold text-xs shadow-md"
              >
                {editingCourseId ? 'Save Course Updates' : 'Publish New Course'}
              </button>
            </form>
          </div>

          {/* Courses List & Deletion (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Current Course Directory ({coursesList.length})</h3>
            
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
              {coursesList.map((c) => (
                <div key={c.id} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 flex items-center justify-between gap-4 text-xs">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-800 dark:text-purple-300 bg-purple-100 dark:bg-purple-950 px-2 py-0.5 rounded border border-purple-200 dark:border-purple-800">
                      {c.category}
                    </span>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-sm mt-1">{c.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-[11px] line-clamp-1">{c.description}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleStartEditCourse(c)}
                      className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-purple-500 text-slate-800 dark:text-white font-bold flex items-center gap-1"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> Edit
                    </button>
                    <button
                      onClick={() => adminDeleteCourse(c.id)}
                      className="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-800 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 font-bold flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* SUB-VIEW 3: EDIT INTERN PROFILES & BADGES */}
      {activeAdminTab === 'profile-mgmt' && (
        <div className="space-y-8">
          
          {/* Interns Directory Card List */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span>Enrolled Interns Directory & Profiles ({sampleInterns.length})</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Click "View Profile Details" on any intern to inspect their full record, badges, and certificate status.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {sampleInterns.map((intern) => (
                <div key={intern.id} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 hover:border-purple-300 dark:hover:border-purple-700 transition-all flex items-start gap-4 shadow-sm">
                  <img
                    src={intern.avatar}
                    alt={intern.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-500 shadow-md shrink-0"
                  />
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-sm truncate">{intern.name}</h4>
                      <span className="px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 text-[10px] font-extrabold border border-purple-200 dark:border-purple-800 shrink-0">
                        {intern.skillLevel}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 font-mono truncate">{intern.email}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate">{intern.college}</p>
                    <div className="flex items-center gap-3 pt-1 text-[11px] font-bold text-slate-700 dark:text-slate-300">
                      <span className="text-purple-700 dark:text-purple-300 font-extrabold">Score: {intern.score}%</span>
                      <span>•</span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{intern.domain}</span>
                    </div>

                    <div className="pt-2 flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedInspectorIntern(intern);
                          setProfileName(intern.name);
                          setProfileCollege(intern.college);
                          setProfileLevel(intern.skillLevel);
                          setProfileScore(intern.score);
                          setShowProfileModal(true);
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-extrabold text-xs shadow-xs transition-colors flex items-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Profile Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EDIT & BADGE MANAGEMENT FOR SELECTED INTERN */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Edit Profile Form */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-purple-600" />
                <span>Edit Profile Details: <strong>{selectedInspectorIntern.name}</strong></span>
              </h3>

              <form onSubmit={handleSaveProfile} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Intern Name</label>
                  <input
                    type="text"
                    required
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">College / University</label>
                  <input
                    type="text"
                    required
                    value={profileCollege}
                    onChange={(e) => setProfileCollege(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Skill Level</label>
                    <select
                      value={profileLevel}
                      onChange={(e) => setProfileLevel(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Overall Score %</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={profileScore}
                      onChange={(e) => setProfileScore(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-extrabold text-xs shadow-md"
                >
                  Save Profile Changes
                </button>
              </form>
            </div>

            {/* Manage Achievement Badges */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span>Manage Badges for <strong>{selectedInspectorIntern.name}</strong></span>
              </h3>

              {/* Grant New Badge */}
              <form onSubmit={handleAddAchievement} className="flex gap-2 text-xs">
                <input
                  type="text"
                  placeholder="New Badge Title (e.g. AI Explorer)"
                  value={newBadgeTitle}
                  onChange={(e) => setNewBadgeTitle(e.target.value)}
                  className="flex-1 px-3.5 py-2 rounded-xl border border-slate-300 font-semibold"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold whitespace-nowrap shadow-sm"
                >
                  Grant Badge
                </button>
              </form>

              {/* Current Badges List */}
              <div className="space-y-2 pt-2 text-xs">
                {(selectedInspectorIntern.id === 'int-1' ? user.achievements : selectedInspectorIntern.achievements)?.map((ach, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{ach.icon}</span>
                      <span className="font-bold text-slate-800">{ach.title}</span>
                    </div>

                    <button
                      onClick={() => adminDeleteAchievement(idx)}
                      className="p-1 rounded text-rose-600 hover:bg-rose-50"
                      title="Remove Badge"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* INTERN PROFILE DETAILS MODAL INSPECTOR */}
          {showProfileModal && selectedInspectorIntern && (
            <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative">
                
                <button
                  onClick={() => setShowProfileModal(false)}
                  className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 font-bold text-lg p-2"
                >
                  ✕
                </button>

                {/* Profile Modal Top Header */}
                <div className="flex items-center gap-5 border-b border-slate-100 pb-6">
                  <img
                    src={selectedInspectorIntern.avatar}
                    alt={selectedInspectorIntern.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-purple-500 shadow-lg shrink-0"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-bold text-slate-900">{selectedInspectorIntern.name}</h2>
                      <span className="px-3 py-0.5 rounded-full bg-purple-100 text-purple-800 text-xs font-bold">
                        {selectedInspectorIntern.skillLevel}
                      </span>
                    </div>
                    <p className="text-xs text-purple-700 font-semibold">{selectedInspectorIntern.email}</p>
                    <p className="text-xs text-slate-500">{selectedInspectorIntern.college}</p>
                    <p className="text-xs text-slate-700 font-medium">Track: <strong>{selectedInspectorIntern.domain}</strong></p>
                  </div>
                </div>

                {/* Profile Key Stats */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-2xl bg-purple-50 border border-purple-100">
                    <p className="text-[10px] font-bold text-purple-700 uppercase">Overall Score</p>
                    <p className="text-xl font-extrabold text-purple-950 mt-0.5">{selectedInspectorIntern.score}%</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-100">
                    <p className="text-[10px] font-bold text-indigo-700 uppercase">Tasks Progress</p>
                    <p className="text-xl font-extrabold text-indigo-950 mt-0.5">{selectedInspectorIntern.tasksCompleted} / {selectedInspectorIntern.totalTasks}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100">
                    <p className="text-[10px] font-bold text-emerald-700 uppercase">Certificate</p>
                    <p className="text-xs font-extrabold text-emerald-950 mt-1.5 truncate">{selectedInspectorIntern.certificateId}</p>
                  </div>
                </div>

                {/* Badges Section */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Earned Badges & Credentials</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    {(selectedInspectorIntern.id === 'int-1' ? user.achievements : selectedInspectorIntern.achievements)?.map((ach, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                        <span className="text-xl">{ach.icon}</span>
                        <div>
                          <p className="font-bold text-slate-900">{ach.title}</p>
                          <p className="text-[10px] text-slate-400">Unlocked</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex justify-end gap-3 border-t border-slate-100">
                  <button
                    onClick={() => setShowProfileModal(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-purple-900 transition-colors"
                  >
                    Close Profile Viewer
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>
      )}

      {/* SUB-VIEW 4: CERTIFICATES MANAGER */}
      {activeAdminTab === 'certificates' && (
        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-600" />
            <span>Manage & Edit Official Certificate</span>
          </h2>

          <form onSubmit={handleSaveCertificate} className="space-y-3 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Certificate ID</label>
              <input
                type="text"
                required
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono font-bold"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Intern Holder Name</label>
              <input
                type="text"
                required
                value={certHolderName}
                onChange={(e) => setCertHolderName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Course Title</label>
              <input
                type="text"
                required
                value={certCourseTitle}
                onChange={(e) => setCertCourseTitle(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Capstone Project Name</label>
              <input
                type="text"
                required
                value={certProjectName}
                onChange={(e) => setCertProjectName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Authorized Mentor Signature Name</label>
              <input
                type="text"
                required
                value={certSignature}
                onChange={(e) => setCertSignature(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-serif font-bold"
              />
            </div>

            <div className="pt-4 flex gap-3">
              <button
                type="button"
                onClick={adminDeleteCertificate}
                className="px-4 py-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 font-bold hover:bg-rose-100"
              >
                Revoke Certificate
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-extrabold shadow-md"
              >
                Save Certificate Changes
              </button>
            </div>
          </form>
        </div>
      )}

      {/* SUB-VIEW 5: SHOWCASE PROJECTS MANAGER */}
      {activeAdminTab === 'showcase' && (
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900">Public Showcase Projects ({showcaseProjects.length})</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {showcaseProjects.map((p) => (
              <div key={p.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-3">
                <div>
                  <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-[10px]">
                    {p.featuredBadge}
                  </span>
                  <h4 className="font-extrabold text-slate-900 text-sm mt-1">{p.title}</h4>
                  <p className="text-slate-500 text-[11px]">Intern: {p.internName}</p>
                </div>

                <button
                  onClick={() => adminDeleteShowcase(p.id)}
                  className="px-3 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 font-bold hover:bg-rose-100 flex items-center gap-1 shrink-0"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-VIEW 6: CREATE TASK */}
      {activeAdminTab === 'create-task' && (
        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Plus className="w-5 h-5 text-purple-600" />
            <span>Create & Assign New Task</span>
          </h2>

          <form onSubmit={handleCreateTask} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Select Target Course</label>
              <select
                value={newTaskCourse}
                onChange={(e) => setNewTaskCourse(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 font-bold text-xs"
              >
                {coursesList.map(c => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Task Title</label>
              <input
                type="text"
                required
                placeholder="e.g. Build GraphQL Endpoint & Subscriptions"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Task Description & Instructions</label>
              <textarea
                rows="4"
                required
                placeholder="Detailed instructions for the intern..."
                value={newTaskDesc}
                onChange={(e) => setNewTaskDesc(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Deadline Date</label>
                <input
                  type="date"
                  value={newTaskDeadline}
                  onChange={(e) => setNewTaskDeadline(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Priority</label>
                <select
                  value={newTaskPriority}
                  onChange={(e) => setNewTaskPriority(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs"
                >
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Urgent">Urgent</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-extrabold text-xs shadow-md"
            >
              Post Task to Workspace
            </button>
          </form>
        </div>
      )}

      {/* SUB-VIEW 7: ADMIN ACCOUNT & PASSWORD SETTINGS */}
      {activeAdminTab === 'admin-settings' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Admin Profile Overview Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl flex flex-col sm:flex-row items-center gap-6">
            <img
              src={admin.avatar}
              alt={admin.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-purple-500 shadow-xl shrink-0"
            />

            <div className="space-y-2 text-center sm:text-left flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h2 className="text-2xl font-bold">{admin.name}</h2>
                <span className="px-3.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-extrabold w-fit mx-auto sm:mx-0">
                  SUPER ADMINISTRATOR (ID: ADM-2026-001)
                </span>
              </div>

              <p className="text-xs text-purple-300 font-semibold">{admin.title}</p>
              <p className="text-xs text-slate-300">Department: <strong>{admin.department}</strong></p>
              <p className="text-xs text-slate-400 font-mono">Official Email: <strong className="text-white">{admin.email}</strong></p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2 text-[10px] font-bold">
                <span className="px-2.5 py-1 rounded bg-emerald-600/90 text-white shadow-xs">FULL PLATFORM ACCESS ✓</span>
                <span className="px-2.5 py-1 rounded bg-purple-950 text-purple-200 border border-purple-700">5/5 DOMAINS CONTROL</span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">VERIFIED MENTOR</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Edit Admin Details Form */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-purple-600" />
              <span>Edit Administrator Profile Details</span>
            </h3>

            <form onSubmit={handleSaveAdminProfile} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Admin Full Name</label>
                <input
                  type="text"
                  required
                  value={adminNameInput}
                  onChange={(e) => setAdminNameInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Admin Email Address</label>
                <input
                  type="email"
                  required
                  value={adminEmailInput}
                  onChange={(e) => setAdminEmailInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Official Title / Role</label>
                <input
                  type="text"
                  required
                  value={adminTitleInput}
                  onChange={(e) => setAdminTitleInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Department</label>
                <input
                  type="text"
                  required
                  value={adminDeptInput}
                  onChange={(e) => setAdminDeptInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-extrabold text-xs shadow-md"
              >
                Save Administrator Profile
              </button>
            </form>
          </div>

          {/* Change Admin Password Form */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-purple-600" />
              <span>Change Admin Password</span>
            </h3>

            {adminPassError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold">
                {adminPassError}
              </div>
            )}

            <form onSubmit={handleChangeAdminPasswordSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Current Password</label>
                <input
                  type="password"
                  required
                  placeholder="Default: admin123"
                  value={adminCurrPass}
                  onChange={(e) => setAdminCurrPass(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">New Admin Password</label>
                <input
                  type="password"
                  required
                  placeholder="Minimum 6 characters"
                  value={adminNewPass}
                  onChange={(e) => setAdminNewPass(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Confirm New Admin Password</label>
                <input
                  type="password"
                  required
                  placeholder="Re-type new password"
                  value={adminConfPass}
                  onChange={(e) => setAdminConfPass(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-purple-900 text-white font-extrabold text-xs shadow-md transition-colors"
              >
                Update Admin Password
              </button>
            </form>
          </div>

          </div>
        </div>
      )}

    </div>
  );
}
