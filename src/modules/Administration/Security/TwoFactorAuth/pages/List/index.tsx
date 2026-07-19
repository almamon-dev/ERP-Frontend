import React from 'react';
import { Save, Smartphone, Mail, ShieldAlert } from 'lucide-react';
import Button from '@/components/ui/button';
import Switch from '@/components/ui/switch';

export default function TwoFactorAuthList() {
    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Two-Factor Authentication</h1>
                    <p className="text-[14px] font-medium text-[#008060] mt-1">Configure global 2FA requirements and methods.</p>
                </div>
                <Button className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                    <Save size={16} />
                    Save Settings
                </Button>
            </div>

            <div className="bg-white border border-slate-200 rounded-md shadow-sm p-6 md:p-8">
                
                {/* Global Setting */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-emerald-50/50 border border-emerald-100 rounded-lg mb-8">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                            <ShieldAlert size={18} className="text-[#008060]" />
                        </div>
                        <div>
                            <h3 className="text-[15px] font-bold text-slate-900">Enforce Global 2FA</h3>
                            <p className="text-[13px] text-slate-600 mt-0.5">Require all users to set up two-factor authentication.</p>
                        </div>
                    </div>
                    <div className="shrink-0 pl-14 sm:pl-0">
                        <Switch defaultChecked />
                    </div>
                </div>

                <h3 className="text-[15px] font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">Allowed Authentication Methods</h3>
                
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-5 border border-slate-200 rounded-md">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-50 rounded-md border border-slate-200 flex items-center justify-center">
                                <Smartphone size={20} className="text-slate-600" />
                            </div>
                            <div>
                                <h4 className="text-[14px] font-bold text-slate-800">Authenticator App (TOTP)</h4>
                                <p className="text-[13px] text-slate-500 mt-0.5">Google Authenticator, Authy, or Microsoft Authenticator.</p>
                            </div>
                        </div>
                        <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between p-5 border border-slate-200 rounded-md">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-50 rounded-md border border-slate-200 flex items-center justify-center">
                                <Mail size={20} className="text-slate-600" />
                            </div>
                            <div>
                                <h4 className="text-[14px] font-bold text-slate-800">Email Verification</h4>
                                <p className="text-[13px] text-slate-500 mt-0.5">Send a one-time passcode to the user's registered email address.</p>
                            </div>
                        </div>
                        <Switch defaultChecked />
                    </div>
                </div>
            </div>
        </div>
    );
}
