import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast() {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  const isError = toastMessage.type === 'error';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl border backdrop-blur-md text-sm font-medium transition-all ${
        isError 
          ? 'bg-rose-900/90 text-rose-100 border-rose-700' 
          : 'bg-slate-900/95 text-white border-slate-700'
      }`}>
        {isError ? (
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
        ) : (
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        )}
        <span>{toastMessage.message}</span>
      </div>
    </div>
  );
}
