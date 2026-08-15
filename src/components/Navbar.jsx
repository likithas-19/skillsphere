import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  BookOpen, 
  LayoutDashboard, 
  CheckSquare, 
  Calendar, 
  Bot, 
  Trophy, 
  Award, 
  ShieldCheck, 
  UserCheck, 
  User, 
  Menu, 
  X, 
  Compass, 
  ChevronDown,
  LogIn,
  LogOut,
  Sun,
  Moon
} from 'lucide-react';

// Navbar component with responsive layout and visible user/admin profile name
export default function Navbar() {
  const { 
    theme,
    toggleTheme,
    activeTab, 
    setActiveTab, 
    activeAdminTab,
    setActiveAdminTab,
    user, 
    admin, 
    currentRole, 
    setCurrentRole, 
    activeCourse, 
    showToast,
    isInternLoggedIn,
    isAdminLoggedIn,
    requireAdminAuth,
    requireInternAuth,
    setInitialAuthTab,
    logout
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleRoleToggle = () => {
    if (currentRole === 'intern') {
      // Directly redirect to Admin Portal Sign In
      setCurrentRole('admin');
      setInitialAuthTab('admin');
      setActiveTab('login');
      showToast('⚡ Redirected to Admin Portal Sign In');
    } else {
      // Directly redirect to Intern Portal Sign In
      setCurrentRole('intern');
      setInitialAuthTab('intern');
      setActiveTab('login');
      showToast('🌱 Redirected to Intern Portal Sign In');
    }
  };

  const handleNavClick = (tabId) => {
    // Gated tabs require intern authentication
    const gatedInternTabs = ['dashboard', 'workspace', 'schedule', 'certificate', 'ai-chat', 'final-project'];
    if (gatedInternTabs.includes(tabId)) {
      requireInternAuth(tabId);
    } else if (tabId === 'admin') {
      requireAdminAuth();
    } else {
      setActiveTab(tabId);
    }
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const primaryLinks = currentRole === 'admin' ? [
    { id: 'admin', label: 'Admin Management', icon: LayoutDashboard },
    { id: 'showcase', label: 'Showcase', icon: Compass },
    { id: 'leaderboard', label: 'Leaderboards', icon: Trophy },
    { id: 'verify', label: 'Verify ID', icon: ShieldCheck }
  ] : [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'courses', label: 'Explore Paths', icon: BookOpen },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'workspace', label: 'Workspace', icon: CheckSquare },
    { id: 'ai-chat', label: 'SkillSphere AI', icon: Bot },
  ];

  const secondaryLinks = currentRole === 'admin' ? [] : [
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'showcase', label: 'Project Showcase', icon: Compass },
    { id: 'certificate', label: 'Certificate', icon: Award },
    { id: 'verify', label: 'Verify Credentials', icon: ShieldCheck },
  ];

  const allMobileNavLinks = [...primaryLinks, ...secondaryLinks];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/98 backdrop-blur-md border-b border-slate-800 text-white shadow-xl w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4 relative">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-2.5 cursor-pointer group shrink-0" onClick={() => setActiveTab('home')}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center shadow-md shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight font-sans">
                  <span className="text-indigo-400 font-black">SKILL</span>
                  <span className="text-purple-400 font-black">SPHERE</span>
                </span>
                <span className="hidden sm:inline-block text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  EdTech
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden md:block">Every Skill. Every Path. One Platform.</p>
            </div>
          </div>

          {/* Desktop Primary Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-800/90 p-1 rounded-xl border border-slate-700/80 shrink-0">
            {primaryLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                    isActive 
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </button>
              );
            })}

            {/* More Dropdown for Secondary Nav Items */}
            {secondaryLinks.length > 0 && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                    secondaryLinks.some(l => l.id === activeTab) || moreDropdownOpen
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <span>More</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {moreDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-slate-900 border border-slate-700 shadow-2xl rounded-2xl p-2 space-y-1 z-50">
                    {secondaryLinks.map((sLink) => {
                      const SIcon = sLink.icon;
                      const isSubActive = activeTab === sLink.id;
                      return (
                        <button
                          key={sLink.id}
                          onClick={() => {
                            handleNavClick(sLink.id);
                            setMoreDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all text-left ${
                            isSubActive 
                              ? 'bg-indigo-600 text-white font-bold shadow-sm' 
                              : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                          }`}
                        >
                          <SIcon className="w-4 h-4 text-indigo-400 shrink-0" />
                          <span>{sLink.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* Right Controls: Theme Switcher, Role Switcher, Auth Sign In Button & Visible User Name */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 min-w-0">

            {/* Theme Switcher Button (☀️ Light / 🌙 Dark) */}
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-1 px-2 py-1.5 rounded-xl border text-xs font-bold transition-all shadow-xs shrink-0 ${
                theme === 'dark'
                  ? 'bg-slate-800 text-amber-300 border-slate-700 hover:bg-slate-700'
                  : 'bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200'
              }`}
              title={`Switch to ${theme === 'dark' ? '☀️ Light' : '🌙 Dark'} Theme`}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="hidden xl:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span className="hidden xl:inline">Dark</span>
                </>
              )}
            </button>
            
            {/* Direct Sign In / Sign Out Button */}
            {(currentRole === 'intern' ? isInternLoggedIn : isAdminLoggedIn) ? (
              <button
                onClick={logout}
                className="flex items-center gap-1 px-2 py-1.5 rounded-xl bg-slate-800 hover:bg-rose-900/60 text-slate-300 hover:text-rose-200 border border-slate-700 text-xs font-bold transition-all shrink-0"
                title="Sign out of current account"
              >
                <LogOut className="w-3.5 h-3.5 text-rose-400" />
                <span className="hidden xl:inline">Sign Out</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setInitialAuthTab(currentRole === 'admin' ? 'admin' : 'intern');
                  setActiveTab('login');
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold transition-all shadow-md shadow-emerald-600/30 shrink-0"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign In</span>
              </button>
            )}

            {/* Role Switcher Button */}
            <button
              onClick={handleRoleToggle}
              className={`flex items-center gap-1 px-2 py-1.5 rounded-xl text-xs font-semibold border transition-all shadow-sm shrink-0 whitespace-nowrap ${
                currentRole === 'admin'
                  ? 'bg-purple-950/90 text-purple-200 border-purple-600/60 hover:bg-purple-900'
                  : 'bg-indigo-950/90 text-indigo-200 border-indigo-600/60 hover:bg-indigo-900'
              }`}
              title="Click to switch role view"
            >
              {currentRole === 'admin' ? (
                <>
                  <UserCheck className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span className="hidden xl:inline text-[10px]">Role:</span>
                  <span className="bg-purple-600 text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider text-[9px]">ADMIN</span>
                </>
              ) : (
                <>
                  <User className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="hidden xl:inline text-[10px]">Role:</span>
                  <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider text-[9px]">INTERN</span>
                </>
              )}
            </button>

            {/* Always Visible User/Admin Name Profile Section */}
            {currentRole === 'intern' ? (
              <div 
                onClick={() => handleNavClick('profile')}
                className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-indigo-950/80 border border-indigo-500/50 hover:border-indigo-400 hover:bg-indigo-900/80 cursor-pointer transition-all shrink-0 shadow-sm"
                title={`View ${user.name}'s Profile`}
              >
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-7 h-7 rounded-full object-cover border border-indigo-400 shrink-0"
                />
                <div className="flex flex-col text-left min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-black text-white leading-tight whitespace-nowrap">{user.name}</span>
                  </div>
                  <span className="text-[9.5px] text-indigo-300 font-medium whitespace-nowrap leading-none hidden sm:block">{activeCourse.title}</span>
                </div>
              </div>
            ) : (
              <div 
                onClick={() => {
                  setActiveAdminTab('admin-settings');
                  handleNavClick('admin');
                }}
                className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-purple-950/80 border border-purple-500/60 hover:border-purple-400 hover:bg-purple-900/80 cursor-pointer transition-all shrink-0 shadow-sm"
                title="Click to view Admin Profile Details & Settings"
              >
                <img 
                  src={admin.avatar} 
                  alt={admin.name} 
                  className="w-7 h-7 rounded-full object-cover border border-purple-400 shrink-0"
                />
                <div className="flex flex-col text-left min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-black text-purple-100 leading-tight whitespace-nowrap">{admin.name}</span>
                  </div>
                  <span className="text-[9.5px] text-purple-300 font-medium whitespace-nowrap leading-none hidden sm:block">Platform Admin</span>
                </div>
              </div>
            )}

            {/* Mobile / Medium Screen Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 shrink-0"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1 animate-fadeIn">
          {allMobileNavLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  isActive 
                    ? 'bg-indigo-600 text-white font-bold' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4 text-indigo-400" />
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
