import React from 'react';
import { 
    Users, GraduationCap, Clock, Wallet, Building2, BookOpen, 
    Settings, Calendar as CalendarIcon, ChevronDown, CheckCircle2, 
    AlertCircle, Clock3, MessageSquare, AlertTriangle, Database,
    Server, ArrowUpRight, ArrowDownRight, MoreHorizontal, Bell
} from 'lucide-react';
import {
    LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

// --- MOCK DATA ---
const attendanceLineData = [
  { day: 'Sun', value: 75 },
  { day: 'Mon', value: 90 },
  { day: 'Tue', value: 85 },
  { day: 'Wed', value: 92 },
  { day: 'Thu', value: 95 },
  { day: 'Fri', value: 82 },
  { day: 'Sat', value: 78 }
];

const classAttendanceData = [
  { name: 'Class 10-A', value: 95, color: '#3b82f6' },
  { name: 'Class 10-B', value: 93, color: '#10b981' },
  { name: 'Class 9-A', value: 96, color: '#f59e0b' },
  { name: 'Class 9-B', value: 92, color: '#8b5cf6' },
  { name: 'Others', value: 91, color: '#94a3b8' }
];

const feeCollectionData = [
    { name: 'Collected', value: 70, color: '#10b981' },
    { name: 'Pending', value: 25, color: '#f59e0b' },
    { name: 'Overdue', value: 5, color: '#ef4444' }
];

const studentsByGradeData = [
    { grade: '6th', students: 120 },
    { grade: '7th', students: 150 },
    { grade: '8th', students: 180 },
    { grade: '9th', students: 200 },
    { grade: '10th', students: 210 },
    { grade: '11th', students: 190 },
    { grade: '12th', students: 200 }
];

const incomeExpenseData = [
    { day: 'May 1', income: 4.2, expense: 1.8 },
    { day: 'May 6', income: 5.5, expense: 2.1 },
    { day: 'May 11', income: 4.8, expense: 2.8 },
    { day: 'May 16', income: 6.2, expense: 1.9 },
    { day: 'May 21', income: 5.8, expense: 3.5 },
    { day: 'May 25', income: 7.2, expense: 2.5 }
];

const examResults = [
    { class: 'Class 10-A', exam: 'Midterm Exam', score: '87%', scoreColor: 'text-emerald-600', topper: 'John Doe' },
    { class: 'Class 10-B', exam: 'Midterm Exam', score: '83%', scoreColor: 'text-emerald-600', topper: 'Jane Smith' },
    { class: 'Class 9-A', exam: 'Midterm Exam', score: '89%', scoreColor: 'text-emerald-600', topper: 'Mike Johnson' },
    { class: 'Class 9-B', exam: 'Midterm Exam', score: '81%', scoreColor: 'text-emerald-600', topper: 'Sara Khan' },
];

const recentActivities = [
    { id: 1, type: 'assignment', user: 'John Doe', action: 'Submitted assignment', time: '2 min ago', icon: BookOpen, bg: 'bg-blue-100', text: 'text-blue-600' },
    { id: 2, type: 'payment', user: 'Jane Smith', action: 'Paid fees ৳ 15,000', time: '15 min ago', icon: MessageSquare, bg: 'bg-orange-100', text: 'text-orange-600' },
    { id: 3, type: 'attendance', user: 'Mike Johnson', action: 'Marked present', time: '30 min ago', icon: CheckCircle2, bg: 'bg-emerald-100', text: 'text-emerald-600' },
    { id: 4, type: 'notice', user: 'Admin', action: 'Published notice', time: '1 hour ago', icon: AlertCircle, bg: 'bg-orange-100', text: 'text-orange-600' },
    { id: 5, type: 'assignment', user: 'Sara Khan', action: 'Submitted assignment', time: '2 hours ago', icon: BookOpen, bg: 'bg-emerald-100', text: 'text-emerald-600' },
    { id: 6, type: 'system', user: 'System', action: 'Backup completed', time: '3 hours ago', icon: Bell, bg: 'bg-blue-100', text: 'text-blue-600' },
];

export default function DashboardPage() {
    return (
        <div className="w-full p-4 md:p-6 lg:p-8">
            <div className="max-w-[1600px] mx-auto pb-10">
                {/* --- HEADER SECTION --- */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-[22px] font-black text-slate-900 tracking-tight flex items-center gap-2">
                            Welcome back, Admin! <span className="text-2xl">👋</span>
                        </h1>
                        <p className="text-slate-500 text-[13px] mt-1 font-medium">Here's what's happening in your school today.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-md px-3 py-2 text-[12px] font-semibold text-slate-600 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
                            <CalendarIcon size={14} className="text-slate-400" />
                            Today, May 25, 2024
                            <ChevronDown size={14} className="text-slate-400 ml-1" />
                        </div>
                        <button className="h-[36px] px-4 bg-blue-600 text-white rounded-md text-[12.5px] font-bold shadow-sm hover:bg-blue-700 transition-colors flex items-center gap-2">
                            <Settings size={14} /> Customize
                        </button>
                    </div>
                </div>

                {/* --- STATS ROW (6 CARDS) --- */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                    <StatCard 
                        title="Total Students" value="1,250" 
                        icon={Users} iconBg="bg-blue-50" iconColor="text-blue-600"
                        trend="up" trendValue="3.2%" trendText="from last month"
                    />
                    <StatCard 
                        title="Total Teachers" value="85" 
                        icon={GraduationCap} iconBg="bg-emerald-50" iconColor="text-emerald-600"
                        trend="up" trendValue="1.8%" trendText="from last month"
                    />
                    <StatCard 
                        title="Today's Attendance" value="94%" 
                        icon={Clock3} iconBg="bg-purple-50" iconColor="text-purple-600"
                        trend="up" trendValue="2.6%" trendText="from yesterday"
                    />
                    <StatCard 
                        title="Pending Fees" value="৳ 2.5M" 
                        icon={Wallet} iconBg="bg-orange-50" iconColor="text-orange-600"
                        trend="down" trendValue="4.3%" trendText="from last month"
                    />
                    <StatCard 
                        title="Total Classes" value="48" 
                        icon={Building2} iconBg="bg-blue-50" iconColor="text-blue-600"
                        trend="up" trendValue="2" trendText="new this month"
                    />
                    <StatCard 
                        title="Total Subjects" value="32" 
                        icon={BookOpen} iconBg="bg-pink-50" iconColor="text-pink-600"
                        trend="up" trendValue="1" trendText="new this month"
                    />
                </div>

                {/* --- CHARTS ROW 1 --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
                    
                    {/* Attendance Overview (Line + Donut) */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-[15px] font-bold text-slate-800">Attendance Overview</h2>
                            <div className="flex items-center gap-1 text-[12px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1.5 rounded cursor-pointer border border-slate-100 hover:bg-slate-100 transition-colors">
                                This Week <ChevronDown size={14} />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-[1fr_1.1fr] gap-6 flex-1">
                            {/* Left Side: Line Chart */}
                            <div className="flex flex-col">
                                <div className="mb-2">
                                    <p className="text-[13px] text-slate-500 font-medium">Average Attendance</p>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-[32px] font-black text-slate-900 leading-none tracking-tight">94%</span>
                                        <span className="flex items-center text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                                            <ArrowUpRight size={12} className="mr-0.5" /> 2.6%
                                        </span>
                                    </div>
                                </div>
                                <div className="h-[100px] w-full mt-auto">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={attendanceLineData}>
                                            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} dy={5} />
                                            <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
                                            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '11px' }} />
                                            <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, fill: '#3b82f6', strokeWidth: 0 }} activeDot={{ r: 6 }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            
                            {/* Right Side: Donut Chart */}
                            <div className="flex flex-col">
                                <p className="text-[13px] text-slate-500 font-medium mb-3">Class-wise Attendance</p>
                                <div className="flex items-center gap-4 flex-1">
                                    {/* Pie Chart */}
                                    <div className="h-[110px] w-[110px] shrink-0">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie 
                                                    data={classAttendanceData} 
                                                    cx="50%" cy="50%" 
                                                    innerRadius={32} 
                                                    outerRadius={50} 
                                                    paddingAngle={2} 
                                                    dataKey="value" 
                                                    stroke="none"
                                                >
                                                    {classAttendanceData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                                    ))}
                                                </Pie>
                                                <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '11px', padding: '4px 8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                    
                                    {/* Legend */}
                                    <div className="flex flex-col justify-center gap-2 flex-1">
                                        {classAttendanceData.map((item, idx) => (
                                            <div key={idx} className="flex items-center justify-between w-full">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }}></div>
                                                    <span className="text-[11px] text-slate-500 font-medium">{item.name}</span>
                                                </div>
                                                <span className="text-[11px] text-slate-800 font-bold">{item.value}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fee Collection Overview */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-[14px] font-bold text-slate-800">Fee Collection Overview</h2>
                            <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-50 px-2 py-1 rounded cursor-pointer border border-slate-100 hover:bg-slate-100 transition-colors">
                                This Month <ChevronDown size={12} />
                            </div>
                        </div>
                        <div className="flex items-center justify-between flex-1 pl-4">
                            <div className="relative h-[160px] w-[160px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={feeCollectionData} cx="50%" cy="50%" innerRadius={55} outerRadius={75} paddingAngle={2} dataKey="value" stroke="none">
                                            {feeCollectionData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '11px', padding: '4px 8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                    <span className="text-[16px] font-black text-slate-800 tracking-tight">৳ 8.5M</span>
                                    <span className="text-[9px] text-slate-500 font-medium mt-0.5">Total Collection</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 pr-6">
                                <div>
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                                        <span className="text-[11px] font-bold text-slate-700">Collected</span>
                                    </div>
                                    <p className="text-[12px] font-medium text-slate-500 pl-4">৳ 6.0M (70%)</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                                        <span className="text-[11px] font-bold text-slate-700">Pending</span>
                                    </div>
                                    <p className="text-[12px] font-medium text-slate-500 pl-4">৳ 2.5M (25%)</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                        <span className="text-[11px] font-bold text-slate-700">Overdue</span>
                                    </div>
                                    <p className="text-[12px] font-medium text-slate-500 pl-4">৳ 500K (5%)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Students by Grade */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-[14px] font-bold text-slate-800">Students by Grade</h2>
                            <span className="text-[11px] font-bold text-blue-600 hover:underline cursor-pointer">View Report</span>
                        </div>
                        <div className="h-[180px] w-full flex-1">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={studentsByGradeData} margin={{ top: 15, right: 0, left: -25, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis dataKey="grade" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} dy={5} />
                                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                                    <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', fontSize: '11px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                    <Bar dataKey="students" radius={[4, 4, 0, 0]} barSize={24}>
                                        {studentsByGradeData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={index > 4 ? '#06b6d4' : '#3b82f6'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                </div>

                {/* --- MIDDLE ROW 2 (4 CARDS) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-6">
                    
                    {/* Recent Exam Results */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-[14px] font-bold text-slate-800">Recent Exam Results</h2>
                            <span className="text-[11px] font-bold text-blue-600 hover:underline cursor-pointer">View All</span>
                        </div>
                        <div className="overflow-hidden">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-[#f4f6f8]">
                                        <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-[25%] text-[#6d7175] bg-[#f4f6f8] first:rounded-tl-[6px] last:rounded-tr-[6px] border-b-0">Class</th>
                                        <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-[35%] text-[#6d7175] bg-[#f4f6f8] first:rounded-tl-[6px] last:rounded-tr-[6px] border-b-0">Exam</th>
                                        <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center w-[20%] text-[#6d7175] bg-[#f4f6f8] first:rounded-tl-[6px] last:rounded-tr-[6px] border-b-0">Avg Score</th>
                                        <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right w-[20%] text-[#6d7175] bg-[#f4f6f8] first:rounded-tl-[6px] last:rounded-tr-[6px] border-b-0">Topper</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {examResults.map((item, idx) => (
                                        <tr key={idx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                                            <td className="py-3.5 text-[11px] font-semibold text-slate-700">{item.class}</td>
                                            <td className="py-3.5 text-[11px] font-medium text-slate-600">{item.exam}</td>
                                            <td className={`py-3.5 text-[12px] font-bold text-center ${item.scoreColor}`}>{item.score}</td>
                                            <td className="py-3.5 text-[11px] font-semibold text-slate-800 text-right">{item.topper}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Income vs Expense */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-[14px] font-bold text-slate-800">Income vs Expense</h2>
                            <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-50 px-2 py-1 rounded cursor-pointer border border-slate-100 hover:bg-slate-100 transition-colors">
                                This Month <ChevronDown size={12} />
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-3 pr-4">
                            <div>
                                <p className="text-[10px] text-slate-500 font-medium">Income</p>
                                <div className="flex items-center gap-1">
                                    <span className="text-[15px] font-bold text-emerald-600">৳ 7.2M</span>
                                    <span className="flex items-center text-[9px] font-bold text-emerald-600"><ArrowUpRight size={10} /> 12.5%</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-500 font-medium">Expense</p>
                                <div className="flex items-center gap-1">
                                    <span className="text-[15px] font-bold text-slate-800">৳ 3.1M</span>
                                    <span className="flex items-center text-[9px] font-bold text-red-600"><ArrowDownRight size={10} /> 5.3%</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-[140px] w-full flex-1">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={incomeExpenseData} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 9}} dy={5} />
                                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 9}} tickFormatter={(val) => `${val}M`} />
                                    <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '11px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                    <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', bottom: -10 }} />
                                    <Line type="monotone" dataKey="income" name="Income" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 3, fill: '#3b82f6', strokeWidth: 0 }} />
                                    <Line type="monotone" dataKey="expense" name="Expense" stroke="#ef4444" strokeWidth={2.5} dot={{ r: 3, fill: '#ef4444', strokeWidth: 0 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* System Overview */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-[14px] font-bold text-slate-800">System Overview</h2>
                        </div>
                        <div className="space-y-4 flex-1">
                            <div className="flex items-center justify-between border-b border-slate-50 pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                        <Users size={14} />
                                    </div>
                                    <span className="text-[12px] font-semibold text-slate-700">Total Users</span>
                                </div>
                                <span className="text-[12px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">425</span>
                            </div>
                            <div className="flex items-center justify-between border-b border-slate-50 pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                        <Users size={14} />
                                    </div>
                                    <span className="text-[12px] font-semibold text-slate-700">Active Users</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[12px] font-bold text-slate-900">398</span>
                                    <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">93.6%</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between border-b border-slate-50 pb-3">
                                <div className="flex items-center gap-3 w-full">
                                    <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                                        <Database size={14} />
                                    </div>
                                    <div className="flex-1 pr-4">
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[12px] font-semibold text-slate-700">Storage Used</span>
                                            <span className="text-[11px] font-bold text-blue-600">62%</span>
                                        </div>
                                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-blue-600 h-full rounded-full" style={{ width: '62%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between border-b border-slate-50 pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                                        <Database size={14} />
                                    </div>
                                    <span className="text-[12px] font-semibold text-slate-700">Database Status</span>
                                </div>
                                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Healthy</span>
                            </div>
                            <div className="flex items-center justify-between pb-1">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                        <Server size={14} />
                                    </div>
                                    <span className="text-[12px] font-semibold text-slate-700">System Uptime</span>
                                </div>
                                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> 99.9%</span>
                            </div>
                        </div>
                    </div>

                    {/* Alerts & Notifications */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-[14px] font-bold text-slate-800">Alerts & Notifications</h2>
                            <span className="text-[11px] font-bold text-blue-600 hover:underline cursor-pointer">View All</span>
                        </div>
                        <div className="space-y-4 flex-1">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                                    <AlertTriangle size={14} />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-[12px] font-bold text-slate-800">Fee payment overdue</h4>
                                        <span className="text-[9px] font-medium text-slate-400">10 min ago</span>
                                    </div>
                                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">35 students have overdue fees</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                                    <MessageSquare size={14} />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-[12px] font-bold text-slate-800">Leave request pending</h4>
                                        <span className="text-[9px] font-medium text-slate-400">1 hour ago</span>
                                    </div>
                                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">5 leave requests need approval</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                    <CalendarIcon size={14} />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-[12px] font-bold text-slate-800">Exam schedule published</h4>
                                        <span className="text-[9px] font-medium text-slate-400">2 hours ago</span>
                                    </div>
                                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Midterm exam routine published</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                                    <Users size={14} />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-[12px] font-bold text-slate-800">New student admission</h4>
                                        <span className="text-[9px] font-medium text-slate-400">3 hours ago</span>
                                    </div>
                                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">3 new students admitted today</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                                    <AlertTriangle size={14} />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-[12px] font-bold text-slate-800">Low attendance alert</h4>
                                        <span className="text-[9px] font-medium text-slate-400">5 hours ago</span>
                                    </div>
                                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Class 9-B attendance is 78%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM ROW --- */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                    
                    {/* Recent Activities */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col lg:col-span-3">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-[14px] font-bold text-slate-800">Recent Activities</h2>
                            <span className="text-[11px] font-bold text-blue-600 hover:underline cursor-pointer">View All</span>
                        </div>
                        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2 relative">
                            <div className="absolute top-4 left-4 right-4 h-0.5 bg-slate-100 z-0"></div>
                            {recentActivities.map((act, index) => (
                                <div key={act.id} className="relative z-10 flex flex-col items-center min-w-[120px]">
                                    <div className={`w-8 h-8 rounded-full ${act.bg} ${act.text} flex items-center justify-center border-4 border-white mb-3 shadow-sm`}>
                                        <act.icon size={13} />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[11px] font-bold text-slate-800 truncate w-full">{act.user}</p>
                                        <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">{act.action}</p>
                                        <p className="text-[9px] font-medium text-slate-400 mt-1">{act.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Events */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-[14px] font-bold text-slate-800">Upcoming Events</h2>
                            <span className="text-[11px] font-bold text-blue-600 hover:underline cursor-pointer">View Calendar</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center justify-center w-10 shrink-0">
                                    <span className="text-[10px] font-bold text-red-500 uppercase">May</span>
                                    <span className="text-[18px] font-black text-slate-800 leading-none mt-0.5">30</span>
                                </div>
                                <div>
                                    <h4 className="text-[12px] font-bold text-slate-800">Parent Teacher Meeting</h4>
                                    <p className="text-[10px] text-slate-500 mt-0.5">09:00 AM - 12:00 PM</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center justify-center w-10 shrink-0">
                                    <span className="text-[10px] font-bold text-blue-600 uppercase">Jun</span>
                                    <span className="text-[18px] font-black text-slate-800 leading-none mt-0.5">05</span>
                                </div>
                                <div>
                                    <h4 className="text-[12px] font-bold text-slate-800">Midterm Exams Start</h4>
                                    <p className="text-[10px] text-slate-500 mt-0.5">All Day</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center justify-center w-10 shrink-0">
                                    <span className="text-[10px] font-bold text-blue-600 uppercase">Jun</span>
                                    <span className="text-[18px] font-black text-slate-800 leading-none mt-0.5">10</span>
                                </div>
                                <div>
                                    <h4 className="text-[12px] font-bold text-slate-800">Sports Day</h4>
                                    <p className="text-[10px] text-slate-500 mt-0.5">08:00 AM - 05:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, icon: Icon, iconBg, iconColor, trend, trendValue, trendText }) {
    return (
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-[11px] font-semibold text-slate-500 mb-1">{title}</p>
                    <h3 className="text-[22px] font-black text-slate-800 tracking-tight">{value}</h3>
                </div>
                <div className={`w-10 h-10 rounded-lg ${iconBg} ${iconColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={20} strokeWidth={2} />
                </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
                {trend === 'up' ? (
                    <span className="flex items-center text-[10px] font-bold text-emerald-600">
                        <ArrowUpRight size={12} className="mr-0.5" /> {trendValue}
                    </span>
                ) : (
                    <span className="flex items-center text-[10px] font-bold text-red-600">
                        <ArrowDownRight size={12} className="mr-0.5" /> {trendValue}
                    </span>
                )}
                <span className="text-[10px] text-slate-400 font-medium">{trendText}</span>
            </div>
        </div>
    );
}
