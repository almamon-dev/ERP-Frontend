import React, { useState } from 'react';
import { Plus, Eye, Edit, Trash2, RotateCcw, Save } from 'lucide-react';
import DataTable, { Column } from '@/components/tables/data-table';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Switch from '@/components/ui/switch';
import Select from '@/components/ui/select';
import Modal from '@/components/modals/modal';
import FormLabel from '@/components/ui/label';

export default function RoleList() {
    const [data, setData] = useState([
        { id: 1, name: 'Sample Role 1', code: 'CODE_001', status: 'Active', createdAt: '2026-07-10' },
        { id: 2, name: 'Sample Role 2', code: 'CODE_002', status: 'Inactive', createdAt: '2026-07-12' },
    ]);
    
    const [statusFilter, setStatusFilter] = useState('All');
    
    // Modal states
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

    const columns: Column[] = [
        { id: 'id', label: 'ID' },
        { id: 'name', label: 'Name' },
        { id: 'code', label: 'Code' },
        {
            id: 'status',
            label: 'Status',
            render: (item) => (
                <span className={`px-2.5 py-1 text-[12px] font-medium rounded-full ${item.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {item.status}
                </span>
            )
        },
        { id: 'createdAt', label: 'Created At' },
    ];

    const renderActions = (item: any) => (
        <div className="flex items-center justify-center gap-1">
            <button onClick={() => setEditItem(item)} className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="Edit">
                <Edit size={15} strokeWidth={1.5} />
            </button>
            <button onClick={() => handleDelete(item.id)} className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
                <Trash2 size={15} strokeWidth={1.5} />
            </button>
        </div>
    );

    const filteredData = data.filter(c => {
        if (statusFilter !== 'All' && c.status !== statusFilter) return false;
        return true;
    });

    const renderFilters = (
        <div className="flex flex-wrap items-center gap-4">
            <div className="w-full sm:w-[200px]">
                <label className="block text-[13px] font-bold text-slate-700 mb-1">Status</label>
                <select 
                    value={statusFilter} 
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full h-[36px] px-2 bg-white border border-[#d1d1d1] rounded-[4px] text-[14px] text-[#202223] outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors"
                >
                    <option value="All">All Statuses</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>
            <div className="mt-5">
                <button 
                    onClick={() => setStatusFilter('All')} 
                    className="h-[36px] w-[36px] flex items-center justify-center bg-white border border-[#d1d1d1] text-[#6d7175] rounded-[4px] hover:border-[#008060] hover:text-[#008060] transition-all group outline-none shadow-sm"
                    title="Clear Filters"
                >
                    <RotateCcw size={14} className="group-hover:rotate-[-45deg] transition-transform" />
                </button>
            </div>
        </div>
    );
    
    // Reusable Form Content for Modals
    const FormContent = ({ isEdit = false }: { isEdit?: boolean }) => (
        <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                    <FormLabel required>Name</FormLabel>
                    <Input defaultValue={isEdit ? editItem?.name : ''} placeholder="Enter Role Name" />
                </div>
                <div className="col-span-2">
                    <FormLabel required>Code / Identifier</FormLabel>
                    <Input defaultValue={isEdit ? editItem?.code : ''} placeholder="e.g. CODE_001" />
                </div>
                <div className="col-span-2">
                    <FormLabel>Description</FormLabel>
                    <Textarea placeholder="Detailed description..." className="min-h-[80px]" />
                </div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-between">
                <div>
                    <h4 className="text-[13px] font-bold text-slate-800">Active Status</h4>
                    <p className="text-[12px] text-slate-500 mt-0.5">Is this role active in the system?</p>
                </div>
                <Switch defaultChecked={isEdit ? editItem?.status === 'Active' : true} />
            </div>
        </div>
    );

    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Roles</h1>
                    <p className="text-[14px] font-medium text-[#008060] mt-1">Manage system roles and configurations.</p>
                </div>
                <Button 
                    onClick={() => setIsCreateModalOpen(true)} 
                    className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white"
                >
                    <Plus size={16} />
                    Add Role
                </Button>
            </div>

            <DataTable 
                data={filteredData} 
                columns={columns}
                searchPlaceholder="Search roles..."
                actions={renderActions}
                onDeleteSelected={handleBulkDelete}
                filterContent={renderFilters}
            />

            {/* Create Modal */}
            <Modal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                title={`Create New $Role`}
                size="md"
                footer={
                    <>
                        <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>Cancel</Button>
                        <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-2 flex items-center">
                            <Save size={14} /> Save Role
                        </Button>
                    </>
                }
            >
                <FormContent />
            </Modal>
            
            {/* Edit Modal */}
            <Modal
                isOpen={!!editItem}
                onClose={() => setEditItem(null)}
                title={`Edit $Role`}
                size="md"
                footer={
                    <>
                        <Button variant="outline" onClick={() => setEditItem(null)}>Cancel</Button>
                        <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-2 flex items-center">
                            <Save size={14} /> Save Changes
                        </Button>
                    </>
                }
            >
                {editItem && <FormContent isEdit />}
            </Modal>
        </div>
    );
}
