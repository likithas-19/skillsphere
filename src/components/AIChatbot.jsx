import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Code, 
  BookOpen, 
  Bug, 
  Lightbulb, 
  FileText, 
  Mic,
  User
} from 'lucide-react';

export default function AIChatbot() {
  const { selectedCourseId, user, tasks, chatMessages, sendAIMessage } = useApp();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const course = COURSES.find(c => c.id === selectedCourseId) || COURSES[0];
  const pendingTask = tasks.find(t => t.status === 'In Progress' || t.status === 'Pending') || tasks[0];

  const quickPrompts = [
    { label: '💻 Technical Help', prompt: `How do I complete my current task "${pendingTask?.title}" for ${course.title}?` },
    { label: '📚 Explain a Concept', prompt: `Can you explain the core concepts of ${course.skills[0] || 'the main topic'} simply?` },
    { label: '🐛 Debug My Work', prompt: `I'm encountering an issue with my ${course.title} implementation. How should I debug it step by step?` },
    { label: '💡 Project Ideas', prompt: `What are 3 unique capstone project ideas for ${course.title}?` },
    { label: '📝 Assignment Help', prompt: `Can you break down the requirements for ${course.title} weekly assignments?` },
    { label: '🎤 Presentation Help', prompt: `How should I structure my final presentation slides for the mentor review?` }
  ];

  const handleSend = (textToSend) => {
    const msg = textToSend || input;
    if (!msg.trim()) return;
    sendAIMessage(msg);
    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">SkillSphere AI</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                Context Active
              </span>
            </div>
            <p className="text-xs text-indigo-300">Your personal internship companion.</p>
          </div>
        </div>

        {/* Active Context Chips */}
        <div className="flex flex-wrap gap-2 text-[11px]">
          <span className="px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-slate-300">
            Path: <strong>{course.title}</strong>
          </span>
          <span className="px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-slate-300">
            Level: <strong>{user.skillLevel}</strong>
          </span>
          <span className="px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-slate-300">
            Active Task: <strong>{pendingTask?.title?.slice(0, 20)}...</strong>
          </span>
        </div>
      </div>

      {/* Main Chat Interface Container */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden flex flex-col h-[550px]">
        
        {/* Messages Scroll Area */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                msg.sender === 'user' ? 'bg-slate-900 text-white' : 'bg-indigo-600 text-white shadow-sm'
              }`}>
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`max-w-[80%] p-4 rounded-2xl text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-slate-900 text-white rounded-tr-none'
                  : 'bg-indigo-50 border border-indigo-100 text-indigo-950 rounded-tl-none shadow-xs'
              }`}>
                <p className="whitespace-pre-line">{msg.text}</p>
                <span className={`text-[10px] block mt-1.5 opacity-60 ${msg.sender === 'user' ? 'text-slate-400 text-right' : 'text-indigo-600'}`}>
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Action Triggers Row */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 overflow-x-auto flex items-center gap-2">
          {quickPrompts.map((qp, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(qp.prompt)}
              className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-slate-700 hover:text-indigo-900 text-[11px] font-semibold whitespace-nowrap transition-all shrink-0"
            >
              {qp.label}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="p-4 bg-white border-t border-slate-200 flex items-center gap-3"
        >
          <input
            type="text"
            placeholder={`Ask SkillSphere AI anything about ${course.title}, your current task, or debugging...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 text-xs focus:outline-none"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md shadow-indigo-600/30"
          >
            <span>Send</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>

    </div>
  );
}
