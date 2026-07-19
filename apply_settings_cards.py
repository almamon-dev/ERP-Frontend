import os

BASE_DIR = r"c:\Users\mamun\Herd\new persona\erp-frontend\src\modules\Administration\Settings"

FILES = {
    "Localization/pages/List/index.tsx": """import React from 'react';
import { Globe, Hash } from 'lucide-react';
import Button from '@/components/ui/button';
import Select from '@/components/ui/select';

export default function LocalizationList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Localization</h1>
                    <p className="text-[14px] font-medium text-slate-500 mt-1">Configure language, time zone, and regional formats.</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
                
                {/* System Defaults Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <Globe size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">System Defaults</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Default Language <span className="text-red-500">*</span>
                            </label>
                            <Select className="h-[38px] text-[13px]">
                                <option value="en">English (US)</option>
                                <option value="en-gb">English (UK)</option>
                                <option value="bn">Bengali</option>
                            </Select>
                        </div>
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Default Time Zone <span className="text-red-500">*</span>
                            </label>
                            <Select className="h-[38px] text-[13px]">
                                <option value="UTC">UTC (Coordinated Universal Time)</option>
                                <option value="BDT" selected>Bangladesh Standard Time (BDT)</option>
                            </Select>
                        </div>
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Save System Defaults
                            </Button>
                        </div>
                    </div>
                </div>
                
                {/* Formatting Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <Hash size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Formatting</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Date Format <span className="text-red-500">*</span>
                            </label>
                            <Select className="h-[38px] text-[13px]">
                                <option value="YYYY-MM-DD">YYYY-MM-DD (2026-12-31)</option>
                                <option value="DD/MM/YYYY">DD/MM/YYYY (31/12/2026)</option>
                            </Select>
                        </div>
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Time Format <span className="text-red-500">*</span>
                            </label>
                            <Select className="h-[38px] text-[13px]">
                                <option value="12h">12-hour (01:00 PM)</option>
                                <option value="24h">24-hour (13:00)</option>
                            </Select>
                        </div>
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Save Formatting Rules
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}""",
    
    "Storage/pages/List/index.tsx": """import React, { useState } from 'react';
import { HardDrive, Server, Cloud, CheckCircle2, Settings2 } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

export default function StorageList() {
    const [selectedDriver, setSelectedDriver] = useState('local');

    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Storage & File Uploads</h1>
                    <p className="text-[14px] font-medium text-slate-500 mt-1">Configure where system files and media are stored.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 items-start">
                
                {/* Storage Driver Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <HardDrive size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Storage Driver</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div className="grid grid-cols-1 gap-2.5">
                            <div onClick={() => setSelectedDriver('local')} className={`relative cursor-pointer rounded-lg p-2.5 border flex items-center gap-3 transition-all ${selectedDriver === 'local' ? 'border-green-700 bg-green-50/30 shadow-sm' : 'border-slate-200 bg-white'}`}>
                                <div className={`w-8 h-8 rounded-md flex items-center justify-center ${selectedDriver === 'local' ? 'bg-green-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
                                    <Server size={16} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[13px] font-bold text-slate-900">Local Server</h4>
                                    <p className="text-[12px] text-slate-500 mt-0.5">Files stored on this server</p>
                                </div>
                                {selectedDriver === 'local' && <CheckCircle2 size={16} className="text-green-700" />}
                            </div>
                            
                            <div onClick={() => setSelectedDriver('r2')} className={`relative cursor-pointer rounded-lg p-2.5 border flex items-center gap-3 transition-all ${selectedDriver === 'r2' ? 'border-green-700 bg-green-50/30 shadow-sm' : 'border-slate-200 bg-white'}`}>
                                <div className={`w-8 h-8 rounded-md flex items-center justify-center ${selectedDriver === 'r2' ? 'bg-green-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
                                    <Cloud size={16} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[13px] font-bold text-slate-900">Cloudflare R2</h4>
                                    <p className="text-[12px] text-slate-500 mt-0.5">Free 10GB • No egress fees</p>
                                </div>
                                {selectedDriver === 'r2' && <CheckCircle2 size={16} className="text-green-700" />}
                            </div>
                        </div>

                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Save Driver Settings
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Upload Rules Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <Settings2 size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Upload Rules</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Max Upload Size (MB) <span className="text-red-500">*</span>
                            </label>
                            <Input type="number" defaultValue="50" className="h-[38px] text-[13px]" />
                        </div>
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Allowed Extensions <span className="text-red-500">*</span>
                            </label>
                            <Input defaultValue="jpg, png, pdf, docx, zip" className="h-[38px] text-[13px]" />
                        </div>
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Save Upload Rules
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}""",
    
    "MaintenanceMode/pages/List/index.tsx": """import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Switch from '@/components/ui/switch';

export default function MaintenanceModeList() {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Maintenance Mode</h1>
                    <p className="text-[14px] font-medium text-slate-500 mt-1">Take the system offline for updates and repairs.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 items-start">
                
                {/* Status Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <AlertTriangle size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Status & Message</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div className={`p-4 rounded-lg border flex items-center justify-between transition-colors ${isEnabled ? 'bg-amber-50/50 border-amber-200' : 'bg-slate-50 border-slate-200'}`}>
                            <div>
                                <h3 className="text-[13px] font-bold text-slate-900">Maintenance Mode</h3>
                                <p className="text-[12px] text-slate-500">Take the system offline for repairs</p>
                            </div>
                            <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
                        </div>
                        
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Public Message <span className="text-red-500">*</span>
                            </label>
                            <Textarea defaultValue="We are currently undergoing scheduled maintenance. Please check back soon." className="min-h-[100px] text-[13px]" />
                        </div>
                        
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Update Status
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Access Card */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <ShieldCheck size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Access Control</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Bypass Secret <span className="text-red-500">*</span>
                            </label>
                            <Input defaultValue="admin_bypass_2026" className="h-[38px] text-[13px]" />
                        </div>
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Whitelisted IPs <span className="text-red-500">*</span>
                            </label>
                            <Input defaultValue="192.168.1.1, 10.0.0.5" className="h-[38px] text-[13px]" />
                        </div>
                        
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Save Access Rules
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}""",

    "Security/pages/List/index.tsx": """import React from 'react';
import { UserCheck, KeyRound } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import Select from '@/components/ui/select';

export default function SecurityList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Security Policies</h1>
                    <p className="text-[14px] font-medium text-slate-500 mt-1">Manage global security, sessions, and authentications.</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 items-start">
                
                {/* Left Card: Authentication Rules */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <UserCheck size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Authentication Rules</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between">
                            <div>
                                <h3 className="text-[13px] font-bold text-slate-900">Enforce 2-Factor Auth</h3>
                                <p className="text-[12px] text-slate-500">Require MFA for all active users.</p>
                            </div>
                            <Switch id="req-2fa" defaultChecked />
                        </div>

                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Session Timeout (Minutes) <span className="text-red-500">*</span>
                            </label>
                            <Input type="number" defaultValue="120" className="h-[38px] text-[13px]" />
                        </div>
                        
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Save Auth Rules
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right Card: Password & Access */}
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
                        <KeyRound size={18} className="text-slate-600" />
                        <h3 className="text-[15px] font-bold text-slate-900">Password & Access</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Max Failed Logins <span className="text-red-500">*</span>
                            </label>
                            <Select className="h-[38px] text-[13px]">
                                <option value="3">3 Attempts</option>
                                <option value="5">5 Attempts</option>
                                <option value="10">10 Attempts</option>
                            </Select>
                        </div>
                        
                        <div>
                            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                                Password Expiration (Days) <span className="text-red-500">*</span>
                            </label>
                            <Input type="number" defaultValue="90" className="h-[38px] text-[13px]" />
                        </div>
                        
                        <div className="pt-2">
                            <Button className="w-full h-[40px] bg-[#008060] hover:bg-[#006e52] text-white font-medium text-[14px]">
                                Save Access Settings
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}"""
}

def apply_styles():
    for rel_path, content in FILES.items():
        full_path = os.path.join(BASE_DIR, rel_path)
        if os.path.exists(full_path):
            with open(full_path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Refactored: {rel_path}")
        else:
            print(f"Skipped (not found): {rel_path}")

if __name__ == "__main__":
    apply_styles()
