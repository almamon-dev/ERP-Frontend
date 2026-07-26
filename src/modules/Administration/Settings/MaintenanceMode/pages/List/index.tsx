import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Switch from '@/components/ui/switch';
import FormLabel from '@/components/ui/label';

export default function MaintenanceModeList() {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Maintenance Mode</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Take the system offline for updates and repairs.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-start">
                
                {/* Status Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                        <AlertTriangle size={16} className="text-[#008060]" />
                        <h3 className="text-[14px] font-bold text-slate-900">Status & Message</h3>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className={`p-2.5 px-3 rounded-md border flex items-center justify-between transition-colors ${isEnabled ? 'bg-amber-50/70 border-amber-200' : 'bg-slate-50 border-slate-200/70'}`}>
                            <div>
                                <h3 className="text-[12.5px] font-bold text-slate-900">Maintenance Mode</h3>
                                <p className="text-[11px] text-slate-500 mt-0.5">Take the system offline for repairs</p>
                            </div>
                            <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0 mt-1" required>Public Message</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline mt-1">:</span>
                            <div className="flex-1">
                                <Textarea defaultValue="We are currently undergoing scheduled maintenance. Please check back soon." className="min-h-[65px] text-[12.5px] py-1.5" />
                            </div>
                        </div>
                        
                        <div className="pt-1">
                            <Button className="w-full h-8.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px]">
                                Update Status
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Access Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                        <ShieldCheck size={16} className="text-[#008060]" />
                        <h3 className="text-[14px] font-bold text-slate-900">Access Control</h3>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Bypass Secret</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Input defaultValue="admin_bypass_2026" className="h-8 text-[12.5px]" />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Whitelisted IPs</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Input defaultValue="192.168.1.1, 10.0.0.5" className="h-8 text-[12.5px]" />
                            </div>
                        </div>
                        
                        <div className="pt-1">
                            <Button className="w-full h-8.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px]">
                                Save Access Rules
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}