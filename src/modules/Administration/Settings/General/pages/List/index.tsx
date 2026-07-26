import React from 'react';
import { Save, Settings, Layout } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Switch from '@/components/ui/switch';
import FormLabel from '@/components/ui/label';
import TabHeader from '@/components/ui/tab-header';

export default function GeneralList() {
    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">General Settings</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Configure global application behavior and display.</p>
                </div>
                <Button className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white h-9 text-[13px] px-4">
                    <Save size={14} /> Save Changes
                </Button>
            </div>

            <div className="space-y-4">
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-4 md:p-5">
                    <div className="space-y-3">
                        <TabHeader title="Application Details" icon={Settings} />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 pt-1">
                            {/* Left Side */}
                            <div className="space-y-3">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                                    <FormLabel required className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0">Application Name</FormLabel>
                                    <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                                    <div className="flex-1">
                                        <Input defaultValue="Softvence ERP System" className="h-8 text-[12.5px]" />
                                        <p className="text-[11px] text-slate-400 mt-0.5">This name appears in the header.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                                    <FormLabel required className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0">Support Email</FormLabel>
                                    <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                                    <div className="flex-1">
                                        <Input type="email" defaultValue="support@softvence.com" className="h-8 text-[12.5px]" />
                                    </div>
                                </div>
                            </div>

                            {/* Right Side */}
                            <div>
                                <div className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-2.5">
                                    <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0 mt-1">App Description</FormLabel>
                                    <span className="text-[12.5px] text-slate-400 hidden sm:inline mt-1">:</span>
                                    <div className="flex-1">
                                        <Textarea defaultValue="Enterprise Resource Planning system for managing internal company operations." className="min-h-[70px] text-[12.5px] py-1.5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-4 md:p-5">
                    <div className="space-y-3">
                        <TabHeader title="Features & Toggles" icon={Layout} />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                            <div className="flex items-center justify-between p-3 border border-slate-100 rounded-md bg-slate-50">
                                <div>
                                    <h4 className="text-[12.5px] font-bold text-slate-800">Allow User Registration</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">Let new users sign up on the login page.</p>
                                </div>
                                <Switch />
                            </div>
                            <div className="flex items-center justify-between p-3 border border-slate-100 rounded-md bg-slate-50">
                                <div>
                                    <h4 className="text-[12.5px] font-bold text-slate-800">Show Branding in Footer</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">Display 'Powered by Softvence' at the bottom of the page.</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


