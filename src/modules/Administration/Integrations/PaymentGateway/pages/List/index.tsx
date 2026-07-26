import React, { useState } from 'react';
import { CreditCard, ShieldCheck, Plus, Save } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Select from '@/components/ui/select';
import Switch from '@/components/ui/switch';
import Modal from '@/components/modals/modal';
import FormLabel from '@/components/ui/label';

export default function PaymentGatewayList() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [customGateways, setCustomGateways] = useState<any[]>([]);

    const [gatewayName, setGatewayName] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [mode, setMode] = useState('Sandbox');

    const handleCreate = () => {
        if (!gatewayName.trim()) return;
        setCustomGateways([...customGateways, { id: Date.now(), name: gatewayName, apiKey, mode }]);
        setGatewayName('');
        setApiKey('');
        setIsCreateModalOpen(false);
    };

    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Payment Gateways</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Configure Stripe, PayPal, SSLCommerz, and custom payment providers.</p>
                </div>
                <Button onClick={() => setIsCreateModalOpen(true)} className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[13px] h-9 px-4">
                    <Plus size={15} /> Add Custom Gateway
                </Button>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-start">
                {/* Stripe Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <CreditCard size={16} className="text-[#008060]" />
                            <h3 className="text-[14px] font-bold text-slate-900">Stripe Payments</h3>
                        </div>
                        <Switch defaultChecked />
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Publishable Key</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Input defaultValue="pk_live_51M..." className="h-8 text-[12.5px]" />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Secret Key</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Input type="password" defaultValue="sk_live_51M..." className="h-8 text-[12.5px]" />
                            </div>
                        </div>

                        <div className="pt-1">
                            <Button className="w-full h-8.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px]">
                                Save Stripe Configuration
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Local Gateway Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={16} className="text-[#008060]" />
                            <h3 className="text-[14px] font-bold text-slate-900">SSLCommerz / bKash Gateway</h3>
                        </div>
                        <Switch defaultChecked />
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Store ID</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Input defaultValue="erpstore_live" className="h-8 text-[12.5px]" />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Store Password</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Input type="password" defaultValue="store_pass_live" className="h-8 text-[12.5px]" />
                            </div>
                        </div>

                        <div className="pt-1">
                            <Button className="w-full h-8.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px]">
                                Save Local Gateway
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Newly Added Custom Gateways */}
                {customGateways.map((gw) => (
                    <div key={gw.id} className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                        <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <CreditCard size={16} className="text-[#008060]" />
                                <h3 className="text-[14px] font-bold text-slate-900">{gw.name}</h3>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                                <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0">API Key</FormLabel>
                                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                                <div className="flex-1">
                                    <Input defaultValue={gw.apiKey} className="h-8 text-[12.5px]" />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                                <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0">Environment</FormLabel>
                                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                                <div className="flex-1">
                                    <Input defaultValue={gw.mode} className="h-8 text-[12.5px]" readOnly />
                                </div>
                            </div>
                            <div className="pt-1">
                                <Button className="w-full h-8.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px]">
                                    Save {gw.name} Configuration
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Create Custom Gateway Modal */}
            <Modal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                title="Add Custom Payment Gateway"
                size="lg"
                footer={
                    <>
                        <Button variant="outline" onClick={() => setIsCreateModalOpen(false)} className="h-8.5 text-[12.5px]">Cancel</Button>
                        <Button onClick={handleCreate} className="bg-[#008060] hover:bg-[#006e52] text-white gap-1.5 flex items-center text-[12.5px] h-8.5 px-3.5">
                            <Save size={13} /> Save Gateway
                        </Button>
                    </>
                }
            >
                <div className="space-y-3 pb-32 min-h-[200px]">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                        <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Gateway Name</FormLabel>
                        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                        <div className="flex-1">
                            <Input value={gatewayName} onChange={(e) => setGatewayName(e.target.value)} placeholder="e.g. Razorpay / Authorize.net" className="h-8 text-[12.5px]" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                        <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>API Key / Merchant ID</FormLabel>
                        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                        <div className="flex-1">
                            <Input value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="Enter API key or ID" className="h-8 text-[12.5px]" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                        <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Environment</FormLabel>
                        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                        <div className="flex-1">
                            <Select value={mode} onChange={(e) => setMode(e.target.value)} className="h-8 text-[12.5px]" showSearch={false}>
                                <option value="Sandbox">Sandbox / Test</option>
                                <option value="Live">Live / Production</option>
                            </Select>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
