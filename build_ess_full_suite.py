import os
import json

ess_pages = [
    {
        "dir": "src/modules/EmployeeSelfService/Dashboard/pages",
        "file": "index.tsx",
        "title": "Employee Dashboard",
        "subtitle": "Personal attendance summary, leave balances, pending requests, and announcements.",
        "search": "Search personal records...",
        "fields": [
            {"name": "Metric", "code": "metric", "placeholder": "e.g. Total Present Days"},
            {"name": "Value", "code": "val", "placeholder": "e.g. 22 Days"},
            {"name": "Remarks", "code": "remarks", "placeholder": "e.g. On Track"}
        ],
        "dummy": [
            {"id": 1, "metric": "Monthly Attendance Rate", "val": "96.8%", "remarks": "Excellent", "status": "Active", "createdAt": "2026-07-26"},
            {"id": 2, "metric": "Casual Leave Balance", "val": "3 Days", "remarks": "Available", "status": "Active", "createdAt": "2026-07-26"},
            {"id": 3, "metric": "Earned Leave Balance", "val": "12 Days", "remarks": "Available", "status": "Active", "createdAt": "2026-07-26"},
        ]
    },
    {
        "dir": "src/modules/EmployeeSelfService/AboutMe/pages",
        "file": "index.tsx",
        "title": "About Me (Employee Profile)",
        "subtitle": "Personal information, emergency contact details, educational background, and employment info.",
        "search": "Search profile fields...",
        "fields": [
            {"name": "Field Label", "code": "field", "placeholder": "e.g. Blood Group"},
            {"name": "Personal Value", "code": "val", "placeholder": "e.g. O+"},
            {"name": "Verification", "code": "verification", "placeholder": "e.g. Verified by HR"}
        ],
        "dummy": [
            {"id": 1, "field": "Full Name", "val": "Robert Smith", "verification": "Verified", "status": "Active", "createdAt": "2026-01-10"},
            {"id": 2, "field": "NID / Passport No", "val": "9948-2819-1092", "verification": "Verified", "status": "Active", "createdAt": "2026-01-10"},
            {"id": 3, "field": "Emergency Contact", "val": "+880 1711-009988 (Spouse)", "verification": "Verified", "status": "Active", "createdAt": "2026-01-10"},
        ]
    },
    {
        "dir": "src/modules/EmployeeSelfService/TimeManagement/pages",
        "file": "index.tsx",
        "title": "Time Management",
        "subtitle": "Daily check-in / check-out history, attendance regularizations, and roster schedules.",
        "search": "Search attendance logs...",
        "fields": [
            {"name": "Date", "code": "logDate", "placeholder": "e.g. 2026-07-26"},
            {"name": "Clock In", "code": "clockIn", "placeholder": "e.g. 08:55 AM"},
            {"name": "Clock Out", "code": "clockOut", "placeholder": "e.g. 05:15 PM"},
            {"name": "Working Hours", "code": "hours", "placeholder": "e.g. 8.2 Hours"}
        ],
        "dummy": [
            {"id": 1, "logDate": "2026-07-26", "clockIn": "08:55 AM", "clockOut": "05:15 PM", "hours": "8.3 Hrs", "status": "Present", "createdAt": "2026-07-26"},
            {"id": 2, "logDate": "2026-07-25", "clockIn": "09:02 AM", "clockOut": "05:30 PM", "hours": "8.5 Hrs", "status": "Present", "createdAt": "2026-07-25"},
            {"id": 3, "logDate": "2026-07-24", "clockIn": "08:50 AM", "clockOut": "05:10 PM", "hours": "8.3 Hrs", "status": "Present", "createdAt": "2026-07-24"},
        ]
    },
    {
        "dir": "src/modules/EmployeeSelfService/LeaveMovement/pages",
        "file": "index.tsx",
        "title": "Leave And Movement",
        "subtitle": "Apply for short leave, official outdoor movement, and annual leave requests.",
        "search": "Search leave requests...",
        "fields": [
            {"name": "Application Type", "code": "type", "placeholder": "e.g. Official Outdoor Movement"},
            {"name": "Start Date / Time", "code": "startTime", "placeholder": "e.g. 2026-07-28 10:00 AM"},
            {"name": "End Date / Time", "code": "endTime", "placeholder": "e.g. 2026-07-28 02:00 PM"},
            {"name": "Reason / Location", "code": "reason", "placeholder": "e.g. Client Site Visit"}
        ],
        "dummy": [
            {"id": 1, "type": "Annual Leave", "startTime": "2026-07-12", "endTime": "2026-07-16", "reason": "Family Vacation", "status": "Approved", "createdAt": "2026-07-05"},
            {"id": 2, "type": "Official Movement", "startTime": "2026-07-20 11:00 AM", "endTime": "2026-07-20 03:00 PM", "reason": "Bank & Tax Work", "status": "Approved", "createdAt": "2026-07-19"},
        ]
    },
    {
        "dir": "src/modules/EmployeeSelfService/IOU/pages",
        "file": "index.tsx",
        "title": "IOU (I Owe You / Advance Cash)",
        "subtitle": "Apply for temporary cash advances for official expenses and track settlements.",
        "search": "Search IOU requisitions...",
        "fields": [
            {"name": "IOU Reference", "code": "refNo", "placeholder": "e.g. IOU-2026-042"},
            {"name": "Requested Amount", "code": "amount", "placeholder": "e.g. ৳ 15,000"},
            {"name": "Purpose", "code": "purpose", "placeholder": "e.g. Team Workshop Expenses"},
            {"name": "Settlement Target", "code": "settleDate", "placeholder": "e.g. 2026-08-05"}
        ],
        "dummy": [
            {"id": 1, "refNo": "IOU-2026-012", "amount": "৳ 12,000", "purpose": "Client Meeting & Dinner", "settleDate": "2026-07-30", "status": "Approved", "createdAt": "2026-07-15"},
            {"id": 2, "refNo": "IOU-2026-018", "amount": "৳ 5,500", "purpose": "Emergency Hardware Adapter", "settleDate": "2026-08-02", "status": "Pending", "createdAt": "2026-07-24"},
        ]
    },
    {
        "dir": "src/modules/EmployeeSelfService/FinancialAid/pages",
        "file": "index.tsx",
        "title": "Loan & Financial Aid",
        "subtitle": "Apply for company salary loans, medical aid, and monthly installment schedules.",
        "search": "Search loan requests...",
        "fields": [
            {"name": "Loan Type", "code": "loanType", "placeholder": "e.g. Salary Advance / Emergency Loan"},
            {"name": "Principal Amount", "code": "principal", "placeholder": "e.g. ৳ 50,000"},
            {"name": "Monthly Deduction", "code": "emi", "placeholder": "e.g. ৳ 5,000 / month"},
            {"name": "Tenure (Months)", "code": "tenure", "placeholder": "e.g. 10 Months"}
        ],
        "dummy": [
            {"id": 1, "loanType": "Personal Salary Loan", "principal": "৳ 60,000", "emi": "৳ 5,000 / mo", "tenure": "12 Months", "status": "Active", "createdAt": "2026-03-01"},
        ]
    },
    {
        "dir": "src/modules/EmployeeSelfService/Assets/pages",
        "file": "index.tsx",
        "title": "Asset Requisition & Tracking",
        "subtitle": "View assigned laptop, monitor, peripherals, and request new office equipment.",
        "search": "Search assigned assets...",
        "fields": [
            {"name": "Asset Code", "code": "assetCode", "placeholder": "e.g. AST-LAP-901"},
            {"name": "Asset Name / Model", "code": "assetName", "placeholder": "e.g. MacBook Pro M3 16-inch"},
            {"name": "Serial Number", "code": "serialNo", "placeholder": "e.g. C02G4019MD68"},
            {"name": "Issue Date", "code": "issueDate", "placeholder": "e.g. 2026-01-15"}
        ],
        "dummy": [
            {"id": 1, "assetCode": "AST-LAP-102", "assetName": "Dell XPS 15 Workstation", "serialNo": "DL-99482-XPS", "issueDate": "2026-01-10", "status": "Assigned", "createdAt": "2026-01-10"},
            {"id": 2, "assetCode": "AST-MON-044", "assetName": "LG 27-inch 4K Monitor", "serialNo": "LG-4K-88391", "issueDate": "2026-02-01", "status": "Assigned", "createdAt": "2026-02-01"},
        ]
    },
    {
        "dir": "src/modules/EmployeeSelfService/Expenses/pages",
        "file": "index.tsx",
        "title": "Expense Requisitions & Claims",
        "subtitle": "Submit official travel, food, and conveyance bills for reimbursement.",
        "search": "Search claims...",
        "fields": [
            {"name": "Claim Category", "code": "category", "placeholder": "e.g. Conveyance & Taxi"},
            {"name": "Claim Amount", "code": "amount", "placeholder": "e.g. ৳ 3,200"},
            {"name": "Voucher / Receipt", "code": "voucher", "placeholder": "e.g. VCH-8849"},
            {"name": "Claim Date", "code": "claimDate", "placeholder": "e.g. 2026-07-22"}
        ],
        "dummy": [
            {"id": 1, "category": "Conveyance & Uber", "amount": "৳ 1,850", "voucher": "VCH-2026-01", "claimDate": "2026-07-18", "status": "Approved", "createdAt": "2026-07-18"},
            {"id": 2, "category": "Client Team Lunch", "amount": "৳ 4,500", "voucher": "VCH-2026-09", "claimDate": "2026-07-25", "status": "Submitted", "createdAt": "2026-07-25"},
        ]
    },
    {
        "dir": "src/modules/EmployeeSelfService/ContactBook/pages",
        "file": "index.tsx",
        "title": "Internal Contact Book",
        "subtitle": "Search colleague phone extensions, work emails, and department contacts.",
        "search": "Search colleagues...",
        "fields": [
            {"name": "Colleague Name", "code": "name", "placeholder": "e.g. Sarah Jenkins"},
            {"name": "Department", "code": "dept", "placeholder": "e.g. Human Resources"},
            {"name": "Email Address", "code": "email", "placeholder": "e.g. sarah@company.com"},
            {"name": "Work Phone Ext", "code": "ext", "placeholder": "e.g. Ext: 402"}
        ],
        "dummy": [
            {"id": 1, "name": "Emily Watson", "dept": "Human Resources", "email": "emily@company.com", "ext": "Ext: 104", "status": "Active", "createdAt": "2026-01-01"},
            {"id": 2, "name": "Carlos Mendez", "dept": "Finance & Accounts", "email": "carlos@company.com", "ext": "Ext: 208", "status": "Active", "createdAt": "2026-01-01"},
            {"id": 3, "name": "Alex Rivera", "dept": "Sales & Accounts", "email": "alex@company.com", "ext": "Ext: 312", "status": "Active", "createdAt": "2026-01-01"},
        ]
    },
    {
        "dir": "src/modules/EmployeeSelfService/Separation/pages",
        "file": "index.tsx",
        "title": "Separation & Resignation",
        "subtitle": "Submit resignation letter, notice period tracking, and clearance handover.",
        "search": "Search separation status...",
        "fields": [
            {"name": "Notice Start Date", "code": "startDate", "placeholder": "e.g. 2026-08-01"},
            {"name": "Expected Release Date", "code": "releaseDate", "placeholder": "e.g. 2026-08-31"},
            {"name": "Notice Duration", "code": "duration", "placeholder": "e.g. 30 Days"},
            {"name": "Clearance Status", "code": "clearance", "placeholder": "e.g. Pending IT Clearance"}
        ],
        "dummy": [
            {"id": 1, "startDate": "N/A", "releaseDate": "N/A", "duration": "Active Employee", "clearance": "No Active Separation", "status": "Active", "createdAt": "2026-01-01"},
        ]
    },
    {
        "dir": "src/modules/EmployeeSelfService/PaySlip/pages",
        "file": "index.tsx",
        "title": "Monthly PaySlips",
        "subtitle": "View and download itemized monthly salary slips, tax breakdown, and deductions.",
        "search": "Search payslips...",
        "fields": [
            {"name": "Pay Month", "code": "month", "placeholder": "e.g. June 2026"},
            {"name": "Basic Pay", "code": "basic", "placeholder": "e.g. $3,500"},
            {"name": "Allowances", "code": "allowance", "placeholder": "e.g. $1,800"},
            {"name": "Net Disbursed", "code": "netPay", "placeholder": "e.g. $4,850"}
        ],
        "dummy": [
            {"id": 1, "month": "June 2026", "basic": "$3,500", "allowance": "$1,800", "netPay": "$4,850", "status": "Generated", "createdAt": "2026-06-30"},
            {"id": 2, "month": "May 2026", "basic": "$3,500", "allowance": "$1,800", "netPay": "$4,850", "status": "Generated", "createdAt": "2026-05-31"},
        ]
    },
    {
        "dir": "src/modules/EmployeeSelfService/Supervisor/pages",
        "file": "index.tsx",
        "title": "Supervisor & Reporting Structure",
        "subtitle": "View immediate reporting manager, line supervisor, and team organizational chart.",
        "search": "Search supervisors...",
        "fields": [
            {"name": "Supervisor Name", "code": "supName", "placeholder": "e.g. David Miller"},
            {"name": "Designation", "code": "designation", "placeholder": "e.g. VP of Engineering"},
            {"name": "Email", "code": "email", "placeholder": "e.g. david@company.com"},
            {"name": "Approval Level", "code": "level", "placeholder": "e.g. Level-1 Approver"}
        ],
        "dummy": [
            {"id": 1, "supName": "David Miller", "designation": "VP of Engineering", "email": "david@company.com", "level": "Primary Supervisor (L1)", "status": "Active", "createdAt": "2026-01-01"},
            {"id": 2, "supName": "Emily Watson", "designation": "HR Director", "email": "emily@company.com", "level": "HR Approver (L2)", "status": "Active", "createdAt": "2026-01-01"},
        ]
    },
    {
        "dir": "src/modules/EmployeeSelfService/SalaryCertificate/pages",
        "file": "index.tsx",
        "title": "Salary Certificate Requests",
        "subtitle": "Request official salary certificates for bank loans, embassy visa, or tax filings.",
        "search": "Search certificate requests...",
        "fields": [
            {"name": "Certificate Purpose", "code": "purpose", "placeholder": "e.g. Bank Loan Application / Visa Application"},
            {"name": "Addressed To", "code": "addressedTo", "placeholder": "e.g. To Whom It May Concern / Bank Manager"},
            {"name": "Issue Date", "code": "issueDate", "placeholder": "e.g. 2026-07-26"}
        ],
        "dummy": [
            {"id": 1, "purpose": "Embassy Visa Application", "addressedTo": "Visa Officer, US Embassy", "issueDate": "2026-06-10", "status": "Issued", "createdAt": "2026-06-08"},
            {"id": 2, "purpose": "Home Loan Processing", "addressedTo": "Branch Manager, City Bank", "issueDate": "2026-07-22", "status": "Issued", "createdAt": "2026-07-20"},
        ]
    }
]

for item in ess_pages:
    os.makedirs(item["dir"], exist_ok=True)
    comp_name = item["title"].split("(")[0].replace("&", "").replace(" ", "").replace("-", "").replace("/", "") + "Page"
    
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
import {{ Plus, Edit, Trash2, RotateCcw, Save, Download, FileText }} from 'lucide-react';
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
                <span className={{`px-2 py-0.5 text-[11.5px] font-bold rounded-full ${{item.status === 'Active' || item.status === 'Approved' || item.status === 'Present' || item.status === 'Generated' || item.status === 'Issued' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}}`}}>
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
                    <option value="Pending">Pending</option>
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
                    <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Enable or disable this entry</p>
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
                    className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[13px] h-9 px-4 font-bold"
                >
                    <Plus size={{15}} />
                    New Request / Entry
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
                title="Create New Requisition / Request"
                size="lg"
                footer={{
                    <>
                        <Button variant="outline" onClick={{() => setIsCreateModalOpen(false)}} className="h-8.5 text-[12.5px]">Cancel</Button>
                        <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-1.5 flex items-center text-[12.5px] h-8.5 px-3.5 font-bold">
                            <Save size={{13}} /> Submit Request
                        </Button>
                    </>
                }}
            >
                <FormContent />
            </Modal>
            
            <Modal
                isOpen={{!!editItem}}
                onClose={{() => setEditItem(null)}}
                title="Edit Requisition Details"
                size="lg"
                footer={{
                    <>
                        <Button variant="outline" onClick={{() => setEditItem(null)}} className="h-8.5 text-[12.5px]">Cancel</Button>
                        <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-1.5 flex items-center text-[12.5px] h-8.5 px-3.5 font-bold">
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
    print(f"Generated ESS page: {file_path}")

print("All ESS Pages generated successfully.")
