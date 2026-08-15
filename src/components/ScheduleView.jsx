import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Calendar, 
  Clock, 
  Plus, 
  AlertCircle, 
  CheckCircle2, 
  Bell, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

export default function ScheduleView() {
  const { scheduleEvents } = useApp();
  const [filterAlert, setFilterAlert] = useState('all');

  const filteredEvents = scheduleEvents.filter(ev => {
    if (filterAlert === 'all') return true;
    return ev.alert === filterAlert;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Schedule Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Timeline & Calendar
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2">My Schedule</h1>
          <p className="text-xs text-slate-600">Track task deadlines, mentorship syncs, workshops, and project reviews.</p>
        </div>

        {/* Labels legend */}
        <div className="flex items-center gap-3 text-xs font-semibold flex-wrap">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-rose-50 text-rose-700 border border-rose-200">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span> 🔴 Deadline
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span> 🔵 Meeting
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-purple-50 text-purple-700 border border-purple-200">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span> 🟣 Review
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> 🟢 Workshop
          </span>
        </div>
      </div>

      {/* Filter Tabs: Due Today / Tomorrow / Due in 3 Days */}
      <div className="flex items-center gap-2 flex-wrap text-xs font-semibold">
        {['all', 'Due Tomorrow', 'Due in 3 Days', 'Upcoming'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilterAlert(tab)}
            className={`px-3.5 py-2 rounded-xl transition-all ${
              filterAlert === tab
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            {tab === 'all' ? 'All Events' : tab}
          </button>
        ))}
      </div>

      {/* Grid Split: Agenda List vs Calendar Widget */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Agenda Events (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-600" />
            <span>Upcoming Agenda</span>
          </h3>

          <div className="space-y-4">
            {filteredEvents.map((ev) => (
              <div 
                key={ev.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex flex-col items-center justify-center text-indigo-600 shrink-0">
                    <span className="text-[10px] font-bold uppercase">{ev.date.split('-')[1]}</span>
                    <span className="text-base font-black leading-none">{ev.date.split('-')[2] || '16'}</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                        {ev.typeBadge}
                      </span>
                      {ev.alert && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                          {ev.alert}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{ev.title}</h4>
                    <p className="text-xs text-slate-500 font-medium">{ev.time}</p>
                  </div>
                </div>

                <button className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors">
                  <Bell className="w-4 h-4 text-indigo-600" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Calendar Widget (4 cols) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">August 2026</h3>
            <div className="flex items-center gap-1">
              <button className="p-1 rounded-lg text-slate-400 hover:text-slate-700"><ChevronLeft className="w-4 h-4" /></button>
              <button className="p-1 rounded-lg text-slate-400 hover:text-slate-700"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
              <span key={i} className="font-bold text-slate-400 py-1">{d}</span>
            ))}

            {Array.from({ length: 31 }).map((_, idx) => {
              const day = idx + 1;
              const isToday = day === 14;
              const hasDeadline = day === 18;
              const hasMeeting = day === 16;
              const hasWorkshop = day === 20;

              return (
                <div 
                  key={day}
                  className={`py-2 rounded-xl text-xs font-semibold relative transition-all ${
                    isToday ? 'bg-indigo-600 text-white font-extrabold shadow-sm' :
                    hasDeadline ? 'bg-rose-50 text-rose-900 font-bold border border-rose-200' :
                    hasMeeting ? 'bg-blue-50 text-blue-900 font-bold border border-blue-200' :
                    hasWorkshop ? 'bg-emerald-50 text-emerald-900 font-bold border border-emerald-200' :
                    'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{day}</span>
                  {(hasDeadline || hasMeeting || hasWorkshop) && !isToday && (
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 absolute bottom-1 left-1/2 -translate-x-1/2" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500">
            <p className="font-semibold text-slate-700">Reminder Settings:</p>
            <p>Email and browser notifications are synced 2 hours prior to every live meeting or deadline.</p>
          </div>
        </div>

      </div>

    </div>
  );
}
