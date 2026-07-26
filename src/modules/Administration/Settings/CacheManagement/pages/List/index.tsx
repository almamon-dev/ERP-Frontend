import React from 'react';
import { RefreshCcw, Zap } from 'lucide-react';
import Button from '@/components/ui/button';

export default function CacheManagementList() {
    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Cache Management</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Clear system cache to apply new configurations.</p>
                </div>
                <Button size="sm" className="h-9 text-[13px] px-4 flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white">
                    <Zap size={14} /> Clear All Cache
                </Button>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-start">
                
                {/* Left Card: Core Cache */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                        <RefreshCcw size={16} className="text-[#008060]" />
                        <h3 className="text-[14px] font-bold text-slate-900">Core System Cache</h3>
                    </div>
                    <div className="p-4 space-y-3">
                        <div>
                            <h4 className="text-[12.5px] font-bold text-slate-800 mb-0.5">
                                Application Cache
                            </h4>
                            <p className="text-[11.5px] text-slate-500 leading-relaxed">Clears general application cache, user sessions, and temporary files safely without affecting configurations.</p>
                        </div>
                        <div>
                            <h4 className="text-[12.5px] font-bold text-slate-800 mb-0.5">
                                Configuration Cache
                            </h4>
                            <p className="text-[11.5px] text-slate-500 leading-relaxed">Clears and rebuilds the system configuration cache. Required when you update environment variables or core settings.</p>
                        </div>
                        <div className="pt-1">
                            <Button className="w-full h-8.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px]">
                                Clear Core Cache
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right Card: Routing & Views */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                        <RefreshCcw size={16} className="text-[#008060]" />
                        <h3 className="text-[14px] font-bold text-slate-900">Routing & Views</h3>
                    </div>
                    <div className="p-4 space-y-3">
                        <div>
                            <h4 className="text-[12.5px] font-bold text-slate-800 mb-0.5">
                                Route Cache
                            </h4>
                            <p className="text-[11.5px] text-slate-500 leading-relaxed">Clears and rebuilds the system routing cache. Essential if you are experiencing 404 errors on existing pages.</p>
                        </div>
                        <div>
                            <h4 className="text-[12.5px] font-bold text-slate-800 mb-0.5">
                                View Cache
                            </h4>
                            <p className="text-[11.5px] text-slate-500 leading-relaxed">Clears compiled frontend view templates. Do this if your UI updates are not reflecting on the live system.</p>
                        </div>
                        <div className="pt-1">
                            <Button className="w-full h-8.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px]">
                                Clear Routing & Views
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

