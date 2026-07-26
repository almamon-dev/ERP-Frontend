import React, { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import DataTable, { Column } from '@/components/tables/data-table';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Modal from '@/components/modals/modal';
import FormLabel from '@/components/ui/label';

export default function IpWhitelistList() {
    const [data, setData] = useState([
        { id: 1, ip: '192.168.1.100', description: 'Corporate Office HQ', addedBy: 'Admin', date: '2026-07-10' },
        { id: 2, ip: '10.0.0.50/24', description: 'VPN Subnet', addedBy: 'Admin', date: '2026-07-12' },
    ]);
    
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editItem, setEditItem] = useState<any>(null);

    const columns: Column[] = [
        { id: 'ip', label: 'IP Address / CIDR', render: (item) => <span className="font-mono font-medium text-slate-800 text-[13px]">{item.ip}</span> },
        { id: 'description', label: 'Description' },
        { id: 'addedBy', label: 'Added By' },
        { id: 'date', label: 'Date Added' },
    ];

    const renderActions = (item: any) => (
        <div className="flex items-center justify-center gap-1">
            <button onClick={() => setEditItem(item)} className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="Edit">
                <Edit size={14} strokeWidth={1.5} />
            </button>
            <button className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
                <Trash2 size={14} strokeWidth={1.5} />
            </button>
        </div>
    );
    
    const FormContent = ({ isEdit = false }: { isEdit?: boolean }) => (
        <div className="space-y-3.5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <FormLabel className="!mb-0 sm:w-44 text-[13px] font-semibold text-slate-700 shrink-0" required>IP Address / CIDR</FormLabel>
                <span className="text-[13px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Input defaultValue={isEdit ? editItem?.ip : ''} placeholder="e.g. 192.168.1.1 or 10.0.0.0/24" className="font-mono text-[13px] h-8.5" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
                <FormLabel className="!mb-0 sm:w-44 text-[13px] font-semibold text-slate-700 shrink-0 mt-1.5">Description</FormLabel>
                <span className="text-[13px] text-slate-400 hidden sm:inline mt-1.5">:</span>
                <div className="flex-1">
                    <Textarea defaultValue={isEdit ? editItem?.description : ''} placeholder="Why is this IP whitelisted?" className="min-h-[70px] text-[13px]" />
                </div>
            </div>
        </div>
    );

    return (
        <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">IP Whitelist</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Restrict system access to approved IP addresses only.</p>
                </div>
                <Button onClick={() => setIsCreateModalOpen(true)} className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[13px] h-9 px-4">
                    <Plus size={15} />
                    Add IP Address
                </Button>
            </div>


            <DataTable 
                data={data} 
                columns={columns}
                searchPlaceholder="Search IP..."
                actions={renderActions}
            />

            <Modal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} title="Add IP to Whitelist" size="sm" footer={<><Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>Cancel</Button><Button className="bg-[#008060] text-white">Add IP</Button></>}>
                <FormContent />
            </Modal>
            
            <Modal isOpen={!!editItem} onClose={() => setEditItem(null)} title="Edit Whitelisted IP" size="sm" footer={<><Button variant="outline" onClick={() => setEditItem(null)}>Cancel</Button><Button className="bg-[#008060] text-white">Save Changes</Button></>}>
                {editItem && <FormContent isEdit />}
            </Modal>
        </div>
    );
}

