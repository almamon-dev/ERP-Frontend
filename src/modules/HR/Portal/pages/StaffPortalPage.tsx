import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import {
  Clock, Calendar as CalendarIcon, ArrowUp, ArrowDown,
  CheckCircle2, FileText, Search, Bell, Plus, X, Edit2, User,
  Building2, Briefcase, CreditCard, Umbrella, FileSpreadsheet, Eye, ChevronRight,
  Users, Target, ShieldCheck, AlertCircle, CheckCheck, XCircle
} from 'lucide-react';
import DatePicker from '@/components/ui/date-picker';
import { useAuth } from '@/contexts/AuthContext';
import { ROLES } from '@/constants/roles';

export default function StaffPortalPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const isSupervisor = user?.role === ROLES.SUPERVISOR || user?.role === ROLES.TEAM_LEADER;
  const isTeamLeader = user?.role === ROLES.TEAM_LEADER;
  const [selectedNoticeCategory, setSelectedNoticeCategory] = useState('All');
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [selectedNoticeModal, setSelectedNoticeModal] = useState<any | null>(null);

  const [applications, setApplications] = useState([
    { id: 1, type: 'Casual Leave [CL]', dates: '28 Jul, 2026', days: '2 Days', status: 'Pending', statusStyle: 'bg-amber-50 text-amber-600 border-amber-200', dot: 'bg-amber-400', dateApplied: '26 Jul, 2026' },
    { id: 2, type: 'Sick Leave [SL]', dates: '14 Jun, 2026', days: '1 Day', status: 'Approved', statusStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', dateApplied: '09 Jun, 2026' },
    { id: 3, type: 'Expense Claim', dates: '05 Jul, 2026', days: 'BDT 5,240', status: 'Approved', statusStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', dateApplied: '24 May, 2026' },
    { id: 4, type: 'IOU Request', dates: '01 Jul, 2026', days: 'BDT 10,000', status: 'Submitted', statusStyle: 'bg-blue-50 text-blue-600 border-blue-200', dot: 'bg-blue-400', dateApplied: '12 Apr, 2026' },
    { id: 5, type: 'Annual Leave [AL]', dates: '20 Jun, 2026', days: '3 Days', status: 'Rejected', statusStyle: 'bg-rose-50 text-rose-600 border-rose-200', dot: 'bg-rose-400', dateApplied: '18 Jun, 2026' },
  ]);

  const [policySearch, setPolicySearch] = useState('');
  const companyPolicies = [
    { id: 1, title: 'Code of Conduct & Ethics Policy', category: 'General', date: '15 Jan, 2026', size: '1.2 MB', code: 'POL-2026-01' },
    { id: 2, title: 'Attendance & Punctuality Policy', category: 'HR', date: '10 Jan, 2026', size: '850 KB', code: 'POL-2026-04' },
    { id: 3, title: 'Remote Work & Flexible Hours Policy', category: 'Operations', date: '05 Jan, 2026', size: '1.5 MB', code: 'POL-2026-09' },
    { id: 4, title: 'Information Security & Data Privacy', category: 'IT & Security', date: '20 Dec, 2025', size: '2.1 MB', code: 'POL-2025-18' },
  ];

  const filteredPolicies = companyPolicies.filter(p =>
    p.title.toLowerCase().includes(policySearch.toLowerCase()) ||
    p.category.toLowerCase().includes(policySearch.toLowerCase()) ||
    p.code.toLowerCase().includes(policySearch.toLowerCase())
  );

  const noticesList = [
    {
      id: 1,
      title: 'Advance Against Salary Feature Now Live',
      date: '15 Mar, 2026',
      category: 'Important',
      dot: 'bg-emerald-500',
      badge: 'bg-[#008060]/10 text-[#008060] border-emerald-200',
      content: 'Employees can now request advance against salary directly through the ESS portal under Financial Aid module with automatic manager approval workflow.'
    },
    {
      id: 2,
      title: 'Betopia Helpdesk & Ticket Portal Released',
      date: '28 Feb, 2026',
      category: 'Event',
      dot: 'bg-blue-400',
      badge: 'bg-blue-50 text-blue-700 border-blue-200',
      content: 'The centralized internal IT & Admin helpdesk portal is live. Submit technical requests, asset maintenance, or admin support tickets seamlessly.'
    },
    {
      id: 3,
      title: 'Annual Performance Review & Q1 Goals Submission',
      date: '10 Feb, 2026',
      category: 'Notice',
      dot: 'bg-slate-400',
      badge: 'bg-slate-100 text-slate-700 border-slate-200',
      content: 'All team members are requested to complete self-assessment and submit Q1 2026 Key Performance Indicators (KPIs) by the end of this week.'
    },
    {
      id: 4,
      title: 'Revised Health Insurance Policy Guidelines 2026',
      date: '01 Feb, 2026',
      category: 'Urgent',
      dot: 'bg-rose-400',
      badge: 'bg-rose-50 text-rose-700 border-rose-200',
      content: 'Updated OPD and hospitalization coverage limits for employee dependents have been published. Please review the updated policy document in the portal.'
    },

  ];

  const categories = ['All', 'Important', 'Notice', 'Urgent', 'Event'];

  const filteredNotices = selectedNoticeCategory === 'All'
    ? noticesList
    : noticesList.filter(n => n.category === selectedNoticeCategory);

  const [newApp, setNewApp] = useState({
    leaveType: 'Casual Leave [CL]',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const handleSubmitLeave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newApp.startDate || !newApp.endDate) return;

    setApplications([
      {
        id: Date.now(),
        type: newApp.leaveType,
        dates: `${newApp.startDate} - ${newApp.endDate}`,
        days: '1 Day',
        status: 'Pending',
        statusStyle: 'bg-amber-50 text-amber-700 border-amber-200',
        dot: 'bg-amber-400',
        dateApplied: '27 Jul, 2026',
      },
      ...applications,
    ]);
    setIsLeaveModalOpen(false);
    setNewApp({ leaveType: 'Casual Leave [CL]', startDate: '', endDate: '', reason: '' });
  };

  // Calendar Grid Data (July 2026)
  const calendarDays = [
    { date: null, status: '' },
    { date: null, status: '' },
    { date: null, status: '' },
    { date: '1', status: 'Present', type: 'present' },
    { date: '2', status: 'Present', type: 'present' },
    { date: '3', status: 'Absent', type: 'absent' },
    { date: '4', status: 'Late', type: 'late' },

    { date: '5', status: 'Offday', type: 'offday' },
    { date: '6', status: 'Present', type: 'present' },
    { date: '7', status: 'Present', type: 'present' },
    { date: '8', status: 'Late', type: 'late' },
    { date: '9', status: 'Present', type: 'present' },
    { date: '10', status: 'Absent', type: 'absent' },
    { date: '11', status: 'Late', type: 'late' },

    { date: '12', status: 'Offday', type: 'offday' },
    { date: '13', status: 'Late', type: 'late' },
    { date: '14', status: 'Late', type: 'late' },
    { date: '15', status: 'Present', type: 'present' },
    { date: '16', status: 'Present', type: 'present' },
    { date: '17', status: 'Absent', type: 'absent' },
    { date: '18', status: 'Late', type: 'late' },

    { date: '19', status: 'Offday', type: 'offday' },
    { date: '20', status: 'Late', type: 'late' },
    { date: '21', status: 'Late', type: 'late' },
    { date: '22', status: 'Present', type: 'present' },
    { date: '23', status: 'Late', type: 'late' },
    { date: '24', status: 'Absent', type: 'absent' },
    { date: '25', status: 'Late', type: 'late' },

    { date: '26', status: 'Offday', type: 'offday' },
    { date: '27', status: 'Present', type: 'present' },
    { date: '28', status: '' },
    { date: '29', status: '' },
    { date: '30', status: '' },
    { date: '31', status: '' },
  ];

  const dailyLogs = [
    { date: '27 Jul, 2026', hours: '10 hr 1 min', checkIn: '08:14 AM', checkOut: '06:15 PM', active: true },
    { date: '26 Jul, 2026', hours: '9 hr 46 min', checkIn: '08:22 AM', checkOut: '06:08 PM', active: false },
    { date: '25 Jul, 2026', hours: '8 hr 37 min', checkIn: '09:32 AM', checkOut: '06:09 PM', active: false },
    { date: '24 Jul, 2026', hours: '— — —', checkIn: 'Check In', checkOut: 'Check Out', active: false, empty: true },
  ];

  return (
    <div className="w-full max-w-full p-3.5 sm:p-4 bg-[#f8fafc] min-h-screen space-y-3.5 font-['Poppins',sans-serif] antialiased custom-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

      {/* TOP HEADER GREETING */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 px-1">
        <div>
          <div className="text-[12.5px] font-semibold text-slate-400">
            28 July, 2026, Tuesday.
          </div>
          <h1 className="text-[17px] sm:text-[19px] font-bold text-slate-800 tracking-tight mt-0.5">
            Hello {user?.name || 'Al Mamon'}, Welcome Back !
          </h1>
        </div>
      </div>

      {/* TOP METRIC CARDS ROW (EXACT LAYOUT & STYLING FROM SCREENSHOT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 w-full">

        {/* Card 1: Today Working Period */}
        <div className="lg:col-span-5 bg-white p-3 sm:p-3.5 px-4 rounded-[3px] border border-slate-200 shadow-xs flex items-center gap-3.5 hover:border-slate-300 transition-all">
          {/* EXACT CUSTOM GREEN CLOCK ICON FROM REFERENCE IMAGE - HIGHLIGHTED */}
          <div className="w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#16a34a] p-[3.5px] shrink-0 shadow-xs flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#ecfdf5] relative flex items-center justify-center">
              {/* 4 cardinal tick marks */}
              <span className="absolute top-[1.5px] text-[7.5px] font-extrabold text-[#16a34a] leading-none">+</span>
              <span className="absolute bottom-[1.5px] text-[7.5px] font-extrabold text-[#16a34a] leading-none">+</span>
              <span className="absolute left-[1.5px] text-[7.5px] font-extrabold text-[#16a34a] leading-none">+</span>
              <span className="absolute right-[1.5px] text-[7.5px] font-extrabold text-[#16a34a] leading-none">+</span>

              {/* Clock hands */}
              <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none">
                <path d="M12 12L8.5 8.5" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
                <path d="M12 12V17.5" stroke="#0f172a" strokeWidth="2.8" strokeLinecap="round" />
                <circle cx="12" cy="12" r="2.2" fill="#0f172a" />
                <circle cx="12" cy="12" r="0.9" fill="#ffffff" />
              </svg>
            </div>
          </div>

          <div className="flex-1 flex items-center divide-x divide-slate-300 text-left">
            <div className="pr-4">
              <span className="font-semibold text-[13px] text-[#334155] block whitespace-nowrap">Today Working Period</span>
              <span className="font-black text-[15.5px] text-[#008060] mt-0.5 block whitespace-nowrap">3 hr 15 min</span>
            </div>

            <div className="pl-4">
              <span className="font-semibold text-[13px] text-[#334155] block whitespace-nowrap">Morning 8:00AM to 5:00PM</span>
              <span className="font-extrabold text-[15px] text-[#0f172a] mt-0.5 block whitespace-nowrap">08:00 AM – 05:00 PM</span>
            </div>
          </div>
        </div>

        {/* Card 2: Length of Service */}
        <div className="lg:col-span-7 bg-white p-3 sm:p-3.5 px-4 rounded-[3px] border border-slate-200 shadow-xs flex items-center gap-3.5 hover:border-slate-300 transition-all">
          {/* EXACT CUSTOM ORANGE CALENDAR ICON FROM REFERENCE IMAGE - HIGHLIGHTED */}
          <div className="w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] shrink-0 flex items-center justify-center">
            <svg className="w-10 h-10 sm:w-10 sm:h-10" viewBox="0 0 36 36" fill="none">
              {/* Binder Rings */}
              <rect x="10" y="2.5" width="3.2" height="6.5" rx="1.5" fill="#334155" />
              <rect x="23" y="2.5" width="3.2" height="6.5" rx="1.5" fill="#334155" />

              {/* Vivid Orange Header */}
              <path d="M5 10C5 7.79086 6.79086 6 9 6H27C29.2091 6 31 7.79086 31 10V14H5V10Z" fill="#f97316" />

              {/* Light Gray Body */}
              <path d="M5 14H31V28C31 30.2091 29.2091 32 27 32H9C6.79086 32 5 30.2091 5 28V14Z" fill="#e2e8f0" />

              {/* Grid Squares */}
              {/* Row 1 */}
              <rect x="9" y="17" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
              <rect x="14.2" y="17" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
              <rect x="19.4" y="17" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
              <rect x="24.6" y="17" width="3.5" height="3.5" rx="0.6" fill="#64748b" />

              {/* Row 2 */}
              <rect x="9" y="22" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
              <rect x="14.2" y="22" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
              <rect x="19.4" y="22" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
              <rect x="24.6" y="22" width="3.5" height="3.5" rx="0.6" fill="#64748b" />

              {/* Row 3 */}
              <rect x="9" y="27" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
              <rect x="14.2" y="27" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
              <rect x="19.4" y="27" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
            </svg>
          </div>

          <div className="flex-1 flex items-center divide-x divide-slate-300 text-left overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="pr-4 shrink-0">
              <span className="font-semibold text-[13px] text-[#334155] block whitespace-nowrap">Length of Service</span>
              <span className="font-black text-[15.5px] text-[#ea580c] mt-0.5 block whitespace-nowrap">2 years 1 months</span>
            </div>

            <div className="px-4 shrink-0">
              <span className="font-semibold text-[13px] text-[#334155] block whitespace-nowrap">Joining Date</span>
              <span className="font-extrabold text-[15px] text-[#0f172a] mt-0.5 block whitespace-nowrap">20 Jun, 2024</span>
            </div>

            <div className="pl-4 shrink-0">
              <span className="font-semibold text-[13px] text-[#334155] block whitespace-nowrap">Confirmation Date</span>
              <span className="font-extrabold text-[15px] text-[#0f172a] mt-0.5 block whitespace-nowrap">16 Sep, 2024</span>
            </div>
          </div>
        </div>

      </div>

      {/* MAIN FULL-WIDTH DASHBOARD CONTENT AREA */}
      <div className="space-y-3.5 w-full">

        {/* MIDDLE AREA: ATTENDANCE & PUNCH LOGS (LEFT 8 COLS) + MANAGERS & LEAVE BALANCE (RIGHT 4 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">

          {/* ATTENDANCE CALENDAR & TIMELINE PUNCH LOGS */}
          <div className="lg:col-span-7 xl:col-span-8 bg-white p-3.5 sm:p-4 rounded-[3px] border border-slate-200 shadow-2xs space-y-4">

            {/* HEADER: CALENDAR TITLE & METRIC SUMMARY COUNTERS */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <h2 className="font-bold text-[15.5px] leading-[20px] text-slate-800">Attendance Calendar</h2>
                <div className="mt-1">
                  <DatePicker size="sm" variant="compact" format="monthYear" className="w-[130px]" placeholder="July 2026" />
                </div>
              </div>

              {/* METRIC COUNTERS WITH TALL VERTICAL COLOR BARS (EXACT REFERENCE DESIGN) */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 font-normal text-[13px] sm:text-[14px]">

                {/* 1. Payable Days */}
                <div className="flex items-stretch border-l-[3px] border-slate-400 pl-2 text-left py-0.5">
                  <div className="flex flex-col justify-between">
                    <span className="font-extrabold text-[15px] sm:text-[16px] text-slate-800 leading-none">28</span>
                    <span className="text-[#64748b] text-[11.5px] font-medium leading-none mt-1">Payable Days</span>
                  </div>
                </div>

                {/* 2. Present */}
                <div className="flex items-stretch border-l-[3px] border-emerald-500 pl-2 text-left py-0.5">
                  <div className="flex flex-col justify-between">
                    <span className="font-extrabold text-[15px] sm:text-[16px] text-slate-800 leading-none">10</span>
                    <span className="text-[#64748b] text-[11.5px] font-medium leading-none mt-1">Present</span>
                  </div>
                </div>

                {/* 3. Late */}
                <div className="flex items-stretch border-l-[3px] border-amber-500 pl-2 text-left py-0.5">
                  <div className="flex flex-col justify-between">
                    <span className="font-extrabold text-[15px] sm:text-[16px] text-slate-800 leading-none">10</span>
                    <span className="text-[#64748b] text-[11.5px] font-medium leading-none mt-1">Late</span>
                  </div>
                </div>

                {/* 4. Movement */}
                <div className="flex items-stretch border-l-[3px] border-purple-500 pl-2 text-left py-0.5">
                  <div className="flex flex-col justify-between">
                    <span className="font-extrabold text-[15px] sm:text-[16px] text-slate-800 leading-none">0</span>
                    <span className="text-[#64748b] text-[11.5px] font-medium leading-none mt-1">Movement</span>
                  </div>
                </div>

                {/* 5. Leave */}
                <div className="flex items-stretch border-l-[3px] border-indigo-500 pl-2 text-left py-0.5">
                  <div className="flex flex-col justify-between">
                    <span className="font-extrabold text-[15px] sm:text-[16px] text-slate-800 leading-none">0</span>
                    <span className="text-[#64748b] text-[11.5px] font-medium leading-none mt-1">Leave</span>
                  </div>
                </div>

                {/* 6. Absent */}
                <div className="flex items-stretch border-l-[3px] border-red-500 pl-2 text-left py-0.5">
                  <div className="flex flex-col justify-between">
                    <span className="font-extrabold text-[15px] sm:text-[16px] text-slate-800 leading-none">4</span>
                    <span className="text-[#64748b] text-[11.5px] font-medium leading-none mt-1">Absent</span>
                  </div>
                </div>

              </div>
            </div>

            {/* CALENDAR & PUNCH LOGS SPLIT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">

              {/* Calendar Grid */}
              <div className="lg:col-span-7 xl:col-span-8 border-b lg:border-b-0 lg:border-r border-slate-100 pb-3 lg:pb-0 pr-0 lg:pr-3">
                <div className="grid grid-cols-7 gap-1 text-center font-semibold text-[11px] sm:text-[11.5px] tracking-tight mb-2">
                  <div className="py-1 px-0.5 bg-[#f0f4f8] text-[#0369a1] rounded-[3px] text-center"><span className="hidden 2xl:inline">Sunday</span><span className="2xl:hidden">Sun</span></div>
                  <div className="py-1 px-0.5 bg-[#f0f4f8] text-[#0369a1] rounded-[3px] text-center"><span className="hidden 2xl:inline">Monday</span><span className="2xl:hidden">Mon</span></div>
                  <div className="py-1 px-0.5 bg-[#f0f4f8] text-[#0369a1] rounded-[3px] text-center"><span className="hidden 2xl:inline">Tuesday</span><span className="2xl:hidden">Tue</span></div>
                  <div className="py-1 px-0.5 bg-[#f0f4f8] text-[#0369a1] rounded-[3px] text-center"><span className="hidden 2xl:inline">Wednesday</span><span className="2xl:hidden">Wed</span></div>
                  <div className="py-1 px-0.5 bg-[#f0f4f8] text-[#0369a1] rounded-[3px] text-center"><span className="hidden 2xl:inline">Thursday</span><span className="2xl:hidden">Thu</span></div>
                  <div className="py-1 px-0.5 bg-[#f0f4f8] text-[#0369a1] rounded-[3px] text-center"><span className="hidden 2xl:inline">Friday</span><span className="2xl:hidden">Fri</span></div>
                  <div className="py-1 px-0.5 bg-[#f0f4f8] text-[#0369a1] rounded-[3px] text-center"><span className="hidden 2xl:inline">Saturday</span><span className="2xl:hidden">Sat</span></div>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center font-normal text-[13px] sm:text-[14px]">
                  {calendarDays.map((item, idx) => (
                    <div
                      key={idx}
                      className="min-h-[52px] sm:min-h-[56px] p-0.5 sm:p-1 flex flex-col items-center justify-start rounded"
                    >
                      {item.date && (
                        <>
                          <span className="font-semibold text-[#334155] text-[13px] sm:text-[14px]">{item.date}</span>

                          {item.type === 'present' && (
                            <span className="mt-1 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-medium bg-[#e6f4ea] text-[#137333] rounded-full whitespace-nowrap">
                              Present
                            </span>
                          )}

                          {item.type === 'late' && (
                            <span className="mt-1 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-medium bg-[#ffeedd] text-[#c05621] rounded-full whitespace-nowrap">
                              Late
                            </span>
                          )}

                          {item.type === 'absent' && (
                            <span className="mt-1 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-medium bg-[#fee2e2] text-[#b91c1c] rounded-full whitespace-nowrap">
                              Absent
                            </span>
                          )}

                          {item.type === 'offday' && (
                            <span className="mt-1 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-medium bg-[#f1f5f9] text-[#64748b] rounded-full whitespace-nowrap">
                              Offday
                            </span>
                          )}

                          {!item.type && (
                            <span className="mt-1 text-slate-200 font-bold text-[10px] leading-none">——</span>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Punch Logs */}
              <div className="lg:col-span-5 xl:col-span-4 space-y-2">
                {dailyLogs.map((log, index) => (
                  <div
                    key={index}
                    className="p-2.5 px-3 bg-white rounded-[3px] border border-slate-200/80 shadow-2xs space-y-1.5"
                  >
                    {/* Top Row: Date + Optional Duration or Dash */}
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-normal text-[#526074] whitespace-nowrap">{log.date}</span>
                      {log.hours && log.hours !== '—' ? (
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 font-medium text-[11px] sm:text-[11.5px] rounded-full whitespace-nowrap">
                          {log.hours}
                        </span>
                      ) : (
                        <span className="text-slate-300 text-[13px]">——</span>
                      )}
                    </div>

                    {/* Bottom Row: Check In & Check Out side-by-side with Arrows */}
                    <div className="flex items-center gap-5 sm:gap-7 pt-0.5">
                      {/* Check In */}
                      <div className="flex items-start gap-1.5">
                        <ArrowUp size={16} className="text-[#1e293b] shrink-0 mt-0.5 stroke-[2]" />
                        <div>
                          <div className="text-[#38bdf8] font-normal text-[12px] sm:text-[12.5px] leading-none whitespace-nowrap">Check In</div>
                          <div className="text-[#1e293b] font-bold text-[13px] leading-tight mt-1 whitespace-nowrap">{log.checkIn}</div>
                        </div>
                      </div>

                      {/* Check Out */}
                      <div className="flex items-start gap-1.5">
                        <ArrowDown size={16} className="text-[#1e293b] shrink-0 mt-0.5 stroke-[2]" />
                        <div>
                          <div className="text-[#fb923c] font-normal text-[12px] sm:text-[12.5px] leading-none whitespace-nowrap">Check Out</div>
                          <div className="text-[#1e293b] font-bold text-[13px] leading-tight mt-1 whitespace-nowrap">{log.checkOut}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* MY MANAGER & LEAVE BALANCE */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-4">

            {/* MY MANAGER CARD */}
            <div className="bg-white p-3.5 sm:p-4 rounded-[3px] border border-slate-200 shadow-2xs space-y-3.5">
              <h3 className="font-semibold text-[15px] sm:text-[16px] leading-[22px] text-[#3b5998]">My Manager</h3>

              <div className="space-y-3">

                {/* Manager 1 */}
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="Md. Ridoy"
                    className="w-9 h-9 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-[13.5px] sm:text-[14px] leading-[19px] text-[#2d3748] whitespace-nowrap">Md. Ridoy</h4>
                    <p className="font-normal text-[12.5px] sm:text-[13px] leading-[18px] text-[#718096] whitespace-nowrap">Supervisor</p>
                  </div>
                </div>

                {/* Manager 2 */}
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="Md. Ridoy"
                    className="w-9 h-9 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-[13.5px] sm:text-[14px] leading-[19px] text-[#2d3748] whitespace-nowrap">Md. Ridoy</h4>
                    <p className="font-normal text-[12.5px] sm:text-[13px] leading-[18px] text-[#718096] whitespace-nowrap">Dotted Supervisor</p>
                  </div>
                </div>

                {/* Manager 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#eef2f7] text-[#6c7a91] flex items-center justify-center shrink-0">
                    <User size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[13.5px] sm:text-[14px] leading-[19px] text-[#2d3748] whitespace-nowrap">Md. Kamruzzaman</h4>
                    <p className="font-normal text-[12.5px] sm:text-[13px] leading-[18px] text-[#718096] whitespace-nowrap">Line Manager</p>
                  </div>
                </div>

              </div>
            </div>

            {/* LEAVE BALANCE CARD */}
            <div className="bg-white p-3 sm:p-3.5 rounded-[3px] border border-slate-200 shadow-2xs space-y-2.5">
              <div className="flex items-center justify-between gap-2 pb-0.5">
                <h3 className="font-semibold text-[15px] leading-[20px] text-[#475467] whitespace-nowrap">Leave Balance</h3>
                <button
                  onClick={() => navigate('/employee-portal/leave-movement')}
                  className="font-normal text-[12px] leading-[18px] text-[#667085] hover:text-[#344054] underline cursor-pointer whitespace-nowrap"
                >
                  Show All(Active/Inactive)
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-normal text-[12.5px] sm:text-[13px] leading-[18px] border-collapse">
                  <thead>
                    <tr className="text-[#667085] font-normal border-b border-slate-100">
                      <th className="pb-1.5 font-normal whitespace-nowrap text-left">Type</th>
                      <th className="pb-1.5 font-normal text-right whitespace-nowrap px-2">Taken</th>
                      <th className="pb-1.5 font-normal text-right whitespace-nowrap px-2">Balance</th>
                      <th className="pb-1.5 font-normal text-right whitespace-nowrap pl-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-1.5 text-[#344054] font-normal whitespace-nowrap">Casual Leave [CL]</td>
                      <td className="py-1.5 text-right text-[#64748b] font-normal px-2">1</td>
                      <td className="py-1.5 text-right text-[#344054] font-normal px-2">9</td>
                      <td className="py-1.5 text-right font-normal text-[#344054] whitespace-nowrap pl-2">Active</td>
                    </tr>

                    <tr>
                      <td className="py-1.5 text-[#344054] font-normal whitespace-nowrap">Sick Leave [SL]</td>
                      <td className="py-1.5 text-right text-[#64748b] font-normal px-2">1</td>
                      <td className="py-1.5 text-right text-[#344054] font-normal px-2">13</td>
                      <td className="py-1.5 text-right font-normal text-[#344054] whitespace-nowrap pl-2">Active</td>
                    </tr>

                    <tr>
                      <td className="py-1.5 text-[#344054] font-normal whitespace-nowrap">Earn Leave [EL]</td>
                      <td className="py-1.5 text-right text-[#64748b] font-normal px-2">0</td>
                      <td className="py-1.5 text-right text-[#344054] font-normal px-2">29</td>
                      <td className="py-1.5 text-right font-normal text-[#344054] whitespace-nowrap pl-2">Active</td>
                    </tr>

                    <tr>
                      <td className="py-1.5 text-[#344054] font-normal whitespace-nowrap">Leave Without Pay [LWP]</td>
                      <td className="py-1.5 text-right text-[#64748b] font-normal px-2">0</td>
                      <td className="py-1.5 text-right text-[#344054] font-normal px-2">365</td>
                      <td className="py-1.5 text-right font-normal text-[#344054] whitespace-nowrap pl-2">Active</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* LOWER SECTION: COMPANY POLICIES, NOTICE BOARD & MY APPLICATIONS (3-COLUMN ROW) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* Column 1: Company Policies */}
        <div className="lg:col-span-4 bg-white p-3.5 sm:p-4 rounded-[3px] border border-slate-200 shadow-xs hover:border-slate-300 transition-all space-y-3 flex flex-col">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <h3 className="font-semibold text-[15px] leading-[22px] text-[#1e3a5f] tracking-tight">Company Policies & Guidelines</h3>
            <span className="font-semibold text-[12px] leading-[20px] text-white bg-slate-600 px-2 py-0.5 rounded-full">{filteredPolicies.length} Docs</span>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search policies..."
              value={policySearch}
              onChange={(e) => setPolicySearch(e.target.value)}
              className="w-full h-8 pl-8 pr-3 font-medium text-[13px] leading-[20px] bg-slate-50 border border-slate-200 rounded-[3px] outline-none focus:bg-white focus:border-[#008060] focus:ring-1 focus:ring-[#008060]/20"
            />
            <Search size={14} className="absolute left-2.5 top-2 text-[#667085]" />
          </div>

          <div className="flex-1 max-h-[260px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filteredPolicies.map((policy, index) => (
              <div key={policy.id} className="flex items-start gap-2">
                {/* Dot + Line */}
                <div className="relative flex flex-col items-center shrink-0 pt-[8px]">
                  <div className="w-2 h-2 rounded-full shrink-0 bg-slate-400" />
                  {index < filteredPolicies.length - 1 && (
                    <div className="w-px flex-1 bg-slate-200 mt-1" style={{ minHeight: '28px' }} />
                  )}
                </div>

                {/* Content */}
                <div className="flex items-start gap-2 flex-1 min-w-0 py-1.5">
                  {/* Code */}
                  <div className="w-[72px] shrink-0">
                    <span className="text-[11px] font-normal text-[#667085] block leading-tight whitespace-nowrap">{policy.code}</span>
                  </div>

                  {/* Title + Category */}
                  <div className="flex-1 min-w-0">
                    <span className="font-normal text-[13px] text-[#344054] block truncate leading-tight">{policy.title}</span>
                    <span className="text-[10.5px] font-normal text-[#667085] block leading-tight mt-0.5">{policy.category}</span>
                  </div>

                  {/* View button */}
                  <button className="font-medium text-[12px] text-[#008060] hover:underline cursor-pointer shrink-0 pt-0.5">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Corporate Notice Board */}
        <div className="lg:col-span-4 bg-white p-3.5 sm:p-4 rounded-[3px] border border-slate-200 shadow-xs hover:border-slate-300 transition-all space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <h3 className="font-semibold text-[15px] leading-[22px] text-[#1e3a5f] tracking-tight">Corporate Notice Board</h3>
              <span className="font-semibold text-[12px] leading-[20px] text-white bg-slate-600 px-2 py-0.5 rounded-full">{noticesList.length} Items</span>
            </div>

            <div className="flex items-center gap-1 text-[10px] overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedNoticeCategory(cat)}
                  className={`px-2.5 py-0.5 rounded-[3px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${selectedNoticeCategory === cat
                    ? 'bg-[#1e293b] text-white shadow-xs'
                    : 'bg-slate-100 text-[#475569] hover:bg-slate-200 hover:text-[#1e293b]'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 max-h-[260px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filteredNotices.slice(0, 4).map((notice, index) => (
              <div
                key={notice.id}
                onClick={() => setSelectedNoticeModal(notice)}
                className="flex items-start gap-2 hover:bg-slate-50/70 transition-colors rounded-[2px] cursor-pointer"
              >
                {/* Dot + Line column */}
                <div className="relative flex flex-col items-center shrink-0 pt-[8px]">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${notice.dot}`} />
                  {index < filteredNotices.length - 1 && (
                    <div className="w-px flex-1 bg-slate-200 mt-1" style={{ minHeight: '28px' }} />
                  )}
                </div>

                {/* Content row — same structure as My Applications */}
                <div className="flex items-start gap-2 flex-1 min-w-0 py-1.5">
                  {/* Date */}
                  <div className="w-[72px] shrink-0">
                    <span className="text-[11px] font-normal text-[#667085] block leading-tight whitespace-nowrap">{notice.date}</span>
                  </div>

                  {/* Title + Category sub-line */}
                  <div className="flex-1 min-w-0">
                    <span className="font-normal text-[13px] text-[#344054] block truncate leading-tight">{notice.title}</span>
                    <span className="text-[10.5px] font-normal text-[#667085] block leading-tight mt-0.5">{notice.category}</span>
                  </div>

                  {/* Category Badge */}
                  <div className="shrink-0">
                    <span className={`inline-block font-medium px-1.5 py-0.5 rounded-[3px] border text-[11px] whitespace-nowrap ${notice.badge}`}>{notice.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: My Applications */}
        <div className="lg:col-span-4 bg-white p-3.5 sm:p-4 rounded-[3px] border border-slate-200 shadow-xs hover:border-slate-300 transition-all space-y-3 flex flex-col">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <h3 className="font-semibold text-[15px] leading-[22px] text-[#1e3a5f] tracking-tight">My Applications</h3>
            <button
              onClick={() => setIsLeaveModalOpen(true)}
              className="font-semibold text-[11.5px] text-[#008060] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-[3px] cursor-pointer transition-colors"
            >
              + Apply
            </button>
          </div>

          <div className="flex-1 max-h-[260px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {applications.map((app, index) => (
              <div
                key={app.id}
                className="flex items-start gap-2 hover:bg-slate-50/70 transition-colors rounded-[2px]"
              >
                {/* Dot + Line column */}
                <div className="relative flex flex-col items-center shrink-0 pt-[6px]">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${app.dot}`} />
                  {index < applications.length - 1 && (
                    <div className="w-px flex-1 bg-slate-200 mt-1" style={{ minHeight: '28px' }} />
                  )}
                </div>

                {/* Content row */}
                <div className="flex items-start gap-2 flex-1 min-w-0 py-1.5">
                  {/* Date */}
                  <div className="w-[72px] shrink-0">
                    <span className="text-[11px] font-normal text-[#667085] block leading-tight whitespace-nowrap">{app.dates}</span>
                  </div>

                  {/* Type & Amount */}
                  <div className="flex-1 min-w-0">
                    <span className="font-normal text-[13px] text-[#344054] block truncate leading-tight">{app.type}</span>
                    <span className="text-[10.5px] font-normal text-[#667085] block leading-tight mt-0.5">{app.days}</span>
                  </div>

                  {/* Status Badge */}
                  <div className="shrink-0">
                    <span className={`inline-block font-medium px-2 py-0.5 rounded-[3px] border text-[11px] whitespace-nowrap ${app.statusStyle}`}>
                      {app.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ===== SUPERVISOR / TEAM LEADER SECTION ===== */}
      {isSupervisor && (
        <div className="space-y-4">

          {/* Section Header */}
          <div className="flex items-center gap-2.5 pt-1">
            <div className="w-1 h-5 rounded-full bg-[#008060]" />
            <h2 className="font-bold text-[15px] text-slate-900">
              {isTeamLeader ? 'Team Leader Panel' : 'Supervisor Panel'}
            </h2>
            <span className="px-2 py-0.5 text-[10.5px] font-bold bg-[#008060]/10 text-[#008060] rounded border border-[#008060]/20">
              {isTeamLeader ? 'TEAM LEADER' : 'SUPERVISOR'}
            </span>
          </div>

          {/* PENDING APPROVALS TABLE */}
          <div className="bg-white rounded-[3px] border border-slate-200 shadow-2xs overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users size={15} className="text-[#008060]" />
                <h3 className="font-semibold text-[14px] text-slate-800">Team Pending Approvals</h3>
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold flex items-center justify-center">3</span>
              </div>
              <button
                onClick={() => navigate('/employee-portal/supervisor')}
                className="text-[12px] font-semibold text-[#008060] hover:underline flex items-center gap-1 cursor-pointer"
              >
                View All <ChevronRight size={13} />
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {[
                { id: 1, name: 'Md. Tanvir Hossain', empId: '15208', type: 'Casual Leave [CL]', dates: '29 Jul - 30 Jul, 2026', days: '2 Days', applied: '27 Jul, 2026', status: 'Pending' },
                { id: 2, name: 'Farhana Yasmin', empId: '15214', type: 'Movement (Official)', dates: '28 Jul, 2026', days: '1 Day', applied: '26 Jul, 2026', status: 'Pending' },
                { id: 3, name: 'Kazi Rakib', empId: '15230', type: 'Sick Leave [SL]', dates: '30 Jul, 2026', days: '1 Day', applied: '27 Jul, 2026', status: 'Pending' },
              ].map((req) => (
                <div key={req.id} className="flex items-center justify-between gap-3 px-4 py-2.5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-[11px] shrink-0">
                      {req.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[13px] font-semibold text-slate-800 truncate">{req.name}</span>
                        <span className="text-[10.5px] text-slate-400 font-mono shrink-0">#{req.empId}</span>
                      </div>
                      <span className="text-[11.5px] text-slate-500">{req.type} • {req.dates} ({req.days})</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button className="h-7 px-2.5 text-[11px] font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded flex items-center gap-1 cursor-pointer transition-colors">
                      <CheckCheck size={12} /> Approve
                    </button>
                    <button className="h-7 px-2.5 text-[11px] font-bold bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 rounded flex items-center gap-1 cursor-pointer transition-colors">
                      <XCircle size={12} /> Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TEAM LEADER ONLY: KPI OVERVIEW */}
          {isTeamLeader && (
            <div className="bg-white rounded-[3px] border border-slate-200 shadow-2xs overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target size={15} className="text-[#008060]" />
                  <h3 className="font-semibold text-[14px] text-slate-800">Team KPI Overview</h3>
                </div>
                <button
                  onClick={() => navigate('/employee-portal/kpi-bonus')}
                  className="text-[12px] font-semibold text-[#008060] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  View Details <ChevronRight size={13} />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-y divide-slate-100">
                {[
                  { label: 'Team Members', value: '5', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { label: 'On Target', value: '3', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                  { label: 'Below Target', value: '1', icon: AlertCircle, color: 'text-amber-600', bg: 'bg-amber-50' },
                  { label: 'Avg Achievement', value: '82%', icon: Target, color: 'text-[#008060]', bg: 'bg-emerald-50' },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="p-3.5 flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-[3px] ${stat.bg} flex items-center justify-center shrink-0`}>
                        <Icon size={15} className={stat.color} />
                      </div>
                      <div>
                        <div className="text-[18px] font-extrabold text-slate-900 leading-none">{stat.value}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Team member rows */}
              <div className="border-t border-slate-100">
                {[
                  { name: 'Md. Tanvir Hossain', role: 'Frontend Dev', target: '$ 3,300', achieved: '$ 2,900', pct: 88, status: 'On Track' },
                  { name: 'Farhana Yasmin', role: 'UI/UX Designer', target: '$ 2,500', achieved: '$ 1,800', pct: 72, status: 'Below' },
                  { name: 'Kazi Rakib', role: 'QA Engineer', target: '$ 2,000', achieved: '$ 2,100', pct: 105, status: 'Exceeded' },
                ].map((m, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-2.5 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors">
                    <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-[11px] shrink-0">
                      {m.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[13px] font-semibold text-slate-800">{m.name}</span>
                        <span className={`text-[10.5px] font-bold px-1.5 py-0.5 rounded ${m.status === 'Exceeded' ? 'bg-blue-50 text-blue-700' :
                          m.status === 'On Track' ? 'bg-emerald-50 text-emerald-700' :
                            'bg-amber-50 text-amber-700'
                          }`}>{m.status}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${m.pct >= 100 ? 'bg-blue-500' : m.pct >= 80 ? 'bg-emerald-500' : 'bg-amber-500'
                              }`}
                            style={{ width: `${Math.min(m.pct, 100)}%` }}
                          />
                        </div>
                        <span className="text-[11px] font-bold text-slate-600 shrink-0">{m.pct}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* LEAVE MODAL */}
      {isLeaveModalOpen && createPortal(
        <div className="fixed inset-0 z-[9999] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 font-['Poppins',sans-serif]">
          <div className="bg-white rounded-[3px] border border-slate-200 shadow-2xl w-full max-w-[420px] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="px-4 py-2.5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <h3 className="font-semibold text-[14.5px] leading-[18px] text-[#1e293b]">Apply for Leave</h3>
              <button
                onClick={() => setIsLeaveModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer p-1 rounded hover:bg-slate-200/50 transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            <form onSubmit={handleSubmitLeave} className="p-4 space-y-2.5 text-left">
              <div>
                <label className="block font-medium text-[12px] text-[#475467] mb-1">Leave Type</label>
                <select
                  value={newApp.leaveType}
                  onChange={(e) => setNewApp({ ...newApp, leaveType: e.target.value })}
                  className="w-full h-8 bg-slate-50/70 border border-slate-200 rounded px-2.5 outline-none focus:bg-white focus:border-[#008060] font-normal text-[#344054] text-[12.5px]"
                >
                  <option value="Casual Leave [CL]">Casual Leave [CL] (Bal: 9)</option>
                  <option value="Sick Leave [SL]">Sick Leave [SL] (Bal: 13)</option>
                  <option value="Earn Leave [EL]">Earn Leave [EL] (Bal: 29)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block font-medium text-[12px] text-[#475467] mb-1">Start Date</label>
                  <input
                    type="date"
                    required
                    value={newApp.startDate}
                    onChange={(e) => setNewApp({ ...newApp, startDate: e.target.value })}
                    className="w-full h-8 bg-slate-50/70 border border-slate-200 rounded px-2.5 outline-none focus:bg-white focus:border-[#008060] font-normal text-[#344054] text-[12.5px]"
                  />
                </div>
                <div>
                  <label className="block font-medium text-[12px] text-[#475467] mb-1">End Date</label>
                  <input
                    type="date"
                    required
                    value={newApp.endDate}
                    onChange={(e) => setNewApp({ ...newApp, endDate: e.target.value })}
                    className="w-full h-8 bg-slate-50/70 border border-slate-200 rounded px-2.5 outline-none focus:bg-white focus:border-[#008060] font-normal text-[#344054] text-[12.5px]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-[12px] text-[#475467] mb-1">Reason / Purpose</label>
                <textarea
                  rows={2}
                  placeholder="Provide brief explanation for leave request..."
                  value={newApp.reason}
                  onChange={(e) => setNewApp({ ...newApp, reason: e.target.value })}
                  className="w-full p-2 bg-slate-50/70 border border-slate-200 rounded outline-none focus:bg-white focus:border-[#008060] font-normal text-[#344054] text-[12.5px] resize-none"
                ></textarea>
              </div>

              <div className="pt-2.5 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsLeaveModalOpen(false)}
                  className="px-3 py-1 font-medium text-[12px] text-[#344054] bg-slate-100 hover:bg-slate-200 rounded transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3.5 py-1 font-medium text-[12px] text-white bg-[#008060] hover:bg-[#006e52] rounded transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <CheckCircle2 size={13} />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

      {/* NOTICE MODAL */}
      {selectedNoticeModal && createPortal(
        <div className="fixed inset-0 z-[9999] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 font-['Poppins',sans-serif]">
          <div className="bg-white rounded-[3px] border border-slate-200 shadow-2xl w-full max-w-[420px] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="px-4 py-2.5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-200/80 text-slate-700">
                {selectedNoticeModal.category} Notice
              </span>
              <button
                onClick={() => setSelectedNoticeModal(null)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer p-1 rounded hover:bg-slate-200/50 transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            <div className="p-4 space-y-2 text-left">
              <h3 className="font-semibold text-[14.5px] leading-[19px] text-[#1e293b]">{selectedNoticeModal.title}</h3>
              <div className="text-[11.5px] text-[#667085]">{selectedNoticeModal.date}</div>
              <p className="font-normal text-[12.5px] leading-[19px] text-[#344054] bg-slate-50 p-2.5 rounded border border-slate-200/60">
                {selectedNoticeModal.content}
              </p>
            </div>

            <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedNoticeModal(null)}
                className="px-3.5 py-1 font-medium text-[12px] text-white bg-slate-800 hover:bg-slate-900 rounded cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
}
