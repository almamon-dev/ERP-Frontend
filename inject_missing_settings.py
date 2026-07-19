import os

base_dir = 'src/modules/Administration/Settings'

content_map = {
    'Localization': """import React, { useState } from 'react';
import { Globe, Save } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Select from '@/components/ui/select';
import FormLabel from '@/components/ui/label';
import TabHeader from '@/components/ui/tab-header';

export default function LocalizationList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm">
                        <Globe size={20} />
                    </div>
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">Localization</h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">Configure global localization, timezone, and formats.</p>
                    </div>
                </div>
                <Button size="sm" className="h-[32px] text-[14px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                    <Save size={14} />
                    Save Settings
                </Button>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-6">
                <div className="space-y-4">
                    <TabHeader title="System Defaults" icon={Globe} />
                    
                    <div className="grid grid-cols-[200px_10px_1fr] md:grid-cols-[250px_10px_1fr] items-center gap-3">
                        <FormLabel required>Default Language</FormLabel>
                        <p className="text-[14px] text-slate-400">:</p>
                        <Select className="h-[36px] max-w-md">
                            <option value="en">English (US)</option>
                            <option value="en-gb">English (UK)</option>
                            <option value="bn">Bengali</option>
                            <option value="es">Spanish</option>
                        </Select>
                    </div>
                    <div className="grid grid-cols-[200px_10px_1fr] md:grid-cols-[250px_10px_1fr] items-center gap-3">
                        <FormLabel required>Default Time Zone</FormLabel>
                        <p className="text-[14px] text-slate-400">:</p>
                        <Select className="h-[36px] max-w-md">
                            <option value="UTC">UTC</option>
                            <option value="Asia/Dhaka">Asia/Dhaka (GMT+6)</option>
                            <option value="America/New_York">America/New_York (EST)</option>
                        </Select>
                    </div>
                    <div className="grid grid-cols-[200px_10px_1fr] md:grid-cols-[250px_10px_1fr] items-center gap-3">
                        <FormLabel required>Date Format</FormLabel>
                        <p className="text-[14px] text-slate-400">:</p>
                        <Select className="h-[36px] max-w-md">
                            <option value="YYYY-MM-DD">YYYY-MM-DD (2026-07-19)</option>
                            <option value="DD-MM-YYYY">DD-MM-YYYY (19-07-2026)</option>
                            <option value="MM/DD/YYYY">MM/DD/YYYY (07/19/2026)</option>
                        </Select>
                    </div>
                    <div className="grid grid-cols-[200px_10px_1fr] md:grid-cols-[250px_10px_1fr] items-center gap-3">
                        <FormLabel required>Time Format</FormLabel>
                        <p className="text-[14px] text-slate-400">:</p>
                        <Select className="h-[36px] max-w-md">
                            <option value="12">12-hour (02:30 PM)</option>
                            <option value="24">24-hour (14:30)</option>
                        </Select>
                    </div>
                    <div className="grid grid-cols-[200px_10px_1fr] md:grid-cols-[250px_10px_1fr] items-center gap-3">
                        <FormLabel required>First Day of Week</FormLabel>
                        <p className="text-[14px] text-slate-400">:</p>
                        <Select className="h-[36px] max-w-md">
                            <option value="0">Sunday</option>
                            <option value="1">Monday</option>
                            <option value="6">Saturday</option>
                        </Select>
                    </div>
                    <div className="grid grid-cols-[200px_10px_1fr] md:grid-cols-[250px_10px_1fr] items-center gap-3">
                        <FormLabel required>Default Currency</FormLabel>
                        <p className="text-[14px] text-slate-400">:</p>
                        <Select className="h-[36px] max-w-md">
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                            <option value="BDT">BDT (৳)</option>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
}
""",
    'Notifications': """import React from 'react';
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
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm">
                        <Bell size={20} />
                    </div>
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
            
            <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-6 space-y-6">
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
""",
    'Security': """import React from 'react';
import { Shield, Save } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import Select from '@/components/ui/select';
import FormLabel from '@/components/ui/label';
import TabHeader from '@/components/ui/tab-header';

export default function SecurityList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm">
                        <Shield size={20} />
                    </div>
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">Security Policies</h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">Manage global security, sessions, and authentications.</p>
                    </div>
                </div>
                <Button size="sm" className="h-[32px] text-[14px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                    <Save size={14} />
                    Save Policies
                </Button>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-6">
                <div className="space-y-4">
                    <TabHeader title="Authentication Settings" icon={Shield} />
                    
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
                        <Switch id="req-2fa" defaultChecked />
                        <label htmlFor="req-2fa" className="text-[14px] font-medium text-slate-800 cursor-pointer">Enforce 2-Factor Authentication globally</label>
                    </div>
                    
                    <div className="grid grid-cols-[200px_10px_1fr] md:grid-cols-[250px_10px_1fr] items-center gap-3">
                        <FormLabel required>Session Timeout (Minutes)</FormLabel>
                        <p className="text-[14px] text-slate-400">:</p>
                        <Input type="number" defaultValue="120" className="h-[36px] max-w-[150px]" />
                    </div>
                    
                    <div className="grid grid-cols-[200px_10px_1fr] md:grid-cols-[250px_10px_1fr] items-center gap-3">
                        <FormLabel required>Max Failed Login Attempts</FormLabel>
                        <p className="text-[14px] text-slate-400">:</p>
                        <Select className="h-[36px] max-w-[150px]">
                            <option value="3">3 Attempts</option>
                            <option value="5">5 Attempts</option>
                            <option value="10">10 Attempts</option>
                        </Select>
                    </div>
                    
                    <div className="grid grid-cols-[200px_10px_1fr] md:grid-cols-[250px_10px_1fr] items-center gap-3">
                        <FormLabel required>Password Expiration (Days)</FormLabel>
                        <p className="text-[14px] text-slate-400">:</p>
                        <Input type="number" defaultValue="90" className="h-[36px] max-w-[150px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
""",
    'ApiSettings': """import React from 'react';
import { Webhook, Plus } from 'lucide-react';
import Button from '@/components/ui/button';
import TabHeader from '@/components/ui/tab-header';

export default function ApiSettingsList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm">
                        <Webhook size={20} />
                    </div>
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">API Settings</h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">Manage API keys and integration webhooks.</p>
                    </div>
                </div>
                <Button size="sm" className="h-[32px] text-[14px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                    <Plus size={14} />
                    Generate API Key
                </Button>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-6">
                <TabHeader title="Active API Keys" icon={Webhook} />
                <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200 bg-slate-50">
                                <th className="p-3 text-[13px] font-semibold text-slate-600">Key Name</th>
                                <th className="p-3 text-[13px] font-semibold text-slate-600">API Key</th>
                                <th className="p-3 text-[13px] font-semibold text-slate-600">Permissions</th>
                                <th className="p-3 text-[13px] font-semibold text-slate-600">Last Used</th>
                                <th className="p-3 text-[13px] font-semibold text-slate-600">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100">
                                <td className="p-3 text-[14px] text-slate-800 font-medium">Mobile App Client</td>
                                <td className="p-3 text-[14px] text-slate-500 font-mono">sk_live_********************a1f</td>
                                <td className="p-3"><span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-[12px] font-medium">Read/Write</span></td>
                                <td className="p-3 text-[14px] text-slate-500">2 mins ago</td>
                                <td className="p-3"><span className="px-2 py-1 bg-green-50 text-green-600 rounded text-[12px] font-medium">Active</span></td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="p-3 text-[14px] text-slate-800 font-medium">Analytics Integration</td>
                                <td className="p-3 text-[14px] text-slate-500 font-mono">sk_live_********************b9x</td>
                                <td className="p-3"><span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[12px] font-medium">Read Only</span></td>
                                <td className="p-3 text-[14px] text-slate-500">1 day ago</td>
                                <td className="p-3"><span className="px-2 py-1 bg-green-50 text-green-600 rounded text-[12px] font-medium">Active</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
""",
    'QueueScheduler': """import React from 'react';
import { Timer, RefreshCw } from 'lucide-react';
import Button from '@/components/ui/button';
import TabHeader from '@/components/ui/tab-header';

export default function QueueSchedulerList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm">
                        <Timer size={20} />
                    </div>
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">Queue & Scheduler</h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">Monitor background jobs and scheduled tasks.</p>
                    </div>
                </div>
                <Button variant="outline" size="sm" className="h-[32px] text-[14px] flex items-center gap-2">
                    <RefreshCw size={14} />
                    Refresh Stats
                </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-5 rounded-md border border-slate-200 shadow-sm">
                    <h3 className="text-[14px] font-medium text-slate-500">Pending Jobs</h3>
                    <p className="text-[28px] font-bold text-slate-800 mt-1">12</p>
                </div>
                <div className="bg-white p-5 rounded-md border border-slate-200 shadow-sm">
                    <h3 className="text-[14px] font-medium text-slate-500">Failed Jobs</h3>
                    <p className="text-[28px] font-bold text-red-600 mt-1">3</p>
                </div>
                <div className="bg-white p-5 rounded-md border border-slate-200 shadow-sm">
                    <h3 className="text-[14px] font-medium text-slate-500">Active Workers</h3>
                    <p className="text-[28px] font-bold text-green-600 mt-1">4</p>
                </div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-6">
                <TabHeader title="Recent Failed Jobs" icon={Timer} />
                <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200 bg-slate-50">
                                <th className="p-3 text-[13px] font-semibold text-slate-600">ID</th>
                                <th className="p-3 text-[13px] font-semibold text-slate-600">Connection</th>
                                <th className="p-3 text-[13px] font-semibold text-slate-600">Queue</th>
                                <th className="p-3 text-[13px] font-semibold text-slate-600">Failed At</th>
                                <th className="p-3 text-[13px] font-semibold text-slate-600">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100">
                                <td className="p-3 text-[14px] text-slate-800 font-mono">#9021</td>
                                <td className="p-3 text-[14px] text-slate-500">redis</td>
                                <td className="p-3"><span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[12px] font-medium">emails</span></td>
                                <td className="p-3 text-[14px] text-slate-500">10 mins ago</td>
                                <td className="p-3"><Button variant="outline" size="sm" className="h-[28px] text-[12px]">Retry</Button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
""",
    'CacheManagement': """import React from 'react';
import { RefreshCcw, Trash2 } from 'lucide-react';
import Button from '@/components/ui/button';
import TabHeader from '@/components/ui/tab-header';

export default function CacheManagementList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm">
                    <RefreshCcw size={20} />
                </div>
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Cache Management</h1>
                    <p className="text-[14px] font-medium text-slate-500 mt-1">Clear system cache to apply new configurations.</p>
                </div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-6 space-y-6">
                <TabHeader title="Clear Application Cache" icon={RefreshCcw} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-5 border border-slate-200 rounded-md bg-slate-50 text-center flex flex-col items-center">
                        <h4 className="text-[15px] font-semibold text-slate-800 mb-1">Application Cache</h4>
                        <p className="text-[13px] text-slate-500 mb-4 h-10">Clear general application cache.</p>
                        <Button variant="outline" className="w-full border-orange-200 text-orange-600 hover:bg-orange-50">
                            <Trash2 size={16} className="mr-2" /> Clear Cache
                        </Button>
                    </div>
                    <div className="p-5 border border-slate-200 rounded-md bg-slate-50 text-center flex flex-col items-center">
                        <h4 className="text-[15px] font-semibold text-slate-800 mb-1">Configuration Cache</h4>
                        <p className="text-[13px] text-slate-500 mb-4 h-10">Clear and rebuild configuration cache.</p>
                        <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                            <Trash2 size={16} className="mr-2" /> Clear Config
                        </Button>
                    </div>
                    <div className="p-5 border border-slate-200 rounded-md bg-slate-50 text-center flex flex-col items-center">
                        <h4 className="text-[15px] font-semibold text-slate-800 mb-1">Route Cache</h4>
                        <p className="text-[13px] text-slate-500 mb-4 h-10">Clear and rebuild routing cache.</p>
                        <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                            <Trash2 size={16} className="mr-2" /> Clear Routes
                        </Button>
                    </div>
                    <div className="p-5 border border-slate-200 rounded-md bg-slate-50 text-center flex flex-col items-center">
                        <h4 className="text-[15px] font-semibold text-slate-800 mb-1">View Cache</h4>
                        <p className="text-[13px] text-slate-500 mb-4 h-10">Clear compiled view templates.</p>
                        <Button variant="outline" className="w-full border-emerald-200 text-emerald-600 hover:bg-emerald-50">
                            <Trash2 size={16} className="mr-2" /> Clear Views
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
""",
    'SystemLogs': """import React from 'react';
import { Terminal, Download } from 'lucide-react';
import Button from '@/components/ui/button';
import TabHeader from '@/components/ui/tab-header';

export default function SystemLogsList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm">
                        <Terminal size={20} />
                    </div>
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">System Logs</h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">View application error and debug logs.</p>
                    </div>
                </div>
                <Button variant="outline" size="sm" className="h-[32px] text-[14px] flex items-center gap-2">
                    <Download size={14} />
                    Download Logs
                </Button>
            </div>
            
            <div className="bg-[#1e1e1e] border border-slate-800 rounded-md shadow-sm w-full p-4 overflow-x-auto">
                <div className="flex items-center gap-2 mb-4 px-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-slate-400 text-[12px] font-mono ml-2">laravel.log</span>
                </div>
                <pre className="text-[13px] text-green-400 font-mono leading-relaxed px-2">
                    [2026-07-19 10:14:22] local.INFO: Application cache cleared successfully. <br/>
                    [2026-07-19 10:15:01] local.ERROR: Connection refused [tcp://127.0.0.1:6379] <br/>
                    [2026-07-19 10:15:02] local.WARNING: Failed to send email to admin@example.com <br/>
                    [2026-07-19 10:25:55] local.INFO: User ID 1 authenticated via web guard. <br/>
                    [2026-07-19 10:30:12] local.DEBUG: Query time: 4.5ms for SELECT * FROM users <br/>
                </pre>
            </div>
        </div>
    );
}
""",
    'License': """import React from 'react';
import { Key, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import FormLabel from '@/components/ui/label';
import TabHeader from '@/components/ui/tab-header';

export default function LicenseList() {
    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm">
                        <Key size={20} />
                    </div>
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">License Verification</h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">Manage application license and activation status.</p>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-6">
                    <TabHeader title="License Details" icon={ShieldCheck} />
                    <div className="space-y-4 mt-4">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-md flex items-start gap-3 text-green-800">
                            <ShieldCheck size={24} className="text-green-600" />
                            <div>
                                <h4 className="font-semibold text-[15px]">Active License</h4>
                                <p className="text-[13px] opacity-80 mt-1">Your software is fully licensed and receives automated updates.</p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-100">
                            <div>
                                <p className="text-[12px] text-slate-500 font-medium">License Type</p>
                                <p className="text-[14px] font-semibold text-slate-800 mt-1">Enterprise Edition</p>
                            </div>
                            <div>
                                <p className="text-[12px] text-slate-500 font-medium">Valid Until</p>
                                <p className="text-[14px] font-semibold text-slate-800 mt-1">Lifetime</p>
                            </div>
                            <div>
                                <p className="text-[12px] text-slate-500 font-medium">Support Expiry</p>
                                <p className="text-[14px] font-semibold text-slate-800 mt-1">Dec 31, 2027</p>
                            </div>
                            <div>
                                <p className="text-[12px] text-slate-500 font-medium">Domain</p>
                                <p className="text-[14px] font-semibold text-slate-800 mt-1">erp.example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white border border-slate-200 rounded-md shadow-sm w-full p-6">
                    <TabHeader title="Update License" icon={Key} />
                    <div className="space-y-4 mt-4">
                        <div>
                            <FormLabel required>Purchase Code</FormLabel>
                            <Input placeholder="Enter your envato purchase code..." className="mt-2 h-[40px]" />
                        </div>
                        <div>
                            <FormLabel required>Envato Username</FormLabel>
                            <Input placeholder="Enter envato username..." className="mt-2 h-[40px]" />
                        </div>
                        <Button className="w-full bg-[#008060] hover:bg-[#006e52] text-white h-[40px]">
                            Verify & Activate License
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
"""
}

for mod, content in content_map.items():
    file_path = os.path.join(base_dir, mod, 'pages', 'List', 'index.tsx')
    if os.path.exists(file_path):
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Injected content for {mod}")
    else:
        print(f"Path not found: {file_path}")

print("Injection complete!")
