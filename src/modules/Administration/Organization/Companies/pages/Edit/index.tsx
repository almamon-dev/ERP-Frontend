import React, { useState } from 'react';
import { ArrowLeft, Save, Building2, Phone, Briefcase, ChevronRight, Image as ImageIcon, Paperclip, FileText, MapPin, Globe, Clock, CreditCard, Bell, Shield, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import Textarea from '@/components/ui/textarea';
import Select from '@/components/ui/select';

const EDIT_TABS = [
    { id: 'general', label: 'General Information', icon: Building2 },
    { id: 'contact', label: 'Contact & Location', icon: MapPin },
    { id: 'settings', label: 'Business Settings', icon: Briefcase },
    { id: 'files', label: 'Documents & Extras', icon: FileText },
];

const SectionHeader = ({ title, icon: Icon }: { title: string, icon?: any }) => (
    <div className="col-span-1 md:col-span-2 mt-4 pt-3 border-t border-slate-100 first:mt-0 first:pt-0 first:border-t-0 mb-2">
        <h3 className="text-[14px] font-bold text-slate-800 flex items-center gap-2">
            {Icon && <Icon size={16} className="text-slate-400" />}
            {title}
        </h3>
    </div>
);

const FormLabel = ({ children, required }: { children: React.ReactNode, required?: boolean }) => (
    <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
        {children} {required && <span className="text-red-500">*</span>}
    </label>
);

export default function CompanyEdit() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('general');

    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden flex items-center justify-center">
                        <img src="https://ui-avatars.com/api/?name=Global+Enterprise&background=008060&color=fff" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">Edit Company</h1>
                        <p className="text-[13px] font-medium text-[#008060] mt-1">Update information for Global Enterprise Ltd.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-[32px] text-[13px]" onClick={() => navigate(-1)}>Cancel</Button>
                    <Button size="sm" className="h-[32px] text-[13px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                        <Save size={14} />
                        Save Changes
                    </Button>
                </div>
            </div>

            {/* Layout */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-[260px] flex-shrink-0 bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
                    <div className="flex flex-col">
                        {EDIT_TABS.map((tab) => {
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
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                    <SectionHeader title="Company Overview" icon={Building2} />
                                    <div className="col-span-1 md:col-span-2 mb-2">
                                        <FormLabel>Company Logo</FormLabel>
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-md border-2 border-dashed border-slate-300 flex items-center justify-center bg-slate-50 text-slate-400 overflow-hidden">
                                                <img src="https://ui-avatars.com/api/?name=Global+Enterprise&background=008060&color=fff" alt="Logo" className="w-full h-full object-cover opacity-50" />
                                            </div>
                                            <div>
                                                <Button variant="outline" size="sm" className="h-[28px] text-[12px] font-semibold">Change Logo</Button>
                                                <p className="text-[11px] text-slate-500 mt-1">PNG, JPG up to 2MB.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <FormLabel required>Company Name</FormLabel>
                                        <Input defaultValue="Global Enterprise Ltd." className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel required>Company Code</FormLabel>
                                        <Input defaultValue="CMP-001" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Legal Name</FormLabel>
                                        <Input defaultValue="Global Enterprise Technologies LLC" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel required>Status</FormLabel>
                                        <Select defaultValue="Active" className="h-[36px]">
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </Select>
                                    </div>
                                    <div className="col-span-1 md:col-span-2 flex items-center gap-2 mt-1">
                                        <Switch id="default-company" defaultChecked />
                                        <label htmlFor="default-company" className="text-[13px] font-medium text-slate-700 cursor-pointer">Set as Default Company</label>
                                    </div>

                                    <SectionHeader title="Basic Information" />
                                    <div>
                                        <FormLabel required>Business Type</FormLabel>
                                        <Select defaultValue="Corporation" className="h-[36px]">
                                            <option value="">Select Type</option>
                                            <option value="Sole Proprietorship">Sole Proprietorship</option>
                                            <option value="Partnership">Partnership</option>
                                            <option value="LLC">LLC</option>
                                            <option value="Corporation">Corporation</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <FormLabel required>Industry</FormLabel>
                                        <Select defaultValue="Technology" className="h-[36px]">
                                            <option value="">Select Industry</option>
                                            <option value="Technology">Technology</option>
                                            <option value="Healthcare">Healthcare</option>
                                            <option value="Retail">Retail</option>
                                            <option value="Manufacturing">Manufacturing</option>
                                            <option value="Finance">Finance</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <FormLabel>Company Size</FormLabel>
                                        <Select defaultValue="500+" className="h-[36px]">
                                            <option value="">Select Size</option>
                                            <option value="1-10">1-10 Employees</option>
                                            <option value="11-50">11-50 Employees</option>
                                            <option value="51-200">51-200 Employees</option>
                                            <option value="201-500">201-500 Employees</option>
                                            <option value="500+">500+ Employees</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <FormLabel>Established Date</FormLabel>
                                        <Input type="date" defaultValue="2010-01-15" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Registration Number</FormLabel>
                                        <Input defaultValue="REG-9988776655" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Trade License Number</FormLabel>
                                        <Input defaultValue="TL-2025-0987" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <FormLabel>Description</FormLabel>
                                        <Textarea defaultValue="Global Enterprise Ltd. is a leading provider of innovative technology solutions for modern businesses." rows={3} className="text-[13px]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'contact' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    
                                    <SectionHeader title="Contact Information" icon={Phone} />
                                    <div>
                                        <FormLabel required>Primary Email</FormLabel>
                                        <Input type="email" defaultValue="contact@enterprise.com" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Secondary Email</FormLabel>
                                        <Input type="email" defaultValue="support@enterprise.com" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel required>Phone Number</FormLabel>
                                        <Input defaultValue="+1 234 567 8900" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Mobile Number</FormLabel>
                                        <Input defaultValue="+1 987 654 3210" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Fax</FormLabel>
                                        <Input defaultValue="+1 234 567 8901" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Support Email</FormLabel>
                                        <Input type="email" defaultValue="help@enterprise.com" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Contact Person</FormLabel>
                                        <Input defaultValue="John Doe" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Contact Person Email</FormLabel>
                                        <Input type="email" defaultValue="john.doe@enterprise.com" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Contact Person Phone</FormLabel>
                                        <Input defaultValue="+1 555 123 4567" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Website</FormLabel>
                                        <Input defaultValue="https://www.enterprise.com" className="h-[36px] text-[13px]" />
                                    </div>

                                    <SectionHeader title="Address Information" icon={MapPin} />
                                    <div>
                                        <FormLabel required>Country</FormLabel>
                                        <Select defaultValue="US" className="h-[36px]">
                                            <option value="">Select Country</option>
                                            <option value="US">United States</option>
                                            <option value="UK">United Kingdom</option>
                                            <option value="BD">Bangladesh</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <FormLabel>State / Province</FormLabel>
                                        <Input defaultValue="New York" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel required>City</FormLabel>
                                        <Input defaultValue="New York" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>ZIP / Postal Code</FormLabel>
                                        <Input defaultValue="10001" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <FormLabel required>Street Address</FormLabel>
                                        <Textarea defaultValue="123 Business Avenue, Tech Park, Suite 100" rows={2} className="text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Landmark</FormLabel>
                                        <Input defaultValue="Near Central Station" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Google Map URL</FormLabel>
                                        <Input defaultValue="https://maps.google.com/?q=..." className="h-[36px] text-[13px]" />
                                    </div>

                                    <SectionHeader title="Working Hours" icon={Clock} />
                                    <div>
                                        <FormLabel>Working Days</FormLabel>
                                        <Select defaultValue="Mon-Fri" className="h-[36px]">
                                            <option value="Mon-Fri">Monday - Friday</option>
                                            <option value="Mon-Sat">Monday - Saturday</option>
                                            <option value="Sun-Thu">Sunday - Thursday</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <FormLabel>Weekend</FormLabel>
                                        <Select defaultValue="Sat-Sun" className="h-[36px]">
                                            <option value="Sat-Sun">Saturday, Sunday</option>
                                            <option value="Fri-Sat">Friday, Saturday</option>
                                            <option value="Sun">Sunday</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <FormLabel>Office Start Time</FormLabel>
                                        <Input type="time" defaultValue="09:00" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Office End Time</FormLabel>
                                        <Input type="time" defaultValue="18:00" className="h-[36px] text-[13px]" />
                                    </div>

                                    <SectionHeader title="Social Media" icon={Globe} />
                                    <div>
                                        <FormLabel>LinkedIn URL</FormLabel>
                                        <Input defaultValue="https://linkedin.com/company/enterprise" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Twitter (X) URL</FormLabel>
                                        <Input defaultValue="https://twitter.com/enterprise" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Facebook URL</FormLabel>
                                        <Input defaultValue="https://facebook.com/enterprise" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Instagram URL</FormLabel>
                                        <Input defaultValue="https://instagram.com/enterprise_life" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>YouTube URL</FormLabel>
                                        <Input defaultValue="https://youtube.com/c/enterprise" className="h-[36px] text-[13px]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    
                                    <SectionHeader title="Business Configuration" icon={Briefcase} />
                                    <div>
                                        <FormLabel required>Currency</FormLabel>
                                        <Select defaultValue="USD" className="h-[36px]">
                                            <option value="">Select Currency</option>
                                            <option value="USD">USD ($)</option>
                                            <option value="EUR">EUR (€)</option>
                                            <option value="GBP">GBP (£)</option>
                                            <option value="BDT">BDT (৳)</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <FormLabel required>Language</FormLabel>
                                        <Select defaultValue="en" className="h-[36px]">
                                            <option value="en">English (US)</option>
                                            <option value="bn">Bengali</option>
                                            <option value="es">Spanish</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <FormLabel required>Time Zone</FormLabel>
                                        <Select defaultValue="EST" className="h-[36px]">
                                            <option value="">Select Time Zone</option>
                                            <option value="UTC">UTC</option>
                                            <option value="EST">EST (UTC-05:00)</option>
                                            <option value="Asia/Dhaka">Asia/Dhaka</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <FormLabel required>Date Format</FormLabel>
                                        <Select defaultValue="YYYY-MM-DD" className="h-[36px]">
                                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                            <option value="DD-MM-YYYY">DD-MM-YYYY</option>
                                            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <FormLabel required>Time Format</FormLabel>
                                        <Select defaultValue="12" className="h-[36px]">
                                            <option value="12">12-hour (AM/PM)</option>
                                            <option value="24">24-hour</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <FormLabel required>Fiscal Year Start</FormLabel>
                                        <Select defaultValue="Jan" className="h-[36px]">
                                            <option value="Jan">January</option>
                                            <option value="Apr">April</option>
                                            <option value="Jul">July</option>
                                            <option value="Oct">October</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <FormLabel required>Week Start Day</FormLabel>
                                        <Select defaultValue="Mon" className="h-[36px]">
                                            <option value="Mon">Monday</option>
                                            <option value="Sun">Sunday</option>
                                            <option value="Sat">Saturday</option>
                                        </Select>
                                    </div>

                                    <SectionHeader title="Financial Information" icon={CreditCard} />
                                    <div>
                                        <FormLabel>Bank Name</FormLabel>
                                        <Input defaultValue="Chase Bank" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Branch Name</FormLabel>
                                        <Input defaultValue="Manhattan Central" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Account Name</FormLabel>
                                        <Input defaultValue="Global Enterprise Ltd" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Account Number</FormLabel>
                                        <Input defaultValue="**** **** 8976" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Swift Code</FormLabel>
                                        <Input defaultValue="CHASUS33" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>IBAN</FormLabel>
                                        <Input defaultValue="US12CHAS34567890123456" className="h-[36px] text-[13px]" />
                                    </div>

                                    <SectionHeader title="Tax & Compliance" icon={FileText} />
                                    <div>
                                        <FormLabel>Tax Number</FormLabel>
                                        <Input defaultValue="TAX-445582" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>VAT Number</FormLabel>
                                        <Input defaultValue="VAT-9988-USA" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>BIN Number</FormLabel>
                                        <Input defaultValue="BIN-12345678" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>TIN Number</FormLabel>
                                        <Input defaultValue="TIN-987654321" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Tax Region</FormLabel>
                                        <Input defaultValue="New York State" className="h-[36px] text-[13px]" />
                                    </div>
                                    <div>
                                        <FormLabel>Tax Office</FormLabel>
                                        <Input defaultValue="Manhattan District 1" className="h-[36px] text-[13px]" />
                                    </div>

                                    <SectionHeader title="Branding" icon={ImageIcon} />
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
                                        <div>
                                            <FormLabel>Primary Color</FormLabel>
                                            <div className="flex items-center gap-3">
                                                <Input type="color" defaultValue="#008060" className="w-10 h-[36px] p-1 cursor-pointer" />
                                                <Input type="text" defaultValue="#008060" className="h-[36px] font-mono text-[13px]" />
                                            </div>
                                        </div>
                                        <div>
                                            <FormLabel>Secondary Color</FormLabel>
                                            <div className="flex items-center gap-3">
                                                <Input type="color" defaultValue="#1a1a1a" className="w-10 h-[36px] p-1 cursor-pointer" />
                                                <Input type="text" defaultValue="#1a1a1a" className="h-[36px] font-mono text-[13px]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <FormLabel>Favicon</FormLabel>
                                        <Input type="file" className="h-[36px] text-[13px] pt-1.5" />
                                    </div>
                                    <div>
                                        <FormLabel>Email Header Logo</FormLabel>
                                        <Input type="file" className="h-[36px] text-[13px] pt-1.5" />
                                    </div>

                                    <SectionHeader title="Notification Settings" icon={Bell} />
                                    <div className="col-span-1 md:col-span-2 flex items-center gap-8 mb-2">
                                        <div className="flex items-center gap-2">
                                            <Switch id="email-notif" defaultChecked />
                                            <label htmlFor="email-notif" className="text-[13px] text-slate-700 cursor-pointer">Email Notifications</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Switch id="sms-notif" />
                                            <label htmlFor="sms-notif" className="text-[13px] text-slate-700 cursor-pointer">SMS Notifications</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Switch id="push-notif" defaultChecked />
                                            <label htmlFor="push-notif" className="text-[13px] text-slate-700 cursor-pointer">Push Notifications</label>
                                        </div>
                                    </div>

                                    <SectionHeader title="Security Settings" icon={Shield} />
                                    <div className="col-span-1 md:col-span-2 flex items-center gap-2 mb-2">
                                        <Switch id="2fa" defaultChecked />
                                        <label htmlFor="2fa" className="text-[13px] text-slate-700 font-medium cursor-pointer">Require Two-Factor Authentication (2FA) for all users</label>
                                    </div>
                                    <div>
                                        <FormLabel>Password Policy</FormLabel>
                                        <Select defaultValue="Strict" className="h-[36px]">
                                            <option value="Standard">Standard (Min 8 chars)</option>
                                            <option value="Strict">Strict (Alphanumeric + Special)</option>
                                        </Select>
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <FormLabel>IP Restriction (Whitelist)</FormLabel>
                                        <Textarea defaultValue="192.168.1.1, 10.0.0.*" rows={2} className="text-[13px] font-mono" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'files' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <SectionHeader title="Documents & Attachments" icon={FileText} />
                                    
                                    <div>
                                        <FormLabel>Trade License</FormLabel>
                                        <Input type="file" className="h-[36px] text-[13px] pt-1.5" />
                                    </div>
                                    <div>
                                        <FormLabel>Company Certificate</FormLabel>
                                        <Input type="file" className="h-[36px] text-[13px] pt-1.5" />
                                    </div>
                                    <div>
                                        <FormLabel>Tax Certificate</FormLabel>
                                        <Input type="file" className="h-[36px] text-[13px] pt-1.5" />
                                    </div>
                                    <div>
                                        <FormLabel>Other Documents</FormLabel>
                                        <Input type="file" multiple className="h-[36px] text-[13px] pt-1.5" />
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
                                                            <p className="text-[13px] font-semibold text-slate-800">{doc.name}</p>
                                                            <p className="text-[11px] text-slate-500">{doc.type} • {doc.size}</p>
                                                        </div>
                                                    </div>
                                                    <Button variant="outline" size="sm" className="h-7 text-xs text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">Remove</Button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <SectionHeader title="Additional Information" icon={Activity} />
                                    <div className="col-span-1 md:col-span-2">
                                        <FormLabel>Remarks</FormLabel>
                                        <Textarea defaultValue="This company is a platinum tier partner. Prioritize support requests." rows={3} className="text-[13px]" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <FormLabel>Internal Notes</FormLabel>
                                        <Textarea defaultValue="Ensure all communications are CC'd to the Enterprise Accounts team. Contract renewal due in Q4 2026." rows={3} className="text-[13px]" />
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
