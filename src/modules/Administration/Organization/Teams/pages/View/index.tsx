import React, { useState } from 'react';
import { Edit, Users, FileText, ArrowLeft, Activity, Network, Clock, Target, Download, MessageSquare, ChevronRight, UserCheck, CheckCircle, FolderGit2, Calendar, ClipboardList } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '@/components/ui/button';

const VIEW_TABS = [
    { id: 'general', label: 'General Info', icon: Users },
    { id: 'organization', label: 'Org & Communication', icon: Network },
    { id: 'management', label: 'Management & Members', icon: UserCheck },
    { id: 'config', label: 'Working Configuration', icon: Clock },
    { id: 'objectives', label: 'Objectives & KPIs', icon: Target },
    { id: 'projects', label: 'Assigned Projects', icon: FolderGit2 },
    { id: 'attendance', label: 'Attendance Summary', icon: Calendar },
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

export default function TeamView() {
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
                            Frontend Development Team
                            <span className="px-2.5 py-0.5 text-[12px] font-medium bg-emerald-100 text-[#008060] rounded-full">Active</span>
                        </h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">TM-FE-01 • Information Technology</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="h-[36px] px-4 text-[14px] flex items-center gap-2">
                        Quick Actions <ChevronRight size={14} className="rotate-90" />
                    </Button>
                    <Link to={`/administration/organization/teams/1/edit`}>
                        <Button className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white h-[36px] px-4 text-[14px]">
                            <Edit size={16} />
                            Edit Team
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Layout */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-[260px] flex-shrink-0 bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
                    <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
                        <h3 className="text-[13px] font-bold text-slate-800">Team Details</h3>
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
                                    <TabHeader title="Team Overview" icon={Users} />
                                    
                                    <ViewField label="Team Name" value="Frontend Development Team" />
                                    <ViewField label="Team Code" value="TM-FE-01" />
                                    <ViewField label="Team Type" value="Project Team" />
                                    <ViewField label="Status" value={<span className="text-[#008060] font-medium">Active</span>} />
                                    
                                    <div className="col-span-1 md:col-span-2 mt-2">
                                        <ViewField label="Description" value={<span className="text-slate-600 leading-relaxed font-normal block pt-0.5">Handles all user-facing web applications, responsive UI architecture, and frontend systems.</span>} />
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
                                    <ViewField label="Department" value={<span className="text-blue-600 cursor-pointer hover:underline">Information Technology</span>} />
                                    <ViewField label="Business Unit" value="Corporate" />

                                    <SectionHeader title="Communication Channels" icon={MessageSquare} />
                                    <ViewField label="Team Email" value={<a href="mailto:frontend@globalent.com" className="text-blue-600 hover:underline">frontend@globalent.com</a>} />
                                    <ViewField label="Team Phone" value="+1 212 555 1022" />
                                    <ViewField label="Slack Channel" value={<span className="text-indigo-600 font-medium">#frontend-devs</span>} />
                                    <ViewField label="Microsoft Teams" value={<a href="#" className="text-blue-600 hover:underline">Join Team Channel</a>} />
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Team Management" icon={UserCheck} />
                                    
                                    <ViewField label="Team Leader" value="John Doe (Senior Engineer)" />
                                    <ViewField label="Assistant Leader" value="Jane Smith" />
                                    <ViewField label="Reporting Manager" value="IT Director" />
                                    
                                    <SectionHeader title="Team Members" icon={Users} />
                                    <div className="col-span-1 md:col-span-2">
                                        <div className="flex items-center justify-between bg-slate-50 px-4 py-3 border border-slate-200 rounded-md mb-4">
                                            <div>
                                                <p className="text-[14px] font-bold text-slate-800">Total Active Members: 2</p>
                                                <p className="text-[12px] text-slate-500">Maximum limit: 12 members</p>
                                            </div>
                                            <Button variant="outline" size="sm">View Directory</Button>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 p-3 border border-slate-100 rounded-md">
                                                <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#008060] flex items-center justify-center font-bold">AJ</div>
                                                <div>
                                                    <p className="text-[14px] font-bold text-slate-800">Alex Johnson</p>
                                                    <p className="text-[13px] text-slate-500">Frontend Developer</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 border border-slate-100 rounded-md">
                                                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">MG</div>
                                                <div>
                                                    <p className="text-[14px] font-bold text-slate-800">Maria Garcia</p>
                                                    <p className="text-[13px] text-slate-500">UI/UX Designer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'config' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Working Configuration" icon={Clock} />
                                    
                                    <ViewField label="Shift" value="Morning Shift" />
                                    <ViewField label="Working Days" value="Monday - Friday" />
                                    <ViewField label="Office Hours" value="09:00 AM - 06:00 PM" />
                                    <ViewField label="Holiday Calendar" value="US Public Holidays" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'objectives' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Objectives & KPIs" icon={Target} />
                                    
                                    <ViewField label="Team Goal" value="Maintain highly responsive and fast user interfaces." />
                                    <ViewField label="KPIs" value="Page Load Time, Zero Bugs" />
                                    <ViewField label="Performance Target" value="100% Uptime, Core Web Vitals pass" />
                                    <ViewField label="Monthly Target" value="3 Major Feature Releases" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'projects' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <TabHeader title="Projects & Performance" icon={FolderGit2} />
                                <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-lg border-dashed">
                                    <FolderGit2 size={32} className="mx-auto text-slate-400 mb-3" />
                                    <h3 className="text-slate-800 font-bold mb-1">Assigned Projects</h3>
                                    <p className="text-[14px] text-slate-500 max-w-md mx-auto">Active projects, sprints, and aggregated performance summaries for the team will be displayed in this dashboard.</p>
                                    <Button className="mt-4" variant="outline">Open Performance Dashboard</Button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'attendance' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <TabHeader title="Attendance Summary" icon={Calendar} />
                                <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-lg border-dashed">
                                    <Calendar size={32} className="mx-auto text-slate-400 mb-3" />
                                    <h3 className="text-slate-800 font-bold mb-1">Team Attendance</h3>
                                    <p className="text-[14px] text-slate-500 max-w-md mx-auto">Real-time attendance metrics, upcoming member leaves, and time-tracking for this team will be populated here.</p>
                                    <Button className="mt-4" variant="outline">View Leave Reports</Button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'logs' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <TabHeader title="Activity & Audit Logs" icon={ClipboardList} />
                                <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-lg border-dashed">
                                    <Activity size={32} className="mx-auto text-slate-400 mb-3" />
                                    <h3 className="text-slate-800 font-bold mb-1">Recent Activities</h3>
                                    <p className="text-[14px] text-slate-500 max-w-md mx-auto">Track team assignment changes, project handovers, and system audit logs specific to this team.</p>
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
                                            { name: 'FE_SOP.pdf', size: '1.2 MB', type: 'SOP Document' },
                                            { name: 'Team_Guidelines.pdf', size: '850 KB', type: 'Guidelines' },
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
                                        <ViewField label="Custom Fields" value="Core Sprint Team" />
                                        <ViewField label="Public Notes" value={<span className="text-slate-600 font-normal">Frontend experts.</span>} />
                                        <ViewField label="Internal Notes" value={<span className="text-slate-600 font-normal bg-amber-50 px-2 py-1 rounded border border-amber-100">Needs budget for new testing devices.</span>} />
                                        <ViewField label="Remarks" value={<span className="text-slate-600 font-normal">Highly efficient output.</span>} />
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
