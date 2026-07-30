import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable, { Column } from '@/components/tables/data-table';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import FormLabel from '@/components/ui/label';
import { INITIAL_DATA } from '../constants/mockData';
import { PageStatusFilter } from '../components/PageStatusFilter';
import { getTableColumns, getRenderActions } from '../constants/tableColumns';
import { FormModals } from '../components/FormModals';

export default function JobOpeningsPage() {
    const [data, setData] = useState<any[]>(INITIAL_DATA);
    const [statusFilter, setStatusFilter] = useState('All');
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editItem, setEditItem] = useState<any>(null);

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this record?')) {
            setData(prev => prev.filter(c => c.id !== id));
        }
    };

    const handleBulkDelete = (ids: number[]) => {
        if (confirm(`Are you sure you want to delete ${ids.length} records?`)) {
            setData(prev => prev.filter(c => !ids.includes(c.id)));
        }
    };

    const renderActions = (item: any) => (
        <div className="flex items-center justify-center gap-1">
            <button onClick={() => setEditItem(item)} className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="Edit">
                <Edit size={14} strokeWidth={1.5} />
            </button>
            <button onClick={() => handleDelete(item.id)} className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
                <Trash2 size={14} strokeWidth={1.5} />
            </button>
        </div>
    );

    const filteredData = data.filter(c => {
        if (statusFilter !== 'All' && c.status !== statusFilter) return false;
        return true;
    });

        
    return (
        <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Job Openings</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Manage active job circulars, positions, and vacancy requirements.</p>
                </div>
                <Button 
                    onClick={() => setIsCreateModalOpen(true)} 
                    className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[13px] h-9 px-4"
                >
                    <Plus size={15} />
                    Add Job Openings
                </Button>
            </div>

            <DataTable 
                data={filteredData} 
                columns={getTableColumns()}
                searchPlaceholder="Search job circulars..."
                actions={getRenderActions(setEditItem, handleDelete)}
                onDeleteSelected={handleBulkDelete}
                filterContent={<PageStatusFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />}
                compact
            />

            <FormModals title="Job Openings" isCreateOpen={isCreateModalOpen} onCloseCreate={() => setIsCreateModalOpen(false)} editItem={editItem} onCloseEdit={() => setEditItem(null)} />
        </div>
    );
}
