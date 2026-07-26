import React from 'react';
import DataTable, { Column } from '@/components/tables/data-table';
import { FileEdit, PlusSquare, Trash2 } from 'lucide-react';

export default function ActivityLogsList() {
    const data = [
        { id: 1, user: 'Admin', action: 'Created User', module: 'Access Management', target: 'John Doe', time: '2026-07-19 10:15 AM', type: 'create' },
        { id: 2, user: 'John Doe', action: 'Updated Policy', module: 'Security', target: 'Global Password Policy', time: '2026-07-19 09:45 AM', type: 'update' },
        { id: 3, user: 'Admin', action: 'Deleted Role', module: 'Access Management', target: 'Guest', time: '2026-07-18 11:20 AM', type: 'delete' },
    ];

    const getIcon = (type: string) => {
        switch(type) {
            case 'create': return <PlusSquare size={14} className="text-blue-500" />;
            case 'update': return <FileEdit size={14} className="text-emerald-500" />;
            case 'delete': return <Trash2 size={14} className="text-red-500" />;
            default: return null;
        }
    };

    const columns: Column[] = [
        { id: 'user', label: 'User', render: (item) => <span className="font-bold text-slate-800">{item.user}</span> },
        { 
            id: 'action', 
            label: 'Action',
            render: (item) => (
                <div className="flex items-center gap-2">
                    {getIcon(item.type)}
                    <span className="font-medium text-slate-700">{item.action}</span>
                </div>
            )
        },
        { id: 'module', label: 'Module', render: (item) => <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[11px] font-medium">{item.module}</span> },
        { id: 'target', label: 'Target Record', render: (item) => <span className="text-slate-600">{item.target}</span> },
        { id: 'time', label: 'Date & Time' },
    ];

    return (
        <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-20">
            <div className="mb-5">
                <h1 className="text-[20px] font-bold text-slate-900">Activity Logs</h1>
                <p className="text-[13px] font-medium text-[#008060] mt-0.5">Track user actions and modifications across the system.</p>
            </div>

            <DataTable 
                data={data} 
                columns={columns}
                searchPlaceholder="Search logs..."
            />
        </div>
    );
}

