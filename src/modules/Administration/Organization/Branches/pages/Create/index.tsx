import React, { useState } from 'react';
import { ArrowLeft, Save, Building2, Phone, Briefcase, ChevronRight, Image as ImageIcon, Paperclip, FileText, MapPin, Globe, Clock, CreditCard, Bell, Shield, Activity, Settings, Users, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Select from '@/components/ui/select';
import Switch from '@/components/ui/switch';
import FormLabel from '@/components/ui/label';

const CREATE_TABS = [
    { id: 'general', label: 'General Info', icon: Building2 },
    { id: 'contact', label: 'Contact & Address', icon: MapPin },
    { id: 'management', label: 'Management & Ops', icon: Users },
    { id: 'finance', label: 'Financial & Tax', icon: CreditCard },
    { id: 'config', label: 'System Configuration', icon: Settings },
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

export default function BranchCreate() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('general');

    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">Create New Branch</h1>
                        <p className="text-[14px] font-medium text-[#008060] mt-1">Fill in the required information to add a new branch.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-[32px] text-[14px]" onClick={() => navigate(-1)}>Cancel</Button>
                    <Button size="sm" className="h-[32px] text-[14px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                        <Save size={14} />
                        Save Branch
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
                                    <TabHeader title="Branch Overview" icon={Building2} />
                                    
                                    <div className="col-span-1 md:col-span-2 flex items-start gap-6 mb-4">
                                        <div className="w-24 h-24 rounded-md border-2 border-dashed border-slate-300 flex flex-col items-center justify-center bg-slate-50 text-slate-500 cursor-pointer hover:bg-slate-100 hover:border-emerald-400 transition-colors">
                                            <ImageIcon size={24} className="mb-1 text-slate-400" />
                                            <span className="text-[12px] font-medium">Branch Image</span>
                                        </div>
                                        <div className="flex-1 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                            <FormLabel required className="!mb-0 mt-2">Company</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                            <Select className="h-[36px]">
                                                <option value="">Select Company</option>
                                                <option value="1">Global Enterprise Ltd.</option>
                                                <option value="2">TechFlow Solutions</option>
                                            </Select>
                                            
                                            <FormLabel required className="!mb-0 mt-2">Branch Name</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                            <Input placeholder="Enter branch name" className="h-[36px] text-[14px]" />
                                            
                                            <FormLabel required className="!mb-0 mt-2">Branch Code</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                            <Input placeholder="e.g. BR-001" className="h-[36px] text-[14px]" />
                                        </div>
                                    </div>

                                    <SectionHeader title="Basic Information" />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Business Unit</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">Select Business Unit</option>
                                            <option value="Retail">Retail</option>
                                            <option value="Corporate">Corporate</option>
                                            <option value="Manufacturing">Manufacturing</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Branch Type</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="Physical">Physical Store</option>
                                            <option value="Virtual">Virtual Office</option>
                                            <option value="Warehouse">Warehouse</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Branch Category</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">Select Category</option>
                                            <option value="A">Class A</option>
                                            <option value="B">Class B</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Opening Date</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="date" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Description</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea placeholder="A brief description of the branch..." rows={3} className="text-[14px]" />
                                    </div>

                                    <SectionHeader title="Status & Configuration" icon={CheckCircle} />
                                    <div className="col-span-1 md:col-span-2 flex flex-wrap items-center gap-8 mb-2">
                                        <div className="flex items-center gap-2">
                                            <Switch id="branch-status" defaultChecked />
                                            <label htmlFor="branch-status" className="text-[14px] text-slate-700 cursor-pointer">Active Status</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Switch id="is-ho" />
                                            <label htmlFor="is-ho" className="text-[14px] text-slate-700 cursor-pointer">Is Head Office</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Switch id="is-default" />
                                            <label htmlFor="is-default" className="text-[14px] text-slate-700 cursor-pointer">Is Default Branch</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'contact' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Contact Information" icon={Phone} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Branch Email</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="email" placeholder="branch@example.com" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Phone Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="+1 234 567 8900" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Mobile Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="+1 987 654 3210" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Fax</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Fax number" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Website</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="https://www.branch-site.com" className="h-[36px] text-[14px]" />
                                    </div>

                                    <SectionHeader title="Address Information" icon={MapPin} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Country</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">Select Country</option>
                                            <option value="US">United States</option>
                                            <option value="UK">United Kingdom</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">State</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="State/Province" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">City</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="City name" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">ZIP Code</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Postal code" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Street Address</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea placeholder="Full street address..." rows={2} className="text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Landmark</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Near..." className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Google Map URL</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="https://maps.google.com/..." className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">GPS Coordinates</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="e.g. 40.7128, -74.0060" className="h-[36px] text-[14px] font-mono" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Management Structure" icon={Users} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Branch Manager</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Manager Name" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Assistant Manager</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Asst. Manager Name" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Department Head</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Dept Head Name" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Manager Email</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="email" placeholder="manager@branch.com" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Manager Phone</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Manager phone" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Total Employees</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="number" placeholder="0" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Reporting Branch</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">Head Office</option>
                                            <option value="1">New York Main</option>
                                        </Select>
                                    </div>

                                    <SectionHeader title="Working Hours" icon={Clock} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Working Days</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="Mon-Fri">Monday - Friday</option>
                                            <option value="Mon-Sat">Monday - Saturday</option>
                                            <option value="Sun-Thu">Sunday - Thursday</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Weekend</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="Sat-Sun">Saturday - Sunday</option>
                                            <option value="Fri-Sat">Friday - Saturday</option>
                                            <option value="Sun">Sunday</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Opening Time</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="time" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Closing Time</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="time" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Holiday Calendar</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="Default">Default Company Calendar</option>
                                            <option value="US">US Public Holidays</option>
                                        </Select>
                                    </div>

                                    <SectionHeader title="Facilities & Services" icon={Building2} />
                                    <div className="col-span-1 md:col-span-2 flex flex-wrap items-center gap-6 mb-2 mt-2">
                                        <div className="flex items-center gap-2">
                                            <Switch id="fac-wh" />
                                            <label htmlFor="fac-wh" className="text-[14px] text-slate-700 cursor-pointer">Warehouse Available</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Switch id="fac-park" defaultChecked />
                                            <label htmlFor="fac-park" className="text-[14px] text-slate-700 cursor-pointer">Parking Available</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Switch id="fac-del" />
                                            <label htmlFor="fac-del" className="text-[14px] text-slate-700 cursor-pointer">Delivery Service</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Switch id="fac-pick" defaultChecked />
                                            <label htmlFor="fac-pick" className="text-[14px] text-slate-700 cursor-pointer">Pickup Service</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Switch id="fac-cs" defaultChecked />
                                            <label htmlFor="fac-cs" className="text-[14px] text-slate-700 cursor-pointer">Customer Support</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'finance' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Financial & Tax" icon={CreditCard} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Cost Center</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Cost Center Code" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Profit Center</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Profit Center Code" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Bank Name</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Enter bank name" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Account Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Bank account number" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Payment Terms</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="e.g. Net 30, Net 60" className="h-[36px] text-[14px]" />
                                    </div>

                                    <SectionHeader title="Tax & Compliance" icon={FileText} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Tax Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Tax Number" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">VAT Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="VAT Number" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">BIN Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="BIN Number" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">TIN Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="TIN Number" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">License Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Business License Number" className="h-[36px] text-[14px]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'config' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="System Configuration" icon={Settings} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Currency</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="USD">USD ($)</option>
                                            <option value="EUR">EUR (€)</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Language</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="en">English</option>
                                            <option value="es">Spanish</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Time Zone</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="UTC">UTC</option>
                                            <option value="Asia/Dhaka">Asia/Dhaka</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Date Format</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                            <option value="DD-MM-YYYY">DD-MM-YYYY</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Fiscal Year</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="Jan">January - December</option>
                                            <option value="Apr">April - March</option>
                                        </Select>
                                    </div>

                                    <div className="col-span-1">
                                        <SectionHeader title="Security Settings" icon={Shield} className="col-span-1" />
                                        <div className="flex flex-col gap-4 mt-2">
                                            <div className="flex items-center gap-3">
                                                <Switch id="sec-cctv" defaultChecked />
                                                <label htmlFor="sec-cctv" className="text-[14px] text-slate-700 cursor-pointer">CCTV Enabled</label>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Switch id="sec-bio" defaultChecked />
                                                <label htmlFor="sec-bio" className="text-[14px] text-slate-700 cursor-pointer">Biometric Enabled</label>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Switch id="sec-acc" defaultChecked />
                                                <label htmlFor="sec-acc" className="text-[14px] text-slate-700 cursor-pointer">Access Control</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-1 md:col-span-2 mt-2 pt-4 border-t border-slate-100">
                                        <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                            <FormLabel className="!mb-0 mt-2">IP Restriction (Whitelist)</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                            <Textarea placeholder="Enter IP addresses separated by commas" rows={2} className="text-[14px] font-mono" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'files' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Documents & Notes" icon={FileText} />
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Branch License</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Lease Agreement</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Utility Documents</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Other Documents</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" multiple className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>

                                    <SectionHeader title="Additional Information & Notes" icon={Activity} />
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Custom Fields</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input placeholder="Extra tags or data..." className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Public Notes</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea placeholder="Add any public notes about this branch..." rows={2} className="text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Internal Notes</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea placeholder="Add any private notes or context about this branch..." rows={2} className="text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Remarks</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea placeholder="Final remarks..." rows={2} className="text-[14px]" />
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
