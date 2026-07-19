import React, { useState } from 'react';
import { ArrowLeft, Save, Briefcase, ChevronRight, FileText, MapPin, Network, Users, BookOpen, GraduationCap, ShieldCheck, DollarSign, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Select from '@/components/ui/select';
import Switch from '@/components/ui/switch';
import FormLabel from '@/components/ui/label';

const EDIT_TABS = [
    { id: 'general', label: 'General Info', icon: Briefcase },
    { id: 'organization', label: 'Org & Reporting', icon: Network },
    { id: 'job', label: 'Role & Requirements', icon: BookOpen },
    { id: 'compensation', label: 'Salary & Grade', icon: DollarSign },
    { id: 'security', label: 'Permissions & Access', icon: ShieldCheck },
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

export default function DesignationEdit() {
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
                            Edit Designation
                            <span className="px-2.5 py-0.5 text-[12px] font-medium bg-emerald-100 text-[#008060] rounded-full">Active</span>
                        </h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">SSE-01 • Senior Software Engineer</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-[32px] text-[14px]" onClick={() => navigate(-1)}>Cancel</Button>
                    <Button size="sm" className="h-[32px] text-[14px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                        <Save size={14} />
                        Update Designation
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
                                    <TabHeader title="Designation Overview" icon={Briefcase} />
                                    
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3 mb-2">
                                        <FormLabel required className="!mb-0 mt-2">Designation Name</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Senior Software Engineer" className="h-[36px] text-[14px]" />
                                        
                                        <FormLabel required className="!mb-0 mt-2">Designation Code</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="SSE-01" className="h-[36px] text-[14px]" />
                                    </div>

                                    <SectionHeader title="Basic Information" />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Designation Level</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Senior" className="h-[36px]">
                                            <option value="Senior">Senior Level</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Job Category</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Technical" className="h-[36px]">
                                            <option value="Technical">Technical</option>
                                        </Select>
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Description</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Lead developer for enterprise solutions." rows={3} className="text-[14px]" />
                                    </div>

                                    <SectionHeader title="Status & Default Settings" icon={CheckCircle} />
                                    <div className="col-span-1 md:col-span-2 flex flex-wrap items-center gap-8 mt-2">
                                        <div className="flex items-center gap-2">
                                            <Switch id="desig-status" defaultChecked />
                                            <label htmlFor="desig-status" className="text-[14px] text-slate-700 cursor-pointer">Active</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Switch id="desig-default" />
                                            <label htmlFor="desig-default" className="text-[14px] text-slate-700 cursor-pointer">Default Designation for New Hires</label>
                                        </div>
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
                                        <FormLabel required className="!mb-0 mt-2">Department</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="1" className="h-[36px]">
                                            <option value="1">Information Technology</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Team</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="frontend" className="h-[36px]">
                                            <option value="frontend">Frontend Team</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Business Unit</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Corporate" className="h-[36px]">
                                            <option value="Corporate">Corporate</option>
                                        </Select>
                                    </div>

                                    <SectionHeader title="Reporting Structure" icon={Users} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Reports To (Role)</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="manager" className="h-[36px]">
                                            <option value="manager">Engineering Manager</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Supervises</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="junior" className="h-[36px]">
                                            <option value="junior">Junior Developer</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Max Employees Allow</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="number" defaultValue="15" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Approval Authority</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="L1" className="h-[36px]">
                                            <option value="L1">Level 1 (Basic)</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'job' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Job Information" icon={Briefcase} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Job Title</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Senior Software Engineer" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Employment Type</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Full-Time" className="h-[36px]">
                                            <option value="Full-Time">Full-Time</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Shift</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Morning" className="h-[36px]">
                                            <option value="Morning">Morning</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Work Location</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Hybrid" className="h-[36px]">
                                            <option value="Hybrid">Hybrid</option>
                                        </Select>
                                    </div>

                                    <SectionHeader title="Responsibilities & Metrics" icon={BookOpen} />
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Key Responsibilities</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="- Architect scalable solutions\n- Mentor junior devs\n- Code reviews" rows={3} className="text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Daily Tasks</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Daily standup, coding, PR reviews, system design." rows={2} className="text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">KPIs</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Sprint Velocity, Code Quality" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Performance Metrics</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Fewer bugs in production" className="h-[36px] text-[14px]" />
                                    </div>

                                    <SectionHeader title="Required Skills & Qualifications" icon={GraduationCap} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Minimum Education</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Bachelor's in CS" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Experience Required</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="5+ years" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Technical Skills</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="React, Node.js, AWS, TypeScript" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Certifications</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="AWS Certified Developer" className="h-[36px] text-[14px]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'compensation' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Salary & Grade" icon={DollarSign} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Salary Grade</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="G3" className="h-[36px]">
                                            <option value="G3">Grade 3 (G3)</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Pay Scale</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="PS2" className="h-[36px]">
                                            <option value="PS2">PS-2</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Minimum Salary</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="number" defaultValue="80000" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Maximum Salary</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="number" defaultValue="140000" className="h-[36px] text-[14px]" />
                                    </div>

                                    <div className="col-span-1 md:col-span-2 flex flex-wrap gap-8 mt-2">
                                        <div className="flex items-center gap-2">
                                            <Switch id="bonus-eligible" defaultChecked />
                                            <label htmlFor="bonus-eligible" className="text-[14px] text-slate-700 cursor-pointer">Bonus Eligible</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Switch id="overtime-eligible" />
                                            <label htmlFor="overtime-eligible" className="text-[14px] text-slate-700 cursor-pointer">Overtime Eligible</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Permissions & Access" icon={ShieldCheck} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Default Role</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Employee" className="h-[36px]">
                                            <option value="Employee">Standard Employee</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Access Level</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="L2" className="h-[36px]">
                                            <option value="L2">Level 2 (Edit Data)</option>
                                        </Select>
                                    </div>
                                    
                                    <div className="col-span-1 md:col-span-2 mt-2">
                                        <h4 className="text-[13px] font-bold text-slate-800 mb-3">Privileges</h4>
                                        <div className="flex flex-col gap-3 p-4 bg-slate-50 border border-slate-200 rounded-md">
                                            <div className="flex items-center gap-2">
                                                <Switch id="priv-approve" />
                                                <label htmlFor="priv-approve" className="text-[14px] text-slate-700 cursor-pointer">Can Approve Leaves & Expenses</label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Switch id="priv-manage" defaultChecked />
                                                <label htmlFor="priv-manage" className="text-[14px] text-slate-700 cursor-pointer">Can Manage Team Allocations</label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Switch id="priv-hire" />
                                                <label htmlFor="priv-hire" className="text-[14px] text-slate-700 cursor-pointer">Can Initiate Hiring Requests</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'files' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Documents & Attachments" icon={FileText} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Job Description (JD)</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[13px] text-slate-700 font-medium">JD_SSE_2026.pdf</span>
                                            <Button variant="outline" size="sm" className="h-[28px] text-[12px] px-2 text-slate-500">Replace</Button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">SOP Documents</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Policies</FormLabel>
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
                                        <Input defaultValue="High Demand Role" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Remarks</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Strategic role for Q3 roadmap." rows={2} className="text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Internal Notes</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Salary max cap increased by 10%." rows={2} className="text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Public Notes</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Looking for diverse talent." rows={2} className="text-[14px]" />
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
