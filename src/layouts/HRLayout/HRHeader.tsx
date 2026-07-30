import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bell, Search, LayoutGrid, LogOut, User, ShieldCheck, ChevronDown } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface HRHeaderProps {
  onToggleSidebar: () => void;
  onOpenModuleModal: () => void;
  isSelectorPage?: boolean;
}

export const HRHeader: React.FC<HRHeaderProps> = ({ onToggleSidebar, onOpenModuleModal, isSelectorPage }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isWorkspace = location.pathname.includes('/hr/workspace');
  const isManagement = location.pathname.includes('/hr/management');

  if (isSelectorPage) {
    return (
      <header className="shrink-0 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-2 flex items-center justify-between w-full">
          {/* Left: Enterprise Logo + Search Menu Dropdown */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/admin/modules')}>
              <div className="w-7 h-7 bg-slate-900 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm leading-none">E</span>
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">Enterprise</span>
            </div>

            {/* Search Input right next to Logo */}
            <div className="hidden md:flex items-center bg-white border border-slate-200/90 rounded-md px-3 py-1.5 w-56 shadow-2xs hover:border-slate-300">
              <input
                type="text"
                placeholder="Search menu..."
                className="bg-transparent text-[12px] outline-none w-full text-slate-700 placeholder:text-slate-400"
              />
              <ChevronDown size={13} className="text-slate-400 shrink-0 ml-1" />
            </div>
          </div>

          {/* Right: User Profile & Actions */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-[13px] font-bold text-slate-900 leading-none mb-0.5">{user?.name || 'Admin User'}</p>
                <p className="text-[11px] text-slate-500 font-medium">{user?.role || 'Super Administrator'}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-[13px] border border-slate-200">
                {user?.initials || 'AU'}
              </div>
            </div>
            <div className="w-px h-6 bg-slate-200 hidden sm:block" />
            <button onClick={() => { logout(); navigate('/web/login'); }} className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors" title="Logout">
              <LogOut size={16} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="h-12 bg-white border-b border-slate-200/80 flex items-center justify-between px-3 sm:px-5 z-10 shrink-0 shadow-2xs">
      <div className="flex items-center gap-2.5">
        <button onClick={onToggleSidebar} className="text-slate-600 hover:text-[#008060] p-1 rounded-md hover:bg-slate-100 cursor-pointer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h10M4 18h16" /></svg>
        </button>
        <button onClick={onOpenModuleModal} className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-[11.5px] border border-slate-200">
          <LayoutGrid size={14} className="text-[#008060]" />
          <span>Modules</span>
        </button>
        <div className="hidden md:flex items-center gap-1.5 pl-2 border-l border-slate-200">
          <button onClick={() => navigate('/hr/workspace/dashboard')} className={`flex items-center gap-1 px-2.5 py-0.5 rounded text-[11.5px] font-bold transition-all ${isWorkspace ? 'bg-blue-600 text-white shadow-2xs' : 'text-slate-600 hover:bg-slate-100'}`}>
            <User size={12} /> My Workspace
          </button>
          <button onClick={() => navigate('/hr/management/dashboard')} className={`flex items-center gap-1 px-2.5 py-0.5 rounded text-[11.5px] font-bold transition-all ${isManagement ? 'bg-[#008060] text-white shadow-2xs' : 'text-slate-600 hover:bg-slate-100'}`}>
            <ShieldCheck size={12} /> HR Management
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <button className="p-1 rounded-full hover:bg-slate-100 text-slate-600 relative">
          <Bell size={16} />
          <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>
        <div className="flex items-center gap-2 border-l border-slate-200 pl-2.5">
          <div className="w-7 h-7 rounded-full bg-[#008060] text-white flex items-center justify-center font-bold text-[11px]">
            {user?.initials || 'AM'}
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[12px] font-bold text-slate-900 leading-tight">{user?.name || 'Al Mamon'}</span>
            <span className="text-[10px] font-semibold text-[#008060]">{isWorkspace ? 'Workspace User' : 'HR Admin'}</span>
          </div>
        </div>
        <button onClick={() => { logout(); navigate('/web/login'); }} className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50">
          <LogOut size={15} />
        </button>
      </div>
    </header>
  );
};
