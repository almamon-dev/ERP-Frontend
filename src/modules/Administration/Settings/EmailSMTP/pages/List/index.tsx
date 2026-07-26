import React, { useState } from 'react';
import { Save, Send, Mail } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Select from '@/components/ui/select';
import FormLabel from '@/components/ui/label';

export default function EmailSMTPList() {
    const [testEmail, setTestEmail] = useState('');

    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Email (SMTP)</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Configure global outgoing email server settings.</p>
                </div>
                <Button className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white h-9 text-[13px] px-4">
                    <Save size={14} /> Save Configuration
                </Button>
            </div>

            <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-4 md:p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                        <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Mail Driver</FormLabel>
                        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                        <div className="flex-1">
                            <Select defaultValue="smtp" className="h-8 text-[12.5px]">
                                <option value="smtp">SMTP</option>
                                <option value="sendmail">Sendmail</option>
                            </Select>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                        <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Mail Host</FormLabel>
                        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                        <div className="flex-1">
                            <Input defaultValue="smtp.mailtrap.io" className="h-8 text-[12.5px]" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                        <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Mail Port</FormLabel>
                        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                        <div className="flex-1">
                            <Input defaultValue="2525" className="h-8 text-[12.5px]" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                        <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0">Encryption</FormLabel>
                        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                        <div className="flex-1">
                            <Select defaultValue="tls" className="h-8 text-[12.5px]">
                                <option value="tls">TLS</option>
                                <option value="ssl">SSL</option>
                            </Select>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                        <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Mail Username</FormLabel>
                        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                        <div className="flex-1">
                            <Input defaultValue="admin_user" className="h-8 text-[12.5px]" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                        <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Mail Password</FormLabel>
                        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                        <div className="flex-1">
                            <Input type="password" defaultValue="********" className="h-8 text-[12.5px]" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                        <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>From Email Address</FormLabel>
                        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                        <div className="flex-1">
                            <Input type="email" defaultValue="noreply@company.com" className="h-8 text-[12.5px]" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                        <FormLabel className="!mb-0 sm:w-36 text-[12.5px] font-semibold text-slate-700 shrink-0" required>From Name</FormLabel>
                        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                        <div className="flex-1">
                            <Input defaultValue="ERP System" className="h-8 text-[12.5px]" />
                        </div>
                    </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200">
                    <h3 className="text-[14px] font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <Send size={15} className="text-[#008060]" />
                        Send Test Email
                    </h3>
                    <div className="flex items-center gap-3 max-w-md">
                        <div className="flex-1">
                            <Input 
                                type="email" 
                                placeholder="Enter email address..." 
                                value={testEmail}
                                onChange={(e) => setTestEmail(e.target.value)}
                                className="h-8 text-[12.5px]"
                            />
                        </div>
                        <Button variant="outline" className="shrink-0 flex items-center gap-1.5 h-8 text-[12.5px]">
                            <Mail size={13} /> Send Test
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

