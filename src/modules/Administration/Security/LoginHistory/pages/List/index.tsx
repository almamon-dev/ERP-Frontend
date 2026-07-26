import React from 'react';
import DataTable, { Column } from '@/components/tables/data-table';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function LoginHistoryList() {
    const data = [
        { id: 1, user: 'admin@erp.com', ip: '192.168.1.1', location: 'Dhaka, BD', status: 'Success', time: '2026-07-19 09:30 AM' },
        { id: 2, user: 'admin@erp.com', ip: '192.168.1.1', location: 'Dhaka, BD', status: 'Failed', time: '2026-07-19 09:28 AM', reason: 'Invalid Password' },
        { id: 3, user: 'john@erp.com', ip: '10.0.0.45', location: 'Chittagong, BD', status: 'Success', time: '2026-07-18 04:15 PM' },
        { id: 4, user: 'unknown', ip: '45.22.11.9', location: 'London, UK', status: 'Blocked', time: '2026-07-18 02:10 PM', reason: 'IP Blacklisted' },
    ];

    const columns: Column[] = [
        { id: 'user', label: 'User / Email', render: (item) => <span className="font-medium text-slate-800">{item.user}</span> },
        { id: 'ip', label: 'IP Address' },
        { id: 'location', label: 'Location' },
        { 
            id: 'status', 
            label: 'Status',
            render: (item) => (
                <div className="flex items-center gap-1.5">
                    {item.status === 'Success' ? (
                        <CheckCircle2 size={14} className="text-emerald-500" />
                    ) : (
                        <XCircle size={14} className="text-red-500" />
                    )}
                    <span className={`text-[12px] font-bold ${item.status === 'Success' ? 'text-emerald-700' : 'text-red-700'}`}>
                        {item.status}
                    </span>
                    {item.reason && <span className="text-slate-400 text-[11px] font-normal ml-1">({item.reason})</span>}
                </div>
            )
        },
        { id: 'time', label: 'Date & Time' },
    ];

    return (
        <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-20">
            <div className="mb-5">
                <h1 className="text-[20px] font-bold text-slate-900">Login History</h1>
                <p className="text-[13px] font-medium text-[#008060] mt-0.5">Audit trail of all login attempts across the system.</p>
            </div>

            <DataTable 
                data={data} 
                columns={columns}
                searchPlaceholder="Search history..."
            />
        </div>
    );
}

