import React, { useState } from 'react';
import { ArrowLeft, Save, Briefcase, ChevronRight, FileText, Network, UserCheck, Target, DollarSign, Clock, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Select from '@/components/ui/select';
import Switch from '@/components/ui/switch';
import FormLabel from '@/components/ui/label';

const EDIT_TABS = [
    { id: 'general', label: 'General Info', icon: Briefcase },
    { id: 'organization', label: 'Organization', icon: Network },
    { id: 'management', label: 'Management', icon: UserCheck },
    { id: 'finance', label: 'Finance & Ops', icon: DollarSign },
    { id: 'performance', label: 'Performance', icon: Target },
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

export default function BusinessUnitEdit() {
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
                            Edit Business Unit
                            <span className="px-2.5 py-0.5 text-[12px] font-medium bg-emerald-100 text-[#008060] rounded-full">Active</span>
                        </h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">BU-ENT-01 • Enterprise Solutions</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-[32px] text-[14px]" onClick={() => navigate(-1)}>Cancel</Button>
                    <Button size="sm" className="h-[32px] text-[14px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                        <Save size={14} />
                        Update Business Unit
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
                                    <TabHeader title="Business Unit Overview" icon={Briefcase} />
                                    
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3 mb-2">
                                        <FormLabel required className="!mb-0 mt-2">Business Unit Name</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Enterprise Solutions" className="h-[36px] text-[14px]" />
                                        
                                        <FormLabel required className="!mb-0 mt-2">Business Unit Code</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="BU-ENT-01" className="h-[36px] text-[14px]" />
                                    </div>

                                    <SectionHeader title="Basic Information" />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Company</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="1" className="h-[36px]">
                                            <option value="1">Global Enterprise Ltd.</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Parent Business Unit</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">None (Top Level)</option>
                                            <option value="corp">Corporate HQ</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Business Unit Type</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Product" className="h-[36px]">
                                            <option value="Product">Product Line</option>
                                            <option value="Service">Service Delivery</option>
                                            <option value="Geographic">Geographic Region</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Industry</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="IT" className="h-[36px]">
                                            <option value="IT">Information Technology</option>
                                        </Select>
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Description</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Handles enterprise client solutions and large-scale deployments." rows={3} className="text-[14px]" />
                                    </div>

                                    <SectionHeader title="Status & Default Settings" icon={CheckCircle} />
                                    <div className="col-span-1 md:col-span-2 flex flex-wrap items-center gap-8 mt-2">
                                        <div className="flex items-center gap-2">
                                            <Switch id="bu-status" defaultChecked />
                                            <label htmlFor="bu-status" className="text-[14px] text-slate-700 cursor-pointer">Active</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Switch id="bu-default" />
                                            <label htmlFor="bu-default" className="text-[14px] text-slate-700 cursor-pointer">Default Business Unit</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'organization' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Organization Assignment" icon={Network} />
                                    
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Assigned Branches</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select multiple defaultValue={['1']} className="h-[100px] text-[14px]">
                                            <option value="1">Manhattan Main</option>
                                            <option value="2">Brooklyn Branch</option>
                                        </Select>
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Assigned Departments</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select multiple defaultValue={['it']} className="h-[100px] text-[14px]">
                                            <option value="it">Information Technology</option>
                                            <option value="hr">Human Resources</option>
                                        </Select>
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Assigned Teams</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select multiple defaultValue={['fe', 'be']} className="h-[100px] text-[14px]">
                                            <option value="fe">Frontend Development Team</option>
                                            <option value="be">Backend API Team</option>
                                        </Select>
                                        <p className="col-start-3 text-[12px] text-slate-500 mt-1">Hold Ctrl/Cmd to select multiple entities</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Management" icon={UserCheck} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Business Unit Head</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="john" className="h-[36px]">
                                            <option value="john">John Doe (VP)</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Assistant Head</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="jane" className="h-[36px]">
                                            <option value="jane">Jane Smith (Director)</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Reporting Executive</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="ceo" className="h-[36px]">
                                            <option value="ceo">CEO</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Organization Level</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="L1" className="h-[36px]">
                                            <option value="L1">Level 1 (Top)</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Maximum Employees</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="number" defaultValue="500" className="h-[36px] text-[14px]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'finance' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Financial Configuration" icon={DollarSign} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Cost Center</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="CC-101" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Profit Center</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="PC-201" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Budget Code</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="B-ENT-2026" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Currency</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="USD" className="h-[36px]">
                                            <option value="USD">USD ($)</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Annual Budget</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="number" defaultValue="5000000" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Revenue Target</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="number" defaultValue="15000000" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Expense Limit</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="number" defaultValue="4500000" className="h-[36px] text-[14px]" />
                                    </div>

                                    <SectionHeader title="Operational Settings" icon={Clock} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Working Days</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Mon-Fri" className="h-[36px]">
                                            <option value="Mon-Fri">Monday - Friday</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Working Hours</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="09:00 AM - 06:00 PM" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Time Zone</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="EST" className="h-[36px]">
                                            <option value="EST">EST (UTC-5)</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Fiscal Year</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Jan-Dec" className="h-[36px]">
                                            <option value="Jan-Dec">January - December</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'performance' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Performance & KPIs" icon={Target} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">KPI Template</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Sales" className="h-[36px]">
                                            <option value="Sales">Sales & Growth KPI</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Performance Target</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Exceed industry average by 10%" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Sales Target</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="$15M Annual" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Productivity Goal</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="20% margin improvement" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Growth Target</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="25% YoY" className="h-[36px] text-[14px]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'files' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Documents & Attachments" icon={FileText} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Business Plan</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[13px] text-slate-700 font-medium">BizPlan_2026.pdf</span>
                                            <Button variant="outline" size="sm" className="h-[28px] text-[12px] px-2 text-slate-500">Replace</Button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">SOP Documents</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Policy Documents</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Agreements</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" multiple className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>

                                    <SectionHeader title="Additional Information & Notes" icon={CheckCircle} />
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Custom Fields</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Flagship BU" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Remarks</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Highly profitable unit." rows={2} className="text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Internal Notes</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Focus on Q4 growth." rows={2} className="text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Public Notes</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Leading solutions provider." rows={2} className="text-[14px]" />
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
