import React, { createContext, useContext, useState, useEffect } from 'react';
import { COURSES } from '../data/coursesData';
import { getQuizForCourse } from '../data/quizzesData';
import { 
  INITIAL_USER, 
  INITIAL_ADMIN, 
  INITIAL_TASKS, 
  INITIAL_LEADERBOARD, 
  INITIAL_SHOWCASE_PROJECTS, 
  INITIAL_SCHEDULE,
  SAMPLE_CERTIFICATE 
} from '../data/initialState';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Navigation & Active View State
  const [activeTab, setActiveTab] = useState('home'); // home, courses, details, beginner, quiz, profile-score, learning-path, dashboard, workspace, schedule, ai-chat, leaderboard, final-project, showcase, certificate, verify, profile, admin, login
  const [toastMessage, setToastMessage] = useState(null);

  // Theme State (Dark Mode vs Light Mode)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('skillsphere_theme') || 'dark';
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('skillsphere_theme', nextTheme);
      showToast(`🎨 Switched to ${nextTheme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}`);
      return nextTheme;
    });
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Authentication State Flags
  const [isInternLoggedIn, setIsInternLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [initialAuthTab, setInitialAuthTab] = useState('intern'); // 'intern' or 'admin' or 'register'

  // User & Auth State
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('skillsphere_user');
    return saved ? JSON.parse(saved) : INITIAL_USER;
  });

  const [admin, setAdmin] = useState(INITIAL_ADMIN);
  const [currentRole, setCurrentRole] = useState('intern'); // 'intern' or 'admin'

  // Login Handlers
  const loginAsIntern = (internData) => {
    setIsInternLoggedIn(true);
    setCurrentRole('intern');
    if (internData?.name) {
      setUser(prev => ({ ...prev, name: internData.name, email: internData.email || prev.email }));
    }
    setActiveTab('dashboard');
    showToast(`👋 Signed in as Intern (${user.name})`);
  };

  const loginAsAdmin = () => {
    setIsAdminLoggedIn(true);
    setCurrentRole('admin');
    setActiveTab('admin');
    showToast(`⚡ Signed in as Administrator (${admin.name})`);
  };

  const logout = () => {
    setIsInternLoggedIn(false);
    setIsAdminLoggedIn(false);
    setCurrentRole('intern');
    setActiveTab('home');
    showToast(`👋 Signed out successfully.`);
  };

  // Auth Guards
  const requireInternAuth = (targetTab = 'dashboard') => {
    if (isInternLoggedIn) {
      setActiveTab(targetTab);
    } else {
      setInitialAuthTab('intern');
      setActiveTab('login');
      showToast('🔒 Please sign in to access the intern workspace.', 'info');
    }
  };

  const requireAdminAuth = () => {
    if (isAdminLoggedIn) {
      setCurrentRole('admin');
      setActiveTab('admin');
    } else {
      setInitialAuthTab('admin');
      setCurrentRole('admin');
      setActiveTab('login');
      showToast('🔒 Admin authentication required. Enter admin credentials.', 'info');
    }
  };

  // Course Selection & Quiz State
  const [selectedCourseId, setSelectedCourseId] = useState(() => user.selectedCourseId || 'web-dev');
  const [activeQuizCourseId, setActiveQuizCourseId] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizScoreResult, setQuizScoreResult] = useState(null);

  // Workspace & Admin Tasks State
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('skillsphere_tasks');
    return saved ? JSON.parse(saved) : INITIAL_TASKS;
  });

  // Showcase Projects
  const [showcaseProjects, setShowcaseProjects] = useState(() => {
    const saved = localStorage.getItem('skillsphere_showcase');
    return saved ? JSON.parse(saved) : INITIAL_SHOWCASE_PROJECTS;
  });

  // Leaderboard State
  const [leaderboard, setLeaderboard] = useState(() => {
    const saved = localStorage.getItem('skillsphere_leaderboard');
    return saved ? JSON.parse(saved) : INITIAL_LEADERBOARD;
  });

  // Schedule & Events State
  const [scheduleEvents, setScheduleEvents] = useState(INITIAL_SCHEDULE);

  // Certificate State
  const [certificate, setCertificate] = useState(() => {
    const saved = localStorage.getItem('skillsphere_certificate');
    return saved ? JSON.parse(saved) : SAMPLE_CERTIFICATE;
  });

  // Chatbot State
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: `Hello ${user.name}! I'm SkillSphere AI, your context-aware internship mentor. You are currently enrolled in ${COURSES.find(c => c.id === selectedCourseId)?.title || 'Web Development'}. How can I assist your learning today?`,
      timestamp: 'Just now'
    }
  ]);

  // Dynamic Course List (Admin can Add, Edit, Delete)
  const [coursesList, setCoursesList] = useState(() => {
    const saved = localStorage.getItem('skillsphere_courses');
    return saved ? JSON.parse(saved) : COURSES;
  });

  // Sync Courses to LocalStorage
  useEffect(() => {
    localStorage.setItem('skillsphere_courses', JSON.stringify(coursesList));
  }, [coursesList]);

  // --- ADMIN CRUD ACTIONS ---

  // Admin Course CRUD
  const adminAddCourse = (courseData) => {
    const newCourse = {
      id: courseData.id || `course-${Date.now()}`,
      category: courseData.category || 'tech',
      title: courseData.title,
      iconName: courseData.iconName || 'Code',
      tagline: courseData.tagline || 'Master real-world skills with practical projects.',
      description: courseData.description,
      difficulty: courseData.difficulty || 'Beginner → Intermediate',
      duration: courseData.duration || '6 Weeks',
      skills: Array.isArray(courseData.skills) ? courseData.skills : (courseData.skills || '').split(',').map(s => s.trim()),
      projectGoal: courseData.projectGoal || 'Complete a production-ready capstone project.',
      expectedOutcomes: courseData.expectedOutcomes || ['Build scalable applications', 'Deploy to production'],
      tools: Array.isArray(courseData.tools) ? courseData.tools : (courseData.tools || '').split(',').map(t => t.trim()),
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      accentGradient: 'from-indigo-500 to-blue-600',
      weeklyModules: courseData.weeklyModules || [
        { week: 1, title: 'Foundations & Setup', time: '10 hrs', status: 'pending' },
        { week: 2, title: 'Core Concepts & Logic', time: '12 hrs', status: 'pending' },
        { week: 3, title: 'Intermediate Execution', time: '14 hrs', status: 'pending' },
        { week: 4, title: 'Capstone Project Build', time: '16 hrs', status: 'pending' }
      ]
    };

    setCoursesList(prev => [...prev, newCourse]);
    showToast(`✅ New Course "${newCourse.title}" created successfully!`);
  };

  const adminEditCourse = (courseId, updatedData) => {
    setCoursesList(prev => prev.map(c => {
      if (c.id === courseId) {
        return {
          ...c,
          ...updatedData,
          skills: typeof updatedData.skills === 'string' ? updatedData.skills.split(',').map(s => s.trim()) : (updatedData.skills || c.skills),
          tools: typeof updatedData.tools === 'string' ? updatedData.tools.split(',').map(t => t.trim()) : (updatedData.tools || c.tools)
        };
      }
      return c;
    }));
    showToast(`✏️ Course updated successfully!`);
  };

  const adminDeleteCourse = (courseId) => {
    setCoursesList(prev => prev.filter(c => c.id !== courseId));
    showToast(`🗑️ Course deleted from catalog.`);
  };

  // Admin Intern Profile & Achievements CRUD
  const adminEditProfile = (updatedProfile) => {
    setUser(prev => ({
      ...prev,
      ...updatedProfile
    }));
    showToast(`✏️ Intern profile updated by Admin!`);
  };

  const adminAddAchievement = (ach) => {
    setUser(prev => ({
      ...prev,
      achievements: [...(prev.achievements || []), ach]
    }));
    showToast(`🏆 Badge "${ach.title}" granted to Intern!`);
  };

  const adminDeleteAchievement = (index) => {
    setUser(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, idx) => idx !== index)
    }));
    showToast(`🗑️ Achievement badge removed.`);
  };

  // Admin Certificate CRUD
  const adminEditCertificate = (updatedCert) => {
    setCertificate(prev => ({
      ...prev,
      ...updatedCert
    }));
    showToast(`✏️ Certificate details updated by Admin!`);
  };

  const adminDeleteCertificate = () => {
    setCertificate(prev => ({
      ...prev,
      status: 'REVOKED'
    }));
    showToast(`⚠️ Certificate revoked by Admin.`);
  };

  // Admin Task CRUD
  const adminEditTask = (taskId, updatedTaskData) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, ...updatedTaskData } : t));
    showToast(`✏️ Task updated!`);
  };

  const adminDeleteTask = (taskId) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
    showToast(`🗑️ Task deleted.`);
  };

  // Admin Showcase CRUD
  const adminEditShowcase = (projectId, updatedData) => {
    setShowcaseProjects(prev => prev.map(p => p.id === projectId ? { ...p, ...updatedData } : p));
    showToast(`✏️ Showcase project updated!`);
  };

  const adminDeleteShowcase = (projectId) => {
    setShowcaseProjects(prev => prev.filter(p => p.id !== projectId));
    showToast(`🗑️ Project removed from public showcase.`);
  };

  // User Profile & Password Updates (Intern)
  const updateUserProfile = (updatedDetails) => {
    setUser(prev => ({
      ...prev,
      ...updatedDetails
    }));
    showToast('✨ Intern profile details updated successfully!');
  };

  const changeUserPassword = (currentPassword, newPassword) => {
    const activePassword = user.password || 'intern123';
    if (currentPassword !== activePassword) {
      showToast('❌ Incorrect current password. Please try again.');
      return false;
    }
    setUser(prev => ({ ...prev, password: newPassword }));
    showToast('🔒 Intern password changed successfully!');
    return true;
  };

  // Admin Profile & Password Updates (Admin)
  const updateAdminProfile = (updatedDetails) => {
    setAdmin(prev => ({
      ...prev,
      ...updatedDetails
    }));
    showToast('⚡ Admin profile details updated successfully!');
  };

  const changeAdminPassword = (currentPassword, newPassword) => {
    const activePassword = admin.password || 'admin123';
    if (currentPassword !== activePassword) {
      showToast('❌ Incorrect current password. Please try again.');
      return false;
    }
    setAdmin(prev => ({ ...prev, password: newPassword }));
    showToast('🔒 Admin password changed successfully!');
    return true;
  };

  // Admin Leaderboard CRUD
  const adminEditLeaderboardItem = (rankToEdit, updatedData) => {
    setLeaderboard(prev => {
      const updated = prev.map(item => {
        if (item.rank === rankToEdit) {
          return {
            ...item,
            ...updatedData,
            points: Number(updatedData.points ?? item.points),
            scorePercent: Number(updatedData.scorePercent ?? item.scorePercent)
          };
        }
        return item;
      });
      // Re-sort by points descending and reassign ranks
      return updated
        .sort((a, b) => b.points - a.points)
        .map((item, index) => ({ ...item, rank: index + 1 }));
    });
    showToast(`🏆 Leaderboard entry updated and ranks recalculated!`);
  };

  const adminAddLeaderboardItem = (newItemData) => {
    setLeaderboard(prev => {
      const newItem = {
        rank: prev.length + 1,
        name: newItemData.name || 'New Intern',
        points: Number(newItemData.points || 500),
        scorePercent: Number(newItemData.scorePercent || 80),
        badge: newItemData.badge || '🌱 Rising Star',
        avatar: newItemData.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        courseId: newItemData.courseId || 'web-dev',
        isCurrentUser: false
      };
      return [...prev, newItem]
        .sort((a, b) => b.points - a.points)
        .map((item, index) => ({ ...item, rank: index + 1 }));
    });
    showToast(`✨ Added "${newItemData.name}" to Leaderboard!`);
  };

  const adminDeleteLeaderboardItem = (rankToDelete) => {
    setLeaderboard(prev => {
      return prev
        .filter(item => item.rank !== rankToDelete)
        .sort((a, b) => b.points - a.points)
        .map((item, index) => ({ ...item, rank: index + 1 }));
    });
    showToast(`🗑️ Removed entry from Leaderboard.`);
  };

  // Show toast utility
  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Switch Course Action
  const selectCourse = (courseId) => {
    setSelectedCourseId(courseId);
    setUser(prev => ({ ...prev, selectedCourseId: courseId }));
    setActiveTab('details');
  };

  // Start Beginner Mode (Skip Quiz)
  const startBeginnerMode = () => {
    setUser(prev => ({
      ...prev,
      mode: 'beginner',
      skillLevel: 'Beginner',
      overallScore: 50,
      completedModulesCount: 0
    }));
    showToast('🌱 Beginner Mode activated! Starting from core fundamentals.');
    setActiveTab('learning-path');
  };

  // Start Assessment Quiz
  const startQuiz = (courseId) => {
    setActiveQuizCourseId(courseId || selectedCourseId);
    setQuizAnswers({});
    setActiveTab('quiz');
  };

  // Submit Quiz & Calculate Skill Profile
  const submitQuiz = (answers, courseId) => {
    const quiz = getQuizForCourse(courseId || selectedCourseId);
    let correct = 0;
    quiz.forEach((q, idx) => {
      if (answers[idx] === q.answer) correct++;
    });
    const percentage = Math.round((correct / quiz.length) * 100);

    let level = 'Beginner';
    if (percentage >= 80) level = 'Advanced';
    else if (percentage >= 60) level = 'Intermediate';

    const result = {
      score: percentage,
      correctCount: correct,
      totalCount: quiz.length,
      level
    };

    setQuizScoreResult(result);
    setUser(prev => ({
      ...prev,
      mode: 'quiz',
      skillLevel: level,
      overallScore: percentage
    }));

    showToast(`🎉 Quiz completed! Your Skill Score is ${percentage}% (${level})`);
    setActiveTab('profile-score');
  };

  // Complete a Learning Module
  const completeModule = (moduleIndex) => {
    setUser(prev => {
      const current = prev.completedModulesCount || 0;
      const updated = Math.min(6, current + 1);
      return { ...prev, completedModulesCount: updated };
    });
    showToast('Module marked as completed! Learning progress updated.');
  };

  // Intern Submit Task
  const submitTask = (taskId, submissionData) => {
    setTasks(prev => prev.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          status: 'Submitted',
          submittedAt: new Date().toISOString().split('T')[0],
          links: {
            github: submissionData.github || '',
            demo: submissionData.demo || '',
            drive: submissionData.drive || '',
            linkedin: submissionData.linkedin || ''
          },
          studentComment: submissionData.comment || ''
        };
      }
      return task;
    }));
    showToast('🚀 Task submitted successfully! Sent to Admin for review.');
  };

  // Admin Review & Score Task
  const adminReviewTask = (taskId, status, score, feedback) => {
    setTasks(prev => prev.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          status, // 'Approved' or 'Changes Requested'
          score: Number(score),
          feedback
        };
      }
      return task;
    }));

    // Update Leaderboard Points on Approval
    if (status === 'Approved') {
      setLeaderboard(prev => prev.map(item => {
        if (item.isCurrentUser) {
          return {
            ...item,
            points: item.points + score * 10,
            scorePercent: Math.min(99, item.scorePercent + 2)
          };
        }
        return item;
      }));
      showToast(`Task reviewed and ${status}! Updated intern points.`);
    } else {
      showToast(`Task updated to ${status}. Feedback sent to intern.`);
    }
  };

  // Admin Approve & Feature Project for Showcase
  const adminApproveProject = (projectData) => {
    const newProject = {
      id: `prj-${Date.now()}`,
      title: projectData.title,
      internName: projectData.internName || user.name,
      courseId: projectData.courseId || selectedCourseId,
      category: projectData.category || 'tech',
      featuredBadge: projectData.badge || '🏆 Project of the Week',
      description: projectData.description,
      image: projectData.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80',
      tags: projectData.tags ? projectData.tags.split(',') : ['React', 'Full-Stack'],
      github: projectData.github || '#',
      demo: projectData.demo || '#',
      approvedBy: admin.name,
      rating: 9.8
    };

    setShowcaseProjects(prev => [newProject, ...prev]);
    showToast('✨ Project approved and published to Public Showcase!');
  };

  // Admin Create New Task
  const adminCreateTask = (newTaskData) => {
    const newTask = {
      id: `tsk-${Date.now()}`,
      courseId: newTaskData.courseId || selectedCourseId,
      title: newTaskData.title,
      description: newTaskData.description,
      deadline: newTaskData.deadline || 'In 3 Days',
      priority: newTaskData.priority || 'Medium',
      status: 'Pending',
      submittedAt: null,
      score: null,
      feedback: null,
      links: {}
    };
    setTasks(prev => [newTask, ...prev]);
    showToast('📋 New assignment created and posted to Intern workspace.');
  };

  // Send AI Chat Message
  const sendAIMessage = (text) => {
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChatMessages(prev => [...prev, userMsg]);

    // Context aware response logic
    setTimeout(() => {
      const activeCourse = COURSES.find(c => c.id === selectedCourseId);
      const pendingTask = tasks.find(t => t.status === 'In Progress' || t.status === 'Pending');

      let reply = `Regarding your ${activeCourse?.title || 'course'} journey: `;
      const lower = text.toLowerCase();

      if (lower.includes('stuck') || lower.includes('task') || lower.includes('help')) {
        reply += `You're currently working on "${pendingTask?.title || 'API Integration'}". I recommend checking the module guidelines on ${activeCourse?.skills[0] || 'core concepts'} and testing your endpoints with sample payloads before submitting.`;
      } else if (lower.includes('explain') || lower.includes('concept') || lower.includes('what is')) {
        reply += `In ${activeCourse?.title}, mastering ${activeCourse?.skills[1] || 'key concepts'} allows you to build production-grade solutions. Break down your logic into modular steps: Input -> Validation -> Logic -> Output.`;
      } else if (lower.includes('idea') || lower.includes('project')) {
        reply += `A great capstone project for ${activeCourse?.title} would be: ${activeCourse?.projectGoal}. Make sure to include GitHub documentation and a live demo!`;
      } else {
        reply += `I'm here to support your ${activeCourse?.title} learning path! You are currently at level ${user.skillLevel}. Try completing your next learning module or ask me specific technical questions!`;
      }

      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, aiMsg]);
    }, 800);
  };

  const [activeAdminTab, setActiveAdminTab] = useState('reviews'); // reviews, courses, profile-mgmt, certificates, showcase, create-task, admin-settings

  const activeCourse = COURSES.find(c => c.id === selectedCourseId) || COURSES[0];

  return (
    <AppContext.Provider value={{
      theme,
      setTheme,
      toggleTheme,
      activeTab,
      setActiveTab,
      activeAdminTab,
      setActiveAdminTab,
      toastMessage,
      showToast,
      user,
      setUser,
      admin,
      currentRole,
      setCurrentRole,
      selectedCourseId,
      setSelectedCourseId,
      activeCourse,
      selectCourse,
      startBeginnerMode,
      activeQuizCourseId,
      startQuiz,
      submitQuiz,
      quizScoreResult,
      completeModule,
      tasks,
      submitTask,
      adminReviewTask,
      adminCreateTask,
      showcaseProjects,
      adminApproveProject,
      leaderboard,
      scheduleEvents,
      setScheduleEvents,
      certificate,
      chatMessages,
      sendAIMessage,
      coursesList,
      adminAddCourse,
      adminEditCourse,
      adminDeleteCourse,
      adminEditProfile,
      adminAddAchievement,
      adminDeleteAchievement,
      adminEditCertificate,
      adminDeleteCertificate,
      adminEditTask,
      adminDeleteTask,
      adminEditShowcase,
      adminDeleteShowcase,
      adminEditLeaderboardItem,
      adminAddLeaderboardItem,
      adminDeleteLeaderboardItem,
      isInternLoggedIn,
      isAdminLoggedIn,
      initialAuthTab,
      setInitialAuthTab,
      loginAsIntern,
      loginAsAdmin,
      logout,
      requireInternAuth,
      requireAdminAuth,
      updateUserProfile,
      changeUserPassword,
      updateAdminProfile,
      changeAdminPassword
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
