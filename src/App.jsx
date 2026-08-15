import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';

import LandingPage from './components/LandingPage';
import CoursesPage from './components/CoursesPage';
import CourseDetailsModal from './components/CourseDetailsModal';
import QuizModal from './components/QuizModal';
import SkillProfileView from './components/SkillProfileView';
import LearningPathView from './components/LearningPathView';
import InternDashboard from './components/InternDashboard';
import WorkspaceView from './components/WorkspaceView';
import ScheduleView from './components/ScheduleView';
import AIChatbot from './components/AIChatbot';
import LeaderboardView from './components/LeaderboardView';
import FinalProjectView from './components/FinalProjectView';
import AdminDashboard from './components/AdminDashboard';
import ProjectShowcaseView from './components/ProjectShowcaseView';
import CertificateView from './components/CertificateView';
import CertificateVerification from './components/CertificateVerification';
import InternProfileView from './components/InternProfileView';
import AuthModal from './components/AuthModal';

function MainContent() {
  const { activeTab, theme } = useApp();

  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return <LandingPage />;
      case 'courses':
        return <CoursesPage />;
      case 'details':
        return <CourseDetailsModal />;
      case 'quiz':
        return <QuizModal />;
      case 'profile-score':
        return <SkillProfileView />;
      case 'learning-path':
        return <LearningPathView />;
      case 'dashboard':
        return <InternDashboard />;
      case 'workspace':
        return <WorkspaceView />;
      case 'schedule':
        return <ScheduleView />;
      case 'ai-chat':
        return <AIChatbot />;
      case 'leaderboard':
        return <LeaderboardView />;
      case 'final-project':
        return <FinalProjectView />;
      case 'admin':
        return <AdminDashboard />;
      case 'showcase':
        return <ProjectShowcaseView />;
      case 'certificate':
        return <CertificateView />;
      case 'verify':
        return <CertificateVerification />;
      case 'profile':
        return <InternProfileView />;
      case 'login':
        return <AuthModal />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <div>
        <Navbar />
        <main className="animate-fadeIn">
          {renderView()}
        </main>
      </div>
      <Footer />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
