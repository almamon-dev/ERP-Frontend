import React, { useState } from 'react';
import { Activity, ArrowLeft, Building2, ChevronRight, FileText, Info, Lock, Phone, Save, Shield, UserCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import Select from '@/components/ui/select';
import TabHeader from '@/components/ui/tab-header';
import FormLabel from '@/components/ui/label';

const TABS = [
    { id: 'overview', label: 'Account Information', icon: UserCircle },
    { id: 'roles', label: 'Roles & Organization', icon: Shield },
    { id: 'security', label: 'Security & Settings', icon: Lock }
];

export default function UserEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">Edit User #{id}</h1>
                        <p className="text-[14px] font-medium text-[#008060] mt-1">Update the user's information and settings.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-[32px] text-[14px]" onClick={() => navigate(-1)}>
                        Cancel
                    </Button>
                    <Button size="sm" className="h-[32px] text-[14px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                        <Save size={14} />
                        Save Changes
                    </Button>
                </div>
            </div>

            {/* Layout */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-[260px] flex-shrink-0 bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
                    <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
                        <h3 className="text-[15px] font-bold text-slate-800">Categories</h3>
                    </div>
                    <div className="flex flex-col">
                        {TABS.map((tab) => {
                            const Icon = tab.icon;
                            const isSelected = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center justify-between px-4 py-2.5 text-[14px] font-medium transition-colors border-l-[3px] border-b border-slate-50 last:border-b-0 ${
                                        isSelected 
                                            ? 'border-l-[#008060] bg-[#f8fbf9] text-[#008060]' 
                                            : 'border-l-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                                >
                                    <div className="flex items-center gap-2.5">
                                        <Icon size={15} className={isSelected ? 'text-[#008060]' : 'text-slate-400'} />
                                        {tab.label}
                                    </div>
                                    {isSelected && <ChevronRight size={15} className="text-[#008060]" />}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="p-6 md:p-8">

                        {activeTab === 'overview' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Account Information" icon={UserCircle} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-center gap-3">
                                        <FormLabel required className="!mb-0 mt-2">First Name</FormLabel>
                                        <p className="text-[14px] text-slate-400">:</p>
                                        <Input defaultValue="John" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-center gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Last Name</FormLabel>
                                        <p className="text-[14px] text-slate-400">:</p>
                                        <Input defaultValue="Doe" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-center gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Email Address</FormLabel>
                                        <p className="text-[14px] text-slate-400">:</p>
                                        <Input type="email" defaultValue="john.doe@example.com" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-center gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Phone Number</FormLabel>
                                        <p className="text-[14px] text-slate-400">:</p>
                                        <Input defaultValue="+1 (555) 000-0000" className="h-[36px] text-[14px]" />
                                    </div>
                                    
                                </div>
                            </div>
                        )}
                        
                        {activeTab === 'roles' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Roles & Organization" icon={Shield} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-center gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Primary Role</FormLabel>
                                        <p className="text-[14px] text-slate-400">:</p>
                                        <Select value="admin" className="h-[36px]">
                                            <option value="">Select a role...</option>
                                            <option value="admin">Administrator</option>
                                            <option value="manager">Manager</option>
                                            <option value="staff">Staff</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-center gap-3">
                                        <FormLabel className="!mb-0 mt-2">Department</FormLabel>
                                        <p className="text-[14px] text-slate-400">:</p>
                                        <Select value="it" className="h-[36px]">
                                            <option value="">Select a department...</option>
                                            <option value="it">IT</option>
                                            <option value="hr">HR</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-center gap-3">
                                        <FormLabel className="!mb-0 mt-2">Branch / Location</FormLabel>
                                        <p className="text-[14px] text-slate-400">:</p>
                                        <Select value="hq" className="h-[36px]">
                                            <option value="">Select a branch...</option>
                                            <option value="hq">Headquarters</option>
                                            <option value="ny">New York Office</option>
                                        </Select>
                                    </div>
                                    
                                </div>
                            </div>
                        )}
                        
                        {activeTab === 'security' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Security & Settings" icon={Lock} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-center gap-3">
                                        <FormLabel className="!mb-0 mt-2">New Password</FormLabel>
                                        <p className="text-[14px] text-slate-400">:</p>
                                        <Input type="password" placeholder="Leave blank to keep current" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-center gap-3">
                                        <FormLabel className="!mb-0 mt-2">Confirm Password</FormLabel>
                                        <p className="text-[14px] text-slate-400">:</p>
                                        <Input type="password" placeholder="Leave blank to keep current" className="h-[36px] text-[14px]" />
                                    </div>
                                    
                                    <div className="col-span-1 md:col-span-2 flex items-center gap-6 mt-4 p-4 bg-slate-50 border border-slate-100 rounded-md">
                                        <div className="flex-1">
                                            <h4 className="text-[14px] font-bold text-slate-800">Require Password Change</h4>
                                            <p className="text-[13px] text-slate-500 mt-1">Force the user to change their password on next login.</p>
                                        </div>
                                        <Switch defaultChecked={false} />
                                    </div>
                                    
                                    <div className="col-span-1 md:col-span-2 flex items-center gap-6 mt-2 p-4 bg-slate-50 border border-slate-100 rounded-md">
                                        <div className="flex-1">
                                            <h4 className="text-[14px] font-bold text-slate-800">Account Active Status</h4>
                                            <p className="text-[13px] text-slate-500 mt-1">Determine if the user can log in to the system immediately.</p>
                                        </div>
                                        <Switch defaultChecked />
                                    </div>
                                    
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
