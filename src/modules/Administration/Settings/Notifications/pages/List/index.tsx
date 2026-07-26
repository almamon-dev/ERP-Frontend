import React from 'react';
import { Bell, Save } from 'lucide-react';
import Button from '@/components/ui/button';
import Switch from '@/components/ui/switch';
import TabHeader from '@/components/ui/tab-header';

export default function NotificationsList() {
    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Notifications</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Configure global notification preferences and channels.</p>
                </div>
                <Button size="sm" className="h-9 text-[13px] px-4 flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white">
                    <Save size={14} />
                    Save Settings
                </Button>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-4 md:p-5">
                <div className="space-y-3">
                    <TabHeader title="System Notifications" icon={Bell} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                        <div className="flex items-center justify-between p-3 border border-slate-100 rounded-md bg-slate-50">
                            <div>
                                <h4 className="text-[12.5px] font-bold text-slate-800">Email Notifications</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">Send system alerts via email.</p>
                            </div>
                            <Switch id="email-notif" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between p-3 border border-slate-100 rounded-md bg-slate-50">
                            <div>
                                <h4 className="text-[12.5px] font-bold text-slate-800">In-App Notifications</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">Show bell icon alerts inside the app.</p>
                            </div>
                            <Switch id="inapp-notif" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between p-3 border border-slate-100 rounded-md bg-slate-50">
                            <div>
                                <h4 className="text-[12.5px] font-bold text-slate-800">Push Notifications</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">Send browser push notifications.</p>
                            </div>
                            <Switch id="push-notif" />
                        </div>
                        <div className="flex items-center justify-between p-3 border border-slate-100 rounded-md bg-slate-50">
                            <div>
                                <h4 className="text-[12.5px] font-bold text-slate-800">SMS Notifications</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">Send critical alerts via SMS.</p>
                            </div>
                            <Switch id="sms-notif" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

