import React from 'react';
import DataTable, { Column } from '@/components/tables/data-table';
import Button from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function AuditLogsList() {
    const data = [
        { id: 101, user: 'System', event: 'Database Backup', old: 'N/A', new: 'backup_20260719.zip', time: '2026-07-19 00:00 AM' },
        { id: 102, user: 'Admin', event: 'Changed App Setting', old: 'Maintenance Mode: OFF', new: 'Maintenance Mode: ON', time: '2026-07-18 11:30 PM' },
        { id: 103, user: 'Admin', event: 'Assigned Role', old: 'User: Staff', new: 'User: Manager', time: '2026-07-18 09:15 AM' },
    ];

    const columns: Column[] = [
        { id: 'id', label: 'Audit ID', render: (item) => <span className="text-slate-400 font-mono text-[12px]">#{item.id}</span> },
        { id: 'user', label: 'Triggered By', render: (item) => <span className="font-medium text-slate-800">{item.user}</span> },
        { id: 'event', label: 'Event', render: (item) => <span className="font-medium text-[#008060]">{item.event}</span> },
        { id: 'changes', label: 'Changes', render: (item) => (
            <div className="text-[12px]">
                <p className="text-red-500 line-through mb-0.5">{item.old}</p>
                <p className="text-emerald-600 font-medium">{item.new}</p>
            </div>
        ) },
        { id: 'time', label: 'Timestamp' },
    ];

    return (
        <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Audit Logs</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Deep system-level auditing and data change tracking.</p>
                </div>
                <Button variant="outline" className="flex items-center gap-1.5 text-[13px] h-9 px-3.5">
                    <Download size={14} /> Export CSV
                </Button>
            </div>

            <DataTable 
                data={data} 
                columns={columns}
                searchPlaceholder="Search audit events..."
                compact
            />
        </div>
    );
}

