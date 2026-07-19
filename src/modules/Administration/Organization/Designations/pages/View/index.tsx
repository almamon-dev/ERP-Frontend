import React, { useState } from 'react';
import { Edit, Briefcase, FileText, ArrowLeft, Activity, Network, ShieldCheck, Clock, BookOpen, Download, Users, DollarSign, ChevronRight, UserCheck, CheckCircle, GraduationCap, Building2 } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '@/components/ui/button';

const VIEW_TABS = [
    { id: 'general', label: 'General Info', icon: Briefcase },
    { id: 'organization', label: 'Org & Reporting', icon: Network },
    { id: 'job', label: 'Role & Skills', icon: BookOpen },
    { id: 'compensation', label: 'Salary Summary', icon: DollarSign },
    { id: 'security', label: 'Permissions', icon: ShieldCheck },
    { id: 'hr', label: 'Assigned Employees', icon: UserCheck },
    { id: 'files', label: 'Documents & Notes', icon: FileText },
    { id: 'logs', label: 'Activity & Audit', icon: Clock },
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

export default function DesignationView() {
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
                            Senior Software Engineer
                            <span className="px-2.5 py-0.5 text-[12px] font-medium bg-emerald-100 text-[#008060] rounded-full">Active</span>
                        </h1>
                        <p className="text-[14px] font-medium text-slate-500 mt-1">SSE-01 • Information Technology</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="h-[36px] px-4 text-[14px] flex items-center gap-2">
                        Quick Actions <ChevronRight size={14} className="rotate-90" />
                    </Button>
                    <Link to={`/administration/organization/designations/1/edit`}>
                        <Button className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white h-[36px] px-4 text-[14px]">
                            <Edit size={16} />
                            Edit Designation
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Layout */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-[260px] flex-shrink-0 bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
                    <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
                        <h3 className="text-[13px] font-bold text-slate-800">Designation Details</h3>
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
                                    <TabHeader title="Designation Overview" icon={Briefcase} />
                                    
                                    <ViewField label="Designation Name" value="Senior Software Engineer" />
                                    <ViewField label="Designation Code" value="SSE-01" />
                                    <ViewField label="Department" value={<span className="text-blue-600 cursor-pointer hover:underline">Information Technology</span>} />
                                    <ViewField label="Designation Level" value="Senior Level" />
                                    <ViewField label="Job Category" value="Technical" />
                                    <ViewField label="Status" value={<span className="text-[#008060] font-medium">Active</span>} />
                                    
                                    <div className="col-span-1 md:col-span-2 mt-2">
                                        <ViewField label="Description" value={<span className="text-slate-600 leading-relaxed font-normal block pt-0.5">Lead developer for enterprise solutions. Responsible for scalable architectures and mentoring junior developers.</span>} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'organization' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Organization Assignment" icon={Building2} />
                                    
                                    <ViewField label="Company" value="Global Enterprise Ltd." />
                                    <ViewField label="Branch" value="Manhattan Main" />
                                    <ViewField label="Department" value="Information Technology" />
                                    <ViewField label="Team" value="Frontend Team" />
                                    <ViewField label="Business Unit" value="Corporate" />

                                    <SectionHeader title="Reporting Hierarchy" icon={Network} />
                                    <ViewField label="Reports To" value="Engineering Manager" />
                                    <ViewField label="Supervises" value="Junior Developer" />
                                    <ViewField label="Max Employees Allowed" value="15" />
                                    <ViewField label="Approval Authority" value="Level 1 (Basic)" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'job' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Role & Responsibilities" icon={BookOpen} />
                                    
                                    <ViewField label="Job Title" value="Senior Software Engineer" />
                                    <ViewField label="Employment Type" value="Full-Time" />
                                    <ViewField label="Work Location" value="Hybrid" />
                                    <ViewField label="Shift" value="Morning" />

                                    <SectionHeader title="Responsibilities" />
                                    <div className="col-span-1 md:col-span-2 space-y-3">
                                        <ViewField label="Key Responsibilities" value={<ul className="list-disc pl-4 text-slate-600 space-y-1 mt-1"><li>Architect scalable solutions</li><li>Mentor junior devs</li><li>Code reviews</li></ul>} />
                                        <ViewField label="Daily Tasks" value="Daily standup, coding, PR reviews, system design." />
                                        <ViewField label="KPIs" value="Sprint Velocity, Code Quality" />
                                    </div>

                                    <SectionHeader title="Required Skills" icon={GraduationCap} />
                                    <ViewField label="Education" value="Bachelor's in CS" />
                                    <ViewField label="Experience" value="5+ years" />
                                    <div className="col-span-1 md:col-span-2 flex flex-wrap gap-2 mt-2">
                                        <span className="px-2.5 py-1 text-[12px] bg-blue-50 text-blue-700 rounded font-medium border border-blue-100">React</span>
                                        <span className="px-2.5 py-1 text-[12px] bg-blue-50 text-blue-700 rounded font-medium border border-blue-100">Node.js</span>
                                        <span className="px-2.5 py-1 text-[12px] bg-blue-50 text-blue-700 rounded font-medium border border-blue-100">AWS</span>
                                        <span className="px-2.5 py-1 text-[12px] bg-blue-50 text-blue-700 rounded font-medium border border-blue-100">TypeScript</span>
                                    </div>
                                    <ViewField label="Certifications" value="AWS Certified Developer" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'compensation' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Salary Summary" icon={DollarSign} />
                                    
                                    <ViewField label="Salary Grade" value={<span className="px-2 py-0.5 bg-slate-100 text-slate-800 rounded font-semibold border border-slate-200">Grade 3 (G3)</span>} />
                                    <ViewField label="Pay Scale" value="PS-2" />
                                    <ViewField label="Minimum Salary" value="$ 80,000" />
                                    <ViewField label="Maximum Salary" value="$ 140,000" />
                                    
                                    <SectionHeader title="Benefits Eligibility" />
                                    <ViewField label="Bonus Eligible" value={<span className="text-[#008060] font-medium flex items-center gap-1"><CheckCircle size={14} /> Yes</span>} />
                                    <ViewField label="Overtime Eligible" value={<span className="text-slate-400 font-medium">No</span>} />
                                </div>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <TabHeader title="Permission Summary" icon={ShieldCheck} />
                                    
                                    <ViewField label="Default System Role" value={<span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded font-semibold border border-indigo-100">Standard Employee</span>} />
                                    <ViewField label="Access Level" value="Level 2 (Edit Data)" />
                                    
                                    <SectionHeader title="Privileges" />
                                    <div className="col-span-1 md:col-span-2 space-y-2">
                                        <div className="flex items-center gap-2 text-[14px] text-slate-600"><CheckCircle size={14} className="text-[#008060]" /> Can Manage Team Allocations</div>
                                        <div className="flex items-center gap-2 text-[14px] text-slate-400"><div className="w-[14px] h-[1px] bg-slate-300" /> Cannot Approve Leaves & Expenses</div>
                                        <div className="flex items-center gap-2 text-[14px] text-slate-400"><div className="w-[14px] h-[1px] bg-slate-300" /> Cannot Initiate Hiring Requests</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'hr' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <TabHeader title="Assigned Employees" icon={UserCheck} />
                                <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-lg border-dashed">
                                    <Users size={32} className="mx-auto text-slate-400 mb-3" />
                                    <h3 className="text-slate-800 font-bold mb-1">Employee Directory</h3>
                                    <p className="text-[14px] text-slate-500 max-w-md mx-auto">This section will list all active employees currently holding this designation across the organization.</p>
                                    <Button className="mt-4" variant="outline">View 12 Employees</Button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'logs' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <TabHeader title="Activity & Audit Logs" icon={Activity} />
                                <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-lg border-dashed">
                                    <Clock size={32} className="mx-auto text-slate-400 mb-3" />
                                    <h3 className="text-slate-800 font-bold mb-1">Recent Activities</h3>
                                    <p className="text-[14px] text-slate-500 max-w-md mx-auto">Track modifications to this designation, salary grade changes, and system audit logs here.</p>
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
                                            { name: 'JD_SSE_2026.pdf', size: '1.2 MB', type: 'Job Description' },
                                            { name: 'Onboarding_SOP.pdf', size: '2.4 MB', type: 'SOP' },
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
                                        <ViewField label="Custom Fields" value="High Demand Role" />
                                        <ViewField label="Public Notes" value={<span className="text-slate-600 font-normal">Looking for diverse talent.</span>} />
                                        <ViewField label="Internal Notes" value={<span className="text-slate-600 font-normal bg-amber-50 px-2 py-1 rounded border border-amber-100">Salary max cap increased by 10%.</span>} />
                                        <ViewField label="Remarks" value={<span className="text-slate-600 font-normal">Strategic role for Q3 roadmap.</span>} />
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
