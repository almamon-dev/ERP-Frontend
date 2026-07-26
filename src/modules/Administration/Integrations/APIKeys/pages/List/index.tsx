import React, { useState } from 'react';
import DataTable, { Column } from '@/components/tables/data-table';
import { Key, Plus, Trash2, Copy, Save, Edit } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Select from '@/components/ui/select';
import Switch from '@/components/ui/switch';
import Modal from '@/components/modals/modal';
import FormLabel from '@/components/ui/label';

export default function APIKeysList() {
    const [data, setData] = useState([
        { id: 1, name: 'Mobile App Integration', key: 'sk_live_98a7f...2b1', scope: 'Full Access', created: '2026-06-12', status: 'Active' },
        { id: 2, name: 'Payment Webhook Service', key: 'sk_live_34c1a...9d4', scope: 'Read/Write', created: '2026-07-01', status: 'Active' },
        { id: 3, name: 'Legacy Analytics Client', key: 'sk_test_12e9b...7f0', scope: 'Read Only', created: '2026-05-18', status: 'Revoked' },
    ]);

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editItem, setEditItem] = useState<any>(null);

    const [keyName, setKeyName] = useState('');
    const [scope, setScope] = useState('Full Access');

    const handleCreate = () => {
        if (!keyName.trim()) return;
        const newKey = {
            id: Date.now(),
            name: keyName,
            key: `sk_live_${Math.random().toString(36).substring(2, 12)}...${Math.random().toString(36).substring(2, 5)}`,
            scope,
            created: new Date().toISOString().split('T')[0],
            status: 'Active'
        };
        setData([newKey, ...data]);
        setKeyName('');
        setIsCreateModalOpen(false);
    };

    const handleRevoke = (id: number) => {
        if (confirm('Are you sure you want to revoke this API key?')) {
            setData(prev => prev.map(k => k.id === id ? { ...k, status: 'Revoked' } : k));
        }
    };

    const columns: Column[] = [
        { id: 'name', label: 'Key Name', render: (item) => <span className="font-semibold text-slate-800 text-[12.5px]">{item.name}</span> },
        { id: 'key', label: 'API Key', render: (item) => (
            <div className="flex items-center gap-1.5 font-mono text-[12px] text-slate-600 bg-slate-100/80 px-2 py-0.5 rounded w-fit">
                <span>{item.key}</span>
                <Copy size={12} className="cursor-pointer hover:text-slate-900" title="Copy Key" />
            </div>
        ) },
        { id: 'scope', label: 'Scope', render: (item) => <span className="text-[12px] text-slate-600 font-medium">{item.scope}</span> },
        { id: 'created', label: 'Created At', render: (item) => <span className="text-[12px] text-slate-500">{item.created}</span> },
        { 
            id: 'status', 
            label: 'Status',
            render: (item) => (
                <span className={`px-2 py-0.5 text-[11.5px] font-bold rounded-full ${item.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                    {item.status}
                </span>
            ) 
        },
    ];
    
    const renderActions = (item: any) => (
        <div className="flex justify-center gap-1">
            <button onClick={() => setEditItem(item)} className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="Edit">
                <Edit size={14} />
            </button>
            {item.status === 'Active' && (
                <Button variant="outline" size="sm" onClick={() => handleRevoke(item.id)} className="h-7 text-[11.5px] px-2 text-rose-600 border-rose-200 hover:bg-rose-50">
                    <Trash2 size={13} /> Revoke
                </Button>
            )}
        </div>
    );

    const FormContent = ({ isEdit = false }: { isEdit?: boolean }) => (
        <div className="space-y-3 pb-32 min-h-[200px]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Key Name</FormLabel>
                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Input 
                        value={isEdit ? editItem?.name : keyName} 
                        onChange={(e) => isEdit ? setEditItem({ ...editItem, name: e.target.value }) : setKeyName(e.target.value)} 
                        placeholder="e.g. Mobile App Integration" 
                        className="h-8 text-[12.5px]" 
                    />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Access Scope</FormLabel>
                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Select 
                        value={isEdit ? editItem?.scope : scope} 
                        onChange={(e) => isEdit ? setEditItem({ ...editItem, scope: e.target.value }) : setScope(e.target.value)}
                        className="h-8 text-[12.5px]"
                        showSearch={false}
                    >
                        <option value="Full Access">Full Access (Read/Write/Delete)</option>
                        <option value="Read/Write">Read & Write Only</option>
                        <option value="Read Only">Read Only</option>
                    </Select>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0">IP Restriction</FormLabel>
                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Input placeholder="e.g. 192.168.1.100 (Optional)" className="h-8 text-[12.5px]" />
                </div>
            </div>

            <div className="p-2.5 px-3 bg-slate-50 border border-slate-200/70 rounded-md flex items-center justify-between mt-1">
                <div>
                    <h4 className="text-[12.5px] font-bold text-slate-800">Active Status</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Allow this API key to authenticate requests.</p>
                </div>
                <Switch defaultChecked={isEdit ? editItem?.status === 'Active' : true} />
            </div>
        </div>
    );

    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">API Keys</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Manage secret keys and application access tokens.</p>
                </div>
                <Button onClick={() => setIsCreateModalOpen(true)} className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[13px] h-9 px-4">
                    <Plus size={15} /> Create API Key
                </Button>
            </div>
            <DataTable data={data} columns={columns} actions={renderActions} searchPlaceholder="Search API keys..." compact />

            {/* Create API Key Modal */}
            <Modal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                title="Create New API Key"
                size="lg"
                footer={
                    <>
                        <Button variant="outline" onClick={() => setIsCreateModalOpen(false)} className="h-8.5 text-[12.5px]">Cancel</Button>
                        <Button onClick={handleCreate} className="bg-[#008060] hover:bg-[#006e52] text-white gap-1.5 flex items-center text-[12.5px] h-8.5 px-3.5">
                            <Save size={13} /> Generate Key
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
                title="Edit API Key"
                size="lg"
                footer={
                    <>
                        <Button variant="outline" onClick={() => setEditItem(null)} className="h-8.5 text-[12.5px]">Cancel</Button>
                        <Button onClick={() => {
                            setData(data.map(k => k.id === editItem.id ? editItem : k));
                            setEditItem(null);
                        }} className="bg-[#008060] hover:bg-[#006e52] text-white gap-1.5 flex items-center text-[12.5px] h-8.5 px-3.5">
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
