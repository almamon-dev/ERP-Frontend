import React from 'react';
import { UserCheck, KeyRound } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import Select from '@/components/ui/select';
import FormLabel from '@/components/ui/label';

export default function SecurityList() {
    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Security Policies</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Manage global security, sessions, and authentications.</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-start">
                
                {/* Left Card: Authentication Rules */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                        <UserCheck size={16} className="text-[#008060]" />
                        <h3 className="text-[14px] font-bold text-slate-900">Authentication Rules</h3>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="p-2.5 px-3 rounded-md border border-slate-200/70 bg-slate-50 flex items-center justify-between">
                            <div>
                                <h3 className="text-[12.5px] font-bold text-slate-900">Enforce 2-Factor Auth</h3>
                                <p className="text-[11px] text-slate-500 mt-0.5">Require MFA for all active users.</p>
                            </div>
                            <Switch id="req-2fa" defaultChecked />
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-40 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Session Timeout (Mins)</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Input type="number" defaultValue="120" className="h-8 text-[12.5px]" />
                            </div>
                        </div>
                        
                        <div className="pt-1">
                            <Button className="w-full h-8.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px]">
                                Save Auth Rules
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right Card: Password & Access */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                        <KeyRound size={16} className="text-[#008060]" />
                        <h3 className="text-[14px] font-bold text-slate-900">Password & Access</h3>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-40 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Max Failed Logins</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Select className="h-8 text-[12.5px]">
                                    <option value="3">3 Attempts</option>
                                    <option value="5">5 Attempts</option>
                                    <option value="10">10 Attempts</option>
                                </Select>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-40 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Expiration (Days)</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Input type="number" defaultValue="90" className="h-8 text-[12.5px]" />
                            </div>
                        </div>
                        
                        <div className="pt-1">
                            <Button className="w-full h-8.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px]">
                                Save Access Settings
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}