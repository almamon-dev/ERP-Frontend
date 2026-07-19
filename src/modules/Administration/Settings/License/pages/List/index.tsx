import React from 'react';
import { Key, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

export default function LicenseList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">License Verification</h1>
                    <p className="text-[14px] font-medium text-slate-500 mt-1">Manage application license and activation status.</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
                
                {/* Left Card: License Details */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <ShieldCheck size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">License Details</h3>
                    </div>
                    <div className="p-5">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-md flex items-start gap-3 text-green-800 mb-5">
                            <ShieldCheck size={24} className="text-green-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-[14px]">Active License</h4>
                                <p className="text-[13px] opacity-80 mt-1">Your software is fully licensed and receives automated updates.</p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-5 pt-1">
                            <div>
                                <p className="text-[12px] text-slate-500 font-medium">License Type</p>
                                <p className="text-[14px] font-bold text-slate-800 mt-1">Enterprise Edition</p>
                            </div>
                            <div>
                                <p className="text-[12px] text-slate-500 font-medium">Valid Until</p>
                                <p className="text-[14px] font-bold text-slate-800 mt-1">Lifetime</p>
                            </div>
                            <div>
                                <p className="text-[12px] text-slate-500 font-medium">Support Expiry</p>
                                <p className="text-[14px] font-bold text-slate-800 mt-1">Dec 31, 2027</p>
                            </div>
                            <div>
                                <p className="text-[12px] text-slate-500 font-medium">Domain</p>
                                <p className="text-[14px] font-bold text-slate-800 mt-1">erp.example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right Card: Update License (Matches user screenshot exactly) */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <Key size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Update License</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Purchase Code <span className="text-red-500">*</span>
                            </label>
                            <Input placeholder="Enter your envato purchase code..." className="h-[38px] text-[13px]" />
                        </div>
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Envato Username <span className="text-red-500">*</span>
                            </label>
                            <Input placeholder="Enter envato username..." className="h-[38px] text-[13px]" />
                        </div>
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Verify & Activate License
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
