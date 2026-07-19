import React, { useState } from 'react';
import { ArrowLeft, Save, Users, ChevronRight, FileText, MapPin, Network, UserCheck, Target, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Select from '@/components/ui/select';
import Switch from '@/components/ui/switch';
import FormLabel from '@/components/ui/label';

const CREATE_TABS = [
    { id: 'general', label: 'General Info', icon: Users },
    { id: 'organization', label: 'Org & Communication', icon: Network },
    { id: 'management', label: 'Management & Members', icon: UserCheck },
    { id: 'config', label: 'Working Configuration', icon: Clock },
    { id: 'objectives', label: 'Objectives & KPIs', icon: Target },
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

export default function TeamCreate() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('general');

    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">Create New Team</h1>
                        <p className="text-[14px] font-medium text-[#008060] mt-1">Fill in the required information to add a new team.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-[32px] text-[14px]" onClick={() => navigate(-1)}>Cancel</Button>
                    <Button size="sm" className="h-[32px] text-[14px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                        <Save size={14} />
                        Save Team
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
                        {CREATE_TABS.map((tab) => {
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
                                    <TabHeader title="Team Overview" icon={Users} />
                                    
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3 mb-2">
                                        <FormLabel required className="!mb-0 mt-2">Team Name</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="e.g. Frontend Development Team" className="h-[36px] text-[14px]" />
                                        
                                        <FormLabel required className="!mb-0 mt-2">Team Code</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="e.g. TM-FE-01" className="h-[36px] text-[14px]" />
                                    </div>

                                    <SectionHeader title="Basic Information" />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Team Type</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">Select Type</option>
                                            <option value="Project">Project Team</option>
                                            <option value="Department">Departmental Team</option>
                                            <option value="TaskForce">Task Force</option>
                                            <option value="Support">Support Team</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Status</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <Switch id="team-status" defaultChecked />
                                            <label htmlFor="team-status" className="text-[14px] text-slate-700 cursor-pointer">Active</label>
                                        </div>
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Description</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea placeholder="A brief description of this team..." rows={3} className="text-[14px]" />
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
                                        <Select className="h-[36px]">
                                            <option value="">Select Company</option>
                                            <option value="1">Global Enterprise Ltd.</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Branch</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">Select Branch</option>
                                            <option value="1">Manhattan Main</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Department</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">Select Department</option>
                                            <option value="1">Information Technology</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Business Unit</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">Select Business Unit</option>
                                            <option value="Corporate">Corporate</option>
                                        </Select>
                                    </div>

                                    <SectionHeader title="Communication" icon={MessageSquare} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Team Email</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="email" placeholder="team@example.com" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Team Phone</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="+1 234 567 890" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Microsoft Teams Link</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="https://teams.microsoft.com/l/team/..." className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Slack Channel</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="#frontend-team" className="h-[36px] text-[14px]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Management & Members" icon={UserCheck} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Team Leader</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">Select Team Leader</option>
                                            <option value="john">John Doe</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Assistant Team Leader</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">Select Assistant Leader</option>
                                            <option value="jane">Jane Smith</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Reporting Manager</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">Select Manager</option>
                                            <option value="director">IT Director</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Maximum Members</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="number" placeholder="No limit if blank" className="h-[36px] text-[14px]" />
                                    </div>

                                    <SectionHeader title="Team Members List" />
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Select Members</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select multiple className="h-[120px] text-[14px]">
                                            <option value="1">Alex Johnson (Frontend)</option>
                                            <option value="2">Maria Garcia (UI/UX)</option>
                                            <option value="3">David Kim (Backend)</option>
                                        </Select>
                                        <p className="col-start-3 text-[12px] text-slate-500 mt-1">Hold Ctrl/Cmd to select multiple members</p>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Total Members Allow</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="number" placeholder="Current total: 0" className="h-[36px] text-[14px]" disabled />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'config' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Working Configuration" icon={Clock} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Shift</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">Select Shift</option>
                                            <option value="Morning">Morning Shift</option>
                                            <option value="Evening">Evening Shift</option>
                                            <option value="Night">Night Shift</option>
                                            <option value="Flexible">Flexible</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Working Days</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">Select Working Days</option>
                                            <option value="Mon-Fri">Monday - Friday</option>
                                            <option value="Mon-Sat">Monday - Saturday</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Office Hours</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="e.g. 09:00 AM - 06:00 PM" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Holiday Calendar</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">Select Calendar</option>
                                            <option value="US">US Public Holidays</option>
                                            <option value="UK">UK Bank Holidays</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'objectives' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Objectives & KPIs" icon={Target} />
                                    
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Team Goal</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea placeholder="Describe the primary goal of this team..." rows={3} className="text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">KPI</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Key Performance Indicator" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Performance Target</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Annual or Quarterly Target" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Monthly Target</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Monthly quota or metric" className="h-[36px] text-[14px]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'files' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Documents & Attachments" icon={FileText} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">SOP Document</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Team Guidelines</FormLabel>
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
                                        <Input placeholder="Extra tags or data..." className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Remarks</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea placeholder="Final remarks..." rows={2} className="text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Internal Notes</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea placeholder="Add any private notes or context..." rows={2} className="text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Public Notes</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea placeholder="Add any public notes..." rows={2} className="text-[14px]" />
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
