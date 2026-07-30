import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import { Column } from '@/components/tables/data-table';

export const getTableColumns = (): Column[] => [
        { id: 'id', label: 'ID', render: (item) => <span className="text-slate-400 font-mono text-[12px]">#{item.id}</span> },
        { id: 'name', label: 'Grade / Scale', render: (item: any) => <span className="font-bold text-slate-800 text-[13px]">{item.name}</span> },
        { id: 'basic', label: 'Basic Percentage', render: (item: any) => <span className="font-bold text-slate-800 text-[13px]">{item.basic}</span> },
        {
            id: 'status',
            label: 'Status',
            render: (item) => (
                <span className={`px-2 py-0.5 text-[11.5px] font-bold rounded-full ${item.status === 'Active' || item.status === 'Approved' || item.status === 'Completed' || item.status === 'Present' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {item.status || 'Active'}
                </span>
            )
        },
        { id: 'createdAt', label: 'Created At' },
    ];

export const getRenderActions = (setEditItem: (item: any) => void, handleDelete: (id: number) => void) => (item: any) => (
        <div className="flex items-center justify-center gap-1">
            <button onClick={() => setEditItem(item)} className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="Edit">
                <Edit size={14} strokeWidth={1.5} />
            </button>
            <button onClick={() => handleDelete(item.id)} className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
                <Trash2 size={14} strokeWidth={1.5} />
            </button>
        </div>
    );
