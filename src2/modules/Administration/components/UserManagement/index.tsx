import React from 'react';
import { Plus, Eye, Edit, Trash2 } from 'lucide-react';
import DataTable from '@/components/tables/data-table';

const mockUsers = [
    { id: 1, name: 'Alice Smith', email: 'alice@enterprise.com', role: 'Super Admin', department: 'IT', status: 'Active' },
    { id: 2, name: 'Bob Jones', email: 'bob@enterprise.com', role: 'HR Manager', department: 'Human Resources', status: 'Active' },
    { id: 3, name: 'Charlie Davis', email: 'charlie@enterprise.com', role: 'Sales Rep', department: 'Sales', status: 'Inactive' },
    { id: 4, name: 'Diana Prince', email: 'diana@enterprise.com', role: 'Accountant', department: 'Finance', status: 'Active' },
    { id: 5, name: 'Ethan Hunt', email: 'ethan@enterprise.com', role: 'Field Agent', department: 'Logistics', status: 'Active' },
];

const ALL_COLUMNS = [
    { id: 'user', label: 'User Details' },
    { id: 'role', label: 'Role' },
    { id: 'department', label: 'Department' },
    { id: 'status', label: 'Status' }
];

    const columns = [
        { 
            id: 'user', 
            label: 'User Details',
            render: (user: any) => (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e4f1ef] text-[#008060] flex items-center justify-center font-bold text-[12px]">
                        {user.name.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    <div>
                        <div className="font-bold text-[#202223] text-[13px]">{user.name}</div>
                        <div className="text-[12px] text-[#6d7175]">{user.email}</div>
                    </div>
                </div>
            )
        },
        { id: 'role', label: 'Role' },
        { id: 'department', label: 'Department' },
        { 
            id: 'status', 
            label: 'Status',
            render: (user: any) => (
                <span className={`inline-flex items-center px-2 py-0.5 rounded-[3px] text-[11px] font-bold ${
                    user.status === 'Active' ? 'bg-[#aee9d1] text-[#008060]' : 'bg-[#e4e5e7] text-[#202223]'
                }`}>
                    {user.status}
                </span>
            )
        }
    ];

    const renderActions = (user: any) => (
        <div className="flex items-center justify-end gap-1.5">
            <button className="w-[26px] h-[26px] flex items-center justify-center rounded-[3px] bg-[#008060] text-white hover:bg-[#006e52] transition-colors shadow-sm" title="View">
                <Eye size={14} strokeWidth={2.5} />
            </button>
            <button className="w-[26px] h-[26px] flex items-center justify-center rounded-[3px] bg-[#2962ff] text-white hover:bg-[#1e4bd8] transition-colors shadow-sm" title="Edit">
                <Edit size={14} strokeWidth={2.5} />
            </button>
            <button className="w-[26px] h-[26px] flex items-center justify-center rounded-[3px] bg-[#ff4d4f] text-white hover:bg-[#d9363e] transition-colors shadow-sm" title="Delete">
                <Trash2 size={14} strokeWidth={2.5} />
            </button>
        </div>
    );

    return (
        <div className="pb-8">
            {/* Page Header (Polaris Style) */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-[20px] font-bold text-[#202223] tracking-tight">User Management</h1>
                    <p className="text-[#6d7175] text-[13px] mt-0.5 font-medium">Manage system users, assign roles, and control access permissions.</p>
                </div>
                <button
                    className="px-4 py-1.5 bg-[#008060] text-white rounded-[3px] font-bold text-[12px] hover:bg-[#006e52] transition-all flex items-center gap-2 shadow-[0_1px_0_rgba(0,0,0,0.05)]"
                >
                    <Plus size={14} /> Add User
                </button>
            </div>

            <DataTable 
                data={mockUsers}
                columns={columns}
                searchPlaceholder="Search users by name or email..."
                actions={renderActions}
                onDeleteSelected={(ids) => console.log('Delete users:', ids)}
            />
        </div>
    );
}
