import React, { useState } from 'react';
import { 
    Clock, Calendar, FileText, Award, DollarSign, UserCheck, 
    CheckCircle2, AlertCircle, ArrowUpRight, Download, Send, 
    Briefcase, Shield, ChevronRight, User, Bell, Activity
} from 'lucide-react';
import Button from '@/components/ui/button';

export default function StaffPortalPage() {
    const [clockedIn, setClockedIn] = useState(true);
    const [clockTime, setClockTime] = useState('08:58 AM');

    return (
        <div className="p-4 md:p-6 max-w-[1600px] mx-auto bg-[#f8f9fa] min-h-screen pb-20">
            {/* --- TOP WELCOME BANNER --- */}
            <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 rounded-xl p-6 text-white mb-6 shadow-md relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-white text-xl font-bold backdrop-blur-md">
                            RS
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl font-bold tracking-tight">Welcome, Robert Smith 👋</h1>
                                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-400/30 text-emerald-100 border border-emerald-300/40">
                                    Senior Lead Engineer
                                </span>
                            </div>
                            <p className="text-emerald-100/80 text-[13px] mt-1 flex items-center gap-2">
                                <span>Employee ID: <strong className="text-white">EMP-1001</strong></span>
                                <span>•</span>
                                <span>Department: <strong className="text-white">Engineering & Tech</strong></span>
                            </p>
                        </div>
                    </div>

                    {/* Clock-In / Clock-Out Widget */}
                    <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-lg border border-white/20 flex items-center gap-4">
                        <div>
                            <p className="text-[11px] text-emerald-100/70 font-medium">Today's Attendance</p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                <span className="text-[13px] font-bold text-white">Clocked In at {clockTime}</span>
                            </div>
                        </div>
                        <Button 
                            onClick={() => setClockedIn(!clockedIn)}
                            className={`h-9 text-[12.5px] px-4 font-bold shadow-sm transition-all ${
                                clockedIn 
                                ? 'bg-red-500/90 hover:bg-red-600 text-white' 
                                : 'bg-emerald-400 text-emerald-950 hover:bg-emerald-300'
                            }`}
                        >
                            {clockedIn ? 'Clock Out' : 'Clock In'}
                        </Button>
                    </div>
                </div>
            </div>

            {/* --- STAT CARDS GRID --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-[12px] font-semibold text-slate-500 mb-1">Leave Balance</p>
                        <h3 className="text-2xl font-bold text-slate-900">14 Days</h3>
                        <p className="text-[11px] text-emerald-600 font-medium mt-1">2 Casual • 12 Annual remaining</p>
                    </div>
                    <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Calendar size={20} />
                    </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-[12px] font-semibold text-slate-500 mb-1">Monthly Attendance</p>
                        <h3 className="text-2xl font-bold text-slate-900">96.8%</h3>
                        <p className="text-[11px] text-blue-600 font-medium mt-1">22 Present • 0 Late entry</p>
                    </div>
                    <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        <UserCheck size={20} />
                    </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-[12px] font-semibold text-slate-500 mb-1">Last Payslip (June)</p>
                        <h3 className="text-2xl font-bold text-slate-900">$6,200</h3>
                        <button className="text-[11px] text-indigo-600 font-bold hover:underline mt-1 flex items-center gap-1">
                            <Download size={11} /> Download Paystub
                        </button>
                    </div>
                    <div className="w-11 h-11 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <DollarSign size={20} />
                    </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-[12px] font-semibold text-slate-500 mb-1">KPI Performance Rating</p>
                        <h3 className="text-2xl font-bold text-slate-900">4.8 / 5.0</h3>
                        <p className="text-[11px] text-amber-600 font-medium mt-1">H1 Review: Outstanding</p>
                    </div>
                    <div className="w-11 h-11 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                        <Award size={20} />
                    </div>
                </div>
            </div>

            {/* --- TWO COLUMN LAYOUT --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left Column (2 Cols wide): Quick Actions & My Tasks */}
                <div className="lg:col-span-2 space-y-6">
                    
                    {/* Quick Employee Actions */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="text-[15px] font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Activity size={17} className="text-emerald-600" />
                            Employee Quick Self-Service Actions
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button className="p-3.5 bg-slate-50 hover:bg-emerald-50/60 border border-slate-200 hover:border-emerald-200 rounded-lg flex flex-col items-center text-center transition-all group">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <Send size={16} />
                                </div>
                                <span className="text-[12.5px] font-bold text-slate-800">Apply Leave</span>
                                <span className="text-[11px] text-slate-500 mt-0.5">Submit request</span>
                            </button>

                            <button className="p-3.5 bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-200 rounded-lg flex flex-col items-center text-center transition-all group">
                                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <Clock size={16} />
                                </div>
                                <span className="text-[12.5px] font-bold text-slate-800">Request Overtime</span>
                                <span className="text-[11px] text-slate-500 mt-0.5">Log extra hours</span>
                            </button>

                            <button className="p-3.5 bg-slate-50 hover:bg-purple-50/60 border border-slate-200 hover:border-purple-200 rounded-lg flex flex-col items-center text-center transition-all group">
                                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <FileText size={16} />
                                </div>
                                <span className="text-[12.5px] font-bold text-slate-800">Tax & Salary Slip</span>
                                <span className="text-[11px] text-slate-500 mt-0.5">Download documents</span>
                            </button>

                            <button className="p-3.5 bg-slate-50 hover:bg-amber-50/60 border border-slate-200 hover:border-amber-200 rounded-lg flex flex-col items-center text-center transition-all group">
                                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <Shield size={16} />
                                </div>
                                <span className="text-[12.5px] font-bold text-slate-800">HR Helpdesk</span>
                                <span className="text-[11px] text-slate-500 mt-0.5">Submit query</span>
                            </button>
                        </div>
                    </div>

                    {/* Recent Leave Requests Status */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[15px] font-bold text-slate-800">My Recent Leave Requests</h3>
                            <button className="text-[12px] text-emerald-600 font-bold hover:underline flex items-center gap-1">
                                View History <ChevronRight size={14} />
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-50 border-y border-slate-200/80">
                                        <th className="py-2.5 px-3 text-[11px] font-bold text-slate-600 uppercase">Leave Type</th>
                                        <th className="py-2.5 px-3 text-[11px] font-bold text-slate-600 uppercase">Dates</th>
                                        <th className="py-2.5 px-3 text-[11px] font-bold text-slate-600 uppercase">Duration</th>
                                        <th className="py-2.5 px-3 text-[11px] font-bold text-slate-600 uppercase">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-100 text-[12.5px]">
                                        <td className="py-3 px-3 font-semibold text-slate-800">Annual Leave</td>
                                        <td className="py-3 px-3 text-slate-600">Jul 12, 2026 - Jul 16, 2026</td>
                                        <td className="py-3 px-3 font-medium text-slate-700">5 Days</td>
                                        <td className="py-3 px-3">
                                            <span className="px-2 py-0.5 text-[11px] font-bold bg-emerald-100 text-emerald-700 rounded-full">Approved</span>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-slate-100 text-[12.5px]">
                                        <td className="py-3 px-3 font-semibold text-slate-800">Casual Leave</td>
                                        <td className="py-3 px-3 text-slate-600">Jun 02, 2026</td>
                                        <td className="py-3 px-3 font-medium text-slate-700">1 Day</td>
                                        <td className="py-3 px-3">
                                            <span className="px-2 py-0.5 text-[11px] font-bold bg-emerald-100 text-emerald-700 rounded-full">Approved</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Column: Notices & Holidays */}
                <div className="space-y-6">
                    
                    {/* Notice Board */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="text-[15px] font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Bell size={17} className="text-amber-500" />
                            Company Notice Board
                        </h3>
                        <div className="space-y-3.5">
                            <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200/70">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-200/60 px-1.5 py-0.5 rounded">Announcement</span>
                                <h4 className="text-[13px] font-bold text-slate-900 mt-1">Mid-Year Performance Review 2026</h4>
                                <p className="text-[11.5px] text-slate-600 mt-1 leading-snug">
                                    All department managers are requested to complete self-appraisals by July 30.
                                </p>
                                <span className="text-[10.5px] text-slate-400 block mt-2">Posted on: July 20, 2026</span>
                            </div>

                            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-1.5 py-0.5 rounded">IT Policy</span>
                                <h4 className="text-[13px] font-bold text-slate-900 mt-1">Mandatory Security Update</h4>
                                <p className="text-[11.5px] text-slate-600 mt-1 leading-snug">
                                    2FA authentication is now required across all employee portal accounts.
                                </p>
                                <span className="text-[10.5px] text-slate-400 block mt-2">Posted on: July 15, 2026</span>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Company Holidays */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="text-[15px] font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Briefcase size={17} className="text-indigo-600" />
                            Upcoming Holidays
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-2.5 rounded-md bg-slate-50">
                                <div>
                                    <h4 className="text-[12.5px] font-bold text-slate-800">Independence Day</h4>
                                    <p className="text-[11px] text-slate-500">Public Holiday</p>
                                </div>
                                <span className="text-[12px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                                    Aug 15
                                </span>
                            </div>

                            <div className="flex items-center justify-between p-2.5 rounded-md bg-slate-50">
                                <div>
                                    <h4 className="text-[12.5px] font-bold text-slate-800">Company Foundation Day</h4>
                                    <p className="text-[11px] text-slate-500">Company Holiday</p>
                                </div>
                                <span className="text-[12px] font-bold text-indigo-700 bg-indigo-50 px-2 py-1 rounded border border-indigo-200">
                                    Oct 10
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
