import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Building2, MoreVertical, Edit, Eye, Trash2, RotateCcw } from 'lucide-react';
import DataTable, { Column } from '@/components/tables/data-table';
import Button from '@/components/ui/button';

const mockCompanies = Array.from({ length: 25 }).map((_, i) => {
    const statuses = ['Active', 'Active', 'Active', 'Inactive'];
    const countries = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'Singapore'];
    const cities = ['New York', 'London', 'Toronto', 'Sydney', 'Berlin', 'Singapore'];
    const creators = ['Admin', 'Super Admin', 'System'];
    const bgColors = ['0D8ABC', '4CAF50', 'F44336', 'FF9800', '9C27B0', '3F51B5'];
    
    return {
        id: i + 1,
        logo: `https://ui-avatars.com/api/?name=Company+${i+1}&background=${bgColors[i % bgColors.length]}&color=fff`,
        name: `Global Enterprise ${i + 1} Ltd.`,
        code: `CMP-${(i + 1).toString().padStart(3, '0')}`,
        email: `contact@enterprise${i+1}.com`,
        phone: `+1 234 567 ${Math.floor(1000 + Math.random() * 9000)}`,
        website: `www.enterprise${i+1}.com`,
        taxNumber: `TAX-${Math.floor(100000 + Math.random() * 900000)}`,
        country: countries[i % countries.length],
        city: cities[i % cities.length],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        createdBy: creators[Math.floor(Math.random() * creators.length)],
        createdAt: `2026-07-${(Math.floor(Math.random() * 28) + 1).toString().padStart(2, '0')}`,
    };
});

export default function CompanyList() {
    const navigate = useNavigate();
    const [companies, setCompanies] = React.useState(mockCompanies);
    const [statusFilter, setStatusFilter] = React.useState('All');
    const [countryFilter, setCountryFilter] = React.useState('All');
    const [cityFilter, setCityFilter] = React.useState('All');
    const [createdByFilter, setCreatedByFilter] = React.useState('All');
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this company?')) {
            setCompanies(prev => prev.filter(c => c.id !== id));
        }
    };

    const handleBulkDelete = (ids: number[]) => {
        if (confirm(`Are you sure you want to delete ${ids.length} companies?`)) {
            setCompanies(prev => prev.filter(c => !ids.includes(c.id)));
        }
    };

    const columns: Column[] = [
        {
            id: 'logo',
            label: 'Logo',
            render: (item) => (
                <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-200">
                    <img src={item.logo} alt={item.name} className="w-full h-full object-cover" />
                </div>
            )
        },
        {
            id: 'name',
            label: 'Company Name',
            render: (item) => (
                <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-gray-900 leading-tight">{item.name}</span>
                    <span className="text-[13px] text-gray-500 leading-tight mt-0.5">{item.code}</span>
                </div>
            )
        },
        { id: 'email', label: 'Email' },
        { id: 'phone', label: 'Phone' },
        { id: 'taxNumber', label: 'Tax/VAT Number' },
        { id: 'country', label: 'Country' },
        { id: 'city', label: 'City' },
        {
            id: 'status',
            label: 'Status',
            render: (item) => (
                <span className={`px-2.5 py-1 text-[12px] font-medium rounded-full ${item.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {item.status}
                </span>
            )
        },
        { id: 'createdBy', label: 'Created By' },
        { id: 'createdAt', label: 'Created At' },
    ];

    const renderActions = (item: any) => (
        <div className="flex items-center justify-center gap-1">
            <button onClick={() => navigate(`/administration/organization/companies/${item.id}`)} className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="View">
                <Eye size={15} strokeWidth={1.5} />
            </button>
            <button onClick={() => navigate(`/administration/organization/companies/${item.id}/edit`)} className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="Edit">
                <Edit size={15} strokeWidth={1.5} />
            </button>
            <button onClick={() => handleDelete(item.id)} className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
                <Trash2 size={15} strokeWidth={1.5} />
            </button>
        </div>
    );

    const filteredCompanies = companies.filter(c => {
        if (statusFilter !== 'All' && c.status !== statusFilter) return false;
        if (countryFilter !== 'All' && c.country !== countryFilter) return false;
        if (cityFilter !== 'All' && c.city !== cityFilter) return false;
        if (createdByFilter !== 'All' && c.createdBy !== createdByFilter) return false;
        if (startDate && new Date(c.createdAt) < new Date(startDate)) return false;
        if (endDate && new Date(c.createdAt) > new Date(endDate)) return false;
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
            <div className="w-full sm:w-[200px]">
                <label className="block text-[13px] font-bold text-slate-700 mb-1">Country</label>
                <select 
                    value={countryFilter} 
                    onChange={(e) => setCountryFilter(e.target.value)}
                    className="w-full h-[36px] px-2 bg-white border border-[#d1d1d1] rounded-[4px] text-[14px] text-[#202223] outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors"
                >
                    <option value="All">All Countries</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="Singapore">Singapore</option>
                </select>
            </div>
            <div className="w-full sm:w-[200px]">
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
                    <option value="Sydney">Sydney</option>
                    <option value="Berlin">Berlin</option>
                    <option value="Singapore">Singapore</option>
                </select>
            </div>
            <div className="w-full sm:w-[200px]">
                <label className="block text-[13px] font-bold text-slate-700 mb-1">Created By</label>
                <select 
                    value={createdByFilter} 
                    onChange={(e) => setCreatedByFilter(e.target.value)}
                    className="w-full h-[36px] px-2 bg-white border border-[#d1d1d1] rounded-[4px] text-[14px] text-[#202223] outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors"
                >
                    <option value="All">All Users</option>
                    <option value="Admin">Admin</option>
                    <option value="Super Admin">Super Admin</option>
                    <option value="System">System</option>
                </select>
            </div>
            <div className="w-full sm:w-[150px]">
                <label className="block text-[13px] font-bold text-slate-700 mb-1">From Date</label>
                <input 
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full h-[36px] px-2 bg-white border border-[#d1d1d1] rounded-[4px] text-[14px] text-[#202223] outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors"
                />
            </div>
            <div className="w-full sm:w-[150px]">
                <label className="block text-[13px] font-bold text-slate-700 mb-1">To Date</label>
                <input 
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full h-[36px] px-2 bg-white border border-[#d1d1d1] rounded-[4px] text-[14px] text-[#202223] outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors"
                />
            </div>
            <div className="mt-5">
                <button 
                    onClick={() => { 
                        setStatusFilter('All'); 
                        setCountryFilter('All'); 
                        setCityFilter('All');
                        setCreatedByFilter('All');
                        setStartDate('');
                        setEndDate('');
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
                    <h1 className="text-[22px] font-bold text-slate-900">Companies</h1>
                    <p className="text-[14px] font-medium text-[#008060] mt-1">Manage all registered companies across the organization</p>
                </div>
                <Link to="/administration/organization/companies/create">
                    <Button className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                        <Plus size={16} />
                        Add Company
                    </Button>
                </Link>
            </div>

            <DataTable 
                data={filteredCompanies} 
                columns={columns}
                searchPlaceholder="Search companies by name, code or email..."
                actions={renderActions}
                onDeleteSelected={handleBulkDelete}
                filterContent={renderFilters}
            />
        </div>
    );
}
