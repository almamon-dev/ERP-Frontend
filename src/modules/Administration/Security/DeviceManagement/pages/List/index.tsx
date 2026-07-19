import React from 'react';
import DataTable, { Column } from '@/components/tables/data-table';
import { Smartphone, Monitor, ShieldBan } from 'lucide-react';
import Button from '@/components/ui/button';

export default function DeviceManagementList() {
    const data = [
        { id: 1, name: 'John iPhone 13', user: 'John Doe', os: 'iOS 16', status: 'Trusted', lastSync: 'Today, 10:00 AM', type: 'mobile' },
        { id: 2, name: 'Admin MacBook Pro', user: 'Admin User', os: 'macOS Sonoma', status: 'Trusted', lastSync: 'Today, 09:15 AM', type: 'desktop' },
        { id: 3, name: 'Unknown Android', user: 'Jane Smith', os: 'Android 14', status: 'Pending Review', lastSync: 'Yesterday', type: 'mobile' },
    ];

    const columns: Column[] = [
        { 
            id: 'name', 
            label: 'Device',
            render: (item) => (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center shrink-0">
                        {item.type === 'desktop' ? <Monitor size={16} className="text-slate-600" /> : <Smartphone size={16} className="text-slate-600" />}
                    </div>
                    <span className="font-bold text-slate-800">{item.name}</span>
                </div>
            )
        },
        { id: 'user', label: 'Linked User' },
        { id: 'os', label: 'OS / Browser' },
        { 
            id: 'status', 
            label: 'Status',
            render: (item) => (
                <span className={`px-2.5 py-1 text-[12px] font-medium rounded-full ${item.status === 'Trusted' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {item.status}
                </span>
            )
        },
        { id: 'lastSync', label: 'Last Synced' },
    ];

    const renderActions = (item: any) => (
        <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 hover:border-red-200 flex items-center gap-1.5 h-8">
            <ShieldBan size={13} /> Revoke Access
        </Button>
    );

    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24">
            <div className="mb-6">
                <h1 className="text-[22px] font-bold text-slate-900">Device Management</h1>
                <p className="text-[14px] font-medium text-[#008060] mt-1">Manage and revoke trusted devices for system users.</p>
            </div>

            <DataTable 
                data={data} 
                columns={columns}
                searchPlaceholder="Search devices..."
                actions={renderActions}
            />
        </div>
    );
}
