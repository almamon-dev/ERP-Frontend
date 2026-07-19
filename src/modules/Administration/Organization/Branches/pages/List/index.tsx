import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Eye, Edit, Trash2, RotateCcw } from 'lucide-react';
import DataTable, { Column } from '@/components/tables/data-table';
import Button from '@/components/ui/button';

const mockBranches = Array.from({ length: 25 }).map((_, i) => {
    const statuses = ['Active', 'Active', 'Active', 'Inactive'];
    const cities = ['New York', 'London', 'Toronto', 'Sydney', 'Berlin', 'Singapore'];
    const types = ['Physical Store', 'Virtual Office', 'Warehouse'];
    const managers = ['John Doe', 'Jane Smith', 'Mike Ross', 'Rachel Zane'];
    const bgColors = ['0D8ABC', '4CAF50', 'F44336', 'FF9800', '9C27B0', '3F51B5'];
    
    return {
        id: i + 1,
        image: `https://ui-avatars.com/api/?name=Branch+${i+1}&background=${bgColors[i % bgColors.length]}&color=fff`,
        name: `Branch ${cities[i % cities.length]} ${i + 1}`,
        code: `BR-${(i + 1).toString().padStart(3, '0')}`,
        email: `branch${i+1}@enterprise.com`,
        phone: `+1 234 567 ${Math.floor(1000 + Math.random() * 9000)}`,
        type: types[i % types.length],
        city: cities[i % cities.length],
        manager: managers[Math.floor(Math.random() * managers.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        createdAt: `2026-07-${(Math.floor(Math.random() * 28) + 1).toString().padStart(2, '0')}`,
    };
});

export default function BranchList() {
    const navigate = useNavigate();
    const [branches, setBranches] = React.useState(mockBranches);
    const [statusFilter, setStatusFilter] = React.useState('All');
    const [typeFilter, setTypeFilter] = React.useState('All');
    const [cityFilter, setCityFilter] = React.useState('All');
    const [managerFilter, setManagerFilter] = React.useState('All');

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this branch?')) {
            setBranches(prev => prev.filter(b => b.id !== id));
        }
    };

    const handleBulkDelete = (ids: number[]) => {
        if (confirm(`Are you sure you want to delete ${ids.length} branches?`)) {
            setBranches(prev => prev.filter(b => !ids.includes(b.id)));
        }
    };

    const columns: Column[] = [
        {
            id: 'image',
            label: 'Image',
            render: (item) => (
                <div className="w-7 h-7 rounded-md overflow-hidden border border-gray-200">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
            )
        },
        {
            id: 'name',
            label: 'Branch Name',
            render: (item) => (
                <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-gray-900 leading-tight">{item.name}</span>
                    <span className="text-[13px] text-gray-500 leading-tight mt-0.5">{item.code}</span>
                </div>
            )
        },
        { id: 'type', label: 'Type' },
        { id: 'city', label: 'City' },
        { id: 'email', label: 'Email' },
        { id: 'phone', label: 'Phone' },
        { id: 'manager', label: 'Manager' },
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
            <button onClick={() => navigate(`/administration/organization/branches/${item.id}`)} className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="View">
                <Eye size={15} strokeWidth={1.5} />
            </button>
            <button onClick={() => navigate(`/administration/organization/branches/${item.id}/edit`)} className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="Edit">
                <Edit size={15} strokeWidth={1.5} />
            </button>
            <button onClick={() => handleDelete(item.id)} className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
                <Trash2 size={15} strokeWidth={1.5} />
            </button>
        </div>
    );

    const filteredBranches = branches.filter(b => {
        if (statusFilter !== 'All' && b.status !== statusFilter) return false;
        if (typeFilter !== 'All' && b.type !== typeFilter) return false;
        if (cityFilter !== 'All' && b.city !== cityFilter) return false;
        if (managerFilter !== 'All' && b.manager !== managerFilter) return false;
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
                <label className="block text-[13px] font-bold text-slate-700 mb-1">Type</label>
                <select 
                    value={typeFilter} 
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full h-[36px] px-2 bg-white border border-[#d1d1d1] rounded-[4px] text-[14px] text-[#202223] outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors"
                >
                    <option value="All">All Types</option>
                    <option value="Physical Store">Physical Store</option>
                    <option value="Virtual Office">Virtual Office</option>
                    <option value="Warehouse">Warehouse</option>
                </select>
            </div>
            <div className="w-full sm:w-[180px]">
                <label className="block text-[13px] font-bold text-slate-700 mb-1">City</label>
                <select 
                    value={cityFilter} 
                    onChange={(e) => setCityFilter(e.target.value)}
                    className="w-full h-[36px] px-2 bg-white border border-[#d1d1d1] rounded-[4px] text-[14px] text-[#202223] outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors"
                >
                    <option value="All">All Cities</option>
                    <option value="New York">New York</option>
                    <option value="London">London</option>
                    <option value="Toronto">Toronto</option>
                </select>
            </div>
            <div className="w-full sm:w-[180px]">
                <label className="block text-[13px] font-bold text-slate-700 mb-1">Manager</label>
                <select 
                    value={managerFilter} 
                    onChange={(e) => setManagerFilter(e.target.value)}
                    className="w-full h-[36px] px-2 bg-white border border-[#d1d1d1] rounded-[4px] text-[14px] text-[#202223] outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors"
                >
                    <option value="All">All Managers</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Jane Smith">Jane Smith</option>
                </select>
            </div>
            
            <div className="mt-5">
                <button 
                    onClick={() => { 
                        setStatusFilter('All'); 
                        setTypeFilter('All'); 
                        setCityFilter('All');
                        setManagerFilter('All');
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
                    <h1 className="text-[22px] font-bold text-slate-900">Branches</h1>
                    <p className="text-[14px] font-medium text-[#008060] mt-1">Manage all physical and virtual branches across the organization</p>
                </div>
                <Link to="/administration/organization/branches/create">
                    <Button className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                        <Plus size={16} />
                        Add Branch
                    </Button>
                </Link>
            </div>

            <DataTable 
                data={filteredBranches} 
                columns={columns}
                searchPlaceholder="Search branches by name, code or email..."
                actions={renderActions}
                onDeleteSelected={handleBulkDelete}
                filterContent={renderFilters}
            />
        </div>
    );
}
