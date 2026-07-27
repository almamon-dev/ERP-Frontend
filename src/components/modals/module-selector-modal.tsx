import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import {
  Search, Star, LayoutGrid, Users, Settings, Puzzle, X, Clock, Footprints, Calendar, CreditCard, RotateCcw, LayoutDashboard, ShieldCheck, UserCircle, CheckSquare, Handshake, Target, Award
} from 'lucide-react';

interface ModuleSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModuleSelectorModal({ isOpen, onClose }: ModuleSelectorModalProps) {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<'general' | 'hrms' | 'operational' | 'other'>('operational');
  const [searchQuery, setSearchQuery] = useState('');
  const modalBoxRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // HRMS Apps List
  const hrmsApps = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      desc: 'Real-time metrics, KPI tracking, and system-wide activity overview.',
      path: '/employee-portal/dashboard',
      icon: LayoutDashboard,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'leave',
      name: 'Leave Requisitions',
      desc: 'Leave applications, balance history, and status tracking.',
      path: '/employee-portal/leave-movement?tab=leave',
      icon: Calendar,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-[#008060]'
    },
    {
      id: 'movement',
      name: 'Movement Requisitions',
      desc: 'Field movement requisitions, supervisor approvals, and logs.',
      path: '/employee-portal/leave-movement?tab=movement',
      icon: Footprints,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-500'
    },
    {
      id: 'attendances',
      name: 'Attendances & Logs',
      desc: 'Daily punch logs, shift adjustments, and monthly roster.',
      path: '/employee-portal/time-management?tab=adjust',
      icon: Clock,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      id: 'shift',
      name: 'Shift Adjustment',
      desc: 'Roster shift change requests and supervisor schedule.',
      path: '/employee-portal/time-management?tab=shift',
      icon: RotateCcw,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      id: 'advance-salary',
      name: 'Advance Salary & IOU',
      desc: 'Salary advances, IOU requisitions, and settlement logs.',
      path: '/employee-portal/iou?tab=application',
      icon: CreditCard,
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
  ];

  // General Apps
  const generalApps = [
    {
      id: 'about',
      name: 'About Me',
      desc: 'Personal employee profile, employment history, and documents.',
      path: '/employee-portal/about-me',
      icon: UserCircle,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      id: 'todo',
      name: 'Todo List',
      desc: 'Personal task manager, daily checklists, and priority tracking.',
      path: '/employee-portal/todo',
      icon: CheckSquare,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-[#008060]'
    },
    {
      id: 'calendar',
      name: 'Calendar & Meetings',
      desc: 'Schedule meetings, team event reminders, and appointment logs.',
      path: '/employee-portal/calendar',
      icon: Calendar,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'settings',
      name: 'System Modules',
      desc: 'Role management, security policies, and global system settings.',
      path: '/modules',
      icon: ShieldCheck,
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-600'
    },
  ];

  // Operational Apps
  const operationalApps = [
    {
      id: 'operation',
      name: 'Operation Requisitions',
      desc: 'Core business operations, task tracking, and department workflows.',
      path: '/employee-portal/kpi-bonus?tab=operations',
      icon: Settings,
      iconBg: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
    {
      id: 'nexus',
      name: 'Nexus Partner Portal',
      desc: 'Partner portal management, affiliate links, and commission logs.',
      path: '/employee-portal/kpi-bonus?tab=campaign',
      icon: Handshake,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'campaign',
      name: 'Campaign Requisitions',
      desc: 'Marketing campaigns, outreach leads, and conversion analytics.',
      path: '/employee-portal/kpi-bonus?tab=campaign',
      icon: Target,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      id: 'kpi-bonus',
      name: 'KPI & Bonus Performance',
      desc: 'Performance indicators, quarterly goal achievements, and bonus payouts.',
      path: '/employee-portal/kpi-bonus?tab=summary',
      icon: Award,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-[#008060]'
    },
  ];

  // Other Apps
  const otherApps = [
    { id: 'iou', name: 'IOU Ledger', desc: 'Advance ledger statements, IOUs, and repayment schedules.', path: '/employee-portal/iou', icon: CreditCard, iconBg: 'bg-emerald-50', iconColor: 'text-emerald-700' },
  ];

  const getCurrentApps = () => {
    let list = hrmsApps;
    if (activeCategory === 'general') list = generalApps;
    if (activeCategory === 'operational') list = operationalApps;
    if (activeCategory === 'other') list = otherApps;

    if (searchQuery) {
      return list.filter(app => app.name.toLowerCase().includes(searchQuery.toLowerCase()) || app.desc.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return list;
  };

  const handleSelectApp = (path: string) => {
    navigate(path);
    onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 transition-all"
      onClick={onClose}
    >
      {/* MODAL BOX CONTAINER WITH LEFT SIDEBAR LAYOUT */}
      <div
        ref={modalBoxRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-[960px] h-[540px] overflow-hidden flex animate-in fade-in zoom-in-95 duration-150"
      >

        {/* LEFT SIDEBAR: CATEGORIES */}
        <div className="w-[230px] bg-[#f8fafc] border-r border-slate-200/80 p-4 flex flex-col justify-between shrink-0">
          <div className="space-y-4">

            {/* Favourites Item */}
            <div className="flex items-center justify-between p-2.5 px-3 rounded-xl hover:bg-slate-100 text-slate-700 cursor-pointer font-bold text-[13px] transition-colors">
              <div className="flex items-center gap-2.5">
                <Star size={16} className="text-slate-400" />
                <span>Favourites</span>
              </div>
              <span className="text-[11px] font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/80">0</span>
            </div>

            {/* Category Header */}
            <div>
              <span className="text-[11px] font-bold text-slate-400 px-2 block mb-2">Categories</span>

              <div className="space-y-1">

                {/* General */}
                <div
                  onClick={() => setActiveCategory('general')}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-sm cursor-pointer transition-all font-bold text-[13px] ${activeCategory === 'general'
                    ? 'bg-[#008060] text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-100/80'
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    <LayoutGrid size={16} />
                    <span>General</span>
                  </div>
                  <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${activeCategory === 'general' ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'
                    }`}>4</span>
                </div>

                {/* HRMS */}
                <div
                  onClick={() => setActiveCategory('hrms')}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-sm cursor-pointer transition-all font-bold text-[13px] ${activeCategory === 'hrms'
                    ? 'bg-[#008060] text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-100/80'
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Users size={16} />
                    <span>HRMS</span>
                  </div>
                  <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${activeCategory === 'hrms' ? 'bg-white/20 text-white' : 'bg-emerald-50 text-emerald-600'
                    }`}>6</span>
                </div>

                {/* Operational */}
                <div
                  onClick={() => setActiveCategory('operational')}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-sm cursor-pointer transition-all font-bold text-[13px] ${activeCategory === 'operational'
                    ? 'bg-[#008060] text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-100/80'
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Settings size={16} />
                    <span>Operational</span>
                  </div>
                  <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${activeCategory === 'operational' ? 'bg-white/20 text-white' : 'bg-amber-50 text-amber-600'
                    }`}>4</span>
                </div>

                {/* Other Apps */}
                <div
                  onClick={() => setActiveCategory('other')}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-sm cursor-pointer transition-all font-bold text-[13px] ${activeCategory === 'other'
                    ? 'bg-[#008060] text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-100/80'
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Puzzle size={16} />
                    <span>Other Apps</span>
                  </div>
                  <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${activeCategory === 'other' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>1</span>
                </div>

              </div>
            </div>

          </div>

          <div className="text-[11px] text-slate-400 font-medium text-center">
            ERP App Selector v2.0
          </div>
        </div>

        {/* RIGHT CONTENT AREA: SEARCH & HORIZONTAL CARDS GRID */}
        <div className="flex-1 p-5 flex flex-col justify-between bg-white overflow-hidden">

          <div className="space-y-4">
            {/* HEADER ROW WITH CLEAN MINIMAL SEARCH BAR AND CLOSE BUTTON */}
            <div className="flex items-center justify-between gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search apps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 pl-10 pr-4 bg-[#f1f5f9] hover:bg-[#e2e8f0]/60 border border-slate-200 rounded-full text-[13px] font-medium text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-[#008060] focus:ring-2 focus:ring-[#008060]/20 transition-all shadow-2xs"
                />
                <Search size={16} className="absolute left-3.5 top-3 text-slate-400 pointer-events-none" />
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-500 hover:text-rose-600 flex items-center justify-center transition-colors cursor-pointer shrink-0 border border-slate-200/60"
                title="Close Window (Esc)"
              >
                <X size={17} />
              </button>
            </div>

            {/* MODULE APP CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-h-[410px] overflow-y-auto p-1 pt-1.5 pr-2">
              {getCurrentApps().map((app) => {
                const IconComponent = app.icon;
                return (
                  <div
                    key={app.id}
                    onClick={() => handleSelectApp(app.path)}
                    className="p-4 bg-white border border-slate-200/90 hover:border-[#008060] rounded-xl flex flex-col justify-between text-left cursor-pointer transition-all duration-200 hover:shadow-md group"
                  >
                    <div>
                      <div className={`w-9 h-9 rounded-lg ${app.iconBg} ${app.iconColor} flex items-center justify-center mb-2.5 shadow-2xs group-hover:scale-105 transition-transform`}>
                        <IconComponent size={18} strokeWidth={2} />
                      </div>
                      <h4 className="text-[14px] font-bold text-slate-900 group-hover:text-[#008060] transition-colors leading-snug">
                        {app.name}
                      </h4>
                      <p className="text-[11.5px] font-medium text-slate-500 mt-1 leading-snug line-clamp-2">
                        {app.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>,
    document.body
  );
}
