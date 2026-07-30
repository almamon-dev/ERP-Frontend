import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserCheck, ShieldCheck } from 'lucide-react';
import { navigationMap } from '@/constants/navigation';

interface HRSidebarProps {
  isOpen: boolean;
}

export const HRSidebar: React.FC<HRSidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  const isWorkspace = location.pathname.includes('/hr/workspace');
  const allHrGroups = navigationMap['hr'] || [];

  // Filter groups depending on active mode
  const hrNavGroups = allHrGroups.filter((group: any) => {
    if (!group.category) return true;
    if (isWorkspace) {
      return group.category.includes('Workspace') || group.category.includes('Overview');
    }
    return group.category.includes('Management') || group.category.includes('Overview');
  });

  const activeColorClass = isWorkspace ? 'bg-blue-50 text-blue-600 font-bold' : 'bg-emerald-50 text-[#008060] font-bold';
  const activeIconClass = isWorkspace ? 'text-blue-600' : 'text-[#008060]';

  return (
    <aside className={`fixed lg:static inset-y-0 left-0 z-30 bg-white border-r border-slate-200 transform transition-all duration-300 flex flex-col ${isOpen ? 'w-64 translate-x-0' : '-translate-x-full lg:w-[72px] lg:translate-x-0'}`}>
      <div className="h-16 flex items-center justify-between px-5 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm ${isWorkspace ? 'bg-blue-600' : 'bg-[#008060]'}`}>
            {isWorkspace ? <UserCheck size={18} /> : <ShieldCheck size={18} />}
          </div>
          {isOpen && (
            <div className="flex flex-col">
              <span className="text-[13.5px] font-bold text-slate-900 leading-tight">HR Module</span>
              <span className={`text-[10.5px] font-bold uppercase tracking-wider ${isWorkspace ? 'text-blue-600' : 'text-[#008060]'}`}>
                {isWorkspace ? 'My Workspace' : 'HR Management'}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-3 px-2.5 space-y-4">
        {hrNavGroups.map((groupItem: any, idx: number) => {
          if (!groupItem.items) {
            const isActive = location.pathname === groupItem.path;
            return (
              <Link
                key={idx}
                to={groupItem.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-all ${isActive ? activeColorClass : 'text-slate-700 hover:bg-slate-50'}`}
              >
                <groupItem.icon size={18} className={isActive ? activeIconClass : 'text-slate-400'} />
                {isOpen && <span>{groupItem.name}</span>}
              </Link>
            );
          }

          return (
            <div key={idx} className="space-y-1">
              {isOpen && (
                <div className={`px-3 text-[11px] font-bold uppercase tracking-wider ${isWorkspace ? 'text-blue-500' : 'text-emerald-700'}`}>
                  {groupItem.group || groupItem.category}
                </div>
              )}
              <div className="space-y-0.5 pl-1">
                {groupItem.items.map((sub: any, sIdx: number) => {
                  const isActive = location.pathname.startsWith(sub.path);
                  return (
                    <Link
                      key={sIdx}
                      to={sub.path}
                      className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[12.5px] font-medium transition-all ${isActive ? activeColorClass : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                      <sub.icon size={16} className={isActive ? activeIconClass : 'text-slate-400'} />
                      {isOpen && <span className="truncate">{sub.name}</span>}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
