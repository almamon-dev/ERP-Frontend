import React from 'react';
import { Cloud, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import FormLabel from '@/components/ui/label';

export default function GoogleWorkspaceList() {
    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Google Workspace</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Configure Single Sign-On and Google Drive integration.</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                        <Cloud size={16} className="text-[#008060]" />
                        <h3 className="text-[14px] font-bold text-slate-900">OAuth Credentials</h3>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Client ID</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Input defaultValue="98234710293-apps.googleusercontent.com" className="h-8 text-[12.5px]" />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                            <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Client Secret</FormLabel>
                            <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                            <div className="flex-1">
                                <Input type="password" defaultValue="GOCSPX-abc123xyz890" className="h-8 text-[12.5px]" />
                            </div>
                        </div>

                        <div className="pt-1">
                            <Button className="w-full h-8.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px]">
                                Save OAuth Credentials
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#008060]" />
                        <h3 className="text-[14px] font-bold text-slate-900">Service Toggles</h3>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="p-2.5 px-3 rounded-md border border-slate-200/70 bg-slate-50 flex items-center justify-between">
                            <div>
                                <h3 className="text-[12.5px] font-bold text-slate-900">Google SSO Login</h3>
                                <p className="text-[11px] text-slate-500 mt-0.5">Allow users to log in via Google accounts.</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="p-2.5 px-3 rounded-md border border-slate-200/70 bg-slate-50 flex items-center justify-between">
                            <div>
                                <h3 className="text-[12.5px] font-bold text-slate-900">Google Calendar Sync</h3>
                                <p className="text-[11px] text-slate-500 mt-0.5">Synchronize schedule events automatically.</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
