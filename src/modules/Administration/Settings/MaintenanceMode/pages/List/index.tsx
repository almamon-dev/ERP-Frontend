import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Switch from '@/components/ui/switch';

export default function MaintenanceModeList() {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Maintenance Mode</h1>
                    <p className="text-[14px] font-medium text-slate-500 mt-1">Take the system offline for updates and repairs.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 items-start">
                
                {/* Status Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <AlertTriangle size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Status & Message</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div className={`p-4 rounded-lg border flex items-center justify-between transition-colors ${isEnabled ? 'bg-amber-50/50 border-amber-200' : 'bg-slate-50 border-slate-200'}`}>
                            <div>
                                <h3 className="text-[13px] font-bold text-slate-900">Maintenance Mode</h3>
                                <p className="text-[12px] text-slate-500">Take the system offline for repairs</p>
                            </div>
                            <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
                        </div>
                        
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Public Message <span className="text-red-500">*</span>
                            </label>
                            <Textarea defaultValue="We are currently undergoing scheduled maintenance. Please check back soon." className="min-h-[100px] text-[13px]" />
                        </div>
                        
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Update Status
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Access Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <ShieldCheck size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Access Control</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Bypass Secret <span className="text-red-500">*</span>
                            </label>
                            <Input defaultValue="admin_bypass_2026" className="h-[38px] text-[13px]" />
                        </div>
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Whitelisted IPs <span className="text-red-500">*</span>
                            </label>
                            <Input defaultValue="192.168.1.1, 10.0.0.5" className="h-[38px] text-[13px]" />
                        </div>
                        
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Save Access Rules
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}