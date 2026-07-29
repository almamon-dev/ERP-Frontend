import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, LogOut, LayoutDashboard, Settings, ChevronRight, ChevronDown } from 'lucide-react';
import { navigationMap } from '@/constants/navigation';

interface SidebarProps {
    isOpen: boolean;
}

const NavGroup = ({ item, location, isOpen }: { item: any; location: any; isOpen: boolean }) => {
    const isActiveGroup = item.items.some((subItem: any) => {
        const basePath = subItem.path.split('?')[0];
        return location.pathname === basePath || (basePath !== '/' && location.pathname.startsWith(basePath));
    });

    const [isExpanded, setIsExpanded] = useState(isActiveGroup);

    React.useEffect(() => {
        if (isActiveGroup) {
            setIsExpanded(true);
        }
    }, [isActiveGroup, location.pathname, location.search]);

    return (
        <div className="mb-0.5">
            <button
                onClick={() => {
                    if (isOpen) setIsExpanded(!isExpanded);
                }}
                title={!isOpen ? item.group : undefined}
                className={`w-full flex items-center ${isOpen ? 'justify-between px-3 py-2.5' : 'justify-center py-2.5'} rounded-xl text-[13.5px] font-medium transition-all group cursor-pointer ${isActiveGroup
                        ? 'bg-[#EAF5EF] text-[#0D6E4F] font-semibold'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    }`}
            >
                <div className={`flex items-center ${isOpen ? 'gap-3' : 'justify-center'}`}>
                    {item.icon && (
                        <item.icon
                            size={19}
                            strokeWidth={1.75}
                            className={isActiveGroup ? 'text-[#0D6E4F]' : 'text-slate-400 group-hover:text-slate-600'}
                        />
                    )}
                    {isOpen && <span className="whitespace-nowrap">{item.group}</span>}
                </div>
                {isOpen && (
                    <span className="shrink-0 ml-1">
                        {isExpanded ? (
                            <ChevronDown
                                size={15}
                                strokeWidth={2}
                                className={isActiveGroup ? 'text-[#0D6E4F]' : 'text-slate-400 group-hover:text-slate-600'}
                            />
                        ) : (
                            <ChevronRight
                                size={15}
                                strokeWidth={2}
                                className={isActiveGroup ? 'text-[#0D6E4F]' : 'text-slate-400 group-hover:text-slate-600'}
                            />
                        )}
                    </span>
                )}
            </button>

            {isOpen && isExpanded && (
                <div className="pl-6 pr-2 space-y-0.5 my-1">
                    {item.items.map((subItem: any, idx: number) => {
                        const currentUrl = location.pathname + location.search;
                        const basePath = subItem.path.split('?')[0];
                        const isActive = currentUrl === subItem.path || 
                            (location.pathname === basePath && !location.search && idx === 0);

                        return (
                            <Link
                                key={subItem.name}
                                to={subItem.path}
                                className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors group ${isActive
                                        ? 'bg-[#EAF5EF]/60 text-[#0D6E4F] font-bold'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                    }`}
                            >
                                <div className="flex items-center gap-2.5 whitespace-nowrap min-w-0">
                                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? 'bg-[#0D6E4F]' : 'bg-slate-300 group-hover:bg-slate-400'}`} />
                                    <span className="truncate">{subItem.name}</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default function Sidebar({ isOpen }: SidebarProps) {
    const location = useLocation();
    const currentModule = location.pathname.split('/')[1] || 'dashboard';

    const navItems = navigationMap[currentModule] || [
        { name: 'Dashboard', path: `/${currentModule}`, icon: LayoutDashboard },
        { name: 'Settings', path: `/${currentModule}/settings`, icon: Settings },
    ];

    return (
        <aside className={`fixed lg:static inset-y-0 left-0 z-30 bg-white border-r border-slate-200 transform transition-all duration-300 ease-in-out flex flex-col overflow-hidden ${isOpen ? 'w-64 translate-x-0' : '-translate-x-full lg:w-[72px] lg:translate-x-0'}`}>
            <div className="h-16 flex items-center justify-center lg:justify-start px-5 border-b border-gray-100 shrink-0 whitespace-nowrap">
                <div className="w-8 h-8 bg-[#0D6E4F] rounded flex items-center justify-center shrink-0 shadow-xs">
                    <span className="text-white font-bold text-lg leading-none">E</span>
                </div>
                <div className={`flex flex-col ml-3 transition-all duration-300 ${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}`}>
                    <span className="text-[14px] font-bold text-gray-900 leading-tight">Enterprise ERP</span>
                    <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">System</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto overflow-x-hidden py-3 px-2.5 custom-scrollbar">
                {navItems.map((item, idx) => {
                    const prevCategory = idx > 0 ? navItems[idx - 1].category : null;
                    const showCategory = item.category && item.category !== prevCategory;

                    return (
                        <React.Fragment key={idx}>
                            {showCategory && (
                                isOpen ? (
                                    <div className="px-3 mb-2 mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                                        {item.category}
                                    </div>
                                ) : (
                                    <div className="mb-2 mt-4 border-t border-slate-100 mx-2" />
                                )
                            )}

                            {item.group ? (
                                <NavGroup item={item} location={location} isOpen={isOpen} />
                            ) : (
                                <Link
                                    to={item.path}
                                    title={!isOpen ? item.name : undefined}
                                    className={`flex items-center ${isOpen ? 'justify-between px-3 py-2.5' : 'justify-center py-2.5'} rounded-xl text-[13.5px] font-medium transition-all group mb-0.5 ${(location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)))
                                            ? 'bg-[#EAF5EF] text-[#0D6E4F] font-semibold'
                                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                                        }`}
                                >
                                    <div className={`flex items-center ${isOpen ? 'gap-3' : 'justify-center'}`}>
                                        <item.icon
                                            size={19}
                                            strokeWidth={1.75}
                                            className={(location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path))) ? 'text-[#0D6E4F]' : 'text-slate-400 group-hover:text-slate-600'}
                                        />
                                        {isOpen && <span className="whitespace-nowrap">{item.name}</span>}
                                    </div>
                                </Link>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            <div className="p-4 border-t border-gray-100 shrink-0 space-y-2">
                <Link
                    to="/admin/modules"
                    title={!isOpen ? "Modules" : undefined}
                    className={`flex items-center ${isOpen ? 'gap-3 px-3' : 'justify-center'} py-2 w-full rounded-lg text-[13px] font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors`}
                >
                    <ArrowLeft size={19} className="text-slate-400" />
                    {isOpen && <span className="whitespace-nowrap">Back to Modules</span>}
                </Link>
                <button
                    title={!isOpen ? "Logout" : undefined}
                    className={`flex items-center ${isOpen ? 'gap-3 px-3' : 'justify-center'} py-2 w-full rounded-lg text-[13px] font-medium text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer`}
                >
                    <LogOut size={19} />
                    {isOpen && <span className="whitespace-nowrap">Logout</span>}
                </button>
            </div>
        </aside>
    );
}
