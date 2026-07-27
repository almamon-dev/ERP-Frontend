import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Bell, Search, Calendar, LayoutGrid } from 'lucide-react';
import Sidebar from './Sidebar';
import ModuleSelectorModal from '@/components/modals/module-selector-modal';

export default function AdminLayout() {
  const location = useLocation();
  const isEmployeePortal = location.pathname.startsWith('/employee-portal');

  // Sidebar defaults to false if in Employee Portal, true otherwise
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isEmployeePortal);
  const [isModuleModalOpen, setIsModuleModalOpen] = useState(false);

  // Derive title
  const getPageTitle = () => {
    const search = location.search;
    if (search.includes('tab=leave')) return 'Leave Application';
    if (search.includes('tab=movement')) return 'Movement Application';
    if (search.includes('tab=adjust')) return 'Attendance Adjust';
    if (search.includes('tab=shift')) return 'Shift Change';
    if (search.includes('tab=application')) return 'Advance Salary (IOU)';
    if (location.pathname.includes('about-me')) return 'About Me';
    return 'Employee Portal';
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden font-sans">
      
      {/* Sidebar Overlay (Only rendered if sidebar is active) */}
      {!isEmployeePortal && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Render Sidebar only for non-Employee Portal pages or if sidebar enabled */}
      {!isEmployeePortal && <Sidebar isOpen={isSidebarOpen} />}

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* TOP HEADER BAR */}
        <header className="h-16 bg-white border-b border-gray-200/80 flex items-center justify-between px-4 sm:px-6 z-10 shrink-0 shadow-2xs">
          
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Toggle Sidebar Button (Only if not employee portal) */}
            {!isEmployeePortal && (
              <button
                className="text-slate-600 hover:text-[#008060] transition-colors p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16M4 12h10M4 18h16" />
                </svg>
              </button>
            )}

            {/* 9-DOTS APP LAUNCHER BUTTON */}
            <button
              onClick={() => setIsModuleModalOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-slate-100/90 hover:bg-slate-200/80 text-slate-700 font-medium text-[12.5px] transition-colors cursor-pointer border border-slate-200/80"
              title="Open Module App Selector"
            >
              <LayoutGrid size={16} className="text-slate-600 shrink-0" />
              <span className="font-semibold text-slate-700 tracking-tight">Modules</span>
            </button>

            {/* Current Page Title */}
            <div className="hidden md:block pl-2 border-l border-slate-200">
              <h1 className="text-[16px] font-bold text-[#0B1E43] tracking-tight">
                {getPageTitle()}
              </h1>
            </div>

            {/* Top Search Bar */}
            <div className="hidden lg:flex items-center bg-slate-50 px-3.5 py-1.5 rounded-full w-[260px] border border-slate-200 focus-within:border-[#008060] focus-within:bg-white transition-colors">
              <Search size={15} className="text-slate-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search anything..."
                className="bg-transparent border-none outline-none text-[12.5px] w-full text-slate-700 placeholder-slate-400 font-medium"
              />
            </div>

          </div>

          {/* Right Top Bar Items */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-slate-500 border-r border-slate-200 pr-4">
              <button className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600 transition-colors relative" title="Notifications">
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
              </button>
              <button className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600 transition-colors" title="Calendar">
                <Calendar size={18} />
              </button>
            </div>

            {/* User Profile Badge */}
            <div className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-[#008060] text-white flex items-center justify-center font-bold text-[12px] shadow-2xs">
                AM
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-[12.5px] font-bold text-slate-900 leading-tight">Al Mamon</span>
                <span className="text-[10.5px] font-semibold text-slate-400">Jr. Laravel Developer</span>
              </div>
            </div>
          </div>

        </header>

        {/* Main Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-[#f8fafc] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Outlet />
        </main>
      </div>

      {/* 9-DOTS MODULE APP SELECTOR MODAL */}
      <ModuleSelectorModal 
        isOpen={isModuleModalOpen} 
        onClose={() => setIsModuleModalOpen(false)} 
      />

    </div>
  );
}
