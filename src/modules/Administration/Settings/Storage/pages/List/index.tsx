import React, { useState } from 'react';
import { HardDrive, Server, Cloud, CheckCircle2, Settings2 } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

export default function StorageList() {
    const [selectedDriver, setSelectedDriver] = useState('local');

    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Storage & File Uploads</h1>
                    <p className="text-[14px] font-medium text-slate-500 mt-1">Configure where system files and media are stored.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 items-start">
                
                {/* Storage Driver Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <HardDrive size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Storage Driver</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div className="grid grid-cols-1 gap-2.5">
                            <div onClick={() => setSelectedDriver('local')} className={`relative cursor-pointer rounded-lg p-2.5 border flex items-center gap-3 transition-all ${selectedDriver === 'local' ? 'border-green-700 bg-green-50/30 shadow-sm' : 'border-slate-200 bg-white'}`}>
                                <div className={`w-8 h-8 rounded-md flex items-center justify-center ${selectedDriver === 'local' ? 'bg-green-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
                                    <Server size={16} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[13px] font-bold text-slate-900">Local Server</h4>
                                    <p className="text-[12px] text-slate-500 mt-0.5">Files stored on this server</p>
                                </div>
                                {selectedDriver === 'local' && <CheckCircle2 size={16} className="text-green-700" />}
                            </div>
                            
                            <div onClick={() => setSelectedDriver('r2')} className={`relative cursor-pointer rounded-lg p-2.5 border flex items-center gap-3 transition-all ${selectedDriver === 'r2' ? 'border-green-700 bg-green-50/30 shadow-sm' : 'border-slate-200 bg-white'}`}>
                                <div className={`w-8 h-8 rounded-md flex items-center justify-center ${selectedDriver === 'r2' ? 'bg-green-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
                                    <Cloud size={16} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[13px] font-bold text-slate-900">Cloudflare R2</h4>
                                    <p className="text-[12px] text-slate-500 mt-0.5">Free 10GB • No egress fees</p>
                                </div>
                                {selectedDriver === 'r2' && <CheckCircle2 size={16} className="text-green-700" />}
                            </div>
                        </div>

                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Save Driver Settings
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Upload Rules Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <Settings2 size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Upload Rules</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Max Upload Size (MB) <span className="text-red-500">*</span>
                            </label>
                            <Input type="number" defaultValue="50" className="h-[38px] text-[13px]" />
                        </div>
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Allowed Extensions <span className="text-red-500">*</span>
                            </label>
                            <Input defaultValue="jpg, png, pdf, docx, zip" className="h-[38px] text-[13px]" />
                        </div>
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Save Upload Rules
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}