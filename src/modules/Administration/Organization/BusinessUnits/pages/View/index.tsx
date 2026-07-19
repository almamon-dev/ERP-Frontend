import React, { useState } from 'react';
import { Edit, Briefcase, FileText, ArrowLeft, Activity, Network, Target, DollarSign, Download, ChevronRight, UserCheck, CheckCircle, TrendingUp, Users } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '@/components/ui/button';

const VIEW_TABS = [
    { id: 'general', label: 'General Info', icon: Briefcase },
    { id: 'organization', label: 'Organization', icon: Network },
    { id: 'management', label: 'Management', icon: UserCheck },
    { id: 'finance', label: 'Financial Summary', icon: DollarSign },
    { id: 'performance', label: 'Performance Dashboard', icon: TrendingUp },
    { id: 'files', label: 'Documents & Notes', icon: FileText },
    { id: 'logs', label: 'Activity & Audit', icon: Activity },
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

export default function BusinessUnitView() {
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
                            Enterprise Solutions
                            <span className="px-2.5 py-0.5 text-[12px] font-medium bg-emerald-100 text-[#008060] rounded-full">Active</span>
                        </h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">BU-ENT-01 • Global Enterprise Ltd.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="h-[36px] px-4 text-[14px] flex items-center gap-2">
                        Quick Actions <ChevronRight size={14} className="rotate-90" />
                    </Button>
                    <Link to={`/administration/organization/business-units/1/edit`}>
                        <Button className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white h-[36px] px-4 text-[14px]">
                            <Edit size={16} />
                            Edit Unit
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Layout */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-[260px] flex-shrink-0 bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
                    <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
                        <h3 className="text-[13px] font-bold text-slate-800">Business Unit Details</h3>
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
                                    <TabHeader title="Business Unit Overview" icon={Briefcase} />
                                    
                                    <ViewField label="Business Unit Name" value="Enterprise Solutions" />
                                    <ViewField label="Business Unit Code" value="BU-ENT-01" />
                                    <ViewField label="Company" value="Global Enterprise Ltd." />
                                    <ViewField label="Unit Type" value="Product Line" />
                                    <ViewField label="Industry" value="Information Technology" />
                                    <ViewField label="Status" value={<span className="text-[#008060] font-medium">Active</span>} />
                                    
                                    <div className="col-span-1 md:col-span-2 mt-2">
                                        <ViewField label="Description" value={<span className="text-slate-600 leading-relaxed font-normal block pt-0.5">Handles enterprise client solutions and large-scale deployments globally.</span>} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'organization' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Organization Assignment" icon={Network} />
                                    
                                    <ViewField label="Company" value="Global Enterprise Ltd." />
                                    <ViewField label="Assigned Branches" value="Manhattan Main, Brooklyn Branch" />
                                    <ViewField label="Assigned Departments" value="Information Technology, Human Resources" />
                                    <ViewField label="Assigned Teams" value="Frontend Development Team, Backend API Team" />

                                    <SectionHeader title="Employee Distribution" icon={Users} />
                                    <div className="col-span-1 md:col-span-2">
                                        <div className="grid grid-cols-3 gap-4 mt-2">
                                            <div className="p-4 bg-slate-50 border border-slate-200 rounded-md text-center">
                                                <p className="text-[24px] font-bold text-slate-800">142</p>
                                                <p className="text-[13px] font-medium text-slate-500">Total Employees</p>
                                            </div>
                                            <div className="p-4 bg-slate-50 border border-slate-200 rounded-md text-center">
                                                <p className="text-[24px] font-bold text-slate-800">12</p>
                                                <p className="text-[13px] font-medium text-slate-500">Active Teams</p>
                                            </div>
                                            <div className="p-4 bg-slate-50 border border-slate-200 rounded-md text-center">
                                                <p className="text-[24px] font-bold text-slate-800">3</p>
                                                <p className="text-[13px] font-medium text-slate-500">Departments</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Management Details" icon={UserCheck} />
                                    
                                    <ViewField label="Business Unit Head" value="John Doe (VP of Solutions)" />
                                    <ViewField label="Assistant Head" value="Jane Smith (Director)" />
                                    <ViewField label="Reporting Executive" value="Chief Executive Officer" />
                                    <ViewField label="Organization Level" value="Level 1 (Top Level)" />
                                    <ViewField label="Max Employees Allowed" value="500" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'finance' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Financial Summary" icon={DollarSign} />
                                    
                                    <ViewField label="Cost Center" value="CC-101" />
                                    <ViewField label="Profit Center" value="PC-201" />
                                    <ViewField label="Budget Code" value="B-ENT-2026" />
                                    <ViewField label="Currency" value="USD ($)" />
                                    <ViewField label="Annual Budget" value="$5,000,000" />
                                    <ViewField label="Revenue Target" value="$15,000,000" />
                                    <ViewField label="Expense Limit" value="$4,500,000" />

                                    <SectionHeader title="Operational Settings" icon={Clock} />
                                    <ViewField label="Working Days" value="Monday - Friday" />
                                    <ViewField label="Working Hours" value="09:00 AM - 06:00 PM" />
                                    <ViewField label="Time Zone" value="EST (UTC-5)" />
                                    <ViewField label="Fiscal Year" value="January - December" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'performance' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <TabHeader title="Performance Dashboard" icon={TrendingUp} />
                                <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-lg border-dashed">
                                    <TrendingUp size={32} className="mx-auto text-slate-400 mb-3" />
                                    <h3 className="text-slate-800 font-bold mb-1">KPI Progress & Analytics</h3>
                                    <p className="text-[14px] text-slate-500 max-w-md mx-auto">Visual dashboard for Sales Targets, Productivity Goals, and Growth metrics will be displayed here.</p>
                                    <Button className="mt-4" variant="outline">View Full Dashboard</Button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'logs' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <TabHeader title="Activity & Audit Logs" icon={Activity} />
                                <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-lg border-dashed">
                                    <Activity size={32} className="mx-auto text-slate-400 mb-3" />
                                    <h3 className="text-slate-800 font-bold mb-1">Recent Activities</h3>
                                    <p className="text-[14px] text-slate-500 max-w-md mx-auto">Track configuration changes, budget updates, and system audit logs specific to this business unit.</p>
                                    <Button className="mt-4" variant="outline">Export Timeline</Button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'files' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    <TabHeader title="Documents & Notes" icon={FileText} />
                                    
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
                                        {[
                                            { name: 'BizPlan_2026.pdf', size: '2.5 MB', type: 'Business Plan' },
                                            { name: 'Policy_Manual.pdf', size: '1.8 MB', type: 'Policy' },
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

                                    <SectionHeader title="Notes & Remarks" />
                                    <div className="col-span-1 md:col-span-2 space-y-3">
                                        <ViewField label="Custom Fields" value="Flagship BU" />
                                        <ViewField label="Public Notes" value={<span className="text-slate-600 font-normal">Leading solutions provider.</span>} />
                                        <ViewField label="Internal Notes" value={<span className="text-slate-600 font-normal bg-amber-50 px-2 py-1 rounded border border-amber-100">Focus on Q4 growth.</span>} />
                                        <ViewField label="Remarks" value={<span className="text-slate-600 font-normal">Highly profitable unit.</span>} />
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
