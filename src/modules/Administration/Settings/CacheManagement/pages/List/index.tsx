import React from 'react';
import { RefreshCcw, Zap } from 'lucide-react';
import Button from '@/components/ui/button';

export default function CacheManagementList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Cache Management</h1>
                    <p className="text-[14px] font-medium text-slate-500 mt-1">Clear system cache to apply new configurations.</p>
                </div>
                <Button size="sm" className="h-[32px] text-[13px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                    <Zap size={14} /> Clear All Cache
                </Button>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 items-start">
                
                {/* Left Card: Core Cache */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <RefreshCcw size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Core System Cache</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Application Cache
                            </label>
                            <p className="text-[13px] text-slate-500">Clears general application cache, user sessions, and temporary files safely without affecting configurations.</p>
                        </div>
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Configuration Cache
                            </label>
                            <p className="text-[13px] text-slate-500">Clears and rebuilds the system configuration cache. Required when you update environment variables or core settings.</p>
                        </div>
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Clear Core Cache
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right Card: Routing & Views */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <RefreshCcw size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Routing & Views</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Route Cache
                            </label>
                            <p className="text-[13px] text-slate-500">Clears and rebuilds the system routing cache. Essential if you are experiencing 404 errors on existing pages.</p>
                        </div>
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                View Cache
                            </label>
                            <p className="text-[13px] text-slate-500">Clears compiled frontend view templates. Do this if your UI updates are not reflecting on the live system.</p>
                        </div>
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Clear Routing & Views
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
