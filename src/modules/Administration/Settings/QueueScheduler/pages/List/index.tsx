import React from 'react';
import { Timer, RefreshCw, Activity, AlertCircle, PlayCircle } from 'lucide-react';
import Button from '@/components/ui/button';

export default function QueueSchedulerList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Queue & Scheduler</h1>
                    <p className="text-[14px] font-medium text-slate-500 mt-1">Monitor background jobs and scheduled tasks.</p>
                </div>
                <Button variant="outline" size="sm" className="h-[32px] text-[13px] bg-white text-slate-700 flex items-center gap-2">
                    <RefreshCw size={14} /> Refresh Stats
                </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                <div className="bg-white rounded-md border border-slate-200 shadow-sm p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Activity size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="text-[13px] font-medium text-slate-500">Pending Jobs</h3>
                        <p className="text-[24px] font-bold text-slate-800 mt-0.5">12</p>
                    </div>
                </div>
                <div className="bg-white rounded-md border border-slate-200 shadow-sm p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                        <AlertCircle size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="text-[13px] font-medium text-slate-500">Failed Jobs</h3>
                        <p className="text-[24px] font-bold text-slate-800 mt-0.5">3</p>
                    </div>
                </div>
                <div className="bg-white rounded-md border border-slate-200 shadow-sm p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                        <PlayCircle size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="text-[13px] font-medium text-slate-500">Active Workers</h3>
                        <p className="text-[24px] font-bold text-slate-800 mt-0.5">4</p>
                    </div>
                </div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                    <Timer size={18} className="text-slate-600" />
                    <h3 className="text-[15px] font-bold text-slate-900">Recent Failed Jobs</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100">
                                <th className="p-3.5 px-5 text-[12px] font-bold text-slate-700">Job ID</th>
                                <th className="p-3.5 px-5 text-[12px] font-bold text-slate-700">Connection</th>
                                <th className="p-3.5 px-5 text-[12px] font-bold text-slate-700">Queue</th>
                                <th className="p-3.5 px-5 text-[12px] font-bold text-slate-700">Failed At</th>
                                <th className="p-3.5 px-5 text-[12px] font-bold text-slate-700 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                                <td className="p-3.5 px-5 text-[13px] font-mono text-slate-700">#9021</td>
                                <td className="p-3.5 px-5 text-[13px] text-slate-600">redis</td>
                                <td className="p-3.5 px-5">
                                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[11px] font-medium border border-blue-100">emails</span>
                                </td>
                                <td className="p-3.5 px-5 text-[13px] text-slate-500">10 mins ago</td>
                                <td className="p-3.5 px-5 text-right">
                                    <Button variant="outline" size="sm" className="h-[28px] text-[12px] bg-white">Retry Job</Button>
                                </td>
                            </tr>
                            <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                                <td className="p-3.5 px-5 text-[13px] font-mono text-slate-700">#9020</td>
                                <td className="p-3.5 px-5 text-[13px] text-slate-600">database</td>
                                <td className="p-3.5 px-5">
                                    <span className="px-2 py-0.5 bg-purple-50 text-purple-600 rounded text-[11px] font-medium border border-purple-100">reports</span>
                                </td>
                                <td className="p-3.5 px-5 text-[13px] text-slate-500">1 hour ago</td>
                                <td className="p-3.5 px-5 text-right">
                                    <Button variant="outline" size="sm" className="h-[28px] text-[12px] bg-white">Retry Job</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
