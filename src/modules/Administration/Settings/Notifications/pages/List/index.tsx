import React from 'react';
import { Bell, Save } from 'lucide-react';
import Button from '@/components/ui/button';
import Switch from '@/components/ui/switch';
import FormLabel from '@/components/ui/label';
import TabHeader from '@/components/ui/tab-header';

export default function NotificationsList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                   
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">Notifications</h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">Configure global notification preferences and channels.</p>
                    </div>
                </div>
                <Button size="sm" className="h-[32px] text-[14px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                    <Save size={14} />
                    Save Settings
                </Button>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-6 md:p-8">
                <div className="space-y-4">
                    <TabHeader title="System Notifications" icon={Bell} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start justify-between p-4 border border-slate-100 rounded-md bg-slate-50">
                            <div>
                                <h4 className="text-[14px] font-semibold text-slate-800">Email Notifications</h4>
                                <p className="text-[12px] text-slate-500 mt-1">Send system alerts via email.</p>
                            </div>
                            <Switch id="email-notif" defaultChecked />
                        </div>
                        <div className="flex items-start justify-between p-4 border border-slate-100 rounded-md bg-slate-50">
                            <div>
                                <h4 className="text-[14px] font-semibold text-slate-800">In-App Notifications</h4>
                                <p className="text-[12px] text-slate-500 mt-1">Show bell icon alerts inside the app.</p>
                            </div>
                            <Switch id="inapp-notif" defaultChecked />
                        </div>
                        <div className="flex items-start justify-between p-4 border border-slate-100 rounded-md bg-slate-50">
                            <div>
                                <h4 className="text-[14px] font-semibold text-slate-800">Push Notifications</h4>
                                <p className="text-[12px] text-slate-500 mt-1">Send browser push notifications.</p>
                            </div>
                            <Switch id="push-notif" />
                        </div>
                        <div className="flex items-start justify-between p-4 border border-slate-100 rounded-md bg-slate-50">
                            <div>
                                <h4 className="text-[14px] font-semibold text-slate-800">SMS Notifications</h4>
                                <p className="text-[12px] text-slate-500 mt-1">Send critical alerts via SMS.</p>
                            </div>
                            <Switch id="sms-notif" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
