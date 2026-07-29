import React, { useState } from 'react';
import { Plus, Edit, Trash2, RotateCcw, Save, Download, FileText } from 'lucide-react';
import DataTable, { Column } from '@/components/tables/data-table';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import Modal from '@/components/modals/modal';
import FormLabel from '@/components/ui/label';

export default function SalaryCertificateRequestsPage() {
    const [data, setData] = useState<any[]>([
        {
                "id": 1,
                "purpose": "Embassy Visa Application",
                "addressedTo": "Visa Officer, US Embassy",
                "issueDate": "2026-06-10",
                "status": "Issued",
                "createdAt": "2026-06-08"
        },
        {
                "id": 2,
                "purpose": "Home Loan Processing",
                "addressedTo": "Branch Manager, City Bank",
                "issueDate": "2026-07-22",
                "status": "Issued",
                "createdAt": "2026-07-20"
        }
]);
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

    const columns: Column[] = [
        { id: 'id', label: 'ID', render: (item) => <span className="text-slate-400 font-mono text-[12px]">#{item.id}</span> },
        { id: 'purpose', label: 'Certificate Purpose', render: (item: any) => <span className="font-bold text-slate-800 text-[13px]">{item.purpose}</span> },
        { id: 'addressedTo', label: 'Addressed To', render: (item: any) => <span className="font-bold text-slate-800 text-[13px]">{item.addressedTo}</span> },
        { id: 'issueDate', label: 'Issue Date', render: (item: any) => <span className="font-bold text-slate-800 text-[13px]">{item.issueDate}</span> },
        {
            id: 'status',
            label: 'Status',
            render: (item) => (
                <span className={`px-2 py-0.5 text-[11.5px] font-bold rounded-full ${item.status === 'Active' || item.status === 'Approved' || item.status === 'Present' || item.status === 'Generated' || item.status === 'Issued' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {item.status || 'Active'}
                </span>
            )
        },
        { id: 'createdAt', label: 'Created At' },
    ];

    const handleDownload = (item: any) => {
        alert(`Downloading Salary Certificate for ${item.purpose}`);
    };

    const renderActions = (item: any) => (
        <div className="flex items-center justify-center gap-1">
            {item.status === 'Issued' ? (
                <button 
                    onClick={() => handleDownload(item)} 
                    className="p-1.5 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-md transition-colors flex items-center gap-1 text-[11.5px] font-semibold cursor-pointer" 
                    title="Download Salary Certificate PDF"
                >
                    <Download size={14} strokeWidth={1.5} />
                    <span>PDF</span>
                </button>
            ) : item.status === 'Pending' ? (
                <>
                    <button onClick={() => setEditItem(item)} className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors cursor-pointer" title="Edit Request">
                        <Edit size={14} strokeWidth={1.5} />
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors cursor-pointer" title="Cancel Request">
                        <Trash2 size={14} strokeWidth={1.5} />
                    </button>
                </>
            ) : (
                <span className="text-[11.5px] text-slate-400 font-medium">—</span>
            )}
        </div>
    );

    const filteredData = data.filter(c => {
        if (statusFilter !== 'All' && c.status !== statusFilter) return false;
        return true;
    });

    const renderFilters = (
        <div className="flex flex-wrap items-center gap-4">
            <div className="w-full sm:w-[200px]">
                <label className="block text-[12px] font-bold text-slate-700 mb-1">Status</label>
                <select 
                    value={statusFilter} 
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full h-[32px] px-2 bg-white border border-[#d1d1d1] rounded-[3px] text-[12px] text-[#202223] outline-none focus:border-[#d1d1d1] focus:ring-0 transition-colors"
                >
                    <option value="All">All Statuses</option>
                    <option value="Active">Active</option>
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                </select>
            </div>
            <div className="mt-5">
                <button 
                    onClick={() => setStatusFilter('All')} 
                    className="h-[32px] w-[32px] flex items-center justify-center bg-white border border-[#d1d1d1] text-[#6d7175] rounded-[3px] hover:border-slate-400 transition-all group outline-none"
                    title="Clear Filters"
                >
                    <RotateCcw size={13} />
                </button>
            </div>
        </div>
    );
    
    const FormContent = ({ isEdit = false }: { isEdit?: boolean }) => (
        <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0">Certificate Purpose</FormLabel>
                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Input defaultValue={isEdit ? editItem?.purpose : ''} placeholder="e.g. Bank Loan Application / Visa Application" className="h-8 text-[12.5px]" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0">Addressed To</FormLabel>
                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Input defaultValue={isEdit ? editItem?.addressedTo : ''} placeholder="e.g. To Whom It May Concern / Bank Manager" className="h-8 text-[12.5px]" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0">Issue Date</FormLabel>
                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Input defaultValue={isEdit ? editItem?.issueDate : ''} placeholder="e.g. 2026-07-26" className="h-8 text-[12.5px]" />
                </div>
            </div>
            <div className="p-2.5 px-3 bg-slate-50 border border-slate-200/70 rounded-md flex items-center justify-between mt-1">
                <div>
                    <h4 className="text-[12.5px] font-bold text-slate-800">Active Status</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Enable or disable this entry</p>
                </div>
                <Switch defaultChecked={isEdit ? editItem?.status === 'Active' : true} />
            </div>
        </div>
    );

    return (
        <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Salary Certificate Requests</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Request official salary certificates for bank loans, embassy visa, or tax filings.</p>
                </div>
                <Button 
                    onClick={() => setIsCreateModalOpen(true)} 
                    className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[13px] h-9 px-4 font-bold"
                >
                    <Plus size={15} />
                    New Request / Entry
                </Button>
            </div>

            <DataTable 
                data={filteredData} 
                columns={columns}
                searchPlaceholder="Search certificate requests..."
                actions={renderActions}
                onDeleteSelected={handleBulkDelete}
                filterContent={renderFilters}
                compact
            />

            <Modal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                title="Create New Requisition / Request"
                size="lg"
                footer={
                    <>
                        <Button variant="outline" onClick={() => setIsCreateModalOpen(false)} className="h-8.5 text-[12.5px]">Cancel</Button>
                        <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-1.5 flex items-center text-[12.5px] h-8.5 px-3.5 font-bold">
                            <Save size={13} /> Submit Request
                        </Button>
                    </>
                }
            >
                <FormContent />
            </Modal>
            
            <Modal
                isOpen={!!editItem}
                onClose={() => setEditItem(null)}
                title="Edit Requisition Details"
                size="lg"
                footer={
                    <>
                        <Button variant="outline" onClick={() => setEditItem(null)} className="h-8.5 text-[12.5px]">Cancel</Button>
                        <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-1.5 flex items-center text-[12.5px] h-8.5 px-3.5 font-bold">
                            <Save size={13} /> Save Changes
                        </Button>
                    </>
                }
            >
                {editItem && <FormContent isEdit />}
            </Modal>
        </div>
    );
}
