import React from 'react';
import { Terminal, Download } from 'lucide-react';
import Button from '@/components/ui/button';
import TabHeader from '@/components/ui/tab-header';

export default function SystemLogsList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                   
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">System Logs</h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">View application error and debug logs.</p>
                    </div>
                </div>
                <Button variant="outline" size="sm" className="h-[32px] text-[14px] flex items-center gap-2">
                    <Download size={14} />
                    Download Logs
                </Button>
            </div>
            
            <div className="bg-[#1e1e1e] border border-slate-800 rounded-md shadow-sm w-full p-4 overflow-x-auto">
                <div className="flex items-center gap-2 mb-4 px-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-slate-400 text-[12px] font-mono ml-2">laravel.log</span>
                </div>
                <pre className="text-[13px] text-green-400 font-mono leading-relaxed px-2">
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
