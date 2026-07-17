import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, LogOut, LayoutDashboard, Settings, ChevronRight } from 'lucide-react';
import { navigationMap } from '@/constants/navigation';

interface SidebarProps {
    isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
    const location = useLocation();
    const currentModule = location.pathname.split('/')[1] || 'dashboard';
    
    const navItems = navigationMap[currentModule] || [
        { name: 'Dashboard', path: `/${currentModule}`, icon: LayoutDashboard },
        { name: 'Settings', path: `/${currentModule}/settings`, icon: Settings },
    ];

    return (
        <aside className={`
            fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200 
            transform transition-transform duration-300 ease-in-out flex flex-col
            ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
            <div className="h-16 flex items-center px-5 border-b border-gray-100 shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg leading-none">E</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-gray-900 leading-tight">Enterprise ERP</span>
                    <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">System</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
                {navItems.map((item, idx) => {
                    if (item.group) {
                        return (
                            <div key={idx} className="mb-4 last:mb-0">
                                <div className="px-3 mb-1.5 mt-2 text-[11px] font-bold text-[#6d7175] uppercase tracking-wider">
                                    {item.group}
                                </div>
                                <div className="space-y-0.5">
                                    {item.items.map((subItem: any) => {
                                        const isActive = location.pathname === subItem.path || (subItem.path !== '/' && location.pathname.startsWith(subItem.path));
                                        return (
                                            <Link
                                                key={subItem.name}
                                                to={subItem.path}
                                                className={`
                                                    flex items-center justify-between px-3 py-2.5 rounded-lg text-[13px] font-medium transition-colors group
                                                    ${isActive
                                                        ? 'text-[#008060] bg-[#e4f1ef] font-semibold'
                                                        : 'text-[#6d7175] hover:bg-[#f6f6f7] hover:text-[#202223]'
                                                    }
                                                `}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <subItem.icon size={18} className={isActive ? 'text-[#008060]' : 'text-[#8c9196] group-hover:text-[#202223]'} />
                                                    {subItem.name}
                                                </div>
                                                {!isActive && <ChevronRight size={14} className="text-[#bababa] group-hover:text-[#8c9196]" />}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    }

                    const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                    return (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`
                                flex items-center justify-between px-3 py-2.5 rounded-lg text-[13px] font-medium transition-colors group
                                ${isActive
                                    ? 'text-[#008060] bg-[#e4f1ef] font-semibold'
                                    : 'text-[#6d7175] hover:bg-[#f6f6f7] hover:text-[#202223]'
                                }
                            `}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon size={18} className={isActive ? 'text-[#008060]' : 'text-[#8c9196] group-hover:text-[#202223]'} />
                                {item.name}
                            </div>
                            {!isActive && <ChevronRight size={14} className="text-[#bababa] group-hover:text-[#8c9196]" />}
                        </Link>
                    );
                })}
            </div>

            <div className="p-4 border-t border-gray-100 shrink-0 space-y-2">
                <Link 
                    to="/admin/modules" 
                    className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-[13px] font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft size={18} className="text-gray-400" />
                    Back to Modules
                </Link>
                <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-[13px] font-medium text-red-600 hover:bg-red-50 transition-colors">
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </aside>
    );
}
