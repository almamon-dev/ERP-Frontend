import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Clock, Calendar as CalendarIcon, ArrowUpRight, ArrowDownRight,
  CheckCircle2, FileText, Search, Bell, MapPin, Plus, X, FolderOpen, Edit2, User,
  Building2, Briefcase, Mail, Phone, ShieldCheck, Award, ChevronRight
} from 'lucide-react';
import DatePicker from '@/components/ui/date-picker';

export default function EmployeeDashboardPage() {
  const navigate = useNavigate();
  const [selectedNoticeYear, setSelectedNoticeYear] = useState('2026');
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [applications, setApplications] = useState([
    { id: 1, type: 'Casual Leave [CL]', dates: '28 Jul - 29 Jul, 2026', days: '2 Days', status: 'Pending', statusColor: 'bg-amber-50 text-amber-700 border-amber-200', dateApplied: '26 Jul, 2026' },
    { id: 2, type: 'Sick Leave [SL]', dates: '10 Jun, 2026', days: '1 Day', status: 'Approved', statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200', dateApplied: '09 Jun, 2026' },
  ]);

  const [policySearch, setPolicySearch] = useState('');
  const companyPolicies = [
    { id: 1, title: 'Code of Conduct & Ethics Policy', category: 'General', date: '15 Jan, 2026', size: '1.2 MB' },
    { id: 2, title: 'Attendance & Punctuality Policy', category: 'HR', date: '10 Jan, 2026', size: '850 KB' },
    { id: 3, title: 'Remote Work & Flexible Hours Policy', category: 'Operations', date: '05 Jan, 2026', size: '1.5 MB' },
    { id: 4, title: 'Information Security & Data Privacy', category: 'IT & Security', date: '20 Dec, 2025', size: '2.1 MB' },
  ];

  const filteredPolicies = companyPolicies.filter(p => 
    p.title.toLowerCase().includes(policySearch.toLowerCase()) ||
    p.category.toLowerCase().includes(policySearch.toLowerCase())
  );

  const noticesList = [
    { id: 1, title: 'Advance Against Salary Feature Now Live', date: '15 Mar, 2026', category: 'Important', year: '2026', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { id: 2, title: 'Betopia Helpdesk Module Released', date: '28 Feb, 2026', category: 'Event', year: '2026', badge: 'bg-blue-50 text-blue-700 border-blue-200' },
    { id: 3, title: 'A Message from the Group CEO', date: '10 Feb, 2026', category: 'Notice', year: '2026', badge: 'bg-[#008060] text-white border-transparent' },
    { id: 4, title: 'Q1 KPI & Goals Submission Deadline', date: '01 Feb, 2026', category: 'Urgent', year: '2026', badge: 'bg-rose-50 text-rose-700 border-rose-200' },
  ];

  const filteredNotices = noticesList.filter(n => n.year === selectedNoticeYear);

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
        statusColor: 'bg-amber-50 text-amber-700 border-amber-200',
        dateApplied: '27 Jul, 2026',
      },
      ...applications,
    ]);
    setIsLeaveModalOpen(false);
    setNewApp({ leaveType: 'Casual Leave [CL]', startDate: '', endDate: '', reason: '' });
  };

  const calendarDays = [
    { day: '', date: null, status: 'empty' },
    { day: '', date: null, status: 'empty' },
    { day: '', date: null, status: 'empty' },
    { day: 1, date: '1', status: 'Present', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { day: 2, date: '2', status: 'Present', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { day: 3, date: '3', status: 'Absent', color: 'bg-rose-50 text-rose-700 border-rose-200' },
    { day: 4, date: '4', status: 'Late', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    
    { day: 5, date: '5', status: 'Offday', color: 'bg-slate-100 text-slate-500 border-slate-200' },
    { day: 6, date: '6', status: 'Present', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { day: 7, date: '7', status: 'Present', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { day: 8, date: '8', status: 'Late', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    { day: 9, date: '9', status: 'Present', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { day: 10, date: '10', status: 'Absent', color: 'bg-rose-50 text-rose-700 border-rose-200' },
    { day: 11, date: '11', status: 'Late', color: 'bg-amber-50 text-amber-700 border-amber-200' },

    { day: 12, date: '12', status: 'Offday', color: 'bg-slate-100 text-slate-500 border-slate-200' },
    { day: 13, date: '13', status: 'Late', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    { day: 14, date: '14', status: 'Late', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    { day: 15, date: '15', status: 'Present', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { day: 16, date: '16', status: 'Present', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { day: 17, date: '17', status: 'Absent', color: 'bg-rose-50 text-rose-700 border-rose-200' },
    { day: 18, date: '18', status: 'Late', color: 'bg-amber-50 text-amber-700 border-amber-200' },

    { day: 19, date: '19', status: 'Offday', color: 'bg-slate-100 text-slate-500 border-slate-200' },
    { day: 20, date: '20', status: 'Late', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    { day: 21, date: '21', status: 'Late', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    { day: 22, date: '22', status: 'Present', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { day: 23, date: '23', status: 'Late', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    { day: 24, date: '24', status: 'Absent', color: 'bg-rose-50 text-rose-700 border-rose-200' },
    { day: 25, date: '25', status: 'Late', color: 'bg-amber-50 text-amber-700 border-amber-200' },

    { day: 26, date: '26', status: 'Offday', color: 'bg-slate-100 text-slate-500 border-slate-200' },
    { day: 27, date: '27', status: 'Present', color: 'bg-[#008060] text-white font-extrabold shadow-2xs' },
    { day: 28, date: '28', status: '', color: '' },
    { day: 29, date: '29', status: '', color: '' },
    { day: 30, date: '30', status: '', color: '' },
    { day: 31, date: '31', status: '', color: '' },
  ];

  const dailyLogs = [
    { date: '26 Jul, 2026', hours: '9 hr 46 min', checkIn: '08:22 AM', checkOut: '06:08 PM', isLate: false, border: 'border-l-emerald-500' },
    { date: '25 Jul, 2026', hours: '8 hr 37 min', checkIn: '09:32 AM', checkOut: '06:09 PM', isLate: true, border: 'border-l-amber-500' },
    { date: '24 Jul, 2026', hours: '—', checkIn: '', checkOut: '', isAbsent: true, border: 'border-l-rose-400' },
    { date: '23 Jul, 2026', hours: '7 hr 33 min', checkIn: '10:30 AM', checkOut: '06:03 PM', isLate: true, border: 'border-l-amber-500' },
    { date: '22 Jul, 2026', hours: '9 hr 12 min', checkIn: '08:15 AM', checkOut: '05:27 PM', isLate: false, border: 'border-l-emerald-500' },
  ];

  return (
    <div className="max-w-[1520px] mx-auto p-4 bg-[#f8fafc] min-h-screen text-slate-800 space-y-4 font-sans pb-16 antialiased">
      
      {/* FLEX CONTAINER: LEFT SIDEBAR COMPACT (280px) + MAIN AREA EXPANDED */}
      <div className="flex flex-col lg:flex-row gap-4 items-start w-full">
        
        {/* ================= LEFT SIDEBAR: PROFILE CARD (w-full lg:w-[280px] shrink-0) ================= */}
        <div className="w-full lg:w-[280px] shrink-0 bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs space-y-4">
          
          {/* PROFILE AVATAR & USER IDENTITY */}
          <div className="flex flex-col items-center text-center pb-3.5 border-b border-slate-100 relative">
            <div className="relative w-20 h-20 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-slate-500 font-bold mb-2 shadow-2xs">
              <User size={40} className="text-slate-400 stroke-[1.5]" />
              <button className="absolute bottom-0 right-0 w-6.5 h-6.5 rounded-full bg-[#008060] text-white flex items-center justify-center shadow-2xs cursor-pointer hover:bg-[#006e52]">
                <Edit2 size={12} />
              </button>
            </div>
            <h2 className="text-[18px] font-bold text-slate-900 tracking-tight">Al Mamon</h2>
            <span className="text-[13px] font-bold text-[#008060] mt-0.5">Jr. Laravel Developer</span>
            <span className="text-[12px] font-semibold text-slate-400">Operations</span>

            {/* SEE PROFILE BUTTON */}
            <button 
              onClick={() => navigate('/employee-portal/about-me')}
              className="mt-3 w-full text-[12.5px] font-extrabold text-[#008060] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <span>See Profile</span>
              <ChevronRight size={15} className="stroke-[2.5]" />
            </button>
          </div>

          {/* CORPORATE EMPLOYEE METRICS WITH TITLE CASE */}
          <div className="space-y-2 text-[13px]">
            
            <div className="p-2.5 bg-slate-50/80 rounded-lg border border-slate-200/60 flex items-center justify-between">
              <span className="font-bold text-slate-500 text-[12px]">Employee ID</span>
              <span className="font-extrabold text-slate-900 text-[13.5px]">15202</span>
            </div>

            <div className="p-2.5 bg-slate-50/80 rounded-lg border border-slate-200/60 flex items-center justify-between">
              <span className="font-bold text-slate-500 text-[12px]">Company</span>
              <span className="font-extrabold text-slate-900 text-[13px] truncate max-w-[130px]" title="Softvence Agency Alpha">Softvence Agency</span>
            </div>

            <div className="p-2.5 bg-slate-50/80 rounded-lg border border-slate-200/60 flex items-center justify-between">
              <span className="font-bold text-slate-500 text-[12px]">Service Length</span>
              <span className="font-extrabold text-slate-900 text-[13px]">2y 1m 7d</span>
            </div>

            <div className="p-2.5 bg-slate-50/80 rounded-lg border border-slate-200/60 flex items-center justify-between">
              <span className="font-bold text-slate-500 text-[12px]">Mobile</span>
              <span className="font-bold text-slate-800 text-[12.5px]">+8801768085606</span>
            </div>

            <div className="p-2.5 bg-slate-50/80 rounded-lg border border-slate-200/60 flex items-center justify-between">
              <span className="font-bold text-slate-500 text-[12px]">Email</span>
              <span className="font-bold text-slate-800 text-[12px] truncate max-w-[120px]" title="al.mamun@softvence.com">al.mamun@...</span>
            </div>

            <div className="p-2.5 bg-slate-50/80 rounded-lg border border-slate-200/60 flex items-center justify-between">
              <span className="font-bold text-slate-500 text-[12px]">Advance Salary</span>
              <span className="font-extrabold text-[#008060] text-[13px]">All Ledger</span>
            </div>

          </div>

          {/* MY MANAGERS LIST */}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <span className="text-[11px] font-bold text-slate-400 block">Reporting Managers</span>
            
            <div className="space-y-2 text-[12.5px]">
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-[11px] shrink-0 border border-emerald-200">
                    MR
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-slate-900 leading-snug">Md. Ridoy</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Supervisor</p>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500" title="Active Supervisor" />
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-700 font-bold flex items-center justify-center text-[11px] shrink-0 border border-blue-200">
                    MK
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-slate-900 leading-snug">Md. Kamruzzaman</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Line Manager</p>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-blue-500" title="Line Manager" />
              </div>
            </div>
          </div>

        </div>

        {/* ================= RIGHT MAIN AREA: EXPANDED WIDE CONTENT (flex-1 min-w-0) ================= */}
        <div className="flex-1 min-w-0 space-y-4 w-full">
          
          {/* TOP BANNER ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Welcome & Working Period Info (7 Cols) */}
            <div className="lg:col-span-7 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div>
                <h1 className="text-[19px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  Hello, <span className="text-[#008060] font-extrabold underline underline-offset-2">Al Mamon</span>! Welcome Back
                </h1>
                <p className="text-[13px] font-medium text-slate-500 mt-1">27 July, 2026 • Monday (Regular Roster Working Day)</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#008060] flex items-center justify-center border border-emerald-200/80 shrink-0 shadow-2xs">
                    <Clock size={20} className="stroke-[2.2]" />
                  </div>
                  <div>
                    <p className="text-[11.5px] font-bold text-slate-400">Today Working Hours</p>
                    <h3 className="text-[16px] font-extrabold text-slate-900">9 hr 46 min</h3>
                  </div>
                </div>

                <div className="pl-4 border-l border-slate-200">
                  <p className="text-[11.5px] font-bold text-slate-400">Shift Schedule</p>
                  <h3 className="text-[14.5px] font-bold text-slate-800 mt-0.5">08:00 AM – 05:00 PM</h3>
                </div>
              </div>
            </div>

            {/* Company & Employment Details (5 Cols) */}
            <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div>
                <h2 className="text-[15px] font-bold text-slate-900 flex items-center gap-1.5">
                  Softvence Agency Alpha <span className="text-slate-400 font-normal">[BD]</span>
                </h2>
                <p className="text-[12px] text-slate-500 mt-1 flex items-center gap-1">
                  <MapPin size={13} className="text-slate-400 shrink-0" />
                  14 Daisy Garden, Banasree Main Rd, Dhaka 1219
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-left">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <CalendarIcon size={15} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-400">Service</p>
                    <p className="text-[12.5px] font-bold text-slate-900 leading-tight">2y 1m 7d</p>
                  </div>
                </div>

                <div className="border-l border-slate-100 pl-2.5">
                  <p className="text-[11px] font-semibold text-slate-400">Joining</p>
                  <p className="text-[12.5px] font-bold text-slate-900 leading-tight mt-0.5">20 Jun 2024</p>
                </div>

                <div className="border-l border-slate-100 pl-2.5">
                  <p className="text-[11px] font-semibold text-slate-400">Confirmed</p>
                  <p className="text-[12.5px] font-bold text-slate-900 leading-tight mt-0.5">16 Sep 2024</p>
                </div>
              </div>
            </div>

          </div>

          {/* ATTENDANCE CALENDAR & DAILY TIMELINE LOG CARD */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs overflow-visible">
            {/* Header & Stats Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <h3 className="text-[15.5px] font-bold text-slate-900 leading-none shrink-0">Attendance Calendar</h3>
                <DatePicker size="sm" variant="compact" format="monthYear" className="w-[140px]" placeholder="July 2026" />
              </div>

              {/* Attendance Counts Pill List */}
              <div className="flex flex-wrap items-center gap-3 text-[12px] font-bold">
                <div className="flex items-center gap-1.5 pl-2 border-l-2 border-slate-400">
                  <span className="text-slate-900 font-extrabold text-[13.5px]">26</span>
                  <span className="text-slate-500 font-semibold text-[11.5px]">Payable</span>
                </div>
                <div className="flex items-center gap-1.5 pl-2 border-l-2 border-emerald-500">
                  <span className="text-emerald-700 font-extrabold text-[13.5px]">8</span>
                  <span className="text-slate-500 font-semibold text-[11.5px]">Present</span>
                </div>
                <div className="flex items-center gap-1.5 pl-2 border-l-2 border-amber-500">
                  <span className="text-amber-700 font-extrabold text-[13.5px]">10</span>
                  <span className="text-slate-500 font-semibold text-[11.5px]">Late</span>
                </div>
                <div className="flex items-center gap-1.5 pl-2 border-l-2 border-purple-500">
                  <span className="text-purple-700 font-extrabold text-[13.5px]">0</span>
                  <span className="text-slate-500 font-semibold text-[11.5px]">Movement</span>
                </div>
                <div className="flex items-center gap-1.5 pl-2 border-l-2 border-blue-500">
                  <span className="text-blue-700 font-extrabold text-[13.5px]">0</span>
                  <span className="text-slate-500 font-semibold text-[11.5px]">Leave</span>
                </div>
                <div className="flex items-center gap-1.5 pl-2 border-l-2 border-rose-500">
                  <span className="text-rose-700 font-extrabold text-[13.5px]">4</span>
                  <span className="text-slate-500 font-semibold text-[11.5px]">Absent</span>
                </div>
              </div>
            </div>

            {/* Split Calendar Grid & Daily Check Logs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
              
              {/* Calendar Days Grid (8 Cols) */}
              <div className="lg:col-span-8 border-r border-slate-100 pr-3">
                <div className="grid grid-cols-7 gap-1 text-center font-bold text-[12px] text-slate-600 mb-2.5">
                  <div className="py-1 bg-slate-50 rounded">Sun</div>
                  <div className="py-1 bg-slate-50 rounded">Mon</div>
                  <div className="py-1 bg-slate-50 rounded">Tue</div>
                  <div className="py-1 bg-slate-50 rounded">Wed</div>
                  <div className="py-1 bg-slate-50 rounded">Thu</div>
                  <div className="py-1 bg-slate-50 rounded">Fri</div>
                  <div className="py-1 bg-slate-50 rounded">Sat</div>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center">
                  {calendarDays.map((item, idx) => (
                    <div key={idx} className="min-h-[50px] p-1 flex flex-col items-center justify-start border border-slate-100 rounded hover:bg-slate-50/80 transition-colors">
                      <span className="text-[12.5px] font-bold text-slate-800">{item.date}</span>
                      {item.status && (
                        <span className={`mt-0.5 text-[9.5px] px-1.5 py-0.2 rounded font-bold border leading-tight ${item.color}`}>
                          {item.status}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline Check-In / Check-Out Log (4 Cols) - Scrollable */}
              <div className="lg:col-span-4 space-y-2 pl-1 max-h-[360px] overflow-y-auto pr-1 custom-scrollbar">
                <span className="text-[11px] font-bold text-slate-400 block mb-1">Recent Punch Logs</span>
                {dailyLogs.map((log, index) => (
                  <div 
                    key={index}
                    className={`p-2.5 bg-white border border-slate-200 rounded-lg border-l-4 ${log.border} shadow-2xs space-y-1 hover:border-slate-300 transition-colors`}
                  >
                    <div className="flex items-center justify-between text-[11.5px] text-slate-500">
                      <span className="font-bold text-slate-900">{log.date}</span>
                      <span className="px-1.5 py-0.2 bg-slate-100 text-slate-700 font-bold text-[10.5px] rounded">{log.hours}</span>
                    </div>

                    <div className="flex items-center justify-between text-[11.5px] pt-0.5">
                      <div className="flex items-center gap-1 text-slate-600 font-medium">
                        <ArrowUpRight size={13} className={log.isLate ? "text-amber-500 stroke-[2.5]" : "text-emerald-600 stroke-[2.5]"} />
                        <span>In</span>
                        <strong className="text-slate-900 ml-0.5">{log.checkIn}</strong>
                      </div>
                      <div className="flex items-center gap-1 text-slate-600 font-medium">
                        <ArrowDownRight size={13} className="text-amber-600 stroke-[2.5]" />
                        <span>Out</span>
                        <strong className="text-slate-900 ml-0.5">{log.checkOut}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* BOTTOM GRID: COMPANY POLICY, LEAVE BALANCE, NOTICE BOARD */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Company Policy (4 Cols) */}
            <div className="lg:col-span-4 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[14px] font-bold text-slate-900">Company Policy</h3>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {filteredPolicies.length} Docs
                  </span>
                </div>
                
                <div className="relative mb-3">
                  <input 
                    type="text" 
                    placeholder="Search policy..." 
                    value={policySearch}
                    onChange={(e) => setPolicySearch(e.target.value)}
                    className="w-full h-8 pl-8 pr-3 text-[12.5px] bg-slate-50 border border-slate-200 rounded outline-none focus:bg-white focus:border-[#008060] font-medium" 
                  />
                  <Search size={14} className="absolute left-2.5 top-2 text-slate-400" />
                </div>

                <div className="space-y-1.5 max-h-[200px] overflow-y-auto pr-1">
                  {filteredPolicies.map((policy) => (
                    <div 
                      key={policy.id}
                      className="p-2 bg-slate-50/70 hover:bg-slate-100/90 border border-slate-200/70 rounded flex items-center justify-between transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <FileText size={14} className="text-[#008060] shrink-0" />
                        <h4 className="text-[12.5px] font-bold text-slate-800 truncate group-hover:text-[#008060] transition-colors">
                          {policy.title}
                        </h4>
                      </div>
                      <span className="text-[11px] font-bold text-[#008060] underline shrink-0 ml-1">View</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Leave Balance Section (4 Cols) */}
            <div className="lg:col-span-4 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="text-[14px] font-bold text-slate-900">Leave Balance</h3>
                <button 
                  onClick={() => setIsLeaveModalOpen(true)}
                  className="flex items-center gap-1 text-[11.5px] font-bold text-[#008060] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 px-2 py-0.5 rounded transition-colors cursor-pointer"
                >
                  <Plus size={12} strokeWidth={2.5} />
                  <span>Apply</span>
                </button>
              </div>

              <table className="w-full text-left text-[12.5px]">
                <thead>
                  <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500">
                    <th className="py-1.5 pb-2">Type</th>
                    <th className="py-1.5 pb-2 text-center">Taken</th>
                    <th className="py-1.5 pb-2 text-center">Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  <tr>
                    <td className="py-2 text-slate-800 font-bold">Casual Leave [CL]</td>
                    <td className="py-2 text-center text-slate-600">1</td>
                    <td className="py-2 text-center font-bold text-slate-900">9</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-slate-800 font-bold">Sick Leave [SL]</td>
                    <td className="py-2 text-center text-slate-600">1</td>
                    <td className="py-2 text-center font-bold text-slate-900">13</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-slate-800 font-bold">Earn Leave [EL]</td>
                    <td className="py-2 text-center text-slate-600">0</td>
                    <td className="py-2 text-center font-bold text-slate-900">29</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Notice Board (4 Cols) */}
            <div className="lg:col-span-4 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[14px] font-bold text-slate-900">Notice Board</h3>
                <span className="w-5.5 h-5.5 rounded-full bg-[#008060] text-white font-bold text-[11px] flex items-center justify-center">
                  {noticesList.length}
                </span>
              </div>

              <div className="space-y-2">
                {noticesList.map((notice) => (
                  <div key={notice.id} className="p-2 bg-slate-50 border border-slate-200/70 rounded">
                    <h4 className="text-[12.5px] font-bold text-slate-900 leading-snug">{notice.title}</h4>
                    <span className="text-[10.5px] text-slate-400 font-medium">{notice.date}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* LEAVE APPLICATION MODAL */}
      {isLeaveModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl border border-slate-200 shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#008060] flex items-center justify-center font-bold">
                  <FileText size={18} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-slate-900 leading-tight">Apply for Leave</h3>
                  <p className="text-[11.5px] text-slate-500 font-medium">Submit a new leave application</p>
                </div>
              </div>
              <button 
                onClick={() => setIsLeaveModalOpen(false)} 
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmitLeave} className="p-5 space-y-4 text-left">
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1">Leave Type</label>
                <select 
                  value={newApp.leaveType}
                  onChange={(e) => setNewApp({ ...newApp, leaveType: e.target.value })}
                  className="w-full h-9 text-[12.5px] bg-slate-50 border border-slate-200 rounded-lg px-3 outline-none focus:bg-white focus:border-[#008060] font-medium text-slate-800"
                >
                  <option value="Casual Leave [CL]">Casual Leave [CL] (Bal: 9)</option>
                  <option value="Sick Leave [SL]">Sick Leave [SL] (Bal: 13)</option>
                  <option value="Earn Leave [EL]">Earn Leave [EL] (Bal: 29)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-bold text-slate-700 mb-1">Start Date</label>
                  <input 
                    type="date"
                    required
                    value={newApp.startDate}
                    onChange={(e) => setNewApp({ ...newApp, startDate: e.target.value })}
                    className="w-full h-9 text-[12px] bg-slate-50 border border-slate-200 rounded-lg px-3 outline-none focus:bg-white focus:border-[#008060] font-medium text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-slate-700 mb-1">End Date</label>
                  <input 
                    type="date"
                    required
                    value={newApp.endDate}
                    onChange={(e) => setNewApp({ ...newApp, endDate: e.target.value })}
                    className="w-full h-9 text-[12px] bg-slate-50 border border-slate-200 rounded-lg px-3 outline-none focus:bg-white focus:border-[#008060] font-medium text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1">Reason / Purpose</label>
                <textarea 
                  rows={3}
                  placeholder="Explain reason for leave request..."
                  value={newApp.reason}
                  onChange={(e) => setNewApp({ ...newApp, reason: e.target.value })}
                  className="w-full p-2.5 text-[12px] bg-slate-50 border border-slate-200 rounded-lg outline-none focus:bg-white focus:border-[#008060] font-medium text-slate-800 resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button 
                  type="button"
                  onClick={() => setIsLeaveModalOpen(false)}
                  className="px-4 py-2 text-[12px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 text-[12px] font-bold text-white bg-[#008060] hover:bg-[#006e52] rounded-lg transition-colors shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle2 size={15} />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
