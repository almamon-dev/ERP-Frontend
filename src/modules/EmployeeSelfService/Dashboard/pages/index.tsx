import React, { useState } from 'react';
import { 
  Clock, Calendar as CalendarIcon, UserCheck, ArrowUpRight, 
  ArrowDownRight, CheckCircle2, AlertCircle, FileText, Search, 
  ChevronDown, User, Bell, Briefcase, FileSpreadsheet, Layers,
  ExternalLink, Building, MapPin, ChevronRight
} from 'lucide-react';
import Button from '@/components/ui/button';
import DatePicker from '@/components/ui/date-picker';

export default function EmployeeDashboardPage() {
  const [selectedMonth, setSelectedMonth] = useState('July 2026');
  const [selectedNoticeYear, setSelectedNoticeYear] = useState('2026');

  const monthMap: Record<string, string> = {
    'Jan': 'January', 'Feb': 'February', 'Mar': 'March', 'Apr': 'April',
    'May': 'May', 'Jun': 'June', 'Jul': 'July', 'Aug': 'August',
    'Sep': 'September', 'Oct': 'October', 'Nov': 'November', 'Dec': 'December'
  };

  // Days in July 2026 (Starting Wednesday Jul 1)
  const calendarDays = [
    // Sun 28, Mon 29, Tue 30 (prev month empty)
    { day: '', date: null, status: 'empty' },
    { day: '', date: null, status: 'empty' },
    { day: '', date: null, status: 'empty' },
    { day: 1, date: '1', status: 'Present', color: 'bg-emerald-100 text-emerald-700' },
    { day: 2, date: '2', status: 'Present', color: 'bg-emerald-100 text-emerald-700' },
    { day: 3, date: '3', status: 'Absent', color: 'bg-rose-100 text-rose-700' },
    { day: 4, date: '4', status: 'Late', color: 'bg-amber-100 text-amber-700' },
    
    { day: 5, date: '5', status: 'Offday', color: 'bg-slate-100 text-slate-500' },
    { day: 6, date: '6', status: 'Present', color: 'bg-emerald-100 text-emerald-700' },
    { day: 7, date: '7', status: 'Present', color: 'bg-emerald-100 text-emerald-700' },
    { day: 8, date: '8', status: 'Late', color: 'bg-amber-100 text-amber-700' },
    { day: 9, date: '9', status: 'Present', color: 'bg-emerald-100 text-emerald-700' },
    { day: 10, date: '10', status: 'Absent', color: 'bg-rose-100 text-rose-700' },
    { day: 11, date: '11', status: 'Late', color: 'bg-amber-100 text-amber-700' },

    { day: 12, date: '12', status: 'Offday', color: 'bg-slate-100 text-slate-500' },
    { day: 13, date: '13', status: 'Late', color: 'bg-amber-100 text-amber-700' },
    { day: 14, date: '14', status: 'Late', color: 'bg-amber-100 text-amber-700' },
    { day: 15, date: '15', status: 'Present', color: 'bg-emerald-100 text-emerald-700' },
    { day: 16, date: '16', status: 'Present', color: 'bg-emerald-100 text-emerald-700' },
    { day: 17, date: '17', status: 'Absent', color: 'bg-rose-100 text-rose-700' },
    { day: 18, date: '18', status: 'Late', color: 'bg-amber-100 text-amber-700' },

    { day: 19, date: '19', status: 'Offday', color: 'bg-slate-100 text-slate-500' },
    { day: 20, date: '20', status: 'Late', color: 'bg-amber-100 text-amber-700' },
    { day: 21, date: '21', status: 'Late', color: 'bg-amber-100 text-amber-700' },
    { day: 22, date: '22', status: 'Present', color: 'bg-emerald-100 text-emerald-700' },
    { day: 23, date: '23', status: 'Late', color: 'bg-amber-100 text-amber-700' },
    { day: 24, date: '24', status: 'Absent', color: 'bg-rose-100 text-rose-700' },
    { day: 25, date: '25', status: 'Late', color: 'bg-amber-100 text-amber-700' },

    { day: 26, date: '26', status: 'Offday', color: 'bg-slate-100 text-slate-500' },
    { day: 27, date: '27', status: '', color: '' },
    { day: 28, date: '28', status: '', color: '' },
    { day: 29, date: '29', status: '', color: '' },
    { day: 30, date: '30', status: '', color: '' },
    { day: 31, date: '31', status: '', color: '' },
  ];

  return (
    <div className="p-4 md:p-6 max-w-[1600px] mx-auto bg-[#f4f6f8] min-h-screen text-slate-800 space-y-4 pb-20">
      
      {/* --- TOP HEADER ROW --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Welcome & Working Period Info (7 Cols) */}
        <div className="lg:col-span-7 bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <h1 className="text-[17px] font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
              Hello, <span className="text-[#008060] underline underline-offset-2">Al Mamon</span>, Welcome Back !
            </h1>
            <p className="text-[12px] font-medium text-slate-400 mt-0.5">27 July, 2028, Monday.</p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200/60 shrink-0">
                <Clock size={20} className="stroke-[2.2]" />
              </div>
              <div>
                <p className="text-[11.5px] font-bold text-slate-400 uppercase tracking-wider">Today Working Period</p>
                <h3 className="text-[15px] font-extrabold text-slate-800">9 hr 46 min</h3>
              </div>
            </div>

            <div className="pl-4 border-l border-slate-200">
              <p className="text-[11.5px] font-bold text-slate-400">Morning 8:00AM to 5:00PM</p>
              <h3 className="text-[14px] font-bold text-slate-800 mt-0.5">08:00 AM – 05:00 PM</h3>
            </div>
          </div>
        </div>

        {/* Company & Employment Details (5 Cols) */}
        <div className="lg:col-span-5 bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-[14px] font-bold text-slate-900 flex items-center gap-1.5">
              Bdcalling <span className="text-slate-400 font-normal">[BD]</span>
            </h2>
            <p className="text-[11.5px] text-slate-500 mt-0.5 flex items-center gap-1">
              <MapPin size={12} className="text-slate-400 shrink-0" />
              14 Daisy Garden, Banasree Main Rd, Dhaka 1219
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                <CalendarIcon size={16} />
              </div>
              <div>
                <p className="text-[10.5px] font-medium text-slate-400">Length of Service</p>
                <p className="text-[12.5px] font-bold text-slate-800 leading-tight">2 years 1 months</p>
              </div>
            </div>

            <div className="border-l border-slate-100 pl-3">
              <p className="text-[10.5px] font-medium text-slate-400">Joining Date</p>
              <p className="text-[12.5px] font-bold text-slate-800 leading-tight mt-0.5">20 Jun, 2024</p>
            </div>

            <div className="border-l border-slate-100 pl-3">
              <p className="text-[10.5px] font-medium text-slate-400">Confirmation Date</p>
              <p className="text-[12.5px] font-bold text-slate-800 leading-tight mt-0.5">16 Sep, 2024</p>
            </div>
          </div>
        </div>

      </div>


      {/* --- MAIN MIDDLE SECTION (CALENDAR & TIMELINE & RIGHT PANEL) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* LEFT & CENTER: Attendance Calendar Grid & Daily Log (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm overflow-visible">
            {/* Header & Stats Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <h3 className="text-[14px] font-bold text-[#1e3a8a] leading-none shrink-0">Attendance Calendar</h3>
                <DatePicker size="sm" variant="compact" format="monthYear" className="w-[140px]" placeholder="July 2026" />
              </div>

              {/* Attendance Counts Pill List */}
              <div className="flex flex-wrap items-center gap-3 text-[12px] font-bold">
                <div className="flex items-center gap-1.5 pl-2 border-l-2 border-indigo-500">
                  <span className="text-slate-800 font-extrabold text-[13px]">26</span>
                  <span className="text-slate-400 font-medium text-[11px]">Payable Days</span>
                </div>
                <div className="flex items-center gap-1.5 pl-2 border-l-2 border-emerald-500">
                  <span className="text-emerald-700 font-extrabold text-[13px]">8</span>
                  <span className="text-slate-400 font-medium text-[11px]">Present</span>
                </div>
                <div className="flex items-center gap-1.5 pl-2 border-l-2 border-amber-500">
                  <span className="text-amber-700 font-extrabold text-[13px]">10</span>
                  <span className="text-slate-400 font-medium text-[11px]">Late</span>
                </div>
                <div className="flex items-center gap-1.5 pl-2 border-l-2 border-purple-500">
                  <span className="text-purple-700 font-extrabold text-[13px]">0</span>
                  <span className="text-slate-400 font-medium text-[11px]">Movement</span>
                </div>
                <div className="flex items-center gap-1.5 pl-2 border-l-2 border-blue-500">
                  <span className="text-blue-700 font-extrabold text-[13px]">0</span>
                  <span className="text-slate-400 font-medium text-[11px]">Leave</span>
                </div>
                <div className="flex items-center gap-1.5 pl-2 border-l-2 border-rose-500">
                  <span className="text-rose-700 font-extrabold text-[13px]">4</span>
                  <span className="text-slate-400 font-medium text-[11px]">Absent</span>
                </div>
              </div>
            </div>

            {/* Split Calendar Grid & Daily Check Logs */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
              
              {/* Calendar Days Grid (7 Cols) */}
              <div className="md:col-span-7 border-r border-slate-100 pr-2">
                <div className="grid grid-cols-7 gap-1 text-center font-bold text-[11.5px] text-slate-600 mb-2">
                  <div className="py-1 bg-slate-50 rounded">Sunday</div>
                  <div className="py-1 bg-slate-50 rounded">Monday</div>
                  <div className="py-1 bg-slate-50 rounded">Tuesday</div>
                  <div className="py-1 bg-slate-50 rounded">Wednesday</div>
                  <div className="py-1 bg-slate-50 rounded">Thursday</div>
                  <div className="py-1 bg-slate-50 rounded">Friday</div>
                  <div className="py-1 bg-slate-50 rounded">Saturday</div>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center">
                  {calendarDays.map((item, idx) => (
                    <div key={idx} className="min-h-[52px] p-1 flex flex-col items-center justify-start border border-slate-100 rounded hover:bg-slate-50/80 transition-colors">
                      <span className="text-[12px] font-bold text-slate-700">{item.date}</span>
                      {item.status && (
                        <span className={`mt-1 text-[9.5px] px-1.5 py-0.5 rounded font-extrabold leading-tight ${item.color}`}>
                          {item.status}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline Check-In / Check-Out Log (5 Cols) */}
              <div className="md:col-span-5 space-y-2.5 pl-1">
                
                {/* Single Log Card */}
                <div className="p-3 bg-white border border-slate-200 rounded-lg border-l-4 border-l-emerald-500 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between text-[11.5px] text-slate-500">
                    <span className="font-bold text-slate-800">26 Jul, 2026</span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 font-bold text-[10.5px] rounded">9 hr 46 min</span>
                  </div>
                  <div className="flex items-center gap-4 text-[12px] pt-1">
                    <div className="flex items-center gap-1 text-slate-700 font-medium">
                      <ArrowUpRight size={14} className="text-emerald-600 stroke-[2.5]" />
                      <span>Check In</span>
                      <strong className="text-slate-900 ml-1">08:22 AM</strong>
                    </div>
                    <div className="flex items-center gap-1 text-slate-700 font-medium">
                      <ArrowDownRight size={14} className="text-amber-600 stroke-[2.5]" />
                      <span>Check Out</span>
                      <strong className="text-slate-900 ml-1">06:08 PM</strong>
                    </div>
                  </div>
                </div>

                {/* Log Card 2 */}
                <div className="p-3 bg-white border border-slate-200 rounded-lg border-l-2 border-l-slate-300 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between text-[11.5px] text-slate-500">
                    <span className="font-bold text-slate-800">25 Jul, 2026</span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 font-bold text-[10.5px] rounded">8 hr 37 min</span>
                  </div>
                  <div className="flex items-center gap-4 text-[12px] pt-1">
                    <div className="flex items-center gap-1 text-slate-700 font-medium">
                      <ArrowUpRight size={14} className="text-blue-500 stroke-[2.5]" />
                      <span>Check In</span>
                      <strong className="text-slate-900 ml-1">09:32 AM</strong>
                    </div>
                    <div className="flex items-center gap-1 text-slate-700 font-medium">
                      <ArrowDownRight size={14} className="text-amber-600 stroke-[2.5]" />
                      <span>Check Out</span>
                      <strong className="text-slate-900 ml-1">06:09 PM</strong>
                    </div>
                  </div>
                </div>

                {/* Log Card 3 */}
                <div className="p-3 bg-white border border-slate-200 rounded-lg border-l-2 border-l-slate-300 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between text-[11.5px] text-slate-500">
                    <span className="font-bold text-slate-800">24 Jul, 2026</span>
                    <span className="text-[11px] text-slate-400">—</span>
                  </div>
                  <div className="flex items-center gap-4 text-[12px] pt-1 text-slate-400">
                    <div className="flex items-center gap-1">
                      <ArrowUpRight size={14} />
                      <span>Check In</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ArrowDownRight size={14} />
                      <span>Check Out</span>
                    </div>
                  </div>
                </div>

                {/* Log Card 4 */}
                <div className="p-3 bg-white border border-slate-200 rounded-lg border-l-2 border-l-slate-300 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between text-[11.5px] text-slate-500">
                    <span className="font-bold text-slate-800">23 Jul, 2026</span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 font-bold text-[10.5px] rounded">7 hr 33 min</span>
                  </div>
                  <div className="flex items-center gap-4 text-[12px] pt-1">
                    <div className="flex items-center gap-1 text-slate-700 font-medium">
                      <ArrowUpRight size={14} className="text-emerald-600 stroke-[2.5]" />
                      <span>Check In</span>
                      <strong className="text-slate-900 ml-1">10:30 AM</strong>
                    </div>
                    <div className="flex items-center gap-1 text-slate-700 font-medium">
                      <ArrowDownRight size={14} className="text-amber-600 stroke-[2.5]" />
                      <span>Check Out</span>
                      <strong className="text-slate-900 ml-1">06:03 PM</strong>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>


        {/* RIGHT PANEL: MANAGERS & LEAVE BALANCE TABLE (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* My Manager Section */}
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-[13.5px] font-bold text-slate-800">My Manager</h3>
            <div className="space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-[12px] shrink-0 border border-emerald-300">
                  MR
                </div>
                <div>
                  <h4 className="text-[12.5px] font-bold text-slate-900 leading-snug">Md. Ridoy</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Supervisor</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1 border-t border-slate-100">
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-[12px] shrink-0 border border-slate-300">
                  MR
                </div>
                <div>
                  <h4 className="text-[12.5px] font-bold text-slate-900 leading-snug">Md. Ridoy</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Dotted Supervisor</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1 border-t border-slate-100">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 font-bold flex items-center justify-center text-[12px] shrink-0 border border-blue-200">
                  MK
                </div>
                <div>
                  <h4 className="text-[12.5px] font-bold text-slate-900 leading-snug">Md. Kamruzzaman</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Line Manager</p>
                </div>
              </div>
            </div>
          </div>

          {/* Leave Balance Section */}
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2.5">
              <h3 className="text-[13.5px] font-bold text-slate-800">Leave Balance</h3>
              <button className="text-[11px] font-bold text-indigo-600 hover:underline">
                Show All(Active/Inactive)
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px]">
                <thead>
                  <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                    <th className="py-1.5 pb-2">Type</th>
                    <th className="py-1.5 pb-2 text-center">Taken</th>
                    <th className="py-1.5 pb-2 text-center">Balance</th>
                    <th className="py-1.5 pb-2 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  <tr>
                    <td className="py-2 text-slate-800">Casual Leave [CL]</td>
                    <td className="py-2 text-center text-slate-600">1</td>
                    <td className="py-2 text-center font-bold text-slate-900">9</td>
                    <td className="py-2 text-right font-bold text-emerald-600">Active</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-slate-800">Sick Leave [SL]</td>
                    <td className="py-2 text-center text-slate-600">1</td>
                    <td className="py-2 text-center font-bold text-slate-900">13</td>
                    <td className="py-2 text-right font-bold text-emerald-600">Active</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-slate-800">Earn Leave [EL]</td>
                    <td className="py-2 text-center text-slate-600">0</td>
                    <td className="py-2 text-center font-bold text-slate-900">29</td>
                    <td className="py-2 text-right font-bold text-emerald-600">Active</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-slate-800">Leave Without Pay [LWP]</td>
                    <td className="py-2 text-center text-slate-600">0</td>
                    <td className="py-2 text-center font-bold text-slate-900">365</td>
                    <td className="py-2 text-right font-bold text-emerald-600">Active</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>


      {/* --- BOTTOM GRID CARDS (COMPANY POLICY & NOTICE BOARD & MY APPLICATIONS) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Company Policy (5 Cols) */}
        <div className="lg:col-span-5 bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
          <h3 className="text-[13.5px] font-bold text-slate-800 mb-3">Company Policy</h3>
          
          <div className="flex items-center gap-2 mb-4">
            <select className="h-8 text-[12px] bg-slate-50 border border-slate-200 rounded px-2.5 outline-none font-medium">
              <option value="0">0</option>
              <option value="10">10</option>
              <option value="25">25</option>
            </select>
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full h-8 pl-8 pr-3 text-[12px] bg-white border border-slate-200 rounded outline-none" 
              />
              <Search size={14} className="absolute left-2.5 top-2 text-slate-400" />
            </div>
          </div>

          <div className="py-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-2">
              <FileSpreadsheet size={32} className="text-slate-400" />
            </div>
            <p className="text-[12px] text-slate-400 font-medium">No company policies found.</p>
          </div>
        </div>

        {/* Notice Board (3 Cols) */}
        <div className="lg:col-span-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm border-r-4 border-r-emerald-500 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[13.5px] font-bold text-slate-800">Notice Board</h3>
            <select 
              value={selectedNoticeYear}
              onChange={(e) => setSelectedNoticeYear(e.target.value)}
              className="text-[12px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded px-2 py-0.5 outline-none"
            >
              <option value="2026">2026</option>
              <option value="2025">2025</option>
            </select>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-md flex items-start gap-3 my-2">
            <Bell size={16} className="text-indigo-600 mt-0.5 shrink-0" />
            <div>
              <h4 className="text-[12.5px] font-bold text-slate-900">Test-1</h4>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">15 Jan, 2026</p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 text-right">
            <button className="text-[11px] font-bold text-emerald-700 hover:underline">View All Notices</button>
          </div>
        </div>

        {/* My Applications (4 Cols) */}
        <div className="lg:col-span-4 bg-white p-4 rounded-lg border border-slate-200 shadow-sm border-r-4 border-r-emerald-500 flex flex-col justify-between">
          <h3 className="text-[13.5px] font-bold text-slate-800 mb-3">My Applications</h3>
          
          <div className="py-6 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-2">
              <FileText size={32} className="text-slate-400" />
            </div>
            <p className="text-[13px] font-bold text-slate-700">No data</p>
          </div>

          <div className="pt-2 border-t border-slate-100 text-right">
            <button className="text-[11px] font-bold text-emerald-700 hover:underline">View Application History</button>
          </div>
        </div>

      </div>

    </div>
  );
}
