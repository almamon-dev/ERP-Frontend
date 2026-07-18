import React, { useState } from 'react';
import { ArrowLeft, Save, Building2, Phone, Briefcase, ChevronRight, Image, Paperclip, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import Textarea from '@/components/ui/textarea';
import Select from '@/components/ui/select';

const CREATE_TABS = [
    { id: 'general', label: 'General Information', icon: Building2 },
    { id: 'contact', label: 'Contact & Location', icon: Phone },
    { id: 'settings', label: 'Business Settings', icon: Briefcase },
    { id: 'files', label: 'Files & Notes', icon: FileText },
];

export default function CompanyCreate() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('general');
    const [isActive, setIsActive] = useState(true);

    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">Create New Company</h1>
                        <p className="text-[13px] font-medium text-[#008060] mt-1">Fill in the required information to add a new company.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-[32px] text-[13px]" onClick={() => navigate(-1)}>Cancel</Button>
                    <Button size="sm" className="h-[32px] text-[13px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                        <Save size={14} />
                        Save Company
                    </Button>
                </div>
            </div>

            {/* Layout */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-[260px] flex-shrink-0 bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
                    <div className="flex flex-col">
                        {CREATE_TABS.map((tab) => {
                            const Icon = tab.icon;
                            const isSelected = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center justify-between px-4 py-3.5 text-[13px] font-medium transition-colors border-l-[3px] border-b border-slate-50 last:border-b-0 ${
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
                <div className="flex-1 bg-white border border-slate-200 rounded-md shadow-sm w-full h-fit">
                    <div className="p-6 md:p-8">
                        {activeTab === 'general' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                
                                <div className="mb-6 pb-4 border-b border-slate-100">
                                    <div>
                                        <h2 className="text-[16px] font-bold text-slate-800">General Information</h2>
                                        <p className="text-[13px] text-slate-500 mt-1">Core identity and business overview.</p>
                                    </div>
                                </div>

                                <div className="space-y-3 w-full">
                                    <div>
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Company Logo</label>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-md border-2 border-dashed border-slate-300 flex items-center justify-center bg-slate-50 text-slate-400">
                                                <Image size={24} />
                                            </div>
                                            <div>
                                                <Button variant="outline" size="sm" className="h-[30px] text-[12px] font-semibold">Upload Logo</Button>
                                                <p className="text-[11px] text-slate-500 mt-1.5">PNG, JPG up to 2MB.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                        <div className="col-span-1 md:col-span-2">
                                            <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Company Name <span className="text-red-500">*</span></label>
                                            <Input placeholder="Enter company name" className="h-[38px] text-[13px]" />
                                        </div>
                                        <div>
                                            <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Company Code <span className="text-red-500">*</span></label>
                                            <Input placeholder="e.g. CMP-001" className="h-[38px] text-[13px]" />
                                        </div>
                                        <div>
                                            <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Business Type <span className="text-red-500">*</span></label>
                                            <Select className="h-[38px]">
                                                <option value="">Select Type</option>
                                                <option value="LLC">LLC</option>
                                                <option value="Corporation">Corporation</option>
                                                <option value="Partnership">Partnership</option>
                                                <option value="Sole Proprietorship">Sole Proprietorship</option>
                                            </Select>
                                        </div>
                                        <div className="col-span-1 md:col-span-2 pt-1">
                                            <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Industry / Sector</label>
                                            <Input placeholder="e.g. Technology, Healthcare, Manufacturing" className="h-[38px] text-[13px]" />
                                        </div>
                                        <div className="col-span-1 md:col-span-2">
                                            <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Short Description</label>
                                            <Textarea placeholder="A brief description of what the company does..." rows={2} className="text-[13px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'contact' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="mb-6 pb-4 border-b border-slate-100">
                                    <h2 className="text-[16px] font-bold text-slate-800">Contact & Location</h2>
                                    <p className="text-[13px] text-slate-500 mt-1">Communication details and physical addresses.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <div className="col-span-1 md:col-span-2">
                                        <h3 className="text-[14px] font-bold text-slate-800 mb-4 mt-2">Contact Channels</h3>
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                                        <Input type="email" placeholder="contact@company.com" className="h-[38px] text-[13px]" />
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                                        <Input placeholder="+1 (555) 000-0000" className="h-[38px] text-[13px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Primary Website</label>
                                        <Input placeholder="https://www.example.com" className="h-[38px] text-[13px]" />
                                    </div>

                                    <div className="col-span-1 md:col-span-2 mt-4 pt-5 border-t border-slate-100">
                                        <h3 className="text-[14px] font-bold text-slate-800 mb-4 mt-2">Physical Address</h3>
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Country <span className="text-red-500">*</span></label>
                                        <Select className="h-[38px]">
                                            <option value="">Select Country</option>
                                            <option value="US">United States</option>
                                            <option value="UK">United Kingdom</option>
                                            <option value="BD">Bangladesh</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">State / Province</label>
                                        <Input placeholder="State name" className="h-[38px] text-[13px]" />
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">City <span className="text-red-500">*</span></label>
                                        <Input placeholder="City name" className="h-[38px] text-[13px]" />
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">ZIP / Postal Code</label>
                                        <Input placeholder="ZIP Code" className="h-[38px] text-[13px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Full Street Address <span className="text-red-500">*</span></label>
                                        <Textarea placeholder="Enter full street address" rows={2} className="text-[13px]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="mb-6 pb-4 border-b border-slate-100">
                                    <h2 className="text-[16px] font-bold text-slate-800">Business Settings</h2>
                                    <p className="text-[13px] text-slate-500 mt-1">Business configuration and legal documents.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <div className="col-span-1 md:col-span-2">
                                        <h3 className="text-[14px] font-bold text-slate-800 mb-4 mt-2">Preferences</h3>
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Currency <span className="text-red-500">*</span></label>
                                        <Select className="h-[38px]">
                                            <option value="">Select Currency</option>
                                            <option value="USD">USD ($)</option>
                                            <option value="EUR">EUR (€)</option>
                                            <option value="GBP">GBP (£)</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Language <span className="text-red-500">*</span></label>
                                        <Select className="h-[38px]">
                                            <option value="">Select Language</option>
                                            <option value="en">English</option>
                                            <option value="bn">Bengali</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Time Zone <span className="text-red-500">*</span></label>
                                        <Select className="h-[38px]">
                                            <option value="">Select Time Zone</option>
                                            <option value="UTC">UTC (Coordinated Universal Time)</option>
                                            <option value="Asia/Dhaka">Asia/Dhaka (GMT+6)</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Date Format <span className="text-red-500">*</span></label>
                                        <Select className="h-[38px]">
                                            <option value="">Select Date Format</option>
                                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                            <option value="DD-MM-YYYY">DD-MM-YYYY</option>
                                        </Select>
                                    </div>
                                    
                            
                                    <div className="col-span-1 md:col-span-2 mt-4 pt-5 border-t border-slate-100">
                                        <h3 className="text-[14px] font-bold text-slate-800 mb-4 mt-2">Legal Information</h3>
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Official Legal Name</label>
                                        <Input placeholder="Full registered legal entity name" className="h-[38px] text-[13px]" />
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Registration Number</label>
                                        <Input placeholder="Business Reg Number" className="h-[38px] text-[13px]" />
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Tax / VAT Number</label>
                                        <Input placeholder="Tax Identification Number" className="h-[38px] text-[13px]" />
                                    </div>
                                    <div>
                                        <label className="block text-[12px] font-semibold text-slate-800 mb-1">Fiscal Year <span className="text-red-500">*</span></label>
                                        <Select className="h-[34px]">
                                            <option value="">Select Fiscal Year Start</option>
                                            <option value="January">January - December</option>
                                            <option value="April">April - March</option>
                                            <option value="July">July - June</option>
                                        </Select>
                                    </div>
                                     <div>
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Primary Brand Color</label>
                                        <div className="flex items-center gap-3">
                                            <div className="w-7 h-7 rounded-full bg-[#008060] border-2 border-slate-200 shadow-sm cursor-pointer"></div>
                                            <Input type="text" value="#008060" className="h-[34px] w-24 font-mono text-[13px]" readOnly />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'files' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="mb-6 pb-4 border-b border-slate-100">
                                    <h2 className="text-[16px] font-bold text-slate-800">Files & Notes</h2>
                                    <p className="text-[13px] text-slate-500 mt-1">Document uploads and internal notes.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Attachments</label>
                                        <div className="border-2 border-dashed border-slate-300 rounded-md p-4 flex flex-col items-center justify-center bg-[#fafafa] hover:bg-slate-100 transition-colors cursor-pointer text-slate-500 h-24">
                                            <Paperclip size={20} className="mb-1 text-slate-400" />
                                            <p className="text-[12px] font-semibold text-slate-700">Click or drag files here</p>
                                            <p className="text-[11px] text-slate-500">Supports PDF, DOCX, JPG (Max 10MB)</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Internal Notes</label>
                                        <Textarea placeholder="Add any private notes or context about this company..." rows={2} className="text-[13px]" />
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
