import React from 'react';
import { Globe, Hash } from 'lucide-react';
import Button from '@/components/ui/button';
import Select from '@/components/ui/select';
import FormLabel from '@/components/ui/label';

export default function LocalizationList() {
    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Localization</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Configure language, time zone, and regional formats.</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                
                {/* System Defaults Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                        <Globe size={16} className="text-[#008060]" />
                        <h3 className="text-[14px] font-bold text-slate-900">System Defaults</h3>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Default Language</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Select className="h-8 text-[12.5px]" defaultValue="en">
                                    <option value="en">English (US)</option>
                                    <option value="en-gb">English (UK)</option>
                                    <option value="bn">Bengali</option>
                                </Select>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Default Time Zone</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Select className="h-8 text-[12.5px]" defaultValue="BDT">
                                    <option value="UTC">UTC (Coordinated Universal Time)</option>
                                    <option value="BDT">Bangladesh Standard Time (BDT)</option>
                                </Select>
                            </div>
                        </div>

                        <div className="pt-1">
                            <Button className="w-full h-8.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px]">
                                Save System Defaults
                            </Button>
                        </div>
                    </div>
                </div>
                
                {/* Formatting Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                        <Hash size={16} className="text-[#008060]" />
                        <h3 className="text-[14px] font-bold text-slate-900">Formatting</h3>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Date Format</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Select className="h-8 text-[12.5px]">
                                    <option value="YYYY-MM-DD">YYYY-MM-DD (2026-12-31)</option>
                                    <option value="DD/MM/YYYY">DD/MM/YYYY (31/12/2026)</option>
                                </Select>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Time Format</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Select className="h-8 text-[12.5px]">
                                    <option value="12h">12-hour (01:00 PM)</option>
                                    <option value="24h">24-hour (13:00)</option>
                                </Select>
                            </div>
                        </div>

                        <div className="pt-1">
                            <Button className="w-full h-8.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px]">
                                Save Formatting Rules
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}