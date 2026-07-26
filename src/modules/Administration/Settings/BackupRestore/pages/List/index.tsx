import React from 'react';
import DataTable, { Column } from '@/components/tables/data-table';
import { Download, RefreshCw, Plus } from 'lucide-react';
import Button from '@/components/ui/button';

export default function BackupRestoreList() {
    const data = [
        { id: 1, name: 'auto_backup_2026_07_18.zip', size: '245 MB', type: 'Database + Files', date: '2026-07-18 02:00 AM', status: 'Success' },
        { id: 2, name: 'manual_backup_v1.2.zip', size: '120 MB', type: 'Database Only', date: '2026-07-15 04:30 PM', status: 'Success' },
        { id: 3, name: 'auto_backup_2026_07_14.zip', size: '240 MB', type: 'Database + Files', date: '2026-07-14 02:00 AM', status: 'Failed' },
    ];

    const columns: Column[] = [
        { id: 'name', label: 'Backup File', render: (item) => <span className="font-mono text-slate-800 text-[12.5px] font-semibold">{item.name}</span> },
        { id: 'size', label: 'Size', render: (item) => <span className="text-[12.5px] text-slate-600">{item.size}</span> },
        { id: 'type', label: 'Content Type', render: (item) => <span className="text-[12.5px] text-slate-600">{item.type}</span> },
        { id: 'date', label: 'Date Created', render: (item) => <span className="text-[12.5px] text-slate-500">{item.date}</span> },
        { 
            id: 'status', 
            label: 'Status',
            render: (item) => (
                <span className={`px-2 py-0.5 text-[11.5px] font-bold rounded-full ${item.status === 'Success' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                    {item.status}
                </span>
            ) 
        },
    ];
    
    const renderActions = () => (
        <div className="flex gap-1.5 justify-center">
            <Button variant="outline" size="sm" className="h-7 text-[11.5px] px-2 gap-1 text-blue-600 border-blue-200 hover:bg-blue-50">
                <Download size={13} /> Download
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-[11.5px] px-2 gap-1 text-amber-600 border-amber-200 hover:bg-amber-50">
                <RefreshCw size={13} /> Restore
            </Button>
        </div>
    );

    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Backup & Restore</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Manage system backups and point-in-time restorations.</p>
                </div>
                <Button className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[13px] h-9 px-4">
                    <Plus size={15} /> Create Backup Now
                </Button>
            </div>
            <DataTable data={data} columns={columns} actions={renderActions} searchPlaceholder="Search backups..." compact />
        </div>
    );
}

