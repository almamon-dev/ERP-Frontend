import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Eye, Edit, Trash2, RotateCcw } from 'lucide-react';
import DataTable, { Column } from '@/components/tables/data-table';
import Button from '@/components/ui/button';

const mockBUs = Array.from({ length: 15 }).map((_, i) => {
    const statuses = ['Active', 'Active', 'Active', 'Inactive'];
    const types = ['Product Line', 'Service Delivery', 'Geographic Region', 'Shared Services'];
    const names = ['Enterprise Solutions', 'Consumer Electronics', 'Cloud Services', 'North America Region', 'EMEA Operations', 'Global Support'];
    
    return {
        id: i + 1,
        name: names[i % names.length],
        code: `BU-${(i + 1).toString().padStart(3, '0')}`,
        type: types[i % types.length],
        head: ['John Doe', 'Sarah Connor', 'Michael Chang', 'Emma Watson'][i % 4],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        departments: Math.floor(Math.random() * 8) + 1,
        employees: Math.floor(Math.random() * 500) + 50,
    };
});

export default function BusinessUnitList() {
    const navigate = useNavigate();
    const [units, setUnits] = React.useState(mockBUs);
    const [statusFilter, setStatusFilter] = React.useState('All');
    const [typeFilter, setTypeFilter] = React.useState('All');

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this business unit?')) {
            setUnits(prev => prev.filter(u => u.id !== id));
        }
    };

    const handleBulkDelete = (ids: number[]) => {
        if (confirm(`Are you sure you want to delete ${ids.length} business units?`)) {
            setUnits(prev => prev.filter(u => !ids.includes(u.id)));
        }
    };

    const columns: Column[] = [
        {
            id: 'name',
            label: 'Business Unit',
            render: (item) => (
                <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-gray-900 leading-tight">{item.name}</span>
                    <span className="text-[13px] text-gray-500 leading-tight mt-0.5">{item.code}</span>
                </div>
            )
        },
        { id: 'type', label: 'BU Type' },
        { id: 'head', label: 'BU Head' },
        { id: 'departments', label: 'Depts' },
        { id: 'employees', label: 'Employees' },
        {
            id: 'status',
            label: 'Status',
            render: (item) => (
                <span className={`px-2.5 py-1 text-[12px] font-medium rounded-full ${item.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {item.status}
                </span>
            )
        },
    ];

    const renderActions = (item: any) => (
        <div className="flex items-center justify-center gap-1">
            <button onClick={() => navigate(`/administration/organization/business-units/${item.id}`)} className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="View">
                <Eye size={15} strokeWidth={1.5} />
            </button>
            <button onClick={() => navigate(`/administration/organization/business-units/${item.id}/edit`)} className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="Edit">
                <Edit size={15} strokeWidth={1.5} />
            </button>
            <button onClick={() => handleDelete(item.id)} className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
                <Trash2 size={15} strokeWidth={1.5} />
            </button>
        </div>
    );

    const filteredUnits = units.filter(u => {
        if (statusFilter !== 'All' && u.status !== statusFilter) return false;
        if (typeFilter !== 'All' && u.type !== typeFilter) return false;
        return true;
    });

    const renderFilters = (
        <div className="flex flex-wrap items-center gap-4">
            <div className="w-full sm:w-[180px]">
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
            <div className="w-full sm:w-[180px]">
                <label className="block text-[13px] font-bold text-slate-700 mb-1">BU Type</label>
                <select 
                    value={typeFilter} 
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full h-[36px] px-2 bg-white border border-[#d1d1d1] rounded-[4px] text-[14px] text-[#202223] outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors"
                >
                    <option value="All">All Types</option>
                    <option value="Product Line">Product Line</option>
                    <option value="Service Delivery">Service Delivery</option>
                    <option value="Geographic Region">Geographic Region</option>
                    <option value="Shared Services">Shared Services</option>
                </select>
            </div>
            
            <div className="mt-5">
                <button 
                    onClick={() => { 
                        setStatusFilter('All'); 
                        setTypeFilter('All'); 
                    }} 
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
                    <h1 className="text-[22px] font-bold text-slate-900">Business Units</h1>
                    <p className="text-[14px] font-medium text-[#008060] mt-1">Manage strategic business units, divisions, and operational regions</p>
                </div>
                <Link to="/administration/organization/business-units/create">
                    <Button className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                        <Plus size={16} />
                        Add Business Unit
                    </Button>
                </Link>
            </div>

            <DataTable 
                data={filteredUnits} 
                columns={columns}
                searchPlaceholder="Search business units by name or code..."
                actions={renderActions}
                onDeleteSelected={handleBulkDelete}
                filterContent={renderFilters}
            />
        </div>
    );
}
