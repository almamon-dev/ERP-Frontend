import React, { useState } from 'react';
import { Edit, Building2, Phone, Briefcase, FileText, ArrowLeft, Activity, MapPin, Globe, CreditCard, Shield, Clock, Bell, Image as ImageIcon, Download, Settings, Users, Network, Package, BarChart2, Calendar, ClipboardList, ChevronRight, UserCheck, Briefcase as BriefcaseIcon, FolderGit2 } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '@/components/ui/button';

const VIEW_TABS = [
    { id: 'general', label: 'General Info', icon: Building2 },
    { id: 'organization', label: 'Organization Setup', icon: Network },
    { id: 'management', label: 'Team & Schedule', icon: Users },
    { id: 'contact', label: 'Contact & Location', icon: MapPin },
    { id: 'finance', label: 'Budget & Cost', icon: CreditCard },
    { id: 'hr', label: 'Employees & Teams', icon: UserCheck },
    { id: 'attendance', label: 'Leave & Attendance', icon: Calendar },
    { id: 'projects', label: 'Projects & Performance', icon: FolderGit2 },
    { id: 'files', label: 'Documents & Notes', icon: FileText },
    { id: 'logs', label: 'Activity & Audit', icon: ClipboardList },
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

export default function DepartmentView() {
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
                            Information Technology
                            <span className="px-2.5 py-0.5 text-[12px] font-medium bg-emerald-100 text-[#008060] rounded-full">Active</span>
                            <span className="px-2.5 py-0.5 text-[12px] font-medium bg-blue-100 text-blue-700 rounded-full">Core</span>
                        </h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">IT-001 • Global Enterprise Ltd.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="h-[36px] px-4 text-[14px] flex items-center gap-2">
                        Quick Actions <ChevronRight size={14} className="rotate-90" />
                    </Button>
                    <Link to={`/administration/organization/departments/1/edit`}>
                        <Button className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white h-[36px] px-4 text-[14px]">
                            <Edit size={16} />
                            Edit Department
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Layout */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-[260px] flex-shrink-0 bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
                    <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
                        <h3 className="text-[13px] font-bold text-slate-800">Department Details</h3>
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
                                    <TabHeader title="Department Overview" icon={Building2} />
                                    
                                    <div className="col-span-1 md:col-span-2 flex items-center gap-6 mb-4">
                                        <div className="w-24 h-24 rounded-md border-2 border-slate-200 overflow-hidden flex-shrink-0">
                                            <img src="https://ui-avatars.com/api/?name=IT+Dept&background=008060&color=fff" alt="Dept Logo" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h2 className="text-xl font-bold text-slate-800">Information Technology</h2>
                                            <p className="text-[14px] text-slate-500">Global Enterprise Ltd. (Code: IT-001)</p>
                                        </div>
                                    </div>

                                    <SectionHeader title="Basic Information" />
                                    <ViewField label="Department Type" value="Core Operation" />
                                    <ViewField label="Status" value={<span className="text-[#008060] font-medium">Active</span>} />
                                    
                                    <div className="col-span-1 md:col-span-2 mt-2">
                                        <ViewField label="Description" value={<span className="text-slate-600 leading-relaxed font-normal block pt-0.5">Handles all IT infrastructure, software systems, and network security across the organization.</span>} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'organization' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Organization Assignment" icon={Network} />
                                    
                                    <ViewField label="Company" value="Global Enterprise Ltd." />
                                    <ViewField label="Branch" value="Manhattan Main" />
                                    <ViewField label="Business Unit" value="Corporate" />
                                    <ViewField label="Division" value="Technology" />
                                    <ViewField label="Parent Department" value="None (Top Level)" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Department Management" icon={Users} />
                                    
                                    <ViewField label="Department Head" value="Sarah Connor" />
                                    <ViewField label="Assistant Head" value="John Reese" />
                                    <ViewField label="Team Lead" value="Harold Finch" />
                                    <ViewField label="Reporting Manager" value="Branch Manager" />
                                    <ViewField label="Maximum Employees" value="35" />

                                    <SectionHeader title="Working Configuration" icon={Clock} />
                                    <ViewField label="Working Days" value="Monday - Friday" />
                                    <ViewField label="Shift" value="Morning Shift" />
                                    <ViewField label="Office Hours" value="09:00 AM - 06:00 PM" />
                                    <ViewField label="Holiday Calendar" value="US Public Holidays" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'contact' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Contact Information" icon={Phone} />
                                    
                                    <ViewField label="Department Email" value={<a href="mailto:it@globalent.com" className="text-blue-600 hover:underline">it@globalent.com</a>} />
                                    <ViewField label="Phone Number" value="+1 212 555 1000" />
                                    <ViewField label="Extension Number" value="404" />
                                    <ViewField label="Internal Contact" value="IT-Helpdesk" />

                                    <SectionHeader title="Location Information" icon={MapPin} />
                                    <ViewField label="Building" value="Tech Tower" />
                                    <ViewField label="Floor" value="4th Floor" />
                                    <ViewField label="Room Number" value="401-410" />
                                    <ViewField label="Office Location" value="North Wing" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'finance' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Budget & Cost Center" icon={CreditCard} />
                                    
                                    <ViewField label="Cost Center" value="CC-IT-01" />
                                    <ViewField label="Budget Code" value="BUD-IT-26" />
                                    <ViewField label="Annual Budget" value="$ 250,000" />
                                    <ViewField label="Expense Limit" value="$ 15,000" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'hr' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <TabHeader title="Employees & Teams" icon={UserCheck} />
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-md">
                                        <p className="text-emerald-700 text-[13px] font-bold">Total Employees</p>
                                        <h3 className="text-2xl font-bold text-emerald-900 mt-1">28</h3>
                                    </div>
                                    <div className="p-4 bg-blue-50 border border-blue-100 rounded-md">
                                        <p className="text-blue-700 text-[13px] font-bold">Active Teams</p>
                                        <h3 className="text-2xl font-bold text-blue-900 mt-1">4</h3>
                                    </div>
                                    <div className="p-4 bg-purple-50 border border-purple-100 rounded-md">
                                        <p className="text-purple-700 text-[13px] font-bold">Designations</p>
                                        <h3 className="text-2xl font-bold text-purple-900 mt-1">6</h3>
                                    </div>
                                </div>
                                <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-lg border-dashed">
                                    <Network size={32} className="mx-auto text-slate-400 mb-3" />
                                    <h3 className="text-slate-800 font-bold mb-1">Employee Directory & Hierarchy</h3>
                                    <p className="text-[14px] text-slate-500 max-w-md mx-auto">This section will list all employees mapped to this department with their active roles and team assignments.</p>
                                    <Button className="mt-4" variant="outline">View Employee List</Button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'attendance' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <TabHeader title="Leave & Attendance" icon={Calendar} />
                                <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-lg border-dashed">
                                    <Calendar size={32} className="mx-auto text-slate-400 mb-3" />
                                    <h3 className="text-slate-800 font-bold mb-1">Attendance & Leave Summary</h3>
                                    <p className="text-[14px] text-slate-500 max-w-md mx-auto">Real-time attendance metrics, upcoming leaves, and time-tracking for this department will be populated here.</p>
                                    <Button className="mt-4" variant="outline">View Leave Reports</Button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'projects' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <TabHeader title="Projects & Performance" icon={FolderGit2} />
                                <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-lg border-dashed">
                                    <BarChart2 size={32} className="mx-auto text-slate-400 mb-3" />
                                    <h3 className="text-slate-800 font-bold mb-1">Department Performance</h3>
                                    <p className="text-[14px] text-slate-500 max-w-md mx-auto">Active projects, KPIs, and aggregated performance summaries for the department will be displayed in this dashboard.</p>
                                    <Button className="mt-4" variant="outline">Open Performance Dashboard</Button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'logs' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <TabHeader title="Activities & Audit Logs" icon={ClipboardList} />
                                <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-lg border-dashed">
                                    <Activity size={32} className="mx-auto text-slate-400 mb-3" />
                                    <h3 className="text-slate-800 font-bold mb-1">Activity Timeline</h3>
                                    <p className="text-[14px] text-slate-500 max-w-md mx-auto">Track all modifications, recent activities, and system audit logs specific to this department.</p>
                                    <Button className="mt-4" variant="outline">Export Audit Log</Button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'files' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    <TabHeader title="Documents & Notes" icon={FileText} />
                                    
                                    <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
                                        {[
                                            { name: 'it_policy_2026.pdf', size: '2.4 MB', type: 'Policy' },
                                            { name: 'it_sop_v2.pdf', size: '1.1 MB', type: 'SOP' },
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
                                        <ViewField label="Custom Fields" value="Core Tech Hub" />
                                        <ViewField label="Public Notes" value={<span className="text-slate-600 font-normal">IT Support available 24/7.</span>} />
                                        <ViewField label="Internal Notes" value={<span className="text-slate-600 font-normal bg-amber-50 px-2 py-1 rounded border border-amber-100">Budget increased by 10% for 2026.</span>} />
                                        <ViewField label="Remarks" value={<span className="text-slate-600 font-normal">Requires fast network scaling next quarter.</span>} />
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
