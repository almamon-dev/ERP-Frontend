import React, { useState } from 'react';
import { Edit, Building2, Phone, Briefcase, FileText, ArrowLeft, Activity, MapPin, Globe, CreditCard, Shield, Clock, Bell, Image as ImageIcon, Download, Settings, Users, Network, Package, BarChart2, Calendar, ClipboardList, ChevronRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '@/components/ui/button';

const VIEW_TABS = [
    { id: 'general', label: 'General Info', icon: Building2 },
    { id: 'contact', label: 'Contact & Address', icon: MapPin },
    { id: 'management', label: 'Management & Ops', icon: Users },
    { id: 'finance', label: 'Financial & Tax', icon: CreditCard },
    { id: 'config', label: 'System Configuration', icon: Settings },
    { id: 'files', label: 'Documents & Notes', icon: FileText },
    { id: 'hr', label: 'Organization & HR', icon: Network },
    { id: 'operations', label: 'Operations & Analytics', icon: BarChart2 },
    { id: 'logs', label: 'Activities & Audit', icon: ClipboardList },
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

const ViewField = ({ label, value }: { label: string, value: React.ReactNode }) => (
    <div className="grid grid-cols-[160px_10px_1fr] items-start">
        <p className="text-[14px] font-medium text-slate-600">{label}</p>
        <p className="text-[14px] text-slate-400">:</p>
        <div className="text-[14px] text-slate-800 font-medium">{value || '-'}</div>
    </div>
);

export default function BranchView() {
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
                            Manhattan Main Branch
                            <span className="px-2.5 py-0.5 text-[12px] font-medium bg-emerald-100 text-[#008060] rounded-full">Active</span>
                            <span className="px-2.5 py-0.5 text-[12px] font-medium bg-blue-100 text-blue-700 rounded-full">Head Office</span>
                        </h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">BR-001 • Global Enterprise Ltd.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Link to={`/administration/organization/branches/1/edit`}>
                        <Button className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white h-[36px] px-4 text-[14px]">
                            <Edit size={16} />
                            Edit Branch
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Layout */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-[260px] flex-shrink-0 bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
                    <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
                        <h3 className="text-[13px] font-bold text-slate-800">Branch Details</h3>
                    </div>
                    <div className="flex flex-col">
                        {VIEW_TABS.map((tab) => {
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
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Branch Overview" icon={Building2} />
                                    
                                    <div className="col-span-1 md:col-span-2 flex items-center gap-6 mb-4">
                                        <div className="w-24 h-24 rounded-md border-2 border-slate-200 overflow-hidden flex-shrink-0">
                                            <img src="https://ui-avatars.com/api/?name=Manhattan+Main&background=008060&color=fff" alt="Branch Logo" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h2 className="text-xl font-bold text-slate-800">Manhattan Main Branch</h2>
                                            <p className="text-[14px] text-slate-500">Global Enterprise Ltd. (Code: BR-001)</p>
                                        </div>
                                    </div>

                                    <SectionHeader title="Basic Information" />
                                    <ViewField label="Business Unit" value="Retail" />
                                    <ViewField label="Branch Type" value="Physical Store" />
                                    <ViewField label="Branch Category" value="Class A" />
                                    <ViewField label="Opening Date" value="May 12, 2018" />
                                    
                                    <div className="col-span-1 md:col-span-2 mt-2">
                                        <ViewField label="Description" value={<span className="text-slate-600 leading-relaxed font-normal block pt-0.5">Flagship branch in Manhattan, New York. Serves as the primary retail hub.</span>} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'contact' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Contact Information" icon={Phone} />
                                    
                                    <ViewField label="Branch Email" value={<a href="mailto:manhattan@globalent.com" className="text-blue-600 hover:underline">manhattan@globalent.com</a>} />
                                    <ViewField label="Phone Number" value="+1 212 555 0198" />
                                    <ViewField label="Mobile Number" value="+1 917 555 0199" />
                                    <ViewField label="Fax Number" value="+1 212 555 0197" />
                                    <ViewField label="Website" value={<a href="#" className="text-blue-600 hover:underline">https://www.globalent.com/ny</a>} />

                                    <SectionHeader title="Address Information" icon={MapPin} />
                                    <ViewField label="Country" value="United States" />
                                    <ViewField label="State" value="New York" />
                                    <ViewField label="City" value="New York City" />
                                    <ViewField label="ZIP Code" value="10001" />
                                    <ViewField label="Street Address" value="123 Corporate Ave, Suite 500" />
                                    <ViewField label="Landmark" value="Opposite Central Park" />
                                    <ViewField label="GPS Coordinates" value={<span className="font-mono text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">40.7128, -74.0060</span>} />
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Management Structure" icon={Users} />
                                    
                                    <ViewField label="Branch Manager" value="John Doe" />
                                    <ViewField label="Assistant Manager" value="Jane Smith" />
                                    <ViewField label="Department Head" value="Mike Ross" />
                                    <ViewField label="Manager Email" value="johndoe@globalent.com" />
                                    <ViewField label="Manager Phone" value="+1 917 555 1234" />
                                    <ViewField label="Total Employees" value="45" />
                                    <ViewField label="Reporting Branch" value="Head Office" />

                                    <SectionHeader title="Working Hours" icon={Clock} />
                                    <ViewField label="Working Days" value="Monday - Friday" />
                                    <ViewField label="Weekend" value="Saturday - Sunday" />
                                    <ViewField label="Opening Time" value="09:00 AM" />
                                    <ViewField label="Closing Time" value="06:00 PM" />
                                    <ViewField label="Holiday Calendar" value="US Public Holidays" />

                                    <SectionHeader title="Facilities & Services" icon={Building2} />
                                    <div className="col-span-1 md:col-span-2 flex flex-wrap gap-2 mt-1">
                                        <span className="px-2.5 py-1 text-[12px] bg-emerald-50 text-[#008060] rounded font-medium border border-emerald-100">Parking Available</span>
                                        <span className="px-2.5 py-1 text-[12px] bg-emerald-50 text-[#008060] rounded font-medium border border-emerald-100">Pickup Service</span>
                                        <span className="px-2.5 py-1 text-[12px] bg-emerald-50 text-[#008060] rounded font-medium border border-emerald-100">Customer Support</span>
                                        <span className="px-2.5 py-1 text-[12px] bg-red-50 text-red-600 rounded font-medium border border-red-100 line-through">Warehouse</span>
                                        <span className="px-2.5 py-1 text-[12px] bg-red-50 text-red-600 rounded font-medium border border-red-100 line-through">Delivery Service</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'finance' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Financial & Tax" icon={CreditCard} />
                                    
                                    <ViewField label="Cost Center" value="CC-NY-001" />
                                    <ViewField label="Profit Center" value="PC-NY-001" />
                                    <ViewField label="Bank Name" value="Chase Bank" />
                                    <ViewField label="Account Number" value="**** **** 5521" />
                                    <ViewField label="Payment Terms" value="Net 30" />

                                    <SectionHeader title="Tax & Compliance" icon={FileText} />
                                    <ViewField label="Tax Number" value="TAX-89912" />
                                    <ViewField label="VAT Number" value="VAT-NY-001" />
                                    <ViewField label="BIN Number" value="BIN-45561" />
                                    <ViewField label="TIN Number" value="TIN-77889" />
                                    <ViewField label="License Number" value="LIC-2023-NY" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'config' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="System Configuration" icon={Settings} />
                                    
                                    <ViewField label="Currency" value="USD ($)" />
                                    <ViewField label="Language" value="English (US)" />
                                    <ViewField label="Time Zone" value="UTC" />
                                    <ViewField label="Date Format" value="YYYY-MM-DD" />
                                    <ViewField label="Fiscal Year" value="January - December" />

                                    <SectionHeader title="Security Settings" icon={Shield} />
                                    <ViewField label="CCTV Enabled" value={<span className="text-[#008060] font-medium">Yes</span>} />
                                    <ViewField label="Biometric Enabled" value={<span className="text-[#008060] font-medium">Yes</span>} />
                                    <ViewField label="Access Control" value={<span className="text-[#008060] font-medium">Yes</span>} />
                                    <ViewField label="IP Restriction" value={<span className="font-mono text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">192.168.1.*</span>} />
                                </div>
                            </div>
                        )}

                        {activeTab === 'files' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    <TabHeader title="Documents & Notes" icon={FileText} />
                                    
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
                                        {[
                                            { name: 'branch_license_2023.pdf', size: '2.4 MB', type: 'Branch License' },
                                            { name: 'lease_agreement_ny.pdf', size: '1.1 MB', type: 'Lease Agreement' },
                                            { name: 'utility_bill_q1.pdf', size: '850 KB', type: 'Utility' },
                                        ].map((doc, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-3 border border-slate-200 rounded-md bg-slate-50">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center"><FileText size={14} /></div>
                                                    <div>
                                                        <p className="text-[14px] font-semibold text-slate-800 truncate max-w-[120px]">{doc.name}</p>
                                                        <p className="text-[11px] text-slate-500">{doc.type} • {doc.size}</p>
                                                    </div>
                                                </div>
                                                <Button variant="outline" size="sm" className="h-7 w-7 p-0 flex items-center justify-center"><Download size={14} /></Button>
                                            </div>
                                        ))}
                                    </div>

                                    <SectionHeader title="Notes & Remarks" icon={Activity} />
                                    <div className="col-span-1 md:col-span-2 space-y-3">
                                        <ViewField label="Custom Fields" value="Premium Tier Branch" />
                                        <ViewField label="Public Notes" value={<span className="text-slate-600 font-normal">Flagship operations running normally.</span>} />
                                        <ViewField label="Internal Notes" value={<span className="text-slate-600 font-normal bg-amber-50 px-2 py-1 rounded border border-amber-100">Needs AC maintenance next month.</span>} />
                                        <ViewField label="Remarks" value={<span className="text-slate-600 font-normal">Top performing branch.</span>} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'hr' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <TabHeader title="Organization & HR" icon={Network} />
                                <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-lg border-dashed">
                                    <Network size={32} className="mx-auto text-slate-400 mb-3" />
                                    <h3 className="text-slate-800 font-bold mb-1">Organization Chart & Employee Data</h3>
                                    <p className="text-[14px] text-slate-500 max-w-md mx-auto">This section will display real-time department matrices, teams, and employee attendance summaries once the HR module is integrated.</p>
                                    <Button className="mt-4" variant="outline">View Employee Directory</Button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'operations' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <TabHeader title="Operations & Analytics" icon={BarChart2} />
                                <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-lg border-dashed">
                                    <Package size={32} className="mx-auto text-slate-400 mb-3" />
                                    <h3 className="text-slate-800 font-bold mb-1">Sales & Inventory Summary</h3>
                                    <p className="text-[14px] text-slate-500 max-w-md mx-auto">Warehouse stock levels, daily sales summaries, and operational analytics will be visualized here.</p>
                                    <Button className="mt-4" variant="outline">Open Analytics Dashboard</Button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'logs' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <TabHeader title="Activities & Audit Logs" icon={ClipboardList} />
                                <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-lg border-dashed">
                                    <ClipboardList size={32} className="mx-auto text-slate-400 mb-3" />
                                    <h3 className="text-slate-800 font-bold mb-1">System Audit & Timelines</h3>
                                    <p className="text-[14px] text-slate-500 max-w-md mx-auto">Track all modifications, recent activities, and system audit logs specific to this branch.</p>
                                    <Button className="mt-4" variant="outline">Export Audit Log</Button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}
