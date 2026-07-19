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
        { id: 'name', label: 'Backup File', render: (item) => <span className="font-mono text-slate-800 text-[13px]">{item.name}</span> },
        { id: 'size', label: 'Size' },
        { id: 'type', label: 'Content Type' },
        { id: 'date', label: 'Date Created' },
        { 
            id: 'status', 
            label: 'Status',
            render: (item) => (
                <span className={`px-2 py-1 text-[12px] font-medium rounded-md ${item.status === 'Success' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                    {item.status}
                </span>
            ) 
        },
    ];
    
    const renderActions = () => (
        <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1 text-blue-600 border-blue-200 hover:bg-blue-50">
                <Download size={14} /> Download
            </Button>
            <Button variant="outline" size="sm" className="h-8 gap-1 text-amber-600 border-amber-200 hover:bg-amber-50">
                <RefreshCw size={14} /> Restore
            </Button>
        </div>
    );

    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Backup & Restore</h1>
                    <p className="text-[14px] font-medium text-[#008060] mt-1">Manage system backups and point-in-time restorations.</p>
                </div>
                <Button className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                    <Plus size={16} /> Create Backup Now
                </Button>
            </div>
            <DataTable data={data} columns={columns} actions={renderActions} searchPlaceholder="Search backups..." />
        </div>
    );
}
