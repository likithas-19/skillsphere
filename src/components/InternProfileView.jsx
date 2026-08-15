import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import { 
  User, 
  BookOpen, 
  Award, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  Edit3, 
  Trophy,
  ExternalLink,
  KeyRound,
  Mail,
  Building2,
  Lock,
  Save,
  ShieldCheck
} from 'lucide-react';

export default function InternProfileView() {
  const { 
    user, 
    selectedCourseId, 
    certificate, 
    setActiveTab, 
    currentRole, 
    updateUserProfile, 
    changeUserPassword 
  } = useApp();

  const [activeSubTab, setActiveSubTab] = useState('overview'); // 'overview', 'edit-profile', 'change-password'

  // Edit Profile Form State
  const [nameInput, setNameInput] = useState(user.name);
  const [emailInput, setEmailInput] = useState(user.email || 'intern@skillsphere.edu');
  const [collegeInput, setCollegeInput] = useState(user.college);
  const [avatarInput, setAvatarInput] = useState(user.avatar);

  // Change Password Form State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const course = COURSES.find(c => c.id === selectedCourseId) || COURSES[0];

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateUserProfile({
      name: nameInput,
      email: emailInput,
      college: collegeInput,
      avatar: avatarInput
    });
    setActiveSubTab('overview');
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setPasswordError('');

    if (newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match. Please re-type.');
      return;
    }

    const success = changeUserPassword(currentPassword, newPassword);
    if (success) {
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setActiveSubTab('overview');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* Admin Quick Control Banner */}
      {currentRole === 'admin' && (
        <div className="bg-purple-900 text-white p-4 rounded-2xl border border-purple-700 shadow-md flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 font-bold">
            <Edit3 className="w-4 h-4 text-purple-300" />
            <span>Admin Mode: You have full access to edit profiles, grant/remove badges, and manage certificates.</span>
          </div>
          <button
            onClick={() => setActiveTab('admin')}
            className="px-3 py-1.5 rounded-xl bg-white text-purple-950 font-extrabold hover:bg-purple-50 transition-colors shrink-0"
          >
            Open Admin Management Console
          </button>
        </div>
      )}

      {/* Profile Top Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl flex flex-col sm:flex-row items-center gap-6">
        <img 
          src={user.avatar} 
          alt={user.name} 
          className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500 shadow-xl shrink-0" 
        />
        
        <div className="space-y-2 text-center sm:text-left flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold w-fit mx-auto sm:mx-0">
              Role: Intern ({user.skillLevel})
            </span>
          </div>

          <p className="text-xs text-indigo-300 font-medium">{user.college}</p>
          <p className="text-xs text-slate-300">Enrolled Path: <strong>{course.title}</strong></p>

          <div className="flex items-center justify-center sm:justify-start gap-4 pt-2 text-xs font-semibold text-slate-300">
            <a href="https://github.com/likitha" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
              <Github className="w-3.5 h-3.5 text-indigo-400" /> GitHub Profile
            </a>
            <a href="https://linkedin.com/in/likitha" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
              <Linkedin className="w-3.5 h-3.5 text-indigo-400" /> LinkedIn Profile
            </a>
          </div>
        </div>
      </div>

      {/* Profile Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 text-xs font-bold">
        <button
          onClick={() => setActiveSubTab('overview')}
          className={`px-4 py-2 rounded-xl transition-all ${
            activeSubTab === 'overview' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          🏆 Overview & Badges
        </button>

        <button
          onClick={() => setActiveSubTab('edit-profile')}
          className={`px-4 py-2 rounded-xl transition-all ${
            activeSubTab === 'edit-profile' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          ✏️ Edit Profile Details
        </button>

        <button
          onClick={() => setActiveSubTab('change-password')}
          className={`px-4 py-2 rounded-xl transition-all ${
            activeSubTab === 'change-password' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          🔒 Change Password
        </button>
      </div>

      {/* SUB-VIEW 1: OVERVIEW & BADGES */}
      {activeSubTab === 'overview' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Badges & Achievements */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Earned Achievements & Badges</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              {user.achievements.map((ach, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-2xl">{ach.icon}</span>
                  <p className="font-bold text-slate-900">{ach.title}</p>
                  <p className="text-[10px] text-slate-400">Unlocked {ach.date}</p>
                </div>
              ))}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 opacity-70">
                <span className="text-2xl">⭐</span>
                <p className="font-bold text-slate-900">Featured Intern</p>
                <p className="text-[10px] text-slate-400">Unlocked upon graduation</p>
              </div>
            </div>
          </div>

          {/* Unlocked Certificate Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-600" />
                <span>Verified Credentials & Certificates</span>
              </h3>
              <button onClick={() => setActiveTab('certificate')} className="text-xs text-indigo-600 font-bold hover:underline">
                View Certificate
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-indigo-950">{certificate.courseName}</p>
                <p className="text-[11px] text-indigo-700">ID: {certificate.id} • Issued: {certificate.completionDate}</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-600 text-white font-extrabold text-[10px]">
                VERIFIED ✓
              </span>
            </div>
          </div>
        </div>
      )}

      {/* SUB-VIEW 2: EDIT PROFILE DETAILS */}
      {activeSubTab === 'edit-profile' && (
        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Edit3 className="w-5 h-5 text-indigo-600" />
            <span>Edit Intern Personal Information</span>
          </h2>

          <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-xs"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-medium text-xs"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">College / Institution</label>
              <input
                type="text"
                required
                value={collegeInput}
                onChange={(e) => setCollegeInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Avatar Image URL</label>
              <input
                type="text"
                value={avatarInput}
                onChange={(e) => setAvatarInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Profile Changes</span>
            </button>
          </form>
        </div>
      )}

      {/* SUB-VIEW 3: CHANGE PASSWORD */}
      {activeSubTab === 'change-password' && (
        <div className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Lock className="w-5 h-5 text-indigo-600" />
            <span>Change Intern Password</span>
          </h2>

          {passwordError && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold">
              {passwordError}
            </div>
          )}

          <form onSubmit={handleChangePassword} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Current Password</label>
              <input
                type="password"
                required
                placeholder="Enter current password (default: intern123)"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">New Password</label>
              <input
                type="password"
                required
                placeholder="Minimum 6 characters"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Confirm New Password</label>
              <input
                type="password"
                required
                placeholder="Re-type new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-extrabold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Update Password</span>
            </button>
          </form>
        </div>
      )}

    </div>
  );
}
