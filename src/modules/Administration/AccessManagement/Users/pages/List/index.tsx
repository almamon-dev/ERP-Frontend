import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Eye, Edit, Trash2, RotateCcw } from 'lucide-react';
import DataTable, { Column } from '@/components/tables/data-table';
import Button from '@/components/ui/button';

export default function UserList() {
    const navigate = useNavigate();
    
    // Mock Data
    const [data, setData] = React.useState([
        { id: 1, name: 'Sample User 1', status: 'Active', createdAt: '2026-07-10' },
        { id: 2, name: 'Sample User 2', status: 'Inactive', createdAt: '2026-07-12' },
    ]);
    
    const [statusFilter, setStatusFilter] = React.useState('All');

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
            <button onClick={() => navigate(`/administration/access/users/${item.id}`)} className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="View">
                <Eye size={15} strokeWidth={1.5} />
            </button>
            <button onClick={() => navigate(`/administration/access/users/${item.id}/edit`)} className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="Edit">
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

    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Users</h1>
                    <p className="text-[14px] font-medium text-[#008060] mt-1">Manage all system users and their accounts</p>
                </div>
                <Link to={`/administration/access/users/create`}>
                    <Button className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                        <Plus size={16} />
                        Add User
                    </Button>
                </Link>
            </div>

            <DataTable 
                data={filteredData} 
                columns={columns}
                searchPlaceholder="Search users..."
                actions={renderActions}
                onDeleteSelected={handleBulkDelete}
                filterContent={renderFilters}
            />
        </div>
    );
}
