import React from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import { 
  Award, 
  ShieldCheck, 
  Printer, 
  Share2, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  QrCode
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CertificateView() {
  const { certificate, selectedCourseId, user, setActiveTab, showToast } = useApp();

  const course = COURSES.find(c => c.id === selectedCourseId) || COURSES[0];

  const triggerCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShareLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(certificate.verificationUrl)}`;
    window.open(url, '_blank');
    showToast('LinkedIn sharing window opened!');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* Top Completion Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 text-center md:text-left">
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>INTERNSHIP REQUIREMENTS SATISFIED</span>
          </span>
          <h1 className="text-3xl font-black">🎉 Congratulations, {user.name}!</h1>
          <p className="text-xs text-indigo-200">
            You have successfully completed all modules, tasks, and approved capstone projects for your internship.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={triggerCelebration}
            className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            <span>Celebrate 🎉</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-xl bg-white text-indigo-900 text-xs font-extrabold transition-all shadow-md hover:bg-slate-100 flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>Download / Print PDF</span>
          </button>

          <button
            onClick={handleShareLinkedIn}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
          >
            <Share2 className="w-4 h-4" />
            <span>Share on LinkedIn</span>
          </button>
        </div>
      </div>

      {/* Printable Certificate Box */}
      <div id="printable-certificate" className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-14 border-8 border-double border-indigo-900 dark:border-indigo-700 shadow-2xl relative space-y-8 text-center text-slate-900 dark:text-white">
        
        {/* Top Header & ID */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-900 text-white flex items-center justify-center font-bold shadow-md">
              SS
            </div>
            <div className="text-left">
              <span className="font-extrabold text-xl tracking-tight text-indigo-950 dark:text-white font-sans">
                SKILL<span className="text-indigo-600 dark:text-indigo-400">SPHERE</span>
              </span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">Learning Ecosystem</p>
            </div>
          </div>

          <div className="text-right text-xs">
            <p className="font-bold text-slate-700 dark:text-slate-300">Credential ID: <span className="text-indigo-900 dark:text-indigo-300 font-mono font-black">{certificate.id}</span></p>
            <span className="px-2.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
              VERIFIED OFFICIAL CREDENTIAL
            </span>
          </div>
        </div>

        {/* Certificate Body Text */}
        <div className="space-y-4 py-4 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-extrabold text-indigo-700 dark:text-indigo-400">Official Certificate of Completion</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">This credential is proudly awarded to</p>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white underline decoration-indigo-500 decoration-2 underline-offset-8">
            {user.name}
          </h2>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
            for successfully completing the <strong className="text-slate-900 dark:text-white">{course.duration}</strong> intensive project-based internship program in
          </p>

          <h3 className="text-2xl sm:text-3xl font-black text-indigo-950 dark:text-indigo-300">
            {course.title} Internship
          </h3>

          <p className="text-xs text-slate-600 dark:text-slate-300">
            demonstrating high proficiency in <strong className="text-slate-900 dark:text-white">{course.skills.slice(0, 4).join(', ')}</strong> and completing the approved capstone project:
          </p>

          <div className="pt-2">
            <p className="text-sm sm:text-base font-extrabold text-indigo-100 italic bg-indigo-950 dark:bg-indigo-950/90 p-4 rounded-2xl border border-indigo-800 shadow-md">
              "{certificate.projectName}"
            </p>
          </div>
        </div>

        {/* Bottom Signatures & QR Code */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-xs">
          <div className="text-left space-y-1">
            <p className="font-bold text-slate-800 dark:text-slate-200">Issue Date:</p>
            <p className="text-slate-600 dark:text-slate-300 font-medium">{certificate.completionDate}</p>
            <p className="text-[10px] text-slate-400 dark:text-slate-400">Organization: SkillSphere Inc.</p>
          </div>

          {/* QR Verification Visual */}
          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="w-16 h-16 bg-slate-900 dark:bg-slate-800 rounded-xl p-2 text-white flex items-center justify-center shadow-md border border-slate-700">
              <QrCode className="w-12 h-12 text-white" />
            </div>
            <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400">SCAN TO VERIFY</span>
          </div>

          <div className="text-right space-y-1">
            <p className="font-extrabold text-indigo-950 dark:text-indigo-200 text-sm font-serif italic">{certificate.signatureName}</p>
            <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">{certificate.signatureRole}</p>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Authorized Mentor Signature ✓</p>
          </div>
        </div>

      </div>

    </div>
  );
}
