import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Bell, Search, Calendar, LayoutGrid, LogOut, User, Sparkles } from 'lucide-react';
import ModuleSelectorModal from '@/components/modals/module-selector-modal';
import { useAuth } from '@/contexts/AuthContext';

export default function EssLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isModuleModalOpen, setIsModuleModalOpen] = useState(false);

  // Derive active ESS page title
  const getPageTitle = () => {
    const search = location.search;
    if (search.includes('tab=leave')) return 'Leave Application';
    if (search.includes('tab=movement')) return 'Movement Application';
    if (search.includes('tab=adjust')) return 'Attendance Adjust';
    if (search.includes('tab=shift')) return 'Shift Change';
    if (search.includes('tab=application')) return 'Advance Salary (IOU)';
    if (location.pathname.includes('about-me')) return 'About Me';
    if (location.pathname.includes('time-management')) return 'Time Management';
    if (location.pathname.includes('leave-movement')) return 'Leave & Movement';
    if (location.pathname.includes('iou')) return 'IOU & Advance Salary';
    if (location.pathname.includes('financial-aid')) return 'Financial Aid';
    if (location.pathname.includes('assets')) return 'My Assets';
    if (location.pathname.includes('expenses')) return 'Expense Claims';
    if (location.pathname.includes('kpi-bonus')) return 'KPI & Bonus';
    if (location.pathname.includes('supervisor')) return 'Supervisor Panel';
    if (location.pathname.includes('payslip')) return 'PaySlip';
    if (location.pathname.includes('todo')) return 'My Tasks';
    return 'Employee Self Service';
  };

  const navTabs = [
    { name: 'Dashboard', path: '/employee-portal/dashboard' },
    { name: 'Time Mgmt', path: '/employee-portal/time-management' },
    { name: 'Leave & Movement', path: '/employee-portal/leave-movement' },
    { name: 'IOU', path: '/employee-portal/iou' },
    { name: 'KPI & Bonus', path: '/employee-portal/kpi-bonus' },
    { name: 'My Profile', path: '/employee-portal/about-me' },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#f8fafc] overflow-hidden font-sans">

      {/* TOP ESS HEADER BAR */}
      <header className="h-16 bg-white border-b border-slate-200/80 flex items-center justify-between px-4 sm:px-6 z-10 shrink-0 shadow-2xs">
        
        {/* Left Side: App Launcher, Title & Top Nav Tabs */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          
          {/* 9-DOTS APP LAUNCHER BUTTON */}
          <button
            onClick={() => setIsModuleModalOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-slate-100/90 hover:bg-slate-200/80 text-slate-700 font-medium text-[12.5px] transition-colors cursor-pointer border border-slate-200/80 shrink-0"
            title="Open Module App Selector"
          >
            <LayoutGrid size={16} className="text-[#008060] shrink-0" />
            <span className="font-semibold text-slate-800 tracking-tight hidden sm:inline">Modules</span>
          </button>

          {/* Portal Badge & Page Title */}
          <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
            <span className="bg-[#008060]/10 text-[#008060] px-2 py-0.5 rounded text-[11px] font-extrabold uppercase tracking-wide hidden md:inline-block">
              ESS Portal
            </span>
            <h1 className="text-[15px] sm:text-[16px] font-bold text-[#0B1E43] tracking-tight truncate">
              {getPageTitle()}
            </h1>
          </div>

          {/* Quick Header Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 pl-4 border-l border-slate-200">
            {navTabs.map((tab) => {
              const isActive = location.pathname === tab.path.split('?')[0];
              return (
                <button
                  key={tab.name}
                  onClick={() => navigate(tab.path)}
                  className={`px-2.5 py-1 rounded text-[12px] font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-slate-100 text-[#008060]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </nav>

        </div>

        {/* Right Side: Search, Notifications & User Profile */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          
          {/* Top Search Bar */}
          <div className="hidden lg:flex items-center bg-slate-50 px-3 py-1.5 rounded-full w-[220px] border border-slate-200 focus-within:border-[#008060] focus-within:bg-white transition-colors">
            <Search size={14} className="text-slate-400 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search ESS..."
              className="bg-transparent border-none outline-none text-[12px] w-full text-slate-700 placeholder-slate-400 font-medium"
            />
          </div>

          {/* Notification & Calendar Action Icons */}
          <div className="flex items-center gap-2 text-slate-500 border-r border-slate-200 pr-3">
            <button className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600 transition-colors relative cursor-pointer" title="Notifications">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
            </button>
            <button 
              onClick={() => navigate('/employee-portal/calendar')}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer" 
              title="Calendar & Meetings"
            >
              <Calendar size={18} />
            </button>
          </div>

          {/* User Profile Badge (Connected to AuthContext) */}
          <div 
            onClick={() => navigate('/employee-portal/about-me')}
            className="flex items-center gap-2.5 cursor-pointer hover:opacity-90 transition-opacity"
            title="View Profile"
          >
            <div className="w-8 h-8 rounded-full bg-[#008060] text-white flex items-center justify-center font-bold text-[12px] shadow-2xs">
              {user?.initials || 'AM'}
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[12.5px] font-bold text-slate-900 leading-tight">
                {user?.name || 'Al Mamon'}
              </span>
              <span className="text-[10.5px] font-semibold text-[#008060]">
                {user?.roleLabel || 'Employee'}
              </span>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={() => {
              logout();
              navigate('/web/login');
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer ml-1"
            title="Sign Out"
          >
            <LogOut size={17} />
          </button>

        </div>

      </header>

      {/* MAIN SCROLLABLE CONTENT */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden bg-[#f8fafc] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <Outlet />
      </main>

      {/* 9-DOTS MODULE APP SELECTOR MODAL */}
      <ModuleSelectorModal 
        isOpen={isModuleModalOpen} 
        onClose={() => setIsModuleModalOpen(false)} 
      />

    </div>
  );
}
