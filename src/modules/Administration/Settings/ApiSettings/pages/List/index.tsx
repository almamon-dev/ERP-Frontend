import React from 'react';
import { Webhook, Plus } from 'lucide-react';
import Button from '@/components/ui/button';
import TabHeader from '@/components/ui/tab-header';

export default function ApiSettingsList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">API Settings</h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">Manage API keys and integration webhooks.</p>
                    </div>
                </div>
                <Button size="sm" className="h-[32px] text-[14px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                    <Plus size={14} />
                    Generate API Key
                </Button>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-6 md:p-8">
                <TabHeader title="Active API Keys" icon={Webhook} />
                <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200 bg-slate-50">
                                <th className="p-3 text-[13px] font-semibold text-slate-600">Key Name</th>
                                <th className="p-3 text-[13px] font-semibold text-slate-600">API Key</th>
                                <th className="p-3 text-[13px] font-semibold text-slate-600">Permissions</th>
                                <th className="p-3 text-[13px] font-semibold text-slate-600">Last Used</th>
                                <th className="p-3 text-[13px] font-semibold text-slate-600">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100">
                                <td className="p-3 text-[14px] text-slate-800 font-medium">Mobile App Client</td>
                                <td className="p-3 text-[14px] text-slate-500 font-mono">sk_live_********************a1f</td>
                                <td className="p-3"><span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-[12px] font-medium">Read/Write</span></td>
                                <td className="p-3 text-[14px] text-slate-500">2 mins ago</td>
                                <td className="p-3"><span className="px-2 py-1 bg-green-50 text-green-600 rounded text-[12px] font-medium">Active</span></td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="p-3 text-[14px] text-slate-800 font-medium">Analytics Integration</td>
                                <td className="p-3 text-[14px] text-slate-500 font-mono">sk_live_********************b9x</td>
                                <td className="p-3"><span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[12px] font-medium">Read Only</span></td>
                                <td className="p-3 text-[14px] text-slate-500">1 day ago</td>
                                <td className="p-3"><span className="px-2 py-1 bg-green-50 text-green-600 rounded text-[12px] font-medium">Active</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
