import React from 'react';
import { MessageSquare } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Select from '@/components/ui/select';
import FormLabel from '@/components/ui/label';

export default function SMSProviderList() {
    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">SMS Providers</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Configure Twilio, Infobip, or local bulk SMS gateways.</p>
                </div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                    <MessageSquare size={16} className="text-[#008060]" />
                    <h3 className="text-[14px] font-bold text-slate-900">SMS Gateway Configuration</h3>
                </div>
                <div className="p-4 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                        <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Provider</FormLabel>
                        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                        <div className="flex-1">
                            <Select className="h-8 text-[12.5px]" defaultValue="twilio">
                                <option value="twilio">Twilio</option>
                                <option value="infobip">Infobip</option>
                                <option value="ssl_sms">SSL Wireless SMS</option>
                            </Select>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                        <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Account SID / API Key</FormLabel>
                        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                        <div className="flex-1">
                            <Input defaultValue="AC12938102938109238" className="h-8 text-[12.5px]" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                        <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Auth Token</FormLabel>
                        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                        <div className="flex-1">
                            <Input type="password" defaultValue="auth_token_secret" className="h-8 text-[12.5px]" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                        <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Sender ID / Number</FormLabel>
                        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                        <div className="flex-1">
                            <Input defaultValue="+18005550199" className="h-8 text-[12.5px]" />
                        </div>
                    </div>

                    <div className="pt-1">
                        <Button className="w-full h-8.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px]">
                            Save SMS Gateway
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
