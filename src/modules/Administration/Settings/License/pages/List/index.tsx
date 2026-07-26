import React from 'react';
import { Key, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import FormLabel from '@/components/ui/label';

export default function LicenseList() {
    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">License Verification</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Manage application license and activation status.</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                
                {/* Left Card: License Details */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                        <ShieldCheck size={16} className="text-[#008060]" />
                        <h3 className="text-[14px] font-bold text-slate-900">License Details</h3>
                    </div>
                    <div className="p-4">
                        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-md flex items-start gap-2.5 text-emerald-900 mb-4">
                            <ShieldCheck size={20} className="text-[#008060] shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-[13px]">Active License</h4>
                                <p className="text-[11.5px] opacity-80 mt-0.5">Your software is fully licensed and receives automated updates.</p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 pt-1">
                            <div>
                                <p className="text-[11.5px] text-slate-500 font-semibold">License Type</p>
                                <p className="text-[12.5px] font-bold text-slate-800 mt-0.5">Enterprise Edition</p>
                            </div>
                            <div>
                                <p className="text-[11.5px] text-slate-500 font-semibold">Valid Until</p>
                                <p className="text-[12.5px] font-bold text-slate-800 mt-0.5">Lifetime</p>
                            </div>
                            <div>
                                <p className="text-[11.5px] text-slate-500 font-semibold">Support Expiry</p>
                                <p className="text-[12.5px] font-bold text-slate-800 mt-0.5">Dec 31, 2027</p>
                            </div>
                            <div>
                                <p className="text-[11.5px] text-slate-500 font-semibold">Domain</p>
                                <p className="text-[12.5px] font-bold text-slate-800 mt-0.5">erp.example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right Card: Update License */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                        <Key size={16} className="text-[#008060]" />
                        <h3 className="text-[14px] font-bold text-slate-900">Update License</h3>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Purchase Code</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Input placeholder="Enter your envato purchase code..." className="h-8 text-[12.5px]" />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Envato Username</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Input placeholder="Enter envato username..." className="h-8 text-[12.5px]" />
                            </div>
                        </div>

                        <div className="pt-1">
                            <Button className="w-full h-8.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px]">
                                Verify & Activate License
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

