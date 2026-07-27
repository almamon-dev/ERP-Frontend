import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart2, Users, UserCircle, ShoppingCart,
  Warehouse, Calculator, BrainCircuit, ShieldCheck,
  ShoppingBag, BarChart3, HelpCircle, LogOut,
  Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';

const modulesList = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    desc: 'Real-time metrics, KPI tracking, and system-wide activity overview.',
    path: '/dashboard',
    icon: BarChart2,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 'administration',
    name: 'Administration',
    desc: 'Role management, security policies, audit logs, and global settings.',
    path: '/administration',
    icon: ShieldCheck,
    color: 'text-slate-500',
    bg: 'bg-slate-100'
  },
  {
    id: 'crm',
    name: 'CRM',
    desc: 'Lead management, sales pipelines, client interactions, and follow-ups.',
    path: '/crm',
    icon: UserCircle,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
  {
    id: 'sales',
    name: 'Sales',
    desc: 'Quotation generation, order processing, invoicing, and POS.',
    path: '/sales',
    icon: ShoppingCart,
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    id: 'purchase',
    name: 'Purchase',
    desc: 'Supplier management, purchase orders, and procurement workflows.',
    path: '/purchase',
    icon: ShoppingBag,
    color: 'text-fuchsia-500',
    bg: 'bg-fuchsia-50'
  },
  {
    id: 'inventory',
    name: 'Inventory',
    desc: 'Stock tracking, warehouse transfers, barcode scanning, and valuation.',
    path: '/inventory',
    icon: Warehouse,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50'
  },
  {
    id: 'accounting',
    name: 'Accounting',
    desc: 'General ledger, chart of accounts, tax compliance, and reconciliation.',
    path: '/accounting',
    icon: Calculator,
    color: 'text-teal-500',
    bg: 'bg-teal-50'
  },
  {
    id: 'hr',
    name: 'HR',
    desc: 'Employee records, attendance tracking, payroll, and leave management.',
    path: '/hr',
    icon: Users,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    id: 'ess',
    name: 'Employee Self Service',
    desc: 'Personal employee portal for leave, IOU, payslips, assets, and time logs.',
    path: '/employee-portal',
    icon: Users,
    color: 'text-teal-600',
    bg: 'bg-teal-50'
  },
  {
    id: 'reports',
    name: 'Reports',
    desc: 'Custom data visualization, financial statements, and exportable analytics.',
    path: '/reports',
    icon: BarChart3,
    color: 'text-violet-500',
    bg: 'bg-violet-50'
  },
  {
    id: 'ai',
    name: 'AI',
    desc: 'Predictive forecasting, automated insights, and smart document processing.',
    path: '/ai',
    icon: BrainCircuit,
    color: 'text-rose-500',
    bg: 'bg-rose-50'
  },
  {
    id: 'support',
    name: 'Support',
    desc: 'Ticketing system, knowledge base, SLA tracking, and user feedback.',
    path: '/support',
    icon: HelpCircle,
    color: 'text-amber-500',
    bg: 'bg-amber-50'
  },
];

export default function ModulesSelectorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* MINIMAL HEADER SECTION */}
      <header className="shrink-0 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between w-full">
          {/* Left: Simple Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">E</span>
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Enterprise
            </span>
          </div>

          {/* Right: Simple User Profile & Logout */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-[14px] font-semibold text-slate-900 leading-none mb-1">Admin User</p>
                <p className="text-[12px] text-slate-500">Super Administrator</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-medium text-[15px] shrink-0 border border-slate-200">
                AU
              </div>
            </div>

            <div className="w-px h-8 bg-slate-200 hidden sm:block"></div>

            <button
              onClick={() => navigate('/web/login')}
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors"
              title="Logout"
            >
              <LogOut size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT SECTION */}
      <div className="p-6 lg:px-12 lg:py-8 max-w-[1440px] mx-auto flex-1 w-full flex flex-col pb-32">
        <div className="mb-8">
          <h1 className="text-[24px] font-bold text-slate-900 tracking-tight">
            Module Selection
          </h1>
          <p className="mt-1 text-slate-500 font-medium text-[14px]">
            Choose a workspace module to access its dedicated dashboard and tools.
          </p>
        </div>

        {/* CARDS GRID (BALANCED) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6 mt-4">
          {modulesList.map((mod) => (
            <div
              key={mod.id}
              onClick={() => navigate(mod.path)}
              className="bg-white p-5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer flex flex-col items-start"
            >
              <div className={`w-10 h-10 rounded-md shrink-0 flex items-center justify-center mb-4 ${mod.bg}`}>
                <mod.icon className={`w-5 h-5 ${mod.color}`} strokeWidth={2} />
              </div>
              <h3 className="font-bold text-[15px] text-slate-900 leading-tight mb-1">
                {mod.name}
              </h3>
              <p className="text-[13px] text-slate-500 font-medium leading-snug">
                {mod.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MINIMAL FOOTER SECTION (FIXED AT BOTTOM) */}
      <footer className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md z-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] font-medium text-slate-400 border-t border-slate-200">
            <p>
              &copy; {new Date().getFullYear()} Enterprise ERP. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-4">
                <button onClick={() => navigate('/support/terms')} className="hover:text-slate-600 transition-colors">
                  Terms
                </button>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <button onClick={() => navigate('/support/privacy-policy')} className="hover:text-slate-600 transition-colors">
                  Privacy
                </button>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <button onClick={() => navigate('/support/feedback')} className="hover:text-slate-600 transition-colors">
                  Feedback
                </button>
              </div>

              <div className="w-px h-4 bg-slate-300 hidden sm:block"></div>

              <div className="flex items-center gap-2.5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm" title="Facebook">
                  <Facebook size={15} fill="currentColor" strokeWidth={0} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm" title="Twitter">
                  <Twitter size={14} fill="currentColor" strokeWidth={0} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm" title="LinkedIn">
                  <Linkedin size={14} fill="currentColor" strokeWidth={0} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm" title="Instagram">
                  <Instagram size={15} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
