import React, { useState } from 'react';
import { Edit, Building2, Phone, Briefcase, FileText, ArrowLeft, Activity, MapPin, Globe, CreditCard, Shield, Clock, Bell, Image as ImageIcon, Download, Settings } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '@/components/ui/button';

const VIEW_TABS = [
    { id: 'general', label: 'General Info', icon: Building2 },
    { id: 'contact', label: 'Contact & Location', icon: MapPin },
    { id: 'preferences', label: 'System Preferences', icon: Settings },
    { id: 'finance', label: 'Financial & Tax', icon: CreditCard },
    { id: 'branding', label: 'Branding', icon: ImageIcon },
    { id: 'security', label: 'Security & Alerts', icon: Shield },
    { id: 'files', label: 'Documents & Extras', icon: FileText },
];

const ViewField = ({ label, value, isLink = false, linkHref = "" }: { label: string, value: React.ReactNode, isLink?: boolean, linkHref?: string }) => (
    <div className="grid grid-cols-[160px_10px_1fr] items-start">
        <p className="text-[14px] text-slate-500 font-medium">{label}</p>
        <p className="text-[14px] text-slate-400">:</p>
        {isLink ? (
            <a href={linkHref} target={linkHref.startsWith('http') ? "_blank" : "_self"} className="text-[14px] font-semibold text-blue-600 hover:underline break-all">
                {value || 'N/A'}
            </a>
        ) : (
            <div className="text-[14px] font-semibold text-slate-800 break-words">{value || <span className="text-slate-400 font-normal">N/A</span>}</div>
        )}
    </div>
);

const SectionHeader = ({ title, icon: Icon }: { title: string, icon?: any }) => (
    <div className="col-span-1 md:col-span-2 mt-4 pt-3 border-t border-slate-100 first:mt-0 first:pt-0 first:border-t-0 mb-3">
        <h3 className="text-[15px] font-bold text-slate-800 flex items-center gap-2">
            {Icon && <Icon size={16} className="text-slate-400" />}
            {title}
        </h3>
    </div>
);

export default function CompanyView() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('general');

    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">

                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">Global Enterprise Ltd.</h1>
                        <p className="text-[14px] font-medium text-[#008060] mt-1">CMP-001 • Technology</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-[32px] text-[14px] flex items-center gap-2" onClick={() => navigate(-1)}>
                        <ArrowLeft size={14} />
                        Back
                    </Button>
                    <Link to="/admin/organization/companies/edit/1">
                        <Button size="sm" className="h-[32px] text-[14px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                            <Edit size={14} />
                            Edit Company
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Layout */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-[240px] flex-shrink-0 bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
                    <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
                        <h3 className="text-[15px] font-bold text-slate-800">Categories</h3>
                    </div>
                    <div className="flex flex-col">
                        {VIEW_TABS.map((tab) => {
                            const Icon = tab.icon;
                            const isSelected = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center px-4 py-2.5 text-[14px] font-medium transition-colors border-l-[3px] border-b border-slate-50 last:border-b-0 ${isSelected
                                        ? 'border-l-[#008060] bg-[#f8fbf9] text-[#008060]'
                                        : 'border-l-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                        }`}
                                >
                                    <Icon size={16} className={`mr-3 ${isSelected ? 'text-[#008060]' : 'text-slate-400'}`} />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 bg-white border border-slate-200 rounded-md shadow-sm w-full">
                    <div className="p-6 md:p-8">
                        {activeTab === 'general' && (
                            <div className="space-y-4 animate-in fade-in duration-300">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <SectionHeader title="Company Overview" icon={Building2} />
                                    <ViewField label="Company Name" value="Global Enterprise Ltd." />
                                    <ViewField label="Company Code" value="CMP-001" />
                                    <ViewField label="Legal Name" value="Global Enterprise Technologies LLC" />
                                    <ViewField label="Status" value={<span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-green-100 text-green-700 border border-green-200 w-fit">Active</span>} />
                                    <ViewField label="Default Company" value={<span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200 w-fit">Yes</span>} />

                                    <SectionHeader title="Basic Information" />
                                    <ViewField label="Business Type" value="Corporation" />
                                    <ViewField label="Industry" value="Technology" />
                                    <ViewField label="Company Size" value="500+ Employees" />
                                    <ViewField label="Registration Number" value="REG-9988776655" />
                                    <ViewField label="Trade License No." value="TL-2025-0987" />
                                    <ViewField label="Established Date" value="Jan 15, 2010" />

                                    <div className="col-span-1 md:col-span-2 mt-2">
                                        <div className="grid grid-cols-[160px_10px_1fr] items-start">
                                            <p className="text-[14px] text-slate-500 font-medium">Description</p>
                                            <p className="text-[14px] text-slate-400">:</p>
                                            <p className="text-[14px] text-slate-700 leading-relaxed bg-slate-50 p-3 rounded border border-slate-100">
                                                Global Enterprise Ltd. is a leading provider of innovative technology solutions for modern businesses. Founded with the mission to streamline operations, it has quickly grown to become a cornerstone in the B2B tech sector.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'contact' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">

                                    <div className="flex flex-col gap-y-2">
                                        <SectionHeader title="Contact Information" icon={Phone} />
                                        <ViewField label="Primary Email" value="contact@enterprise.com" isLink linkHref="mailto:contact@enterprise.com" />
                                        <ViewField label="Secondary Email" value="support@enterprise.com" isLink linkHref="mailto:support@enterprise.com" />
                                        <ViewField label="Phone Number" value="+1 234 567 8900" />
                                        <ViewField label="Mobile Number" value="+1 987 654 3210" />
                                        <ViewField label="Website" value="www.enterprise.com" isLink linkHref="https://www.enterprise.com" />
                                        <ViewField label="Fax" value="+1 234 567 8901" />
                                        <ViewField label="Support Email" value="help@enterprise.com" isLink linkHref="mailto:help@enterprise.com" />
                                        <ViewField label="Contact Person" value="John Doe" />
                                        <ViewField label="Contact Person Email" value="john.doe@enterprise.com" isLink linkHref="mailto:john.doe@enterprise.com" />
                                        <ViewField label="Contact Person Phone" value="+1 555 123 4567" />
                                    </div>

                                    <div className="flex flex-col gap-y-2">
                                        <SectionHeader title="Location Information" icon={MapPin} />
                                        <ViewField label="Country" value="United States" />
                                        <ViewField label="State" value="New York" />
                                        <ViewField label="City" value="New York" />
                                        <ViewField label="ZIP Code" value="10001" />
                                        <ViewField label="Street Address" value="123 Business Avenue, Tech Park, Suite 100" />
                                        <ViewField label="Landmark" value="Near Central Station" />
                                        <ViewField label="Google Map URL" value="https://maps.google.com/?q=..." isLink linkHref="https://maps.google.com" />
                                    </div>

                                    <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 border-t border-slate-100 mt-4 pt-3">
                                        <div className="col-span-1">
                                            <SectionHeader title="Working Hours" icon={Clock} />
                                            <div className="flex flex-col gap-y-2 mt-1">
                                                <ViewField label="Working Days" value="Monday - Friday" />
                                                <ViewField label="Weekend" value="Saturday, Sunday" />
                                                <ViewField label="Office Start Time" value="09:00 AM" />
                                                <ViewField label="Office End Time" value="06:00 PM" />
                                            </div>
                                        </div>

                                        <div className="col-span-1">
                                            <SectionHeader title="Social Media" icon={Globe} />
                                            <div className="flex flex-col gap-y-2 mt-1">
                                                <ViewField label="LinkedIn" value="linkedin.com/company/enterprise" isLink linkHref="https://linkedin.com" />
                                                <ViewField label="Twitter (X)" value="twitter.com/enterprise" isLink linkHref="https://twitter.com" />
                                                <ViewField label="Facebook" value="facebook.com/enterprise" isLink linkHref="https://facebook.com" />
                                                <ViewField label="Instagram" value="@enterprise_life" />
                                                <ViewField label="YouTube" value="youtube.com/c/enterprise" isLink linkHref="https://youtube.com" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                        {activeTab === 'preferences' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">

                                    <SectionHeader title="System Preferences" icon={Settings} />
                                    <ViewField label="Currency" value="USD ($)" />
                                    <ViewField label="Language" value="English (US)" />
                                    <ViewField label="Time Zone" value="EST (UTC-05:00)" />
                                    <ViewField label="Date Format" value="YYYY-MM-DD" />
                                    <ViewField label="Time Format" value="12-hour (AM/PM)" />
                                    <ViewField label="Fiscal Year" value="January - December" />
                                    <ViewField label="Week Start Day" value="Monday" />

                                </div>
                            </div>
                        )}

                        {activeTab === 'finance' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">

                                    <SectionHeader title="Financial Information" icon={CreditCard} />
                                    <ViewField label="Bank Name" value="Chase Bank" />
                                    <ViewField label="Branch Name" value="Manhattan Central" />
                                    <ViewField label="Account Name" value="Global Enterprise Ltd" />
                                    <ViewField label="Account Number" value="**** **** 8976" />
                                    <ViewField label="Swift Code" value="CHASUS33" />
                                    <ViewField label="IBAN" value="US12CHAS34567890123456" />

                                    <SectionHeader title="Tax & Compliance" icon={FileText} />
                                    <ViewField label="Tax Number" value="TAX-445582" />
                                    <ViewField label="VAT Number" value="VAT-9988-USA" />
                                    <ViewField label="BIN Number" value="BIN-12345678" />
                                    <ViewField label="TIN Number" value="TIN-987654321" />
                                    <ViewField label="Tax Region" value="New York State" />
                                    <ViewField label="Tax Office" value="Manhattan District 1" />

                                </div>
                            </div>
                        )}

                        {activeTab === 'branding' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">

                                    <SectionHeader title="Branding" icon={ImageIcon} />
                                    <div className="grid grid-cols-[160px_10px_1fr] items-center">
                                        <p className="text-[14px] text-slate-500 font-medium">Primary Color</p>
                                        <p className="text-[14px] text-slate-400">:</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded bg-[#008060] border border-slate-200"></div>
                                            <span className="text-[14px] font-mono font-medium">#008060</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[160px_10px_1fr] items-center">
                                        <p className="text-[14px] text-slate-500 font-medium">Secondary Color</p>
                                        <p className="text-[14px] text-slate-400">:</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded bg-[#1a1a1a] border border-slate-200"></div>
                                            <span className="text-[14px] font-mono font-medium">#1a1a1a</span>
                                        </div>
                                    </div>
                                    <ViewField label="Favicon" value="favicon.ico" />
                                    <ViewField label="Email Header Logo" value="email-logo.png" />

                                </div>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">

                                    <SectionHeader title="Security & Alerts" icon={Shield} />
                                    <SectionHeader title="Notification Settings" icon={Bell} />
                                    <ViewField label="Email Notification" value="Enabled" />
                                    <ViewField label="SMS Notification" value="Disabled" />
                                    <ViewField label="Push Notification" value="Enabled" />

                                    <SectionHeader title="Security Settings" icon={Shield} />
                                    <ViewField label="Two Factor Auth" value="Enforced" />
                                    <ViewField label="Password Policy" value="Strict (Alphanumeric, Special)" />
                                    <div className="col-span-1 md:col-span-2">
                                        <div className="grid grid-cols-[160px_10px_1fr] items-start">
                                            <p className="text-[14px] text-slate-500 font-medium">IP Restriction</p>
                                            <p className="text-[14px] text-slate-400">:</p>
                                            <div className="text-[14px] font-mono text-slate-600 bg-slate-50 px-2 py-1 rounded border border-slate-200 w-fit">
                                                192.168.1.1, 10.0.0.*
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                        {activeTab === 'files' && (
                            <div className="space-y-4 animate-in fade-in duration-300">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    <SectionHeader title="Documents & Attachments" icon={FileText} />
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                        {[
                                            { name: 'Trade_License_2025.pdf', size: '2.4 MB', type: 'Trade License' },
                                            { name: 'Company_Certificate.pdf', size: '1.1 MB', type: 'Company Certificate' },
                                            { name: 'Tax_Clearance_2025.pdf', size: '850 KB', type: 'Tax Certificate' },
                                            { name: 'Partnership_Deed.pdf', size: '4.2 MB', type: 'Other Document' },
                                        ].map((doc, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-3 border border-slate-200 rounded-md bg-slate-50">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center"><FileText size={14} /></div>
                                                    <div>
                                                        <p className="text-[14px] font-semibold text-slate-800">{doc.name}</p>
                                                        <p className="text-[11px] text-slate-500">{doc.type} • {doc.size}</p>
                                                    </div>
                                                </div>
                                                <Button variant="outline" size="sm" className="h-7 w-7 p-0 flex items-center justify-center"><Download size={14} /></Button>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="col-span-1 md:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4 border-t border-slate-100 mt-4 pt-3">
                                        <div className="col-span-1 lg:col-span-2">
                                            <SectionHeader title="Additional Information" />
                                            <div className="flex flex-col gap-y-2 mt-1">
                                                <ViewField label="Remarks" value={<div className="text-[14px] text-slate-700 leading-relaxed pt-0.5">This company is a platinum tier partner. Prioritize support requests.</div>} />
                                                <ViewField label="Internal Notes" value={<div className="text-[14px] text-slate-700 leading-relaxed pt-0.5">Ensure all communications are CC'd to the Enterprise Accounts team. Contract renewal due in Q4 2026.</div>} />
                                            </div>
                                        </div>

                                        <div className="col-span-1">
                                            <SectionHeader title="System Activity" />
                                            <div className="flex flex-col gap-y-3 mt-1">
                                                <ViewField label="Created At" value="Oct 12, 2025" />
                                                <ViewField label="Created By" value="Super Admin" />
                                                <ViewField label="Last Modified" value="Nov 05, 2025" />
                                                <ViewField label="System ID" value={<span className="font-mono text-slate-600">e8f7a932</span>} />
                                            </div>
                                        </div>
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
