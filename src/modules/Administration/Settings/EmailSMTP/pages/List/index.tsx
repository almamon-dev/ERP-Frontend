import React, { useState } from 'react';
import { Save, Send, Mail } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import Select from '@/components/ui/select';
import FormLabel from '@/components/ui/label';

export default function EmailSMTPList() {
    const [testEmail, setTestEmail] = useState('');

    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Email (SMTP)</h1>
                    <p className="text-[14px] font-medium text-[#008060] mt-1">Configure global outgoing email server settings.</p>
                </div>
                <Button className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                    <Save size={16} /> Save Configuration
                </Button>
            </div>

            <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                        <FormLabel required>Mail Driver</FormLabel>
                        <Select defaultValue="smtp">
                            <option value="smtp">SMTP</option>
                            <option value="sendmail">Sendmail</option>
                        </Select>
                    </div>
                    <div>
                        <FormLabel required>Mail Host</FormLabel>
                        <Input defaultValue="smtp.mailtrap.io" />
                    </div>
                    <div>
                        <FormLabel required>Mail Port</FormLabel>
                        <Input defaultValue="2525" />
                    </div>
                    <div>
                        <FormLabel>Encryption</FormLabel>
                        <Select defaultValue="tls">
                            <option value="tls">TLS</option>
                            <option value="ssl">SSL</option>
                        </Select>
                    </div>
                    <div>
                        <FormLabel required>Mail Username</FormLabel>
                        <Input defaultValue="admin_user" />
                    </div>
                    <div>
                        <FormLabel required>Mail Password</FormLabel>
                        <Input type="password" defaultValue="********" />
                    </div>
                    <div>
                        <FormLabel required>From Email Address</FormLabel>
                        <Input type="email" defaultValue="noreply@company.com" />
                    </div>
                    <div>
                        <FormLabel required>From Name</FormLabel>
                        <Input defaultValue="ERP System" />
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-200">
                    <h3 className="text-[16px] font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Send size={18} className="text-slate-500" />
                        Send Test Email
                    </h3>
                    <div className="flex items-center gap-4 max-w-md">
                        <div className="flex-1">
                            <Input 
                                type="email" 
                                placeholder="Enter email address..." 
                                value={testEmail}
                                onChange={(e) => setTestEmail(e.target.value)}
                            />
                        </div>
                        <Button variant="outline" className="shrink-0 flex items-center gap-2">
                            <Mail size={14} /> Send Test
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
