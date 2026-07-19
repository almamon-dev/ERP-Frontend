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
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">General Settings</h1>
                    <p className="text-[14px] font-medium text-slate-500 mt-1">Configure global application behavior and display.</p>
                </div>
                <Button className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white h-[32px] text-[14px] px-4">
                    <Save size={14} /> Save Changes
                </Button>
            </div>

            <div className="space-y-6">
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-6 md:p-8">
                    <div className="space-y-4">
                        <TabHeader title="Application Details" icon={Settings} />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-2">
                            {/* Left Side */}
                            <div className="space-y-4">
                                <div className="grid grid-cols-[140px_10px_1fr] items-start gap-3">
                                    <FormLabel required className="!mb-0 mt-2">Application Name</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                    <div>
                                        <Input defaultValue="Softvence ERP System" className="h-[36px]" />
                                        <p className="text-[12px] text-slate-500 mt-1">This name appears in the header.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-[140px_10px_1fr] items-center gap-3">
                                    <FormLabel required className="!mb-0">Support Email</FormLabel>
                                        <p className="text-[14px] text-slate-400">:</p>
                                    <Input type="email" defaultValue="support@softvence.com" className="h-[36px]" />
                                </div>
                            </div>

                            {/* Right Side */}
                            <div>
                                <div className="grid grid-cols-[140px_12px_1fr] items-start gap-3">
                                    <FormLabel className="!mb-0 mt-2">App Description</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                    <Textarea defaultValue="Enterprise Resource Planning system for managing internal company operations." className="min-h-[96px] text-[14px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-6 md:p-8">
                    <div className="space-y-4">
                        <TabHeader title="Features & Toggles" icon={Layout} />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            <div className="flex items-start justify-between p-4 border border-slate-100 rounded-md bg-slate-50">
                                <div>
                                    <h4 className="text-[14px] font-semibold text-slate-800">Allow User Registration</h4>
                                    <p className="text-[12px] text-slate-500 mt-1">Let new users sign up on the login page.</p>
                                </div>
                                <Switch />
                            </div>
                            <div className="flex items-start justify-between p-4 border border-slate-100 rounded-md bg-slate-50">
                                <div>
                                    <h4 className="text-[14px] font-semibold text-slate-800">Show Branding in Footer</h4>
                                    <p className="text-[12px] text-slate-500 mt-1">Display 'Powered by Softvence' at the bottom of the page.</p>
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

