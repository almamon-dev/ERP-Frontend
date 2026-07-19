import React, { useState } from 'react';
import { ArrowLeft, Save, Building2, Phone, Briefcase, ChevronRight, Image as ImageIcon, FileText, MapPin, Clock, CreditCard, Users, CheckCircle, Network } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Select from '@/components/ui/select';
import Switch from '@/components/ui/switch';
import FormLabel from '@/components/ui/label';

const EDIT_TABS = [
    { id: 'general', label: 'General Info', icon: Building2 },
    { id: 'organization', label: 'Organization Setup', icon: Network },
    { id: 'management', label: 'Team & Schedule', icon: Users },
    { id: 'contact', label: 'Contact & Location', icon: MapPin },
    { id: 'finance', label: 'Budget & Cost', icon: CreditCard },
    { id: 'files', label: 'Documents & Notes', icon: FileText },
];

const TabHeader = ({ title, icon: Icon }: { title: string, icon?: any }) => (
    <div className="col-span-1 md:col-span-2 -mt-2 md:-mt-4 mb-3 pb-3 border-b border-slate-200 -mx-6 md:-mx-8 px-6 md:px-8">
        <h2 className="text-[18px] font-bold text-slate-800 flex items-center gap-2">
            {Icon && <Icon size={20} className="text-slate-600" />}
            {title}
        </h2>
    </div>
);

const SectionHeader = ({ title, icon: Icon, className = "col-span-1 md:col-span-2" }: { title: string, icon?: any, className?: string }) => (
    <div className={`${className} mt-4 pt-3 border-t border-slate-100 first:mt-0 first:pt-0 first:border-t-0 mb-2`}>
        <h3 className="text-[15px] font-bold text-slate-800 flex items-center gap-2">
            {Icon && <Icon size={18} className="text-slate-400" />}
            {title}
        </h3>
    </div>
);

export default function DepartmentEdit() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('general');

    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600">
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900 flex items-center gap-3">
                            Edit Department
                            <span className="px-2.5 py-0.5 text-[12px] font-medium bg-emerald-100 text-[#008060] rounded-full">Active</span>
                        </h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">IT-001 • Information Technology</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-[32px] text-[14px]" onClick={() => navigate(-1)}>Cancel</Button>
                    <Button size="sm" className="h-[32px] text-[14px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                        <Save size={14} />
                        Update Department
                    </Button>
                </div>
            </div>

            {/* Layout */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-[260px] flex-shrink-0 bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
                    <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
                        <h3 className="text-[13px] font-bold text-slate-800">Categories</h3>
                    </div>
                    <div className="flex flex-col">
                        {EDIT_TABS.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center justify-between px-4 py-2.5 text-[14px] font-medium transition-colors border-l-[3px] border-b border-slate-50 last:border-b-0 ${
                                        isActive 
                                            ? 'bg-emerald-50/50 text-[#008060] border-l-[#008060]' 
                                            : 'text-slate-600 hover:bg-slate-50 border-l-transparent'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon size={16} className={isActive ? 'text-[#008060]' : 'text-slate-400'} />
                                        {tab.label}
                                    </div>
                                    <ChevronRight size={14} className={`transition-transform ${isActive ? 'text-[#008060] translate-x-0.5' : 'text-slate-300'}`} />
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="p-6 md:p-8">
                        {activeTab === 'general' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Department Overview" icon={Building2} />
                                    
                                    <div className="col-span-1 md:col-span-2 flex items-start gap-6 mb-4">
                                        <div className="w-24 h-24 rounded-md border-2 border-slate-200 flex flex-col items-center justify-center bg-slate-50 overflow-hidden cursor-pointer">
                                            <img src="https://ui-avatars.com/api/?name=IT+Dept&background=008060&color=fff" alt="Dept" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                            <FormLabel required className="!mb-0 mt-2">Company</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                            <Select defaultValue="1" className="h-[36px]">
                                                <option value="1">Global Enterprise Ltd.</option>
                                            </Select>
                                            
                                            <FormLabel required className="!mb-0 mt-2">Department Name</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                            <Input defaultValue="Information Technology" className="h-[36px] text-[14px]" />
                                            
                                            <FormLabel required className="!mb-0 mt-2">Department Code</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                            <Input defaultValue="IT-001" className="h-[36px] text-[14px]" />
                                        </div>
                                    </div>

                                    <SectionHeader title="Basic Information" />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Department Type</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Core" className="h-[36px]">
                                            <option value="Core">Core Operation</option>
                                            <option value="Support">Support Service</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Status</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <Switch id="dept-status" defaultChecked />
                                            <label htmlFor="dept-status" className="text-[14px] text-slate-700 cursor-pointer">Active</label>
                                        </div>
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Description</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Handles all IT infrastructure and software systems." rows={3} className="text-[14px]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'organization' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Organization Assignment" icon={Network} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Company</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="1" className="h-[36px]">
                                            <option value="1">Global Enterprise Ltd.</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Branch</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="1" className="h-[36px]">
                                            <option value="1">Manhattan Main</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Business Unit</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Corporate" className="h-[36px]">
                                            <option value="Corporate">Corporate</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Division</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Technology" className="h-[36px]">
                                            <option value="Technology">Technology</option>
                                        </Select>
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Parent Department</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">None (Top Level)</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Department Management" icon={Users} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Department Head</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Sarah Connor" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Assistant Head</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="John Reese" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Team Lead</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Harold Finch" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Reporting Manager</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Branch Manager" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Maximum Employees</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="number" defaultValue="35" className="h-[36px] text-[14px]" />
                                    </div>

                                    <SectionHeader title="Working Configuration" icon={Clock} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Working Days</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Mon-Fri" className="h-[36px]">
                                            <option value="Mon-Fri">Monday - Friday</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Shift</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Morning" className="h-[36px]">
                                            <option value="Morning">Morning Shift</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Office Hours</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="09:00 AM - 06:00 PM" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Holiday Calendar</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="US" className="h-[36px]">
                                            <option value="US">US Public Holidays</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'contact' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Contact Information" icon={Phone} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Department Email</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="email" defaultValue="it@globalent.com" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Phone Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="+1 212 555 1000" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Extension Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="404" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Internal Contact</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="IT-Helpdesk" className="h-[36px] text-[14px]" />
                                    </div>

                                    <SectionHeader title="Location Information" icon={MapPin} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Building</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Tech Tower" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Floor</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="4th Floor" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Room Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="401-410" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Office Location</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="North Wing" className="h-[36px] text-[14px]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'finance' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Budget & Cost Center" icon={CreditCard} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Cost Center</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="CC-IT-01" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Budget Code</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="BUD-IT-26" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Annual Budget</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="number" defaultValue="250000" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Expense Limit</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="number" defaultValue="15000" className="h-[36px] text-[14px]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'files' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Documents & Attachments" icon={FileText} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Department Policy</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[13px] text-slate-700 font-medium">it_policy_2026.pdf</span>
                                            <Button variant="outline" size="sm" className="h-[28px] text-[12px] px-2 text-slate-500">Replace</Button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">SOP Documents</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[13px] text-slate-700 font-medium">it_sop_v2.pdf</span>
                                            <Button variant="outline" size="sm" className="h-[28px] text-[12px] px-2 text-slate-500">Replace</Button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Organizational Chart</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Other Documents</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" multiple className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>

                                    <SectionHeader title="Additional Information & Notes" icon={CheckCircle} />
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Custom Fields</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Core Tech Hub" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Remarks</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Requires fast network scaling next quarter." rows={2} className="text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Internal Notes</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Budget increased by 10% for 2026." rows={2} className="text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Public Notes</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="IT Support available 24/7." rows={2} className="text-[14px]" />
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
