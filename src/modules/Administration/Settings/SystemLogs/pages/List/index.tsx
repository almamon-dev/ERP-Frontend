import React from 'react';
import { Terminal, Download } from 'lucide-react';
import Button from '@/components/ui/button';

export default function SystemLogsList() {
    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">System Logs</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">View application error and debug logs.</p>
                </div>
                <Button variant="outline" size="sm" className="h-8 text-[12.5px] px-3 flex items-center gap-1.5 bg-white border-slate-300">
                    <Download size={13} />
                    Download Logs
                </Button>
            </div>
            
            <div className="bg-[#1e1e1e] border border-slate-800 rounded-md shadow-sm w-full p-3.5 overflow-x-auto">
                <div className="flex items-center gap-1.5 mb-3 px-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    <span className="text-slate-400 text-[11.5px] font-mono ml-2">laravel.log</span>
                </div>
                <pre className="text-[12px] text-green-400 font-mono leading-relaxed px-1">
                    [2026-07-19 10:14:22] local.INFO: Application cache cleared successfully. <br/>
                    [2026-07-19 10:15:01] local.ERROR: Connection refused [tcp://127.0.0.1:6379] <br/>
                    [2026-07-19 10:15:02] local.WARNING: Failed to send email to admin@example.com <br/>
                    [2026-07-19 10:25:55] local.INFO: User ID 1 authenticated via web guard. <br/>
                    [2026-07-19 10:30:12] local.DEBUG: Query time: 4.5ms for SELECT * FROM users <br/>
                </pre>
            </div>
        </div>
    );
}

