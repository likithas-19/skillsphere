import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import { 
  Trophy, 
  Star, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck,
  Edit3,
  Trash2,
  Plus,
  X,
  UserPlus
} from 'lucide-react';

export default function LeaderboardView() {
  const { 
    leaderboard, 
    selectedCourseId, 
    user, 
    currentRole, 
    adminEditLeaderboardItem, 
    adminAddLeaderboardItem, 
    adminDeleteLeaderboardItem 
  } = useApp();

  const [editingItem, setEditingItem] = useState(null); // rank of item being edited
  const [editPoints, setEditPoints] = useState('');
  const [editScore, setEditScore] = useState('');
  const [editName, setEditName] = useState('');

  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPoints, setNewPoints] = useState('850');
  const [newScore, setNewScore] = useState('88');

  const course = COURSES.find(c => c.id === selectedCourseId) || COURSES[0];
  const currentUserEntry = leaderboard.find(l => l.isCurrentUser) || leaderboard[0] || { rank: 1, points: 900 };

  const totalInterns = leaderboard.length;
  const percentile = Math.max(0, Math.round(((totalInterns - currentUserEntry.rank) / Math.max(1, totalInterns)) * 100));

  const handleStartEdit = (item) => {
    setEditingItem(item.rank);
    setEditName(item.name);
    setEditPoints(item.points);
    setEditScore(item.scorePercent);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    adminEditLeaderboardItem(editingItem, {
      name: editName,
      points: Number(editPoints),
      scorePercent: Number(editScore)
    });
    setEditingItem(null);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    adminAddLeaderboardItem({
      name: newName || 'New Intern',
      points: Number(newPoints),
      scorePercent: Number(newScore)
    });
    setShowAddModal(false);
    setNewName('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* Admin Quick Control Banner */}
      {currentRole === 'admin' && (
        <div className="bg-purple-900 text-white p-4 rounded-2xl border border-purple-700 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-bold">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Admin Control Active: You can edit points, adjust ranks, add new competitors, or remove entries.</span>
          </div>
          
          <button
            onClick={() => setShowAddModal(true)}
            className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-purple-950 font-extrabold transition-colors flex items-center gap-1.5 shrink-0"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Add Competitor to Leaderboard</span>
          </button>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-3 text-center md:text-left relative z-10">
          <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit mx-auto md:mx-0">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Course-Specific Leaderboard</span>
          </span>
          <h1 className="text-3xl font-extrabold">{course.title} Standings</h1>
          <p className="text-xs text-slate-300">
            Fair recognition based on quiz scores, module completions, admin-approved tasks, and project milestones.
          </p>
        </div>

        {/* Highlighted Intern Box */}
        <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 text-center min-w-[220px] shadow-lg">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Your Standing</p>
          <p className="text-3xl font-black text-amber-400 my-1">
            #{currentUserEntry.rank} <span className="text-xs text-slate-400 font-normal">of {totalInterns}</span>
          </p>
          <p className="text-xs font-bold text-emerald-400">Ahead of {percentile}% of learners!</p>
        </div>
      </div>

      {/* Add Competitor Modal */}
      {showAddModal && (
        <div className="bg-white p-6 rounded-3xl border-2 border-purple-600 shadow-2xl max-w-md mx-auto space-y-4 text-xs animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-purple-600" /> Add Competitor to Leaderboard
            </h3>
            <button onClick={() => setShowAddModal(false)} className="p-1 text-slate-400 hover:text-slate-700">
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleAddSubmit} className="space-y-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Intern Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Points</label>
                <input
                  type="number"
                  required
                  value={newPoints}
                  onChange={(e) => setNewPoints(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 font-bold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Score %</label>
                <input
                  type="number"
                  required
                  min="0"
                  max="100"
                  value={newScore}
                  onChange={(e) => setNewScore(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 font-bold"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-purple-900 text-white font-extrabold shadow-md hover:bg-purple-800"
            >
              Add Competitor
            </button>
          </form>
        </div>
      )}

      {/* Leaderboard Ranking Table */}
      <div className="bg-white dark:bg-slate-900 dark:border-slate-800 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span>Top Interns in {course.title}</span>
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Updated Real-Time</span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {leaderboard.map((item) => {
            const isUser = item.isCurrentUser;
            const isTop3 = item.rank <= 3;
            const isEditing = editingItem === item.rank;

            return (
              <div 
                key={item.rank}
                className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                  isUser 
                    ? 'bg-indigo-50/80 dark:bg-indigo-950/60 border-l-4 border-indigo-600 font-bold' 
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-4 flex-1">
                  {/* Rank Badge */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-xs shrink-0 ${
                    item.rank === 1 ? 'bg-amber-400 text-slate-950 shadow-md' :
                    item.rank === 2 ? 'bg-slate-300 text-slate-900' :
                    item.rank === 3 ? 'bg-amber-700 text-white' :
                    'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}>
                    {item.rank}
                  </div>

                  {/* Avatar & Name */}
                  <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700" />
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className={`text-sm font-bold ${isUser ? 'text-indigo-950 dark:text-indigo-200' : 'text-slate-900 dark:text-white'}`}>
                        {item.name}
                      </p>
                      {isUser && (
                        <span className="px-2 py-0.5 rounded bg-indigo-600 text-white text-[10px] uppercase tracking-wider font-extrabold">
                          YOU
                        </span>
                      )}
                      {isTop3 && <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />}
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Verified Overall Score: {item.scorePercent}%</p>
                  </div>
                </div>

                {/* Points & Admin Action Buttons */}
                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                  <div className="text-right">
                    <p className="text-base font-extrabold text-slate-900 dark:text-white">{item.points} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">pts</span></p>
                    <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Active Contributor</p>
                  </div>

                  {/* Admin Inline Edit Form / Buttons */}
                  {currentRole === 'admin' && (
                    <div className="flex items-center gap-1.5 border-l border-slate-200 pl-3">
                      {isEditing ? (
                        <form onSubmit={handleSaveEdit} className="flex items-center gap-1">
                          <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className="w-24 px-2 py-1 rounded border border-slate-300 text-xs font-bold"
                          />
                          <input
                            type="number"
                            value={editPoints}
                            onChange={(e) => setEditPoints(e.target.value)}
                            className="w-16 px-2 py-1 rounded border border-slate-300 text-xs font-bold"
                          />
                          <button
                            type="submit"
                            className="px-2 py-1 rounded bg-emerald-600 text-white text-[10px] font-bold"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditingItem(null)}
                            className="px-2 py-1 rounded bg-slate-200 text-slate-700 text-[10px] font-bold"
                          >
                            X
                          </button>
                        </form>
                      ) : (
                        <>
                          <button
                            onClick={() => handleStartEdit(item)}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-purple-100 text-purple-700 transition-colors"
                            title="Edit Points & Rank"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => adminDeleteLeaderboardItem(item.rank)}
                            className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors"
                            title="Remove from Leaderboard"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </>
                      )}
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
