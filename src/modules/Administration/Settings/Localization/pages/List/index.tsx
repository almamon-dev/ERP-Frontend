import React from 'react';
import { Globe, Hash } from 'lucide-react';
import Button from '@/components/ui/button';
import Select from '@/components/ui/select';

export default function LocalizationList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Localization</h1>
                    <p className="text-[14px] font-medium text-slate-500 mt-1">Configure language, time zone, and regional formats.</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
                
                {/* System Defaults Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <Globe size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">System Defaults</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Default Language <span className="text-red-500">*</span>
                            </label>
                            <Select className="h-[38px] text-[13px]">
                                <option value="en">English (US)</option>
                                <option value="en-gb">English (UK)</option>
                                <option value="bn">Bengali</option>
                            </Select>
                        </div>
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Default Time Zone <span className="text-red-500">*</span>
                            </label>
                            <Select className="h-[38px] text-[13px]">
                                <option value="UTC">UTC (Coordinated Universal Time)</option>
                                <option value="BDT" selected>Bangladesh Standard Time (BDT)</option>
                            </Select>
                        </div>
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Save System Defaults
                            </Button>
                        </div>
                    </div>
                </div>
                
                {/* Formatting Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <Hash size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Formatting</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Date Format <span className="text-red-500">*</span>
                            </label>
                            <Select className="h-[38px] text-[13px]">
                                <option value="YYYY-MM-DD">YYYY-MM-DD (2026-12-31)</option>
                                <option value="DD/MM/YYYY">DD/MM/YYYY (31/12/2026)</option>
                            </Select>
                        </div>
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Time Format <span className="text-red-500">*</span>
                            </label>
                            <Select className="h-[38px] text-[13px]">
                                <option value="12h">12-hour (01:00 PM)</option>
                                <option value="24h">24-hour (13:00)</option>
                            </Select>
                        </div>
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Save Formatting Rules
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}