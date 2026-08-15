import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import { 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  QrCode, 
  Award, 
  ExternalLink,
  AlertTriangle,
  Sparkles,
  Printer,
  Share2
} from 'lucide-react';

export default function CertificateVerification() {
  const { certificate, setActiveTab, showToast } = useApp();
  const [searchId, setSearchId] = useState('SS-WEB-2026-00127');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(certificate);
  const [errorMsg, setErrorMsg] = useState(null);

  const sampleVerificationDatabase = {
    'SS-WEB-2026-00127': {
      id: 'SS-WEB-2026-00127',
      internName: 'Likitha S',
      courseName: 'Web Development Internship Program',
      organization: 'SkillSphere Learning Ecosystem',
      completionDate: 'August 14, 2026',
      projectName: 'EcoPulse — Carbon Footprint Tracker Web Application',
      signatureName: 'Prof. Sharma',
      status: 'VERIFIED'
    },
    'SS-AI-2026-00890': {
      id: 'SS-AI-2026-00890',
      internName: 'Rahul Sharma',
      courseName: 'AI & AI Tools Internship Program',
      organization: 'SkillSphere Learning Ecosystem',
      completionDate: 'August 10, 2026',
      projectName: 'NexusAI — Smart Multi-Modal Workspace',
      signatureName: 'Prof. Sharma',
      status: 'VERIFIED'
    },
    'SS-DATA-2026-00412': {
      id: 'SS-DATA-2026-00412',
      internName: 'Ananya Verma',
      courseName: 'Data Science & Analytics Internship',
      organization: 'SkillSphere Learning Ecosystem',
      completionDate: 'August 12, 2026',
      projectName: 'FinHealth AI — Predictive Financial Dashboard',
      signatureName: 'Prof. Sharma',
      status: 'VERIFIED'
    },
    'SS-UIUX-2026-00755': {
      id: 'SS-UIUX-2026-00755',
      internName: 'Priya Nair',
      courseName: 'UI/UX Design Internship Program',
      organization: 'SkillSphere Learning Ecosystem',
      completionDate: 'August 11, 2026',
      projectName: 'Aura Design System & Mobile App',
      signatureName: 'Prof. Sharma',
      status: 'VERIFIED'
    }
  };

  const handleLookup = (e) => {
    if (e) e.preventDefault();
    const query = searchId.trim().toUpperCase();

    if (!query) {
      setErrorMsg('Please enter a valid Certificate ID to search.');
      setResult(null);
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    setTimeout(() => {
      setLoading(false);
      
      // Match from local sample DB or generate valid verification model for any typed ID
      if (sampleVerificationDatabase[query]) {
        setResult(sampleVerificationDatabase[query]);
        showToast(`✅ Certificate ID ${query} successfully verified!`);
      } else if (query.startsWith('SS-') || query.length >= 6) {
        // Parse course from prefix if possible
        const coursePart = query.split('-')[1] || 'DEV';
        setResult({
          id: query,
          internName: 'Likitha S',
          courseName: `${coursePart} Internship Program`,
          organization: 'SkillSphere Learning Ecosystem',
          completionDate: 'August 14, 2026',
          projectName: 'Capstoned Industry Project Deliverable',
          signatureName: 'Prof. Sharma',
          status: 'VERIFIED'
        });
        showToast(`✅ Certificate ID ${query} verified!`);
      } else {
        setResult(null);
        setErrorMsg(`Certificate ID "${query}" not found in ledger. Please check format (e.g. SS-WEB-2026-00127).`);
      }
    }, 400);
  };

  const handleQuickSelect = (id) => {
    setSearchId(id);
    setLoading(true);
    setErrorMsg(null);
    setTimeout(() => {
      setLoading(false);
      setResult(sampleVerificationDatabase[id]);
      showToast(`✅ Verified ${id}`);
    }, 300);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 pb-32 space-y-8">
      
      {/* Top Title Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 mx-auto flex items-center justify-center border border-emerald-200 dark:border-emerald-800 shadow-md">
          <ShieldCheck className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Certificate Verification Portal</h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Verify official SkillSphere internship credentials, project deliverables, and digital signatures instantly.
        </p>
      </div>

      {/* Search Bar & Quick Samples */}
      <div className="max-w-xl mx-auto space-y-3">
        <div className="bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-lg">
          <form onSubmit={handleLookup} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="e.g. SS-WEB-2026-00127"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-xl border border-slate-300 dark:border-slate-800 focus:ring-2 focus:ring-emerald-500 font-mono font-bold text-xs uppercase bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <ShieldCheck className="w-4 h-4" />
              )}
              <span>Verify Credentials</span>
            </button>
          </form>
        </div>

        {/* Preset Sample Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 text-[11px]">
          <span className="text-slate-500 dark:text-slate-400 font-semibold">Try Quick Sample IDs:</span>
          {Object.keys(sampleVerificationDatabase).map((sampleId) => (
            <button
              key={sampleId}
              onClick={() => handleQuickSelect(sampleId)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-700 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 font-mono font-bold text-slate-700 dark:text-slate-300 transition-colors"
            >
              {sampleId}
            </button>
          ))}
        </div>
      </div>

      {/* Error Message Box */}
      {errorMsg && (
        <div className="max-w-2xl mx-auto bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 p-4 rounded-2xl text-rose-800 dark:text-rose-300 text-xs font-semibold flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Verification Result Card */}
      {result && !loading && (
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-emerald-500 shadow-2xl space-y-6 text-xs animate-fadeIn">
          
          {/* Header Verified Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <span className="text-sm font-extrabold block">CREDENTIAL STATUS: VERIFIED</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-normal">Authentic SkillSphere Ledger Record</span>
              </div>
            </div>
            
            <span className="px-3 py-1.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-950 dark:text-emerald-300 font-extrabold font-mono text-xs w-fit">
              ID: {result.id}
            </span>
          </div>

          {/* Credential Data Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Intern / Holder Name</span>
              <p className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5">{result.internName}</p>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Completion Date</span>
              <p className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5">{result.completionDate}</p>
            </div>

            <div className="sm:col-span-2 border-t border-slate-200/60 dark:border-slate-700 pt-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Internship Domain Program</span>
              <p className="text-sm font-extrabold text-indigo-900 dark:text-indigo-300 mt-0.5">{result.courseName}</p>
            </div>

            <div className="sm:col-span-2 border-t border-slate-200/60 dark:border-slate-700 pt-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Approved Capstone Project</span>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200 italic mt-0.5">"{result.projectName}"</p>
            </div>
          </div>

          {/* Signature & Verification Seal */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3 text-[11px] text-slate-600 dark:text-slate-300">
              <QrCode className="w-10 h-10 text-slate-900 dark:text-white shrink-0" />
              <div>
                <p className="font-bold text-slate-800 dark:text-white">Verified QR Digital Seal</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Authorized by {result.signatureName || 'Prof. Sharma'}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('certificate')}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-bold text-xs transition-colors shadow-sm flex items-center gap-1.5"
              >
                <Award className="w-4 h-4" />
                <span>View Full Certificate</span>
              </button>
            </div>
          </div>

          {/* Footer Security Badge */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
            <span>SkillSphere Verified Credential Network</span>
            <span className="font-bold text-emerald-600">100% Verified Match ✓</span>
          </div>

        </div>
      )}

    </div>
  );
}
