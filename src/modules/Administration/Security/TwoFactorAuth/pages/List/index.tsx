import React from 'react';
import { Save, Smartphone, Mail, ShieldAlert } from 'lucide-react';
import Button from '@/components/ui/button';
import Switch from '@/components/ui/switch';

export default function TwoFactorAuthList() {
    return (
        <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-20">
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Two-Factor Authentication</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Configure global 2FA requirements and methods.</p>
                </div>
                <Button className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[13px] h-9 px-4">
                    <Save size={15} />
                    Save Settings
                </Button>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-md shadow-xs p-4 md:p-6">
                
                {/* Global Setting Banner Card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-emerald-50/60 border border-emerald-100/80 rounded-md mb-5">
                    <div className="flex items-center gap-3">
                        <div className="w-8.5 h-8.5 rounded-lg bg-emerald-100 border border-emerald-200/60 flex items-center justify-center shrink-0">
                            <ShieldAlert size={17} className="text-[#008060]" />
                        </div>
                        <div>
                            <h3 className="text-[13.5px] font-bold text-slate-900">Enforce Global 2FA</h3>
                            <p className="text-[12px] text-slate-600 mt-0.5">Require all users to set up two-factor authentication on login.</p>
                        </div>
                    </div>
                    <div className="shrink-0">
                        <Switch defaultChecked />
                    </div>
                </div>

                <h3 className="text-[14.5px] font-bold text-slate-800 mb-3.5 pb-2.5 border-b border-slate-100">Allowed Authentication Methods</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    <div className="p-3.5 px-4 bg-slate-50/70 rounded-md border border-slate-200/70 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                                <Smartphone size={16} className="text-slate-600" />
                            </div>
                            <div>
                                <h4 className="text-[13px] font-bold text-slate-800">Authenticator App (TOTP)</h4>
                                <p className="text-[11.5px] text-slate-500 mt-0.5">Google Authenticator, Authy, or Microsoft Authenticator.</p>
                            </div>
                        </div>
                        <Switch defaultChecked />
                    </div>

                    <div className="p-3.5 px-4 bg-slate-50/70 rounded-md border border-slate-200/70 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                                <Mail size={16} className="text-slate-600" />
                            </div>
                            <div>
                                <h4 className="text-[13px] font-bold text-slate-800">Email Verification</h4>
                                <p className="text-[11.5px] text-slate-500 mt-0.5">Send a one-time passcode to user's registered email address.</p>
                            </div>
                        </div>
                        <Switch defaultChecked />
                    </div>
                </div>
            </div>
        </div>
    );
}


