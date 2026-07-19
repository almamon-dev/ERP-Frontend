import React, { useState } from 'react';
import { ArrowLeft, Save, Building2, Phone, Briefcase, ChevronRight, Image as ImageIcon, Paperclip, FileText, MapPin, Globe, Clock, CreditCard, Bell, Shield, Activity, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import Textarea from '@/components/ui/textarea';
import Select from '@/components/ui/select';
import TabHeader from '@/components/ui/tab-header';
import FormLabel from '@/components/ui/label';

const EDIT_TABS = [
    { id: 'general', label: 'General Info', icon: Building2 },
    { id: 'contact', label: 'Contact & Location', icon: MapPin },
    { id: 'preferences', label: 'System Preferences', icon: Settings },
    { id: 'finance', label: 'Financial & Tax', icon: CreditCard },
    { id: 'branding', label: 'Branding', icon: ImageIcon },
    { id: 'security', label: 'Security & Alerts', icon: Shield },
    { id: 'files', label: 'Documents & Extras', icon: FileText },
];

const SectionHeader = ({ title, icon: Icon, className = "col-span-1 md:col-span-2" }: { title: string, icon?: any, className?: string }) => (
    <div className={`${className} mt-4 pt-3 border-t border-slate-100 first:mt-0 first:pt-0 first:border-t-0 mb-2`}>
        <h3 className="text-[15px] font-bold text-slate-800 flex items-center gap-2">
            {Icon && <Icon size={16} className="text-slate-400" />}
            {title}
        </h3>
    </div>
);

export default function CompanyEdit() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('general');

    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">Edit Company</h1>
                        <p className="text-[14px] font-medium text-[#008060] mt-1">Update information for Global Enterprise Ltd.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-[32px] text-[14px]" onClick={() => navigate(-1)}>Cancel</Button>
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
                        {EDIT_TABS.map((tab) => {
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
                        {activeTab === 'general' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                    <TabHeader title="Company Overview" icon={Building2} />
                                    <div className="col-span-1 md:col-span-2 mb-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Company Logo</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-md border-2 border-dashed border-slate-300 flex items-center justify-center bg-slate-50 text-slate-400 overflow-hidden">
                                                <img src="https://ui-avatars.com/api/?name=Global+Enterprise&background=008060&color=fff" alt="Logo" className="w-full h-full object-cover opacity-50" />
                                            </div>
                                            <div>
                                                <Button variant="outline" size="sm" className="h-[28px] text-[13px] font-semibold">Change Logo</Button>
                                                <p className="text-[11px] text-slate-500 mt-1">PNG, JPG up to 2MB.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Company Name</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Global Enterprise Ltd." className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Company Code</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="CMP-001" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Legal Name</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Global Enterprise Technologies LLC" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Status</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Active" className="h-[36px]">
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </Select>
                                    </div>
                                    <div className="col-span-1 md:col-span-2 flex items-center gap-2 mt-1">
                                        <Switch id="default-company" defaultChecked />
                                        <label htmlFor="default-company" className="text-[14px] font-medium text-slate-700 cursor-pointer">Set as Default Company</label>
                                    </div>

                                    <SectionHeader title="Basic Information" />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Business Type</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Corporation" className="h-[36px]">
                                            <option value="">Select Type</option>
                                            <option value="Sole Proprietorship">Sole Proprietorship</option>
                                            <option value="Partnership">Partnership</option>
                                            <option value="LLC">LLC</option>
                                            <option value="Corporation">Corporation</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Industry</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Technology" className="h-[36px]">
                                            <option value="">Select Industry</option>
                                            <option value="Technology">Technology</option>
                                            <option value="Healthcare">Healthcare</option>
                                            <option value="Retail">Retail</option>
                                            <option value="Manufacturing">Manufacturing</option>
                                            <option value="Finance">Finance</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Company Size</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="500+" className="h-[36px]">
                                            <option value="">Select Size</option>
                                            <option value="1-10">1-10 Employees</option>
                                            <option value="11-50">11-50 Employees</option>
                                            <option value="51-200">51-200 Employees</option>
                                            <option value="201-500">201-500 Employees</option>
                                            <option value="500+">500+ Employees</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Established Date</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="date" defaultValue="2010-01-15" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Registration Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="REG-9988776655" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Trade License Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="TL-2025-0987" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Description</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Global Enterprise Ltd. is a leading provider of innovative technology solutions for modern businesses." rows={3} className="text-[14px]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'contact' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    
                                    <TabHeader title="Contact Information" icon={Phone} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Primary Email</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="email" defaultValue="contact@enterprise.com" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Secondary Email</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="email" defaultValue="support@enterprise.com" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Phone Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="+1 234 567 8900" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Mobile Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="+1 987 654 3210" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Fax</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="+1 234 567 8901" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Support Email</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="email" defaultValue="help@enterprise.com" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Contact Person</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="John Doe" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Contact Person Email</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="email" defaultValue="john.doe@enterprise.com" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Contact Person Phone</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="+1 555 123 4567" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Website</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="https://www.enterprise.com" className="h-[36px] text-[14px]" />
                                    </div>

                                    <SectionHeader title="Address Information" icon={MapPin} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Country</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="US" className="h-[36px]">
                                            <option value="">Select Country</option>
                                            <option value="US">United States</option>
                                            <option value="UK">United Kingdom</option>
                                            <option value="BD">Bangladesh</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">State / Province</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="New York" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">City</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="New York" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">ZIP / Postal Code</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="10001" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Street Address</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="123 Business Avenue, Tech Park, Suite 100" rows={2} className="text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Landmark</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Near Central Station" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Google Map URL</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="https://maps.google.com/?q=..." className="h-[36px] text-[14px]" />
                                    </div>

                                    <div className="col-span-1 md:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 border-t border-slate-100 mt-4 pt-3">
                                        <div className="col-span-1">
                                            <SectionHeader title="Working Hours" icon={Clock} />
                                            <div className="flex flex-col gap-y-3 mt-1">
                                                <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                                    <FormLabel className="!mb-0 mt-2">Working Days</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                                    <Select defaultValue="Mon-Fri" className="h-[36px]">
                                                        <option value="Mon-Fri">Monday - Friday</option>
                                                        <option value="Mon-Sat">Monday - Saturday</option>
                                                        <option value="Sun-Thu">Sunday - Thursday</option>
                                                    </Select>
                                                </div>
                                                <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                                    <FormLabel className="!mb-0 mt-2">Weekend</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                                    <Select defaultValue="Sat-Sun" className="h-[36px]">
                                                        <option value="Sat-Sun">Saturday, Sunday</option>
                                                        <option value="Fri-Sat">Friday, Saturday</option>
                                                        <option value="Sun">Sunday</option>
                                                    </Select>
                                                </div>
                                                <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                                    <FormLabel className="!mb-0 mt-2">Office Start Time</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                                    <Input type="time" defaultValue="09:00" className="h-[36px] text-[14px]" />
                                                </div>
                                                <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                                    <FormLabel className="!mb-0 mt-2">Office End Time</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                                    <Input type="time" defaultValue="18:00" className="h-[36px] text-[14px]" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-1">
                                            <SectionHeader title="Social Media" icon={Globe} />
                                            <div className="flex flex-col gap-y-3 mt-1">
                                                <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                                    <FormLabel className="!mb-0 mt-2">LinkedIn URL</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                                    <Input defaultValue="https://linkedin.com/company/enterprise" className="h-[36px] text-[14px]" />
                                                </div>
                                                <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                                    <FormLabel className="!mb-0 mt-2">Twitter (X) URL</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                                    <Input defaultValue="https://twitter.com/enterprise" className="h-[36px] text-[14px]" />
                                                </div>
                                                <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                                    <FormLabel className="!mb-0 mt-2">Facebook URL</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                                    <Input defaultValue="https://facebook.com/enterprise" className="h-[36px] text-[14px]" />
                                                </div>
                                                <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                                    <FormLabel className="!mb-0 mt-2">Instagram URL</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                                    <Input defaultValue="https://instagram.com/enterprise_life" className="h-[36px] text-[14px]" />
                                                </div>
                                                <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                                    <FormLabel className="!mb-0 mt-2">YouTube URL</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                                    <Input defaultValue="https://youtube.com/c/enterprise" className="h-[36px] text-[14px]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'preferences' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    
                                    <TabHeader title="System Preferences" icon={Settings} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Currency</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="USD" className="h-[36px]">
                                            <option value="">Select Currency</option>
                                            <option value="USD">USD ($)</option>
                                            <option value="EUR">EUR (€)</option>
                                            <option value="GBP">GBP (£)</option>
                                            <option value="BDT">BDT (৳)</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Language</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="en" className="h-[36px]">
                                            <option value="en">English (US)</option>
                                            <option value="bn">Bengali</option>
                                            <option value="es">Spanish</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Time Zone</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="EST" className="h-[36px]">
                                            <option value="">Select Time Zone</option>
                                            <option value="UTC">UTC</option>
                                            <option value="EST">EST (UTC-05:00)</option>
                                            <option value="Asia/Dhaka">Asia/Dhaka</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Date Format</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="YYYY-MM-DD" className="h-[36px]">
                                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                            <option value="DD-MM-YYYY">DD-MM-YYYY</option>
                                            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Time Format</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="12" className="h-[36px]">
                                            <option value="12">12-hour (AM/PM)</option>
                                            <option value="24">24-hour</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Fiscal Year Start</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Jan" className="h-[36px]">
                                            <option value="Jan">January</option>
                                            <option value="Apr">April</option>
                                            <option value="Jul">July</option>
                                            <option value="Oct">October</option>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel required className="!mb-0 mt-2">Week Start Day</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Select defaultValue="Mon" className="h-[36px]">
                                            <option value="Mon">Monday</option>
                                            <option value="Sun">Sunday</option>
                                            <option value="Sat">Saturday</option>
                                        </Select>
                                    </div>

                                </div>
                            </div>
                        )}

                        {activeTab === 'finance' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Financial & Tax" icon={CreditCard} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Bank Name</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Chase Bank" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Branch Name</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Manhattan Central" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Account Name</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Global Enterprise Ltd" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Account Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="**** **** 8976" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Swift Code</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="CHASUS33" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">IBAN</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="US12CHAS34567890123456" className="h-[36px] text-[14px]" />
                                    </div>

                                    <SectionHeader title="Tax & Compliance" icon={FileText} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Tax Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="TAX-445582" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">VAT Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="VAT-9988-USA" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">BIN Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="BIN-12345678" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">TIN Number</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="TIN-987654321" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Tax Region</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="New York State" className="h-[36px] text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Tax Office</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input defaultValue="Manhattan District 1" className="h-[36px] text-[14px]" />
                                    </div>

                                </div>
                            </div>
                        )}

                        {activeTab === 'branding' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Branding" icon={ImageIcon} />
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
                                        <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                            <FormLabel className="!mb-0 mt-2">Primary Color</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                            <div className="flex items-center gap-3">
                                                <Input type="color" defaultValue="#008060" className="w-10 h-[36px] p-1 cursor-pointer" />
                                                <Input type="text" defaultValue="#008060" className="h-[36px] font-mono text-[14px]" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                            <FormLabel className="!mb-0 mt-2">Secondary Color</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                            <div className="flex items-center gap-3">
                                                <Input type="color" defaultValue="#1a1a1a" className="w-10 h-[36px] p-1 cursor-pointer" />
                                                <Input type="text" defaultValue="#1a1a1a" className="h-[36px] font-mono text-[14px]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Favicon</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Email Header Logo</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>

                                </div>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <TabHeader title="Security & Alerts" icon={Shield} />
                                    <div className="col-span-1">
                                        <SectionHeader title="Notification Settings" icon={Bell} className="col-span-1" />
                                        <div className="flex flex-col gap-4 mt-2">
                                            <div className="flex items-center gap-3">
                                                <Switch id="email-notif" defaultChecked />
                                                <label htmlFor="email-notif" className="text-[14px] text-slate-700 cursor-pointer">Email Notifications</label>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Switch id="sms-notif" />
                                                <label htmlFor="sms-notif" className="text-[14px] text-slate-700 cursor-pointer">SMS Notifications</label>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Switch id="push-notif" defaultChecked />
                                                <label htmlFor="push-notif" className="text-[14px] text-slate-700 cursor-pointer">Push Notifications</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-1">
                                        <SectionHeader title="Security Settings" icon={Shield} className="col-span-1" />
                                        <div className="flex flex-col gap-4 mt-2">
                                            <div className="flex items-center gap-3">
                                                <Switch id="2fa" defaultChecked />
                                                <label htmlFor="2fa" className="text-[14px] text-slate-700 font-medium cursor-pointer">Require 2FA for all users</label>
                                            </div>
                                            
                                            <div className="grid grid-cols-[110px_10px_1fr] items-start gap-2 mt-1">
                                                <FormLabel className="!mb-0 mt-2">Password Policy</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                                <Select defaultValue="Strict" className="h-[32px] text-[13px]">
                                                    <option value="Standard">Standard (Min 8)</option>
                                                    <option value="Strict">Strict (Special Chars)</option>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-1 md:col-span-2 mt-2 pt-4 border-t border-slate-100">
                                        <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                            <FormLabel className="!mb-0 mt-2">IP Restriction (Whitelist)</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                            <Textarea defaultValue="192.168.1.1, 10.0.0.*" rows={2} className="text-[14px] font-mono" />
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
                                        <FormLabel className="!mb-0 mt-2">Trade License</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Company Certificate</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Tax Certificate</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Other Documents</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Input type="file" multiple className="h-[36px] text-[14px] p-0 file:h-full file:mr-4 file:px-4 file:py-0 file:bg-slate-50 file:border-0 file:border-r file:border-slate-200 file:text-slate-700 file:font-medium file:cursor-pointer hover:file:bg-slate-100 cursor-pointer text-slate-500" />
                                    </div>

                                    <div className="col-span-1 md:col-span-2 mt-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { name: 'Trade_License_2025.pdf', size: '2.4 MB', type: 'Trade License' },
                                                { name: 'Company_Certificate.pdf', size: '1.1 MB', type: 'Company Certificate' },
                                            ].map((doc, idx) => (
                                                <div key={idx} className="flex items-center justify-between p-2 border border-slate-200 rounded-md bg-slate-50">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center"><FileText size={14}/></div>
                                                        <div>
                                                            <p className="text-[14px] font-semibold text-slate-800">{doc.name}</p>
                                                            <p className="text-[11px] text-slate-500">{doc.type} • {doc.size}</p>
                                                        </div>
                                                    </div>
                                                    <Button variant="outline" size="sm" className="h-7 text-xs text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">Remove</Button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <SectionHeader title="Additional Information" icon={Activity} />
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Remarks</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="This company is a platinum tier partner. Prioritize support requests." rows={3} className="text-[14px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-[160px_10px_1fr] items-start gap-3">
                                        <FormLabel className="!mb-0 mt-2">Internal Notes</FormLabel>
                                        <p className="text-[14px] text-slate-400 mt-2">:</p>
                                        <Textarea defaultValue="Ensure all communications are CC'd to the Enterprise Accounts team. Contract renewal due in Q4 2026." rows={3} className="text-[14px]" />
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
