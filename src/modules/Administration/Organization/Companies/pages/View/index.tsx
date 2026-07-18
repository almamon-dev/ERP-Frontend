import React, { useState } from 'react';
import { Edit, Building2, Phone, Briefcase, FileText, ArrowLeft, Activity, Paperclip, ChevronRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '@/components/ui/button';

const VIEW_TABS = [
    { id: 'general', label: 'General Information', icon: Building2 },
    { id: 'contact', label: 'Contact & Location', icon: Phone },
    { id: 'settings', label: 'Business Settings', icon: Briefcase },
    { id: 'files', label: 'Files & Logs', icon: FileText },
];

const ViewField = ({ label, value, isLink = false, linkHref = "" }: { label: string, value: React.ReactNode, isLink?: boolean, linkHref?: string }) => (
    <div className="grid grid-cols-[140px_10px_1fr] items-start">
        <p className="text-[13px] text-slate-500 font-medium">{label}</p>
        <p className="text-[13px] text-slate-400">:</p>
        {isLink ? (
            <a href={linkHref} target={linkHref.startsWith('http') ? "_blank" : "_self"} className="text-[13px] font-semibold text-blue-600 hover:underline break-all">
                {value}
            </a>
        ) : (
            <div className="text-[13px] font-semibold text-slate-800 break-words">{value}</div>
        )}
    </div>
);

export default function CompanyView() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('general');

    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div>
                        <h1 className="text-[22px] font-bold text-slate-900">Global Enterprise Ltd.</h1>
                        <p className="text-[13px] font-medium text-[#008060] mt-1">CMP-001 • Technology Sector</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-[32px] text-[13px] flex items-center gap-2" onClick={() => navigate(-1)}>
                        <ArrowLeft size={14} />
                        Back
                    </Button>
                    <Link to="/admin/organization/companies/edit/1">
                        <Button size="sm" className="h-[32px] text-[13px] flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                            <Edit size={14} />
                            Edit Company
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Layout */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-[260px] flex-shrink-0 bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
                    <div className="flex flex-col">
                        {VIEW_TABS.map((tab) => {
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
                                    <div className="flex items-center gap-3">
                                        <Icon size={16} className={isSelected ? 'text-[#008060]' : 'text-slate-400'} />
                                        {tab.label}
                                    </div>
                                    {isSelected && <ChevronRight size={16} className="text-[#008060]" />}
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
                                
                                <div className="mb-3 pb-2 border-b border-slate-100">
                                    <h2 className="text-[16px] font-bold text-slate-800">General Information</h2>
                                    <p className="text-[13px] text-slate-500 mt-0.5">Core identity and business overview.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                                    <ViewField label="Company Name" value="Global Enterprise Ltd." />
                                    <ViewField label="Company Code" value="CMP-001" />
                                    <ViewField label="Status" value={<span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-green-100 text-green-700 border border-green-200 w-fit">Active</span>} />
                                    <ViewField label="Business Type" value="Corporation" />
                                    <ViewField label="Industry / Sector" value="Technology" />
                                    <ViewField label="Total Employees" value="1,240" />
                                    <ViewField label="Departments" value="12" />
                                    <ViewField label="Active Projects" value="45" />
                                </div>

                                <div className="mt-2 pt-2 border-t border-slate-100">
                                    <h3 className="text-[13px] font-bold text-slate-800 mb-2 mt-1">Company Overview</h3>
                                    <p className="text-[13px] text-slate-700 leading-relaxed">
                                        Global Enterprise Ltd. is a leading provider of innovative technology solutions for modern businesses. Founded with the mission to streamline operations, it has quickly grown to become a cornerstone in the B2B tech sector.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'contact' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="mb-3 pb-2 border-b border-slate-100">
                                    <h2 className="text-[16px] font-bold text-slate-800">Contact & Location</h2>
                                    <p className="text-[13px] text-slate-500 mt-0.5">Communication details and physical addresses.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                                    <div className="col-span-1 md:col-span-2">
                                        <h3 className="text-[13px] font-bold text-slate-800 mb-1">Contact Channels</h3>
                                    </div>
                                    
                                    <ViewField label="Email Address" value="contact@enterprise.com" isLink={true} linkHref="mailto:contact@enterprise.com" />
                                    <ViewField label="Phone Number" value="+1 234 567 8900" />
                                    <div className="col-span-1 md:col-span-2">
                                        <ViewField label="Primary Website" value="www.enterprise.com" isLink={true} linkHref="https://www.enterprise.com" />
                                    </div>

                                    <div className="col-span-1 md:col-span-2 mt-2 pt-2 border-t border-slate-100">
                                        <h3 className="text-[13px] font-bold text-slate-800 mb-1 mt-1">Physical Address</h3>
                                    </div>
                                    
                                    <div className="col-span-1 md:col-span-2 mb-0.5">
                                        <ViewField label="Full Address" value={<>123 Business Avenue, Suite 100<br/>New York, NY 10001<br/>United States</>} />
                                    </div>
                                    <ViewField label="City" value="New York" />
                                    <ViewField label="State / Province" value="NY" />
                                    <ViewField label="ZIP / Postal Code" value="10001" />
                                    <ViewField label="Country" value="United States" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="mb-3 pb-2 border-b border-slate-100">
                                    <h2 className="text-[16px] font-bold text-slate-800">Business Settings</h2>
                                    <p className="text-[13px] text-slate-500 mt-0.5">Business configuration and legal documents.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                                    <div className="col-span-1 md:col-span-2">
                                        <h3 className="text-[13px] font-bold text-slate-800 mb-1 mt-1">Preferences</h3>
                                    </div>
                                    
                                    <ViewField label="Currency" value="USD ($)" />
                                    <ViewField label="Language" value="English" />
                                    <ViewField label="Time Zone" value="EST (Eastern Standard Time)" />
                                    <ViewField label="Date Format" value="YYYY-MM-DD" />
                                    <ViewField label="Fiscal Year" value="January - December" />
                                    
                                    <div className="grid grid-cols-[140px_10px_1fr] items-start mt-0.5">
                                        <p className="text-[13px] text-slate-500 font-medium">Primary Brand Color</p>
                                        <p className="text-[13px] text-slate-400">:</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full bg-[#008060] border border-slate-200"></div>
                                            <p className="text-[13px] font-mono font-semibold text-slate-800">#008060</p>
                                        </div>
                                    </div>

                                    <div className="col-span-1 md:col-span-2 mt-2 pt-2 border-t border-slate-100">
                                        <h3 className="text-[13px] font-bold text-slate-800 mb-1 mt-1">Legal Information</h3>
                                    </div>
                                    
                                    <ViewField label="Official Legal Name" value="Global Enterprise Technologies LLC" />
                                    <ViewField label="Registration No." value="REG-9988776655" />
                                    <ViewField label="Tax ID (TIN)" value="TAX-445582" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'files' && (
                            <div className="space-y-3 animate-in fade-in duration-300">
                                <div className="mb-3 pb-2 border-b border-slate-100">
                                    <h2 className="text-[16px] font-bold text-slate-800">Files & Logs</h2>
                                    <p className="text-[13px] text-slate-500 mt-0.5">Document uploads, internal notes, and system history.</p>
                                </div>

                                <div className="grid grid-cols-1 gap-4 w-full">
                                    <div>
                                        <h3 className="text-[13px] font-bold text-slate-800 mb-2 mt-1">Attachments</h3>
                                        <div className="flex items-center justify-between p-2 border border-slate-200 rounded-md">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center"><FileText size={14}/></div>
                                                <div>
                                                    <p className="text-[13px] font-medium text-slate-800">Business_Registration_2025.pdf</p>
                                                    <p className="text-[11px] text-slate-500">2.4 MB • Uploaded Oct 12, 2025</p>
                                                </div>
                                            </div>
                                            <Button variant="outline" size="sm" className="h-7 text-xs">Download</Button>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-[13px] font-bold text-slate-800 mb-2 mt-1">Internal Notes</h3>
                                        <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-md text-[13px] text-yellow-800">
                                            Top tier partner. Ensure all communications are CC'd to the Enterprise Accounts team.
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-[13px] font-bold text-slate-800 mb-2 mt-1 flex items-center gap-2">
                                            <Activity size={14} className="text-slate-500"/> System Activity
                                        </h3>
                                        <div className="bg-slate-50 border border-slate-200 rounded-md p-3">
                                            <div className="grid grid-cols-2 gap-y-1 text-[12px]">
                                                <div className="grid grid-cols-[100px_10px_1fr]">
                                                    <div className="text-slate-500 font-medium">Created At</div>
                                                    <div className="text-slate-400">:</div>
                                                    <div className="font-medium text-slate-800">Oct 12, 2025</div>
                                                </div>
                                                <div className="grid grid-cols-[100px_10px_1fr]">
                                                    <div className="text-slate-500 font-medium">Created By</div>
                                                    <div className="text-slate-400">:</div>
                                                    <div className="font-medium text-slate-800">Super Admin</div>
                                                </div>
                                                <div className="grid grid-cols-[100px_10px_1fr]">
                                                    <div className="text-slate-500 font-medium">Last Modified</div>
                                                    <div className="text-slate-400">:</div>
                                                    <div className="font-medium text-slate-800">Nov 05, 2025</div>
                                                </div>
                                                <div className="grid grid-cols-[100px_10px_1fr]">
                                                    <div className="text-slate-500 font-medium">System ID</div>
                                                    <div className="text-slate-400">:</div>
                                                    <div className="font-medium font-mono text-slate-800">e8f7a932</div>
                                                </div>
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
