import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  ArrowLeftRight,
  CreditCard,
  Receipt,
  HardDrive,
  CheckSquare,
  FileCheck,
  BarChart2,
  Settings,
  HelpCircle,
  Search,
  Bell,
  Mail,
  User,
  LogOut,
  LayoutGrid,
  Menu,
  X,
  Hexagon,
  ChevronRight,
  ChevronDown,
  Phone
} from 'lucide-react';
import ModuleSelectorModal from '@/components/modals/module-selector-modal';
import { useAuth } from '@/contexts/AuthContext';

export default function EssLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isModuleModalOpen, setIsModuleModalOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(() => {
    return {
      'Attendance': location.pathname.startsWith('/employee-portal/time-management'),
      'Expenses': location.pathname.startsWith('/employee-portal/expenses'),
      'KPI & Bonus Dashboard': location.pathname.startsWith('/employee-portal/kpi-bonus'),
    };
  });

  const toggleExpand = (name: string) => {
    setExpandedItems(prev => ({ ...prev, [name]: !prev[name] }));
  };

  React.useEffect(() => {
    if (location.pathname.startsWith('/employee-portal/time-management')) {
      setExpandedItems(prev => ({ ...prev, Attendance: true }));
    }
    if (location.pathname.startsWith('/employee-portal/expenses')) {
      setExpandedItems(prev => ({ ...prev, Expenses: true }));
    }
    if (location.pathname.startsWith('/employee-portal/kpi-bonus')) {
      setExpandedItems(prev => ({ ...prev, 'KPI & Bonus Dashboard': true }));
    }
  }, [location.pathname]);

  // Navigation Items matching exact design
  const mainNavItems = [
    { name: 'Dashboard', path: '/employee-portal/dashboard', icon: LayoutDashboard },
    {
      name: 'Attendance',
      path: '/employee-portal/time-management',
      icon: Calendar,
      subItems: [
        { name: 'My Attendance', tab: 'my-attendance', path: '/employee-portal/time-management?tab=my-attendance' },
        { name: 'Off Day Swap (Comp Off)', tab: 'offday-swap', path: '/employee-portal/time-management?tab=offday-swap' },
        { name: 'Weekend Swap', tab: 'weekend-swap', path: '/employee-portal/time-management?tab=weekend-swap' },
        { name: 'Shift Swap', tab: 'shift-swap', path: '/employee-portal/time-management?tab=shift-swap' },
        { name: 'Overtime', tab: 'overtime', path: '/employee-portal/time-management?tab=overtime' },
        { name: 'Attendance Reports', tab: 'reports', path: '/employee-portal/time-management?tab=reports' },
        { name: 'Attendance History', tab: 'history', path: '/employee-portal/time-management?tab=history' },
      ]
    },
    { name: 'Leave & Movement', path: '/employee-portal/leave-movement', icon: ArrowLeftRight },
    { name: 'Payroll', path: '/employee-portal/payslip', icon: CreditCard },
    {
      name: 'Expenses',
      path: '/employee-portal/expenses',
      icon: Receipt,
      subItems: [
        { name: 'Dashboard', tab: 'dashboard', path: '/employee-portal/expenses?tab=dashboard' },
        { name: 'Requisitions', tab: 'requisitions', path: '/employee-portal/expenses?tab=requisitions' },
        { name: 'My Claims', tab: 'claims', path: '/employee-portal/expenses?tab=claims' },
        { name: 'Receipts & Attachments', tab: 'receipts', path: '/employee-portal/expenses?tab=receipts' },
        { name: 'Reports', tab: 'reports', path: '/employee-portal/expenses?tab=reports' },
      ]
    },
    { name: 'Assets', path: '/employee-portal/assets', icon: HardDrive },
    { name: 'Tasks', path: '/employee-portal/todo', icon: CheckSquare },
    { name: 'IOU & Requisition', path: '/employee-portal/iou', icon: FileCheck },
    {
      name: 'KPI & Bonus Dashboard',
      path: '/employee-portal/kpi-bonus',
      icon: BarChart2,
      subItems: [
        { name: 'KPI & Bonus Summary', tab: 'summary', path: '/employee-portal/kpi-bonus?tab=summary' },
        { name: 'Operations Project History', tab: 'operations', path: '/employee-portal/kpi-bonus?tab=operations' },
        { name: 'Campaign & Sales Commission', tab: 'campaign', path: '/employee-portal/kpi-bonus?tab=campaign' },
      ]
    },
  ];

  const adminSettingsItems = [
    { name: 'Settings', path: '/employee-portal/settings', icon: Settings },
    { name: 'Support', path: '/employee-portal/support', icon: HelpCircle },
  ];

  const isItemActive = (itemPath: string) => {
    const currentPath = location.pathname;
    const basePath = itemPath.split('?')[0];
    if (basePath === '/employee-portal/dashboard') {
      return currentPath === '/employee-portal/dashboard' || currentPath === '/employee-portal';
    }
    return currentPath === basePath || (basePath !== '/' && currentPath.startsWith(basePath));
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans text-slate-800 antialiased">
      {/* MOBILE OVERLAY */}
      {isMobileSidebarOpen && (
        <div
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 lg:hidden transition-opacity"
        />
      )}

      {/* LEFT SIDEBAR */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-[270px] bg-white border-r border-slate-200/90 flex flex-col justify-between shrink-0 max-lg:transition-transform max-lg:duration-200 max-lg:ease-in-out ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
      >
        {/* BRAND & LOGO HEADER */}
        <div>
          <div className="h-16 px-5 flex items-center justify-between border-b border-slate-100">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/employee-portal/dashboard')}>
              <div className="w-9 h-9 rounded-md bg-gradient-to-tr from-[#3730A3] via-[#4338CA] to-[#4F46E5] text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
                <Hexagon size={22} className="fill-white/20 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-[15px] leading-tight text-slate-900 tracking-tight">
                  ESS PORTAL
                </span>
                <span className="text-[10.5px] font-medium text-slate-400 leading-tight tracking-wide">
                  Employee Self Service
                </span>
              </div>
            </div>

            {/* Mobile Close Button */}
            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
            >
              <X size={18} />
            </button>
          </div>

          {/* SIDEBAR NAVIGATION ITEMS */}
          <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-280px)] custom-scrollbar">
            {mainNavItems.map((item) => {
              const active = isItemActive(item.path);
              const Icon = item.icon;
              const hasSubItems = item.subItems && item.subItems.length > 0;

              return (
                <div key={item.name} className="space-y-0.5">
                  <button
                    onClick={() => {
                      if (hasSubItems) {
                        toggleExpand(item.name);
                        if (!location.pathname.startsWith(item.path)) {
                          navigate(item.subItems[0].path);
                        }
                      } else {
                        navigate(item.path);
                        setIsMobileSidebarOpen(false);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-[4px] font-medium text-[13.5px] transition-all duration-75 group cursor-pointer ${active
                      ? 'bg-[#EAF5EF] text-[#0D6E4F] font-semibold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon
                        size={19}
                        strokeWidth={1.75}
                        className={`shrink-0 transition-colors ${active ? 'text-[#0D6E4F]' : 'text-slate-400 group-hover:text-slate-600'
                          }`}
                      />
                      <span className="truncate">{item.name}</span>
                    </div>
                    {hasSubItems && (
                      <span className="shrink-0 ml-1">
                        {expandedItems[item.name] ? (
                          <ChevronDown size={15} strokeWidth={2} className={active ? 'text-[#0D6E4F]' : 'text-slate-400 group-hover:text-slate-600'} />
                        ) : (
                          <ChevronRight size={15} strokeWidth={2} className={active ? 'text-[#0D6E4F]' : 'text-slate-400 group-hover:text-slate-600'} />
                        )}
                      </span>
                    )}
                  </button>

                  {hasSubItems && expandedItems[item.name] && (
                    <div className="ml-5 pl-2 space-y-0.5 my-1">
                      {item.subItems.map((sub) => {
                        const searchTab = new URLSearchParams(location.search).get('tab');
                        const defaultTab = item.subItems[0].tab;
                        const currentTab = searchTab === 'my-claims' ? 'claims' : searchTab;
                        const isSubActive = location.pathname.startsWith(item.path) &&
                          (currentTab === sub.tab || (!currentTab && sub.tab === defaultTab));

                        return (
                          <button
                            key={sub.name}
                            onClick={() => {
                              navigate(sub.path);
                              setIsMobileSidebarOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-2 py-1.5 text-[12.5px] transition-colors duration-75 cursor-pointer group ${isSubActive
                              ? 'text-[#0D6E4F] font-semibold'
                              : 'text-slate-500 hover:text-slate-800 font-normal'
                              }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSubActive ? 'bg-[#0D6E4F]' : 'bg-slate-300 group-hover:bg-slate-400'}`} />
                              <span className="truncate">{sub.name}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* ADMIN & SETTINGS SECTION HEADER */}
            <div className="pt-4 pb-1.5 px-3">
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                ADMIN & SETTINGS
              </span>
            </div>

            {adminSettingsItems.map((item) => {
              const active = isItemActive(item.path);
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setIsMobileSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-md font-medium text-[13.5px] transition-all duration-150 group cursor-pointer ${active
                    ? 'bg-[#EAF5EF] text-[#0D6E4F] font-semibold'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                >
                  <Icon
                    size={19}
                    strokeWidth={1.75}
                    className={`shrink-0 transition-colors ${active ? 'text-[#0D6E4F]' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                  />
                  <span className="truncate">{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* BOTTOM USER PROFILE CARD IN SIDEBAR */}
        <div className="p-3 border-t border-slate-100 bg-white">
          <div className="p-3 bg-slate-50/90 rounded-lg border border-slate-200/80 space-y-2.5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"}
                  alt={user?.name || "Al Mamon"}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-2xs"
                  onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80";
                  }}
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-[13.5px] leading-tight text-slate-900 truncate">
                  {user?.name || 'Al Mamon'}
                </span>
                <span className="text-[11px] font-semibold text-indigo-600 leading-tight truncate mt-0.5">
                  {user?.designation || 'Laravel Developer'}
                </span>
              </div>
            </div>

            {/* EMPLOYEE INFO MINIMAL GRID */}
            <div className="pt-2 border-t border-slate-200/60 space-y-1 text-[11px] font-medium text-slate-500">
              <div className="flex items-center justify-between text-slate-600">
                <span>Department</span>
                <span className="font-bold text-slate-800">{user?.department || 'Operations'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Employee ID</span>
                <span className="font-semibold text-slate-700 font-mono">15202</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Email</span>
                <span className="font-medium text-slate-600 truncate max-w-[120px]" title={user?.email || 'al.mamon@example.com'}>
                  {user?.email || 'al.mamon@example.com'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Mobile</span>
                <span className="font-medium text-slate-600 font-mono">+8801768085606</span>
              </div>
            </div>

            {/* VIEW PROFILE BUTTON */}
            <button
              onClick={() => {
                navigate('/employee-portal/about-me');
                setIsMobileSidebarOpen(false);
              }}
              className="w-full py-1.5 px-3 bg-white hover:bg-slate-100 text-slate-700 text-[11.5px] font-bold rounded-[3px] border border-slate-200/80 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs transition-colors"
            >
              <User size={13} className="text-slate-500" />
              <span>View Full Profile</span>
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* TOP HEADER BAR */}
        <header className="h-16 bg-white border-b border-slate-200/90 flex items-center justify-between px-4 sm:px-6 shrink-0 z-10 shadow-2xs">
          {/* LEFT: MOBILE TOGGLE & GLOBAL SEARCH BAR */}
          <div className="flex items-center gap-3 flex-1 max-w-xl">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              title="Open Menu"
            >
              <Menu size={20} />
            </button>

            {/* GLOBAL SEARCH */}
            <div className="relative w-full max-w-md hidden sm:block">
              <div className="flex items-center bg-slate-50 hover:bg-slate-100/80 focus-within:bg-white border border-slate-200 focus-within:border-indigo-500 rounded-md px-3 py-1.5 transition-all">
                <Search size={15} className="text-slate-400 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="bg-transparent border-none outline-none text-[12.5px] w-full text-slate-800 placeholder-slate-400 font-medium"
                />
                <kbd className="hidden md:inline-flex items-center gap-1 bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[10px] font-mono font-semibold text-slate-400 shrink-0">
                  Ctrl + K
                </kbd>
              </div>
            </div>
          </div>

          {/* RIGHT: ACTION ICONS & USER PROFILE */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* MODULE SELECTOR (9-DOTS) */}
            <button
              onClick={() => setIsModuleModalOpen(true)}
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Switch Module"
            >
              <LayoutGrid size={18} />
            </button>

            {/* CALENDAR */}
            <button
              onClick={() => navigate('/employee-portal/calendar')}
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer hidden sm:flex"
              title="Calendar"
            >
              <Calendar size={18} />
            </button>

            {/* NOTIFICATIONS */}
            <button
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors relative cursor-pointer"
              title="Notifications"
            >
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white font-extrabold text-[9px] flex items-center justify-center ring-2 ring-white">
                5
              </span>
            </button>

            {/* MESSAGES */}
            <button
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors relative cursor-pointer hidden sm:flex"
              title="Messages"
            >
              <Mail size={18} />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white font-extrabold text-[9px] flex items-center justify-center ring-2 ring-white">
                5
              </span>
            </button>

            {/* USER PROFILE DROPDOWN BADGE */}
            <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
              <div
                onClick={() => navigate('/employee-portal/about-me')}
                className="flex items-center gap-2.5 cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"}
                  alt={user?.name || "Al Mamon"}
                  className="w-8 h-8 rounded-full object-cover border border-slate-200 shadow-2xs"
                  onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80";
                  }}
                />
                <div className="hidden md:flex flex-col text-left">
                  <span className="text-[12.5px] font-bold text-slate-900 leading-tight">
                    {user?.name || 'Al Mamon'}
                  </span>
                  <span className="text-[10.5px] font-medium text-slate-500">
                    {user?.designation || 'Laravel Developer'}
                  </span>
                </div>
              </div>

              {/* LOGOUT BUTTON */}
              <button
                onClick={() => {
                  logout();
                  navigate('/web/login');
                }}
                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors cursor-pointer"
                title="Sign Out"
              >
                <LogOut size={17} />
              </button>
            </div>
          </div>
        </header>

        {/* MAIN SCROLLABLE CONTENT AREA */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-[#F8FAFC] custom-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Outlet />
        </main>
      </div>

      {/* 9-DOTS MODULE SELECTOR MODAL */}
      <ModuleSelectorModal
        isOpen={isModuleModalOpen}
        onClose={() => setIsModuleModalOpen(false)}
      />
    </div>
  );
}

