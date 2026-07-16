import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
    LayoutDashboard, Users, ShoppingCart, Package, 
    FileText, Settings, LogOut, Menu, X, Bell, Search 
} from 'lucide-react';

export default function AdminLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', path: '/web/s/I2HSLO4xu_2Dn0RxMwK2KB7JCS', icon: LayoutDashboard },
        { name: 'HR & Employees', path: '/web/hr', icon: Users },
        { name: 'Sales & CRM', path: '/web/sales', icon: ShoppingCart },
        { name: 'Inventory', path: '/web/inventory', icon: Package },
        { name: 'Accounting', path: '/web/accounting', icon: FileText },
        { name: 'Settings', path: '/web/settings', icon: Settings },
    ];

    return (
        <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200 
                transform transition-transform duration-300 ease-in-out flex flex-col
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="h-16 flex items-center px-6 border-b border-slate-200 shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-xl leading-none">E</span>
                    </div>
                    <span className="text-xl font-black text-slate-800 tracking-tight">Enterprise</span>
                </div>

                <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`
                                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors
                                    ${isActive 
                                        ? 'bg-blue-50 text-blue-700' 
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }
                                `}
                            >
                                <item.icon size={18} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="p-4 border-t border-slate-200 shrink-0">
                    <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors">
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 shrink-0">
                    <div className="flex items-center gap-4">
                        <button 
                            className="lg:hidden text-slate-500 hover:text-slate-700"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                        
                        {/* Search Bar */}
                        <div className="hidden sm:flex items-center bg-slate-100 px-3 py-2 rounded-lg w-64 border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-colors">
                            <Search size={16} className="text-slate-400 mr-2" />
                            <input 
                                type="text" 
                                placeholder="Search everything..." 
                                className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder-slate-400"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative text-slate-500 hover:text-slate-700">
                            <Bell size={20} />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </button>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold shadow-sm cursor-pointer border-2 border-white ring-2 ring-slate-100">
                            A
                        </div>
                    </div>
                </header>

                {/* Main Scrollable Content */}
                <main className="flex-1 overflow-auto bg-[#f8fafc]">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
