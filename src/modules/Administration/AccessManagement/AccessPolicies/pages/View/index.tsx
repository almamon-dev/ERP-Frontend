import React, { useState } from 'react';
import { Activity, ArrowLeft, ChevronRight, Clock, FileText, Globe, Info, Lock, Save, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import Textarea from '@/components/ui/textarea';
import Select from '@/components/ui/select';
import TabHeader from '@/components/ui/tab-header';
import FormLabel from '@/components/ui/label';

const TABS = [
    { id: 'overview', label: 'Policy Overview', icon: ShieldAlert },
    { id: 'basic', label: 'Basic Information', icon: Info },
    { id: 'auth', label: 'Authentication Rules', icon: Lock },
    { id: 'session', label: 'Session Rules', icon: Clock },
    { id: 'ip', label: 'IP Restrictions', icon: Globe },
    { id: 'additional', label: 'Additional Information', icon: FileText },
    { id: 'status', label: 'Status', icon: Activity },
];

const SectionHeader = ({ title, icon: Icon, className = "col-span-1 md:col-span-2" }: { title: string, icon?: any, className?: string }) => (
    <div className={`${className} mt-4 pt-3 border-t border-slate-100 first:mt-0 first:pt-0 first:border-t-0 mb-2`}>
        <h3 className="text-[15px] font-bold text-slate-800 flex items-center gap-2">
            {Icon && <Icon size={16} className="text-slate-400" />}
            {title}
        </h3>
    </div>
);

export default function AccessPolicyView() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">View AccessPolicy</h1>
                        <p className="text-[14px] font-medium text-[#008060] mt-1">Fill in the required information to view a accesspolicy.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-[32px] text-[14px]" onClick={() => navigate(-1)}>
                        Back
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
                                    <TabHeader title="Policy Overview" icon={ShieldAlert} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Example Field</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Enter value" className="h-[36px] text-[14px]" disabled />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Another Field</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Enter value" className="h-[36px] text-[14px]" disabled />
                                    </div>
                                    
                                </div>
                            </div>
                        )}
                        {activeTab === 'basic' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Basic Information" icon={Info} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Example Field</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Enter value" className="h-[36px] text-[14px]" disabled />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Another Field</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Enter value" className="h-[36px] text-[14px]" disabled />
                                    </div>
                                    
                                </div>
                            </div>
                        )}
                        {activeTab === 'auth' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Authentication Rules" icon={Lock} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Example Field</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Enter value" className="h-[36px] text-[14px]" disabled />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Another Field</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Enter value" className="h-[36px] text-[14px]" disabled />
                                    </div>
                                    
                                </div>
                            </div>
                        )}
                        {activeTab === 'session' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Session Rules" icon={Clock} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Example Field</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Enter value" className="h-[36px] text-[14px]" disabled />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Another Field</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Enter value" className="h-[36px] text-[14px]" disabled />
                                    </div>
                                    
                                </div>
                            </div>
                        )}
                        {activeTab === 'ip' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="IP Restrictions" icon={Globe} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Example Field</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Enter value" className="h-[36px] text-[14px]" disabled />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Another Field</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Enter value" className="h-[36px] text-[14px]" disabled />
                                    </div>
                                    
                                </div>
                            </div>
                        )}
                        {activeTab === 'additional' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Additional Information" icon={FileText} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Example Field</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Enter value" className="h-[36px] text-[14px]" disabled />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Another Field</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Enter value" className="h-[36px] text-[14px]" disabled />
                                    </div>
                                    
                                </div>
                            </div>
                        )}
                        {activeTab === 'status' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Status" icon={Activity} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Example Field</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Enter value" className="h-[36px] text-[14px]" disabled />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Another Field</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Enter value" className="h-[36px] text-[14px]" disabled />
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
