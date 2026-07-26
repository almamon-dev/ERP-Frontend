import React, { useState } from 'react';
import { Trash2, Monitor, Smartphone, Globe } from 'lucide-react';
import DataTable, { Column } from '@/components/tables/data-table';
import Button from '@/components/ui/button';

export default function ActiveSessionsList() {
    const [data, setData] = useState([
        { id: 1, user: 'Admin User', email: 'admin@erp.com', ip: '192.168.1.1', device: 'Windows 11 / Chrome', type: 'Desktop', lastActive: '2 mins ago' },
        { id: 2, user: 'John Doe', email: 'john@erp.com', ip: '10.0.0.45', device: 'iOS 16 / Safari', type: 'Mobile', lastActive: '15 mins ago' },
        { id: 3, user: 'Jane Smith', email: 'jane@erp.com', ip: '172.16.0.8', device: 'MacOS / Firefox', type: 'Desktop', lastActive: '1 hour ago' },
    ]);

    const handleTerminate = (id: number) => {
        if (confirm('Are you sure you want to terminate this session? The user will be logged out immediately.')) {
            setData(prev => prev.filter(c => c.id !== id));
        }
    };

    const columns: Column[] = [
        { 
            id: 'user', 
            label: 'User',
            render: (item) => (
                <p className="font-bold text-slate-800">{item.user}</p>
            )
        },
        { id: 'email', label: 'Email' },
        { id: 'ip', label: 'IP Address' },
        { 
            id: 'device', 
            label: 'Device / Browser',
            render: (item) => (
                <div className="flex items-center gap-2">
                    {item.type === 'Desktop' ? <Monitor size={14} className="text-slate-400" /> : <Smartphone size={14} className="text-slate-400" />}
                    <span>{item.device}</span>
                </div>
            )
        },
        { id: 'lastActive', label: 'Last Active' },
    ];

    const renderActions = (item: any) => (
        <Button 
            variant="outline" 
            size="sm" 
            className="text-red-600 hover:bg-red-50 hover:border-red-200 flex items-center gap-1.5 h-8"
            onClick={() => handleTerminate(item.id)}
        >
            <Trash2 size={13} />
            Terminate
        </Button>
    );

    return (
        <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Active Sessions</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Monitor and manage users currently logged into the system.</p>
                </div>
                <Button variant="outline" className="text-red-600 hover:bg-red-50 border-red-200 text-[13px] h-9 px-3.5 flex items-center gap-1.5">
                    Terminate All Other Sessions
                </Button>
            </div>

            <DataTable 
                data={data} 
                columns={columns}
                searchPlaceholder="Search by user or IP..."
                actions={renderActions}
                compact
            />
        </div>
    );
}

