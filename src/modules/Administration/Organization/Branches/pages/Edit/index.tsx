import React, { useState } from 'react';
import { ArrowLeft, Save, Building2, Phone, Briefcase, ChevronRight, Image as ImageIcon, Paperclip, FileText, MapPin, Globe, Clock, CreditCard, Bell, Shield, Activity, Settings, Users, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Select from '@/components/ui/select';
import Switch from '@/components/ui/switch';
import FormLabel from '@/components/ui/label';

const EDIT_TABS = [
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

export default function BranchEdit() {
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
                            Edit Branch
                            <span className="px-2.5 py-0.5 text-[12px] font-medium bg-emerald-100 text-[#008060] rounded-full">Active</span>
                        </h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">BR-001 • Global Enterprise Ltd.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-[32px] text-[14px]" onClick={() => navigate(-1)}>Cancel</Button>
                    <Button size="sm" className="h-[32px] text-[14px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                        <Save size={14} />
                        Update Branch
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
                                    <TabHeader title="Branch Overview" icon={Building2} />
                                    
                                    <div className="col-span-1 md:col-span-2 flex items-start gap-6 mb-4">
                                        <div className="w-24 h-24 rounded-md border-2 border-slate-200 overflow-hidden flex flex-col items-center justify-center bg-slate-50 text-slate-500 cursor-pointer group relative">
                                            <img src="https://ui-avatars.com/api/?name=Manhattan+Branch&background=008060&color=fff" alt="Branch" className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                                <ImageIcon size={20} className="text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-1 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                            <FormLabel required className="!mb-0 mt-2">Company</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                            <Select defaultValue="1" className="h-[36px]">
                                                <option value="">Select Company</option>
                                                <option value="1">Global Enterprise Ltd.</option>
                                                <option value="2">TechFlow Solutions</option>
                                            </Select>
                                            
                                            <FormLabel required className="!mb-0 mt-2">Branch Name</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                            <Input defaultValue="Manhattan Main" className="h-[36px] text-[14px]" />
                                            
                                            <FormLabel required className="!mb-0 mt-2">Branch Code</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                            <Input defaultValue="BR-001" className="h-[36px] text-[14px]" />
                                        </div>
                                    </div>

                                    <SectionHeader title="Basic Information" />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Business Unit</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Retail" className="h-[36px]">
                                            <option value="">Select Business Unit</option>
                                            <option value="Retail">Retail</option>
                                            <option value="Corporate">Corporate</option>
                                            <option value="Manufacturing">Manufacturing</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Branch Type</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Physical" className="h-[36px]">
                                            <option value="Physical">Physical Store</option>
                                            <option value="Virtual">Virtual Office</option>
                                            <option value="Warehouse">Warehouse</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Branch Category</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="A" className="h-[36px]">
                                            <option value="">Select Category</option>
                                            <option value="A">Class A</option>
                                            <option value="B">Class B</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Opening Date</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="date" defaultValue="2018-05-12" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Description</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Flagship branch in Manhattan, New York." rows={3} className="text-[14px]" />
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
                                            <Switch id="is-default" defaultChecked />
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
                                        <Input type="email" defaultValue="manhattan@globalent.com" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Phone Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="+1 212 555 0198" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Mobile Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="+1 917 555 0199" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Fax</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="+1 212 555 0197" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Website</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="https://www.globalent.com/ny" className="h-[36px] text-[14px]" />
                                    </div>

                                    <SectionHeader title="Address Information" icon={MapPin} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Country</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="US" className="h-[36px]">
                                            <option value="US">United States</option>
                                            <option value="UK">United Kingdom</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">State</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="New York" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">City</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="New York City" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">ZIP Code</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="10001" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Street Address</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="123 Corporate Ave, Suite 500" rows={2} className="text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Landmark</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Opposite Central Park" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Google Map URL</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="https://maps.google.com/?q=40.7128,-74.0060" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">GPS Coordinates</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="40.7128, -74.0060" className="h-[36px] text-[14px] font-mono" />
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
                                        <Input defaultValue="John Doe" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Assistant Manager</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Jane Smith" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Department Head</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Mike Ross" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Manager Email</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="email" defaultValue="johndoe@globalent.com" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Manager Phone</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="+1 917 555 1234" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Total Employees</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="number" defaultValue="45" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Reporting Branch</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select className="h-[36px]">
                                            <option value="">Head Office</option>
                                        </Select>
                                    </div>

                                    <SectionHeader title="Working Hours" icon={Clock} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Working Days</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Mon-Fri" className="h-[36px]">
                                            <option value="Mon-Fri">Monday - Friday</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Weekend</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Sat-Sun" className="h-[36px]">
                                            <option value="Sat-Sun">Saturday - Sunday</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Opening Time</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="time" defaultValue="09:00" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Closing Time</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="time" defaultValue="18:00" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Holiday Calendar</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="US" className="h-[36px]">
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
                                        <Input defaultValue="CC-NY-001" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Profit Center</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="PC-NY-001" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Bank Name</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Chase Bank" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Account Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="**** **** 5521" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Payment Terms</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Net 30" className="h-[36px] text-[14px]" />
                                    </div>

                                    <SectionHeader title="Tax & Compliance" icon={FileText} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Tax Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="TAX-89912" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">VAT Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="VAT-NY-001" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">BIN Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="BIN-45561" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">TIN Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="TIN-77889" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">License Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="LIC-2023-NY" className="h-[36px] text-[14px]" />
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
                                        <Select defaultValue="USD" className="h-[36px]">
                                            <option value="USD">USD ($)</option>
                                            <option value="EUR">EUR (€)</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Language</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="en" className="h-[36px]">
                                            <option value="en">English</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Time Zone</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="UTC" className="h-[36px]">
                                            <option value="UTC">UTC</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Date Format</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="YYYY-MM-DD" className="h-[36px]">
                                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Fiscal Year</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Jan" className="h-[36px]">
                                            <option value="Jan">January - December</option>
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
                                            <Textarea defaultValue="192.168.1.*" rows={2} className="text-[14px] font-mono" />
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
                                        <div className="flex items-center gap-3">
                                            <span className="text-[13px] text-slate-700 font-medium">branch_license_2023.pdf</span>
                                            <Button variant="outline" size="sm" className="h-[28px] text-[12px] px-2 text-slate-500">Replace</Button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Lease Agreement</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[13px] text-slate-700 font-medium">lease_agreement_ny.pdf</span>
                                            <Button variant="outline" size="sm" className="h-[28px] text-[12px] px-2 text-slate-500">Replace</Button>
                                        </div>
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
                                        <Input defaultValue="Premium Tier Branch" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Public Notes</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Flagship operations running normally." rows={2} className="text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Internal Notes</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Needs AC maintenance next month." rows={2} className="text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Remarks</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Top performing branch." rows={2} className="text-[14px]" />
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
