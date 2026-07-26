import React from 'react';
import { Timer, RefreshCw, Activity, AlertCircle, PlayCircle } from 'lucide-react';
import Button from '@/components/ui/button';

export default function QueueSchedulerList() {
    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Queue & Scheduler</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Monitor background jobs and scheduled tasks.</p>
                </div>
                <Button variant="outline" size="sm" className="h-8 text-[12.5px] bg-white text-slate-700 flex items-center gap-1.5 border-slate-300">
                    <RefreshCw size={13} /> Refresh Stats
                </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <div className="bg-white rounded-md border border-slate-200 shadow-sm p-3 px-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Activity size={18} strokeWidth={2} />
                    </div>
                    <div>
                        <h3 className="text-[11.5px] font-semibold text-slate-500">Pending Jobs</h3>
                        <p className="text-[18px] font-bold text-slate-800 leading-tight">12</p>
                    </div>
                </div>
                <div className="bg-white rounded-md border border-slate-200 shadow-sm p-3 px-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                        <AlertCircle size={18} strokeWidth={2} />
                    </div>
                    <div>
                        <h3 className="text-[11.5px] font-semibold text-slate-500">Failed Jobs</h3>
                        <p className="text-[18px] font-bold text-slate-800 leading-tight">3</p>
                    </div>
                </div>
                <div className="bg-white rounded-md border border-slate-200 shadow-sm p-3 px-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <PlayCircle size={18} strokeWidth={2} />
                    </div>
                    <div>
                        <h3 className="text-[11.5px] font-semibold text-slate-500">Active Workers</h3>
                        <p className="text-[18px] font-bold text-slate-800 leading-tight">4</p>
                    </div>
                </div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                    <Timer size={16} className="text-[#008060]" />
                    <h3 className="text-[14px] font-bold text-slate-900">Recent Failed Jobs</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100">
                                <th className="p-2.5 px-4 text-[11.5px] font-bold text-slate-700 uppercase tracking-wider">Job ID</th>
                                <th className="p-2.5 px-4 text-[11.5px] font-bold text-slate-700 uppercase tracking-wider">Connection</th>
                                <th className="p-2.5 px-4 text-[11.5px] font-bold text-slate-700 uppercase tracking-wider">Queue</th>
                                <th className="p-2.5 px-4 text-[11.5px] font-bold text-slate-700 uppercase tracking-wider">Failed At</th>
                                <th className="p-2.5 px-4 text-[11.5px] font-bold text-slate-700 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                                <td className="p-2.5 px-4 text-[12.5px] font-mono text-slate-800 font-semibold">#9021</td>
                                <td className="p-2.5 px-4 text-[12.5px] text-slate-600">redis</td>
                                <td className="p-2.5 px-4">
                                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[11px] font-bold border border-blue-100">emails</span>
                                </td>
                                <td className="p-2.5 px-4 text-[12.5px] text-slate-500">10 mins ago</td>
                                <td className="p-2.5 px-4 text-right">
                                    <Button variant="outline" size="sm" className="h-7 text-[11.5px] px-2.5 bg-white">Retry Job</Button>
                                </td>
                            </tr>
                            <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                                <td className="p-2.5 px-4 text-[12.5px] font-mono text-slate-800 font-semibold">#9020</td>
                                <td className="p-2.5 px-4 text-[12.5px] text-slate-600">database</td>
                                <td className="p-2.5 px-4">
                                    <span className="px-2 py-0.5 bg-purple-50 text-purple-600 rounded-full text-[11px] font-bold border border-purple-100">reports</span>
                                </td>
                                <td className="p-2.5 px-4 text-[12.5px] text-slate-500">1 hour ago</td>
                                <td className="p-2.5 px-4 text-right">
                                    <Button variant="outline" size="sm" className="h-7 text-[11.5px] px-2.5 bg-white">Retry Job</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

