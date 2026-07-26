import os
import json

hr_pages = [
    # Employee Management
    {
        "dir": "src/modules/HR/Employees/pages",
        "file": "EmployeesPage.tsx",
        "title": "Employee Directory",
        "subtitle": "Central employee records, job roles, and contact info.",
        "search": "Search employees...",
        "fields": [
            {"name": "Employee Code", "code": "code", "placeholder": "e.g. EMP-1092"},
            {"name": "Full Name", "code": "name", "placeholder": "e.g. Robert Smith"},
            {"name": "Department", "code": "department", "placeholder": "e.g. Engineering"},
            {"name": "Designation", "code": "designation", "placeholder": "e.g. Senior Developer"}
        ],
        "dummy": [
            {"id": 1, "code": "EMP-1001", "name": "Robert Smith", "department": "Engineering", "designation": "Lead Architect", "status": "Active", "createdAt": "2026-01-10"},
            {"id": 2, "code": "EMP-1002", "name": "Emily Watson", "department": "Human Resources", "designation": "HR Specialist", "status": "Active", "createdAt": "2026-02-15"},
            {"id": 3, "code": "EMP-1003", "name": "Carlos Mendez", "department": "Finance", "designation": "Financial Analyst", "status": "Active", "createdAt": "2026-03-01"},
        ]
    },
    {
        "dir": "src/modules/HR/Onboarding/pages",
        "file": "index.tsx",
        "title": "Onboarding & Joining",
        "subtitle": "Track candidate onboarding tasks, document submission, and setup.",
        "search": "Search onboarding...",
        "fields": [
            {"name": "Candidate Name", "code": "name", "placeholder": "e.g. Alex Johnson"},
            {"name": "Target Department", "code": "department", "placeholder": "e.g. Product Management"},
            {"name": "Joining Date", "code": "joiningDate", "placeholder": "e.g. 2026-08-01"}
        ],
        "dummy": [
            {"id": 1, "name": "Alex Johnson", "department": "Product Management", "joiningDate": "2026-08-01", "status": "In Progress", "createdAt": "2026-07-20"},
            {"id": 2, "name": "Sophia Martinez", "department": "Design", "joiningDate": "2026-08-05", "status": "Completed", "createdAt": "2026-07-18"},
        ]
    },
    {
        "dir": "src/modules/HR/Transfers/pages",
        "file": "index.tsx",
        "title": "Transfers & Promotions",
        "subtitle": "Internal job transfers, department moves, and designation updates.",
        "search": "Search records...",
        "fields": [
            {"name": "Employee Name", "code": "name", "placeholder": "e.g. Emily Watson"},
            {"name": "From Department", "code": "fromDept", "placeholder": "e.g. Sales"},
            {"name": "To Department", "code": "toDept", "placeholder": "e.g. Marketing"}
        ],
        "dummy": [
            {"id": 1, "name": "David Miller", "fromDept": "Sales", "toDept": "Key Accounts", "status": "Approved", "createdAt": "2026-07-15"},
        ]
    },
    {
        "dir": "src/modules/HR/Offboarding/pages",
        "file": "index.tsx",
        "title": "Exit & Offboarding",
        "subtitle": "Resignation processing, asset clearance, and exit interviews.",
        "search": "Search exit records...",
        "fields": [
            {"name": "Employee Name", "code": "name", "placeholder": "e.g. John Doe"},
            {"name": "Resignation Date", "code": "resDate", "placeholder": "e.g. 2026-07-10"},
            {"name": "Notice Period", "code": "notice", "placeholder": "e.g. 30 Days"}
        ],
        "dummy": [
            {"id": 1, "name": "Michael Brown", "resDate": "2026-07-01", "notice": "30 Days", "status": "Processing", "createdAt": "2026-07-01"},
        ]
    },

    # Time & Attendance
    {
        "dir": "src/modules/HR/Attendance/pages",
        "file": "AttendancePage.tsx",
        "title": "Daily Attendance",
        "subtitle": "Real-time clock-in/out logs, biometric sync, and late entry records.",
        "search": "Search attendance...",
        "fields": [
            {"name": "Employee Name", "code": "name", "placeholder": "e.g. Robert Smith"},
            {"name": "Check-In Time", "code": "checkIn", "placeholder": "e.g. 09:02 AM"},
            {"name": "Check-Out Time", "code": "checkOut", "placeholder": "e.g. 05:30 PM"}
        ],
        "dummy": [
            {"id": 1, "name": "Robert Smith", "checkIn": "08:55 AM", "checkOut": "05:15 PM", "status": "Present", "createdAt": "2026-07-26"},
            {"id": 2, "name": "Emily Watson", "checkIn": "09:12 AM", "checkOut": "05:30 PM", "status": "Late", "createdAt": "2026-07-26"},
        ]
    },
    {
        "dir": "src/modules/HR/Shifts/pages",
        "file": "index.tsx",
        "title": "Shifts & Rosters",
        "subtitle": "Configure work shifts, rotation schedules, and weekly rosters.",
        "search": "Search shifts...",
        "fields": [
            {"name": "Shift Title", "code": "name", "placeholder": "e.g. Morning Shift"},
            {"name": "Start Time", "code": "start", "placeholder": "e.g. 09:00 AM"},
            {"name": "End Time", "code": "end", "placeholder": "e.g. 05:00 PM"}
        ],
        "dummy": [
            {"id": 1, "name": "General Office Shift", "start": "09:00 AM", "end": "05:00 PM", "status": "Active", "createdAt": "2026-01-01"},
            {"id": 2, "name": "Night Support Shift", "start": "10:00 PM", "end": "06:00 AM", "status": "Active", "createdAt": "2026-01-01"},
        ]
    },
    {
        "dir": "src/modules/HR/Overtime/pages",
        "file": "index.tsx",
        "title": "Overtime Tracking",
        "subtitle": "Track extra working hours, approvals, and overtime rates.",
        "search": "Search overtime logs...",
        "fields": [
            {"name": "Employee Name", "code": "name", "placeholder": "e.g. Carlos Mendez"},
            {"name": "Overtime Hours", "code": "hours", "placeholder": "e.g. 3.5 Hours"},
            {"name": "Approved By", "code": "approver", "placeholder": "e.g. Emily Watson"}
        ],
        "dummy": [
            {"id": 1, "name": "Carlos Mendez", "hours": "4.0 Hours", "approver": "Emily Watson", "status": "Approved", "createdAt": "2026-07-25"},
        ]
    },
    {
        "dir": "src/modules/HR/Holidays/pages",
        "file": "index.tsx",
        "title": "Holidays Calendar",
        "subtitle": "Annual public holidays, company leaves, and festival calendar.",
        "search": "Search holidays...",
        "fields": [
            {"name": "Holiday Name", "code": "name", "placeholder": "e.g. Independence Day"},
            {"name": "Holiday Date", "code": "date", "placeholder": "e.g. 2026-08-15"},
            {"name": "Type", "code": "type", "placeholder": "e.g. Public Holiday"}
        ],
        "dummy": [
            {"id": 1, "name": "National Independence Day", "date": "2026-08-15", "type": "Public", "status": "Active", "createdAt": "2026-01-01"},
            {"id": 2, "name": "Company Anniversary", "date": "2026-10-10", "type": "Company", "status": "Active", "createdAt": "2026-01-01"},
        ]
    },

    # Leave Management
    {
        "dir": "src/modules/HR/Leave/RequestsPage",
        "file": "index.tsx",
        "title": "Leave Requests",
        "subtitle": "Process employee leave applications and manager approvals.",
        "search": "Search leave applications...",
        "fields": [
            {"name": "Employee Name", "code": "name", "placeholder": "e.g. Robert Smith"},
            {"name": "Leave Type", "code": "leaveType", "placeholder": "e.g. Casual Leave"},
            {"name": "Total Days", "code": "days", "placeholder": "e.g. 3 Days"}
        ],
        "dummy": [
            {"id": 1, "name": "Robert Smith", "leaveType": "Annual Leave", "days": "5 Days", "status": "Approved", "createdAt": "2026-07-12"},
            {"id": 2, "name": "Emily Watson", "leaveType": "Sick Leave", "days": "2 Days", "status": "Approved", "createdAt": "2026-07-22"},
        ]
    },
    {
        "dir": "src/modules/HR/Leave/AllocationsPage",
        "file": "index.tsx",
        "title": "Leave Allocations",
        "subtitle": "Set yearly leave balance quotas per employee category.",
        "search": "Search allocations...",
        "fields": [
            {"name": "Leave Type Title", "code": "name", "placeholder": "e.g. Paid Sick Leave"},
            {"name": "Annual Quota", "code": "quota", "placeholder": "e.g. 14 Days"}
        ],
        "dummy": [
            {"id": 1, "name": "Annual Leave Quota", "quota": "20 Days", "status": "Active", "createdAt": "2026-01-01"},
            {"id": 2, "name": "Casual Leave Quota", "quota": "10 Days", "status": "Active", "createdAt": "2026-01-01"},
        ]
    },
    {
        "dir": "src/modules/HR/Leave/PoliciesPage",
        "file": "index.tsx",
        "title": "Leave Policies",
        "subtitle": "Define carry-forward limits, encashment, and approval rules.",
        "search": "Search policies...",
        "fields": [
            {"name": "Policy Title", "code": "name", "placeholder": "e.g. Carry Forward Rule"},
            {"name": "Max Carry Days", "code": "maxDays", "placeholder": "e.g. 5 Days"}
        ],
        "dummy": [
            {"id": 1, "name": "Year-End Carry Forward Policy", "maxDays": "5 Days", "status": "Active", "createdAt": "2026-01-01"},
        ]
    },

    # Payroll & Compensation
    {
        "dir": "src/modules/HR/Payroll/pages",
        "file": "PayrollPage.tsx",
        "title": "Monthly Payroll Processing",
        "subtitle": "Process gross salaries, tax deductions, bonuses, and net pay.",
        "search": "Search payroll...",
        "fields": [
            {"name": "Pay Period", "code": "period", "placeholder": "e.g. July 2026"},
            {"name": "Total Employees", "code": "count", "placeholder": "e.g. 145"},
            {"name": "Total Outflow", "code": "amount", "placeholder": "e.g. $185,000"}
        ],
        "dummy": [
            {"id": 1, "period": "June 2026 Payroll", "count": "142 Employees", "amount": "$182,500", "status": "Disbursed", "createdAt": "2026-06-30"},
            {"id": 2, "period": "July 2026 Payroll", "count": "145 Employees", "amount": "$187,000", "status": "Processing", "createdAt": "2026-07-26"},
        ]
    },
    {
        "dir": "src/modules/HR/SalaryStructures/pages",
        "file": "index.tsx",
        "title": "Salary Structures",
        "subtitle": "Define basic pay, HRA, allowances, and tax withholding slabs.",
        "search": "Search structures...",
        "fields": [
            {"name": "Grade / Scale", "code": "name", "placeholder": "e.g. Grade A - Executive"},
            {"name": "Basic Percentage", "code": "basic", "placeholder": "e.g. 50%"}
        ],
        "dummy": [
            {"id": 1, "name": "Senior Management Pay Scale", "basic": "55%", "status": "Active", "createdAt": "2026-01-01"},
            {"id": 2, "name": "Mid-Level Professional Scale", "basic": "50%", "status": "Active", "createdAt": "2026-01-01"},
        ]
    },
    {
        "dir": "src/modules/HR/Payslips/pages",
        "file": "index.tsx",
        "title": "Payslips Generator",
        "subtitle": "Print and email itemized monthly salary slips to employees.",
        "search": "Search payslips...",
        "fields": [
            {"name": "Employee Name", "code": "name", "placeholder": "e.g. Robert Smith"},
            {"name": "Month", "code": "month", "placeholder": "e.g. July 2026"},
            {"name": "Net Pay", "code": "net", "placeholder": "e.g. $4,850"}
        ],
        "dummy": [
            {"id": 1, "name": "Robert Smith", "month": "June 2026", "net": "$6,200", "status": "Generated", "createdAt": "2026-06-30"},
        ]
    },
    {
        "dir": "src/modules/HR/Benefits/pages",
        "file": "index.tsx",
        "title": "Provident Fund & Gratuity",
        "subtitle": "Manage company contribution funds, gratuity balances, and health benefits.",
        "search": "Search benefit funds...",
        "fields": [
            {"name": "Employee Name", "code": "name", "placeholder": "e.g. Emily Watson"},
            {"name": "PF Account No", "code": "pfNo", "placeholder": "e.g. PF-99482"},
            {"name": "Total Balance", "code": "balance", "placeholder": "e.g. $14,500"}
        ],
        "dummy": [
            {"id": 1, "name": "Robert Smith", "pfNo": "PF-10029", "balance": "$18,400", "status": "Active", "createdAt": "2026-01-01"},
        ]
    },

    # Recruitment & Talent
    {
        "dir": "src/modules/HR/Recruitment/JobsPage",
        "file": "index.tsx",
        "title": "Job Openings",
        "subtitle": "Manage active job circulars, positions, and vacancy requirements.",
        "search": "Search job circulars...",
        "fields": [
            {"name": "Job Title", "code": "name", "placeholder": "e.g. Full Stack Developer"},
            {"name": "Department", "code": "dept", "placeholder": "e.g. Engineering"},
            {"name": "Vacancies", "code": "vacancies", "placeholder": "e.g. 3 Openings"}
        ],
        "dummy": [
            {"id": 1, "name": "Senior React Developer", "dept": "Engineering", "vacancies": "2 Positions", "status": "Open", "createdAt": "2026-07-10"},
            {"id": 2, "name": "UI/UX Designer", "dept": "Product Design", "vacancies": "1 Position", "status": "Open", "createdAt": "2026-07-14"},
        ]
    },
    {
        "dir": "src/modules/HR/Recruitment/ApplicantsPage",
        "file": "index.tsx",
        "title": "Job Applicants",
        "subtitle": "Applicant Tracking System (ATS) resumes, stages, and screening.",
        "search": "Search applicants...",
        "fields": [
            {"name": "Applicant Name", "code": "name", "placeholder": "e.g. Daniel Lee"},
            {"name": "Applied Position", "code": "position", "placeholder": "e.g. Senior React Developer"},
            {"name": "Experience", "code": "exp", "placeholder": "e.g. 5 Years"}
        ],
        "dummy": [
            {"id": 1, "name": "Daniel Lee", "position": "Senior React Developer", "exp": "6 Years", "status": "Shortlisted", "createdAt": "2026-07-18"},
            {"id": 2, "name": "Hannah Abbott", "position": "UI/UX Designer", "exp": "4 Years", "status": "Under Review", "createdAt": "2026-07-21"},
        ]
    },
    {
        "dir": "src/modules/HR/Recruitment/InterviewsPage",
        "file": "index.tsx",
        "title": "Interview Schedules",
        "subtitle": "Schedule technical & HR interview rounds with interviewers.",
        "search": "Search interviews...",
        "fields": [
            {"name": "Applicant Name", "code": "name", "placeholder": "e.g. Daniel Lee"},
            {"name": "Interviewer", "code": "interviewer", "placeholder": "e.g. Robert Smith"},
            {"name": "Scheduled Time", "code": "time", "placeholder": "e.g. 2026-07-28 02:00 PM"}
        ],
        "dummy": [
            {"id": 1, "name": "Daniel Lee", "interviewer": "Robert Smith", "time": "2026-07-28 02:00 PM", "status": "Scheduled", "createdAt": "2026-07-22"},
        ]
    },

    # Performance & Training
    {
        "dir": "src/modules/HR/Performance/pages",
        "file": "PerformancePage.tsx",
        "title": "Appraisal Reviews",
        "subtitle": "360-degree performance evaluation cycles and reviews.",
        "search": "Search appraisals...",
        "fields": [
            {"name": "Cycle Title", "code": "name", "placeholder": "e.g. Mid-Year Review 2026"},
            {"name": "Employee Name", "code": "emp", "placeholder": "e.g. Emily Watson"},
            {"name": "Rating Score", "code": "rating", "placeholder": "e.g. 4.5 / 5.0"}
        ],
        "dummy": [
            {"id": 1, "name": "2026 H1 Appraisal", "emp": "Emily Watson", "rating": "4.8 / 5", "status": "Completed", "createdAt": "2026-07-01"},
            {"id": 2, "name": "2026 H1 Appraisal", "emp": "Carlos Mendez", "rating": "4.2 / 5", "status": "Completed", "createdAt": "2026-07-02"},
        ]
    },
    {
        "dir": "src/modules/HR/KpiGoals/pages",
        "file": "index.tsx",
        "title": "KPI & Goals Setup",
        "subtitle": "Define Key Performance Indicators and quarterly milestones.",
        "search": "Search KPIs...",
        "fields": [
            {"name": "KPI Title", "code": "name", "placeholder": "e.g. Code Review Turnaround"},
            {"name": "Target Benchmark", "code": "target", "placeholder": "e.g. < 24 Hours"}
        ],
        "dummy": [
            {"id": 1, "name": "Engineering Sprint Completion Rate", "target": ">= 90%", "status": "Active", "createdAt": "2026-01-01"},
        ]
    },
    {
        "dir": "src/modules/HR/Training/pages",
        "file": "index.tsx",
        "title": "Training Programs",
        "subtitle": "Employee skill development sessions, workshops, and certifications.",
        "search": "Search workshops...",
        "fields": [
            {"name": "Program Title", "code": "name", "placeholder": "e.g. Agile Leadership Workshop"},
            {"name": "Trainer / Vendor", "code": "trainer", "placeholder": "e.g. TechTrain Institute"}
        ],
        "dummy": [
            {"id": 1, "name": "Cybersecurity Awareness Training", "trainer": "Internal SecOps", "status": "Completed", "createdAt": "2026-06-15"},
        ]
    },

    # HR Documents & Settings
    {
        "dir": "src/modules/HR/Documents/pages",
        "file": "DocumentsPage.tsx",
        "title": "HR Documents & Policies",
        "subtitle": "Company handbook, NDA templates, and employee file vault.",
        "search": "Search documents...",
        "fields": [
            {"name": "Document Name", "code": "name", "placeholder": "e.g. Employee Handbook 2026"},
            {"name": "Category", "code": "category", "placeholder": "e.g. Company Policy"}
        ],
        "dummy": [
            {"id": 1, "name": "Company Code of Conduct 2026.pdf", "category": "Policy Document", "status": "Active", "createdAt": "2026-01-01"},
            {"id": 2, "name": "Standard Employee NDA Template.docx", "category": "Legal Template", "status": "Active", "createdAt": "2026-01-01"},
        ]
    },
    {
        "dir": "src/modules/HR/Settings/GeneralSettingsPage",
        "file": "index.tsx",
        "title": "General HR Settings",
        "subtitle": "Working days, default currency, employee ID prefix settings.",
        "search": "Search settings...",
        "fields": [
            {"name": "Setting Name", "code": "name", "placeholder": "e.g. Employee ID Format"},
            {"name": "Setting Value", "code": "value", "placeholder": "e.g. EMP-XXXX"}
        ],
        "dummy": [
            {"id": 1, "name": "Employee ID Auto Prefix", "value": "EMP-", "status": "Active", "createdAt": "2026-01-01"},
            {"id": 2, "name": "Default Work Week", "value": "Mon - Fri", "status": "Active", "createdAt": "2026-01-01"},
        ]
    },
    {
        "dir": "src/modules/HR/Settings/OrganizationSetupPage",
        "file": "index.tsx",
        "title": "Organization Setup",
        "subtitle": "Link departments, designations, and teams to HR policies.",
        "search": "Search organization setup...",
        "fields": [
            {"name": "Configuration Name", "code": "name", "placeholder": "e.g. Department Approval Map"},
            {"name": "Status", "code": "statusVal", "placeholder": "e.g. Configured"}
        ],
        "dummy": [
            {"id": 1, "name": "Engineering Department Hierarchy", "statusVal": "Configured", "status": "Active", "createdAt": "2026-01-01"},
        ]
    }
]

for item in hr_pages:
    os.makedirs(item["dir"], exist_ok=True)
    comp_name = item["title"].replace(" & ", "").replace(" ", "").replace("-", "").replace("/", "") + "Page"
    
    cols = []
    form_fields = []
    for f in item["fields"]:
        c_code = f["code"]
        c_label = f["name"]
        cols.append(f'        {{ id: \'{c_code}\', label: \'{c_label}\', render: (item: any) => <span className="font-bold text-slate-800 text-[13px]">{{item.{c_code}}}</span> }},')
        
        field_html = f'''            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0">{c_label}</FormLabel>
                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Input defaultValue={{isEdit ? editItem?.{c_code} : ''}} placeholder="{f['placeholder']}" className="h-8 text-[12.5px]" />
                </div>
            </div>'''
        form_fields.append(field_html)

    cols_str = "\n".join(cols)
    fields_str = "\n".join(form_fields)
    dummy_json = json.dumps(item["dummy"], indent=8)

    file_content = f'''import React, {{ useState }} from 'react';
import {{ Plus, Edit, Trash2, RotateCcw, Save }} from 'lucide-react';
import DataTable, {{ Column }} from '@/components/tables/data-table';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import Modal from '@/components/modals/modal';
import FormLabel from '@/components/ui/label';

export default function {comp_name}() {{
    const [data, setData] = useState<any[]>({dummy_json});
    const [statusFilter, setStatusFilter] = useState('All');
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editItem, setEditItem] = useState<any>(null);

    const handleDelete = (id: number) => {{
        if (confirm('Are you sure you want to delete this record?')) {{
            setData(prev => prev.filter(c => c.id !== id));
        }}
    }};

    const handleBulkDelete = (ids: number[]) => {{
        if (confirm(`Are you sure you want to delete ${{ids.length}} records?`)) {{
            setData(prev => prev.filter(c => !ids.includes(c.id)));
        }}
    }};

    const columns: Column[] = [
        {{ id: 'id', label: 'ID', render: (item) => <span className="text-slate-400 font-mono text-[12px]">#{{item.id}}</span> }},
{cols_str}
        {{
            id: 'status',
            label: 'Status',
            render: (item) => (
                <span className={{`px-2 py-0.5 text-[11.5px] font-bold rounded-full ${{item.status === 'Active' || item.status === 'Approved' || item.status === 'Completed' || item.status === 'Present' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}}`}}>
                    {{item.status || 'Active'}}
                </span>
            )
        }},
        {{ id: 'createdAt', label: 'Created At' }},
    ];

    const renderActions = (item: any) => (
        <div className="flex items-center justify-center gap-1">
            <button onClick={{() => setEditItem(item)}} className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="Edit">
                <Edit size={{14}} strokeWidth={{1.5}} />
            </button>
            <button onClick={{() => handleDelete(item.id)}} className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
                <Trash2 size={{14}} strokeWidth={{1.5}} />
            </button>
        </div>
    );

    const filteredData = data.filter(c => {{
        if (statusFilter !== 'All' && c.status !== statusFilter) return false;
        return true;
    }});

    const renderFilters = (
        <div className="flex flex-wrap items-center gap-4">
            <div className="w-full sm:w-[200px]">
                <label className="block text-[12px] font-bold text-slate-700 mb-1">Status</label>
                <select 
                    value={{statusFilter}} 
                    onChange={{(e) => setStatusFilter(e.target.value)}}
                    className="w-full h-[32px] px-2 bg-white border border-[#d1d1d1] rounded-[3px] text-[12px] text-[#202223] outline-none focus:border-[#d1d1d1] focus:ring-0 transition-colors"
                >
                    <option value="All">All Statuses</option>
                    <option value="Active">Active</option>
                    <option value="Approved">Approved</option>
                    <option value="Processing">Processing</option>
                </select>
            </div>
            <div className="mt-5">
                <button 
                    onClick={{() => setStatusFilter('All')}} 
                    className="h-[32px] w-[32px] flex items-center justify-center bg-white border border-[#d1d1d1] text-[#6d7175] rounded-[3px] hover:border-slate-400 transition-all group outline-none"
                    title="Clear Filters"
                >
                    <RotateCcw size={{13}} />
                </button>
            </div>
        </div>
    );
    
    const FormContent = ({{ isEdit = false }}: {{ isEdit?: boolean }}) => (
        <div className="space-y-3">
{fields_str}
            <div className="p-2.5 px-3 bg-slate-50 border border-slate-200/70 rounded-md flex items-center justify-between mt-1">
                <div>
                    <h4 className="text-[12.5px] font-bold text-slate-800">Active Status</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Enable or disable this item</p>
                </div>
                <Switch defaultChecked={{isEdit ? editItem?.status === 'Active' : true}} />
            </div>
        </div>
    );

    return (
        <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">{item["title"]}</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">{item["subtitle"]}</p>
                </div>
                <Button 
                    onClick={{() => setIsCreateModalOpen(true)}} 
                    className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[13px] h-9 px-4"
                >
                    <Plus size={{15}} />
                    Add {item["title"]}
                </Button>
            </div>

            <DataTable 
                data={{filteredData}} 
                columns={{columns}}
                searchPlaceholder="{item['search']}"
                actions={{renderActions}}
                onDeleteSelected={{handleBulkDelete}}
                filterContent={{renderFilters}}
                compact
            />

            <Modal
                isOpen={{isCreateModalOpen}}
                onClose={{() => setIsCreateModalOpen(false)}}
                title="Create {item['title']}"
                size="lg"
                footer={{
                    <>
                        <Button variant="outline" onClick={{() => setIsCreateModalOpen(false)}} className="h-8.5 text-[12.5px]">Cancel</Button>
                        <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-1.5 flex items-center text-[12.5px] h-8.5 px-3.5">
                            <Save size={{13}} /> Save
                        </Button>
                    </>
                }}
            >
                <FormContent />
            </Modal>
            
            <Modal
                isOpen={{!!editItem}}
                onClose={{() => setEditItem(null)}}
                title="Edit {item['title']}"
                size="lg"
                footer={{
                    <>
                        <Button variant="outline" onClick={{() => setEditItem(null)}} className="h-8.5 text-[12.5px]">Cancel</Button>
                        <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-1.5 flex items-center text-[12.5px] h-8.5 px-3.5">
                            <Save size={{13}} /> Save Changes
                        </Button>
                    </>
                }}
            >
                {{editItem && <FormContent isEdit />}}
            </Modal>
        </div>
    );
}}
'''
    file_path = os.path.join(item["dir"], item["file"])
    with open(file_path, "w") as f:
        f.write(file_content)
    print(f"Generated HR page: {file_path}")

print("All HR Pages generated successfully.")
