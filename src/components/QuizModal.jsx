import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import { getQuizForCourse } from '../data/quizzesData';
import { 
  X, 
  HelpCircle, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export default function QuizModal() {
  const { activeQuizCourseId, selectedCourseId, submitQuiz, setActiveTab } = useApp();

  const courseId = activeQuizCourseId || selectedCourseId;
  const course = COURSES.find(c => c.id === courseId) || COURSES[0];
  const questions = getQuizForCourse(courseId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const currentQ = questions[currentIndex];
  const totalQs = questions.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQs) * 100);

  const handleOptionSelect = (optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQs - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    submitQuiz(selectedAnswers, courseId);
  };

  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
        
        {/* Quiz Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/20 border border-indigo-500/30 px-3 py-1 rounded-full">
              Course Skill Quiz
            </span>
            <h2 className="text-2xl font-bold mt-2">{course.title} Assessment</h2>
          </div>
          <button
            onClick={() => setActiveTab('details')}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="bg-slate-100 px-6 sm:px-8 py-3 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600 font-semibold">
          <span>Question {currentIndex + 1} of {totalQs}</span>
          <div className="w-48 bg-slate-200 rounded-full h-2 overflow-hidden mx-4">
            <div className="bg-indigo-600 h-full rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }} />
          </div>
          <span>{answeredCount} / {totalQs} Answered</span>
        </div>

        {/* Question & Options Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-100">
              Topic: {currentQ.skill}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {currentIndex + 1}. {currentQ.question}
            </h3>
          </div>

          <div className="space-y-3 pt-2">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = selectedAnswers[currentIndex] === optIdx;
              return (
                <button
                  key={optIdx}
                  onClick={() => handleOptionSelect(optIdx)}
                  className={`w-full p-4 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-indigo-50 border-indigo-600 text-indigo-950 shadow-sm'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{opt}</span>
                  </div>
                  {isSelected && <CheckCircle2 className="w-5 h-5 text-indigo-600" />}
                </button>
              );
            })}
          </div>

          {/* Nav Controls */}
          <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                currentIndex === 0 
                  ? 'opacity-40 cursor-not-allowed text-slate-400 bg-slate-100' 
                  : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {currentIndex < totalQs - 1 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md shadow-indigo-600/30"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold flex items-center gap-2 transition-all shadow-lg shadow-emerald-600/30"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit Assessment</span>
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
