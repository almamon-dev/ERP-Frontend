import React from 'react';
import { UserCheck, KeyRound } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import Select from '@/components/ui/select';

export default function SecurityList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Security Policies</h1>
                    <p className="text-[14px] font-medium text-slate-500 mt-1">Manage global security, sessions, and authentications.</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 items-start">
                
                {/* Left Card: Authentication Rules */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <UserCheck size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Authentication Rules</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between">
                            <div>
                                <h3 className="text-[13px] font-bold text-slate-900">Enforce 2-Factor Auth</h3>
                                <p className="text-[12px] text-slate-500">Require MFA for all active users.</p>
                            </div>
                            <Switch id="req-2fa" defaultChecked />
                        </div>

                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Session Timeout (Minutes) <span className="text-red-500">*</span>
                            </label>
                            <Input type="number" defaultValue="120" className="h-[38px] text-[13px]" />
                        </div>
                        
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Save Auth Rules
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right Card: Password & Access */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <KeyRound size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Password & Access</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Max Failed Logins <span className="text-red-500">*</span>
                            </label>
                            <Select className="h-[38px] text-[13px]">
                                <option value="3">3 Attempts</option>
                                <option value="5">5 Attempts</option>
                                <option value="10">10 Attempts</option>
                            </Select>
                        </div>
                        
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Password Expiration (Days) <span className="text-red-500">*</span>
                            </label>
                            <Input type="number" defaultValue="90" className="h-[38px] text-[13px]" />
                        </div>
                        
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Save Access Settings
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}