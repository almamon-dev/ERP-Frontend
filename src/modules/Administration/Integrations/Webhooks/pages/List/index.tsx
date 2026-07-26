import React, { useState } from 'react';
import DataTable, { Column } from '@/components/tables/data-table';
import { Webhook, Plus, Trash2, RefreshCw, Save, Edit } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Select from '@/components/ui/select';
import Switch from '@/components/ui/switch';
import Modal from '@/components/modals/modal';
import FormLabel from '@/components/ui/label';

export default function WebhooksList() {
    const [data, setData] = useState([
        { id: 1, name: 'Order Status Listener', url: 'https://api.myapp.com/webhooks/orders', events: 'order.created, order.paid', status: 'Active' },
        { id: 2, name: 'Inventory Sync Endpoint', url: 'https://erp-sync.partner.com/events', events: 'inventory.updated', status: 'Active' },
        { id: 3, name: 'Customer Signup Event', url: 'https://crm.analytics.io/hook', events: 'user.registered', status: 'Disabled' },
    ]);

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editItem, setEditItem] = useState<any>(null);

    const [webhookName, setWebhookName] = useState('');
    const [payloadUrl, setPayloadUrl] = useState('');
    const [events, setEvents] = useState('order.created');

    const handleCreate = () => {
        if (!webhookName.trim() || !payloadUrl.trim()) return;
        const newWebhook = {
            id: Date.now(),
            name: webhookName,
            url: payloadUrl,
            events,
            status: 'Active'
        };
        setData([newWebhook, ...data]);
        setWebhookName('');
        setPayloadUrl('');
        setIsCreateModalOpen(false);
    };

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this webhook endpoint?')) {
            setData(prev => prev.filter(w => w.id !== id));
        }
    };

    const columns: Column[] = [
        { id: 'name', label: 'Webhook Name', render: (item) => <span className="font-semibold text-slate-800 text-[12.5px]">{item.name}</span> },
        { id: 'url', label: 'Payload URL', render: (item) => <span className="font-mono text-[12px] text-slate-600">{item.url}</span> },
        { id: 'events', label: 'Subscribed Events', render: (item) => <span className="text-[11.5px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">{item.events}</span> },
        {
            id: 'status',
            label: 'Status',
            render: (item) => (
                <span className={`px-2 py-0.5 text-[11.5px] font-bold rounded-full ${item.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                    {item.status}
                </span>
            )
        },
    ];

    const renderActions = (item: any) => (
        <div className="flex justify-center gap-1.5">
            <button onClick={() => setEditItem(item)} className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="Edit">
                <Edit size={14} />
            </button>
            <Button variant="outline" size="sm" onClick={() => alert(`Sending test ping to ${item.url}...`)} className="h-7 text-[11.5px] px-2 text-slate-700 border-slate-300 hover:bg-slate-50">
                <RefreshCw size={13} /> Test Ping
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleDelete(item.id)} className="h-7 text-[11.5px] px-2 text-rose-600 border-rose-200 hover:bg-rose-50">
                <Trash2 size={13} /> Delete
            </Button>
        </div>
    );

    const FormContent = ({ isEdit = false }: { isEdit?: boolean }) => (
        <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Webhook Name</FormLabel>
                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Input
                        value={isEdit ? editItem?.name : webhookName}
                        onChange={(e) => isEdit ? setEditItem({ ...editItem, name: e.target.value }) : setWebhookName(e.target.value)}
                        placeholder="e.g. Order Status Listener"
                        className="h-8 text-[12.5px]"
                    />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Payload URL</FormLabel>
                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Input
                        value={isEdit ? editItem?.url : payloadUrl}
                        onChange={(e) => isEdit ? setEditItem({ ...editItem, url: e.target.value }) : setPayloadUrl(e.target.value)}
                        placeholder="https://api.myapp.com/webhooks/orders"
                        className="h-8 text-[12.5px]"
                    />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Subscribed Events</FormLabel>
                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Select
                        value={isEdit ? editItem?.events : events}
                        onChange={(e) => isEdit ? setEditItem({ ...editItem, events: e.target.value }) : setEvents(e.target.value)}
                        className="h-8 text-[12.5px]"
                        direction="up"
                        showSearch={false}
                    >
                        <option value="order.created, order.paid">order.created, order.paid</option>
                        <option value="inventory.updated">inventory.updated</option>
                        <option value="user.registered">user.registered</option>
                        <option value="invoice.generated">invoice.generated</option>
                        <option value="order.cancelled">order.cancelled</option>
                        <option value="payment.success">payment.success</option>
                        <option value="shipment.created">shipment.created</option>
                    </Select>
                </div>
            </div>

            <div className="p-2.5 px-3 bg-slate-50 border border-slate-200/70 rounded-md flex items-center justify-between mt-1">
                <div>
                    <h4 className="text-[12.5px] font-bold text-slate-800">Active Listener</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Dispatch HTTP POST payloads when events occur.</p>
                </div>
                <Switch defaultChecked={isEdit ? editItem?.status === 'Active' : true} />
            </div>
        </div>
    );

    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Webhooks</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Subscribe external URLs to real-time system events.</p>
                </div>
                <Button onClick={() => setIsCreateModalOpen(true)} className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[13px] h-9 px-4">
                    <Plus size={15} /> Add Webhook Endpoint
                </Button>
            </div>
            <DataTable data={data} columns={columns} actions={renderActions} searchPlaceholder="Search webhooks..." compact />

            {/* Create Webhook Modal */}
            <Modal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                title="Add Webhook Endpoint"
                size="lg"
                footer={
                    <>
                        <Button variant="outline" onClick={() => setIsCreateModalOpen(false)} className="h-8.5 text-[12.5px]">Cancel</Button>
                        <Button onClick={handleCreate} className="bg-[#008060] hover:bg-[#006e52] text-white gap-1.5 flex items-center text-[12.5px] h-8.5 px-3.5">
                            <Save size={13} /> Save Webhook
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
                title="Edit Webhook Endpoint"
                size="lg"
                footer={
                    <>
                        <Button variant="outline" onClick={() => setEditItem(null)} className="h-8.5 text-[12.5px]">Cancel</Button>
                        <Button onClick={() => {
                            setData(data.map(w => w.id === editItem.id ? editItem : w));
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
