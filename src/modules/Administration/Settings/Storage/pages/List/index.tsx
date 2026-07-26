import React, { useState } from 'react';
import { HardDrive, Server, Cloud, CheckCircle2, Settings2 } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import FormLabel from '@/components/ui/label';

export default function StorageList() {
    const [selectedDriver, setSelectedDriver] = useState('local');

    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Storage & File Uploads</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Configure where system files and media are stored.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-start">
                
                {/* Storage Driver Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                        <HardDrive size={16} className="text-[#008060]" />
                        <h3 className="text-[14px] font-bold text-slate-900">Storage Driver</h3>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="grid grid-cols-1 gap-2">
                            <div onClick={() => setSelectedDriver('local')} className={`relative cursor-pointer rounded-md p-2.5 border flex items-center gap-2.5 transition-all ${selectedDriver === 'local' ? 'border-[#008060] bg-emerald-50/40 shadow-sm' : 'border-slate-200 bg-white'}`}>
                                <div className={`w-7 h-7 rounded flex items-center justify-center ${selectedDriver === 'local' ? 'bg-[#008060] text-white' : 'bg-slate-100 text-slate-600'}`}>
                                    <Server size={14} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[12.5px] font-bold text-slate-900">Local Server</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">Files stored on this server</p>
                                </div>
                                {selectedDriver === 'local' && <CheckCircle2 size={15} className="text-[#008060]" />}
                            </div>
                            
                            <div onClick={() => setSelectedDriver('r2')} className={`relative cursor-pointer rounded-md p-2.5 border flex items-center gap-2.5 transition-all ${selectedDriver === 'r2' ? 'border-[#008060] bg-emerald-50/40 shadow-sm' : 'border-slate-200 bg-white'}`}>
                                <div className={`w-7 h-7 rounded flex items-center justify-center ${selectedDriver === 'r2' ? 'bg-[#008060] text-white' : 'bg-slate-100 text-slate-600'}`}>
                                    <Cloud size={14} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[12.5px] font-bold text-slate-900">Cloudflare R2</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">Free 10GB • No egress fees</p>
                                </div>
                                {selectedDriver === 'r2' && <CheckCircle2 size={15} className="text-[#008060]" />}
                            </div>
                        </div>

                        <div className="pt-1">
                            <Button className="w-full h-8.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px]">
                                Save Driver Settings
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Upload Rules Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                        <Settings2 size={16} className="text-[#008060]" />
                        <h3 className="text-[14px] font-bold text-slate-900">Upload Rules</h3>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Max Upload (MB)</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Input type="number" defaultValue="50" className="h-8 text-[12.5px]" />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Allowed Extensions</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Input defaultValue="jpg, png, pdf, docx, zip" className="h-8 text-[12.5px]" />
                            </div>
                        </div>

                        <div className="pt-1">
                            <Button className="w-full h-8.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px]">
                                Save Upload Rules
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}