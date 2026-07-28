import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ChevronRight, Zap, Shield, Users, BarChart3, ShoppingCart, Package, UserCheck, Eye, EyeOff, Building2, Calculator, TrendingUp, ClipboardList, Truck, Boxes, UserCog, User, Award, Search as SearchIcon } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { ROLES, RoleType } from '@/constants/roles';

// ============================================================
// ALL 18 DEMO CREDENTIALS — click করলে auto-fill হবে
// ============================================================
const DEMO_ROLES = [
  {
    role: ROLES.SUPER_ADMIN,
    label: 'Super Admin',
    email: 'admin@erp.com',
    password: 'admin123',
    icon: Shield,
    color: 'from-violet-500 to-purple-600',
    desc: 'Full system access',
  },
  {
    role: ROLES.SYSTEM_ADMIN,
    label: 'System Administrator',
    email: 'sysadmin@erp.com',
    password: 'sys1234',
    icon: UserCog,
    color: 'from-slate-500 to-slate-700',
    desc: 'System configuration',
  },
  {
    role: ROLES.CEO,
    label: 'CEO / Director',
    email: 'ceo@erp.com',
    password: 'ceo1234',
    icon: Building2,
    color: 'from-indigo-500 to-indigo-700',
    desc: 'Executive dashboard',
  },
  {
    role: ROLES.DEPARTMENT_HEAD,
    label: 'Department Head',
    email: 'depthead@erp.com',
    password: 'dept123',
    icon: ClipboardList,
    color: 'from-cyan-500 to-cyan-700',
    desc: 'Department management',
  },
  {
    role: ROLES.HR_MANAGER,
    label: 'HR Manager',
    email: 'hr.manager@erp.com',
    password: 'hr1234',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
    desc: 'HR & Payroll access',
  },
  {
    role: ROLES.ACCOUNTS_MANAGER,
    label: 'Accounts Manager',
    email: 'accounts@erp.com',
    password: 'acc1234',
    icon: BarChart3,
    color: 'from-emerald-500 to-teal-600',
    desc: 'Finance & Accounting',
  },
  {
    role: ROLES.SALES_MANAGER,
    label: 'Sales Manager',
    email: 'sales.manager@erp.com',
    password: 'sales123',
    icon: TrendingUp,
    color: 'from-orange-500 to-amber-500',
    desc: 'Sales & CRM access',
  },
  {
    role: ROLES.PURCHASE_MANAGER,
    label: 'Purchase Manager',
    email: 'purchase.manager@erp.com',
    password: 'pur1234',
    icon: Truck,
    color: 'from-yellow-500 to-yellow-600',
    desc: 'Purchase & Vendor',
  },
  {
    role: ROLES.HR_EXECUTIVE,
    label: 'HR Executive',
    email: 'hr.exec@erp.com',
    password: 'hrex123',
    icon: UserCheck,
    color: 'from-sky-500 to-sky-600',
    desc: 'HR data entry & leave',
  },
  {
    role: ROLES.ACCOUNTANT,
    label: 'Accountant',
    email: 'accountant@erp.com',
    password: 'acnt123',
    icon: Calculator,
    color: 'from-teal-500 to-teal-700',
    desc: 'Journal & invoicing',
  },
  {
    role: ROLES.SALES_EXECUTIVE,
    label: 'Sales Executive',
    email: 'sales.exec@erp.com',
    password: 'slex123',
    icon: ShoppingCart,
    color: 'from-amber-500 to-orange-500',
    desc: 'Orders & customers',
  },
  {
    role: ROLES.CRM_EXECUTIVE,
    label: 'CRM Executive',
    email: 'crm.exec@erp.com',
    password: 'crm1234',
    icon: SearchIcon,
    color: 'from-fuchsia-500 to-purple-600',
    desc: 'Leads & pipeline',
  },
  {
    role: ROLES.PURCHASE_OFFICER,
    label: 'Purchase Officer',
    email: 'purchase.officer@erp.com',
    password: 'puro123',
    icon: Package,
    color: 'from-lime-500 to-green-600',
    desc: 'PO & goods receive',
  },
  {
    role: ROLES.INVENTORY_OFFICER,
    label: 'Inventory Officer',
    email: 'inventory@erp.com',
    password: 'inv1234',
    icon: Boxes,
    color: 'from-rose-500 to-pink-600',
    desc: 'Stock & warehouse',
  },
  {
    role: ROLES.EMPLOYEE,
    label: 'Employee (ESS)',
    email: 'al.mamun@softvence.com',
    password: 'emp1234',
    icon: User,
    color: 'from-[#008060] to-teal-600',
    desc: 'Self-Service Portal',
  },
  {
    role: ROLES.SUPERVISOR,
    label: 'Supervisor',
    email: 'ridoy@softvence.com',
    password: 'sup1234',
    icon: UserCog,
    color: 'from-green-500 to-emerald-600',
    desc: 'ESS + team approvals',
  },
  {
    role: ROLES.TEAM_LEADER,
    label: 'Team Leader',
    email: 'tanvir@softvence.com',
    password: 'tl12345',
    icon: Award,
    color: 'from-blue-400 to-indigo-500',
    desc: 'ESS + KPI tracking',
  },
  {
    role: ROLES.AUDITOR,
    label: 'Auditor',
    email: 'auditor@erp.com',
    password: 'aud1234',
    icon: ClipboardList,
    color: 'from-gray-500 to-gray-700',
    desc: 'Read-only reports',
  },
];

// ============================================================
// MOCK AUTH MAP — email → role mapping
// ============================================================
const EMAIL_ROLE_MAP: Record<string, RoleType> = {
  'admin@erp.com':              ROLES.SUPER_ADMIN,
  'sysadmin@erp.com':           ROLES.SYSTEM_ADMIN,
  'ceo@erp.com':                ROLES.CEO,
  'depthead@erp.com':           ROLES.DEPARTMENT_HEAD,
  'hr.manager@erp.com':         ROLES.HR_MANAGER,
  'accounts@erp.com':           ROLES.ACCOUNTS_MANAGER,
  'sales.manager@erp.com':      ROLES.SALES_MANAGER,
  'purchase.manager@erp.com':   ROLES.PURCHASE_MANAGER,
  'hr.exec@erp.com':            ROLES.HR_EXECUTIVE,
  'accountant@erp.com':         ROLES.ACCOUNTANT,
  'sales.exec@erp.com':         ROLES.SALES_EXECUTIVE,
  'crm.exec@erp.com':           ROLES.CRM_EXECUTIVE,
  'purchase.officer@erp.com':   ROLES.PURCHASE_OFFICER,
  'inventory@erp.com':          ROLES.INVENTORY_OFFICER,
  'al.mamun@softvence.com':     ROLES.EMPLOYEE,
  'ridoy@softvence.com':        ROLES.SUPERVISOR,
  'tanvir@softvence.com':       ROLES.TEAM_LEADER,
  'auditor@erp.com':            ROLES.AUDITOR,
};

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  // Demo card click → auto-fill credentials
  const handleDemoClick = (demo: typeof DEMO_ROLES[0]) => {
    setEmail(demo.email);
    setPassword(demo.password);
    setSelectedDemo(demo.email);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));

      const role = EMAIL_ROLE_MAP[email.toLowerCase().trim()];
      if (!role) {
        setError('Invalid credentials. Please use a demo account.');
        return;
      }

      // Set user role in AuthContext
      login(role);

      // RoleBasedRedirect at "/" will handle the actual navigation
      navigate('/');
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-[#f8fafc] font-sans">

      {/* ======= LEFT PANEL — Demo Role Selector ======= */}
      <div className="hidden lg:flex w-[440px] shrink-0 bg-[#0B1E43] flex-col p-8 relative overflow-hidden">

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Brand */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-9 h-9 rounded-lg bg-[#008060] flex items-center justify-center shrink-0 shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h1 className="text-white font-bold text-[18px] leading-none">Betopia ERP</h1>
              <p className="text-slate-400 text-[11px] mt-0.5">Enterprise Resource Platform</p>
            </div>
          </div>

          {/* Demo section heading */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <Zap size={14} className="text-[#008060]" />
              <span className="text-[#008060] text-[11px] font-bold tracking-widest uppercase">Quick Demo Access</span>
            </div>
            <h2 className="text-white text-[20px] font-bold leading-tight">
              Click any role to<br />auto-fill credentials
            </h2>
            <p className="text-slate-400 text-[12px] mt-1.5 leading-relaxed">
              Select a role below to instantly fill in the login form and explore the system.
            </p>
          </div>

          {/* Demo Role Cards */}
          <div className="space-y-2.5 flex-1 overflow-y-auto pr-1" style={{ scrollbarWidth: 'none' }}>
            {DEMO_ROLES.map((demo) => {
              const Icon = demo.icon;
              const isActive = selectedDemo === demo.email;
              return (
                <button
                  key={demo.role}
                  onClick={() => handleDemoClick(demo)}
                  className={`w-full text-left p-3 rounded-xl border transition-all duration-150 cursor-pointer group ${
                    isActive
                      ? 'bg-white/15 border-white/30 shadow-lg'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${demo.color} flex items-center justify-center shrink-0 shadow-md`}>
                      <Icon size={15} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-white font-semibold text-[13px] truncate">{demo.label}</span>
                        {isActive && (
                          <span className="text-[10px] font-bold text-[#00c48c] bg-[#00c48c]/10 px-1.5 py-0.5 rounded shrink-0">
                            Selected
                          </span>
                        )}
                      </div>
                      <span className="text-slate-400 text-[11px] block truncate">{demo.email}</span>
                    </div>
                    <ChevronRight size={14} className={`text-slate-500 shrink-0 transition-transform ${isActive ? 'text-white translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <p className="text-slate-500 text-[11px] leading-relaxed">
              🔒 Demo credentials are for testing only.<br />
              Each role has different module access & dashboard.
            </p>
          </div>
        </div>
      </div>

      {/* ======= RIGHT PANEL — Login Form ======= */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-[380px]">

          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#008060]/10 mb-4 lg:hidden">
              <svg className="w-5 h-5 text-[#008060]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-[26px] font-extrabold text-slate-900 tracking-tight">Welcome back</h2>
            <p className="text-slate-500 text-[13.5px] mt-1">Sign in to your ERP account</p>
          </div>

          {/* Mobile Demo Hint */}
          <div className="lg:hidden mb-5 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-700 text-[12px] font-medium flex items-center gap-1.5">
              <Zap size={13} />
              Demo: use <code className="font-mono bg-amber-100 px-1 rounded">al.mamun@softvence.com</code> / <code className="font-mono bg-amber-100 px-1 rounded">emp1234</code>
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div>
              <label className="text-[13px] font-semibold text-slate-700 block mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); setSelectedDemo(null); }}
                  placeholder="Enter your email"
                  className="w-full h-10 pl-9 pr-3 text-[13.5px] bg-white border border-slate-200 rounded-lg outline-none focus:border-[#008060] focus:ring-2 focus:ring-[#008060]/10 transition-all text-slate-800 placeholder-slate-400 font-medium"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[13px] font-semibold text-slate-700">Password</label>
                <a href="/web/forgot-password" className="text-[12px] text-[#008060] hover:underline font-medium">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  placeholder="Enter your password"
                  className="w-full h-10 pl-9 pr-10 text-[13.5px] bg-white border border-slate-200 rounded-lg outline-none focus:border-[#008060] focus:ring-2 focus:ring-[#008060]/10 transition-all text-slate-800 placeholder-slate-400 font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                <p className="text-rose-600 text-[12.5px] font-medium">{error}</p>
              </div>
            )}

            {/* Selected role preview */}
            {selectedDemo && (
              <div className="p-2.5 bg-[#008060]/5 border border-[#008060]/20 rounded-lg flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#008060] animate-pulse shrink-0" />
                <p className="text-[#008060] text-[12px] font-semibold">
                  Logging in as: <span className="font-bold">{DEMO_ROLES.find(d => d.email === selectedDemo)?.label}</span>
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-10 bg-[#008060] hover:bg-[#006e52] disabled:bg-[#008060]/60 text-white text-[13.5px] font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm mt-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ChevronRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Bottom note */}
          <p className="text-center text-slate-400 text-[11.5px] mt-6">
            Protected by enterprise security • v2.0.1
          </p>
        </div>
      </div>
    </div>
  );
}
