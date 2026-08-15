import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import { 
  Sparkles, 
  User, 
  ShieldCheck, 
  UserCheck, 
  KeyRound, 
  Mail, 
  Building2, 
  BookOpen,
  CheckCircle2
} from 'lucide-react';

export default function AuthModal() {
  const { setActiveTab, setCurrentRole, setUser, showToast, initialAuthTab, loginAsIntern, loginAsAdmin } = useApp();

  const [authMode, setAuthMode] = useState(initialAuthTab || 'intern'); // 'intern', 'admin', 'register'

  useEffect(() => {
    if (initialAuthTab) {
      setAuthMode(initialAuthTab);
    }
  }, [initialAuthTab]);
  
  // Intern Form State
  const [internEmail, setInternEmail] = useState('intern@skillsphere.edu');
  const [internPassword, setInternPassword] = useState('intern123');

  // Admin Form State
  const [adminEmail, setAdminEmail] = useState('admin@skillsphere.edu');
  const [adminPassword, setAdminPassword] = useState('admin123');

  // Register Form State
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regCollege, setRegCollege] = useState('');
  const [regCourseId, setRegCourseId] = useState('web-dev');

  const handleInternLogin = (e) => {
    e.preventDefault();
    loginAsIntern({ name: 'Likitha S', email: internEmail });
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    loginAsAdmin();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    loginAsIntern({ name: regName || 'Likitha S', email: regEmail || 'intern@skillsphere.edu' });
    setUser(prev => ({
      ...prev,
      name: regName || 'Likitha S',
      email: regEmail || 'intern@skillsphere.edu',
      college: regCollege || 'Institute of Software Engineering',
      selectedCourseId: regCourseId
    }));
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-10 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">SkillSphere Portal Authentication</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Separate Credentials & Roles for Interns and Administrators</p>
        </div>

        {/* Auth Role Mode Switcher Tabs */}
        <div className="grid grid-cols-3 gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl text-xs font-bold border border-slate-200 dark:border-slate-700">
          <button
            type="button"
            onClick={() => setAuthMode('intern')}
            className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              authMode === 'intern' 
                ? 'bg-indigo-600 text-white shadow-md font-extrabold' 
                : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>INTERN</span>
          </button>

          <button
            type="button"
            onClick={() => setAuthMode('admin')}
            className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              authMode === 'admin' 
                ? 'bg-purple-900 dark:bg-purple-700 text-white shadow-md font-extrabold' 
                : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>ADMIN</span>
          </button>

          <button
            type="button"
            onClick={() => setAuthMode('register')}
            className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              authMode === 'register' 
                ? 'bg-slate-900 dark:bg-slate-700 text-white shadow-md font-extrabold' 
                : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>REGISTER</span>
          </button>
        </div>

        {/* SEPARATE CREDENTIAL CARDS & FORMS */}

        {/* 1. INTERN LOGIN */}
        {authMode === 'intern' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Credential Reference Card */}
            <div className="p-4 rounded-2xl bg-indigo-950 dark:bg-indigo-950/90 border border-indigo-800 text-indigo-100 space-y-2 text-xs shadow-md">
              <div className="flex items-center justify-between font-bold text-indigo-200">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" /> Dedicated Intern Credentials
                </span>
                <span className="text-[10px] bg-indigo-800/80 px-2 py-0.5 rounded text-indigo-100 font-extrabold border border-indigo-700">INT-2026-101</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div>Email / ID: <strong className="text-white bg-indigo-900/90 px-1.5 py-0.5 rounded">intern@skillsphere.edu</strong></div>
                <div>Password: <strong className="text-white bg-indigo-900/90 px-1.5 py-0.5 rounded">intern123</strong></div>
              </div>
            </div>

            <form onSubmit={handleInternLogin} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">Intern Email / ID</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={internEmail}
                    onChange={(e) => setInternEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 pl-9 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-indigo-500"
                  />
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">Intern Password</label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={internPassword}
                    onChange={(e) => setInternPassword(e.target.value)}
                    className="w-full px-3.5 py-2.5 pl-9 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-indigo-500"
                  />
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs transition-colors shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" />
                <span>Sign In to Intern Workspace</span>
              </button>
            </form>
          </div>
        )}

        {/* 2. ADMIN LOGIN */}
        {authMode === 'admin' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Credential Reference Card */}
            <div className="p-4 rounded-2xl bg-purple-950 dark:bg-purple-950/90 border border-purple-800 text-purple-100 space-y-2 text-xs shadow-md">
              <div className="flex items-center justify-between font-bold text-purple-200">
                <span className="flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-purple-400" /> Dedicated Admin Credentials
                </span>
                <span className="text-[10px] bg-purple-800/80 px-2 py-0.5 rounded text-purple-100 font-extrabold border border-purple-700">ADM-2026-001</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div>Email / ID: <strong className="text-white bg-purple-900/90 px-1.5 py-0.5 rounded">admin@skillsphere.edu</strong></div>
                <div>Password: <strong className="text-white bg-purple-900/90 px-1.5 py-0.5 rounded">admin123</strong></div>
              </div>
            </div>

            <form onSubmit={handleAdminLogin} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">Admin Email / ID</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 pl-9 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-purple-500"
                  />
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">Admin Password</label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className="w-full px-3.5 py-2.5 pl-9 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-purple-500"
                  />
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-extrabold text-xs transition-colors shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4" />
                <span>Sign In to Admin Hub</span>
              </button>
            </form>
          </div>
        )}

        {/* 3. REGISTER NEW INTERN */}
        {authMode === 'register' && (
          <form onSubmit={handleRegisterSubmit} className="space-y-4 text-xs animate-fadeIn">
            <div>
              <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Likitha S"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="intern@skillsphere.edu"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">Create Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">College / Institution</label>
              <input
                type="text"
                required
                placeholder="Institute of Software Engineering"
                value={regCollege}
                onChange={(e) => setRegCollege(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">Interested Internship Domain</label>
              <select
                value={regCourseId}
                onChange={(e) => setRegCourseId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              >
                {COURSES.map(c => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-extrabold text-xs transition-colors shadow-md"
            >
              Register & Start Internship
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
